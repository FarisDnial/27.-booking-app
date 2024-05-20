import { Card, List, ListItem, ListItemPrefix, ListItemSuffix, Chip } from "@material-tailwind/react";
import { Cog6ToothIcon, InboxIcon } from "@heroicons/react/24/solid";
import { PresentationChartBarIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import LogOutModal from "./LogOutModal";
import { useSelector } from "react-redux";
import { AiFillHome } from "react-icons/ai";

export default function SidebarWithCta() {
    const bookings = useSelector((state) => state.bookings.bookings);
    const navigate = useNavigate();
    const navigateToAboutUs = () => navigate("/aboutus");
    const navigateBookingPage = () => navigate("/bookingpage");
    const navigateToBookingListPage = () => navigate("/bookinglist");

    return (
        <>
            <Card className="fixed top-0 left-0 right-0 bottom-0 overflow-auto w-full max-w-[20rem] p-4 bg-black border-none" style={{ borderRadius: '0', width: "100%" }}>
                <div className="mb-2 flex items-center gap-4 py-4 px-5">
                    <img src="src/assets/Lensify3.png" alt="brand" className="h-15 w-auto" />
                </div>
                <List>
                    <ListItem className="text-white" onClick={navigateToAboutUs}>
                        <ListItemPrefix>
                            <AiFillHome className="h-5 w-5" />
                        </ListItemPrefix>
                        About Us
                    </ListItem>
                    <ListItem className="text-white" onClick={navigateBookingPage}>
                        <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        BookingPage
                    </ListItem>
                    <ListItem className="text-white" onClick={navigateToBookingListPage}>
                        <ListItemPrefix>
                            <InboxIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        My Bookings
                        <ListItemSuffix>
                            <Chip value={bookings.length} size="sm" variant="ghost" color="blue-gray" className="rounded-full text-white" />
                        </ListItemSuffix>
                    </ListItem>

                    <ListItem className="text-white">
                        <ListItemPrefix>
                            <Cog6ToothIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Settings
                    </ListItem>
                    <LogOutModal />
                </List>
            </Card>
        </>
    );
}