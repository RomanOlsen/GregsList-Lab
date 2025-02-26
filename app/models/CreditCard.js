import { generateId } from "../utils/GenerateId"

export class CreditCard {
  constructor(data) {
    this.id = data.id = generateId()
    this.bank = data.bank
    this.name = data.name
    this.annualFee = data.annualFee
    this.creditScoreNeeded = data.creditScoreNeeded
    this.cashbackGas = data.cashbackGas
    this.cashbackRestaurants = data.cashbackRestaurants
    this.cashbackGroceries = data.cashbackGroceries
    this.cashbackAll = data.cashbackAll
    this.imgUrl = data.imgUrl
  }


  // get expects return
  get ccHTMLTemplate() {

  }


}