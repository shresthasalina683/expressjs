import express from "express";
const router = express.Router();
const users = [];

//crud users
//get all users
//get /users -> user page
//route param (:id)
router.get("/", (req, res) =>{
   // res.send("<h1>All Users</h1>");
   const query = req.query;
   console.log(query);

    res.status(200).json({
    message: "user fetched",
    success: true,
    date: users,
   //{
   //      _id: 1, 
   //      name: "John Doe",
   //      email: "john@gmail.com"
   //  },
   });
});

//get by id
//users/100 => {id:100}
// /posts/:userId/:postId => /posts/1/2 => {postId:2,userId}

router.get("/:id", (req, res) =>{
   // res.send("<h1>All Users</h1>");
   //req.param => {} => {id:1}
   //console.log(req.params);
   //const id = req.params.id;

   const {id} = req.params;

   const user = users.find((user) => user._id === Number(id));

   if(!user){
res.status(404).json({
    message: "user not found",
    success: true,
    date:null,
   });
   return;
}

res.status(200).json({
   message: "user by id ${id} fetched",
    success: true,
    date:null,
});
});


//create
router.post("/", (req, res) =>{
   // res.send("<h1>User created</h1>");
   //console.log(req.body);
const {name,email,password} = req.body

users.push({
   name,
   email,
   password,
   createdAt:Date.now(),
   _id: users.length +1,
})

   res.status(201).json({
    message: "user created",
    success: true,
    date:users[users.length - 1],
   });
});

//update
router.put("/:id", (req, res) =>{
   // res.send("<h1>User updated</h1>");
      //const id = req.params.id;
      const {id} = req.params;

      const {name,email,password} = req.body

      const index = users.findIndex((user) => user._id === Number(id));

      if(index === -1){
         res.status(404).json({
message: "user not found",
    success: false,
    date:null
         });
         return
      }

      users[index] = {
         ...users[index],
         name,
         email,
         password
      };

      res.status(200).json({
message: "user updated",
    success: true,
    date:users[index],
         });

});


//delete
router.delete("/:id", (req, res) => {
// res.send("<h1>User Deleted</h1>");

const {id} = req.params;
      const index = users.findIndex((user) => user._id === Number(id));

      if(index === -1){
res.status(404).json({
message: "user not found",
    success: false,
    date:null
         });
         return
      }

   users.slice(index,1);
   res.status(200).json({
      message: "user deleted",
    success: true,
    date:null
   });
});

export default router;