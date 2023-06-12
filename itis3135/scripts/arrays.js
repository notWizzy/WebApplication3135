employees = ["Kash", "Tony", "Bruce", "Thanos", "Goku"];
salary = [34000, 98000, 75000, 150000, 66000];

function addSalary()
{
    let name = document.getElementById("name").value;
    let total = document.getElementById("salary").value;
  
    if (name == "")
    {
      alert("Please enter a name");
    } else if (total == "")
    {
      alert("Please enter salary");
    } else {
      employees.push(name);
      salary.push(total);
      alert("Information has been added successfully!");
  
      // add new option to the select element
      let select = document.getElementById("myList");
      let option = document.createElement("option");
      option.text = name;
      select.add(option);
    }
}

function displayResults()
{
    var total = 0;
    for (var i = 0; i < salary.length; i++)
    {
        total += salary[i];
    }
    var avg = total / salary.length;

    highestSalary = 0;
    salary.forEach((element) => 
    {
        if (highestSalary < element) 
        {
          highestSalary = element;
        }
    });

      document.getElementById("results").innerHTML = "<h2>Average Salary: </h2>" + avg + "<h2>Highest Salary: </h2>" + highestSalary;
}

function displaySalary()
{
    if(document.getElementById("myList").value == "All Employees")
    {
        var salaryResults = "<tr><td colspan='2'></td></tr><tr><td><b>Employee</b></td><td><b>Salary</b></td></tr>";

        for (var i = 0; i < employees.length; i++)
        {
            salaryResults = salaryResults + "<tr><td>" + employees[i] + "</td><td> $" + salary[i] + "</td></tr>"
        }
        document.getElementById("results_table").innerHTML = salaryResults;
    }
    if(document.getElementById("myList").value == "Select Employee Name:")
    {
        return;
    }
    else
    {
        var selectedName = document.getElementById("myList").value;
        var salaryResults = "<tr><td colspan='2'></td></tr><tr><td><b>Employee</b></td><td><b>Salary</b></td></tr>";
  
        for (var i = 0; i < employees.length; i++)
        {
            if (employees[i] == selectedName)
            {
            salaryResults = salaryResults + "<tr><td>" + employees[i] + "</td><td> $" + salary[i] + "</td></tr>";
            }
        }
  
        document.getElementById("results_table").innerHTML = salaryResults;
    }
    
}