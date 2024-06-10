const fs = require('fs').promises;
const express = require('express');
const ProductManager = require('./classes/ProductManager');
const CartManager = require('./classes/CartManager');
const productsRouter = require('./routes/productRoutes');
const cartsRouter = require('./routes/cartRoutes');

const main = async () => {
    const productManager = new ProductManager("./src/data/products.json");
    const cartManager = new CartManager("./src/data/carts.json");

    const flagFilePath = './src/data/products_initialized.flag';

    let flagExists;
    try {
        flagExists = await fs.readFile(flagFilePath, 'utf-8');
    } catch (error) {
        flagExists = false;
    }

    if (!flagExists) {
        for (let i = 1; i <= 10; i++) {
            await productManager.addProduct(
                `Producto ${i}`,
                `Descripción del producto ${i}`,
                100 + i,
                [],
                `code${i}`,
                10 + i,
                `Categoría ${i}`
            );
        }
        await fs.writeFile(flagFilePath, 'initialized');
    }

    await productManager.loadProducts();
    await cartManager.loadCarts();

    const PORT = 8080;
    const app = express();

    app.use(express.json());

    app.use("/api/products", productsRouter(productManager));
    app.use("/api/carts", cartsRouter(cartManager));

    app.listen(PORT, () => {
        console.log("Servidor escuchando en el puerto " + PORT);
    });
};

main();
