import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

export default function App() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { currentUser } = useContext(AuthContext);

    const navigate = useNavigate();

    //check if current user login
    if (!currentUser) {
        navigate("/home"); // redirect to home if user not login
    }
    const handleLogout = () => {
        auth.signOut();
    };

    return (
        <>
            <Button onPress={onOpen} className="border-white text-white mt-4" variant="bordered" radius="sm" startContent={<TbLogout2 style={{ fontSize: '20px' }} />}>
                Sign Out
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Confirm Sign Out</ModalHeader>
                            <ModalBody>
                                <p>
                                    Are you sure you want to sign out? signing out will end your current session and require you to sign in again to access your account.
                                </p>

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="bordered" onPress={onClose}>
                                    Close
                                </Button>
                                <Button className="bg-black text-white" onClick={handleLogout}>
                                    Sign Out
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
