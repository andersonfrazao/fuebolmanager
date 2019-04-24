<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
                            <table  width="100%" class="label">
                                <tr>
                                    <th colspan="2"><s:text name="err.unexpected.occured"/></th>
                                </tr>
                                <tr>
                                    <td colspan="2"><s:text name="err.unexpected.description"/></td>
                                </tr>
                                <tr>
                                    <th rowspan="2" width="1%" nowrap="nowrap"><s:text name="err.message.label"/>: </th>
                                    <td><s:actionerror/></td>
                                </tr>
                                <tr>
                                    <td><s:property value="%{exception.message}" /></td>
                                </tr>
                                <tr>
                                    <th colspan="2"><s:text name="err.detail.label"/>: <img src="<s:url value="/images/abre.JPG"/>" align="top" alt="Show Errors" border="0" onclick="showIcons('techErrors');" /></th>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <div id="techErrors" style="display:none">
                                            <s:property value="%{exceptionStack}" />
                                        </div>
                                    </td>
                                </tr>
                            </table>
