const Hapi = require('hapi');

const server = new Hapi.Server({
    host:"localhost",
    port:3000
});

server.start(error => {
    if(error){
        console.log(error);
    }
    console.log("listening on "+server.info.url);
});

server.route({
    method:"GET",
    path:"/",
    handler: (request, response) =>{
        return "Hello world!";
    }
});