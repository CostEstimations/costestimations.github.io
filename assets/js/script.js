//import scrapped from "./pricing.mjs";
console.log("That is here");

// import './calculating-costs.js';
document.addEventListener("DOMContentLoaded", function(){

    console.log("So, DOM didn't load?");
  

    let area =  Number(localStorage.getItem("area"));
    let floors =  Number(localStorage.getItem("floors"));
    let choice = localStorage.getItem("choice");
    

    console.log("Floors are ", floors)

        console.log("DOM fully loaded and parsed");
      //  const areaSqFt = parseInt(document.getElementById("area").value);
       // let floors = parseInt(document.getElementById("totalFloors").value);
        // let choice = document.querySelector('input[name="userChoice"]:checked');
  
        floors = floors || 1; 
        console.log("Floors are ", floors);
        area = floors*area;
     

        console.log('Choice is ', choice)


    // industory prices 
    let cement_ind = 1265; //pkr
    let brick_ind = 13.5; // pkr per brick
    let iron_ind = 255000; //    pkr per ton
    let sand_ind = 44 // pkr per sqft
    let crush_ind = 34 // pkr per ton





  // Calculation method
    const sand_PerSqFt = 0.45;       // 
    const bricksPerSqFt = 8;         // bricks per square foot
    const cementBagsPerSqFt = 0.05;  // cement bags per square foot
    const sandCftPerSqFt = 0.03;     // cubic feet of sand per square foot
    const crushCftPerSqFt = 0.02;    // cubic feet of crush per square foot
    const plumbingCostPerSqFt = 150; // PKR per square foot (example)
    const labourPerSqft = 140;

    // Calculating qunatities (bricks, cementbags, sand costs, crushcosts, plumbingcosts, bbrick)
    const bricks_quantity = Math.round(area * bricksPerSqFt);
    const cement_quantity = (area * cementBagsPerSqFt).toFixed(2);

    const sand_quantity = (area * sandCftPerSqFt).toFixed(2);
    const crush_quantity = (area * crushCftPerSqFt).toFixed(2);
    
    
    const plumbing_costs = (area * plumbingCostPerSqFt).toFixed(2);
    const labour_costs = (area * labourPerSqft).toFixed(2);







    document.getElementById("cement_used").innerText = "Cement bags : " + cement_quantity;
    document.getElementById("sand_used").innerText = "Sand cft : "+ sand_quantity;
    document.getElementById("crush_used").innerText = "No of bricks : "+ bricks_quantity;
    document.getElementById("bricks_shown").innerText =  bricks + " PKR";
    document.getElementById("labour_used").innerText =  labour_costs+ " PKR";
    

    document.getElementById("sand_price_shown").innerText = sand_ind +" PKR";
    document.getElementById("cement_price_shown").innerText = cement_ind+ " PKR";
    document.getElementById("labour_used").innerTEXT = labour_costs;

    }
       
    )

    window.items = ["window", crushCosts];
    console.log("Script loaded sucessfully!");