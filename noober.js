function appendQuote(string) {
  document.querySelector('.rides').insertAdjacentHTML('beforeend', `
  <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
  <i class="fas fa-car-side"></i>
  <span>Noober X</span>
</h1>

<div class="border-4 border-gray-900 p-4 my-4 text-left">
  <div class="flex">
    <div class="w-1/2">
      <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
      <p class="font-bold text-gray-600">(312) 555-1212</p>
    </div>
    <div class="w-1/2 text-right">
      <span class="rounded-xl bg-gray-600 text-white p-2">
        2 passengers
      </span>
    </div>
  </div>
  <div class="mt-4 flex">
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">PICKUP</div>
      <p>123 Main St</p>
      <p>Chicago, IL 60603</p>
    </div>
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">DROPOFF</div>
      <p>123 Main St</p>
      <p>Chicago, IL 60603</p>
    </div>
  </div>
</div>

<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober Pool</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
          <p class="font-bold text-gray-600">(312) 555-1212</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            1 passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>123 Main St</p>
          <p>Chicago, IL 60603</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>123 Main St</p>
          <p>Chicago, IL 60603</p>
        </div>
      </div>
    </div>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
          <p class="font-bold text-gray-600">(312) 555-1212</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            1 passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>123 Main St</p>
          <p>Chicago, IL 60603</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>123 Main St</p>
          <p>Chicago, IL 60603</p>
        </div>
      </div>
    </div>

    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober XL</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
          <p class="font-bold text-gray-600">(312) 555-1212</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            5 passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>123 Main St</p>
          <p>Chicago, IL 60603</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>123 Main St</p>
          <p>Chicago, IL 60603</p>
        </div>
      </div>
    </div>

    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober Purple</span>
    </h1>

    <div class="border-4 border-purple-500 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
          <p class="font-bold text-gray-600">(312) 555-1212</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-purple-600 text-white p-2">
            1 passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>123 Main St</p>
          <p>Chicago, IL 60603</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>123 Main St</p>
          <p>Chicago, IL 60603</p>
        </div>
      </div>
    </div>

  `)
}


async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  // for (let i = 0; i<json.length; i++) {
  //   let text = ride[i]
  //   document.write(`
  //   <div class="text-center">
  //     ${text}
  //     </div>
  //     `)
  //   }
  
  // 🔥 start here: write code to loop through the rides
  for (let i = 0; i < json.length; i++) {
    let ride = json[i]
    // console.log(ride)  

    for (let i = 0; i < ride.length; i++) {   

      let passengerName = `${ride[i].passengerDetails.first} ${ride[i].passengerDetails.last}`
      let passengerPhone = ride[i].passengerDetails.phoneNumber
      let passengerPickup1 = ride[i].pickupLocation.address
      let passengerPickup2 = `${ride[i].pickupLocation.city}, ${ride[i].pickupLocation.state} ${ride[i].pickupLocation.zip}`
      let passengerDropoff1 = ride[i].dropoffLocation.address
      let passengerDropoff2 = `${ride[i].dropoffLocation.city}, ${ride[i].dropoffLocation.state} ${ride[i].dropoffLocation.zip}`

      appendQuote(ride[i])

      // let passengerCount = `${ride.numberOfPassengers}`
      
      
      // document.write(`
      // <div class="border-4 border-gray-900 p-4 my-4 text-left">
      // <div class="flex">
      //   <div class="w-1/2">
      //     <h2 class="text-2xl py-1">${passengerName}</h2>
      //     <p class="font-bold text-gray-600">(312) 555-1212</p>
      //   </div>
      //   <div class="w-1/2 text-right">
      //     <span class="rounded-xl bg-gray-600 text-white p-2">
      //       ${passengerCount}
      //     </span>
      //   </div>
      // </div>
      // <div class="mt-4 flex">
      //   <div class="w-1/2">
      //     <div class="text-sm font-bold text-gray-600">PICKUP</div>
      //     <p>${passengerPickup1}</p>
      //     <p>${passengerPickup2}</p>
      //   </div>
      //   <div class="w-1/2">
      //     <div class="text-sm font-bold text-gray-600">DROPOFF</div>
      //     <p>${passengerDropoff1}</p>
      //     <p>${passengerDropoff2}</p>
      //   </div>
      // </div>
      // `)
      



        // put in the function(ride) to add it to the HTML output
      } 
    }


}

window.addEventListener('DOMContentLoaded', pageLoaded)

