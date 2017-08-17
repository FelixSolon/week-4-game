$(document).ready(function() {
    var kvothe = {
        hp : 120
        , attackPower : 8
        , counterattackPower : 20
        , picture : "assets/images/kvothe.jpg"
        , name : "Kvothe"
    }
    
    var denna = {
        hp : 120
        , attackPower : 10
        , counterattackPower : 5
        , picture : "assets/images/denna.jpg"
        , name : "Denna"
    }

    var haliax = {
        hp : 180
        , attackPower : 15
        , counterattackPower : 25
        , picture : "assets/images/haliax.jpeg"
        , name : "Haliax"
    }

    var cinder = {
        hp : 150
        , attackPower : 12
        , counterattackPower: 20
        , picture : "assets/images/cinder.jpg"
        , name : "Cinder"
    }



    $("#kvothe").attr("src", kvothe.picture);

    $("#denna").attr("src", denna.picture);

    $("#haliax").attr("src", haliax.picture);

    $("#cinder").attr("src", cinder.picture);

    $("#kvotheText").text(kvothe.name);

    $("#dennaText").text(denna.name);

    $("#cinderText").text(cinder.name);

    $("#haliaxText").text(haliax.name);


    $("#cinderBlock").click(function(){
        cinderHTML = $("#cinderBlock").html();
        $("#chosenBlock").html(cinderHTML);
        $(".imageBlock").addClass("invisible");
        $("#chosenBlock").removeClass("invisible");
    });


//the end of the $(document).ready
});