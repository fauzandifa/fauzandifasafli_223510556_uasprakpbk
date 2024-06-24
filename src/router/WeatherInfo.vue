<template>
  <div class="weather-container">
    <q-card v-if="weather.temp" class="weather-card">
      <q-card-section>
        <div class="text-h6 city-name">{{ city }}</div>
        <div class="text-subtitle1 temperature">Suhu: {{ weather.temp }} °C</div>
        <div class="text-subtitle2 weather-description">Cuaca: {{ weather.description }}</div>
        <router-link :to="{ name: 'Home' }">Kembali ke Beranda</router-link>
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

<style scoped>
.weather-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Menyesuaikan tinggi sesuai kebutuhan */
}

.weather-card, .loading-card {
  max-width: 400px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.weather-card {
  margin: 20px;
  padding: 20px;
}

.loading-card {
  text-align: center;
  padding: 20px;
}

.city-name {
  font-weight: bold;
  margin-bottom: 10px;
}

.temperature {
  margin-bottom: 5px;
}

.weather-description {
  margin-bottom: 15px;
}

.loading-message {
  font-style: italic;
  color: #888;
}

.router-link {
  display: block;
  margin-top: 10px;
  text-align: center;
  color: #03a9f4;
  text-decoration: none;
}
</style>
