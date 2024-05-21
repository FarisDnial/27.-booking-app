import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default function Header() {
    return (
        <>
            <div>
                <div className="relative isolate px-6 pt-14 lg:px-8 mt-5">
                    <div className="mx-auto max-w-2xl py-32">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Lensify - Experience the World Through Our Lens
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Discover the magic of moments captured with precision and passion - Lensify, where every click tells your story. <strong>Book Your Session Now!</strong>
                            </p>

                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <SignUpModal />
                                <LoginModal className="border-black text-black" />
                                <a href="#about-us" className="text-sm font-semibold leading-6 text-gray-900">
                                    About us <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

