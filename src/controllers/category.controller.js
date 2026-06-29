export const getAll = (req, res) =>{
   

 res.status(200).json({
    message: "category fetched",
    success: true,
    date:category,
   });
};

export const getById = (req, res) =>{
   

 const {id} = req.params;

   const categories = category.find((categories) => categories._id === Number(id));

   if(!category){
res.status(404).json({
    message: "category not found",
    success: true,
    date:null,
   });
   return;
}

res.status(200).json({
   message: "category by id ${id} fetched",
    success: true,
    date:null,
});
};


export const create = (req, res) =>{
   const {name} = req.body

category.push({
   name,
   createdAt:new Date(Date.now()),
   _id: category.length +1,
})

 res.status(201).json({
    message: "category created",
    success: true,
    date:categories[category.length - 1]
   });
};

export const update =  (req, res) =>{
  
const {id} = req.params;

      const {name} = req.body

      const index = category.findIndex((categories) => categories._id === Number(id));

 
      if(index === -1){
         res.status(404).json({
message: "category not found",
    success: false,
    date:null
         });
         return
      }

      category[index] = {
         ...category[index],
         name,
      };

      res.status(200).json({
message: "category updated",
    success: true,
    date:category[index],
         });

};

export const remove = (req, res) => {
const {id} = req.params;
      const index = category.findIndex((categories) => categories._id === Number(id));

      if(index === -1){
res.status(404).json({
message: "category not found",
    success: false,
    date:null
         });
         return
      }

   category.slice(index,1);
   res.status(200).json({
      message: "category deleted",
    success: true,
    date:null
   });
};



