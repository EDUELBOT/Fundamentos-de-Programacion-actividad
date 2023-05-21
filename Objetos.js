const persona = {
    nombre: "edu",
    edad: 19,
    "lugar de origen": "oaxaca"
  };
  
  const propiedad1 = "nombre";
  const propiedad2 = "edad";
  const propiedad3 = "lugar de origen";
  
  console.log(persona[propiedad1]);  // Accediendo a la propiedad 'nombre'
  console.log(persona[propiedad2]);  // Accediendo a la propiedad 'edad'
  console.log(persona[propiedad3]);  // Accediendo a la propiedad 'lugar de origen'
  
  //En conclusión, no es posible acceder a las propiedades de un objeto sin utilizar comillas en la notación de corchetes.
//Las claves de las propiedades deben ser cadenas válidas, ya sea proporcionadas directamente como cadenas literales o mediante variables que contengan cadenas.