//--- Dynamic fields
$(function() {

    var template = "<textarea class='form-control' rows='3' name='diagnosis[diagnosis][valueINDEX]'></textarea> <br>",
        index = $('textarea').length,
        compiled_template;

    $('#js-add-question-row').click(function() {
        var compiled_textarea = $(template.replace("INDEX", index));
        $('#my_fields').append(compiled_textarea);
        index = index + 1;
    });
});

$(function() {

    var template = "<textarea class='form-control' rows='3' name='result[results][valueINDEX]'></textarea> <br>",
        index = $('textarea').length,
        compiled_template;

    $('#js-add-results-row').click(function() {
        var compiled_textarea = $(template.replace("INDEX", index));
        $('#my_fields').append(compiled_textarea);
        index = index + 1;
    });
});

$(function() {

    var template = "<textarea class='form-control' rows='3' name='prescription[prescription][valueINDEX]'></textarea> <br>",
        index = $('textarea').length,
        compiled_template;

    $('#js-add-prescription-row').click(function() {
        var compiled_textarea = $(template.replace("INDEX", index));
        $('#my_fields').append(compiled_textarea);
        index = index + 1;
    });
});
