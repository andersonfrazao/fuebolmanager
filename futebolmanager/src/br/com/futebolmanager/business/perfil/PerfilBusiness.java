package br.com.futebolmanager.business.perfil;

import java.util.List;

import br.com.futebolmanager.service.perfil.PerfilService;
import br.com.futebolmanager.vo.PerfilVO;

public class PerfilBusiness {
	
	private PerfilService perfilService;
	
	public PerfilBusiness() {
		// TODO Auto-generated constructor stub
	}	
	PerfilBusiness(PerfilService perfilService) {
		this.perfilService = perfilService;
	}
	
	public List<PerfilVO> listPerfi(){
		return perfilService.listPerfil();
	}
	
	
	public PerfilService getPerfilService() {
		return perfilService;
	}
	public void setPerfilService(PerfilService perfilService) {
		this.perfilService = perfilService;
	}

}
