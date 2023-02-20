# Aplicación de búsqueda de usuarios de GitHub
Este proyecto utiliza la API Rest pública de GitHub para mostrar una lista de usuarios y la información de sus perfiles. La aplicación está construida con Angular 8 y Bootstrap, y utiliza FontAwesome para el manejo de iconos.

Requisitos
Node.js (versión 12 o superior)
Angular CLI (versión 8 o superior)
Instalación
Para instalar la aplicación, sigue los siguientes pasos:

Clona este repositorio en tu máquina local.
Abre una terminal y navega hasta el directorio raíz del proyecto.
Ejecuta el siguiente comando para instalar las dependencias:
Copy code
npm install
Uso
Para iniciar la aplicación, ejecuta el siguiente comando en la terminal:

Copy code
ng serve
La aplicación estará disponible en la dirección http://localhost:4200/.

Funcionalidades
La aplicación cuenta con las siguientes funcionalidades:

Campo de búsqueda de usuarios: En la pantalla principal de la aplicación, se puede ingresar el nombre de un usuario de GitHub y buscar su información.
Mostrar los primeros 10 usuarios: La aplicación muestra los primeros 10 usuarios del resultado de la búsqueda, incluyendo su nombre de usuario y su id.
Navegación a perfil de usuario: Al hacer clic en el nombre de usuario de un registro, se navega a una ruta que muestra la información del usuario seleccionado.
Componente de perfil de usuario: El componente de perfil de usuario muestra la información del usuario seleccionado, incluyendo su imagen, su nombre de usuario, su nombre completo, su descripción y el número de seguidores.
Validador de texto de búsqueda: La aplicación valida que el texto de búsqueda de usuarios sea de un mínimo de 4 caracteres.
Validador de palabra prohibida: La aplicación no permite realizar la búsqueda de la palabra "doublevpartners".
Gráfico de barras: La aplicación utiliza la librería Chart.js para crear un gráfico de barras que muestra el número de seguidores de los 10 primeros usuarios.
Componente de mensajes de error: La aplicación incluye un componente para mostrar mensajes de error en toda la aplicación.
Método con Observables y Promises: El servicio que obtiene los datos del API incluye un método que utiliza Observables y otro que utiliza Promises.
Guard de score mínimo: La aplicación incluye un Guard que no permite consultar el perfil de usuarios con un 'score' menor a 30.0.
Contribuir
Si quieres contribuir a este proyecto, por favor sigue los siguientes pasos:

Haz un fork de este repositorio.
Crea una rama con tus cambios: git checkout -b mi-rama.
Realiza tus cambios y haz commit de los mismos: git commit -am "Agrego mi funcionalidad".
Haz push de la rama a tu repositorio: git push origin mi-rama.
Crea un pull request en este repositorio.
Licencia
Este proyecto se encuentra bajo la Licencia MIT. Consulta el archivo LICENSE.md para más información.
