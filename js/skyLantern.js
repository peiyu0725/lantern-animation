$(document).ready(function(){
  var words = ['元宵節快樂','平平安安','健健康康','賺大錢','平安喜樂'];
  var left = ['0','10vw','20vw','30vw','40vw','50vw','60vw','70vw','80vw','90vw','100vw'];
  var storeId = [];
  var createId = [];

  fly();
  window.setInterval(fly,30000);

  async function fly(){
    if(storeId.length !== 0){
      for(let i = 0; i < 10; i++){
        let item = '#skylantern' + storeId[i];
        $(item).remove();
      }
    }

    storeId = [];

    if(createId.length !== 0){
      for(let i = 0; i < 10; i++){
        storeId.push(createId[i]);
      }
    }

    createId = [];

    for(let i = 0; i < 10; i++){
      let id = getRandom(0,9000)+i;
      let word = words[Math.floor(Math.random() * words.length)];
      createId.push(id);

      $('#skylantern-wall').append(
        $('<div/>')
        .addClass('skylantern-box')
        .attr('id','skylantern' + id)
        .css('left',left[i])
        .append(
          $('<div/>')
          .addClass('skylantern-content')
          .attr('id','skycontent' + id)
          .html(word)
        )
      )
    }

    await delay(500);

    for(let j = 0; j < 10; j++){
      await delay(500);
      let item = '#skylantern' + createId[j];
      let position = getRandom(-150,150);
      let speed = getRandom(50,60);
      
      $(item).addClass('fly');
      $(item).css('transition', 'all '+ speed + 's ease-in-out');
      $(item).css('transform', 'translate3d(' + position + 'px,-100vh,200px)');
    }
  }

  function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
  }

  async function delay(delayInms) {
    return new Promise(resolve  => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }
});
