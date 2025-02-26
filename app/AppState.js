import { Car, CreditCard } from './models/Car.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  cars = [
    new Car({
      make: 'mazda',
      model: 'miata',
      year: 1996,
      price: 4000,
      mileage: 250000,
      hasCleanTitle: false,
      engineType: '4 cylinder',
      isManualTransmission: true,
      color: 'yellow',
      imgUrl: 'https://images.unsplash.com/photo-1620882814836-88a2c98c0f6d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWlhdGF8ZW58MHx8MHx8fDI%3D'
    }),
    new Car({
      make: 'toyota',
      model: 'tacoma',
      year: 1993,
      price: 5000,
      mileage: 175000,
      hasCleanTitle: false,
      engineType: '6 cylinder',
      isManualTransmission: false,
      color: 'blue',
      imgUrl: 'https://images.unsplash.com/photo-1583031849506-4f35952c3fa0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRhY29tYXxlbnwwfHwwfHx8Mg%3D%3D'
    }),
    new Car({
      make: 'porsche',
      model: '911 turbo',
      year: 2018,
      price: 95000,
      mileage: 4000,
      hasCleanTitle: true,
      engineType: '6 cylinder',
      isManualTransmission: true,
      color: 'white',
      imgUrl: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnNjaGV8ZW58MHx8MHx8fDI%3D'
    }),
    new Car({
      make: 'subaru',
      model: 'baja',
      year: 2002,
      price: 16000,
      mileage: 89000,
      hasCleanTitle: true,
      engineType: 'boxer',
      isManualTransmission: false,
      color: 'yellow',
      imgUrl: 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/02q4/267343/subaru-baja-photo-9829-s-original.jpg?fill=1:1&resize=1200:*'
    }),
    new Car({
      make: 'audi',
      model: 'r8',
      year: 2012,
      price: 160000,
      mileage: 9000,
      hasCleanTitle: true,
      engineType: 'V10',
      isManualTransmission: true,
      color: 'white',
      imgUrl: 'https://www.thedrive.com/wp-content/uploads/images-by-url-td/content/archive-images/critics-notebook-audi-r8-bb-hero.jpg?quality=85'
    }),
  ]

  creditCards = [
    new CreditCard({
      id: 0,
      bank: 'Chase',
      name: 'Freedom',
      annualFee: 0,
      creditScoreNeeded: 500,
      cashbackGas: 1,
      cashbackRestaurants: 2,
      cashbackGroceries: 1,
      cashbackAll: 1.5,
      imgUrl: 'https://creditcards.chase.com/content/dam/jpmc-marketplace/card-art/freedom_unlimited_card_alt.png'
    }),
    new CreditCard({
      id: 0,
      bank: 'Amex',
      name: 'Gold',
      annualFee: 350,
      creditScoreNeeded: 700,
      cashbackGas: 2,
      cashbackRestaurants: 4,
      cashbackGroceries: 4,
      cashbackAll: 1,
      imgUrl: 'https://creditcards.chase.com/content/dam/jpmc-marketplace/card-art/freedom_unlimited_card_alt.png'
    }),
    new CreditCard({
      id: 0,
      bank: 'Amex',
      name: 'Platinum',
      annualFee: 665,
      creditScoreNeeded: 770,
      cashbackGas: 3,
      cashbackRestaurants: 4,
      cashbackGroceries: 5,
      cashbackAll: 2,
      imgUrl: 'https://creditcards.chase.com/content/dam/jpmc-marketplace/card-art/freedom_unlimited_card_alt.png'
    }),
    new CreditCard({
      id: 0,
      bank: 'Amex',
      name: 'Blue Cash',
      annualFee: 0,
      creditScoreNeeded: 690,
      cashbackGas: 3,
      cashbackRestaurants: 1,
      cashbackGroceries: 3,
      cashbackAll: 1,
      imgUrl: 'https://creditcards.chase.com/content/dam/jpmc-marketplace/card-art/freedom_unlimited_card_alt.png'
    }),
    new CreditCard({
      id: 0,
      bank: 'Citi',
      name: 'Double Cash',
      annualFee: 0,
      creditScoreNeeded: 670,
      cashbackGas: null,
      cashbackRestaurants: null,
      cashbackAll: 2,
      imgUrl: 'https://creditcards.chase.com/content/dam/jpmc-marketplace/card-art/freedom_unlimited_card_alt.png'
    }),

  ]

}

export const AppState = createObservableProxy(new ObservableAppState())