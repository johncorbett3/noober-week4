function appendQuote(string) {
  document.querySelector('.rides').insertAdjacentHTML('beforeend', `
    <h1 class="font-bold my-8 text-xl text-blue-300">${string}</h1>
  `)
  // determine what to put in parentheses for querySelector to get insertAdjacentHTML to work
  // https://stackoverflow.com/questions/59339313/uncaught-typeerror-cannot-read-property-insertadjacenthtml-of-null#:~:text=Your%20error%20literally%20means%20that,querySelector(element).
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

