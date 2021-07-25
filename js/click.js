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

$('.send-ranking').on('click', function () {
  const name = $('#name').val();
  const ave_score = localStorage.getItem('score');
  ranking(name, ave_score);
});

$('.menu').on('click', function () {
  allTextClear();
  allButtonShow();
  $('.menu').hide();
  $('.game').hide();
  $('.ranking').hide();
  $('.title').show();
});
