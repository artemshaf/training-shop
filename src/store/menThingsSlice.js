import { createSlice } from "@reduxjs/toolkit";

const menThings = createSlice({
    name: "menThings",
    initialState: {
        menThings: [
            {
                sizes: [],
                name:"Women's tracksuit Q109",
                img: [`${process.env.PUBLIC_URL}/imgs/cards/mens/1.png`],
                descr:"",
                price: 30,
                discount: 0,
                rating: 4,
            },
            {
                sizes: [],
                name:"Women's tracksuit Q109",
                img: [`${process.env.PUBLIC_URL}/imgs/cards/mens/2.png`],
                descr:"",
                price: 30,
                discount: 0,
                rating: 4,
            },
            {
                sizes: [],
                name:"Women's tracksuit Q109",
                img: [`${process.env.PUBLIC_URL}/imgs/cards/mens/3.png`],
                descr:"",
                price: 30,
                discount: 0,
                rating: 4,
            },
            {
                sizes: [],
                name:"Women's tracksuit Q109",
                img: [`${process.env.PUBLIC_URL}/imgs/cards/mens/4.png`],
                descr:"",
                price: 30,
                discount: 0,
                rating: 4,
            },
            {
                sizes: [],
                name:"Women's tracksuit Q109",
                img: [`${process.env.PUBLIC_URL}/imgs/cards/mens/5.png`],
                descr:"",
                price: 30,
                discount: 0,
                rating: 4,
            },
            {
                sizes: [],
                name:"Women's tracksuit Q109",
                img: [`${process.env.PUBLIC_URL}/imgs/cards/mens/6.png`],
                descr:"",
                price: 30,
                discount: 50,
                rating: 4,
            },
            {
                sizes: [],
                name:"Women's tracksuit Q109",
                img: [`${process.env.PUBLIC_URL}/imgs/cards/mens/7.png`],
                descr:"",
                price: 30,
                discount: 0,
                rating: 4,
            },
            {
                sizes: [],
                name:"Women's tracksuit Q109",
                img: [`${process.env.PUBLIC_URL}/imgs/cards/mens/8.png`],
                descr:"",
                price: 30,
                discount: 0,
                rating: 4,
            },
        ],
    },
});

export default (menThings.reducer);