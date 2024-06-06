window.addEventListener("hashchange", function () {
  // force to reload page
  window.location.reload();
  // var iframe = document.getElementById('chat-iframe');
  // var hash = window.location.hash;
  // if (hash) {
  //   iframe.src = iframe.dataset.baseSrc + hash;
  // }
})

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/serviceWorker.js').then(function (registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      console.error('ServiceWorker registration failed: ', err);
    });
  });
}

function getUniqueString(length) {
  // 定义字符集，包括大小写字母和数字
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    // 随机选择一个字符加入结果字符串
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}