// console.log(2>1);
//console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

console.log("2">1);
console.log("02">1);

console.log(null > 0);
console.log(undefined == 0);
console.log(null >= 0);

//the reason is that an equality check == and comparision >< >= <=
 // work diffently
 //comparision convert null to a number , treating it as 0.
// thatswhy (3) null >= 0 is true and null>0 is false.

// comparion of values ,not type(= =)
console.log( 1=='1');
console.log(0=='');
console.log(0== false)
console.log(null== undefined );

// comparsion of valuse ans type also (= = =)
console.log( 1==='1');
console.log(0==='');
console.log(0=== false)
console.log(null=== undefined );
console.log("123"=== false)
