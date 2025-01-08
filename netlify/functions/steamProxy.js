import fetch from 'node-fetch';

exports.handler = async (event) => {
    console.log('Event Path:', event.path);
    // const { path } = event;

    let apiUrl = event.path.replace('/.netlify/functions/steamProxy', '');
    apiUrl = apiUrl.replace(/\/$/, ''); // Remove trailing slash
    // const apiUrl = `https://api.steampowered.com${path.replace('/.netlify/functions/steamProxy', '')}`;

    const fullApiUrl = `https://api.steampowered.com${apiUrl}`;

    console.log('Constructed API URL:', fullApiUrl);

    try {
        const response = await fetch(fullApiUrl, {
            headers: {
                'Authorization': `Bearer ${process.env.STEAM_API_KEY}`
            },
        });
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
