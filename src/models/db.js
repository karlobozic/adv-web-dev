// import { userMemStore } from "./mem/user-mem-store.js";
// import { playlistMemStore } from "./mem/playlist-mem-store.js";
// import { trackMemStore } from "./mem/track-mem-store.js";

import { userJsonStore } from "./json/user-json-store.js";
import { poiJsonStore } from "./json/poi-json-store.js";
import { riverJsonStore } from "./json/river-json-store.js";

export const db = {
  userStore: null,
  poiStore: null,
  riverStore: null,


  init() {
    this.userStore = userJsonStore;
    this.poiStore = poiJsonStore;
    this.riverStore = riverJsonStore;
  },
};