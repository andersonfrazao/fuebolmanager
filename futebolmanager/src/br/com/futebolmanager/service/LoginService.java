package br.com.futebolmanager.service;

import java.util.List;

import javax.persistence.Query;

import org.apache.commons.lang.StringUtils;

import br.com.futebolmanager.vo.UsuarioVO;

public class LoginService extends AbstractService{
	
	
	public UsuarioVO getLogin(UsuarioVO usuario) {
		
		//Query query = getEntityManager().createNativeQuery("SELECT U.DS_EMAIL, U.DS_SENHA FROM FTB_USUARIO U WHERE U.DS_EMAIL = :dsEmail AND U.DS_SENHA = :dsSenha");
		Query query = getEntityManager().createQuery("select usuario from UsuarioVO usuario where usuario.dsEmail = :dsEmail and usuario.dsSenha = :dsSenha");
		query.setParameter("dsEmail", usuario.getDsEmail());
		query.setParameter("dsSenha", usuario.getDsSenha());
		
		List<UsuarioVO> result =  query.getResultList();
		
		if (result.size() > 0){
			return result.get(0);
		}else {
			return null;
		}
		
	}
	
	
	

}
