<script setup lang="ts">
import { PropType } from 'vue';
import Model from './Model';

const props = defineProps({
  models: { type: Array as PropType<Model[]>, required: true },
});
</script>

<template>
  <p>Models:</p>
  <ul>
    <li v-for="model in models">{{ model.id }}: {{ model.name }}</li>
  </ul>
</template>
