# Bienvenido a PerfuBona

Es un proyecto de carrito de compras para el curso de React de Coderhouse.


# Clonar Proyecto

git clone https://github.com/emibona/idea-bonalumi.git

# Versiones utilizadas
Node: v14.15.5


# Características

 - Carrito sincronizado con LocalStorage, no se borra con recarga de pagina o cierre de sesión.
 - Login con Firebase Correo electrónico/contraseña y se guarda en usuario LocalStorage, estuve leyendo sobre un hook de FirebaseAuth pero no lo usé, guardo los datos del usuario en LocalStorage.
 - Se descuenta stock cuando se guarda el pedido y también se verifica que no puedas agregar mas cantidad que la que hay stock.
 - Cuando se agrega un producto al carrito se verifica si ya esta agregado para sumarle unidades y no generar mas de una vez el mismo producto.
 - Incluye sección Mis Pedidos don se busca por email todos los pedidos que perteneces al usuario logueado.

# Instalar dependencias
npm install
**Recomiendo leer el package.json**

# Navegación
![enter image description here](https://www.coinsasalud.com.ar/images/navegacion.gif)
