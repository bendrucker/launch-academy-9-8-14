var messagesRef = new Firebase('https://launch-academy-chat.firebaseio.com/messages');

$(document).ready(function () {
  var usernameField = $('#username');
  var messageField = $('#message');
  function cleanupForm () {
    [usernameField, messageField]
      .forEach(function (field) {
        field.val('');
      });
  }

  $('form').on('submit', function (event) {
    event.preventDefault();
    messagesRef.push({
      username: usernameField.val(),
      message: messageField.val()
    });
    cleanupForm();
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