<template>
  <v-sheet :height="mobile ? 226 : 400" rounded elevation="2">
    <div ref="mapContainer" style="height: 100%; width: 100%;"></div>
  </v-sheet>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

const { mobile } = useDisplay()
const mapContainer = ref(null)

onMounted(() => {
  const lat = 41.224239
  const lng = 69.210270

  const map = L.map(mapContainer.value).setView([lat, lng], 19)

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map)

  delete L.Icon.Default.prototype._getIconUrl

  L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIconRetina,
    shadowUrl: markerShadow,
  })

  L.marker([lat, lng]).addTo(map)
  L.marker([41.220873, 69.214512]).addTo(map)
  L.marker([41.220765, 69.213420]).addTo(map)
  L.marker([41.224239, 69.211400]).addTo(map)
  L.marker([41.225239, 69.211400]).addTo(map)
})
</script>
