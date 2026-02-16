<template>
  <FilterBar />
  <v-container>
    <h2 class="text-center mt-5">Properties</h2>
    <p class="text-center">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>

    <p class="mt-5" style="font-size: 14px;">{{ properties.length }} results</p>
  </v-container>
  <PropertiesList :properties="properties" />
</template>

<script setup>
import { reactive } from 'vue'
import { useUserInfoStore } from '@/store/index.js'
import FilterBar from '@/components/filter-bar/FilterBar.vue';
import PropertiesList from '@/components/properties-list/PropertiesList.vue';

const store = useUserInfoStore()

const properties = reactive(store.properties)
</script>
