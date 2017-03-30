(function(){
	var users = "https://jsonplaceholder.typicode.com/users"
	var post_users = "https://jsonplaceholder.typicode.com/posts?userId=";
	var allUsers = [],
		oneUser = {};

	fetch(users)
		.then(getAllUser)
		.then(getUser)
		.then(postsUser)
		.then(drawPost);

	function getAllUser(response){
		return response.json();
	}

	function getUser(user){
		var promesas = [];
		for (i in user){
			allUsers.push(user[i]);
			promesas.push(fetch(post_users + allUsers[i].id));
		}
		return Promise.all(promesas);
	}

	function postsUser(post){
		var posts = []
		for (i in post) posts.push(post[i].json())
		return Promise.all(posts);
		//return post.json();
	}

	function drawPost(res){
		console.log(res);
	}

})();



















































































/*fetch(users)
		.then(function(response) {
			return response.json()
		}).then(function(json) {
			for (i in json){
				oneUser.user=json[i];
				fetch(post_users + json[i].id)
					.then(function(response){
						return response.json()
					}).then(function(json){
						oneUser.post=json;
						//console.log(json)
					})
					allUsers.push(oneUser);
					console.log(oneUser);
			}
			//console.log('parsed json', json)
		}).catch(function(ex) {
			console.log('parsing failed', ex)
		});*/