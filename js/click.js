$('.start-ranking').on('click', function () {
  allButtonHide();

  $('.result').text('');
  $('.count').text(3);
  $('.start').hide();
  $('.title').hide();
  $('.game').show();
  let count = 2;

  let countDown = setInterval(function () {
    $('.count').text(count);
    count -= 1;
    if (count < 0) {
      $('.count').text('');
      clearInterval(countDown);
      dobble(0, 1);
    }
  }, 1000);
});

$('.menu').on('click', function () {
  allTextClear();
  allButtonShow();
  $('.menu').hide();
  $('.game').hide();
  $('.title').show();
});
