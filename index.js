// JAVASCRIPT FOR LEARNING JOURNAL - INDEX

import { blogPostsArray } from "./data.js";

let slicedBlogPostsArray = []
let numberOfBlogPosts = 6
const viewMoreBtn = document.getElementById('btn-view-more')

viewMoreBtn.addEventListener('click', function() {
    if (numberOfBlogPosts >= blogPostsArray.length) {
        viewMoreBtn.style.display = "none"      
    } else {
        numberOfBlogPosts += 3
        getBlogPostsArray(numberOfBlogPosts)
        renderBlogPostsGridHtml()
    }
})

function getBlogPostsArray(n) {
    slicedBlogPostsArray = blogPostsArray.slice(0,n)
    return slicedBlogPostsArray
}

function renderBlogPostsGridHtml() {
    let blogPostsGridHtml = ''
    
    slicedBlogPostsArray.forEach ( function (blogPost) {
        blogPostsGridHtml += `
                        <a class="blogpost-link" href="blogpost.html">
                            <img class="blogpost-img"  src="${blogPost.img}" alt="${blogPost.alt}">
                            <p class="blogpost-date">${blogPost.date}</p>
                            <p class="blogpost-title">${blogPost.title}</p>
                            <p class="blogpost-text">${blogPost.text}</p>
                        </a>
        `
        document.getElementById('posts-grid').innerHTML = blogPostsGridHtml
    })
}

getBlogPostsArray(numberOfBlogPosts)
renderBlogPostsGridHtml()
