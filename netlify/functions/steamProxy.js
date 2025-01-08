import fetch from 'node-fetch';

exports.handler = async (event) => {
  const { path } = event;
  const apiUrl = `https://api.steampowered.com${path.replace('/.netlify/functions/steamProxy', '')}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${process.env.VITE_STEAM_API_KEY}`
      },
    });
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data' }),
    };
  }
};
