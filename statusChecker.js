<!DOCTYPE html>
<html>
<head>
  <title>网页在线状态检测</title>
</head>
<body>
  <p id="status"></p>

  <script>
    // 检测网页状态的函数
    function checkStatus() {
      var url = 'https://z.666543.xyz'; // 请将此处的 URL 替换为你想要检测的网页地址
      var statusText = document.getElementById('status');

      // 发送请求检测网页
      fetch(url, { method: 'HEAD' })
        .then(function(response) {
          if (response.ok) {
            statusText.textContent = '网页正常'; // 如果返回状态码为 200 OK，则表示网页正常
          } else {
            statusText.textContent = '网页不可用'; // 如果返回状态码不是 200 OK，则表示网页出现异常
          }
        })
        .catch(function(error) {
          statusText.textContent = '无法连接到网页'; // 捕获异常，无法连接到网页
        });
    }

    // 每五分钟调用一次检测函数
    setInterval(checkStatus, 300000); // 300000 毫秒 = 5 分钟
    checkStatus(); // 页面加载后立即进行一次检测
  </script>
</body>
</html>
