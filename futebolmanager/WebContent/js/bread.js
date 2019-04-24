//funçoes para criar os breadcrumbs

/*
local = document.title;
ter = seg = true;
quan = tot = 0;

function geraBread()
{
	try
	{
		document.getElementById("breadCrumb").innerHTML = geraPrimeiro() + geraSegundo() + geraTerceiro();
	}
	catch(e){}
}


function geraPrimeiro()
{
	a = local.substr(local.indexOf("-") + 3 , 8);
	links = document.getElementById("MenuLateral").getElementsByTagName("a");
	
	for(i = 0; i < links.length; i++)
	{
		if(links[i].innerHTML.indexOf(a) > -1)
			linkHref = links[i];
	}
	
	if(location.href.indexOf(linkHref.href) > - 1)
	{
		textoBread = '<a href="/index.shtml">Home</a> <img src="/images/seta_bc.gif" alt="" border="0" align="absmiddle" /> '+ linkHref.innerHTML + '';
		seg = false;
	}
	else
		textoBread = '<a href="/index.shtml">Home</a> <img src="/images/seta_bc.gif" alt="" border="0" align="absmiddle" /> <a href="' + linkHref.href + '">'+ linkHref.innerHTML +'</a>';
	
	return textoBread;
}


function geraSegundo()
{
	debugger;
	if(seg)
	{
		a = local.substring(local.indexOf("-")+3 ,local.length);
		b = a.substring(a.indexOf("-")+2 , a.lastIndexOf("-")-1);		
		if(b.length <= 3)
		{
			b = a.substring(a.indexOf("-")+2 , a.length)
		}
		links = document.getElementById("MenuLateral").getElementsByTagName("a");
		
		for(i = 0; i < links.length; i++)
		{
			if(links[i].innerHTML.indexOf(b) > -1 && tot == 0)
			{
				linkHref = links[i];
				tot = 1;
			}
		}
		
		for(i = 0; i < links.length; i++)
		{
			if(links[i].href.indexOf(linkHref.href) > -1)
			{
				quan = quan + 1;				
			}
		}
		
		if(location.href.indexOf(linkHref.href) < 0 || quan > 1)
			textoBread2 = ' <img src="/images/seta_bc.gif" alt="" border="0" align="absmiddle" /> <a href="' + linkHref.href + '">'+ linkHref.innerHTML +'</a>';
		else
		{
			textoBread2 = ' <img src="/images/seta_bc.gif" alt="" border="0" align="absmiddle" /> '+ linkHref.innerHTML;
			ter = false;
		}
		return textoBread2;
	}
	else
	{
		return "";
		ter = false;
	}
}


function geraTerceiro()
{
	if(ter && seg)
	{
		a = local.substring(local.indexOf("-")+3 ,local.length);
		b = a.substring(a.lastIndexOf("-")+2 , a.length);
		textoBread3 = ' <img src="/images/seta_bc.gif" alt="" border="0" align="absmiddle" /> '+ b;
		
		return textoBread3;
	}
	else
		return "";
}
*/

function validaCamposObrigatorios(form, campos)
{
	for(i=0; i<campos.length; i++)
	{
		if(form[campos[i]].type == "text" && !validaCampoObrigatorio(form[campos[i]]))
			return false;
		if(form[campos[i]].type == "select-one" && !validaCampoObrigatorio(form[campos[i]]))
			return false;
		if(form[campos[i]].type == "radio" && !validaRadioButton(form[campos[i]]))
			return false;
	}
	return true;
}

function CombosVisible(blnVisible)
{
	for(var intI=0;intI<document.forms["frmMain"].length;intI++)
	{
		if (document.forms["frmMain"][intI].tagName == "SELECT")
			document.forms["frmMain"][intI].style.visibility = (blnVisible)?"visible":"hidden";
	}
}

function CombosVisible2(blnVisible)
{
	for(var intI=0;intI<document.forms["frmMain2"].length;intI++)
	{
		if (document.forms["frmMain2"][intI].tagName == "SELECT")
			document.forms["frmMain2"][intI].style.visibility = (blnVisible)?"visible":"hidden";
	}
}

/*function ExibeMenuAtendimento(element)
{
	try
	{
		document.all.MenuLateral.style.display = "";
		parent.document.all.MenuLateral.style.display = "";
	
	catch(e){}

	//showHelper(document.all["MenuLateral"]);
	//document.all["frmMenu"].style.display = "";
	//CombosVisible(false);
}*/

function ExibeMenuAtendimento(element)
{
	try
	{
		document.all.MenuLateral2.style.display = "";
		parent.document.all.MenuLateral2.style.display = "";
	}
	catch(e){}
}

function ExibeMenu(element)
{
	try
	{
		if(element == "Parametros")
		{
			document.all.MenuLateral.style.display = "";
			parent.document.all.MenuLateral.style.display = "";
		}
		if(element == "Atendimento")
		{
			document.all.MenuLateral2.style.display = "";
			parent.document.all.MenuLateral2.style.display = "";
		}
		if(element == "Work")
		{
			document.all.MenuWorkFlow.style.display = "";
			parent.document.all.MenuWorkFlow.style.display = "";
		}
		if(element == "Batch")
		{
			document.all.MenuBatch.style.display = "";
			parent.document.all.MenuBatch.style.display = "";
		}
		if(element == "Caixa")
		{
			document.all.MenuParcelas.style.display = "";
			parent.document.all.MenuParcelas.style.display = "";
		}

	}
	catch(e){}

	//showHelper(document.all["MenuLateral"]);
	//document.all["frmMenu"].style.display = "";
	//CombosVisible(false);
}

function EscondeMenu()
{
	try
	{
		document.all.MenuLateral.style.display = "none";
		parent.document.all.MenuLateral.style.display = "none";
		document.all.MenuLateral2.style.display = "none";
		parent.document.all.MenuLateral2.style.display = "none";
		document.all.MenuWorkFlow.style.display = "none";
		parent.document.all.MenuWorkFlow.style.display = "none";
		document.all.MenuBatch.style.display = "none";
		parent.document.all.MenuBatch.style.display = "none";
		document.all.MenuParcelas.style.display = "none";
		parent.document.all.MenuParcelas.style.display = "none";

	}
	catch(e){}

	//hideHelper("MenuLateral");
	//document.all["frmMenu"].style.display = "none";
	//CombosVisible(true);

}

function Document_OnClick()
{
	//EscondeMenu();
}

function showHelper(element)
{
	var menuId = element.id;
	var vMenu = element;
		
	var v_iframe = document.getElementById('ifrm' + menuId);
	
	if (v_iframe == null)
		v_iframe = document.createElement("iframe");
	
	v_iframe.id = 'ifrm' + menuId;
	
	//Largura do Menu a ser mostrado
	var DivWidth = "" + vMenu.offsetWidth;
	if(DivWidth.indexOf('px') > -1){
		DivWidth = parseInt(DivWidth.substring(0, DivWidth.indexOf('px')));
	}
	
	//Altura do Menu a ser mostrado
	var DivHeight = "" + vMenu.offsetHeight;
	if(DivHeight.indexOf('px') > -1){
		DivHeight = parseInt(DivHeight.substring(0, DivHeight.indexOf('px')));
	}
	
	var vLeft = "" + element.offsetLeft + "px";
	vLeft = (vLeft.toString().indexOf('px') > -1)? parseInt(vLeft.toString().substring(0, vLeft.toString().indexOf('px'))) : vLeft;
	vLeft += 0;
	
	var vTop = "113px";
	vTop = (vTop.toString().indexOf('px') > -1)? parseInt(vTop.toString().substring(0, vTop.toString().indexOf('px'))) : vTop;
	vTop += 0;
	
	v_iframe.width = DivWidth + "px";
	v_iframe.height = DivHeight + "px";
	v_iframe.style.left = vLeft + 'px';
	v_iframe.style.top = vTop + 'px';
	
	v_iframe.style.visibility = 'visible';
	v_iframe.style.position = 'absolute';
	
	v_iframe.frameborder = "0";
	v_iframe.scrolling = "no";
	v_iframe.style.ZIndex = '108';
	document.body.appendChild(v_iframe);
}

function hideHelper(menuId)
{
	try
	{
		document.getElementById('ifrm' + menuId).style.visibility = 'hidden';
	}catch(e){}
}

function OpenPopUp()
{								
	var Features = "dialogHeight:315px;dialogWidth:445px;scroll:no;help:no;";
	window.showModalDialog("PopupDuvida.html", "", Features);
}

function OpenPopUp2(element)
{	
	var Features8 = "dialogHeight:290px;dialogWidth:450px;scroll:no;help:no;";
	var Features7 = "dialogHeight:260px;dialogWidth:670px;scroll:no;help:no;";
	var Features6 = "dialogHeight:270px;dialogWidth:450px;scroll:no;help:no;";
	var Features5 = "dialogHeight:200px;dialogWidth:450px;scroll:no;help:no;";
	var Features4 = "dialogHeight:260px;dialogWidth:700px;scroll:no;help:no;";
	var Features3 = "dialogHeight:250px;dialogWidth:450px;scroll:no;help:no;";
	var Features2 = "dialogHeight:600px;dialogWidth:900px;scroll:no;help:no;";
	
	if(element == "AnteciparEnvioAssessoria")
	{
		window.showModalDialog("AnteciparEnvioAssessoria.html", "", Features3);
	}
	if(element == "AnteciparNegativacao")
	{
		window.showModalDialog("AnteciparNegativacao.html", "", Features3);
	}
	if(element == "EnviarSMS")
	{
		window.showModalDialog("EnviarSMS.html", "", Features3);
	}
	if(element == "IncluirTermCode")
	{
		window.showModalDialog("IncluirTermCode.html", "", Features8);
	}
	if(element == "IncluirHistorico")
	{
		window.showModalDialog("IncluirHistorico.html", "", Features8);
	}
	if(element == "IncluirHistorico2")
	{
		window.showModalDialog("IncluirHistoricoFase.html", "", Features3);
	}
	if(element == "Concluir")
	{
		window.showModalDialog("Concluir.html", "", Features3);
	}
	if(element == "ManterComentario")
	{
		window.showModalDialog("ManterComentario.html", "", Features3);
	}
	if(element == "GerarBoleto")
	{
		window.showModalDialog("GerarBoleto.html", "", Features4);
	}
	if(element == "SimularCalculos")
	{
		window.showModalDialog("SimularCalculos.html", "", Features2);
	}
	if(element == "SkipTrace")
	{
		window.showModalDialog("EnvioManualSkipTrace.html", "", Features5);
	}
	if(element == "TarifasContratos")
	{
		window.showModalDialog("ManutencaoConsultaTarifasContratos.html", "", Features5);
	}
	if(element == "IncluirDebito")
	{
		window.showModalDialog("IncluirDebitoAutomaticoManual.html", "", Features6);
	}
	if(element == "VizualizarLink")
	{
		window.showModalDialog("VizualizarLinkOrgao.html", "", Features3);
	}
	if(element == "Index")
	{
		window.showModelessDialog("Index.html", "", Features3);
	}
	if(element == "AlterarAssessoria")
	{
		window.showModalDialog("ListagemSegmentacaoCateiraAlterar.html", "", Features5);
	}
	if(element == "Bureaus")
	{
		window.showModalDialog("HistoricoNegativacao.html", "", Features7);
	}
	if(element == "Assessoria")
	{
		window.showModalDialog("HistoricoAssessoria.html", "", Features7);
	}
	if(element == "Fases")
	{
		window.showModalDialog("HistoricoFases.html", "", Features7);
	}
	if(element == "Consignado")
	{
		window.showModalDialog("HistoricoConsignado.html", "", Features7);
	}		
}

function showIcons(table)
{		
	if(document.getElementById(table).style.display == 'inline')
		document.getElementById(table).style.display = "none";
	else
		document.getElementById(table).style.display = "inline";
}

function showCampos(table)
{		
	if(document.getElementById(table).style.display == 'none')
	{
		document.getElementById('caixa1').style.display = "none";
		document.getElementById('caixa2').style.display = "inline";	
	}
	else
	{
		document.getElementById('caixa1').style.display = "inline";
		document.getElementById('caixa2').style.display = "none";
	}	
}

function showCampos2(table)
{		
	if(document.getElementById(table).style.display == 'none')
	{
		document.getElementById('caixa1').style.display = "none";
		document.getElementById('caixa2').style.display = "inline";
		document.getElementById('imgFechar').src = "images/abrir.JPG";
		document.getElementById('imgAbrir').src = "images/fechar.JPG";
	}
	else
	{
		document.getElementById('caixa1').style.display = "inline";
		document.getElementById('caixa2').style.display = "none";
		document.getElementById('imgFechar').src = "images/fechar.JPG";
		document.getElementById('imgAbrir').src = "images/abrir.JPG";
	}	
}

function showCampos3(table)
{		
	if(document.getElementById(table).style.display == 'none')
	{
		document.getElementById(table).style.display = "inline";	
	}
	else
	{
		document.getElementById(table).style.display = "none";
	}	
}


function abrirCampos(table)
{		
	if(document.getElementById(table).style.display == 'none')
	{
		document.getElementById(table).style.display = "inline";
	}
	else
	{
		document.getElementById(table).style.display = "none";
	}
}


function trocar(oDe, oPara)
{		
	if (oDe.selectedIndex > -1)
	{
		oPara.options[oPara.length] = new Option(oDe.options[oDe.selectedIndex].text, oDe.options[oDe.selectedIndex].value);
		oDe.options[oDe.selectedIndex] = null;
	}
}