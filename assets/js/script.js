//import scrapped from "./pricing.mjs";
console.log("That is here");

// import './calculating-costs.js';
document.addEventListener("DOMContentLoaded", function(){

    console.log("So, DOM didn't load?");
  

    let area =  Number(localStorage.getItem("area"))* 0.092903;
    let floors =  Number(localStorage.getItem("floors"));
    let choice = localStorage.getItem("choice");
    let footings = Number(localStorage.getItem("footings"));


    floors = floors || 1; 
    console.log("Floors are ", floors);
    area = floors*area;
  




  // Assumptions.
    let soil_bearing_capacity = 150 // KN/m^2
    let dead_load = 10*floors // KN/m^2
    let live_load = 3*floors  // KN/m^2

    // Assuming square footing. 


  // Foundation calculations

    let total_load = (1.2 * dead_load + 1.6 * live_load)*area;  //KN/M^2 total factored load
    let footing_area_minimum = total_load / soil_bearing_capacity;
    let footing_length = Math.sqrt(footing_area_minimum);






    console.log(footing_area_minimum);
    console.log(total_load);
    console.log(soil_bearing_capacity);




    // Minimum footing dimension. 

    let footing_dimension = [footing_length+0.1, footing_length+0.1]
    while(total_load / (footing_dimension[0]*footing_dimension[1]) > 150){
      footing_dimension[0] = footing_dimension[0]+0.1;
      footing_dimension[1] = footing_dimension[1]+0.1;
    }

    // Checking for punching shear.

    let column_dimension = [0.3, 0.3]; // Assumed values.



/////////////////// Calculating punching stress.
/*
so the inputs we have and need are

* Factored column load U
* footing_dimensions/ length.
* Concrete strength. fc 35
* effective depth d = 0.5 m
*/

// Calculating actual soil pressure.

    let soil_pressure_actual = total_load/ (footing_dimension[0]*footing_dimension[1])

// Calculating shear demand is almost same as total load. 

    let shear_demand = total_load;

// Shear Capacity v_c

      let assumed_column_depth = 1.2; //m
      let assumed_column_length = 0.3;

    // do {
    //         assumed_column_depth = assumed_column_depth+0.1;

    //   let shear_capacity = 0.25* Math.sqrt(35)*assumed_column_depth*assumed_column_length;




    //   // Calculating footing dimensions.

    //   let footing_length = Math.sqrt(footing_area); // Square footing assumed.

    // }while(shear_capacity<shear_demand);

    console.log("Floors are ", floors)

        console.log("DOM fully loaded and parsed");
      //  const areaSqFt = parseInt(document.getElementById("area").value);
       // let floors = parseInt(document.getElementById("totalFloors").value);
        // let choice = document.querySelector('input[name="userChoice"]:checked');
  
   

        console.log('Choice is ', choice)


        
    // industory prices 
    let cement_ind = 1265; //pkr
    let brick_ind = 13.5; // pkr per brick
    let iron_ind = 255000; //    pkr per ton
    let sand_ind = 44 // pkr per sqft
    let crush_ind = 34 // pkr per ton





    const cement_ratio = [1, 1.5, 3];
  // Calculation method
    const sand_PerSqFt = 0.45;       // 
    const bricksPerSqFt = 8;         // bricks per square foot
    const cementBagsPerSqFt = 0.05;  // cement bags per square foot
    const sandCftPerSqFt = 0.03;     // cubic feet of sand per square foot
    const crushCftPerSqFt = 0.02;    // cubic feet of crush per square foot
    const plumbingCostPerSqFt = 150; // PKR per square foot (example)
    const labourPerSqft = 140;
    const ratios_sum = 5.5;
//////////////////////////foundation especially.


    const cement_density = 1440; // kg/m^3
    const cement_per_m3 =300;

    const footing_area = footing_dimension[0]*footing_dimension[1];
    const footing_volume = footing_area*assumed_column_depth*footings;


    // Calculating no of bricks. 
    
    const foundation_bricks = Math.ceil(footing_volume/0.002);


    const sand_in_foundation = ((cement_ratio[1]/ratios_sum)*footing_volume*1600).toFixed(2);
    const aggrigate_in_foundation = ((cement_ratio[2]/ratios_sum)*footing_volume*1450).toFixed(2);


    const cement_used_in_foundation = Math.ceil((footing_volume*cement_per_m3)/50); //bags
    

    // Calculating qunatities (bricks, cementbags, sand costs, crushcosts, plumbingcosts, bbrick)
    const bricks_quantity = Math.round(area * bricksPerSqFt);
    const cement_quantity = (area * cementBagsPerSqFt).toFixed(2);

    const sand_quantity = (area * sandCftPerSqFt).toFixed(2);
    const crush_quantity = (area * crushCftPerSqFt).toFixed(2);
    
    
    const plumbing_costs = (area * plumbingCostPerSqFt).toFixed(2);
    const labour_costs = (area * labourPerSqft).toFixed(2);


    console.log(footing_volume);
    console.log(cement_used_in_foundation);



/**
 * Volume of foundation masonry
Given: 53 m³
Volume of one brick (with mortar)
Standard brick size: 19 × 9 × 9 cm
With mortar allowance: 20 × 10 × 10 cm = 0.002 m³ per brick
Bricks=530.002≈26500
Add wastage allowance
Typically 5–10% extra for breakage and cutting. 27,000–29,000 bricks
 */
// let foundation_bricks = footing_volume/0.002;
// footing_volume += footing_volume*0.1;

    
    document.getElementById("cement_in_foundation").innerText = cement_used_in_foundation + " bags";
    document.getElementById("sand_used").innerText =  sand_in_foundation + " m3";
    document.getElementById("aggrigate_used").innerText = aggrigate_in_foundation + " m3";
    
    document.getElementById("bricks_in_foundation").innerText =  foundation_bricks + " units";
    

    document.getElementById("cement_price_shown").innerText = cement_ind+ " PKR";
    document.getElementById("labour_used").innerTEXT = labour_costs;

    }
    )

    window.items = ["window", crushCosts];
    console.log("Script loaded sucessfully!");