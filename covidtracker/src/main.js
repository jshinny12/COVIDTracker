import fetch from "node-fetch";


async function getapi(state) {
    const api_url = 
      "https://covid-19-testing.github.io/locations/" + state + "/complete.json";
    // Storing response
    const response = await fetch(api_url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    // if (response) {
    //     hideloader();
    // }
}



// function hideloader() {
//     document.getElementById('loading').style.display = 'none';
// }

getapi("virginia");

