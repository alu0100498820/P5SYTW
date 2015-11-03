# Grado de Ingeniería Informática

## Práctica 4: Conversor en JavaScript de grados Celsius a Farenheit y viceversa (Uso de iaas.ull.es)

<p align="Center">
  <img src="https://lh3.ggpht.com/Vn9sIUPcCVihrxMATWR_MjCIFuc5quCw-R3UN8Rmoze7rgaBhHdmF2RqjX3x28EJoQ=w300" title="C_Temperaturas." width="150" height="150">
</p>

---
#### *Descripción de la Práctica:*

  + Siguiendo las instrucciones en el repositorio despliegue la práctica anterior Karma, Travis y Web Workers en su máquina virtual del servicio iaas.ull.es.
  + Si no ha usado Sinon.JS en la práctica anterior añada pruebas de mocking con Sinon.JS.
  + Añada en el README.md un pequeño tutorial de como usar y desplegar una aplicación web en iaas.ull.es.

  + La IP dinámica de su máquina virtual no debería cambiar.
  + Publique la URL de despliegue en su máquina además de los enlaces habituales.

> *Enlace a la página personal:*

  * http://alu0100498820.github.io



> *Enlace web:*

  * http://alu0100498820.github.io/P4SYTW


> *Ejecución de Pruebas*

  * http://alu0100498820.github.io/P4SYTW/tests/test_blanket.html


> *Despliegue de la Aplicación en el IAAS*

  * http://10.6.128.95:8080/index.html

> *Ejecución de Travis*

  * https://travis-ci.org/alu0100498820/P4SYTW   [![Build Status](https://travis-ci.org/alu0100498820/P4SYTW.svg?branch=gh-pages)](https://travis-ci.org/alu0100498820/P4SYTW)

---
# TUTORIAL

Lo primero que haremos es entrar en la página del IAAS ([iaas.ull.es](http://iaas.ull.es/ovirt-engine/))
![Sin titulo](imagenes tutorial/i1.png)

A continuación accedemos con nuestro usuario y contraseaña:
 + user: alu0100·····
 + password: ·······

Una vez dentro comprobamos que tenemos instalado una maquina linux (ubuntu)
![Sin titulo](imagenes tutorial/i2.png)

Lo que heremos a continuacion es configurar el con el visor VNC como muestra en la siguiente figura (recordar marcar la opción **noVNC**)
![Sin titulo](imagenes tutorial/i4.png)

Una vez confirurado el apartado anterior y comprobado la version que tengamos de git con el comando:

    $ git --version

Pasamos a instalar el paquete de nodejs con el comando:

    $ sudo apt-get install nodejs

A continuación instalaremos npm para ello bastará con ejecutar:

    $ sudo apt-get install npm

Cuando estemos instalando tanto nodejs como npm nos pedirá unas credenciales que en principio seran **usuario/usuario** pero se nos forzará a cambiar la contraseña ante el primer login

### VPN ULL
#### Poniendo a Funcionar una Aplicación Web NodeJS

Primero averiguaremos la IP de la maquina para poder usar SSH, para ello ejecutamos el comando:

    $ ifconfig

y nos fijamos en ***eth0***, donde aparecera un apartado que pone ***Direc. inet: "IP" ***

![Sin titulo](imagenes tutorial/i6.png)

Una vez tiendo claro cual es nuestra IP generamos nuestra clave privada para poder trabajar con los repositorios en **GitHub**, para ello ejecutamos el comando:

    $ ssh-keygen -t rsa

![Sin titulo](imagenes tutorial/i7.png)

Lugo iremos al directorio ~/.ssh y copiamos la clave del directorio id_rsa.pub, la cual copiaremos en GitHub

![Sin titulo](imagenes tutorial/i8.png)

Como no podemos usar la terminal del IAAS para copiar la calve nos vamos a una terminal de nuestro computador y accedemos mediante SSH

![Sin titulo](imagenes tutorial/i9.png)

luego accedemos al direcorio donde se guardan las claves, copiamos y las pegamos en GitHub .

Una vez terminado con el paso anterior creamos los siguientes directorios

    $ mkdir src
    $ cd src
    $ mkdir sytw
    $ cd sytw

A continuación clonamos el repositorio de la practica con el comando:

    $ git clone <URL>

![Sin titulo](imagenes tutorial/i10.png)

Cuando lo hayamos clonado vamos al fichero ***"static-server.js"*** y hacemos las siguientes modificaciones:

    var static = require('node-static');

    var fileServer = new static.Server('./');

    console.log("Visit http://10.6.128.95:8080/index.html")
    require('http').createServer(function (request, response) {
        request.addListener('end', function () {
            fileServer.serve(request, response);
        }).resume();
    }).listen(8080);

Para finalizar instalamos las dependencias con el comando

    $ npm install

Y luego ejecutamos

    $sudo nodejs static-server.js

![Sin titulo](imagenes tutorial/i11.png)

Para comprobar entramos en un navegador y escribimos la IP para que nos muestre la página (http://10.6.128.95:8080/index.html)

![Sin titulo](imagenes tutorial/i12.png)  
