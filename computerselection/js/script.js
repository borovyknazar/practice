var budget, computer, cpu, graphics_card;
var n;

document.querySelector('.step-1 .button-next').addEventListener('click', function(){
	var radios = document.getElementsByName('computer');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            computer = radios[i].value;
        }
    }

	n = document.querySelector('select[name=budget]').options.selectedIndex;
	budget = document.querySelector('select[name=budget]').options[n].text;

	document.querySelector('.step-1').classList.remove('active');

	if(budget == "до 10.000 грн"){
		document.querySelector('.step-2 .select-images__inner:nth-child(1)').classList.add('active');
		document.querySelector('.step-2 .select-images__inner:nth-child(1) label:nth-child(1) input[type=radio]').setAttribute('checked', 'checked');

		document.querySelector('.step-3 .select-images__inner:nth-child(1)').classList.add('active');
		document.querySelector('.step-3 .select-images__inner:nth-child(1) label:nth-child(1) input[type=radio]').setAttribute('checked', 'checked');
	}
	else if(budget == "до 20.000 грн"){
		document.querySelector('.step-2 .select-images__inner:nth-child(2)').classList.add('active');
		document.querySelector('.step-2 .select-images__inner:nth-child(2) label:nth-child(1) input[type=radio]').setAttribute('checked', 'checked');

		document.querySelector('.step-3 .select-images__inner:nth-child(2)').classList.add('active');
		document.querySelector('.step-3 .select-images__inner:nth-child(2) label:nth-child(1) input[type=radio]').setAttribute('checked', 'checked');
	}
	else if (budget == "20.000 грн +"){
		document.querySelector('.step-2 .select-images__inner:nth-child(3)').classList.add('active');
		document.querySelector('.step-2 .select-images__inner:nth-child(3) label:nth-child(1) input[type=radio]').setAttribute('checked', 'checked');

		document.querySelector('.step-3 .select-images__inner:nth-child(3)').classList.add('active');
		document.querySelector('.step-3 .select-images__inner:nth-child(3) label:nth-child(1) input[type=radio]').setAttribute('checked', 'checked');
	}
	document.querySelector('.step-2').classList.add('active');
});

document.querySelector('.step-2 .button-next').addEventListener('click', function(){
	var radios = document.getElementsByName('cpu');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            cpu = radios[i].value;
        }
    }

	document.querySelector('.step-2').classList.remove('active');

	document.querySelector('.step-3').classList.add('active');
});

document.querySelector('.step-3 .button-next').addEventListener('click', function(){
	var radios = document.getElementsByName('graphics-card');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            graphics_card = radios[i].value;
        }
    }

	document.querySelector('.step-3').classList.remove('active');

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

	document.querySelector('.step-final').classList.add('active');
});