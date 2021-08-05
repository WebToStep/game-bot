'use strict';

const more = 'Загаданное число меньше';
const less = 'Загаданное число больше';
const err = 'Введи число!';
const gameOver = 'Игра окончена';
const youWin = 'Поздравляю, Вы угадали!!!';

function alertMessage(){return text => alert(text)}
const message = alertMessage();

let game = () => {
   let num = '' + Math.floor(Math.random() * (100 - 1) + 1);

   console.log('бот загадал цифру - ', num);

   let qwest = () => {
      let userNum = prompt('Угадай число от 1 до 100');

      // Проверка ввода числа
      const numberHandler = (value) => {
         return isNaN( parseFloat(value) && isFinite(value) );
      };

      console.log('userNum: ', userNum);

      if(userNum === null){
         return message(gameOver);
      }else if(numberHandler(userNum)){
         message(err);
         qwest();
      }else if(userNum > num){
         message(more);
         qwest();
      }else if(userNum < num){
         message(less);
         qwest();
      }else if(userNum === num){
         return message(youWin);
      }
   };
   
   qwest();
   console.dir(qwest)
}; 

game();