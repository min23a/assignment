

//1. kilometerToMeter
 
function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    //check if the value is negative
    if (meter <= -1){
        return "Measuring units Can't be Negative";
    }
    //checks the vaule if it's 0
    else if(meter == 0){
        return 0;
     }
     //result in  meter unit
    else{
        return meter;
    }
}
var result = kilometerToMeter(-1);
console.log(result);

//2. budgetCalculator

function budgetCalculator(clock, mobile, laptop){
    var total = clock*50 + mobile*100 + laptop*500;
    //checks if any quantity is negative
    if (clock <= -1 || mobile <= -1 || laptop <= -1){
        return "Quantity can't be negative";
    }
    else if (clock == 0 && mobile == 0 && laptop == 0){
        return "Please Buy something"
    }
    //give the total cost
    else{
        return total;
    }
}
var totalBudget = budgetCalculator(0,0,0);
console.log(totalBudget);

//3. hotelCost

function hotelCost(days){
    var cost = 0;
    if (days <= -1){
        return "Days can't have Negative value"
    }
    else if(days == 0){
        return "Please input value of days you wnat to stay > 0"
    }
    else{
        // 10 days cost.
        if(days <= 10){
            cost = days*100;
            return cost;
        }
        // 20 days cost.
        else if(days <= 20){
            var begining10Days = 10 * 100;
            var inHand = days - 10;
            var after10Days = inHand * 80;
             cost = begining10Days + after10Days;
            return cost;
        }
        // cost of days > 20 
        else{
            var after20DaysCost = 10 * 100 + 10 * 80;
            var remainingDays = days - 20;
            var remainingcost = remainingDays*50;
            Cost = after20DaysCost + remainingcost;
            return Cost;
        }
    }
}
var totalHotelCost = hotelCost(0);
console.log(totalHotelCost);

// megaFriend

function megaFriend(names){
    //check's if it is a single named
    if (names.length <= 1){
        return "Please enter 2 or more names in the array to compare";
    }
    //gives the result
    else{
        var bigger = names[0];
        for (var i = 0 ; i < names.length; i++){
            var biggest = names[i];;
            if (biggest.length > bigger.length){
                bigger = biggest;
            }
        }
        return bigger;
    }
}
var biggerName = megaFriend([""]);
console.log(biggerName);

