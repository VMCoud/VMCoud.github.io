//判断来路
const validReferers = ["https://7tu.link/", "https://c.aalib.net/", "https://github.com/","freet.top"];
const referrer = document.referrer;

if (!validReferers.some(referer => referrer.includes(referer))) {
  window.stop();
  document.body.innerHTML = '当前页面失效，请在发布页重新进入';
  alert('当前页面失效，请在发布页重新进入');
  window.location.href = validReferers[0]; // 重定向到第一个有效的引用来源
}

//51统计
!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"K7XvZiRuYtVCTbxm",ck:"K7XvZiRuYtVCTbxm",autoTrack:true,hashMode:true});
