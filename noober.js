



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

      <div class="text-center text-2xl">
      document.write(`
        ${[passengerName]} ${[passengerPhone]}
      )
        </div>


      // console.log(passengerName)
      // console.log(passengerPhone)
      // console.log(passengerPickup1)
      // console.log(passengerPickup2)
      // console.log(passengerDropoff1)
      // console.log(passengerDropoff2)
           
        
        // console.log(ride[i].passengerDetails.first)
        // put in the function(ride) to add it to the HTML output
      } 
    }


}

window.addEventListener('DOMContentLoaded', pageLoaded)

