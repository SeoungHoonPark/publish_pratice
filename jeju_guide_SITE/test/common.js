/******************************************************************************
 * common javascript function
 * 
 * 01. doGetCombo		콤보 생성(코드 조회)
 ******************************************************************************/

/*********************************************
* contextUrl   
*********************************************/  
var imgCheck = true;

var lfs = function(){
	return{
		contextUrl: '',
		imageUrl: '',
		dateFormat: 'yy-mm-dd'		
	};
}();

/*********************************************
* doGetCombo
* ex) doGetCombo('/mdsvr-admin/common/getCommonCode', 'TD01', 'TITLE00006','adminType');    
* url : url , groupCd:코드 , selCode : 선택될 코드 , obj : 만들어질 obj , eqValueText: option의 value와 텍스트가 같으면 true , type : S(선택), A(전체) , F:없음, custom: 사용자 문자열 
*********************************************/  
function doGetCombo(url, pubCd , selCode, obj , eqValueText, type, custom,  callbackFn){
	$.getJSON(url,{ pubCd : pubCd} , function(data) {
		targetObj = document.getElementById(obj);
		for(var i=targetObj.length-1; i>=0; i--) {
			targetObj.remove( i );
		}
		obj= '#'+obj;
		   
		var data = data.rows;

		if (type&&type!="F") {
			if (!custom) {
				custom = (type == "S") ? "선 택" : ((type == "A") ? "전 체" : "");				
			}
			
			$("<option />", {value: "", text: custom}).appendTo(obj);
		}
		    
		
		$.each(data, function(index,value) {
			var value, text;
			
			if(eqValueText==true) {
				value = data[index].VALUE;
				text  = data[index].VALUE;
			}else {
				value = data[index].ID;
				text  = data[index].VALUE;
			}
			if(selCode==value){
				$('<option />', {value : value, text:text}).appendTo(obj).attr("selected", "true");
			}else{
				$('<option />', {value : value, text:text}).appendTo(obj);
			}
		});    
		                
		if(callbackFn){
			var strCallback = callbackFn;
			eval(strCallback);
		}
	});
}

/*********************************************
* doGetCombo
* ex) doGetCombo('/mdsvr-admin/common/getCommonCode', 'TD01', 'TITLE00006','adminType');    
* url : url , groupCd:코드 , selCode : 선택될 코드 , obj : 만들어질 obj , type : S(선택), A(전체) , F:없음, custom: 사용자 문자열
*********************************************/  
function doGetValue(url, pubCd , selCode, obj , callbackFn){
	$.getJSON(url,{ pubCd : pubCd} , function(data) {
		   
		var data = data.rows;

		$.each(data, function(index, value) {
			if(selCode==data[index].ID){
				$("#"+obj).append(data[index].VALUE);
			}
		});    
		                
		if(callbackFn){
			var strCallback = callbackFn;
			eval(strCallback);
		}
	});
}

/**************************************************
 * ex) ageCheck('54', '02', '01');    
* 날짜 형식(yy, mm, dd)에 안 맞거나 null인 경우 return 0; 
 **************************************************/
var ageCheck = function(yy, mm, dd) {
    // validate input
    yy = parseInt(yy,10);
    mm = parseInt(mm,10);
    dd = parseInt(dd,10);   
    if(isNaN(dd) || isNaN(mm) || isNaN(yy)) { return 0; }   
    if((dd < 1 || dd > 31) || (mm < 1 || mm > 12)) { return 0; }

    // change human inputted month to javascript equivalent 
    mm = mm - 1;

    // get today's date
    var today = new Date();
    var t_dd = today.getDate();
    var t_mm = today.getMonth();
    var t_yy = today.getFullYear(); 

    // We are using last two digits, so make a guess of the century 
    if(yy == 0) { yy = "00"; }
    else if(yy < 9) { yy = "0"+yy; }    
    yy = (today.getFullYear() < "20"+yy ? "19"+yy : "20"+yy);

    // Work out the age!
    var age = t_yy - yy - 1; // Starting point
    if( mm < t_mm ) { age++;} // If it's past their birth month
    if( mm == t_mm && dd <= t_dd) { age++; } // If it's past their birth day

    return age;
}

/****************************************************
* ex) calcHeight('iframeId')
* iframe 리사이징을 위한 fucntion
* -ifrmae 적용 된 페이지에서 ready(onload)시 호출. 
****************************************************/
function calcHeight(ifNm){
	//find the height of the internal page
	document.getElementById(ifNm).height=0;
			
	var the_height=
		document.getElementById(ifNm).contentWindow.
		document.body.scrollHeight;

	//change the height of the iframe
	document.getElementById(ifNm).height=
		the_height;
}

/**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info/
*
**/
 
var Base64 = {
 
	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
 
	// public method for encoding
	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;
 
		input = Base64._utf8_encode(input);
 
		while (i < input.length) {
 
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);
 
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;
 
			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}
 
			output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
 
		}
 
		return output;
	},
 
	// public method for decoding
	decode : function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
 
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
 
		while (i < input.length) {
 
			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));
 
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
 
			output = output + String.fromCharCode(chr1);
 
			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}
 
		}
 
		output = Base64._utf8_decode(output);
 
		return output;
 
	},
 
	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
 
		for (var n = 0; n < string.length; n++) {
 
			var c = string.charCodeAt(n);
 
			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
 
		}
 
		return utftext;
	},
 
	// private method for UTF-8 decoding
	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;
 
		while ( i < utftext.length ) {
 
			c = utftext.charCodeAt(i);
 
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
 
		}
 
		return string;
	}
 
}


function mallProductViewPopup(serverDomain, prodId){
	if (prodId == '해당상품 없음'){
		alert('해당 상품은 조회가 되지 않습니다.');
		return;
	}
	
	window.open(serverDomain + "/mall/prizebuy/prize_detailView.do?prod_id=" + prodId, "pop", "width=1150,height=800,history=no,resizable=yes,status=no,scrollbars=yes,menubar=no")
}


/**
 * 한글 영문만 입력 가능
 * 사용법 : onkeydown="kr_eng_only();" onkeypress="kr_eng_only();"
 */
function kr_eng_only(Ev) {
    var evCode = (window.netscape) ? Ev.which : event.keyCode;
    if( !(( evCode < 48 || evCode >57 )||((evCode < 48 || evCode >57) && (evCode < 65 || evCode > 90) && evCode != 8 && evCode != 46 && evCode != 9 && evCode != 13 && (evCode < 37 || evCode > 40)))  ) {
        if (window.netscape) {
            Ev.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
}

/**
 * 한글 영문 괄호만 입력 가능
 * 사용법 : onkeydown="kr_eng_parenthesis_only();" onkeypress="kr_eng_parenthesis_only();"
 */
function kr_eng_only(Ev) {
    var evCode = (window.netscape) ? Ev.which : event.keyCode;
    if( !(( evCode < 48 || evCode >57 )||((evCode < 48 || evCode >57) && (evCode < 65 || evCode > 90) && evCode != 8 && evCode != 46 && evCode != 9 && evCode != 13 && (evCode < 37 || evCode > 40)))) {
        if (window.netscape) {
            Ev.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
}
	
/**
 * 숫자만 등록 가능
 * 사용법 : onkeydown="only();" onkeypress="only();"
 */
function only(Ev) {
    var evCode = (window.netscape) ? Ev.which : event.keyCode;
    if ((evCode < 48 || evCode > 57) && (evCode < 96 || evCode > 105) && evCode != 8 && evCode != 9 && evCode != 13 && evCode != 46 && (evCode < 37 || evCode > 40)) {
        if (window.netscape) {
            Ev.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
}

/**
 * 숫자 '.' 만 등록 가능
 * 사용법 : onkeydown="num_pnt_only();" onkeypress="num_pnt_only();"
 */
function num_pnt_only(Ev) {
    var evCode = (window.netscape) ? Ev.which : event.keyCode;
    if ((evCode < 48 || evCode > 57) && (evCode < 96 || evCode > 105) && evCode != 190 && evCode != 110 && evCode != 8 && evCode != 9 && evCode != 13 && evCode != 46 && (evCode < 37 || evCode > 40) ) {
        if (window.netscape) {
            Ev.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
}

/*  핸드폰 자동완성
*   onkeydown="only();" onkeypress="only();" onkeyup="input_mob_check(this)"
*   2015-04-09
*/
function input_mob_check(e) {
	if( $(e).val() != null && $(e).val() != '' ) {
		var tmps = $(e).val().replace(/[^0-9]/g, '');
		
		switch (tmps.length) {
		     	case 5 :
		     	case 6 :
		     	case 7 :
			     	tmps = tmps.substring(0, 3) + "-" + tmps.substring(3, 7);
			     	break;
		     	case 8 :
		     	case 9 :
		     	case 10 :
		     	case 11 :
			     	tmps = tmps.substring(0, 3) + "-" + tmps.substring(3, 7) + "-" + tmps.substring(7, 11);
			     	break;
		     	default :
		     		break;
		}
		
		if ($(e).val() != tmps) {
		     $(e).val(tmps);
		}
	}
}

/**
 * 사용법 : onkeydown="return numbersonly(this,false);" onkeypress="return numbersonly(this,false);"
 *//*
function numbersonly(e, decimal) {
    var key;
    var keychar;

    if (window.event) {
        key = window.event.keyCode;
    } else if (e) {
        key = e.which;
    } else {
        return true;
    }
    keychar = String.fromCharCode(key);

    if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13)
            || (key == 27) || (key == 37) || (key == 39) || (key == 190) || (key == 110) || (key >= 96 ) || (key <= 105 )) {
        return true;
    } else if ((("0123456789").indexOf(keychar) > -1)) {
        return true;
    } else if (decimal && (keychar == ".")) {
        return true;
    } else
        return false;
}*/

/**
 * 영문 + 숫자만 등록 가능
 * 사용법 : onkeydown="only();" onkeypress="only();"
 */
function eng_num_only(Ev) {
	var evCode = (window.netscape) ? Ev.which : event.keyCode;
	// console.log(evCode);
	if ((evCode < 48 || evCode > 57) && (evCode < 96 || evCode > 105) && (evCode < 65 || evCode > 90) && evCode != 8 && evCode != 9 && evCode != 13 && evCode != 46 && (evCode < 37 || evCode > 40)) {
		if (window.netscape) {
			Ev.preventDefault();
		} else {
			event.returnValue = false;
		}
	}
}

/**
 * 영문 + 숫자 및 "-", "_", ".", "엔터키" 만 입력 가능
 * 사용법 : onkeyup="up(this)" onkeydown="return email_only();"
 */
var tmpKey = "";

function email_only() {
    var ek = event.keyCode;
    
    if(((ek>57)||(ek<48)) && (ek < 96 || ek > 105) && (evCode < 65 || evCode > 90) && ek!=8 && ek!=46 && ek!=109 && ek!=189 && ek!=17 && ek!=88 && ek!=13 && ek!=46 && ek!=95)
    	event.returnValue=false;
}



/**
 * 숫자 및 "-", "엔터키" 만 입력 가능
 * 사용법 : onkeyup="up(this)" onkeydown="return chk_num();"
 */
var tmpKey = "";

function chk_num() {
    var ek = event.keyCode;
    
    if(((ek>57)||(ek<48)) && (ek < 96 || ek > 105)  && ek!=8 && ek!=46 && ek!=109 && ek!=189 && ek!=17 && ek!=88 && ek!=13)
    	event.returnValue=false;
}

function up(obj) {
        if(obj.value.search(/[^(\n)^(\-)^(0-9)]/) != -1) { obj.value = tmpKey; }
        else { tmpKey = obj.value; }
}


/**
 * 날짜형식 확인
 * yyyymmdd 형식으로 들어와야 함
 */
function isValidDate2(d) {
	// 포맷에 안맞으면 false리턴
	if(d == null || d == undefined || d == '' || d.length < 8) {
		return false;
	}

	var month_day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	// var dateToken = d.split('-');
	//var year = Number(dateToken[0]);
	//var month = Number(dateToken[1]);
	//var day = Number(dateToken[2]);
	var year = d.substring(0,4);
	var month = d.substring(4,6);
	var day = d.substring(6,8);

	// 날짜가 0이면 false
	if(day == 0) {
		return false;
	}

	var isValid = false;

	// 윤년일때
	if(isLeaf(year)) {
		if(month == 2) {
			if(day <= month_day[month-1] + 1) {
				isValid = true;
			}
		} else {
			if(day <= month_day[month-1]) {
				isValid = true;
			}
		}
	} else {
		if(day <= month_day[month-1]) {
			isValid = true;
		}
	}

	return isValid;
}

function isValidDate3(d) {
	d = d.split("-").join("");
	return isValidDate2(d);
}

/*
 * 윤년여부 검사
 */
function isLeaf(year) {
	var leaf = false;
	
	if(year % 4 == 0) {
		leaf = true;
		
		if(year % 100 == 0) {
			leaf = false;
		}
		
		if(year % 400 == 0) {
			leaf = true;
		}
	}
	
	return leaf;
}

// 날짜비교
function gf_diffDate(date1, date2) {
	var startDate = date1.split("-");
	var endDate  = date2.split("-");
	
	var sDate = new Date(startDate[0], startDate[1], startDate[2]).valueOf();
	var eDate = new Date(endDate[0], endDate[1], endDate[2]).valueOf();
	
	if (sDate > eDate) {
		// alert("시작일이 종료일보다 클 수 없습니다.");
		return false;
	} else {
		return true;
	}
}

function getContextPath(){
    var offset=location.href.indexOf(location.host)+location.host.length;
    var ctxPath=location.href.substring(offset,location.href.indexOf('/',offset+1));
    return ctxPath;
}

// 우편번호 검색 팝업
// 주소찾기 필드가 여러개(동적) 일 경우 각 필드 idx값을 넘겨줘야함
function zipcodePopup(idx) {
	var width   = "690";
	var height  = "550";
	var screenPosX = screen.availWidth/2 - width/2;
	var screenPosY = screen.availHeight/2 - height/2;
	
	window.open(getContextPath()+"/common/zipCodeList.do?search_addr_idx=" + idx, "zipcodeList", "width="+width+", height="+height+", location=no, directories=no, resizable=no, status=no, toolbar=no, menubar=no, scrollbars=yes, top="+screenPosY+", left="+screenPosX);
}

//지점 조회 -2018.04.19
function lf_initSelectBranchbox(selBoxId) {
	var removeYn = "";
	var url = "/jeju/common/ajax/selectBranchList.do";
	$.getJSON(url, "", function(data) {
		var items = [];
		$("#"+selBoxId).children().remove();
		items.push("<option value=\"\">선택</option>");
		$.each(data, function(idx, obj) {
			
			items.push("<option value=\""+obj.det_cd+"\">"+obj.det_cd_name+"</option>");
			
			if(obj.addPosition == "1620003") removeYn = "Y";
		});
		$("#"+selBoxId).append(items.join(""));
		
		if(removeYn == "Y") $("#srch_main_store_cd option:first").remove();
	
	});
}

//지점 조회 -2018.04.19
function lf_initSelectBranchbox_ver2(selBoxId, chk) {
	var removeYn = "";
	var url = "/jeju/common/ajax/selectBranchList.do";
	$.getJSON(url, "", function(data) {
		var items = [];
		$("#"+selBoxId).children().remove();
		items.push("<option value=\"\">선택</option>");
		$.each(data, function(idx, obj) {
			
			if(obj.det_cd == chk) {
				items.push("<option value=\""+obj.det_cd+"\" selected=\"selected\">"+obj.det_cd_name+"</option>");
			} else {
				items.push("<option value=\""+obj.det_cd+"\">"+obj.det_cd_name+"</option>");
			}
			
			//items.push("<option value=\""+obj.det_cd+"\">"+obj.det_cd_name+"</option>");
			
			if(obj.addPosition == "1620003") removeYn = "Y";
		});
		$("#"+selBoxId).append(items.join(""));
		
		if(removeYn == "Y") $("#srch_main_store_cd option:first").remove();
	
	});
}

function setComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}