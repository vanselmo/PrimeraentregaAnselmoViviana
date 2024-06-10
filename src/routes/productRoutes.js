const express = require('express');
const productsRouter = express.Router();

module.exports = (productManager) => {
    productsRouter.get("/", async (req, res) => {
        const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
        const products = await productManager.getProducts(limit);
        res.json(products);
    });

    productsRouter.get("/:pid", async (req, res) => {
        const id = req.params.pid;
        const product = productManager.getProductById(id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).send("Producto no encontrado");
        }
    });

    productsRouter.post("/", async (req, res) => {
        const { title, description, price, thumbnails, code, stock, category } = req.body;

        const newProduct = await productManager.addProduct(title, description, price, thumbnails, code, stock, category);
        if (newProduct) {
            res.status(201).json(newProduct);
        } else {
            res.status(400).send("Error: no se pudo agregar el producto.");
        }
    });

    productsRouter.put("/:pid", async (req, res) => {
        const id = req.params.pid;
        const updatedFields = req.body;
        await productManager.updateProduct(id, updatedFields);
        res.send("Producto actualizado");
    });

    productsRouter.delete("/:pid", async (req, res) => {
        const id = req.params.pid;
        await productManager.deleteProduct(id);
        res.send("Producto eliminado");
    });

    return productsRouter;
};
