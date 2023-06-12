$(document).ready(function() {
    $.getJSON("facultyList.json", function(data) {
      let html = ""; // initialize later
  
      $.each(data, function() {
        $.each(this, function(key, value) {

          html += `
            <img src="${value.image}">
            <h2>${value.full_name}</h2>
            <h3>${value.department}</h3>
            <p>${value.bio}</p>
          `;
        });
      });
  
      // append the final HTML string
      $("#faculty").append(html);
    });
});  