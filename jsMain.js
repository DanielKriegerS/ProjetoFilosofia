$(document).ready(function(){    
    var verify = false;
    var i;
    
    $("table.tab1").css("display","none");
    $("table.tab2").css("display","none");
    $("table.tab3").css("display","none"); 
    $("table.tab4").css("display","none");   

    $(".but2").click(function(){
    switch (i){
    case 0: 
        $("table.tab2").css("display","none");
        $("table.tab3").css("display","none");
        $("table.tab4").css("display","none");
        $("table.tab1").fadeIn(1500);
        i = 1;   
        break;
    case 1:    
        $("table.tab4").css("display","none");
        $("table.tab3").css("display","none");
        $("table.tab1").css("display","none");
        $("table.tab2").fadeIn(1500);
        i = 2;
        break;
    case 2:
        $("table.tab2").css("display","none");
        $("table.tab1").css("display","none");
        $("table.tab4").css("display","none");
        $("table.tab3").fadeIn(1500);
        i = 3;
        break;
    case 3:
        $("table.tab1").css("display","none");
        $("table.tab2").css("display","none");
        $("table.tab3").css("display","none");
        $("table.tab4").fadeIn(1500);
        i = 0;
        break;
    default:
        i=0;
    }   
})

$(".but1").click(function(){
    switch (i){
        case 0: 
            $("table.tab2").css("display","none");
            $("table.tab3").css("display","none");
            $("table.tab1").css("display","none");
            $("table.tab4").fadeIn(1500);
            i = 3;
            break;   
        case 1:    
            $("table.tab3").css("display","none");
            $("table.tab2").css("display","none");
            $("table.tab4").css("display","none");
            $("table.tab1").fadeIn(1500);
            i = 0;
            break;
        case 2:
            $("table.tab3").css("display","none");
            $("table.tab1").css("display","none");
            $("table.tab4").css("display","none");
            $("table.tab2").fadeIn(1500);
            i = 1;
            break;
        case 3:
            $("table.tab4").css("display","none");
            $("table.tab2").css("display","none");
            $("table.tab1").css("display","none");
            $("table.tab3").fadeIn(1500);
            i = 2;
            break;
        default:
            i=0;    
        }   
})

 
 $("nav.MenuTotal").css("display","none")
     $(".menu").click(function(){
        if(verify == false){
     $(".MenuTotal").slideDown(750);
   
     verify = true;
        } else { 
            $(".MenuTotal").slideUp(750);
    verify = false;
        }
            });
    })
