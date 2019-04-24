package br.com.futebolmanager.action.usuario;

import java.io.IOException;
import java.net.URLDecoder;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.List;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.validator.EmailValidator;
import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.validation.SkipValidation;

import br.com.futebolmanager.action.AbstractAction;
import br.com.futebolmanager.business.usuario.UsuarioBusiness;
import br.com.futebolmanager.utils.CryptoDES;
import br.com.futebolmanager.vo.PerfilVO;
import br.com.futebolmanager.vo.UsuarioVO;

public class CadastroUsuarioAction extends AbstractAction {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private UsuarioVO usuarioVO;
	private String paramSenha1;
	private String paramSenha2;
	private UsuarioBusiness usuarioBusiness;
	private List<PerfilVO> listPerfil;
	private PerfilVO perfilVO;
	private String hiddenParamSenha1;
	private String hiddenParamSenha2;
	
	
	public CadastroUsuarioAction(){
	}
	public CadastroUsuarioAction(UsuarioBusiness usuarioBusiness){
		this.usuarioBusiness = usuarioBusiness;
	}
	
	@Override
	@SkipValidation
	public void prepare() throws Exception {
		setListPerfil(usuarioBusiness.listPerfil());
	}
	
	@SkipValidation
	@Override
	public String execute() {
		
		return INPUT;
	}
	public String cadastro(){
			boolean emailDuplicado = usuarioBusiness.verificarEmail(usuarioVO);
			if(emailDuplicado){
				addActionError(getMessageKey("email.duplicidade"));
				return INPUT;
			}
			
			if(!paramSenha1.trim().equals(paramSenha2.trim())){
				addActionError(getMessageKey("senha.diferente"));
				return INPUT;
			}
			usuarioBusiness.cadastrar(usuarioVO, getParamSenha1().trim());
			
			addActionMessage(getMessageKey("cadastro.sucesso"));
			limparVariaveis();
				
		return INPUT;
	}
	
	@SkipValidation
	public String edit() throws InvalidKeyException, NoSuchAlgorithmException, NoSuchPaddingException, InvalidKeySpecException, IllegalBlockSizeException, BadPaddingException, IOException{
		HttpServletRequest request = ServletActionContext.getRequest();
		String urlEncoded = request.getParameter("paramIdUsuario");
		String urlDecoded = URLDecoder.decode(urlEncoded, "UTF-8");
		CryptoDES cripto = CryptoDES.newInstance(getMessageKey("chaveprivada"));
		String idUsuario = cripto.decrypt(urlDecoded);
		
		UsuarioVO usuarioAttached = usuarioBusiness.findById(new Integer(idUsuario));
		setUsuarioVO(usuarioAttached);
		setPerfilVO(usuarioAttached.getPerfilVO());

		return INPUT;
	}
	
	@SkipValidation
	public String alterar(){			
		if(validarDadosAlteracao(usuarioVO)){
			return INPUT;
		}
		usuarioBusiness.alterarUsuario(usuarioVO);	
		return INPUT;
	}
	
	@SkipValidation
	public String voltar(){
		return VOLTAR;
	}
	
	public void limparVariaveis(){
		setUsuarioVO(null);	
		setPerfilVO(null);
	}
	
	private boolean validarDadosAlteracao(UsuarioVO usuarioVO){
		boolean retorno = false;
		//Validar campos vazios
		if(StringUtils.isEmpty(usuarioVO.getDsNome())){
			addActionError(getMessageKey("usuario.obrigatorio"));
			//addActionError(getMessageKey("email.invalido"));
			retorno = true;
		}
		
		if(usuarioVO.getPerfilVO() == null || usuarioVO.getPerfilVO().getIdPerfil() == null || usuarioVO.getPerfilVO().getIdPerfil().intValue() == 0){
			addActionError(getMessageKey("usuario.perfil.obrigatorio"));
			retorno = true;
		}

		//Validar email
		if(!EmailValidator.getInstance().isValid(usuarioVO.getDsEmail())){
			addActionError(getMessageKey("email.invalido"));
			retorno = true;
		}
		return retorno;
	}
	
	public UsuarioVO getUsuarioVO() {
		return usuarioVO;
	}
	public void setUsuarioVO(UsuarioVO usuarioVO) {
		this.usuarioVO = usuarioVO;
	}
	public String getParamSenha1() {
		return paramSenha1;
	}
	public void setParamSenha1(String paramSenha1) {
		this.paramSenha1 = paramSenha1;
	}
	public String getParamSenha2() {
		return paramSenha2;
	}
	public void setParamSenha2(String paramSenha2) {
		this.paramSenha2 = paramSenha2;
	}
	public UsuarioBusiness getUsuarioBusiness() {
		return usuarioBusiness;
	}
	public void setUsuarioBusiness(UsuarioBusiness usuarioBusiness) {
		this.usuarioBusiness = usuarioBusiness;
	}
	public List<PerfilVO> getListPerfil() {
		return listPerfil;
	}
	public void setListPerfil(List<PerfilVO> listPerfil) {
		this.listPerfil = listPerfil;
	}
	public PerfilVO getPerfilVO() {
		return perfilVO;
	}
	public void setPerfilVO(PerfilVO perfilVO) {
		this.perfilVO = perfilVO;
	}
	public String getHiddenParamSenha1() {
		return hiddenParamSenha1;
	}
	public void setHiddenParamSenha1(String hiddenParamSenha1) {
		this.hiddenParamSenha1 = hiddenParamSenha1;
	}
	public String getHiddenParamSenha2() {
		return hiddenParamSenha2;
	}
	public void setHiddenParamSenha2(String hiddenParamSenha2) {
		this.hiddenParamSenha2 = hiddenParamSenha2;
	}
	
	

}
