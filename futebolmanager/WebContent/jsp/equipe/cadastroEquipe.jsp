<%@ taglib uri="/struts-tags" prefix="s" %>


<script type="text/javascript">
	
	function validarData(event, str){
		var regexLetras = /^[a-zA-Z]$/;
		var campo = document.getElementById('paramDtFundacao').value;
		
		if(campo.search(regexLetras) == 0){
			alert('Formato de data inválida');
			event.returnValue = false;
			return false;	
		}
	
		
	}
	function check_date() {
			var DATA = document.getElementById('paramDtFundacao');
	        var expReg = /^(([0-2]\d|[3][0-1])\/([0]\d|[1][0-2])\/[1-2][0-9]\d{2})$/;
	        var msgErro = 'Formato inválido de data.';
	        var vdt = new Date();
	        var vdia = vdt.getDay();
	        var vmes = vdt.getMonth();
	        var vano = vdt.getYear();
	        if ((DATA.value.match(expReg)) && (DATA.value!='')){
	        	var dia = DATA.value.substring(0,2);
                var mes = DATA.value.substring(3,5);
                var ano = DATA.value.substring(6,10);
                if((mes==04 && dia > 30) || (mes==06 && dia > 30) || (mes==09 && dia > 30) || (mes==11 && dia > 30)){
	                alert("Dia incorreto !!! O mês especificado contém no máximo 30 dias.");
                    DATA.focus();
                	return false;
               	} else{ //1
	                if(ano%4!=0 && mes==2 && dia>28){
		                alert("Data incorreta!! O mês especificado contém no máximo 28 dias.");
	                    DATA.focus();
	                    return false;
	             	} else{ //2
		               	if(ano%4==0 && mes==2 && dia>29){
		              		alert("Data incorreta!! O mês especificado contém no máximo 29 dias.");
		             		DATA.focus();
			                return false;
		              	} else{ //3
		              		if (ano > vano) {
		                    	alert("Data incorreta!! Ano informado maior que ano atual.");
		                       	DATA.focus();
		                        return false;
		                    }else{ //4
		                    	//alert ("Data correta!");
			                	return true;
                   			} //4-else
              			} //3-else
       				}//2-else
        		}//1-else                       
   			} else { //5
           		alert(msgErro);
                DATA.focus();
                event.returnValue = false;
                return false;
	        } //5-else
	}		
	
</script>
<s:form action="cadastroEquipe" method="post" name="cadastroEquipe"> 
<s:hidden key="equipeVO.idEquipe"></s:hidden>
<table align="left">
	<tr>
		<s:if test="hasActionErrors()">
			<td style="color: red" colspan="2">
				<s:actionerror cssStyle="color:red" theme="simple"/>
			</td>
		</s:if>
		<s:if test="hasActionMessages()">
			<td colspan="2">
				<s:actionmessage theme="simple"/> 
			</td>
		</s:if>	
	</tr>
	<tr>
		<s:textfield key="equipeVO.nmEquipe" required="true" size="100"/>
	</tr>
	<tr>
		<s:textfield key="equipeVO.nmResponsavel" required="true" size="50" />
	</tr>
	<tr>
		
		<s:textfield key="equipeVO.dtFundacao" onkeypress="MaskNumber(event)" onkeydown="MaskDate(this,event)" maxlength="10" id="paramDtFundacao"/>
	</tr>
	<tr>
		<tr>
			<td>
				<s:submit key="btn.voltar" method="voltar" cssClass="btn" theme="simple" cssStyle="width:80px" onclick="check_date()"></s:submit>
			</td>
		</tr>
</table>
</s:form>
