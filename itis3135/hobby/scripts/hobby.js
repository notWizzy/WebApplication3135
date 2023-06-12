function hideAll()
{
    document.getElementById('home').style.display = "none";
    document.getElementById('aboutMe').style.display = "none";
    document.getElementById('schedule').style.display = "none";
    document.getElementById('where').style.display = "none";
    document.getElementById('how').style.display = "none";
    document.getElementById('why').style.display = "none";
}

function showElement(id)
{
    let element = document.getElementById(id);
    element.style.display = "block";
}

function setVisible(id)
{
    hideAll();
    showElement(id);
}
