<template>
    <div>
        <h2 class="text-white font-semi-bold space-y-4 pb-5">Recently Played</h2>
        <ul class="flex flex-row space-x-5">
            <li v-for="game in games" :key="game.appid"
                class="pb-5 transition ease-in-out hover:-translate-y-2 duration-300">
                <a :href="getGameLink(game.appid)" target="_blank">
                    <img :src="getGameImage(game.appid)" alt="Game Cover" class="rounded" />
                </a>
                <p class="text-sm text-white">{{ game.name }} - {{ (game.playtime_forever / 60).toFixed(2) }} hours</p>
                <p class="text-sm text-white">🏆 {{ game.achievements }} achievements</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const games = ref([]);
// const apiKey = process.env.STEAM_API_KEY;
// const steamId = process.env.STEAM_ID;
const apiKey = import.meta.env.VITE_STEAM_API_KEY;
const steamId = import.meta.env.VITE_STEAM_ID;

const apiBaseUrl = import.meta.env.DEV
    ? '/api'
    : '/.netlify/functions/steamProxy';

const fetchGames = async () => {
    // Use the proxy path
    const url = `${apiBaseUrl}/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${apiKey}&steamid=${steamId}&format=json`;
    console.log('Loaded steam API key in fetchGames:', apiKey)
    try {
        const response = await fetch(url);
        const data = await response.json();
        // const gameList = data.response.games || [];
        const gameList = (data.response.games || []).slice(0, 2); // Grabbing only two games
        // Add achievements data for each game
        const gamesWithAchievements = await Promise.all(
            gameList.map(async (game) => {
                const achievements = await fetchAchievements(game.appid);
                return {
                    ...game,
                    achievements,
                };
            })
        );
        games.value = gamesWithAchievements;
    } catch (error) {
        console.error('Error fetching games:', error);
    }
};

// Fetch achievements for a specific game
const fetchAchievements = async (appid) => {
    console.log('Fetching achievements for appid:', appid); // Log appid to ensure it's not null or undefined
    const url = `${apiBaseUrl}/api/ISteamUserStats/GetSchemaForGame/v2/?key=${apiKey}&appid=${appid}`;
    try {
        console.log('Fetching achievements for appid:', appid);
        console.log('Constructed URL:', url);
        console.log('Loaded steam API key in fetchAchievments:', apiKey)

        const response = await fetch(url);

        console.log('Response Status:', response.status);
        console.log('Response Headers:', [...response.headers]);
        console.log('Response Body:', response.body);

        if (!response.ok) {
            console.error(`API call failed with status ${response.status}`);
            return 0;
        };

        const data = await response.json();

        console.log('Full API Response:', data); // Log the full response to debug

        const totalAchievements =
            data?.game?.availableGameStats?.achievements?.length || 0;
        return totalAchievements;
    } catch (error) {
        console.error(`Error fetching achievements for appid ${appid}:`, error);
        return 0; // Default to 0 if there's an error
    }
};

const getGameImage = (appid) => `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/header.jpg`;
const getGameLink = (appid) => `https://store.steampowered.com/app/${appid}`;

onMounted(fetchGames);
</script>