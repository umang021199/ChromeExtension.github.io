"use strict";(self.webpackChunksfsce=self.webpackChunksfsce||[]).push([[802],{7802:(P,b,s)=>{s.r(b),s.d(b,{BulkObjectCreationModule:()=>E});var d=s(9808),h=s(1533),m=s(2463),f=s(6340),A=s(4128),C=s(4004),x=s(9646),Z=s(4999),e=s(5e3),T=s(520);let v=(()=>{class i{constructor(n){this.http=n,this.utility={xmlparser:new f.XMLParser,parse:t=>t.map(a=>this.utility.xmlparser.parse(a)["soapenv:Envelope"]["soapenv:Body"].createMetadataResponse.result),createChunks:(t,a)=>Array(Math.ceil(t.length/a)).fill(0).map((p,c)=>t.slice(c*a,a*(c+1)))}}createSOAPComposite(n){let p=this.utility.createChunks(n,10).map(c=>(c=>`<?xml version="1.0" encoding="utf-8"?> <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://soap.sforce.com/2006/04/metadata" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> <soapenv:Header> <tns:SessionHeader> <tns:sessionId>${Z.I8.sessiontoken}</tns:sessionId> </tns:SessionHeader> </soapenv:Header> <soapenv:Body> <createMetadata xmlns="http://soap.sforce.com/2006/04/metadata">${c}</createMetadata> </soapenv:Body> </soapenv:Envelope>`)((c=>c.map(r=>`<metadata xsi:type="ns2:CustomObject" xmlns:ns2="http://soap.sforce.com/2006/04/metadata"> <fullName>${r.fullName}</fullName> <deploymentStatus>${r.deploymentStatus}</deploymentStatus> <description>${r.description}</description> <enableReports>${r.allowReports}</enableReports> <enableActivities>${r.allowActivities}</enableActivities> <enableHistory>${r.trackFieldHistory}</enableHistory> <enableFeeds>${r.allowChatterGroups}</enableFeeds> <enableSharing>${r.allowSharing}</enableSharing> <enableBulkApi>${r.bulkApiAccess}</enableBulkApi> <enableStreamingApi>${r.streamingApiAccess}</enableStreamingApi> <enableSearch>${r.allowSearch}</enableSearch> <label>${r.objectLabel}</label> <nameField>${"Text"==r.type?"":`<displayFormat>${r.displayFormat}</displayFormat>`}<label>${r.recordName}</label> <type>${r.type}</type> </nameField> <pluralLabel>${r.pluralLabel}</pluralLabel> <sharingModel>ReadWrite</sharingModel> </metadata>`).join(""))(c)));return p.length>0?(0,A.D)(p.map(c=>this.postsoap(c))).pipe((0,C.U)(c=>this.utility.parse(c.map(r=>r.body)))):(0,x.of)([])}postsoap(n){return this.http.post(Z.I8.instanceUrl+"/services/Soap/m/50.0",n,{responseType:"text",observe:"response"})}}return i.\u0275fac=function(n){return new(n||i)(e.LFG(T.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var u=s(3075);function k(i,o){1&i&&e.GkF(0)}function w(i,o){1&i&&e.GkF(0)}function y(i,o){if(1&i){const n=e.EpF();e.TgZ(0,"div",24),e.TgZ(1,"div",36),e.TgZ(2,"div",10),e.TgZ(3,"span",11),e._uU(4,"*"),e.qZA(),e._uU(5,"Display Format"),e.qZA(),e.TgZ(6,"input",37),e.NdJ("ngModelChange",function(a){return e.CHM(n),e.oxw(2).main.input.displayFormat=a}),e.qZA(),e.qZA(),e.TgZ(7,"div",36),e.TgZ(8,"div",10),e.TgZ(9,"span",11),e._uU(10,"*"),e.qZA(),e._uU(11,"Starting Number"),e.qZA(),e.TgZ(12,"input",38),e.NdJ("ngModelChange",function(a){return e.CHM(n),e.oxw(2).main.input.startingNumber=a}),e.qZA(),e.qZA(),e.qZA()}if(2&i){const n=e.oxw(2);e.xp6(6),e.Q6J("ngModel",n.main.input.displayFormat),e.xp6(6),e.Q6J("ngModel",n.main.input.startingNumber)}}function M(i,o){if(1&i){const n=e.EpF();e.TgZ(0,"button",39),e.NdJ("click",function(){return e.CHM(n),e.oxw(2).main.handleAddNewObjectData()}),e._uU(1," Add Object "),e.qZA()}}function j(i,o){if(1&i){const n=e.EpF();e.TgZ(0,"button",39),e.NdJ("click",function(){return e.CHM(n),e.oxw(2).main.handleAddNewObjectData()}),e._uU(1," Update Object "),e.qZA()}}function q(i,o){if(1&i){const n=e.EpF();e.TgZ(0,"div",40),e.TgZ(1,"button",41),e.NdJ("click",function(){return e.CHM(n),e.oxw(2).main.handleCreateFieldData()}),e._uU(2," Create Objects "),e.qZA(),e.TgZ(3,"button",42),e.NdJ("click",function(){return e.CHM(n),e.oxw(2).main.handleClearData()}),e._uU(4," Clear "),e.qZA(),e.TgZ(5,"button",42),e.NdJ("click",function(){return e.CHM(n),e.oxw(2).main.handleSuccessClearData()}),e._uU(6," Clear All Success "),e.qZA(),e.qZA()}}function N(i,o){if(1&i){const n=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"div",8),e.TgZ(2,"div",9),e.TgZ(3,"div",10),e.TgZ(4,"span",11),e._uU(5,"*"),e.qZA(),e._uU(6,"Object Label"),e.qZA(),e.TgZ(7,"input",12),e.NdJ("blur",function(){return e.CHM(n),e.oxw().main.onBlur()})("ngModelChange",function(a){return e.CHM(n),e.oxw().main.input.objectLabel=a}),e.qZA(),e.qZA(),e.TgZ(8,"div",9),e.TgZ(9,"div",10),e.TgZ(10,"span",11),e._uU(11,"*"),e.qZA(),e._uU(12,"Plural Label"),e.qZA(),e.TgZ(13,"input",13),e.NdJ("ngModelChange",function(a){return e.CHM(n),e.oxw().main.input.pluralLabel=a}),e.qZA(),e.qZA(),e.TgZ(14,"div",9),e.TgZ(15,"div",10),e.TgZ(16,"span",11),e._uU(17,"*"),e.qZA(),e._uU(18,"Object Name"),e.qZA(),e.TgZ(19,"input",14),e.NdJ("ngModelChange",function(a){return e.CHM(n),e.oxw().main.handleObjectNameChange(a)}),e.qZA(),e.qZA(),e.TgZ(20,"div",9),e.TgZ(21,"div",10),e._uU(22,"Description"),e.qZA(),e.TgZ(23,"textarea",15),e.NdJ("ngModelChange",function(a){return e.CHM(n),e.oxw().main.input.description=a}),e.qZA(),e.qZA(),e.TgZ(24,"div",10),e._uU(25,"Enter Record Name Label and Format"),e.qZA(),e.TgZ(26,"div",16),e.TgZ(27,"div",9),e.TgZ(28,"div",10),e.TgZ(29,"span",11),e._uU(30,"*"),e.qZA(),e._uU(31,"Record Name"),e.qZA(),e.TgZ(32,"input",17),e.NdJ("ngModelChange",function(a){return e.CHM(n),e.oxw().main.input.recordName=a}),e.qZA(),e.qZA(),e.TgZ(33,"div",18),e.TgZ(34,"div",19),e.TgZ(35,"input",20),e.NdJ("click",function(a){return e.CHM(n),e.oxw().main.radioChangeHandler(a)}),e.qZA(),e.TgZ(36,"label",21),e._uU(37," Text "),e.qZA(),e.qZA(),e._UZ(38,"hr"),e.TgZ(39,"div",19),e.TgZ(40,"input",22),e.NdJ("click",function(a){return e.CHM(n),e.oxw().main.radioChangeHandler(a)}),e.qZA(),e.TgZ(41,"label",21),e._uU(42," Auto Number "),e.qZA(),e.qZA(),e._UZ(43,"br"),e.qZA(),e.YNc(44,y,13,2,"div",23),e.qZA(),e.TgZ(45,"div",10),e._uU(46,"Deployment Status"),e.qZA(),e.TgZ(47,"div",16),e.TgZ(48,"div",24),e.TgZ(49,"div",19),e.TgZ(50,"input",25),e.NdJ("click",function(a){return e.CHM(n),e.oxw().main.deployHandler(a)}),e.qZA(),e.TgZ(51,"label",21),e._uU(52," Deployed "),e.qZA(),e.qZA(),e.TgZ(53,"div",19),e.TgZ(54,"input",26),e.NdJ("click",function(a){return e.CHM(n),e.oxw().main.deployHandler(a)}),e.qZA(),e.TgZ(55,"label",21),e._uU(56," In Deployment "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(57,"div",10),e._uU(58,"Other Access:"),e.qZA(),e.TgZ(59,"div",27),e.TgZ(60,"div",28),e.TgZ(61,"div",29),e.TgZ(62,"ul"),e.TgZ(63,"li"),e.TgZ(64,"label"),e.TgZ(65,"input",30),e.NdJ("ngModelChange",function(a){return e.CHM(n),e.oxw().main.input.allowReports=a}),e.qZA(),e.TgZ(66,"span"),e._uU(67," Allow Reports"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(68,"li"),e.TgZ(69,"label"),e.TgZ(70,"input",30),e.NdJ("ngModelChange",function(a){return e.CHM(n),e.oxw().main.input.allowActivities=a}),e.qZA(),e.TgZ(71,"span"),e._uU(72," Allow Activities"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(73,"li"),e.TgZ(74,"label"),e.TgZ(75,"input",30),e.NdJ("ngModelChange",function(a){return e.CHM(n),e.oxw().main.input.trackFieldHistory=a}),e.qZA(),e.TgZ(76,"span"),e._uU(77," Track Field History"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(78,"li"),e.TgZ(79,"label"),e.TgZ(80,"input",30),e.NdJ("ngModelChange",function(a){return e.CHM(n),e.oxw().main.input.allowChatterGroups=a}),e.qZA(),e.TgZ(81,"span"),e._uU(82," Allow in Chatter Groups"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(83,"li"),e.TgZ(84,"label"),e.TgZ(85,"input",30),e.NdJ("ngModelChange",function(a){return e.CHM(n),e.oxw().main.input.allowSharing=a}),e.qZA(),e.TgZ(86,"span"),e._uU(87," Allow Sharing"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(88,"li"),e.TgZ(89,"label"),e.TgZ(90,"input",30),e.NdJ("ngModelChange",function(a){return e.CHM(n),e.oxw().main.input.bulkApiAccess=a}),e.qZA(),e.TgZ(91,"span"),e._uU(92," Allow Bulk API Access"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(93,"li"),e.TgZ(94,"label"),e.TgZ(95,"input",30),e.NdJ("ngModelChange",function(a){return e.CHM(n),e.oxw().main.input.streamingApiAccess=a}),e.qZA(),e.TgZ(96,"span"),e._uU(97," Allow Streaming API Access"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(98,"li"),e.TgZ(99,"label"),e.TgZ(100,"input",30),e.NdJ("ngModelChange",function(a){return e.CHM(n),e.oxw().main.input.allowSearch=a}),e.qZA(),e.TgZ(101,"span"),e._uU(102," Allow Search"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(103,"div"),e.TgZ(104,"div",31),e.TgZ(105,"div",32),e.YNc(106,M,2,0,"button",33),e.YNc(107,j,2,0,"ng-template",null,34,e.W1O),e.qZA(),e.qZA(),e.YNc(109,q,7,0,"div",35),e.qZA()}if(2&i){const n=e.MAs(108),t=e.oxw();e.Gre("",t.main.showAddObjectset?"h-75-80-vh":"h-100-80-vh"," overflow-auto border rounded border-2"),e.xp6(7),e.Q6J("ngModel",t.main.input.objectLabel),e.xp6(6),e.Q6J("ngModel",t.main.input.pluralLabel),e.xp6(6),e.Q6J("ngModel",t.main.input.objectName),e.xp6(4),e.Q6J("ngModel",t.main.input.description),e.xp6(9),e.Q6J("ngModel",t.main.input.recordName),e.xp6(12),e.Q6J("ngIf",t.main.showFormatNumber),e.xp6(21),e.Q6J("ngModel",t.main.input.allowReports),e.xp6(5),e.Q6J("ngModel",t.main.input.allowActivities),e.xp6(5),e.Q6J("ngModel",t.main.input.trackFieldHistory),e.xp6(5),e.Q6J("ngModel",t.main.input.allowChatterGroups),e.xp6(5),e.Q6J("ngModel",t.main.input.allowSharing),e.xp6(5),e.Q6J("ngModel",t.main.input.bulkApiAccess),e.xp6(5),e.Q6J("ngModel",t.main.input.streamingApiAccess),e.xp6(5),e.Q6J("ngModel",t.main.input.allowSearch),e.xp6(6),e.Q6J("ngIf",null==t.main.cards.editIndex)("ngIfElse",n),e.xp6(3),e.Q6J("ngIf",t.main.showAddObjectset)}}function O(i,o){if(1&i){const n=e.EpF();e.TgZ(0,"div",49),e.TgZ(1,"button",50),e.NdJ("click",function(){e.CHM(n);const a=e.oxw().index;return e.oxw(3).main.handleEdit(a)}),e._UZ(2,"i",51),e.qZA(),e.TgZ(3,"button",52),e.NdJ("click",function(){e.CHM(n);const a=e.oxw().index;return e.oxw(3).main.handleDelete(a)}),e._UZ(4,"i",53),e.qZA(),e.qZA()}}function B(i,o){1&i&&(e.TgZ(0,"div",49),e.TgZ(1,"div",54),e._UZ(2,"i",55),e.qZA(),e.qZA())}const J=function(i,o,n,t){return{"bg-success":i,"bg-danger":o,"text-light":n,ignoretheme:t}};function U(i,o){if(1&i&&(e.TgZ(0,"div"),e.TgZ(1,"div",44),e.TgZ(2,"div",45),e.TgZ(3,"div",46),e.TgZ(4,"div",2),e._uU(5),e.ALo(6,"slice"),e.qZA(),e.YNc(7,O,5,0,"div",47),e.YNc(8,B,3,0,"div",47),e.qZA(),e.qZA(),e.TgZ(9,"div",48),e.TgZ(10,"div"),e.TgZ(11,"b"),e._uU(12,"Object Label: "),e.qZA(),e.TgZ(13,"span"),e._uU(14),e.ALo(15,"slice"),e.qZA(),e.qZA(),e.TgZ(16,"div"),e.TgZ(17,"b"),e._uU(18,"Plural Label: "),e.qZA(),e.TgZ(19,"span"),e._uU(20),e.ALo(21,"slice"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i){const n=o.$implicit;e.xp6(1),e.Q6J("ngClass",e.l5B(18,J,n.success,n.failure,n.success||n.failure,n.success||n.failure)),e.xp6(4),e.hij(" ",n.fullName.length>15?e.Dn7(6,6,n.fullName,0,15)+"..":n.fullName," "),e.xp6(2),e.Q6J("ngIf",!n.success),e.xp6(1),e.Q6J("ngIf",n.success),e.xp6(6),e.Oqu(n.objectLabel.length>15?e.Dn7(15,10,n.objectLabel,0,15)+"..":n.objectLabel),e.xp6(6),e.Oqu(n.pluralLabel.length>15?e.Dn7(21,14,n.pluralLabel,0,15)+"..":n.pluralLabel)}}function F(i,o){if(1&i&&(e.TgZ(0,"div",24),e.YNc(1,U,22,23,"div",43),e.qZA()),2&i){const n=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",n.main.cards.show)}}function S(i,o){if(1&i&&e.YNc(0,F,2,1,"div",23),2&i){const n=e.oxw();e.Q6J("ngIf",n.main.cards.show.length>0)}}const H=[{path:"",component:(()=>{class i{constructor(n){this.service=n,this.utility={isObject:t=>t===Object(t)},this.main={cardstemp:[],showFormatNumber:!1,showAddObjectset:!1,cards:{show:[],editToApi:[],editIndex:null},init:()=>{},input:{objectLabel:"",pluralLabel:"",objectName:"",description:"",recordName:"",type:"Text",displayFormat:"",startingNumber:"",deploymentStatus:"Deployed",fullName:"",allowReports:!1,allowActivities:!1,trackFieldHistory:!1,allowChatterGroups:!1,allowSharing:!0,bulkApiAccess:!0,streamingApiAccess:!0,allowSearch:!1,success:!1,failure:!1},radioChangeHandler:t=>{this.main.input.type=t.target.value,this.main.showFormatNumber="AutoNumber"==t.target.value},handleObjectNameChange:t=>{this.main.input.objectName=t,this.main.input.recordName=t+" Name",this.main.input.fullName=t+"__c"},deployHandler:t=>{this.main.input.deploymentStatus=t.target.value},onBlur:()=>{let t=this.main.input.objectLabel;this.main.input.objectName=t.split(" ").join("_"),this.main.input.recordName=t+" Name",this.main.input.fullName=this.main.input.objectName+"__c"},handleAddNewObjectData:()=>{if(""==this.main.input.objectLabel||""==this.main.input.pluralLabel||""==this.main.input.objectName||""==this.main.input.recordName||"AutoNumber"==this.main.input.type&&""==this.main.input.displayFormat||"AutoNumber"==this.main.input.type&&""==this.main.input.startingNumber){let t="";return""==this.main.input.objectLabel?t="Object Label":""==this.main.input.pluralLabel?t="Plural Label":""==this.main.input.objectName?t="Object Name":""==this.main.input.recordName?t="Record Label":""==this.main.input.displayFormat?t="Display Format":""==this.main.input.startingNumber&&(t="Starting Number"),void m.y.maketoast({template:"warning",body:`${t} is required field!`,duration:5e3})}null!=this.main.cards.editIndex?(this.main.cards.show.splice(this.main.cards.editIndex,1,this.main.input),this.main.cards.editToApi.splice(this.main.cards.editIndex,1,this.main.input),this.main.cards.editIndex=null):this.main.cards.show.find(({fullName:t})=>t===this.main.input.fullName)?m.y.maketoast({template:"warning",body:"Object with same name cannot be created."}):(this.main.cards.show.push(this.main.input),this.main.cards.editToApi.push(this.main.input)),this.main.input={objectLabel:"",pluralLabel:"",objectName:"",description:"",recordName:"",type:"Text",displayFormat:"",startingNumber:"",deploymentStatus:"Deployed",fullName:"",allowReports:!1,allowActivities:!1,trackFieldHistory:!1,allowChatterGroups:!1,allowSharing:!0,bulkApiAccess:!0,streamingApiAccess:!0,allowSearch:!1,success:!1,failure:!1},0==this.main.showAddObjectset&&(this.main.showAddObjectset=!0)},handleCreateFieldData:()=>{let t="";this.service.createSOAPComposite(this.main.cards.editToApi).subscribe(a=>{let l=0,p=0;(a=Array.isArray(a[0])?a[0]:a).forEach(g=>{let _=this.main.cards.show.findIndex(({fullName:Y})=>Y===g.fullName);g.success?(this.main.cards.show[_].success=!0,this.main.cards.show[_].failure=!1,l++):(t+=g.errors.message+", ",this.main.cards.show[_].failure=!0,this.main.cards.show[_].success=!1,p++)});let c=l>1?" Objects Were created successfully":"Object was created successfully";l>1?m.y.maketoast({template:"success",body:l+c}):1==l&&m.y.maketoast({template:"success",body:c});let r=t;p>1?m.y.maketoast({template:"ERROR",body:p+r,duration:5e3}):1==p&&m.y.maketoast({template:"ERROR",body:r,duration:5e3})}),this.main.cards.editToApi=[]},handleEdit:t=>{this.main.cards.editIndex=t,this.main.input=this.main.cards.show[t]},handleDelete:t=>{this.main.cards.editToApi.splice(this.main.cards.editToApi.findIndex(({fullName:a})=>a===this.main.cards.show[t].fullName),1),this.main.cards.show.splice(t,1),this.main.input={objectLabel:"",pluralLabel:"",objectName:"",description:"",recordName:"",type:"Text",displayFormat:"",startingNumber:"",deploymentStatus:"Deployed",fullName:"",allowReports:!1,allowActivities:!1,trackFieldHistory:!1,allowChatterGroups:!1,allowSharing:!0,bulkApiAccess:!0,streamingApiAccess:!0,allowSearch:!1,success:!1,failure:!1}},handleSuccessClearData:()=>{let t=this.main.cards.show.slice().reverse();this.main.cards.show=t.filter(a=>0==a.success)},handleClearData:()=>{this.main.cards.show=[]}}}ngOnInit(){this.main.init()}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(v))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-bulk-object-creation"]],decls:13,vars:2,consts:[[1,"d-flex","overflow-hidden","h-100","w-100"],[1,"d-flex","flex-column","flex-shrink-0","p-3","bg-light",2,"min-width","500px"],[1,"fw-bold"],[1,"bi","bi-pencil-fill"],[4,"ngTemplateOutlet"],[1,"bg-clr2","w-100","p-2","scrollable-area-full-h","overflow-auto"],["body",""],["cards",""],[1,"p-2"],[1,"cont-child"],[1,"fs-small"],[2,"color","red"],["placeholder","Object Label","type","text","maxlength","40",1,"form-control","ng-valid",3,"ngModel","blur","ngModelChange"],["required","","placeholder","Plural Label","type","text","maxlength","40",1,"form-control",3,"ngModel","ngModelChange"],["required","","placeholder","Object Name","type","text","maxlength","40",1,"form-control",3,"ngModel","ngModelChange"],["placeholder","Description","type","textarea",1,"form-control",3,"ngModel","ngModelChange"],[1,"card","p-3","bg-light"],["required","","placeholder","Record Name","maxlength","80","type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"d-flex","pt-2"],[1,"form-check","flex-sm-fill"],["mdbRadio","","type","radio","value","Text","name","radio","checked","checked",1,"form-check-input",3,"click"],[1,"form-check-label"],["mdbRadio","","value","AutoNumber","type","radio","name","radio",1,"form-check-input",3,"click"],["class","d-flex",4,"ngIf"],[1,"d-flex"],["mdbRadio","","name","deploy","value","Deployed","type","radio","checked","checked",1,"form-check-input",3,"click"],["mdbRadio","","name","deploy","value","InDevelopment","type","radio",1,"form-check-input",3,"click"],[1,"container","card","p-3","bg-light"],[1,"row"],[1,"col-12"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"d-flex","justify-content-center","p-1"],[1,"w-100","d-flex","justify-content-center"],["class","btn btn-sm btn-secondary button",3,"click",4,"ngIf","ngIfElse"],["elseBlock",""],["class","text-center d-flex",4,"ngIf"],[1,"cont-child","flex-sm-fill"],["required","","placeholder","A-{0000}","type","text",1,"form-control",3,"ngModel","ngModelChange"],["required","","placeholder","Starting Number","type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn","btn-sm","btn-secondary","button",3,"click"],[1,"text-center","d-flex"],[1,"btn","btn-sm","btn-secondary","butn","flex-sm-fill","m-3",3,"click"],[1,"btn","btn-sm","btn-secondary","button","flex-sm-fill","m-3",3,"click"],[4,"ngFor","ngForOf"],[1,"card","shadow","m-1",3,"ngClass"],[1,"card-header","fw-bold"],[1,"d-flex","justify-content-between"],["class","btn-group",4,"ngIf"],[1,"card-body"],[1,"btn-group"],[1,"btn","btn-sm","btn-warning","ignoretheme",3,"click"],[1,"bi","bi-pen"],[1,"btn","btn-sm","btn-danger","ignoretheme",3,"click"],[1,"bi","bi-trash"],[1,"btn","btn-sm","text-light"],[1,"bi","bi-check-circle"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"span",2),e._UZ(3,"i",3),e._uU(4," Bulk Object Creation"),e.qZA(),e._UZ(5,"hr"),e.YNc(6,k,1,0,"ng-container",4),e.qZA(),e.TgZ(7,"div",5),e.YNc(8,w,1,0,"ng-container",4),e.qZA(),e.qZA(),e.YNc(9,N,110,20,"ng-template",null,6,e.W1O),e.YNc(11,S,1,1,"ng-template",null,7,e.W1O)),2&n){const a=e.MAs(10),l=e.MAs(12);e.xp6(6),e.Q6J("ngTemplateOutlet",a),e.xp6(2),e.Q6J("ngTemplateOutlet",l)}},directives:[d.tP,u.Fj,u.nD,u.JJ,u.On,u.Q7,d.O5,u.Wl,d.sg,d.mk],pipes:[d.OU],styles:["ul[_ngcontent-%COMP%]{column-count:2;column-gap:2rem;list-style:none}"]}),i})()}];let L=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[h.Bz.forChild(H)],h.Bz]}),i})();var I=s(321),R=s(2897),D=s(9446),Q=s(1375),$=s(3985);let E=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[d.ez,L,I.q2,u.u5,D.rw,u.UX,Q.cP,$.W,R.zE6]]}),i})()}}]);