import { createSlice } from "@reduxjs/toolkit";

const arrivals = createSlice({
    name: "arrivals",
    initialState: {
        arrivals: [
            {
                text: "NEW ARRIVALS",
                to: "",
            },
            {
                text: "SPECIALS",
                to: "",
            },
            {
                text: "BESTSELLERS",
                to: "",
            },
            {
                text: "MOST VIEWED",
                to: "",
            },
            {
                text: "FEATURED PRODUCTS",
                to: "",
            },
        ],
    },
});

export default (arrivals.reducer);