$("#showLinks1").on("click",function (){
    var thisCardLinkShow = "." + this.id + "-grid";
        $(thisCardLinkShow).show(300);
        $(".blur").fadeIn(400);
        $(thisCardLinkShow).addClass("rel-card");
        $("#Card1").addClass("wrap-rel");
});
$("#hideLinks1").on("click", function (){
    var thisCardLinkShow = "." + this.id + "-grid";
        $(thisCardLinkShow).hide(400);
        $(".blur").fadeOut(300);
        $("#Card1").removeClass("wrap-rel");
});
$(".blur").on("click", function  () {
        $(".blur").fadeOut(300);
        $("#Card1").removeClass("wrap-rel");
        $(".hideLinks1-grid").hide(400);
});