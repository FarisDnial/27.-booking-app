import { useEffect, useState } from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Alert,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
} from "@heroicons/react/24/solid";
import { CubeTransparentIcon } from "@heroicons/react/24/outline";
import { PresentationChartBarIcon } from "@heroicons/react/20/solid";
// import { CameraFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import LogOutModal from "./LogOutModal";




export default function SidebarWithCta() {
    const [openAlert, setOpenAlert] = useState(true);
    const [authToken, setAuthToken] = useLocalStorage("authToken", "");
    // const [showLogOutModal, setShowLogOutModal] = useState(false);


    const navigate = useNavigate();

    function navigateToDashboard() {
        navigate("/dashboard")
    }

    function navigateToProfile() {
        navigate("/profile")
    }

    function navigateToBooking() {
        navigate("/booking")
    }

    // const handleCloseLogOutModal = () => setShowLogOutModal(false);
    // const handleShowLogOutModal = () => setShowLogOutModal(true);

    //check for authokken immediately upon component mount and whenever authToke changes
    useEffect(() => {
        if (!authToken) {
            navigate("/login"); // redirect to login if no auth token is present
        }
    }, [authToken, navigate]);

    const handleLogout = () => {
        setAuthToken(""); // clear token from localStorage
    };


    return (
        <>
            <Card className="fixed top-0 left-0 right-0 bottom-0 overflow-auto w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-dark border-none" style={{ borderRadius: '0' }}>
                <div className="mb-2 flex items-center gap-4 py-4 px-5">
                    <img src="src/assets/Lensify3.png" alt="brand" className="h-15 w-auto" />
                </div>

                <List>
                    <ListItem className="text-white" onClick={navigateToDashboard}>
                        <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Dashboard
                    </ListItem>
                    {/* <ListItem>
                    <ListItemPrefix>
                        <CameraFilled className="h-5 w-5" />
                    </ListItemPrefix>
                    Our Services
                </ListItem> */}
                    <ListItem className="text-white" onClick={navigateToBooking}>
                        <ListItemPrefix>
                            <InboxIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Bookings
                        <ListItemSuffix>
                            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full text-white" />
                        </ListItemSuffix>
                    </ListItem>
                    <ListItem className="text-white" onClick={navigateToProfile}>
                        <ListItemPrefix >
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Profile
                    </ListItem>
                    <ListItem className="text-white">
                        <ListItemPrefix>
                            <Cog6ToothIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Settings
                    </ListItem>
                    <LogOutModal handleLogout={handleLogout} />

                </List>
                <Alert open={openAlert} className="mt-auto" onClose={() => setOpenAlert(false)}>
                    <CubeTransparentIcon className="mb-4 h-12 w-12" />
                    <Typography variant="h6" className="mb-1">
                        Upgrade to PRO
                    </Typography>
                    <Typography variant="small" className="font-normal opacity-80">
                        Upgrade to Material Tailwind PRO and get even more components, plugins, advanced features
                        and premium.
                    </Typography>
                    <div className="mt-4 flex gap-3">
                        <Typography
                            as="a"
                            href="#"
                            variant="small"
                            className="font-medium opacity-80"
                            onClick={() => setOpenAlert(false)}
                        >
                            Dismiss
                        </Typography>
                        <Typography as="a" href="#" variant="small" className="font-medium">
                            Upgrade Now
                        </Typography>
                    </div>
                </Alert>
            </Card>

            {/* <LogOutModal show={showLogOutModal} handleClose={handleCloseLogOutModal} handleLogout={handleLogout} /> */}
        </>
    );
}