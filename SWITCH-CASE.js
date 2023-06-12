
function Ganador(player, player2) {
    let mensaje = "";
  
    switch (player) {
      case "Tijera":
        switch (player2) {
          case "papel":
            mensaje = "tijeras gana a papel. win player";
            break;
          case "Roca":
            mensaje = "Tijeras pierde por roca. win player 2";
            break;
          case "tijera":
            mensaje = "Roca gana a tijera. win player 2";
            break;
          case "tijera":
            mensaje = "nadie gana";
            break;
        }
        break;
      case "Roca":
        switch (player2) {
          case "papel":
            mensaje = "roca pierde por papel. win player 2";
            break;
          case "Roca":
            mensaje = "Empate";
            break;
          case "tijera":
            mensaje = "Roca gana tijera. win player";
            break;
          default:
            mensaje = "player 2 no quiso jugar mas";
            break;
        }
        break;
      case "Papel":
        switch (player2) {
          case "Tijera":
            mensaje = " win player";
            break;
          case "Roca":
            mensaje = "win player";
            break;
          case "Papel":
            mensaje = "Empate";
            break;
          default:
            mensaje = "player 2 no quiere jugar mas";
            break;
        }
        break;
      default:
        mensaje = "pleyer tampoco quiere jugar";
        break;
    }
  
    return mensaje;
  }
  
  
  const resultado = determinarGanador(player, player2);
  console.log(resultado);
  
