
//Difference between static and non static method
class Car
{
  static number = 10;//static variable
  string = 'welcome to car shop'//non static variable

///static method
  static start()  
  {  
    return "start car"  
  }  
  //non static method
  stop(){
      return" stop car"
  }
}

let myCar=new Car()
console.log(Car.number); //return 10
console.log(myCar.string);//return welcome to car shop
console.log(Car.start());//return start car
console.log(myCar.stop());  //return stop car