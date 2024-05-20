import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

// Async thunk for fetching a user's booking
export const fetchBookingsByUser = createAsyncThunk(
    "bookings/fetchByUser",
    async (userId) => {
        try {
            const bookingsRef = collection(db, `users/${userId}/bookings`);

            const querySnapshot = await getDocs(bookingsRef);
            const docs = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            return docs;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);

// Async thunk to create a booking
export const createBooking = createAsyncThunk(
    "bookings/createBooking",
    async ({ userId, service, description, date, time, phoneNumber, }) => {
        try {
            const bookingsRef = collection(db, `users/${userId}/bookings`);
            console.log(`users/${userId}/bookings`);
            //since no ID is given, Firestore auto generate a unique ID for this new document
            const newBookingsRef = doc(bookingsRef);
            console.log(service);
            await setDoc(newBookingsRef, { service: service, description: description, date: date, time: time, phone_number: phoneNumber });
            const newBookings = await getDoc(newBookingsRef);

            const bookings = {
                id: newBookings.id,
                ...newBookings.data(),
            };

            return bookings;
        } catch (error) {
            console.error(error);
            throw error;
        }

    })

//async thunk to update a booking
export const updateBooking = createAsyncThunk(
    "bookings/updateBookings",
    async ({ userId, bookingsId, service, newDescription, newDate, newTime, newPhoneNumber }) => {
        try {
            //reference to the existing bookings
            const bookingsRef = doc(db, `users/${userId}/bookings/${bookingsId}`);
            // get the current bookings data
            const bookingsSnap = await getDoc(bookingsRef);
            if (bookingsSnap.exists()) {
                const bookingsData = bookingsSnap.data();

                //update the booking content
                const updatedData = {
                    ...bookingsData,
                    service: service || bookingsData.service,
                    description: newDescription || bookingsData.description,
                    date: newDate || bookingsData.date,
                    time: newTime || bookingsData.time,
                    phone_number: newPhoneNumber || bookingsData.phone_number,
                };

                //update the existing document in Firestore
                await updateDoc(bookingsRef, updatedData);

                //return the booking with updated data
                const updatedBooking = { id: bookingsId, ...updatedData };
                return updatedBooking;
            } else {
                throw new Error("Post does not exist");
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
)

//async thunk to delete a booking
export const deleteBooking = createAsyncThunk(
    "bookings/deleteBookings",
    async ({ userId, bookingsId }) => {
        try {
            //Reference the bookings 
            const bookingsRef = doc(db, `users/${userId}/bookings/${bookingsId}`);
            //Delete the post
            await deleteDoc(bookingsRef);
            //return the Id of the deleted booking
            console.log(bookingsId)
            console.log("Booking succesfully deleted");
            return bookingsId;
        } catch (error) {
            console.error(error);
            throw error;
        }
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
                //find and update the post on the state
                const bookingsIndex = state.bookings.findIndex(
                    (booking) => booking.id === updatedBooking.id
                );
                if (bookingsIndex !== -1) {
                    state.bookings[bookingsIndex] = updatedBooking;
                    console.log("Booking Updates Succesfully !")
                }
            })
            .addCase(deleteBooking.fulfilled, (state, action) => {
                const deletedBookingsId = action.payload;
                // filter out the deleted booking from state
                state.bookings = state.bookings.filter((booking) => booking.id !== deletedBookingsId)

            });
    },
});

export default bookingSlice.reducer;


// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
// import { db } from "../../firebase";

// // Async thunk for fetching a user's booking
// export const fetchBookingsByUser = createAsyncThunk(
//     "bookings/fetchByUser",
//     async (userId) => {
//         try {
//             const bookingsRef = collection(db, `users/${userId}/bookings`);
//             const querySnapshot = await getDocs(bookingsRef);
//             const docs = querySnapshot.docs.map((doc) => ({
//                 id: doc.id,
//                 ...doc.data(),
//             }));
//             return docs;
//         } catch (error) {
//             console.error(error);
//             throw error;
//         }
//     }
// );

// // Async thunk to create a booking
// export const createBooking = createAsyncThunk(
//     "bookings/createBooking",
//     async ({ userId, service, description, date, time, phoneNumber }) => {
//         try {
//             const bookingsRef = collection(db, `users/${userId}/bookings`);
//             const newBookingsRef = doc(bookingsRef);
//             await setDoc(newBookingsRef, { service, description, date, time, phone_number: phoneNumber });
//             const newBookings = await getDoc(newBookingsRef);
//             const bookings = {
//                 id: newBookings.id,
//                 ...newBookings.data(),
//             };
//             return bookings;
//         } catch (error) {
//             console.error(error);
//             throw error;
//         }
//     }
// );

// // Async thunk to update a booking
// export const updateBooking = createAsyncThunk(
//     "bookings/updateBooking",
//     async ({ userId, bookingsId, service, newDescription, newDate, newTime, newPhoneNumber }) => {
//         try {
//             const bookingsRef = doc(db, `users/${userId}/bookings/${bookingsId}`);
//             const bookingsSnap = await getDoc(bookingsRef);
//             if (bookingsSnap.exists()) {
//                 const bookingsData = bookingsSnap.data();
//                 const updatedData = {
//                     ...bookingsData,
//                     service: service || bookingsData.service,
//                     description: newDescription || bookingsData.description,
//                     date: newDate || bookingsData.date,
//                     time: newTime || bookingsData.time,
//                     phone_number: newPhoneNumber || bookingsData.phone_number,
//                 };
//                 await updateDoc(bookingsRef, updatedData);
//                 const updatedBooking = { id: bookingsId, ...updatedData };
//                 return updatedBooking;
//             } else {
//                 throw new Error("Booking does not exist");
//             }
//         } catch (error) {
//             console.error(error);
//             throw error;
//         }
//     }
// );

// // Async thunk to delete a booking
// export const deleteBooking = createAsyncThunk(
//     "bookings/deleteBooking",
//     async ({ userId, bookingsId }) => {
//         try {
//             const bookingsRef = doc(db, `users/${userId}/bookings/${bookingsId}`);
//             await deleteDoc(bookingsRef);
//             return bookingsId;
//         } catch (error) {
//             console.error(error);
//             throw error;
//         }
//     }
// );

// // Slice
// const bookingSlice = createSlice({
//     name: "bookings",
//     initialState: { bookings: [], loading: false, error: null },
//     reducers: {}, // reducers to manage sync action
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchBookingsByUser.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchBookingsByUser.fulfilled, (state, action) => {
//                 state.bookings = action.payload;
//                 state.loading = false;
//             })
//             .addCase(fetchBookingsByUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message;
//             })
//             .addCase(createBooking.fulfilled, (state, action) => {
//                 state.bookings = [action.payload, ...state.bookings];
//             })
//             .addCase(createBooking.rejected, (state, action) => {
//                 state.error = action.error.message;
//             })
//             .addCase(updateBooking.fulfilled, (state, action) => {
//                 const updatedBooking = action.payload;
//                 const bookingsIndex = state.bookings.findIndex(
//                     (booking) => booking.id === updatedBooking.id
//                 );
//                 if (bookingsIndex !== -1) {
//                     state.bookings[bookingsIndex] = updatedBooking;
//                 }
//             })
//             .addCase(updateBooking.rejected, (state, action) => {
//                 state.error = action.error.message;
//             })
//             .addCase(deleteBooking.fulfilled, (state, action) => {
//                 const deletedBookingsId = action.payload;
//                 state.bookings = state.bookings.filter((booking) => booking.id !== deletedBookingsId);
//             })
//             .addCase(deleteBooking.rejected, (state, action) => {
//                 state.error = action.error.message;
//             });
//     },
// });

// export default bookingSlice.reducer;
