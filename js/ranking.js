async function ranking(name, ave_score) {
  // postする
  $('.ranking').hide();
  $('.result').text('');
  $('.count').html('');
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
      $('.result').text('');
      $('.text').text('ランキング送信完了！');
      $('.count').html(`<b>${json.rank}</b>/${json.rankingLength}位でした！`);
    })
    .catch((error) => {
      console.error(
        'There has been a problem with your fetch operation:',
        error
      );
      alert(
        `${error} ランキング送信に失敗しました。ページを更新してください。`
      );
    });
}
