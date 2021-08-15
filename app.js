'use strict';

// Создаем AppData
const DomElement = function (selector, height, width, bg, fontSize) {
   this.selector = selector;
   this.height = height;
   this.width = width;
   this.bg = bg;
   this.fontSize = fontSize;

};

DomElement.prototype.newElement = (Class, text) => {
   let newDiv = document.createElement('div');
   
   if (Class[0] === '#') {
      newDiv.id = Class.slice(1);
   } else if (Class[0] === '.') {
      newDiv.className = Class.slice(1);
   }

   newDiv.style.cssText = `   height: ${Class.height}px;     
                              width: ${Class.width}px;    
                              background: #${Class.bg};    
                              font-size: ${Class.fontSize}px; `;

   newDiv.innerText = text;
   console.log('newDiv: ', newDiv);

   document.body.append(newDiv);
};

const domElement = new DomElement('.wex', 100, 300, 'd3f304', 24);
const domElement2 = new DomElement('#wex', 100, 300, 'd3d3d3', 24);


domElement.newElement(domElement, 'любой текст #1');
domElement2.newElement(domElement2, 'любой текст #2');



