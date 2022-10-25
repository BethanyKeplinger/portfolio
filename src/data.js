import photo1 from "./img/profile-view.png";
import photo2 from "./img/react-movie-view.png";
import photo3 from "./img/MeetApp.png";
import photo4 from "./img/chatapp.png";
import photo5 from "./img/charmander.png";
// import casestudy1 from "./components/CaseStudy1";

export const projects = [
    {
        title: "myFlix [Angular]",
        subtitle: "MEAN Stack",
        description: "Users will be able to register for an account, log in and see a list of 10 different movies. The movies displayed include a synopsis, a brief biography of the director, and a brief definition of the movies genre. I was responsible for the frontend development of this project and used Angular Material to create the User Interface.",
        image: photo1,
        linkdemo: "https://bethanykeplinger.github.io/myFlix-Angular-client/welcome",
        linkcode: "https://github.com/BethanyKeplinger/myFlix-Angular-client",
        login: "Username: testing1234 Password: testing1234",
        casestudy: "#casestudy1"

    },

    {
        title: "myFlix [React]",
        subtitle: "MERN Stack | Axios | ReactDOM | Bootstrap | React-Redux",
        description: "First, I created the database that holds all of the movies' information using MongoDB and utilized mongoose to create structure. The client side was built using React and it gives users the abilitiy to see all of the movies. Users are then able to add movies to their favorites list and see those movies displayed on their profile.",
        image: photo2,
        linkdemo: "https://myflix2022.netlify.app/",
        linkcode: "https://github.com/BethanyKeplinger/myFlix-client",
        login: "Username: testing1234 Password: testing1234"
    },
    
    {
        title: "Meet App",
        subtitle: "React | AWS | TDD | PWA",
        description: "Meet App uses the Google Calendar API and OAuth2 authentication flow to fetch upcoming events. User's are able to filter events by city, show/hide event details, specify the number of events they would like to see and use the app even when offline. The app also provides data visualization with Recharts to showcase the data in different chart.",
        image: photo3,
        linkdemo: "https://bethanykeplinger.github.io/meet",
        linkcode: "https://github.com/BethanyKeplinger/meet",
        login: ""
    },

    {
        title: "ChitChat App",
        subtitle: "React Native | Expo | Gifted Chat | Google Firestore",
        description: "The app provides users with a chat interface with options to share images and their location. Users can choose between four different background colors for their chat which helps the app feel more personalized. This app was styled according to the brief's screen design.",
        image: photo4,
        linkdemo: "",
        linkcode: "https://github.com/BethanyKeplinger/Chat-App",
        login: ""
    },

    {
        title: "Pokedex App",
        subtitle: "JavaScript | HTML | CSS | Bootstrap",
        description: "The app retrieves information for the Pokemon from an API called PokeApi. Users are able to view a list of pokemon and are able to click to see more details about each pokemon.",
        image: photo5,
        linkdemo: "https://bethanykeplinger.github.io/Pokedex-App/",
        linkcode: "https://github.com/BethanyKeplinger/Pokedex-App",
        login: ""
    }
]