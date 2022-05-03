import fetch from "node-fetch";


const stateSet = new Set();

stateSet.add("alabama");
stateSet.add("alaska");
stateSet.add("arizona");
stateSet.add("arkansas");
stateSet.add("california");
stateSet.add("colorado");
stateSet.add("connecticut");
stateSet.add("delaware");
stateSet.add("florida");
stateSet.add("georgia");
stateSet.add("hawaii");
stateSet.add("idaho");
stateSet.add("illinois");
stateSet.add("indiana");
stateSet.add("iowa");
stateSet.add("kansas");
stateSet.add("kentucky");
stateSet.add("louisiana");
stateSet.add("maine");
stateSet.add("maryland");
stateSet.add("massachusetts");
stateSet.add("michigan");
stateSet.add("minnesota");
stateSet.add("mississippi");
stateSet.add("missouri");
stateSet.add("montana");
stateSet.add("nebraska");
stateSet.add("nevada");
stateSet.add("new hampshire");
stateSet.add("new jersey");
stateSet.add("new mexico");
stateSet.add("new york");
stateSet.add("north carolina");
stateSet.add("north dakota");
stateSet.add("ohio");
stateSet.add("oklahoma");
stateSet.add("oregon");
stateSet.add("pennsylvania");
stateSet.add("rhode island");
stateSet.add("south carolina");
stateSet.add("south dakota");
stateSet.add("tennessee");
stateSet.add("texas");
stateSet.add("utah");
stateSet.add("vermont");
stateSet.add("virginia");
stateSet.add("washington");
stateSet.add("west virginia");
stateSet.add("wisconsin");
stateSet.add("wyoming");

function getState(zip) {
    const integZip = parseInt(zip, 10);

    /* Ensure we have exactly 5 characters to parse */
    if (zip.length !== 5) {
        console.log('zip is not 5 digits');
        return;
    }

    /* Ensure we don't parse strings starting with 0 as octal values */

    /* Code cases alphabetized by state */
    if (integZip >= 35000 && integZip <= 36999) {
        return 'alabama';
    } else if (integZip >= 99500 && integZip <= 99999) {
        return 'alaska';
    } else if (integZip >= 85000 && integZip <= 86999) {
        return 'arizona';
    } else if (integZip >= 71600 && integZip <= 72999) {
        return 'arkansas';
    } else if (integZip >= 90000 && integZip <= 96699) {
        return 'california';
    } else if (integZip >= 80000 && integZip <= 81999) {
        return 'colorado';
    } else if ((integZip >= 6000 && integZip <= 6389) || (integZip >= 6391 && integZip <= 6999)) {
        return 'connecticut';
    } else if (integZip >= 19700 && integZip <= 19999) {
        return 'delaware';
    } else if (integZip >= 32000 && integZip <= 34999) {
        return 'florida';
    } else if ((integZip >= 30000 && integZip <= 31999) || (integZip >= 39800 && integZip <= 39999)) {
        return 'georgia';
    } else if (integZip >= 96700 && integZip <= 96999) {
        return 'hawaii';
    } else if (integZip >= 83200 && integZip <= 83999) {
        return 'idaho';
    } else if (integZip >= 60000 && integZip <= 62999) {
        return 'illinois';
    } else if (integZip >= 46000 && integZip <= 47999) {
        return 'indiana';
    } else if (integZip >= 50000 && integZip <= 52999) {
        return 'iowa';
    } else if (integZip >= 66000 && integZip <= 67999) {
        return 'kansas';
    } else if (integZip >= 40000 && integZip <= 42999) {
        return 'kentucky';
    } else if (integZip >= 70000 && integZip <= 71599) {
        return 'louisiana';
    } else if (integZip >= 3900 && integZip <= 4999) {
        return 'maine';
    } else if (integZip >= 20600 && integZip <= 21999) {
        return 'maryland';
    } else if ((integZip >= 1000 && integZip <= 2799) || (integZip === 5501) || (integZip === 5544)) {
        return 'massachusetts';
    } else if (integZip >= 48000 && integZip <= 49999) {
        return 'michigan';
    } else if (integZip >= 55000 && integZip <= 56899) {
        return 'minnesota';
    } else if (integZip >= 38600 && integZip <= 39999) {
        return 'mississippi';
    } else if (integZip >= 63000 && integZip <= 65999) {
        return 'missouri';
    } else if (integZip >= 59000 && integZip <= 59999) {
        return 'montana';
    } else if (integZip >= 27000 && integZip <= 28999) {
        return 'north-carolina';
    } else if (integZip >= 58000 && integZip <= 58999) {
        return 'north-dakota';
    } else if (integZip >= 68000 && integZip <= 69999) {
        return 'nebraska';
    } else if (integZip >= 88900 && integZip <= 89999) {
        return 'nevada';
    } else if (integZip >= 3000 && integZip <= 3899) {
        return 'new-hampshire';
    } else if (integZip >= 7000 && integZip <= 8999) {
        return 'new-jersey';
    } else if (integZip >= 87000 && integZip <= 88499) {
        return 'new-mexico';
    } else if ((integZip >= 10000 && integZip <= 14999) || (integZip === 6390) || (integZip === 501) || (integZip === 544)) {
        return 'new-york';
    } else if (integZip >= 43000 && integZip <= 45999) {
        return 'ohio';
    } else if ((integZip >= 73000 && integZip <= 73199) || (integZip >= 73400 && integZip <= 74999)) {
        return 'oklahoma';
    } else if (integZip >= 97000 && integZip <= 97999) {
        return 'oregon';
    } else if (integZip >= 15000 && integZip <= 19699) {
        return 'pennsylvania';
    } else if (integZip >= 2800 && integZip <= 2999) {
        return 'rhode-island';
    } else if (integZip >= 29000 && integZip <= 29999) {
        return 'south-carolina';
    } else if (integZip >= 57000 && integZip <= 57999) {
        return 'south-dakota';
    } else if (integZip >= 37000 && integZip <= 38599) {
        return 'tennessee';
    } else if ((integZip >= 75000 && integZip <= 79999) || (integZip >= 73301 && integZip <= 73399) || (integZip >= 88500 && integZip <= 88599)) {
        return 'texas';
    } else if (integZip >= 84000 && integZip <= 84999) {
        return 'utah';
    } else if (integZip >= 5000 && integZip <= 5999) {
        return 'vermont';
    } else if ((integZip >= 20100 && integZip <= 20199) || (integZip >= 22000 && integZip <= 24699) || (integZip = 20598)) {
        return 'virginia';
    } else if (integZip >= 98000 && integZip <= 99499) {
        return 'washington';
    } else if (integZip >= 24700 && integZip <= 26999) {
        return 'west-virginia';
    } else if (integZip >= 53000 && integZip <= 54999) {
        return 'wisconsin';
    } else if (integZip >= 82000 && integZip <= 83199) {
        return 'wyoming';
    } else {
        console.log('zip not in the U.S');
        return 'invalid';
    }
}

async function getStateCode(state) {

    switch (state) {
        case "alabama":
            return "al";
            break;
        case "alaska":
            return "ak";
            break;
        case "arizona":
            return "az";
            break;
        case "arkansas":
            return "ar";
            break;
        case "california":
            return "ca";
            break;
        case "colorado":
            return "co";
            break;
        case "connecticut":
            return "ct";
            break;
        case "delaware":
            return "ak";
            break;
        case "florida":
            return "fl";
            break;
        case "georgia":
            return "ga";
            break;
        case "hawaii":
            return "hi";
            break;
        case "idaho":
            return "id";
            break;
        case "illinois":
            return "is";
            break;
        case "indiana":
            return "in";
            break;
        case "iowa":
            return "ia";
            break;
        case "kansas":
            return "ks";
            break;
        case "kentucky":
            return "ky";
            break;
        case "louisiana":
            return "la";
            break;
        case "maine":
            return "me";
            break;
        case "maryland":
            return "md";
            break;
        case "massachusetts":
            return "ma";
            break;
        case "michigan":
            return "mi";
            break;
        case "minnesota":
            return "mn";
            break;
        case "mississippi":
            return "ms";
            break;
        case "missouri":
            return "mo";
            break;
        case "montana":
            return "mt";
            break;
        case "nebraska":
            return "ne";
            break;
        case "nevada":
            return "nv";
            break;
        case "new hampshire":
            return "nh";
            break;
        case "new jersey":
            return "nj";
            break;
        case "new mexico":
            return "nm";
            break;
        case "new york":
            return "ny";
            break;
        case "north carolina":
            return "nc";
            break;
        case "north dakota":
            return "nd";
            break;
        case "ohio":
            return "oh";
            break;
        case "oklahoma":
            return "ok";
            break;
        case "oregon":
            return "or";
            break;
        case "pennsylvania":
            return "pa";
            break;
        case "rhode island":
            return "ir";
            break;
        case "south carolina":
            return "sc";
            break;
        case "south dakota":
            return "sd";
            break;
        case "tennessee":
            return "tn";
            break;
        case "texas":
            return "tx";
            break;
        case "utah":
            return "ut";
            break;
        case "vermont":
            return "vt";
            break;
        case "virginia":
            return "va";
            break;
        case "washington":
            return "wa";
            break;
        case "west virginia":
            return "wv";
            break;
        case "wisconsin":
            return "wi";
            break;
        case "wyoming":
            return "wy";
            break;
        default:
            console.log("can't retrieve state code");
            break;
    }
}

async function getapi(state) {
    const api_url =
        "https://covid-19-testing.github.io/locations/" + state + "/complete.json";
    // Storing response
    const response = await fetch(api_url);

    // Storing data in form of JSON
    var data = await response.json();
    return data;
}

async function getData(state) {
    if (!stateSet.has(state)) {
        console.log("invalid state");
    }

    var stateCode = await getStateCode(state);
    //console.log(stateCode);
    const state_data_url = "https://api.covidtracking.com/v1/states/" + stateCode + "/current.json";
    const response = await fetch(state_data_url);
    var data = await response.json();
    return data;
}

async function getSites(zip) {
    const data = await getapi(getState(zip));
    const arr = [];
    var i = 0;

    data.forEach(test => {

        test.physical_address.forEach(addy => {
            if (addy.postal_code.substring(0, 5) === zip) {
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

function getPositiveCases(stateData) {
    return stateData.positive;
}

function getPositivityRate(stateData) {
    return stateData.positive / stateData.totalTestResults;
}

function getDeaths(stateData) {
    return stateData.death;
}

function getSiteName(site) {
    return site.id;
}

function getSiteDescription(site) {
    return site.location_id;
}

(async () => {
    const data = await getData("california");
    console.log(getPositiveCases(data));
})()

// (async () => {
//     var array = await getSites('19104');
//     if (array.length===0) {
//         console.log('no testing sites in this zip');

//     } else {
//         console.log(getSiteName(array[0]));

//     }
// })()
export { getData, getSites };
