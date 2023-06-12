// variables and lists
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const currDay = new Date();
let day = weekday[currDay.getDay()];
let month = months[currDay.getMonth()];
let date = currDay.getDate();
let time = ((currDay.getHours() + 11) % 12 + 1) + ":" + currDay.getMinutes();
let ampmStr = getAMPM(currDay.setHours());

// print this on h3 tag in the main element
document.write("Today is " + day + " " + month + " " + date + " and the time is " + time + ampmStr);
document.write("<br>");

// name and how one is doing
let userName = window.prompt("Enter Your Name: ");
let feeling = window.prompt("How are you feeling today?");
document.write("The Patel's Hardware welcomes you, " + userName + "!" + " We're glad you are doing " + feeling + "!");
document.write("<br>");
document.write("<br>");

// funcation for am and pm for the time
function getAMPM(x)
{
    if(x >= 12 && x < 24)
    {
        return "am";
    }
    if(!(x >= 12 && x < 24))
    {
        return "pm";
    }
}

// convert price from usd to other
function convertPriceActivate()
{
    let x = window.prompt("Enter an amount in Dollars: ");
    convertPrice(x);
}
function convertPrice(x)
{
    let usd = x;
    let cad = 1.35*x;
    let euro = 0.93*x;
    let inr = 82.77*x;
    document.write("<link rel='stylesheet' href='styles/firstscript.css'>");
    document.write("<style>h1, h2, h3{text-align: center;}</style>");
    document.write("<h1>$" + x + " in other currencies would be: </h1>");
    document.write("<h2>$" + cad + " in Canadian Dollars.</h2>");
    document.write("<h2>€" + euro + " in Euros.</h2>");
    document.write("<h2>₹" + inr + " in Indian Rupees.</h2>");
}

// general pc facts
function pcFact()
{
    document.write("<link rel='stylesheet' href='styles/firstscript.css'>");
    document.write("<style>h3{font-family:'Times New Roman', Times, serif; text-align: left;}</style>");
    document.write("<style>h2{text-align: center; font-size: 130%; font-family:'Times New Roman', Times, serif;}</style>");
    document.write("<br>");
    document.write("<h2 style='font-size: 170%;'>Building a PC can be a fun and rewarding project</h2>");
    document.write("<br>");
    document.write("<h3>Components: The basic components of a PC include a CPU (central processing unit), a motherboard, memory (RAM), storage (such as a hard drive or SSD), a power supply unit (PSU), a case, and a graphics card (optional, depending on whether you plan to use the PC for gaming or other graphics-intensive tasks).</h3>");
    document.write("<h3>Compatibility: It is important to ensure that all the components you choose are compatible with each other. For example, the CPU must be compatible with the motherboard socket, the RAM must be compatible with the motherboard's memory slots, and so on. You can usually find compatibility information on the manufacturer's website.</h3>");
    document.write("<h3>Budget: Decide on a budget for your build, and research the best components you can get within that budget. Prices can vary widely depending on the specific components you choose, so it's a good idea to shop around and compare prices.</h3>");
    document.write("<h3>Assembly: Building a PC involves assembling the various components. This requires a basic understanding of how to connect cables, screws, and other components, as well as some knowledge of how to install and configure operating systems and software.</h3>");
    document.write("<h3>Upgradability: When choosing components, consider the potential for future upgrades. For example, if you plan to use your PC for gaming, you may want to choose a graphics card with room for future upgrades. Similarly, you may want to choose a motherboard with plenty of expansion slots if you plan to add more components later on.</h3>");
}

// buy items from the store
function buyItems()
{
    document.write("<link rel='stylesheet' href='styles/firstscript.css'>");
    document.write("<style>h2{text-align: center}</style>");
    const itemList= ["screwdriver", "bolt", "nut", "motherboard", "utensil", "wire", "chain", "key", "cpu", "ram", "gpu", "graphicscard", "hinge", "latch", "washer", "screw"];
    const itemCost = [5.23, 0.99, 0.99, 512, null, 25.99, 14.99, 2.99, null, null, null, 7.99, 8.99, 18.34, 0.23];
    let item = window.prompt("We sell many items here at the hardware store. Name something you would like to buy and we will find the price for it in our store for you: ");
    document.write("<h2>Here are some items we sell with their price: </h2>");
    document.write("<br>");
    for(let i = 0; i < itemList.length; i++)
    {
        if(itemCost[i] == null)
        {
            document.write("<h3>We sell " + itemList[i] + " but we do not have it in the store at the moment.</h3>");
        }
        else
        {
            document.write("<h3>We sell " + itemList[i] + " for $" + itemCost[i] + "</h3>");
        }
    }
}

// membership costs
function memShip()
{
    document.write("<link rel='stylesheet' href='styles/firstscript.css'>");
    document.write("<style>h3{font-family:'Times New Roman', Times, serif; text-align: left;}</style>");
    document.write("<style>h2{text-align: center; font-size: 130%; font-family:'Times New Roman', Times, serif;}</style>");
    document.write("<br>");
    document.write("<h2 style='font-size: 170%;'>Cost of Membership</h2>");
    document.write("<br>");
    const monthly = 14.99;
    const yearly = 14.99 * 12;
    const familyDis = 0.20;
    const familyDisPer = familyDis*100;
    document.write("<h3>The cost of premium Membership is $" + monthly + "</h3>");
    document.write("<h3>This means that the annual price for premium Membership would be $" + yearly + "</h3>");
    document.write("<h3>If you are a family member, you are eligible for a family discount, which is: " + familyDisPer + "%</h3>");
    document.write("<h3>After the family discount has been applied, the monetly fee would be $" + (monthly*(1-familyDis)) + "</h3>");
    document.write("<h3>After the family discount has been applied, the annual fee would be $" + (yearly*(1-familyDis)) + "</h3>");
}

function achieveMent()
{
    document.write("<link rel='stylesheet' href='styles/firstscript.css'>");
    document.write("<style>h3{font-family:'Times New Roman', Times, serif; text-align: left;}</style>");
    document.write("<style>h2{text-align: center; font-size: 130%; font-family:'Times New Roman', Times, serif;}</style>");
    document.write("<br>");
    let want = window.prompt("What is it that you want to achieve?");
    document.write("<h2 style='font-size: 170%;'>You can still " + want + ". Give it some time and try as many times as you can.</h2>");
}