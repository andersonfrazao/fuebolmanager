package br.com.futebolmanager.utils;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Utilities {
	
	
	public static String gerarSenhaMD5(String senha){
		
		MessageDigest algorithm;
		byte messageDigest[] = null;
		try {
			algorithm = MessageDigest.getInstance("MD5");
			messageDigest = algorithm.digest(senha.getBytes("UTF-8"));
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch(UnsupportedEncodingException e){
			// TODO 
			e.printStackTrace();
		}
		StringBuilder hexString = new StringBuilder();
		for (byte b : messageDigest) {
		  hexString.append(String.format("%02X", 0xFF & b));
		}
		String senhaCriptografada = hexString.toString();
		return senhaCriptografada;
		
	}
	
	public static void main(String[] args) throws NoSuchAlgorithmException, UnsupportedEncodingException {
		String senhaTeste = "programa";
		
		String cripto = gerarSenhaMD5(senhaTeste);
		
		System.out.println("SenhaCriptografada: " +cripto);

	}

}
