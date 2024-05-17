import Carousel from "./Carousel"

export default function Example() {
    const image1 = 'https://media.macphun.com/img/uploads/macphun/blog/2262/_1.jpg?q=75&w=1710&h=906&resize=cover'
    const image3 = 'https://images.unsplash.com/photo-1547619292-870fe4aeadb8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const image2 = 'https://metalbees.com/wp-content/uploads/2022/03/Raw-3-1.webp'

    return (
        <>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32" style={{ height: "700px" }}>
                <img
                    src={image1}
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                />
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0" style={{ position: "absolute", left: "60px", top: "50%", transform: "translateY(-50%)" }}>
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About us</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300" style={{ textAlign: "justify" }}>
                            <strong>Lensify</strong> is your dedicated partner in capturing life's most precious moments. With a team of talented photographers committed to excellence and creativity, we specialize in preserving the essence of every moment, from weddings to corporate events. Join us on this journey of storytelling and let Lensify turn your vision into cherished memories.
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <Carousel />
            <br />
            <div>
                <div>
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="text-center">
                            <h2 className="display-3 fw-bolder text-capitalize text-center">
                                Let's Capture Your Moments
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                At <strong>Lensify</strong>, we're dedicated to turning your moments into timeless memories. Whether it's your wedding day, a family gathering, or a corporate event, we're here to capture the essence of every moment with precision and passion. Let's work together to create stunning photographs that tell your unique story. Explore our services and book your session today.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32" style={{ height: "700px" }}>

                    <img
                        src={image2}
                        alt=""
                        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                    />
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0" style={{ position: "absolute", right: "60px", top: "50%", transform: "translateY(-50%)" }}>
                            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                Every photograph is a story waiting to be told.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div>
                <div>
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="text-center">
                            <h2 className="display-3 fw-bolder text-capitalize text-center">
                                Work with us
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Join our team at <strong>Lensify</strong> and be part of a passionate community dedicated to capturing life's most memorable moments. <strong>We're always on the lookout for talented photographers </strong> who share our commitment to excellence and creativity . Whether you're a seasoned professional or just starting your journey, we welcome you to explore opportunities with Lensify and help us turn moments into memories.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32" style={{ height: "700px" }}>
                    <img
                        src={image3}
                        alt=""
                        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                    />
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0" style={{ position: "absolute", left: "60px", top: "50%", transform: "translateY(-50%)" }}>
                            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                Together, let's frame the future with creativity and innovation.</h2>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
