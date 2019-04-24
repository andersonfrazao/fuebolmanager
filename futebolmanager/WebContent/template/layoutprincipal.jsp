	<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!-- atributo da request -->
<tiles:importAttribute name="title" scope="request"/>
<html>
<head>
	<link rel="stylesheet" href="<s:url value="/css/futebol.css"/>"/>
	<link rel="stylesheet" href="<s:url value="/css/styles-30Jun05.css"/>" />
	<link rel="stylesheet" href="<s:url value="/css/simple-30Jun05.css"/>" />
	<!-- recupera o atributo setado na definição do tiles.xml -->
	<title>
			<tiles:getAsString name="title" ignore="true" />
	</title>
<script src="<s:url value="/js/script.js"/>" language="JavaScript"
	type="text/javascript"></script>
<script src="<s:url value="/js/bread.js"/>" language="JavaScript"
	type="text/javascript"></script>
<script src="<s:url value="/js/validacao.js"/>" language="JavaScript"
	type="text/javascript"></script>

<script src="<s:url value="/js/JavaScriptUtil.js"/>"
	language="JavaScript" type="text/javascript"></script>
<script src="<s:url value="/js/Parsers.js"/>" language="JavaScript"
	type="text/javascript"></script>
<script src="<s:url value="/js/InputMask.js"/>" language="JavaScript"
	type="text/javascript"></script>

</head>
<body>
<div  id="mainBody" > 
	<tiles:insertAttribute name="cabecalho"/>
				<div id="bodyHead" style="width: 745px;" >
					<h3 id="pageTitle" align="left"><tiles:getAsString name="pageTitle" ignore="true"/></h3>
				</div>			
				<div id="mainBody" style="text-align:center; 
				 font-size: 100%; padding-top: 2px; border-color: blue; width: 745px; ">
					<tiles:insertAttribute name="body"  flush="true"/>			
				</div>   	
<br><br><br><br>	
<tiles:insertAttribute name="rodape" />	
</div>			    
</body>
</html>
