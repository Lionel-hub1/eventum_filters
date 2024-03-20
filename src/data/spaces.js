const spaces = [
    {
        id: 1,
        name: "Space 1",
        description: "This is the first space",
        isFavorite: false,
        category: "meeting premises",
        location: "Norway",
        price: "46,500",
        images: [
            "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1570126646281-5ec88111777f?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        capacity: {
            seating: 100,
            standing: 200,
            roundTable: 150,
            longTable: 120,
            classroom: 80,
            cinemaConference: 150,
            area: "",
        },
        foodAndDrinks: {
            available: true,
            alcohol: "Can be enjoyed on site",
            alcoholOffered: "Alcohol is offered through the landlord",
            food: "Can be brought in",
        },
        facilities: {
            wifi: true,
            airConditioning: true,
            heating: true,
            soundSystem: true,
            projector: true,
            whiteboard: true,
            microphone: true,
            television: true,
            kitchen: true,
            parking: true,
            elevator: true,
            wheelchairAccessible: true,
            naturalLight: true,
            stage: true,
            swimmingPool: true,
            rooftop: true,
            garden: true,
            terrace: true,
            grill: true,
            furniture: true,
        },
        prices: {
            startingFrom: "00:00",
            endingAt: "23:59",
            price: "46,500",
            space: "The whole room",
            rentingType: "local rent",
            days: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
        },
        reviews: [
            {
                id: 1,
                name: "John Doe",
                date: "2021-09-01",
                rating: 5,
                comment: "This is the best space ever",
            },
            {
                id: 2,
                name: "Jane Doe",
                date: "2021-09-01",
                rating: 5,
                comment: "This is the best space ever",
            },
        ],
    },
    {
        id: 2,
        name: "Space 2",
        description: "This is the second space",
        isFavorite: false,
        category: "company premises",
        location: "Norway",
        price: "46,500",
        images: [
            "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1570126646281-5ec88111777f?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        capacity: {
            seating: 400,
            standing: 200,
            roundTable: 150,
            longTable: 120,
            classroom: 80,
            cinemaConference: 150,
            area: "",
        },
        foodAndDrinks: {
            available: true,
            alcohol: "Can be enjoyed on site",
            alcoholOffered: "Alcohol is offered through the landlord",
            food: "Can be brought in",
        },
        facilities: {
            wifi: true,
            airConditioning: true,
            heating: true,
            soundSystem: true,
            projector: true,
            whiteboard: true,
            microphone: true,
            television: true,
            kitchen: true,
            parking: true,
            elevator: true,
            wheelchairAccessible: true,
            naturalLight: true,
            stage: true
        },
        prices: {
            startingFrom: "00:00",
            endingAt: "23:59",
            price: "46,500",
            space: "The whole room",
            rentingType: "local rent",
            days: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
        },
        reviews: [
            {
                id: 1,
                name: "John Doe",
                date: "2021-09-01",
                rating: 5,
                comment: "This is the best space ever",
            },
            {
                id: 2,
                name: "Jane Doe",
                date: "2021-09-01",
                rating: 5,
                comment: "This is the best space ever",
            },
        ],
    },
    {
        id: 3,
        name: "Space 3",
        description: "This is the third space",
        isFavorite: false,
        category: "company premises",
        location: "Norway",
        price: "46,500",
        images: [
            "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1570126646281-5ec88111777f?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        capacity: {
            seating: 300,
            standing: 200,
            roundTable: 150,
            longTable: 120,
            classroom: 80,
            cinemaConference: 150,
            area: "",
        },
        foodAndDrinks: {
            available: true,
            alcohol: "Can be enjoyed on site",
            alcoholOffered: "Alcohol is offered through the landlord",
            food: "Can be brought in",
        },
        facilities: {
            wifi: true,
            airConditioning: true,
            heating: true,
            soundSystem: true,
            projector: true,
            whiteboard: true,
            microphone: true,
            television: true,
            kitchen: true,
            parking: true,
            elevator: true,
            wheelchairAccessible: true,
            naturalLight: true,
            stage: true
        },
        prices: {
            startingFrom: "00:00",
            endingAt: "23:59",
            price: "46,500",
            space: "The whole room",
            rentingType: "local rent",
            days: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
        },
        reviews: [
            {
                id: 1,
                name: "John Doe",
                date: "2021-09-01",
                rating: 5,
                comment: "This is the best space ever",
            },
            {
                id: 2,
                name: "Jane Doe",
                date: "2021-09-01",
                rating: 5,
                comment: "This is the best space ever",
            },
        ],
    },
    {
        id: 4,
        name: "Space 4",
        description: "This is the fourth space",
        isFavorite: false,
        category: "company premises",
        location: "Norway",
        price: "46,500",
        images: [
            "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1570126646281-5ec88111777f?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        capacity: {
            seating: 10,
            standing: 200,
            roundTable: 150,
            longTable: 120,
            classroom: 80,
            cinemaConference: 150,
            area: "",
        },
        foodAndDrinks: {
            available: true,
            alcohol: "Can be enjoyed on site",
            alcoholOffered: "Alcohol is offered through the landlord",
            food: "Can be brought in",
        },
        facilities: {
            wifi: true,
            airConditioning: true,
            heating: true,
            soundSystem: true,
            projector: true,
            whiteboard: true,
            microphone: true,
            television: true,
            kitchen: true,
            parking: true,
            elevator: true,
            wheelchairAccessible: true,
            naturalLight: true,
            stage: true
        },
        prices: {
            startingFrom: "00:00",
            endingAt: "23:59",
            price: "46,500",
            space: "The whole room",
            rentingType: "local rent",
            days: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
        },
        reviews: [
            {
                id: 1,
                name: "John Doe",
                date: "2021-09-01",
                rating: 5,
                comment: "This is the best space ever",
            },
            {
                id: 2,
                name: "Jane Doe",
                date: "2021-09-01",
                rating: 5,
                comment: "This is the best space ever",
            },
        ],
    },
    {
        id: 5,
        name: "Space 5",
        description: "This is the fifth space",
        isFavorite: true,
        category: "company premises",
        location: "Norway",
        price: "46,500",
        images: [
            "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1570126646281-5ec88111777f?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        capacity: {
            seating: 100,
            standing: 200,
            roundTable: 150,
            longTable: 120,
            classroom: 80,
            cinemaConference: 150,
            area: "",
        },
        foodAndDrinks: {
            available: false,
            alcohol: "Can be enjoyed on site",
            alcoholOffered: "Alcohol is offered through the landlord",
            food: "Can be brought in",
        },
        facilities: {
            wifi: true,
            airConditioning: true,
            heating: true,
            soundSystem: true,
            projector: true,
            whiteboard: true,
            microphone: true,
            television: true,
            kitchen: true,
            parking: true,
            elevator: true,
            wheelchairAccessible: true,
            naturalLight: true,
            stage: true
        },
        prices: {
            startingFrom: "00:00",
            endingAt: "23:59",
            price: "46,500",
            space: "The whole room",
            rentingType: "local rent",
            days: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
        },
        reviews: [
            {
                id: 1,
                name: "John Doe",
                date: "2021-09-01",
                rating: 5,
                comment: "This is the best space ever",
            },
            {
                id: 2,
                name: "Jane Doe",
                date: "2021-09-01",
                rating: 5,
                comment: "This is the best space ever",
            },
        ],
    },
    {
        id: 6,
        name: "Space 6",
        description: "This is the sixth space",
        isFavorite: false,
        category: "company premises",
        location: "Norway",
        price: "46,500",
        images: [
            "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1570126646281-5ec88111777f?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        capacity: {
            seating: 100,
            standing: 200,
            roundTable: 150,
            longTable: 120,
            classroom: 80,
            cinemaConference: 150,
            area: "",
        },
        foodAndDrinks: {
            available: true,
            alcohol: "Can be enjoyed on site",
            alcoholOffered: "Alcohol is offered through the landlord",
            food: "Can be brought in",
        },
        facilities: {
            wifi: true,
            airConditioning: true,
            heating: true,
            soundSystem: true,
            projector: true,
            whiteboard: true,
            microphone: true,
            television: true,
            kitchen: true,
            parking: true,
            elevator: true,
            wheelchairAccessible: true,
            naturalLight: true,
            stage: true
        },
        prices: {
            startingFrom: "00:00",
            endingAt: "23:59",
            price: "46,500",
            space: "The whole room",
            rentingType: "local rent",
            days: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
        },
        reviews: [
            {
                id: 1,
                name: "John Doe",
                date: "2021-09-01",
                rating: 5,
                comment: "This is the best space ever",
            },
            {
                id: 2,
                name: "Jane Doe",
                date: "2021-09-01",
                rating: 5,
                comment: "This is the best space ever",
            },
        ],
    }
];

export default spaces;
