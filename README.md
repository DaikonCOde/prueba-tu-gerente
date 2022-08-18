# Prueba tecnica de Tu Gerente
Prueba técnica de tu gerente utilizando React y Docker

  ## Reto

  1. Desarrollar usando reactjs un componente de tipo dropdown (o combobox)
  2. Al desplegarlo consultará a un servicio de firebase buscando coincidencias según el texto escrito (o sin filtro, en caso de que no se haya escrito texto).
  3. El modelo en firebase consistirá de los siguientes atributos:
    * 1.- nombre
    * 2.- razón social
    * 3.- nit
    * 4.- teléfono
    * 5.- código
  4. Debe solicitar resultados paginados de 20 en 20, y solo deberá traer la siguiente página cuando se esté scrolleando cerca al final de la lista actual de resultados.
  5. Debe permitir parametrizar por qué atributo del objeto se buscará. La parametrización se debe hacer por código, no en tiempo de ejecución
  6. El primer resultado del dropdown debe ser una opción fija que al darle click levante un pequeño pop-up, parte del componente, que permita agregar un nuevo objeto con el texto ya ingresado, pero permitiendo editarlo antes de guardar también.
  7. El proyecto debe correrse en un contenedor de docker
  8. Adjuntar también dentro del repositorio, capturas de pantalla de la solución funcionando

  ## Comandos
  `` * npm install * ``
  instala las dependencias necesarias
  
  `` * npm start * ``
  inicia la aplicacón
  
  `` *npm run build*  ``
  compila la aplicación
  

  ## Imagenes del reto cumplido
  *Inicio*
  ![Imagen del inicio de la apicaión](https://raw.githubusercontent.com/DaikonCOde/prueba-tu-gerente/main/src/assets/inicio.png)

  *Busqueda realizada*
  ![Imagen del inicio de la apicaión](https://raw.githubusercontent.com/DaikonCOde/prueba-tu-gerente/main/src/assets/buscador-activo.png)

  *Pop-up*
  ![Imagen del inicio de la apicaión](https://raw.githubusercontent.com/DaikonCOde/prueba-tu-gerente/main/src/assets/pop-up.png)

  *Contenedor de docker*
  ![Imagen del inicio de la apicaión](https://raw.githubusercontent.com/DaikonCOde/prueba-tu-gerente/main/src/assets/docker.png)
