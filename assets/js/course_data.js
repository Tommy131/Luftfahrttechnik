// 定义课程数据集
const courseData = {
    "thermodynamik_1": {
        "courseTitle": "Thermodynamik I",
        "articles": [
            {
                "id": "thermo-001",
                "title": "Kapitel 1: Grundlagen der Thermodynamik",
                "author": "Jay",
                "date": "25.10.2024",
                "category": "Grundlagen",
                "description": "Grundlagen der Thermodynamik",
                "isCertified": false,
                "url": "kapitel_1/index.html"
            },
            {
                "id": "thermo-002",
                "title": "Kapitel 2: Energie und Entropie (Hauptsätze der Thermodynamik)",
                "author": "Jay",
                "date": "25.10.2024",
                "category": "Grundlagen",
                "description": "Hauptsätze der Thermodynamik",
                "isCertified": false,
                "url": "kapitel_2/index.html"
            },
        ]
    },
    "statik": {
        "courseTitle": "Statik",
        "articles": []
    },
    "konstruktion": {
        "courseTitle": "Konstruktion",
        "articles": []
    },
    "ingenieurinformatik": {
        "courseTitle": "Ingenieurinformatik",
        "articles": [
            {
                "id": "informatik-001",
                "title": "Kapitel 1: Zahlensysteme und Binäre Informationsdarstellung",
                "author": "Jay",
                "date": "24.10.2024",
                "category": "Grundlagen",
                "description": "Zahlensysteme",
                "isCertified": false,
                "url": "kapitel_1/index.html"
            },
            {
                "id": "informatik-003",
                "title": "Kapitel 3: Algorithmen Grundlagen",
                "author": "Jay",
                "date": "24.10.2024",
                "category": "Grundlagen",
                "description": "Algorithmen Grundlagen",
                "isCertified": false,
                "url": "kapitel_3/index.html"
            },
            {
                "id": "informatik-004",
                "title": "Kapitel 4: Algorithmen in Java",
                "author": "Jay",
                "date": "24.10.2024",
                "category": "Grundlagen",
                "description": "Algorithmen in Java",
                "isCertified": false,
                "url": "kapitel_4/index.html"
            },
        ]
    },
    "ingenieurmathematik_1": {
        "courseTitle": "Ingenieurmathematik I",
        "articles": [
            {
                "id": "mathe-001",
                "title": "Einführung: Videos für Selbstlernen",
                "author": "Jay",
                "date": "24.10.2024",
                "category": "Einführung",
                "description": "Videos von YouTube: MathebyDanielJung",
                "isCertified": true,
                "url": "einfuehrung.html"
            },
        ]
    },
    "werkstofftechnik_1": {
        "courseTitle": "Werkstofftechnik I",
        "articles": [
            {
                "id": "werk-001",
                "title": "Kapitel 1: Atomaufbau und Bindungen",
                "author": "ChatGPT-4o & Jay",
                "date": "24.10.2024",
                "category": "Grundlagen",
                "description": "Die Grundlagen und Aufbau der Werkstofftechnik",
                "isCertified": false,
                "url": "kapitel_1/index.html"
            },
            {
                "id": "werk-002",
                "title": "Kapitel 2: Kristallographie und Strukturen",
                "author": "ChatGPT-4o & Jay",
                "date": "24.10.2024",
                "category": "Grundlagen",
                "description": "Die Grundlagen und Aufbau der Werkstofftechnik",
                "isCertified": false,
                "url": "kapitel_2/index.html"
            },
            {
                "id": "werk-003",
                "title": "Kapitel 3: Kristallbaufehler",
                "author": "ChatGPT-4o & Jay",
                "date": "24.10.2024",
                "category": "Grundlagen",
                "description": "Die Grundlagen und Aufbau der Werkstofftechnik",
                "isCertified": false,
                "url": "kapitel_3/index.html"
            },
        ]
    }
};

// 获取文章信息
function getArticleById(articleId) {
    for (const course in courseData) {
        const articles = courseData[course].articles;

        const foundArticle = articles.find(article => article.id === articleId);

        if (foundArticle) {
            return foundArticle;
        }
    }

    return null;
}

function closeAlert() {
    var alertBox = document.getElementById("alertBox");
    alertBox.style.display = "none";
}

try {
    let article = getArticleById(articleId);
    let articleInfo = document.getElementById("article-info");
    let isCertified = article.isCertified ? "certified" : 'not-certified';
    let isCertifiedStr = article.isCertified ? "Certified" : "Not-Certified";

    articleInfo.innerHTML = `
        <div class="meta-data">
            <span>Author: ${article.author}</span>
            <span>Last Update: ${article.date}</span>
            <span>Category: ${article.category}</span>
            Status: <span class="certification-status ${isCertified}">${isCertifiedStr}</span>
        </div>
    `;
} catch(err) {

}