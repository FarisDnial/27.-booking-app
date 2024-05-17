import { configureStore } from "@reduxjs/toolkit";
import bookingsReducer from "./features/books/bookingSlice";

export default configureStore({
    reducer: {
        bookings: bookingsReducer,
    },
});