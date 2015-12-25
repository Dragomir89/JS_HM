var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var map = {};

var finalValue = 0;
var finalElement = '';
for (variable in arr) {

    if (map[arr[variable]] != undefined) {

        if (++map[arr[variable]] > finalValue){
            finalValue = map[arr[variable]];
            finalElement = arr[variable];
        }


    } else {

        map[arr[variable]] = 1;

    }
}

console.log(finalValue + ' --> ' + finalElement);










