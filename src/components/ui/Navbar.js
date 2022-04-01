import React from 'react'

export const Navbar = () => {
  return (
    <header className="main-header style-one">
    
    <div className="header-top">
        <div className="auto-container">
            <div className="top-inner clearfix">
                <div className="left-column pull-left clearfix">
                    <div className="weathre-box"><i className="flaticon-sunny-day-or-sun-weather"></i><a href="index.html">25th Jan: 32 0C / 65 0F</a></div>
                    <ul className="links-box clearfix">
                        <li><a href="index.html">In my area</a></li>
                        <li><a href="index.html">Faq’s</a></li>
                        <li><a href="index.html">Government</a></li>
                    </ul>
                </div>
                <div className="right-column pull-right clearfix">
                    <ul className="info-list clearfix">
                        <li><i className="flaticon-phone-with-wire"></i><a href="tel:4488812345">+44 888 12 345</a></li>
                        <li><i className="flaticon-fast"></i><a href="index.html">Today: 09.00 to 18.45</a></li>
                    </ul>
                    <ul className="social-links clearfix">
                        <li><a href="index.html"><i className="fab fa-facebook-square"></i></a></li>
                        <li><a href="index.html"><i className="fab fa-twitter-square"></i></a></li>
                        <li><a href="index.html"><i className="fab fa-youtube-square"></i></a></li>
                        <li><a href="index.html"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

  
</header>
  )
}
