import React  from "react";

function Works () {
    return (
        <div id="works-in" className="other">
        <h2 className="extra-heading">check out other of my works</h2>
        <div className="container">
          <a href="https://kate-khaled.netlify.app" target="_blank">
            <div className="box">
              <img src="ass/kate.png" alt="" />
              <div className="box-info">
                <h3>cv</h3>
                <p>
                  mini profile that support <br />
                  the dark mode & light mode
                </p>
              </div>
            </div>
          </a>
          <a href="https://handphone-khaled.netlify.app" target="_blank">
            <div className="box">
              <img src="ass/headphone store.png" alt="" />
              <div className="box-info">
                <h3>headphone store</h3>
                <p>
                  page to sell the headphones but the page is not responesive
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
}
export default Works;
