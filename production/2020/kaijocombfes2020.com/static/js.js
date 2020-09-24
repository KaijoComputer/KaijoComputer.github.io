function getCookie(key){var cookies=document.cookie.split(';');for(var _i=0,cookies_1=cookies;_i<cookies_1.length;_i++){var cookie=cookies_1[_i];var cookiesArray=cookie.split('=');if(cookiesArray[0].trim()==key.trim()){return cookiesArray[1];}}
return '';}
function csrfSetting(){$.ajaxSetup({beforeSend:function(xhr,settings){if(!csrfSafeMethod(settings.type)&&!this.crossDomain){xhr.setRequestHeader("X-CSRFToken",getCookie('csrftoken'));}}});}
function csrfSafeMethod(method){return(/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));}
csrfSetting();$(document).ready(function(){csrfSetting();a=$('.audiojs')
b=null
c=null
$('.audiojs').one('click',function(i)
{b=i;console.log(i);c=$(b.delegateTarget).find('audio').attr('onclick')
eval(c)});})