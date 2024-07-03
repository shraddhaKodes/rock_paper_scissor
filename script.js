let choices = document.querySelectorAll(".choice");
let next_btn = document.querySelector(".btn");
let user_score = document.querySelector(".user_self_score");
let computer_score = document.querySelector(".computer_self_score");
let reset_btn = document.querySelector(".reset");
let userscore = 0;
let compscore = 0;
const computer_choice =() =>{
    let all_choice = ["rock","paper","scissor"];
    let rand_IDX = Math.floor(Math.random()*3);
    return all_choice[rand_IDX];
};
const add_points_user =()=>{
    userscore++;
    user_score.innerHTML = userscore;
};
const add_points_comp =() =>{
    compscore++;
    computer_score.innerHTML = compscore;
};
const check_winner = (A,B) =>{
    if(A===B){
        next_btn.innerHTML = "Game is Draw !!"
        next_btn.style.backgroundColor = "#303133";
    }
    if(A==="rock"&& B==="paper"){
        next_btn.innerHTML = "You lose !! " + B + " beats your " + A; 
        next_btn.style.backgroundColor = "red";
        add_points_comp();
    }
    if(A==="rock" && B==="scissor"){
        next_btn.innerHTML = "You win !! your " + A +" beats "+  B;
        next_btn.style.backgroundColor = "green" ;
        add_points_user();
    }
    if(A==="paper" && B==="scissor"){
        next_btn.innerHTML = "You lose !! " + B + " beats your " + A;
        next_btn.style.backgroundColor = "red";
        add_points_comp();
    }
    if(A==="paper" && B==="rock"){
        next_btn.innerHTML = "You win !! your " + A +" beats "+  B ;
        next_btn.style.backgroundColor = "green";
        add_points_user();
    }
    if(A==="scissor" && B==="paper"){
        next_btn.innerHTML = "You win !! your " + A +" beats "+  B;
        next_btn.style.backgroundColor = "green";
        add_points_user();
    }
    if(A==="scissor" && B==="rock"){
        next_btn.innerHTML = "You lose !! " + B + " beats your " + A;
        next_btn.style.backgroundColor = "red";
        add_points_comp();
    }
}
choices.forEach((each_choice)=>{
    each_choice.addEventListener("click",()=>{
        let user_choice = each_choice.getAttribute("id");
        let comp_choice = computer_choice();
        check_winner(user_choice,comp_choice);
    });
});
reset_btn.addEventListener("click",()=>{
     userscore = 0;
     compscore = 0;
     user_score.innerHTML = userscore;
     computer_score.innerHTML = compscore;
     next_btn.innerHTML = "Play your next move"
     next_btn.style.backgroundColor = "#303133";
});