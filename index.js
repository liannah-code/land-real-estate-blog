// Blog post data
const posts = [
  {
    id: 1,
    title: "How to Buy Land in Kenya",
    summary: "A complete guide to the land buying process in Kenya, from start to finish.",
    category: "Buying Land",
    content: "In this post, we’ll take you through the detailed process of purchasing land in Kenya. From checking ownership to the final purchase, here's everything you need to know.",
    link: "#"
  },
  {
    id: 2,
    title: "Best Locations for Buying Property in Nairobi",
    summary: "Looking for a property in Nairobi? Here’s a guide to the best areas to invest in.",
    category: "Real Estate",
    content: "This post explores the top neighborhoods in Nairobi for real estate investment, such as Kilimani, Westlands, and Karen.",
    link: "#"
  },
  {
    id: 3,
    title: "Understanding Title Deeds in Kenya",
    summary: "Learn how to verify a title deed and avoid fraudulent transactions when buying land.",
    category: "Legal Tips",
    content: "A title deed is an essential document for land ownership in Kenya. This post explains how to verify its authenticity and avoid scams.",
    link: "#"
  },
  {
    id: 4,
    title: "Off-Plan Properties in Kenya: Safe or Risky?",
    summary: "Off-plan properties are becoming popular, but are they a safe investment?",
    category: "Real Estate",
    content: "This article delves into the pros and cons of buying off-plan properties in Kenya and tips for avoiding common pitfalls.",
    link: "#"
  }
];

// Function to render blog posts dynamically on the homepage
function renderFeaturedPosts(posts) {
  const featuredPostsContainer = document.getElementById("featured-posts");

  posts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.classList.add("post-preview");
    postElement.innerHTML = `
      <h3><a href="${post.link}">${post.title}</a></h3>
      <p>${post.summary}</p>
    `;
    featuredPostsContainer.appendChild(postElement);
  });
}

// Function to filter and display posts by category
function filterPostsByCategory(category) {
  const filteredPosts = category ? posts.filter(post => post.category === category) : posts;
  renderBlogPosts(filteredPosts);
}

// Function to render blog posts on the blog page
function renderBlogPosts(posts) {
  const blogListContainer = document.getElementById("blog-list");
  blogListContainer.innerHTML = ''; // Clear existing posts

  posts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.classList.add("post-preview");
    postElement.innerHTML = `
      <h3><a href="${post.link}">${post.title}</a></h3>
      <p>${post.summary}</p>
    `;
    blogListContainer.appendChild(postElement);
  });
}

// Function to search and display posts based on search term
function searchPosts(searchTerm) {
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );
  renderBlogPosts(filteredPosts);
}

// Function to load a single post based on the URL ID parameter
function loadPostContent(postId) {
  const post = posts.find(p => p.id == postId);
  if (post) {
    const postContentContainer = document.getElementById("post-content");
    postContentContainer.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
    `;
  } else {
    document.getElementById("post-content").innerHTML = "<p>Post not found.</p>";
  }
}

// Event listener for category filter
document.getElementById("categoryFilter").addEventListener("change", function() {
  filterPostsByCategory(this.value);
});

// Event listener for search bar
document.getElementById("searchBar").addEventListener("input", function() {
  searchPosts(this.value);
});

// Load the home page posts
document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedPosts(posts); // Display featured posts
  renderBlogPosts(posts); // Display all posts on blog page by default

  // Load the individual post content on post page (if on post page)
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");
  if (postId) {
    loadPostContent(postId);
  }
});
