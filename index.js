import abcjs from "abcjs";

window.onload = function() {
    abc_editor = new abcjs.Editor("abc", { 
        canvas_id: "paper", 
        warnings_id:"warnings" 
    });
}