//localStorage.clear();


//-------Initialization of all needed variables for the progressbar-------
var checkboxes = document.querySelectorAll('input[type=checkbox]'); //array-like object
const full_bar = 30000;

const base_value_m_h = 150
const base_value_s_h = 50
const bonus_15 = 50
const bonus_10 = 50
const bonus_5 = 50

const milestone_exp = 8000
const minigoal_exp = 3000

const threshold = 1000;
const bar = document.getElementById("bar");
const exp_bar = document.getElementById("exp-bar");

var c_d = document.getElementById("cheat_day_input");
var d_s = document.getElementById("day_streak_input");
var s_h = document.getElementById("skip_habit_input")
var d_s_box_15 = document.getElementById("15er");
var d_s_box_10 = document.getElementById("10er");
var d_s_box_5 = document.getElementById("5er");

// Needed entities var generating random battle passes
var all_small_rewards = ["150hp", "1 fast food + 50hp",
							"2h gaming", "1h gaming + 1 soft drink", "1h gaming + 1 snack", "1h gaming + 50hp",
							"3 anime eps", "1 anime ep + 1h gaming", "1 anime ep + 1 snack", "1 anime + 50hp"]
var all_big_rewards = ["600hp", "9 anime eps", "6h gaming", "1 chill day", "1 fast food + 1 soft drink + 250hp"]
var all_ult_rewards = ["2400hp", "1 video game + 600hp", "1 anime merchandise + 600hp", "18 anime eps + 12h gaming"]

var small_reward_list = document.getElementsByClassName("small-reward")
var big_reward_list = document.getElementsByClassName("big-reward")
var ult_reward_list = document.getElementsByClassName("ult-reward")
var all_reward_list = document.getElementsByClassName("reward")

var standard_reward_text = document.getElementById("standard_reward")
var generatorContainer = document.querySelector('.generator_container');
var generators = generatorContainer.querySelectorAll('.generator');


//---------------------------------------------------------------------------
// When opening or reloading the site, then start with some initial functions
//---------------------------------------------------------------------------

// Load data every time, we reload the website
load_data()

// At 1st of every month reset the chill day counter
cheat_day_and_skip_habit_reset()


//-------Saving all changes-------
// If changing cheat day value, then save it
c_d.addEventListener('change', cheat_day);

// If changing streak day value, then save it
d_s.addEventListener('change', day_streak);

s_h.addEventListener("change", skip_habit)

// Clicking checkbox of bonus day streak to reset it and save the change
d_s_box_15.addEventListener('change', bonus_reset_15);
d_s_box_10.addEventListener('change', bonus_reset_10);
d_s_box_5.addEventListener('change', bonus_reset_5);


//-------Showing precise progress when hovering over bar-------
actual_progress = localStorage.getItem("width");
bar.title = actual_progress + "/" + full_bar;
exp_bar.title = actual_progress + "/" + full_bar;


//-------All needed functions-------
// Getting right width for the functions below
function right_width() {
	if (localStorage.getItem("width_trigger") == null) {
		// have to save the width_trigger to 1, if we close/reload the browser
		localStorage.setItem("width_trigger",1);

		// Initialization of width value
		localStorage.setItem("width",0);
		return Number(localStorage.getItem("width"));
	} else {
		return Number(localStorage.getItem("width"));
	}
}

//-------General exp gains-------
function main_habit() {

	width = right_width();
	
	m_h = base_value_m_h

	// Check if any bonus exp is avaiable starting with lowest
	if (checkboxes[2].checked == true) {
		m_h = m_h + bonus_5
	}

	if (checkboxes[1].checked == true) {
		m_h = m_h + bonus_10
	}

	if (checkboxes[0].checked == true) {
		m_h = m_h + bonus_15
	}

	if (width < full_bar - m_h) {
		// Progressbar
		width = width + m_h;
		w = width * 100 / full_bar;
	} else if (full_bar - m_h <= width) {
		width = width + m_h;
	}

	if (width < 30000) {
		bar.style.width = w + "%";
	} else {
		bar.style.width = 100 + "%";
	}
	
	localStorage.setItem("width",width);

	//Interaction between progressbar and checkboxes
	/*number_true_checkboxes = Math.trunc(width / 1000)

	if (number_true_checkboxes <= 30) {
		for (let i = 0; i < number_true_checkboxes; i++) {
			if (checkboxes[i+3].checked == false) {
				checkboxes[i+3].checked = true
				localStorage.setItem(checkboxes[i+3].value, checkboxes[i+3].checked);
			}
		}
	}*/

	// Showing precise progress when hovering over bar
	actual_progress = localStorage.getItem("width");
	bar.title = actual_progress + "/" + full_bar;
	exp_bar.title = actual_progress + "/" + full_bar;

	// Change color of received rewards
	number_of_rewards = Math.floor(actual_progress/1000)

	for (i=0; i < number_of_rewards; i++) {
		all_reward_list[i].style.backgroundColor = "green";
		localStorage.setItem("reward-color".concat(i), all_reward_list[i].style.backgroundColor)
	}
}

function main_habit_3x() {

	width = right_width();

	m_h = 3 * base_value_m_h

	// Check if any bonus exp is avaiable starting with lowest
	if (checkboxes[2].checked == true) {
		m_h = m_h + bonus_5
	}

	if (checkboxes[1].checked == true) {
		m_h = m_h + bonus_10
	}

	if (checkboxes[0].checked == true) {
		m_h = m_h + bonus_15
	}

	if (width < full_bar - m_h) {
		// Progressbar
		width = width + m_h;
		w = width * 100 / full_bar;
	} else if (full_bar - m_h <= width) {
		width = width + m_h;
	}

	if (width < 30000) {
		bar.style.width = w + "%";
	} else {
		bar.style.width = 100 + "%";
	}
	
	localStorage.setItem("width",width);

	//Interaction between progressbar and checkboxes
	/*number_true_checkboxes = Math.trunc(width / 1000)

	if (number_true_checkboxes <= 30) {
		for (let i = 0; i < number_true_checkboxes; i++) {
			if (checkboxes[i+3].checked == false) {
				checkboxes[i+3].checked = true
				localStorage.setItem(checkboxes[i+3].value, checkboxes[i+3].checked);
			}
		}
	}*/

	// Showing precise progress when hovering over bar
	actual_progress = localStorage.getItem("width");
	bar.title = actual_progress + "/" + full_bar;
	exp_bar.title = actual_progress + "/" + full_bar;

	// Change color of received rewards
	number_of_rewards = Math.floor(actual_progress/1000)

	for (i=0; i < number_of_rewards; i++) {
		all_reward_list[i].style.backgroundColor = "green";
		localStorage.setItem("reward-color".concat(i), all_reward_list[i].style.backgroundColor)
	}
}

function sub_habit() {

	width = right_width();
	
	s_h = base_value_s_h

	// Check if any bonus exp is avaiable starting with lowest
	if (checkboxes[2].checked == true) {
		s_h = s_h + bonus_5
	}

	if (checkboxes[1].checked == true) {
		s_h = s_h + bonus_10
	}

	if (checkboxes[0].checked == true) {
		s_h = s_h + bonus_15
	}

	if (width < full_bar - s_h) {
		// Progressbar
		width = width + s_h;
		w = width * 100 / full_bar;
	} else if (full_bar - s_h <= width) {
		width = width + s_h;
	}

	if (width < 30000) {
		bar.style.width = w + "%";
	} else {
		bar.style.width = 100 + "%";
	}
	
	localStorage.setItem("width",width);

	//Interaction between progressbar and checkboxes
	/*number_true_checkboxes = Math.trunc(width / 1000)

	if (number_true_checkboxes <= 30) {
		for (let i = 0; i < number_true_checkboxes; i++) {
			if (checkboxes[i+3].checked == false) {
				checkboxes[i+3].checked = true
				localStorage.setItem(checkboxes[i+3].value, checkboxes[i+3].checked);
			}
		}
	}*/

	// Showing precise progress when hovering over bar
	actual_progress = localStorage.getItem("width");
	bar.title = actual_progress + "/" + full_bar;
	exp_bar.title = actual_progress + "/" + full_bar;

	// Change color of received rewards
	number_of_rewards = Math.floor(actual_progress/1000)

	for (i=0; i < number_of_rewards; i++) {
		all_reward_list[i].style.backgroundColor = "green";
		localStorage.setItem("reward-color".concat(i), all_reward_list[i].style.backgroundColor)
	}
}

function milestone() {
	width = right_width();
	
	m_h = milestone_exp

	// Check if any bonus exp is avaiable starting with lowest
	if (checkboxes[2].checked == true) {
		m_h = m_h + bonus_5
	}

	if (checkboxes[1].checked == true) {
		m_h = m_h + bonus_10
	}

	if (checkboxes[0].checked == true) {
		m_h = m_h + bonus_15
	}

	if (width < full_bar - m_h) {
		// Progressbar
		width = width + m_h;
		w = width * 100 / full_bar;
	} else if (full_bar - m_h <= width) {
		width = width + m_h;
	}

	if (width < 30000) {
		bar.style.width = w + "%";
	} else {
		bar.style.width = 100 + "%";
	}
	
	localStorage.setItem("width",width);

	//Interaction between progressbar and checkboxes
	/*number_true_checkboxes = Math.trunc(width / 1000)

	if (number_true_checkboxes <= 30) {
		for (let i = 0; i < number_true_checkboxes; i++) {
			if (checkboxes[i+3].checked == false) {
				checkboxes[i+3].checked = true
				localStorage.setItem(checkboxes[i+3].value, checkboxes[i+3].checked);
			}
		}
	} else {
		for (let i = 0; i < 30; i++) {
			if (checkboxes[i+3].checked == false) {
				checkboxes[i+3].checked = true
				localStorage.setItem(checkboxes[i+3].value, checkboxes[i+3].checked);
			}
		}
	}*/

	// Showing precise progress when hovering over bar
	actual_progress = localStorage.getItem("width");
	bar.title = actual_progress + "/" + full_bar;
	exp_bar.title = actual_progress + "/" + full_bar;

	// Change color of received rewards
	number_of_rewards = Math.floor(actual_progress/1000)

	for (i=0; i < number_of_rewards; i++) {
		all_reward_list[i].style.backgroundColor = "green";
		localStorage.setItem("reward-color".concat(i), all_reward_list[i].style.backgroundColor)
	}
}

function minigoal() {
	width = right_width();
	
	m_h = minigoal_exp

	// Check if any bonus exp is avaiable starting with lowest
	if (checkboxes[2].checked == true) {
		m_h = m_h + bonus_5
	}

	if (checkboxes[1].checked == true) {
		m_h = m_h + bonus_10
	}

	if (checkboxes[0].checked == true) {
		m_h = m_h + bonus_15
	}

	if (width < full_bar - m_h) {
		// Progressbar
		width = width + m_h;
		w = width * 100 / full_bar;
	} else if (full_bar - m_h <= width) {
		width = width + m_h;
	}

	if (width < 30000) {
		bar.style.width = w + "%";
	} else {
		bar.style.width = 100 + "%";
	}
	
	localStorage.setItem("width",width);

	//Interaction between progressbar and checkboxes
	/*number_true_checkboxes = Math.trunc(width / 1000)

	if (number_true_checkboxes <= 30) {
		for (let i = 0; i < number_true_checkboxes; i++) {
			if (checkboxes[i+3].checked == false) {
				checkboxes[i+3].checked = true
				localStorage.setItem(checkboxes[i+3].value, checkboxes[i+3].checked);
			}
		}
	} else {
		for (let i = 0; i < 30; i++) {
			if (checkboxes[i+3].checked == false) {
				checkboxes[i+3].checked = true
				localStorage.setItem(checkboxes[i+3].value, checkboxes[i+3].checked);
			}
		}
	}*/

	// Showing precise progress when hovering over bar
	actual_progress = localStorage.getItem("width");
	bar.title = actual_progress + "/" + full_bar;
	exp_bar.title = actual_progress + "/" + full_bar;

	// Change color of received rewards
	number_of_rewards = Math.floor(actual_progress/1000)

	for (i=0; i < number_of_rewards; i++) {
		all_reward_list[i].style.backgroundColor = "green";
		localStorage.setItem("reward-color".concat(i), all_reward_list[i].style.backgroundColor)
	}
}


//------------------------------------------------------------
//-------Showing saved data after reloading the browser-------
//------------------------------------------------------------
function load_data() {
	// Progressbar
	w = Number(localStorage.getItem("width")) * 100 / full_bar;
	if (w <= 100) {
		bar.style.width = w + "%";
	} else {
		bar.style.width = 100 + "%"
	}

	// Chill day
	if (Number(localStorage.getItem('c_d')) !== null) {
		c_d.value = Number(localStorage.getItem('c_d'))
	}

	// Skip habits
	if (Number(localStorage.getItem('s_h')) !== null) {
		s_h.value = Number(localStorage.getItem('s_h'))
	}

	// Day streak
	if (Number(localStorage.getItem('d_s')) !== null) {
		d_s.value = Number(localStorage.getItem('d_s'))
	}

	// Rewards
	for (let i = 0; i < small_reward_list.length; i++) {
		small_reward_list[i].innerHTML = localStorage.getItem("small_reward".concat(i))
	}

	for (let i = 0; i < big_reward_list.length; i++) {
		big_reward_list[i].innerHTML = localStorage.getItem("big_reward".concat(i))
	}

	for (let i = 0; i < ult_reward_list.length; i++) {
		ult_reward_list[i].innerHTML = localStorage.getItem("ult_reward".concat(i))
	}

	// Rewards color
	for (let i = 0; i < all_reward_list.length; i++) {
		all_reward_list[i].style.backgroundColor = localStorage.getItem("reward-color".concat(i))
	}

	// Day streak bonus
	for (let i = 0; i <= 2; i++) {
		if (localStorage.getItem(checkboxes[i].value) == "true") {
			checkboxes[i].checked = true
		} else {
			checkboxes[i].checked = false
		}
	}
}


//---------------------------------------------------
//----Functions for day streak, habit skipper etc.---
//---------------------------------------------------
function cheat_day() {
	localStorage.setItem('c_d', c_d.value);
}

function skip_habit() {
	localStorage.setItem('s_h', s_h.value);
}

function day_streak() {
	localStorage.setItem('d_s', d_s.value);

	// If we reach some threshold, then mark the bonuses and change the exp gains
	if (d_s.value == 5) {
		checkboxes[2].checked = true;
		localStorage.setItem(checkboxes[2].value, checkboxes[2].checked)
	} else if (d_s.value == 12) {
		checkboxes[1].checked = true;
		localStorage.setItem(checkboxes[1].value, checkboxes[1].checked)
	} else if (d_s.value == 20) {
		checkboxes[0].checked = true;
		localStorage.setItem(checkboxes[0].value, checkboxes[0].checked)
	}
}

//---------------------------------------------------
//--------------Bonus exp----------------------------
//---------------------------------------------------
function bonus_reset_15() {

	if (checkboxes[0].checked == false) {
		checkboxes[0].checked = false;
	}
	else {
		checkboxes[0].checked = true;
	}

	localStorage.setItem(checkboxes[0].value, checkboxes[0].checked)
}

function bonus_reset_10() {
	if (checkboxes[1].checked == false) {
		checkboxes[1].checked = false;
	}
	else {
		checkboxes[1].checked = true;
	}

	localStorage.setItem(checkboxes[1].value, checkboxes[1].checked)
}

function bonus_reset_5() {
	if (checkboxes[2].checked == false) {
		checkboxes[2].checked = false;
	}
	else {
		checkboxes[2].checked = true;
	}

	localStorage.setItem(checkboxes[2].value, checkboxes[2].checked)

	console.log(checkboxes[2].checked)
}


//---------------------------------------------------
//--------------Resets-------------------------------
//---------------------------------------------------
function cheat_day_and_skip_habit_reset() {
	var today = new Date();
	var day = today.getDate();

	if (day == 1) {
		localStorage.setItem('c_d', 3);
		localStorage.setItem('s_h', 5);
	}
}

function day_streak_reset() {
	// Reset bonus
	for (j = 0; j < 3; j++) {
		checkboxes[j].checked = false
		localStorage.setItem(checkboxes[j].value,false)
	}

	// Reset day streak
	d_s.value = 0
	localStorage.setItem("d_s",0)
}


//-----------------------------------------------------------------------------
//--------------Generate new battle pass---------------------------------------
//-----------------------------------------------------------------------------
function new_battle_pass() {

	for (i = 0; i < all_reward_list.length; i++) {
		if (!(i == 4 || i == 9 || i == 14 || i == 19 || i == 24 || i == 29)) {
			all_reward_list[i].style.backgroundColor = "transparent";
		} else if (i == 4 || i == 9 || i == 14 || i == 19 || i == 24) {
			all_reward_list[i].style.backgroundColor = "hsla(240,80%,50%,0.5)"
		} else {
			all_reward_list[i].style.backgroundColor = "hsla(60,100%,80%,0.4)"
		}
	}

	for (i = 0; i < all_reward_list.length; i++) {
		localStorage.setItem("reward-color".concat(i), all_reward_list[i].style.backgroundColor)
	}

	bar.style.width = "0%";
	localStorage.setItem("width","0");

	// Reset progress shown when hovering over bar
	bar.title = 0 + "/" + full_bar;
	exp_bar.title = 0 + "/" + full_bar;

	// Small rewards
	for(let i = 0; i < small_reward_list.length; i++) {
		// Generate random reward from reward list
		small_reward_list[i].innerHTML = random_reward(all_small_rewards);

		// Save rewards
		localStorage.setItem("small_reward".concat(i), small_reward_list[i].innerHTML);
	}

	// Big rewards
	for(let i = 0; i < big_reward_list.length; i++) {
		big_reward_list[i].innerHTML = random_reward(all_big_rewards);
		localStorage.setItem("big_reward".concat(i), big_reward_list[i].innerHTML);
	}

	// Ult rewards
	for(let i = 0; i < ult_reward_list.length; i++) {
		ult_reward_list[i].innerHTML = random_reward(all_ult_rewards);
		localStorage.setItem("ult_reward".concat(i), ult_reward_list[i].innerHTML);
	}
}

function random_reward(all_rewards) {
	var randomIndex = Math.floor(Math.random() * all_rewards.length)

	return all_rewards[randomIndex]
}


//-----------------------------------------------------------------------------
//--------------Button to switch between battle pass and reward wheels----------------------------------------
//-----------------------------------------------------------------------------

// All needed variables for switch button
var gSwitch_button = document.querySelector(".switch_button")
var gBody_class = document.querySelector(".body_class")
var gSwitch_triangle = document.querySelector(".switch_triangle")

// Mode 1 = battle pass; mode 2 = reward generator
var gMode = 1

// When clicking, then switch screen
gSwitch_button.onclick = function() {
	if (gMode == 1) {
		// Shift whole screen to the top
		gBody_class.style.transform = "translateY(-280px)"

		// Change triangle direction
		gSwitch_triangle.style.clipPath = "polygon(50% 0, 0 100%, 100% 100%)"
		gSwitch_triangle.style.marginTop = "10px"
		gMode = 2

		// Shift switch button to bottom
		gSwitch_button.style.transform = "translateY(70px)"
	} else {
		gBody_class.style.transform = "translateY(0px)"
		gSwitch_triangle.style.clipPath = "polygon(50% 100%, 0 0, 100% 0)"
		gSwitch_triangle.style.marginTop = "13px"
		gMode = 1

		// Shift switch button to top
		gSwitch_button.style.transform = "translateY(0px)"
	}
}

// When hovering over button, change its appearance
gSwitch_button.addEventListener("mouseenter", function() {
	gSwitch_button.style.borderColor = "black"
	gSwitch_button.style.backgroundColor = "rgba(255, 255, 255, 0.732)"
	gSwitch_triangle.style.backgroundColor = "black"
	
})

// When not hovering button anymore, then reset appearance
gSwitch_button.addEventListener("mouseleave", function() {
	gSwitch_button.style.borderColor = "rgba(255, 255, 255, 0.732)"
	gSwitch_button.style.backgroundColor = "rgba(0, 0, 0, 0)"
	gSwitch_triangle.style.backgroundColor = "rgba(255, 255, 255, 0.732)"
})


//-----------------------------------------------------------------------------
//--------------Random reward generator----------------------------------------
//-----------------------------------------------------------------------------

// All needed variables for reward generators
var gWheel_container = document.querySelector(".rew_wheel_container")
// List of all wheels
var gRew_wheels = gWheel_container.querySelectorAll(".rew_wheel")
var gWheels = gWheel_container.querySelectorAll(".wheel")

// Do min and max spins
var gWheel_spin_max = 12
var gWheel_spin_min = 6
var gWheel_spin_range = gWheel_spin_max - gWheel_spin_min + 1
var gWheel_spin = 0

// Shifting parameters
var gShiftX = 0
var gShiftX_spin = 0

// Others
var gCurr_gen = 0

var gGen_deg_inf = {
	"0": 0,
	"1": 0,
	"2": 0
}

// All needed functions

// Shift initial position of every generator button and spin wheel
function right_init_gen_and_wheel_position() {
	for (let i = 0; i < generators.length; i++) {
		let shiftX = i * 100
		generators[i].style.left = shiftX.toString() + "%";

		shiftX = i * 350 + (i + 1) * 47
		gRew_wheels[i].style.left = shiftX.toString() + "px"
	}
}

// Spin wheel functions
function random_reward_generator() {
	gGen_deg_inf[gCurr_gen.toString()] += (Math.floor(Math.random() * gWheel_spin_range) + gWheel_spin_min) 
	* 360 + Math.random() * 360
	gWheels[gCurr_gen].style.transform = "rotate(" + gGen_deg_inf[gCurr_gen.toString()].toString() + "deg)"
}

// Switch to another generator
function next_generator() {

	if (gCurr_gen < generators.length - 1) {
		// Change button
		gShiftX += 105
		var gShiftX_string = gShiftX.toString()

		for (let i = 0; i < generators.length; i++) {
			generators[i].style.transform = "translateX(" + "-" + gShiftX_string + "%)"
		}

		// Set new current generator
		gCurr_gen += 1

		// Change wheel
		gShiftX_spin = gCurr_gen * (350 + 47)
		//gShiftX_spin += 368
		var gShiftX_spin_string = gShiftX_spin.toString()
		for (let i = 0; i < gRew_wheels.length; i++) {
			gRew_wheels[i].style.transform = "translateX(" + "-" + gShiftX_spin_string + "px)"
		}
	}
}

function prev_generator() {

	if (gCurr_gen > 0) {
		gShiftX -= 105
		var gShiftX_string = gShiftX.toString()

		for (let i = 0; i < generators.length; i++) {
			generators[i].style.transform = "translateX(" + "-" + gShiftX_string + "%)"
		}

		gCurr_gen -= 1

		// Change wheel
		gShiftX_spin = gCurr_gen * (350 + 47)
		var gShiftX_spin_string = gShiftX_spin.toString()
		for (let i = 0; i < gRew_wheels.length; i++) {
			gRew_wheels[i].style.transform = "translateX(" + "-" + gShiftX_spin_string + "px)"
		}
	}
}

// Execute needed reward generator functions
right_init_gen_and_wheel_position()