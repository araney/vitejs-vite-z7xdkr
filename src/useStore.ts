import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import { getModels } from "./api";

import Model from "./Model";

export const useStore = defineStore("test", () => {
    const models: Ref<Model[]> = ref([]);

    function loadModels() {
        return getModels().then(m => models.value = m);
    }

    return {
        models,
        loadModels
    };
});
