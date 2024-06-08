# projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 2
```javascript


const form = document.querySelector('form');

// this usecase will give you empty value
//const height =  parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid Height ${height}`;
  }else
  if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else{
   const bmi = (weight / ((height*height)/10000)).toFixed(2)

   // Show the Result
   results.innerHTML = `<span>${bmi}</span>`;
  }
  
});
```

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# project-2(b)

# Solution Code

```javascript 

const clock = document.getElementById('clock');

// 1000ms = 1 sec
setInterval(function(){
  let date = new Date();
 // console.log(date.toLocaleTimeString());

 clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```