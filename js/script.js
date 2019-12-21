$(function () {
  $(".start ").on("click", function () {
    $(".start").fadeOut();
    cnt = 5; //5秒前からカウントスタート
    $('.game').text(cnt);
    cnDown = setInterval(function () { //1秒おきにカウントマイナス
      cnt--;
      if (cnt <= 1) { //0になったら停止する
        clearInterval(cnDown);
      }
      $('.game').text(cnt);
    }, 1000);
  })
});