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






    const sand_PerSqFt = 0.45;       // 
    const bricksPerSqFt = 8;         // bricks per square foot
    const cementBagsPerSqFt = 0.05;  // cement bags per square foot
    const sandCftPerSqFt = 0.03;     // cubic feet of sand per square foot
    const crushCftPerSqFt = 0.02;    // cubic feet of crush per square foot
    const plumbingCostPerSqFt = 150; // PKR per square foot (example)
    const labourPerSqft = 140;

    // Calculations
    const bricks = Math.round(area * bricksPerSqFt);
    const cementBags = (area * cementBagsPerSqFt).toFixed(2);

    const sandCft = (area * sandCftPerSqFt).toFixed(2);
    const crushCft = (area * crushCftPerSqFt).toFixed(2);
    const plumbingCosts = (area * plumbingCostPerSqFt).toFixed(2);
    const labourCosts = (area * labourPerSqft).toFixed(2);
    document.getElementById("cement_used").innerText = "Cement bags : " + cementBags;
    document.getElementById("sand_used").innerText = "Sand cft : "+ sandCft;
    console.log(document.getElementById("sand_used").innerText);
    document.getElementById("crush_used").innerText = "Crush cft : "+ crushCft;
    document.getElementById("bricks_shown").innerText =  bricks + " PKR";
    document.getElementById("labour_used").innerText =  labourCosts+ " PKR"
    
    document.getElementById("sand_price_shown").innerText = sand_ind +" PKR";
    document.getElementById("cement_price_shown").innerText = cement_ind+ " PKR";
    document.getElementById("labour_used").innerTEXT = labourCosts;

    if (choice == 'industory'){

    
    }


            console.log(cementBags);
            console.log(sandCft);
            console.log(crushCft);
            console.log(plumbingCosts);  

}
       
    )

    window.items = ["window", crushCft];
    console.log("Script loaded sucessfully!");