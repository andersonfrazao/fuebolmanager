package br.com.futebolmanager.business.equipe;

import java.util.List;

import br.com.futebolmanager.service.equipe.EquipeService;
import br.com.futebolmanager.service.uf.UfService;
import br.com.futebolmanager.vo.EquipeVO;
import br.com.futebolmanager.vo.UFVO;
import br.com.futebolmanager.vo.UsuarioVO;

public class EquipeBusiness {
	
	public UfService ufService;
	private EquipeService equipeService;
	
	
	public EquipeBusiness() {		
	}
	
	public EquipeBusiness(UfService ufService){
		this.ufService = ufService;
	}

	
	public List<UFVO> listAllUfs(){
		List<UFVO> ufs = ufService.listAllUfs();
		return ufs;
	}
	
	public List<EquipeVO> listarEquipesUsuario(UsuarioVO usuario){
		
		List<EquipeVO> times = equipeService.listarEquipesUsuario(usuario);
			
		return times;
	}

	public UfService getUfService() {
		return ufService;
	}

	public void setUfService(UfService ufService) {
		this.ufService = ufService;
	}

	public EquipeService getEquipeService() {
		return equipeService;
	}

	public void setEquipeService(EquipeService equipeService) {
		this.equipeService = equipeService;
	}

	
	
	
	
}
