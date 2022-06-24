import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./CreateCourse.scss";

const CreateCourse = () => {
  const [message, setMessage] = useState("");
  const [course, setCourse] = useState({
    courseName: "",
    location: "",
    price: "",
    duration: "",
    summary: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      event.target[0].value === "" ||
      event.target[1].value === "" ||
      event.target[2].value <= 0 ||
      event.target[3].value === "" ||
      event.target[4].value === ""
    ) {
      setMessage("PLease enter valid details");
    } else {
      setMessage("Course was added");
      fetch("http://localhost:8080/course", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course),
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .cath((err) => console.log(err));
      event.target.reset();
    }
  };

  return (
    <div className="display">
      <div className="display__title">Create Course</div>
      <form onSubmit={handleSubmit}>
        <input
          className="display__details"
          placeholder="Course Name"
          type="text"
          name="name"
          id="name"
          onInput={(event) =>
            setCourse({ ...course, courseName: event.target.value })
          }
        />
        <input
          className="display__details"
          placeholder="Location"
          type="text"
          name="location"
          id="location"
          onInput={(event) =>
            setCourse({ ...course, location: event.target.value })
          }
        />
        <input
          className="display__details"
          placeholder="Price"
          type="text"
          name="price"
          id="price"
          onInput={(event) =>
            setCourse({ ...course, price: event.target.value })
          }
        />
        <input
          className="display__details"
          placeholder="Duration"
          type="text"
          name="duration"
          id="duration"
          onInput={(event) =>
            setCourse({ ...course, duration: event.target.value })
          }
        />
        <input
          className="display__details"
          type="text"
          placeholder="Summary"
          name="Summary"
          id="Summary"
          onInput={(event) =>
            setCourse({ ...course, summary: event.target.value })
          }
        />
        <button type="submit" className="display__button">
          Submit
        </button>
      </form>

      <div className="display__message">{message}</div>
      <div>
        <NavLink to="/">Back</NavLink>
      </div>
    </div>
  );
};

export default CreateCourse;
