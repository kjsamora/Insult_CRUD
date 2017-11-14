var arrayOfInsults =[
  "Chuck!",
  "You bag of smashed assholes",
  "You doorknob!"
];

var lookAtArray = function(){
  for (i = 0; i < arrayOfInsults.length; i++) {
    console.log(arrayOfInsults[i]);
    $('#testList').append('<li>' + arrayOfInsults[i] + '</li>');
  }
}
$('#testList').append(lookAtArray());


var appendItemToList = function(eventThatCalledAddStringToList){
  var list = $('#testList');
  var item = (function() {
    var stringValue = $('#input').val();
    arrayOfInsults.push(stringValue);
    return '<li>'+ stringValue +'</li>';

  })();
  list.append(item);
};


$('#input').on('keypress', function(event){
  if (event.which === 13) {
    var eventThatIsPassedToAddStringToList = event;
    appendItemToList(event);
    console.log("Hello");
  }
});


