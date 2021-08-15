'use strict';

// Создаем AppData
const DomElement = function (selector, height, width, bg, fontSize, position) {
   this.selector = selector;
   this.height = height;
   this.width = width;
   this.bg = bg;
   this.fontSize = fontSize;
   this.position = position;

};

DomElement.prototype.newElement = function () {
   let newDiv = document.createElement('div');
   if (this.selector[0] === '#') {
      newDiv.id = this.selector.slice(1);
   } else if (this.selector[0] === '.') {
      newDiv.className = this.selector.slice(1);
   }

   newDiv.style.cssText = `   height: ${this.height}px;     
                              width: ${this.width}px;    
                              background: #${this.bg};    
                              font-size: ${this.fontSize}px;
                              position: ${this.position}; 
                              
                           `;

   document.body.append(newDiv);
};

DomElement.prototype.keyPress = function (e) {
   let elem = document.querySelector(this.selector);

   switch (e.key) {
      case "ArrowDown": elem.style.top = +elem.style.top.replace('px', '') + 10 + 'px'; break;
      case "ArrowUp": elem.style.top = +elem.style.top.replace('px', '') - 10 + 'px'; break;
      case "ArrowLeft": elem.style.left = +elem.style.left.replace('px', '') - 10 + 'px'; break;
      case "ArrowRight": elem.style.left = +elem.style.left.replace('px', '') + 10 + 'px'; break;
   }
};

let domElement = new DomElement('.wex', 100, 100, '7CFC00', 34, 'absolute');


document.addEventListener("DOMContentLoaded", domElement.newElement());
document.addEventListener("keydown", (e) => { domElement.keyPress(e); });
