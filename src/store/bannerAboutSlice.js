import { createSlice } from "@reduxjs/toolkit";

const bannerAbout = createSlice({
    name: "bannerAbout",
    initialState: {
        bannerAbout: [
            {
                img: process.env.PUBLIC_URL + "/imgs/icons/car.svg",
                title: "FREE SHIPPING",
                descr: "On all UA order or order above $100",
            },
            {
                img: process.env.PUBLIC_URL + "/imgs/icons/refresh.svg",
                title: "30 DAYS RETURN",
                descr: "Simply return it within 30 days for an exchange",
            },
            {
                img: process.env.PUBLIC_URL + "/imgs/icons/support.svg",
                title: "SUPPORT 24/7",
                descr: "Contact us 24 hours a day, 7 days a week",
            },
        ],
    },
});

export default (bannerAbout.reducer);