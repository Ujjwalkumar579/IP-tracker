let submit_btn = document.getElementById("validateIp");
let input_ip = document.getElementById("ip_input");

let ip = document.getElementById("ip_update");
let region = document.getElementById("ip_region");
let timezone = document.getElementById("ip_timezone");
let isp = document.getElementById("ip_isp");

submit_btn.addEventListener("click", (e) => {
  e.preventDefault();
  getApi(input_ip.value);
});

async function getApi(default_ip) {
  let regex = new RegExp(/^(([0-9]{1,3}\.){3}[0-9]{1,3})$/);
  if (regex.test(default_ip)) {
    let res = await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=8ab29ed93e8f4cef9c243a7736627233&ip=${default_ip}`
    );
    //   let res = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_wNiqNIuvxWhDcRiVAxzv6ZO9HBSiT&ipAddress=${default_ip}`);
    let data = await res.json();
    ip.innerHTML = data.ip;
    region.innerHTML = `${data.city}, ${data.country_code3}, ${data.zipcode}`;
    timezone.innerHTML = data.time_zone.name;
    isp.innerHTML = data.isp;
    updateMarker([data.latitude, data.longitude], data.country_flag);
    input_ip.value = "";
    // console.log(data);
  } else {
    input_ip.value = "";
    alert("Enter Valid IP Address");
    return;
  }
}

const map = L.map("map", {
  center: [120, 150],
  zoom: 0,
  layers: [
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }),
  ],
});

updateMarker = (
  update_marker = [28.57128, 77.21109],
  flag = "https://ipgeolocation.io/static/flags/in_64.png"
) => {
  map.setView(update_marker, 15);
  L.marker(update_marker)
    .addTo(map)
    .bindPopup(`<img src=${flag} width:'15px' height:'13px'/> <br> `)
    .openPopup();
};

window.addEventListener("load", updateMarker());
