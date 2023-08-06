import React, { useState, useEffect } from "react";
import './cv.css'
import { useNavigate } from "react-router-dom";
import ToHome from "../home/navigateHome";

export default function CV() {


  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const delay = 2000; // Delay between each section appearing (in milliseconds)

    const timeout = setTimeout(() => {
      setVisibleSections((prevVisibleSections) => {
        const nextSectionIndex = prevVisibleSections.length;
        const allSectionsVisible = nextSectionIndex === cvSections.length;
        return allSectionsVisible
          ? prevVisibleSections
          : [...prevVisibleSections, nextSectionIndex];
      });
    }, delay);

    return () => clearTimeout(timeout);
  }, [visibleSections]);

 const cvSections = [
       {
     section: "Personal profile",
     content: `I am a determined and highly motivated individual with strong problem-solving skills, effective communication, and a passion for software engineering. As an outgoing team player, I strive for excellence and consistently deliver high-quality work.`,
   },

   {
     section: "Key Skills",
     content: `Proficient in GO, Rust, JavaScript, React.js, HTML, CSS, and SQL.
      Excellent time management and punctuality.
      Strong ability to understand and execute tasks with minimal supervision.
      Quick learner with a strong work ethic.
      Effective team player with excellent oral and written communication skills.`,
   },
   {
     section: "Work & Experience",
     content: [
       {
         company: "Card Factory",
         role: "Deputy Manager",
         duration: "November 2023 - Present",
         responsibilities:
           "Overseeing daily operations, managing staff, and driving sales performance.",
       },
       {
         company: "Tower Transit LTD",
         role: "Bus Driver",
         duration: "25/02/2017 – 11/01/2021",
         responsibilities:
           "Safely operated buses, ensured passenger safety, and addressed customer queries.",
       },
       {
         company: "Tesco LTD",
         role: "Admin Staff",
         duration: "15/08/2015 - 28/02/2017",
         responsibilities:
           "Liaised with customer service, managed customer orders, and resolved payment issues.",
       },
       {
         company: "Iceland Foods LTD",
         role: "Duty Manager",
         duration: "29/07/2012 – 15/09/2015",
         responsibilities:
           "Oversaw store management, inventory control, staff management, and customer service.",
       },
       {
         company: "Wilson Estate Agent Ltd",
         role: "Trainee Office Administrator",
         duration: "08/12/2011 – 10/02/2011",
         responsibilities:
           "Handled phone calls, appointments, and provided administrative support.",
       },
     ],
   },
   {
     section: "Education & Training",
     content: [
       {
         institution: "Secondary Education",
         duration: "2002 September – 2007 July",
         qualification: "Completed GCSEs",
       },
       {
         institution: "Further Education",
         duration: "2007 September – 2009 July",
         qualification:
           "Completed B-Tech courses in Health and Social Care and Business",
       },
       {
         institution: "01founders",
         duration: "",
         qualification:
           "Completed Web application projects using GO, JavaScript, HTML, and CSS",
       },
     ],
   },
 ];


  const Section = ({ section, content }) => (
    <div>
      <h2>{section}</h2>
      {typeof content === "string" ? (
        <p>{content}</p>
      ) : (
        <ul>
          {content.map((item, index) => (
            <li key={index}>
              <strong>{item.company || item.institution}</strong> (
              {item.duration})<br />
              {item.responsibilities && <p>{item.responsibilities}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <>
        <div>
            <img id="returnHome" className='imageLinks' src={require('../../images/home.png')} alt="Home" onClick={ToHome} />
        </div>
      <div className="CV">
        <div id="cvTitle">Curriculum vitae</div>
        {cvSections.map((section, index) => (
          <div
            key={index}
            style={{
              display: visibleSections.includes(index) ? "block" : "none",
            }}
          >
            <Section section={section.section} content={section.content} />
          </div>
        ))}
      </div>
    </>
  );
};
