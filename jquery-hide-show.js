$(document).ready(function(){


   // loading expand paragraphs
   if ( $('.expandmore').length  &&  $( ".to_expand" ).length ) { // if there are at least one :)
      $('.expandmore' ).each( function(index_to_expand) {
          var $this = $(this) ,
              index_lisible = index_to_expand+1,
              $to_expand = $this.next(".to_expand"),
              $expandmore_text = $this.html();
          
          $this.html( '<button class="expandmore__button">' + $expandmore_text + '</button>' );
          $button = $this.children('.expandmore__button');
          
          $button.attr({
                  'id' : 'label_expand_' + index_lisible,
                  'aria-controls': 'expand_' + index_lisible,
                  'aria-expanded': 'false'
                });
          $to_expand.attr({
                  'id' : 'expand_' + index_lisible,
                  'aria-hidden': 'true',
                  'aria-labelledby': 'label_expand_' + index_lisible
                });
          // quick tip to open
          if ($to_expand.hasClass('is-opened') ){
             $button.addClass('is-opened').attr('aria-expanded', 'true');
             $to_expand.removeClass('is-opened').removeAttr('aria-hidden');
          }

      });
       
       
      $( 'body' ).on( 'click', '.expandmore__button', function( event ) {
         var $this = $(this),
             $destination = $( '#' + $this.attr('aria-controls') );
         
         if ($this.attr('aria-expanded') === 'false') {
             $this.addClass('is-opened').attr('aria-expanded', 'true');
             $destination.removeAttr('aria-hidden');
         } 
         else {
              $this.removeClass('is-opened').attr('aria-expanded', 'false');
              $destination.attr('aria-hidden', 'true');
              }
         
         event.preventDefault();
         
      })
      .on( "keydown", ".expandmore__button", function( event ) {
         if ( event.keyCode == 13 || event.keyCode == 32 ) { // enter or space
             var $this = $(this),
                 $destination = $( '#' + $this.attr('aria-controls') );
             
             if ($this.attr('aria-expanded') === 'false') {
                 $this.addClass('is-opened').attr('aria-expanded', 'true');
                 $destination.removeAttr('aria-hidden');
             } 
             else {
                  $this.removeClass('is-opened').attr('aria-expanded', 'false');
                  $destination.attr('aria-hidden', 'true');
                  }
             
             event.preventDefault();
         }
      } );
       

   
   }
 
  
});
