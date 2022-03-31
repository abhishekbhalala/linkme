import React from 'react'
import { Link } from 'react-router-dom'
import ff from './footer.module.css'
const Footer = () => {
  return (
    <>
    <section className={ff.sectiondata}>
    <div className={ff.footerdata}>
     <img className={ff.img}
      src='https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png'>
    </img>
    <div className={ff.imgspc}>
    <div className={ff.footer_heading}>
    <h3>General</h3>
    <ul>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Signup</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Help Center</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>About</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Press</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Blog</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Carrers</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Devlopers</Link>
        </li>
    </ul>
    </div>

    <div className={ff.footer_heading}>
    <h3>Browse Linkedin</h3>
    <ul>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Learning</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Salary</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Jobs</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Mobile</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Services</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Products</Link>
        </li>
    </ul>
    </div>

    <div className={ff.footer_heading}>
    <h3>Business Solutions</h3>
    <ul>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Learning</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Talent</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Marketing</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Sales</Link>
        </li>
    </ul>
    </div>

    <div className={ff.footer_heading}>
    <h3>Directerios</h3>
    <ul>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Members</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Jobs</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Companies</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Salaries</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Featured</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Learning</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Posts</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Articles</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Schools</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>News</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>NewsLetters</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Services</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Interview Prep</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Products</Link>
        </li>
        <li className={ff.footer_content}>
            <Link to='/join' className={ff.heading_content}>Content Topics</Link>
        </li>
    </ul>
    </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Footer