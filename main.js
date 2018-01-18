var coloron = '#32cc32';
var coloroff = '#cc3232';
var learn = false

function init(){
    $('#can1').drawLine({
        strokeStyle: '#000',
        strokeWidth: 2,
        rounded: false,
        endArrow: true,
        arrowRadius: 15,
        arrowAngle: 60,
        x1: 120, y1: 320,
        x2: 220, y2: 220
    }).drawLine({
        strokeStyle: '#000',
        strokeWidth: 2,
        rounded: false,
        endArrow: true,
        arrowRadius: 15,
        arrowAngle: 60,
        x1: 380, y1: 320,
        x2: 280, y2: 220
    }).drawLine({
        strokeStyle: '#000',
        strokeWidth: 2,
        rounded: false,
        endArrow: true,
        arrowRadius: 15,
        arrowAngle: 60,
        x1: 250, y1: 170,
        x2: 250, y2: 50
    });

    $('#can1').drawEllipse({
        fillStyle: '#0064B4',
        strokeStyle: '#000',
        x: 250, y: 200,
        width: 60, height: 60
    }).drawEllipse({
        fillStyle: '#0064B4',
        strokeStyle: '#000',
        x: 100, y: 340,
        width: 60, height: 60
    }).drawEllipse({
        fillStyle: '#0064B4',
        strokeStyle: '#000',
        x: 400, y: 340,
        width: 60, height: 60
    });


    $('#can1').drawRect({
        fillStyle: '#FAFAFA',
        x: 160, y: 275,
        width: 50,
        height: 25
    }).drawRect({
        fillStyle: '#FAFAFA',
        x: 340, y: 275,
        width: 50,
        height: 25
    });

    $('#can1').drawText({
        fillStyle: '#000',
        strokeWidth: 0,
        x: 80, y: 300,
        fontSize: 18,
        text: 'x1'
    }).drawText({
        fillStyle: '#000',
        strokeWidth: 0,
        x: 420, y: 300,
        fontSize: 18,
        text: 'x2'
    }).drawText({
        fillStyle: '#000',
        strokeWidth: 0,
        x: 135, y: 255,
        fontSize: 18,
        text: 'w1'
    }).drawText({
        fillStyle: '#000',
        strokeWidth: 0,
        x: 365, y: 255,
        fontSize: 18,
        text: 'w2'
    });

    /* coordinate system */
    $('#can2').drawLine({
        layer: true,
        name: 'line1',
        strokeStyle: '#000',
        strokeWidth: 2,
        rounded: false,
        endArrow: true,
        arrowRadius: 15,
        arrowAngle: 60,
        x1: 20, y1: 230,
        x2: 20, y2: 20
    }).drawLine({
        layer: true,
        name: 'line2',
        strokeStyle: '#000',
        strokeWidth: 2,
        rounded: false,
        endArrow: true,
        arrowRadius: 15,
        arrowAngle: 60,
        x1: 20, y1: 230,
        x2: 230, y2: 230
    });

    $('#can2').drawText({
        layer: true,
        name: 'text1',
        fillStyle: '#000',
        strokeWidth: 0,
        x: 5, y: 245,
        fontSize: 18,
        text: '0'
    }).drawText({
        layer: true,
        name: 'text2',
        fillStyle: '#000',
        strokeWidth: 0,
        x: 5, y: 50,
        fontSize: 18,
        text: '1'
    }).drawText({
        layer: true,
        name: 'text3',
        fillStyle: '#000',
        strokeWidth: 0,
        x: 200, y: 245,
        fontSize: 18,
        text: '1'
    }).drawText({
        layer: true,
        name: 'text4',
        fillStyle: '#000',
        strokeWidth: 0,
        x: 230, y: 245,
        fontSize: 18,
        text: 'x1'
    }).drawText({
        layer: true,
        name: 'text5',
        fillStyle: '#000',
        strokeWidth: 0,
        x: 10, y: 10,
        fontSize: 18,
        text: 'x2'
    });

     $('#can2').drawLine({
        layer: true,
        name: 'line3',
        strokeStyle: '#000',
        strokeWidth: 1,
        rounded: false,
        x1: 200, y1: 235,
        x2: 200, y2: 225
    }).drawLine({
        layer: true,
        name: 'line4',
        strokeStyle: '#000',
        strokeWidth: 1,
        rounded: false,
        x1: 30, y1: 235,
        x2: 30, y2: 225
    }).drawLine({
        layer: true,
        name: 'line5',
        strokeStyle: '#000',
        strokeWidth: 1,
        rounded: false,
        x1: 15, y1: 220,
        x2: 25, y2: 220
    }).drawLine({
        layer: true,
        name: 'line6',
        strokeStyle: '#000',
        strokeWidth: 1,
        rounded: false,
        x1: 15, y1: 50,
        x2: 25, y2: 50
    });

    $('#can2').drawEllipse({
        layer: true,
        name: 'point00',
        fillStyle: coloroff,
        x: 30, y: 220,
        width: 15, height: 15
    }).drawEllipse({
        layer: true,
        name: 'point01',
        fillStyle: coloroff,
        x: 30, y: 50,
        width: 15, height: 15
    }).drawEllipse({
        layer: true,
        name: 'point10',
        fillStyle: coloroff,
        x: 200, y: 220,
        width: 15, height: 15
    }).drawEllipse({
        layer: true,
        name: 'point11',
        fillStyle: coloroff,
        x: 200, y: 50,
        width: 15, height: 15
    });

    $('#can2').drawLine({
        layer: true,
        name: 'separationline',
        strokeStyle: '#000',
        strokeWidth: 1,
        rounded: false,
        x1: 0, y1: 125,
        x2: 250, y2: 125
    });
    
    $('#stop').prop('disabled', true);
}

function round(x,digits){
    digits = digits || 2;
    return Math.round (x * Math.pow(10, digits)) / Math.pow(10, digits);
}

function activation(v){
    if ($('#activationfunction').val() == 'clip'){
        if (v > 1){
            return 1;
        } else if (v < -1){
            return -1;
        } else{
            return v;
        }
    } else if ($('#activationfunction').val() == 'step'){
        if (v > 0){
            return 1;
        } else {
            return 0;
        }
    } else if ($('#activationfunction').val() == 'sigmoid'){
        return 1/(1+Math.exp(-v));
    }
}

function update(){
    var w1 = parseFloat($('#w1').val()) + $('#error').val() * $('#learningrate').val() * $('#inp1').val();
    $('#w1').val(round(w1));
    var w2 = parseFloat($('#w2').val()) + $('#error').val() * $('#learningrate').val() * $('#inp2').val();
    $('#w2').val(round(w2));
    $('#can2').setLayer('separationline', {
        y1: 250-250*0.5/w2,
        y2: 250-250*(0.5-w1)/w2
    }).drawLayers();
}

function present(j){
    row = $('#task tr:nth-child(' + (j+2) + ')');
    $('#inp1').val(row.find('.x1').text());
    $('#inp2').val(row.find('.x2').text());
    var v = $('#inp1').val() * $('#w1').val() + $('#inp2').val() * $('#w2').val();
    $('#v').val(round(v));
    var output = activation(v);
    $('#out').val(round(output));
    var goal = row.find('.y').text();
    $('#goal').val(goal);
    var error = goal-output;
    $('#error').val(round(error));
    update();
}

var run = function(i, j){
    $('progress').val(i);
    if (i < $('#iterationsteps').val() && learn === true){
        if (j < 4){
            present(j);
            j++;
        } else {
            j = 0;
            i++;
        }
        var delay = 2010 - $('#slider').slider('value')*10; /* deley between 10ms and 2000ms */
        window.setTimeout(function(){ run(i, j) }, delay);
    } else {
        $('#learn').prop('disabled', false);
        $('#stop').prop('disabled', true);
    }
}

$(document).ready(function() {
    init();

    $('#slider').slider({
        min: 1,
        max: 200,
        value: 100
    });
    $('.box').draggable();

    $('.y').on('click', function(){
        if ($(this).text() == '0'){
            $(this).text('1');
            $('#can2').setLayer($(this).attr('id'), {
                fillStyle: coloron
            }).drawLayers();
        } else {
            $(this).text('0');
            $('#can2').setLayer($(this).attr('id'), {
                fillStyle: coloroff
            }).drawLayers();
        }
    });

    $('#activationfunction').change(function() {
        if ($(this).val() == 'clip'){
            $('#afimage').html('<img src="clip.png" width="100" height="60" />');
        } else if ($(this).val() == 'step'){
            $('#afimage').html('<img src="step.png" width="100" height="60" />');
        } else if ($(this).val() == 'sigmoid'){
            $('#afimage').html('<img src="sigmoid.png" width="100" height="60" />');
        }
    });

    $('#learn').on('click', function(){
        $('#w1').val(0);
        $('#w2').val(0);
        $('#v').val(0);
        $('#error').val(0);
        $('#learn').prop('disabled', true);
        $('#stop').prop('disabled', false);
        $('#progress').html('<progress value="0" max="'+$('#iterationsteps').val()+'"></progress>');
        learn = true
        run(0, 0);
    });
    
    $('#stop').on('click', function(){
        learn = false;
        $('#learn').prop('disabled', false);
        $('#stop').prop('disabled', true);
    });    
    

    $('#test').on('click', function(){
        $('#testresult').html('<table><tr><th>x<sub>1</th><th>x<sub>2</th><th>d</th><th>y</th><th>error</th></tr></table>');
        mse = 0;
        for(var j=2;j <= $('#task').find('tr').length; j++){
            row = $('#task tr:nth-child(' + j + ')');
            var v = row.find('.x1').text() * $('#w1').val() + row.find('.x2').text() * $('#w2').val();
            var output = activation(v);
            var goal = row.find('.y').text();
            var error = goal-output;
            mse += error*error
            $('#testresult table tr:last').after('<tr><td>' + row.find('.x1').text() +'</td><td>' + row.find('.x2').text() + '</td><td> ' + goal + '</td><td>' + round(output) + '</td><td>' + round(error) +'</td></tr>');
        }
        mse /= 4.
        $('#testresult table tr:last').after('<tr><td colspan="4" style="text-align:right;">mean squared error:</td><td>' + round(mse,3) + '</td><tr>');
    });
});