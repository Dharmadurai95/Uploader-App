(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{325:function(e,t,a){e.exports=a(541)},330:function(e,t,a){},331:function(e,t,a){},334:function(e,t){},336:function(e,t){},346:function(e,t,a){},368:function(e,t,a){},369:function(e,t,a){},501:function(e,t,a){},541:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),c=a.n(o),i=(a(330),a(331),a(185)),l=a(171),s=a(259),d=a(260),u=a(290),m=a(289),h=a(261),f=(a(346),a(130)),p=a.n(f),g=a(29),b=a(173),v=a.n(b);a(368),a(369);var y=function(){return r.a.createElement("div",{className:"spinner"})};v.a.setAppElement("#root");var E={overlay:{backgroundColor:"gray",zIndex:100},content:{top:"10%",left:"40px",right:"40px",bottom:"50px",border:"1px solid rgb(204, 204, 204)",background:"rgb(255, 255, 255)",overflow:"hidden",borderadius:"4px",outline:"none",padding:"20px"}},k=function(e){var t=Object(n.useState)(!0),a=Object(g.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(!1),l=Object(g.a)(i,2),s=l[0],d=l[1],u=Object(n.useState)(""),m=Object(g.a)(u,2),h=m[0],f=m[1],p=Object(n.useState)(!0),b=Object(g.a)(p,2),k=b[0],O=b[1],C=null;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{style:E,isOpen:o,shouldCloseOnOverlayClick:!0,onRequestClose:function(){c(!1),e.close()}},r.a.createElement("div",{className:"childContent"},r.a.createElement("iframe",{ref:function(e){return C=e},src:function(){if(e.children&&e.children.href){var t=e.children.href;return s||(d(!0),f("results/Zip.html"===t?"map":"html")),t}var a=e.children.src;if(e.children&&a)return s||(d(!0),f("img")),a}(),title:"Detailed View",className:h,allowFullScreen:!0,allowpaymentrequest:"true",style:{transform:"scale(1)"},onLoad:function(){C.contentWindow.document.querySelector("body").className="body",O(!1)}}," "),k?r.a.createElement(y,null):""),r.a.createElement("button",{className:"buttonClose",onClick:function(){c(!1),e.close()}},"x")))},O=a(565),C=a(568),S=a(263),N=(a(501),function(e){return r.a.createElement("div",{className:"chart"},r.a.createElement(S.a,{data:e.data,keys:Object.keys(e.data[0]),indexBy:"Row",margin:{top:50,right:60,bottom:50,left:60},pixelRatio:1,padding:.45,innerPadding:2,minValue:-10,maxValue:"auto",groupMode:"stacked",layout:"vertical",reverse:!1,colors:{scheme:"set1"},colorBy:"id",borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1.6]]},axisTop:{tickSize:15,tickPadding:6,tickRotation:-37,legend:"",legendOffset:100},axisRight:null,axisBottom:{tickSize:15,tickPadding:7.5,tickRotation:-37,legendPosition:"middle",legendOffset:36},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legendPosition:"middle",legendOffset:-40},enableGridX:!0,enableGridY:!1,enableLabel:!0,labelSkipWidth:12,labelSkipHeight:12,labelTextColor:{from:"color",modifiers:[["darker",1.6]]},isInteractive:!0}))}),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={csvCollection:"",singleImageSource:"",filesPerPage:10,currentPageNo:1,topList:"",currentPost:"",chart:!1},e.handleOnDrop=function(t){e.setState({csvCollection:t,loading:""})},e.pageNumberHandler=function(){var t,a=Object(l.a)(e.state.csvCollection).slice(0);t=a.slice(3),e.state.topList&&(t=a.slice(2));var n,r,o=e.state,c=o.filesPerPage;return n=(r=c*o.currentPageNo)-c,t.slice(n,r)},e.renderTableBodyData=function(){return e.pageNumberHandler().map((function(e,t){return r.a.createElement("tr",{key:"outerBody".concat(t)},e.data.map((function(e,t){return r.a.createElement("td",{key:"innerBody".concat(t)}," ",p()(e)," ")})))}))},e.renderTableHeadData=function(){var t=Object(l.a)(e.state.csvCollection).slice(0),a=t.slice(0,3);return a&&a[2]&&a[2].data&&(a[2].data.every((function(e){return/<\/?[a-z][\s\S]*>/i.test(e)}))||(a=t.slice(0,2),e.setState({topList:!0}))),a.map((function(t,a){return r.a.createElement("tr",{key:"outerHead".concat(a)},t.data.map((function(t,a){return/<\/?[a-z][\s\S]*>/i.test(t)?r.a.createElement("td",{key:Object(C.a)(),onClick:function(a){a.preventDefault();var n=Object.assign({},p()(t)).props;e.openModal(n)}},p()(t)):r.a.createElement("td",{key:Object(C.a)()},t)})))}))},e.handleOnError=function(e,t,a,n){console.log(e)},e.handleOnRemoveFile=function(t){console.log(t,"removed"),e.setState({csvCollection:"",topList:!1})},e.openModal=function(t){(t&&t.src||t&&t.href)&&e.setState({singleImageSource:t})},e.closeModal=function(){e.setState({singleImageSource:""})},e.paginationHanlder=function(t,a){e.setState({filesPerPage:a,currentPageNo:t})},e.chartDataFunctionality=function(){var t=e.state.csvCollection,a=e.pageNumberHandler(),n=e.chardHanler(a,t);if(n){var o=n.map((function(e,t){if(!isNaN(Object.values(e)[0]))return Object(i.a)(Object(i.a)({},e),{},{Row:"Row".concat(t+1)})}));return console.log(o,"add indexs"),o[0]?r.a.createElement(N,{data:o}):r.a.createElement("h2",{className:"noData"},"There is no chart data here")}},e.chardHanler=function(e,t){return e.map((function(e,a){var n=Object.assign({},e.data),r={};Object.values(n).map((function(e,a){if(!isNaN(e)&&e<1e7){var n=t[0].data[a],o=parseFloat(e);return r[n]=o}}));return r}))},e}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.top!==this.state.topList&&this.state.cs&&this.renderTableHeadData()}},{key:"render",value:function(){var e=this,t=this.state.chart?"chartRed":"chartGreen";return r.a.createElement("div",{className:"uploader"},r.a.createElement("div",{className:"uploaderCard"},r.a.createElement(h.a,{onDrop:this.handleOnDrop,onError:this.handleOnError,addRemoveButton:!0,onRemoveFile:this.handleOnRemoveFile},r.a.createElement("span",null,"Click (Drop) Upload  Your  file"))),this.state.csvCollection&&r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.setState({chart:!e.state.chart})},className:"ChartBtn ".concat(t)},this.state.chart?"Hide Chart":"Show Chart"),this.state.chart?this.chartDataFunctionality():""),this.state.csvCollection&&r.a.createElement("div",{className:"pagination"},r.a.createElement(O.a,{total:this.state.csvCollection.length,showTotal:function(e,t){return"".concat(t[0],"-").concat(t[1]," of ").concat(e," items")},defaultPageSize:10,defaultCurrent:1,pageSizeOptions:["10","25","50","100","500"],onChange:function(t,a){return e.paginationHanlder(t,a)}})),r.a.createElement("div",{className:"tableData",key:"table"},this.state.csvCollection&&r.a.createElement("table",{className:"table"},r.a.createElement("thead",{key:"theadHead"},this.renderTableHeadData()),r.a.createElement("tbody",{key:"theadBody"},this.renderTableBodyData()))),this.state.singleImageSource?r.a.createElement(k,{close:this.closeModal},this.state.singleImageSource):"")}}]),a}(n.Component);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(540);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[325,1,2]]]);
//# sourceMappingURL=main.7ec5c253.chunk.js.map