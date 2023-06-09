
/*Object*/

var coffieMaker = {
    brand: "moccaMaster",
    colour: "black",
    on: true,
    volume: 0,
    maxVolume: 10,
    materials: ["glass", "metal", "plastic"],
    waterAmount: function(water) {
       coffieMaker.volume = coffieMaker.volume + water
   }
}

coffieMaker.waterAmount(3);
console.log("The water amount is" + " " + coffieMaker.volume + " "+ "dl.");
