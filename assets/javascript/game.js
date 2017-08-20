//Stop being a lazy ass and make everything an object. It'll be easier in the longyyy

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

    kvothe.enemy1 = denna
    kvothe.enemy2 = haliax
    kvothe.enemy3 = cinder
    denna.enemy1 = kvothe
    denna.enemy2 = haliax
    denna.enemy3 = cinder
    haliax.enemy1 = kvothe
    haliax.enemy2 = denna
    haliax.enemy3 = cinder
    cinder.enemy1 = kvothe
    cinder.enemy2 = denna
    cinder.enemy3 = haliax
    var defendingEnemy

    var kvotheId = $("#kvothe");
    var dennaId = $("#denna");
    var haliaxId = $("#haliax");
    var cinderId = $("#cinder");
    $(kvotheId).attr("src", kvothe.picture);
    $(dennaId).attr("src", denna.picture);
    $(haliaxId).attr("src", haliax.picture);
    $(cinderId).attr("src", cinder.picture);
    var kvotheTextId = $("#kvotheText");
    var dennaTextId = $("#dennaText");
    var cinderTextId = $("#cinderText");
    var haliaxTextId = $("#haliaxText");
    $(kvotheTextId).text(kvothe.name);
    $(dennaTextId).text(denna.name);
    $(cinderTextId).text(cinder.name);
    $(haliaxTextId).text(haliax.name);
    var kvotheHpId = $("#kvotheHp");
    var dennaHpId = $("#dennaHp");
    var haliaxHpId = $("#haliaxHp");
    var cinderHpId = $("#cinderHp");
    $(kvotheHpId).text(kvothe.hp);
    $(dennaHpId).text(denna.hp);
    $(cinderHpId).text(cinder.hp);
    $(haliaxHpId).text(haliax.hp);
    var cinderBlock = $("#cinderBlock")
    var kvotheBlock = $("#kvotheBlock")
    var dennaBlock = $("#dennaBlock")
    var haliaxBlock = $("#haliaxBlock")
    var cinderHTML = $(cinderBlock).html();
    var haliaxHTML = $(haliaxBlock).html();
    var kvotheHTML = $(kvotheBlock).html();
    var dennaHTML = $(dennaBlock).html();
    var attackButton = $("#attackButton");
    console.log(kvothe);
    var initialAttackPower = 0;
    var defenderHp = 0 
    $(cinderBlock).click(function(){
        $("#chosenBlock").html(cinderHTML);
        $(".greenBlock").addClass("hidden");
        $("#chosenBlock").removeClass("hidden");
        $("#enemy1").html(kvotheHTML);
        $("#enemy2").html(dennaHTML);
        $("#enemy3").html(haliaxHTML);
        $("#chosenBlock").removeClass("invisible");
        $(".enemyBlock").removeClass("invisible");
        characterChoice = cinder;
        enemyChoice1 = cinder.enemy1;
        enemyChoice2 = cinder.enemy2;
        enemyChoice3 = cinder.enemy3;
        initialAttackPower = cinder.attackPower;

    });
    $(haliaxBlock).click(function(){
        $("#chosenBlock").html(haliaxHTML);
        $(".greenBlock").addClass("hidden");
        $("#chosenBlock").removeClass("hidden");
        $("#enemy1").html(kvotheHTML);
        $("#enemy2").html(dennaHTML);
        $("#enemy3").html(cinderHTML);
        $("#chosenBlock").removeClass("invisible")
        $(".enemyBlock").removeClass("invisible");
        characterChoice = haliax;
        enemyChoice1 = haliax.enemy1;
        enemyChoice2 = haliax.enemy2;
        enemyChoice3 = haliax.enemy3;
        initialAttackPower = haliax.attackPower;
    });
    $(kvotheBlock).click(function(){
        $("#chosenBlock").html(kvotheHTML);
        $(".greenBlock").addClass("hidden");
        $("#chosenBlock").removeClass("hidden");
        $("#enemy1").html(dennaHTML);
        $("#enemy2").html(haliaxHTML);
        $("#enemy3").html(cinderHTML);
        $("#chosenBlock").removeClass("invisible")
        $(".enemyBlock").removeClass("invisible");
        characterChoice = kvothe;
        enemyChoice1 = kvothe.enemy1;
        enemyChoice2 = kvothe.enemy2;
        enemyChoice3 = kvothe.enemy3;
        initialAttackPower = kvothe.attackPower;
    });
    $(dennaBlock).click(function(){
        $("#chosenBlock").html(dennaHTML);
        $(".greenBlock").addClass("hidden");
        $("#chosenBlock").removeClass("hidden");
        $("#enemy1").html(kvotheHTML);
        $("#enemy2").html(haliaxHTML);
        $("#enemy3").html(cinderHTML);
        $("#chosenBlock").removeClass("invisible")
        $(".enemyBlock").removeClass("invisible");
        characterChoice = denna;
        enemyChoice1 = denna.enemy1;
        enemyChoice2 = denna.enemy2;
        enemyChoice3 = denna.enemy3;
        initialAttackPower = denna.attackPower;
    });
    var pickedAnEnemy = false;
        console.log(pickedAnEnemy);
        $("#enemy1").click(function(){
            if (pickedAnEnemy === false){
                console.log(pickedAnEnemy);
                $("#defenderBlock").html($("#enemy1").html());
                $("#defenderBlock").removeClass("invisible");
                $("#enemy1").addClass("hidden");
                pickedAnEnemy = true;
                defendingEnemy = enemyChoice1;
                foo = $("#defenderBlock").find(".hpText")
                foo.attr("id", "defenderHp");
            } else {
            pickedAnEnemy = true;
            console.log(pickedAnEnemy); 
        }
        pickedAnEnemy = true;
        console.log(pickedAnEnemy);
        });

        $("#enemy2").click(function(){
            if (pickedAnEnemy === false){
                $("#defenderBlock").html($("#enemy2").html());
                $("#defenderBlock").removeClass("invisible");
                $("#enemy2").addClass("hidden");
                pickedAnEnemy = true;
                console.log(pickedAnEnemy);
                defendingEnemy = enemyChoice2;
                foo = $("#defenderBlock").find(".hpText")
                foo.attr("id", "defenderHp");
        } else {
            pickedAnEnemy = true;
            console.log(pickedAnEnemy); 
        }
        pickedAnEnemy = true;
        console.log(pickedAnEnemy);
        });

        $("#enemy3").click(function(){
            if (pickedAnEnemy == false){
                $("#defenderBlock").html($("#enemy3").html());
                $("#defenderBlock").removeClass("invisible");
                $("#enemy3").addClass("hidden");
                pickedAnEnemy = true;
                console.log(pickedAnEnemy);
                defendingEnemy = enemyChoice3;
                foo = $("#defenderBlock").find(".hpText")
                foo.attr("id", "defenderHp");
                console.log($("#defenderHp").text())
        } else {
            pickedAnEnemy = true;
            console.log(pickedAnEnemy); 
        }
        pickedAnEnemy = true;
        console.log(pickedAnEnemy);
        });

        
        $("#attackButton").click(function(){
            console.log("Hi!")
            $("#defenderHp").text(defendingEnemy.hp);
            if (pickedAnEnemy === true){
            console.log(pickedAnEnemy);
            characterChoice.attackPower = characterChoice.attackPower + initialAttackPower;
            defendingEnemy.hp = defendingEnemy.hp - characterChoice.attackPower;
            if (defendingEnemy.hp <= 0){
                defendingEnemy.counterattackPower = 0;
                $("#defenderBlock").addClass("invisible");
                pickedAnEnemy = false;
            }
            characterChoice.hp = characterChoice.hp - defendingEnemy.counterattackPower;
            
            console.log(foo);
            foo = defendingEnemy.hp;
            console.log(foo);   
            console.log(characterChoice);
            console.log(defendingEnemy);
        };
    });
//the end of the $(document).ready
//because I consistently forget.
});