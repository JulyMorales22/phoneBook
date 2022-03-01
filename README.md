# phoneBook
# Link para importar el postman con las pruebas de Phone Book
# https://www.getpostman.com/collections/24382044006477ff3bcb

 Guia para utilizar la app Phonebook 

1. clonar el repositorio 

2. ejecutar el comando npm i para instalar las librerías necesarias

** La estructura **

Tenemos la carpeta controllers que tiene toda la lógica de la aplicación con las entidades contact y phoneBook, tenemos la carpeta db que tiene la conexión a la base de datos, la carpeta middlewares donde tenemos las validaciones necesarias para el optimo funcionamiento de la aplicación, en la carpeta models tenemos el esquema referente a la base de datos en el mongoDB, en la carpeta routes es la encarga del redireccionamiento a los métodos (controllers) y validaciones (middlewares) para realizar el CRUD, services complementa la lógica de negocio del controllers, el archivo .env tiene la configuración de las variables de entorno necesarias y finalmente el archivo index es el encargado de re-direccionar a los routes correspondientes según el servicio requerido por el frontend.



Todas las pruebas necesarias fueron realizadas por medio de la aplicación postman, de la cual adjuntamos el link



Funcionalidades para directorio

1. Crear un directorio

2. puedes listar los directorios existentes en tu base de datos

Nota: todo esto se encuentra en controllers - phoneBook.js



Funcionalidades para contactos

1. a partir de un directorio previamente creado, podras agregar contactos. Tiene la validación de que solo se puede agregar 10 contactos por directorio(en la carpeta services - contact.js - phoneBookFull)

2. Al crear un contacto se tiene la validación de que el nombre no se puede repetir en el mismo directorio (middlewares - contact.js - existingContact)

3.Validamos también que el directorio ingresado exista (middlewares - phoneBook.js - getPhoneBookIdByName)

4. Validamos que los id ingresados, cumplas con la estructura de Id mongoDB (middlewares - validId.js)

5. en controllers - contact.js se encuentran los métodos CRUD para esta entidad.
