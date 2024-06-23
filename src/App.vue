<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header Section -->
    <q-header elevated class="bg-primary text-black" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-black.svg">
          </q-avatar>
          UAS PBK :)
        </q-toolbar-title>
        <!-- Dropdown Menu -->
        <div class="q-pa-md">
          <q-btn-dropdown color="white text-black" label="Dropdown Button">
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
          class="q-ml-md"
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
/* Add your custom styles here */
</style>
