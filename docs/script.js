//-------Initialization of all needed variables for the progressbar-------
var checkboxes = document.querySelectorAll('input[type=checkbox]'); //array-like object
var full_bar = 30000;
var m_h = 100;
var s_h = 70;
var threshold = 1000;
var multiplicator = 1;
var bar = document.getElementById("bar");
var exp_bar = document.getElementById("exp-bar");

load_data()

// Showing precise progress when hovering over bar
actual_progress = localStorage.getItem("width");
bar.title = actual_progress + "/" + full_bar;
exp_bar.title = actual_progress + "/" + full_bar;

//-------All needed functions-------
// Getting right width for the functions below
function right_width() {
    if (localStorage.getItem("width_trigger") == null) {
        console.log(localStorage.getItem("width_trigger"));
        // have to save the width_trigger to 1, if we close/reload the browser
        localStorage.setItem("width_trigger",1);

        // Initialization of width value
        localStorage.setItem("width",0);
        return Number(localStorage.getItem("width"));
    } else {
        return Number(localStorage.getItem("width"));
    }
}

function right_threshold() {
    if (localStorage.getItem("threshold_trigger") == null) {
        localStorage.setItem("threshold_trigger",1);

        // Initialization of threshold values
        localStorage.setItem("threshold",1000);
        localStorage.setItem("i",0);
        return [Number(localStorage.getItem("threshold")), Number(localStorage.getItem("i"))];
    } else {
        return [Number(localStorage.getItem("threshold")), Number(localStorage.getItem("i"))];
    }
}

//Main habit
function main_habit() {

    width = right_width();
    
    if (width != full_bar) {
        // Progressbar
        if (width < full_bar - m_h){
            width = width + m_h;
            w = width * 100 / full_bar;
            bar.style.width = w + "%";
        } else if (full_bar - m_h <= width < full_bar) {
            width = full_bar;
            w = width * 100 / full_bar;
            bar.style.width = w + "%";
        }
    
        localStorage.setItem("width",width);

        //Interaction between progressbar and checkboxes
        [t, i] = right_threshold();
        if (width >= t) {
            checkboxes[i].checked = true;

            // Save checkboxes
            localStorage.setItem(checkboxes[i].value, checkboxes[i].checked);
            
            // Save next threshold
            t = t + threshold;
            localStorage.setItem("threshold",t);

            i = i + 1;
            localStorage.setItem("i",i);
        }
    }

    // Showing precise progress when hovering over bar
    actual_progress = localStorage.getItem("width");
    bar.title = actual_progress + "/" + full_bar;
    exp_bar.title = actual_progress + "/" + full_bar;
}

function main_habit_3x() {

    width = right_width();

    if (width != full_bar) {
        if (width < full_bar - 3 * m_h){
            width = width + 3 * m_h;
            w = width * 100 / full_bar;
            bar.style.width = w + "%";
        } else if (full_bar - 3 * m_h <= width < full_bar) {
            width = full_bar;
            w = width * 100 / full_bar;
            bar.style.width = w + "%";
        }

        localStorage.setItem("width",width);

        //Interaction between progressbar and checkboxes
        [t, i] = right_threshold();
        if (width >= t) {
            checkboxes[i].checked = true;

            // Save checkboxes
            localStorage.setItem(checkboxes[i].value, checkboxes[i].checked);
            
            // Save next threshold
            t = t + threshold;
            localStorage.setItem("threshold",t);

            i = i + 1;
            localStorage.setItem("i",i);
        }
    }

    
    // Showing precise progress when hovering over bar
    actual_progress = localStorage.getItem("width");
    bar.title = actual_progress + "/" + full_bar;
    exp_bar.title = actual_progress + "/" + full_bar;
}

function sub_habit() {

    width = right_width();

    if (width != full_bar) {
        if (width < full_bar - s_h){
            width = width + s_h;
            w = width * 100 / full_bar;
            bar.style.width = w + "%";
        } else if (full_bar - s_h <= width < full_bar) {
            width = full_bar;
            w = width * 100 / full_bar;
            bar.style.width = w + "%";
        }

        localStorage.setItem("width",width);

        //Interaction between progressbar and checkboxes
        [t, i] = right_threshold();
        if (width >= t) {
            checkboxes[i].checked = true;

            // Save checkboxes
            localStorage.setItem(checkboxes[i].value, checkboxes[i].checked);
            
            // Save next threshold
            t = t + threshold;
            localStorage.setItem("threshold",t);

            i = i + 1;
            localStorage.setItem("i",i);
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
    bar.style.width = w + "%";

    // Checkboxes
    for (j = 0; j < checkboxes.length; j++) {
        checkboxes[j].checked = localStorage.getItem(checkboxes[j].value) === 'true' ? true:false;
    }
}

function reset() {
    localStorage.clear()

    bar.style.width = "0%";
    for (j = 0; j < checkboxes.length; j++) {
        checkboxes[j].checked = false;
        localStorage.setItem(checkboxes[j].value, checkboxes[j].checked); 
    }
}
