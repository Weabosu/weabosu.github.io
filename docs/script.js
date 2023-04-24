//localStorage.clear();

//-------Initialization of all needed variables for the progressbar-------
var checkboxes = document.querySelectorAll('input[type=checkbox]'); //array-like object
const full_bar = 30000;

base_value_m_h = 150
base_value_s_h = 200
bonus_15 = 150
bonus_10 = 100
bonus_5 = 50

milestone_exp = 8000
minigoal_exp = 3000

const threshold = 1000;
const bar = document.getElementById("bar");
const exp_bar = document.getElementById("exp-bar");

var c_d = document.getElementById("cheat_day_input");
var d_s = document.getElementById("day_streak_input");
var d_s_box_15 = document.getElementById("15er");
var d_s_box_10 = document.getElementById("10er");
var d_s_box_5 = document.getElementById("5er");

load_data()
cheat_day_reset()

// If changing cheat day value, then save it
c_d.addEventListener('change', cheat_day);

// If changing streak day value, then save it
d_s.addEventListener('change', day_streak);

// Clicking checkbox of bonus day streak to reset it and save the change
d_s_box_15.addEventListener('change', bonus_reset_15);
d_s_box_10.addEventListener('change', bonus_reset_10);
d_s_box_5.addEventListener('change', bonus_reset_5);

// Showing precise progress when hovering over bar
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

//Main habit
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
    number_true_checkboxes = Math.trunc(width / 1000)

    if (number_true_checkboxes <= 30) {
        for (let i = 0; i < number_true_checkboxes; i++) {
            if (checkboxes[i+3].checked == false) {
                checkboxes[i+3].checked = true
                localStorage.setItem(checkboxes[i+3].value, checkboxes[i+3].checked);
            }
        }
    }

    // Showing precise progress when hovering over bar
    actual_progress = localStorage.getItem("width");
    bar.title = actual_progress + "/" + full_bar;
    exp_bar.title = actual_progress + "/" + full_bar;
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
    number_true_checkboxes = Math.trunc(width / 1000)

    if (number_true_checkboxes <= 30) {
        for (let i = 0; i < number_true_checkboxes; i++) {
            if (checkboxes[i+3].checked == false) {
                checkboxes[i+3].checked = true
                localStorage.setItem(checkboxes[i+3].value, checkboxes[i+3].checked);
            }
        }
    }

    // Showing precise progress when hovering over bar
    actual_progress = localStorage.getItem("width");
    bar.title = actual_progress + "/" + full_bar;
    exp_bar.title = actual_progress + "/" + full_bar;
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
    number_true_checkboxes = Math.trunc(width / 1000)

    if (number_true_checkboxes <= 30) {
        for (let i = 0; i < number_true_checkboxes; i++) {
            if (checkboxes[i+3].checked == false) {
                checkboxes[i+3].checked = true
                localStorage.setItem(checkboxes[i+3].value, checkboxes[i+3].checked);
            }
        }
    }

    // Showing precise progress when hovering over bar
    actual_progress = localStorage.getItem("width");
    bar.title = actual_progress + "/" + full_bar;
    exp_bar.title = actual_progress + "/" + full_bar;
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
    number_true_checkboxes = Math.trunc(width / 1000)

    if (number_true_checkboxes <= 30) {
        for (let i = 0; i < number_true_checkboxes; i++) {
            if (checkboxes[i+3].checked == false) {
                checkboxes[i+3].checked = true
                localStorage.setItem(checkboxes[i+3].value, checkboxes[i+3].checked);
            }
        }
    }

    // Showing precise progress when hovering over bar
    actual_progress = localStorage.getItem("width");
    bar.title = actual_progress + "/" + full_bar;
    exp_bar.title = actual_progress + "/" + full_bar;
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
    number_true_checkboxes = Math.trunc(width / 1000)

    if (number_true_checkboxes <= 30) {
        for (let i = 0; i < number_true_checkboxes; i++) {
            if (checkboxes[i+3].checked == false) {
                checkboxes[i+3].checked = true
                localStorage.setItem(checkboxes[i+3].value, checkboxes[i+3].checked);
            }
        }
    }

    // Showing precise progress when hovering over bar
    actual_progress = localStorage.getItem("width");
    bar.title = actual_progress + "/" + full_bar;
    exp_bar.title = actual_progress + "/" + full_bar;
}

// Showing saved data after reloading the browser
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

    // Day streak
    if (Number(localStorage.getItem('d_s')) !== null) {
        d_s.value = Number(localStorage.getItem('d_s'))
    }
}

function reset() {
    localStorage.clear()

    bar.style.width = "0%";
    for (j = 3; j < checkboxes.length; j++) {
        checkboxes[j].checked = false;
        localStorage.setItem(checkboxes[j].value, checkboxes[j].checked); 
    }

    // Reset progress shown when hovering over bar
    bar.title = 0 + "/" + full_bar;
    exp_bar.title = 0 + "/" + full_bar;

}

function cheat_day() {
    localStorage.setItem('c_d', c_d.value);
}

function day_streak() {
    localStorage.setItem('d_s', d_s.value);

    // If we reach some threshold, then mark the bonuses and change the exp gains
    if (d_s.value == 5) {
        checkboxes[2].checked = true;
        localStorage.setItem(checkboxes[2].value, checkboxes[2].checked)
    } else if (d_s.value == 10) {
        checkboxes[1].checked = true;
        localStorage.setItem(checkboxes[1].value, checkboxes[1].checked)
    } else if (d_s.value == 15) {
        checkboxes[0].checked = true;
        localStorage.setItem(checkboxes[0].value, checkboxes[0].checked)
    }
}

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

// If day is 1 (1-31 days) then reset it to 3 cheat days
function cheat_day_reset() {
    var today = new Date();
    var day = today.getDate();

    if (day == 1) {
        localStorage.setItem('c_d', 3);
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
