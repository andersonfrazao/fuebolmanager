package br.com.futebolmanager.action;

import java.util.Map;
import java.util.ResourceBundle;

import org.apache.struts2.interceptor.SessionAware;

import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.Preparable;

public abstract class AbstractAction extends ActionSupport implements
		Preparable, SessionAware {

	protected Map<String, Object> session;
	protected static final String LOGIN = "login";
	protected static final String CADASTRO_TIME = "cadastro_time";	
	protected static final String CADASTRO_USUARIO = "cadastro_usuario";
	protected static final String USUARIO = "usuario";
	protected static final String EQUIPE = "equipe";
	protected static final String VOLTAR = "voltar";
	protected static final String EDIT	= "edit";
	protected static final String CADASTRO_EQUIPE = "cadastro_equipe";
	
	public abstract String execute();
	
	@Override
	public void setSession(Map session) {
		this.session = session;

	}
	
	@Override
	public void prepare() throws Exception {
		// TODO Auto-generated method stub

	}
	
	public String getMessageKey(String key){
		ResourceBundle bundle = ResourceBundle.getBundle("br.com.futebolmanager.messages.messages");
		String msg = bundle.getString(key);
		return msg;
		
	}

}
