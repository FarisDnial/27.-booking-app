import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { TbLogout2 } from "react-icons/tb";




export default function App({ handleLogout }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            {/* <Button onPress={onOpen} className="border-black text-black mt-4" variant="shadow" radius="sm" startContent={<TbLogout2 />}>
                Sign Out
            </Button> */}
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
