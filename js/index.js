// Your code goes here


// EL 1
document.querySelector('.nav').addEventListener('mouseover', () => {
    console.log('mouseover');
    document.querySelector('.nav').style.backgroundColor = "yellow";
});


// EL 2

const card = document.querySelector('.nav-link');

card.addEventListener('dblclick', function (e) {
  console.log('dblclick');
  card.style.fontSize = "4rem";
});

// EL 3

document.querySelector('.nav').addEventListener('mouseout', () => {
    console.log('mouseout');
    document.querySelector('.nav').style.backgroundColor = "white";
});


// //EL 4

document.onkeydown = function(event){
    if (event.keyCode === 37) {
         return alert("Hello World!");
    }else{
        return none;
    } 
}



// EL 5

const button = document.querySelector('.btn');

button.addEventListener('click', event => {
  document.querySelector('.btn').style.fontStyle = "italic";
});

// EL 6 EL 7

document.querySelector('.img-content').addEventListener('mousemove', event => {
    event.stopPropagation();
    console.log('mousemove');
    document.querySelector('.img-content').style.width = "20%";
    {document.querySelector('.img-content:nth-of-type(2)').addEventListener('drag', () => {
        console.log('drag');
        document.querySelector('.img-content:nth-of-type(2)').style.display = "none";
    });}
    
});

// EL 8

let bus = document.querySelector('.intro p');
window.addEventListener('scroll', () =>{
    if (document.documentElement.scrollTop <= 100){
        bus.style.color = "black";
    }else{
        bus.style.color = 'red';
    }
})

// EL 9

window.addEventListener("load", function(event) {
    return alert("Welcome to my page.");
  });


// EL 10

document.addEventListener('visibilitychange', () => {
    if(document.hidden){
        document.title = "I'm Still Here!";
    }else{
        document.title = "Here is the Home Page!"
    }
});


// EL 11 - Navigation preventDefault();




const Nlinks = Array.from(document.querySelectorAll('a'))
Nlinks.forEach(e => {
    e.addEventListener('click', (event) => {
        event.preventDefault();
    });
});


// document.getElementsByTagName("a").addEventListener("click", function(event){
//     event.preventDefault()
//   });

// document.getElementsByTagName('a');
//   Nlinks.addEventListener('click', (event) => {
//     event.preventDefault();
// });

// EL 12 - Stop Propogation


var parent = document.querySelector('.destination');
var child = document.querySelector('.btn');

parent.addEventListener('click', function(){
    document.querySelector('.destination').style.backgroundColor = "yellow";
    console.log("Parent clicked");
  },true);


  child.addEventListener('click', function(event){
    event.stopPropagation();
    document.querySelector('.btn').style.fontSize = "3rem";
    console.log("Child clicked");
  });