<%@ taglib uri="/struts-tags" prefix="s" %>
<script language="javascript">

	function abrirPopupAlunos(){
		var features = 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=400,height=200';
		window.open("<s:url action='manutencaoAluno' method='popup'/>" ,"openPopup", features);
	}
	function getId(){
		//alert(document.getElementById('aluno.nome').value);
		alert('Nome: '+document.forms[0].elements('manutencaoAluno_alunoVO_nome').value);
	}
	

</script>
<body>
<s:form action="solicitacao" method="post">
<s:hidden key="solicitacaoVO.codSolicitacao"></s:hidden>
<table  width="70%" border="1">

	<s:textfield key="solicitacaoVO.prestador.nomePrestador" size="60" />
	<s:textfield key="solicitacaoVO.beneficiario.nomeBeneficario" size="60"/>
	<s:textfield key="solicitacaoVO.status.dscStatus"/>
	<s:textfield key="solicitacaoVO.dtSolicitacao"/>
	<tr>
		<td colspan="2">
			<table>
				<s:submit key="btn.salvar" method="save"  cssClass="btn" align="left" cssStyle="width:100px" />
 				<s:submit value="Listar Alunos" method="listAll" cssClass="btn"  align="left" cssStyle="width:100px"/>
 				<s:submit value="Listar Alunos2" cssClass="btn" align="left" cssStyle="width:100px" onclick="abrirPopupAlunos();" />
 				<tr>
 					<td>
 						<input type="button" value="Get Id" class="btn" align="left"  width="100px" onclick="getId();"/>
 				 	</td>
 				</tr>
 				<tr>
 					<td>
 					 	<input type="button" value="Popup" class="btn" align="left"  width="100px" onclick="abrirPopupAlunos();"/>
 					</td>
 				</tr>				
			</table>
		</td>							
	</tr>		
	
</table>            
</s:form>
</body>


