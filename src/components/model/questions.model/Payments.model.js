const PaymentsModel = () => {
  return {
    name: "Payments",
    title: "Do you want in-App purchases?",
    url: "/questions/payments",
    buttons: [
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
  };
};
export default PaymentsModel;
