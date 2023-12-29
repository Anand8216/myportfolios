import React from 'react'
import IMG1 from "../../assets/icons8-html5-240.png"
import IMG2 from "../../assets/icons8-css3-240.png"
import IMG3 from "../../assets/icons8-js-240.png"
import IMG4 from "../../assets/icons8-nodejs-240.png"
import IMG5 from "../../assets/icons8-python-240.png"
import IMG6 from "../../assets/Mongodb-PNG-Image-HD.png"
import "./services.css"
const Services = () => {
    const obj=[
        {
           id:1,
           imgs:IMG1,
           title:"HTML",
        },
        {
           id:2,
           imgs:IMG2,
           title:"CSS",

        },
        {
           id:3,
           imgs:IMG3,
           title:"JS",

        },
        {
           id:4,
           imgs:IMG4,
           title:"NODE",

        },
        {
           id:5,
           imgs:IMG5,
           title:"PYTHON",

        },
        {
           id:6,
           imgs:IMG6,
           title:"MONGO DB",

        },
    ]
  return (
    <div className='main_div' id="services">
        <h2>Services</h2>
        <div className='cards_container'>
         
         {obj.map(({ id, imgs, title }) => {
                 return (
                    <div className="carde" key={id}>
                   <img src={imgs} alt="serve"/>
                   <h5>{title}</h5>
                   </div>
                   );
                })};
            
        </div>
    </div>
  )
}

export default Services


/* {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}*/