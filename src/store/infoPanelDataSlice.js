import { createSlice } from "@reduxjs/toolkit";

const infoPanelData = createSlice({
    name: "infoPanelData",
    initialState: {
        infoPanelData: [
            {
                img: "/imgs/icons/phone.svg",
                text: "+375 29 100 20 30",
            },
            {
                img: "/imgs/icons/map.svg",
                text: "Belarus, Gomel, Lange 17",
            },
            {
                img: "/imgs/icons/oClock.svg",
                text: "All week 24/7",
            },
        ],
    },
});

export default (infoPanelData.reducer);