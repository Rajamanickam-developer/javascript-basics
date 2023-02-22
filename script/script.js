// let country = "India";
// let continent = "Asia";              
// let population = "200 Billian";
// console.log(country)
// console.log(continent)
// console.log(population)

// Data Types -- let, const and var
  
// const language = "Tamil";
// let country = "India";
// let continent = "Asia";
// var population = 600;
// let finLand = 200;
// let averagePopulation = 3300;
// let isRaining = true;
// const description = country + " is in " + continent + " , and its " + population + " million people speak " + language;

// console.log(typeof language);
// console.log(typeof country);
// console.log(typeof state);
// console.log(typeof isRaining);
// console.log(typeof population);

// console.log(population/2);
// console.log(population + 1);        //Basic Operators
// console.log(population > finLand);
// console.log(averagePopulation < population);
// console.log(description);


// coding challenge in BMI calculation

// let markMass = 78;
// let johnMass = 95;

// let markHeight =1.69;               
// let johnHeight =1.88;

// let markBMI = markMass / markHeight **2;
// let johnBMI = johnMass / (johnHeight*johnHeight);

// let higherBMI = markBMI > johnBMI;

// console.log("Mark Weight :",markMass);
// console.log("Mark Height :",markHeight);
// console.log("John Weight :",johnMass);
// console.log("John Height :",johnHeight);

// console.log("MarkBMI :",markBMI);
// console.log("JohnBMI :",johnBMI);
// console.log("Mark is Higher BMI compared to John :",higherBMI);


// //String and Template Literals
// const descriptionOne = `"${country} is in ${continent}, and its ${population} people speak ${language}"`

// console.log(descriptionOne);


// Taking Decisions: if / else Statements

// let country = "India";
// let continent = "Asia";
// var population = 40;
// let averagePopulation = 33;
// let average = averagePopulation - population;

// if(population > averagePopulation){
//   console.log(`${continent} population is above average`);
// }else{
//   console.log(`${continent} population is ${average} million below average`);
// }

// coding challenge in BMI checking

// let markMass = 68;
// let johnMass = 75;

// let markHeight =1.69;               
// let johnHeight =1.88;

// let markBMI = markMass / markHeight **2;
// let johnBMI = johnMass / (johnHeight*johnHeight);

// console.log("MarkBMI :",markBMI);
// console.log("JohnBMI :",johnBMI);

// if(markBMI > johnBMI){
//   console.log(`Mark's BMI is higher than john's!`);
// }else{
//   console.log(`John's is higher than Mark's!`);
// }

// //challenge to be explained in BMI values and using toFixed value
// if(markBMI > johnBMI){
//   console.log(`Mark's BMI ${markBMI.toFixed(2)} is higher than john's ${johnBMI.toFixed(2)}!`);
// }else{
//   console.log(`John's ${johnBMI.toFixed(2)} is higher than Mark's ${markBMI.toFixed(2)}!`);
// }


//Type Conversion and Coercion

// console.log('9' - '5'); // -> 4
// console.log('19' - '13' + '17'); // -> '617'
// console.log('19' - '13' + 17); // -> 23
// console.log('123' < 57); // -> false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143


//Equality Operators: == vs. ===

// var numNeighbours = prompt('How many neighbour countries does your country have?'); 
    //== in JavaScript is used for comparing two variables, but it ignores the datatype of variable
    //=== is used for comparing two variables, but this operator also checks datatype and compares two values
    //Strictly equal ===


// if(numNeighbours == 1){
//   //input number is equal than 1 output is only one border
//   console.log('Only one border'); 
//   //input is grater than 1 output is shown by more than 1 border    
// }else if(numNeighbours > 1){           
//   console.log("More than 1 border"); 
//   //input is less than 1(0) the output is no border       
// }else{                                  
//   console.log("No border");
// }


//Logical Operators
// 1. Comment out the previous code so the prompt does not get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an island.
// 3. Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: *'You should live in Portugal :)'*. If not, log *'Portugal does not meet your criteria :('*
// 5. Probably, your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada: D)

// const language = "English";
// let country = "India";
// let continent = "Asia";
// var population = 49;
// let isIsland = false;     

// if(language == "English" && population < 50 && !isIsland){
//   console.log(`You should live in ${country} :)`);
// }else{
//   console.log(`${country} does not meet your criteria :()`);
// }


// const teamDolphins = [96, 108, 89];
// const teamKoalas = [88, 91, 110];
// let totalScore = 0;
// for (let i = 0; i < teamDolphins.length; i++) {
//   totalScore += teamDolphins[i];
// }
// console.log("Total Team Score is :", totalScore);

// let teamDolphinsScore = teamDolphins;
// console.log(teamDolphinsScore);
// let teamScroes = ;
// let averageScore = 100;

// if(averageScore < )



//coding challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

// const dolphinsAverageGymnasticsScore = (80+80+100)/3;
// const koalasAvarageGymnasticsScore = (180+90+110)/3;
// console.log(dolphinsAverageGymnasticsScore, koalasAvarageGymnasticsScore);

// if(dolphinsAverageGymnasticsScore > koalasAvarageGymnasticsScore && dolphinsAverageGymnasticsScore >= 100){
//     console.log(`Dolphins(${dolphinsAverageGymnasticsScore.toFixed(0)}) wins tha match`);
// }else if(dolphinsAverageGymnasticsScore < koalasAvarageGymnasticsScore && koalasAvarageGymnasticsScore >= 100){
//     console.log(`Koalas(${dolphinsAverageGymnasticsScore.toFixed(0)}) wins tha match`);
// }else if(dolphinsAverageGymnasticsScore === koalasAvarageGymnasticsScore && dolphinsAverageGymnasticsScore >= 100 & koalasAvarageGymnasticsScore >=100){
//     console.log(`Draw the match`);
// }else{
//     console.log(`No teams win the trophy!`);
// }


// The switch Statement

// const language = prompt("Enter your language");
// switch(language){
//     case "Chinese":
//     case "Mandarin":
//         console.log(`MOST number of native speakers!`);
//         break;
//     case "Spanish":
//         console.log(`2nd place in the number of native speakers`);
//         break;
//     case "English":
//         console.log(`3rd place in the number of native speakers`);
//         break;
//     case "Hindi":
//         console.log(`4th place in the number of native speakers`);
//         break;
//     case "Arabic":
//         console.log(`5th place in the number of native speakers`);
//         break;
//     default:
//         console.log(`${language} is not top 5 list`);
// }


//The Conditional (Ternary) Operator

// let country = "India";
// let population = 35;

// if( population > 13){
//     console.log(`Portugal's population is above average'`);
// }else{
//     console.log(`Portugal's population is below average'`);
// }

//ternary operator

// population > 33 ? console.log(`Portugal's population is above average'`) : console.log(`Portugal's population is below average'`);

// console.log(
//     `${country}'s population is ${population > 33 ? 'above' :
//     'below'} average`,
//     );

//coding challenger #4

// const bill = 200;
// let tip = 0;

// if(bill >= 50 && bill <= 300){
//     console.log(bill * 0.15);
// }else {
//     console.log(bill * 0.2);
// }

// if(tip >=50 && tip <= 300){
//     console.log(tip * 0.15);
// }
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);



// const bill1 = 200;
// const tip1 = bill1 <= 300 && bill1 >= 50 ? bill1 * 0.15 : bill1 * 0.2;
// console.log(`The bill was ${bill1}, the tip was ${tip1}, and the total value ${bill1 + tip1}`);


//Functions

/*function describeCountry(country,population,capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

console.log(describeCountry("portugal",10,"Lisbon"));
console.log(describeCountry("India",60,"New Delhi"));
console.log(describeCountry("Japan",20,"Tokyo"));
*/


//Function Declarations vs. Expressions

// function populationPercentage(population){
//     return (population / 7900)* 100;
// }
// console.log(populationPercentage(2000));
// console.log(populationPercentage(5000));
// console.log(populationPercentage(7000));


//Functions Calling Other Functions
// Workout solution
// function percentageOfWorld1(population){
//     return (population / 7900) *100;
// }
// function percentageOfWorld2(country,population){
//     return `${country} has ${population} million people, so it's about ${percentageOfWorld1(population).toFixed(0)}% of the world population`
// }
// console.log(percentageOfWorld2("India", 1000));
// console.log(percentageOfWorld2("Japan", 600));
// console.log(percentageOfWorld2("Portugal", 300));


//Solution
// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
//     }
//     const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100;
//     };
//     const percPortugal1 = percentageOfWorld1(10);
//     const percChina1 = percentageOfWorld1(1441);
//     const percUSA1 = percentageOfWorld1(332);
//     console.log(percPortugal1, percChina1, percUSA1);

//rough use
// const worldPopulation = 7900;
// const population = 7000;
// console.log(percentageOfWorld1(population));

// const percentageOfWorld2 = percentageOfWorld1;
// console.log(percentageOfWorld1(7000,7900));
// console.log(percentageOfWorld1(100));

// const worldPopulation = 7900;
// const population = 7000;
// const percentage = (population / worldPopulation *100);

// console.log(percentageOfWorld1("India",100,`${percentage.toFixed(0)}%`));


// //Arrow Functions

// const percentageOfWorld3 = (population) =>{
//     return (population / 7900) *100;
// }
// const percentageOfWorld2 =(country,population)=>{
//     return `${country} has ${population} million people, so it's about ${percentageOfWorld3(population).toFixed(0)}% of the world population`
// }
// console.log(percentageOfWorld2("India", 1000));
// console.log(percentageOfWorld2("Japan", 600));
// console.log(percentageOfWorld2("Portugal", 300));


//Coding Challenge #5