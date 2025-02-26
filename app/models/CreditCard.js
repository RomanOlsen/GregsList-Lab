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
              src="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/02q4/267343/subaru-baja-photo-9829-s-original.jpg?fill=1:1&resize=1200:*"
              alt="baja" class="car-img">
            <div class="p-3 flex-grow-1">
              <h3>2000 Subaru Baja</h3>
              <div class="d-flex justify-content-between">
                <div>
                  <p class="fs-3">$6000</p>
                  <p>This car has a clean title approved by <span class="mdi mdi-dog"></span></p>
                  <div class="d-flex gap-2 align-items-center">
                    <span>Color</span>
                    <div class="color-bubble"></div>
                  </div>
                </div>
                <div class="fs-5">
                  <p>4 Cylinder</p>
                  <p>3000 miles</p>
                  <p><span class="mdi mdi-car-shift-pattern"></span></p>
                  <p><span class="mdi mdi-refresh-auto"></span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
  }

`
  }
}