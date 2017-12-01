// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/GPWidget.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentTitle" class\x3d"analysisTitle"\x3e\r\n        \x3ctable class\x3d"esriFormTable" \x3e\r\n          \x3ctr\x3e\r\n            \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"GPWidgetIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n            \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                  \x3cdiv class\x3d"esriFloatLeading" data-dojo-attach-point\x3d"_toolDescHelpDiv"\x3e\r\n                    \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e\r\n                  \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                    \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e\r\n              \x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"toolHeaderLine"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n      \x3cdiv class\x3d"section" data-dojo-attach-point\x3d"inputSectionNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\r\n        \x3ca href\x3d"#" title\x3d"${i18n.close}" class\x3d"esriFloatTrailing esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n        \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton"\x3e\r\n          ${i18n.runAnalysis}\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"output-pane" data-dojo-attach-point\x3d"outputPaneNode"\x3e\r\n      \x3cdiv class\x3d"section info" data-dojo-attach-point\x3d"infoNode"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"loadingNode" class\x3d"loading"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"infoTextNode" class\x3d"text"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"section" data-dojo-attach-point\x3d"outputSectionNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/GPWidget","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/NodeList dojo/NodeList-dom dojo/on dojo/Deferred dojo/promise/all dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect dijit/form/RadioButton dijit/form/DateTextBox dijit/form/NumberTextBox dijit/form/TimeTextBox dijit/Dialog dijit/InlineEditBox ./_Widget ./AnalysisBase ./_AnalysisOptions ./GPWidgetViewModel ./customgp/editorManager ./customgp/resultRendererManager ./customgp/common/dijit/Message ../../kernel ../../lang ../../tasks/Geoprocessor ../../tasks/GPMessage ../../tasks/JobInfo ../../layers/ImageParameters ../../graphicsUtils dojo/i18n!../../nls/jsapi dojo/i18n!./customgp/common/nls/main dojo/i18n!./customgp/nls/strings dojo/text!./templates/GPWidget.html".split(" "),
function(n,P,b,g,u,Q,v,R,S,w,x,h,T,U,V,W,k,y,z,A,X,B,C,D,E,Y,Z,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,F,na,G,H,p,m,oa,I,pa,J,q,r,K,L,l,t,M,N){n=F.createSubclass([B,C,D,E,A,G],{declaredClass:"esri.dijit.analysis.GPWidget",templateString:N,widgetsInTemplate:!0,viewModelType:H,i18n:null,toolName:"GPWidget",helpFileName:"GPWidget",constructor:function(a){a.containerNode&&(this.container=a.containerNode)},destroy:function(){this._clearLastInput();this._clearLastResult();this._clearMessageInterval();this.inherited(arguments)},
_onClose:function(a){a||(this._clearLastInput(),this._clearLastResult(),this._clearMessageInterval())},postMixInProperties:function(){this.inherited(arguments);this.i18n={};b.mixin(this.i18n,l.common);b.mixin(this.i18n,l.analysisTools);b.mixin(this.i18n,l.analysisMsgCodes);b.mixin(this.i18n,l.analysisSettings);b.mixin(this.i18n,l.aggregatePointsTool);b.mixin(this.i18n,t.common);b.mixin(this.i18n,t.units);b.mixin(this.i18n,M);this._initModelWatchers()},postCreate:function(){this.inherited(arguments);
this._loadConnections();this.renderUI()},_loadConnections:function(){u.connect(this._closeBtn,"onclick",b.hitch(this,this._onClose,!1));this.own(this.on("start",b.hitch(this,this._onClose,!0)))},startup:function(){},renderUI:function(){p.setMap(this.viewModel.map);p.setNls(this.i18n);m.setMap(this.viewModel.map);m.setNls(this.i18n);this.viewModel.title&&this._updateTitle();this.viewModel.inputParams&&this._createInputNodes();this.viewModel.taskUrl&&this._setUpGP()},_initModelWatchers:function(){this.own(this.viewModel.watch("title",
b.hitch(this,this._updateTitle)),this.viewModel.watch("inputParams",b.hitch(this,this._createInputNodes)),this.viewModel.watch("taskUrl",b.hitch(this,this._setUpGP)))},_setUpGP:function(){this.gp=new J(this.viewModel.taskUrl);this.gp.setOutSpatialReference(this.viewModel.map.spatialReference);this.own(k(this.gp,"execute-complete",b.hitch(this,this.onExecuteComplete)));this.own(k(this.gp,"job-complete",b.hitch(this,this.onJobComplete)));this.own(k(this.gp,"job-cancel",b.hitch(this,this.onJobCancel)));
this.own(k(this.gp,"status-update",b.hitch(this,this.onStatusUpdate)));this.own(k(this.gp,"get-result-data-complete",b.hitch(this,this.onGetResultDataComplate)));this.own(k(this.gp,"get-result-image-layer-complete",b.hitch(this,this.onGetResultImageLayerComplete)));this.own(k(this.gp,"error",b.hitch(this,this.onError)))},_createInputNodes:function(){this.inputNodes&&0<this.inputNodes.length&&g.forEach(this.inputNodes,function(a,f){h.destroy(a)},this);this.inputNodes=[];this.drawnLayers=[];g.forEach(this.viewModel.inputParams,
function(a,f){this._createInputNode(a,f)},this)},_createInputNode:function(a,f){var d=h.create("div",{"class":"esriAnalysisPadding1"},this.inputSectionNode),b=h.create("div",{"class":"esriAnalysisStepsLabel",title:a.tooltip||a.label||""},d);h.create("span",{"class":"esriTrailingMargin025 esriAnalysisNumberLabel",innerHTML:f+1+""},b);h.create("span",{"class":"",innerHTML:a.label},b);a.required&&h.create("span",{"class":"label-star",innerHTML:"*"},b);var b=h.create("div",{"class":"esriLeadingMargin1"},
d),e=p.createEditor(a,"input","widget",{uid:this.id,config:this.viewModel});e.placeAt(b);"SelectFeatureSetFromDraw"===e.editorName&&this.drawTools.push(e.drawBox);d.param=a;d.inputEditor=e;this.inputNodes.push(d);!1===a.visible&&w.set(d,"display","none");return d},_handleSaveBtnClick:function(){this._form.validate()&&(this.set("disableRunAnalysis",!0),this._clearLastResult(),this._getInputParamValues().then(b.hitch(this,function(a){console.log(a);this.inputValues=a;this.viewModel.serverInfo.isSynchronous?
this.gp.execute(a):this.gp.submitJob(a);console.log("Success")})))},_getInputParamValues:function(){var a=new y,f={},d=[],c,e="";g.forEach(this.inputNodes,function(a){c=a.inputEditor.getGPValue();c.param=a.param;d.push(c)},this);z(d).then(b.hitch(this,function(b){for(var c=0;c<b.length;c++)if(!d[c].param.required||null!==b[c]&&void 0!==b[c])f[d[c].param.name]=b[c];else{e=d[c].param.label+" "+this.i18n.requiredInfo;a.reject(e);return}a.resolve(f)}),function(e){a.reject(e)});return a},_createOutputNodes:function(a){var f=
[];this.resultNodes=[];this.resultLayers=[];g.forEach(this.viewModel.outputParams,function(e,b){f.push(this._createOutputNode(e,a[b]))},this);if(g.some(f,function(a){return null!==a})){var d=[];g.forEach(a,b.hitch(this,function(a){"GPFeatureRecordSetLayer"===a.dataType&&(a=a.value&&a.value.features)&&0<a.length&&(d=d.concat(a))}));if(0<d.length)try{var c=L.graphicsExtent(d);c&&this.viewModel.map.setExtent(c.expand(1.4))}catch(e){console.error(e)}}},_createOutputNode:function(a,b){var f;if(a.visible){try{f=
m.createResultRenderer(a,b,{uid:this.id,config:this.viewModel})}catch(O){console.error(O),f=m.createResultRenderer("error",b,{uid:this.id,config:this.viewModel})}var c=h.create("div",{"class":"output-node"},this.outputSectionNode);this.resultNodes.push(c);var e=h.create("div",{"class":"output-label",title:a.tooltip||a.label||"",innerHTML:a.label},c);c.param=a;c.labelNode=e;e=h.create("div",{"class":"renderer-container"},c);f.placeAt(e);f.startup();c.resultRenderer=f;return c}return null},_updateTitle:function(){x.set(this._titleLbl,
"innerHTML",this.viewModel.title)},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a);this._saveBtn.set("iconClass",a?"esriLoading":"")},onExecuteComplete:function(a){this.set("disableRunAnalysis",!1);var b;a.messages&&0<a.messages.length&&(b=g.filter(a.messages,function(a){return a.type===q.TYPE_WARNING||a.type===q.TYPE_ERROR}),0<b.length&&this._createErrorMessages(b));this._createOutputNodes(a.results);console.log(a.results)},onJobComplete:function(a){this.set("disableRunAnalysis",
!1);this._clearMessageInterval();if(a.jobInfo.jobStatus!==r.STATUS_SUCCEEDED)this._createErrorMessages(a.jobInfo.messages);else if(a.jobParams=this.inputParams,this.viewModel.serverInfo.useResultMapServer){var b=[];g.some(this.viewModel.outputParams,function(a){if("MapServiceLayer"===a.dataType)return b=a.layerNames,!0});var d=new K({imageSpatialReference:this.viewModel.map.spatialReference}),c=this._getResultMapServiceParam();c&&!0!==c.visible||(this.gp.getResultImageLayer(a.jobInfo.jobId,null,d),
g.forEach(this.viewModel.outputParams,function(e){0>b.indexOf(e.name)&&0>b.indexOf(e.label)&&("GPFeatureRecordSetLayer"===e.dataType||"GPRasterDataLayer"===e.dataType||"GPRecordSet"===e.dataType)&&this.gp.getResultData(a.jobInfo.jobId,e.name)},this));g.forEach(this.viewModel.outputParams,function(b){b.visible&&"GPFeatureRecordSetLayer"!==b.dataType&&"GPRasterDataLayer"!==b.dataType&&"GPRecordSet"!==b.dataType&&this.gp.getResultData(a.jobInfo.jobId,b.name)},this)}else g.forEach(this.viewModel.outputParams,
function(b){b.visible&&this.gp.getResultData(a.jobInfo.jobId,b.name)},this)},onJobCancel:function(a){this.infoTextNode.innerHTML="Canceled";this._clearMessageInterval()},onStatusUpdate:function(a){this.jobId=a.jobInfo.jobId;a.jobInfo.jobStatus===r.STATUS_SUCCEEDED?(this.set("disableRunAnalysis",!1),this._clearMessageInterval()):console.log(a.jobInfo.jobStatus);!this.messageInterval&&this.jobId&&this._setupMessageInterval();a.jobParams=this.inputParams},onGetResultDataComplate:function(a){this._createOutputNode(this._getOutputParamByName(a.result.paramName),
a.result)},onGetResultImageLayerComplete:function(a){if(a=a.layer){var b=a.url.substring(a.url.lastIndexOf("/")+1),b={name:b,title:b,tooltip:b,dataType:"result map service",visible:!0};a._wab_type="ArcGISDynamicMapServiceLayer";var d=this._getResultMapServiceParam();d&&(b.label=d.label,b.tooltip=d.tooltip,a.title=d.label);null!==this._createOutputNode(b,a)&&this.resultLayers.push(a)}},onError:function(a){this.infoTextNode.innerHTML=a.error.message;this._clearMessageInterval()},_createErrorMessages:function(a){console.log(a)},
_setupMessageInterval:function(){this.messageInterval=setInterval(b.hitch(this,this._updateJobMessage),3E3)},_clearMessageInterval:function(){this.jobId="";this.messageInterval&&(clearInterval(this.messageInterval),this.messageInterval=null)},_getResultMapServiceParam:function(){var a;g.some(this.viewModel.outputParams,function(b){if("MapServiceLayer"===b.dataType)return a=b,!0});return a},_getOutputParamByName:function(a){for(var b=0;b<this.viewModel.outputParams.length;b++)if(this.viewModel.outputParams[b].name===
a)return this.viewModel.outputParams[b]},_clearLastInput:function(){g.forEach(this.inputNodes,function(a){a.inputEditor.clear&&b.isFunction(a.inputEditor.clear)&&a.inputEditor.clear()},this)},_clearLastResult:function(){h.empty(this.infoTextNode);g.forEach(this.resultNodes,function(a){h.destroy(a.labelNode);a.resultRenderer&&a.resultRenderer.destroy();h.destroy(a)});g.forEach(this.resultLayers,function(a){null!==a&&this.viewModel.map.removeLayer(a)},this);this.resultNodes=[];this.resultLayers=[]},
_showLoading:function(){},_hideLoading:function(){}});v("extend-esri")&&b.setObject("dijit.analysis.GPWidget",n,I);return n});