'use strict';

// Создаем AppData
let DomElement = function (selector, height, width, bg, fontSize) {
   this.selector = selector;
   this.height = height;
   this.width = width;
   this.bg = bg;
   this.fontSize = fontSize;

};

DomElement.prototype.newElement = function (text) {
   let newDiv = document.createElement('div');
   console.log(this);
   if (this.selector[0] === '#') {
      newDiv.id = this.selector.slice(1);
   } else if (this.selector[0] === '.') {
      newDiv.className = this.selector.slice(1);
   }

   newDiv.style.cssText = `   height: ${this.height}px;     
                              width: ${this.width}px;    
                              background: #${this.bg};    
                              font-size: ${this.fontSize}px; `;

   newDiv.innerText = text;

   document.body.append(newDiv);
};

let domElement = new DomElement('.wex', 100, 300, 'd3f304', 34);
let domElement2 = new DomElement('#wex', 100, 300, 'd3d3d3', 24);


domElement.newElement('Это блок с классом');
domElement2.newElement('Это блок с id');



