class Ninja{
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log(`${this.nombre}`);
    }
    showStats(){
        console.log(`el ninja ${this.nombre} tiene una fuerza de ${this.fuerza} la velocidad de ${this.velocidad} y salud de ${this.salud}`);
    }
    drinkSake(){
        console.log(`La salud de ninja es ahora ${this.salud+10}`);
    }
}
let ninja1 = new Ninja("Lolo", 10);
console.log(ninja1);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();