import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="about-us">
          <h3>ABOUT</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            fugiat est deleniti doloremque corrupti a ducimus! Qui vitae
            repudiandae debitis officiis. Nemo, sequi. Incidunt delectus unde
            eum distinctio laudantium excepturi.
          </p>
        </div>

        <div className="categories">
          <h3>CATEGORIES</h3>
          <ul>
            <li>
              <a href="">General</a>
            </li>
            <li>
              <a href="">Technology</a>
            </li>
            <li>
              <a href="">Finance</a>
            </li>
            <li>
              <a href="">Debate</a>
            </li>
          </ul>
        </div>

        <div className="quick-links">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Site Help</a>
            </li>
          </ul>
        </div>
      </div>

      <hr />
      <div className="copyright">
        <p className="text">Copyright @ 2023 J-D Forum</p>
      </div>
    </footer>
  );
}

export default Footer;
