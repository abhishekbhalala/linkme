import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './FindPerson.module.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const Peoplepage = () => {

const [isdropdown,setIsdropdown]=useState(false);
const ref=useRef();

  const peopledropdownclick=()=>{
    setIsdropdown(!isdropdown)   
    console.log('isdropdown',isdropdown)
  }
 

  useEffect(()=>{
    const backdropclick=(e)=>{
      if(isdropdown&&ref.current&&!ref.current.contains(e.target)){
        setIsdropdown(false)
      }
      console.log('backdrop',isdropdown)
    }
    document.addEventListener('click',backdropclick);
    return()=>{
      document.removeEventListener('click',backdropclick)
    }
  },[isdropdown])
 
  return (
    <>
    <div className={styles.header_base}>
  <header className={styles.headerline}>
    <nav className={styles.nav}>
      <Link to='/'>
    <img
            className="logo_image"
            src="https://logowik.com/content/uploads/images/linkedin-new4645.jpg"
            alt="logo"
          /></Link>

     <section className={styles.search_bar}>
       <button className={styles.search_bar_placeholder}>
        
          <div className={styles.search_bar_full_placeholder}>
LastName
          </div>
          <span className={styles.search_only}>Expand Search</span>
       </button>

       <div className={styles.switcher_tabs_triggers}>
         <button className={styles.switcher_tabs__placeholder}>
      <span className={styles.switcher_tabs__placeholder_text}>
People
      </span>

    <ArrowDropDownIcon className={styles.iconarrow} onClick={peopledropdownclick}/>
         </button>
         <div className={styles.switcher_tab}  ref={ref}>{ isdropdown && 
    <ul className={styles.switcher_tab_list}>
    <li className={styles.switcher_tab_list_active}>
      <button className={styles.switcher_tab_button}>
        <Link to='/job'>
      Jobs</Link>
      </button>
    </li>
    <li className={styles.switcher_tab_list_active}>
      <button className={styles.switcher_tab_button}>
      People
      </button>
    </li>
    <li className={styles.switcher_tab_list_active}>
      <button className={styles.switcher_tab_button}>
     <Link to='/learning'> Learning</Link>
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
    </div>
    </>
  )
}

export default Peoplepage