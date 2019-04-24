<%@ taglib uri="/struts-tags" prefix="s" %>
<script language="javaScript">
function validaRadio(field){
	if(field.checked && field.id == "paramPeriodo"){
		document.getElementById("paramStatus").checked = false;
		document.getElementById("divPeriodo").style.display = 'block';
		document.getElementById("divStatus").style.display = 'none';		
	}
	if(field.checked && field.id == "paramStatus"){
		document.getElementById("paramPeriodo").checked = false;
		document.getElementById("divPeriodo").style.display = 'none';
		document.getElementById("divStatus").style.display = 'block';
		
	}
}

</script>
<s:form name="consultaSolicitacao" method="post">
<s:hidden key="solicitacaoVO.codSolicitacao"></s:hidden>
<table>
	<tr>
		<td>
			<table>		
				<tr>
					<td width="200"> <input type="radio" id="paramPeriodo" name="paramPeriodo" value="p" onclick="validaRadio(this)">Período</td>
					<td width="200"><input type="radio" value="a" id="paramStatus" name="paramStatus" onclick="validaRadio(this)">Status</td>
					<td>
						<table>
							<s:submit key="btn.pesquisa" />	
						</table>
					</td>
				</tr>
			</table>
			<div id="divPeriodo" style="display: none;">
				<table>
					<tr>
						<td>
							<table>
							<s:textfield name="paramPeridoDe" label="De"/>
							</table>												
						</td>
						<td>
							<table>
							<s:textfield name="paramPeriodoAte" label="Até"></s:textfield>								
							</table>
						</td>
						
					</tr>	
				</table>
			</div>
			
			<div id="divStatus" style="display: none;">
				<table>
					<s:select key="statusSolicitacaoVO.dscStatus" list="listStatus" listValue="dscStatus"
					listKey="codStatus" headerKey="" headerValue="%{getText('selecione')}"
					name="paramDscStatus">
										
					</s:select>				
				</table>
			</div>
		</td>
	</tr>
</table>


</s:form>