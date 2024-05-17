import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    List,
    ListItem,
} from "@material-tailwind/react";
import {
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

import SignUpModal from "../HomePage/SignUpModal";
import LoginModal from "../HomePage/LoginModal";

function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <Typography

                href="#"
                variant="medium"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4 text-white">About Us</ListItem>
            </Typography>
            <Typography

                href="#"
                variant="medium"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4 text-white">Our Services</ListItem>
            </Typography>
            <Typography

                href="#"
                variant="medium"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4 text-white">
                    Contact Us
                </ListItem>
            </Typography>
        </List>
    );
}

export default function NavbarWithMegaMenu() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <Navbar className="fixed top-0 left-0 right-0 mx-auto mt-1 px-5 py-1 bg-black bg-opacity-75 text-white z-50">
            <div className="flex items-center justify-between">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                >
                    <img
                        className="h-20 w-auto"
                        src="src/assets/Lensify.png"
                        alt=""

                    />
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <div className="hidden gap-2 lg:flex">
                    <SignUpModal />
                    <LoginModal className="text-white" />
                </div>
                <IconButton
                    variant="text"
                    color="white"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav} >
                <NavList />
                <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden mb-2">
                    <SignUpModal />
                    <LoginModal className="text-white" />

                </div>
            </Collapse>
        </Navbar>
    );
}