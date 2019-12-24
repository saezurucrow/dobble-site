$(function () {

  $(".start ").on("click", function () {

    $(".start").fadeOut();

    // カウントダウンタイマー
    // let cnt = 5; //5秒前からカウントスタート

    // $('.game').text(cnt);

    // cnDown = setInterval(function () { //1秒おきにカウントマイナス
    //   cnt--;

    //   if (cnt <= 0) { //0になったら停止する
    //     clearInterval(cnDown);
    //     game()
    //   }

    //   $('.game').text(cnt);

    // }, 1000);

    function shuffle(array) {
      for (let i = array.length - 1; i >= 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1));
        // 配列の数値を入れ替える
        [array[i], array[rand]] = [array[rand], array[i]]
      }
      return array;
    }

    function array_set() {
      const board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      array = shuffle(board);
      let board_1 = []
      let board_2 = []
      for (let j = 0; j <= 6; j++) {
        board_1.push(board[j])
        board_2.push(board[j + 7])
      }
      board_1.push(board[14])
      board_2.push(board[14])
      board_1 = shuffle(board_1);
      board_2 = shuffle(board_2);
      return {
        board_1,
        board_2
      }
    }

    let {
      board_1,
      board_2
    } = array_set();


    for (let k = 0; k <= 7; k++) {
      $('.board_1').append('<img src="img/' + board_1[k] + '.png"></img>');
      $('.board_2').append('<img src="img/' + board_2[k] + '.png"></img>');
    }
  })
});