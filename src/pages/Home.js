import Slideshow from "../components/Slideshow";
import '../styles/home.css';
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
                    <MDBBtn color='light'>Take Action</MDBBtn>
               </NavLink>
            </div>


            <div className="food-insecurity">
                <div className="info">
                <h1>WHAT IS FOOD INSECURITY?</h1>
                <p>According to a federal standard, food security refers to a household's capacity to supply adequate food for each member to have an active, healthy life. One method of assessing the danger of hunger is food insecurity.</p>
                </div>

                
                <div className="info">
                <h1>IMPROVING HEALTH WITH ACCESS TO FOOD</h1>
                <p>Having access to healthy foods is essential for maintaining a healthy lifestyle. Without access to healthy foods, a nutritious diet, and good health are unattainable. Nutritious eating and physical activity can provide individuals with proper nutrition and energy, the maintenance of optimal weight, and a lower risk of disease—including high blood pressure, cancer, and type-2 diabetes.</p>
                <p></p>
                </div>
            </div>


            <div className="food-insecurity-effects">
                <div className="effects">
                <h1>Food Insecurity Effects on Children</h1>
                <p>Children who experience food insecurity or whose families experience it are more likely to need hospitalization and are more prone to develop chronic illnesses like anemia and asthma. They also frequently experience oral health issues.</p>
                </div>

                
                <div className="effects">
                <h1>Food Insecurity Leads to Hunger</h1>
                <p>Food insecurity can also lead to hunger. Every year, hunger costs billions of dollars, with the US spending around $178.9 billion of that total. Because of this, more money is spent by the government on national food security rather than infrastructure, healthcare, and educational initiatives.</p>
                <p></p>
                </div>


                <div className="effects">
                <h1>A Rise in Health-related Costs</h1>
                <p>The chance of getting chronic diseases like heart disorders increases with the level of food insecurity. As a result, the healthcare system is under stress. According to a research, households with food insecurity spent $6,100 on medical care annually compared to $4,200 for households with food security, a 45% increase in costs.</p>
                <p></p>
                </div>
            </div>

            <div className="video">
            <iframe src="https://www.youtube.com/embed/SpsXHTiRzvA" title="What is food insecurity and why is it a problem?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    )
}