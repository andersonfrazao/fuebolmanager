<%@ taglib prefix="s" uri="/struts-tags"%>
<s:form method="post"  action="login">
	<table>
		<tr>
			<s:actionmessage/>
		</tr>
		<tr>
			<s:textfield key="usuarioVO.dsEmail" required="true"/>
		</tr>
		<tr>
			<s:password key="usuarioVO.dsSenha" required="true" ></s:password>
		</tr>	
		<tr>
			<s:submit key="btn.login"  method="login" align="left" cssClass="btn"></s:submit>
		</tr>
	</table>
</s:form>