package br.com.futebolmanager.action;

import java.util.Map;

import org.apache.struts2.dispatcher.SessionMap;

import com.opensymphony.xwork2.ActionContext;

import br.com.futebolmanager.vo.UsuarioVO;

public class InicioAction extends AbstractAction{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	
	@Override
	public void prepare() throws Exception {
		UsuarioVO usuario = (UsuarioVO)session.get("usuarioVO");
		System.out.println(usuario.getDsNome());
		
		Map sessao = ActionContext.getContext().getSession();
		
		UsuarioVO user = (UsuarioVO)sessao.get("usuarioVO");
		
		System.out.println(user.getDsEmail());
		
		
		
		//session.remove("usuario");
		//((SessionMap)session).invalidate();
		
		
		super.prepare();
	}
	@Override
	public String execute() {
		
		return INPUT;
	}
	
	

}
