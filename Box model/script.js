// Mock Data for News
const newsData = [
    {
        title: "New Tech Revolution in 2024!",
        content: "Tech giants are investing in AI and automation.",
        image: "https://via.placeholder.com/300x200",
    },
    {
        title: "Global Markets Soar",
        content: "Stock markets see a sharp increase amid positive economic data.",
        image: "https://via.placeholder.com/300x200",
    },
    {
        title: "Sports Update: Football Finals",
        content: "Exciting matches await fans this weekend.",
        image: "https://via.placeholder.com/300x200",
    },
];

// Function to Load Breaking News
const loadBreakingNews = () => {
    const ticker = document.getElementById("newsTicker");
    ticker.textContent = "Breaking: Global economic summit announced in Geneva!";
};

// Function to Load Latest News
const loadLatestNews = () => {
    const container = document.getElementById("newsContainer");
    newsData.forEach((news) => {
        const newsItem = document.createElement("div");
        newsItem.className = "news-item";

        newsItem.innerHTML = `
            <img src="${news.image}" alt="${news.title}">
            <h3>${news.title}</h3>
            <p>${news.content}</p>
        `;

        container.appendChild(newsItem);
    });
};

// Load content when the page loads
document.addEventListener("DOMContentLoaded", () => {
    loadBreakingNews();
    loadLatestNews();
});
