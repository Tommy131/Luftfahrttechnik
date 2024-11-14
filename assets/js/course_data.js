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
 * @LastEditTime : 2024-11-14 10:20:47
 * @E-Mail       : support@owoblog.com
 * @Telegram     : https://t.me/HanskiJay
 * @GitHub       : https://github.com/Tommy131
 */
// 定义课程模块
const subjects = [
    { name: "Thermodynamik I", url: "Thermodynamik-I", description: "Grundlegende Konzepte und Anwendungen der Thermodynamik verstehen." },
    { name: "Statik", url: "Statik", description: "Grundprinzipien der Mechanik und Strukturanalyse erlernen." },
    { name: "Konstruktion", url: "Konstruktion", description: "Grundlegende Fähigkeiten im Design und Bau beherrschen." },
    { name: "Ingenieurinformatik", url: "Ingenieurinformatik", description: "Programmierung und Informationstechnologie im Ingenieurwesen." },
    { name: "Ingenieurmathematik I", url: "Ingenieurmathematik-I", description: "Grundlagen und Anwendungen der Ingenieurmathematik." },
    { name: "Werkstofftechnik I", url: "Werkstofftechnik-I", description: "Grundlagen und Praxis der Materialwissenschaft." }
];

subjects.forEach((subject, index) => {
    subjects[index].url = "subject.html?subjectId=" + subject.url;
});


// 定义课程文章数据集
const subjectData = {
    "Thermodynamik-I": {
        name: "Thermodynamik I",
        chapters: [
            {
                id: "thermo-001",
                title: "Kapitel 1: Grundlagen der Thermodynamik",
                type: "markdown",
                author: "Jay",
                date: "2024.10.25",
                category: "Grundlagen",
                description: "Grundlagen der Thermodynamik",
                isCertified: false
            },
            {
                id: "thermo-002",
                title: "Kapitel 2: Energie und Entropie (Hauptsätze der Thermodynamik)",
                type: "markdown",
                author: "Jay",
                date: "2024.10.25",
                category: "Grundlagen",
                description: "Hauptsätze der Thermodynamik",
                isCertified: false
            },
        ]
    },
    "Statik": {
        name: "Statik",
        chapters: [
            {
                id: "modul-001",
                title: "Modul 1: Grundlagen der Technische Mechanik 1",
                type: "markdown",
                author: "ChatGPT-4o (translated) & Dr. Herr König",
                date: "2024.11.12",
                category: "Grundlagen",
                description: "Grundlagen der Technische Mechanik 1",
                isCertified: true
            },
            {
                id: "modul-002",
                title: "Modul 2: Grundlagen der Statik 1",
                type: "markdown",
                author: "ChatGPT-4o (translated) & Dr. Herr König",
                date: "2024.11.12",
                category: "Grundlagen",
                description: "Grundlagen der Statik 1",
                isCertified: true
            },
            {
                id: "modul-003",
                title: "Modul 3: Prinzipien & Freischneideübungen",
                type: "markdown",
                author: "ChatGPT-4o (translated) & Dr. Herr König",
                date: "2024.11.12",
                category: "Grundlagen",
                description: "Prinzipien & Freischneideübungen",
                isCertified: true
            },
            {
                id: "modul-004",
                title: "Modul 4: Kräfteübertragung",
                type: "markdown",
                author: "ChatGPT-4o (translated) & Dr. Herr König",
                date: "2024.11.12",
                category: "Grundlagen",
                description: "Kräfteübertragung",
                isCertified: true
            },
            {
                id: "modul-005",
                title: "Modul 5: Kräftesysteme",
                type: "markdown",
                author: "ChatGPT-4o (translated) & Dr. Herr König",
                date: "2024.11.12",
                category: "Grundlagen",
                description: "Kräftesysteme",
                isCertified: true
            },
            {
                id: "modul-006",
                title: "Modul 6: Gleichgewicht",
                type: "markdown",
                author: "ChatGPT-4o (translated) & Dr. Herr König",
                date: "2024.11.12",
                category: "Grundlagen",
                description: "Gleichgewicht",
                isCertified: true
            },
            {
                id: "modul-007",
                title: "Modul 7: Momentenwirkung einer Einzelkraft",
                type: "markdown",
                author: "Dr. Herr König",
                date: "2024.11.12",
                category: "Grundlagen",
                description: "Momentenwirkung einer Einzelkraft",
                isCertified: true
            },
            {
                id: "modul-008",
                title: "Modul 8: Übungsaufgaben",
                type: "markdown",
                author: "Dr. Herr König",
                date: "2024.11.12",
                category: "Grundlagen",
                description: "Übungsaufgaben",
                isCertified: true
            },
            {
                id: "modul-009",
                title: "Modul 9: Allgemeines räumliches Kräftesystem",
                type: "markdown",
                author: "Dr. Herr König",
                date: "2024.11.12",
                category: "Grundlagen",
                description: "Allgemeines räumliches Kräftesystem",
                isCertified: true
            },
            {
                id: "modul-010",
                title: "Modul 10: Tragwerke",
                type: "markdown",
                author: "Dr. Herr König",
                date: "2024.11.12",
                category: "Grundlagen",
                description: "Tragwerke",
                isCertified: true
            },
            {
                id: "modul-011",
                title: "Modul 11: Übungsaufgaben zur Tragwerke",
                type: "markdown",
                author: "Dr. Herr König",
                date: "2024.11.12",
                category: "Grundlagen",
                description: "Übungsaufgaben zur Tragwerke",
                isCertified: true
            },
    ]
    },
    "Konstruktion": {
        name: "Konstruktion",
        chapters: []
    },
    "Ingenieurinformatik": {
        name: "Ingenieurinformatik",
        chapters: [
            {
                id: "informatik-001",
                title: "Kapitel 1: Zahlensysteme und Binäre Informationsdarstellung",
                type: "html",
                author: "Jay",
                date: "2024.10.24",
                category: "Grundlagen",
                description: "Zahlensysteme",
                isCertified: false
            },
            {
                id: "informatik-003",
                title: "Kapitel 3: Algorithmen Grundlagen",
                type: "html",
                author: "Jay",
                date: "2024.10.24",
                category: "Grundlagen",
                description: "Algorithmen Grundlagen",
                isCertified: false
            },
            {
                id: "informatik-004",
                title: "Kapitel 4: Algorithmen in Java",
                type: "html",
                author: "Jay",
                date: "2024.10.24",
                category: "Grundlagen",
                description: "Algorithmen in Java",
                isCertified: false
            },
        ]
    },
    "Ingenieurmathematik-I": {
        name: "Ingenieurmathematik I",
        chapters: [
            {
                id: "mathe-000",
                title: "Einführung: Videos für Selbstlernen",
                type: "html",
                author: "Jay",
                date: "2024.10.24",
                category: "Einführung",
                description: "Videos von YouTube: MathebyDanielJung",
                isCertified: true
            },
            {
                id: "mathe-001",
                title: "1 Mapping",
                type: "md",
                author: "Jay",
                date: "2024.11.14",
                category: "Grundlagen",
                description: "Grundlagen der Ingenieurmathematik",
                isCertified: true
            },
            {
                id: "mathe-002",
                title: "2 Definitionen der Funktion",
                type: "md",
                author: "Jay",
                date: "2024.11.14",
                category: "Grundlagen",
                description: "Grundlagen der Ingenieurmathematik",
                isCertified: true
            },
        ]
    },
    "Werkstofftechnik-I": {
        name: "Werkstofftechnik I",
        chapters: [
            {
                id: "werk-001",
                title: "Kapitel 1: Atomaufbau und Bindungen",
                type: "html",
                author: "ChatGPT-4o & Jay",
                date: "2024.10.24",
                category: "Grundlagen",
                description: "Die Grundlagen und Aufbau der Werkstofftechnik",
                isCertified: false,
                pdf: [
                    "1_WT1_Intro+bindungen_Fragenkatalog.pdf"
                ]
            },
            {
                id: "werk-002",
                title: "Kapitel 2: Kristallographie und Strukturen",
                type: "html",
                author: "ChatGPT-4o & Jay",
                date: "2024.10.24",
                category: "Grundlagen",
                description: "Die Grundlagen und Aufbau der Werkstofftechnik",
                isCertified: false,
                pdf: [
                    "2_WT1_Strukturen_Fragenkatalog.pdf"
                ]
            },
            {
                id: "werk-003",
                title: "Kapitel 3: Kristallbaufehler",
                type: "html",
                author: "ChatGPT-4o & Jay",
                date: "2024.10.24",
                category: "Grundlagen",
                description: "Die Grundlagen und Aufbau der Werkstofftechnik",
                isCertified: false
            },
            {
                id: "werk-004",
                title: "Kapitel 4: Materialwissenschaft - Mechanische Eigenschaften",
                type: "md",
                author: "ChatGPT-4o & Jay",
                date: "2024.10.30",
                category: "Grundlagen",
                description: "Die Grundlagen und Aufbau der Werkstofftechnik",
                isCertified: false
            },
        ]
    }
};

// 获取文章信息
function getChapterById(chapterId) {
    for (const subjectTagName in subjectData) {
        const subject = subjectData[subjectTagName].chapters;

        const foundChapter = subject.find(chapter => chapter.id === chapterId);

        if (foundChapter) {
            foundChapter["subject"] = subjectTagName;
            return foundChapter;
        }
    }

    return null;
}