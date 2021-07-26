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

  if (name.length === 0) {
    alert('名前の入力は必須です。');
    return;
  }
  if (ave_score === null) {
    alert('不正な値です。真面目にプレイしてください。');
    return;
  }
  sendRanking(name, ave_score);
});

$('.show-ranking').on('click', function () {
  $('.ranking-text').text('ランキング取得中...');
  showRanking();
});

$('.menu').on('click', function () {
  allTextClear();
  allButtonShow();
  $('.menu').hide();
  $('.game').hide();
  $('.ranking').hide();
  $('.title').show();
});
