const blogPosts = [
    {
        imgSrc :  "images/blog-post-1.jpg",
        alt : "comuter with code",
        date : "JULY 23, 2022",
        header : "Blog one",
        paragraph : "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    },
    {
        imgSrc : "images/blog-post-3.jpg",
        alt : "student is sitting in empty auditorium",
        date : "JULY 23, 2022",
        header : "Blog two",
        paragraph : "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    },
    {
        imgSrc : "images/blog-post-4.jpg",
        alt : "student is sitting in empty auditorium",
        date : "JULY 23, 2022",
        header : "Blog three",
        paragraph : "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    },
    {
        imgSrc : "images/blog-post-6.jpg",
        alt : "earth's image at night with the city lights",
        date : "JULY 23, 2022",
        header : "Blog four",
        paragraph : "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    },
    {
        imgSrc : "images/blog-post-2.jpg",
        alt : "desk with computer and coffee on it",
        date : "JULY 23, 2022",
        header : "Blog five",
        paragraph : "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    },
    {
        imgSrc : "images/blog-post-8.jpg",
        alt : "glass board with notes and human arm with marker",
        date : "JULY 23, 2022",
        header : "Blog six",
        paragraph : "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    }
]

const blogPostGrid = document.getElementById("blog-post-grid")
let numberDisplayedPosts = 3;
let viewMoreSize = 3;
let currentPostsSize = 0;

renderBlogPosts(blogPostGrid)

function renderBlogPosts(grid){
    grid.innerHTML = getPostsToDisplay("", 0, numberDisplayedPosts)
    currentPostsSize = numberDisplayedPosts
}

function getPostsToDisplay(postsHTML, startIndex, numberPostsToDisplay) {
    let displayedPostsHTML = postsHTML
    for (let i = startIndex; i < blogPosts.length && i < startIndex + numberPostsToDisplay; i++){
        displayedPostsHTML += getPostHTML(blogPosts[i])
    }
    return displayedPostsHTML
}

function getPostHTML(post){
       const postHtml = `<article id="article-blog-post" class="article-blog-post">
                <img src="${post.imgSrc}" alt="${post.alt}" class="blog-post-image blog-post-item">
                <p class="article-date blog-post-item">${post.date}</p>
                <h2 class="article-header blog-post-item">${post.header}</h2>
                <p class="article-p blog-post-item">${post.paragraph}</p>
        </article>`
        return postHtml
}

document.getElementById("hero-h").addEventListener("click", goToHeroPost)

function goToHeroPost(){ 
    window.open("hero.html", "_self");
}
