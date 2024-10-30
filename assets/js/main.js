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
 * @LastEditTime : 2024-10-30 21:46:36
 * @E-Mail       : support@owoblog.com
 * @Telegram     : https://t.me/HanskiJay
 * @GitHub       : https://github.com/Tommy131
 */

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
function closeAlert() {
    const alertBox = document.getElementById("alertBox");
    alertBox.style.display = "none";
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