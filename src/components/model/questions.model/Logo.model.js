const LogoModel = () => {
  return {
    name: "Logo",
    title: "Do you want in-App purchases?",
    url: "/questions/logo",
    buttons: [
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
  };
};
export default LogoModel;
