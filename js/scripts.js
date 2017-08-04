$(document).ready(function(){
    $("#mycarousel").carousel({interval: 500});
    $("#carousel-btn").click(function(){
        if($("#carousel-btn").children("span").hasClass("fa-pause")){
            $("#mycarousel").carousel('pause');
            $("#carousel-btn").children("span").removeClass("fa-pause");
            $("#carousel-btn").children("span").addClass("fa-play");
        }
        else{
            $("#mycarousel").carousel('cycle');
            $("#carousel-btn").children("span").removeClass("fa-play");
            $("#carousel-btn").children("span").addClass("fa-pause");
        }
    });
});