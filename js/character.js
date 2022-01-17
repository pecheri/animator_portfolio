import { slideCharacterRight } from "./app";
import { slideCharacterLeft } from "./app";


$(document).keydown(function(e){
    let characterImgSrc = $(".character-popup img").attr("src")
    console.log("characterImgSrc",characterImgSrc);
    if(characterImgSrc.length > 0){
        
        if (e.which == 37) { 
            slideCharacterLeft()
            return false;
        }
        if (e.which == 39) {
            slideCharacterRight()
            return false;
        }
    }
});