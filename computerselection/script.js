let step_1_items = document.querySelectorAll('label input[id="cpu"]')
let step_2_items = document.querySelectorAll('label input[id="motherboard"]')
let step_3_items = document.querySelectorAll('label input[id="corp"]')
let step_4_items = document.querySelectorAll('label input[id="cool"]')
let step_5_items = document.querySelectorAll('label input[id="video"]')
let step_6_items = document.querySelectorAll('label input[id="power"]')
let step_7_items = document.querySelectorAll('label input[id="hdd"]')

let step_1_select, step_2_select, step_3_select, step_4_select, step_5_select, step_6_select, step_7_select, step_8_select
let step_1_name, step_2_name, step_3_name, step_4_name, step_5_name, step_6_name, step_7_name, step_8_name

let number_step = 1
let button_next = document.getElementsByClassName('next-steps')
let button_back = document.getElementsByClassName('back-steps')
let step_title = document.getElementsByClassName('step-title')
let step = document.getElementsByClassName('step')
let selects = document.getElementsByClassName('select-steps__item')

let pr = 0;

const input = document.querySelector('input');
const tool_tip = document.querySelector('.tickmarks');

//CPU
for (index = 0; index < step_1_items.length; index++) {
  item = step_1_items[index]
  item.addEventListener('click', function (event) {
    document.querySelector('.select-steps__item.active').classList.add('select')
    event.target.parentElement.querySelectorAll('input:not([disabled]):not([type="submit"])').forEach(function(e) {
      step_1_select =  e.value
    })
    event.target.parentElement.querySelectorAll('label >  span').forEach(function(e) {
      step_1_name =  e.textContent
      pr=1;
    })
  })
}

//MOTHERBOARD
for (index = 0; index < step_2_items.length; index++) {
  item = step_2_items[index]
  if(step_1_select==0)
  {
    document.querySelector('.motherboard_2').style.display = 'none'
    document.querySelector('.motherboard_1').style.display = 'none'
  }
  else if (step_1_select==1){
    document.querySelector('.motherboard_2 ').style.display = 'none'
    document.querySelector('.motherboard_0').style.display = 'none'
  }
  else{
    document.querySelector('.motherboard_0').style.display = 'none'
    document.querySelector('.motherboard_1').style.display = 'none'
  }
  item.addEventListener('click', function (event) {
    document.querySelector('.select-steps__item.active').classList.add('select')
    event.target.parentElement.querySelectorAll('input:not([disabled]):not([type="submit"])').forEach(function(e) {
      step_1_select =  e.value
    })
    event.target.parentElement.querySelectorAll('label >  span').forEach(function(e) {
      step_2_name =  e.textContent
      pr=1;
    })
  })
}

//CORP
for (index = 0; index < step_3_items.length; index++) {
  item = step_3_items[index]
  if(step_2_select=='ATX')
  {
    document.querySelector('.corp_2').style.display = 'none'
  }
  else{
    document.querySelector('.corp_1 ').style.display = 'none'
  }
  item.addEventListener('click', function (event) {
    document.querySelector('.select-steps__item.active').classList.add('select')
    event.target.parentElement.querySelectorAll('input:not([disabled]):not([type="submit"])').forEach(function(e) {
      step_3_select =  e.value
    })
    event.target.parentElement.querySelectorAll('label >  span').forEach(function(e) {
      step_3_name =  e.textContent
      pr=1;
    })
  })
}

//COOL
for (index = 0; index < step_4_items.length; index++) {
  item = step_4_items[index]
  if(step_1_select=='1')
  {
    document.querySelector('.cool_1').style.display = 'none'
  }
  else{
    document.querySelector('.cool_2 ').style.display = 'none'
  }
  item.addEventListener('click', function (event) {
    document.querySelector('.select-steps__item.active').classList.add('select')
    event.target.parentElement.querySelectorAll('input:not([disabled]):not([type="submit"])').forEach(function(e) {
      step_4_select =  e.value
    })
    event.target.parentElement.querySelectorAll('label >  span').forEach(function(e) {
      step_4_name =  e.textContent
      pr=1;
    })
  })
}

//POWER
for (index = 0; index < step_6_items.length; index++) {
  item = step_6_items[index]
  if(step_1_select=='2' && step_2_select !=='0')
  {
    document.querySelector('.power_2').style.display = 'none'
  }
  else{
    document.querySelector('.power_1 ').style.display = 'none'
  }
  item.addEventListener('click', function (event) {
    document.querySelector('.select-steps__item.active').classList.add('select')
    event.target.parentElement.querySelectorAll('input:not([disabled]):not([type="submit"])').forEach(function(e) {
      step_6_select =  e.value
    })
    event.target.parentElement.querySelectorAll('label >  span').forEach(function(e) {
      step_6_name =  e.textContent
      pr=1;
    })
  })
}

//VIDEO

for (index = 0; index < step_5_items.length; index++) {
  item = step_5_items[index]

  item.addEventListener('click', function (event) {
    document.querySelector('.select-steps__item.active').classList.add('select')
    event.target.parentElement.querySelectorAll('input:not([disabled]):not([type="submit"])').forEach(function(e) {
      step_7_select =  e.value
    })
    event.target.parentElement.querySelectorAll('label >  span').forEach(function(e) {
      step_7_name =  e.textContent
      pr=1;
    })
  })
}

//HDD

for (index = 0; index < step_7_items.length; index++) {
  item = step_7_items[index]

  item.addEventListener('click', function (event) {
    document.querySelector('.select-steps__item.active').classList.add('select')
    event.target.parentElement.querySelectorAll('input:not([disabled]):not([type="submit"])').forEach(function(e) {
      step_8_select =  e.value
    })
    event.target.parentElement.querySelectorAll('label >  span').forEach(function(e) {
      step_8_name =  e.textContent
      pr=1;
    })
  })
}

document
  .querySelector('.next-steps')
  .addEventListener('click', function (event) {
    for (let i = number_step; i <= number_step; i++) {
      if (number_step <= number_step+1 && pr==1) {
        step[i].style.display = 'flex'
       
        step_title[i].style.display = 'flex'
        selects[i].classList.add('active')
        step[i - 1].style.display = 'none'
        step_title[i - 1].style.display = 'none'
        button_back[0].style.display = 'block'
        selects[i - 1].classList.remove('active')
        selects[i-1].style.filter = 'blur(0px)'
        selects[i].style.filter = 'blur(0px) drop-shadow(2px 4px 6px black)'
        number_step++
        pr=0;
        i= number_step;
        if(i==9){
          document.querySelector('.result-info').innerHTML = '<b>Процесор:</b> ' + step_1_name + '<br/><b>Материнська плата:</b> ' + step_2_name + '<br/><b>Блок живлення:</b> ' + step_6_name + '<br/><b>Кулер процесора:</b> ' + step_4_name + '<br/><b>Корпус:</b> ' + step_3_name + '<br/><b>Жорстки диск:</b> ' + step_8_name
        }
      }
    }
  })

  document.querySelector('.back-steps').addEventListener('click', function (event) {
    for (let i = number_step; i >= number_step; i--) {
      if (number_step >= number_step-1) {
        step[i - 1].style.display = 'flex'
        step_title[i - 1].style.display = 'flex'
        selects[i - 1].classList.add('active')
        step[i].style.display = 'none'
        step_title[i].style.display = 'none'
        
        if(i==1){
          selects[i].classList.remove('active')
        number_step=1
        i= number_step;
        button_back[0].style.display = 'none'
        }else{selects[i].classList.remove('active')
        number_step--
        pr=1
        i= number_step;}
      }
    }
  }) 

  // document.querySelector('.select-steps__item').addEventListener('click', function (event) {
  //      console.log(event)
  //       st = number_step
  //       step[st].style.display = 'flex'
  //       step_title[st].style.display = 'flex'
  //       selects[st].classList.add('active')
  //       step[st - 1].style.display = 'none'
  //       step_title[st - 1].style.display = 'none'
  //       button_back[0].style.display = 'block'
  //       selects[st - 1].classList.remove('active')
  //       number_step=2
    
  // })  

  for (index = 0; index < selects.length; index++) {
    item = selects[index]

    item.addEventListener('click', function (event) {
      event.target.parentElement.querySelectorAll('.select').forEach(function(e) {
        if(((Array.from(selects).indexOf(event.target))+1)<=number_step){
        let s_s = (Array.from(selects).indexOf(event.target))
        for( let its = 0; its < number_step; its++ ){
          step[its].style.display = 'none'
          step_title[its].style.display = 'none'
          selects[its].style.filter = 'blur(0px)'
          }
        step[s_s].style.display = 'flex'
        step_title[s_s].style.display = 'flex'
        document.querySelectorAll('.select-steps__item').forEach(n => n.classList.remove('active'))
        selects[s_s].classList.add('active')
        selects[s_s].style.filter = 'blur(0px) drop-shadow(2px 4px 6px black)'
        if(s_s >1){
        button_back[0].style.display = 'block'}
        else{
          button_back[0].style.display = 'none'
        }
        // number_step = s_s+1
        pr=1;
      }
      // else{console.log(Array.from(selects).indexOf(event.target))}
      })
    })
  }


  input.addEventListener('input', (event) => {
    if(input.value<=20000){
      document.querySelector('.select-steps__item.active').classList.add('select')
    tool_tip.innerHTML = `до ${input.value} грн`;
    pr=1
    }
    else {
      document.querySelector('.select-steps__item.active').classList.add('select')
      tool_tip.innerHTML = `20000 грн +`;
      pr=1
    }
    const percent = input.value / input.max;
    const width = input.getBoundingClientRect().width;
    
    const left = percent * width;
    
    tool_tip.style.left = `${left}px`;
  });

