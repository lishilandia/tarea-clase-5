class Persona2 {
  constructor(nombre, apellido, edad, genero, intereses) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.intereses = intereses;
  }

  biografia() {
    alert(this.nombre + " " + this.apellido + " tiene " + this.edad + " años de edad. Le interesa " + this.intereses[0] + " y " + this.intereses[1]);
  }

  saludo() {
    alert("Hola mi nombre es " + this.nombre + "!");
  }
}

const persona1 = new Persona2("Darío", "Galdames", 4, "masculino", ["tenis", "bicicleta"]);
console.log("persona 1 ", persona1);
persona1.biografia();
persona1.saludo();
//Tarea 1

function Persona(nombre, apellido, edad, genero, intereses) {
  this.nombreCompleto = {
    nombre: nombre,
    apellido: apellido
  };
  this.edad = edad;
  this.genero = genero;
  this.intereses = intereses;
  this.bio = function () {
    alert(this.nombreCompleto.nombre + '' + this.nombreCompleto.apellido + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
  };
  this.saludo = function () {
    alert('Hola, Soy ' + this.nombre[0] + '. ');
  };
};
const persona2 = new Persona("Lisette", "Pavez", 36, "femenino", ["correr", "musica"]);
console.log("Persona 2", persona2);

//tarea2

let almuerzo = {
  entrada: {
    ensalada: 'lechuga',
    bebestible: 'jugo'
  },
  platoPrincipal: {
    comida: "tallarines",
    bebestible: "agua"
  },
  postre: {
    dulce: "helado",
    salado: "nada"
  },
  
};
alert(almuerzo.entrada.ensalada + ' después ' + almuerzo.platoPrincipal.comida + ' al finalizar ' + almuerzo.postre.dulce + '.');

//Tarea 3

function Auto(marca, puertas, tipo) {
    this.marca = marca;
    this.puertas = puertas;
    this.tipo= tipo;
    this.apagarAuto = function() {
      alert("el auto " + this.marca + " esta apagado");
   };
}
const autoA = new Auto("jaguar", 2, "eléctrico");
const autoB = new Auto("Kia", 4, "bencinero");

autoA.apagarAuto();
autoB.apagarAuto();
