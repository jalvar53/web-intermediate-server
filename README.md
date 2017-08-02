# Servidor Web Intermedio

By: José Luis Álvarez Herrera - jalvar53@eafit.edu.co

## Descripción de la aplicación:

Este proyecto consta de un servidor RESTful usando Node.js, Express.js y Mongoose diseñado para ser el intermediario de un
proyecto en Angular 2 (https://github.com/jalvar53/WebProject) y una base de datos MongoDB.

## Componentes:

La aplicación tiene tres carpetas fundamentales: Models, Controllers y Routes.

- Routes: Tiene cada una de las rutas que recibirán los HTTP Requests y cada uno de los metodos subscritos a cada Request.
- Controllers: Tiene todos los métodos que controlan que hacer cuando cada uno de los HTTP Requests es llamado.
- Models: Contiene dos archivos que definen las dos entidades necesarias en la aplicación de Angular 2, uno para el contenido subido a la plataforma y uno para los usuarios.

Para información mas detallada del modelo de datos, rutas y controladores, referirse a: https://github.com/jalvar53/WebProject

## Funcionamiento:

Para poner en ejeución el servidor, en modo de desarrollo se usa nodemon para monitorear cambios y reiniciar automáticamente el servidor:

```
  npm install nodemon
  nodemon server.js
```

Para ponerlo ejecución en modo de pruebas se usa pm2 para ejecutar como servicio el servidor cada vez que se inicia el sistema:

```
  npm install -g pm2
  pm2 start server.js
  pm2 list
  pm2 startup systemd
```

Para ponerlo en ejecución en despliegue se usa ejecuta normalmente con Node.js:

```
  node server.js
```
