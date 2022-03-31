import React, { useState } from "react";
import { Link } from "react-router-dom";
import aa from "./another.module.css";
import "./signin/Login.css";
import ReactPlayer from 'react-player'
import Footer from "./signin/footer";

const Another = () => {

    const [show,setShow]=useState(false);

    const dropdownclick=()=>{
        setShow(!show)
    }
  return (
    <>
    <section className={aa.section}>
      <div className={aa.alldiv}>
        <div className={aa.partdiv}>
          <img
            className={aa.img}
            src="https://static-exp1.licdn.com/sc/h/b1fxwht7hdbeusleja7ciftsj"
            alt=""
          />
          <div className={aa.imga}>
            <h2 className={aa.headinga}>Connect with people who can help</h2>
            <Link className="all_topics_list" to="/person">
              Find People You Know
            </Link>
          </div>
        </div>
        <div className={aa.partdiv}>
          <img
            className={aa.img}
            src="https://static-exp1.licdn.com/sc/h/dkfub4sc7jgzg3o31flfr91rv"
            alt=""
          />
          <div className={aa.imga}>
            <h2 className={aa.headinga}>
              Learn the skills you need to succeed
            </h2>
            <div className={aa.mydropdown}>
              <div className={aa.dropdown}>
                <button className={aa.buttton_dropdown}>
                  <span  className={aa.text_span}>
                    Choose a topic to learn about
                  </span>
                  <img  onClick={dropdownclick}
                    className={aa.down_icon}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAHlBMVEX///8AAABhYWFZWVleXl5bW1uZmZlWVlZSUlKHh4c7NRlEAAACq0lEQVR4nO3Za47jIBBFYc/E6XTvf8MjVEITx3kYTFGPPt8KfMUh/MiyAAAAAAAAAAAAAAAAAAAAAAAAYOPr9jez29eyfP/J7Luc4mr9FYpWCTXvxLXexYv1lyi5/P+5uVp/i4rr/S9qxlDXZSPfKV6XB9nu4uVxYLZQ1/3AXBOfDswU6pNEc018OTBLqC8SFRkejd0zkS3UN4nmOMUPJxj/Lr69gxlC/Zho9IkHB8YN9VCikSc2DIwZ6uFEo05sHBgv1KZERayn/8BDvxcp1OZEo51i1wkWUe5ixx2sYoTamWiciacGRgj1RKIxJp4e6D3Uk4kKz49G9zOx5TfUAYkKr6c46AQLn3dxyB2sPIY6LFGvEwcP9Bfq0EQ9TlQY6CvU4Yl6m6g00E+oKokKH0//wId+z0OoaokK+1AVE/UxUX2gdajKidpPnDLQMtQJidpOnDbQKtRJiQqLp1/1od+bH+rERMXsU5x8gsXcuzj1DlYzQ52e6OyJRgPnhWqS6MyJhgPnhGqWqNB/NAyeiS3tUE0TFbqnaH6CheZdNL6DlV6oDhIVWhPdDNQK1Umi4qYw8GY9amt8qI4SFaMnuhs4+i66uoPVyKffxUO/Ny5Uh4mKUafo9ASLMXfR5R2sRoTqNlFxfqLzgedDdZ2oODcxwMBzobpPVPQ/Go6fia3eUEMkKvpOMcwJFj13McgdrNpDDZSoaJ0YbmBrqMESFS0TQw5sCTVgouLooxHqmdg6FmrQRMWRUwx8gsXnuxj2DlafQg2dqHg/McHA9/9pOPtvotfruxj+DlavQk2RqHg+MdHA56GmSVTsn/7gD/3eY6ipEhXX3CdY3N/FZHewWjMnKtbsA2uoSRMVl+wDS6iJExU/1h8AAAAAAAAAAAAAAAAAAAAAAADw2/0D1Ro1Y8h9PUkAAAAASUVORK5CYII="
                    alt=""
                  />
                </button>
                <div className={aa.dropdown_list}>
                  
                  {show &&
                  <ul className={aa.dropdown_show}>
                    <li className={aa.dropdown_name}>
                      <Link className={aa.training_link}>
                        <span className={aa.training}>
                          Training And Education
                        </span>
                        <span className={aa.edu}>320+ Course</span>
                      </Link>
                    </li>

                    <li className={aa.dropdown_name}>
                      <Link className={aa.training_link}>
                        <span className={aa.training}>IT Help Desk</span>
                        <span className={aa.edu}>400+ Course</span>
                      </Link>
                    </li>

                    <li className={aa.dropdown_name}>
                      <Link className={aa.training_link} >
                        <span className={aa.training}>
                          Bussiness Analysis and Strategy
                        </span>
                        <span className={aa.edu}>250+ Course</span>
                      </Link>
                       </li>
                       <li className={aa.dropdown_name}>
                      <Link className={aa.training_link} >
                        <span className={aa.training}>
                          Bussiness Analysis and Strategy
                        </span>
                        <span className={aa.edu}>250+ Course</span>
                      </Link>
                       </li>
                       <li className={aa.dropdown_name}>
                      <Link className={aa.training_link} >
                        <span className={aa.training}>
                          Bussiness Analysis and Strategy
                        </span>
                        <span className={aa.edu}>250+ Course</span>
                      </Link>
                       </li>
                       <li className={aa.dropdown_name}>
                      <Link className={aa.training_link} >
                        <span className={aa.training}>
                          Bussiness Analysis and Strategy
                        </span>
                        <span className={aa.edu}>250+ Course</span>
                      </Link>
                       </li>
                       <li className={aa.dropdown_name}>
                      <Link className={aa.training_link} >
                        <span className={aa.training}>
                          Bussiness Analysis and Strategy
                        </span>
                        <span className={aa.edu}>250+ Course</span>
                      </Link>
                       </li>
                       <li className={aa.dropdown_name}>
                      <Link className={aa.training_link} >
                        <span className={aa.training}>
                          Bussiness Analysis and Strategy
                        </span>
                        <span className={aa.edu}>250+ Course</span>
                      </Link>
                       </li>
                       <li className={aa.dropdown_name}>
                      <Link className={aa.training_link} >
                        <span className={aa.training}>
                          Bussiness Analysis and Strategy
                        </span>
                        <span className={aa.edu}>250+ Course</span>
                      </Link>
                       </li>
                       <li className={aa.dropdown_name}>
                      <Link className={aa.training_link} >
                        <span className={aa.training}>
                          Bussiness Analysis and Strategy
                        </span>
                        <span className={aa.edu}>250+ Course</span>
                      </Link>
                       </li>
                       <li className={aa.dropdown_name}>
                      <Link className={aa.training_link} >
                        <span className={aa.training}>
                          Bussiness Analysis and Strategy
                        </span>
                        <span className={aa.edu}>250+ Course</span>
                      </Link>
                       </li>
                  </ul>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
       <section className={aa.section}>
       <div className={aa.video}>
         <div className={aa.video_img}>
       <ReactPlayer className={aa.video_frame} url='https://youtu.be/jCEdTq3j-0U'/>
      
       </div>
       <div className={aa.sidevideo}>
       <h2 className={aa.video_heading}>3 Ways to Find Your job</h2>
       <h3 className={aa.video_subheading}>Check out these steps to help you get started.</h3>
       </div>
       </div>

 </section>
 <section className={aa.section}> 
    
       <div className={aa.bottom}>
           <h2 className={aa.headingline}>Join your colleagues, classmates, and friends on LinkedIn.</h2>
           <Link className={aa.buttonlink} to='/join'>Get Started</Link>
       </div>
       </section>
       <Footer/></>
  );
};

export default Another;
