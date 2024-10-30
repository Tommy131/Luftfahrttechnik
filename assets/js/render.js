/*
 *        _____   _          __  _____   _____   _       _____   _____
 *      /  _  \ | |        / / /  _  \ |  _  \ | |     /  _  \ /  ___|
 *      | | | | | |  __   / /  | | | | | |_| | | |     | | | | | |
 *      | | | | | | /  | / /   | | | | |  _  { | |     | | | | | |   _
 *      | |_| | | |/   |/ /    | |_| | | |_| | | |___  | |_| | | |_| |
 *      \_____/ |___/|___/     \_____/ |_____/ |_____| \_____/ \_____/
 *
 *  Copyright (c) 2023 by OwOTeam-DGMT (OwOBlog).
 * @Date         : 2024-10-30 15:01:04
 * @Author       : HanskiJay
 * @LastEditors  : HanskiJay
 * @LastEditTime : 2024-10-30 18:58:37
 * @E-Mail       : support@owoblog.com
 * @Telegram     : https://t.me/HanskiJay
 * @GitHub       : https://github.com/Tommy131
 */
document.addEventListener("DOMContentLoaded", () => {
    const navList = document.getElementById("nav-list");
    const subjectListContainer = document.getElementById("subject-list");

    subjects.forEach(subject => {
        // 动态生成导航栏
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = subject.url;
        link.textContent = subject.name;
        listItem.appendChild(link);
        navList.appendChild(listItem);

        // 动态生成科目卡片
        const card = document.createElement("div");
        card.className = "card";

        const title = document.createElement("h3");
        const titleLink = document.createElement("a");
        titleLink.href = subject.url;
        titleLink.textContent = subject.name;
        title.appendChild(titleLink);

        const description = document.createElement("p");
        description.textContent = subject.description;

        card.appendChild(title);
        card.appendChild(description);
        subjectListContainer.appendChild(card);
    });

    // 动态获取最新文章并渲染
    let allChapters = [];
    for(const subjectTagName in subjectData) {
        const subject = subjectData[subjectTagName];
        let chapters = [];

        subject.chapters.forEach(chapter => {
            chapter["url"] = `chapter.html?chapterId=${chapter.id}`;
            chapter["subject"] = subject.courseTitle;
            chapters.push(chapter);
        });
        allChapters = allChapters.concat(chapters);
    }

    // 根据发布日期进行排序，最新的文章排在最前面
    allChapters.sort((a, b) => new Date(b.date) - new Date(a.date));

    // 选择最新的三篇文章
    const latestArticles = allChapters.slice(0, 3);

    // 获取文章列表的容器
    const chapterList = document.getElementById("chapter-list");

    // 遍历最新文章数据并生成HTML
    latestArticles.forEach(chapter => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <h3><a href="${chapter.url}">${chapter.title}</a></h3>
            <div class="meta-data">
                <span>Author: ${chapter.author}</span>
                <span>Last Update: ${chapter.date}</span>
                <span>Module: ${chapter.subject}</span>
                <span>Category: ${chapter.category}</span>
            </div>
        `;
        chapterList.appendChild(div);
    });
});
