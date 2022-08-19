// main-product displaying

$("#first").click(function(){
    $("#main-product").attr("src","./images/image-product-1.jpg");
//     $("#first").css("border","solid 2px rgb(255, 125, 26")
 })
$("#second").click(function(){
    $("#main-product").attr("src","./images/image-product-2.jpg");
  }); 
$("#third").click(function(){
    $("#main-product").attr("src","./images/image-product-3.jpg")
    
})
$("#fourth").click(function(){
    $("#main-product").attr("src","./images/image-product-4.jpg")
})


// add and sub No.of items 

$(".plus").click(function(){     
    $(".number").val(Number($(".number").val())+1);
});
   
$(".minus").click(function(){
    if($(".number").val()>0)
    $(".number").val(Number($(".number").val())-1);     
});



// inside cart 

$(".trail").on("click",function(){
    $(".btn-cart").on("click",function(){
        if ($(".number").val()==0){
            $("#totalPurchase").css("display","block")
        }
        else if ($(".number").val()>0){
            $("#row-cart").css("display","block")
        }
    })
    if ($(".number").val()==0){
        $("#totalPurchase").css("display","block")
    }
    else if ($(".number").val()>0){
        $("#totalPurchase").css("display","block")
    }
    $(".delete").on("click",function(){
        $("#row-cart").remove()
        $("#totalPurchase").css("display","block")
        $(".number").html("value","0")
    })    
    $("#div1").toggle();
})


// $(".delete").on("click",function(){
//     $("#totalPurchase").css("display","block")
//     $(".number").text("0")
// })


// displaying cart 



var x = $(".number").val()
var y = x*125;
if (x>0){
    $(".num6").text(x)
}

$(".check-box").on("click",function(){
    $(this).css("background-color","hsl(26, 100%, 55%)")
    $(this).css("border","none")
    $(this).css("color","#fff")
})


// border displaying

// function borderDisplay(){
//     let displayBorder = $("#main-product")
//     if ()

// }
