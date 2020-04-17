(this["webpackJsonpcovid-project"]=this["webpackJsonpcovid-project"]||[]).push([[0],{176:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(57),c=t.n(o),l=(t(64),t(65),t(3)),i=t(4),s=t(5),d=t(6),m=t(30),u=t.n(m);u.a.accessToken="pk.eyJ1IjoiaW5jcmVkaWJsZWphZ3VyIiwiYSI6ImNrOTJwM2FsNzAyM2szbW9hdWR2OXBqZjUifQ.6H9790vEmqomFGSu0Q8M0g";var p=function(e){Object(d.a)(t,e);var a=Object(s.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).state={},r}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=new u.a.Map({container:"mymap",style:"mapbox://styles/incrediblejagur/ck7xs2kdu00ot1ilpid6krvs7",center:[24.991639,-28.8166236],zoom:4});e.scrollZoom.disable(),e.dragPan.disable();var a="/api/geojson";e.on("load",(function(){window.setInterval((function(){e.getSource("points").setData(a)}),2e3),e.addSource("points",{type:"geojson",data:a}),e.addLayer({id:"points",type:"symbol",source:"points",layout:{"text-field":["get","cases"],"text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-offset":[0,0],"text-anchor":"top"},paint:{"text-color":"#ffffff"}})}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{id:"mymap",style:{marginBottom:20,position:"relative",width:"100%",height:"350px",borderRadius:5}}))}}]),t}(n.a.Component),v=t(9),b=t.n(v),h=function(e){Object(d.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={data:[]},e.componentDidMount=function(){b.a.get("/api/latest-stats").then((function(a){var t=a.data.data,r=[];for(var n in t)r.push(Object.values(t[n])[0]);e.setState({data:r})}))},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state.data;return n.a.createElement("div",{className:"card-group",style:{marginTop:50}},n.a.createElement("div",{className:"card",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Tests Conducted"),n.a.createElement("p",{className:"card-text"},e[0],"\xa0"))),n.a.createElement("div",{className:"card",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Positive Cases Identified"),n.a.createElement("p",{className:"card-text"},e[1],"\xa0"))),n.a.createElement("div",{className:"card",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Recoveries"),n.a.createElement("p",{className:"card-text"},e[2],"\xa0"))),n.a.createElement("div",{className:"card",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Deaths"),n.a.createElement("p",{className:"card-text"},e[3],"\xa0"))))}}]),t}(n.a.Component),f=function(e){Object(d.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={latestIncrease:"",averageIncrease:"",lastUpdated:""},e.componentDidMount=function(){b.a.get("/api/extra-info").then((function(a){var t=a.data.data;e.setState({latestIncrease:t.latest_increase,averageIncrease:t.average_increase})})),b.a.get("/api/latest-stats").then((function(a){var t=a.data.data;e.setState({lastUpdated:t[4].time})}))},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state,a=e.latestIncrease,t=e.averageIncrease,r=e.lastUpdated;return n.a.createElement("div",null,n.a.createElement("div",{className:""},n.a.createElement("div",{className:"card-group",style:{marginTop:0}},n.a.createElement("div",{className:"card",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Latest Increase"),n.a.createElement("p",{className:"card-text"},a,"\xa0"))),n.a.createElement("div",{className:"card",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Average Increase"),n.a.createElement("p",{className:"card-text"},t,"\xa0"))))),n.a.createElement("div",{className:""},n.a.createElement("div",{className:"card-group",style:{marginTop:0}},n.a.createElement("div",{className:"card",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"For more info"),n.a.createElement("p",{className:"card-text"},n.a.createElement("a",{href:"https://sacoronavirus.co.za/"},"sacoronavirus.co.za")))),n.a.createElement("div",{className:"card",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Last Updated"),n.a.createElement("p",{className:"card-text"},r,"\xa0"))))))}}]),t}(n.a.Component),g={covidLineGraph:function(e,a,t){return[{label:"Positive Cases Identified",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(232, 87, 77)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(232, 87, 77)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:e},{label:"Recoveries",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:a},{label:"Deaths",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(0, 0, 0)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(0, 0, 0)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t}]},covidBarGraph:function(e){return[{label:"Provinces",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(0, 0, 0)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(0, 0, 0)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:e}]}},y=t(31),E=function(e){Object(d.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={data:!1,latestData:!1},e.componentDidMount=function(){b.a.get("/api/latest-stats").then((function(a){var t=a.data.data;t.pop(),e.setState({latestData:t})})),b.a.get("/api/all-stats").then((function(a){for(var t=a.data.data,r=[],n=[],o=[],c=[],l=0;l<t.length;l++)r.push(t[l].date),n.push(t[l].cases),o.push(t[l].recoveries),c.push(t[l].deaths);var i={labels:r,datasets:g.covidLineGraph(n,o,c)};e.setState({data:i})}))},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state,a=e.data,t=e.latestData;return a&&t?n.a.createElement("article",{className:"canvas-container"},n.a.createElement(y.b,{data:a,options:{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0,max:100*Math.ceil(2.5*Number(Object.values(t[1]))/100)}}]}}})):n.a.createElement("div",null)}}]),t}(n.a.Component),N=function(e){Object(d.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={data:""},e.componentDidMount=function(){b.a.get("/api/province-stats").then((function(a){var t=a.data.data,r=t[t.length-1],n=[],o=[];for(var c in r)2!==c.length&&3!==c.length||(n.push(c),o.push(r[c]));var l={labels:n,datasets:g.covidBarGraph(o)};e.setState({data:l})}))},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state.data;return""!==e?n.a.createElement(y.a,{data:e,width:100,height:50,options:{}}):n.a.createElement("div",null)}}]),t}(n.a.Component),j=function(e){Object(d.a)(t,e);var a=Object(s.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:{textAlign:"center",backgroundColor:"#343a40",padding:5}},n.a.createElement("code",{style:{fontSize:11,color:"white"}},"Made by Daniel || ",n.a.createElement("a",{style:{color:"rgba(232, 87, 77)"},href:"https://github.com/incrediblejagur/rsa_covid-19/issues"},"Report Bug")))}}]),t}(n.a.Component),C=function(e){Object(d.a)(t,e);var a=Object(s.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row centered"},n.a.createElement("div",{className:"mycards col-sm"},n.a.createElement(h,null))),n.a.createElement("div",{className:"row centered",style:{marginTop:15}},n.a.createElement("div",{className:"col-sm"},n.a.createElement(E,null))),n.a.createElement("div",{className:"row centered",style:{marginTop:15}},n.a.createElement("div",{className:"col-sm"},n.a.createElement(N,null)),n.a.createElement("div",{className:"mycards extrainfo col-sm centered",style:{marginTop:30}},n.a.createElement(f,null)))),n.a.createElement("div",{className:"",style:{marginTop:15}},n.a.createElement(p,null)),n.a.createElement(j,null))}}]),t}(n.a.Component);var O=function(){return n.a.createElement("div",{className:"render"},n.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,a,t){e.exports=t(176)},64:function(e,a,t){},65:function(e,a,t){}},[[59,1,2]]]);
//# sourceMappingURL=main.eabbc3cc.chunk.js.map