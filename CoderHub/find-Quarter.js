function findQuarter(month) {
  //   if (typeof month !== "number" || month < 0) return "Invalid Number!!";
  //   if (month <= 3) {
  //     return 1;
  //   } else if (month > 3 && month <= 6) {
  //     return 2;
  //   } else if (month > 6 && month <= 9) {
  //     return 3;
  //   } else {
  //     return 4;
  //   }

  if (month >= 1 && month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else if (month <= 12) {
    return 4;
  } else {
    return "Invalid number";
  }

  //   let quarter = "";
  //   switch (month) {
  //     case month <= 3:
  //       quarter = 1;
  //       break;
  //     case month > 3 && month <= 6:
  //       quarter = 2;
  //       break;
  //     case month > 6 && month <= 9:
  //       quarter = 3;
  //       break;
  //     case month > 9 && month <= 12:
  //       quarter = 4;
  //       break;
  //     default:
  //       quarter = "Invalid number";
  //   }

  //   return quarter;

  //*Chat */
  //   let quarter = "";

  // switch (true) {
  //   case month >= 1 && month <= 3:
  //     quarter = 1;
  //     break;

  //   case month > 3 && month <= 6:
  //     quarter = 2;
  //     break;

  //   case month > 6 && month <= 9:
  //     quarter = 3;
  //     break;

  //   case month > 9 && month <= 12:
  //     quarter = 4;
  //     break;

  //   default:
  //     quarter = "Invalid number";
  // }

  // return quarter;
}

console.log(findQuarter(6));
