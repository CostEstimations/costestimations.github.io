//import scrapped from "./pricing.mjs";
console.log("That is here");

// import './calculating-costs.js';
document.addEventListener("DOMContentLoaded", function(){



    console.log("So, DOM didn't load?");
  
    let area =  Number(localStorage.getItem("area"));
    let covered_area =  Number(localStorage.getItem("coveredArea"));
    let choice = localStorage.getItem("choice");
    let trenchLength = Number(localStorage.getItem("trenchLength"));


    ////////////////////////// Exacavation
    //////////lean concrete.
    let excavation_vol = trenchLength*0.75;

    let excavation_cement = Math.ceil(excavation_vol* 0.095);
    let excavation_sand = Math.ceil(excavation_vol* 0.474);
    let excavation_coarse = Math.ceil(excavation_vol*0.948);

    document.getElementById("excavation_cement").innerText = "Cement used " + excavation_cement+ " bags";
    document.getElementById("excavation_sand").innerText = "Sand used " + excavation_sand+ " CFT";
    document.getElementById("excavation_coarse").innerText = "Coarse used " + excavation_coarse+ " CFT";
    

/////////Brickwear.

    let brickwear_vol = trenchLength*3.75;
    
    let brickwear_bricks = Math.ceil(brickwear_vol * 13.5);
    let brickwear_cement = brickwear_vol * 0.053;
    let brickwear_sand   = Math.ceil(brickwear_vol*0.396);

//////////////////
    document.getElementById("brickwear_cement").innerText = "Cement used " + brickwear_cement+ " bags";
    document.getElementById("brickwear_sand").innerText = "Sand used " + brickwear_sand + " CFT";
    document.getElementById("brickwear_bricks").innerText = "Bricks used " + brickwear_bricks+ " units";
   



//// Framework// RCC

    let formwork_vol = Math.ceil(trenchLength*0.75);
    let formwork_steel = Math.ceil(formwork_vol*2.25);
    let formwork_cement = Math.ceil(formwork_vol*0.176);
    let formwork_sand = Math.ceil(formwork_vol*0.44);
    let formwork_coarse = Math.ceil(formwork_vol* 0.88);

////////////////////////////
    document.getElementById("formwork_cement").innerText = "Cement used " + formwork_cement + " bags";
    document.getElementById("formwork_sand").innerText = "Sand used " + formwork_sand + " CFT";
    document.getElementById("formwork_coarse").innerText = "Coarse used " + formwork_coarse + " CFT";
    document.getElementById("formwork_bricks").innerText = "Bricks used " + brickwear_bricks+ " units";
    document.getElementById("formwork_steel").innerText = "Bricks used " + formwork_steel+ " kg";
   



/////////////////// Anti-Termite-Treatment.


    let spray_area = (trenchLength* 5.1)/250;

///////////////// Damp Proof Course

    let cement_DPC = trenchLength* 0.0165;
    let sand_DPC = trenchLength* 0.0413;
    let coarse_DPC = trenchLength* 0.0825;
    let bitmen_DPC = (trenchLength* 0.75)/500;
    let polythene_sheet = trenchLength* 0.85;
//////////////////////////
     document.getElementById("spray_area").innerText = "Polythene sheet " + polythene_sheet + " Ft^2";
    document.getElementById("cement_DPC").innerText = "Cement used " + cement_DPC + " bags";
    document.getElementById("sand_DPC").innerText = "Sand used " + formwork_sand + " CFT";
    document.getElementById("coarse_DPC").innerText = "Coarse used " + formwork_coarse + " CFT";
    document.getElementById("bitmen_DPC").innerText = "Bitmen used " + bitmen_DPC + " Drums";
    document.getElementById("polythene_sheet").innerText = "Polythene sheet " + polythene_sheet + " SFT";






/////////////Backfilling 

  let backfill_vol = trenchLength* 8.88/150;
///////////
  
   document.getElementById("backfill_vol").innerText = "Backfill Volume is " +backfill_vol +" Trolley";







  let total_cement_foundation = Math.ceil(excavation_cement + brickwear_cement + formwork_cement + cement_DPC);
  let total_sand_foundation = excavation_sand + brickwear_sand + formwork_sand + sand_DPC;
  let total_coarse_foundation = Math.ceil(excavation_coarse + formwork_coarse + coarse_DPC);





    document.getElementById("cement_in_foundation").innerText = total_cement_foundation + " bags";
    document.getElementById("sand_used").innerText =  total_sand_foundation + " CFT";
    document.getElementById("aggrigate_used").innerText = total_coarse_foundation + " CFT";
    
    document.getElementById("bricks_in_foundation").innerText =  brickwear_bricks + " units";
    


//////////////////////////////Super structure. 

///////RCC columns.

    let no_of_columns = Math.ceil(trenchLength/18.5);

    let column_volume = Math.ceil(no_of_columns*6.1875);
    let column_steel  = Math.ceil(column_volume*4.2);
    let column_cement = Math.ceil(column_volume*0.176);
    let column_sand   = Math.ceil(column_volume*0.44);
    let column_crush = Math.ceil(column_volume*0.88);
/////////////////////

    document.getElementById("column_steel").innerText = "No of columns are "+ no_of_columns + " columns";
    document.getElementById("column_cement").innerText = "Cement used "+ column_cement +" bags";
    document.getElementById("column_sand").innerText = "Sand used "+ column_sand+ " CFT";
    document.getElementById("column_crush").innerText = "Crush used "+ column_crush + " CFT" ;
    




////////////Brick Masonnary.

  let brick_masonnary_volume = trenchLength*3.71+ trenchLength*2.26;
  let brick_masonnary_bricks =  brick_masonnary_volume* 13.5;
  let brick_masonnary_cement = brick_masonnary_volume* 0.063;
  let brick_masonnary_sand   = brick_masonnary_volume* 0.396;
/////////////////////////

 document.getElementById("brick_masonnary_bricks").innerText = brick_masonnary_bricks +" units";
 document.getElementById("brick_masonnary_cement").innerText = brick_masonnary_cement +" bags";
 document.getElementById("brick_masonnary_sand").innerText = brick_masonnary_sand +" CFT";

  
////////////////////Lintels.


  let total_openings = trenchLength*0.03;
  let lintel_volume = total_openings* 1.875;
  let lintel_steel =  lintel_volume* 2.5;
  let lintel_cement = lintel_volume* 0.176;
  let lintel_sand = lintel_volume* 0.44;
  let lintel_crush = lintel_volume* 0.88;
//////////////////

document.getElementById("total_openings").innerText = "No of openings "+ total_openings;
document.getElementById("lintel_cement").innerText = lintel_cement + " bags";
document.getElementById("lintel_sand").innerText = lintel_sand+ " CFT";
document.getElementById("lintel_crush").innerText = lintel_crush +" CFT";
document.getElementById("lintel_steel").innerText = lintel_steel +  " Kg";

//////////////////// Roof Lenter.

let roof_volume = covered_area * 0.582;
let roof_steel  = roof_volume* 3.6;
let roof_cement = roof_volume * 0.176;
let roof_sand   =  roof_volume * 0.44;
let roof_crush  = roof_volume* 0.88;
////////////////////////
document.getElementById("roof_cement").innerText = roof_cement + " bags";
document.getElementById("roof_sand").innerText = roof_sand+ " CFT";
document.getElementById("roof_crush").innerText = roof_crush +" CFT";
document.getElementById("roof_steel").innerText = roof_steel +  " Kg";
console.log(document.getElementById("roof_cement"));





//////////////////Plaster cover.


let plaster_cover_area_internal = Math.ceil(trenchLength*18.7);
let plaster_cover_area_external = Math.ceil(Math.sqrt(area)*44);
let plaster_cement = Math.ceil(plaster_cover_area_internal* 0.0074+plaster_cover_area_external* 0.0142 + covered_area* 0.0055);

let plaster_sand = plaster_cover_area_internal* 0.037+ plaster_cover_area_external* 0.056+ covered_area*0.027;

//////////////////////////////

document.getElementById("plaster_cover_area_internal").innerText = "Lintel external covered area is "+plaster_cover_area_internal +" Ft^2";
document.getElementById("plaster_cover_area_external").innerText = "Lintel external covered area is"+  plaster_cover_area_external +" Ft^2";
document.getElementById("plaster_cement").innerText = "Cement used "+ plaster_cement +" bags";
document.getElementById("plaster_sand").innerText = "Sand used "+plaster_sand +" CFT"; 
////////////Boundary wall.
//////////////Needs to be checked. again.
let boundary_length = Math.sqrt(area*4)*1.18;
let boundary_vol = (boundary_length -12)*2.625;
let boundary_bricks = Math.ceil(boundary_vol * 13.5);
let boundary_cement = (boundary_vol * 0.053)+4;  //bags x price
let boundary_sand = boundary_vol* 0.396+10;
/////////////////////////

document.getElementById("boundary_cement").innerText = "Cement used is "+boundary_cement+" bags";
document.getElementById("boundary_sand").innerText = "Sand used is "+boundary_sand+" CFT";
document.getElementById("boundary_bricks").innerText = "Bricks used are "+boundary_bricks+" Units";

///////////////////////Totals.

let super_cement_total = Math.ceil(column_cement+ brick_masonnary_cement + lintel_cement + roof_cement + plaster_cement+ boundary_cement);
let super_sand_total   = Math.ceil(column_sand  + brick_masonnary_sand + lintel_sand +roof_sand + plaster_sand + boundary_sand);
let super_crush_total  = Math.ceil(column_crush  + lintel_crush+ roof_crush);
let super_bricks_total = Math.ceil(brick_masonnary_bricks + boundary_bricks);
let super_steel_total = Math.ceil(column_steel+ lintel_steel+ roof_steel); 


// document.getElementById("super_cement_total").innerText = super_cement_total + " bags";
document.getElementById("super_sand_total").innerText = super_sand_total + " CFT";
document.getElementById("super_crush_total").innerText = super_crush_total + " CFT"
document.getElementById("super_bricks_total").innerText = super_bricks_total + " units";
document.getElementById("super_steel_total").innerText = super_steel_total + " Kg";




///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////

///////////////// Finishing.

/// Hot and cold water.
 let ac_drainage = Math.ceil(covered_area/15);
 let h_and_c_water_25mm = Math.ceil(covered_area/10);
 let h_and_c_water_32mm = Math.ceil(covered_area/25);
 let h_and_c_water_40mm = Math.ceil(covered_area/100);
 let h_and_c_water_50mm = Math.ceil(covered_area/77);
/////////////////

 document.getElementById('ac_drainage').innerText = "AC drainage pipe length is "+ac_drainage;
 document.getElementById('h_and_c_water_25mm').innerText = "25mm Hot and cold water pipe length is "+ h_and_c_water_25mm;
 document.getElementById('h_and_c_water_32mm').innerText = "32mm Hot and cold water pipe length is "+ h_and_c_water_32mm;
 document.getElementById('h_and_c_water_40mm').innerText = "40mm Hot and cold water pipe length is "+ h_and_c_water_40mm;
 document.getElementById('h_and_c_water_50mm').innerText = "50mm Hot and cold water pipe length is "+ h_and_c_water_50mm;



 
 // Drainage system.
 let drainage_2mm = covered_area/25;
 let drainage_3mm = covered_area/25;
 let drainage_4mm = covered_area/17;
 //////////
 
 document.getElementById("drainage_2mm").innerText = "Length of 2mm drainage pip is "+drainage_2mm;
  document.getElementById("drainage_2mm").innerText = "Length of 3mm drainage pip is "+drainage_3mm;
   document.getElementById("drainage_2mm").innerText = "Length of 3mm drainage pip is "+drainage_4mm;

 /// Gass pipe.
 let gass_pipe_3_by_4 = covered_area/14

/// UPVC pipe.
 let upvc_6in = covered_area/40;


/////////////////////////
///////////////////////// Electric work.

// Conduction accessories.
let electric_pvc_3_by_4dia = covered_area/2;
let electric_pvc_1dia = covered_area/7;
let electric_pvc_3_by_2dia = covered_area/56;
let electric_pvc_2dia = covered_area/50;
let ceiling_fan_hooks = Math.ceil(covered_area/100);


// Light fans and chandeliers
let boundary_wall_lights = covered_area/500;
let porch_lights         = covered_area/250;
let bedroom_lights       = covered_area/84;
let bathroom_lights      = covered_area/125;
let open_area_lights     = covered_area/100; 
let kitchen_lights       = covered_area/250;
let stair_case_lights    = covered_area/167;
let drawing_room_lights  = covered_area/250;
let living_area_lights   = covered_area/250;
let ceiling_fan          = covered_area/167;
let exhaust_fan          = covered_area/200;


///////////
////////// Switches and Back Boxes.
//////////

 let power_sockets = covered_area/100;
 let fan_dimmer    = covered_area/167;
 let universal_switch_socket = covered_area/50;
 let telephone_sockets       = covered_area/500;
 let distribution_board      = 1;
 let tv_sockets              = covered_area/250;
 let switch_board            = covered_area/50;



////////////////
///////////// Wires and Cases.
///////////////

 let conducting_wire_1_5mm = covered_area/100;   // 1.5mm Sq. (3/.029) PVC insulated Cu.conductor wire (Light point wiring)
 let conducting_wire_2_5mm = covered_area/100;
 let conducting_wire_4mm = covered_area/200;
 let conducting_wire_16mm = covered_area/15;

 let cat_5_telephone = covered_area/40;
 let tv_coaxing_cable = covered_area/14;
 


/////////////
/////////// Finishing.
////////////

 let staircase_and_terrace = covered_area/34;
 let main_gate             = 1;


 ///////// Paint and ceiling work.
 /////////

 let false_ceiling = covered_area/4;
 let paint         = 0.024;
  
 /// Tile work.
 
 let floor_tile = covered_area/0.5;
 let floor_skirting = covered_area/1.333;
 let ceramic_tiles_on_walls = covered_area/2.65;


 ///// Let wardrobes and Cabinets.
 let wardrobes = covered_area/333.33;
 let kitchen_cabinets = 1;
 

 ///// Windows.

 let aluminium_room_windows = covered_area/200;
 let aluminium_bathroom_windows = covered_area/250;







    }
    )
    