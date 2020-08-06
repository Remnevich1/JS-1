// 1.
var prost = 1;
var prostArr = [];

while (prost <= 100) {
    if (prost == 1) {
        prostArr.push(1);
    } else {
        var result = 2;
        var i = 2;
        while (prost % i !== 0) {
            i++;
            result++;
        }
        if (result == prost) {
            prostArr.push(result)
        }
    }
    prost++;
}

console.log(prostArr);

// 2.3.
var items = [["shoes", 30, "Euro"], ["jacket", 70, "Euro"], ["t-shirt", 10, "Euro"], ["polo", 20, "Euro"]];

function countBasketPrice (items) {
    var sum = 0;
    var output;
    for (i = 0; i < items.length; i++) {
        sum = sum + items[i][1];
        output = "You bought " + items[i][0] + " price: " + items[i][1] + " " + items[i][2];
        console.log(output);
    }
    return sum;
}

console.log("Your total price: " + countBasketPrice (items) + " Euro");

//4. 
for(i = 0; i < 9; i++, console.log(i)) {}

//5. 

var end = 0;
var endArr = [];

while(end < 20) {
    end++;
    endArr.push("x");
    console.log(endArr);
}