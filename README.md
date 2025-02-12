# Portfolio

## Contenido del repositorio

En este repositorio encontrará el código necesario para hacer funcional este proyecto. En el mismo, se visualizan las carpetas `db` y `portfolio`. Esas carpetas tienen las utilidades de base de datos y del código del proyecto. 
También, junto a estos directorios, encontrá un archivo docker-compose.yml que es el encargado de orquestar la base de datos y le portafolio garantizando que todo se despliegue en orden. Debido a que se cuenta con un archivo `docker-compose.yml` este proyecto en esta forma está preparado para ser ejecutado de forma local en contenedores docker

## Tecnologías utilizadas
- Lenguaje: JavaScript
- Frontend: Next.js, React, CSS, driver.js
- Backend: Node.js, Next.js, Sequelize
- Base de datos: MySQL
- CI/CD: Docker
- Servicios: Cloudinary

## Requisitos para ejecución
1. Si se usa Windows, se debe tener instalado Docker Desktop. En caso contrario, instalar Docker.

2. Tener Git instalado (opcional para clonar el repositorio)

## Ejecución de contenedores

Primeramente, se debe clonar el repositorio en algun directorio de su sistema con el comando `git clone https://github.com/SantiagoIMoyano/Portfolio.git`. 

Si no quiere hacerlo con "Git", puede descrgar un archivo ".zip" desde el repositorio de Github en el siguiente link: `https://github.com/SantiagoIMoyano/Portfolio`. Luego, descomprima el archivo y verá el contenido del proyecto.

Como siguiente paso, si usa Windows, asegurese de tener iniciado y ejecutandose el programa "Docker Desktop", esto es esencial para ejecutar el proyecto.
Si posee otro sistema operativo, este paso no es obligatorio.

Ahora, abra una terminal en su sistema, dentro de la carpeta del proyecto (directorio Portfolio) y ejecute los siguientes comandos en el orden en el que se establecen aquí:

1. `docker-compose build`

2. `docker-compose up -d` si no desea ver los logs de los contenedores, o `docker-compose up` en el caso de que si quiera verlos.

Luego, al desplegarse los contenedores, el portafolio estará disponible en la siguiente dirección: `localhost:3000`

Por último, si ha termiando de explorar el proyecto, puede detener y eliminar los contenedores con el comando: `docker-compose down`