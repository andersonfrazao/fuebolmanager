package br.com.futebolmanager.vo;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="FTB_EQUIPE")
public class EquipeVO implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="ID_EQUIPE")
	private Long idEquipe;
	
	@ManyToOne(fetch= FetchType.EAGER)
	@JoinColumn(name="ID_USUARIO")
	private UsuarioVO usuario;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="ID_UF")
	private UFVO ufVO;
	
	@Column(name="NM_EQUIPE")
	private String nmEquipe;
	
	@Column(name="NM_RESPONSAVEL")
	private String nmResponsavel;
	
	@Column(name="DT_FUNDACAO")
	private Date dtFundacao;
	
	@Column(name="NR_GOLS")
	private int nrGols;
		
	@Column(name="DS_ENDERECO")
	private String dsEndereco;
	
	@Column(name="NM_CIDADE")
	private String nmCidade;
	
	@Column(name="NM_BAIRRO")
	private String nmBairro;
	
	@Column(name="NR_CEP")
	private String nrCep;
	
	@Column(name="DS_EMAIL")
	private String dsEmail;
	
	@Column(name="NR_DDD")
	private int nrDDD;
	
	@Column(name="NR_TELEFONE1")
	private String nrTelefone1;
	
	@Column(name="NR_TELEFONE2")
	private String nrTelefone2;



	public UsuarioVO getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioVO usuario) {
		this.usuario = usuario;
	}

	public UFVO getUfVO() {
		return ufVO;
	}

	public void setUfVO(UFVO ufVO) {
		this.ufVO = ufVO;
	}

	public Long getIdEquipe() {
		return idEquipe;
	}

	public void setIdEquipe(Long idEquipe) {
		this.idEquipe = idEquipe;
	}

	public String getNmEquipe() {
		return nmEquipe;
	}

	public void setNmEquipe(String nmEquipe) {
		this.nmEquipe = nmEquipe;
	}

	public Date getDtFundacao() {
		return dtFundacao;
	}

	public void setDtFundacao(Date dtFundacao) {
		this.dtFundacao = dtFundacao;
	}

	public int getNrGols() {
		return nrGols;
	}

	public void setNrGols(int nrGols) {
		this.nrGols = nrGols;
	}

	public String getDsEndereco() {
		return dsEndereco;
	}

	public void setDsEndereco(String dsEndereco) {
		this.dsEndereco = dsEndereco;
	}

	public String getNmCidade() {
		return nmCidade;
	}

	public void setNmCidade(String nmCidade) {
		this.nmCidade = nmCidade;
	}

	public String getNmBairro() {
		return nmBairro;
	}

	public void setNmBairro(String nmBairro) {
		this.nmBairro = nmBairro;
	}

	public String getNrCep() {
		return nrCep;
	}

	public void setNrCep(String nrCep) {
		this.nrCep = nrCep;
	}

	public String getDsEmail() {
		return dsEmail;
	}

	public void setDsEmail(String dsEmail) {
		this.dsEmail = dsEmail;
	}

	public int getNrDDD() {
		return nrDDD;
	}

	public void setNrDDD(int nrDDD) {
		this.nrDDD = nrDDD;
	}

	public String getNrTelefone1() {
		return nrTelefone1;
	}

	public void setNrTelefone1(String nrTelefone1) {
		this.nrTelefone1 = nrTelefone1;
	}

	public String getNrTelefone2() {
		return nrTelefone2;
	}

	public void setNrTelefone2(String nrTelefone2) {
		this.nrTelefone2 = nrTelefone2;
	}

	public String getNmResponsavel() {
		return nmResponsavel;
	}

	public void setNmResponsavel(String nmResponsavel) {
		this.nmResponsavel = nmResponsavel;
	}

	
}
