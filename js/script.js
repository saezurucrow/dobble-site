$('.start-ranking').on('click', function () {
  $('.start-battle').hide();
  $('.start-training').hide();
  $('.start-matchting').hide();

  $('.result').text('');
  $('.count').text(3);
  $('.start').hide();
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
  $('.start').show();
  $('.start-battle').show();
  $('.start-ranking').show();
  $('.start-training').show();
  $('.start-matchting').show();
  $('.result').text('');
  $('.count').text('');
  $('.text').text('');
  $('.menu').hide();
});
