import { useParams, NavLink } from "react-router-dom";
import { useState } from "react";
import "./CourseInfo.scss";

const CourseInfo = (props) => {
  const { courses, showUser } = props;
  const { courseId } = useParams();

  const course = courses.find((course) => course.id == courseId);

  const [favourite, setFavourite] = useState("");
  const handleFavourite = (event) => {
    setFavourite(!favourite);
  };

  const [message, setMessage] = useState("");
  const handleDelete = (event) => {
    event.preventDefault();
    let url = "http://localhost:8080/course/" + courseId;
    console.log(url);
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    setMessage("This course has been deleted");
    event.target.reset();
  };

  return (
    <div className="display">
      <div className="display__courseHeading">{course.courseName}</div>{" "}
      {favourite && <p className="display__favourite">★ (ID : {course.id})</p>}
      {!favourite && <p className="display__favourite">(ID : {course.id})</p>}
      <div className="display__courseContent">
        <div className="display__courseContent__labels">Location </div>
        <div className="display__courseContent__details">{course.location}</div>
      </div>
      <div className="display__courseContent">
        <div className="display__courseContent__labels">Price</div>
        <div className="display__courseContent__details">{course.price}</div>
      </div>
      <div className="display__courseContent">
        <div className="display__courseContent__labels">Duration</div>
        <div className="display__courseContent__details">{course.duration}</div>
      </div>
      <div className="display__courseContent">
        <div className="display__courseContent__labels">Summary</div>
        <div className="display__courseContent__details--summary">
          {course.summary}
        </div>
      </div>
      <div className="display__buttonContainer">
        {showUser === "User" && !favourite && (
          <div className="display__courseButton" onClick={handleFavourite}>
            Mark as Favourite
          </div>
        )}
        {showUser === "Courseology Account" && (
          <div className="display__courseButton" onClick={handleDelete}>
            Delete
          </div>
        )}
      </div>
      <div className="display__message">{message}</div>
      <div className="display__courseButtonBack">
        <NavLink to="/">Back</NavLink>
      </div>
    </div>
  );
};

export default CourseInfo;
