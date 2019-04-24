package br.com.futebolmanager.action;

import org.apache.commons.validator.EmailValidator;
import org.apache.struts2.dispatcher.SessionMap;

import br.com.futebolmanager.business.LoginBusiness;
import br.com.futebolmanager.enums.PerfilUsuarioValue;
import br.com.futebolmanager.vo.UsuarioVO;

public class LoginAction extends AbstractAction{
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	private UsuarioVO usuarioVO;
	//public LoginService loginService;
	public LoginBusiness loginBusiness;

	public LoginAction(){
	
	}
	public LoginAction(LoginBusiness loginBusiness){
		this.loginBusiness = loginBusiness;
	}
	
/*	public LoginAction(LoginService loginService){
		this.loginService = loginService;
		
	}*/
	@Override
	public String execute() {
		System.out.println("Entrou");
		return LOGIN;
	}
	
	
	public String login(){
		if(!EmailValidator.getInstance().isValid(usuarioVO.getDsEmail())){
			addActionMessage(getMessageKey("mensagem.login"));
			return LOGIN;
		}
		UsuarioVO attached =  loginBusiness.getLogin(usuarioVO);
		
		
		if(attached == null){
			addActionMessage(getMessageKey("mensagem.login"));
			return LOGIN;
		}		
		session.put("sessionUser", attached);
		long adminValue = PerfilUsuarioValue.ADMINSTRADOR.getValue();
		if(attached.getPerfilVO().getIdPerfil() == adminValue){
			return USUARIO;
		}
		return EQUIPE;
				
	}
		
	public UsuarioVO getUsuarioVO() {
		return usuarioVO;
	}
	
	public String logout(){
		
		((SessionMap)session).invalidate();
		
		return LOGIN;
			
	}


	public void setUsuarioVO(UsuarioVO usuarioVO) {
		this.usuarioVO = usuarioVO;
	}
}
