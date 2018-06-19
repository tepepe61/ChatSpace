$(function(){
  function buildHTML(message){
    var image = '';
    if (message.image){var image  = `<img src ="${message.image}">`; }
    var html = `<div class="chat"  data-message-id = "${message.id}">
                  <div class="chat__memmber">
                    ${message.name}
                  </div>
                  <div class="chat__memmber--time">
                    ${message.created_at}
                  </div>
                  <div class="chat__message">
                    <p class="chat__message__content">
                      ${message.content}
                    </p>
                  </div>
                  <div class="chat__message__image">
                    ${image}
                  </div>
                </div>`
                return html;
    }
  function scroll(){
    $('.body').animate({scrollTop:$('.body')[0].scrollHeight},'slow');
  }

    $('#new_message').on('submit', function(e){
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action')
      $.ajax({
        url:          url,
        type:         "post",
        data:         formData,
        dataType:     'json',
        processData:  false,
        contentType:  false,
      })
      .done(function(data){
        var html = buildHTML(data);
        if (data.length !== 0){
        $('.messages').append(html);
        $('.form__submit').prop('disabled', false);
        $('#new_message')[0].reset();
        scroll();
        }
       })
      .fail(function(){
       alert('error');
     })
    })

  setInterval(function(){
    if (location.pathname.match(/\/groups\/\d+\/messages/)){
      var message_id = $('.chat').last().data('message-id');
      $.ajax({
        url:       location.href,
        data:      { id: message_id},
        dataType:  'json',
      })
      .done(function(json){
        var inHTML = '';
        json.forEach(function(message){
        inHTML += buildHTML(message);
        });
        $('.messages').append(inHTML);
        scroll();
      })
      .fail(function(data){
        alert('自動更新失敗です');
      })
    }
  } , 5000);
});
