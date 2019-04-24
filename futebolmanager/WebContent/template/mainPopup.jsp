<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%
response.setHeader("Cache-Control", "no-cache"); //HTTP 1.1
response.setHeader("Pragma", "no-cache"); //HTTP 1.0
response.setDateHeader("Expires", 0); //prevents caching at the proxy server
%> 
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="/struts-tags" prefix="s" %>

<tiles:importAttribute name="title" scope="request"/>
<tiles:importAttribute name="pageTitle" scope="request"/>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
    		<link rel="stylesheet" href="<s:url value="/css/getmoney.css"/>" />
        <title><tiles:getAsString name="title"/></title>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"/>
        <meta http-equiv="cache-control"   content="no-cache" />
        <meta http-equiv="expires" content = "0" />
        <meta http-equiv="pragma" content="no-cache" />
        <s:head/>
    </head>
    <body >
        <div id="conteudo" class="toporight" style="heigth:1%">
            <tiles:insertAttribute name="body" flush="true"/>
        </div>
    </body>
</html>