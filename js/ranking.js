async function ranking(name, ave_score) {
  // postする
  $('.ranking').hide();
  $('.text').text('ランキング送信中...');

  const data = {
    name: name,
    score: ave_score
  };
  const param = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(data)
  };

  const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await _sleep(3000);

  fetch(`${API_URL}v1/rankings`, param)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json);
    });

  // 何位中何位か表示する
  // menuを出す
}
