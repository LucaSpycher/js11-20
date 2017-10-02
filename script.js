/* Luca Spycher
 * Javascript Problems 11-20
 * September 29, 2017
 */

function firstLast6(a) {
    if(a[0] == 6 || a[a.length - 1] == 6) {
        return true;
    }else{
        return false;
    }
}

function has23(a) {
    if(a[0] == 2 || a[1] == 2) {
        return true;
    }else if(a[0] == 3 || a[1] == 3) {
        return true;
    }else{
        return false;
    }
}

function fix23(a) {
    if(a[0] == 2) {
        if(a[1] == 3) {
            a[1] = 0;
        }
    }
    if(a[1] == 2) {
        if(a[2] == 3) {
            a[2] = 0;
        }
    }
    return a;
}

function countYZ(string) {
    string = string.toLowerCase();
    var count = 0;
    var strLength = string.length;

    for(var i = 0; i < strLength; i++) {
        if(string.substring(i, i+1) == " ") {
            if(string.substring(i-1, i) == "y" || string.substring(i-1, i) == "z") {
                count++;
            }
        }
    }
    if(string.substring(strLength-1, strLength) == "y" || string.substring(strLength-1, strLength) == "z") {
        count++;
    }

    return count;
}

function endOther(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    var aLen = a.length;
    var bLen = b.length;

    if(a.substring(aLen - bLen, aLen) == b) {
        return true;
    }else if(b.substring(bLen - aLen, bLen) == a) {
        return true;
    }else{
        return false;
    }
}

function starOut(string) {
    var newString = "";

    for(var i = 0; i < string.length; i++) {
        var charLeft = string[i-1];
        var currentChar = string[i];
        var charRight = string[i+1];
        if(!(charLeft == "*" || currentChar == "*" || charRight == "*")) {
            newString += currentChar;
        }
    }

    return newString;
}

function getSandwich(str) {
    var strLow = str.toLowerCase();
    //var newString = "";
    var breadIndex1 = 0;
    var breadIndex2 = 0;
    for(var i = 0; i < str.length; i++) {
        if(strLow.substring(i, i + 5) == "bread" ) {
            breadIndex1 = i + 5;
            break;
        }
    }
    for(var l = str.length; l > breadIndex1; l--) {
        if(strLow.substring(l - 5, l) == "bread" && l - 5 > breadIndex1) {
            breadIndex2 = l - 5;
            break;
        }
    }

    if(breadIndex1 > 0 && breadIndex2 > 0) {
        return str.substring(breadIndex1, breadIndex2);
    }else{
        return "";
    }
}

function canBalance(array) {
    var len = array.length;
    for(var i = 0; i < len; i++) {
        var left = 0;
        var right = 0;
        for(var l = 0; l < i; l++) {
            left += array[l];
        }
        for(var k = i; k < len; k++) {
            right += array[k];
        }
        if(left == right) {
            return true;
        }
    }
    return false;
}

function countClumps(array) {
    var count = 0;
    for(var i = 0; i < array.length; i++) {
        if(array[i] == array[i + 1]) {
            var l = i + 1;
            while(array[i] == array[l]) {
                l++;
            }
            i = l - 1;
            count ++;
        }
    }
    return count;
}

function evenlySpaced(a, b, c) {
    if(a == b && b == c) {
        return true;
    }
    var small = 0;
    var med = 0;
    var large = 0;
    if(a < b && a < c) {
        small = a;
    }else if((a > b && a < c) || (a < b && a > c)) {
        med = a;
    }else{
        large = a;
    }
    if(b < a && b < c) {
        small = b;
    }else if((b > a && b < c) || (b < a && b > c)) {
        med = b;
    }else {
        large = b;
    }
    if(small == 0) {
        small = c;
    }else if(med == 0) {
        med = c;
    }else{
        large = c;
    }

    if(large - med == med - small) {
        return true;
    }else{
        return false;
    }

}

//////////////////////  TESTER  ///////////////////////////

function tester() {
    document.getElementById("output1").innerHTML = firstLast6([2, 1, 4, 6]);
    document.getElementById("output2").innerHTML = has23([2,1]);
    document.getElementById("output3").innerHTML = fix23([2, 4, 5]);
    document.getElementById("output4").innerHTML = countYZ("DAY asz KKKKllljjz ZZ");
    document.getElementById("output5").innerHTML = endOther("213", "13");
    document.getElementById("output6").innerHTML = starOut("Lu*luc*uca*ca");
    document.getElementById("output7").innerHTML = getSandwich("012Bread8ssbread;da");
    document.getElementById("output8").innerHTML = canBalance([1, 2, 2, 1, 4]);
    document.getElementById("output9").innerHTML = countClumps([0,0,0,0,1,1,2]);
    document.getElementById("output10").innerHTML = evenlySpaced(2, 4, 7);
}


