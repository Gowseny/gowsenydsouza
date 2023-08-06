import "./links.css";
import { useNavigate } from "react-router-dom";

const RedirectToLinkedIn = () => {
  window.open("https://www.linkedin.com/in/gowseny-dsouza/", "_blank");
};

const RedirectToGithub = () => {
  window.open("https://github.com/Gowseny/", "_blank");
};

const Links = () => {
  const navigate = useNavigate(); // Move the useNavigate hook inside the component body

  const toMyProjects = () => {
    navigate("/myProjects");
  };

  const toMyCV = () => {
    navigate("/myCv");
  };

  return (
    <>
    <div id="App">
      <div id="MyName">Gowseny D'Souza</div>
      <div id="imageLinks">
        <img
          className="imageLinks"
          onClick={RedirectToGithub}
          src={require("../../images/github.png")}
        />

        {/* Image link to LinkedIn Profile */}
        <img
          className="imageLinks"
          onClick={RedirectToLinkedIn}
          src={require("../../images/linkedin.jpg")}
        />
        {/* End of ImageLink for linkedIn */}

        {/* Image Link to open another page with my projects */}
        <img
          href="/myProjects"
          className="imageLinks"
          id="projectImage"
          onClick={toMyProjects}
          src={require("../../images/idea.png")}
        />

        <img
          href="/myCv"
          className="imageLinks"
          onClick={toMyCV}
          src={require("../../images/cv.png")}
        />

        </div>

        {/* End of Project */}
        {/*  */}
        {/* https://sortable-raid-gowsenys.netlify.app/ */}
      </div>
    </>
  );
};

export default Links;
