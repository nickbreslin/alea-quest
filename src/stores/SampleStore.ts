import { defineStore, acceptHMRUpdate } from "pinia";
//import type { .. } from "@/types";

export const useSampleStore = defineStore("SampleStore", {
  state: () => {
    return {};
  },
  getters: {},
  actions: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSampleStore, import.meta.hot));
}
