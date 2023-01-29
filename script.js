let user = document.querySelector("#user");
let show = documnet.getElementById("show");
let again = document.querySelector(".again");
let snakewatergun = (user,computer) =>{
    if(user == computer){
        return 0;
    }
    if (user = 'snake' && cpu =='gun')
    {
        return -1;
    }
    else if (user = 'gun' && cpu == 'snake')
    {
        return 1;
    }
    // water and snake
    if (user ='snake' && cpu == 'water')
    {
        return 1;
    }
    else if (user =='water' && cpu == 'snake')
    {
        return -1;
    }
    // gun and water
    if (user ='gun' && cpu == 'water')
    {
        return -1;
    }
    else if (user =='water' && cpu == 'gun')
    {
        return 1;
    }
}
let computerChance = ()=>{
    let number = Math.floor(Math.random()*100) + 1;
    let computer;
    if(number<33){
        computer = "snake";
    }
    else if(number>33 && number<66){
        computer = "water"
    }
    else{
        computer = "gun";
    }
    return computer;
}
let playsound = (sound) =>{
    let audio = new Audio(`asserts/${sound}`)
    audio.play();
}
user.addEventListener("click",(value)=>{
    let user = value.target.id;
    let computer = computerChance();
    let result = snakewatergun(user,computer);
    if(result === 0){
        show.innerHTML = "<h2>Match draw try again</h2>";
        playsound("click.mp3");
    }
    else if(result === -1){
        show.innerHTML = "<h2>You lose</h2>";
        playsound("loose.mp3");
    }
    else{
        show.innerHTML = `<img src="assets/youwin.png" >`;
        playsound('win.mp3');
    }
    console.log(result);
})
again.addEventListener("click",()=>{
    show.innerHTML = null;
})