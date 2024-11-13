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
 * @LastEditTime : 2024-11-13 23:58:26
 * @E-Mail       : support@owoblog.com
 * @Telegram     : https://t.me/HanskiJay
 * @GitHub       : https://github.com/Tommy131
 */
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const chapterId = urlParams.get("chapterId");

    if(chapterId === null) {
        document.body.innerHTML = "403 Forbidden";
        return;
    }

    const chapter = getChapterById(chapterId);

    const chapterTitle = document.getElementById("chapter-title");
    const chapterInfo = document.getElementById("chapter-info");
    const HTMLTitle = document.querySelector("title");

    HTMLTitle.textContent = `${chapter.title} - HanskiJay's Study Blog`;
    chapterTitle.textContent = chapter.title;

    const isCertified = chapter.isCertified ? "certified" : 'not-certified';
    const isCertifiedStr = chapter.isCertified ? "Certified" : "Not-Certified";

    if(chapter.isCertified) {
        const alertBox = document.getElementById("alertBox");
        alertBox.style.display = "none";

        const innerFrame = document.getElementById("inner-frame");
        innerFrame.style.marginTop = "50px";
    }

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
            if (typeof marked === "object") {
                fetch(`${filePath}/${chapter.id}/index.md`)
                .then(response => response.text())
                .then(text => {
                    const markdownHTML = marked.parse(text);
                    const innerFrame = document.getElementById("inner-frame");
                    const contentDiv = document.createElement("div");
                    contentDiv.className = "content";

                    contentDiv.innerHTML = markdownHTML;
                    innerFrame.appendChild(contentDiv);

                    document.querySelectorAll("ul, ol").forEach(element => {
                        element.className = "list";
                    })
                })
            } else {
                console.error("marked.js 未正确加载");
            }
        break;
    }

    setTimeout(() => {
        // 确保 MathJax 渲染
        if (window.MathJax) {
            loadMathJaxAndRender();
        } else {
            // MathJax 未加载，等待加载完成后渲染
            window.addEventListener('load', loadMathJaxAndRender);
        }
    }, 200);
});
