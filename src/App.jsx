import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import Home from "./containers/Home/Home";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [showUser, setShowUser] = useState("User");
  const handleUser = () => {
    if (showUser === "User") {
      setShowUser("Courseology Account");
    } else {
      setShowUser("User");
    }

    console.log(showUser);
  };
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getDataFromAPI();
  }, []);

  const getDataFromAPI = async () => {
    const url = "http://localhost:8080/courses";
    const response = await fetch(url);
    const data = await response.json();
    setCourses(data);
  };

  return (
    <Router>
      <div className="app-container">
        <Header showUser={showUser} />

        <Routes>
          <Route path="/course-create" element={<CreateCourse />} />
          <Route
            path="/course/:courseId"
            element={<CourseInfo courses={courses} showUser={showUser} />}
          />
          <Route path="/" element={<Home courses={courses} />} />
        </Routes>

        <Footer handleUser={handleUser} showUser={showUser} />
      </div>
    </Router>
  );
};
export default App;
