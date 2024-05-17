import { IconButton, Tooltip } from "@material-tailwind/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";

export default function BookingTableList({ bookings }) {
    return (
        <>
            <Table aria-label="Example static collection table">
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
                                <Tooltip content="Delete Booking">
                                    <IconButton variant="text">
                                        <DeleteModal bookingsId={bookings.id} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip content="Edit Booking">
                                    <IconButton variant="text">
                                        <UpdateModal
                                            userId={booking.user_id}
                                            bookingsId={booking.id}
                                            service={booking.service}
                                            description={booking.description}
                                            date={booking.date}
                                            time={booking.time}
                                            phoneNumber={booking.phone_number}
                                        />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </>

    );
}
