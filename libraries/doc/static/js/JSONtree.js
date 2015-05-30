// JSONTree 0.1.7
function JSONTree(){}JSONTree.id=0,JSONTree.random=0,JSONTree.escapeMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"},JSONTree.escape=function(e){return e.replace(/[&<>'"]/g,function(e){return JSONTree.escapeMap[e]})},JSONTree.create=function(e){return JSONTree.id=0,JSONTree.random=Math.random(),JSONTree.div(JSONTree.jsValue(e),{"class":"json-content"})},JSONTree.newId=function(){return JSONTree.id+=1,JSONTree.random+"_"+JSONTree.id},JSONTree.div=function(e,r){return JSONTree.html("div",e,r)},JSONTree.span=function(e,r){return JSONTree.html("span",e,r)},JSONTree.html=function(e,r,n){var o="<"+e;return null!=n&&Object.keys(n).forEach(function(e){o+=" "+e+'="'+n[e]+'"'}),o+=">"+r+"</"+e+">"},JSONTree.collapseIcon=function(e){var r={onclick:"JSONTree.toggleVisible('collapse_json"+e+"')"};return JSONTree.span(JSONTree.collapse_icon,r)},JSONTree.jsValue=function(e){if(null==e)return JSONTree.jsText("null","null");var r=typeof e;if("boolean"===r||"number"===r)return JSONTree.jsText(r,e);if("string"===r)return JSONTree.jsText(r,'"'+JSONTree.escape(e)+'"');var n=JSONTree.newId();return e instanceof Array?JSONTree.jsArray(n,e):JSONTree.jsObject(n,e)},JSONTree.jsObject=function(e,r){var n="{"+JSONTree.collapseIcon(e),o="";return Object.keys(r).forEach(function(e,n,s){o+=JSONTree.div(n==s.length-1?JSONTree.jsProperty(e,r[e]):JSONTree.jsProperty(e,r[e])+",")}),n+=JSONTree.div(o,{"class":"json-visible json-object",id:"collapse_json"+e}),n+="}"},JSONTree.jsProperty=function(e,r){return JSONTree.span('"'+JSONTree.escape(e)+'"',{"class":"json-property"})+" : "+JSONTree.jsValue(r)},JSONTree.jsArray=function(e,r){for(var n="["+JSONTree.collapseIcon(e),o="",s=0;s<r.length;s++)o+=JSONTree.div(s==r.length-1?JSONTree.jsValue(r[s]):JSONTree.jsValue(r[s])+",");return n+=JSONTree.div(o,{"class":"json-visible json-object",id:"collapse_json"+e}),n+="]"},JSONTree.jsText=function(e,r){return JSONTree.span(r,{"class":"json-"+e})},JSONTree.toggleVisible=function(e){for(var r=document.getElementById(e),n=r.className,o=n.split(" "),s=!1,t=0;t<o.length;t++)if("json-visible"===o[t]){s=!0;break}r.className=s?"json-collapsed json-object":"json-object json-visible",r.previousSibling.innerHTML=s?JSONTree.expand_icon:JSONTree.collapse_icon},JSONTree.configure=function(e,r){JSONTree.collapse_icon=e,JSONTree.expand_icon=r},JSONTree.collapse_icon=JSONTree.span("",{"class":"json-object-collapse"}),JSONTree.expand_icon=JSONTree.span("",{"class":"json-object-expand"});