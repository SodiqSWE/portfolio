import fetch from 'node-fetch';

exports.handler = async (event) => {
    console.log('API Key:', process.env.STEAM_API_KEY);
    console.log('Event Path:', event.path);
    const { path } = event;
    const steamApiKey = process.env.VITE_STEAM_API_KEY;
    const steamId = process.env.VITE_STEAM_ID;
    // const steamApiKey = import.meta.env.VITE_STEAM_API_KEY;
    // const steamId = import.meta.env.VITE_STEAM_ID;

    // Log the event path for debugging
    console.log('Event Path:', path);

    let apiUrl = '';
    // apiUrl = apiUrl.replace(/\/$/, ''); // Remove trailing slash

    if (path.includes('/GetRecentlyPlayedGames')) {
        apiUrl = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${steamApiKey}&steamid=${steamId}&format=json`;
    } else if (path.includes('/GetSchemaForGame')) {
        const recentlyPlayedUrl = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${steamApiKey}&steamid=${steamId}&format=json`

        try {
            const response = await fetch(recentlyPlayedUrl);
            const data = await response.json();
            const gameList = (data.response.games || []).slice(0, 2);

            const achievementUrls = gameList.map(game => {
                const appid = game.appid;
                // return `http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${steamApiKey}&appid=${appid}`;
                return `http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appid}&key=${steamApiKey}&steamid=${steamId}`;
            });

            console.log('Achievement URLs:', achievementUrls);

            const achievementResponses = await Promise.all(achievementUrls.map(url => fetch(url)));
            const achievementsData = await Promise.all(achievementResponses.map(res => res.json()));

            return {
                statusCode: 200,
                body: JSON.stringify(achievementsData),
            };
        } catch (error) {
            console.error('Error fetching achievements:', error);
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Failed to fetch achievements', details: error.message }),
            };
        }
        // const response = await fetch(recentlyPlayedUrl);
        // const data = await response.json();
        // const gameList = (data.response.games || []).slice(0, 2); // Grabbing only two games

        // // const appid = gameList[0].appid

        // const achievementUrls = gameList.map(game => {
        //     const appid = game.appid;
        //     return `https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${steamApiKey}&appid=${appid}`;
        // });

        // console.log('App ID:', appid)

        // // Construct the URL for the GetSchemaForGame endpoint
        // apiUrl = `https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${steamApiKey}&appid=${appid}`;
    } else {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Invalid endpoint' }),
        };
    }

    try {
        const response = await fetch(apiUrl);
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
