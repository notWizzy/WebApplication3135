document.addEventListener("DOMContentLoaded", function() {
    const header = document.createElement("header");
    header.innerHTML = `
      <h1>
        ITIS3135 | Kashyap Patel
      </h1>
      <nav>
        <a href="index.html">Home</a> |
        <a href="contract.html">Contract</a> |
        <a href="introduction.html">Introduction</a> |
        <a href="tables.html">HTML Tables</a> |
        <a href="forms.html">HTML Forms</a> |
        <a href="website_evaluations.html">Website Evaluation</a> |
        <a href="first-scripts.html">First Script</a> |
        <a href="calculator_try.html">Calculator Try</a> |
        <a href="calculator_fcc.html">Calculator FCC</a> |
        <a href="polygons.html">Polygons</a> |
        <a href="arrays.html">Arrays</a> |
        <a href="slideshow.html">Slideshow</a> |
        <a href="project1.html">Project Design</a> |
        <a href="review1.html">Peer Review 1</a> |
        <a href="review2.html">Peer Review 2</a>
      </nav>
      <nav style="padding: 2%;">
      <a href="stuff/ KRAPPYCRAPPYWE.htm">Crappy Website</a> |
      <a href="accessibility/Patel-Activity_Accessibility.html">Accessibility</a> |
      <a href="hobby/index.html">Hobby</a> |
      <a href="patel-activity11/Patel-Activity11.html">Accordion Widget</a> |
      <a href="patel-activity12/Patel-Activity12.html">bxSlider Plugin</a> |
      <a href="patel-activity13/Patel-Activity13.html">XML to JSON</a> |
      <a href="patel-activity14/Patel-Activity14.html">Load Speaker Files</a> |
      <a href="patel-activity15/Patel-Activity15.html">Use Expanded JSON File</a> |
      <a href="patel-activity16/Patel-Activity16.html">Flickr Photo Gallery</a> |
      <a href="client_project/index.html">Client Project</a>
      </nav>
    `;
    document.body.insertBefore(header, document.body.firstChild);
  });  