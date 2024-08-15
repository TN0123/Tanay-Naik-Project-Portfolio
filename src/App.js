import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <div className="PortfolioWebsite">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/projects" element={<ProjectPage />}></Route>
          <Route
            path="/Real Time Carbon Emissions Visualizer"
            element={
              <Project
                img="./images/carbon-emissions-project-img.png"
                link="https://tn0123.github.io/ANTH481-Final-Project/"
                description="This project is a website designed to raise awareness about carbon emissions on a global scale. The website's main feature is a tool to visualize real time point source carbon emissions per country aggregated by sector. The website interacts with the CarbonMapper API, fetching its data on point source carbon emissions collected by satellites and allowing for it to be displayed by country in an easy to read manner. Additionally, the website contains a number of ways individuals can impactfully contribute to the important fight against climate change and reducing carbon emissions."
                motivation="This website was built for my final project of the class ANTH481: Environmental Ethnographies of Asia at the University of Maryland, College Park. For the final, I was tasked with creating a project related to environmental ethnographies around the world and I chose the topic of the ethnography surrounding climate change. Carbon emissions are the primary contributor to climate change, as through these carbon-containing greenhouse gasses, excess heat is trapped in the Earth’s atmosphere, resulting in a drastic increase in the planet’s temperature. We are commonly told to reduce our carbon footprint by being less wasteful on a day to day basis, but in reality, this type of advice barely puts a dent in the colossal amount of carbon emissions that are released everyday. I built this website to provide information on how individuals can contribute meaningfully to the fight against climate change, starting by raising awareness about carbon emissions and then guiding individuals to take action in the right ways."
                technologies="This project was built from scratch using HTML, CSS, and Javascript. The website also interacted with the CarbonMapper API using JSON queries."
              />
            }
          ></Route>

          <Route
            path="/Cerebro"
            element={
              <Project
                img="./images/Cerebro Logo.jpg"
                link="https://devpost.com/software/cerebro-efj0la"
                description="Cerebro is a chrome extension that provides an accessible, hands-free alternative to internet browsing to the physically impaired. It uses computer vision to detect minor facial movements that vertically scroll the webpage and interact with detected points of interest (hyperlinks, input fields, etc…). It also uses voice commands to navigate through web browser history and type with voice input. This project was built in a group of 3 during Bitcamp 2024 over the span of 36 hours. It won the first place prize in the Best Razzle Dazzle Hack category, an award given to the most unique hack."
                motivation="Bitcamp 2024! For this hack, we wanted to increase the accessibility of technology for people who may have limitations with traditional input methods, such as a keyboard and mouse. By focusing on hands-free browsing, we aimed to provide an alternative solution that not only addressed these challenges but also empowered users to use the internet with greater freedom and efficiency. Through this project, our team hoped to provide a more inclusive online experience where everyone can benefit from modern day technologies, regardless of their physical abilities."
                technologies="The computer vision was implemented through the use of faceAPI.js, a javascript library that specializes on detecting/tracking facial movements. The voice commands were achieved by using Google’s Web Speech API, which allowed us to easily transcribe and handle microphone input. The link between the Chrome Extension window and the current browser window was achieved through the use of extension content scripts, which allow us to securely inject javascript from the extension into the browser. Communication between the injected scripts and the extension can then be easily achieved via Chrome’s built-in runtime event system."
              />
            }
          ></Route>

          <Route
            path="/FaceLogger"
            element={
              <Project
                img="./images/FaceLoggerDemo (1).gif"
                link="https://github.com/TN0123/FaceLogger"
                description="FaceLogger is a machine learning powered facial recognition security logging system. The program takes in a video stream, comparing the faces in frame to the user's known faces which are stored in a folder. If an unknown face is detected, a picture of it is taken and stored in a folder containing all unknown faces detected. The program outputs logs to a text file proving entry and exit timestamps for all individuals."
                motivation="I built this project in response to a phenomenon I noticed in my university’s dorms. To access one’s room, a student would have to swipe their ID to open the main door, swipe to call the elevator, and swipe to press which floor to go to. However, most are courteous enough to hold open the door or elevator for another person, and it is quite easy to get past all three of these checks without swiping your ID once due to the human element of the process. With a real time facial recognition security logging system, even if someone swipes another person in, all people’s entry and exit timestamps are recorded well, and in the event of an incident, being able to identify the cause and time of suspicious activity becomes a lot easier. The functionality of this program is applicable to lots of settings outside of college dorms, virtually in any setting that involves restricted physical access to an area. Whether it’s a corporate office, government facility, or residential building, FaceLogger can offer a solution for tracking access and ensuring the safety of restricted areas."
                technologies="For this project, I used python, opencv, and the face_recognition library, an API that let me easily detect and extract faces from an image based on the 68 landmarks model."
              />
            }
          ></Route>

          <Route
            path="/LLTrainer"
            element={
              <Project
                img="./images/LLTrainerDemo (1).gif"
                link="https://github.com/TN0123/LLTrainer"
                description="LLTrainer is a speedcubing web application designed to help speedcubers train their last layer algorithms. The user begins by following the scramble at the top of the screen, setting up a last layer case that they can solve on their cube. The user then times themselves on that case, which is then added to two tables. On the left side of the screen, the times table stores each time that the user achieves. On the right side, the statistics table ranks the user’s times by which case they got. The user can clear their session and delete individual times."
                motivation="I decided to build this project for the final project of the Harvard CS50x course which I completed in November of 2023. Speedcubing had been a passion of mine ever since I was in elementary school, and having learned how to use the Flask framework from another project in the course, I decided to make a flask app related to my long time hobby. To solve a Rubik’s cube, the most common method involves solving the first two layers of the cube with logic and the last layer with memorized algorithms. My weakest point during a solve was executing these last layer algorithms quickly, and I wanted an organized and isolated way to train them and know which areas to improve in, leading to the creation of this app."
                technologies="For this project, I used the python Flask framework with a SQLite database for the backend and HTML, CSS, and Javascript for the frontend."
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
