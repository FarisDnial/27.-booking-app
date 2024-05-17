import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselImage() {
    const serviceDetail = [
        {
            "name": "Our Services",
            "description": "We offer a diverse array of photography services, from professional formal sessions to intimate informal captures.",
            "image": "https://s.hdnux.com/photos/01/17/55/70/20897291/4/rawImage.jpg",
            "interval": 7000,
        },
        {
            "name": "Travel Photography",
            "description": "Preserve your travel adventures and explorations with breathtaking travel photography services that immortalize your wanderlust-filled journeys.",
            "image": "https://www.photojaanic.com/blog/wp-content/uploads/sites/2/2018/03/travel-photography-tips-photojaanic_-13.jpg",
            "interval": 4500,
        },
        {
            "name": "Wedding Photography",
            "description": "Capture the magic of your special day with stunning wedding photography packages tailored to your unique love story.",
            "image": "https://cdn.pixabay.com/photo/2017/08/01/15/23/bride-2566244_1280.jpg",
            "interval": 4500,
        },
        {
            "name": "Family Portraits",
            "description": "Create timeless family portraits that beautifully encapsulate the love, joy, and connection shared between loved ones.",
            "image": "https://images.squarespace-cdn.com/content/v1/59cc4feccd0f6850be493976/1535490780668-1E6UCDSZN3WV72Q1MVCQ/Spring+Family+Portraits+-+Copperopolis+-+Bessie+Young+Photography+2018_-14.jpg?format=2500w",
            "interval": 4500,
        },
        {
            "name": "Corporate Headshots",
            "description": "Impress clients and colleagues with professional headshots that convey confidence and professionalism.",
            "image": "https://images.squarespace-cdn.com/content/v1/5f2cbec79c027d1551303832/c1e157f5-7270-47ab-920a-aca1dea32653/corporate-group-team-headshots-axis.jpg",
            "interval": 4500,
        },
        {
            "name": "Event Photography",
            "description": "Document your corporate events, conferences, or special occasions with captivating event photography services.",
            "image": "https://images.squarespace-cdn.com/content/v1/5e61a438d6f6a944b6bb74b1/bab34801-174c-4393-8ca9-39f3d0c6fd10/Chicago+Corporate+Event+Photography-ASGE+Chicago+Gala+2023+at+Raidson+Blu+Aqua+Chicago-001.jpg",
            "interval": 4500,
        },
        {
            "name": "Product Photography",
            "description": "Showcase your products in the best light possible with professional product photography services that enhance their appeal and desirability.",
            "image": "https://xphotography.ca/wp-content/uploads/2023/01/red-lipstick-makeup-cosmetic-product-photography-2022-10-03-18-41-34-utc-scaled.jpg",
            "interval": 4500,
        },
        {
            "name": "Graduation Photography",
            "description": " Celebrate your academic milestone with personalized photoshoots capturing the excitement and pride of graduation day.",
            "image": "https://images-pw.pixieset.com/elementfield/81003386/May3Group-133-bd820c8e.jpg",
            "interval": 4500,
        }
    ];

    return (
        <>
            <div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h2 className="display-3 fw-bolder text-capitalize text-center">
                            Unveil Your Memories with Lensify
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            At <strong>Lensify</strong>, we offer a comprehensive range of photography services tailored to meet your unique needs. From weddings and family portraits to corporate events and special occasions, our skilled photographers are committed to capturing the essence of every moment with precision and passion. Discover how Lensify can bring your vision to life and create stunning memories that last a lifetime.
                        </p>
                    </div>
                </div>
            </div>
            <Carousel>
                {serviceDetail.map((service, index) => (
                    <Carousel.Item key={index} style={{ height: '700px' }} interval={service.interval}>
                        <Image src={service.image} alt={service.name} className="d-block w-100" style={{ height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }} />
                        <Carousel.Caption className="top-50 start-50 translate-middle">
                            <h1 className="display-3 mt-5 fw-bolder text-capitalize">{service.name}</h1>
                            <p className="fs-3 d-none d-md-block">{service.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>

        </>
    );
}
