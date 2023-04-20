import Slideshow from "../components/Slideshow"
import '../styles/home.css'
import {
    MDBBtn 
  } from 'mdb-react-ui-kit';
import { NavLink
 } from "react-router-dom";
export default function Home() {
    return (
        <div>
            <Slideshow />
            <div className="about-us">
                <h1>Who Are We?</h1>
                <p>WellnessPlus supports regional food banks in order to better serve all Americans in need of food assistance, by providing locals with options for both food donations and volunteer work to assist their neighbors in need. </p>
                <NavLink to="/takeaction">
                <MDBBtn rounded className='text-dark' color='light'> Take Action </MDBBtn>
                </NavLink>
            <div>
                
            </div>
            </div>
        </div>
    )
}