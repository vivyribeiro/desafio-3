import React from 'react'
import './cards-sections.css'

function CardsSectionMovies(){
    return(
        <>
            <section className="section-cards">

                    <div className="cards-movies">
                        <div className="the-help">
                            <a href="https://www.adorocinema.com/filmes/filme-176673/" className="card-link">
                                <h1 className="title">Histórias Cruzadas</h1> 
                            </a>
                        </div>
                        <div className="inception">
                            <a href="https://www.adorocinema.com/filmes/filme-143692/" className="card-link" >
                                <h1 className="title"> A Origem</h1> 
                            </a>
                        </div>
                        <div className="minority-report "> 
                            <a href="https://www.adorocinema.com/filmes/filme-34917/" className="card-link" >
                                <h1 className="title">Minority Report</h1> 
                            </a>
                        </div>
                        <div className="dear-comrade">
                            <a href="https://euamofilmesindianos.wixsite.com/filmesindianos/post/dear-comrade-2019-telugu" className="card-link">
                                <h1 className="title">Dear Comrade</h1> 
                            </a>
                        </div>
                    </div>  
            </section>
        </>
    )
}

export default CardsSectionMovies;