function greenPlant(name,care,water,light,fertilizer){
    this.name = name;
    this.care = care;
    this.water = water;
    this.light = light;
    this.fertilizer = fertilizer;
}

let monstera = new greenPlant('Monstera deliciosa', 'Easy care', 'Little', 'Half-shadow', 'Average need');
let goldenPothos = new greenPlant('Epipremnum aureum', 'Easy care', 'Little', 'Sun - shadow', 'Average need');
let areca = new greenPlant('Dypsis lutescens', 'Easy care', 'Average need', 'Half-shadow', 'Average need');
let adansonii = new greenPlant('Monstera adansonii', 'Easy care', 'Average need', 'Half-shadow, shadow', 'Average need');
let calathea = new greenPlant('Goeppertia orbifolia', 'Keep soil moist', 'Average need', 'Half-shadow', 'Average need');

$(document).ready(function() {
    function displayPlantInfo(plant) {
      let plantInfo = `<p>Name: ${plant.name}</p>`;
      plantInfo += `<p>Care: ${plant.care}</p>`;
      plantInfo += `<p>Water: ${plant.water}</p>`;
      plantInfo += `<p>Light: ${plant.light}</p>`;
      plantInfo += `<p>Fertilizer: ${plant.fertilizer}</p>`;
      return plantInfo;
    }
  
    $('#monstera').after(displayPlantInfo(monstera));
    $('#pothos').after(displayPlantInfo(goldenPothos));
    $('#areca').after(displayPlantInfo(areca));
    $('#adansonii').after(displayPlantInfo(adansonii));
    $('#calathea').after(displayPlantInfo(calathea));
  });