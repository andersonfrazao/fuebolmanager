package br.com.futebolmanager.utils;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.Charset;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESKeySpec;


public class CryptoDES {
	 private Cipher cipher;
	 private byte[] encryptKey;
	 private KeySpec keySpec;
	 private SecretKeyFactory secretKeyFactory;
	 private SecretKey secretKey;
	 private static final Charset ISO_CHARSET = Charset.forName("ISO-8859-1");
	 private static final String UTF_8_CHARSET = "UTF-8";
	  
	 /**
	  * Obtem a instancia da classe, passando como parametro uma
	         * uma chave privada
	  *
	  * @return
	  * @throws InvalidKeyException
	  * @throws UnsupportedEncodingException
	  * @throws NoSuchAlgorithmException
	  * @throws NoSuchPaddingException
	  * @throws InvalidKeySpecException
	  */
	 public static CryptoDES newInstance(String key) throws InvalidKeyException,
	   UnsupportedEncodingException, NoSuchAlgorithmException,
	   NoSuchPaddingException, InvalidKeySpecException {
	  return new CryptoDES(key);
	 }
	 
	 /**
	  * Constructor recebendo chave por parametro
	  *
	  * @throws UnsupportedEncodingException
	  * @throws NoSuchAlgorithmException
	  * @throws NoSuchPaddingException
	  * @throws InvalidKeyException
	  * @throws InvalidKeySpecException
	  */
	 private CryptoDES(String key) throws UnsupportedEncodingException,
	   NoSuchAlgorithmException, NoSuchPaddingException,
	   InvalidKeyException, InvalidKeySpecException {
	  encryptKey = key.getBytes(UTF_8_CHARSET);
	  cipher = Cipher.getInstance("DES");
	  keySpec = new DESKeySpec(encryptKey);
	  secretKeyFactory = SecretKeyFactory.getInstance("DES");
	  secretKey = secretKeyFactory.generateSecret(keySpec);
	 }
	 
	 /**
	  * Metodo responsavel por encriptar um valor
	  *
	  * @param value
	  * @return
	  * @throws InvalidKeyException
	  * @throws IllegalBlockSizeException
	  * @throws BadPaddingException
	  * @throws UnsupportedEncodingException
	  */
	 public String encrypt(String value) throws InvalidKeyException,
	   IllegalBlockSizeException, BadPaddingException,
	   UnsupportedEncodingException {
	  cipher.init(Cipher.ENCRYPT_MODE, secretKey);
	  byte[] cipherText = cipher.doFinal(value.getBytes(UTF_8_CHARSET));
	  return decodeISO(cipherText);
	 }
	 
	 /**
	  * Metodo responsavel por decriptografar um valor
	  *
	  * @param value
	  * @return
	  * @throws InvalidKeyException
	  * @throws IllegalBlockSizeException
	  * @throws BadPaddingException
	  * @throws IOException
	  */
	 public String decrypt(String value) throws InvalidKeyException,
	   IllegalBlockSizeException, BadPaddingException, IOException {
	  cipher.init(Cipher.DECRYPT_MODE, secretKey);
	  byte[] decipherText = cipher.doFinal(encodeISO(value));
	  return new String(decipherText);
	 }
	     
	 private byte[] encodeISO(String string) throws UnsupportedEncodingException {
	   
	  return string.getBytes("ISO-8859-1");
	 }
	  
	 private String decodeISO(byte[] bytes) throws UnsupportedEncodingException {
	     return new String(bytes, "ISO-8859-1");
	    }
	 
	
/*
	public static void main(String[] arqs) throws Exception{
	  String chavePrivada = "futeboltotal74";
	  CryptoDES cryptoDES = CryptoDES.newInstance(chavePrivada);
	  String valor = "Boa tarde";
	  String valorCriptografado = cryptoDES.encrypt(valor);
	  String encode = URLEncoder.encode(valorCriptografado, "UTF-8");
	  String valorDecriptografado = cryptoDES.decrypt(valorCriptografado);
	   
	  System.out.println("Valor a ser criptografado : "+valor);
	  System.out.println("Valor criptografado : "+valorCriptografado);
	  System.out.println("Valor decriptografado : "+valorDecriptografado);
	 }*/
}