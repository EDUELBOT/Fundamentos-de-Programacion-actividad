function resolverEcuacionSegundoGrado(a, b, c) {
    const discriminante = b * b - 4 * a * c;
  
    if (discriminante < 0) {
      return "No existen";
    } else if (discriminante === 0) {
      const x = -b / (2 * a);
      return `Solución única: x = ${x}`;
    } else {
      const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
      return `Soluciones: x1 = ${x1}, x2 = ${x2}`;
    }
  }
  
  
  const soluciones = resolverEcuacionSegundoGrado(a, b, c);
  console.log(soluciones);
  