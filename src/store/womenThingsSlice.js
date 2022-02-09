import { createSlice } from "@reduxjs/toolkit";

const womenThings = createSlice({
    name: "womenThings",
    initialState: {
        womenThings: [
            {
                sizes: [],
                name:"Women's tracksuit Q109",
                img: [`${process.env.PUBLIC_URL}/imgs/cards/womens/1.png`],
                descr:"",
                price: 30,
                discount: 0,
                rating: 4,
            },
            {
                sizes: [],
                name:"Women's tracksuit Q109",
                img: [`${process.env.PUBLIC_URL}/imgs/cards/womens/2.png`],
                descr:"",
                price: 30,
                discount: 0,
                rating: 4,
            },
            {
                sizes: [],
                name:"Women's tracksuit Q109",
                img: [`${process.env.PUBLIC_URL}/imgs/cards/womens/3.png`],
                descr:"",
                price: 30,
                discount: 0,
                rating: 4,
            },
            {
                sizes: [],
                name:"Women's tracksuit Q109",
                img: [`${process.env.PUBLIC_URL}/imgs/cards/womens/4.png`],
                descr:"",
                price: 30,
                discount: 0,
                rating: 4,
            },
            {
                sizes: [],
                name:"Women's tracksuit Q109",
                img: [`${process.env.PUBLIC_URL}/imgs/cards/womens/5.png`],
                descr:"",
                price: 30,
                discount: 0,
                rating: 4,
            },
            {
                sizes: [],
                name:"Women's tracksuit Q109",
                img: [`${process.env.PUBLIC_URL}/imgs/cards/womens/6.png`],
                descr:"",
                price: 30,
                discount: 50,
                rating: 4,
            },
            {
                sizes: [],
                name:"Women's tracksuit Q109",
                img: [`${process.env.PUBLIC_URL}/imgs/cards/womens/7.png`],
                descr:"",
                price: 30,
                discount: 0,
                rating: 4,
            },
            {
                sizes: [],
                name:"Women's tracksuit Q109",
                img: [`${process.env.PUBLIC_URL}/imgs/cards/womens/8.png`],
                descr:"",
                price: 30,
                discount: 0,
                rating: 4,
            },
        ],
    },
});

export default (womenThings.reducer);