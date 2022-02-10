import { configureStore } from "@reduxjs/toolkit";

import infoPanelDataReducer from "./infoPanelDataSlice";
import socialsReducer from "./socialsSlice";
import headerNavReducer from "./headerNavSlice";
import bannerReducer from "./bannerSlice";
import bannerAboutReducer from "./bannerAboutSlice";
import thingsReducer from "./thingsSlice";


export default configureStore({
    reducer: {
        infoPanelData: infoPanelDataReducer,
        socials: socialsReducer,
        headerNav: headerNavReducer,
        banner: bannerReducer,
        bannerAbout: bannerAboutReducer,
        things: thingsReducer,
    }
});