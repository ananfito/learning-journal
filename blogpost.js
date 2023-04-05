// JAVASCRIPT FOR LEARNING JOURNAL - BLOGPOSTS

import { blogPostsArray } from "./data.js";

function renderRecentPostsGrid() {
    let recentPostsGridHtml = ''
    const recentPostsArray = blogPostsArray.slice(0,3)
    
    recentPostsArray.forEach( function (blogPost) { 
        recentPostsGridHtml += `
                        <a class="blogpost-link" href="blogpost.html">
                            <img class="blogpost-img"  src="${blogPost.img}" alt="${blogPost.alt}">
                            <p class="blogpost-date">${blogPost.date}</p>
                            <p class="blogpost-title">${blogPost.title}</p>
                            <p class="blogpost-text">${blogPost.text}</p>
                        </a>
        `
        document.getElementById('recent-posts-grid').innerHTML = recentPostsGridHtml
    })
}

renderRecentPostsGrid()
