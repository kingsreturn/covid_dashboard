!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6dU7":function(e,n,a){"use strict";a.r(n),a.d(n,"DashboardModule",function(){return B});var o,s,r,u,l=a("s7LF"),h=a("hrfs"),c=a("FE24"),d=a("8Y7J"),b={provide:l.d,useExisting:Object(d.T)(function(){return p}),multi:!0},p=((o=function(){function e(){t(this,e),this.btnCheckboxTrue=!0,this.btnCheckboxFalse=!1,this.state=!1,this.onChange=Function.prototype,this.onTouched=Function.prototype}return i(e,[{key:"onClick",value:function(){this.isDisabled||(this.toggle(!this.state),this.onChange(this.value))}},{key:"ngOnInit",value:function(){this.toggle(this.trueValue===this.value)}},{key:"trueValue",get:function(){return void 0===this.btnCheckboxTrue||this.btnCheckboxTrue}},{key:"falseValue",get:function(){return void 0!==this.btnCheckboxFalse&&this.btnCheckboxFalse}},{key:"toggle",value:function(t){this.state=t,this.value=this.state?this.trueValue:this.falseValue}},{key:"writeValue",value:function(t){this.state=this.trueValue===t,this.value=t?this.trueValue:this.falseValue}},{key:"setDisabledState",value:function(t){this.isDisabled=t}},{key:"registerOnChange",value:function(t){this.onChange=t}},{key:"registerOnTouched",value:function(t){this.onTouched=t}}]),e}()).\u0275fac=function(t){return new(t||o)},o.\u0275dir=d.Gb({type:o,selectors:[["","btnCheckbox",""]],hostVars:3,hostBindings:function(t,e){1&t&&d.Yb("click",function(){return e.onClick()}),2&t&&(d.Ab("aria-pressed",e.state),d.Db("active",e.state))},inputs:{btnCheckboxTrue:"btnCheckboxTrue",btnCheckboxFalse:"btnCheckboxFalse"},features:[d.yb([b])]}),o),f={provide:l.d,useExisting:Object(d.T)(function(){return g}),multi:!0},g=((s=function(){function e(i,n,a,o){t(this,e),this.el=i,this.cdr=n,this.renderer=a,this.group=o,this.onChange=Function.prototype,this.onTouched=Function.prototype,this.role="radio",this._hasFocus=!1}return i(e,[{key:"value",get:function(){return this.group?this.group.value:this._value},set:function(t){this.group?this.group.value=t:this._value=t}},{key:"disabled",get:function(){return this._disabled},set:function(t){this.setDisabledState(t)}},{key:"controlOrGroupDisabled",get:function(){return!!(this.disabled||this.group&&this.group.disabled)||void 0}},{key:"hasDisabledClass",get:function(){return this.controlOrGroupDisabled&&!this.isActive}},{key:"isActive",get:function(){return this.btnRadio===this.value}},{key:"tabindex",get:function(){return this.controlOrGroupDisabled?void 0:this.isActive||null==this.group?0:-1}},{key:"hasFocus",get:function(){return this._hasFocus}},{key:"toggleIfAllowed",value:function(){this.canToggle()&&(this.value=this.uncheckable&&this.btnRadio===this.value?void 0:this.btnRadio,this._onChange(this.value))}},{key:"onSpacePressed",value:function(t){this.toggleIfAllowed(),t.preventDefault()}},{key:"focus",value:function(){this.el.nativeElement.focus()}},{key:"onFocus",value:function(){this._hasFocus=!0}},{key:"onBlur",value:function(){this._hasFocus=!1,this.onTouched()}},{key:"canToggle",value:function(){return!this.controlOrGroupDisabled&&(this.uncheckable||this.btnRadio!==this.value)}},{key:"ngOnInit",value:function(){this.uncheckable=void 0!==this.uncheckable}},{key:"_onChange",value:function(t){this.group?this.group.value=t:(this.onTouched(),this.onChange(t))}},{key:"writeValue",value:function(t){this.value=t,this.cdr.markForCheck()}},{key:"registerOnChange",value:function(t){this.onChange=t}},{key:"registerOnTouched",value:function(t){this.onTouched=t}},{key:"setDisabledState",value:function(t){this._disabled=t,t?this.renderer.setAttribute(this.el.nativeElement,"disabled","disabled"):this.renderer.removeAttribute(this.el.nativeElement,"disabled")}}]),e}()).\u0275fac=function(t){return new(t||s)(d.Lb(d.l),d.Lb(d.h),d.Lb(d.E),d.Lb(Object(d.T)(function(){return v}),8))},s.\u0275dir=d.Gb({type:s,selectors:[["","btnRadio",""]],hostVars:8,hostBindings:function(t,e){1&t&&d.Yb("click",function(){return e.toggleIfAllowed()})("keydown.space",function(t){return e.onSpacePressed(t)})("focus",function(){return e.onFocus()})("blur",function(){return e.onBlur()}),2&t&&(d.Ab("role",e.role)("aria-disabled",e.controlOrGroupDisabled)("aria-checked",e.isActive)("tabindex",e.tabindex),d.Db("disabled",e.hasDisabledClass)("active",e.isActive))},inputs:{value:"value",disabled:"disabled",uncheckable:"uncheckable",btnRadio:"btnRadio"},features:[d.yb([f])]}),s),y={provide:l.d,useExisting:Object(d.T)(function(){return v}),multi:!0},v=((u=function(){function e(i){t(this,e),this.cdr=i,this.onChange=Function.prototype,this.onTouched=Function.prototype,this.role="radiogroup"}return i(e,[{key:"value",get:function(){return this._value},set:function(t){this._value=t,this.onChange(t)}},{key:"tabindex",get:function(){return this._disabled?null:0}},{key:"writeValue",value:function(t){this._value=t,this.cdr.markForCheck()}},{key:"registerOnChange",value:function(t){this.onChange=t}},{key:"registerOnTouched",value:function(t){this.onTouched=t}},{key:"setDisabledState",value:function(t){this.radioButtons&&(this._disabled=t,this.radioButtons.forEach(function(e){e.setDisabledState(t)}),this.cdr.markForCheck())}},{key:"onFocus",value:function(){if(!this._disabled){var t=this.getActiveOrFocusedRadio();if(t)t.focus();else{var e=this.radioButtons.find(function(t){return!t.disabled});e&&e.focus()}}}},{key:"onBlur",value:function(){this.onTouched&&this.onTouched()}},{key:"selectNext",value:function(t){this.selectInDirection("next"),t.preventDefault()}},{key:"selectPrevious",value:function(t){this.selectInDirection("previous"),t.preventDefault()}},{key:"disabled",get:function(){return this._disabled}},{key:"selectInDirection",value:function(t){if(!this._disabled){var e=this.getActiveOrFocusedRadio();if(e)for(var i=this.radioButtons.toArray(),n=i.indexOf(e),a=o(n,i);a!==n;a=o(a,i))if(i[a].canToggle()){i[a].toggleIfAllowed(),i[a].focus();break}}function o(e,i){var n=(e+("next"===t?1:-1))%i.length;return n<0&&(n=i.length-1),n}}},{key:"getActiveOrFocusedRadio",value:function(){return this.radioButtons.find(function(t){return t.isActive})||this.radioButtons.find(function(t){return t.hasFocus})}}]),e}()).\u0275fac=function(t){return new(t||u)(d.Lb(d.h))},u.\u0275dir=d.Gb({type:u,selectors:[["","btnRadioGroup",""]],contentQueries:function(t,e,i){var n;1&t&&d.Eb(i,g,0),2&t&&d.mc(n=d.Zb())&&(e.radioButtons=n)},hostVars:2,hostBindings:function(t,e){1&t&&d.Yb("focus",function(){return e.onFocus()})("blur",function(){return e.onBlur()})("keydown.ArrowRight",function(t){return e.selectNext(t)})("keydown.ArrowDown",function(t){return e.selectNext(t)})("keydown.ArrowLeft",function(t){return e.selectPrevious(t)})("keydown.ArrowUp",function(t){return e.selectPrevious(t)}),2&t&&d.Ab("role",e.role)("tabindex",e.tabindex)},features:[d.yb([y])]}),u),C=((r=function(){function e(){t(this,e)}return i(e,null,[{key:"forRoot",value:function(){return{ngModule:e,providers:[]}}}]),e}()).\u0275fac=function(t){return new(t||r)},r.\u0275mod=d.Jb({type:r}),r.\u0275inj=d.Ib({}),r),k=a("iInd"),m=a("NuRj"),R=a("H++W"),x=a("IheW"),w=a("SVse");function T(t,e){1&t&&(d.Rb(0,"div",18),d.Rb(1,"a",19),d.wc(2,"Action"),d.Qb(),d.Rb(3,"a",19),d.wc(4,"Another action"),d.Qb(),d.Rb(5,"a",19),d.wc(6,"Something else here"),d.Qb(),d.Rb(7,"a",19),d.wc(8,"Something else here"),d.Qb(),d.Qb())}function A(t,e){1&t&&(d.Rb(0,"div",18),d.Rb(1,"a",19),d.wc(2,"Action"),d.Qb(),d.Rb(3,"a",19),d.wc(4,"Another action"),d.Qb(),d.Rb(5,"a",19),d.wc(6,"Something else here"),d.Qb(),d.Qb())}function D(t,e){1&t&&(d.Rb(0,"div",18),d.Rb(1,"a",19),d.wc(2,"Action"),d.Qb(),d.Rb(3,"a",19),d.wc(4,"Another action"),d.Qb(),d.Rb(5,"a",19),d.wc(6,"Something else here"),d.Qb(),d.Qb())}var Q,O,F,L=[{path:"",component:(Q=function(){function e(i){t(this,e),this.http=i,this.Root_Url="https://api.corona-zahlen.org/germany/history/cases/",this.radioModel="Month",this.lineChart1Data=[{data:[65,59,84,84,51,55,40],label:"Series A"}],this.lineChart1Labels=["January","February","March","April","May","June","July"],this.lineChart1Options={tooltips:{enabled:!1,custom:R.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:35,max:89}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart1Colours=[{backgroundColor:Object(m.getStyle)("--primary"),borderColor:"rgba(255,255,255,.55)"}],this.lineChart1Legend=!1,this.lineChart1Type="line",this.lineChart2Data=[{data:[1,18,9,17,34,22,11],label:"Series A"}],this.lineChart2Labels=["January","February","March","April","May","June","July"],this.lineChart2Options={tooltips:{enabled:!1,custom:R.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:-4,max:39}}]},elements:{line:{tension:1e-5,borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart2Colours=[{backgroundColor:Object(m.getStyle)("--info"),borderColor:"rgba(255,255,255,.55)"}],this.lineChart2Legend=!1,this.lineChart2Type="line",this.lineChart3Data=[{data:[78,81,80,45,34,12,40],label:"Series A"}],this.lineChart3Labels=["January","February","March","April","May","June","July"],this.lineChart3Options={tooltips:{enabled:!1,custom:R.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart3Colours=[{backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)"}],this.lineChart3Legend=!1,this.lineChart3Type="line",this.barChart1Data=[{data:[78,81,80,45,34,12,40,78,81,80,45,34,12,40,12,40],label:"Series A",barPercentage:.6}],this.barChart1Labels=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"],this.barChart1Options={tooltips:{enabled:!1,custom:R.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},legend:{display:!1}},this.barChart1Colours=[{backgroundColor:"rgba(255,255,255,.3)",borderWidth:0}],this.barChart1Legend=!1,this.barChart1Type="bar",this.mainChartElements=27,this.mainChartData1=[],this.mainChartData2=[],this.mainChartData3=[],this.mainChartData=[{data:this.mainChartData1,label:"Current"},{data:this.mainChartData2,label:"Previous"},{data:this.mainChartData3,label:"BEP"}],this.mainChartLabels=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Thursday","Wednesday","Thursday","Friday","Saturday","Sunday"],this.mainChartOptions={tooltips:{enabled:!1,custom:R.CustomTooltips,intersect:!0,mode:"index",position:"nearest",callbacks:{labelColor:function(t,e){return{backgroundColor:e.data.datasets[t.datasetIndex].borderColor}}}},responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{drawOnChartArea:!1},ticks:{callback:function(t){return t.charAt(0)}}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250}}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},this.mainChartColours=[{backgroundColor:Object(m.hexToRgba)(Object(m.getStyle)("--info"),10),borderColor:Object(m.getStyle)("--info"),pointHoverBackgroundColor:"#fff"},{backgroundColor:"transparent",borderColor:Object(m.getStyle)("--success"),pointHoverBackgroundColor:"#fff"},{backgroundColor:"transparent",borderColor:Object(m.getStyle)("--danger"),pointHoverBackgroundColor:"#fff",borderWidth:1,borderDash:[8,5]}],this.mainChartLegend=!1,this.mainChartType="line",this.brandBoxChartData1=[{data:[65,59,84,84,51,55,40],label:"Facebook"}],this.brandBoxChartData2=[{data:[1,13,9,17,34,41,38],label:"Twitter"}],this.brandBoxChartData3=[{data:[78,81,80,45,34,12,40],label:"LinkedIn"}],this.brandBoxChartData4=[{data:[35,23,56,22,97,23,64],label:"Google+"}],this.brandBoxChartLabels=["January","February","March","April","May","June","July"],this.brandBoxChartOptions={tooltips:{enabled:!1,custom:R.CustomTooltips},responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},this.brandBoxChartColours=[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff"}],this.brandBoxChartLegend=!1,this.brandBoxChartType="line"}return i(e,[{key:"getPosts1",value:function(){var t=this;this.posts=this.http.get(this.Root_Url+"1").subscribe(function(e){return t.cases=e.data[0],t.day1=t.cases.cases,t.number})}},{key:"getPosts2",value:function(){var t=this;this.posts=this.http.get(this.Root_Url+"2").subscribe(function(e){return t.cases=e.data[0],t.day2=t.cases.cases,t.number})}},{key:"getPosts3",value:function(){var t=this;this.posts=this.http.get(this.Root_Url+"3").subscribe(function(e){return t.cases=e.data[0],t.day3=t.cases.cases,t.number})}},{key:"getPosts4",value:function(){var t=this;this.posts=this.http.get(this.Root_Url+"4").subscribe(function(e){return t.cases=e.data[0],t.day4=t.cases.cases,t.number})}},{key:"random",value:function(t,e){return Math.floor(Math.random()*(e-t+1)+t)}},{key:"ngOnInit",value:function(){this.getPosts1(),this.getPosts2(),this.getPosts3(),this.getPosts4();for(var t=0;t<=this.mainChartElements;t++)this.mainChartData1.push(this.random(50,200)),this.mainChartData2.push(this.random(80,100)),this.mainChartData3.push(65)}}]),e}(),Q.\u0275fac=function(t){return new(t||Q)(d.Lb(x.a))},Q.\u0275cmp=d.Fb({type:Q,selectors:[["ng-component"]],decls:56,vars:36,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col-sm-6","col-lg-3"],[1,"card","text-white","bg-info"],[1,"card-body","pb-0"],["type","button",1,"btn","btn-transparent","p-0","float-right"],[1,"icon-location-pin"],[1,"text-value"],[1,"chart-wrapper","mt-3","mx-3",2,"height","70px"],["baseChart","",1,"chart",3,"datasets","labels","options","colors","legend","chartType"],[1,"card","text-white","bg-primary"],["dropdown","",1,"btn-group","float-right"],["type","button","dropdownToggle","",1,"btn","btn-transparent","dropdown-toggle","p-0"],[1,"icon-settings"],["class","dropdown-menu dropdown-menu-right",4,"dropdownMenu"],[1,"card","text-white","bg-warning"],[1,"chart-wrapper","mt-3",2,"height","70px"],[1,"card","text-white","bg-danger"],[1,"dropdown-menu","dropdown-menu-right"],["href","#",1,"dropdown-item"]],template:function(t,e){1&t&&(d.Rb(0,"div",0),d.Rb(1,"div",1),d.Rb(2,"div",2),d.Rb(3,"div",3),d.Rb(4,"div",4),d.Rb(5,"button",5),d.Mb(6,"i",6),d.Qb(),d.Rb(7,"div",7),d.wc(8),d.cc(9,"json"),d.Qb(),d.Rb(10,"div"),d.wc(11,"Yesterday"),d.Qb(),d.Qb(),d.Rb(12,"div",8),d.Mb(13,"canvas",9),d.Qb(),d.Qb(),d.Qb(),d.Rb(14,"div",2),d.Rb(15,"div",10),d.Rb(16,"div",4),d.Rb(17,"div",11),d.Rb(18,"button",12),d.Mb(19,"i",13),d.Qb(),d.uc(20,T,9,0,"div",14),d.Qb(),d.Rb(21,"div",7),d.wc(22),d.cc(23,"json"),d.Qb(),d.Rb(24,"div"),d.wc(25,"Tow Days before"),d.Qb(),d.Qb(),d.Rb(26,"div",8),d.Mb(27,"canvas",9),d.Qb(),d.Qb(),d.Qb(),d.Rb(28,"div",2),d.Rb(29,"div",15),d.Rb(30,"div",4),d.Rb(31,"div",11),d.Rb(32,"button",12),d.Mb(33,"i",13),d.Qb(),d.uc(34,A,7,0,"div",14),d.Qb(),d.Rb(35,"div",7),d.wc(36),d.cc(37,"json"),d.Qb(),d.Rb(38,"div"),d.wc(39,"Three days before"),d.Qb(),d.Qb(),d.Rb(40,"div",16),d.Mb(41,"canvas",9),d.Qb(),d.Qb(),d.Qb(),d.Rb(42,"div",2),d.Rb(43,"div",17),d.Rb(44,"div",4),d.Rb(45,"div",11),d.Rb(46,"button",12),d.Mb(47,"i",13),d.Qb(),d.uc(48,D,7,0,"div",14),d.Qb(),d.Rb(49,"div",7),d.wc(50),d.cc(51,"json"),d.Qb(),d.Rb(52,"div"),d.wc(53,"Four days before"),d.Qb(),d.Qb(),d.Rb(54,"div",8),d.Mb(55,"canvas",9),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb()),2&t&&(d.zb(8),d.xc(d.dc(9,28,e.day1)),d.zb(5),d.gc("datasets",e.lineChart2Data)("labels",e.lineChart2Labels)("options",e.lineChart2Options)("colors",e.lineChart2Colours)("legend",e.lineChart2Legend)("chartType",e.lineChart2Type),d.zb(9),d.xc(d.dc(23,30,e.day2)),d.zb(5),d.gc("datasets",e.lineChart1Data)("labels",e.lineChart1Labels)("options",e.lineChart1Options)("colors",e.lineChart1Colours)("legend",e.lineChart1Legend)("chartType",e.lineChart1Type),d.zb(9),d.xc(d.dc(37,32,e.day3)),d.zb(5),d.gc("datasets",e.lineChart3Data)("labels",e.lineChart3Labels)("options",e.lineChart3Options)("colors",e.lineChart3Colours)("legend",e.lineChart3Legend)("chartType",e.lineChart3Type),d.zb(9),d.xc(d.dc(51,34,e.day4)),d.zb(5),d.gc("datasets",e.barChart1Data)("labels",e.barChart1Labels)("options",e.barChart1Options)("colors",e.barChart1Colours)("legend",e.barChart1Legend)("chartType",e.barChart1Type))},directives:[h.a,c.a,c.d,c.b],pipes:[w.f],encapsulation:2}),Q),data:{title:"Dashboard"}}],S=((F=function e(){t(this,e)}).\u0275fac=function(t){return new(t||F)},F.\u0275mod=d.Jb({type:F}),F.\u0275inj=d.Ib({imports:[[k.g.forChild(L)],k.g]}),F),B=((O=function e(){t(this,e)}).\u0275fac=function(t){return new(t||O)},O.\u0275mod=d.Jb({type:O}),O.\u0275inj=d.Ib({imports:[[l.c,S,h.b,c.c,C.forRoot(),w.c,x.b]]}),O)}}])}();