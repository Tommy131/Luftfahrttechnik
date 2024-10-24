// 定义课程数据集
const courseData = {
    "thermodynamik_1": {
        "courseTitle": "Thermodynamik I",
        "articles": []
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
        "articles": []
    },
    "ingenieurmathematik_1": {
        "courseTitle": "Ingenieurmathematik I",
        "articles": []
    },
    "werkstofftechnik_1": {
        "courseTitle": "Werkstofftechnik I",
        "articles": [
            {
                "id": "werk-001",
                "title": "Kapitel 1: Atomaufbau und Bindungen",
                "author": "ChatGPT-4o & Jay",
                "date": "24.10.2024",
                "category": "Einführung",
                "description": "Die Grundlagen und Aufbau der Werkstofftechnik",
                "url": "kapitel_1/index.html"
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