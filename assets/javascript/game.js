//Stop being a lazy ass and make everything an object. It'll be easier in the longyyy

//This is a horribly coded piece of junk that takes forever to load. So it's going to wait until everything is done before trying anything.
$(document).ready(function() {
    //Threw all the characters into objects, because it's slightly less ugly than a zillion variables named kvotheHp, kvotheAttackPower, etc.
    var kvothe = {
        hp : 120
        , attackPower : 8
        , counterattackPower : 15
        , picture : "assets/images/kvothe.jpg"
        , name : "Kvothe"
    };
    
    var denna = {
        hp : 125
        , attackPower : 13
        , counterattackPower : 5
        , picture : "assets/images/denna.jpg"
        , name : "Denna"
    };

    var haliax = {
        hp : 180
        , attackPower : 4
        , counterattackPower : 25
        , picture : "assets/images/haliax.jpeg"
        , name : "Haliax"
    };

    var cinder = {
        hp : 150
        , attackPower : 7
        , counterattackPower: 20
        , picture : "assets/images/cinder.jpg"
        , name : "Cinder"
    };

//declared everyone to hate each other, now that they all exist to know what they hate.
    kvothe.enemy1 = denna;
    kvothe.enemy2 = haliax;
    kvothe.enemy3 = cinder;
    denna.enemy1 = kvothe;
    denna.enemy2 = haliax;
    denna.enemy3 = cinder;
    haliax.enemy1 = kvothe;
    haliax.enemy2 = denna;
    haliax.enemy3 = cinder;
    cinder.enemy1 = kvothe;
    cinder.enemy2 = denna;
    cinder.enemy3 = haliax;
    //declare your variables, kids, even if they're empty.
    var defendingEnemy;

    //because supposedly this is faster than telling everything to find the ID every time the code runs, everything gets a variable!
    var kvotheId = $("#kvothe");
    var dennaId = $("#denna");
    var haliaxId = $("#haliax");
    var cinderId = $("#cinder");
    //I'm loading the pictures from javaScript at the start rather than throwing them in the HTML mostly just to prove that I can do it.
    //But let's pretend I did it because it makes it easier to modify the characters later if I want to change something
    $(kvotheId).attr("src", kvothe.picture);
    $(dennaId).attr("src", denna.picture);
    $(haliaxId).attr("src", haliax.picture);
    $(cinderId).attr("src", cinder.picture);
    //Yaaaay saving processor cycles/bandwidth!
    var kvotheTextId = $("#kvotheText");
    var dennaTextId = $("#dennaText");
    var cinderTextId = $("#cinderText");
    var haliaxTextId = $("#haliaxText");
    //Again, mostly just because I can.
    $(kvotheTextId).text(kvothe.name);
    $(dennaTextId).text(denna.name);
    $(cinderTextId).text(cinder.name);
    $(haliaxTextId).text(haliax.name);
    //I'm running out of clever things to say.
    var kvotheHpId = $("#kvotheHp");
    var dennaHpId = $("#dennaHp");
    var haliaxHpId = $("#haliaxHp");
    var cinderHpId = $("#cinderHp");
    //comment to come later.
    $(kvotheHpId).text(kvothe.hp);
    $(dennaHpId).text(denna.hp);
    $(cinderHpId).text(cinder.hp);
    $(haliaxHpId).text(haliax.hp);
    var cinderBlock = $("#cinderBlock")
    var kvotheBlock = $("#kvotheBlock")
    var dennaBlock = $("#dennaBlock")
    var haliaxBlock = $("#haliaxBlock")
    //I thought this was at least kinda clever.
    var cinderHTML = $(cinderBlock).html();
    var haliaxHTML = $(haliaxBlock).html();
    var kvotheHTML = $(kvotheBlock).html();
    var dennaHTML = $(dennaBlock).html();
    var attackButton = $("#attackButton");
    console.log(kvothe);
    var initialAttackPower = 0;
    var defenderHp = 0 ;
    //reducing jQuery...queries, I guess. Not sure of the technical term.
    var chosenBlock = $("#chosenBlock");
    var greenBlock = $(".greenBlock");
    var enemy = {
        a : $("#enemy1")
        , b : $("#enemy2")
        , c : $("#enemy3")
        , Block : $(".enemyBlock")
    };
    var defenderBlock = $("#defenderBlock");
    var defenderHp = $("#defenderHp");
    var attackerHp = $("#attackerHp");
    //If you look back through the github, this used to be a block of code in each of the following functions.
    //I still need to refactor the various nameHTML things
    //But it seems like that would be painful
    //So I haven't yet.
    function blockClick(name){
        $(greenBlock).addClass("hidden");
        $(chosenBlock).removeClass("hidden");
        $(chosenBlock).removeClass("invisible")
        $(enemy.Block).removeClass("invisible");
        characterChoice = name;
        //this is "bar" because I used "foo" first to mess with defender hp
        bar = $(chosenBlock).find(".hpText")
        bar.attr("id", "attackerHp");
        enemyChoice1 = name.enemy1;
        enemyChoice2 = name.enemy2;
        enemyChoice3 = name.enemy3;
        initialAttackPower = name.attackPower;
    }
    $(cinderBlock).click(function(){
        $(chosenBlock).html(cinderHTML);
        blockClick(cinder);
        $(enemy.a).html(kvotheHTML);
        $(enemy.b).html(dennaHTML);
        $(enemy.c).html(haliaxHTML);

    });
    $(haliaxBlock).click(function(){
        $(chosenBlock).html(haliaxHTML);
        blockClick(haliax);
        $(enemy.a).html(kvotheHTML);
        $(enemy.b).html(dennaHTML);
        $(enemy.c).html(cinderHTML);
    });
    $(kvotheBlock).click(function(){
        $(chosenBlock).html(kvotheHTML);
        blockClick(kvothe);
        $(enemy.a).html(dennaHTML);
        $(enemy.b).html(haliaxHTML);
        $(enemy.c).html(cinderHTML);
    });
    $(dennaBlock).click(function(){
        $(chosenBlock).html(dennaHTML);
        blockClick(denna);
        $(enemy.a).html(kvotheHTML);
        $(enemy.b).html(haliaxHTML);
        $(enemy.c).html(cinderHTML);

    });
    var pickedAnEnemy = false;
        console.log(pickedAnEnemy);
        $(enemy.a).click(function(){
            if (pickedAnEnemy === false){
                console.log(pickedAnEnemy);
                $("#defenderBlock").html($("#enemy1").html());
                $("#defenderBlock").removeClass("invisible");
                $(enemy.a).addClass("hidden");
                pickedAnEnemy = true;
                defendingEnemy = enemyChoice1;
                //look, I'm not sure this bit is necessary, but it's *working*.
                foo = $("#defenderBlock").find(".hpText")
                foo.attr("id", "defenderHp");
            } else {
            pickedAnEnemy = true;
            console.log(pickedAnEnemy); 
        }
        pickedAnEnemy = true;
        console.log(pickedAnEnemy);
        });

        $(enemy.b).click(function(){
            if (pickedAnEnemy === false){
                $(defenderBlock).html($("#enemy2").html());
                $(defenderBlock).removeClass("invisible");
                $(enemy.b).addClass("hidden");
                pickedAnEnemy = true;
                console.log(pickedAnEnemy);
                defendingEnemy = enemyChoice2;
                foo = $(defenderBlock).find(".hpText")
                foo.attr("id", "defenderHp");
        } else {
            pickedAnEnemy = true;
            console.log(pickedAnEnemy); 
        }
        pickedAnEnemy = true;
        console.log(pickedAnEnemy);
        });

        $(enemy.c).click(function(){
            if (pickedAnEnemy == false){
                $(defenderBlock).html($("#enemy3").html());
                $(defenderBlock).removeClass("invisible");
                $(enemy.c).addClass("hidden");
                pickedAnEnemy = true;
                console.log(pickedAnEnemy);
                defendingEnemy = enemyChoice3;
                //I've tried to make the following foo = $(defenderBlock) but it seems to break it.
                foo = $("#defenderBlock").find(".hpText")
                foo.attr("id", "defenderHp");
        } else {
            pickedAnEnemy = true;
            console.log(pickedAnEnemy); 
        }
        pickedAnEnemy = true;
        console.log(pickedAnEnemy);
        });

        
        $(attackButton).click(function(){
            if (pickedAnEnemy === true){
            console.log(pickedAnEnemy);
            characterChoice.attackPower = characterChoice.attackPower + initialAttackPower;
            defendingEnemy.hp = defendingEnemy.hp - characterChoice.attackPower;
            //I'm not totally sure if I'm supposed to let the enemy character counterattack before dying.
            //If so, and a draw is possible, move this next if-block to below 228, and combine this with the next if statement
            //so if(defendingEnemy.hp <= 0 && characterChoice.hp <= 0){
                //alert("It was a draw! But you still died.") //or something like that anyhow
                //then throw the other two into else if statements rather than straight if statements.
            //}
            if (defendingEnemy.hp <= 0){
                defendingEnemy.counterattackPower = 0;
                $(defenderBlock).addClass("invisible");
                pickedAnEnemy = false;
            }
            characterChoice.hp = characterChoice.hp - defendingEnemy.counterattackPower;
            if (characterChoice.hp <= 0) {
                alert("You lose!");
                //look, this happens once. I don't care enough to refactor this and make "row" into a variable.
                //With my luck, something screwy would happen.
                $(".row").addClass("hidden");
            }
            $("#defenderHp").text(defendingEnemy.hp);
            $("#attackerHp").text(characterChoice.hp);
            foo = defendingEnemy.hp;
        };
    });
//the end of the $(document).ready
//because I consistently forget.
});