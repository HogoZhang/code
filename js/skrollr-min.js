/*!
 * skrollr core
 *
 * Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr
 *
 * Free to use under terms of MIT license
 */
(function(aK,T,x){var a=aK.skrollr={get:function(){return L;},init:function(aP){return L||new aB(aP);},VERSION:"http://html.metrothemes.me/md-html/md-live/js/0.6.11"};var az=Object.prototype.hasOwnProperty;var ah=aK.Math;var au=aK.getComputedStyle;var w;var r;var u="touchstart";var aG="touchmove";var Y="touchcancel";var d="touchend";var af="skrollable";var W=af+"-before";var aM=af+"-between";var N=af+"-after";var h="skrollr";var ar="no-"+h;var ac=h+"-desktop";var m=h+"-mobile";var f="linear";var U=1000;var al=0.004;var aw=200;var D="start";var aa="end";var an="center";var n="bottom";var i="___skrollable_id";var o=/^\s+|\s+$/g;var E=/^data(?:-(_\w+))?(?:-?(-?\d+))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/;var s=/\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi;var c=/^([a-z\-]+)\[(\w+)\]$/;var ai=/-([a-z])/g;var ao=function(aQ,aP){return aP.toUpperCase();};var ap=/[\-+]?[\d]*\.?[\d]+/g;var K=/\{\?\}/g;var l=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g;var av=/[a-z\-]+-gradient/g;var B="";var ae="";var aI=function(){var aR=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(!au){return;}var aQ=au(r,null);for(var aP in aQ){B=(aP.match(aR)||(+aP==aP&&aQ[aP].match(aR)));if(B){break;}}if(!B){B=ae="";return;}B=B[0];if(B.slice(0,1)==="-"){ae=B;B=({"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"})[B];}else{ae="-"+B.toLowerCase()+"-";}};var j=function(){var aP=aK.requestAnimationFrame||aK[B.toLowerCase()+"RequestAnimationFrame"];var aQ=J();if(G||!aP){aP=function(aT){var aR=J()-aQ;var aS=ah.max(0,1000/60-aR);aK.setTimeout(function(){aQ=J();aT();},aS);};}return aP;};var H={begin:function(){return 0;},end:function(){return 1;},linear:function(aP){return aP;},quadratic:function(aP){return aP*aP;},cubic:function(aP){return aP*aP*aP;},swing:function(aP){return(-ah.cos(aP*ah.PI)/2)+0.5;},sqrt:function(aP){return ah.sqrt(aP);},outCubic:function(aP){return(ah.pow((aP-1),3)+1);},bounce:function(aQ){var aP;if(aQ<=0.5083){aP=3;}else{if(aQ<=0.8489){aP=9;}else{if(aQ<=0.96208){aP=27;}else{if(aQ<=0.99981){aP=91;}else{return 1;}}}}return 1-ah.abs(3*ah.cos(aQ*aP*1.028)/aP);}};function aB(aQ){w=T.documentElement;r=T.body;aI();L=this;aQ=aQ||{};V=aQ.constants||{};if(aQ.easing){for(var aS in aQ.easing){H[aS]=aQ.easing[aS];}}aE=aQ.edgeStrategy||"set";e={beforerender:aQ.beforerender,render:aQ.render};X=aQ.forceHeight!==false;if(X){ak=aQ.scale||1;}am=aQ.mobileDeceleration||al;z=aQ.smoothScrolling!==false;p=aQ.smoothScrollingDuration||aw;ax={targetTop:L.getScrollTop()};G=((aQ.mobileCheck||function(){return(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent||navigator.vendor||aK.opera);})());if(G){P=T.getElementById("skrollr-body");if(P){aN();}q();t(w,[h,m],[ar]);}else{t(w,[h,ac],[ar]);}L.refresh();aO(aK,"resize orientationchange",function(){var aU=w.clientWidth;var aT=w.clientHeight;if(aT!==y||aU!==k){y=aT;k=aU;aq=true;}});var aR=j();(function aP(){ad();
aR(aP);}());return L;}aB.prototype.refresh=function(aY){var aX;var ba;var aW=false;if(aY===x){aW=true;Q=[];ag=0;aY=T.getElementsByTagName("*");}else{aY=[].concat(aY);}aX=0;ba=aY.length;for(;aX<ba;aX++){var aQ=aY[aX];var aU=aQ;var aP=[];var a7=z;var a3=aE;if(!aQ.attributes){continue;}var a6=0;var aZ=aQ.attributes.length;for(;a6<aZ;a6++){var a1=aQ.attributes[a6];if(a1.name==="data-anchor-target"){aU=T.querySelector(a1.value);if(aU===null){throw'Unable to find anchor target "'+a1.value+'"';}continue;}if(a1.name==="data-smooth-scrolling"){a7=a1.value!=="off";continue;}if(a1.name==="data-edge-strategy"){a3=a1.value;continue;}var aV=a1.name.match(E);if(aV===null){continue;}var aR=aV[1];aR=aR&&V[aR.substr(1)]||0;var aT=(aV[2]|0)+aR;var a9=aV[3];var a8=aV[4]||a9;var aS={offset:aT,props:a1.value,element:aQ};aP.push(aS);if(!a9||a9===D||a9===aa){aS.mode="absolute";if(a9===aa){aS.isEnd=true;}else{aS.frame=aT*ak;delete aS.offset;}}else{aS.mode="relative";aS.anchors=[a9,a8];}}if(!aP.length){continue;}var a5,a2;var a0;if(!aW&&i in aQ){a0=aQ[i];a5=Q[a0].styleAttr;a2=Q[a0].classAttr;}else{a0=(aQ[i]=ag++);a5=aQ.style.cssText;a2=aj(aQ);}Q[a0]={element:aQ,styleAttr:a5,classAttr:a2,anchorTarget:aU,keyFrames:aP,smoothScrolling:a7,edgeStrategy:a3};t(aQ,[af],[]);}R();aX=0;ba=aY.length;for(;aX<ba;aX++){var a4=Q[aY[aX][i]];if(a4===x){continue;}v(a4);C(a4);}return L;};aB.prototype.relativeToAbsolute=function(aQ,aR,aT){var aP=w.clientHeight;var aS=aQ.getBoundingClientRect();var aV=aS.top;var aU=aS.bottom-aS.top;if(aR===n){aV-=aP;}else{if(aR===an){aV-=aP/2;}}if(aT===n){aV+=aU;}else{if(aT===an){aV+=aU/2;}}aV+=L.getScrollTop();return(aV+0.5)|0;};aB.prototype.animateTo=function(aS,aQ){aQ=aQ||{};var aP=J();var aR=L.getScrollTop();ay={startTop:aR,topDiff:aS-aR,targetTop:aS,duration:aQ.duration||U,startTime:aP,endTime:aP+(aQ.duration||U),easing:H[aQ.easing||f],done:aQ.done};if(!ay.topDiff){if(ay.done){ay.done.call(L,false);}ay=x;}return L;};aB.prototype.stopAnimateTo=function(){if(ay&&ay.done){ay.done.call(L,true);}ay=x;};aB.prototype.isAnimatingTo=function(){return !!ay;};aB.prototype.setScrollTop=function(aQ,aP){if(aP===true){A=aQ;aD=true;}if(G){aC=ah.min(ah.max(aQ,0),at);}else{aK.scrollTo(0,aQ);}return L;};aB.prototype.getScrollTop=function(){if(G){return aC;}else{return aK.pageYOffset||w.scrollTop||r.scrollTop||0;}};aB.prototype.on=function(aP,aQ){e[aP]=aQ;return L;};aB.prototype.off=function(aP){delete e[aP];return L;};var q=function(){var aZ;var aW;var aY;var aT;var aU;var aV;var aR;var aS;var aQ;var aP;var aX;aO(w,[u,aG,Y,d].join(" "),function(a5){a5.preventDefault();var a3=a5.changedTouches[0];aT=a3.clientY;aU=a3.clientX;aQ=a5.timeStamp;switch(a5.type){case u:if(aZ){aZ.blur();}L.stopAnimateTo();aZ=a5.target;aW=aV=aT;aY=aU;aS=aQ;break;case aG:aR=aT-aV;aX=aQ-aP;L.setScrollTop(aC-aR,true);aV=aT;aP=aQ;break;default:case Y:case d:var a6=aW-aT;var a8=aY-aU;var a4=a8*a8+a6*a6;if(a4<49){aZ.focus();aZ.click();return;}aZ=x;var a1=aR/aX;a1=ah.max(ah.min(a1,3),-3);var a2=ah.abs(a1/am);
var a9=a1*a2+0.5*am*a2*a2;var a7=L.getScrollTop()-a9;var a0=0;if(a7>at){a0=(at-a7)/a9;a7=at;}else{if(a7<0){a0=-a7/a9;a7=0;}}a2=a2*(1-a0);L.animateTo(a7,{easing:"outCubic",duration:a2});break;}});aK.scrollTo(0,0);w.style.overflow=r.style.overflow="hidden";};var I=function(){var aQ;var aV;var aU;var aW;var aP;var aR;var aS;var aT;var aX;aT=0;aX=Q.length;for(;aT<aX;aT++){aQ=Q[aT];aV=aQ.element;aU=aQ.anchorTarget;aW=aQ.keyFrames;aP=0;aR=aW.length;for(;aP<aR;aP++){aS=aW[aP];if(aS.mode==="relative"){F(aV);aS.frame=L.relativeToAbsolute(aU,aS.anchors[0],aS.anchors[1])-aS.offset;F(aV,true);}if(X){if(!aS.isEnd&&aS.frame>at){at=aS.frame;}}}}at=ah.max(at,O());aT=0;aX=Q.length;for(;aT<aX;aT++){aQ=Q[aT];aW=aQ.keyFrames;aP=0;aR=aW.length;for(;aP<aR;aP++){aS=aW[aP];if(aS.isEnd){aS.frame=at-aS.offset;}}aQ.keyFrames.sort(aA);}};var Z=function(a3,a4){var aR=0;var aT=Q.length;for(;aR<aT;aR++){var a7=Q[aR];var aQ=a7.element;var a0=a7.smoothScrolling?a3:a4;var aZ=a7.keyFrames;var aW=aZ[0].frame;var aP=aZ[aZ.length-1].frame;var a5=a0<aW;var aY=a0>aP;var a8=aZ[a5?0:aZ.length-1];var a9;var a2;if(a5||aY){if(a5&&a7.edge===-1||aY&&a7.edge===1){continue;}t(aQ,[a5?W:N],[W,aM,N]);a7.edge=a5?-1:1;switch(a7.edgeStrategy){case"reset":F(aQ);continue;case"ease":a0=a8.frame;break;default:case"set":var aS=a8.props;for(a9 in aS){if(az.call(aS,a9)){a2=b(aS[a9].value);a.setStyle(aQ,a9,a2);}}continue;}}else{if(a7.edge!==0){t(aQ,[af,aM],[W,N]);a7.edge=0;}}var aX=0;var a1=aZ.length-1;for(;aX<a1;aX++){if(a0>=aZ[aX].frame&&a0<=aZ[aX+1].frame){var aU=aZ[aX];var a6=aZ[aX+1];for(a9 in aU.props){if(az.call(aU.props,a9)){var aV=(a0-aU.frame)/(a6.frame-aU.frame);aV=aU.props[a9].easing(aV);a2=aH(aU.props[a9].value,a6.props[a9].value,aV);a2=b(a2);a.setStyle(aQ,a9,a2);}}break;}}}};var ad=function(){if(aq){aq=false;R();}var aR=L.getScrollTop();var aQ;var aT=J();var aS;if(ay){if(aT>=ay.endTime){aR=ay.targetTop;aQ=ay.done;ay=x;}else{aS=ay.easing((aT-ay.startTime)/ay.duration);aR=(ay.startTop+aS*ay.topDiff)|0;}L.setScrollTop(aR,true);}else{if(!G){var aP=ax.targetTop-aR;if(aP){ax={startTop:A,topDiff:aR-A,targetTop:aR,startTime:aJ,endTime:aJ+p};}if(aT<=ax.endTime){aS=H.sqrt((aT-ax.startTime)/p);aR=(ax.startTop+aS*ax.topDiff)|0;}}}if(G&&P){a.setStyle(P,"transform","translate(0, "+-(aC)+"px) "+ab);}if(aD||A!==aR){g=(aR>=A)?"down":"up";aD=false;var aV={curTop:aR,lastTop:A,maxTop:at,direction:g};var aU=e.beforerender&&e.beforerender.call(L,aV);if(aU!==false){Z(aR,L.getScrollTop());A=aR;if(e.render){e.render.call(L,aV);}}if(aQ){aQ.call(L,false);}}aJ=aT;};var v=function(aR){var aQ=0;var aT=aR.keyFrames.length;for(;aQ<aT;aQ++){var aS=aR.keyFrames[aQ];var aV;var aX;var aP;var aW={};var aU;while((aU=s.exec(aS.props))!==null){aP=aU[1];aX=aU[2];aV=aP.match(c);if(aV!==null){aP=aV[1];aV=aV[2];}else{aV=f;}aX=aX.indexOf("!")?S(aX):[aX.slice(1)];aW[aP]={value:aX,easing:H[aV]};}aS.props=aW;}};var S=function(aQ){var aP=[];l.lastIndex=0;aQ=aQ.replace(l,function(aR){return aR.replace(ap,function(aS){return aS/255*100+"%";});});
if(ae){av.lastIndex=0;aQ=aQ.replace(av,function(aR){return ae+aR;});}aQ=aQ.replace(ap,function(aR){aP.push(+aR);return"{?}";});aP.unshift(aQ);return aP;};var C=function(aQ){var aP={};var aS;var aR;aS=0;aR=aQ.keyFrames.length;for(;aS<aR;aS++){aF(aQ.keyFrames[aS],aP);}aP={};aS=aQ.keyFrames.length-1;for(;aS>=0;aS--){aF(aQ.keyFrames[aS],aP);}};var aF=function(aR,aP){var aQ;for(aQ in aP){if(!az.call(aR.props,aQ)){aR.props[aQ]=aP[aQ];}}for(aQ in aR.props){aP[aQ]=aR.props[aQ];}};var aH=function(aT,aS,aR){var aU;var aP=aT.length;if(aP!==aS.length){throw"Can't interpolate between \""+aT[0]+'" and "'+aS[0]+'"';}var aQ=[aT[0]];aU=1;for(;aU<aP;aU++){aQ[aU]=aT[aU]+((aS[aU]-aT[aU])*aR);}return aQ;};var b=function(aQ){var aP=1;K.lastIndex=0;return aQ[0].replace(K,function(){return aQ[aP++];});};var F=function(aU,aR){aU=[].concat(aU);var aQ;var aT;var aP=0;var aS=aU.length;for(;aP<aS;aP++){aT=aU[aP];aQ=Q[aT[i]];if(!aQ){continue;}if(aR){aT.style.cssText=aQ.dirtyStyleAttr;t(aT,aQ.dirtyClassAttr);}else{aQ.dirtyStyleAttr=aT.style.cssText;aQ.dirtyClassAttr=aj(aT);aT.style.cssText=aQ.styleAttr;t(aT,aQ.classAttr);}}};var aN=function(){ab="translateZ(0)";a.setStyle(P,"transform",ab);var aR=au(P);var aQ=aR.getPropertyValue("transform");var aP=aR.getPropertyValue(ae+"transform");var aS=(aQ&&aQ!=="none")||(aP&&aP!=="none");if(!aS){ab="";}};a.setStyle=function(aQ,aT,aR){var aP=aQ.style;aT=aT.replace(ai,ao).replace("-","");if(aT==="zIndex"){aP[aT]=""+(aR|0);}else{if(aT==="float"){aP.styleFloat=aP.cssFloat=aR;}else{try{if(B){aP[B+aT.slice(0,1).toUpperCase()+aT.slice(1)]=aR;}aP[aT]=aR;}catch(aS){}}}};var aO=a.addEvent=function(aR,aT,aU){var aS=function(aV){aV=aV||aK.event;if(!aV.target){aV.target=aV.srcElement;}if(!aV.preventDefault){aV.preventDefault=function(){aV.returnValue=false;};}return aU.call(this,aV);};aT=aT.split(" ");var aQ=0;var aP=aT.length;for(;aQ<aP;aQ++){if(aR.addEventListener){aR.addEventListener(aT[aQ],aU,false);}else{aR.attachEvent("on"+aT[aQ],aS);}}};var R=function(){var aP=L.getScrollTop();at=0;if(X&&!G){r.style.height="auto";}I();if(X&&!G){r.style.height=(at+w.clientHeight)+"px";}if(G){L.setScrollTop(ah.min(L.getScrollTop(),at));}else{L.setScrollTop(aP,true);}aD=true;};var O=function(){var aQ=(P&&P.offsetHeight||0);var aP=ah.max(aQ,r.scrollHeight,r.offsetHeight,w.scrollHeight,w.offsetHeight,w.clientHeight);return aP-w.clientHeight;};var aj=function(aP){var aQ="className";if(aK.SVGElement&&aP instanceof aK.SVGElement){aP=aP[aQ];aQ="baseVal";}return aP[aQ];};var t=function(aS,aX,aT){var aP="className";if(aK.SVGElement&&aS instanceof aK.SVGElement){aS=aS[aP];aP="baseVal";}if(aT===x){aS[aP]=aX;return;}var aQ=aS[aP];var aW=0;var aR=aT.length;for(;aW<aR;aW++){aQ=M(aQ).replace(M(aT[aW])," ");}aQ=aL(aQ);var aV=0;var aU=aX.length;for(;aV<aU;aV++){if(M(aQ).indexOf(M(aX[aV]))===-1){aQ+=" "+aX[aV];}}aS[aP]=aL(aQ);};var aL=function(aP){return aP.replace(o,"");};var M=function(aP){return" "+aP+" ";};var J=Date.now||function(){return +new Date();};var aA=function(aQ,aP){return aQ.frame-aP.frame;
};var L;var Q;var P;var e;var X;var at=0;var ak=1;var V;var am;var g="down";var A=-1;var aJ=J();var k=0;var y=0;var aq=false;var ay;var z;var p;var ax;var aD;var ag=0;var aE;var G=false;var aC=0;var ab;}(window,document));