package br.com.futebolmanager.business.usuario;

import java.sql.Date;
import java.util.List;

import br.com.futebolmanager.service.perfil.PerfilService;
import br.com.futebolmanager.service.usuario.UsuarioService;
import br.com.futebolmanager.vo.PerfilVO;
import br.com.futebolmanager.vo.UsuarioVO;

public class UsuarioBusiness {
	
	
	private UsuarioService usuarioService;
	private PerfilService perfilService;
		
	public UsuarioBusiness(){	
	}
	
	public UsuarioBusiness(UsuarioService usuarioService){
		this.usuarioService = usuarioService;
	}
	
	public List<UsuarioVO> listarUsuarios() {
		List<UsuarioVO> usuarios = usuarioService.listarUsuarios();
		return usuarios;
	}
	
	public List<PerfilVO> listPerfil(){
		return perfilService.listPerfil();
	}
	
	public UsuarioVO findById(Integer id){
		UsuarioVO usuario = usuarioService.findById(id);
		return usuario;
	}
	
	
	public void cadastrar(UsuarioVO usuarioVO, String dsSenha){
		PerfilVO perfil = new PerfilVO();
		perfil.setIdPerfil(usuarioVO.getPerfilVO().getIdPerfil());
		usuarioVO.setPerfilVO(perfil);
		usuarioVO.setDsSenha(dsSenha);
		usuarioVO.setPerfilVO(perfil);
		usuarioVO.setDtInclusao(new Date(new java.util.Date().getTime()));
		usuarioService.incluirUsuario(usuarioVO);
	}
	
	public boolean verificarEmail(UsuarioVO usuario){
		boolean resultado = false;
		String email = usuario.getDsEmail();
		List <UsuarioVO> usuarios = usuarioService.verficarEmail(email);
		if(usuarios.size() > 0){
			resultado = true;
		}
		return resultado;
	}
	
	public void alterarUsuario(UsuarioVO usuarioVO){
		usuarioService.alterarUsuario(usuarioVO);

	}
	
	public void excluirUsuario(UsuarioVO usuarioVO){
		usuarioService.excluirUsuario(usuarioVO);
	}

	public UsuarioService getUsuarioService() {
		return usuarioService;
	}

	public void setUsuarioService(UsuarioService usuarioService) {
		this.usuarioService = usuarioService;
	}

	public PerfilService getPerfilService() {
		return perfilService;
	}

	public void setPerfilService(PerfilService perfilService) {
		this.perfilService = perfilService;
	}
	
	
	
	
	

}
