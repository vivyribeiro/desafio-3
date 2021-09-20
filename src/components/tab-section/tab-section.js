import React from 'react'
import './tab-section.css'
import { portifolio } from "../data";



export default function Cards({indice}){
  console.log(portifolio.tabs[indice])
  return(


       <section className="tabs">
         <div className="cards">
            {portifolio.tabs[indice].posts.map((post)=>
              <div className="tab-list ">     
                <a target="_blank" rel="noreferrer" href={post.url}>
                  <img  src={post.img} alt="" className="background" />
                </a>
                <span className="title"> {post.title}</span>
              </div>
           )}
          </div>
       </section>
  )
}