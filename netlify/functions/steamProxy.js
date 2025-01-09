import fetch from 'node-fetch';

exports.handler = async (event) => {
    console.log('API Key:', process.env.STEAM_API_KEY);
    console.log('Event Path:', event.path);
    const { path } = event;
    const steamApiKey = process.env.STEAM_API_KEY;
    const steamId = process.env.STEAM_ID;

    // Log the event path for debugging
    console.log('Event Path:', path);

    // let apiUrl = event.path.replace('/.netlify/functions/steamProxy', '');
    let apiUrl = '';
    apiUrl = apiUrl.replace(/\/$/, ''); // Remove trailing slash


    // const fullApiUrl = `https://api.steampowered.com${apiUrl}?key=${steamApiKey}&steamid=${steamId}&format=json`;

    // console.log('Constructed API URL:', fullApiUrl);

    if (path.includes('/GetRecentlyPlayedGames')) {
        apiUrl = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${steamApiKey}&steamid=${steamId}&format=json`;
    } else if (path.includes('/GetSchemaForGame')) {
        // Extract the appid from the query parameters
        const url = new URL(`https://dummy.com${path}`);
        url.searchParams.set('key', process.env.STEAM_API_KEY);
        console.log('Constructed URL with Key:', url.toString()); // Check if the key is included
        const appid = url.searchParams.get('appid');

        // Construct the URL for the GetSchemaForGame endpoint
        apiUrl = `https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${steamApiKey}&appid=${appid}`;
    } else {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Invalid endpoint' }),
        };
    }

    // try {
    //     const response = await fetch(fullApiUrl, {
    //         headers: {
    //             'Authorization': `Bearer ${steamApiKey}`
    //         },
    //     });

    //     const responseBody = await response.text(); // Get raw response as text
    //     console.log('Response Body:', responseBody);
    //     const data = JSON.parse(responseBody);

    //     // const data = await response.json();

    //     return {
    //         statusCode: 200,
    //         body: JSON.stringify(data),
    //     };
    try {
        const response = await fetch(apiUrl);

        console.log('Response Details:', response);

        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch data', details: error.message }),
        };
    }
};
