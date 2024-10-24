document.addEventListener("DOMContentLoaded", function () {
    // 设置课程标题
    const courseTitle = document.getElementById("course-title");
    if (courseTitle === undefined) {
        return;
    }

    // 获取当前路径的科目标识符
    const pathname = window.location.pathname;
    let courseKey = null;

    // 判断路径中是否包含特定的科目标识符
    if (pathname.includes("thermodynamik_1")) {
        courseKey = "thermodynamik_1";
    } else if (pathname.includes("statik")) {
        courseKey = "statik";
    } else if (pathname.includes("konstruktion")) {
        courseKey = "konstruktion";
    } else if (pathname.includes("ingenieurinformatik")) {
        courseKey = "ingenieurinformatik";
    } else if (pathname.includes("ingenieurmathematik_1")) {
        courseKey = "ingenieurmathematik_1";
    } else if (pathname.includes("werkstofftechnik_1")) {
        courseKey = "werkstofftechnik_1";
    }

    // 如果找不到匹配的科目数据，停止执行
    if (!courseKey || !courseData[courseKey]) {
        console.error("Article data not found!");
        return;
    }

    const course = courseData[courseKey];

    // 设置页面的课程标题和文档标题
    courseTitle.textContent = course.courseTitle;
    document.title = course.courseTitle + " - HanskiJay's Study Blog";

    // 获取章节列表的容器
    const chapterList = document.getElementById("chapter-list");

    if (!course.articles || course.articles.length === 0) {
        const noArticlesMessage = document.createElement("p");
        noArticlesMessage.textContent = "Kein Artikel gefunden!";
        noArticlesMessage.style.color = "red";
        chapterList.appendChild(noArticlesMessage);
        return;
    }

    // 遍历章节数据并生成HTML
    course.articles.forEach((article) => {
        const listItem = document.createElement("li");
        listItem.className = "chapter";

        // 生成每个章节的HTML内容
        listItem.innerHTML = `
            <h3><a href="${article.url}">${article.title}</a></h3>
            <p>${article.description}</p>
            <div class="meta-data">
                <span>Author: ${article.author}</span>
                <span>Last Update: ${article.date}</span>
                <span>Category: ${article.category}</span>
            </div>
        `;

        // 添加到章节列表中
        chapterList.appendChild(listItem);
    });
});
