function submitRadioWithValue(radioName, value, method){
    for(var i=0; i< document.forms.length; i++){
        var targetRadio = null;
        
        if( document.forms[i][radioName].length ){
            for( x = 0; x < document.forms[i][radioName].length; x++){
                targetRadio = document.forms[i][radioName][x];
                if(targetRadio && /radio/i.test(targetRadio.type)){
                    if(targetRadio.value == value){
                        break;
                    }
                }
                targetRadio = null;
            }
        }else{
            targetRadio = document.forms[i][radioName];
            if(!targetRadio || !/radio/i.test(targetRadio.type) || targetRadio.value != value){
                targetRadio = null;
            }
        }
        if( targetRadio != null ){
            targetRadio.checked = true;
	        if( document.forms[i]['method:' + method] ){
	            document.forms[i]['method:' + method].click();
	        }else{               
	            var btn = document.createElement("input");
	            btn.type="submit";
	            btn.name='method:' + method;
	            btn.style.visibility='hidden';
	            document.forms[i].appendChild(btn);
	            btn.click();
	        }
	        break;
        }
    }
}

function submitHiddenWithValue(hiddenName, value, method){
	alert('entrou');
    for(var i=0; i< document.forms.length; i++){
        var targetHidden = null;
        
        targetHidden = document.forms[i][hiddenName];
        if( targetHidden && /hidden/i.test(targetHidden.type) ){
            targetHidden.value = value;
        }else{
            targetHidden = null;
        }
                
        if( targetHidden != null ){
            if( document.forms[i]['method:' + method] ){
                document.forms[i]['method:' + method].click();
            }else{               
                var btn = document.createElement("input");
                btn.type="submit";
                btn.name='method:' + method;
                btn.style.visibility='hidden';
                document.forms[i].appendChild(btn);
                btn.click();
            }
        }
    }
}

function submitSelectChange(select, method){               
	var btn = document.createElement("input");
	btn.type="submit";
	btn.name='method:' + method;
	btn.style.visibility='hidden';
	select.form.appendChild(btn);
	btn.click();
}

function formSetValue(form, field, val){
    form[field].value = val;
}
 
/*
**************************************
* Event Listener Function v1.4       *
* Autor: Carlos R. L. Rodrigues      *
**************************************
*/
addEvent = function(o, e, f, s){
    var r = o[r = "_" + (e = "on" + e)] = o[r] || (o[e] ? [[o[e], o]] : []), a, c, d;
    r[r.length] = [f, s || o], o[e] = function(e){
        try{
            (e = e || event).preventDefault || (e.preventDefault = function(){e.returnValue = false;});
            e.stopPropagation || (e.stopPropagation = function(){e.cancelBubble = true;});
            e.target || (e.target = e.srcElement || null);
            e.key = (e.which + 1 || e.keyCode + 1) - 1 || 0;
        }catch(f){}
        for(d = 1, f = r.length; f; r[--f] && (a = r[f][0], o = r[f][1], a.call ? c = a.call(o, e) : (o._ = a, c = o._(e), o._ = null), d &= c !== false));
        return e = null, !!d;
    }
};

removeEvent = function(o, e, f, s){
    for(var i = (e = o["_on" + e] || []).length; i;)
        if(e[--i] && e[i][0] == f && (s || o) == e[i][1])
            return delete e[i];
    return false;
};



/*
**************************************
* Restrict Class v1.0                *
* Autor: Carlos R. L. Rodrigues      *
**************************************
*/

//========================================================
// REQUIRES http://www.jsfromhell.com/geral/event-listener
//========================================================

Restrict = function(form){
    this.form = form, this.field = {}, this.mask = {};
}
Restrict.field = Restrict.inst = Restrict.c = null;
Restrict.prototype.start = function(){
    var $, __ = document.forms[this.form], s, x, j, c, sp, o = this, l;
    var p = {".":/./, w:/\w/, W:/\W/, d:/\d/, D:/\D/, s:/\s/, a:/[\xc0-\xff]/, A:/[^\xc0-\xff]/};
    for(var _ in $ = this.field)
        if(/text|textarea|password/i.test(__[_].type)){
            x = $[_].split(""), c = j = 0, sp, s = [[],[]];
            for(var i = 0, l = x.length; i < l; i++)
                if(x[i] == "\\" || sp){
                    if(sp = !sp) continue;
                    s[j][c++] = p[x[i]] || x[i];
                }
                else if(x[i] == "^") c = (j = 1) - 1;
                else s[j][c++] = x[i];
            o.mask[__[_].name] && (__[_].maxLength = o.mask[__[_].name].length);
            __[_].pt = s, addEvent(__[_], "keydown", function(e){
                var r = Restrict.field = e.target;
                if(!o.mask[r.name]) return;
                r.l = r.value.length, Restrict.inst = o; Restrict.c = e.key;
                setTimeout(o.onchanged, r.e = 1);
            });
            addEvent(__[_], "keyup", function(e){
                (Restrict.field = e.target).e = 0;
            });
            addEvent(__[_], "keypress", function(e){
                o.restrict(e) || e.preventDefault();
                var r = Restrict.field = e.target;
                if(!o.mask[r.name]) return;
                if(!r.e){
                    r.l = r.value.length, Restrict.inst = o, Restrict.c = e.key || 0;
                    setTimeout(o.onchanged, 1);
                }
            });
        }
}
Restrict.prototype.restrict = function(e){
    var o, c = e.key, n = (o = e.target).name, r;
    var has = function(c, r){
        for(var i = r.length; i--;)
            if((r[i] instanceof RegExp && r[i].test(c)) || r[i] == c) return true;
        return false;
    }
    var inRange = function(c){
        return has(c, o.pt[0]) && !has(c, o.pt[1]);
    }
    return (c < 30 || inRange(String.fromCharCode(c))) ?
        (this.onKeyAccept && this.onKeyAccept(o, c), !0) :
        (this.onKeyRefuse && this.onKeyRefuse(o, c),  !1);
}
Restrict.prototype.onchanged = function(){
    var ob = Restrict, si, moz = false, o = ob.field, t, lt = (t = o.value).length, m = ob.inst.mask[o.name];
    if(o.l == o.value.length) return;
    if(si = o.selectionStart) moz = true;
    else if(o.createTextRange){
        var obj = document.selection.createRange(), r = o.createTextRange();
        if(!r.setEndPoint) return false;
        r.setEndPoint("EndToStart", obj); si = r.text.length;
    }
    else return false;
    for(var i in m = m.split(""))
        if(m[i] != "#")
            t = t.replace(m[i] == "\\" ? m[++i] : m[i], "");
    var j = 0, h = "", l = m.length, ini = si == 1, t = t.split("");
    for(i = 0; i < l; i++)
        if(m[i] != "#"){
            if(m[i] == "\\" && (h += m[++i])) continue;
            h += m[i], i + 1 == l && (t[j - 1] += h, h = "");
        }
        else{
            if(!t[j] && !(h = "")) break;
            (t[j] = h + t[j++]) && (h = "");
        }
    o.value = o.maxLength > -1 && o.maxLength < (t = t.join("")).length ? t.slice(0, o.maxLength) : t;
    if(ob.c && ob.c != 46 && ob.c != 8){
        if(si != lt){
            while(m[si] != "#" && m[si]) si++;
            ini && m[0] != "#" && si++;
        }
        else si = o.value.length;
    }
    !moz ? (obj.move("character", si), obj.select()) : o.setSelectionRange(si, si);
}

/*
**************************************
* formatCurrency Function v1.1       *
* Autor: Carlos R. L. Rodrigues      *
**************************************
*/

//========================================================
// REQUIRES http://www.jsfromhell.com/geral/event-listener
//========================================================

function formatCurrency(o, n, dig, dec){
    o.c = !isNaN(n) ? Math.abs(n) : 2;
    o.dec = typeof dec != "string" ? "," : dec, o.dig = typeof dig != "string" ? "." : dig;
    addEvent(o, "keypress", function(e){
        if(e.key > 47 && e.key < 58){
            var o, s, l = (s = ((o = this).value.replace(/^0+/g, "") + String.fromCharCode(e.key)).replace(/\D/g, "")).length, n;
            if(o.maxLength + 1 && l >= o.maxLength) return false;
            l <= (n = o.c) && (s = new Array(n - l + 2).join("0") + s);
            for(var i = (l = (s = s.split("")).length) - n; (i -= 3) > 0; s[i - 1] += o.dig);
            n && n < l && (s[l - ++n] += o.dec);
            o.value = s.join("");
        }
        e.key > 30 && e.preventDefault();
    });
}

function limpar(form)
{
	var inputs       = form.getElementsByTagName('input')
	var selects      = form.getElementsByTagName('select')
	var textareas    = form.getElementsByTagName('textarea')

	for(var i=0; i<selects.length; i++){
		selects[i].selectedIndex = 0;
	}
	
	for(var i=0; i<textareas.length; i++){
		textareas[i].value = '';
	}

	for(var i=0; i<inputs.length; i++){
		switch (inputs[i].type){
			case 'text'     :   inputs[i].value      = '';break;
			case 'radio'    :   inputs[i].checked    = '';break;
			case 'checkbox' :   inputs[i].checked    = '';break;
		}
	}
}

/*
********
* AJAX *
********
*/

var http_request = false;
function ajax(action, metodo, namespace, funcao, parametro){
	var func = funcao;
	try {
		http_request = new ActiveXObject("Msxml2.XMLHTTP");
	} 
	catch (e) {
		try {
			http_request = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {}
	}
	if (http_request){
		http_request.onreadystatechange=function() {
			if (http_request.readyState==4){
				eval(func + '();');
			}
			else{
				/*  ERRO AJAX */
			} 
		};
		var cacheIE = new Date().getTime();
		http_request.open("GET",
			"/GEtMoneyWeb" + namespace + "/" + action + "!" + metodo + ".action" + "?parametro="+ parametro + "&cacheIE=" + cacheIE, true);
			http_request.send(null);
	}							        
}
/*
********************
* BOTÕES DINÂMICOS *
********************
*/
function clickFecha(){
       document.getElementById('fechaBotaoDinamico').style.display ="";
       document.getElementById('abreBotaoDinamico').style.display ="none";
} 
function clickAbre(){
       document.getElementById('abreBotaoDinamico').style.display ="";
       document.getElementById('fechaBotaoDinamico').style.display ="none";
}

function applyMasksOnLoad(field) {
   	var fieldValue = field.value;
	
		if (fieldValue) {
		if (!fieldValue.match('[\\D]')) {
			if (fieldValue.length == 11) {
				field.value = cpfMask(fieldValue);
			} else if (fieldValue.length == 14) {
				field.value = cnpjMask(fieldValue);
			}
		}
	}
}
function cpfMask(string) {
	return string.substring(0, 3) + "." + string.substring(3, 6) + "." + string.substring(6, 9) + "-" + string.substring(9);
}
function cnpjMask(string) {
	return string.substring(0, 2) + "." + string.substring(2, 5) + "." + string.substring(5, 8) + "/" + string.substring(8, 12) + "-" + string.substring(12);
}
