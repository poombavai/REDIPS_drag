/*
Copyright (c) 2008-2011, www.redips.net All rights reserved.
Code licensed under the BSD License: http://www.redips.net/license/
http://www.redips.net/javascript/drag-and-drop-table-content/
Version 4.7.4
Sep 18, 2012.
*/
var REDIPS=REDIPS||{};
REDIPS.drag=function(){var s,E,J,ya,Ma,Na,da,ea,ia,za,Aa,R,ja,Ba,S,ka,$,Ca,B,v,N,la,ma,na,Da,Ea,Fa,D,x,Ga,fa,oa,pa,Oa,Pa,Ha,qa,Ia,ra,ga,Ja,Qa,sa,Ra,o=null,F=0,G=0,ta=null,ua=null,K=0,L=0,O=0,P=0,T=0,U=0,t,aa,M=[],f=[],ba,va,q,H=[],n=[],y=null,C=null,Y=0,Z=0,Sa=0,Ta=0,ha=!1,Ka=!1,ca=!1,g=null,u=null,z=null,j=null,w=null,I=null,k=null,A=null,V=null,i=!1,l=!1,r="cell",wa={div:[],cname:"only",other:"deny"},Ua={action:"deny",cname:"mark",exception:[]},W=null,X=null,xa=null,p=null,La=0;J=function(){return!1};
s=function(){var a,b,c,d,e,h;f.length=0;e=y.getElementsByTagName("table");for(b=a=0;a<e.length;a++)if(!("redips_clone"===e[a].parentNode.id||-1<e[a].className.indexOf("nolayout"))){c=e[a].parentNode;d=0;do"TD"===c.nodeName&&d++,c=c.parentNode;while(c&&c!==y);f[b]=e[a];f[b].redips||(f[b].redips={});f[b].redips.container=y;f[b].redips.nestedLevel=d;f[b].redips.idx=b;d=f[b].getElementsByTagName("td");c=0;for(h=!1;c<d.length;c++)if(1<d[c].rowSpan){h=!0;break}f[b].redips.rowspan=h;b++}a=0;for(e=ba=1;a<
f.length;a++)if(0===f[a].redips.nestedLevel){f[a].redips.nestedGroup=e;f[a].redips.sort=100*ba;c=f[a].getElementsByTagName("table");for(b=0;b<c.length;b++)-1<c[b].className.indexOf("nolayout")||(c[b].redips.nestedGroup=e,c[b].redips.sort=100*ba+c[b].redips.nestedLevel);e++;ba++}};ya=function(a){var b=a||window.event,c,d;if(!0===this.redips.animated)return!0;b.cancelBubble=!0;b.stopPropagation&&b.stopPropagation();Ka=b.shiftKey;a=b.which?b.which:b.button;if(Fa(b)||!b.touches&&1!==a)return!0;if(window.getSelection)window.getSelection().removeAllRanges();
else if(document.selection&&"Text"===document.selection.type)try{document.selection.empty()}catch(e){}b.touches?(a=Y=b.touches[0].clientX,d=Z=b.touches[0].clientY):(a=Y=b.clientX,d=Z=b.clientY);Sa=a;Ta=d;ha=!1;REDIPS.drag.obj_old=l=i||this;REDIPS.drag.obj=i=this;ca=-1<i.className.indexOf("clone")?!0:!1;REDIPS.drag.table_sort&&Na(i);y!==i.redips.container&&(y=i.redips.container,s());-1===i.className.indexOf("row")?REDIPS.drag.mode=r="cell":(REDIPS.drag.mode=r="row",REDIPS.drag.obj=i=ga(i));v();!ca&&
"cell"===r&&(i.style.zIndex=999);g=j=k=null;S();z=u=g;I=w=j;V=A=k;REDIPS.drag.source_cell=W=x("TD",i);REDIPS.drag.current_cell=X=W;REDIPS.drag.previous_cell=xa=W;"cell"===r?REDIPS.drag.myhandler_clicked(X):REDIPS.drag.myhandler_row_clicked(X);if(null===g||null===j||null===k)if(S(),z=u=g,I=w=j,V=A=k,null===g||null===j||null===k)return!0;va=q=!1;REDIPS.event.add(document,"mousemove",ea);REDIPS.event.add(document,"touchmove",ea);REDIPS.event.add(document,"mouseup",da);REDIPS.event.add(document,"touchend",
da);i.setCapture&&i.setCapture();null!==g&&(null!==j&&null!==k)&&(aa=Ca(g,j,k));c=D(f[z],"position");"fixed"!==c&&(c=D(f[z].parentNode,"position"));c=B(i,c);o=[d-c[0],c[1]-a,c[2]-d,a-c[3]];y.onselectstart=function(a){b=a||window.event;if(!Fa(b)){b.shiftKey&&document.selection.clear();return false}};return!1};Ma=function(){REDIPS.drag.myhandler_dblclicked()};Na=function(a){var b;b=x("TABLE",a).redips.nestedGroup;for(a=0;a<f.length;a++)f[a].redips.nestedGroup===b&&(f[a].redips.sort=100*ba+f[a].redips.nestedLevel);
f.sort(function(a,b){return b.redips.sort-a.redips.sort});ba++};ga=function(a,b){var c,d,e,h,f,m;if("DIV"===a.nodeName)return h=a,a=x("TR",a),void 0===a.redips&&(a.redips={}),a.redips.div=h,a;d=a;void 0===d.redips&&(d.redips={});a=x("TABLE",a);ca&&q&&(h=d.redips.div,h.className=sa(h.className.replace("clone","")));c=a.cloneNode(!0);ca&&q&&(h.className+=" clone");e=c.rows.length-1;h="animated"===b?0===e?!0:!1:!0;for(f=e;0<=f;f--)if(f!==d.rowIndex){if(!0===h&&void 0===b){e=c.rows[f];for(m=0;m<e.cells.length;m++)if(-1<
e.cells[m].className.indexOf("rowhandler")){h=!1;break}}c.deleteRow(f)}q||(d.redips.empty_row=h);c.redips={};c.redips.container=a.redips.container;c.redips.source_row=d;Qa(d,c.rows[0]);Da(d,c.rows[0]);document.getElementById("redips_clone").appendChild(c);d=B(d,"fixed");c.style.position="fixed";c.style.top=d[0]+"px";c.style.left=d[3]+"px";c.style.width=d[1]-d[3]+"px";return c};Ja=function(a,b,c){var d=f[a],a=d.rows[0].parentNode,e=!1,h,Q,m,j;j=function(){l.redips.empty_row?ra(l,"empty",REDIPS.drag.row_empty_color):
(Q=x("TABLE",Q),Q.deleteRow(m))};void 0===c?c=i:e=!0;Q=c.redips.source_row;m=Q.rowIndex;h=c.getElementsByTagName("tr")[0];c.parentNode.removeChild(c);if(!1!==REDIPS.drag.myhandler_row_dropped_before(m)){if(!e&&-1<p.className.indexOf(REDIPS.drag.trash_cname))q?REDIPS.drag.myhandler_row_deleted():REDIPS.drag.trash_ask_row?confirm("Are you sure you want to delete row?")?(j(),REDIPS.drag.myhandler_row_deleted()):(delete l.redips.empty_row,REDIPS.drag.myhandler_row_undeleted()):(j(),REDIPS.drag.myhandler_row_deleted());
else if((e||!q)&&j(),b<d.rows.length?g===z||"before"===REDIPS.drag.row_position?(a.insertBefore(h,d.rows[b]),b=d.rows[b+1]):(a.insertBefore(h,d.rows[b].nextSibling),b=d.rows[b]):(a.appendChild(h),b=d.rows[0]),b&&(b.redips&&b.redips.empty_row)&&a.deleteRow(b.rowIndex),delete h.redips.empty_row,!e)"TABLE"!==Q.nodeName&&(Q=x("TABLE",Q)),REDIPS.drag.myhandler_row_dropped(h,Q,m);0<h.getElementsByTagName("table").length&&s()}};Qa=function(a,b){var c,d,e,h=[],f=[];h[0]=a.getElementsByTagName("input");h[1]=
a.getElementsByTagName("textarea");h[2]=a.getElementsByTagName("select");f[0]=b.getElementsByTagName("input");f[1]=b.getElementsByTagName("textarea");f[2]=b.getElementsByTagName("select");for(c=0;c<h.length;c++)for(d=0;d<h[c].length;d++)switch(e=h[c][d].type,e){case "text":case "textarea":case "password":f[c][d].value=h[c][d].value;break;case "radio":case "checkbox":f[c][d].checked=h[c][d].checked;break;case "select-one":f[c][d].selectedIndex=h[c][d].selectedIndex;break;case "select-multiple":for(e=
0;e<h[c][d].options.length;e++)f[c][d].options[e].selected=h[c][d].options[e].selected}};da=function(a){var b=a||window.event,c,d,e,a=b.clientX;e=b.clientY;T=U=0;i.releaseCapture&&i.releaseCapture();REDIPS.event.remove(document,"mousemove",ea);REDIPS.event.remove(document,"touchmove",ea);REDIPS.event.remove(document,"mouseup",da);REDIPS.event.remove(document,"touchend",da);y.onselectstart=null;Aa(i);ta=document.documentElement.scrollWidth;ua=document.documentElement.scrollHeight;T=U=0;if(q&&"cell"===
r&&(null===g||null===j||null===k))i.parentNode.removeChild(i),H[l.id]-=1,REDIPS.drag.myhandler_notcloned();else if(null===g||null===j||null===k)REDIPS.drag.myhandler_notmoved();else{g<f.length?(b=f[g],REDIPS.drag.target_cell=p=b.rows[j].cells[k],$(g,j,k,aa),c=g,d=j):null===u||null===w||null===A?(b=f[z],REDIPS.drag.target_cell=p=b.rows[I].cells[V],$(z,I,V,aa),c=z,d=I):(b=f[u],REDIPS.drag.target_cell=p=b.rows[w].cells[A],$(u,w,A,aa),c=u,d=w);if("row"===r)if(va)if(z===c&&I===d){b=i.getElementsByTagName("tr")[0];
l.style.backgroundColor=b.style.backgroundColor;for(a=0;a<b.cells.length;a++)l.cells[a].style.backgroundColor=b.cells[a].style.backgroundColor;i.parentNode.removeChild(i);delete l.redips.empty_row;q?REDIPS.drag.myhandler_row_notcloned():REDIPS.drag.myhandler_row_dropped_source(p)}else Ja(c,d);else REDIPS.drag.myhandler_row_notmoved();else if(!q&&!ha)REDIPS.drag.myhandler_notmoved();else if(q&&z===g&&I===j&&V===k)i.parentNode.removeChild(i),H[l.id]-=1,REDIPS.drag.myhandler_notcloned();else if(q&&!0===
REDIPS.drag.delete_cloned&&(a<b.redips.offset[3]||a>b.redips.offset[1]||e<b.redips.offset[0]||e>b.redips.offset[2]))i.parentNode.removeChild(i),H[l.id]-=1,REDIPS.drag.myhandler_notcloned();else if(-1<p.className.indexOf(REDIPS.drag.trash_cname))i.parentNode.removeChild(i),REDIPS.drag.trash_ask?setTimeout(function(){if(confirm("Are you sure you want to delete?"))za();else{if(!q){f[z].rows[I].cells[V].appendChild(i);v()}REDIPS.drag.myhandler_undeleted()}},20):za();else if("switch"===REDIPS.drag.drop_option)if(a=
REDIPS.drag.myhandler_dropped_before(p),!1===a)ia(!1);else{i.parentNode.removeChild(i);b=p.getElementsByTagName("div");c=b.length;for(a=0;a<c;a++)void 0!==b[0]&&(REDIPS.drag.obj_old=l=b[0],W.appendChild(l),R(l));ia();c&&REDIPS.drag.myhandler_switched()}else"overwrite"===REDIPS.drag.drop_option?(a=REDIPS.drag.myhandler_dropped_before(p),!1!==a&&oa(p)):a=REDIPS.drag.myhandler_dropped_before(p),ia(a);"cell"===r&&0<i.getElementsByTagName("table").length&&s();v();REDIPS.drag.myhandler_final()}u=w=A=null};
ia=function(a){!1!==a?("shift"===REDIPS.drag.drop_option&&Ra(p)&&pa(W,p),"top"===REDIPS.drag.multiple_drop&&p.hasChildNodes()?p.insertBefore(i,p.firstChild):p.appendChild(i),R(i),REDIPS.drag.myhandler_dropped(p),q&&(REDIPS.drag.myhandler_cloned_dropped(p),Ea())):q&&i.parentNode.removeChild(i)};R=function(a,b){!1===b?(a.onmousedown=null,a.ontouchstart=null,a.ondblclick=null):(a.onmousedown=ya,a.ontouchstart=ya,a.ondblclick=Ma)};Aa=function(a){a.style.top="";a.style.left="";a.style.position="";a.style.zIndex=
""};za=function(){var a;q&&Ea();if("shift"===REDIPS.drag.drop_option&&REDIPS.drag.shift_after){switch(REDIPS.drag.shift_option){case "vertical2":a="lastInColumn";break;case "horizontal2":a="lastInRow";break;default:a="last"}pa(W,Ga(a,W)[2])}REDIPS.drag.myhandler_deleted(q)};ea=function(a){var a=a||window.event,b=REDIPS.drag.bound,c,d,e,h;a.touches?(d=Y=a.touches[0].clientX,e=Z=a.touches[0].clientY):(d=Y=a.clientX,e=Z=a.clientY);c=Math.abs(Sa-d);h=Math.abs(Ta-e);if(!va){if("cell"===r&&(ca||!0===REDIPS.drag.clone_shiftKey&&
Ka))REDIPS.drag.obj_old=l=i,REDIPS.drag.obj=i=na(i,!0),q=!0,REDIPS.drag.myhandler_cloned();else{if("row"===r){if(ca||!0===REDIPS.drag.clone_shiftKey_row&&Ka)q=!0;REDIPS.drag.obj_old=l=i;REDIPS.drag.obj=i=ga(i);i.style.zIndex=999}i.setCapture&&i.setCapture();i.style.position="fixed";v();S();"row"===r&&(q?REDIPS.drag.myhandler_row_cloned():REDIPS.drag.myhandler_row_moved())}ka();d>F-o[1]&&(i.style.left=F-(o[1]+o[3])+"px");e>G-o[2]&&(i.style.top=G-(o[0]+o[2])+"px")}va=!0;if("cell"===r&&(7<c||7<h)&&!ha)ha=
!0,ka(),REDIPS.drag.myhandler_moved();d>o[3]&&d<F-o[1]&&(i.style.left=d-o[3]+"px");e>o[0]&&e<G-o[2]&&(i.style.top=e-o[0]+"px");if(d<C[1]&&d>C[3]&&e<C[2]&&e>C[0]&&0===T&&0===U&&(n.containTable||d<n[3]||d>n[1]||e<n[0]||e>n[2]))S(),ja();if(REDIPS.drag.autoscroll){K=b-(F/2>d?d-o[3]:F-d-o[1]);if(0<K){if(K>b&&(K=b),c=N()[0],K*=d<F/2?-1:1,!(0>K&&0>=c||0<K&&c>=ta-F)&&0===T++)REDIPS.event.remove(window,"scroll",v),la(window)}else K=0;L=b-(G/2>e?e-o[0]:G-e-o[2]);if(0<L){if(L>b&&(L=b),c=N()[1],L*=e<G/2?-1:1,
!(0>L&&0>=c||0<L&&c>=ua-G)&&0===U++)REDIPS.event.remove(window,"scroll",v),ma(window)}else L=0;for(h=0;h<M.length;h++)if(c=M[h],c.autoscroll&&d<c.offset[1]&&d>c.offset[3]&&e<c.offset[2]&&e>c.offset[0]){O=b-(c.midstX>d?d-o[3]-c.offset[3]:c.offset[1]-d-o[1]);0<O?(O>b&&(O=b),O*=d<c.midstX?-1:1,0===T++&&(REDIPS.event.remove(c.div,"scroll",v),la(c.div))):O=0;P=b-(c.midstY>e?e-o[0]-c.offset[0]:c.offset[2]-e-o[2]);0<P?(P>b&&(P=b),P*=e<c.midstY?-1:1,0===U++&&(REDIPS.event.remove(c.div,"scroll",v),ma(c.div))):
P=0;break}else O=P=0}a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()};ja=function(){if(g<f.length&&(g!==u||j!==w||k!==A))null!==u&&(null!==w&&null!==A)&&($(u,w,A,aa),REDIPS.drag.previous_cell=xa=f[u].rows[w].cells[A],REDIPS.drag.current_cell=X=f[g].rows[j].cells[k],"switching"===REDIPS.drag.drop_option&&"cell"===r&&(fa(X,xa),v(),S()),"cell"===r?REDIPS.drag.myhandler_changed(X):"row"===r&&(g!==u||j!==w)&&REDIPS.drag.myhandler_row_changed(X)),ka()};Ba=function(){if("number"===typeof window.innerWidth)F=
window.innerWidth,G=window.innerHeight;else if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight))F=document.documentElement.clientWidth,G=document.documentElement.clientHeight;else if(document.body&&(document.body.clientWidth||document.body.clientHeight))F=document.body.clientWidth,G=document.body.clientHeight;ta=document.documentElement.scrollWidth;ua=document.documentElement.scrollHeight;v()};S=function(){var a,b,c,d,e,h;c=[];a=function(){null!==
u&&(null!==w&&null!==A)&&(g=u,j=w,k=A)};b=Y;h=Z;for(g=0;g<f.length;g++)if(!1!==f[g].redips.enabled&&(c[0]=f[g].redips.offset[0],c[1]=f[g].redips.offset[1],c[2]=f[g].redips.offset[2],c[3]=f[g].redips.offset[3],void 0!==f[g].sca&&(c[0]=c[0]>f[g].sca.offset[0]?c[0]:f[g].sca.offset[0],c[1]=c[1]<f[g].sca.offset[1]?c[1]:f[g].sca.offset[1],c[2]=c[2]<f[g].sca.offset[2]?c[2]:f[g].sca.offset[2],c[3]=c[3]>f[g].sca.offset[3]?c[3]:f[g].sca.offset[3]),c[3]<b&&b<c[1]&&c[0]<h&&h<c[2])){c=f[g].redips.row_offset;for(j=
0;j<c.length-1;j++)if(void 0!==c[j]){n[0]=c[j][0];if(void 0!==c[j+1])n[2]=c[j+1][0];else for(d=j+2;d<c.length;d++)if(void 0!==c[d]){n[2]=c[d][0];break}if(h<=n[2])break}d=j;j===c.length-1&&(n[0]=c[j][0],n[2]=f[g].redips.offset[2]);do for(k=e=f[g].rows[j].cells.length-1;0<=k&&!(n[3]=c[j][3]+f[g].rows[j].cells[k].offsetLeft,n[1]=n[3]+f[g].rows[j].cells[k].offsetWidth,n[3]<=b&&b<=n[1]);k--);while(f[g].redips.rowspan&&-1===k&&0<j--);0>j||0>k?a():j!==d&&(n[0]=c[j][0],n[2]=n[0]+f[g].rows[j].cells[k].offsetHeight,
(h<n[0]||h>n[2])&&a());b=f[g].rows[j].cells[k];n.containTable=0<b.childNodes.length&&0<b.getElementsByTagName("table").length?!0:!1;if(-1===b.className.indexOf(REDIPS.drag.trash_cname))if(h=-1<b.className.indexOf(REDIPS.drag.only.cname)?!0:!1,!0===h){if(-1===b.className.indexOf(wa.div[i.id])){a();break}}else if(void 0!==wa.div[i.id]&&"deny"===wa.other){a();break}else if(h=-1<b.className.indexOf(REDIPS.drag.mark.cname)?!0:!1,(!0===h&&"deny"===REDIPS.drag.mark.action||!1===h&&"allow"===REDIPS.drag.mark.action)&&
-1===b.className.indexOf(Ua.exception[i.id])){a();break}h=-1<b.className.indexOf("single")?!0:!1;if("cell"===r){if(("single"===REDIPS.drag.drop_option||h)&&0<b.childNodes.length){if(1===b.childNodes.length&&3===b.firstChild.nodeType)break;h=!0;for(d=b.childNodes.length-1;0<=d;d--)if(b.childNodes[d].className&&-1<b.childNodes[d].className.indexOf("drag")){h=!1;break}if(!h&&(null!==u&&null!==w&&null!==A)&&(z!==g||I!==j||V!==k)){a();break}}if(-1<b.className.indexOf("rowhandler")){a();break}if(b.parentNode.redips&&
b.parentNode.redips.empty_row){a();break}}break}};ka=function(){g<f.length&&(null!==g&&null!==j&&null!==k)&&(aa=Ca(g,j,k),$(g,j,k),u=g,w=j,A=k)};$=function(a,b,c,d){if("cell"===r&&ha)c=f[a].rows[b].cells[c].style,c.backgroundColor=void 0===d?REDIPS.drag.hover.color_td:d.color[0].toString(),void 0!==REDIPS.drag.hover.border_td&&(void 0===d?c.border=REDIPS.drag.hover.border_td:(c.borderTopWidth=d.top[0][0],c.borderTopStyle=d.top[0][1],c.borderTopColor=d.top[0][2],c.borderRightWidth=d.right[0][0],c.borderRightStyle=
d.right[0][1],c.borderRightColor=d.right[0][2],c.borderBottomWidth=d.bottom[0][0],c.borderBottomStyle=d.bottom[0][1],c.borderBottomColor=d.bottom[0][2],c.borderLeftWidth=d.left[0][0],c.borderLeftStyle=d.left[0][1],c.borderLeftColor=d.left[0][2]));else if("row"===r){a=f[a].rows[b];for(b=0;b<a.cells.length;b++)c=a.cells[b].style,c.backgroundColor=void 0===d?REDIPS.drag.hover.color_tr:d.color[b].toString(),void 0!==REDIPS.drag.hover.border_tr&&(void 0===d?g===z?j<I?c.borderTop=REDIPS.drag.hover.border_tr:
c.borderBottom=REDIPS.drag.hover.border_tr:"before"===REDIPS.drag.row_position?c.borderTop=REDIPS.drag.hover.border_tr:c.borderBottom=REDIPS.drag.hover.border_tr:(c.borderTopWidth=d.top[b][0],c.borderTopStyle=d.top[b][1],c.borderTopColor=d.top[b][2],c.borderBottomWidth=d.bottom[b][0],c.borderBottomStyle=d.bottom[b][1],c.borderBottomColor=d.bottom[b][2]))}};Ca=function(a,b,c){var d={color:[],top:[],right:[],bottom:[],left:[]},e=function(a,b){var c="border"+b+"Style",d="border"+b+"Color";return[D(a,
"border"+b+"Width"),D(a,c),D(a,d)]};if("cell"===r)c=f[a].rows[b].cells[c],d.color[0]=c.style.backgroundColor,void 0!==REDIPS.drag.hover.border_td&&(d.top[0]=e(c,"Top"),d.right[0]=e(c,"Right"),d.bottom[0]=e(c,"Bottom"),d.left[0]=e(c,"Left"));else{a=f[a].rows[b];for(b=0;b<a.cells.length;b++)c=a.cells[b],d.color[b]=c.style.backgroundColor,void 0!==REDIPS.drag.hover.border_tr&&(d.top[b]=e(c,"Top"),d.bottom[b]=e(c,"Bottom"))}return d};B=function(a,b,c){var d=0,e=0,h=a;"fixed"!==b&&(b=N(),d=0-b[0],e=0-
b[1]);if(void 0===c||!0===c){do d+=a.offsetLeft-a.scrollLeft,e+=a.offsetTop-a.scrollTop,a=a.offsetParent;while(a&&"BODY"!==a.nodeName)}else{do d+=a.offsetLeft,e+=a.offsetTop,a=a.offsetParent;while(a&&"BODY"!==a.nodeName)}return[e,d+h.offsetWidth,e+h.offsetHeight,d]};v=function(){var a,b,c,d;for(a=0;a<f.length;a++){c=[];d=D(f[a],"position");"fixed"!==d&&(d=D(f[a].parentNode,"position"));for(b=f[a].rows.length-1;0<=b;b--)"none"!==f[a].rows[b].style.display&&(c[b]=B(f[a].rows[b],d));f[a].redips.offset=
B(f[a],d);f[a].redips.row_offset=c}C=B(y);for(a=0;a<M.length;a++)d=D(M[a].div,"position"),b=B(M[a].div,d,!1),M[a].offset=b,M[a].midstX=(b[1]+b[3])/2,M[a].midstY=(b[0]+b[2])/2};N=function(){var a,b;"number"===typeof window.pageYOffset?(a=window.pageXOffset,b=window.pageYOffset):document.body&&(document.body.scrollLeft||document.body.scrollTop)?(a=document.body.scrollLeft,b=document.body.scrollTop):document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)?(a=
document.documentElement.scrollLeft,b=document.documentElement.scrollTop):a=b=0;return[a,b]};la=function(a){var b,c;b=Y;c=Z;0<T&&(v(),S(),b<C[1]&&(b>C[3]&&c<C[2]&&c>C[0])&&ja());"object"===typeof a&&(t=a);t===window?(a=N()[0],b=ta-F,c=K):(a=t.scrollLeft,b=t.scrollWidth-t.clientWidth,c=O);0<T&&(0>c&&0<a||0<c&&a<b)?(t===window?(window.scrollBy(c,0),N(),a=parseInt(i.style.left,10),isNaN(a)):t.scrollLeft+=c,setTimeout(la,REDIPS.drag.speed)):(REDIPS.event.add(t,"scroll",v),T=0,n=[0,0,0,0])};ma=function(a){var b,
c;b=Y;c=Z;0<U&&(v(),S(),b<C[1]&&(b>C[3]&&c<C[2]&&c>C[0])&&ja());"object"===typeof a&&(t=a);t===window?(a=N()[1],b=ua-G,c=L):(a=t.scrollTop,b=t.scrollHeight-t.clientHeight,c=P);0<U&&(0>c&&0<a||0<c&&a<b)?(t===window?(window.scrollBy(0,c),N(),a=parseInt(i.style.top,10),isNaN(a)):t.scrollTop+=c,setTimeout(ma,REDIPS.drag.speed)):(REDIPS.event.add(t,"scroll",v),U=0,n=[0,0,0,0])};na=function(a,b){var c=a.cloneNode(!0),d=c.className,e,h;!0===b&&(document.getElementById("redips_clone").appendChild(c),c.style.zIndex=
999,c.style.position="fixed",e=B(a),h=B(c),c.style.top=e[0]-h[0]+"px",c.style.left=e[3]-h[3]+"px");c.setCapture&&c.setCapture();d=d.replace("clone","");d=d.replace(/climit(\d)_(\d+)/,"");c.className=sa(d);void 0===H[a.id]&&(H[a.id]=0);c.id=a.id+"c"+H[a.id];H[a.id]+=1;Da(a,c);return c};Da=function(a,b){var c=[],d;c[0]=function(a,b){a.redips&&(b.redips={},b.redips.enabled=a.redips.enabled,b.redips.container=a.redips.container,a.redips.enabled&&R(b))};c[1]=function(a,b){a.redips&&(b.redips={},b.redips.empty_row=
a.redips.empty_row)};d=function(d){var h,f,m;f=["DIV","TR"];h=a.getElementsByTagName(f[d]);f=b.getElementsByTagName(f[d]);for(m=0;m<f.length;m++)c[d](h[m],f[m])};if("DIV"===a.nodeName)c[0](a,b);else if("TR"===a.nodeName)c[1](a,b);d(0);d(1)};Ea=function(){var a,b,c;c=l.className;a=c.match(/climit(\d)_(\d+)/);null!==a&&(b=parseInt(a[1],10),a=parseInt(a[2],10),a-=1,c=c.replace(/climit\d_\d+/g,""),0>=a?(c=c.replace("clone",""),2===b?(c=c.replace("drag",""),R(l,!1),l.style.cursor="auto",REDIPS.drag.myhandler_clonedend2()):
REDIPS.drag.myhandler_clonedend1()):c=c+" climit"+b+"_"+a,l.className=sa(c))};Fa=function(a){var b=!1;a.srcElement?(b=a.srcElement.nodeName,a=a.srcElement.className):(b=a.target.nodeName,a=a.target.className);switch(b){case "A":case "INPUT":case "SELECT":case "OPTION":case "TEXTAREA":b=!0;break;default:b=/\bnodrag\b/i.test(a)?!0:!1}return b};E=function(a,b,c){var d,e=[],h=[],f,m,i,g,j=/\bdrag\b/i,k=/\bnoautoscroll\b/i;m=REDIPS.drag.opacity_disabled;!0===a||"init"===a?(f=REDIPS.drag.border,i="move",
g=!0):(f=REDIPS.drag.border_disabled,i="auto",g=!1);void 0===b?e=y.getElementsByTagName("div"):"subtree"===c?e="string"===typeof b?document.getElementById(b).getElementsByTagName("div"):b.getElementsByTagName("div"):e[0]="string"===typeof b?document.getElementById(b):b;for(c=b=0;b<e.length;b++)if(j.test(e[b].className))"init"===a||void 0===e[b].redips?(e[b].redips={},e[b].redips.container=y):!0===a&&"number"===typeof m?(e[b].style.opacity="",e[b].style.filter=""):!1===a&&"number"===typeof m&&(e[b].style.opacity=
m/100,e[b].style.filter="alpha(opacity="+m+")"),R(e[b],g),e[b].style.borderStyle=f,e[b].style.cursor=i,e[b].redips.enabled=g;else if("init"===a&&(h=D(e[b],"overflow"),"visible"!==h)){REDIPS.event.add(e[b],"scroll",v);h=D(e[b],"position");d=B(e[b],h,!1);h=k.test(e[b].className)?!1:!0;M[c]={div:e[b],offset:d,midstX:(d[1]+d[3])/2,midstY:(d[0]+d[2])/2,autoscroll:h};h=e[b].getElementsByTagName("table");for(d=0;d<h.length;d++)h[d].sca=M[c];c++}};D=function(a,b){var c;a&&a.currentStyle?c=a.currentStyle[b]:
a&&window.getComputedStyle&&(c=document.defaultView.getComputedStyle(a,null)[b]);return c};x=function(a,b,c){b=b.parentNode;for(void 0===c&&(c=0);b&&b.nodeName!==a;)if((b=b.parentNode)&&b.nodeName===a&&0<c)c--,b=b.parentNode;return b};Ga=function(a,b){var c=x("TABLE",b),d,e;switch(a){case "firstInColumn":d=0;e=b.cellIndex;break;case "firstInRow":d=b.parentNode.rowIndex;e=0;break;case "lastInColumn":d=c.rows.length-1;e=b.cellIndex;break;case "lastInRow":d=b.parentNode.rowIndex;e=c.rows[d].cells.length-
1;break;case "last":d=c.rows.length-1;e=c.rows[d].cells.length-1;break;default:d=e=0}return[d,e,c.rows[d].cells[e]]};fa=function(a,b,c){var d,e,h;d=function(a,b){var c=REDIPS.drag.get_position(b);REDIPS.drag.move_object({obj:a,target:c,callback:function(a){La--;0===La&&(a=REDIPS.drag.find_parent("TABLE",a),REDIPS.drag.enable_table(!0,a))}})};if(a!==b&&!("object"!==typeof a||"object"!==typeof b))if(e=a.childNodes.length,"animation"===c){0<e&&(c=x("TABLE",b),REDIPS.drag.enable_table(!1,c));for(c=0;c<
e;c++)1===a.childNodes[c].nodeType&&"DIV"===a.childNodes[c].nodeName&&(La++,d(a.childNodes[c],b))}else for(d=c=0;c<e;c++)1===a.childNodes[d].nodeType&&"DIV"===a.childNodes[d].nodeName?(h=a.childNodes[d],b.appendChild(h),R(h)):d++};oa=function(a){var b,c;if("TD"!==a.nodeName)return!1;c=a.childNodes.length;for(b=0;b<c;b++)a.removeChild(a.childNodes[0])};pa=function(a,b){var c,d,e,h,f,m,i,g,j,k,l;if(a!==b){f=REDIPS.drag.shift_option;c=x("TABLE",a);d=x("TABLE",b);m=Oa(d);c===d&&(e=[a.redips.rowIndex,
a.redips.cellIndex]);h=[b.redips.rowIndex,b.redips.cellIndex];i=d.rows.length-1;g=Pa(d);switch(f){case "vertical2":c=c===d&&a.cellIndex===b.cellIndex?e:[i,b.redips.cellIndex];break;case "horizontal2":c=c===d&&a.parentNode.rowIndex===b.parentNode.rowIndex?e:[b.redips.rowIndex,g];break;default:c=c===d?e:[i,g]}"vertical1"===f||"vertical2"===f?(f=1E3*c[1]+c[0]<1E3*h[1]+h[0]?1:-1,l=i,d=0,e=1):(f=1E3*c[0]+c[1]<1E3*h[0]+h[1]?1:-1,l=g,d=1,e=0);for(;c[0]!==h[0]||c[1]!==h[1];)if(g=m[c[0]+"-"+c[1]],c[d]+=f,
0>c[d]?(c[d]=l,c[e]--):c[d]>l&&(c[d]=0,c[e]++),i=m[c[0]+"-"+c[1]],void 0!==i&&(j=i),void 0!==g&&(k=g),void 0!==i&&void 0!==k||void 0!==j&&void 0!==g)REDIPS.drag.animation_shift?fa(j,k,"animation"):fa(j,k)}};Oa=function(a){var b=[],c,d={},e,f,i,m,g,j,k,l;m=a.rows;for(g=0;g<m.length;g++)for(j=0;j<m[g].cells.length;j++){c=m[g].cells[j];a=c.parentNode.rowIndex;e=c.rowSpan||1;f=c.colSpan||1;b[a]=b[a]||[];for(k=0;k<b[a].length+1;k++)if("undefined"===typeof b[a][k]){i=k;break}d[a+"-"+i]=c;void 0===c.redips&&
(c.redips={});c.redips.rowIndex=a;c.redips.cellIndex=i;for(k=a;k<a+e;k++){b[k]=b[k]||[];c=b[k];for(l=i;l<i+f;l++)c[l]="x"}}return d};Pa=function(a){var b=a.rows,c=0,d,e;"string"===typeof a&&document.getElementById(a);for(d=0;d<b.length;d++){for(e=a=0;e<b[d].cells.length;e++)a+=b[d].cells[e].colSpan||1;a>c&&(c=a)}return c};Ha=function(a,b){var c=(b.k1-b.k2*a)*(b.k1-b.k2*a),d,a=a+REDIPS.drag.animation_step*(4-3*c)*b.direction;d=b.m*a+b.b;"horizontal"===b.type?(b.obj.style.left=a+"px",b.obj.style.top=
d+"px"):(b.obj.style.left=d+"px",b.obj.style.top=a+"px");a<b.last&&0<b.direction||a>b.last&&0>b.direction?setTimeout(function(){Ha(a,b)},REDIPS.drag.animation_pause*c):(Aa(b.obj),b.obj.redips.animated=!1,"cell"===b.mode?(!0===b.overwrite&&oa(b.target_cell),b.target_cell.appendChild(b.obj),R(b.obj)):Ja(qa(b.target[0]),b.target[1],b.obj),"function"===typeof b.callback&&b.callback(b.obj))};Ia=function(a){var b,c,d;b=[];b=c=d=-1;if(void 0===a)b=g<f.length?f[g].redips.idx:null===u||null===w||null===A?
f[z].redips.idx:f[u].redips.idx,c=f[z].redips.idx,b=[b,j,k,c,I,V];else{if(a="string"===typeof a?document.getElementById(a):a)"TD"!==a.nodeName&&(a=x("TD",a)),a&&"TD"===a.nodeName&&(b=a.cellIndex,c=a.parentNode.rowIndex,a=x("TABLE",a),d=a.redips.idx);b=[d,c,b]}return b};qa=function(a){var b;for(b=0;b<f.length&&f[b].redips.idx!==a;b++);return b};sa=function(a){void 0!==a&&(a=a.replace(/^\s+|\s+$/g,"").replace(/\s{2,}/g," "));return a};Ra=function(a){var b;for(b=0;b<a.childNodes.length;b++)if(1===a.childNodes[b].nodeType)return!0;
return!1};ra=function(a,b,c){var d,e;"string"===typeof a&&(a=document.getElementById(a),a=x("TABLE",a));if("TR"===a.nodeName){a=a.getElementsByTagName("td");for(d=0;d<a.length;d++)if(a[d].style.backgroundColor=c?c:"","empty"===b)a[d].innerHTML="";else for(e=0;e<a[d].childNodes.length;e++)1===a[d].childNodes[e].nodeType&&(a[d].childNodes[e].style.opacity=b/100,a[d].childNodes[e].style.filter="alpha(opacity="+b+")")}else a.style.opacity=b/100,a.style.filter="alpha(opacity="+b+")",a.style.backgroundColor=
c?c:""};return{obj:i,obj_old:l,mode:r,source_cell:W,previous_cell:xa,current_cell:X,target_cell:p,hover:{color_td:"#E7AB83",color_tr:"#E7AB83"},autoscroll:!0,bound:25,speed:20,only:wa,mark:Ua,border:"solid",border_disabled:"dotted",opacity_disabled:void 0,trash_cname:"trash",trash_ask:!0,trash_ask_row:!0,save_pname:"p",drop_option:"multiple",shift_option:"horizontal1",multiple_drop:"bottom",delete_cloned:!0,delete_shifted:!1,clone_shiftKey:!1,clone_shiftKey_row:!1,animation_pause:20,animation_step:2,
animation_shift:!1,shift_after:!0,row_empty_color:"White",row_position:"before",table_sort:!0,init:function(a){var b;if(void 0===a||"string"!==typeof a)a="drag";y=document.getElementById(a);document.getElementById("redips_clone")||(a=document.createElement("div"),a.id="redips_clone",a.style.width=a.style.height="1px",y.appendChild(a));E("init");s();Ba();REDIPS.event.add(window,"resize",Ba);b=y.getElementsByTagName("img");for(a=0;a<b.length;a++)REDIPS.event.add(b[a],"mousemove",J),REDIPS.event.add(b[a],
"touchmove",J);REDIPS.event.add(window,"scroll",v)},enable_drag:E,enable_table:function(a,b){var c;if("object"===typeof b&&"TABLE"===b.nodeName)b.redips.enabled=a;else for(c=0;c<f.length;c++)-1<f[c].className.indexOf(b)&&(f[c].redips.enabled=a)},clone_div:na,save_content:function(a,b){var c="",d,e,f,i,g,j,k,l=[],n=REDIPS.drag.save_pname;"string"===typeof a&&(a=document.getElementById(a));if(void 0!==a&&"object"===typeof a&&"TABLE"===a.nodeName){d=a.rows.length;for(g=0;g<d;g++){e=a.rows[g].cells.length;
for(j=0;j<e;j++)if(f=a.rows[g].cells[j],0<f.childNodes.length)for(k=0;k<f.childNodes.length;k++)i=f.childNodes[k],"DIV"===i.nodeName&&-1<i.className.indexOf("drag")&&(c+=n+"[]="+i.id+"_"+g+"_"+j+"&",l.push([i.id,g,j]))}c="json"===b&&0<l.length?JSON.stringify(l):c.substring(0,c.length-1)}return c},relocate:fa,empty_cell:oa,move_object:function(a){var b={direction:1},c,d,e,h,i,g;b.callback=a.callback;b.overwrite=a.overwrite;"string"===typeof a.id?b.obj=b.obj_old=document.getElementById(a.id):"object"===
typeof a.obj&&"DIV"===a.obj.nodeName&&(b.obj=b.obj_old=a.obj);if("row"===a.mode){b.mode="row";g=qa(a.source[0]);i=a.source[1];l=b.obj_old=f[g].rows[i];if(l.redips&&!0===l.redips.empty_row)return!1;b.obj=ga(b.obj_old,"animated")}else if(b.obj&&-1<b.obj.className.indexOf("row")){b.mode="row";b.obj=b.obj_old=l=x("TR",b.obj);if(l.redips&&!0===l.redips.empty_row)return!1;b.obj=ga(b.obj_old,"animated")}else b.mode="cell";if(!("object"!==typeof b.obj||null===b.obj))return b.obj.style.zIndex=999,y!==b.obj.redips.container&&
(y=b.obj.redips.container,s()),g=B(b.obj),e=g[1]-g[3],h=g[2]-g[0],c=g[3],d=g[0],!0===a.clone&&"cell"===b.mode&&(b.obj=na(b.obj,!0),REDIPS.drag.myhandler_cloned(b.obj)),void 0===a.target&&(a.target=Ia()),b.target=a.target,g=qa(a.target[0]),i=a.target[1],a=a.target[2],i>f[g].rows.length-1&&(i=f[g].rows.length-1),b.target_cell=f[g].rows[i].cells[a],"cell"===b.mode?(g=B(b.target_cell),i=g[1]-g[3],a=g[2]-g[0],e=g[3]+(i-e)/2,h=g[0]+(a-h)/2):(g=B(f[g].rows[i]),e=g[3],h=g[0]),g=e-c,a=h-d,b.obj.style.position=
"fixed",Math.abs(g)>Math.abs(a)?(b.type="horizontal",b.m=a/g,b.b=d-b.m*c,b.k1=(c+e)/(c-e),b.k2=2/(c-e),c>e&&(b.direction=-1),g=c,b.last=e):(b.type="vertical",b.m=g/a,b.b=c-b.m*d,b.k1=(d+h)/(d-h),b.k2=2/(d-h),d>h&&(b.direction=-1),g=d,b.last=h),b.obj.redips.animated=!0,Ha(g,b),[b.obj,b.obj_old]},shift_cells:pa,delete_object:function(a){"object"===typeof a&&"DIV"===a.nodeName?a.parentNode.removeChild(a):"string"===typeof a&&(a=document.getElementById(a))&&a.parentNode.removeChild(a)},get_position:Ia,
row_opacity:ra,row_empty:function(a,b,c){a=document.getElementById(a).rows[b];void 0===c&&(c=REDIPS.drag.row_empty_color);void 0===a.redips&&(a.redips={});a.redips.empty_row=!0;ra(a,"empty",c)},getScrollPosition:N,get_style:D,find_parent:x,find_cell:Ga,myhandler_clicked:function(){},myhandler_dblclicked:function(){},myhandler_moved:function(){},myhandler_notmoved:function(){},myhandler_dropped:function(){},myhandler_dropped_before:function(){},myhandler_switched:function(){},myhandler_changed:function(){},
myhandler_cloned:function(){},myhandler_cloned_dropped:function(){},myhandler_clonedend1:function(){},myhandler_clonedend2:function(){},myhandler_notcloned:function(){},myhandler_deleted:function(){},myhandler_undeleted:function(){},myhandler_final:function(){},myhandler_row_clicked:function(){},myhandler_row_moved:function(){},myhandler_row_notmoved:function(){},myhandler_row_dropped:function(){},myhandler_row_dropped_before:function(){},myhandler_row_dropped_source:function(){},myhandler_row_changed:function(){},
myhandler_row_cloned:function(){},myhandler_row_notcloned:function(){},myhandler_row_deleted:function(){},myhandler_row_undeleted:function(){}}}();REDIPS.event||(REDIPS.event=function(){return{add:function(s,E,J){s.addEventListener?s.addEventListener(E,J,!1):s.attachEvent?s.attachEvent("on"+E,J):s["on"+E]=J},remove:function(s,E,J){s.removeEventListener?s.removeEventListener(E,J,!1):s.detachEvent?s.detachEvent("on"+E,J):s["on"+E]=null}}}());