const Provider = require('./Provider');

const textExercise1 = '1) Find and print in console the city located at latitude/longtitude 51.5074 and 0.1278 accordingly'
const textExercise2 = '2) Print in console the weather for the city located at lat/long = 51.5074 and 0.1278'
const textExercise3 = '3) Print in console in one line the weather and currency for a given city (London)'

const latitude = '51.5074'
const longtitude = '0.1278'

async function exercise1() {
  const city = await Provider.findCity(longtitude, latitude)
  
  console.log(`
    ==============================
    ${textExercise1}
    Latitude: ${latitude} - Longtitude: ${longtitude}
    City: ${city}
    ==============================
  `)
}

async function exercise2() {
  const city = await Provider.findCity(longtitude, latitude)
  const weather = await Provider.getWeather(city)
  
  console.log(`
    ==============================
    ${textExercise2}
    Latitude: ${latitude} - Longtitude: ${longtitude} - City: ${city}
    Weather: ${weather}
    ==============================
  `)
}

async function exercise3() {
  const city = await Provider.findCity(longtitude, latitude)
  const weather = await Provider.getWeather(city)
  const currency = await Provider.getLocalCurrency(city)
  
  console.log(`
    ==============================
    ${textExercise3}
    Latitude: ${latitude} - Longtitude: ${longtitude} = City: ${city}
    Weather: ${weather} - Currency: ${currency}
    ==============================
  `)
}

async function main() {
  await exercise1()

  await exercise2()

  await exercise3()
}

main()

