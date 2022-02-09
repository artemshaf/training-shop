import { createSlice } from "@reduxjs/toolkit";

const headerNav = createSlice({
    name: "headerNav",
    initialState: {
        headerNav: [
            {
                to: "about",
                text: "About Us",
            },
            {
                to: "women",
                text: "Women",
            },
            {
                to: "men",
                text: "Men",
            },
            {
                to: "beauty",
                text: "Beauty",
            },
            {
                to: "accessories",
                text: "Accessories",
            },
            {
                to: "blog",
                text: "Blog",
            },
            {
                to: "contact",
                text: "Contact",
            },
        ],
    },
});

export default (headerNav.reducer);