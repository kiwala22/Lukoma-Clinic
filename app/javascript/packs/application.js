// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("modernizr/modernizr.custom.js");

// require("@rails/ujs").start()
// //require("turbolinks").start()
// require("@rails/activestorage").start()
// require("channels")
//


import './datepicker'

// import './raphael'//rap def
import 'raphael'
// require('raphael')
import './morris'

require("./components/App");

$(document).ready(function() {
    $("#birth_date").datetimepicker({
        format: "YYYY-MM-DD"
    });
});

//--- Dynamic Fields For all forms ---//
// import "./dynamic_fields.js";


//--- Bootstrap
import 'bootstrap';

//--- PrintJS
import print from 'print-js';

import appInit from './angle/app.init.js';
document.addEventListener('DOMContentLoaded', appInit);

import graphDisplay from './graph.js.erb';
document.addEventListener('DOMContentLoaded', graphDisplay);
