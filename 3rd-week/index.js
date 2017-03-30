const httpService = {
  usersService : 'https://jsonplaceholder.typicode.com/users',
  postService : 'https://jsonplaceholder.typicode.com/posts?userId=',
  fetchUsers : function() {
    return fetch(this.usersService)
  },
  fetchPosts : function(id) {
    return fetch(this.postService + id)
  }
}


const getData = new Promise((resolve, reject) => {
  httpService.fetchUsers()
    .then(function(response) { return response.json() })
    .then(function(users) {
      originalPromise = new Promise((resolve) => resolve(users))
      const postsPromises = [originalPromise].concat(
        users.map((user) => httpService.fetchPosts(user.id))
      )
      return Promise.all(postsPromises)
    })
    .then((responses) => {
      return Promise.all(
        responses.map((response) => {
          if (response.json) return response.json(); else return response;
        }))
    })
    .then((data) => {
      formattedData = data[0].map((user) => {
        user.relatedPosts = data[user.id]
        return user;
      })
      resolve(formattedData);
    })
})

const Renderer = function(data) {
  const container = document.querySelector('.content-container')
  data.forEach((user) => {
    const userContainer = document.createElement('div')
    const name = document.createElement('h1')
    const postsList = document.createElement('ul')
    name.innerHTML = user.name
    user.relatedPosts.forEach((postData) => {
      const post = document.createElement('li')
      postsList.appendChild(post)
      post.innerHTML = postData.title
    })
    userContainer.appendChild(name) 
    userContainer.appendChild(postsList)
    container.appendChild(userContainer)
  })
}

getData.then(function(data) {
  Renderer(data)
})