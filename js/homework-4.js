



// 1 Створіть дві змінні для зберігання значень двох текстових полів. 
// Перевірте, чи обидві змінні не є порожніми. 
// Якщо обидва поля заповнені, вивести повідомлення "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".


const textmain = prompt("Введіть текст");
const data = prompt("Напишіть дані");

if (textmain.trim() !== "" && data.trim() !== "") {
    console.log("Обидва поля заповнені");
} else {
    console.log("Не всі поля заповнені");
}


// 2 Створіть дві змінні для зберігання числових значень. Обчисліть їх суму. 
// Якщо сума більше 10 — виведіть "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".

const sum = 19;
const numeric = 205;

console.log(sum);
console.log(numeric);

if (sum + numeric > 10) {
    console.log("Сума більша за 10");
}
else {
    console.log("Сума менша за 10");
}




// 3 Створіть змінну для зберігання тексту. Перевірте, чи містить цей текст слово "JavaScript". 
// Якщо містить, виведіть "Текст містить слово JavaScript", якщо ні — "Текст не містить слово JavaScript".

const text = prompt("Цей текст містить слово JavaScript").trim();

if (text.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript");

} else {
    console.log("Текст не містить слово JavaScript")
}





// 4 Створіть змінну для зберігання числа. 
// Перевірте, чи це число більше 10 і менше 20. Якщо так — виведіть "Число входить в діапазон від 10 до 20", 
// якщо ні — "Число не входить в діапазон від 10 до 20".

const num = Number(prompt("Введіть число 7"));

if (num > 10 && num < 20) {
    console.log("Число входить в діапазон від 10 до 20");
    
} else {
    console.log("Число не входить в діапазон від 10 до 20");
    
}





// 5 Створіть змінні для зберігання значень полів (ім'я, email, пароль). 
// Перевірте, чи ім'я містить не менше 3 символів, чи email містить символ @ та крапку після нього, а пароль не менше 6 символів. 
// Якщо всі умови виконані — виведіть "Перенаправлення на іншу сторінку", якщо ні — "Помилка: неправильне заповнення".


const userName = prompt("Введіть ваше ім'я");
const email = prompt("Ведіть вашу пошту ");
const password = prompt("Введіть ваш пароль");

if (userName.length >= 3 && email.includes("@") && email.includes("com") && email.includes(".") && password.length >= 6) {

    console.log("Перенаправлення на іншу сторінку");
    
} else {
    console.log("Помилка: неправильне заповнення");
    
}



      // варіант 2



const Name = "Taras"; 
const Email = "simkovtaras9@gmail.com"; 
const Password = "123456"; 

const Names = userName.length >= 5;
const Emails = email.includes("@") && Email.lastIndexOf(".") && Email.includes("com") > Email.indexOf("@");
const Passwords = Password.length >= 6;

if (Names && Emails && Passwords) {
    console.log("Перенаправлення на іншу сторінку");
  } 
  else {
    console.log("Помилка: неправильне заповнення");
  }

// console.log(Names && Emails && Passwords ? "Перенаправлення на іншу сторінку" : "Помилка: неправильне заповнення");


