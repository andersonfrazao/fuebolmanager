package br.com.futebolmanager.action.equipe;

import java.util.List;

import br.com.futebolmanager.action.AbstractAction;
import br.com.futebolmanager.business.equipe.EquipeBusiness;
import br.com.futebolmanager.vo.EquipeVO;
import br.com.futebolmanager.vo.UFVO;
import br.com.futebolmanager.vo.UsuarioVO;

public class EquipeAction extends AbstractAction{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public EquipeBusiness equipeBusiness;
	private List<UFVO> listUfs;
	private List<EquipeVO> equipesUsuario;
	
	public EquipeAction(){
	}
	
	public EquipeAction(EquipeBusiness timeBusiness){
		this.equipeBusiness = timeBusiness;
	}
	@Override
	public String execute() {
		
		return INPUT;
	}
	
	@Override
	public void prepare() throws Exception {
		//List<UFVO> ufs = timeBusiness.listAllUfs();
		UsuarioVO usuario = (UsuarioVO)session.get("sessionUser");
		setEquipesUsuario(equipeBusiness.listarEquipesUsuario(usuario));
		
	}
	
	public String cadastro(){
		
		return CADASTRO_EQUIPE;
	}
	
	public List<UFVO> getListUfs() {
		return listUfs;
	}

	public void setListUfs(List<UFVO> listUfs) {
		this.listUfs = listUfs;
	}

	public List<EquipeVO> getEquipesUsuario() {
		return equipesUsuario;
	}

	public void setEquipesUsuario(List<EquipeVO> equipesUsuario) {
		this.equipesUsuario = equipesUsuario;
	}

	

}
