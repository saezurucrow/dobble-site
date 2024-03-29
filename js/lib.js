const API_URL = 'https://dobble-site-api.herokuapp.com/api/';
localStorage.removeItem('score');

function allButtonHide() {
  $('.start').hide();
  $('.start-ranking').hide();
  $('.start-battle').hide();
  $('.start-training').hide();
  $('.description').hide();
  $('.show-ranking').hide();
  $('.menu').hide();
}

function allButtonShow() {
  $('.start').show();
  $('.start-ranking').show();
  $('.start-battle').show();
  $('.start-training').show();
  $('.description').show();
  $('.show-ranking').show();
}

function allTextClear() {
  $('.result').text('');
  $('.count').text('');
  $('.text').text('');
}

function average(arr, fn) {
  return sum(arr, fn) / arr.length;
}

function sum(arr, fn) {
  if (fn) {
    return sum(arr.map(fn));
  } else {
    return arr.reduce(function (prev, current, i, arr) {
      return prev + current;
    });
  }
}
