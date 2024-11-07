import { BatteryChargingFull, Speed } from '@mui/icons-material';
import Image from 'next/image';
import { ArrowUp, ShoppingCart } from 'react-feather';

// Interface for car data
interface CarCardProps {
    brand: string;
    model: string;
    time: number | null;
    top_speed: number | null;
    price: string;
    imageSrc: string; // Image source URL
}

export default function CarCard({
    brand,
    model,
    time,
    top_speed,
    price,
    imageSrc
}: CarCardProps) {
    return (
        <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 w-[258px] h-full shadow-lg flex flex-col justify-between text-white">
            {/* Car Model and Image */}
            <div>
                <h2 className="font-semibold text-xl">{brand}</h2>
                <p className="font-light text-sm">{model}</p>
                <div className="my-4 pl-5">
                    <Image src={imageSrc} width={180} height={81} alt={`${brand} ${model}`} className="object-contain" />
                </div>
            </div>

            {time !==null &&
                <>
                    {/* Specs */}
                    <div className="mx-auto text-sm w-full">
                        <div className="grid grid-cols-2 gap-y-2 gap-x-4 w-full">
                            <div className="flex items-center gap-1">
                                <Speed fontSize="small" />
                                <span className="font-[13px]">{time} Sec</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <ArrowUp fontSize="small" />
                                <span>{top_speed} Km/h</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <BatteryChargingFull fontSize="small" />
                                <span>Electric</span>
                            </div>
                        </div>
                    </div>
                </>
            }


            {/* Price */}
            <div className="mt-4">
                <h3 className="text-xl font-semibold">${price}</h3>
            </div>

            {/* Cart Button in Bottom Right */}
            <button className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-tl-2xl rounded-br-2xl w-12 h-12 flex items-center justify-center">
                <ShoppingCart size={16} color="white" fontSize={20} />
            </button>
        </div>
    );
}
