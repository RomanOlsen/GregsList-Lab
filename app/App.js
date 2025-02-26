import { CarsController } from "./controllers/CarsController.js"
import { CreditCardsController } from "./controllers/CreditCardsController.js"

class App {
  carsController = new CarsController()
  creditCardController = new CreditCardsController
}

window['app'] = new App()


//