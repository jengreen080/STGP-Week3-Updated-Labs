let age = 10;

if (age <= 17) {
    console.log("Underage");
} else if (age >= 18 && age <= 65) {
    console.log("Insurable");
} else {
    console.log("out of range");
}


let age2 = 80;

output = 
    age2 < 18 ? "Underage" : age2 > 65 ? "Out of range" : "Insurable";
console.log(output);




