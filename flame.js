$("#calc").click(function(){



    var str1 = $("#partner1").val().trim();
    var str2 = $("#partner2").val().trim();

    

    var button = '<button type="button" class="btn btn-dark" id="close" style="float: right;"><STRONG>X</STRONG></button>';
    


    if(str1.length == 0){
      
     $("#status").html(button+"Don't be shy! Please write your name.");
     $("#status").show();


     

    }else if(str2.length == 0){
      $("#status").html(button+"Nobody is that boring... Please write your partner's name");
     $(".alert").show();
    }else{

     

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    var len1 = str1.length;
    var len2 = str2.length;

    
    var str3 = str2;
    var str4 = str1;

    for(var i=0 ; i<len1 ; i++){

      var re = new RegExp(str1[i],"g");
      str2 = str2.replace(re,"");
      
    }

    for(var i=0 ; i<len2 ; i++){

      var re = new RegExp(str3[i],"g");
      str1 = str1.replace(re,"");
      
    }

    var co = (str1.length + str2.length)%6 ;

    var clause = "<p style='font-size:35px'><strong>"+str4.toUpperCase()+"</strong><br><small>and</small></p><p style='font-size:35px'><strong>"+str3.toUpperCase()+"</strong></p>"

    if(co==1){
     
     var path = "are : <br><img src='friend.gif'><br> <span style='font-size:40px;'>FRIENDS</span> <br>"

     var html = button +clause + path ;

     $("#status").html(html);

     $(".alert").show();


    }else if(co==2){

      var path = "are : <br><img src='love.gif'><br> <span style='font-size:40px;'>LOVERS</span> <br>"

     var html = button + clause + path ;

     $("#status").html(html);

     $(".alert").show();



    }else if(co==3){

      var path = "are : <br><img src='affectionate.gif'><br> <span style='font-size:40px;'>AFFECTIONATE</span> <br>"

     var html = button + clause + path ;

     $("#status").html(html);

     $(".alert").show();

    }else if(co==4){

      var path = "can : <br><img src='marriage.gif'><br> <span style='font-size:40px;'>MARRY</span><br>"

     var html = button + clause + path ;

     $("#status").html(html);

     $(".alert").show();

    }else if(co==5){

      var path = "are : <br><img src='enemy.gif'><br> <span style='font-size:40px;'>ENEMIES</span> <br>"

     var html = button + clause + path ;

     $("#status").html(html);

     $(".alert").show();

    }else{

      var path = "are like : <br><img src='sister.gif'><br> <span style='font-size:40px;'>SIBLINGS</span><br>"

     var html = button + clause + path ;

     $("#status").html(html);

     $(".alert").show();

    }
    
}
 
 $("#close").click(function(){
    $("#status").css("display","none");
  })   

  })