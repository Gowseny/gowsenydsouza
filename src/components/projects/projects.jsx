import React from 'react';
import '../link/links.css';
import ToHome from '../home/navigateHome';
import '../projects/projects.jsx'
import './projects.css'
import '../../App.css'
import '../link/links.css'
const RedirectToPacMan = () => {
  if (typeof window !== "undefined") {
    window.open("https://gowsenys-my-pacman.netlify.app", "_blank");
  }
};

const RedirectToSortable = () => {
  if (typeof window !== "undefined") {
    window.open("https://gowsenys-sortable.netlify.app", "_blank");
  }
};

const RedirectToForum = () => {
  if (typeof window !== "undefined") {
    window.open("https://gowsenys-forum.netlify.app", "_blank");
  }
};



const MyProjects =() => {

    return (
      <>
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>

        <div id="App">
          <div id="MyName">Gowseny D'Souza</div>
          <div id="imageLinks">
            <img
              className="imageLinks"
              alt="Home"
              onClick={ToHome}
              src={require("../../images/home.png")}
            />

            <img
              className="imageLinks"
              onClick={RedirectToPacMan}
              src={require("../../images/pacMan.png")}
            ></img>

            <img
              className="imageLinks"
              alt="Home"
              onClick={RedirectToSortable}
              src={require("../../images/search.png")}
            />

            <img
              className="imageLinks"
              alt="Home"
              onClick={RedirectToForum}
              src={require("../../images/forum.png")}
            />
          </div>
        </div>
      </>
    );
};

export default MyProjects;