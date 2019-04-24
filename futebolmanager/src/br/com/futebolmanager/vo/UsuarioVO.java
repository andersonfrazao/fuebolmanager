package br.com.futebolmanager.vo;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="FTB_USUARIO")
public class UsuarioVO implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@SequenceGenerator(name = "usuario_sq", sequenceName = "FTB_USUARIO_sq")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "usuario_sq")
	@Column(name="ID_USUARIO")
	private Integer idUsuario;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="ID_PERFIL")
	private PerfilVO perfilVO;
	
	@Column(name="DS_EMAIL")
	private String dsEmail;
	
	@Column(name="DS_SENHA")
	private String dsSenha;
	
	@Column(name="DT_INCLUSAO")
	private Date dtInclusao;
	
	@Column(name="DS_NOME")
	private String dsNome;
	
	@Column(name="DS_SOBRENOME")
	private String dsSobreNome;

	public Integer getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(Integer idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getDsEmail() {
		return dsEmail;
	}

	public void setDsEmail(String dsEmail) {
		this.dsEmail = dsEmail;
	}

	public String getDsSenha() {
		return dsSenha;
	}

	public void setDsSenha(String dsSenha) {
		this.dsSenha = dsSenha;
	}

	public Date getDtInclusao() {
		return dtInclusao;
	}

	public void setDtInclusao(Date dtInclusao) {
		this.dtInclusao = dtInclusao;
	}

	public String getDsNome() {
		return dsNome;
	}

	public void setDsNome(String dsNome) {
		this.dsNome = dsNome;
	}

	public String getDsSobreNome() {
		return dsSobreNome;
	}

	public void setDsSobreNome(String dsSobreNome) {
		this.dsSobreNome = dsSobreNome;
	}

	public PerfilVO getPerfilVO() {
		return perfilVO;
	}

	public void setPerfilVO(PerfilVO perfilVO) {
		this.perfilVO = perfilVO;
	}

	
	
}
