/*
 *        _____   _          __  _____   _____   _       _____   _____
 *      /  _  \ | |        / / /  _  \ |  _  \ | |     /  _  \ /  ___|
 *      | | | | | |  __   / /  | | | | | |_| | | |     | | | | | |
 *      | | | | | | /  | / /   | | | | |  _  { | |     | | | | | |   _
 *      | |_| | | |/   |/ /    | |_| | | |_| | | |___  | |_| | | |_| |
 *      \_____/ |___/|___/     \_____/ |_____/ |_____| \_____/ \_____/
 *
 *  Copyright (c) 2023 by OwOTeam-DGMT (OwOBlog).
 * @Date         : 2024-10-30 17:48:31
 * @Author       : HanskiJay
 * @LastEditors  : HanskiJay
 * @LastEditTime : 2024-10-30 21:09:21
 * @E-Mail       : support@owoblog.com
 * @Telegram     : https://t.me/HanskiJay
 * @GitHub       : https://github.com/Tommy131
 */
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);

    const chapter = getChapterById(urlParams.get("chapterId"));

    const chapterTitle = document.getElementById("chapter-title");
    const chapterInfo = document.getElementById("chapter-info");
    const HTMLTitle = document.querySelector("title");

    HTMLTitle.textContent = `${chapter.title} - HanskiJay's Study Blog`;
    chapterTitle.textContent = chapter.title;

    const isCertified = chapter.isCertified ? "certified" : 'not-certified';
    const isCertifiedStr = chapter.isCertified ? "Certified" : "Not-Certified";

    chapterInfo.innerHTML = `
        <div class="container">
            <div class="meta-data">
                <span>Author: ${chapter.author}</span>
                <span>Last Update: ${chapter.date}</span>
                <span>Category: ${chapter.category}</span>
                Status: <span class="certification-status ${isCertified}">${isCertifiedStr}</span>
            </div>
        </div>
    `;

    const filePath = `subjects/${chapter.subject}`;

    switch(chapter.type) {
        default:
        case "html":
            fetch(`${filePath}/${chapter.id}/index.html`)
            .then(response => response.text())
            .then(html => {
                const innerFrame = document.getElementById("inner-frame");
                innerFrame.innerHTML = html;

                if (chapter.images) {
                    chapter.images.forEach(filename => {
                        innerFrame.appendChild(createImageBox(`${filePath}/${chapter.id}/${filename}`));
                    })
                }

                if (chapter.pdf) {
                    chapter.pdf.forEach(filename => {
                        innerFrame.appendChild(createPDFViewer(`${filePath}/${chapter.id}/${filename}`));
                    })
                }
            })
        break;

        case "md":
        case "markdown":
        break;
    }
});
