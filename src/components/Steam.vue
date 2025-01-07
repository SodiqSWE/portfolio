<template>
    <div>
        <h2 class="text-white font-semi-bold space-y-4 pb-5">Recently Played Games</h2>
        <ul class="flex flex-row space-x-5">
            <li v-for="game in games" :key="game.appid" class="pb-5">
                <img :src="getGameImage(game.appid)" alt="Game Cover" class="rounded"/>
                <p class="text-white">{{ game.name }} - {{ (game.playtime_forever / 60).toFixed(2) }} hours</p>
                <p class="text-white">🏆 {{ game.achievements }} achievements</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const games = ref([]);
const apiKey = import.meta.env.VITE_STEAM_API_KEY;
const steamId = import.meta.env.VITE_STEAM_ID;

const fetchGames = async () => {
    // Use the proxy path
    const url = `/api/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${apiKey}&steamid=${steamId}&format=json`;

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
  const url = `/api/ISteamUserStats/GetSchemaForGame/v2/?key=${apiKey}&appid=${appid}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const totalAchievements =
      data?.game?.availableGameStats?.achievements?.length || 0;
    return totalAchievements;
  } catch (error) {
    console.error(`Error fetching achievements for appid ${appid}:`, error);
    return 0; // Default to 0 if there's an error
  }
};

const getGameImage = (appid) => `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/header.jpg`;

onMounted(fetchGames);
</script>