import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Layout/Sidebar";
import BookCard from "../components/Booking/BookCard";
import { Typography } from "@material-tailwind/react";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function BookingPage() {

    const navigate = useNavigate();

    const navigateToBookingListPage = () => navigate("/bookinglist")
    return (
        <>
            <Row>
                <Col sm={2}>
                    <Sidebar />
                </Col>
                <Col sm={10}>
                    <Row className="py-5 px-5 justify-content-center align-items-center">
                        <BookingPageHeader />
                        <div className="mt-4 flex justify-end">
                            <Button size="lg" className="bg-black text-white" onPress={navigateToBookingListPage}>Show My Booking List</Button>
                        </div>
                        <BookCard />
                    </Row>
                </Col>
            </Row>

        </>
    );
}


export function BookingPageHeader() {
    return (
        <figure className="relative h-96 w-full">
            <img
                className="h-full w-full rounded-xl object-cover object-center"
                src="https://www.lukas-petereit.com/wp-content/uploads/2017/10/Rakotzbr%C3%BCcke-Bridge-Rakotz-Kromlau-Lake-Sun-Sunrise-Landscape-Reflection-Germany-Saxony-Travel-Photography-Nature-Photo-Spreewald-2.jpg"
                alt="nature image"
            />
            <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                <div>
                    <Typography variant="h3" color="blue-gray">
                        Book Your Session with Us
                    </Typography>
                    <Typography color="gray" className="mt-2 font-normal" variant="h5">
                        Choose from our range of services, select a date and time, and provide any details. Our professional photographers are ready to bring your vision to life. Secure your spot today!
                    </Typography>
                </div>

            </figcaption>
        </figure>
    );
}