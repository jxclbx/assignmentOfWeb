
// 找到所有需要动画的图片元素
var animatedImages = document.querySelectorAll('.image, .imgbig');

// 监听滚动事件
window.addEventListener('scroll', function() {
  animatedImages.forEach(function(image) {
    // 检查元素是否在视口内
    var rect = image.getBoundingClientRect();
    var isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    // 如果元素在视口内并且还没有动画类，则添加动画类
    if (isVisible && !image.classList.contains('animate')) {
      image.classList.add('animate');
    }
  });
});

