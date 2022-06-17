import { db } from "../models/db.js";
import { poiJsonStore } from "../models/json/poi-json-store.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      // const poi = await db.poiStore.getUserPOI(loggedInUser._id);
      const poi = await db.poiStore.getAllPOI();
      const viewData = {
        title: "Playtime Dashboard",
        user: loggedInUser,
        poi: poi,
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addPOI: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const newPOI = {
        userid: loggedInUser._id,
        title: request.payload.title,
      };
      await db.poiStore.addPOI(newPOI);
      return h.redirect("/dashboard");
    },
  },

  map: {
    handler: async function (request, h) {
      return h.view("map-view");
    },
  },
};