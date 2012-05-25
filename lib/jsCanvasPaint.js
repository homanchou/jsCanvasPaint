(function($){
  
  var element; 
  var offset;
  var brush;

  $.fn.jsCanvasPaint = function(options){
      
       //options override defaults
       $.jsCanvasPaint.opts = $.extend({}, $.jsCanvasPaint.defaults, options);       
              
       element = this; 
             
       offset = element.offset();
       
       //event listeners
       $.jsCanvasPaint.registerEvents();
       return element;

  }; //end fn.jsCanvasPaint function


    //overridable static functions 
  $.jsCanvasPaint = {
    
    defaults : {
       width: 600,
       height: 600,
    },

    opts: {},

    registerEvents: function() {
    }
  }
   
})(jQuery);


