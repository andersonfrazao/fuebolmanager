package br.com.futebolmanager.service.equipe;

import java.util.List;

import javax.persistence.Query;

import br.com.futebolmanager.service.AbstractService;
import br.com.futebolmanager.vo.EquipeVO;
import br.com.futebolmanager.vo.UsuarioVO;

public class EquipeService extends AbstractService{
	
	public List<EquipeVO> listarEquipesUsuario(UsuarioVO usuario){
		
		String sql = "select equipe from EquipeVO equipe where equipe.usuario.idUsuario =:idUsuario";

		Query query = getEntityManager().createQuery(sql);
		query.setParameter("idUsuario", usuario.getIdUsuario());
		List<EquipeVO> equipes = query.getResultList();
		
		return equipes;
		
	}
	
}