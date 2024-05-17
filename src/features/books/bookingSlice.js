import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const BASE_URL = "https://279aa7f6-f772-4f73-a6e0-19eae612c706-00-q1e0ghxworay.kirk.replit.dev";

// Async thunk for fetching a user's booking
export const fetchBookingsByUser = createAsyncThunk(
    "posts/fetchByUser",
    async (userId) => {
        const response = await fetch(`${BASE_URL}/bookings/user/${userId}`);
        return response.json();
    }
);

// Async thunk to create a booking
export const createBooking = createAsyncThunk(
    "posts/createBooking",
    async ({ service, description, date, time, phoneNumber, }) => {
        const token = localStorage.getItem("authToken");
        const decode = jwtDecode(token);
        const userId = decode.id;
        const userEmail = decode.username;

        const data = {
            service: service,
            description: description,
            date: date,
            time: time,
            user_id: userId,
            email: userEmail,
            phoneNumber: phoneNumber,
        };

        const response = await axios.post(`${BASE_URL}/bookings`, data);
        return response.data;
    })

// // Async thunk to update a booking
// export const updateBooking = createAsyncThunk(
//     "posts/updateBooking",
//     async ({ bookingsId, service, newDescription, newDate, newTime, newPhoneNumber }) => {
//         const token = localStorage.getItem("authToken");
//         const decode = jwtDecode(token);
//         const userId = decode.id;
//         const userEmail = decode.username;

//         const data = {
//             bookingsId: bookingsId,
//             service: service,
//             description: newDescription,
//             date: newDate,
//             time: newTime,
//             user_id: userId,
//             email: userEmail,
//             phoneNumber: newPhoneNumber,
//         };

//         const response = await axios.put(`${BASE_URL}/bookings`, data);
//         return response.data;
//     })

export const updateBooking = createAsyncThunk(
    "posts/updateBooking",
    async ({ bookingsId, service, newDescription, newDate, newTime, newPhoneNumber }) => {
        const token = localStorage.getItem("authToken");
        const decode = jwtDecode(token);
        const userId = decode.id;
        const userEmail = decode.username;

        const data = {
            bookingsId: bookingsId,
            service: service,
            description: newDescription,
            date: newDate,
            time: newTime,
            user_id: userId,
            email: userEmail,
            phoneNumber: newPhoneNumber,
        };

        try {
            const response = await axios.put(`${BASE_URL}/bookings`, data);
            return response.data;
        } catch (error) {
            console.error("Error updating booking:", error);
            throw error; // Rethrow the error to be caught by the component
        }
    }
);

//Async thunk to delete a booking
export const deleteBooking = createAsyncThunk(
    "posts/deleteBooking",
    async (bookingsId) => {
        const token = localStorage.getItem("authToken");
        const decode = jwtDecode(token);
        const userId = decode.id;

        // You can add any additional checks or data you want to include with the request
        const response = await axios.delete(`${BASE_URL}/bookings/${bookingsId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {
                user_id: userId,
            }
        });
        return response.data;
    }
);


// Slice
const bookingSlice = createSlice({
    name: "bookings",
    initialState: { bookings: [], loading: true },
    reducers: {},// reducers to manage sync action
    // extraReducers is to hanlde async action
    extraReducers: (builder) => {
        // whenever fetchsByUser finished running (fulfilled), the state data is updated
        builder
            .addCase(fetchBookingsByUser.fulfilled, (state, action) => {
                state.bookings = action.payload; //updated with fetched data
                state.loading = false; // loading status set to false
            })
            .addCase(createBooking.fulfilled, (state, action) => {
                state.bookings = [action.payload, ...state.bookings];
            })
            .addCase(updateBooking.fulfilled, (state, action) => {
                const updatedBooking = action.payload;
                // Find and update the post in the state
                const bookingIndex = state.bookings.findIndex(
                    (bookings) => bookings.id === updatedBooking.id
                );
                if (bookingIndex !== -1) {
                    state.bookings[bookingIndex] = updatedBooking;
                }
            })
            .addCase(deleteBooking.fulfilled, (action, state) => {
                const deletedBookigId = action.payload;
                // Filter out the deleted post from state
                state.bookings = state.bookings.filter((bookings) => bookings.id !== deletedBookigId);
            })
    },
});

export default bookingSlice.reducer;