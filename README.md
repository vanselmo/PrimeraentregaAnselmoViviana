# Descripción del proyecto

Este proyecto es una aplicación de gestión de productos y carritos desarrollada en Node.js y Express. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) tanto en productos como en carritos.

## Inicialización del proyecto

El proyecto se inicializa con 10 productos precargados. Estos productos se utilizan para realizar pruebas con los diferentes endpoints proporcionados en la consigna.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias del proyecto utilizando npm:

   ```bash
   npm install
   ```

## Uso
Para ejecutar la aplicación localmente, simplemente utiliza el siguiente comando:

   ```bash
   npm run dev
   ```
Esto iniciará el servidor en el puerto 8080. Puedes acceder a la API utilizando las rutas definidas en los archivos de rutas.

### Endpoints disponibles

- **GET /api/products**: Obtiene todos los productos.
- **GET /api/products/:pid**: Obtiene un producto específico por su ID.
- **POST /api/products**: Agrega un nuevo producto.
- **PUT /api/products/:pid**: Actualiza un producto existente.
- **DELETE /api/products/:pid**: Elimina un producto por su ID.

- **POST /api/carts**: Crea un nuevo carrito.
- **GET /api/carts/:cid**: Obtiene un carrito específico por su ID.
- **POST /api/carts/:cid/product/:pid**: Agrega un producto a un carrito existente por sus IDs.

Recuerda reemplazar `:pid` y `:cid` con los IDs correspondientes.