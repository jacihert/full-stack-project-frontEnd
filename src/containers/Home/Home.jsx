import SearchBar from "../../components/SearchBar/SearchBar";
import ListSearchResults from "../ListSearchResults/ListSearchResults";
import "./Home.scss";

import { useState } from "react";

const Home = ({ courses }) => {
  const [searchTerm, setSearchTerm] = useState("");
  let searchedCourses = "";
  let input = "";

  const handleInput = (event) => {
    input = event.target.value;
    setSearchTerm(input);
  };

  searchedCourses = courses.filter((course) =>
    course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <SearchBar searchTerm={searchTerm} handleInput={handleInput} />
      <ListSearchResults courses={searchedCourses} />
    </div>
  );
};
export default Home;
