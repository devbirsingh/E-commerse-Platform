import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCart = createAsyncThunk(
    "products/getCart",
    async (_, {rejectWithValue}) => {
        try {
            const token = localStorage.getItem('token');
            const res = await axios.get(`${import.meta.env.VITE_API_BASEURL}/cart`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            return res.data.data;
        } catch (err) {
            rejectWithValue(err.reponse.data.message);
        }
    }
)

export const addToCart = createAsyncThunk(
    "products/addToCart",
    async (productId,{rejectWithValue}) => {
        try {
            const token= localStorage.getItem("token");
            const res = await axios.get(`${import.meta.env.VITE_API_BASEURL}/cart`,
                {productId},
                {
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            )
            return res.data.data;
        } catch (error) {
            rejectWithValue(error.reponse.data.message);
        }
    }
)

export const removeFromCart = createAsyncThunk(
    "products/removeFromCart",
    async (productId,{rejectWithValue}) => {
        try {
            const token= localStorage.getItem("token");
            const res = await axios.get(`${import.meta.env.VITE_API_BASEURL}/cart`,
                {productId},
                {
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            )
            return res.data.data;
        } catch (error) {
            rejectWithValue(error.reponse.data.message);
        }
    }
)