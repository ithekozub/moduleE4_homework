function Appliance(weight, height, powerCon){
  
  this.state = 'OFF',
  this.weight = weight,
  this.height = height,
  this.powerCon = powerCon
 
}

Appliance.prototype.stateSwitch = function(){
  
    if(this.state === 'ON'){
      this.state = 'OFF';
    } else{
      this.state = 'ON';
    }
  }

Appliance.prototype.getState = function(){
    return this.state
  }

function Lamp(weight, height, powerCon, brightness){
  this.weight = weight,
  this.height = height,
  this.powerCon = powerCon,
  this.brightness = brightness
}

Lamp.prototype = new Appliance();
Lamp.prototype.setBrightness = function(brightness){
  this.brightness = brightness
}
Lamp.prototype.getBrightness = function(){
  return this.brightness
}

function Fan(weight, height, powerCon, speed){
  this.weight = weight,
  this.height = height,
  this.powerCon = powerCon,
  this.speed = speed
}

Fan.prototype = new Appliance();
Fan.prototype.setSpeed = function(speed){
  this.speed = speed
}
Fan.prototype.getSpeed = function(){
  return this.speed
}

function VacuumCleaner(weight, height, powerCon, suctionPower){
  
  this.weight = weight,
  this.height = height,
  this.powerCon = powerCon,
  this.suctionPower = suctionPower
}


VacuumCleaner.prototype = new Appliance();
VacuumCleaner.prototype.setSuctionPower = function(suctionPower){
  this.suctionPower = suctionPower
}
VacuumCleaner.prototype.getSuctionPower =function(){
  return this.suctionPower
}


function countPower(arr){
  
  totalPower = 0
  
  for(i = 0; i < arr.length; i++){
    if(arr[i].state === 'ON'){
      totalPower += arr[i].powerCon;     
    }   
  }
  return totalPower
}


function logTotalPower(arr){
  console.log(`Потребляемая мощность всех включенных приборов - ${countPower(arr)} ватт/час.`);
}


const lamp1 = new Lamp(100, 70, 160, 100);
const lamp2 = new Lamp(101, 79, 160, 97);
const lamp3 = new Lamp(101, 79, 133, 61);
const fan1 = new Fan(97, 61, 300, 88);
const fan2 = new Fan(52, 43, 115, 79);
const vac1 = new VacuumCleaner(2500, 61, 1800, 151);
const vac2 = new VacuumCleaner(1600, 43, 1600, 124);

const allAppliance = [lamp1, lamp2, lamp3, fan1, fan2, vac1, vac2]

logTotalPower(allAppliance);

lamp1.stateSwitch();
fan2.stateSwitch();
vac1.stateSwitch();
vac2.stateSwitch();

logTotalPower(allAppliance);
