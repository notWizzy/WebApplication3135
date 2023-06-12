document.addEventListener("DOMContentLoaded", function() {
    var footer = document.createElement("footer");
  
    footer.innerHTML = `
      <p>
        Designed by 
        <a href="patelshardware.com">Patel's Hardware</a> &copy;2023
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