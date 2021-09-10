/* comandos para el git

DENTRO DE LA CARPETA DESEADA
----------------------------------
git init = inicia el git en la carpeta que te encuentres
git add = añade archivos
git commit = commitea los cambios hechos
git status // realiza un seguimiento de los archivos 

git log

--------------------------------
git add . (git add espacio punto) agrega todos los archivos
git commit -m "mensaje" // comitea los cambios hechos
git push origin master //envia los cambios al repositorio remoto
git status // realiza un seguimiento de los estados de los archivos



// COMANDOS MAS UTILIZADOS

ENLAZAR REPO REMOTO CON REPO LOCAL.. $git remote add origin urlDelRepoRemoto

DAR SEGUIMIENTO A TODOS LOS ARCHIVOS.. $git add .

DAR SEGUIMIENTO A UN ARCHIVO.. $git add "nombreDelArchivo" (sin comillas)

COMITEAR UN ARCHIVO.. $git commit -m"mensaje con el que se guarda el commit"(con comillas nombre del commit)

PUSHEAR (SUBIR A REPO REMOTO).. $git push origin master (nombre de la rama, la rama master es la rama por defecto principal)

VER LISTA DE COMMITS.. $git log

----------------------------------

OPERAR CON BRANCH//

CREAR RAMAS.. $git branch nombredelarama

INGRESAR EN LA RAMA CREADA.. $git checkout nombredelarama (recuerden que para ingresar a cualquier rama deben realizar la misma operacion)

VOLVER A LA RAMA MASTER.. $git checkout master

BORRAR RAMAS.. $git branch -d nombredelarama
recordar borrar la rama desde el repositorio de la página de git

COMBINAR RAMAS.. $git merge nombredelaramaAcombinar
(recuerden que para hacer el merge deben posicionarse en la rama en la cual van a cargar los cambios realizados, luego hacer un $git add . seguido de $git commit y $git push origin + nombre de la rama mergeada)

----------------------------------

METODO DE TRABAJO//

**Cada miembro del equipo debe trabajar en una rama individual con su nombre de referencia;
**Cada merge que hagamos de  prueba debe realizarse sobre la rama develop previamente creada;
**al ingresar a cada rama NO OLVIDARSE hacer un $git pull nombredelarama
**al salir de cada rama NO OLVIDARSE hacer un push de los cambios realizados $git push origin nombredelarama
**una vez probado los cambios en la rama develop mergear los cambios de develop a master
**CHEQUEAR SIEMPRE EL NOMBRE DE LA RAMA EN QUE ESTAMOS TRABAJANDO PARA EVITAR ERRORES**
**$git fetch para sincronizar las ramas existentes en el repo remoto al repo local







*/
