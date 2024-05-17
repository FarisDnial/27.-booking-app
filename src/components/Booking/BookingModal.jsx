import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBooking } from "../../features/books/bookingSlice";
import { useNavigate } from "react-router-dom";

export default function BookingModal({ className, selectedService }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const service = selectedService;

    const navigateToBookingPage = () => navigate("/booking");

    const handleNewBooking = () => {
        dispatch(createBooking({ service, description, date, time, phoneNumber }));
        setDescription("");
        setDate("");
        setTime("");
        setPhoneNumber("");
    };


    return (
        <>
            <Button onPress={onOpen} variant="shadow" className={className} radius="sm">{selectedService}</Button>
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
                            <ModalHeader className="flex flex-col gap-1 px-5" style={{ fontSize: '30px' }}>{selectedService} Services</ModalHeader>
                            <ModalBody>
                                <div className="flex w-full flex-wrap items-end px-4 py-2 gap-4 mb-3">
                                    <Input
                                        type="text"
                                        label="Selected Services"
                                        labelPlacement="outside"
                                        placeholder={selectedService}
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
                                        isClearable
                                        isRequired
                                        onChange={(e) => setPhoneNumber(e.target.value)}
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
                                        isClearable
                                        isRequired
                                        onChange={(e) => setDate(e.target.value)}
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
                                        isClearable
                                        isRequired
                                        onChange={(e) => setTime(e.target.value)}
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

                                        isClearable
                                        isRequired
                                        onChange={(e) => setDescription(e.target.value)}
                                    />

                                </div>


                                <ModalFooter>
                                    <Button color="danger" variant="bordered" onPress={onClose}>
                                        Cancel
                                    </Button>
                                    <Button className="bg-black text-white" onPress={() => { handleNewBooking(); onClose(); navigateToBookingPage(); }}>
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
