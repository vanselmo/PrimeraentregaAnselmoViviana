const express = require('express');
const cartsRouter = express.Router();

module.exports = (cartManager) => {
    cartsRouter.post("/", async (req, res) => {
        const newCart = await cartManager.createCart();
        res.status(201).json(newCart);
    });

    cartsRouter.get("/:cid", async (req, res) => {
        const id = req.params.cid;
        const cart = await cartManager.getCartById(id);
        if (cart) {
            res.json(cart);
        } else {
            res.status(404).send("Carrito no encontrado");
        }
    });

    cartsRouter.post("/:cid/product/:pid", async (req, res) => {
        const cartId = req.params.cid;
        const productId = parseInt(req.params.pid);
        const cart = await cartManager.addProductToCart(cartId, productId);
        if (cart) {
            res.json(cart);
        } else {
            res.status(400).send("Error: no se puede agregar el producto al carrito");
        }
    });

    return cartsRouter;
};
