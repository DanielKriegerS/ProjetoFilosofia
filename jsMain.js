$(document).ready(function(){    
    var verifyB = true;
    var verify = false;
    var verifyT = false;
    $(".but1").click(function(){
    if(verifyB == true){
    $("table").fadeIn(1500);
    verifyB = false;
    } else {
        $("table").fadeOut(1500);
        verifyB = true;
    }
})

 
 $("ol").css("display","none")
     $(".menu").click(function(){
        if(verify == false){
     $(".itemMenu").slideDown(750);
     $(".ItemFils").slideDown(750);
     verify = true;
        } else { 
    $(".itemMenu").slideUp(750);
    $(".ItemFils").slideUp(750);
    verify = false;
        }
            });

$(".telefones").click(function(){
    if(verifyT == false){
$(".itemTel").slideDown(750);
    verifyT = true;
    } else { 
$(".itemTel").slideUp(750);
    verifyT = false;
    }
        });   
    }) 
