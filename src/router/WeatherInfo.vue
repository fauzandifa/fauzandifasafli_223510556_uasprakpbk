<template>
  <div class="weather-container">
    <q-card v-if="weather.temp" class="weather-card">
      <q-card-section>
        <div class="text-h6 city-name">{{ city }}</div>
        <div class="text-subtitle1 temperature">Suhu: {{ weather.temp }} °C</div>
        <div class="text-subtitle2 weather-description">Cuaca: {{ weather.description }}</div>
      </q-card-section>
    </q-card>
    <q-card v-else class="loading-card">
      <q-card-section>
        <div class="text-h6 loading-message">{{ loadingMessage }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    city: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      weather: {
        temp: '',
        description: ''
      },
      loadingMessage: 'Memuat data cuaca...'
    };
  },
  watch: {
    city: 'fetchWeather'
  },
  mounted() {
    this.fetchWeather();
  },
  methods: {
    fetchWeather() {
      if (!this.city) {
        this.loadingMessage = 'Nama kota tidak valid';
        return;
      }

      const apiKey = '4df3f9b2a14b71f54e6938bd9ed765c9'; // Ganti dengan API key Anda yang valid
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(this.city)}&appid=${apiKey}&units=metric`;

      axios.get(url)
        .then(response => {
          console.log(response.data); // Periksa respons API di konsol
          const data = response.data;
          this.weather.temp = data.main.temp;
          this.weather.description = data.weather[0].description;
          this.loadingMessage = ''; // Kosongkan pesan loading saat data berhasil dimuat
        })
        .catch(error => {
          console.error('Error fetching weather:', error);
          if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
            if (error.response.status === 401) {
              this.loadingMessage = 'API key tidak valid atau tidak diotorisasi';
            } else {
              this.loadingMessage = 'Terjadi kesalahan saat memuat data cuaca';
            }
          } else {
            this.loadingMessage = 'Gagal melakukan koneksi ke server';
          }
          this.weather.temp = '';
          this.weather.description = '';
        });
    }
  }
};
</script>

<style>
.weather-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height of the viewport */ /* Light background color */
}

.weather-card, .loading-card {
  width: 90%; /* Adjust width as necessary */
  max-width: 400px; /* Maximum width to avoid being too large */
  margin: 0 auto; /* Center horizontally */
  background-color: #e3f2fd;
  border: 1px solid #90caf9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
}

.city-name {
  font-size: 1.6rem;
  color: #0d47a1;
  margin-bottom: 10px;
  font-weight: bold;
}

.temperature {
  font-size: 1.4rem;
  color: #1976d2;
}

.weather-description {
  font-size: 1.2rem;
  color: #1e88e5;
  font-style: italic;
}

.loading-message {
  font-size: 1.4rem;
  color: #ff7043;
}
</style>
