import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Jobpage.module.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Form from './form';
import Main from './main';
const Jobpage = () => {

const [isdropdown,setIsdropdown]=useState(false);
// const [isshown,setIsshown]=useState(false);

  const jobsdropdownclick=()=>{
    setIsdropdown(!isdropdown);
  
  }

  // const backdropclick=()=>{
  //   setIsshown(!isshown);
  //   console.log('backdrop' ,isshown)
  // }

  return (
    <>
    <div className={styles.header_base}>
  <header className={styles.headerline}>
    <nav className={styles.nav}>
      <Link className={styles.alink} to='/'>
    <img
            className="logo_image"
            src="https://logowik.com/content/uploads/images/linkedin-new4645.jpg"
            alt="logo"
          /></Link>

     <section className={styles.search_bar}>
       <button className={styles.search_bar_placeholder}>
        
          <div className={styles.search_bar_full_placeholder}>
Location
          </div>
          <span className={styles.search_only}>Expand Search</span>
       </button>

       <div className={styles.switcher_tabs_triggers}>
         <button className={styles.switcher_tabs__placeholder}>
      <span className={styles.switcher_tabs__placeholder_text}>
Jobs
      </span>

    <ArrowDropDownIcon className={styles.iconarrow} onClick={jobsdropdownclick}>
      
    </ArrowDropDownIcon>
         </button>
         <div className={styles.switcher_tab}>{ isdropdown && 
    <ul  className={styles.switcher_tab_list}>
    <li className={styles.switcher_tab_list_active}>
          
      <button className={styles.switcher_tab_button}>
      JObs
      </button>
    </li>
    <li className={styles.switcher_tab_list_active}>
      <button className={styles.switcher_tab_button}>
     <Link to='/person'> People</Link>
      </button>
    </li>
    <li className={styles.switcher_tab_list_active}>
      <button className={styles.switcher_tab_button}>
     <Link to='/learning'></Link> Learning
      </button>
    </li>
    </ul>}

{/* <button className={styles}></button> 
for the backdrop code modal closing */}
         </div>
       </div>
       </section>     
    </nav>
    </header>

    <section className={styles.filtersbar}>
    <div className={styles.base_serp_page_filters}>
    <div className={styles.guest_filters}>
    <div className={styles.filters_desktop}>
      <Form/>
      <Main/>
    </div>
    </div>
    </div>
    </section>
    </div>
    </>
  )
}

export default Jobpage