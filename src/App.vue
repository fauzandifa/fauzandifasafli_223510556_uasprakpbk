<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header Section -->
    <q-header elevated class="custom-header" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar size="50px" class="custom-avatar">
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-black.svg">
          </q-avatar>
          <span class="custom-title">UAS PBK :)</span>
        </q-toolbar-title>
        <!-- Dropdown Menu -->
        <div class="q-pa-md">
          <q-btn-dropdown class="custom-dropdown-btn" color="white text-black" label="rincian bagian tugas">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick('tugas1')">
                <q-item-section>
                  <q-item-label>tugas 1</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="onItemClick('tugas2')">
                <q-item-section>
                  <q-item-label>tugas 2</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="onItemClick('tugas3')">
                <q-item-section>
                  <q-item-label>tugas 3</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="onItemClick('tugas4')">
                <q-item-section>
                  <q-item-label>tugas 4</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="onItemClick('tugas5')">
                <q-item-section>
                  <q-item-label>tugas 5</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="onItemClick('tugas6')">
                <q-item-section>
                  <q-item-label>tugas 6</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="onItemClick('tugas7')">
                <q-item-section>
                  <q-item-label>tugas 7</q-item-label>
                </q-item-section>
              </q-item>
              <!-- Add more items as needed -->
            </q-list>
          </q-btn-dropdown>
        </div>
        <!-- Search Input -->
        <q-input
          filled
          v-model="searchQuery"
          placeholder="Cari kota..."
          @keyup.enter="searchWeather"
          class="custom-search-input q-ml-md"
          style="max-width: 300px;"
        >
          <template v-slot:append>
            <q-icon name="search" @click="searchWeather" />
          </template>
        </q-input>
      </q-toolbar>
    </q-header>

    <!-- Main Content Section -->
    <q-page-container>
      <weather-info :city="city" v-if="city" />
    </q-page-container>
  </q-layout>
</template>

<script>
import WeatherInfo from './router/WeatherInfo.vue'; // Adjust path as needed

export default {
  components: {
    WeatherInfo
  },
  data() {
    return {
      searchQuery: '',
      city: ''
    };
  },
  methods: {
    searchWeather() {
      // Implement weather API integration here
      // For demonstration purposes, just setting city directly
      this.city = this.searchQuery.trim();
    },
    onItemClick(tugas) {
      const urls = {
        tugas1: 'https://fauzan-project-cv.vercel.app/',
        tugas2: 'https://tugas2pratikumpbk.netlify.app/',
        tugas3: 'https://223510556-fauzandifasafli-tugas3-pbk.netlify.app/',
        tugas4: 'https://fauzan-223510556-tugas4-prakpbk.netlify.app/',
        tugas5: 'https://fauzan-223510556-tugas5-prakpbk.netlify.app/',
        tugas6: 'https://fauzandifasafli-223510556-tugas6-prakpbk.vercel.app/',
        tugas7: 'https://fauzandifasafli-223510556-tugas7prakp.netlify.app/',
        
        
        // Add URLs for other items as needed
      };
      const url = urls[tugas];
      if (url) {
        window.open(url, '_blank');
      }
    }
  }
};
</script>

<style>

.custom-header {
  background-color: #1e88e5;
  background-image: url('');
  color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.custom-avatar img {
  border-radius: 50%;
  border: 2px solid #fff;
}

.custom-title {
  font-family: 'Roboto', sans-serif;
  font-size: 1.8rem;
  margin-left: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.custom-dropdown-btn {
  border-radius: 10px;
  background-color: #0d47a1;
  color: #fff;
  transition: background-color 0.3s ease;
}
.custom-dropdown-btn:hover {
  background-color: #1565c0;
}

.q-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.custom-search-input {
  border-radius: 30px;
  background-color: #e3f2fd;
  border: 1px solid #bbdefb;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.custom-search-input input {
  color: #0d47a1;
}

.custom-search-input .q-icon {
  color: #1e88e5;
}

.q-page-container {
  background-image: url('https://i.pinimg.com/564x/1b/57/f9/1b57f9f7028dd0d6db420ef4d684cc9f.jpg'); /* Replace with your image URL */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f5f5f5;
  padding: 20px;
  font-family: 'Open Sans', sans-serif;
  color: #424242;
}

.q-toolbar-title {
  display: flex;
  align-items: center;
}

.q-btn-dropdown .q-btn--outline {
  border: none;
}

.q-btn-dropdown .q-btn--outline.q-btn--dropdown {
  border: none;
}
</style>

