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
          icon: "apple-brands.svg",
          price: 2000,
          next: "/questions/social"
        },
        {
          id: 2,
          name: "Android",
          icon: "android.svg",
          price: 1500,
          next: "/questions/social"
        },
        {
          id: 3,
          name: "Both",
          icon: "both.svg",
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
          icon: "users.svg",
          price: 1400,
          next: "/questions/payments"
        },
        {
          id: 5,
          name: "No",
          icon: "no-social.svg",
          price: 0,
          next: "/questions/payments"
        },
        {
          id: 6,
          name: "I don't know",
          icon: "dunno.svg",
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
          icon: "money.svg",
          price: 3000,
          next: "/questions/logo"
        },
        {
          id: 8,
          name: "No",
          icon: "no-money.svg",
          price: 0,
          next: "/questions/logo"
        },
        {
          id: 9,
          name: "I don't know",
          icon: "dunno.svg",
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
          icon: "Yes.svg",
          price: 3000,
          next: "/questions/recap"
        },
        {
          id: 11,
          name: "No",
          icon: "No.svg",
          price: 0,
          next: "/questions/recap"
        }
      ]
    }
  ];
};
export default Model;
