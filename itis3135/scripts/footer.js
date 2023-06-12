document.addEventListener("DOMContentLoaded", function() {
    var footer = document.createElement("footer");
  
    footer.innerHTML = `
      <nav>
        <p>
          <a href="https://webpages.charlotte.edu/kpate209/" target="_blank">CLT Home</a> | 
          <a href="https://github.com/Kashyap76315" target="_blank">GitHub</a> | 
          <a href="https://kashyap76315.github.io/itis3135/" target="_blank">GitHub.io</a> | 
          <a href="https://github.com/Kashyap76315/Kashyap76315.github.io/tree/main/private_html/itis3135" target="_blank">Course.io</a> | 
          <a href="https://www.freecodecamp.org/kashyap76315" target="_blank">freeCodeCamp</a> | 
          <a href="https://www.codecademy.com/profiles/kashyap76315" target="_blank">Codeacademy</a> | 
          <a href="https://www.linkedin.com/in/kashyap-patel-318b791a0" target="_blank">LinkdIn</a>
        </p>
      </nav>
      <p>
        Designed by 
        <a href="patelshardware.com">Patel's Hardware</a> &copy;2023
      </p>

      <p>
        Certified in <a target="_blank" href="https://www.freecodecamp.org/certification/kashyap76315/responsive-web-design">HTML/CSS</a> 
        and <a target="_blank" href="https://www.freecodecamp.org/certification/kashyap76315/javascript-algorithms-and-data-structures">JS</a>
      </p>

      <p class="valid">
        <a href="https://validator.w3.org/check?uri=referer" target="_blank">
          <img style="border:0;width:88px;height:31px" src="images/button-valid-html5.gif" alt="Link To HTML Valodator" />
        </a>
        <a href="https://jigsaw.w3.org/css-validator/check/referer" target="_blank">
          <img style="border:0;width:88px;height:31px" src="https://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Link To CSS Validator" />
        </a>
      </p>
    `;
  
    document.body.appendChild(footer);
});  