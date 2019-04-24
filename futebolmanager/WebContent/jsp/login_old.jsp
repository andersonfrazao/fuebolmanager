<%@ taglib uri="/struts-tags" prefix="s" %>

<s:form method="post" validate="true" name="login">
<table>
	<tr>
		<s:actionerror cssStyle="color:red"/>
	</tr>
	<tr>
		<s:textfield key="usuarioVO.codUsuario" required="true"></s:textfield>
	</tr>
	<tr>
		<s:password key="usuarioVO.senha" required="true"></s:password>
	</tr>
	<tr>
	</tr>
	<tr>
		<s:submit key="btn.login"  method="login" align="left" cssClass="btn"></s:submit>
	</tr>
</table>
</s:form>