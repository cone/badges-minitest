$(document).ready(function(){
  $('#badges_info').click(function(){
    if($('#mockup_banner').hasClass('profile_banner')){
      $('#mockup_banner').removeClass('profile_banner').addClass('badges_banner');
      $('#mockup_banner #main_caption h3').text('Badges');
      $.getJSON(
        'badges/show',
        function(info){
          var content="";
          for(var key in info){
            for(var badge in info[key]){
             content+='<div class="'+info[key][badge]+'">'+info[key][badge]+'</div>';
            }
          }
          $('#badges_container').html(content);
        });
    }
  });
  $('#profile_info').click(function(){
    if($('#mockup_banner').hasClass('badges_banner')){
      $('#mockup_banner').removeClass('badges_banner').addClass('profile_banner');
      $('#mockup_banner #main_caption h3').text('Carlos Gutierrez');
    }
    
  });
});
