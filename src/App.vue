<script setup lang="ts">
import { ref } from 'vue';

import Child from './Child.vue';

import { getModels } from './api';
import Model from './Model';

const models = ref<Model[]>([]);

getModels().then((m) => (models.value = m));
</script>

<template>
  <Child :models="models" />
</template>
