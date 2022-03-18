/*
Muéstrame un animal!:
Crea un menú con una lista de animales.
Permite que el usuario pueda seleccionar el animal.
Muestra por consola un diseño del animal basado en la decisión del usuario.
*/

function mostrarAnimal() {
  while (seleccion != 4) {
    var seleccion = prompt(
      "Selecciona un animal:  1. Perro  2. Gato 3. Conejo  4. Salir "
    );

    switch (seleccion) {
      case "1":
        console.log(`
            __    __
          o-''))_____\\
          "--__/ * * * )
          c_c__/-c____/
          `);
        break;
      case "2":
        console.log(`
           /\_/\
          ( o.o )
           > ^ <
        `);
        break;
      case "3":
        console.log(`
          __    __
          / \\..// \
            ( oo )  
             \__/
         `);
        break;
      case "4":
        break;
    }
  }
}

mostrarAnimal();
