import { createSlice } from "@reduxjs/toolkit";

const banner = createSlice({
    name: "banner",
    initialState: {
        banner: [
            {
                img: process.env.PUBLIC_URL + "/imgs/icons/mn.png",
                title: "Banner",
                descr: "your Title text ",
            },
            {
                img: process.env.PUBLIC_URL + "/imgs/icons/sm1.png",
                title: "",
                descr: "Women",
            },
            {
                img: process.env.PUBLIC_URL + "/imgs/icons/sm2.png",
                title: "",
                descr: "men",
            },
            {
                img: process.env.PUBLIC_URL + "/imgs/icons/md.png",
                title: "",
                descr: "Accessories",
            },
        ],
    },
});

export default (banner.reducer);