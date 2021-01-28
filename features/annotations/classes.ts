class Vehicle {
    color:string ;

    constructor(color:string){
            this.color=color;
    }
    public drive():void{
        console.log('chugga chugga');
    }
    public honk():void{
        console.log('beep');
    }
}

class Car extends Vehicle{
    num:number;
    constructor(num:number, color:string){
         super(color);
         this.num=num;
    }

     drive():void{
        console.log('vroom chugga');
    }

    driveme():void{
        this.drive();
    }
}

const vehicle = new Car(5,'red');
vehicle.driveme();

