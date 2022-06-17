import { db } from "../models/db.js";

export const poiController = {
  index: {
    handler: async function (request, h) {
      const poi = await db.poiStore.getPOIById(request.params.id);
      const viewData = {
        title: "Playlist",
        poi: poi,
      };
      return h.view("poi-view", viewData);
    },
  },

  addRiver: {
    handler: async function (request, h) {
      const poi = await db.poiStore.getPOIById(request.params.id);
      const newRiver = {
        name: request.payload.name,
        description: request.payload.description,
        longitude: Number(request.payload.longitude),
        latitude: Number(request.payload.latitude),
      };
      await db.riverStore.addRiver(poi._id, newRiver);
      return h.redirect(`/poi/${poi._id}`);
    },
  },

  deleteRiver: {
    handler: async function(request, h) {
      const poi = await db.poiStore.getPOIById(request.params.id);
      await db.riverStore.deleteRiver(request.params.trackid);
      return h.redirect(`/poi/${poi._id}`);
    },
  },
};