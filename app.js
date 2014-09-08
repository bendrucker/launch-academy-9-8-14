var messagesRef = new Firebase('https://launch-academy-chat.firebaseio.com/messages');

$(document).ready(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();
    messagesRef.push({
      username: $('#username').val(),
      message: $('#message').val()
    });
  });
  messagesRef.on('child_added', function (snapshot) {
    var message = snapshot.val();
    $('.messages').append('<li>' +
      message.username
      + ' said: '
      + message.message
      + '</li>'
    );
  });
});