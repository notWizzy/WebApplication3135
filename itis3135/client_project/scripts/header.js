document.addEventListener("DOMContentLoaded", function() {
    const header = document.createElement("header");
    header.innerHTML = `
      <h1 style="text-align: center;">
        The World of Cricket
      </h1>

      <nav>
        <a href="index.html">Home</a> |
        <a href="icc.html">International Cricket</a> |
        <a href="ipl.html">IPL</a> |
        <a href="history.html">History</a> |
        <a href="about.html">About Us</a>
      </nav>
    `;
    document.body.insertBefore(header, document.body.firstChild);
  });  