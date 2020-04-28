$(document).ready(function(){
   
    let app = $(".app");
    let design = $(".design");


    $("#app").on("click",function(){
        design.hide("slow");
        app.show("show");
    });

    $("#design").on("click", function () {
        app.hide("slow");
        design.show("slow")
    });

    $("#all").on("click", function () {
        app.show("slow");
        design.show("slow");
    });
})