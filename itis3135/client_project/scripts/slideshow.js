$(document).ready(function()
{

    $("#ssPix a").each(function()
    {
        var swap = new Image();
        swap.src = $(this).attr("href");
    });

    $("#ssPix a").click(function(evt)
    {
        var imgLoc = $(this).attr("href");
        $("#showHere").attr("src", imgLoc);

        evt.preventDefault();
    });
    
    $("li:first-child a").focus();

});