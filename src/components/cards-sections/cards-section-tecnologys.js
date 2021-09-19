import React from 'react'
import './cards-sections.css'

function CardsSectionTecnologys(){
    return(
        <>
            <section className="section-cards">

                    <div className="cards-tecnologys">
                        <div className="html-css">
                            <a href="https://www.w3schools.com/html/default.asp" className="card-link" >
                                <h1 className="title">HTML & CSS</h1> 
                            </a>
                        </div>
                        <div className="javascript"> 
                            <a href="https://www.w3schools.com/js/default.asp" className="card-link" >
                                <h1 className="title">Javascript</h1> 
                            </a>
                        </div>
                        <div className="reactjs">
                            <a href="https://pt-br.reactjs.org/tutorial/tutorial.html" className="card-link">
                                <h1 className="title">ReactJS</h1> 
                            </a>
                        </div>
                        <div className="nodejs">
                            <a href="https://nodejs.dev/learn/introduction-to-nodejs" className="card-link">
                                <h1 className="title">NodeJS</h1> 
                             </a>
                        </div>
                    </div>  

            </section>
        </>
    )
}

export default CardsSectionTecnologys;