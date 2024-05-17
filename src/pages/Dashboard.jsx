import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Dashboard/Sidebar";
import BookCard from "../components/Booking/BookCard";
import { Typography } from "@material-tailwind/react";

export default function Dashboard() {
    return (
        <>
            <Row>
                <Col sm={2}>
                    <Sidebar />
                </Col>
                <Col sm={10}>
                    <Row className="py-5 px-5 justify-content-center align-items-center">
                        <Typography className="py-3 px-3" variant="h1">Book Your Session Now !</Typography>
                        <BookCard />

                    </Row>
                </Col>
            </Row>
        </>
    );
}