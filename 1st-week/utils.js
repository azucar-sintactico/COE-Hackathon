function ajax(method,url,complete,error){
    var req = new XMLHttpRequest();
        req.open(method,url);
        req.onload = function(){
            if(req.readyState === req.DONE){
                if(req.status === 200){
                    complete(req.responseText);
                }
            }
        };
        req.onerror = error;
        req.send();
}

function appendChildren(){
    var self = this;
    [].slice.call(arguments).forEach(function(el){
        self.appendChild(el);
    });
}