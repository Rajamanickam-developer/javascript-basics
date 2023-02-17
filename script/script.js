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


