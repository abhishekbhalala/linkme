import React, { useState } from "react";
import { Link } from "react-router-dom";
import Another from "./another";
import ContentFinds from "./FindData";
import Imgslider from "./imgslider";
import "./signin/Login.css";

const ListMore = ({ children }) => {
  const text = children;
  const [isListMore, setIsListMore] = useState(true);
  
  const toggleListMore = () => {
    setIsListMore(!isListMore);
  };
 
  return (
    <p>
      {isListMore ? text.slice(0, 8) : text}
      <span onClick={toggleListMore} className="list-or-hide">
        <button> {isListMore ? "show more" : " show less"}</button>
      </span>
    </p>
  );
};

const Contents = () => {
  return (
    <div className="container">
      
        <section className="section1">
          <div className="explore">
            <h2 className="explore_heading">
              Explore topics you are interested in
            </h2>
          </div>
          <div className="explore_content">
            <h2 className="content_text"> Content Topics</h2>
            <div className="explore_content_data">
              <ul className="explore_ul">
                <li className="all_topics">
                  <ListMore>
                    <Link
                      className="all_topics_list"
                      to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill"
                    >
                      See All Topics
                    </Link>
                    <Link
                      className="all_topics_list"
                      to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill"
                    >
                      Science and Environment
                    </Link>
                    <Link
                      className="all_topics_list"
                      to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill"
                    >
                      Marketing and Advertising
                    </Link>
                    <Link
                      className="all_topics_list"
                      to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill"
                    >
                      Sales and Retail
                    </Link>
                    <Link
                      className="all_topics_list"
                      to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill"
                    >
                      Technology
                    </Link>
                    <Link
                      className="all_topics_list"
                      to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill"
                    >
                      Finance and Economy
                    </Link>
                    <Link
                      className="all_topics_list"
                      to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill"
                    >
                      Health
                    </Link>
                    <Link
                      className="all_topics_list"
                      to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill"
                    >
                      Bussiness and Management
                    </Link>

                    <Link
                      className="all_topics_list"
                      to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill"
                    >
                      See All Topics
                    </Link>
                    <Link
                      className="all_topics_list"
                      to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill"
                    >
                      Science and Environment
                    </Link>
                    <Link
                      className="all_topics_list"
                      to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill"
                    >
                      Marketing and Advertising
                    </Link>
                    <Link
                      className="all_topics_list"
                      to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill"
                    >
                      Sales and Retail
                    </Link>
                    <Link
                      className="all_topics_list"
                      to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill"
                    >
                      Technology
                    </Link>
                    <Link
                      className="all_topics_list"
                      to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill"
                    >
                      Finance and Economy
                    </Link>
                    <Link
                      className="all_topics_list"
                      to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill"
                    >
                      Health
                    </Link>
                    <Link
                      className="all_topics_list"
                      to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill"
                    >
                      Bussiness and Management
                    </Link>
                  </ListMore>
                </li>
              </ul>
            </div>
          </div>
          <ContentFinds />
          <div className="explore">
            <h2 className="explore_heading">
              Post your job for millions of people to see
            </h2>
          </div>
          <div className="explore_content">
            <h2 className="content_text"> </h2>
            <div className="explore_content_data">
              <ul className="explore_ul">
                <li className="all_topics">
                  <Link
                    className="all_topics_list"
                    to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill"
                  >
                    Post a job
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <Imgslider/>
        <Another/> 
          </div>
  );
};

export default Contents;
