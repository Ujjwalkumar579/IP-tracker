
// const validateIp = (e) =>{
    //     e.preventDefault();
//     getApiData();
// }

// async function getApiData()
// {
//     let res = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_wNiqNIuvxWhDcRiVAxzv6ZO9HBSiT&ipAddress=${input_ip.value}`);
//     let data = await res.json();
//     console.log(data.ip);
// }

var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '© OpenStreetMap'
}).addTo(map);
var marker = L.marker([51.505, -0.09]).addTo(map)



//elements to update
let ip = document.getElementById('ip_update');
let region = document.getElementById('ip_region');
let timezone = document.getElementById('ip_timezone');
let isp = document.getElementById('ip_isp');


const secret_api ='at_wNiqNIuvxWhDcRiVAxzv6ZO9HBSiT'
const bypass_cors_url = 'https://cors-anywhere.herokuapp.com/'
const api_uri = 'https://geo.ipify.org/api/'
let current_verion = 'v2'

//form element
let input_ip = document.getElementById('ip_input');
let search_btn = document.getElementById('validateIp');

// const headers_option = {
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//     }
// }

// const map = L.map('display-map', {
//     'center': [0,0],
//     'zoom': 0,
//     'layers': [
//         L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           })
//     ]
// })

// updateMarker = (update_marker = [-33.665, 18.993]) => {
//     map.setView(update_marker, 13);
//     L.marker(update_marker).addTo(map);
// }
var myHeaders = new Headers();
myHeaders.append("apikey", "FhGOqbzCO9kI6bREC7r3vcqYZZLcnCzS");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
  mode : 'no-cors'
};



 getIPDetails = async (default_ip) => {
    // console.log(default_ip);
    // if(default_ip == undefined){
    //     var ip_url = ``
    // }
    // else {
    //     var ip_url = `https://geo.ipify.org/api/v2/country?apiKey=at_wNiqNIuvxWhDcRiVAxzv6ZO9HBSiT&ipAddress=${default_ip}`
    // }

    
// fetch(`https://api.apilayer.com/ip_to_location/${default_ip}`, requestOptions)
// .then(response => response.json())
// .then(result => console.log(result))
// .catch(error => console.log('error', error));

let res = await fetch(`https://api.apilayer.com/ip_to_location/${default_ip}`,requestOptions);
let data = await res.json();
console.log(data);


    // fetch(ip_url, {
    //     method: 'GET',
    //     mode: 'no-cors',
    //     cache: 'no-cache',
    //     credentials: 'same-origin',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': '*'
    //     },
    //     redirect: 'follow',
    //     referrerPolicy: 'no-referrer',
    //     // body: JSON.stringify(data)
    //   })
    // .then( results => results.json())
    // .then( data => {
    //     console.log(data.ip);
    //     // ip.innerHTML = data.ip
    //     // region.innerHTML = `${data.location.city} ${data.location.country} ${data.location.postalCode}`
    //     // timezone.innerHTML = data.location.timezone
    //     // isp.innerHTML = data.isp

    //     // update map marker 
    //     // updateMarker([data.location.lat, data.location.lng])
    // })


    

}

// document.addEventListener('load', updateMarker())

search_btn.addEventListener('click', e => {
    e.preventDefault()
    if (input_ip.value != '' && input_ip.value != null) {
        getIPDetails(input_ip.value)
        return
    }
    alert("Please enter a valid IP address");
})