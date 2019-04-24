package br.com.futebolmanager.service.perfil;

import java.util.List;

import javax.persistence.Query;

import br.com.futebolmanager.service.AbstractService;
import br.com.futebolmanager.vo.PerfilVO;

public class PerfilService extends AbstractService{
	
	public List<PerfilVO> listPerfil(){
		
		String sql = "select perfil from PerfilVO perfil order by perfil.nmPerfil";
		Query query = getEntityManager().createQuery(sql);
		List<PerfilVO> listPerfil = query.getResultList();
		return listPerfil;
	}
	

}
