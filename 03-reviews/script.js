const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];


let img = document.querySelector("#img");
let name = document.querySelector("#name");
let job = document.querySelector("#job");
let text = document.querySelector("#text");
let btnPrev = document.querySelector("#prev-btn");
let btnNext = document.querySelector("#next-btn");
let btnRandom = document.querySelector("#random-btn");


let currentItem = 0;

window.addEventListener('load', function(){
    img.src = reviews[0].img
    name.textContent = reviews[0].name
    job.textContent = reviews[0].job
    text.textContent = reviews[0].text
});

btnNext.addEventListener('click', function() {
    currentItem++
    if(currentItem > reviews.length - 1){
        currentItem = 0
    }
    
    img.src = reviews[currentItem].img
    name.textContent = reviews[currentItem].name
    job.textContent = reviews[currentItem].job
    text.textContent = reviews[currentItem].text
  
})


btnPrev.addEventListener('click', function() {
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length -1
    }
    
    img.src = reviews[currentItem].img
    name.textContent = reviews[currentItem].name
    job.textContent = reviews[currentItem].job
    text.textContent = reviews[currentItem].text
  
})

btnRandom.addEventListener('click', function() {

    currentItem = Math.floor(Math.random() * reviews.length)
    
    img.src = reviews[currentItem].img
    name.textContent = reviews[currentItem].name
    job.textContent = reviews[currentItem].job
    text.textContent = reviews[currentItem].text
  
})

