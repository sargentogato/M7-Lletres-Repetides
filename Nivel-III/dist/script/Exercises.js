import Drawer from "./Drawer.js"

export default class Excercises {
  constructor() {
    this.drawer = new Drawer()
    this.arrayName = ["M", "A", "R", "L", "O", "N"]
    this.vowels = ["A", "E", "I", "O", "U"]
    this.arrayCognom = ["V", "E", "L", "A", "S", "Q", "U", "E", "Z"]
    this.message = ""
    this.eventTriggered
  }

  cleanMessage() {
    this.message = ""
  }
  /*
   * Ejercicio 1
   */

  taskOne() {
    for (const arrayElement of this.arrayName) {
      this.message += `${arrayElement}`
    }
    this.drawer.displayTask(this.eventTriggered, this.message)
  }

  /*
   * Ejercicio 2
   */

  taskTwo() {
    for (const arrayElement of this.arrayName) {
      const vowelMessage = "He encontrado la VOCAL"
      const consonantMessage = "He encontrado la CONSONANTE"
      const callback = (letter) => letter === arrayElement

      if (this.vowels.some(callback)) {
        this.message = `${vowelMessage} ${arrayElement}`
        this.drawer.displayTask(this.eventTriggered, this.message)
      } else {
        this.message = `${consonantMessage} ${arrayElement}`
        this.drawer.displayTask(this.eventTriggered, this.message)
      }
    }
  }

  /*
   * Ejercicio 3
   */

  taskThree() {
    let result = {}

    this.arrayName.map((element) => {
      if (!result[element]) {
        result[element] = 1
      } else {
        result[element]++
      }
    })
    this.message = JSON.stringify(result)

    this.drawer.displayTask(this.eventTriggered, this.message)
  }

  /*
   * Ejercicio 4
   */
  taskFour() {
    const fullName = [this.arrayName, this.arrayCognom].join('" "')
    this.message = fullName
    this.drawer.displayTask(this.eventTriggered, this.message)
  }

  /*
   * Ejercicio Nivel II
   */
  taskFive() {
    let str =
      "Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email"

    let reg = /\b([^\s]+@[^\s]+)\b/g
    const emailList = str.match(reg)

    const emailUnicos = emailList.filter(function (valorActual, posicion, arrayEmails) {
      return posicion === arrayEmails.indexOf(valorActual)
    })

    for (const arrayElement of emailUnicos) {
      this.message = arrayElement
      this.drawer.displayTask(this.eventTriggered, this.message)
    }
  }
}
