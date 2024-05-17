import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteBooking } from "../../features/books/bookingSlice";




export default function App({ bookingsId }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const dispatch = useDispatch();

    const handleDeleteBooking = () => {
        dispatch(deleteBooking({ bookingsId }));
    }

    return (
        <>
            <Button onPress={onOpen} className="border-white text-danger" variant="bordered" radius="sm" startContent={<FaRegTrashCan style={{ fontSize: '18px' }} />}>
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Confirm Deletion</ModalHeader>
                            <ModalBody>
                                <p>
                                    Deleting this booking will remove it permanently. Do you wish to proceed?
                                </p>

                            </ModalBody>
                            <ModalFooter>
                                <Button className="bg-black text-white" variant="bordered" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="danger" variant="bordered" onPress={() => { handleDeleteBooking(); onClose(); }}>
                                    Yes, Delete
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
