//select all buttons
const buttons = document.querySelectorAll("button");

//select the <input tpye "text" class "display" disabled>element

const display = document.querySelector('.display');

//addEventListener
buttons.forEach(function(button){
    button.addEventListener('click',operate)
});

//operate function
var v1=0
var operator='';

function operate(event){
    //current clicked button value

    const clickedButtonValue = event.target.value;
    // console.log(clickedButtonValue);
    //if(clickedButtonValue == '='){
        //check the display is not empty and only do the operation

        // if(display.value.trim() !== ''){
            
        //     if(clickedButtonValue !== '='){
        //      display.value +=clickedButtonValue;
        // }

        //     if(clickedButtonValue == '='){
        //     //calculate and show the answer in display
        //      display.value = eval(display.value);
        //     }
        // }
        // else 
        if(clickedButtonValue == '='){
                //calculate and show the answer in display
                 display.value = v1;
                 return;
        }

        if(clickedButtonValue === 'C'){
            // clear everything
            operator='';
            v1=0;
            display.value ='';
        }
        else{
            // otherwise concatenate it to the display
            display.value +=clickedButtonValue;
            
            switch(clickedButtonValue){
                case "+":
                    operator="+";
                    break;

                    default:
                        switch(operator){
                            case "+":
                                v1+=parseInt(clickedButtonValue);
                                console.log(v1);
                                break;
                            default:
                                v1=parseInt(clickedButtonValue);
                        }
                        
            }
        }
   // }


}