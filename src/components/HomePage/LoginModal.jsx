import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../AuthProvider";

export default function LoginModal({ className }) {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const auth = getAuth();
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        if (currentUser) {
            navigate("/aboutus")
        }
    }, [currentUser, navigate])

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, username, password);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <Button onPress={onOpen} variant="bordered" className={className} radius="sm">Sign In</Button>
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
                            <ModalHeader className="flex flex-col gap-1" style={{ fontSize: '30px' }}>Sign In</ModalHeader>
                            <ModalBody>
                                <form onSubmit={handleLogin}>
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
                                        type="password"
                                        variant="bordered"
                                        size="lg"
                                        color="primary"
                                        isClearable
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div className="flex py-2 px-1 justify-between">
                                        <Checkbox
                                            classNames={{
                                                label: "text-small",
                                            }}
                                        >
                                            Remember me
                                        </Checkbox>
                                        <Link color="primary" href="#" size="sm">
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <p className="px-2 mt-2" style={{ textAlign: "justify" }}>
                                        <strong>By signing in</strong>, you agree to our Terms of Service and Privacy Policy, including our use of cookies. <strong>Lensify</strong> may use your contact information, such as your email address and phone number, for purposes outlined in our Privacy Policy, like securing your account and personalizing our services, including advertisements. Learn more. Others will be able to find you by your email or phone number, unless you choose otherwise here.
                                    </p>
                                    <ModalFooter>
                                        <Button color="danger" variant="bordered" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button className="bg-black text-white" type="submit">
                                            Sign in
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
