import React, { useState } from "react";
import { Link } from "react-router-dom";

import './signin/Login.css'

const ListMore = ({ children }) => {
  const text = children;
  const [isListMore, setIsListMore] = useState(true);
  const toggleListMore = () => {
    setIsListMore(!isListMore);
  };
  return (
    <p>
      {isListMore ?text.slice(0, 10) : text}
      <span onClick={toggleListMore} className="list-or-hide">
       <button> {isListMore ? "show more" : " show less"}</button>
      </span>
    </p>
  );
};

const ContentFinds = () => {
  return (
    <div className="container">
      <h2>
       
        <section className="section1">         
          <div className="explore">
            <h2 className="explore_heading">
            Find the right job or internship for you
            </h2>
          </div>
          <div className="explore_content">
            <h2 className="content_text"> SUGGESTED SEARCHES</h2>
            <div className="explore_content_data">
              <ul className="explore_ul">
                <li className="all_topics">
                  <ListMore>
                  <Link className="all_topics_list" to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill">See All Topics </Link>
                  <Link className="all_topics_list" to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill">Science and Environment </Link>
                  <Link className="all_topics_list" to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill"> Marketing and Advertising</Link>
                  <Link className="all_topics_list" to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill">Sales and Retail </Link>
                  <Link className="all_topics_list" to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill">Technology </Link>
                  <Link className="all_topics_list" to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill">Finance and Economy </Link>
                  <Link className="all_topics_list" to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill"> Health</Link>
                  <Link className="all_topics_list" to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill">Bussiness and Management </Link>
                  
               
                  <Link className="all_topics_list" to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill">See All Topics </Link>
                  <Link className="all_topics_list" to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill">Science and Environment </Link>
                  <Link className="all_topics_list" to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill"> Marketing and Advertising</Link>
                  <Link className="all_topics_list" to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill">Sales and Retail </Link>
                  <Link className="all_topics_list" to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill">Technology </Link>
                  <Link className="all_topics_list" to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill">Finance and Economy </Link>
                  <Link className="all_topics_list" to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill"> Health</Link>
                  <Link className="all_topics_list" to="https://www.linkedin.com/content-hub/?trk=homepage-basic_explore-content_topic-pill">Bussiness and Management </Link>
                  </ListMore></li>
        
              </ul>
            </div>
          </div>
        </section>
      </h2>
    </div>
  );
};

export default ContentFinds;
