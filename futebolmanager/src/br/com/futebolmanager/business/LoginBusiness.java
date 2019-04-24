package br.com.futebolmanager.business;

import br.com.futebolmanager.service.LoginService;
import br.com.futebolmanager.vo.UsuarioVO;

public class LoginBusiness {
	
	public LoginService loginService;
	
	
	public LoginBusiness(){
		
	}
	public LoginBusiness(LoginService loginService){
		this.loginService = loginService;
		
	}
	
	public UsuarioVO getLogin(UsuarioVO usuario){
		
		UsuarioVO usuarioVO = loginService.getLogin(usuario);
				
		return usuarioVO;
	}
	public LoginService getLoginService() {
		return loginService;
	}
	public void setLoginService(LoginService loginService) {
		this.loginService = loginService;
	}
	
	

}

	