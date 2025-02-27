import { generateCCId } from "../utils/GenerateId.js"

export class CreditCard {
  constructor(data) {
    this.id = data.id = generateCCId()
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
    return `        
         <div class="col-12">
          <div class="shadow bg-light d-flex mb-4">
            <img
              src="${this.imgUrl}"
              alt="baja" class="car-img">
            <div class="p-3 flex-grow-1">
              <h3>${this.bank + ' ' + this.name}</h3>
              <div class="d-flex justify-content-between">
                <div>
                  <p class="fs-3">Annual Fee: $${this.annualFee}</p>
                  <p>This car has a clean title approved by <span class="mdi mdi-dog"></span></p>
                  <div class="d-flex gap-2 align-items-center">
                    <span>Color</span>
                    <div class="color-bubble"></div>
                  </div>
                </div>
                <div class="fs-5">
                  <p>Base Cashback: ${this.cashbackAll}%</p>
                  <p>Gas: ${this.cashbackGas}%</p>
                  <p>Groceries: ${this.cashbackGroceries}%</p>
                  <p>Restaurants: ${this.cashbackRestaurants}%</p>


                </div>
              </div>
            </div>
          </div>
        </div>
  

`
  }
}