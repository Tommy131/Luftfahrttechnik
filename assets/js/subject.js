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
 * @LastEditTime : 2024-10-30 21:25:43
 * @E-Mail       : support@owoblog.com
 * @Telegram     : https://t.me/HanskiJay
 * @GitHub       : https://github.com/Tommy131
 */
document.addEventListener("DOMContentLoaded", () => {
    // 解析 URL 参数获取科目名称
    const urlParams = new URLSearchParams(window.location.search);
    const subject = subjectData[urlParams.get("subjectId")];

    // 设置页面的课程标题和文档标题
    const subjectTitle = document.getElementById("subject-title");
    if (subjectTitle === undefined) {
        return;
    }

    subjectTitle.textContent = subject.name;
    document.title = subject.name + " - HanskiJay's Study Blog";

    // 获取章节列表的容器
    const chapterList = document.getElementById("chapter-list");

    if (!subject.chapters || subject.chapters.length === 0) {
        const noChapterFoundMessage = document.createElement("p");
        noChapterFoundMessage.textContent = "Kein Kapitel gefunden!";
        noChapterFoundMessage.style.color = "red";
        chapterList.appendChild(noChapterFoundMessage);
        return;
    }

    // 遍历章节数据并生成HTML
    subject.chapters.forEach((chapter) => {
        const div = document.createElement("div");
        div.className = "card chapter";

        // 生成每个章节的HTML内容
        div.innerHTML = `
            <a href="chapter.html?chapterId=${chapter.id}">${chapter.title}</a>
            <p>${chapter.description}</p>
            <div class="meta-data">
                <span>Author: ${chapter.author}</span>
                <span>Last Update: ${chapter.date}</span>
                <span>Category: ${chapter.category}</span>
            </div>
        `;

        // 添加到章节列表中
        chapterList.appendChild(div);
    });
});
