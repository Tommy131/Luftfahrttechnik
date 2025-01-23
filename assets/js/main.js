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
 * @LastEditTime : 2024-11-13 00:30:08
 * @E-Mail       : support@owoblog.com
 * @Telegram     : https://t.me/HanskiJay
 * @GitHub       : https://github.com/Tommy131
 */
(function() {
    document['\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72']('\x63\x6F\x6E\x74\x65\x78\x74\x6D\x65\x6E\x75', function(e) {
        e['\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74']();
    });

    document['\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72']('\x6B\x65\x79\x64\x6F\x77\x6E', function(e) {
        if ((e['\x63\x74\x72\x6C\x4B\x65\x79'] && e['\x6B\x65\x79'] === '\x73') || (e['\x63\x74\x72\x6C\x4B\x65\x79'] && e['\x6B\x65\x79'] === '\x75')) {
            e['\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74']();
        }
        if (e['\x6B\x65\x79'] === '\x46\x31\x32') {
            e['\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74']();
        }
        if (e['\x63\x74\x72\x6C\x4B\x65\x79'] && e['\x73\x68\x69\x66\x74\x4B\x65\x79'] && e['\x6B\x65\x79'] === '\x49') {
            e['\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74']();
        }
        if (e['\x63\x74\x72\x6C\x4B\x65\x79'] && e['\x73\x68\x69\x66\x74\x4B\x65\x79'] && e['\x6B\x65\x79'] === '\x4A') {
            e['\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74']();
        }
    });

    document['\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72']('\x64\x72\x61\x67\x73\x74\x61\x72\x74', function(e) {
        e['\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74']();
    });

    document['\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72']('\x6D\x6F\x75\x73\x65\x64\x6F\x77\x6E', function(e) {
        if (e['\x62\x75\x74\x74\x6F\x6E'] === 0) {
            e['\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74']();
        }
    });
})();



// 自动化创建 footer
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");

    const containerDiv = document.createElement("div");
    containerDiv.className = "container";

    const copyrightText = document.createElement("p");
    copyrightText.innerHTML = "&copy; 2024 HanskiJay All Rights Reserved.";

    containerDiv.appendChild(copyrightText);
    footer.appendChild(containerDiv);
    document.body.appendChild(footer);
});

// 关闭警告框
function closeAlert(button) {
    // const alertBox = document.getElementById("alertBox");
    button.parentElement.style.display = "none";
}

function createPDFViewer(filePath) {
    const pdfViewer = document.createElement('div');
    pdfViewer.className = 'pdf-viewer';

    const heading = document.createElement('h5');
    heading.textContent = 'Zugehöriges Original-PDF: ' + filePath.split('/').pop().split('\\').pop();

    const embed = document.createElement('embed');
    embed.src = filePath;
    embed.type = 'application/pdf';
    embed.width = '100%';
    embed.height = '100%';

    pdfViewer.appendChild(heading);
    pdfViewer.appendChild(embed);

    return pdfViewer;
}

function createImageBox(filePath, description) {
    const imageBox = document.createElement('div');
    imageBox.className = 'image-box';

    const img = document.createElement('img');
    img.src = filePath;
    img.alt = description;

    const descriptionP = document.createElement('p');
    descriptionP.className = "image-caption";
    descriptionP.textContent = description;

    imageBox.appendChild(img);
    imageBox.appendChild(descriptionP);

    return imageBox;
}

function loadMathJaxAndRender() {
    if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise()
            .then(() => {
                console.log("MathJax 渲染完成！");
            })
            .catch((err) => console.error("MathJax 渲染错误:", err));
    } else {
        console.warn("MathJax 未加载或 typesetPromise 不可用。");
    }
}