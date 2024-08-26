// const name = "DOM Created by Us";
// console.log(name);
// console.log(document);

// const person = {
//     Name: "nam Bolle Chakri Thakbena",
//     age: 13,
//     address: "Khulna",
//     isBeauty: true,
// }

// person.element        /Get Object Element
// person.name = "Asad",    /Object Element Value Change

// const blogTitles = document.getElementsByTagName('h3');
// for(const title of blogTitles){
//     title.innerText = "Amar Sonr Bangla Ami Tomai Valobasi";
//     title.style.background = "green";
//     title.style.color = "white";
    
// }

// const blogTexts = document.getElementsByTagName('p');
// for(const title of blogTexts){
//     title.style.color = "red";
//     title.style.backgroundColor = "yellow";
//     title.style.border = "2px dashed black";
// }


const thirdTitle = document.getElementById("third-title");
thirdTitle.style.backgroundColor = "black"
thirdTitle.style.color = "blue"




// Creating Blog by JS

const article = document.createElement('article');
article.classList.add('blog-main');

const h3 = document.createElement('h3');
h3.innerText = "My New Awsome Blog-5 by JS";

const p = document.createElement('p');
p.innerText = "Created by Java Script Consequatur id provident corrupti nesciunt itaque, ullam et rerum minima impedit necessitatibus? Incidunt eum sequi illum minima earum impedit corrupti voluptatibus quo reprehenderit suscipit dolores atque culpa temporibus, laborum asperiores! Nobis omnis dolores aliquam inventore repellat? Accusamus veritatis asperiores vitae! $$$$$$$$$$$$$";

article.appendChild(h3);
article.appendChild(p);

const div = document.getElementById("article-main");
div.appendChild(article);

const blogs = document.getElementsByClassName("blog-main");
for (const blog of blogs){
    blog.style.backgroundColor = "red"
    blog.style.color = "white"
    blog.style.border = "3px dotted black"
    blog.style.margin = "15px"
    blog.style.padding = "15px"
}

