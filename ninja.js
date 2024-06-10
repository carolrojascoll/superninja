/* CAROLINA ROJAS COLLANTE */
class Ninja {
    constructor(nombre, salud = 100, velocidad = 3, fuerza = 3) {
      this.nombre = nombre;
      this.salud = salud;
      this.velocidad = velocidad;
      this.fuerza = fuerza;
    }
  
    sayName() {
      console.log(`Nombre del Ninja: ${this.nombre}`);
    }
  
    showStats() {
      console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`);
    }
  
    drinkSake() {
      this.salud += 10;
      console.log(`${this.nombre} bebió sake y ahora tiene ${this.salud} de salud.`);
    }
  }
  
  // Ejemplo de uso
  const ninja1 = new Ninja("Hyabusa");
  ninja1.sayName(); // Salida: Nombre del Ninja: Hyabusa
  ninja1.showStats(); // Salida: Nombre: Hyabusa, Fuerza: 3, Velocidad: 3, Salud: 100
  ninja1.drinkSake(); // Salida: Hyabusa bebió sake y ahora tiene 110 de salud.
  

  
class Sensei extends Ninja {
    constructor(nombre) {
      super(nombre, 200, 10, 10);
      this.sabiduria = 10;
    }
  
    speakWisdom() {
      super.drinkSake();
      console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
  }
  
  // Ejemplo de uso
  const superSensei = new Sensei("Master Splinter");
  superSensei.speakWisdom(); // Salida: "Hyabusa bebió sake y ahora tiene 210 de salud." y luego "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
  superSensei.showStats(); // Salida: Nombre: Master Splinter, Fuerza: 10, Velocidad: 10, Salud: 210