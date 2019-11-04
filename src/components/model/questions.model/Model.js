const Model = () => {
  return [
            {
            name: "type",
            title: "What platform you want your app to be built on?",
            values: [
                {
                    id: 1,
                    name: "Apple",
                    icon: "faApple",
                    price: 2000,
                    next: "/questions/social"
                },
                {
                    id: 2,
                    name: "Android",
                    icon: "faAndroid",
                    price: 1500,
                    next: "/questions/social"
                },
                {
                    id: 3,
                    name: "Both",
                    icon: "faAngellist",
                    price: 3500,
                    next: "/questions/social"
                }
            ]
        },
        {
            name: "social",
            title: "Do you want your App to be connected to Socials?",
            values: [
                {
                    id: 4,
                    name: "Yes",
                    icon: "faThumbsUp",
                    price: 1400,
                    next: "/questions/payments"
                },
                {
                    id: 5,
                    name: "No",
                    icon: "faThumbsDown",
                    price: 0,
                    next: "/questions/payments"
                },
                {
                    id: 6,
                    name: "I don't know",
                    icon: "faArrowsAltH",
                    price: 0,
                    next: "/questions/payments"
                }
            ]
        },
        {
            name: "payments",
            title: "Do you want in-App purchases?",
            values: [
                {
                    id: 7,
                    name: "Yes",
                    icon: "faCcMastercard",
                    price: 3000,
                    next: "/questions/logo"
                },
                {
                    id: 8,
                    name: "No",
                    icon: "faCreativeCommonsNcEu",
                    price: 0,
                    next: "/questions/logo"
                },
                {
                    id: 9,
                    name: "I don't know",
                    icon: "faArrowsAltH",
                    price: 0,
                    next: "/questions/logo"
                }
            ]
        },
        {
        name: "logo",
        title: "Do you want in-App purchases?",
        values: [
        {
            id: 10,
            name: "Yes",
            icon: "faSmile",
            price: 3000,
            next: "/questions/recap"
        },
        {
            id: 11,
            name: "No",
            icon: "faFrown",
            price: 0,
            next: "/questions/recap"
        }
        ]
    }
  ]
};
export default Model;
