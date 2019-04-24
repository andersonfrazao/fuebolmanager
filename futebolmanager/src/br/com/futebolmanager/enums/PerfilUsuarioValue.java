package br.com.futebolmanager.enums;

public enum PerfilUsuarioValue {
	ADMINSTRADOR(1);
	
	private long value;
	
	private PerfilUsuarioValue(long value){
		this.value = value;
	}
	
	public long getValue() {
		return value;
		
	}
	
}
