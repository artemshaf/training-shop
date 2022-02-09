import { createSlice } from "@reduxjs/toolkit";

const socials = createSlice({
    name: "socials",
    initialState: {
        socials: [
            {
                img: "/imgs/icons/facebook.svg",
                href: "/1",
            },
            {
                img: "/imgs/icons/twitter.svg",
                href: "/2",
            },
            {
                img: "/imgs/icons/instagram.svg",
                href: "/3",
            },
            {
                img: "/imgs/icons/p-soc.svg",
                href: "/4",
            },
        ],
    },
});

export default (socials.reducer);