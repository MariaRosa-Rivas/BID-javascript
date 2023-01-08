class Ninja{
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log(`El Ninja${this.nombre}`);
    }
    showStats(){
        console.log(`el ninja ${this.nombre} tiene una fuerza de ${this.fuerza} la velocidad de ${this.velocidad} y salud de ${this.salud}`);
    }
    drinkSake(){
        console.log(`La salud de ninja es ahora ${this.salud+10}`);
    }
}

class Sensei extends Ninja{
    constructor(nombre, salud, sabiduria=10){
        super(nombre, salud);
        this.sabiduria=sabiduria;
    }
    speakWisdom (){
        super.drinkSake();
    }
    drinksake(){
        console.log(`Mensaje de sabiduria: ${this.sabiduria}`);
    }
}

let Sensei1 = new Sensei("Maestro Splinter", 200, "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");

Sensei1.fuerza=10;
Sensei1.velocidad=10;
Sensei1.drinksake();
Sensei1.sayName();
Sensei1.showStats();
Sensei1.speakWisdom();

let ninja1 = new Ninja("Lolo", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


