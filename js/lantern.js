$(document).ready(function(){
  var words = ['元宵節快樂','平平安安','健健康康','賺大錢','平安喜樂'];
  window.setInterval(turn,60000);

  for(let i = 0; i < 4; i++){
    for(let j = 0; j < 10; j++){
      $('#lantern-wall').append(
        $('<div/>')
        .addClass('lantern-box')
        .attr('id','lantern' + i + '-' + j)
        .append(
          $('<div/>')
          .addClass('lantern-content')
          .attr('id','content' + i + '-' + j)
          .html('元宵節快樂')
        )
      )
    }
  }

  turn();

  async function turn(){
    $('.lantern-box').removeClass('turn');
    $('.lantern-content').removeClass('turn');

    for(let i = 0; i < 4; i++){
      for(let j = 0; j < 10; j++){
        let item = '#lantern' + i + '-' + j;
        let itemContent = '#content' + i + '-' + j;
        let word = words[Math.floor(Math.random() * words.length)];

        await delay(800);
        $(item).addClass('turn');
        $(itemContent).addClass('turn');

        await delay(500);
        $(itemContent).html(word);
      }
    }
  }

  async function delay(delayInms) {
    return new Promise(resolve  => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }
});
