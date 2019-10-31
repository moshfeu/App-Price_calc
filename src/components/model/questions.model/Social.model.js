const SocialModel = () => {
  return {
    name: "Social",
    title: "Do you want your App to be connected to Socials?",
    url: "/questions/social",
    buttons: [
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
  };
};
export default SocialModel;
