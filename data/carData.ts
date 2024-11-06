interface Car {
    brand: string;
    model: string;      // Model of the car
    time: number;       // Acceleration time (in seconds)
    top_speed: number;  // Top speed (in km/h)
    price: string;      // Price (in USD)
    imageSrc: string;   // Image source URL
}

const carData: Car[] = [
    {
        brand: 'Porsche',
        model: 'Turbo S',
        time: 3.2,
        top_speed: 340,
        price: '175,900',
        imageSrc: '/images/brand1.png' // Example image path
    },
    {
        brand: 'Porsche',
        model: 'Taycan',
        time: 3.4,
        top_speed: 310,
        price: '114,900',
        imageSrc: '/images/brand2.png' // Example image path
    },
    {
        brand: 'Porsche',
        model: 'Turbo S Cross',
        time: 3.5,
        top_speed: 330,
        price: '150,900',
        imageSrc: '/images/brand3.png' // Example image path
    },
    {
        brand: 'Porsche',
        model: 'Boxster 718',
        time: 4.0,
        top_speed: 280,
        price: '175,900',
        imageSrc: '/images/brand4.png' // Example image path
    },
    {
        brand: 'Porsche',
        model: 'Cayman',
        time: 3.8,
        top_speed: 300,
        price: '175,900',
        imageSrc: '/images/brand5.png' // Example image path
    }
];

export { carData };
