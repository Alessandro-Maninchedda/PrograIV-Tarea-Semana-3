// Regresa el valor dentro del historial
function getHistorial(){
	return document.getElementById("valor-historial").innerText
}

// Imprime dentro de historial el valor dentro del parametro
function printHistorial(numero){
	document.getElementById("valor-historial").innerText = numero
}

// Regresa el valor dentro del total
function getTotal(){
	return document.getElementById("total-valor").innerText
}

// Imprime el valor dentro del total o limpia en el caso que sea ""
function printTotal(numero){
	if(numero == ""){
		document.getElementById("total-valor").innerText = numero
	}
	else{
		document.getElementById("total-valor").innerText = getFormattedNumber(numero)
	}	
}

// Regresa gracias al parametro "en" el numero desplegado con comas al metodo estadounidense; ejemplo: 9,999
function getFormattedNumber(numero){
	var num = Number(numero)
	var valor = num.toLocaleString("en")
	return valor
}

// Elimina la coma como un char real en la ecuacion; Investigar mas en Dev.mozilla.org; StackOverflow
function reverseNumberFormat(numero){
	return Number(numero.replace(/,/g,''))
}

//Operadores
var operator = document.getElementsByClassName("operador")
for(var i = 0; i < operator.length; i++){
	operator[i].addEventListener('click',function(){
		//Esto me permite pasar en un loop por todos los operadores y utilizar el elemento clickeado
		if(this.id=="C"){
			printHistorial("")
			printTotal("")
		} else if(this.id == "CE"){
			// Convierte el total a un String para que las comas no se tomen en cuenta un vez borre el numero
			var total=reverseNumberFormat(getTotal()).toString();
			if(total){//if total tiene un valor
				total = total.substring(0,total.length-1)
				printTotal(total)
			}
		} else{
			var total = getTotal();
			var historial = getHistorial()
			if(total == "" && historial != ""){
				// Revisa el ultimo char del historial para poder reemplasar el operador en el caso de que no sea un numero sino otro operador
				if(isNaN(historial[historial.length - 1])){
					historial = historial.substring(0,historial.length-1)
				}
			}
			if(total != "" || historial != ""){
				// El total siempre debe de estar vacio entonces el total se debe convertir a vacio // stackOverflow codigo.. No es mio // pero es igual que un if statemnt por lo que veo
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

//numeros
var numero = document.getElementsByClassName("numero")
for(var i = 0; i < numero.length; i++){
	numero[i].addEventListener('click',function(){
		var total = reverseNumberFormat(getTotal())
		if(total != NaN){ //if total es un numero // para concatenar 
			total = total + this.id
			printTotal(total)
		}
	});
}
