export function colorsFun(color) {
  let colorCode = "";
  switch (color) {
    case "green":
      colorCode = "#0ecd33";
      break;
    case "yellow":
      colorCode = "#ffc61a";
      break;
    case "violet":
      colorCode = "#8115ff";
      break;
    case "orange":
      colorCode = "#ef7317";
      break;
    case "pink":
      colorCode = "#ff69b4";
      break;
    case "grey":
      colorCode = "#8a8a8a";
      break;
    case "blue":
      colorCode = "#2196f3";
      break;
    case "purple":
      colorCode = "#800080";
      break;
    case "aqua":
      colorCode = "#00FFFF";
      break;
      case "red":
        colorCode = "red";
        break;
    default:
      colorCode = "#333333";
  }
  return colorCode;
}
