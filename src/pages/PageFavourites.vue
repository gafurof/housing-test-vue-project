<template>
  <v-container>
    <h2 class="text-center mt-5">Favourites</h2>
    <p class="text-center">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>

    <p class="mt-5" style="font-size: 14px;">{{ properties.length }} results</p>
  </v-container>
  <PropertiesList :properties="properties" />
</template>

<script setup>
import { reactive } from 'vue'
import { useUserInfoStore } from '@/store/index.js'
import PropertiesList from '@/components/properties-list/PropertiesList.vue';

const store = useUserInfoStore()

const properties = reactive(
  store.properties.filter(propertie => propertie.like === true)
);
</script>
