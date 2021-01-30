async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  // let ride = json[0]
  // console.log(ride)
  // console.log(ride[0].passengerDetails.first)


  
  // 🔥 start here: write code to loop through the rides
  for (let i = 0; i < json.length; i++) {
    let ride = json[i]
    console.log(ride)  

    for (let i = 0; i < ride.length; i++) {   
      let passengerName = `${ride[i].passengerDetails.first} ${ride[i].passengerDetails.last}`
      let passengerPhone = ride[i].passengerDetails.phoneNumber
      let passengerPickup1 = ride[i].pickupLocation.address
      let passengerPickup2 = ride[i].pickupLocation.city
      let passengerDropoff1 = ride[i].dropoffLocation.address
      let passengerDropoff2 = ride[i].dropoffLocation.city
      console.log(passengerName)
      console.log(passengerPhone)
      console.log(passengerPickup1)
      console.log(passengerPickup2)
      console.log(passengerDropoff1)
      console.log(passengerDropoff2)
           
        
        // console.log(ride[i].passengerDetails.first)
        // put in the function(ride) to add it to the HTML output
      } 
    }


}

window.addEventListener('DOMContentLoaded', pageLoaded)

