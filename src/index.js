

import http from "http";
import express from "express";
import userRoutes from "./routes/user.routes.js"
import productRoutes from "./routes/product.routes.js"
import categoryRoutes from "./routes/category.routes.js"

//creating express app instance
const app = express();

//*creating http server
const server = http.createServer(app);

//middleware 
const middleware = (req,res,next)=>{
   console.log("middleware 1");
   next();
};

app.use(middleware);


//using middleware
//app.use(middleware);
app.use((req,res,next)=>{
   console.log("mid 2");
   req.user = {
      name: "John Doe",
   };
next();
});

app.use((req,res,next)=>{
   console.log("mid 3");
   console.log(req.user);
   if(req.user){
      next();
   }else{
res.status(401).json({
   message:"Unauthorized. Access denied",
});
   };
//    res.status(200).json({
//       message:"Response from middleware 3",
//    });
// //next();
});



app.use(express.json()); //express ko include middleware
   

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
app.use("/category", categoryRoutes);



 
server.listen(8081, 'localhost', ()=>{
    //127.0.0.1
    console.log(`Server is running at http://localhost:8081`);
    console.log("press ctrl+c to close the server");
});

app.use((err,req,res,next) => { 
   console.log("error handler");
   console.log(err);
   res.status(err?.statusCode ?? 500).json({
      message: err?.message ?? "something went wrong",
      success: false,
      data: null,
   });
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


   //middleware(imp topic):
   //It is a function execute between req-res cycle.
   //1. has access to req obj, res obj & next function
   //2. can execute own logic 
   //3. can modify req and res object
   //4. can end req-res cycle

//middleware use garni ho bhanya next call garnu parxa
//kunai pani middleware la pass garxa bhanya tyo request controller samma na pugin jal aru la call
//garna milxa matlab mid1 la update garako mid2, mid3 -midN samma la use garna milxa 

   //types of middleware
   //custom mid
   //1. Application level middleware(every logic maa use garnu parni bela yo use hunxa)
   //2. route level middleware(jastai ki get maa matra ki create, post maa use hune application
   //ko jasto sabai maa na hune
   //3. error handle middleware(error handle in global level): (err,req,res,next) =>{ }
   //req -> mid1->mid2->mid3->midN -> controller (yesma next call garda jun tes paxi ta)
   //order matter gardaina error maa
//error handle garda hamla 4otai rakhnu parni hunxa (err,req,res,next)

   //third party middleware(file download garna multer, this is also a middleware)

   //mongodb