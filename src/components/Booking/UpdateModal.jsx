import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBooking } from "../../features/books/bookingSlice";
import { AiOutlineEdit } from "react-icons/ai";


export default function UpdateModal({ bookingsId, service, description, date, time, phoneNumber }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [newDescription, setNewDescription] = useState(description);
    const [newDate, setNewDate] = useState(date);
    const [newTime, setNewTime] = useState(time);
    const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber);

    const dispatch = useDispatch();

    const handleUpdate = () => {
        dispatch(updateBooking({ bookingsId, service, newDescription, newDate, newTime, newPhoneNumber }));
        setNewDescription(description);
        setNewDate(date);
        setNewTime(time);
        setNewPhoneNumber(phoneNumber);

    };


    return (
        <>
            <Button onPress={onOpen} className="border-white text-black" variant="bordered" radius="sm" startContent={<AiOutlineEdit style={{ fontSize: '20px' }} />}>

            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                size="4xl"
                backdrop="opaque"
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 px-5" style={{ fontSize: '30px' }}>{service} Services</ModalHeader>
                            <ModalBody>
                                <div className="flex w-full flex-wrap items-end px-4 py-2 gap-4 mb-3">
                                    <Input
                                        type="text"
                                        label="Selected Services"
                                        labelPlacement="outside"
                                        placeholder={service}
                                        variant="bordered"
                                        size="lg"
                                        color="default"
                                        className="max-w-sm"
                                        isReadOnly
                                    />
                                    <Input
                                        type="text"
                                        label="Phone Number"
                                        labelPlacement="outside"
                                        placeholder="011-XXXXXXX"
                                        variant="bordered"
                                        size="lg"
                                        color="default"
                                        className="max-w-sm"
                                        autoFocus
                                        defaultValue={phoneNumber}
                                        isClearable
                                        isRequired
                                        onChange={(e) => setNewPhoneNumber(e.target.value)}
                                    />
                                </div>
                                <div className="flex w-full flex-wrap items-end gap-4 px-4 py-2 mb-3">
                                    <Input
                                        type="text"
                                        label="Date"
                                        labelPlacement="outside"
                                        placeholder="DD/MM/YYYY"
                                        variant="bordered"
                                        size="lg"
                                        color="default"
                                        className="max-w-sm"
                                        defaultValue={date}
                                        isClearable
                                        isRequired
                                        onChange={(e) => setNewDate(e.target.value)}
                                    />
                                    <Input
                                        type="text"
                                        label="Time"
                                        labelPlacement="outside"
                                        placeholder="10:00 AM"
                                        variant="bordered"
                                        size="lg"
                                        color="default"
                                        className="max-w-sm"
                                        defaultValue={time}
                                        isClearable
                                        isRequired
                                        onChange={(e) => setNewTime(e.target.value)}
                                    />
                                </div>
                                <div className="flex w-full flex-wrap items-end gap-4 px-4 py-2 mb-3">
                                    <Textarea
                                        type="text"
                                        label="Description"
                                        labelPlacement="outside"
                                        labelClassName="text-lg"
                                        placeholder="e.g. We are filming a product tutorial and need a quiet studio space with good natural light."
                                        variant="bordered"
                                        size="lg"
                                        color="default"
                                        className="max-w"
                                        defaultValue={description}
                                        isClearable
                                        isRequired
                                        onChange={(e) => setNewDescription(e.target.value)}
                                    />

                                </div>


                                <ModalFooter>
                                    <Button color="danger" variant="bordered" onPress={onClose}>
                                        Cancel
                                    </Button>
                                    <Button className="bg-black text-white" onPress={() => { handleUpdate(); onClose(); }}>
                                        Submit
                                    </Button>
                                </ModalFooter>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
