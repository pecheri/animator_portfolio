// img containers for main-page
const artwork1 = ["img/storyboards/dandanmian/1.jpeg","img/storyboards/dandanmian/2.jpeg","img/storyboards/dandanmian/3.jpeg","img/storyboards/dandanmian/4.jpeg","img/storyboards/dandanmian/5.jpeg","img/storyboards/dandanmian/6.jpeg"];

const artwork2 = ["img/storyboards/spidersdelight/1.jpeg", "img/storyboards/spidersdelight/2.jpeg","img/storyboards/spidersdelight/3.jpeg","img/storyboards/spidersdelight/4.jpeg","img/storyboards/spidersdelight/5.jpeg","img/storyboards/spidersdelight/6.jpeg","img/storyboards/spidersdelight/7.jpeg","img/storyboards/spidersdelight/8.jpeg","img/storyboards/spidersdelight/9.jpeg"];

// const artwork3 = ["img/overview_sample11.jpeg", "img/overview_sample12.jpeg","img/overview_sample13.jpeg","img/overview_sample14.jpeg","img/overview_sample15.jpeg"];

const artwork4 = ["img/storyboards/fidel/1.jpeg", "img/storyboards/fidel/2.jpeg"];

// img container for charactar-design
const character = ["img/characters/GoBody_Color.jpg", "img/characters/Kevin_FULLSIZE_v04.png", "img/characters/Killizar.png", "img/characters/Bethora.png", "img/characters/TrooperDuper.png", "img/characters/Buxie.png", "img/characters/WolfCrotch.png", "img/characters/GoobGlob_Color.jpg",  "img/characters/OscarFire.png", "img/characters/ManBo_Color.jpg", "img/characters/KateHatred_Color.jpg", "img/characters/ChestEye.png", "img/characters/SwampAsk.png", "img/characters/WoolyDammage.png", "img/characters/Derpoid.png", "img/characters/Killizar.jpg"];

let imgSrc
let imgArrow
let imgPage

$(document).ready(function() {
    // show popup
    $(".slide-overview").click(function() {
        imgSrc = $(this).attr("src");
        imgPage = $(this).attr("alt");
        imgArrow = $(this).parent().attr("id");
        $("#popup-container img").attr({"src": imgSrc, "alt": imgPage});
        $("#popup-container p").text(imgPage);
        $("#popup-container").fadeIn(500);
        $("body,html").css("overflow-y", "hidden");
        return false;
    })

    // close popup
    $("#close-btn").click(function() {
        $("#popup-container").fadeOut(500);
        $("body,html").css("overflow-y", "visible");
        return false;
    })

    // left button
    $("#left").click(function() {
        let currentImg = $("#popup-container img").attr("src");
        if (imgArrow == "artwork1") {
            let index = artwork1.indexOf(currentImg);
            if (index - 1 < 0) {
                $("#popup-container img").attr("src", artwork1[artwork1.length - 1]);
            } else {
                $("#popup-container img").attr("src", artwork1[index - 1]);
            }            
        }
        if (imgArrow == "artwork2") {
            let index = artwork2.indexOf(currentImg);
            if (index - 1 < 0) {
                $("#popup-container img").attr("src", artwork2[artwork2.length - 1]);
            } else {
                $("#popup-container img").attr("src", artwork2[index - 1]);
            }            
        }
        if (imgArrow == "artwork3") {
            let index = artwork3.indexOf(currentImg);
            if (index - 1 < 0) {
                $("#popup-container img").attr("src", artwork3[artwork3.length - 1]);
            } else {
                $("#popup-container img").attr("src", artwork3[index - 1]);
            }            
        }
        if (imgArrow == "artwork4") {
            let index = artwork4.indexOf(currentImg);
            if (index - 1 < 0) {
                $("#popup-container img").attr("src", artwork4[artwork4.length - 1]);
            } else {
                $("#popup-container img").attr("src", artwork4[index - 1]);
            }            
        }
        let newImg = $("#popup-container img").attr("src");
            ImgPage = $("img[src='" + newImg + "']").attr("alt");
            $("#popup-container p").text(ImgPage);
            // let newImgPage = $("img[src='" + newImg + "']").attr("alt");
            // $("#popup-container p").text(newImgPage);
    })
    // right button
    $("#right").click(function() {
        let currentImg = $("#popup-container img").attr("src");
        if (imgArrow == "artwork1") {
            let index = artwork1.indexOf(currentImg);
            if (index + 1 > artwork1.length - 1) {
                $("#popup-container img").attr("src", artwork1[0]);
            } else {
                $("#popup-container img").attr("src", artwork1[index + 1]);
            }
        }
        if (imgArrow == "artwork2") {
            let index = artwork2.indexOf(currentImg);
            if (index + 1 > artwork2.length - 1) {
                $("#popup-container img").attr("src", artwork2[0]);
            } else {
                $("#popup-container img").attr("src", artwork2[index + 1]);
            }
        }
        if (imgArrow == "artwork3") {
            let index = artwork3.indexOf(currentImg);
            if (index + 1 > artwork3.length - 1) {
                $("#popup-container img").attr("src", artwork3[0]);
            } else {
                $("#popup-container img").attr("src", artwork3[index + 1]);
            }
        }
        if (imgArrow == "artwork4") {
            let index = artwork4.indexOf(currentImg);
            if (index + 1 > artwork4.length - 1) {
                $("#popup-container img").attr("src", artwork4[0]);
            } else {
                $("#popup-container img").attr("src", artwork4[index + 1]);
            }
        }
        let newImg = $("#popup-container img").attr("src");
            ImgPage = $("img[src='" + newImg + "']").attr("alt");
            $("#popup-container p").text(ImgPage);
            // let newImgPage = $("img[src='" + newImg + "']").attr("alt");
            // $("#popup-container p").text(newImgPage);
    })

    // video popup
    $(".thumbnail").click(function() {
        let videoURL = $(this).attr("alt");
        $("#popup-container-video iframe").attr("src", videoURL);
        $("#popup-container-video").fadeIn(500);
        $("body,html").css("overflow-y", "hidden");
        return false;
    })
    
    // close video popup
    $("#close-btn-video").click(function() {
        $("#popup-container-video").fadeOut(500);
        $("body,html").css("overflow-y", "visible");
        $("#popup-container-video iframe").attr("src", "");
        return false;
    })

    // hamburger menu
    $(".menu-btn").click(function() {
        $(".nav-menu").toggleClass("nav-show");
    })


    // character-design page 
    for (let i = 0; i < character.length; i++) {
        $(".character-design-container").append('<div class="character-design-img"><img src= "' + character[i] + '" alt=""></div>');
    };
    
    // popup
    $(".character-design-container img").click(function() {
        let selectedImg = $(this).attr("src");
        $("#popup-container img").attr("src", selectedImg);
        $("#popup-container").fadeIn(500);
        $("body,html").css("overflow-y", "hidden");
        return false;
    })

    // left arrow 
    $("#left-character").click(function() {
        let clickImg = $("#popup-container img").attr("src");
        let index = character.indexOf(clickImg);
        if (index - 1 < 0) {
            $("#popup-container img").attr("src", character[character.length - 1]);
        } else {
            $("#popup-container img").attr("src", character[index - 1]);
        }            
    })

    // right arrow 
    $("#right-character").click(function() {
        let clickImg = $("#popup-container img").attr("src");
        let index = character.indexOf(clickImg);
        if (index + 1 > character.length - 1) {
            $("#popup-container img").attr("src", character[0]);
        } else {
            $("#popup-container img").attr("src", character[index + 1]);
        }
    })
})