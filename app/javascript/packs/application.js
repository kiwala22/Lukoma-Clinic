// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("modernizr/modernizr.custom.js");

// require("@rails/ujs").start()
// //require("turbolinks").start()
// require("@rails/activestorage").start()
// require("channels")
import "./patients_analytics.js.erb";
import './datepicker'

$(document).ready(function() {
    $("#birth_date").datetimepicker({
        format: "YYYY-MM-DD"
    });
});

//--- Dynamic fields
$(function() {

    var template = "<textarea class='form-control' name='diagnosis[diagnosis][valueINDEX]'></textarea> <br>",
        index = $('textarea').length,
        compiled_template;

    $('#js-add-question-row').click(function() {
        var compiled_textarea = $(template.replace("INDEX", index));
        $('#my_fields').append(compiled_textarea);
        index = index + 1;
    });
});
//--- Bootstrap
import 'bootstrap';

import appInit from './angle/app.init.js';
document.addEventListener('DOMContentLoaded', appInit);
