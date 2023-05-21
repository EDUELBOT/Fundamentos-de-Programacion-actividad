function determinarGanador(jugador1, jugador2) {
    let mensaje = "";
  
    switch (jugador1) {
      case "T":
        switch (jugador2) {
          case "T":
            mensaje = "Empate";
            break;
          case "R":
            mensaje = "Tijeras son aplastadas por roca. Gana el jugador 2";
            break;
          case "P":
            mensaje = "Roca es cubierta por papel. Gana el jugador 1";
            break;
          default:
            mensaje = "Jugador 2 seleccionó una opción inválida";
            break;
        }
        break;
      case "R":
        switch (jugador2) {
          case "T":
            mensaje = "Tijeras son aplastadas por roca. Gana el jugador 1";
            break;
          case "R":
            mensaje = "Empate";
            break;
          case "P":
            mensaje = "Roca es cubierta por papel. Gana el jugador 2";
            break;
          default:
            mensaje = "Jugador 2 seleccionó una opción inválida";
            break;
        }
        break;
      case "P":
        switch (jugador2) {
          case "T":
            mensaje = "Roca es cubierta por papel. Gana el jugador 1";
            break;
          case "R":
            mensaje = "Papel cubre roca. Gana el jugador 1";
            break;
          case "P":
            mensaje = "Empate";
            break;
          default:
            mensaje = "Jugador 2 seleccionó una opción inválida";
            break;
        }
        break;
      default:
        mensaje = "Jugador 1 seleccionó una opción inválida";
        break;
    }
  
    return mensaje;
  }
  
  
  const resultado = determinarGanador(jugador1, jugador2);
  console.log(resultado);
  