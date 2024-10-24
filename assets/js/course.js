// 动态加载当前课程的内容
document.addEventListener("DOMContentLoaded", function () {
    // 获取嵌入在页面中的 JSON 数据
    const courseDataScript = document.getElementById("course-data");
    const courseData = JSON.parse(courseDataScript.textContent);

    // 设置课程标题
    document.getElementById("course-title").textContent = courseData.courseTitle;

    // 获取章节列表的容器
    const chapterList = document.getElementById("chapter-list");

    // 遍历章节数据并生成HTML
    courseData.articles.forEach((article) => {
        const listItem = document.createElement("li");
        listItem.className = "chapter";

        // 生成每个章节的HTML内容
        listItem.innerHTML = `
            <h3><a href="${article.url}">${article.title}</a></h3>
            <p>${article.description}</p>
            <div class="meta-data">
                <span>作者: ${article.author}</span> |
                <span>最后更新: ${article.date}</span> |
                <span>分类: ${article.category}</span>
            </div>
        `;

        // 添加到章节列表中
        chapterList.appendChild(listItem);
    });
});
