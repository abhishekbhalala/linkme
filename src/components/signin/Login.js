import React from "react";
import { Link } from "react-router-dom";
import PeopleIcon from "@material-ui/icons/People";
import WorkIcon from "@material-ui/icons/Work";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import SchoolIcon from "@material-ui/icons/School";
import "./Login.css";
import Contents from "../ListData";
import aa  from './footer.module.css'

const Login = () => {

  return (
    <>
    <div>
      <div className="logo">
        <Link to="/">
          <img
            className="logo_img"
            src="https://logowik.com/content/uploads/images/linkedin-new4645.jpg"
            alt="logo"
          />
        </Link>
        <div className="js">
          <div className="icons_space">
            <Link to="/person">
              <PeopleIcon>People</PeopleIcon>
            </Link>

            <Link to="/job">
              <WorkIcon>JOB</WorkIcon>
            </Link>

            <AddCircleSharpIcon> </AddCircleSharpIcon>
            <Link to="/learning">
              <SchoolIcon></SchoolIcon>
            </Link>
          </div>
          <Link to="/join">
            <p className="join">Join Now</p>
          </Link>
        </div>
        <Link to="/signin">
          <p className="signin">SignIn</p>
        </Link>
      </div>
      <div className="mainsection">
        <div className="section_content">
          <div className="contain">
            <h1 className="text_login">
              Welcome to your professional community
            </h1>

            <ul className="downline">
              <li className="side_text1">
                <h4 className="side_text_I">
                  <Link to="/job">Search for a Job</Link>
                </h4>
              </li>
              <li className="side_text1">
                <h4 className="side_text_I">
                  <Link to="/person">Find a person you know</Link>
                </h4>
              </li>
              <li className="side_text1">
                <h4 className="side_text_I">
                  <Link to="/learning">Learn a new Skill</Link>
                </h4>
              </li>
            </ul>
          </div>
          <img
            className="round_image"
            src="https://media.licdn.com/media//AAYQAgSrAAgAAQAAAAAAADCLr3coQt8AQiyj4giyWxfjsg.svg"
            alt="round"
          />
        </div>
    <Contents/>
       
      </div>
    </div>
    <footer className={aa.bottom}>
      <ul className={aa.footer_list}>
        <li className={aa.footer_item}>
          <span className={aa.sronly}>LinkedIn</span>
          <span className={aa.copytext}>@ 2022</span>
          </li>
          <li className={aa.footer_itemlist}>About</li>
          <li className={aa.footer_itemlist}>About</li>
          <li className={aa.footer_itemlist}>About</li>
          <li className={aa.footer_itemlist}>About</li>
          <li className={aa.footer_itemlist}>About</li>
          <li className={aa.footer_itemlist}>About</li>
          <li className={aa.footer_itemlist}>About</li>
          <li className={aa.footer_itemlist}>About</li>
          <li className={aa.footer_itemlist}>About</li>
          <li className={aa.footer_itemlist}>About</li>
          <li className={aa.footer_itemlist}>About
          </li>
          </ul></footer></>
  );
};

export default Login;
