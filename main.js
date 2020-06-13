function getHistorial(){
	return document.getElementById("valor-historial").innerText
}

function printHistorial(numero){
	document.getElementById("valor-historial").innerText = numero
}

function getTotal(){
	return document.getElementById("total-valor").innerText
}

function printTotal(numero){
	if(numero == ""){
		document.getElementById("total-valor").innerText = numero
	}
	else{
		document.getElementById("total-valor").innerText = getFormattedNumber(numero)
	}	
}

function getFormattedNumber(numero){
	if(numero == "-"){
		return ""
	}
	var num = Number(numero)
	var valor = num.toLocaleString("en")
	return valor
}

function reverseNumberFormat(numero){
	return Number(numero.replace(/,/g,''))
}

var operator = document.getElementsByClassName("operador")
for(var i = 0; i < operator.length; i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="C"){
			printHistorial("")
			printTotal("")
		} else if(this.id == "CE"){
			var total=reverseNumberFormat(getTotal()).toString();
			if(total){//if total tiene un valor
				total = total.substr(0,total.length-1)
				printTotal(total)
			}
		} else{
			var total = getTotal();
			var historial = getHistorial()
			if(total == "" && historial != ""){
				if(isNaN(historial[historial.length - 1])){
					historial = historial.substr(0,historial.length-1)
				}
			}
			if(total != "" || historial != ""){
				total = total == "" ? total:reverseNumberFormat(total)
				historial = historial + total
				if(this.id == "="){
					var result = eval(historial)
					printTotal(result)
					printHistorial("")
				} else{
					historial = historial + this.id
					printHistorial(historial)
					printTotal("")
				}
			}
		}
		
	});
}

var numero = document.getElementsByClassName("numero")
for(var i = 0; i < numero.length; i++){
	numero[i].addEventListener('click',function(){
		var total = reverseNumberFormat(getTotal())
		if(total != NaN){ //if total es un numero
			total = total + this.id
			printTotal(total)
		}
	});
}
