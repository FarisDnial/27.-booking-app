import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Dashboard/Sidebar";
import BookingList from "../components/Booking/BookingList";
import { Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { fetchBookingsByUser } from "../features/books/bookingSlice"

export default function BookingPage() {

    const dispatch = useDispatch();
    const bookings = useSelector((state) => state.bookings.bookings);
    // const loading = useSelector((state) => state.bookings.loading);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            const decodeToken = jwtDecode(token);
            const userId = decodeToken.id;
            dispatch(fetchBookingsByUser(userId));
        }
    }, [dispatch]);

    return (
        <>
            <Row>
                <Col sm={2}>
                    <Sidebar />
                </Col>
                <Col sm={10} >
                    <Row className="py-5 px-5 justify-content-center align-items-center">
                        <Typography className="py-5" variant="h1">Your Booking Session List</Typography>
                        <BookingList
                            bookings={bookings}
                        />

                    </Row>
                </Col>
            </Row>
        </>
    );
}