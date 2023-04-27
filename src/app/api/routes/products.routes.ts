const { create } = require("../controllers/products.controller")


exports.productsRoutes = (app: any) => {
  app.post("/product", create)   
}