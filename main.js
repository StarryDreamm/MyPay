alipayURL="HTTPS://QR.ALIPAY.COM/FKX132627Q1CXPEAWNGJO91";
wechatpayURL="wxp://f2f0F5sjl1fAZdJAQMrsnZbzxAl0AmV57eXoPzftwBL7KCo"
wechat="MicroMessenger";
alipay="AlipayClient";
qqBrowser="MQQBrowser";
userAgent=navigator.userAgent;
qqSwitch=true;
timSwitch=true;

function inUA(s){
    return userAgent.indexOf(s)!=-1
}

if(inUA(wechat)){
    window.location.href=wechatpayURL;
}else if(inUA(alipay)){
    window.location.href=alipayURL;
}else if(inUA(qqBrowser)){
    if(timSwitch&&inUA("TIM")){
        window.location.href="static/tim.html";
    }else{
        if(qqSwitch){
        window.location.href="static/qq.html";
    }
}
}else{
    alert("无法识别的客户端！");
    window.location.href="static/error.html";
}
