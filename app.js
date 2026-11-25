//Chapter # 1 Alerts :-

//Question no 1
let FullName = prompt("Enter Your FullName.","User");
alert("Hey "+ FullName + " Welcome! to our website.")
// //Question no 2
let password = prompt("Enter Your Password", "***")
if(password ===  "smit123"){
    alert("Congratulation's  your account has been created.")
}else{
    alert("Error! please enter a correct password.")
}
//Question no 3
alert("Welcome to JS Land... \n Happy Coding")
//Question no 4
alert("Welcome to JS Land...")
alert("Happy Coding.")
//Question no 5
console.log("Hello... I can run JS through my web browser's console.")
// //Question no 6
alert("Welcome to my website!");
//Question no 7
//index.HTML

//Chapter # 2 Variables for Strings:-

 //Question 1
let FullName2 ;
 //Question 2 
let myName = "Zunaira Mohsin";
 //Question 3
 let message = "Hello World";
 alert(message)
 //Question 4
 let StudentName = prompt("enter Your StudentName","Name");
 alert(StudentName);
 let StudentAge = prompt("enter Your StudentAge","Age");
 alert(StudentAge+" Year Old");
alert("Certificate Modern web and app developement");
 //Question 5
 let foodName = "PIZZA";
 alert(foodName+"\n PIZZ \n PIZ \n PI \n P")
 //Question 6
 let email = prompt("Enter Your Email adress")
 alert("My email adress is "+ email)
//Question 7
let book = "A smart way to learn JavaScipt "
alert("I'm trying to learn from the Book a smart way to Learn JavaScript.")
 //Question 8
 document.writeln(" <font color='blue' size='10' face='Arial'><b>Yah! I can write  HTML contant through JavaScript.</b></font>"+"<br>") 
 //Question 9
let end = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(end);
document.write(end+"<br>");

//Chapter # 3 Variables for Numbers:-

 //Question 1
 let age = 18;
 alert("I am "+age+" Year Old")
  //Question 2
  let num = 14;
  alert("You have visited this site "+num+" times")
  //Question 3
  let birthYear = 2008;
  document.writeln("My birth year is "+birthYear+"<br>")
   document.writeln("Data type of my declared variable is number"+"<br><br>");
//Question 4
let visitorName = "John Doe"
let productTittle = "T-shirt"
let Quantity = "5"
document.writeln(visitorName+"<br>"+" Ordered "+Quantity+productTittle+"($) "+"<br>"+ "on XYZ Clothing store."+"<br>"+"<br>")

//Chapter # 4  Variable Names Legal and Illegal:-

//Question 1
let name2 = "zunaira"
name2 = "Hani"
name2 = "Alisha"
alert(name2)
//Question 2
// Legal variable
let name3 = "zuni"
let Age = 18
let $course = "web development"
let Batch1 = 23
let fvt_color = "pink"
//ILLegal variable
// let 1name = "zuni"
// let @Age = 18
// let my course = "web development"
// let class = 12
// let fvt-color = "pink"
// //question 3
document.writeln("<font size='8' face='Arial'>Rules for naming Js Variable</font>"+"<br>"+"<br>")
document.writeln("Variable names can only contain , number, $ or _. for example : $my _ 1stVariable"+"<br>")
document.writeln("Variable can begin with a letter, $ or _. for example : $name or name"+"<br>")
document.writeln("Variable names are case sensitive"+"<br>")
document.writeln('Variable names should not be JS keyword'+"<br>"+"<br>")

// //Chapter # 5 Math Expressions: familiar operators:-

//Question 1
let num1 = 3+5
document.writeln("Sum of 3 and 5 add is:  "+num1+"<br>")
//Question 2
let num2 = 3
let num3 = 5
let sub = num2-num3
document.writeln("Sum of 3 and 5 subtraction is: "+sub+"<br>")
let num4 = 3
let num5 = 5
let mul = num4*num5
document.writeln("Sum of 3 and 5 multiplication is: "+mul+"<br>")
let num6 = 3
let num7 = 5
let divide = num6/num7
document.writeln("Sum of 3 and 5 divide is: "+divide+"<br>")
let num8 = 3
let num9 = 5
let Modulus = num8%num9
document.writeln("Sum of 3 and 5 modulus is: "+Modulus+"<br>"+"<br>")
//Question 3
let num_ ;
document.writeln("Value after variable declaration is: " + num_ + "<br>")
num_ = 5;
document.writeln("Initialize value: " + num_ +"<br>")
++num_;
document.writeln("Value after increment is: "+ num_ + "<br>")
 let add = num_+7;
document.writeln("Value after Addition is: "+ add+ "<br>")
--add;
document.writeln("Value after decrement is: "+ add+ "<br>")
let reminder= num_%3
document.writeln("The reminder is: "+ reminder+ "<br>")
//Question 4
let ticketPrice = 700;
let totalPrice = ticketPrice*6
document.writeln("Total cost to buy 7 tickets to a movie is "+ totalPrice+"<br>")
//Question 5
let num_1 = 5*1;
let num_2 = 5*2;
let num_3 = 5*3;
let num_4 = 5*4;
let num_5 = 5*5;
let num_6 = 5*6;
let num_7 = 5*7;
let num_8 = 5*8;
let num_9 = 5*9;
let num_10 = 5*10;
document.writeln("<h2>Table of 5</h2>"+"<br>");
document.writeln("5 x 1 = "+ num_1+"<br>"+"5 x 2 = "+ num_2+"<br>"+"5 x 3 = "+ num_3+"<br>"+"5 x 4 = "+ num_4+"<br>"+"5 x 5 = "+ num_5+"<br>"+"5 x 6 = "+ num_6+"<br>"+"5 x 7 = "+ num_7+"<br>"+"5 x 8 = "+ num_8+"<br>"+"5 x 9 = "+ num_9+"<br>"+"5 x 10 = "+ num_10+"<br>"+"<br>");
//Question 6
let calcius = 25
 let fahrenheit = (calcius* 9/5)+32
 document.writeln(calcius+"°C is " +fahrenheit+ "°F"+"<br>")
 let fahrenheit1 = 70;
let calcius1 = ((fahrenheit1 - 32)*5/9)
document.writeln(fahrenheit1 + "°F is "+ calcius1 +"°C " +"<br>")
//Question 7
let Price_1_Item = 650;
let Item_1_Quantity = 3
let price1 = Price_1_Item*Item_1_Quantity;

let Price_2_Item = 100;
let Item_2_Quantity = 7;
let price2 = Price_2_Item*Item_2_Quantity;

let shoppingCardCharges = 100

 let totalPrice1 =  price1+price2+shoppingCardCharges;
document.writeln("<h2>Shopping Card</h2>"+"Price of item 1 is: " +Price_1_Item+"<br>" +"Quantity of item 1 is: "+Item_1_Quantity+"<br>"+"Price of item 2 is: "+Price_2_Item+"<br>" +"Quantity of item 2 is: "
  +Item_2_Quantity+"<br>"+"Shopping Charges: "+shoppingCardCharges+"<br><br>"+"Total cost of your order is: "+totalPrice1+"<br>")
//Question 8
let totalMark = 980;
let ObtainedMark = 804;
let percentage = ObtainedMark/totalMark*100;
document.writeln("<h2>Mark Sheet</h2>"+"<br>"+"Total mark: " + totalMark+"<br>"+"Obtained mark: "+ObtainedMark+"<br>"+"Percentage:"+percentage.toFixed(3)+"%"+"<br>")
//Question 9
let USDollars = 10*104.80;
let SaudiRiyal = 25*28;
let PKR = USDollars+SaudiRiyal;
document.writeln("<h2>Currency in PKR</h2>"+"<br>"+"Total Currency in PKR: "+PKR+"<br>")
//Question 10
let number = 5
let result = ((number+5)*10)/2
document.writeln("Starting Number is: "+number+"<br>"+"Final Result is : "+result)
//Question 11
let currentYear1 = 2026;
let birth_Year = 2008;
let myAge = currentYear1-birth_Year
document.writeln("<h2>Age Calculator</h2>"+"<br>"+"Current Year: "+currentYear1+"<br>"+"Birth Year: "+birth_Year+"<br>"+"Your Age: " +myAge+"<br>")
//Question 12
let radius = 20;
let circumference = 2*3.142*radius
let  circumferenceCalculate = circumference

let Area = 3.142*radius*radius
let  AreaCalculate = Area
document.writeln("<h2>The Geometrizer</h2>"+"Radius of a circle: "+radius+"<br>"+"The circumference is: "+circumferenceCalculate+"<br>"+"The Area is: "+AreaCalculate+"<br>")
//Question 13
let favouriteSnak = "Chocolate Chips Cookies: ";
let currentAge = 18;
let UntilAge  = 50;
let snakPerDay = 3;
let calculation = currentAge-UntilAge
let totalsnaks = calculation*3
document.writeln("<h2>The Lifetime Supply Calculator</h2>"+"You will need " +favouriteSnak+totalsnaks+"<br>"+"to last until the ripe old age of "+UntilAge+"<br>")
// Chap 1 to 5 completed
