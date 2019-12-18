import jquery from "jquery";
// import {} from 'jquery-ujs'

jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    
    $('.level-bar-inner').css('width', '0');
    
    var element_position = $('#my-skills').offset().top;

    var screen_height = $(window).height();
    var activation_offset = 0.5;//determines how far up the the page the element needs to be before triggering the function
    var activation_point = element_position - (screen_height * activation_offset);
    var max_scroll_height = $('body').height() - screen_height - 5;//-5 for a little bit of buffer
    $(window).on('scroll', function() {

        $('.level-bar-inner').each(function() {
        
            var y_scroll_pos = window.pageYOffset;
            var element_in_view = y_scroll_pos > activation_point;
            var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;

               if(element_in_view || has_reached_bottom_of_page) {
                   var itemWidth = $(this).data('level');
                   
                   $(this).animate({
                       width: itemWidth
                   }, 800);
               }

          
            
        });

    });
   
    

});
