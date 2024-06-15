const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
console.log(buttons);
buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click' , function(e){
      console.log(e)
      console.log(e.target)
      const s = e.target.id;
      switch (s){
        case 'grey':
          body.style.backgroundColor = s;
          break;
      case 'white':
          body.style.backgroundColor = s;
          break;
      case 'blue':
          body.style.backgroundColor = s;
          break;
      case 'yellow':
          body.style.backgroundColor = s;
          break;
      }
    })
});
