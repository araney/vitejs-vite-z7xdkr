<script setup lang="ts">
import { ref, Ref } from 'vue';
import { storeToRefs } from "pinia";

import { useStore } from "./useStore";
import Child from './Child.vue';

const store = useStore();
const { models } = storeToRefs(store);

store.loadModels();

</script>

<template>
  <Child :models="models" />
</template>
