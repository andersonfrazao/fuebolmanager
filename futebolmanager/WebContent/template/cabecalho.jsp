<%@ taglib prefix="s" uri="/struts-tags" %>
<table align="center" width="745px">
	<tr>
		<td align="center"><b>Cabecalho</b></td>
	</tr>
	<tr>
		<td align="right" style="font-size: 12px; color: #3B73B9;">
			<s:url id="logout" action="login" namespace="/" includeParams="none" method="logout" />
			<s:a href="%{logout}"  cssStyle="">Sair(x)</s:a>	
		</td>
	</tr>
	

</table>

