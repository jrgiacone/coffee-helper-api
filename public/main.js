
if(window.location.pathname === '/'){
  // alert(location)
  document.addEventListener('click', function(e) {
    e = e || window.event;
    let target = e.target,
        text = target.textContent || target.innerText;   
        sessionStorage.setItem("selection", text)
}, false);
}


if(window.location.pathname !== '/'){

  window.addEventListener('DOMContentLoaded', apiRequest)

  let slider = document.querySelector('.slider');
  let output = document.querySelector('.value')

  slider.addEventListener('mousemove', scroller) 
  slider.addEventListener('click', getVal)
  async function apiRequest(){
      // let name = document.querySelector('title').innerHTML.toLowerCase()
      try{
          const response = await fetch(`https://coffee-helper-api.herokuapp.com/api/${sessionStorage.getItem("selection")}`)
          // const response = await fetch(`https://localhost:3000/api/${sessionStorage.getItem("selection")}`)
          const data = await response.json()
          
          max = data['Maximum Coffee (g)']
          min = data['Minimum Coffee (g)']
          rec = data['Recommended Coffee (g)']
          console.log(data)
          document.querySelector('h2').innerText = data.Name
          document.querySelector('.value').innerHTML = rec 
          document.querySelector('.max').innerHTML = max 
          document.querySelector('.min').innerHTML = min 
          document.querySelector('input').value = rec 
          document.querySelector('input').min = min 
          document.querySelector('input').max = max
          document.querySelector('title').innerText = data.Name
          
          let x = (rec - min)/(max-min)*100
          let background = `linear-gradient(90deg, aquamarine ${x}%, gainsboro ${x}%)`
          slider.style.background = background

          // document.querySelector('h4').innerHTML = ratio(1,2)
          ratio (rec, rat)
         
      }catch(error){
          console.log(error)
      }
  }

  slider.oninput = function(){
    output.innerHTML = this.value;
  }

  let rat = (1/eval(document.querySelector('.ratio').value))

  document.querySelector('.ratio').addEventListener('change', function(){
    rat = (1/eval(document.querySelector('.ratio').value))
    ratio(rec, rat)
  })

  function getVal(){
    ratio (rat, slider.value)
  }
  
  function scroller (){
    let x = (slider.value - slider.min)/(slider.max-slider.min)*100;
    let color = `linear-gradient(90deg, aquamarine ${x}%, gainsboro ${x}%)`; 
    slider.style.background = color;
  }
}

function ratio(grams, ratio){
  document.querySelector('h4').innerHTML = (Math.round(grams * ratio));
}
