import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
  return (
    <div>
    <div className="body">
       <section className="page_404">
       <div className="container">
           <div className="row">
               <div className="col-sm-12">
                   <div className="col-sm-10 col-sm-offset-1 text-center">
                       <div className="four_zero_four_bg">
                           <h1 className="text-center h1">404</h1>
                       </div>
                       <div className="content_box_404">
                           <h3 className="h2 h3">Looks Like You're Lost</h3>
                           <p>The page you are looking for not available</p>
                           <NavLink to="/home" className="link">Go to Home</NavLink>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </section>
   </div>
    </div>
  )
}

export default Errorpage