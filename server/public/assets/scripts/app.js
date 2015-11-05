var calcObject = {};

$(document).ready(function(){
    enableButtons();
});

function enableButtons() {
    $("#add").on('click', addOperation);
    $("#subtract").on('click', subtractOperation);
    $("#multiply").on('click', multiplyOperation);
    $("#divide").on('click', divideOperation);
    $("#submit").on('click', settingValues);
    $('#clear').on('click', clearAll);
}

function addOperation () {
    calcObject.type = "add";
    console.log("add");
        }
function subtractOperation () {
    calcObject.type = "subtract";
    console.log("subtract");
}
function multiplyOperation () {
    calcObject.type = "multiply";
    console.log("multiply");
}
function divideOperation () {
    calcObject.type = "divide";
    console.log("divide");
}

function settingValues () {
    calcObject.x = $('#valueInput1').val();
    calcObject.y = $('#valueInput2').val();
    callAjax();

}

function callAjax(){
    $.ajax({
        type: "POST",
        url: "/data",
        data: calcObject,
        success: function(data){
            displayResults(data);
        }
    });
}

function displayResults(data) {
    console.log(data.result);
    $('#results').text("Result: " + data.result);
}

function clearAll(){
    $('#results').empty();
    calcObject = {};
    $('#inputForm').each(function(){
        this.reset();
    });
}