import { Modal, ModalContent, ModalHeader, ModalBody, Button, ModalFooter, useDisclosure, Input } from "@nextui-org/react";
// 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";
import { useNavigate } from "react-router-dom";


export default function App() {
    // const url = "https://279aa7f6-f772-4f73-a6e0-19eae612c706-00-q1e0ghxworay.kirk.replit.dev";

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const auth = getAuth();
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        if (currentUser) {
            navigate("/dashboard")
        }
    }, [currentUser, navigate])

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const res = await createUserWithEmailAndPassword(auth, username, password);
            console.log(res.user);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Button onPress={onOpen} className="bg-black text-white" radius="sm">Sign Up</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                size="2xl"
                backdrop="opaque"
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 mx-3" style={{ fontSize: '30px' }}>Sign Up</ModalHeader>
                            <ModalBody>
                                <form onSubmit={handleSignUp}>
                                    <Input
                                        autoFocus
                                        label="Email"
                                        placeholder="Enter your email"
                                        variant="bordered"
                                        size="lg"
                                        color="primary"
                                        isClearable
                                        description="We'll never share your email with anyone else."
                                        type="email"
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <Input
                                        label="Password"
                                        placeholder="Enter your password"
                                        variant="bordered"
                                        size="lg"
                                        color="primary"
                                        isClearable
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <p className="px-2 mt-4" style={{ textAlign: "justify" }}>
                                        <strong>By signing up</strong>, you agree to our Terms of Service and Privacy Policy, including our use of cookies. <strong>Lensify</strong> may use your contact information, such as your email address and phone number, for purposes outlined in our Privacy Policy, like securing your account and personalizing our services, including advertisements. Learn more. Others will be able to find you by your email or phone number, unless you choose otherwise here.
                                    </p>
                                    <ModalFooter>
                                        <Button color="danger" variant="bordered" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button className="bg-black text-white" type="submit">
                                            Sign up
                                        </Button>
                                    </ModalFooter>
                                </form>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
