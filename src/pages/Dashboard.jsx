import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/dashboard.css"; 
import { faHome, faUser, faWallet, faChartBar, faTasks, faCog, faQuestionCircle, faSignOutAlt, faUserCog, faLaptopCode, faPalette } from "@fortawesome/free-solid-svg-icons";
import { faWordpress, faAppStoreIos, faHtml5, faCss3Alt, faJsSquare } from "@fortawesome/free-brands-svg-icons";
import "./../styles/register.css"; 

const App = () => {
  return (
    <div className="dashboard-page">
      {/* Sidebar Navigation */}
      <nav>
        <ul>
          <li>
            <a href="#" className="logo">
              <img src="/assets/img/logo.jfif" alt="Logo" />
              <span>Gilang Punya</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faUser} /> Profile
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faCog} /> Settings
            </a>
          </li>
          <li>
            <a href="/" className="logout">
              <FontAwesomeIcon icon={faSignOutAlt} /> Home
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <section className="main">
        {/* Top Bar */}
        <div className="main-top">
          <h1>Skills in Programming</h1>
          <FontAwesomeIcon icon={faUserCog} />
        </div>

        {/* Skills Section */}
        <div className="main-skills">
          <SkillCard
            icon={faLaptopCode}
            title="Web Development"
          />
          <SkillCard
            icon={faWordpress}
            title="WordPress Development"
          />
          <SkillCard
            icon={faPalette}
            title="Graphic Design"
          />
          <SkillCard
            icon={faAppStoreIos}
            title="iOS Development"
          />
        </div>

        {/* Courses Section */}
        <CoursesSection />
      </section>
    </div>
  );
};

// SkillCard Component
const SkillCard = ({ icon, title, description }) => (
  <div className="card">
    <FontAwesomeIcon icon={icon} size="2x" />
    <h3>{title}</h3>
    <p>{description}</p>
    <button>Get Started</button>
  </div>
);

// CoursesSection Component
const CoursesSection = () => (
  <section className="main-course">
    <h1>My Courses</h1>
    <div className="course-box">
      <ul>
        <li className="active">In Progress</li>
      </ul>
      <div className="course">
        <CourseBox title="HTML" progress="80%" icon={faHtml5} />
        <CourseBox title="CSS" progress="50%" icon={faCss3Alt} />
        <CourseBox title="JavaScript" progress="30%" icon={faJsSquare} />
      </div>
    </div>
  </section>
);

// CourseBox Component
const CourseBox = ({ title, progress, icon }) => (
  <div className="box">
    <h3>{title}</h3>
    <p>{progress} - Progress</p>
    <button>Continue</button>
    <FontAwesomeIcon icon={icon} size="2x" />
  </div>
);

export default App;
