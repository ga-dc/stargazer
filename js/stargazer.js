function callback (json) {
  if(json.image === undefined){
    $('#preview').html("<p>There ain't no star with that name!</p>");
  } else {
    $('#preview').html('<img src="' + json.image.src + '">');
  }
};
function search(name) {
  var api = 'http://www.strudel.org.uk/lookUP/json/?name='+name;
  // requires "jsonp" datatype.

  $.ajax({
    url: api,
    dataType: 'jsonp',
    jsonpCallback: 'callback',
  })
  .done(function(data){
    console.log('data');
  })
  .fail(function(){
    console.log('error');
  })
}



$('#search').on('submit', function(e){
  e.preventDefault();
  var value = $('#search-name').val();
  search(value);
  $('#search-name').val('');
})
