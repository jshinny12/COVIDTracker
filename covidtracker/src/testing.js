import fetch from "node-fetch";


async function getapi(state) {
    const api_url = 
      "https://covid-19-testing.github.io/locations/" + state + "/complete.json";
    // Storing response
    const response = await fetch(api_url);

    // Storing data in form of JSON
    var data = await response.json();
    return data; 
}

async function getSites(state, zip) {
  const data = await getapi(state);
  const arr = [];
  var i = 0;

  data.forEach(test => {
    
    test.physical_address.forEach(addy => {
      if (addy.postal_code.substring(0, 5) == zip.toString()) {
        addy.id = test.name;
        addy.location_id = test.description;
        arr[i] = addy;
        i++;
      }

    })
   
  })
  return arr;

}

function getSiteAddress(site) {
  return site.address_1;
}

function getSiteName(site) {
  return site.id; 
}

function getSiteDescription(site) {
  return site.location_id;
}

(async () => {
  var array = await getSites("virginia", 22303);
  console.log(getSiteName(array[0]));
})()

