class Appliance{
  constructor(weight, height, powerCon){
  
  this.state = 'OFF';
  this.weight = weight;
  this.height = height;
  this.powerCon = powerCon;
    
  }
  
  stateSwitch(){
  
    if(this.state === 'ON'){
      this.state = 'OFF';
    } else{
      this.state = 'ON';
    }
  }
  
  getState(){
    return this.state
  }
  
}

class Lamp extends Appliance{
  
  constructor(weight, height, powerCon, brightness){
  
  super(weight, height, powerCon);
  this.brightness = brightness;
  }
  
  setBrightness(brightness){
  this.brightness = brightness
  }
  
  getBrightness(){
  return this.brightness
  }
  
}

class Fan extends Appliance{
  
  constructor(weight, height, powerCon, speed){
   
  super(weight, height, powerCon);
  this.speed = speed;
  }
  
  setSpeed(speed){
  this.speed = speed
  }
  
  getSpeed(){
  return this.speed
  }
  
}

class VacuumCleaner extends Appliance{
  
  constructor(weight, height, powerCon, suctionPower){
   
  super(weight, height, powerCon);
  this.suctionPower = suctionPower;
  }
  
  setSuctionPower(suctionPower){
  this.suctionPower = suctionPower
  }
  
  getSuctionPower(){
  return this.suctionPower
  }
  
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


const allAppliance = [lamp1, lamp2, lamp3, fan1, fan2, vac1, vac2];

logTotalPower(allAppliance);

lamp1.stateSwitch();
lamp2.stateSwitch();
fan2.stateSwitch();
vac1.stateSwitch();
vac2.stateSwitch();

logTotalPower(allAppliance);
