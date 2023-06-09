
/*Object*/

var coffieMaker = {
    brand: "moccaMaster",
    on: true,
    volume: 0,
    maxVolume: 10,
    materials: ["glass", "metal", "plastic"],
    colours: ["silver and black", "black", "silver", "white"],
    waterAmount: function(water) {
       coffieMaker.volume = coffieMaker.volume + water
   }
}

coffieMaker.waterAmount(3);
console.log("The water amount is" + " " + coffieMaker.volume + " "+ "dl.");
