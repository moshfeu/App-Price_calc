const TypeModel = () => {
  return {
    name: "Type",
    title: "What platform you want your app to be built on?",
    url: "/questions/type",
    buttons: [
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
  };
};
export default TypeModel;
