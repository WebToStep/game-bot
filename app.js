'use strict';

const more = 'Загаданное число меньше, осталось попыток - ',
   less = 'Загаданное число больше, осталось попыток - ',
   err = 'Введи число!',
   gameOver = 'Игра окончена',
   youWin = 'Попытки закончились, хотите сыграть еще?',
   restart = 'Попытки закончились, хотите сыграть еще?';

function alertMessage() {
   return (text, value) => {
      if (value) {
         alert(text + value);
      } else {
         alert(text);
      }
   };
}
const message = alertMessage();

let game = () => {
   let num = '' + Math.floor(Math.random() * (100 - 1) + 1);
   let count = 10;

   let qwest = () => {
      let userNum = prompt('Угадай число от 1 до 100');
      // Проверка ввода числа
      const numberHandler = (value) => {
         return isNaN(parseFloat(value) && isFinite(value));
      };

      const countHandler = () => {
         if (count < 1) {
            console.log('restart: ', restart);
            return message(restart);
         } else {
            qwest();
         }
      };

      if (userNum === null) {
         return message(gameOver);
      } else if (numberHandler(userNum)) {
         message(err);
         qwest();
      } else if (userNum > num) {
         count--;
         console.log('count: ', count);
         message(more, count);
         countHandler();
      } else if (userNum < num) {
         count--;
         console.log('count: ', count);
         message(less, count);
         countHandler();
      } else if (userNum === num) {
         message(youWin);
         return game();
      }
   };

   qwest();
};

game();