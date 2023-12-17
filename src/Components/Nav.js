import React from 'react'

function Nav() {
  return (
   
    <div className='navbar'>
        <h3>
            <span>OpenMovie</span>
        </h3>
        <div className="menu-icon">
            <a href='Home'>Home</a>
            <a href='Movie'>Movies</a>
            <a href='TvShows'>TvShows</a>
            <a href='Top10'>Top10</a>
            <a href='Cinema'>Cinema</a>
        </div>
        <div className="loginlogo">
          <h1>LoGin</h1>
          
        </div>
    </div>
  )
}

export default Nav
