// "use strict";

// ДЗ 10. #13_2
// 
// 4.Создать Метод setMarker({ x: 6, y: 9 }), который устанавливает
// маркер "&" в в переданную точку.
// 5.Создать метод goTo({ x: 2, y: 4 }), маркер передвигается в 
// указанную точку.

// 6.Создать метод shift(direction), где direction может иметь
// значение "left", "right", "top", "bottom", и маркер сдвинется 
// в указанную сторону на 1 шаг.



// --------------задачи 4,5,6----------------------------


class goMarker {

  constructor(p1) {
    this.p1 = p1;
  };

   setMarker(a) {

    let s = document.querySelector('.marker');
    s.style.left = a.x + 'px';
    s.style.top = a.y + 'px';
    console.dir(s);
  }

  goTo(b) {

    setTimeout(() => {
      let s = document.querySelector('.marker');
      console.dir(s);

      s.style.left = b.x + 'px';
      s.style.top = b.y + 'px';
    }, 5000);
  }

  shift(direction) {
    // debugger
    let step = 10;
    let k = document.querySelector('.marker');
    // console.dir(s);

    switch (direction) {
      case 'right':
        k.style.left = `${k.offsetLeft + step}px`;
        break;

      case 'bottom':
        k.style.top = `${k.offsetTop + step}px`;
        break;

      case 'left':
        k.style.left = `${k.offsetLeft - step}px`;
        break;

      case 'top':
        k.style.top = `${k.offsetTop - step}px`;
        break;
    }
  }

}
let s = document.querySelector('.marker');

console.dir(s);
let e = new goMarker();
e.setMarker({
  x: 6,
  y: 9
});
e.goTo({
  x: 2,
  y: 4
});

e.shift('right');
e.shift('bottom');
e.shift('left');
e.shift('top');








