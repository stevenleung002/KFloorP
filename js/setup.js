// CHANGE THE VARIABLES BELOW ACCORDING TO YOUR NEEDS:

// YOUR HOMEASSISTANT ADDRESS.
// EXAMPLE: var hassaddress = "http://192.168.1.10:8123"
var hassaddress = "";

// YOUR HOMEASSISTANT LONG LIVED TOKEN
// GET IT FROM HA PROFILE
var hasspass = "";

// YOUR HOME FLOORPLAN FILE PATH.
// EXAMPLE: var floorplan1stFloor = "./images/floorplan.png"
// EXAMPLE: var floorplan1stFloor = "./images/blank.png"
var floorplan1stFloor = "./images/first-floor-base.png"; // YOUR FLOORPLAN IMAGE PATH FOR 1ST FLOOR
var floorplan2ndFloor = "./images/blank.png"; // YOUR FLOORPLAN IMAGE PATH FOR 2ND FLOOR

// SHOW (true) / HIDE (false) MENUS
// SELECT A MAXIMUM OF 3 ITEMS (IF YOU USE ONLY ONE FLOOR) OR 2 ITEMS (IF YOU USE 2 FLOORS) TO FIT IN THE MENU
var showSwitchesMenu = false;
var showLightsMenu = false;
var showAutomationsMenu = false;
var showPlayersMenu = false;

// IF YOUR KINDLE DOES NOT DISPLAY YOUR CORRECT TIME,
// CHANGE THE TIMEOFFSET FROM 0 TO THE DIFFERENCE BETWEEN YOUR NEEDS
// (EITHER NEGATIVES OR POSITIVES VALUES ARE ACCEPTED)
var timeoffset = 0;

// SHOW TIME IN 24H OR 12H PATTERN
// true = 10:34 PM
// false = 22:34
var showAmPmTime = true;

// SHOW (true) / HIDE (false) WEATHER ICON ON EXTENDED FORECAST
var showWeatherIcon = true;

// BELOW YOU NEED TO ADD YOUR DEVICES IN THE FOLLOWING FORMAT:
// ['domain.device_id', X position, Y position, 'type'],
//
// REAL EXAMPLE:
// ["binary_sensor.office_window", 620, 40, "window"],
//
// All lines should end with a comma "," EXCEPT FOR THE LAST ONE.
// IF you have only one item, then it does not have to end with a comma.
//
// Types will define the icons and can be specified for the following DOMAINS:
// SWITCH, BINARY_SENSOR, SENSOR, MEDIA_PLAYER and WEATHER
// 
// CURRENTLY SUPPORTED ICONS/FUNCTION PER DOMAIN:
//
// SWITCH: washingmachine, microwave, smartplug, dishwasher, heater, fridge, waterfountain, fan, plug
// BINARY_SENSOR: window, door
// SENSOR: battery, temperature, humidity, friendly (show attr friendly_name above sensor state), blank (only show the sensor state)
// MEDIA_PLAYER: tv, alexa, googleassistant
// WEATHER: extended (show extended forecast) or none
//
// IF A TYPE IS NOT INFORMED, THEN THE STANDARD ICON FOR THE CATEGORY WILL BE USED
//
// YOU DO NOT NEED/HAVE TO SPECIFY A TYPE FOR DOMAIN=LIGHT, SO IT CAN BE OMITTED.
//
// FULL EXAMPLE:
// var devices1stFloor = [
//   ["switch.switch_xpto_1", 165, 50], // NO TYPE DEFINED
//   ["binary_sensor.front_door", 125, 50, "door"],
//   ["sensor.room_temperature", 125, 430, "temperature"],
//   ["sensor.pc_plug_power", 205, 260, "blank"],
//   ["media_player.hall_tv", 165, 120, "tv"],
//   ["media_player.echo_dot_3", 215, 510, "alexa"],
//   ["weather.forecast_home", 150, 50, "extended"], // EXTENDED FORECAST
//   ["weather.forecast_home", 150, 50] // TODAY FORECAST
// ];


// DEVICES FOR 1ST FLOOR
var devices1stFloor = [
    // Garage
    ["switch.garage_light", 890, 345],
    // ["switch.dryer", 700, 72],
    // ["switch.washer", 700, 190],
    // LIVING
    ["switch.living_light", 380, 110],
    // DINING
    ["switch.dining_light", 380, 425],
    // KITCHEN
    ["switch.kitchen_light", 590, 800],
    // LOUNGE
    ["switch.lounge_light", 760, 1010],
    ["switch.couch_light", 1010, 1080],
    // FrontDoor
    ["light.door_light", 1190, 900],
];


// DEVICES FOR THE SECOND FLOOR
// LEAVE EMPTY IF YOU ONLY HAVE 1 FLOOR
// EMPTY EXAMPLE: var devices2ndFloor = [];
var devices2ndFloor = [
	// LOFT
	// POOL
];