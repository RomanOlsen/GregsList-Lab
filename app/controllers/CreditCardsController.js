import { AppState } from "../AppState.js"

export class CreditCardsController {
  constructor() {
    AppState.on('creditCards', this.drawCreditCards) //observer

    this.drawCreditCards()
  }

  drawCreditCards() {
    console.log('drawing cards')
    let creditCards = AppState.creditCards
    let ccHTML = ''
    let ccElem = document.getElementById('ccListings')

    creditCards.forEach(cc => ccHTML += cc.ccHTMLTemplate);
    ccElem.innerHTML = ccHTML
  }

}