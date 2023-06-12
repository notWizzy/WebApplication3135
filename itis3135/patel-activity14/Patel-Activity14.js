$(document).ready(function() {

    var url = "./json_files/toobin.json";
  
    $("aside a").on("click", function(evt) {
      evt.preventDefault();
      url = "./json_files/" + $(this).attr("title") + ".json";
      $("main").html("");
  
      $.getJSON(url)
        .done(function(data) {
          var speaker = data.speakers[0];
          var html = `
            <h1>${speaker.title}</h1>
            <h2>${speaker.month}</h2>
            <h3>${speaker.speaker}</h3>
            <img src="${speaker.image}" alt="Image of ${speaker.speaker}">
            <p>${speaker.text}</p>
          `;
          $("main").html(html);
        })
        .fail(function(xhr, status, error) {
          alert("Error: " + xhr.status + " - " + error);
          $("main").html(`<p>Error: ${xhr}</p>`);
        });
    });
}); // end ready