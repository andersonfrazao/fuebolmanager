package br.com.futebolmanager.action.equipe;

import org.apache.struts2.interceptor.validation.SkipValidation;

import br.com.futebolmanager.action.AbstractAction;

public class CadastroEquipeAction extends AbstractAction {


	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	


	@Override
	@SkipValidation
	public void prepare() throws Exception {
		// TODO Auto-generated method stub
		super.prepare();
	}
	
	
	@Override
	public String execute() {
		// TODO Auto-generated method stub
		return INPUT;
	}
	
	@SkipValidation
	public String voltar(){
		return VOLTAR;
	}

}
