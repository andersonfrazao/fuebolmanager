<%@ taglib prefix="s" uri="/struts-tags"%>

<s:form>
	
	<table border="1">
		<tr>
			<td><s:label key="mensagem.bemvindo"/></td>&nbsp;-&nbsp;
			<td><s:property value="%{#session.usuarioVO.dsNome}"/></td>
		</tr>
		<tr>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td colspan="2"><s:label key="mensagem.funcionalidade"></s:label>
		</tr>
	</table>
	&nbsp;
	<table>
		<tr>
			<td>Cadastro do Time</td>
		</tr>
	</table>
	


</s:form>