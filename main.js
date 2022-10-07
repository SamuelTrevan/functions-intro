// const fillGasTank = (gallons) => {
//   if (gallons > 15) {
//     console.log("You cannot add this much gas to the tank");
//   } else {
//     console.log(`I filled the tank with ${gallons} gallons of gas`);
//   }
// };
// fillGasTank(14);
// fillGasTank(16);

const fillGasTank = (gallons) => {
  if (gallons > 15) {
    console.log(
      `You cannot add ${gallons} gallons to the tank. The tank can only hold 15 gallons`
    );
  } else {
    console.log(`I filled the tank with ${gallons} gallons of gas`);
  }
};
fillGasTank(14);
fillGasTank(16);
