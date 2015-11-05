/**
 * Created by paigewalters on 11/1/15.
 */
var calculateNumbers = function(object) {

    if (object.type === "add") {
        var result = (parseInt(object.x) + parseInt(object.y));
        console.log("this is addition: " + result);
        return result;
    } else if (object.type === "subtract") {
        var result = (object.x - object.y);
        console.log("this is subtraction: " + result);
        return result;
    } else if (object.type === "multiply") {
        var result = (object.x * object.y);
        console.log("this is multiplication: " + result);
        return (result);
    } else if (object.type === "divide") {
        var result = parseInt((object.x) / parseInt(object.y));
        console.log("this is division: " + result);
        return (result);

    }else{
        alert("Error! Click an operation Please :)");
    }
};
module.exports = calculateNumbers;