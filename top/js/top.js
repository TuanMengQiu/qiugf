// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
  // 获取按钮元素
  const topBtn = document.getElementById('topBtn');
  
  // 监听滚动事件
  window.addEventListener('scroll', function() {
    // 当滚动超过300px时显示按钮，否则隐藏
    topBtn.classList.toggle('show', window.scrollY > 300);
  });
  
  // 点击按钮回到顶部
  topBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});