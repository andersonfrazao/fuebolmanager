<%@ taglib uri="/struts-tags" prefix="s"%>
<s:form action="usuario" method="post">
<s:hidden key="usuarioVO.idUsuario" value=""></s:hidden>
<table cellpadding="1" cellspacing="0" width="100%" class="label" border="0">
	<tr>
		<td>
			<table>
				<tr>
					<td class="tdLabel" width="80"><s:text name="mensagem.bemvindo"  />:</td>
					<td style="font: normal;font-size:13px;  color:black;"  width="400"><s:property value="%{#session.sessionUser.dsNome}" /></td>				
				<tr>
					<tr>
						<td>&nbsp;</td>
					</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td align="center" >
			<s:submit key="btn.cadastro" method="cadastro" cssClass="btn" theme="simple"/>
		</td>
	</tr>
	<tr>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td colspan="2">
			<table width="100%" align="center" class="tabelaLista" >
				<tr>
					
					<th class="cabecalhoLista" width="1%"></th>
					<th class="cabecalhoLista"><s:text name="usuarioVO.dsNome"/></th>
					<th class="cabecalhoLista"><s:text name="usuarioVO.dsEmail"/></th>
					<th class="cabecalhoLista"><s:text name="usuarioVO.perfilVO.nmPerfil"/></th>
					<th class="cabecalhoLista"><s:text name="usuarioVO.dtInclusao"/></th>
				</tr>
				<s:if test="usuarios.size > 0">
					<s:url id="alterarImg" value="/images/ic_alterar.gif"/>
               		<s:url id="excluirImg" value="/images/ic_excluir.gif"/>
               			<s:iterator value="usuarios" status="linha">
							<s:if test="#linha.odd == true">
								<s:set name="linhaClass" value="'linhaClara'" />
							</s:if>
							<s:else>
								<s:set name="linhaClass" value="'linhaEscura'" />
							</s:else>
               				<tr>
               					<td class="${linhaClass}" nowrap="nowrap">
               						<s:submit type="image" method="edit" src="${alterarImg}" onclick="formSetValue(this.form, 'usuarioVO.idUsuario', '%{idUsuario}')" cssClass="img" label="%{getText('label.image.alterar')}" theme="simple"/>
               						<s:submit type="image" method="delete" src="${excluirImg}" onclick="formSetValue(this.form, 'usuarioVO.idUsuario', '%{idUsuario}')" cssClass="img" label="%{getText('label.image.excluir')}" theme="simple"/>
               					</td>
	               				<td class="${linhaClass}">
	               					<a href="javascript:submitHiddenWithValue('usuarioVO.idUsuario', '<s:property value="idUsuario"/>', 'consultar');">
	               						<s:property value="dsNome"/>
	               					</a>
	               				</td>
	               				<td class="${linhaClass}"><s:property value="dsEmail"/></td>
	               				<td class="${linhaClass}"><s:property value="perfilVO.nmPerfil"/></td>
	               				<td class="${linhaClass}"><s:property value="dtInclusao"/></td>
	               			</tr>
               			</s:iterator>
				
				</s:if>
				<s:else>
					<tr>
						<td colspan="8" class="linhaClara">
							<s:text name="results.not.found" />
						</td>
					</tr>				
				</s:else>
			
			</table>
		</td>
	</tr>
	
</table>

</s:form>