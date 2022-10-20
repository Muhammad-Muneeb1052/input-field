
var select_text = document.getElementById('input_field');

select_text.addEventListener("keydown",function(event){
    if(event.key == "Enter"){
        findQuote();
    }
})
function findQuote(){
    document.getElementById('text').innerHTML = select_text.value; 
    select_text.value = "";
}
