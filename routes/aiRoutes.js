const express = require("express");
const router = express.Router();

// Q&A patterns: array of { keyword, answer } objects
const qaPairs = [
    { keyword: "duration", answer: "Test duration aap test card me dekh sakte ho." },
    { keyword: "time", answer: "Total time test ke card par likha hota hai." },
    { keyword: "marks", answer: "Har question ke marks test me diye gaye hain." },
    { keyword: "negative marking", answer: "Negative marking agar hai to test details me bataya gaya hai." },
    { keyword: "start", answer: "Start button par click karke test shuru karein." },
    { keyword: "how to start", answer: "Sabse pahle test card kholen, phir Start button dabayen." },
    { keyword: "question type", answer: "Is test me MCQ (multiple choice) questions hain." },
    { keyword: "skip", answer: "Kisi bhi question ko skip kar sakte hain, baad me wapas aa sakte hain." },
    { keyword: "review", answer: "Review button se apne answers check kar sakte hain." },
    { keyword: "submit", answer: "Test complete karne ke baad Submit button dabayen." },
    { keyword: "result", answer: "Test submit karne ke turant baad result dikh jayega." },
    { keyword: "passing marks", answer: "Passing marks test details me diye gaye hain." },
    { keyword: "syllabus", answer: "Syllabus aap test description me dekh sakte hain." },
    { keyword: "language", answer: "Test ki language typically English aur Hindi dono ho sakti hai." },
    { keyword: "help", answer: "Kisi bhi problem ke liye support team se sampark karein." }
];

// Function to find answer based on question
function getAnswer(question) {
    const lowerQ = question.toLowerCase();

    // Loop through all keyword patterns
    for (let pair of qaPairs) {
        if (lowerQ.includes(pair.keyword)) {
            return pair.answer;
        }
    }

    // Default answer if no keyword matched
    return "Ye test se related AI assistant hai. Kripya test se juda sawal puchhe. (Jaise: duration, marks, start, result, etc.)";
}

router.post("/ask", async (req, res) => {
    try {
        const { question } = req.body;
        const answer = getAnswer(question);
        res.json({ answer });
    } catch (err) {
        res.json({ answer: "Server error" });
    }
});

module.exports = router;