import React from "react";
import "./footer.scss";
function Footer(){
    return(
        <footer>
        <p class="footer"><i class="icon fa-solid fa-copyright fa-xl"></i> 2023 Nikhil Verma. All rights reserved.</p>
        <div class="footer">
          <a href="https://github.com/nikhilverma17" target="_blank"><i
            class="icon1 fa-brands fa-github  fa-2xl"></i></a>
          <a href="mailto:iamvermanikhil@gmail.com" target="_blank"><i
            class="icon1 fa-solid fa-envelope fa-2xl"></i></a>
          <a href="https://www.linkedin.com/in/nihkil-verma-465848139/" target="_blank"><i
            class="icon1 fa-brands fa-linkedin fa-2xl"></i></a>
          <a href="https://twitter.com/thenikhil_verma" target="_blank"><i
            class="icon1 fa-brands fa-twitter fa-2xl"></i></a>
          <a href="https://www.instagram.com/thevermanikhil/" target="_blank"><i
            class="icon1 fa-brands fa-instagram fa-2xl"></i></a>
        </div>
      </footer>
    );
}
export default Footer;