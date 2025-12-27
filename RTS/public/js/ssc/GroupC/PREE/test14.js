const questions = [
  {
  num: 1,
  question_en: "Choose the synonym of the word 'Abundant'.",
  question_hi: "'Abundant' शब्द का समानार्थी चुनिए।",
  options_en: ["Plentiful", "Scarce", "Limited", "Rare"],
  options_hi: ["प्रचुर", "कमी", "सीमित", "दुर्लभ"],
  answer_en: "Plentiful",
  answer_hi: "प्रचुर",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Choose the antonym of the word 'Permanent'.",
  question_hi: "'Permanent' शब्द का विलोम चुनिए।",
  options_en: ["Temporary", "Stable", "Fixed", "Lasting"],
  options_hi: ["अस्थायी", "स्थिर", "निश्चित", "स्थायी"],
  answer_en: "Temporary",
  answer_hi: "अस्थायी",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "One word for 'A person who speaks many languages'.",
  question_hi: "'जो व्यक्ति कई भाषाएँ बोलता है' उसके लिए एक शब्द।",
  options_en: ["Linguist", "Polyglot", "Bilingual", "Translator"],
  options_hi: ["भाषाविद्", "बहुभाषी", "द्विभाषी", "अनुवादक"],
  answer_en: "Polyglot",
  answer_hi: "बहुभाषी",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "Meaning of the idiom 'Break the ice'.",
  question_hi: "'Break the ice' मुहावरे का अर्थ क्या है?",
  options_en: ["Start conversation", "Stop talking", "Create problem", "Feel angry"],
  options_hi: ["बातचीत शुरू करना", "बात बंद करना", "समस्या पैदा करना", "गुस्सा होना"],
  answer_en: "Start conversation",
  answer_hi: "बातचीत शुरू करना",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Identify the error: She do not like coffee.",
  question_hi: "त्रुटि पहचानें: She do not like coffee.",
  options_en: ["She", "do", "not like", "coffee"],
  options_hi: ["She", "do", "not like", "coffee"],
  answer_en: "do",
  answer_hi: "do",
  attempted: false,
  selected: ""
},

{
  num: 6,
  question_en: "Fill in the blank: He ___ playing football.",
  question_hi: "रिक्त स्थान भरें: He ___ playing football.",
  options_en: ["is", "are", "were", "has"],
  options_hi: ["is", "are", "were", "has"],
  answer_en: "is",
  answer_hi: "is",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Change into passive voice: She writes a letter.",
  question_hi: "Passive voice में बदलें: She writes a letter.",
  options_en: [
    "A letter is written by her",
    "A letter was written by her",
    "A letter is being written",
    "A letter has written"
  ],
  options_hi: [
    "पत्र उसके द्वारा लिखा जाता है",
    "पत्र उसके द्वारा लिखा गया था",
    "पत्र लिखा जा रहा है",
    "पत्र ने लिखा"
  ],
  answer_en: "A letter is written by her",
  answer_hi: "पत्र उसके द्वारा लिखा जाता है",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Change into indirect speech: He said, 'I am tired.'",
  question_hi: "Indirect speech में बदलें: He said, 'I am tired.'",
  options_en: [
    "He said that he was tired",
    "He says that he is tired",
    "He said that I am tired",
    "He said that he is tired"
  ],
  options_hi: [
    "उसने कहा कि वह थका हुआ था",
    "वह कहता है कि वह थका है",
    "उसने कहा कि मैं थका हूँ",
    "उसने कहा कि वह थका है"
  ],
  answer_en: "He said that he was tired",
  answer_hi: "उसने कहा कि वह थका हुआ था",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "Choose the synonym of 'Brave'.",
  question_hi: "'Brave' का समानार्थी चुनिए।",
  options_en: ["Courageous", "Fearful", "Weak", "Coward"],
  options_hi: ["साहसी", "डरपोक", "कमज़ोर", "कायर"],
  answer_en: "Courageous",
  answer_hi: "साहसी",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Choose the antonym of 'Expand'.",
  question_hi: "'Expand' का विलोम चुनिए।",
  options_en: ["Contract", "Increase", "Grow", "Develop"],
  options_hi: ["सिकोड़ना", "बढ़ाना", "विकास", "फैलाना"],
  answer_en: "Contract",
  answer_hi: "सिकोड़ना",
  attempted: false,
  selected: ""
},

{
  num: 11,
  question_en: "One word for 'A place where books are kept'.",
  question_hi: "'जहाँ किताबें रखी जाती हैं' उसके लिए एक शब्द।",
  options_en: ["Library", "Laboratory", "Hostel", "Auditorium"],
  options_hi: ["पुस्तकालय", "प्रयोगशाला", "छात्रावास", "सभागार"],
  answer_en: "Library",
  answer_hi: "पुस्तकालय",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Meaning of the idiom 'Once in a blue moon'.",
  question_hi: "'Once in a blue moon' का अर्थ क्या है?",
  options_en: ["Very rarely", "Often", "Daily", "Suddenly"],
  options_hi: ["बहुत कम", "अक्सर", "रोज़", "अचानक"],
  answer_en: "Very rarely",
  answer_hi: "बहुत कम",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "Identify the error: He has completed his work yesterday.",
  question_hi: "त्रुटि पहचानें: He has completed his work yesterday.",
  options_en: ["He", "has completed", "his work", "yesterday"],
  options_hi: ["He", "has completed", "his work", "yesterday"],
  answer_en: "has completed",
  answer_hi: "has completed",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Fill in the blank: She is afraid ___ dogs.",
  question_hi: "रिक्त स्थान भरें: She is afraid ___ dogs.",
  options_en: ["of", "from", "with", "by"],
  options_hi: ["of", "from", "with", "by"],
  answer_en: "of",
  answer_hi: "of",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Change into passive voice: They are cleaning the room.",
  question_hi: "Passive voice में बदलें: They are cleaning the room.",
  options_en: [
    "The room is being cleaned",
    "The room was cleaned",
    "The room has been cleaned",
    "The room is cleaned"
  ],
  options_hi: [
    "कमरा साफ किया जा रहा है",
    "कमरा साफ किया गया",
    "कमरा साफ हो चुका है",
    "कमरा साफ होता है"
  ],
  answer_en: "The room is being cleaned",
  answer_hi: "कमरा साफ किया जा रहा है",
  attempted: false,
  selected: ""
},

{
  num: 16,
  question_en: "Choose the synonym of 'Rapid'.",
  question_hi: "'Rapid' का समानार्थी चुनिए।",
  options_en: ["Fast", "Slow", "Lazy", "Weak"],
  options_hi: ["तेज़", "धीमा", "आलसी", "कमज़ोर"],
  answer_en: "Fast",
  answer_hi: "तेज़",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "Choose the antonym of 'Honest'.",
  question_hi: "'Honest' का विलोम चुनिए।",
  options_en: ["Dishonest", "Truthful", "Fair", "Kind"],
  options_hi: ["बेईमान", "सत्यवादी", "निष्पक्ष", "दयालु"],
  answer_en: "Dishonest",
  answer_hi: "बेईमान",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "One word for 'A person who cannot read or write'.",
  question_hi: "'जो पढ़-लिख नहीं सकता' उसके लिए एक शब्द।",
  options_en: ["Illiterate", "Uneducated", "Scholar", "Literate"],
  options_hi: ["निरक्षर", "अशिक्षित", "विद्वान", "साक्षर"],
  answer_en: "Illiterate",
  answer_hi: "निरक्षर",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Meaning of the idiom 'Hit the nail on the head'.",
  question_hi: "'Hit the nail on the head' का अर्थ क्या है?",
  options_en: ["Say exactly right", "Make mistake", "Get angry", "Work hard"],
  options_hi: ["बिल्कुल सही कहना", "गलती करना", "गुस्सा होना", "मेहनत करना"],
  answer_en: "Say exactly right",
  answer_hi: "बिल्कुल सही कहना",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Identify the error: Each of the boys have done his duty.",
  question_hi: "त्रुटि पहचानें: Each of the boys have done his duty.",
  options_en: ["Each", "of the boys", "have done", "his duty"],
  options_hi: ["Each", "of the boys", "have done", "his duty"],
  answer_en: "have done",
  answer_hi: "have done",
  attempted: false,
  selected: ""
},

{
  num: 21,
  question_en: "Fill in the blank: He is good ___ mathematics.",
  question_hi: "रिक्त स्थान भरें: He is good ___ mathematics.",
  options_en: ["at", "in", "on", "for"],
  options_hi: ["at", "in", "on", "for"],
  answer_en: "at",
  answer_hi: "at",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Change into indirect speech: She said, 'I will come tomorrow.'",
  question_hi: "Indirect speech में बदलें: She said, 'I will come tomorrow.'",
  options_en: [
    "She said that she would come the next day",
    "She said that she will come tomorrow",
    "She says she would come tomorrow",
    "She said she comes tomorrow"
  ],
  options_hi: [
    "उसने कहा कि वह अगले दिन आएगी",
    "उसने कहा कि वह कल आएगी",
    "वह कहती है कि आएगी",
    "उसने कहा वह आती है"
  ],
  answer_en: "She said that she would come the next day",
  answer_hi: "उसने कहा कि वह अगले दिन आएगी",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Choose the synonym of 'Ancient'.",
  question_hi: "'Ancient' का समानार्थी चुनिए।",
  options_en: ["Old", "Modern", "New", "Fresh"],
  options_hi: ["प्राचीन", "आधुनिक", "नया", "ताज़ा"],
  answer_en: "Old",
  answer_hi: "प्राचीन",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Choose the antonym of 'Victory'.",
  question_hi: "'Victory' का विलोम चुनिए।",
  options_en: ["Defeat", "Success", "Win", "Achievement"],
  options_hi: ["हार", "सफलता", "जीत", "उपलब्धि"],
  answer_en: "Defeat",
  answer_hi: "हार",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "One word for 'A handwriting that cannot be read'.",
  question_hi: "'जो लिखावट पढ़ी न जा सके' उसके लिए एक शब्द।",
  options_en: ["Illegible", "Readable", "Clear", "Neat"],
  options_hi: ["अपठनीय", "पठनीय", "स्पष्ट", "साफ"],
  answer_en: "Illegible",
  answer_hi: "अपठनीय",
  attempted: false,
  selected: ""
},

{
  num: 26,
  question_en: "Meaning of the idiom 'At sixes and sevens'.",
  question_hi: "'At sixes and sevens' का अर्थ क्या है?",
  options_en: ["In confusion", "Very happy", "Very angry", "In danger"],
  options_hi: ["अव्यवस्था में", "बहुत खुश", "बहुत गुस्सा", "खतरे में"],
  answer_en: "In confusion",
  answer_hi: "अव्यवस्था में",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Identify the error: He is senior than me.",
  question_hi: "त्रुटि पहचानें: He is senior than me.",
  options_en: ["He", "is", "senior than", "me"],
  options_hi: ["He", "is", "senior than", "me"],
  answer_en: "senior than",
  answer_hi: "senior than",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Fill in the blank: She ___ already finished her work.",
  question_hi: "रिक्त स्थान भरें: She ___ already finished her work.",
  options_en: ["has", "have", "had", "is"],
  options_hi: ["has", "have", "had", "is"],
  answer_en: "has",
  answer_hi: "has",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Change into passive voice: Someone stole my bike.",
  question_hi: "Passive voice में बदलें: Someone stole my bike.",
  options_en: [
    "My bike was stolen",
    "My bike is stolen",
    "My bike has stolen",
    "My bike was stealing"
  ],
  options_hi: [
    "मेरी बाइक चुरा ली गई",
    "मेरी बाइक चोरी होती है",
    "मेरी बाइक ने चुराया",
    "मेरी बाइक चुरा रही थी"
  ],
  answer_en: "My bike was stolen",
  answer_hi: "मेरी बाइक चुरा ली गई",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Choose the synonym of 'Fragile'.",
  question_hi: "'Fragile' का समानार्थी चुनिए।",
  options_en: ["Delicate", "Strong", "Hard", "Rough"],
  options_hi: ["नाज़ुक", "मज़बूत", "कठोर", "खुरदुरा"],
  answer_en: "Delicate",
  answer_hi: "नाज़ुक",
  attempted: false,
  selected: ""
},

{
  num: 31,
  question_en: "Choose the antonym of 'Generous'.",
  question_hi: "'Generous' का विलोम चुनिए।",
  options_en: ["Stingy", "Kind", "Helpful", "Rich"],
  options_hi: ["कंजूस", "दयालु", "सहायक", "अमीर"],
  answer_en: "Stingy",
  answer_hi: "कंजूस",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "One word for 'A person who hates mankind'.",
  question_hi: "'जो मानव जाति से घृणा करता है' उसके लिए एक शब्द।",
  options_en: ["Misanthrope", "Philanthropist", "Optimist", "Pessimist"],
  options_hi: ["मानवद्वेषी", "परोपकारी", "आशावादी", "निराशावादी"],
  answer_en: "Misanthrope",
  answer_hi: "मानवद्वेषी",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Meaning of the idiom 'A blessing in disguise'.",
  question_hi: "'A blessing in disguise' का अर्थ क्या है?",
  options_en: ["Good thing in bad form", "Pure loss", "Clear danger", "Visible benefit"],
  options_hi: ["छिपा हुआ वरदान", "पूरा नुकसान", "स्पष्ट खतरा", "दिखने वाला लाभ"],
  answer_en: "Good thing in bad form",
  answer_hi: "छिपा हुआ वरदान",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Identify the error: One of my friend is absent.",
  question_hi: "त्रुटि पहचानें: One of my friend is absent.",
  options_en: ["One", "of my friend", "is", "absent"],
  options_hi: ["One", "of my friend", "is", "absent"],
  answer_en: "of my friend",
  answer_hi: "of my friend",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Fill in the blank: I look forward ___ you.",
  question_hi: "रिक्त स्थान भरें: I look forward ___ you.",
  options_en: ["to", "for", "at", "with"],
  options_hi: ["to", "for", "at", "with"],
  answer_en: "to",
  answer_hi: "to",
  attempted: false,
  selected: ""
},

{
  num: 36,
  question_en: "Change into indirect speech: She said, 'Can you help me?'",
  question_hi: "Indirect speech में बदलें: She said, 'Can you help me?'",
  options_en: [
    "She asked if I could help her",
    "She asked can I help her",
    "She said could you help me",
    "She asks if I help her"
  ],
  options_hi: [
    "उसने पूछा कि क्या मैं उसकी मदद कर सकता हूँ",
    "उसने पूछा क्या मैं मदद कर सकता हूँ",
    "उसने कहा क्या तुम मदद कर सकते हो",
    "वह पूछती है कि मैं मदद करूँ"
  ],
  answer_en: "She asked if I could help her",
  answer_hi: "उसने पूछा कि क्या मैं उसकी मदद कर सकता हूँ",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Choose the synonym of 'Silent'.",
  question_hi: "'Silent' का समानार्थी चुनिए।",
  options_en: ["Quiet", "Noisy", "Loud", "Talkative"],
  options_hi: ["शांत", "शोरगुल वाला", "ज़ोरदार", "बातूनी"],
  answer_en: "Quiet",
  answer_hi: "शांत",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Choose the antonym of 'Victory'.",
  question_hi: "'Victory' का विलोम चुनिए।",
  options_en: ["Defeat", "Win", "Success", "Gain"],
  options_hi: ["हार", "जीत", "सफलता", "लाभ"],
  answer_en: "Defeat",
  answer_hi: "हार",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "One word for 'A speech delivered without preparation'.",
  question_hi: "'बिना तैयारी दिया गया भाषण' के लिए एक शब्द।",
  options_en: ["Extempore", "Written", "Planned", "Prepared"],
  options_hi: ["तत्काल", "लिखित", "योजनाबद्ध", "तैयार"],
  answer_en: "Extempore",
  answer_hi: "तत्काल",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Meaning of the idiom 'In hot water'.",
  question_hi: "'In hot water' का अर्थ क्या है?",
  options_en: ["In trouble", "Relaxing", "Celebrating", "Enjoying"],
  options_hi: ["मुसीबत में", "आराम में", "जश्न में", "आनंद में"],
  answer_en: "In trouble",
  answer_hi: "मुसीबत में",
  attempted: false,
  selected: ""
},

{
  num: 41,
  question_en: "Identify the error: He did not went there.",
  question_hi: "त्रुटि पहचानें: He did not went there.",
  options_en: ["He", "did not", "went", "there"],
  options_hi: ["He", "did not", "went", "there"],
  answer_en: "went",
  answer_hi: "went",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Fill in the blank: She is fond ___ music.",
  question_hi: "रिक्त स्थान भरें: She is fond ___ music.",
  options_en: ["of", "in", "with", "for"],
  options_hi: ["of", "in", "with", "for"],
  answer_en: "of",
  answer_hi: "of",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Change into passive voice: The teacher praised the student.",
  question_hi: "Passive voice में बदलें: The teacher praised the student.",
  options_en: [
    "The student was praised by the teacher",
    "The student is praised",
    "The student has praised",
    "The student was praising"
  ],
  options_hi: [
    "छात्र की प्रशंसा शिक्षक द्वारा की गई",
    "छात्र की प्रशंसा होती है",
    "छात्र ने प्रशंसा की",
    "छात्र प्रशंसा कर रहा था"
  ],
  answer_en: "The student was praised by the teacher",
  answer_hi: "छात्र की प्रशंसा शिक्षक द्वारा की गई",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Choose the synonym of 'Wealthy'.",
  question_hi: "'Wealthy' का समानार्थी चुनिए।",
  options_en: ["Rich", "Poor", "Needy", "Weak"],
  options_hi: ["अमीर", "गरीब", "ज़रूरतमंद", "कमज़ोर"],
  answer_en: "Rich",
  answer_hi: "अमीर",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "Choose the antonym of 'Increase'.",
  question_hi: "'Increase' का विलोम चुनिए।",
  options_en: ["Decrease", "Grow", "Rise", "Expand"],
  options_hi: ["घटाना", "बढ़ना", "उठना", "फैलाना"],
  answer_en: "Decrease",
  answer_hi: "घटाना",
  attempted: false,
  selected: ""
},

{
  num: 46,
  question_en: "One word for 'A disease that spreads quickly'.",
  question_hi: "'जो बीमारी तेजी से फैलती है' उसके लिए एक शब्द।",
  options_en: ["Contagious", "Chronic", "Curable", "Minor"],
  options_hi: ["संक्रामक", "दीर्घकालिक", "उपचार योग्य", "मामूली"],
  answer_en: "Contagious",
  answer_hi: "संक्रामक",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Meaning of the idiom 'Burn the midnight oil'.",
  question_hi: "'Burn the midnight oil' का अर्थ क्या है?",
  options_en: ["Study late night", "Waste time", "Sleep early", "Relax"],
  options_hi: ["रात देर तक पढ़ना", "समय बर्बाद करना", "जल्दी सोना", "आराम करना"],
  answer_en: "Study late night",
  answer_hi: "रात देर तक पढ़ना",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Identify the error: The news are very shocking.",
  question_hi: "त्रुटि पहचानें: The news are very shocking.",
  options_en: ["The", "news", "are", "very shocking"],
  options_hi: ["The", "news", "are", "very shocking"],
  answer_en: "are",
  answer_hi: "are",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Fill in the blank: He is superior ___ me.",
  question_hi: "रिक्त स्थान भरें: He is superior ___ me.",
  options_en: ["to", "than", "from", "with"],
  options_hi: ["to", "than", "from", "with"],
  answer_en: "to",
  answer_hi: "to",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Choose the synonym of 'Brief'.",
  question_hi: "'Brief' का समानार्थी चुनिए।",
  options_en: ["Short", "Long", "Large", "Wide"],
  options_hi: ["छोटा", "लंबा", "बड़ा", "चौड़ा"],
  answer_en: "Short",
  answer_hi: "छोटा",
  attempted: false,
  selected: ""
}
];

// --------------------------- GLOBAL VARS -----------------------------
// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60; 
let timerInterval;

// ----------------- Load Question -----------------
function loadQuestion(index) {
    const q = questions[index];
    if (!q) return; //  undefined error fix

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach(option => {
        const isSelected = q.selected === option;

        const div = document.createElement("div");
        div.className = "option-box";

        div.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        div.innerHTML = `
            <input type="radio" name="option" value="${option}" 
            ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        div.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(div);
    });

    updateNavigation();
}

// ----------------- Attempt Mark -----------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// ----------------- Next / Previous -----------------
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// ----------------- Final Submit -----------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;

            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }
        } else {
            notAttempted++;
        }

        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted! Do you want to view result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}

// ----------------- Navigation Circles -----------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        nav.innerHTML += `
            <div class="circle" style="background:${color};"
            onclick="jumpToQuestion(${i})">${i + 1}</div>
        `;
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

// ----------------- Timer -----------------
function startTimer() {
    const timerElement = document.getElementById("timer");

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
            const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
            const seconds = String(timeLeft % 60).padStart(2, "0");

            timerElement.textContent = `Time Left: ${hours}:${minutes}:${seconds}`;
            timeLeft--;
        }
    }, 1000);
}

// ----------------- Camera & Movement Detection -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style = `
        position:fixed; top:10px; left:10px; width:130px; height:130px;
        border-radius:50%; overflow:hidden; border:3px solid red; z-index:9999;
    `;

    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsinline = true;
    video.style = "width:100%; height:100%; object-fit:cover;";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(() => alert("Camera access denied!"));
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;

    let lastData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, 160, 160);
        const data = ctx.getImageData(0, 0, 160, 160);

        if (lastData) {
            let diff = 0;
            for (let i = 0; i < data.data.length; i += 4) {
                diff += Math.abs(data.data[i] - lastData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;

                if (movementCount === 1) alert("⚠ Alert 1: No movement detected!");
                if (movementCount === 2) alert("⚠ Alert 2: Head not moving!");
                if (movementCount === 3) {
                    alert("⚠ Alert 3: Restarting test...");
                    restartTest();
                }
            }
        }
        lastData = data;

    }, 2000);
}

function restartTest() {
    if (videoStream) videoStream.getTracks().forEach(t => t.stop());

    const cam = document.getElementById("camera-container");
    if (cam) cam.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 60 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(0);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};