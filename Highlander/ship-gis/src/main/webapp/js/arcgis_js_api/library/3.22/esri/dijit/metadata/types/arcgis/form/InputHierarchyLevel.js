// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/form/InputHierarchyLevel","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/topic dojo/query dijit/registry dojo/dom-class dojo/dom-style dojo/has ../../../../../kernel ./InputSelectCode dojo/i18n!../../../nls/i18nArcGIS".split(" "),function(g,n,l,p,h,k,e,u,q,r,t,v){g=g([t],{postCreate:function(){this.inherited(arguments);var d=this;this.own(p.subscribe("gxe/xnode-destroyed",function(c){try{c&&c.xnode&&"/metadata/mdHrLv"===c.xnode.gxePath&&d.emitInteractionOccurred()}catch(a){console.error(a)}}))},
emitInteractionOccurred:function(d){this.inherited(arguments);try{var c=this.parentXNode.gxeDocument;(c.isAgsISO19139||c.isAgsINSPIRE)&&this._checkLevelName();(c.isAgsISO19139||c.isAgsINSPIRE||c.isAgsNAP||c.isAgsFGDC)&&this._checkService()}catch(a){console.error(a)}},_checkLevelName:function(){var d=this.parentXNode.parentElement.parentElement.parentElement.domNode,c,a,b,f=this.parentXNode.gxeDocument;b=!1;if(f.isAgsISO19139||f.isAgsINSPIRE)if(b=h("[data-gxe-path\x3d'/metadata/mdHrLv/ScopeCd/@value']",
d),b=l.some(b,function(b){if(a=k.byNode(b))if(c=a.inputWidget.getInputValue(),null!==c&&""!==c&&"005"!==c&&"006"!==c)return!0}),a=this._findFirstInputWgt("/metadata/mdHrLvName",d))d=a.parentXNode.multiplicityHeader.labelNode,b?(a.parentXNode.minOccurs=1,a.parentXNode.multiplicityHeader.minOccurs=1,e.remove(d,"gxeOptionalLabel"),e.add(d,"gxeMandatoryLabel")):(a.parentXNode.minOccurs=0,a.parentXNode.multiplicityHeader.minOccurs=0,e.remove(d,"gxeMandatoryLabel"),e.add(d,"gxeOptionalLabel")),a.emitInteractionOccurred()},
_checkQuality:function(){var d=this.parentXNode.parentElement.parentElement.parentElement.domNode,c,a,b,f=this.parentXNode.gxeDocument,m=b=!1,g=!1;if(f.isAgsISO19139||f.isAgsINSPIRE||f.isAgsNAP)b=h("[data-gxe-path\x3d'/metadata/mdHrLv/ScopeCd/@value']",d),l.forEach(b,function(b){if(a=k.byNode(b))c=a.inputWidget.getInputValue(),"005"==c?m=!0:"006"===c&&(g=!0)});if(f.isAgsISO19139||f.isAgsNAP)b=m||g,(a=this._findElement("/metadata/dqInfo",d))&&a.labelWidget&&(d=a.labelWidget.domNode,b?(a.minOccurs=
1,e.remove(d,"gxeOptionalLabel"),e.add(d,"gxeMandatoryLabel")):(a.minOccurs=0,e.remove(d,"gxeMandatoryLabel"),e.add(d,"gxeOptionalLabel")))},_checkService:function(){var d=this.parentXNode.parentElement.parentElement.parentElement.domNode,c,a,b,f;b=this.parentXNode.gxeDocument;var g=f=!1;if(b.isAgsISO19139||b.isAgsINSPIRE||b.isAgsNAP||b.isAgsFGDC)f=h("[data-gxe-path\x3d'/metadata/mdHrLv/ScopeCd/@value']",d),l.forEach(f,function(b){if(a=k.byNode(b))c=a.inputWidget.getInputValue(),"014"==c&&(g=!0)});
if(b.isAgsISO19139||b.isAgsINSPIRE||b.isAgsNAP){f=g;if(a=this._findInputWgt("/metadata/dataIdInfo/svType/genericName",d))b=a.parentXNode.labelNode,f?(a.parentXNode.minOccurs=1,e.remove(b,"gxeOptionalLabel"),e.add(b,"gxeMandatoryLabel")):(a.parentXNode.minOccurs=0,e.remove(b,"gxeMandatoryLabel"),e.add(b,"gxeOptionalLabel")),a.emitInteractionOccurred();if(a=this._findInputWgt("/metadata/dataIdInfo/svCouplType/CouplTypCd/@value",d))b=a.parentXNode.parentElement.parentElement.labelNode,f?(a.parentXNode.minOccurs=
1,a.parentXNode.parentElement.minOccurs=1,a.parentXNode.parentElement.parentElement.minOccurs=1,e.remove(b,"gxeOptionalLabel"),e.add(b,"gxeMandatoryLabel")):(a.parentXNode.minOccurs=0,a.parentXNode.parentElement.minOccurs=0,a.parentXNode.parentElement.parentElement.minOccurs=0,e.remove(b,"gxeMandatoryLabel"),e.add(b,"gxeOptionalLabel")),a.emitInteractionOccurred()}},_findElement:function(d,c){var a;return(a=h("[data-gxe-path\x3d'"+d+"']",c))&&1===a.length?a=k.byNode(a[0]):null},_findFirstInputWgt:function(d,
c){var a;return(a=h("[data-gxe-path\x3d'"+d+"']",c))&&0<a.length&&(a=k.byNode(a[0]))?a.inputWidget:null},_findInputWgt:function(d,c){var a;return(a=h("[data-gxe-path\x3d'"+d+"']",c))&&1===a.length&&(a=k.byNode(a[0]))?a.inputWidget:null}});q("extend-esri")&&n.setObject("dijit.metadata.types.arcgis.form.InputHierarchyLevel",g,r);return g});