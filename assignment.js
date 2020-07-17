
/*==================footToMile start from here========================*/

function feetToMile(feet){
    if(0 <= feet){
       var mile = feet/5280;
       return mile;
    }
    else{
        return "please enter the positive number"
    }
   }

   var mileResult = feetToMile(5);
   console.log("mile=", mileResult);



   
/*============woodCalculator start from here===========================*/

function woodCalculator (chair, table, bed) {
    if (0 <= chair) {
        var chairWood = (chair * 1);
        if (0 <= table){
            var tableWood = (table * 3);
            if (0 <= bed){
                var bedWood = (bed * 5);
                var total = (chairWood + tableWood + bedWood);
                return total;
            }
            else {
                return "Please Enter the positive number"
            }
        }
        else {
            return "Please Enter the positive number"
        }
    }
    else {
        return "Please Enter the positive number"
    }
}

var totalWood = woodCalculator(1, 1, 1);
console.log(totalWood);




/*==========================brickCalculator started from here====================*/ 

function brickCalculator(heightOfBuilding){
    var perFeetBrick = 1000;
    if(heightOfBuilding > 0 && heightOfBuilding <= 10){
        var totalFeet = (heightOfBuilding * 15);
        var totalBrick = (totalFeet * perFeetBrick);
        return totalBrick;
    }
    else if(heightOfBuilding > 10 && heightOfBuilding <= 20){
        var zeroToTen = 10 * 15 * perFeetBrick;
        var extraHeight = heightOfBuilding - 10;
        var extraBrick =  extraHeight * 12 * perFeetBrick;
        var totalBrick = extraBrick + zeroToTen;
        return totalBrick;
    }
    else if(heightOfBuilding > 20){
        var zeroToTen = 10 * 15 * perFeetBrick;
        var elevenToTwenty = 10 * 12 * perFeetBrick;
        var extraHeight = heightOfBuilding - 20;
        var extraBrick = extraHeight * 10 *perFeetBrick;
        var totalBrick = extraBrick + zeroToTen + elevenToTwenty;
        return totalBrick;
    }
    else{
        return "please type the positive number";
    }
}

var totalAllBrick = brickCalculator(25);
console.log(totalAllBrick);




/*===========================tinyFriend started from here=======================*/
function tinyFriend(name){
    var smallName = name[0];
    for(var i=0; i < name.length; i++){
        var currentName = name[i];
        if(currentName.length<smallName.length){
            smallName = currentName;
        }
    }
    return smallName;
}

var smallNameOfLength = tinyFriend(["kalalm", "asma", "alomgir", "billal"]);
console.log(smallNameOfLength);