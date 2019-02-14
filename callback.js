/*

*/
class Persona {
  constructor(nombre,apellido,altura) {
    this.nombre = nombre
    this. apellido = apellido
    this.altura = altura
    return this
  }

  saludar(fn){
    var { nombre, apellido } = this
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    if(fn){
      fn(nombre, apellido)
    }
  }

  soyAlto(){
    return this.altura > 1.8
  }
}

class Desarollador extends Persona{
  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura)
  }

  saludar(fn){
    var { nombre, apellido } = this
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarollador`)
  }
  if(fn){
    fn(nombre, apellido, true)
  }
}

function responderSaludo(nombre, apellido, esDev){
  console.log(`Buenos Dias ${nombre} ${apellido} no sabia que eras dev`)
  if(esDev){
    console.log("No sabia que eras dev")
  }
} 

var sacha = new Persona('Sacha', 'Lifszyc',1.72)
var erika = new Persona('Erika', 'Luna',1.62)
var arturo = new Desarollador('Arturo', 'Martinez',2.0)

sacha.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)

/*
*/