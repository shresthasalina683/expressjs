

import http from "http";
import express from "express";
import userRoutes from "./routes/user.routes.js"
import productRoutes from "./routes/product.routes.js"

//creating express app instance
const app = express();




//*creating http server
const server = http.createServer(app);

app.use(express.json());
   

//ip -> 198.168.1.1:1112

//home -> get, / => <h1> Home Page</h1>
  //  app.get(path, handler);
app.get("/", (req, res) => {
   // res.send("<h1>Home Page</h1>");
   res.status(200).json({
      message: "Server is up and running"
   })
});

//using routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);




 
server.listen(8081, 'localhost', ()=>{
    //127.0.0.1
    console.log(`Server is running at http://localhost:8081`);
    console.log("press ctrl+c to close the server");
});


//Express js /  nestjs -> framework
//get/users -> handler
//post/users -> handler

//school management
//student, teacher

//http://localhost:8081/users?name=john&page=1&limit=10(? paxadi ko 
//req.query maa aauxa)

//req.url
//req.param -> {}
//req.query -> {name:"john",page:'1',limit:'10'}
//req.body -> {}

//post/users => res.body => {}


   //*REST API
   //REST -> Representational State Transfer 
   //api -> Application Programming Interface

   //constraints
   //*stateless(api stateless hunu paryo, server side maa manage gardaina)
   //client-server architecture 
   //layered architecture
   //client-cdn, proxy server, loadbalancer ... -server
   //cacheable response
   //Cache-control 

   //*uniform interface :
   //route naming
   //use noun
   //use meaningful http methods => GET, POST, PUT, PATCH, DELETE
   //use meaningful response status code -> 
   //100 - 199 -> informational
   //200 - 299 -> success 
   //200 -> ok , 201 -> created
   //300 - 399 -> redirectional
   //400 - 499 -> client side error,, 404
   //400 -> bad request
   //401 -> unauthorized
   //403 -> forbidden
   //404 -> not found
   //500 - 599 -> server side error , 
   //500 -> Internal server error
   //502 -> bad gateway

   //endpoint
   //get /users
   //get /users/1

   //resource
   // dashboard => {}
   //users => json, html, xml
