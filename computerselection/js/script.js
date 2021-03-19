var budget, computer, cpu, graphics_card;
var n;

function step_1(){
	n = document.querySelector('select[name=budget]').options.selectedIndex;
	budget = document.querySelector('select[name=budget]').options[n].text;

	var items = document.querySelectorAll('.select-steps__item:nth-child(3)');
	Array.from(items).forEach(item => {
	  	item.classList.add('select-steps__item--active-click');
	});

	document.querySelector('.step-1').classList.remove('active');

	items = document.querySelectorAll('.step-3 .select-images__inner');
	Array.from(items).forEach(item => {
	  	item.classList.remove('active');
	});
	items = document.querySelectorAll('.step-4 .select-images__inner');
	Array.from(items).forEach(item => {
	  	item.classList.remove('active');
	});
	if(budget == "до 10.000 грн"){
		document.querySelector('.step-3 .select-images__inner:nth-child(1)').classList.add('active');
		document.querySelector('.step-3 .select-images__inner:nth-child(1) label:nth-child(1) input[type=radio]').setAttribute('checked', 'checked');

		document.querySelector('.step-4 .select-images__inner:nth-child(1)').classList.add('active');
		document.querySelector('.step-4 .select-images__inner:nth-child(1) label:nth-child(1) input[type=radio]').setAttribute('checked', 'checked');
	}
	else if(budget == "до 20.000 грн"){
		document.querySelector('.step-3 .select-images__inner:nth-child(2)').classList.add('active');
		document.querySelector('.step-3 .select-images__inner:nth-child(2) label:nth-child(1) input[type=radio]').setAttribute('checked', 'checked');

		document.querySelector('.step-4 .select-images__inner:nth-child(2)').classList.add('active');
		document.querySelector('.step-4 .select-images__inner:nth-child(2) label:nth-child(1) input[type=radio]').setAttribute('checked', 'checked');
	}
	else if (budget == "20.000 грн +"){
		document.querySelector('.step-3 .select-images__inner:nth-child(3)').classList.add('active');
		document.querySelector('.step-3 .select-images__inner:nth-child(3) label:nth-child(1) input[type=radio]').setAttribute('checked', 'checked');

		document.querySelector('.step-4 .select-images__inner:nth-child(3)').classList.add('active');
		document.querySelector('.step-4 .select-images__inner:nth-child(3) label:nth-child(1) input[type=radio]').setAttribute('checked', 'checked');
	}
}

function step_2(){
	var items = document.querySelectorAll('.select-steps__item:nth-child(4)');
	Array.from(items).forEach(item => {
	  	item.classList.add('select-steps__item--active-click');
	});

	var radios = document.getElementsByName('computer');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            computer = radios[i].value;
        }
    }

	document.querySelector('.step-2').classList.remove('active');
}

function step_3(){
	var items = document.querySelectorAll('.select-steps__item:nth-child(5)');
	Array.from(items).forEach(item => {
	  	item.classList.add('select-steps__item--active-click');
	});

	var radios = document.getElementsByName('cpu');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            cpu = radios[i].value;
        }
    }

	document.querySelector('.step-3').classList.remove('active');
}

function result(){
	var items = document.querySelectorAll('.result-nout, .result-pc, .result-nout__inner, .result-pc__inner');
	Array.from(items).forEach(item => {
	  	item.classList.remove('active');
	});
	if(computer == "Ноутбук"){
		document.querySelector('.result-nout').classList.add('active');

		if(budget == "до 10.000 грн"){
		document.querySelector('.result-nout__inner:nth-child(1)').classList.add('active');
		}
		else if(budget == "до 20.000 грн"){
			document.querySelector('.result-nout__inner:nth-child(2)').classList.add('active');
		}
		else if (budget == "20.000 грн +"){
			document.querySelector('.result-nout__inner:nth-child(3)').classList.add('active');
		}

		document.querySelector('.result-nout__inner.active .cpu-result__inner').textContent = cpu;
		document.querySelector('.result-nout__inner.active .graphics-card-result__inner').textContent = graphics_card;
	}
	else if(computer == "ПК"){
		document.querySelector('.result-pc').classList.add('active');

		if(budget == "до 10.000 грн"){
		document.querySelector('.result-pc__inner:nth-child(1)').classList.add('active');
		}
		else if(budget == "до 20.000 грн"){
			document.querySelector('.result-pc__inner:nth-child(2)').classList.add('active');
		}
		else if (budget == "20.000 грн +"){
			document.querySelector('.result-pc__inner:nth-child(3)').classList.add('active');
		}

		document.querySelector('.result-pc__inner.active .cpu-result__inner').textContent = cpu;
		document.querySelector('.result-pc__inner.active .graphics-card-result__inner').textContent = graphics_card;
	}
}

function step_4(){
	var radios = document.getElementsByName('graphics-card');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            graphics_card = radios[i].value;
        }
    }

	document.querySelector('.step-4').classList.remove('active');

	result();
}

function which_step_activate(el){
	// var items = document.querySelectorAll('.step');
	// Array.from(items).forEach(item => {
	//   	item.classList.remove('active');
	// });	
	if(el.target.text == "Крок 1"){
		document.querySelector('.step-1').classList.add('active');
	} else if(el.target.text == "Крок 2"){
		document.querySelector('.step-2').classList.add('active');	
	} else if(el.target.text == "Крок 3"){
		document.querySelector('.step-3').classList.add('active');	
	} else if(el.target.text == "Крок 4"){
		document.querySelector('.step-4').classList.add('active');	
	} else if(el.target.text == "Результат"){
		result();
		document.querySelector('.step-final').classList.add('active');	
	}
}

var items = document.querySelectorAll('.select-steps__item:nth-child(1), .select-steps__item:nth-child(2)');
Array.from(items).forEach(item => {
  	item.classList.add('select-steps__item--active-click');
});

items = document.querySelectorAll('.select-steps');
Array.from(items).forEach(item => {
  	item.addEventListener('click', function(e){
		if(e.target.classList.contains('select-steps__item--active-click')){
			if(e.target.closest('.step').classList.contains('step-1')){
				step_1();
			} else if(e.target.closest('.step').classList.contains('step-2')){
				step_2();
			} else if(e.target.closest('.step').classList.contains('step-3')){
				step_3();
			} else if(e.target.closest('.step').classList.contains('step-4')){
				step_4();
			}
			which_step_activate(e);	
		}
	});
});

document.querySelector('.step-1 .button-next').addEventListener('click', function(){
	step_1();
	document.querySelector('.step-2').classList.add('active');
});

document.querySelector('.step-2 .button-next').addEventListener('click', function(){
	step_2();
	document.querySelector('.step-3').classList.add('active');
});

document.querySelector('.step-3 .button-next').addEventListener('click', function(){
	step_3();
	document.querySelector('.step-4').classList.add('active');
});

document.querySelector('.step-4 .button-next').addEventListener('click', function(){
	step_4();
	document.querySelector('.step-final').classList.add('active');
});

document.querySelector('.step-2 .button-prev').addEventListener('click', function(){

	document.querySelector('.step-2').classList.remove('active');
	document.querySelector('.step-1').classList.add('active');

});

document.querySelector('.step-3 .button-prev').addEventListener('click', function(){

	document.querySelector('.step-3').classList.remove('active');
	document.querySelector('.step-2').classList.add('active');

});

document.querySelector('.step-4 .button-prev').addEventListener('click', function(){

	document.querySelector('.step-4').classList.remove('active');
	document.querySelector('.step-3').classList.add('active');

});

document.querySelector('.step-final .button-prev').addEventListener('click', function(){

	document.querySelector('.step-final').classList.remove('active');
	document.querySelector('.step-4').classList.add('active');

});