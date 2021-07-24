function dobble(type, playCount, score = []) {
  let endCount;
  if (type === 0) {
    endCount = 3;
  }

  $('.count').text(`${playCount}/${endCount}回目`);

  const startTime = performance.now();

  function shuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      // 配列の数値を入れ替える
      [array[i], array[rand]] = [array[rand], array[i]];
    }
    return array;
  }

  function board_set() {
    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    array = shuffle(board);
    let board_1 = [];
    let board_2 = [];
    for (let j = 0; j <= 6; j++) {
      board_1.push(array[j]);
      board_2.push(array[j + 7]);
    }
    same = board[14];
    board_1.push(same);
    board_2.push(same);
    board_1 = shuffle(board_1);
    board_2 = shuffle(board_2);
    return {
      board_1,
      board_2
    };
  }

  let { board_1, board_2 } = board_set();

  for (let k = 0; k <= 7; k++) {
    $('.board_1').append(
      '<img class="img_' +
        board_1[k] +
        '" src="img/' +
        board_1[k] +
        '.png"></img>'
    );
    $('.board_2').append(
      '<img class="img_' +
        board_2[k] +
        '" src="img/' +
        board_2[k] +
        '.png"></img>'
    );
  }

  $('.img_' + same).on('click', function () {
    const endTime = performance.now();
    // TODO: 3.114秒みたいな表示にしたい
    const time = Math.round((endTime - startTime) / 100) / 10;
    $('.result').text(time + '秒でクリア！');
    for (let k = 0; k <= 7; k++) {
      $('.board_1').empty();
      $('.board_2').empty();
    }
    if (type === 0) {
      playCount++;
      score.push(time);

      if (playCount > 3) {
        $('.result').text('お疲れ様でした。あなたの結果は...');
        $('.count').text(
          `${Math.round(average(score) * 100) / 100}秒です！(3回の平均値)`
        );
        $('.start').show();
        $('.start-ranking').hide();
        $('.menu').show();
      } else {
        $('.text').text('5秒後に始まります');
        let count = 5;
        let countDown = setInterval(function () {
          $('.count').text(count);
          count -= 1;
          if (count < 0) {
            allTextClear();
            clearInterval(countDown);
            dobble(0, playCount, score);
          }
        }, 1000);
      }
    }
  });
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
