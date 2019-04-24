package br.com.futebolmanager.vo;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@NamedQueries( {
	@NamedQuery (name = "findAllUfs", query = "SELECT ufVO FROM UFVO ufVO ORDER BY ufVO.idUf")
} )
@Table(name="FTB_UF")
public class UFVO implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	@Id
	@Column(name="ID_UF")
	private Integer idUf;
	
	@Column(name="CD_UF")
	private String cdUf;
	
	@Column(name="DS_UF")
	private String dsUf;

	public int getIdUf() {
		return idUf;
	}

	public void setIdUf(Integer idUf) {
		this.idUf = idUf;
	}

	public String getCdUf() {
		return cdUf;
	}

	public void setCdUf(String cdUf) {
		this.cdUf = cdUf;
	}

	public String getDsUf() {
		return dsUf;
	}

	public void setDsUf(String dsUf) {
		this.dsUf = dsUf;
	}
	
}
