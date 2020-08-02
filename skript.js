// 1.
/* В данном случае ++ меняло переменные по ходу действии, в следствии чего их значения изменились на 3 */

// 2.
/* var a = 2;
var x = 1 + (a *= 2); 
В данном случае x = 5, так как a меняет свое значение на 4 */


// 3.
var a = parseInt(prompt('Введите число a',''));
var b = parseInt(prompt('Введите число b',''));

if (a >= 0 && b >= 0) {
   document.write(a - b);
} else if(a <= 0 && b <= 0) {
   document.write(a * b);
} else {
   document.write(a * b) 
}

var a = parseInt(prompt('Ввелите число от 1 до 15', ''))

// 4.
switch (a) {
    case a=1:
    alert(1);
    break;
case a=2:
    alert(2);
    break;
case a=3:
    alert(3);
    break;
case a=4:
    alert(4);
    break;
 case a=5:
    alert(5);
    break;
 case a=6:
    alert(6);
    break;
 case a=7:
    alert(7);
    break;
 case a=8:
    alert(8);
    break;
 case a=9:
    alert(9);
    break;
 case a=10:
    alert(10);
    break;
 case a=11:
    alert(11);
    break;
 case a=12:
    alert(12);
    break;
 case a=13:
    alert(13);
    break;
 case a=13:
    alert(13);
    break;
 case a=14:
    alert(14);
    break;
 case a=15:
    alert(15);
    break;
}

// 5.
function sum(c, d) {
    return c + d
}
num = sum(10, 11);
alert(num);

function minus(c, d) {
    return c - d
}
num = minus(10, 11);
alert(num);

function multip(c, d) {
    return c * d
}
num = multip(10, 11);
alert(num);

function part(c, d) {
    return c / d
}
num = part(10, 11);
alert(num);

// 6.
function mathOp (arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return arg1 + arg2;
            break;
        case "-":
            return arg1 - arg2;
            break;
        case "*":
            return arg1 * arg2;
            break;
        case "/":
            return arg1 / arg2;
            break;
    }
}
var all1 = mathOp (10, 11, "+");
var all2 = mathOp (10, 11, "-");
var all3 = mathOp (10, 11, "*");
var all4 = mathOp (10, 11, "/");
alert(all1);
alert(all2);
alert(all3);
alert(all4);

// 7.
/* Сравнение null и 0.
В данном случае есть три сравнения:
null > 0; // false
null == 0; // false
null >= 0; // true
Просмотрев инетресную статью по данной теме, я понял что в первых двух случаях все проходит по
абстрактному алгоритму сравнений (в первом примере 0 не больше, или не меньше 0, во втором алгоритм
состоит из 22 пунктов вычисления данной операции и происходит пункт 1, 14 и 22 в результате которого
выдается false). В третьем пункте автор статьи сослася на чистую математику котороя есть в JS для
того что бы ему было проще вычеслять, то есть 0 не больше 0, но он ему равен. В общем сложноватая тема,
но после прочтения статьи я понял =) */


// 8.
function step(val, pow) {
  if (pow == 1) {
    return val;
  } else {
    return val * step(val, pow - 1);
  }
}

alert( step(3, 3))