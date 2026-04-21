// local reviews data
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


// function getElement(selection){
//   const element = document.querySelector(selection);
//   if (element) {
//     return element;
//   }
//   throw new Error(
//     `Please check "${selection}" selector, no such element exists`
//   );
// }
const personImg = document.getElementById('person-img');
const author = document.getElementById('author');
const personJob = document.getElementById('job');
const info = document.getElementById('info')

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const randomBtn = document.querySelector('.random-btn');
let count = 0;



nextBtn.addEventListener('click', () => {
  if(count < 3 || count < 0) {
      count++;
    }else {
      count = 0
    }      
  console.log(count)
  getDetails(count)
})

prevBtn.addEventListener('click', () => {
  if(count == 0){
    count = 3
  }else {
    count--; 
  }     
  console.log(count)
  getDetails(count)
})

randomBtn.addEventListener('click', () => {
  const randomNum = (Math.random() * 3).toFixed(0)
  console.log(randomNum)
  getDetails(randomNum)
})

function getDetails(count){
    const item = reviews[count]
    personImg.src = item.img;
    author.innerText = item.name;
    personJob.innerText = item.job;
    info.innerText = item.text
}
