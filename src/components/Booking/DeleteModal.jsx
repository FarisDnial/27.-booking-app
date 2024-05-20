import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Tooltip } from "@nextui-org/react";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteBooking } from "../../features/books/bookingSlice";

export default function DeleteModal({ userId, bookingsId }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const dispatch = useDispatch();

    const handleDeleteBooking = () => {
        dispatch(deleteBooking({ userId, bookingsId }));
    }

    return (
        <>
            <Tooltip content="Delete Booking" delay={0} closeDelay={0} color="danger" motionProps={{
                variants: {
                    exit: {
                        opacity: 0,
                        transition: {
                            duration: 0.1,
                            ease: "easeIn",
                        }
                    },
                    enter: {
                        opacity: 1,
                        transition: {
                            duration: 0.15,
                            ease: "easeOut",
                        }
                    },
                },
            }}>
                <Button onPress={onOpen} className="border-white text-danger" variant="bordered" radius="sm" startContent={<FaRegTrashCan style={{ fontSize: '18px' }} />}>
                </Button>
            </Tooltip>

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
