// *************Chapter1****************
// Task-01
// alert("Error! Please enter a valid password.")

//Task-02
// alert("Welcome to JS Land... \nHappy Cooding!")

//Task-03
// alert("Welcome to JS Land... ")
// alert("Happy Cooding! \n prevent this page from creating additional diaglogs. ")

//Task-04
// console.log("Helo... I can run JS through my web browser's console");

// *************Chapter2****************
// var userName;

// var myName = "Tayyab Mehmood"

// var message = "Hello World"
// alert(message)

// var name = "Jhone Deo"
// var age = 15
// var certified = "Mobile Application Development"

// alert(name)
// alert(age +" years old")
// alert("Certified " +certified)

// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP"
// alert(pizza)

// var email = "abc@1234gmail.com"
// alert("My email address is " +email)

// var book  = "A smater\nway to learn JavaScript"
// alert("I am trying to learn from the Book " +book)

// document.write("Yah! I can write <b>HTML</b> content through JavaScript")

// alert("--------&#@#&--------------")


// *************Chapter3****************
// Task-01
// var age = 20
// alert("I am " + age + " years old")

// Task-02
// var visitSite = prompt("How many times you visit this ite")
// alert("you have visited this site " + visitSite + " times")

// Task-03
// var birthYear = 2005
// document.write("My birth year is " + birthYear + "<br />")
// document.write("Data type of my declared varaible is " + typeof birthYear)

// Task-04
// var shopingCenterName = prompt("Enter Shoping Center Name: ")
// var visiterName = prompt("Enter your Name: ")
// var productTitle = prompt("Enter Price Title: ")
// var quantity = prompt("Enter Quantity of Item: ")
// document.write(visiterName +" ordered " + quantity + " " + productTitle + " from " + shopingCenterName + " Cemter " )


// *************Chapter4****************
// var name = userName = studentName;

// Legal names
// var name
// var studentName
// var my_name
// var _name
// var student1

// // Illegal names
// var let
// var student Name
// var 1student
// var my-Name
// var student%

// document.write("<h1>Rules for naming JS variables</h1> <br /> variable names can only contain , numbers, $ and _ . For example: <b>$my_1stVariable</b> <br /> variable must begin with a letter, $ or _. For example: <b>$name,_name or name</b> <br /> variable names are case sensitive <br /> variable name should not be JS keywords")


// *************Chapter5****************
// Task-01
// var num1 = 3
// var num2 = 2
// let sum = num1 + num2;
// document.write("Sum of "+num1+ " and " +num2+ " is " +  sum)

// Task-02
// var num1 = 3
// var num2 = 2
// let sub = num1 - num2;
// document.write("Subtraction of "+num1+ " and " +num2+ " is " +  sub)

// var num1 = 3
// var num2 = 2
// let mult = num1 * num2;
// document.write("Multiplication of "+num1+ " and " +num2+ " is " +  mult)

// var num1 = 3
// var num2 = 2
// let sum = num1 % num2;
// document.write("Modulus of "+num1+ " and " +num2+ " is " +  mod)

// var num1 = 3
// var num2 = 2
// let sum = num1 / num2;
// document.write("Division of "+num1+ " and " +num2+ " is " +  div)

// Task-03
// var number;
// number = 2;
// document.write("Value after variable declaration is: " +number )
// document.write("<br />")
// document.write("Initial value is: " +number)
// document.write("<br />")
// number++
// document.write("value after Increasing: " +number)
// document.write("<br />")
// number += 7
// document.write("value after addition is: " +number)
// document.write("<br />")
// number--
// document.write("value after deccreasing: " +number)
// document.write("<br />")
// number%=3
// document.write("The remainder is: " +number)

// Task-04
// var ticket = 600
// var quantity = 5
// var total = ticket * quantity
// document.write("Total cost of " +quantity+ " tickets to a movie is " +total)

// TAsk-05
// var table = 4
// var result
// document.write("Table of " +table + "<br />")
// for(let i =1; i<=10; i++){
//     result = table * i
//     document.write(table +" x "+i+ " = " + result + "<br />")
// }

// Task-06
// var temp = 25
// var tempInFahrenheit = (temp * 9/5) + 32

// var tempInCalcius = (tempInFahrenheit - 32) * 5/9

// document.write(temp +" <sup>o</sup>C is " +tempInFahrenheit +"<sup>o</sup>F")
// document.write("<br />")
// document.write(tempInFahrenheit +" <sup>o</sup>F is " +tempInCalcius +" <sup>o</sup>C")

// Task-07
// var price1 = 650
// var quantity1 = 5

// var price2 = 100
// var quantity2 = 7

// var charges = 100

// var total1 = price1 * quantity1
// var total2 = price2 * quantity2
// var result = total1 + total2 + charges
// document.write("<h1>Shooping Cart</h1> <br /> ")
// document.write("Price of item1 is: " +price1 +"<br / >")
// document.write("Price of item2 is: " +price2 +"<br />")
// document.write("Quantity of item1 is: " +quantity1 +"<br />")
// document.write("Quantity of item2 is: " +quantity2 +"<br />")
// document.write("Cost charges: " +charges +"<br />")
// document.write("Total cost of your order is " +result +"<br />")

// Task-08
// var totalMarks = 980
// var obtMarks = 804
// var per = (obtMarks/totalMarks)*100
// document.write("<h1>Marks Sheet</h1> <br /> ")
// document.write("Total marks: " +totalMarks +"<br />")
// document.write("Obtained marks: " +obtMarks +"<br />")
// document.write("Percentage: " +per )

// Task-09
// var usDolaar = 10
// var saudiRivals = 25
// document.write("<h1>Currency in  PKR</h1> <br /> ")
// var result = (usDolaar*104.80) + (saudiRivals*28)
// document.write("Total Currency in PKR: " +result)

// Task-10
// var a = 5
// document.write("Initial: " +a+ "<br />" +(a+5)+ "<br />" +(a*5)+ "<br />" +(a/2))

// Task-11
// var currentYear = 2026
// var birthYear = 2005
// document.write("<h1>Age Caculator</h1> <br /> ")
// var age = currentYear-birthYear
// document.write("Current Year: " +currentYear +"<br />")
// document.write("Birth Year: " +birthYear +"<br />")
// document.write("Your age is: " +age)

// Task-12
// var radius = 20
// var circumfarance = 2 * 3.142 * radius
// var area = 3.142 * radius * radius
// document.write("<h1>The Geometrizer</h1> <br /> ")
// document.write("Radius of a circle: " +radius +"<br />") 
// document.write("CircumFarance of a circle: " +circumfarance +"<br />") 
// document.write("Area of a circle: " +area +"<br />") 

// Task-13
// var snack = "Chocolate chip"
// var age = 20
// var maxAge = 80
// var amoutPerDay = 5
// var totalAmount = (maxAge-age) * 365 * amoutPerDay
// document.write("<h1>The Lifetime Supply Calculator</h1> <br /> ")
// document.write("You will need " +totalAmount+ " " +snack+ " to last you until the ripe old of " +maxAge)











// *************Chapter6-9****************
// Task-01
// let a = 5
// document.write("Result: <br /> The value of a is: " +a +"<br />")
// document.write(" The value of ++a is: " + ++a +"<br />")
// document.write("Now the value of a is: " +a +"<br />")

// document.write(" The value of a++ is: " + a++ +"<br />")
// document.write("Now the value of a is: " + a +"<br />")

// document.write(" The value of --a is: " + --a +"<br />")
// document.write("Now the value of a is: " +a +"<br />")

// document.write(" The value of a-- is: " + a-- +"<br />")
// document.write("Now the value of a is: " +a +"<br />")

// Task-02
// var a = 2
// var b = 1
// var result = --a - --b + ++b + b--
// document.write("The value of --a is: " + --a +"<br />")
// document.write("The value of --a - --b is: " + (--a - --b) +"<br />")
// document.write("The value of --a - --b + ++b is: " + (--a - --b + ++b) +"<br />")
// document.write("The value of --a - --b + ++b + b-- is: " + (--a - --b + ++b + b--) +"<br />")

// document.write("The value of a is: " + a +"<br />")
// document.write("The value of b is: " + b +"<br />")
// document.write("The value of result is: " + result +"<br />")

// Task-03
// var name = prompt("Enter your name: ")
// alert("Your name is "+name)

// Task-04
// let number = prompt("Enter a number: ")
// for(let i=1;i<=10;i++){
//     if(number>=0 && number<=9){
//         document.write(number + " x " + i + " = " + number*i +"<br />")
//     }
//     else{
//         document.write(5 + " x " + i + " = " + 5*i +"<br />")
//     }
// }

// Task-05
// var sub1Name = prompt("Enter Subject1 Name: ")
// var sub2Name = prompt("Enter Subject2 Name: ")
// var sub3Name = prompt("Enter Subject3 Name: ")

// var sub1Marks = prompt("Enter obtained marks for subject1: ")
// var sub2Marks = prompt("Enter obtained marks for subject2: ")
// var sub3Marks = prompt("Enter obtained marks for subject3: ")


// var  totalMarksOfsub1 = totalMarksOfsub2 = totalMarksOfsub3 = 100

// document.write("<table border='1'>")
// document.write("<tr>")
// document.write("<th>Subject</th>")
// document.write("<th>TotalMarks</th>")
// document.write("<th>ObtainedMarks</th>")
// document.write("<th>Percentage</th>")
// document.write("</tr>")

// document.write("<tr>")
// document.write("<td>" +sub1Name+ "</td>")
// document.write("<td>" +totalMarksOfsub1+ "</td>")
// document.write("<td>" +sub1Marks+ "</td>")
// document.write("<td>" + (sub1Marks / totalMarksOfsub1)*100 +"%"+ "</td>")
// document.write("</tr>") 

// document.write("<tr>")
// document.write("<td>" +sub2Name+ "</td>")
// document.write("<td>" +totalMarksOfsub2+ "</td>")
// document.write("<td>" +sub2Marks+ "</td>")
// document.write("<td>" + (sub2Marks / totalMarksOfsub2)*100 +"%"+ "</td>")
// document.write("</tr>")

// document.write("<tr>")
// document.write("<td>" +sub3Name+ "</td>")
// document.write("<td>" +totalMarksOfsub3+ "</td>")
// document.write("<td>" +sub3Marks+ "</td>")
// document.write("<td>" + (sub3Marks / totalMarksOfsub3)*100 +"%"+ "</td>")
// document.write("</tr>")

// document.write("<tr>")
// document.write("<td>" + "</td>")
// document.write("<td>" + (totalMarksOfsub1+totalMarksOfsub2+totalMarksOfsub3) + "</td>")
// document.write("<td>" + (Number(sub3Marks)+Number(sub2Marks)+Number(sub1Marks)) + "</td>")
// document.write("<td>" + (((sub3Marks / totalMarksOfsub3)*100) + ((sub2Marks / totalMarksOfsub2)*100) + ((sub1Marks / totalMarksOfsub1)*100)) +"%"+ "</td>")
// document.write("</tr>")

// document.write("</table>")


// *************Chapter9-11***********************
// Task-01
// var city = prompt("Enter the name of city: ")

// if(city.toLowerCase() == "karachi"){
//     alert("Welcome to the city of light")
// }
// else{
//     alert("Welcome to the city " +city)
// }

// Task-02
// var gender = prompt("Enter your gender(male-female): ")
// if(gender.toLowerCase() == "male"){
//     alert("Good Morning Sir")
// }
// else if(gender.toLowerCase() == "female"){
//     alert("Good Morning Ma'am")
// }
// else{
//     alert("Invallid gender ")

// }

// Task-03
// var traficColor = prompt("Enter traffic signal color(Red/Green/Yellow): ")
// if(traficColor.toLowerCase() == "red"){
//     alert("Must Stop")
// }
// else if(traficColor.toLowerCase() == "green"){
//     alert("Move Now")
// }
// else if(traficColor.toLowerCase() == "yellow"){
//     alert("Ready To Move")
// }
// else{
//     alert("Invalid Signal")
// }

// Task-04
// var fuel = prompt("Enter the remaining fuel in your car(in liters): ")
// if(fuel<0.25){
//     alert("Please refill the fuel in your car")
// }

// Task-05
// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true"); // output is Not
// }

// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true"); // output is Not
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true"); // output is Not
// }
// if(c === 14){
//     alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }

// if (true){
//     alert("True");
// }
// if (false){  
//     alert("False");
// }

// if("car" < "cat"){
// alert("car is smaller than cat");
// }


//Task-06
// var sub1Marks = prompt("Enter obtained marks for subject1: ")
// var sub1TotalMarks = prompt("Enter Total marks for subject1: ")

// var sub2Marks = prompt("Enter obtained marks for subject2: ")
// var sub2TotalMarks = prompt("Enter Total marks for subject2: ")

// var sub3Marks = prompt("Enter obtained marks for subject3: ")
// var sub3TotalMarks = prompt("Enter Total marks for subject3: ")

// var total = Number(sub1TotalMarks) + Number(sub2TotalMarks) + Number(sub3TotalMarks)
// var ObtainedMarks = Number(sub1Marks) + Number(sub2Marks) + Number(sub3Marks)
// var Percentage = (ObtainedMarks/total) *100

// var grade
// var remarks

// if(Percentage>=80){
//     grade = "A-one"
//     remarks = "Exillent"
// }
// else if(Percentage>=70){
//     grade = "A"
//     remarks = "Good"
// }
// else if(Percentage>=60){
//     grade = "B"
//     remarks = "Yuo need to improve"
// }
// else if(Percentage<6080){
//     grade = "Fail"
//     remarks = "Sorry"
// }
//     document.write("<h1>Marks Sheet</h1> <br /> ")
//     document.write("Total Marks : " +total +"<br />")
//     document.write("Obtained Marks : " +ObtainedMarks +"<br />")
//     document.write("Percentage : " +Percentage+ "%" +"<br />")
//     document.write("Grade : " +grade +"<br />")
//     document.write("Remarks : " +remarks)

// Task-07
// var guess = 7
// var userInput = prompt("Guess a number (0-9): ")
// if(guess == userInput){
//     alert("Bingo! Correct answer")
// }
// else if(Number(userInput)+1 == guess){
//     alert("Close enough to the correct answer")
// }
// else{
//     alert("Could not guess")
// }

// Task-08
// var num = prompt("Enter a number: ")
// if(Number(num)%3 == 0){
//     alert(num + " is divisible by 3")
// }
// else{
//     alert(num + " is not divisible by 3")
// }

// Task-09
// var num = prompt("Enter a number: ")
// if(Number(num)%2 == 0){
//     alert(num +" is an even number")
// }
// else{
//     alert(num +" is an odd number")
// }

// Task-10
// var temp = prompt("Enter the Temperature: ")
// if(temp>40){
//     alert("It is too hot outside.")
// }
// else if(temp>30){
//     alert("The Weather today is Normal.")
// }
// else if(temp>20){
//     alert("Today's Weather is cool.")
// }
// else{
//     alert("OMG! Today's weather is so Cool.")
// }

// Task-11
// var num1 = prompt("Enter a number: ")
// var num2 = prompt("Enter a number: ")
// var char = prompt("Enter a operator(+,-,*,/,%): ")
// var sum = Number(num1)+Number(num1)
// var sub = Number(num1)-Number(num1)
// var mult = Number(num1)*Number(num1)
// var div = Number(num1)/Number(num1)
// var mod = Number(num1)%Number(num1)

// if(char == '+'){
//     alert(num1 + char + num2 + " = " + sum)
// }
// else if(char == '-'){
//     alert(num1 + char + num2 + " = " + sub)
// }
// else if(char == '*'){
//     alert(num1 + char + num2 + " = " + mult)
// }
// else if(char == '/'){
//     alert(num1 + char + num2 + " = " + div)
// }
// else if(char == '%'){
//     alert(num1 + char + num2 + " = " + mod)
// }
// else{
//     alert("Wrong Operator! ")
// }


// *************Chapter12-13****************
// Task-01
// var c = prompt("Enter a characer: ")

// if(c>="a" && c<="z"){
//     alert("This is a Lower Case Letter")
// }
// if(c>="A" && c<="Z"){
//     alert("This is an Upper Case Letter")
// }
// if(c>=0 && c<=9){
//     alert("This is a Nukber")
// }
// else{
//     alert("This is a special Character")
// }

// Task-02
// var num1 = prompt("Enter a Number")
// var num2 = prompt("Enter a Number")

// if(num1 > num2){
//     alert(num1 +" is greater than "+ num2)
// }
// if(num1 > num2){
//     alert(num1 +" is less than "+ num2)
// }
// else{
//     alert(num1 +" is equal to "+ num2)
// }

// Task-03
// var num = prompt("Enter a Number")

// if(num > 0){
//     alert(num +" is Positive")
// }
// else{
//     alert(num +" is Negaitive")
// }

// Task-04
// var char = prompt("Enter a character: ")
// if(char.toLowerCase()=="a" || char.toLowerCase()=="e" || char.toLowerCase()=="i" || char.toLowerCase()=="o" || char.toLowerCase()=="u"){
//     alert("this is a vowel word")
// }
// else{
//     alert("this is not a vowel word")
// }

// Task-05
// var password = prompt("Enter a password: ")
// var varifyPassword = prompt("Verify your password: ")

// if(password == "" || varifyPassword == ""){
//     alert("Please enter a password")
// }
// else if(password == varifyPassword){
//     alert("Correct! The password you entered matches the original password")
// }
// else{
//     alert("Incorrect Password")
// }

// Task-06
// var greeting;
// var hour = prompt("Enter time in hour: ");
// if(hour<18){
//     greeting = "Good day"
// }
// else{
//     greeting = "Good evening"
// }
// alert(greeting)

// Task-07
// let time = prompt("Enter time in 24 format:");

// let hour = Math.floor(time / 100); // important line 

// if (hour >= 0 && hour < 12) {
//     alert(hour + " AM");
// }
// else if (hour >= 12 && hour < 24) {
//     alert((hour - 12) + " PM");
// }
// else {
//     alert("Invalid time");
// }



// *************Chapter14-16***********************
// Task-01 to 06
// var studentArray = []
// var arrayofString = ["Ali","Ahmed","Aswad"]
// var arrayofNumber = [1,2,3,4]
// var arrayofBoolean = [true,false]

// Task-07
// var arrayofQualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M", "Phil", "PhD"]

// document.write("<h1>Qualifications</h1> <br /> ")

// for(let i=0;i<arrayofQualification.length;i++){
//     document.write(i+1 +") " +arrayofQualification[i] +"<br />")
// }

// Task-08
// var studentName = ["Ali","Sami","Jhon","Devil"]
// var studentMarks = [300,450,200,100]


// var total = 500

// for(let i=0;i<studentMarks.length;i++){
//     document.write("Score of " +studentName[i]+ " is " +studentMarks[i]+" . Percentage: " +(studentMarks[i]/total)*100 + "% " +"<br />")
// }

// Task-09
// var colorArray = ["White","Black","Green","Orange","Blue","Red"]
// for(let i=0;i<colorArray.length;i++){
//     document.write(colorArray[i] +"<br />")
// }
// //add element to start
// var choice = prompt("What color you want to add to the begining: ")
// colorArray.unshift(choice)
// document.write("<br /> 1st Additon of element <br />")
// for(let i=0;i<colorArray.length;i++){
//     document.write(colorArray[i] +"<br />")
// }

// var choice1 = prompt("What color you want to add to the begining: ")
// colorArray.unshift(choice1)
// document.write("<br /> 2nd Additon of element <br />")
// for(let i=0;i<colorArray.length;i++){
//     document.write(colorArray[i] +"<br />")
// }

// var choice2 = prompt("What color you want to add to the begining: ")
// colorArray.unshift(choice2)
// document.write("<br /> 3rd Additon of element <br />")
// for(let i=0;i<colorArray.length;i++){
//     document.write(colorArray[i] +"<br />")
// }


// //deletion pf elements
// colorArray.pop()
// document.write("<br /> After Removing last element <br />")
// for(let i=0;i<colorArray.length;i++){
//     document.write(colorArray[i] +"<br />")
// }

// var choice4 = prompt("At which index you want to add the color: ")
// var choice5 = prompt("And What color you want to add: ")
// colorArray.splice(choice4 , 0 , choice5)
// for(let i=0;i<colorArray.length;i++){
//     document.write(colorArray[i] +"<br />")
// }

// var choice6 = prompt("At which index you want to delete the color: ")
// var choice7 = prompt("How many color you want to delete: ")
// colorArray.splice(choice6 , choice7)
// for(let i=0;i<colorArray.length;i++){
//     document.write(colorArray[i] +"<br />")
// }


// Task-10
// var score = [1,3,2,4,8,5]
// for(let i = 0; i<score.length;i++){
//     for()
// }



// *************Chapter17-20****************
// Task-01
// array = [
//             [0,1,2,3],
//             [1,0,1,2],
//             [2,1,0,1]
//         ];
// for(let i=0;i<=2;i++){
//     for(let j=0;j<=3;j++){
//         document.write(array[i][j] + " ")
//     }
//     document.write("<br />")
// }

// Task-02
// for(let i = 0 ; i <= 10 ; i++){
//     document.write(i + "<br />")
// }

// Task-03
// let number = prompt("Enter a Number: ")
// let index = prompt("Enter a index: ")

// for(let i = 1;i<=index;i++){
//     document.write(number + " * " + i + " = " + number*i + "<br />" )
// }

// Task-04
// friuts = ["Apple","Banana","Mango","Orange","Strawberry"]

// for(let i = 0; i<friuts.length;i++){
//     document.write(friuts[i] + "<br />")
// }

// document.write("<br />")

// for(let i = 0; i<friuts.length;i++){
//     document.write("Element at index"+ i + "is" + friuts[i] + "<br />")
// }

// Task-05
// for(let i=1 ; i<=15 ; i++){
//     document.write(i + " , ")
// }

// for(let i=10 ; i>=1 ; i--){
//     document.write(i + " , ")
// }

// for(let i=1 ; i<=20 ; i++){
//     if(i % 2 == 0){
//         document.write(i + " , ")
//     }
// }

// for(let i=1 ; i<=20 ; i++){
//     if(i % 2 != 0){
//         document.write(i + " , ")
//     }
// }

// for(let i=1 ; i<=20 ; i++){
//     if(i % 2 == 0){
//         document.write(i + "k"+" , ")
//     }
// }
