import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,

} from "@material-tailwind/react";
import BookingModal from "./BookingModal";

export default function BookCard() {
    return (
        <>
            <div className="flex flex-wrap gap-4">
                {services.map((service, index) => (
                    <Card key={index} className="w-full max-w-[26rem] shadow-lg mr-5">
                        <CardHeader floated={false} color="blue-gray">
                            <img

                                src={service.image}
                                alt={service.title}
                                className="h-80 w-full object-cover object-center"
                            />
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                        </CardHeader>
                        <CardBody>
                            <div className="mb-3 flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray" className="font-medium">
                                    {service.title}
                                </Typography>
                                <Typography
                                    color="blue-gray"
                                    className="flex items-center gap-1.5 font-normal"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="-mt-0.5 h-5 w-5 text-yellow-700"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    5.0
                                </Typography>
                            </div>
                            <Typography color="gray">
                                {service.description}
                            </Typography>
                        </CardBody>
                        <CardFooter className="flex justify-center mt-3">
                            <BookingModal className="bg-black text-white" selectedService={service.title} />
                        </CardFooter>
                    </Card>
                ))}
            </div>

        </>
    );
}

const services = [
    {
        title: "Photography Sessions Booking",
        description: "Capture special moments with personalized photography sessions tailored to your needs.",
        image: "https://www.photojaanic.com/blog/wp-content/uploads/sites/2/2018/03/travel-photography-tips-photojaanic_-13.jpg"
    },
    {
        title: "Event Photography Booking",
        description: "Document your special events beautifully with professional event photography services.",
        image: "https://images.squarespace-cdn.com/content/v1/5e61a438d6f6a944b6bb74b1/bab34801-174c-4393-8ca9-39f3d0c6fd10/Chicago+Corporate+Event+Photography-ASGE+Chicago+Gala+2023+at+Raidson+Blu+Aqua+Chicago-001.jpg"
    },
    {
        title: "Studio Rental Booking",
        description: "Rent our fully equipped photography studio for your creative projects and photo shoots.",
        image: "https://metalbees.com/wp-content/uploads/2022/03/Raw-3-1.webp"
    },
    {
        title: "Photo Booth Rental Booking",
        description: "Add fun to your events with our interactive photo booth rental service.",
        image: "https://i0.wp.com/theweddingnotebook.com/inspire/wp-content/uploads/2022/09/image29.jpg?ssl=1"
    },
    {
        title: "Photo Printing and Framing Services",
        description: "Transform your digital memories into tangible keepsakes with our printing and framing services.",
        image: "https://artcentral.ae/wp-content/uploads/2022/12/Everyday_Photo_Print.jpg"
    },
    {
        title: "Photo Editing Services",
        description: "Enhance your precious memories with our professional photo editing services, designed to make your images stand out and come to life .",
        image: "https://d3npb851c4z4w4.cloudfront.net/static/imgs/photo-editing-services.jpg"
    },
    {
        title: "Photography Workshops and Classes",
        description: "Improve your photography skills with our workshops and classes for all levels of experience.",
        image: "https://www.all-about-photo.com/images/articles/ART-1292-1.jpg"
    },
    {
        title: "Consultation Calls",
        description: "Schedule a personalized consultation call with our skilled photographers to discuss your vision, needs, and goals.",
        image: "https://static.wixstatic.com/media/11062b_88e54c3d08204954b00e350818bbf4ba~mv2.jpg/v1/fill/w_777,h_518,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_88e54c3d08204954b00e350818bbf4ba~mv2.jpg"
    }
];