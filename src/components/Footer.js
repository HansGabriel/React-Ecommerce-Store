import React from 'react'

export default function Footer() {
    return (
<div className = "testing">
<footer className="section footer-classic context-dark bg-image">
        <div className="container">
          <div className="row row-30">
            <div className="col-md-6 col-xl-6">
              <div className="pr-xl-4"><a className="brand" href="index.html"><img className="brand-logo-light" src="images/agency/logo-inverse-140x37.png" alt="" width="140" height="37" srcset="images/agency/logo-retina-inverse-280x74.png 2x" /></a>
                <p>Please Donate $1 To Us Using The Money Button Below Via Bitcoin Satoshi Vision.</p>
              </div>
              <div className="money-button"
              data-to="10906"
              data-amount="1"
              data-currency="USD"
              data-label=""
              data-client-identifier="7cb7c167586376875468659e360b1b39"
              data-button-id="1572877409869"
              data-button-data="{}"
              data-type="tip"
              ></div>
            </div>
            <div className="col-md-6 col-xl-6">
              <h5>Contacts</h5>
              <dl className="contact-list">
                <dt>Address:</dt>
                <dd>Magsaysay Village, Lapaz, Iloilo City, Iloilo, Philippines</dd>
              </dl>
              <dl className="contact-list">
                <dt>email:</dt>
                <dd><a href="mailto:#">hans@yahoo.com.com</a></dd>
              </dl>
              <dl className="contact-list">
                <dt>phones:</dt>
                <dd><a href="tel:#">http://tppiloilo.org</a> <span>or</span> <a href="tel:#">http://tppiloilo.org</a>
                </dd>
              </dl>
            </div>
            {/* <div className="col-md-4 col-xl-3">
              <h5>Links</h5>
              <ul className="nav-list">
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div> */}
          </div>
        </div>
        {/* <div className="row no-gutters social-container">
          <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
          <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-instagram"></span><span>instagram</span></a></div>
          <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-twitter"></span><span>twitter</span></a></div>
          <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-youtube-play"></span><span>google</span></a></div>
        </div> */}
      </footer>
      </div>
    )
}
