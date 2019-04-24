package br.com.futebolmanager.service.uf;

import java.util.List;

import javax.persistence.Query;

import br.com.futebolmanager.service.AbstractService;
import br.com.futebolmanager.vo.UFVO;

public class UfService extends AbstractService {
	
	public List<UFVO> listAllUfs(){
		Query query = getEntityManager().createNamedQuery("findAllUfs");
		List<UFVO> ufs = query.getResultList();
		return ufs;
	}
	public UFVO findById(int idUf){
		UFVO uf = getEntityManager().find(UFVO.class, idUf);
		return uf;
	}

}
