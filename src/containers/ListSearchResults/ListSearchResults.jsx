import "./ListSearchResults.scss";
import React from "react";
import { Link } from "react-router-dom";

const ListSearchResults = ({ courses }) => {
  const courseListJSX = courses.map((course, index) => (
    <Link to={`/course/${course.id}`} key={index}>
      <div className="course">{course.courseName}</div>
    </Link>
  ));

  return (
    <section>
      <div className="container">
        <div className="list-title">Course Results.... </div>
        <div className="list-results">{courseListJSX}</div>
      </div>
    </section>
  );
};

export default ListSearchResults;
