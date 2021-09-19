import React from 'react'
import './cards-sections.css'
import { portifolio } from "../data";

function CardsSectionHobbies(){
    return(
        <>
            <section className="section-cards">

                    <div className="cards-hobbies">
                        <div className="netflix">
                            <a href="{https://netflix.com/}" className="card-link" >
                                <h1 className="title">Netflix</h1> 
                            </a>
                        </div>
                        <div className="youtube"> 
                            <a href="https://www.youtube.com/" className="card-link" >
                                <h1 className="title">Youtube</h1> 
                            </a>
                        </div>
                        <div className="spotify">
                            <a href="https://www.spotify.com/br/" className="card-link">
                                <h1 className="title">Spotify</h1> 
                            </a>
                        </div>
                        <div className="ted-talks">
                            <a href="https://www.ted.com/" className="card-link">
                                <h1 className="title">Ted Talks</h1> 
                             </a>
                        </div>
                    </div>  

            </section>
        </>
    )
}

export default CardsSectionHobbies;