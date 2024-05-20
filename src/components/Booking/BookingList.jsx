import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";


export default function BookingTableList({ bookings }) {
    const { currentUser } = useContext(AuthContext);
    const userId = currentUser.uid;

    return (
        <>
            <Table aria-label="Example static collection table " className="text-black">
                <TableHeader>
                    <TableColumn style={{ fontSize: '17px' }}>Service</TableColumn>
                    <TableColumn style={{ fontSize: '17px' }}>Description</TableColumn>
                    <TableColumn style={{ fontSize: '17px' }}>Date</TableColumn>
                    <TableColumn style={{ fontSize: '17px' }}>Time</TableColumn>
                    <TableColumn style={{ fontSize: '17px', textAlign: 'center' }}>Phone Number</TableColumn>
                    <TableColumn style={{ fontSize: '17px', textAlign: 'center' }}>Action</TableColumn>
                </TableHeader>
                <TableBody>
                    {bookings.map((booking, index) => (
                        <TableRow key={index}>
                            <TableCell style={{ fontSize: '17px' }}>{booking.service}</TableCell>
                            <TableCell style={{ fontSize: '17px' }}>{booking.description}</TableCell>
                            <TableCell style={{ fontSize: '17px' }}>{booking.date}</TableCell>
                            <TableCell style={{ fontSize: '17px' }}>{booking.time}</TableCell>
                            <TableCell style={{ fontSize: '17px', textAlign: 'center' }}>{booking.phone_number}</TableCell>
                            <TableCell style={{ fontSize: '17px', textAlign: 'center' }}>
                                <div className="flex">
                                    <DeleteModal
                                        userId={userId}
                                        bookingsId={booking.id}
                                    />
                                    <UpdateModal
                                        userId={userId}
                                        bookingsId={booking.id}
                                        service={booking.service}
                                        description={booking.description}
                                        date={booking.date}
                                        time={booking.time}
                                        phoneNumber={booking.phone_number}
                                    />
                                </div>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </>

    );
}
