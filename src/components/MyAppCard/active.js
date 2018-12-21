
$(document).ready(function(){
  
    // ===================================================
    // VARS
    // ===================================================
    var DEBUG = false;
    var CURR_DEBUG = true;
  
    // ---------------------------------------------------
    // Array ofproject objects
    // ---------------------------------------------------
    var projects = [{
        name : "MealGenie",
        contrib : "Group Project",
        // shortDesc : "Food and Drink Paring App",
        shortDesc : "Food / Drink Paring",
        techs : ["html5", "css", "JavaScript", "jQuery", "bootstrap", "Firebase"],
        repoURL : "https://github.com/mjfullstack/CodeMonkeysMealGenie",
        deployedURL : "https://mjfullstack.github.io/CodeMonkeysMealGenie/",
        appImage : "assets/images/MealGenie.png"
    },
    {
        name : "Train Schedule App",
        contrib : "Sole Contributor HW",
        shortDesc : "Firebases Project",
        techs : ["html5", "css", "JavaScript", "jQuery", "Firebase"],
        repoURL : "https://github.com/mjfullstack/TrainSched",
        deployedURL : "https://mjfullstack.github.io/TrainSched/",
        appImage : "assets/images/AllAboardTrainApp.png"
    },
    {
        name : "Snow White Hangman",
        contrib : "Sole Contributor HW",
        shortDesc : "Beginning Javascript",
        techs : ["html5", "css", "JavaScript"],
        repoURL : "https://github.com/mjfullstack/Word-Guess-Game",
        deployedURL : "https://github.com/mjfullstack/Word-Guess-Game/",
        appImage : "assets/images/HangADwarf.png"
    },
    {
        name : "GifTastic App",
        contrib : "Sole Contributor HW",
        shortDesc : "API Data Retrieval",
        techs : ["html5", "css", "JavaScript", "jQuery", "modals"],
        repoURL : "https://github.com/mjfullstack/GifTastic",
        deployedURL : "https://mjfullstack.github.io/GifTastic/",
        appImage : "assets/images/GifTastic.png"
    },
    {
        name : "Star Wars RPG Game",
        contrib : "Sole Contributor HW",
        shortDesc : "jQuery Role Playing",
        techs : ["html5", "css", "JavaScript", "jQuery"],
        repoURL : "https://github.com/mjfullstack/Unit-4-Game",
        deployedURL : "https://mjfullstack.github.io/Unit-4-Game/",
        appImage : "assets/images/StarWarsRPG.png"
    },
    {
        name : "Sugar Rush!",
        contrib : "Sole Contributor HW",
        shortDesc : "Javascript Project",
        techs : ["html5", "css", "JavaScript", "moment.js"],
        repoURL : "https://github.com/mjfullstack/TriviaGame",
        deployedURL : "https://mjfullstack.github.io/TriviaGame/",
        appImage : "assets/images/SugarRush.png"
    },
    {
        name : "Portfolio Website",
        contrib : "Sole Contributor HW",
        shortDesc : "Bootstrap Project",
        techs : ["html5", "css", "JavaScript", "bootstrap"],
        repoURL : "https://github.com/mjfullstack/Bootstrap-Portfolio",
        deployedURL : "https://mjfullstack.github.io/Bootstrap-Portfolio/",
        appImage : "assets/images/Portfolio.png"
    },
    {
        name : "Friend Finder",
        contrib : "Sole Contributor HW",
        shortDesc : "Connect Front & Back",
        techs : ["html5", "bootstrap", "JavaScript", "jQuery", "node.js", "express", "package.json", "npm"],
        repoURL : "https://github.com/mjfullstack/FriendFinder",
        deployedURL : "https://limitless-reaches-17156.herokuapp.com/",
        appImage : "assets/images/FriendFinder.png"
    },
    {
        name : "Eat-Da-Burger",
        contrib : "Sole Contributor HW",
        shortDesc : "First Fullstack App",
        techs : ["html5", "bootstrap", "JavaScript", "jQuery", "node.js", "express", "package.json", "npm", "MySQL", "Heroku"],
        repoURL : "https://github.com/mjfullstack/BurgerRemoteDB",
        deployedURL : "https://ancient-thicket-75290.herokuapp.com/",
        appImage : "assets/images/Eat-Da-Burger.png"
    }

  ];

// ===================================================
// Functions
// ===================================================
// ---------------------------------------------------
// showPortfolioJQuery
// ---------------------------------------------------
var showPortfolioJQuery = function (item) { // (destCol, itemTitleNum, itemTitleStr, itemURL, imageHTML, catIDin, regIDin) {
    var appName = item.name;
    var appRepo = item.repoURL;
    var appDeploy = item.deployedURL;
    var appTechs = item.techs;
    var appDesc = item.shortDesc;
    var appWho = item.contrib;
    var appItemURL = item.appImage;
    var appImageHTML = "<img src=" + appItemURL + " alt='App Pic' class='app-image'>";
    var destCol = "portfolio-items";

    var screenCard = $("<div class='col-sm-3'>")
    .addClass("card")
    .addClass("card-title")
    // .attr("width", "8rem");
    var screenCardTitle =$("<div>");
    var screenCardBody = $("<div>")
    .attr("class", "card-body");
    var addAppAttrs = $("<a>")
    .addClass("btn btn-warning btn-sm sel-app-btn")
    .attr("href", "#")
    .attr("role", "button")
    .attr("data-appName", appName)
    .attr("data-appRepo", appRepo)
    .attr("data-appDeploy", appDeploy)
    .attr("data-appTechs", appTechs)
    .attr("data-appDesc", appDesc)
    .attr("data-appWho", appWho)
    .attr("data-app-item-url", appItemURL)
    .html(appImageHTML)
    .text("Check It Out..."); // Select

    // <a href="#" class="modal-trigger" data-modal="modal-name">Modal open!</a> <!-- Trigger Modal. -->
    // <!-- Modal -->
    // var appModal = $("<div>")
    //     .addClass("modal")
    //     .attr("id", "modal-name")
    //     .html('<div class="modal-sandbox"></div>')
    //     .html('<div class="modal-box">')
    //     .html('<div class="modal-header">')
    //     .html('<div class="close-modal">&#10006;</div>')
    //     .html('<h1>Simple modal box</h1>')
    //     .html('<div class="modal-body">')
    //     .html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic soluta saepe, atque, iure quidem maiores non dolores, fuga eaque voluptatibus corporis accusantium quas. Eligendi velit eum fugiat eius? Distinctio reiciendis sint error, repellat ut soluta doloremque, accusamus vitae placeat?</p>')
    //     .html(appImageHTML)
    //     .html('<p>Laboriosam voluptas, iure rem provident laborum culpa atque fugit inventore sit. Corrupti dolore architecto inventore officia, odit totam voluptatem laboriosam tempore reiciendis, et neque, consequuntur. Non, tenetur? Tempore reprehenderit tenetur nemo asperiores alias commodi assumenda architecto minima numquam repellendus debitis nulla, rerum officia itaque, sunt nihil sequi quod perspiciatis, animi quas voluptates velit aperiam voluptatem.</p>')
    //     .html('<br />')
    //     .html('<button class="close-modal">Close!</button>');

    // Title
    var appRepoText = "<p id='repo-link'>Repo: <a href='" + appRepo + "'>" + appDesc + "</a></p>";
    var appDeployText = "<p id='app-link'>App: <a href='" + appDeploy + "'>" + appName + "</a></p>";
    // .html('<a href="#" class="modal-trigger" data-modal="modal-name"></a>'); // <!-- Trigger Modal. -->
    
    // Item URL
    if( CURR_DEBUG ) {
    console.log ("********************");
    console.log ("appName = " + appName);
    console.log ("appRepo = " + appRepo);
    console.log ("appDeploy = " + appDeploy);
    console.log ("appTechs = " + appTechs);
    console.log ("appDesc = " + appDesc);
    console.log ("appWho = " + appWho);
    console.log ("appRepoText = " + appRepoText);
    console.log ("appDeployText = " + appDeployText);
    console.log ("appImageHTML = " + appImageHTML); // NEED APP IMAGES!!!
    // console.log ("appModal = " , appModal);   // NEED MODAL...
    // console.log (appModal);   // NEED MODAL...
    console.log ("********************");
    };

    // APPEND TITLE
    screenCardTitle.html(appDeployText);
    screenCard.append(screenCardTitle);

    // APPEND SELECT BUTTON FOR THIS APP
    screenCard.append(addAppAttrs);

    // APPEND IMAGE  
    // screenCardBody.append(appModal);
    screenCardBody.html(appImageHTML);
    screenCardBody.html(appRepoText);
    screenCard.append(screenCardBody);

    console.log("=========================================")
    console.log(screenCard)
    console.log("=========================================")
    // APPEND CARD TO PAGE
    $("#" + destCol).append(screenCard);
    };


    // ---------------------------------------------------
    // addModalFunc
    // ---------------------------------------------------
    var addModalFunc = function( dispObj, index ) {
        var appBtnName  = $(dispObj).attr("data-appName");
        var appBtnRepo  = $(dispObj).attr("data-appRepo");
        var appBtnDeploy  = $(dispObj).attr("data-appDeploy");
        var appBtnTechs  = $(dispObj).attr("data-appTechs");
        var appBtnDesc  = $(dispObj).attr("data-appDesc");
        var appBtnWho  = $(dispObj).attr("data-appWho");
        var appBtnImgURL = $(dispObj).attr("data-app-item-url")

        // var appBtnItemURL = $(dispObj).attr("data-appWho", TBD);  // item.appImage;
        // var appBtnImageHTML = $(dispObj).attr("data-appWho", TBD); //  "<img src=" + appItemURL + " alt='App Pic' class='app-image'>";
    
    
    
        if( CURR_DEBUG ) {
          console.log($(dispObj));
          console.log("appBtnName = " + appBtnName);
          console.log("appBtnRepo = " + appBtnRepo);
          console.log("appBtnDeploy = " + appBtnDeploy);
          console.log("appBtnTechs = " + appBtnTechs);
          console.log("appBtnDesc = " + appBtnDesc);
          console.log("appBtnWho = " + appBtnWho);
        }
    
    
    
        // var gifImg   = $(dispObj).attr("data-gif-src");
        // var gifMp4   = $(dispObj).attr("data-mp4-src");
        // var gifTitle   = $(dispObj).attr("data-gif-title");
        // var gifRating   = $(dispObj).attr("data-gif-rating");
        // console.log("gifImg...");
        // console.log(gifImg);
        var addTitle = $("<span class'='gif-title'>").html("Name: " + appBtnName + ",&nbsp;&nbsp;" + "</span>");
        var addRepo = $("<span class'='gif-title'>").html("Repo: " + appBtnRepo + ",&nbsp;&nbsp;" + "</span>");
        var addDeploy = $("<span class'='gif-title'>").html("Deployed: " + appBtnDeploy + ",&nbsp;&nbsp;" + "</span>");
        var addDesc = $("<span class'='gif-title'>").html("Description: " + appBtnDesc + ",&nbsp;&nbsp;" + "</span>");
   
        var addModal = $('<div>')
            .addClass("modal")
            .addClass("myModal")
            .attr("id", "modalArr" + index) 
            .html('<span class="close">&times;</span>');
        var addModalGif = $("<img>")
            .addClass("modal-content")
            .data("data-modal-idx", index) 
            .attr("id", "gif-img")
            .attr("src", appBtnImgURL); // Works
            // .attr("src", gifMp4); // Works... NOT YET, NEEDS DEBUG
            // .attr("id", "caption");
            // .html('<img class="modal-content" id="gif-img" src=gifImg></img><div id="caption"></div>');
            addModal.append(addTitle);
            addModal.append(addDeploy);
            addModal.append(addModalGif);
            addModal.append(addRepo);
            addModal.append(addDesc);
    
        var addGif = $("<img>")
            .attr("src", appBtnImgURL)
            .attr("alt", appBtnName + " image");
            if (CURR_DEBUG) {
              console.log ( "addModal = ..." );
              console.log (  addModal );
              console.log ( "addModalGif = ...");
              console.log (  addModalGif );
            };
      
      $("#modal-section")
      .append(
          $(`<div class="col-md-4">`)
          .append($(addModal))
          // .append($(addCaption))
          // .append($(addStill))
          // .append($(addGif))
        );
      } ;
    
    






    // ******************************************************
    // Start of MAIN CODE
    // ******************************************************
    // ======================================================
    // Create Portfolio Cards
    // ======================================================
    projects.map(showPortfolioJQuery);
    
    // ---------------------------------------------------
    // Select Button on each APP presented
    // ---------------------------------------------------
    // Get the modal...
    $("#portfolio-items").on("click", ".sel-app-btn", function () { // ADDED ".sel-app-btn" to get JS to dive into the object
    console.log("WE HERE TO DISPLAY APP, via .sel-app-btn,  APP SELECTED!");
    event.preventDefault();
    console.log("===========================");
    console.log(this);
    console.log($(this));
    console.log("===========================");
    addModalFunc($(this));
    var modal = $(".modal");
    var myModal = $(".myModal");
    console.log("modal...");
    console.log(modal);
    console.log("myModal...");
    console.log(myModal);

    // Not working yet...
    var modalBtnClicked = $(this).attr("data-modal-idx");
    console.log("modalBtnClicked = ", modalBtnClicked);

    var modalImg = $(".myImg");
    console.log("modalImg...");
    console.log(modalImg);

    // var captionText = $("#caption");
    var captionText = $(".gif-caption");

    // Click the still image to get gif...
    // .attr("src", gifImg); // Works on item gen, now need to detect it I think
    // modalImg.attr("src", "this.src");
    modal.css("display", "block");
    modalImg.css("display", "block");
    captionText.innerHTML = this.alt;
    console.log("Saw this.alt: ...");
    console.log(this.alt);
    console.log(this.src);

    // Get the <span> element that closes the modal
    var span = $(".close");
    var modalClose = $("#modal-section");
    console.log("span...");
    console.log(span);
 
    // When the user clicks on <span> (x) {ACTUALLY ANYWHERE ON MODAL}, close the modal
    // span.onclick(".close") = function() { 
    modalClose.on("click", span, function() {
      console.log("Saw SPAN.onclick...");
      modal.css("display", "none");
      myModal.css("display", "none");
      $("#modal-section").html("");
    });
  });

});



// Keep for Experiments
// ======================================
// var canvas = document.getElementById("canvas"),
//     ctx = canvas.getContext("2d");

// canvas.width = 934;
// canvas.height = 622;


// var background = new Image();
// background.src = "http://i.imgur.com/yf6d9SX.jpg";

// background.onload = function(){
//     ctx.drawImage(background,0,0);   
// }
