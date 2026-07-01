
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
    
console.log(excavation_cement)
/////////Brickwear.

    let brickwear_vol = trenchLength*3.75;
    
    let brickwear_bricks = Math.ceil(brickwear_vol * 13.5);
    let brickwear_cement = Math.ceil(brickwear_vol * 0.053);
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
   
console.log(formwork_cement)

/////////////////// Anti-Termite-Treatment.


    let spray_area = Math.ceil((trenchLength* 5.1)/2500);

///////////////// Damp Proof Course

    let cement_DPC = Math.ceil(trenchLength* 0.0165);
    let sand_DPC = Math.ceil(trenchLength* 0.0413);
    let coarse_DPC = Math.ceil(trenchLength* 0.0825);
    let bitmen_DPC = Math.ceil((trenchLength* 0.75)/500);
    let polythene_sheet = Math.ceil(trenchLength* 0.85);
//////////////////////////
    document.getElementById("spray_area").innerText = "Polythene sheet " + polythene_sheet + " Ft^2";
    document.getElementById("cement_DPC").innerText = "Cement used " + cement_DPC + " bags";
    document.getElementById("sand_DPC").innerText = "Sand used " + formwork_sand + " CFT";
    document.getElementById("coarse_DPC").innerText = "Coarse used " + formwork_coarse + " CFT";
    document.getElementById("bitmen_DPC").innerText = "Bitmen used " + bitmen_DPC + " Drums";
    document.getElementById("polythene_sheet").innerText = "Polythene sheet " + polythene_sheet + " SFT";






/////////////Backfilling 

  let backfill_vol = Math.ceil(trenchLength* 8.88/150);
///////////
  
   document.getElementById("backfill_vol").innerText = "Backfill Volume is " +backfill_vol +" Trolley";

  let total_cement_foundation = Math.ceil(excavation_cement + brickwear_cement + formwork_cement + cement_DPC);
  let total_sand_foundation = excavation_sand + brickwear_sand + formwork_sand + sand_DPC;
  let total_coarse_foundation = Math.ceil(excavation_coarse + formwork_coarse + coarse_DPC);

    // document.getElementById("cement_in_foundation").innerText = total_cement_foundation + " bags";
    // document.getElementById("sand_used").innerText =  total_sand_foundation + " CFT";
    // document.getElementById("aggrigate_used").innerText = total_coarse_foundation + " CFT";
    
    //document.getElementById("bricks_in_foundation").innerText =  brickwear_bricks + " units";
    
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

  let brick_masonnary_volume = Math.ceil(trenchLength*3.71+ trenchLength*2.26);
  let brick_masonnary_bricks =  Math.ceil(brick_masonnary_volume* 13.5);
  let brick_masonnary_cement = Math.ceil(brick_masonnary_volume* 0.063);
  let brick_masonnary_sand   = Math.ceil(brick_masonnary_volume* 0.396);
/////////////////////////

 document.getElementById("brick_masonnary_bricks").innerText = "Bricks Needed for Lintels " +brick_masonnary_bricks +" units";
 document.getElementById("brick_masonnary_cement").innerText = "Cement Used in Lintels "+brick_masonnary_cement +" bags";
 document.getElementById("brick_masonnary_sand").innerText = "Sand Used in Lintels " + brick_masonnary_sand +" CFT";
  
////////////////////Lintels.

  let total_openings = Math.ceil(trenchLength*0.03);
  let lintel_volume = Math.ceil(total_openings* 1.875);
  let lintel_steel =  Math.ceil(lintel_volume* 2.5);
  let lintel_cement = Math.ceil(lintel_volume* 0.176);
  let lintel_sand = Math.ceil(lintel_volume* 0.44);
  let lintel_crush = Math.ceil(lintel_volume* 0.88);
//////////////////

document.getElementById("total_openings").innerText = "No of openings "+ total_openings +" openings" ;
document.getElementById("lintel_cement").innerText = "Cement Used in Lintels " + lintel_cement + " bags";
document.getElementById("lintel_sand").innerText = "Sand Used in Lintels " + lintel_sand+ " CFT";
document.getElementById("lintel_crush").innerText = "Crush Used in Lintels " + lintel_crush +" CFT";
document.getElementById("lintel_steel").innerText = "Steel Used in Lintels" + lintel_steel +  " Kg";

//////////////////// Roof Lenter.

let roof_volume = Math.ceil(covered_area * 0.582);
let roof_steel  = Math.ceil(roof_volume* 3.6);
let roof_cement = Math.ceil(roof_volume * 0.176);
let roof_sand   =  Math.ceil(roof_volume * 0.44);
let roof_crush  = Math.ceil(roof_volume* 0.88);
////////////////////////
document.getElementById("roof_cement").innerText = roof_cement + " bags";
document.getElementById("roof_sand").innerText = roof_sand+ " CFT";
document.getElementById("roof_crush").innerText = roof_crush +" CFT";
document.getElementById("roof_steel").innerText = roof_steel +  " Kg";

//////////////////Plaster cover.

let plaster_cover_area_internal = Math.ceil(trenchLength*18.7);
let plaster_cover_area_external = Math.ceil(Math.sqrt(area)*44);
let plaster_cement = Math.ceil(plaster_cover_area_internal* 0.0074+plaster_cover_area_external* 0.0142 + covered_area* 0.0055);

let plaster_sand = Math.ceil(plaster_cover_area_internal* 0.037+ plaster_cover_area_external* 0.056+ covered_area*0.027);

//////////////////////////////

document.getElementById("plaster_cover_area_internal").innerText = "Lintel external covered area is " + plaster_cover_area_internal +" Ft^2";
document.getElementById("plaster_cover_area_external").innerText = "Lintel internal covered area is " +  plaster_cover_area_external +" Ft^2";
document.getElementById("plaster_cement").innerText = "Cement used "+ plaster_cement +" bags";
document.getElementById("plaster_sand").innerText = "Sand used "+plaster_sand +" CFT"; 
////////////Boundary wall.
//////////////Needs to be checked. again.
let boundary_length = Math.sqrt(area*4)*1.18;
let boundary_vol = Math.ceil((boundary_length -12)*2.625);
let boundary_bricks = Math.ceil(boundary_vol * 13.5);
let boundary_cement = Math.ceil((boundary_vol * 0.053)+4);  //bags x price
let boundary_sand = Math.ceil(boundary_vol* 0.396+10);
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
// document.getElementById("super_sand_total").innerText = super_sand_total + " CFT";
// document.getElementById("super_crush_total").innerText = super_crush_total + " CFT"
// document.getElementById("super_bricks_total").innerText = super_bricks_total + " units";
// document.getElementById("super_steel_total").innerText = super_steel_total + " Kg";


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
 let drainage_2mm = Math.ceil(covered_area/25);
 let drainage_3mm = Math.ceil(covered_area/25);
 let drainage_4mm = Math.ceil(covered_area/17);
 //////////
 
document.getElementById("drainage_2mm").innerText = "Length of 2mm drainage pip is "+drainage_2mm;
document.getElementById("drainage_3mm").innerText = "Length of 3mm drainage pip is "+drainage_3mm;
document.getElementById("drainage_4mm").innerText = "Length of 3mm drainage pip is "+drainage_4mm;

 /// Gass pipe.
 let gass_pipe_3_by_4 = Math.ceil(covered_area/14);

////////////
document.getElementById("gass_pipe_3_by_4").innerText = "Required length of gass pipe is "+drainage_4mm;

/// UPVC pipe.
 let upvc_6in = Math.ceil(covered_area/40);
///////////
document.getElementById("upvc_6in").innerText = "Required length of UPVC pipe is "+upvc_6in;

/////////////////////////
///////////////////////// Electric work.

// Conduction accessories.
let electric_pvc_3_by_4dia = Math.ceil(covered_area/2);
let electric_pvc_1dia = Math.ceil(covered_area/7);
let electric_pvc_3_by_2dia = Math.ceil(covered_area/56);
let electric_pvc_2dia = Math.ceil(covered_area/50);
let ceiling_fan_hooks = Math.ceil(covered_area/100);
////////

document.getElementById("electric_pvc_3_by_4dia").innerText = "Electric Wire with dia 3/4 is" + electric_pvc_3_by_4dia;
document.getElementById("electric_pvc_1dia").innerText = "Electric Wire with dia 1mm " + electric_pvc_1dia;
document.getElementById("electric_pvc_3_by_2dia").innerText = "Electric Wire with dia 3/2 " + electric_pvc_3_by_2dia;
document.getElementById("electric_pvc_2dia").innerText = "Electric Wire With dia 2mm is   " + electric_pvc_2dia;
document.getElementById("ceiling_fan_hooks").innerText = "No of Ceiling Fan Hooks required are " + ceiling_fan_hooks;

// Light fans and chandeliers
let boundary_wall_lights = Math.ceil(covered_area/500);
let porch_lights         = Math.ceil(covered_area/250);
let bedroom_lights       = Math.ceil(covered_area/84);
let bathroom_lights      = Math.ceil(covered_area/125);
let open_area_lights     = Math.ceil(covered_area/100); 
let kitchen_lights       = Math.ceil(covered_area/250);
let stair_case_lights    = Math.ceil(covered_area/167);
let drawing_room_lights  = Math.ceil(covered_area/250);
let living_area_lights   = Math.ceil(covered_area/250);
let ceiling_fan          = Math.ceil(covered_area/167);
let exhaust_fan          = Math.ceil(covered_area/200);
////////////////////
document.getElementById("boundary_wall_lights").innerText = "No of Boundary Wall Ligths " + boundary_wall_lights;
document.getElementById("porch_lights").innerText = "No of Porch Lights "+porch_lights;
document.getElementById("bedroom_lights").innerText = "No of Bedroom Lights "+bedroom_lights;
document.getElementById("bathroom_lights").innerText = "No of Bathroom Lights "+bathroom_lights;
document.getElementById("open_area_lights").innerText = "No of Open Area Lights "+open_area_lights;
document.getElementById("kitchen_lights").innerText = "No of Kitchen Lights "+kitchen_lights;
document.getElementById("stair_case_lights").innerText = "No of Staircase Lights "+stair_case_lights;
document.getElementById("drawing_room_lights").innerText = "No of Drawing Room Lights "+drawing_room_lights;
document.getElementById("living_area_lights").innerText = "No of Living Area Lights "+living_area_lights;
document.getElementById("ceiling_fan").innerText = "No of Ceiling Fans "+ceiling_fan;
document.getElementById("exhaust_fan").innerText = "No of Exhaust Fans "+exhaust_fan;

///////////
////////// Switches and Back Boxes.
//////////

 let power_sockets           = Math.ceil(covered_area/100);
 let fan_dimmer              = Math.ceil(covered_area/167);
 let universal_switch_socket = Math.ceil(covered_area/50);
 let telephone_sockets       = Math.ceil(covered_area/500);
 let distribution_board      = Math.ceil(1);
 let tv_sockets              = Math.ceil(covered_area/250);
 let switch_board            = Math.ceil(covered_area/50)
/////////////////

document.getElementById("power_sockets").innerText = "No of Sockets " + power_sockets;
document.getElementById("fan_dimmer").innerText = "No of Fan Dimmers " + fan_dimmer;
document.getElementById("universal_switch_socket").innerText = "No of Universal Switch Sockets " + universal_switch_socket;
document.getElementById("telephone_sockets").innerText = "No of Telepone Sockets " + telephone_sockets;
document.getElementById("distribution_board").innerText = "No of distribution Boards " + distribution_board;
document.getElementById("tv_sockets").innerText = "No of TV Sockets " + tv_sockets;
document.getElementById("switch_board").innerText = "No of Switch Boards " + switch_board;

////////////////
///////////// Wires and Cases.
///////////////

 let conducting_wire_1_5mm = Math.ceil(covered_area/100);   // 1.5mm Sq. (3/.029) PVC insulated Cu.conductor wire (Light point wiring)
 let conducting_wire_2_5mm = Math.ceil(covered_area/100);
 let conducting_wire_4mm = Math.ceil(covered_area/200);
 let conducting_wire_16mm = Math.ceil(covered_area/15);

 let cat_5_telephone = Math.ceil(covered_area/40);
 let tv_coaxing_cable = Math.ceil(covered_area/14);
 //////////////////

 document.getElementById("conducting_wire_1_5mm").innerText = "Conducting Wire 1.5 mm require is " + conducting_wire_1_5mm ;
 document.getElementById("conducting_wire_2_5mm").innerText = "Conducting Wire 2.5 mm require is " + conducting_wire_2_5mm ;
 document.getElementById("conducting_wire_4mm").innerText = "Conducting Wire 4 mm require is " + conducting_wire_4mm ;
 document.getElementById("conducting_wire_16mm").innerText = "Conducting Wire 16 mm require is " + conducting_wire_16mm ;
 document.getElementById("cat_5_telephone").innerText = "Cat 5 Telephone wire Required is" + cat_5_telephone ;
 document.getElementById("tv_coaxing_cable").innerText = "TV Coaxing Cable " + tv_coaxing_cable ;

/////////////
/////////// Finishing.
////////////

 let staircase_and_terrace = Math.ceil(covered_area/34);
 let main_gate             = 1;
////////////
document.getElementById("main_gate").innerText = "Number of Main gates " + main_gate;
document.getElementById("staircase_and_terrace").innerText = "Number of stairs " + staircase_and_terrace;

 ///////// Paint and ceiling work.
 /////////

 let false_ceiling = Math.ceil(covered_area/4);
 let paint         = Math.ceil(covered_area/0.024);
/////////////
 document.getElementById("false_ceiling").innerText = "Fase Ceiling Required will be " + false_ceiling;
 document.getElementById("paint").innerText = "Paint required will be " + paint;
 /// Tile work.

 let floor_tile = Math.ceil(covered_area/0.5);
 let floor_skirting = Math.ceil(covered_area/1.333);
 let ceramic_tiles_on_walls = Math.ceil(covered_area/2.65);
///////////////
 document.getElementById("floor_tile").innerText = "Floor Tiles Required " + floor_tile;
 document.getElementById("floor_skirting").innerText = "Floor Skirting Required " + floor_skirting;
 document.getElementById("ceramic_tiles_on_walls").innerText = "Ceramic Tiles on Walls Required are " + ceramic_tiles_on_walls;

//  ///// Let wardrobes and Cabinets.
//  let wardrobes = covered_area/333.33;
//  let kitchen_cabinets = 1;
// //////////////
//  document.getElementById("wardrobes").innerText ="No of Wardrobes "+ wardrobes ;
//  document.getElementById("kitchen_cabinets").innerText ="No of Kitchen Cabinets "+ kitchen_cabinets ;

 ///// Windows.

 let aluminium_room_windows = Math.ceil(covered_area/200);
 let aluminium_bathroom_windows = Math.ceil(covered_area/250);

////////////
 document.getElementById("aluminium_room_windows").innerText ="No of Alumunium Windows "+ aluminium_room_windows ;
 document.getElementById("aluminium_bathroom_windows").innerText ="No of Alumunium Bathroom Windows "+ aluminium_bathroom_windows ;

    }
    )
    