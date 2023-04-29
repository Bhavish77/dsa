function addStringsRe(string1, string2, p1, p2, ansarr, carry){
//base
if(p1 < 0 && p2 < 0){
    if(carry !== 0){
     ansarr.push(String(carry));
    }
return;

}


//1 case
const n1 = parseInt(p1 >=0 ? string1[p1] : "0");
const n2 = parseInt(p2 >=0 ? string2[p2] : "0");
const sum = n1 + n2 + carry;
const digit = Math.trunc(sum % 10);
carry = Math.trunc(sum / 10);
ansarr.push(String(digit));

//rr
addStringsRe(string1, string2, p1 - 1, p2 - 1, ansarr, carry);


}




const string1 = "123";
const string2 = "123";
const p1 = string1.length - 1;
const p2 = string2.length - 1;
ansarr = [];
let carry = 0;
addStringsRe(string1, string2, p1, p2, ansarr, carry);
ansarr.reverse();
console.log(ansarr);
