

//kilometerToMeter
 
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

//budgetCalculator

function budgetCalculator(clock, mobile, laptop){
    var total = clock*50 + mobile*100 + laptop*500;
    //checks if any quantity is negative
    if (clock <= -1 || mobile <= -1 || laptop <= -1){
        return "Quantity can't be negative";
    }
    else{
        return total;
    }
}
var totalBudget = budgetCalculator(1,0,1);
console.log(totalBudget);

//hotelCost

function hotelCost(days){
    var cost = 0;
    if (days <= -1){
        return "Days can't have Negative value"
    }
    else if(days == 0){
        return "Please input value of days > 0"
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
        //cost of days > 20 
        else{
            var after20DaysCost = 10 * 100 + 10 * 80;
            var remainingDays = days - 20;
            var remainingcost = remainingDays*50;
            Cost = after20DaysCost + remainingcost;
            return Cost;
        }
    }
}
var totalHotelCost = hotelCost(122);
console.log(totalHotelCost);