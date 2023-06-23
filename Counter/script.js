let number = 0;
const decrease = document.getElementById("btn_dec");
const increase = document.getElementById("btn_inc");
const reset = document.getElementById("btn_reset");

decrease.addEventListener("click", function(){
    number = number - 1;
    console.log(number);

});
increase.addEventListener("click", function(){
    number = number + 1;
    console.log(number);
});
reset.addEventListener("click", function(){
    number = 0;
    console.log(number);
});