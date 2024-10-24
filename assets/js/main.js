document.addEventListener("DOMContentLoaded", function () {
    // 将所有科目的文章数据合并为一个数组
    let allArticles = [];
    for(let tagName in courseData) {
        let course = courseData[tagName];
        let articles = [];

        course.articles.forEach(article => {
            article["course"] = course.courseTitle;
            articles.push(article);
        });
        allArticles = allArticles.concat(articles);
    }

    // 根据发布日期进行排序，最新的文章排在最前面
    allArticles.sort((a, b) => new Date(b.date) - new Date(a.date));

    // 选择最新的三篇文章
    const latestArticles = allArticles.slice(0, 3);

    // 获取文章列表的容器
    const articleList = document.getElementById("article-list");

    // 遍历最新文章数据并生成HTML
    latestArticles.forEach(article => {
        const listItem = document.createElement("li");
        listItem.className = "article";
        listItem.innerHTML = `
            <h3><a href="${article.url}">${article.title}</a></h3>
            <div class="meta-data">
                <span>Author: ${article.author}</span>
                <span>Last Update: ${article.date}</span>
                <span>Module: ${article.course}</span>
                <span>Category: ${article.category}</span>
            </div>
        `;
        articleList.appendChild(listItem);
    });
});