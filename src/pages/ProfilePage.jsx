import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Dashboard/Sidebar";

export default function Dashboard() {
    return (
        <>
            <Row>
                <Col sm={2}>
                    <Sidebar />
                </Col>
                <Col sm={8}>
                    <h2>This is the profile page</h2>
                </Col>
            </Row>
        </>
    );
}