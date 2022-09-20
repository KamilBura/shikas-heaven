$(document).ready(function(){
   $('.SH-leftside').viewportChecker({
       classToAdd: 'leftside-ann',
       offset: 50,
       repeat: false,
       callbackFunction: function(elem, action){}
   });
});

$(document).ready(function(){
    $('.SH-rightside').viewportChecker({
        classToAdd: 'rightside-ann',
        offset: 50,
        repeat: false,
        callbackFunction: function(elem, action){}
    });
 });

