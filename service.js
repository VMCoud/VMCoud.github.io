window.oncontextmenu = function () {
  return false;
};
window.onkeydown =
  window.onkeyup =
  window.onkeypress =
    function () {
      window.event.returnValue = false;
      return false;
    };
var h = window.innerHeight,
  w = window.innerWidth;
window.onresize = function () {
  if (h != window.innerHeight || w != window.innerWidth) {
    window.close();
    window.location = "about:blank";
  }
};

window.onload = function () {
  $(function () {
    getCookie("gq_pop");
  });
  //读Cookie
  function getCookie(objName) {
    //获取指定名称的cookie的值
    if (document.cookie.indexOf(objName) == -1) {
      setCookie("gq_pop", "1", 365);
      layer.open({
        type: 1,
        title: "公告",
        closeBtn: 1,
        area: "70%;",
        shade: 0.8,
        id: "LAY_layuipro",
        btn: ["加入QQ群"],
        btnAlign: "c",
        moveType: 1,
        content:
          '<div class="ui-lib_modal-content__nFcGO" style="max-height:40vh;padding:var(--modal-padding);overflow:auto"><div><div style="text-align:center;font-size:20px;line-height:40px;margin-bottom:10px"><style>body{background-color:#f0f8ff;margin:0;padding:0}.center-text{text-align:center;font-weight:700;color:#00bfff;background-image:linear-gradient(to right,#00bfff,#ff69b4);-webkit-background-clip:text;-webkit-text-fill-color:transparent}</style><div class="center-text">欢迎访问奇途AI公益站</div></div><div><div style="text-align:center"><p style="font-size:smaller"><i>点击展开使用说明</i></p><details><summary><strong>基于GPT3.5&amp;4模型🤖</strong></summary><p style="font-size:smaller;text-align:center"><strong>GPT4对比GPT3.5</strong></p><ul style="font-size:smaller;text-align:center"><li><strong>模型大小：</strong>GPT-4规模更大，训练数据更丰富。</li><li><strong>模型能力：</strong>GPT-4理解和处理任务的能力更强。</li><li><strong>回答质量：</strong>GPT-4回答的连贯性和创造性更强。</li><li><strong>复杂问题：</strong>GPT-4在处理复杂问题上进步显著。</li><li><strong>编程能力：</strong>GPT-4生成和调试代码的能力更强。</li><li><strong>图像理解：</strong>GPT-4能处理图像输入并进行分析。</li><li><strong>运营成本：</strong>GPT-4的成本较高，需要付费使用。</li></ul><a onclick="updateAccessControlAndAppConfig(\'/api/openai/ai1.php?key=0&\',\'gpt-4\')" href="#"><strong>🔗立即启用GPT4</strong></a><p></p></details><details><summary><strong>无需登录即免费使用🎉</strong></summary><p style="font-size:smaller">免费！</p><span><a href="#"><strong>🔗个人中心</strong></a></span><p></p></details><details><summary><strong>严禁色情暴力等内容🖐🏻️</strong></summary><p style="font-size:smaller">违者将永久封禁！</p><a href="mailto:#"><strong>🔗联系客服</strong></a><p></p></details><details><summary><strong>建站不易，欢迎赞助💰</strong></summary><img src="https://i2.mjj.rip/2023/07/03/b0a9b9d28a10ba6ece48c3be1fade409.jpeg" style="display:block;margin-left:auto;margin-right:auto;width:30%"></details><details><summary><strong>更多功能，敬请期待🎁</strong></summary><p style="font-size:smaller">AI绘画、联网搜索、文本分析等功能即将上线！</p></details></div></div></div></div>',
        success: function (layero) {
          var btn = layero.find(".layui-layer-btn");
          btn.find(".layui-layer-btn0").attr({
            href: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=N8SfMipgbpZEFIBAGq6ZnrqFxKBMnst8&authKey=9F3mUlkQRLbeOH8rrouFolqJF%2B%2BhtWophur85lpSkrgZ1YZ1dqALigLYVNC1rGvY&noverify=0&group_code=637776537",
            target: "_blank"
          });
        }
      });
    }
  }
  //设置cookie的值
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    console.log(cname + "/" + cvalue + "/" + exdays);
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + escape(cvalue) + "; " + expires;
    console.log(document.cookie);
  }
};
function updateLocalStorage(key, updateFn) {
  const storedItem = JSON.parse(localStorage.getItem(key));
  updateFn(storedItem);
  localStorage.setItem(key, JSON.stringify(storedItem));
}

function updateAccessControlAndAppConfig(newUrl, newModel) {
  updateLocalStorage("access-control", (accessControl) => {
    accessControl.state.openaiUrl = newUrl;
  });

  updateLocalStorage("app-config", (appConfig) => {
    appConfig.state.modelConfig.model = newModel;
  });
  alert("当前已启用" + newModel + "模型!\n刷新后生效");
  location.reload();
}
