require('dotenv').config(); // Load environment variables from .env file

const clientId = process.env.CANVAS_CLIENT_ID;
const clientSecret = process.env.CANVAS_CLIENT_SECRET;


const redirectUri = 'chrome-extension://your_extension_id/';
// Construct the Canvas authorization URL
const authUrl = `https://canvas.instructure.com/login/oauth2/auth?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&state=your_state`;


async function authUser() {
    //where authentication happens
}

async function fetchData() {
    //where we fetch the data. start with the most basic data to see if it works and then we can develop further

    // const url = 'https://real-time-events-search.p.rapidapi.com/search-events?query=Concerts%20in%20Charlotte&date=next_month&start=0';
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'eb3ffc9f77msh05b8062f03115fep1953b1jsn34f9f0177a93',
    //         'X-RapidAPI-Host': 'real-time-events-search.p.rapidapi.com'
    //     }
    // };

    // const res = await fetch(url, options);
    // const result = await res.json();
    // console.log('result', result);

    // document.getElementById("concerts").innerHTML = result.data.map(item => `<li> ${item.name} </li>`).join('');

}

fetchData();