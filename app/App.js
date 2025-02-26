import { CarsController } from "./controllers/CarsController.js"
import { CreditCard } from "./models/CreditCard.js"

class App {
  carsController = new CarsController()
  creditCardController = new CreditCard()
}

window['app'] = new App()


//