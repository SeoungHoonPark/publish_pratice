onloadCharCheck=function(formid){if(formid==undefined||formid==null||formid.trim()==""){for(var j=1;j<=10;j++){for(var i=0;document.getElementById("form"+j)!=null&&document.getElementById("form"+j)!=undefined&&document.getElementById("form"+j)!=""&&i<document.getElementById("form"+j).length;i++){initSetLetterType(document.getElementById("form"+j).elements[i])}}}else{for(var i=0;document.getElementById(formid)!=null&&document.getElementById(formid)!=undefined&&document.getElementById(formid)!=""&&i<document.getElementById(formid).length;i++){initSetLetterType(document.getElementById(formid).elements[i])}}};validationMaxByte=function(textObj,length_limit){var length=calculate_msglen(textObj);var kor_cnt=Math.floor(length_limit/2);if(length>length_limit){return false}return true};validationMinByte=function(textObj,length_limit){var length=calculate_msglen(textObj);var kor_cnt=Math.floor(length_limit/2);if(length<length_limit){return false}return true};validate=function(target,sitecode){var txt1,txt2;if(sitecode=="en"){txt1="항목은 필수입니다.(영어)";txt2="필수 항목을 입력해주세요.(영어)"}else if(sitecode=="jp"){txt1="항목은 필수입니다.(일본)";txt2="필수 항목을 입력해주세요.(일본)"}else if(sitecode=="cn"){txt1="항목은 필수입니다.(중국)";txt2="필수 항목을 입력해주세요.(중국)"}else{txt1="항목은 필수입니다.";txt2="필수 항목을 입력해주세요."}for(var i=0;i<target.length;i++){if(target.elements[i].getAttribute("nullable")!=null&&target.elements[i].getAttribute("nullable")!=""){if(target.elements[i].value.trim()==""){if(target.elements[i].title){alert("<"+target.elements[i].title+">"+txt1);if(!target.elements[i].disabled&&target.elements[i].title!="내용"){target.elements[i].focus()}}else{alert(txt2)}return false}else{if(target.elements[i].getAttribute("maxbyte")!=null&&target.elements[i].getAttribute("maxbyte")!=undefined&&target.elements[i].getAttribute("maxbyte")!=""){if(!validationMaxByte(target.elements[i].value,target.elements[i].getAttribute("maxbyte"))){var errMsg="입력을 % 자리로 해주십시오.(BYTE)";if(target.elements[i].getAttribute("minbyte")!=null&&target.elements[i].getAttribute("minbyte")!=undefined&&target.elements[i].getAttribute("minbyte")!=""){if(target.elements[i].getAttribute("minbyte")==target.elements[i].getAttribute("maxbyte")){errMsg=errMsg.replace("%",target.elements[i].getAttribute("maxbyte"))}else{errMsg=errMsg.replace("%",target.elements[i].getAttribute("minbyte")+" ~ "+target.elements[i].getAttribute("maxbyte"))}}else{errMsg=errMsg.replace("%"," ~ "+target.elements[i].getAttribute("maxbyte"))}var kor_cnt=Math.floor(target.elements[i].getAttribute("maxbyte")/2);if(target.elements[i].getAttribute("title")!=undefined&&target.elements[i].getAttribute("title")!=""){alert("["+target.elements[i].getAttribute("title")+"] "+errMsg)}else{alert(errMsg)}target.elements[i].select();return false}}if(target.elements[i].getAttribute("minbyte")!=undefined&&target.elements[i].getAttribute("minbyte")!=""){if(target.elements[i].value.length==0||(!validationMinByte(target.elements[i].value,target.elements[i].getAttribute("minbyte")))){var errMsg="입력을 % 자리로 해주십시오.(BYTE)";if(target.elements[i].getAttribute("maxbyte")!=undefined&&target.elements[i].getAttribute("maxbyte")!=""){if(target.elements[i].getAttribute("minbyte")==target.elements[i].getAttribute("maxbyte")){errMsg=errMsg.replace("%",target.elements[i].getAttribute("minbyte"))}else{errMsg=errMsg.replace("%",target.elements[i].getAttribute("minbyte")+" ~ "+target.elements[i].getAttribute("maxbyte"))}}else{errMsg=errMsg.replace("%",target.elements[i].getAttribute("minbyte")+" ~ ")}var kor_cnt=Math.floor(target.elements[i].getAttribute("minbyte")/2);if(target.elements[i].getAttribute("title")!=undefined){alert("["+target.elements[i].getAttribute("title")+"] "+errMsg)}else{alert(errMsg)}target.elements[i].select();return false}}if(target.elements[i].getAttribute("minlength")!=null&&target.elements[i].getAttribute("minlength")!=undefined&&target.elements[i].getAttribute("minlength")!=""){if(target.elements[i].value.length<target.elements[i].getAttribute("minlength")){var errMsg="입력을 % 자리로 해주십시오.(LENGTH)";if(target.elements[i].getAttribute("maxlength")!=null&&target.elements[i].getAttribute("maxlength")!=undefined&&target.elements[i].getAttribute("maxlength")!=""&&target.elements[i].getAttribute("maxlength")!="2147483647"){if(target.elements[i].getAttribute("minlength")==target.elements[i].getAttribute("maxlength")){errMsg=errMsg.replace("%",target.elements[i].getAttribute("minlength"))}else{errMsg=errMsg.replace("%",target.elements[i].getAttribute("minlength")+" ~ "+target.elements[i].getAttribute("maxlength"))}target.elements[i].focus()}else{errMsg=errMsg.replace("%",target.elements[i].getAttribute("minlength")+" ~ ")}if(target.elements[i].getAttribute("title")!=null&&target.elements[i].getAttribute("title")!=undefined&&target.elements[i].getAttribute("title")!=""){alert("["+target.elements[i].getAttribute("title")+"] "+errMsg)}else{alert(errMsg)}target.elements[i].select();target.elements[i].focus();return false}}}}else if(target.elements[i].value!=""){if(target.elements[i].getAttribute("maxbyte")!=null&&target.elements[i].getAttribute("maxbyte")!=undefined&&target.elements[i].getAttribute("maxbyte")!=""){if(!validationMaxByte(target.elements[i].value,target.elements[i].getAttribute("maxbyte"))){var errMsg="입력을 % 자리로 해주십시오.(BYTE)";if(target.elements[i].getAttribute("minbyte")!=null&&target.elements[i].getAttribute("minbyte")!=undefined&&target.elements[i].getAttribute("minbyte")!=""){if(target.elements[i].getAttribute("minbyte")==target.elements[i].getAttribute("maxbyte")){errMsg=errMsg.replace("%",target.elements[i].getAttribute("maxbyte"))}else{errMsg=errMsg.replace("%",target.elements[i].getAttribute("minbyte")+" ~ "+target.elements[i].getAttribute("maxbyte"))}}else{errMsg=errMsg.replace("%"," ~ "+target.elements[i].getAttribute("maxbyte"))}var kor_cnt=Math.floor(target.elements[i].getAttribute("maxbyte")/2);if(target.elements[i].getAttribute("title")!=undefined&&target.elements[i].getAttribute("title")!=""){alert("["+target.elements[i].getAttribute("title")+"] "+errMsg)}else{alert(errMsg)}target.elements[i].select();return false}}if(target.elements[i].getAttribute("minbyte")!=undefined&&target.elements[i].getAttribute("minbyte")!=""){if(target.elements[i].value.length==0||(!validationMinByte(target.elements[i].value,target.elements[i].getAttribute("minbyte")))){var errMsg="입력을 % 자리로 해주십시오.(BYTE)";if(target.elements[i].getAttribute("maxbyte")!=undefined&&target.elements[i].getAttribute("maxbyte")!=""){if(target.elements[i].getAttribute("minbyte")==target.elements[i].getAttribute("maxbyte")){errMsg=errMsg.replace("%",target.elements[i].getAttribute("minbyte"))}else{errMsg=errMsg.replace("%",target.elements[i].getAttribute("minbyte")+" ~ "+target.elements[i].getAttribute("maxbyte"))}}else{errMsg=errMsg.replace("%",target.elements[i].getAttribute("minbyte")+" ~ ")}var kor_cnt=Math.floor(target.elements[i].getAttribute("minbyte")/2);if(target.elements[i].getAttribute("title")!=undefined){alert("["+target.elements[i].getAttribute("title")+"] "+errMsg)}else{alert(errMsg)}target.elements[i].select();return false}}if(target.elements[i].getAttribute("minlength")!=null&&target.elements[i].getAttribute("minlength")!=undefined&&target.elements[i].getAttribute("minlength")!=""){if(target.elements[i].value.length<target.elements[i].getAttribute("minlength")){var errMsg="입력을 % 자리로 해주십시오.(LENGTH)";if(target.elements[i].getAttribute("maxlength")!=null&&target.elements[i].getAttribute("maxlength")!=undefined&&target.elements[i].getAttribute("maxlength")!=""&&target.elements[i].getAttribute("maxlength")!="2147483647"){if(target.elements[i].getAttribute("minlength")==target.elements[i].getAttribute("maxlength")){errMsg=errMsg.replace("%",target.elements[i].getAttribute("minlength"))}else{errMsg=errMsg.replace("%",target.elements[i].getAttribute("minlength")+" ~ "+target.elements[i].getAttribute("maxlength"))}target.elements[i].focus()}else{errMsg=errMsg.replace("%",target.elements[i].getAttribute("minlength")+" ~ ")}if(target.elements[i].getAttribute("title")!=null&&target.elements[i].getAttribute("title")!=undefined&&target.elements[i].getAttribute("title")!=""){alert("["+target.elements[i].getAttribute("title")+"] "+errMsg)}else{alert(errMsg)}target.elements[i].focus();target.elements[i].select();return false}}}}return true};validateForm=function(target){var sitecode=getCookie("langType");if(!validate(target,sitecode)){return false}else{return true}};getOnlyNumberFormat=function(sv){if(sv==null)return;var temp="";var ret="";for(var index=0;index<sv.length;index++){temp=parseInt(sv.charAt(index),10);if(temp>=0||temp<=9){ret+=temp}}return ret};initSetLetterType=function(elem){if(elem.getAttribute("chartype")=="kor"){elem.style.imeMode="active";elem.onblur=setLetterKoreanOnlyBlur}else if(elem.getAttribute("chartype")=="kornum"){elem.style.imeMode="active";elem.onblur=setLetterKorNumOnlyBlur}else if(elem.getAttribute("chartype")=="koreng"){elem.style.imeMode="auto";elem.onblur=setLetterKorEngOnlyBlur}else if(elem.getAttribute("chartype")=="korengnum"){elem.style.imeMode="auto";elem.onblur=setLetterKorEngNumOnlyBlur}else if(elem.getAttribute("chartype")=="eng"){elem.style.imeMode="inactive";elem.onblur=setLetterEnglishOnlyBlur}else if(elem.getAttribute("chartype")=="engnum"){elem.style.imeMode="disabled";elem.onblur=setLetterEngNumOnlyBlur}else if(elem.getAttribute("chartype")=="float"){elem.onblur=setLetterFloatOnlyBlur}else if(elem.getAttribute("chartype")=="int"){elem.onblur=setLetterIntegerBlur}else if(elem.getAttribute("chartype")=="onlynum"){elem.onblur=setKeyInputNumberOnlyBlur;elem.onpaste=setPasteNumberOnly}else if(elem.getAttribute("chartype")=="money"){elem.style.textAlign="right";elem.onblur=setMoneyBlur}else if(elem.getAttribute("chartype")=="floatmoney"){elem.style.textAlign="right";elem.onblur=setFloatMoneyBlur}};checkEvent=function(event){if(!event){event=window.event;event.target=event.srcElement;event.which=event.keyCode}return event};numberKeyPress=function(){if((event.keyCode<48)||(event.keyCode>57)){event.returnValue=false;return}event.returnValue=true};setKeydownMoney=function(event){event=checkEvent(event);if(event.shiftKey==true)event.returnValue=false;if(event.which<48||(event.which>57&&event.which<96)||event.which>105){if(event.which==8||event.which==9||event.which==37||event.which==39||event.which==189||event.which==46){return true}event.returnValue=false}};setKeypressMoney=function(event){event=checkEvent(event);var ev=event.target;var pKey=String.fromCharCode(event.which);var tempV=ev.value;if(tempV.length>0){var stat=true;while(stat){if(tempV.length>0&&tempV.substring(0,1)==0){tempV=tempV.substr(1)}else{stat=false}}}var moneyReg=new RegExp('(-?[0-9]+)([0-9]{3})');tempV=tempV+pKey;tempV=tempV.replace(/\,/g,"");while(moneyReg.test(tempV)){tempV=tempV.replace(moneyReg,'$1,$2')}ev.value=tempV;if(event.which==9){ev.select()}event.returnValue=false};changeIntMoneyType=function(data){var tempV=data;var moneyReg=new RegExp('(-?[0-9]+)([0-9]{3})');tempV=tempV.replace(/\,/g,"");while(moneyReg.test(tempV)){tempV=tempV.replace(moneyReg,'$1,$2')}return tempV};setKeydownFloatMoney=function(event){event=checkEvent(event);if(event.shiftKey==true)event.returnValue=false;var floatindex=event.target.value.indexOf(".");if(floatindex!=-1){var floatNum=event.target.value.substring(floatindex+1);if(event.which==8)return;else if(floatNum.length>1)event.returnValue=false}if(event.which<48||(event.which>57&&event.which<96)||event.which>105){if(event.which==8||event.which==9||event.which==37||event.which==39||event.which==189){return}else if(event.which==190&&floatindex==-1){return}event.returnValue=false}};setFloatMoney=function(event){event=checkEvent(event);var ev=event.target;var pKey=String.fromCharCode(event.which);var tempV=ev.value;var floatnum="";if(tempV.indexOf(".")!=-1){floatnum=tempV.substring(tempV.indexOf("."))+pKey;tempV=tempV.substring(0,tempV.indexOf("."))}else{tempV=tempV+pKey}var moneyReg=new RegExp('(-?[0-9]+)([0-9]{3})');tempV=tempV.replace(/\,/g,"");while(moneyReg.test(tempV)){tempV=tempV.replace(moneyReg,'$1,$2')}ev.value=tempV+floatnum;if(event.which==9){ev.select()}event.returnValue=false};setLetterKoreanOnly=function(event){event=checkEvent(event);var pKey=String.fromCharCode(event.which);if(!((pKey.charCodeAt()>0x3130&&pKey.charCodeAt()<0x318F)||(pKey.charCodeAt()>=0xAC00&&pKey.charCodeAt()<=0xD7A3))){event.returnValue=false;delete eReg}if(event.target.getAttribute("userchar")!=undefined){var userKey=event.target.getAttribute("userchar");for(i=0;i<userKey.length;i++){if(pKey==userKey.charAt(i)){event.returnValue=true;break}}}};setLetterKorNumOnly=function(event){event=checkEvent(event);var pKey=String.fromCharCode(event.which);if(!((pKey.charCodeAt()>0x3130&&pKey.charCodeAt()<0x318F)||(pKey.charCodeAt()>=0xAC00&&pKey.charCodeAt()<=0xD7A3)||!setKeyInputNumberOnly(event))){event.returnValue=false;delete eReg}if(event.target.getAttribute("userchar")!=undefined){var userKey=event.target.getAttribute("userchar");for(i=0;i<userKey.length;i++){if(pKey==userKey.charAt(i)){event.returnValue=true;break}}}};setLetterKorEngOnly=function(event){event=checkEvent(event);var pKey=String.fromCharCode(event.which);var eReg=/[a-zA-Z]/g;if(!((pKey.charCodeAt()>0x3130&&pKey.charCodeAt()<0x318F)||(pKey.charCodeAt()>=0xAC00&&pKey.charCodeAt()<=0xD7A3)||!(pKey!="\r"&&!eReg.test(pKey)))){event.returnValue=false;delete eReg}setUpperLowerCase();if(event.target.getAttribute("userchar")!=undefined){var userKey=event.target.getAttribute("userchar");for(i=0;i<userKey.length;i++){if(pKey==userKey.charAt(i)){event.returnValue=true;break}}}};setLetterKorEngNumOnly=function(event){event=checkEvent(event);var pKey=String.fromCharCode(event.which);var eReg=/[a-zA-Z]/g;if(!((pKey.charCodeAt()>0x3130&&pKey.charCodeAt()<0x318F)||(pKey.charCodeAt()>=0xAC00&&pKey.charCodeAt()<=0xD7A3)||!(pKey!="\r"&&!eReg.test(pKey))||!setKeyInputNumberOnly(event))){event.returnValue=false;delete eReg}setUpperLowerCase();if(event.target.getAttribute("userchar")!=undefined){var userKey=event.target.getAttribute("userchar");for(i=0;i<userKey.length;i++){if(pKey==userKey.charAt(i)){event.returnValue=true;break}}}};setLetterEnglishOnly=function(event){event=checkEvent(event);var pKey=String.fromCharCode(event.which);var eReg=/[a-zA-Z]/g;if(pKey!="\r"&&!eReg.test(pKey))event.returnValue=false;delete eReg;setUpperLowerCase();if(event.target.getAttribute("userchar")!=undefined){var userKey=event.target.getAttribute("userchar");for(i=0;i<userKey.length;i++){if(pKey==userKey.charAt(i)){event.returnValue=true;break}}}};setLetterInteger=function(event){event=checkEvent(event);var pKey=String.fromCharCode(event.which);var intReg=/[0-9\\-]/g;if(pKey!="\r"&&!intReg.test(pKey))event.returnValue=false;delete intReg;if(event.target.getAttribute("userchar")!=undefined){var userKey=event.target.getAttribute("userchar");for(i=0;i<userKey.length;i++){if(pKey==userKey.charAt(i)){event.returnValue=true;break}}}};setOnlyNumber=function(event){event=checkEvent(event);var pKey=String.fromCharCode(event.which);var intReg=/[0-9\\-]/g;if(pKey!="\r"&&!intReg.test(pKey))event.returnValue=false;delete intReg};setLetterFloatOnly=function(event){event=checkEvent(event);var pKey=String.fromCharCode(event.which);var floatReg=/[0-9\\.\\-]/g;if(pKey!="\r"&&!floatReg.test(pKey))event.returnValue=false;delete floatReg;if(event.target.getAttribute("userchar")!=undefined){var userKey=event.target.getAttribute("userchar");for(i=0;i<userKey.length;i++){if(pKey==userKey.charAt(i)){event.returnValue=true;break}}}};setPasteNumberOnly=function(event){event=checkEvent(event);var clipdata=window.clipboardData.getData("Text");clipdata=clipdata.replace(/-/gi,"");if(clipdata.match(/^\d+$/ig)==null){return false}var element=document.all.tags('INPUT');for(var idx=0;idx<element.length;idx++){var obj=element[idx];if(obj.onpaste&&obj==this){obj.value=clipdata.substring(0,clipdata.length)}}event.returnValue=false};setKeyInputNumberOnlyBlur=function(event){event=checkEvent(event);var el=event.target;var userChar=false;var userKey="";var userCharYn=false;var title="";if(event.target.title!=null&&event.target.title!=undefined&&event.target.title!=""){title="<"+event.target.title+"> "}for(i=0;i<event.target.value.length;i++){var pKey=event.target.value.charCodeAt(i);if(event.target.getAttribute("userchar")!=undefined){userCharYn=true;userKey=event.target.getAttribute("userchar");for(x=0;x<userKey.length;x++){if(pKey==userKey.charCodeAt(x)){userChar=true;break}}}if(!((userChar==true&&userCharYn)||(pKey>47&&pKey<58)||(pKey==8||pKey==9))){alert(title+"숫자만 입력 가능합니다.");event.target.focus();return false}userChar=false}};setLetterKorEngNumOnlyBlur=function(event){event=checkEvent(event);var el=event.target;var userChar=false;var userKey="";var userCharYn=false;var title="";if(event.target.title!=null&&event.target.title!=undefined&&event.target.title!=""){title="<"+event.target.title+"> "}for(i=0;i<event.target.value.length;i++){var pKey=event.target.value.charCodeAt(i);if(event.target.getAttribute("userchar")!=undefined){userCharYn=true;userKey=event.target.getAttribute("userchar");for(x=0;x<userKey.length;x++){if(pKey==userKey.charCodeAt(x)){userChar=true;break}}}if(!((userChar==true&&userCharYn)||(pKey>0x3130&&pKey<0x318F)||((pKey>=0xAC00&&pKey<=0xD7A3)))&&!((pKey>96&&pKey<123)||(pKey>64&&pKey<91))&&!(pKey>47&&pKey<58)){alert(title+"한글,영어,숫자만 입력 가능합니다.");event.target.focus();return false}userChar=false}};setLetterKoreanOnlyBlur=function(event){event=checkEvent(event);var el=event.target;var userChar=false;var userKey="";var userCharYn=false;var title="";if(event.target.title!=null&&event.target.title!=undefined&&event.target.title!=""){title="<"+event.target.title+"> "}for(i=0;i<event.target.value.length;i++){var pKey=event.target.value.charCodeAt(i);if(event.target.getAttribute("userchar")!=undefined){userCharYn=true;userKey=event.target.getAttribute("userchar");for(x=0;x<userKey.length;x++){if(pKey==userKey.charCodeAt(x)){userChar=true;break}}}if((!((userChar==true&&userCharYn)||(pKey>0x3130&&pKey<0x318F)||(pKey>=0xAC00&&pKey<=0xD7A3)))){alert(title+"한글만 입력 가능합니다.");event.target.focus();return false}userChar=false}};setLetterKorNumOnlyBlur=function(event){event=checkEvent(event);var el=event.target;var userChar=false;var userKey="";var userCharYn=false;var title="";if(event.target.title!=null&&event.target.title!=undefined&&event.target.title!=""){title="<"+event.target.title+"> "}for(i=0;i<event.target.value.length;i++){var pKey=event.target.value.charCodeAt(i);if(event.target.getAttribute("userchar")!=undefined){userCharYn=true;userKey=event.target.getAttribute("userchar");for(x=0;x<userKey.length;x++){if(pKey==userKey.charCodeAt(x)){userChar=true;break}}}if((!((userChar==true&&userCharYn)||(pKey>0x3130&&pKey<0x318F)||(pKey>=0xAC00&&pKey<=0xD7A3))&&(pKey<48||pKey>57))){if(pKey==8||pKey==9){continue}else{alert(title+"한글,숫자만 입력 가능합니다.");event.target.focus();return false}}userChar=false}};setLetterKorEngOnlyBlur=function(event){event=checkEvent(event);var el=event.target;var userChar=false;var userKey="";var userCharYn=false;var title="";if(event.target.title!=null&&event.target.title!=undefined&&event.target.title!=""){title="<"+event.target.title+"> "}for(i=0;i<event.target.value.length;i++){var pKey=event.target.value.charCodeAt(i);if(event.target.getAttribute("userchar")!=undefined){userCharYn=true;userKey=event.target.getAttribute("userchar");for(x=0;x<userKey.length;x++){if(pKey==userKey.charCodeAt(x)){userChar=true;break}}}if((!((userChar==true&&userCharYn)||(pKey>0x3130&&pKey<0x318F)||((pKey>=0xAC00&&pKey<=0xD7A3)))&&!((pKey>96&&pKey<123)||(pKey>64&&pKey<91)))){alert(title+"한글,영어만 입력 가능합니다.");event.target.focus();return false}userChar=false}};setLetterEnglishOnlyBlur=function(event){event=checkEvent(event);var el=event.target;var userChar=false;var userKey="";var userCharYn=false;var title="";if(event.target.title!=null&&event.target.title!=undefined&&event.target.title!=""){title="<"+event.target.title+"> "}for(i=0;i<event.target.value.length;i++){var pKey=event.target.value.charCodeAt(i);if(event.target.getAttribute("userchar")!=undefined){userCharYn=true;userKey=event.target.getAttribute("userchar");for(x=0;x<userKey.length;x++){if(pKey==userKey.charCodeAt(x)){userChar=true;break}}}if((!((userChar==true&&userCharYn)||(pKey>96&&pKey<123)||(pKey>64&&pKey<91)))){alert(title+"영어만 입력 가능합니다.");event.target.focus();return false}userChar=false}};setLetterEngNumOnlyBlur=function(event){event=checkEvent(event);var el=event.target;var userChar=false;var userKey="";var userCharYn=false;var title="";if(event.target.title!=null&&event.target.title!=undefined&&event.target.title!=""){title="<"+event.target.title+"> "}for(i=0;i<event.target.value.length;i++){var pKey=event.target.value.charCodeAt(i);if(event.target.getAttribute("userchar")!=undefined){userCharYn=true;userKey=event.target.getAttribute("userchar");for(x=0;x<userKey.length;x++){if(pKey==userKey.charCodeAt(x)){userChar=true;break}}}if((!((userChar==true&&userCharYn)||(pKey>96&&pKey<123)||(pKey>64&&pKey<91))&&!(pKey>47&&pKey<58))){alert(title+"영어,숫자만 입력 가능합니다.");event.target.focus();return false}userChar=false}};setLetterIntegerBlur=function(event){event=checkEvent(event);var el=event.target;var evtValueLength=event.target.value.length;var title="";if(event.target.title!=null&&event.target.title!=undefined&&event.target.title!=""){title="<"+event.target.title+"> "}for(i=0;i<evtValueLength;i++){var pKey=event.target.value.charCodeAt(i);if(evtValueLength==1&&pKey==45){alert(title+"- 만 입력 될수 없습니다.");event.target.focus();return false}if(((evtValueLength-1)-i)%4==3&&(evtValueLength-1)!=0&&event.target.value.charAt(i)==',')continue;if(i==0&&event.target.value.charAt(i)=='-')continue;if(i!=0&&pKey==45){alert(title+"- 는  입력값 중 맨 앞에만 존재 하여야  합니다.");event.target.focus();return false}if(!(pKey>47&&pKey<58)&&!(pKey==45)){alert(title+"숫자만 입력 가능합니다.");event.target.focus();return false}}};setLetterFloatOnlyBlur=function(event){event=checkEvent(event);var el=event.target;var floatPoint=event.target.value.indexOf('.')!=-1?event.target.value.indexOf('.'):event.target.value.length;var evtValueLength=event.target.value.length;var title="";if(event.target.title!=null&&event.target.title!=undefined&&event.target.title!=""){title="<"+event.target.title+"> "}for(i=0;i<evtValueLength;i++){var pKey=event.target.value.charCodeAt(i);if(evtValueLength==1&&pKey==45){alert(title+"- 만 입력 될수 없습니다.");event.target.focus();return false}if(i==0&&pKey==46||i==(evtValueLength-1)&&pKey==46){alert(title+"소수점은 맨 앞이나 맨 뒤에  있을수 없습니다.");event.target.focus();return false}if(i<floatPoint){if(((floatPoint-1)-i)%4==3&&(floatPoint-1)!=0&&event.target.value.charAt(i)==',')continue;if(i==0&&event.target.value.charAt(i)=='-')continue}if(i>floatPoint&&event.target.value.charAt(i)=='.'){alert(title+"소수점은 한개 이상 있을수 없습니다.");event.target.focus();return false}if(i!=0&&pKey==45){alert(title+"- 는  입력값 중 맨 앞에만 존재 하여야  합니다.");event.target.focus();return false}if(!(pKey>47&&pKey<58)&&!(pKey==45||pKey==46)){alert(title+"숫자 , . , - 만 입력 가능합니다.");event.target.focus();return false}}};setMoneyBlur=function(event){event=checkEvent(event);var el=event.target;var tempV=event.target.value;if(tempV.length>0){var stat=true;while(stat){if((tempV.length>0&&tempV.substring(0,1)==0)){tempV=tempV.substr(1)}else if(tempV.length>1&&tempV.substring(0,1)=='-'&&tempV.substring(1,2)==0){tempV="-"+tempV.substr(2)}else{stat=false}}}var moneyReg=new RegExp('(-?[0-9]+)([0-9]{3})');tempV=tempV.replace(/\,/g,"");while(moneyReg.test(tempV)){tempV=tempV.replace(moneyReg,'$1,$2')}event.target.value=tempV;setLetterIntegerBlur(event);event.returnValue=false};setFloatMoneyBlur=function(event){event=checkEvent(event);var el=event.target;var tempV=event.target.value;var floatnum="";if(tempV.indexOf(".")!=-1){floatnum=tempV.substring(tempV.indexOf("."));tempV=tempV.substring(0,tempV.indexOf("."))}if(tempV.charAt(0)=="0"&&floatnum==""){while(tempV.charAt(0)=="0"){tempV=tempV.substring(1)}}if(tempV.charAt(0)=="-"&&tempV.charAt(1)=="0"&&floatnum==""){while(tempV.charAt(1)=="0"){tempV="-"+tempV.substring(2)}}if(isNaN(tempV.charAt(tempV.length-1))){while(isNaN(tempV.charAt(tempV.length-1))&&tempV.length>0){tempV=tempV.substring(0,(tempV.length>=1?tempV.length-1:0))}floatnum=floatnum.substring(1)}var moneyReg=new RegExp('(-?[0-9]+)([0-9]{3})');tempV=tempV.replace(/\,/g,"");floatnum=floatnum.replace(/\,/g,"");while(moneyReg.test(tempV)){tempV=tempV.replace(moneyReg,'$1,$2')}event.target.value=tempV+floatnum;setLetterFloatOnlyBlur(event);event.returnValue=false};function MM_showHideLayers(){var i,p,v,obj,args=MM_showHideLayers.arguments;for(i=0;i<(args.length-2);i+=3)with(document)if(getElementById&&((obj=getElementById(args[i]))!=null)){v=args[i+2];if(obj.style){obj=obj.style;v=(v=='show')?'visible':(v=='hide')?'hidden':v}obj.visibility=v}}function chkJuminNo(str1,str2){if(chkNumber(str1)==false)return false;if(chkNumber(str2)==false)return false;var x,y,z;var L11,L12,L13,L14,L15,L16;var L21,L22,L23,L24,L25,L26,L27;L11=parseInt(str1.substring(0,1));L12=parseInt(str1.substring(1,2));L13=parseInt(str1.substring(2,3));L14=parseInt(str1.substring(3,4));L15=parseInt(str1.substring(4,5));L16=parseInt(str1.substring(5,6));L21=parseInt(str2.substring(0,1));L22=parseInt(str2.substring(1,2));L23=parseInt(str2.substring(2,3));L24=parseInt(str2.substring(3,4));L25=parseInt(str2.substring(4,5));L26=parseInt(str2.substring(5,6));L27=parseInt(str2.substring(6,7));x=(L11*2)+(L12*3)+(L13*4)+(L14*5)+(L15*6)+(L16*7)+(L21*8)+(L22*9)+(L23*2)+(L24*3)+(L25*4)+(L26*5);y=x%11;z=11-y;if(z==10)z=0;else if(z==11)z=1;if(z==parseInt(str2.substring(6,7))){return true}else{return false}return false}function chkNumber(num){var numTemp=Number(num);if(num!=""){if(isNaN(numTemp))return false;else return true}else{return false}}