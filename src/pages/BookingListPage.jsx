import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Layout/Sidebar";
import BookingList from "../components/Booking/BookingList";
import { Card, CardBody } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useContext } from "react";
import { fetchBookingsByUser } from "../features/books/bookingSlice"
import { AuthContext } from "../components/AuthProvider";

export default function BookingListPage() {

    const dispatch = useDispatch();
    const bookings = useSelector((state) => state.bookings.bookings);
    const { currentUser } = useContext(AuthContext);
    const userId = currentUser.uid;

    useEffect(() => {
        dispatch(fetchBookingsByUser(userId))
    }, [dispatch, userId]);

    return (
        <>
            <Row>
                <Col sm={2} style={{ width: "20rem" }}>
                    <Sidebar />
                </Col>
                <Col sm={10} style={{ width: "130rem" }}>
                    <Row className="py-5 px-5 justify-content-center align-items-center">
                        <Card color="white" variant="gradient" className="w-full max-w-[20rem] p-8 border border-white shadow-lg">
                            <CardBody>
                                <div className="text-center py-5">
                                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                        My Booking Session List
                                    </h1>
                                </div>
                                {/* <Typography className="mt-3 px-5" variant="h3">
                                    Manage Your Bookings
                                </Typography>
                                <Typography className="mb-3 px-5" variant="h5">
                                    View and manage all your booking sessions here. You can update or delete any booking as needed.
                                </Typography> */}
                                <BookingList
                                    key={bookings.id}
                                    bookings={bookings}
                                />
                            </CardBody>
                        </Card>

                    </Row>
                </Col>
            </Row>
        </>
    );
}



