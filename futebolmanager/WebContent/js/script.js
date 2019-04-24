var window_Onload='';

//verifica se o navegador é o IE
IE = (navigator.userAgent.indexOf("MSIE") > -1)? true: false;


function mostraItens(idItem){
	document.getElementById(idItem).style.display = "block"
}

//Adiciona evento ao onload
function execOnload(code){
	var sOnload = window_Onload;
	var posAbreChaves = sOnload.indexOf('{');
	sOnload = sOnload + '\n' + code;	
	window_Onload = sOnload;
}
window.onload = new Function('if (window_Onload!=""){eval(window_Onload);}');

//sinalizacao do menu do topo
function sinalizaTopo(){	
	mt = document.getElementById('MenuTopo');
	lis = mt.getElementsByTagName('li');
	url = document.location.href;
	if(url.indexOf('/voce/') > 0)
		lis[0].getElementsByTagName('a')[0].className = "over";
	else if(url.indexOf('/empresa/') > 0)
		lis[1].getElementsByTagName('a')[0].className = "over";
	else if(url.indexOf('/onde_comprar/') > 0)
		lis[2].getElementsByTagName('a')[0].className = "over";
	else if(url.indexOf('/quem_somos/') > 0)
		lis[3].getElementsByTagName('a')[0].className = "over";
}


//escreve data no id
function imprimedata(id){
	agora = new Date();
	dia = agora.getDate();
	mes = agora.getMonth();
	ano = agora.getFullYear();
	hora = agora.getHours();
	minuto = agora.getMinutes();
	
	meses = ['','Janeiro','Fevereiro','Marco','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
	
	strData = dia + " de " + meses[mes+1] + " de " + ano + ", " + hora + "h" + minuto;
	
	document.getElementById(id).innerHTML = strData;
}


// Linka o combo
function linkarCombo(combo){
	if (combo.options[combo.selectedIndex].value != "") {
		location.href = combo.options[combo.selectedIndex].value;
	}
}

//esconde niveis, marca ou nao os itens do menu lateral
//nivel é a primeira pasta da url (voce, empresa, etc.)
function sinalizaLateral(nivel){
	//todas lis do menu lateral
      lis = document.getElementById('MenuLateral').getElementsByTagName('li');
	cont = 0;
	while(cont < lis.length){
		if(lis[cont].className)
			//se for de segundo nivel
			if(lis[cont].className.indexOf(2) >= 0){
				pasta = lis[cont].getElementsByTagName('a')[0].href;
				pasta = pasta.substr(pasta.indexOf(nivel),12);
				//se estiver na mesma 'secao' mudo a class
				if(verPasta(pasta)){
					lis[cont].className = "nivel2in";
					lis[cont].getElementsByTagName('a')[0].style.color = "#636363";
				}
				//se nao estiver na mesma secao escondo o link				
			}
			//se for 3º nivel
			if(lis[cont].className.indexOf(3) >= 0){
				pasta = lis[cont].getElementsByTagName('a')[0].href;
				arquivo = pasta.substr(pasta.lastIndexOf('/'))
				pasta = pasta.substr(pasta.indexOf(nivel),12);
				//se nao for da mesma 'secao', escondo
				if(!verPasta(pasta))
					lis[cont].style.display = "none";
				//se for o arquivo em questao, mudo de cor
				else if(verPasta(arquivo))
					lis[cont].getElementsByTagName('a')[0].style.color = "#636363";
			}
		cont++;
	}
}

//compara ums string com o url do site.
function verPasta(pasta){
	url = document.location.href;
	if((url.indexOf(pasta)) >= 0)
		return true
	else
		return false
}


//função para mostrar o "alt" do link
function alt(idDiv){	
	function move(e){
		mouseX = (IE)?event.clientX : e.clientX;
		mouseY = (IE)?event.clientY + document.body.scrollTop : e.clientY + document.body.scrollTop;
		document.getElementById(idDiv).style.left = mouseX + 10;
		document.getElementById(idDiv).style.top = mouseY + 10;
	}	
	opac = 10
	document.getElementById(idDiv).style.display = "block"
	document.onmousemove = move;
	
	efeito(idDiv)	
}

//função para esconder o box
function escondeAlt(idDiv){
	document.getElementById(idDiv).style.display = "none"
	opac = 10
}


//script para o efeito alpha
temp = ""
opac = 55;
function efeito(item){
	opac += 5
	if(opac < 100){
		if(IE)
			document.getElementById(item).filters.alpha.opacity =  opac;
		else
			document.getElementById(item).style.opacity = "." + opac;
		
		temp = setTimeout("efeito('" + item + "')", 1);
	}
}


function voltaEfeito(item){
	if(IE)
		document.getElementById(item).filters.alpha.opacity = 55
	else
		document.getElementById(item).style.opacity = ".55";
		
	opac = 55
	clearTimeout(temp)	
}



//para abrir divs
ultima = ""
function abreDiv(nome){
	if(ultima == ""){
		document.getElementById(nome).style.display = "block";
		ultima = nome;
	}
	else{
		fechar(ultima);
		document.getElementById(nome).style.display = "block";
		ultima = nome;
	}
}

ultima1 = "objetivo";

//abre as divs que ficam dentro dos iFrames
function abreDiv2(nome){
	fechar(ultima1);
	document.getElementById(nome).style.display = "block";
	
	//marca o item do combo que deve ficar marcado
	itensCombo = document.form1.lista_itens.getElementsByTagName('option');
	for(i = 0; i < itensCombo.length; i++){
		if(itensCombo[i].value == nome)
			itensCombo[i].selected = true;
	}
	
	ultima1 = nome;
}

function fechar(nome){
	document.getElementById(nome).style.display = "none";
}

//função para o combo

function combo(){
	itens = document.form1.lista_itens[document.form1.lista_itens.selectedIndex].value;
	abreDiv2(itens);
} 


function validaCamposObrigatorios(form, campos) {
	for(i=0; i<campos.length; i++) {
		if(form[campos[i]].type == "text" && !validaCampoObrigatorio(form[campos[i]]))
			return false;
		if(form[campos[i]].type == "select-one" && !validaCampoObrigatorio(form[campos[i]]))
			return false;
		if(form[campos[i]].type == "radio" && !validaRadioButton(form[campos[i]]))
			return false;
	}
	return true;
}

function validaCampoObrigatorio(campo)
{
	if(campo.value.length == 0) {
		showMessage(1, campo.title);
		campo.focus();
		return false;
}
	return true;
}

function validaRadioButton(campo) {
	for(i=0;i<campo.length;i++) {
		if(campo[i].checked) {
			return true;
		}
		else {
			valida = false;
		}
	}
	if(!valida) {
		showMessage(2, campo[0].title);
		return false;
	}
}

function showMessage(id, fieldName) {
	message = null;
	switch (id) {
		case 1: message = "Campo " + fieldName + " preenchimento obrigatório."; break;
		case 2: message = "Campo " + fieldName + ", favor selecionar ao menos um."; break;
		case 3: message = "Data inválida."; break;
	}
	alert(message);
}

function isNumeric() {
	//regular expression should match number with commas or not
	//1. ^-? <-- '-' is optional at the beginning
	//2. \d{1,3} <-- with or without comma, first 3 digits
	//3. \d{1,3}(\,\d{3})* <-- with comma, at least one digit with max of three before repeating like ',ddd'
	//4. \d+ <-- without comma, match any number of integer(shouldn't be though)
	re = /(^-?[1-9](\d{1,2}(\,\d{3})*|\d*)|^0{1})$/;
	return re.test(String.fromCharCode(window.event.keyCode));
}

function Esconde (idElement)
{								
	if(undefined != idElement.length)
	{				
		for (i=0; i < idElement.length; i++)				
		{				
			var tr = eval(idElement[i]);
			
			tr.style.display = (tr.style.display == "none") ? "block" : "none";
		}
	}
	else
	{
		var tr = eval(idElement);
					
		tr.style.display = (tr.style.display == "none") ? "block" : "none";
	}
}	

function Expande (idElement)
{				
	for (i=0; i < idElement.length; i++)				
	{				
		var tr = eval(idElement[i]);
		
		tr.style.display =  "block" ;
	}
}



/*#####################################################################################*/
function validaCampo(campo, message) {
        var field = document.getElementById(campo);
        if(field) {
            if(field.type == "text" && !validaCampoObrigatorio(field, message)) {
                return false;
            }
            if(field.type == "select-one" && !validaComboObrigatorio(field, message)) {
                return false;
            }
            if((field.type == "radio" || field.type == "checkbox") && !validaRadioButton(field, message)) {
                return false;
            }
        } else {
            field = dojo.widget.byId(campo);
            if(!validaWidgetObrigatorio(field, message)) {
                return false;
            }
        }
    return true;
}

function validaComboObrigatorio(field, message) {
    if(field.value.trim() == "" || field.value.trim() == "0") {
        alert(message);
        field.focus();
        return false;
    }
    return true;
}

function validaCampoObrigatorio(field, message) {
    if(field.value.trim() == "") {
        field.value = "";
        alert(message);
        field.focus();
        return false;
    }
    return true;
}

function validaWidgetObrigatorio(field, message) {
    if(field.getValue() == "") {
        alert(message);
        return false;
    }
    return true;
}

function validaCheckboxObrigatorio(field) {
    if(field && !field.checked) {
        field.focus();
        return false;
    }
    return true;
}

String.prototype.trim = function() {
    return this.replace(/^\s*/, "").replace(/\s*$/, "");
}

function validaRadioButton(field, message) {
    var chk = document.getElementsByName(field.name);
    var i =0;
    for(i=0;i<chk.length;i++) {
        if(chk[i].checked) {
            return true;
        }
    }
    alert(message);
    return false;
}

function selecionarTodosCheckbox(field, value) {
    for(i=0;i<field.length;i++) {
        field[i].checked = value;
    }
}

function validarData(dateField) {
  if(dateField.value.length != 10) {
    showMessage(3);     
    return false;
  }
  
  var idia = parseFloat(dateField.value.substring(0,2));
  var imes = parseFloat(dateField.value.substring(3,5));
  var iano = parseFloat(dateField.value.substring(6,10));

  if ((imes==1 || imes==3 || imes==5 || imes==7 || imes==8 || imes==10 || imes==12) && idia>31){
    showMessage(3);
    dia.focus();    
    return false;
  }
  if ((imes==4 || imes==6 || imes==9 || imes==11) && idia>30) {
    showMessage(3);
    dia.focus();    
    return false;
  }
  if (imes==2) {
    if ((iano%4 !== 0) && (idia>28)){
        showMessage(3);
        dia.focus();    
        return false;
      }
      else if ((iano%4 == 0) && (idia>29)){
        showMessage(3);
        dia.focus();    
        return false;
      }
  }
  if (idia==0) {
        showMessage(3);
        dia.focus();    
        return false;
  }
    
  if (imes>12 || imes==0) {
        showMessage(3);
        mes.focus();    
        return false;
  }
    
  if (iano<1900 || iano>2200) {
        showMessage(3);
        ano.focus();    
        return false;
  }
  return true;
}

function limpar(valor, validos) {
    // retira caracteres invalidos da string
    var result = "";
    var aux;
    for (var i=0; i < valor.length; i++) {
        aux = validos.indexOf(valor.substring(i, i+1));
        if (aux>=0) {
        result += aux;
        }
    }
    return result;
}

function formataData(campo, e) {
    evt = e || window.event;
    var tecla = evt.which || evt.keyCode;
    vr = limpar(campo.value,"0123456789");
    tam = vr.length + 1;

    if(tecla != 9 && tecla != 8 ) {
        if(tam > 2 && tam < 5 )
            campo.value = vr.substr(0, tam - 2) + '/' + vr.substr(tam - 2, tam);
        if(tam >= 5 && tam <= 10 )
            campo.value = vr.substr(0, 2) + '/' + vr.substr(2, 2) + '/' + vr.substr(4, 4);
    }
}

function isNumeric(e) {
    evt = e || window.event;
    var keyPressed = evt.which || evt.keyCode;
    re = /(^-?[1-9](\d{1,2}(\,\d{3})*|\d*)|^0{1})$/;
    return re.test(String.fromCharCode(keyPressed)) || keyPressed == 8 || keyPressed == 9 || (keyPressed >= 35 && keyPressed <= 39) ;
}
            
function formataValor (campo, tammax, e, decimalLen) {
    evt = e || window.event;
    var tecla = evt.which || evt.keyCode;
    var tam = 0;
    var fieldLength = campo.value.length;
    if (tecla == 8) fieldLength--;
        if (fieldLength < campo.maxLength) {
            vr = limpar(campo.value, "0123456789");
            tam = vr.length + (tecla != 8 ? ++tam : --tam);
            if (tecla == 8 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ) {
                if (tam <= decimalLen ) {
                    campo.value = vr;
                } else {
                    campo.value = vr.substr(0, tam - decimalLen) + "." + vr.substring(tam - decimalLen);
            }
        }
    } else {
        return false;
    }
}

function travaCampos(form) {
    for(i=0; i<form.elements.length; i++) {
        if(form.elements[i].type == "radio" || form.elements[i].type == "checkbox") {
            var radios = form[form.elements[i].name];
            for(y=0; y<radios.length;y++) {
                radios[y].disabled = true;              
                radios[y].className = "formularioReadonly";
            }
        } else if(form.elements[i].type == "text" || form.elements[i].type == "select-one" || form.elements[i].type == "textarea") {
            if(form.elements[i].type == "select-one" || form.elements[i].type == "radio" || form.elements[i].type == "checkbox") {
                form.elements[i].disabled = true;
            } else {
                form.elements[i].readOnly = true;
            }
            if(form.elements[i].className.indexOf('Decimal') != -1){
                form.elements[i].className = "formularioReadonlyDecimal";
            } else {
                form.elements[i].className = "formularioReadonly";
            }
        }
    }
}

function proxFoco(campo, campoDestino) {
    key = event.keyCode;
    if(key!=9 && key!=16) {
        if(campo.value.length == campo.maxLength) {
            document.getElementById(campoDestino).focus();
            if(document.getElementById(campoDestino).type != "select-one") {
                document.getElementById(campoDestino).select();
            }
        }
    }
}

function readOnlyField(fieldId) {
    var field = document.getElementById(fieldId);
    field.readOnly = true;
    if(field.type == "radio" || field.type == "checkbox") {
        var radios = document.getElementsById(field.name);
        for(var y=0; y<radios.length;y++) {
            radios[y].disabled = true;              
            radios[y].className = "formularioReadonly";
        }
    } else if(field.type == "text" || field.type == "select-one" || field.type == "textarea") {
        if(field.type == "select-one") {
            field.disabled = true;
        }  else {
            field.readOnly = true;
        }
        if(field.className.indexOf('Decimal') != -1){
            field.className = "formularioReadonlyDecimal";
        } else {
            field.className = "formularioReadonly";
        }
    }
}

function defaultField(fieldId) {
    var field = document.getElementById(fieldId);
    field.readOnly = false;
    if(field.type == "radio" || field.type == "checkbox") {
        var radios = document.getElementsById(field.name);
        for(var y=0; y<radios.length;y++) {
            radios[y].disabled = true;              
            radios[y].className = "formulario";
        }
    } else if(field.type == "text" || field.type == "select-one" || field.type == "textarea") {
        if(field.type == "select-one" || field.type == "radio" || field.type == "checkbox") {
            field.disabled = false;
        }  else {
            field.readOnly = false;
        }
        field.className = "formulario";
    }
}

function unlockSelectFields(form) {
    for(i=0; i<form.elements.length; i++) {
        if(form.elements[i].type == "radio" || form.elements[i].type == "checkbox") {
            var radios = form[form.elements[i].name];
            for(y=0; y<radios.length;y++) {
                radios[y].disabled = false;             
            }
        } else if(form.elements[i].type == "text" || form.elements[i].type == "select-one" || form.elements[i].type == "textarea") {
            if(form.elements[i].type == "select-one" || form.elements[i].type == "radio" || form.elements[i].type == "checkbox") {
                form.elements[i].disabled = false;
            }
        }
    }
}

function upperCase(field, e) {
    field.value =  field.value.toUpperCase();
}

function comboPopulate(field, store) {

    field.options.length = 0;
    field.options[0] = new Option("SELECT...","0");
    console.log("Starting comboPopulate !");
    
    store.fetch({
        onComplete: function(items, resquest) {
            console.log("Combo: " + field.name + " has been loaded !");
        },
        onItem: function(item, request) {
            var label = store.getLabel(item);
            field.options[field.options.length] = new Option(label, label);
        },
        onError: function(error, request) {
            console.log("error-> " + error);
        }       
    });
}

/*
* Formata a mascara da data, colocar o seguinte comando no campo onKeyUp="javascript: MaskDate(this, event);"
**/

function MaskDate(field,teclapres){
	var tecla = teclapres.keyCode;     
    if ( tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ){
		var strvalue = field.value;
		var str      = "";
		var strchar  = "";
		for (var i = 0; i < strvalue.length; i++) {
		  if ((strchar = ("0123456789".indexOf(strvalue.substring(i,i+1)))) != -1) {
		    str += strchar;
		  }
		}
		
		
		first  = str.substring(0,2);
		second = str.substring(2,4);
		third  = str.substring(4,8);
		
		// format the date as 99/99/9999
		if (first != "") {
		  str = first + (first.length == 2 ? "/" : "");
		}
		if (second != "") {
		  str = str + second + (second.length == 2 ? "/" : "");
		}
		if (third != "") {
		  str = str + third;
		}
		field.value = str;
		
		}
		return true;
}

	function MaskNumber(e){
		if(document.all){ // Internet Explorer
			var tecla = event.keyCode;
		}else if(document.layers){ // Nestcape
			var tecla = e.which;
		}
		if(tecla > 47 && tecla < 58){ // numeros de 0 a 9
			return true;
		}else {
			event.returnValue = false;
			return false;		
		}
		if (tecla != 8){ // backspace
			return false;
		}else {
			return true;
		} 	
	}				