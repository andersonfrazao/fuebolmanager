package br.com.futebolmanager.action.usuario;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.List;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;

import br.com.futebolmanager.action.AbstractAction;
import br.com.futebolmanager.business.usuario.UsuarioBusiness;
import br.com.futebolmanager.utils.CryptoDES;
import br.com.futebolmanager.vo.UsuarioVO;

public class UsuarioAction extends AbstractAction{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private List<UsuarioVO> usuarios;
	private UsuarioBusiness usuarioBusiness;
	private UsuarioVO usuarioVO;
	private String paramIdUsuario;

	
	public UsuarioAction(UsuarioBusiness usuarioBusiness){
		this.usuarioBusiness = usuarioBusiness;
	}
	@Override
	public void prepare() throws Exception {
		setUsuarios(usuarioBusiness.listarUsuarios());
		super.prepare();
	}
	@Override
	public String execute() {
		// TODO Auto-generated method stub
		return USUARIO;
	}


	public String cadastro(){
		return CADASTRO_USUARIO;
	}
	
	public String delete(){
		usuarioBusiness.excluirUsuario(usuarioVO);
		System.out.println("retorno");
		return INPUT;
	}
	
	public String edit() throws InvalidKeyException, UnsupportedEncodingException, NoSuchAlgorithmException, NoSuchPaddingException, InvalidKeySpecException, IllegalBlockSizeException, BadPaddingException{
		
		CryptoDES cripto = CryptoDES.newInstance(getMessageKey("chaveprivada"));
		String valorCriptografado = cripto.encrypt(usuarioVO.getIdUsuario().toString());
		String url = URLEncoder.encode(valorCriptografado, "UTF-8");
		setParamIdUsuario(url);
				
		return SUCCESS;
		
	}
	
	public String consultar(){
		System.out.println("Entrou");
		return INPUT;
	}
	

	public List<UsuarioVO> getUsuarios() {
		return usuarios;
	}	
	public void setUsuarios(List<UsuarioVO> usuarios) {
		this.usuarios = usuarios;
	}
	public UsuarioBusiness getUsuarioBusiness() {
		return usuarioBusiness;
	}
	public void setUsuarioBusiness(UsuarioBusiness usuarioBusiness) {
		this.usuarioBusiness = usuarioBusiness;
	}
	public UsuarioVO getUsuarioVO() {
		return usuarioVO;
	}
	public void setUsuarioVO(UsuarioVO usuarioVO) {
		this.usuarioVO = usuarioVO;
	}
	public String getParamIdUsuario() {
		return paramIdUsuario;
	}
	public void setParamIdUsuario(String paramIdUsuario) {
		this.paramIdUsuario = paramIdUsuario;
	}
	
	
	
	
}
