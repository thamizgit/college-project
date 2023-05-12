const GalleryData = () => {
    const galleryArr = [
      {
        img: require("../../images/gallery/annual-day1.png"),
        align: false,
        title: "Annual Day",
        description:
          "Annual Day in college is a celebration of the achievements of the college and its students over the past year. It is usually a grand event that involves a lot of preparation and planning by both the college administration and students. There are also competitions held on Annual Day, such as sports events, quiz competitions, and debates. These competitions are a great way for students to showcase their skills and talents and compete with their peers.Food stalls and other entertainment activities are also set up on Annual Day, which makes the event more fun and enjoyable for everyone",
      },
      {
        img: require("../../images/gallery/nss.jpg"),
        align: true,
        title: "NSS Activity",
        description:
          "Group of college students who are members of the National Service Scheme (NSS) participating in an environmental cleanup activity.  By participating in the cleanup activity as part of the NSS, the students are not only improving the local environment, but also developing important skills such as teamwork, leadership, and civic responsibility. The photo serves as a reminder that we all have a responsibility to care for our shared environment and to work together to make our communities cleaner and more sustainable.",
      },
    ];
    return galleryArr;
}
export default GalleryData