"use strict";(self.webpackChunksfsce=self.webpackChunksfsce||[]).push([[743],{9506:(P,b,a)=>{a.r(b),a.d(b,{BulkFieldDeletionModule:()=>G});var f=a(9808),F=a(1533),u=a(4999),v=a(4128),y=a(4004),k=a(5577),_=a(9646),e=a(5e3),D=a(520);let C=(()=>{class l{constructor(n){this.http=n,this.utility={parseReponse:i=>JSON.stringify(i,(t,s)=>{if("attributes"!==t)return null==s?"-":s}),createChunks:(i,t)=>Array(Math.ceil(i.length/t)).fill(0).map((o,c)=>i.slice(c*t,t*(c+1)))}}getCustomObjectIdsAndAllObjects(){const i=this.http.get(u.I8.instanceUrl+"/services/data/v53.0/sobjects"),s=this.http.get(u.I8.instanceUrl+"/services/data/v55.0/tooling/query/?q=Select Id, DeveloperName, NamespacePrefix From CustomObject");return(0,v.D)([s,i])}fetchFields(n,i){let t=u.I8.instanceUrl+`/services/data/v55.0/tooling/query/?q=Select Id,DeveloperName,TableEnumOrId, NamespacePrefix from CustomField where TableEnumOrId in ('${n.join("','")}') and (Not DeveloperName Like '%25__del')`;return this.http.get(t).pipe((0,y.U)(s=>s.records.filter(o=>!o.DeveloperName.includes("_del")).map(o=>{o.FieldName=o.DeveloperName;let c=i.find(({Id:m})=>m===o.TableEnumOrId);return c?(o.FullName=c.customObjectName+"__c",o.SObject=c.customObjectName+"__c"):(o.FullName=o.TableEnumOrId,o.SObject=o.TableEnumOrId),o.FullName+="."+(null!=o.NamespacePrefix?o.NamespacePrefix+"__":"")+o.DeveloperName+"__c",delete o.attributes,delete o.DeveloperName,delete o.TableEnumOrId,JSON.parse(this.utility.parseReponse(o))})))}deleteSOAPComposite(n,i,t){let m=this.utility.createChunks(n,10).map(r=>(r=>`<?xml version="1.0" encoding="utf-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://soap.sforce.com/2006/04/metadata" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Header><tns:SessionHeader><tns:sessionId>${u.I8.sessiontoken}</tns:sessionId></tns:SessionHeader></soapenv:Header><soapenv:Body><tns:deleteMetadata xmlns="http://soap.sforce.com/2006/04/metadata"><tns:type>CustomField</tns:type>s${r}</tns:deleteMetadata></soapenv:Body></soapenv:Envelope>`)((r=>r.map(g=>`<tns:fullNames>${g}</tns:fullNames>`).join(""))(r)));return m.length>0?(0,v.D)(m.map(g=>this.postsoap(g))).pipe((0,k.z)(g=>this.fetchFields(i,t))):(0,_.of)([])}postsoap(n){return this.http.post(u.I8.instanceUrl+"/services/Soap/m/50.0",n,{responseType:"text",observe:"response"})}}return l.\u0275fac=function(n){return new(n||l)(e.LFG(D.eN))},l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();var p=a(2463),O=a(9643),h=a(2897);function N(l,d){1&l&&e.GkF(0)}function T(l,d){1&l&&e.GkF(0)}function j(l,d){1&l&&e.GkF(0)}function B(l,d){if(1&l&&(e.TgZ(0,"div",6),e.TgZ(1,"span",7),e._uU(2),e.qZA(),e.qZA()),2&l){const n=e.oxw();e.xp6(2),e.hij(" ",n.main.fields.length?n.main.fields.length+" Fields":"No field(s) to display.."," ")}}function A(l,d){if(1&l){const n=e.EpF();e.TgZ(0,"div",8),e.TgZ(1,"button",9),e._uU(2),e.qZA(),e.TgZ(3,"div",10),e.TgZ(4,"app-multiselect",11),e.NdJ("selectionChange",function(t){return e.CHM(n),e.oxw().main.selectedobjects=t}),e.qZA(),e.qZA(),e.TgZ(5,"button",12),e.NdJ("click",function(){return e.CHM(n),e.oxw().main.onGetFields()}),e._uU(6," Fetch "),e.qZA(),e.TgZ(7,"button",13),e.NdJ("click",function(){return e.CHM(n),e.oxw().main.popupForDelete()}),e._uU(8," Delete Fields "),e._UZ(9,"i",14),e.qZA(),e.qZA()}if(2&l){const n=e.oxw();e.xp6(2),e.AsE(" Select Objects ",n.main.selectedobjects.length,"/ ",n.main.labels.length," "),e.xp6(2),e.Q6J("all",n.main.labels)("selection",n.main.selectedobjects),e.xp6(1),e.Q6J("disabled",0===n.main.selectedobjects.length),e.xp6(2),e.Q6J("disabled",n.main.isDisable)}}function S(l,d){1&l&&e._UZ(0,"kendo-grid-column",19),2&l&&e.Q6J("field",d.$implicit)}const I=function(){return{checkboxOnly:!0,mode:"multiple"}};function w(l,d){if(1&l){const n=e.EpF();e.TgZ(0,"kendo-grid",16),e.NdJ("selectionChange",function(t){return e.CHM(n),e.oxw(2).main.selectionChange(t)}),e._UZ(1,"kendo-grid-checkbox-column",17),e.YNc(2,S,1,1,"kendo-grid-column",18),e.qZA()}if(2&l){const n=e.oxw(2);e.Q6J("kendoGridBinding",n.main.fields)("scrollable",!0)("columnMenu",!0)("filter",n.state.filter)("filterable",!0)("selectable",e.DdM(8,I)),e.xp6(1),e.Q6J("width",65),e.xp6(1),e.Q6J("ngForOf",n.main.fieldkeys)}}function M(l,d){if(1&l&&e.YNc(0,w,3,9,"kendo-grid",15),2&l){const n=e.oxw();e.Q6J("ngIf",!n.main.hide)}}const Z=[{path:"",component:(()=>{class l{constructor(n){this.service=n,this.state={filter:{logic:"and",filters:[]}},this.utility={compare:i=>{let t=i.split("__");return 3==t.length?t[1]:t[0]},filterGood:i=>i.sobjects.filter(t=>t.layoutable&&t.triggerable),returnLabelNamePairArray:i=>{let t={};return i.forEach(s=>t[s.label]=s.name),t},removeDeseleted:(i,t)=>i.filter(s=>!t.includes(s))},this.main={filteredObjects:[],hide:!1,isDisable:!0,selectedFields:{},deselectedFields:{},selectedobjects:[],jsonResponse:{},labels:[],namesToFields:[],fields:[],fieldkeys:["FieldName","SObject","Id","FullName"],init:()=>{this.service.getCustomObjectIdsAndAllObjects().subscribe(i=>{i[1]=this.utility.filterGood(i[1]),this.main.filteredObjects=i[1].map(t=>{let s=i[0].records.find(({DeveloperName:o})=>o===this.utility.compare(t.name));return s&&(t.customObjectName=s.DeveloperName,t.name=s.Id,t.Id=s.Id),t}),this.main.jsonResponse=this.utility.returnLabelNamePairArray(this.main.filteredObjects),this.main.labels=Object.keys(this.main.jsonResponse),this.main.labels=this.main.labels.sort((t,s)=>t.localeCompare(s))})},onGetFields:()=>{this.main.namesToFields=this.main.selectedobjects.map(i=>this.main.jsonResponse[i]),this.service.fetchFields(this.main.namesToFields,this.main.filteredObjects).subscribe(i=>{this.main.fields=i;const t=this.main.fields.length;p.y.maketoast({template:"SUCCESS",body:t+(t>1?" Fields were Fetched successfully.":" Field was Fetched successfully")})})},selectionChange:i=>{this.main.isDisable=!1,i.selectedRows.length>0?i.selectedRows.forEach(t=>{this.main.selectedFields[t.dataItem.FullName]=t.dataItem}):i.deselectedRows.forEach(t=>{this.main.deselectedFields[t.dataItem.FullName]=t.dataItem})},popupForDelete:()=>{p.y.ask({question:"Are you sure you want to Delete these Fields?",callback:()=>{p.y.dialogprompt=null,this.main.delete()}})},delete:()=>{let i=Object.keys(this.main.selectedFields),t=Object.keys(this.main.deselectedFields),s=this.utility.removeDeseleted(i,t);this.main.isDisable=!0,this.main.selectedFields={},this.main.deselectedFields={},this.service.deleteSOAPComposite(s,this.main.namesToFields,this.main.filteredObjects).subscribe(o=>{if(o.length!=this.main.fields.length-s.length){const c=o.length-(this.main.fields.length-s.length);p.y.maketoast({template:"ERROR",body:c+(c>1?" Fields were not deleted due to some (Some Dependency exits)":" Field was not deleted due to some Error (Some Dependency exits)")})}if(this.main.fields.length>o.length){const c=this.main.fields.length-o.length;p.y.maketoast({template:"SUCCESS",body:c+(c>1?" Fields were deleted sucessfully":" Field was deleted successfully")})}this.main.hide=!0,this.main.fields=o,setTimeout(()=>{this.main.hide=!1},50)})}}}ngOnInit(){this.main.init()}}return l.\u0275fac=function(n){return new(n||l)(e.Y36(C))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-bulk-field-deletion"]],decls:11,vars:3,consts:[[1,"tabbed-panel"],[1,"body"],[4,"ngTemplateOutlet"],["localfooter",""],["tableheader",""],["grid",""],[1,"footer-container"],[1,"text-center"],[1,"d-flex","p-1"],["data-bs-toggle","dropdown","id","selectobjectsbtn",1,"btn","btn-sm","btn-light","dropdown-toggle","shadow-hide"],[1,"dropdown-menu","w-100","bg-transparent","px-1","py-0","border-0"],[1,"theme-light",3,"all","selection","selectionChange"],["title","Fetch Fields for",1,"btn","btn-light","btn-sm","ms-1","shadow-hide",3,"disabled","click"],[1,"btn","btn-danger","btn-sm","ms-1",3,"disabled","click"],[1,"bi","bi-trash"],["sortable","true","class","text-small h-100-40","style","background-color: inherit !important",3,"kendoGridBinding","scrollable","columnMenu","filter","filterable","selectable","selectionChange",4,"ngIf"],["sortable","true",1,"text-small","h-100-40",2,"background-color","inherit !important",3,"kendoGridBinding","scrollable","columnMenu","filter","filterable","selectable","selectionChange"],["showSelectAll","true",3,"width"],[3,"field",4,"ngFor","ngForOf"],[3,"field"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.YNc(2,N,1,0,"ng-container",2),e.YNc(3,T,1,0,"ng-container",2),e.qZA(),e.YNc(4,j,1,0,"ng-container",2),e.qZA(),e.YNc(5,B,3,1,"ng-template",null,3,e.W1O),e.YNc(7,A,10,6,"ng-template",null,4,e.W1O),e.YNc(9,M,1,1,"ng-template",null,5,e.W1O)),2&n){const t=e.MAs(6),s=e.MAs(8),o=e.MAs(10);e.xp6(2),e.Q6J("ngTemplateOutlet",s),e.xp6(1),e.Q6J("ngTemplateOutlet",o),e.xp6(1),e.Q6J("ngTemplateOutlet",t)}},directives:[f.tP,O.z,f.O5,h.MwP,h.HWw,h.HbC,f.sg,h.bg4],styles:[""]}),l})()}];let E=(()=>{class l{}return l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[F.Bz.forChild(Z)],F.Bz]}),l})();var J=a(321),U=a(1375),x=a(3075),R=a(9446),L=a(3985);let G=(()=>{class l{}return l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[f.ez,E,J.q2,x.u5,R.rw,x.UX,U.cP,L.W,h.zE6]]}),l})()}}]);