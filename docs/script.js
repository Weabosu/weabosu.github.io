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
var all_small_rewards = ["3\u20AC", "2 sweets", "3 anime eps", "2h gaming", "1 anime ep + 1 soft drink", "1 anime ep + 1 soft drink",
						"1 anime ep + 1 sweet", "1h gaming + 1 soft drink", "1h gaming + 1 sweet", "2 sweets", "2 soft drinks", "1 fast food"]
var all_big_rewards = ["8\u20AC", "8 anime eps", "6h gaming", "1 chill day", "1 fast food + 1 sweet + 1 soft drink"]
var all_ult_rewards = ["18\u20AC", "1 video game", "1 anime merchandise", "18 anime eps + 12h gaming"]

var small_reward_list = document.getElementsByClassName("small-reward")
var big_reward_list = document.getElementsByClassName("big-reward")
var ult_reward_list = document.getElementsByClassName("ult-reward")
var all_reward_list = document.getElementsByClassName("reward")

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

//-------Showing saved data after reloading the browser-------
function load_data() {
	// Progressbar
	w = Number(localStorage.getItem("width")) * 100 / full_bar;
	if (w <= 100) {
		bar.style.width = w + "%";
	} else {
		bar.style.width = 100 + "%"
	}
	

	// Checkboxes
	for (j = 0; j < checkboxes.length; j++) {
		checkboxes[j].checked = localStorage.getItem(checkboxes[j].value) === 'true' ? true:false;
	}

	// Cheat day
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
}

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

//-------Bonus exp-------
function bonus_reset_15() {

	if (checkboxes[0].checked == false) {
		checkboxes[0].checked = false;
		localStorage.setItem(checkboxes[0].value, checkboxes[0].checked);
	}
	else {
		checkboxes[0].checked = true;
		localStorage.setItem(checkboxes[0].value, checkboxes[0].checked);
	}

}

function bonus_reset_10() {
	if (checkboxes[1].checked == false) {
		checkboxes[1].checked = false;
		localStorage.setItem(checkboxes[1].value, checkboxes[1].checked);
	}
	else {
		checkboxes[1].checked = true;
		localStorage.setItem(checkboxes[1].value, checkboxes[1].checked);
	}
}

function bonus_reset_5() {
	if (checkboxes[2].checked == false) {
		checkboxes[2].checked = false;
		localStorage.setItem(checkboxes[2].value, checkboxes[2].checked);
	}
	else {
		checkboxes[2].checked = true;
		localStorage.setItem(checkboxes[2].value, checkboxes[2].checked);
	}
}

//-------Resets-------
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

//-------Generate new battle pass-------
function new_battle_pass() {
	localStorage.clear()

	for (i=0; i < all_reward_list.length; i++) {
		if (!(i == 4 || i == 9 || i == 14 || i == 19 || i == 24 || i == 29)) {
			all_reward_list[i].style.backgroundColor = "transparent";
		} else if (i == 4 || i == 9 || i == 14 || i == 19 || i == 24) {
			all_reward_list[i].style.backgroundColor = "hsla(240,80%,50%,0.5)"
		} else {
			all_reward_list[i].style.backgroundColor = "hsla(60,100%,80%,0.4)"
		}
	}

	bar.style.width = "0%";
	for (j = 3; j < checkboxes.length; j++) {
		checkboxes[j].checked = false;
		localStorage.setItem(checkboxes[j].value, checkboxes[j].checked); 
	}

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
	var min = 0
	var max = all_rewards.length - 1
	var range = max - min + 1;
	var randomIndex = Math.floor(Math.random() * range) + min

	return all_rewards[randomIndex]
}
