// Github link:     


// Kilometer To Meter .
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000; // 1KM  = 1000 
    if (kilometer > 0) {
        return meter; // returning the function
    }
    else {
        return "Distance cannot be negative"; // negative value return
    }
}

var meter = kilometerToMeter(5); // Declare kilometerToMeter for finding the value
console.log(meter); // cloge the value

// Kilometer To Meter end .

// Budget Calculator .
function budgetCalculator(watch, mobile, laptop) {
    var watchAmount = watch * 50;
    var mobileAmount = mobile * 100;
    var laptopAmount = laptop * 500;
    var total = watchAmount + mobileAmount + laptopAmount;
    if (watch < 0 || mobile < 0 || laptop < 0) {
        
        return "Distance cannot be negative"; // negative value return
    } else {
        return total;
    }
}
var totalBudget = budgetCalculator(10, 7, 5); // Declare (Watch, Mobile, Lapptop) for finding the value 
console.log( totalBudget);
// Budget Calculator .

// Hotel Cost .
function hotelCost(days) {

     if (days < 0){
        return "Day is invalid." // negative value return
    } else{
        if (days <= 10) {
            var cost = days * 100;
        } else if (days <= 20) {
            var first = 10 * 100;
            var remaining = days - 10;
            var second = remaining * 80;
            var cost = first + second;
        }
        else {
            var first = 10 * 100;
            var second = 10 * 80;
            var remaining = days - 20;
            var third = remaining * 50;
            var cost = first + second + third;
        }
        return cost; // function value return
    }
}
var totalHotelCost = hotelCost(21); // Declare hotelCost for finding the value
console.log(totalHotelCost);
// Hotel Cost .


// megaFriend

var friends = ["Saiful Islam", "Mithun paul majumdar", "Robin", "Rayan Majumdar", "Tipu", "Nahid"];

function megaFriend(names) {
    var length = names[0].length;

    for(var i = 0; i < names.length; i++) {
        var element = names[i].length;

        if(element > length) {
            var length = names[i].length;
            var longest = names[i];
        }
    }
    return longest;
}

var bigName = megaFriend(friends);  // Declare bigName for finding the value
console.log(bigName); 