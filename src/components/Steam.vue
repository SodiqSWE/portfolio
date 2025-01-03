<template>
    <div>
      <h2 class="text-white">Recently Played Games</h2>
      <ul>
        <li v-for="game in games" :key="game.appid">
          <img :src="getGameImage(game.appid)" alt="Game Cover" />
          <p>{{ game.name }} - {{ (game.playtime_forever / 60).toFixed(2) }} hours</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const games = ref([]);
  
  const fetchGames = async () => {
    const apiKey = '';
    const steamId = '76561198077021739';
    // const url = `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${apiKey}&steamid=${steamId}&format=json`;

    // Use the proxy path
    const url = `/api/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${apiKey}&steamid=${steamId}&format=json`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      games.value = data.response.games || [];
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  };
  
  const getGameImage = (appid) => `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/header.jpg`;
  
  onMounted(fetchGames);
  </script>
  