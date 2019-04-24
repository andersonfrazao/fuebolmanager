<%@ taglib prefix="s" uri="/struts-tags" %>
<s:form action="cadastroUsuario" method="post" name="cadastroUsuario"> 
<s:hidden key="usuarioVO.idUsuario"></s:hidden>
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
		<s:select  key="usuarioVO.perfilVO.idPerfil" list="listPerfil" headerKey="0" 
				   headerValue="%{getText('empty.list.required')}" listValue="nmPerfil" listKey="idPerfil"  required="true">
		</s:select>
	</tr>	
	<tr>
		<s:textfield key="usuarioVO.dsNome" required="true"/>
	</tr>
	<tr>
		<s:textfield key="usuarioVO.dsSobreNome"/>
	</tr>
	<tr>
		<s:textfield key="usuarioVO.dsEmail" required="true"/>
	</tr>
	<s:if test="usuarioVO == null || usuarioVO.idUsuario == null">
		<tr>
			<s:password key="paramSenha1" required="true"/>
		</tr>
		<tr>
			<s:password key="paramSenha2" required="true" />
		</tr>
	</s:if>	
	<tr>
		<td colspan="2">		
			<s:if test="usuarioVO == null || usuarioVO.idUsuario == null">	
				<s:submit key="btn.cadastro" method="cadastro" cssClass="btn" align="left" theme="simple"/>
			</s:if>
			<s:else>
				<s:submit key="btn.alterar" method="alterar" cssClass="btn" align="left" theme="simple" cssStyle="width:80px" />
			</s:else>
			<s:submit key="btn.voltar" method="voltar" cssClass="btn" theme="simple" cssStyle="width:80px"></s:submit>
		</td>	
	</tr>
</table>





</s:form>