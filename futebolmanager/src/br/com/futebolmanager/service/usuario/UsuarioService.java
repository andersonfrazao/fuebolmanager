package br.com.futebolmanager.service.usuario;

import java.util.List;

import javax.persistence.Query;

import org.springframework.transaction.annotation.Transactional;

import br.com.futebolmanager.service.AbstractService;
import br.com.futebolmanager.vo.UsuarioVO;

public class UsuarioService extends AbstractService {
	
	
	public List<UsuarioVO> listarUsuarios(){
		String query = "select usuario from UsuarioVO usuario order by usuario.dtInclusao";
		Query result = getEntityManager().createQuery(query);
		List<UsuarioVO> usuarios = result.getResultList();
		return usuarios;
		
	}
	
	public List<UsuarioVO> verficarEmail(String dsEmail){
		String sql = "select usuario from UsuarioVO usuario where usuario.dsEmail = :dsEmail";
		Query query = getEntityManager().createQuery(sql);
		query.setParameter("dsEmail", dsEmail);
		List<UsuarioVO> results = query.getResultList();
	
		return results;
		
	}
	
	@Transactional
	public void incluirUsuario(UsuarioVO usuario){
		getEntityManager().persist(usuario);
		getEntityManager().flush();
	}
	
	@Transactional
	public void alterarUsuario(UsuarioVO usuario){
		UsuarioVO attached = findById(usuario.getIdUsuario());
		attached.setDsEmail(usuario.getDsEmail());
		attached.setDsNome(usuario.getDsNome());
		attached.setDsSobreNome(usuario.getDsSobreNome());
		attached.setPerfilVO(usuario.getPerfilVO());	
		getEntityManager().merge(attached);
		getEntityManager().flush();
	}
	
	
	@Transactional
	public void excluirUsuario(UsuarioVO usuario){
		UsuarioVO attached = findById(usuario.getIdUsuario());
		getEntityManager().remove(attached);
	}
	
	public UsuarioVO findById(Integer id) {
		return getEntityManager().find(UsuarioVO.class, id);
	}
	
}
