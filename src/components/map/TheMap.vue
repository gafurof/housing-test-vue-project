<template>
  <h3 class="mb-4">Location</h3>

  <v-row class="text-body-2 mb-4">
    <v-col cols="12" md="4">
      <strong>Address:</strong> {{ product.address }}
    </v-col>
    <v-col cols="12" md="4">
      <strong>City:</strong> {{ product.city }}
    </v-col>
    <v-col cols="12" md="4">
      <strong>Country:</strong> {{ product.country }}
    </v-col>
  </v-row>

  <v-sheet height="400" rounded elevation="2">
    <div ref="mapContainer" style="height: 100%; width: 100%;"></div>
  </v-sheet>

</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { useUserInfoStore } from '@/store/index.js'

const store = useUserInfoStore()
const route = useRoute()

const product = computed(() =>
  store.properties.find(p => p.id === Number(route.params.id))
)

const mapContainer = ref(null)

onMounted(() => {
  const lat = product.value?.lat || 40.7128
  const lng = product.value?.lng || -74.0060

  const map = L.map(mapContainer.value).setView([lat, lng], 13)

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map)

  let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIconRetina,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  });

  L.Marker.prototype.options.icon = DefaultIcon;

})
</script>
