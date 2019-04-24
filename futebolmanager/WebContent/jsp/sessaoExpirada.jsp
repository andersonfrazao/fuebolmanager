<%@ taglib prefix="s" uri="/struts-tags"%>

<table align="center">
	<tr>
		<td><s:url id="urlLogout" action="login" method="logout" namespace="/" includeParams="none"/>
		Seu acesso foi encerrado! Clique <s:a href="%{urlLogout}" >aqui</s:a> para um novo acesso.
			
		</td>
	</tr>		
</table>