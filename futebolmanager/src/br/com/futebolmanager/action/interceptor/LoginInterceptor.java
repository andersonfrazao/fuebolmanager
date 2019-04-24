package br.com.futebolmanager.action.interceptor;

import java.util.Map;

import br.com.futebolmanager.action.AbstractAction;
import br.com.futebolmanager.vo.UsuarioVO;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.Interceptor;

public class LoginInterceptor implements Interceptor {

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void init() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public String intercept(ActionInvocation invocation) throws Exception {
		Map<String, Object> sessao=	invocation.getInvocationContext().getSession();
		UsuarioVO usuario = (UsuarioVO)sessao.get("sessionUser");
		if(sessao == null || usuario == null ){
			return "sessaoexpirada";
		} else {
			return invocation.invoke();
		}
	}




}
