// Script 
;(function(){

    var req = ajax('GET','./menu.json',function(response){
        init(JSON.parse(response));
    },function(){
        console.log('ERROR',arguments);
    });

    function buildMenu(data){
        var ul = document.createElement('ul');
            ul.className = 'nav nav-tabs nav-justified';
        data.forEach(function(datum,index){
            var pill = document.createElement('li');
                pill.dataset.index = datum.id;
                pill.innerHTML = datum.name;
                pill.className = (index === 0) ? 'active' : '';
                ul.appendChild(pill);
            console.log(datum.name);
        });
        document.getElementsByClassName('menu-container')[0].appendChild(ul);
        return ul;
    }

    function buildContainer(data){
        var container = document.getElementsByClassName('content-container')[0];
        data.forEach(function(datum,i){
            var div = document.createElement('div');
                div.dataset.index = datum.id;
                div.className = (i === 0) ? '' : 'hide';
            var img = document.createElement('img');
                img.className = 'loading';
                img.onload = function(){ img.classList.remove('loading')};
                img.src = datum.picture;
            var address = document.createElement('address');
                address.innerHTML = datum.address;
            var content = document.createElement('p');
                content.innerHTML = datum.content;

                appendChildren.call(div,img,address,content);

            container.appendChild(div);
        });

        return container;
    }

    function init(data){
        var menu = buildMenu(data);
        var container = buildContainer(data);
        bindEvents(menu,container);
    }

    function bindEvents(menu,container){
        [].forEach.call(menu.children,function(li){
            li.addEventListener('click',function(e){
                // querySelector sobre .active seria mas rapido?
                [].forEach.call(menu.children,function(li){ li.classList.remove('active'); });
                this.classList.add('active');
                
                // querySelector sobre :not(hide)?
                [].forEach.call(container.children,function(div){ div.classList.add('hide'); });
                container.children[this.dataset.index].classList.remove('hide');
            });
        });
    }


})(this);