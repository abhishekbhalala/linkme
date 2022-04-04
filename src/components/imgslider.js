import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import { useTheme } from "@material-ui/core/styles";
import React, { useState } from "react";

const MyCollection = [
  {
    label: "Let the right people know you're open to work",
    text: "With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities",
    imgPath:
      "https://www.digitalmarketer.com/wp-content/uploads/2021/07/DM_LinkedinStrategy_Featured.jpg",
  },
  {
    label: "Stay up to date on your industry",
    text: "From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry",
    imgPath:
      "https://www.betterteam.com/images/Linkedin-2400x2400-20200111.png?crop=4:3,smart&width=1200&dpr=2",
  },
  {
    label: "Conversations today could lead to opportunity tomorrow",
    text: "Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career",
    imgPath:
      "https://cdn.lynda.com/course/740360/740360-636656074263856706-16x9.jpg",
  },
];
const Imgslider = () => {
  const CollectionSize = MyCollection.length;
  const theme = useTheme();
  const [index, setActiveStep] = useState(0);

  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const goToBackPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div className="section_slider">
      <section className="slide_list">
        <header className="slide_list_header">
          <div className="slide_list_header_nav">
            <div className="slide_list_nav_wrap">
              <button
                onClick={goToBackPicture}
                disabled={index === CollectionSize - 3}
                className="slide_list_nav_button"
              >
                <img
                  className="slide_list_nav_icon"
                  src="https://icon-library.com/images/back-arrow-icon/back-arrow-icon-9.jpg"
                  alt="left"
                />
                <span className="slide_list_nav_text">
                  Previous
                  {theme.direction !== "ltr" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}{" "}
                </span>
              </button>
            </div>
            <div className="slide_list_nav_wrap_right">
              <button
                className="slide_list_nav_button"
                onClick={goToNextPicture}
                disabled={index === CollectionSize - 1}
              >
                <span className="slide_list_nav_text">
                  Next
                  {theme.direction !== "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  <img
                    className="slide_list_nav_icon"
                    src="https://icon-library.com/images/next-arrow-icon/next-arrow-icon-13.jpg"
                    alt="right"
                  />
                </span>
              </button>
            </div>
          </div>
        </header>
        <ul className="slide_list_list">
          <li className="slide_listtype">
            <div className="content_of_the_part">
              <h2 className="header_content_text">
                {MyCollection[index]?.label}
              </h2>
              <p className="content_text">{MyCollection[index]?.text}</p>
            </div>
            <img
              className="content-part_image"
              src={MyCollection[index]?.imgPath}
              alt="circle1"
            />
          </li>
        </ul>
      </section>
    </div>
    
  );
};

export default Imgslider;
