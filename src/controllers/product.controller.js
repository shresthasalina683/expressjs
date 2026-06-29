export const getAll = (req, res) =>{
   // res.send("<h1>All product</h1>");
   

 res.status(200).json({
    message: "products fetched",
    success: true,
    date:products,
   });
};

export const getById = (req, res) =>{
   // res.send("<h1>All products</h1>");
//const id = req.params.id;

 const {id} = req.params;

   const product = products.find((product) => product._id === Number(id));

   if(!product){
res.status(404).json({
    message: "product not found",
    success: true,
    date:null,
   });
   return;
}

res.status(200).json({
   message: "product by id ${id} fetched",
    success: true,
    date:null,
});
};


export const create = (req, res) =>{
   // res.send("<h1>Product created</h1>");
   const {name,price,brand} = req.body

products.push({
   name,
   price,
   brand,
   createdAt:new Date(Date.now()),
   _id: products.length +1,
})

 res.status(201).json({
    message: "product created",
    success: true,
    date:product[products.length - 1]
   });
};

export const update =  (req, res) =>{
   // res.send("<h1>Product updated</h1>");
//const id = req.params.id;
const {id} = req.params;

      const {name,price,brand} = req.body

      const index = products.findIndex((product) => product._id === Number(id));

 
      if(index === -1){
         res.status(404).json({
message: "products not found",
    success: false,
    date:null
         });
         return
      }

      products[index] = {
         ...products[index],
         name,
         price,
         brand
      };

      res.status(200).json({
message: "products updated",
    success: true,
    date:products[index],
         });

};

export const remove = (req, res) => {
   // res.send("<h1>Product Deleted</h1>");
const {id} = req.params;
      const index = products.findIndex((product) => product._id === Number(id));

      if(index === -1){
res.status(404).json({
message: "product not found",
    success: false,
    date:null
         });
         return
      }

   products.slice(index,1);
   res.status(200).json({
      message: "product deleted",
    success: true,
    date:null
   });
};



