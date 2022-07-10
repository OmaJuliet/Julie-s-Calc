let display = document.getElementById("display");  // to get the input display

let button = Array.from(document.getElementsByClassName("button"));

button.map(button => {
    button.addEventListener("click", (e) => {    //to make the buttons clickable
        switch(e.target.innerText){
            case 'del':    //to activate the clear/delete button
                display.innerText = '';   //to clear/delete the input displayed
                break;    //to prevent the clear/delete sign from showing on the input display.
            case 'c':  
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);   //to remove the back character from the display only if we have something in our display.
                }
                break;     //to prevent the back  character sign from showing on the display
            
            case '=':     //to activate the eqaulsto button
                try {     
                    display.innerText = eval(display.innerText);      //use a function called eval to achieve this funtionality.
                } catch {       //So that when the user types in an invalid calculation, it will throw an error message in the input display.
                    display.innerText = 'Error!';
                }
                break;   //to prevent the equal sign from showing on the input display
            default:        
                display.innerText += e.target.innerText;
        }    
    });
});   



// To activate the light mode by clicking the sun icon
function darkMode(x) {
    var element = document.body;
    element.classList.toggle("dark-mode"); 
    document.getElementById("moon").innerHTML = "<i class='far fa-moon'></i>"; 
} 
