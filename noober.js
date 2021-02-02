async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  // 🔥 start here: write code to loop through the rides
  for (let i = 0; i < json.length; i++) {
    let ride = json[i]  

      if (ride.length > 1) {
        levelofService = "Noober Pool"

        document.querySelector('.rides').insertAdjacentHTML('beforeend', `

        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              <i class="fas fa-car-side"></i>
              <span>${levelofService}</span>
            </h1>
            `)

        for (let i = 0; i < ride.length; i++) {

          let passengerName = `${ride[i].passengerDetails.first} ${ride[i].passengerDetails.last}`
          let passengerPhone = ride[i].passengerDetails.phoneNumber
          let passengerNumberOfPassengers = ride[i].numberOfPassengers
          let passengerPickup1 = ride[i].pickupLocation.address
          let passengerPickup2 = `${ride[i].pickupLocation.city}, ${ride[i].pickupLocation.state} ${ride[i].pickupLocation.zip}`
          let passengerDropoff1 = ride[i].dropoffLocation.address
          let passengerDropoff2 = `${ride[i].dropoffLocation.city}, ${ride[i].dropoffLocation.state} ${ride[i].dropoffLocation.zip}`

          document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        
            <div class="border-4 border-gray-900 p-4 my-4 text-left">
              <div class="flex">
                <div class="w-1/2">
                  <h2 class="text-2xl py-1">${passengerName}</h2>
                  <p class="font-bold text-gray-600">${passengerPhone}</p>
                </div>
                <div class="w-1/2 text-right">
                  <span class="rounded-xl bg-gray-600 text-white p-2">
                  ${passengerNumberOfPassengers} passengers
                  </span>
                </div>
              </div>
              <div class="mt-4 flex">
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">PICKUP</div>
                  <p>${passengerPickup1}</p>
                  <p>${passengerPickup2}</p>
                </div>
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                  <p>${passengerDropoff1}</p>
                  <p>${passengerDropoff2}</p>
                </div>
              </div>
            </div>

            `)
        }

      } else if (ride.purpleRequested) {
        levelofService = "Noober Purple"


        document.querySelector('.rides').insertAdjacentHTML('beforeend', `

        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side"></i>
          <span>${levelofService}</span>
        </h1>
        `)

        for (let i = 0; i < ride.length; i++) {

          let passengerName = `${ride[i].passengerDetails.first} ${ride[i].passengerDetails.last}`
          let passengerPhone = ride[i].passengerDetails.phoneNumber
          let passengerNumberOfPassengers = ride[i].numberOfPassengers
          let passengerPickup1 = ride[i].pickupLocation.address
          let passengerPickup2 = `${ride[i].pickupLocation.city}, ${ride[i].pickupLocation.state} ${ride[i].pickupLocation.zip}`
          let passengerDropoff1 = ride[i].dropoffLocation.address
          let passengerDropoff2 = `${ride[i].dropoffLocation.city}, ${ride[i].dropoffLocation.state} ${ride[i].dropoffLocation.zip}`
    
        document.querySelector('.rides').insertAdjacentHTML('beforeend', `

        <div class="border-4 border-purple-500 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${passengerName}</h2>
              <p class="font-bold text-gray-600">${passengerPhone}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-purple-600 text-white p-2">
              ${passengerNumberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${passengerPickup1}</p>
              <p>${passengerPickup2}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${passengerDropoff1}</p>
              <p>${passengerDropoff2}</p>
            </div>
          </div>
        </div>
    
      `)
        }

      } else if (ride.numberOfPassengers > 3) {
        levelofService = "Noober XL"

        document.querySelector('.rides').insertAdjacentHTML('beforeend', `

        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side"></i>
          <span>${levelofService}</span>
        </h1>
        `)

        for (let i = 0; i < ride.length; i++) {
       
          let passengerName = `${ride[i].passengerDetails.first} ${ride[i].passengerDetails.last}`
          let passengerPhone = ride[i].passengerDetails.phoneNumber
          let passengerNumberOfPassengers = ride[i].numberOfPassengers
          let passengerPickup1 = ride[i].pickupLocation.address
          let passengerPickup2 = `${ride[i].pickupLocation.city}, ${ride[i].pickupLocation.state} ${ride[i].pickupLocation.zip}`
          let passengerDropoff1 = ride[i].dropoffLocation.address
          let passengerDropoff2 = `${ride[i].dropoffLocation.city}, ${ride[i].dropoffLocation.state} ${ride[i].dropoffLocation.zip}`

        document.querySelector('.rides').insertAdjacentHTML('beforeend', `
    
        <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${passengerName}</h2>
              <p class="font-bold text-gray-600">${passengerPhone}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
              ${passengerNumberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${passengerPickup1}</p>
              <p>${passengerPickup2}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${passengerDropoff1}</p>
              <p>${passengerDropoff2}</p>
            </div>
          </div>
        </div>

        `) 
        }

      } else {
        levelofService = "Noober X" 

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `

      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelofService}</span>
    </h1>
    `)

    for (let i = 0; i < ride.length; i++) {

      let passengerName = `${ride[i].passengerDetails.first} ${ride[i].passengerDetails.last}`
      let passengerPhone = ride[i].passengerDetails.phoneNumber
      let passengerNumberOfPassengers = ride[i].numberOfPassengers
      let passengerPickup1 = ride[i].pickupLocation.address
      let passengerPickup2 = `${ride[i].pickupLocation.city}, ${ride[i].pickupLocation.state} ${ride[i].pickupLocation.zip}`
      let passengerDropoff1 = ride[i].dropoffLocation.address
      let passengerDropoff2 = `${ride[i].dropoffLocation.city}, ${ride[i].dropoffLocation.state} ${ride[i].dropoffLocation.zip}`

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
    
    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerName}</h2>
          <p class="font-bold text-gray-600">${passengerPhone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${passengerNumberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${passengerPickup1}</p>
          <p>${passengerPickup2}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${passengerDropoff1}</p>
          <p>${passengerDropoff2}</p>
        </div>
      </div>
    </div>

    `)
    }


      // appendQuote(rides)

      
        // put in the function(ride) to add it to the HTML output
      // } 
    }


}
}

window.addEventListener('DOMContentLoaded', pageLoaded)

