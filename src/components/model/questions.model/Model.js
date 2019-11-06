import uuid from "uuid";
const Model = () => {
  return [
    {
      name: "type",
      title: "What platform you want your app to be built on?",
      id: uuid(),
      values: [
        {
          id: 1,
          name: "Apple",
          icon: "./svg-icons/apple-brands.svg",
          price: 2000,
          next: "/questions/social"
        },
        {
          id: 2,
          name: "Android",
          icon: "./svg-icons/android.svg",
          price: 1500,
          next: "/questions/social"
        },
        {
          id: 3,
          name: "Both",
          icon: "./svg-icons/both.svg",
          price: 3500,
          next: "/questions/social"
        }
      ]
    },
    {
      name: "social",
      title: "Do you want your App to be connected to Socials?",
      id: uuid(),
      values: [
        {
          id: 4,
          name: "Yes",
          icon: "./svg-icons/users.svg",
          price: 1400,
          next: "/questions/payments"
        },
        {
          id: 5,
          name: "No",
          icon: "./svg-icons/no-social.svg",
          price: 0,
          next: "/questions/payments"
        },
        {
          id: 6,
          name: "I don't know",
          icon: "./svg-icons/dunno.svg",
          price: 0,
          next: "/questions/payments"
        }
      ]
    },
    {
      name: "payments",
      title: "Do you want in-App purchases?",
      id: uuid(),
      values: [
        {
          id: 7,
          name: "Yes",
          icon: "./svg-icons/money.svg",
          price: 3000,
          next: "/questions/logo"
        },
        {
          id: 8,
          name: "No",
          icon: "./svg-icons/no-money.svg",
          price: 0,
          next: "/questions/logo"
        },
        {
          id: 9,
          name: "I don't know",
          icon: "./svg-icons/dunno.svg",
          price: 0,
          next: "/questions/logo"
        }
      ]
    },
    {
      name: "logo",
      title: "Do you want in-App purchases?",
      id: uuid(),
      values: [
        {
          id: 10,
          name: "Yes",
          icon: "./svg-icons/Yes.svg",
          price: 3000,
          next: "/questions/recap"
        },
        {
          id: 11,
          name: "No",
          icon: "./svg-icons/No.svg",
          price: 0,
          next: "/questions/recap"
        }
      ]
    }
  ];
};
export default Model;
