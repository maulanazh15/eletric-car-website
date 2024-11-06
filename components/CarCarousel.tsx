import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { carData } from '@/data/carData';
import CarCard from './CarCard';

interface CarCarouselProps {
    className?: string;
}

export default function CarCarousel({ className }: CarCarouselProps) {
    return (
        <Swiper
            className={className}
            modules={[Navigation, Pagination]}
            spaceBetween={20} // Adjust space between slides as needed
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
                360: {
                    slidesPerView: 1, // 1 slide for very small screens
                },
                640: {
                    slidesPerView: 2, // 2 slides for small screens
                },
                768: {
                    slidesPerView: 3, // 3 slides for mobile view and up
                },
                1024: {
                    slidesPerView: 4, // 4 slides for larger screens
                },
            }}
        >
            {carData.map((car, index) => (
                <SwiperSlide key={index}>
                    <div className="flex items-center justify-center">
                        <CarCard 
                            brand={car.brand}
                            model={car.model}
                            price={car.price}
                            time={car.time}
                            top_speed={car.top_speed}
                            imageSrc={car.imageSrc}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
