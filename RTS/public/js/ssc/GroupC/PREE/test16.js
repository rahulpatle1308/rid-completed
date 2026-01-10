const questions = [
  {
  num:1,
  question_en: "Choose the synonym of the word 'Eager'.",
  question_hi: "'Eager' शब्द का समानार्थी चुनिए।",
  options_en: ["Keen", "Lazy", "Slow", "Unwilling"],
  options_hi: ["उत्सुक", "आलसी", "धीमा", "अनिच्छुक"],
  answer_en: "Keen",
  answer_hi: "उत्सुक",
  attempted: false,
  selected: ""
},
{
  num:2,
  question_en: "Choose the antonym of the word 'Artificial'.",
  question_hi: "'Artificial' शब्द का विलोम चुनिए।",
  options_en: ["Natural", "False", "Made", "Plastic"],
  options_hi: ["प्राकृतिक", "झूठा", "बनावटी", "प्लास्टिक"],
  answer_en: "Natural",
  answer_hi: "प्राकृतिक",
  attempted: false,
  selected: ""
},
{
  num:3,
  question_en: "One word for 'A person who believes in God'.",
  question_hi: "'जो ईश्वर में विश्वास करता है' उसके लिए एक शब्द।",
  options_en: ["Theist", "Atheist", "Pessimist", "Agnostic"],
  options_hi: ["आस्तिक", "नास्तिक", "निराशावादी", "अज्ञेयवादी"],
  answer_en: "Theist",
  answer_hi: "आस्तिक",
  attempted: false,
  selected: ""
},
{
  num:4,
  question_en: "Meaning of the idiom 'By hook or by crook'.",
  question_hi: "'By hook or by crook' का अर्थ क्या है?",
  options_en: ["By any means", "Slowly", "Carefully", "Honestly"],
  options_hi: ["किसी भी तरह से", "धीरे-धीरे", "सावधानी से", "ईमानदारी से"],
  answer_en: "By any means",
  answer_hi: "किसी भी तरह से",
  attempted: false,
  selected: ""
},
{
  num:5,
  question_en: "Identify the error: She enjoys to sing songs.",
  question_hi: "त्रुटि पहचानें: She enjoys to sing songs.",
  options_en: ["She", "enjoys", "to sing", "songs"],
  options_hi: ["She", "enjoys", "to sing", "songs"],
  answer_en: "to sing",
  answer_hi: "to sing",
  attempted: false,
  selected: ""
},

{
  num:6,
  question_en: "Fill in the blank: He has been living here ___ 2015.",
  question_hi: "रिक्त स्थान भरें: He has been living here ___ 2015.",
  options_en: ["since", "for", "from", "by"],
  options_hi: ["since", "for", "from", "by"],
  answer_en: "since",
  answer_hi: "since",
  attempted: false,
  selected: ""
},
{
  num:7,
  question_en: "Change into passive voice: The police arrested the thief.",
  question_hi: "Passive voice में बदलें: The police arrested the thief.",
  options_en: [
    "The thief was arrested by the police",
    "The thief is arrested",
    "The thief has arrested",
    "The thief was arresting"
  ],
  options_hi: [
    "चोर को पुलिस ने गिरफ्तार किया",
    "चोर गिरफ्तार होता है",
    "चोर ने गिरफ्तार किया",
    "चोर गिरफ्तार कर रहा था"
  ],
  answer_en: "The thief was arrested by the police",
  answer_hi: "चोर को पुलिस ने गिरफ्तार किया",
  attempted: false,
  selected: ""
},
{
  num:8,
  question_en: "Change into indirect speech: He said, 'I can solve this problem.'",
  question_hi: "Indirect speech में बदलें: He said, 'I can solve this problem.'",
  options_en: [
    "He said that he could solve that problem",
    "He said that he can solve this problem",
    "He says that he could solve it",
    "He said he can solve it"
  ],
  options_hi: [
    "उसने कहा कि वह उस समस्या को हल कर सकता था",
    "उसने कहा कि वह इस समस्या को हल कर सकता है",
    "वह कहता है कि वह हल कर सकता था",
    "उसने कहा कि वह हल कर सकता है"
  ],
  answer_en: "He said that he could solve that problem",
  answer_hi: "उसने कहा कि वह उस समस्या को हल कर सकता था",
  attempted: false,
  selected: ""
},
{
  num:9,
  question_en: "Choose the synonym of 'Intelligent'.",
  question_hi: "'Intelligent' का समानार्थी चुनिए।",
  options_en: ["Clever", "Dull", "Foolish", "Lazy"],
  options_hi: ["चतुर", "सुस्त", "मूर्ख", "आलसी"],
  answer_en: "Clever",
  answer_hi: "चतुर",
  attempted: false,
  selected: ""
},
{
  num:10,
  question_en: "Choose the antonym of 'Accept'.",
  question_hi: "'Accept' का विलोम चुनिए।",
  options_en: ["Reject", "Take", "Allow", "Agree"],
  options_hi: ["अस्वीकार करना", "लेना", "अनुमति देना", "सहमत होना"],
  answer_en: "Reject",
  answer_hi: "अस्वीकार करना",
  attempted: false,
  selected: ""
},

{
  num:11,
  question_en: "One word for 'A person who travels from place to place'.",
  question_hi: "'जो स्थान-स्थान घूमता है' उसके लिए एक शब्द।",
  options_en: ["Nomad", "Tourist", "Citizen", "Native"],
  options_hi: ["घुमंतू", "पर्यटक", "नागरिक", "स्थानीय"],
  answer_en: "Nomad",
  answer_hi: "घुमंतू",
  attempted: false,
  selected: ""
},
{
  num:12,
  question_en: "Meaning of the idiom 'Spill the beans'.",
  question_hi: "'Spill the beans' का अर्थ क्या है?",
  options_en: ["Reveal secret", "Cook food", "Waste money", "Make noise"],
  options_hi: ["राज़ खोलना", "खाना बनाना", "पैसा बर्बाद करना", "शोर करना"],
  answer_en: "Reveal secret",
  answer_hi: "राज़ खोलना",
  attempted: false,
  selected: ""
},
{
  num:13,
  question_en: "Identify the error: He is more smarter than his brother.",
  question_hi: "त्रुटि पहचानें: He is more smarter than his brother.",
  options_en: ["He", "is more", "smarter", "than his brother"],
  options_hi: ["He", "is more", "smarter", "than his brother"],
  answer_en: "more",
  answer_hi: "more",
  attempted: false,
  selected: ""
},
{
  num:14,
  question_en: "Fill in the blank: She insisted ___ paying the bill.",
  question_hi: "रिक्त स्थान भरें: She insisted ___ paying the bill.",
  options_en: ["on", "for", "to", "with"],
  options_hi: ["on", "for", "to", "with"],
  answer_en: "on",
  answer_hi: "on",
  attempted: false,
  selected: ""
},
{
  num:15,
  question_en: "Change into passive voice: They will announce the result tomorrow.",
  question_hi: "Passive voice में बदलें: They will announce the result tomorrow.",
  options_en: [
    "The result will be announced tomorrow",
    "The result is announced tomorrow",
    "The result was announced tomorrow",
    "The result has announced tomorrow"
  ],
  options_hi: [
    "परिणाम कल घोषित किया जाएगा",
    "परिणाम कल घोषित होता है",
    "परिणाम कल घोषित किया गया",
    "परिणाम ने घोषित किया"
  ],
  answer_en: "The result will be announced tomorrow",
  answer_hi: "परिणाम कल घोषित किया जाएगा",
  attempted: false,
  selected: ""
},

{
  num:16,
  question_en: "Choose the synonym of 'Famous'.",
  question_hi: "'Famous' का समानार्थी चुनिए।",
  options_en: ["Renowned", "Unknown", "Hidden", "Ordinary"],
  options_hi: ["प्रसिद्ध", "अज्ञात", "छिपा हुआ", "साधारण"],
  answer_en: "Renowned",
  answer_hi: "प्रसिद्ध",
  attempted: false,
  selected: ""
},
{
  num:17,
  question_en: "Choose the antonym of 'Empty'.",
  question_hi: "'Empty' का विलोम चुनिए।",
  options_en: ["Full", "Vacant", "Hollow", "Blank"],
  options_hi: ["भरा हुआ", "खाली", "खोखला", "रिक्त"],
  answer_en: "Full",
  answer_hi: "भरा हुआ",
  attempted: false,
  selected: ""
},
{
  num:18,
  question_en: "One word for 'A person who speaks two languages'.",
  question_hi: "'जो दो भाषाएँ बोलता है' उसके लिए एक शब्द।",
  options_en: ["Bilingual", "Multilingual", "Translator", "Linguist"],
  options_hi: ["द्विभाषी", "बहुभाषी", "अनुवादक", "भाषाविद्"],
  answer_en: "Bilingual",
  answer_hi: "द्विभाषी",
  attempted: false,
  selected: ""
},
{
  num:19,
  question_en: "Meaning of the idiom 'Under the weather'.",
  question_hi: "'Under the weather' का अर्थ क्या है?",
  options_en: ["Ill", "Happy", "Angry", "Busy"],
  options_hi: ["बीमार", "खुश", "गुस्से में", "व्यस्त"],
  answer_en: "Ill",
  answer_hi: "बीमार",
  attempted: false,
  selected: ""
},
{
  num:20,
  question_en: "Identify the error: Neither of the answers are correct.",
  question_hi: "त्रुटि पहचानें: Neither of the answers are correct.",
  options_en: ["Neither", "of the answers", "are", "correct"],
  options_hi: ["Neither", "of the answers", "are", "correct"],
  answer_en: "are",
  answer_hi: "are",
  attempted: false,
  selected: ""
},

{
  num:21,
  question_en: "Fill in the blank: He succeeded ___ hard work.",
  question_hi: "रिक्त स्थान भरें: He succeeded ___ hard work.",
  options_en: ["through", "by", "with", "in"],
  options_hi: ["through", "by", "with", "in"],
  answer_en: "through",
  answer_hi: "through",
  attempted: false,
  selected: ""
},
{
  num:22,
  question_en: "Change into indirect speech: She said, 'Where do you live?'",
  question_hi: "Indirect speech में बदलें: She said, 'Where do you live?'",
  options_en: [
    "She asked where I lived",
    "She asked where do you live",
    "She said where I live",
    "She asks where I lived"
  ],
  options_hi: [
    "उसने पूछा कि मैं कहाँ रहता हूँ",
    "उसने पूछा तुम कहाँ रहते हो",
    "उसने कहा मैं कहाँ रहता हूँ",
    "वह पूछती है कि मैं कहाँ रहता था"
  ],
  answer_en: "She asked where I lived",
  answer_hi: "उसने पूछा कि मैं कहाँ रहता हूँ",
  attempted: false,
  selected: ""
},
{
  num:23,
  question_en: "Choose the synonym of 'Dangerous'.",
  question_hi: "'Dangerous' का समानार्थी चुनिए।",
  options_en: ["Risky", "Safe", "Secure", "Harmless"],
  options_hi: ["खतरनाक", "सुरक्षित", "महफूज़", "हानिरहित"],
  answer_en: "Risky",
  answer_hi: "खतरनाक",
  attempted: false,
  selected: ""
},
{
  num:24,
  question_en: "Choose the antonym of 'Ancient'.",
  question_hi: "'Ancient' का विलोम चुनिए।",
  options_en: ["Modern", "Old", "Antique", "Historic"],
  options_hi: ["आधुनिक", "पुराना", "प्राचीन", "ऐतिहासिक"],
  answer_en: "Modern",
  answer_hi: "आधुनिक",
  attempted: false,
  selected: ""
},
{
  num:25,
  question_en: "One word for 'A person who looks on the bright side of life'.",
  question_hi: "'जो जीवन के उजले पक्ष को देखता है' उसके लिए एक शब्द।",
  options_en: ["Optimist", "Pessimist", "Realist", "Critic"],
  options_hi: ["आशावादी", "निराशावादी", "यथार्थवादी", "आलोचक"],
  answer_en: "Optimist",
  answer_hi: "आशावादी",
  attempted: false,
  selected: ""
},

{
  num:26,
  question_en: "Meaning of the idiom 'Make both ends meet'.",
  question_hi: "'Make both ends meet' का अर्थ क्या है?",
  options_en: ["Manage expenses", "Earn a lot", "Save money", "Waste money"],
  options_hi: ["खर्च चलाना", "बहुत कमाना", "पैसा बचाना", "पैसा बर्बाद करना"],
  answer_en: "Manage expenses",
  answer_hi: "खर्च चलाना",
  attempted: false,
  selected: ""
},
{
  num:27,
  question_en: "Identify the error: She is suffering with fever.",
  question_hi: "त्रुटि पहचानें: She is suffering with fever.",
  options_en: ["She", "is suffering", "with", "fever"],
  options_hi: ["She", "is suffering", "with", "fever"],
  answer_en: "with",
  answer_hi: "with",
  attempted: false,
  selected: ""
},
{
  num:28,
  question_en: "Fill in the blank: He prevented me ___ going there.",
  question_hi: "रिक्त स्थान भरें: He prevented me ___ going there.",
  options_en: ["from", "to", "for", "with"],
  options_hi: ["from", "to", "for", "with"],
  answer_en: "from",
  answer_hi: "from",
  attempted: false,
  selected: ""
},
{
  num:29,
  question_en: "Change into passive voice: People speak English all over the world.",
  question_hi: "Passive voice में बदलें: People speak English all over the world.",
  options_en: [
    "English is spoken all over the world",
    "English was spoken all over the world",
    "English has spoken all over the world",
    "English is speaking all over the world"
  ],
  options_hi: [
    "अंग्रेज़ी पूरी दुनिया में बोली जाती है",
    "अंग्रेज़ी पूरी दुनिया में बोली गई",
    "अंग्रेज़ी ने बोला",
    "अंग्रेज़ी बोल रही है"
  ],
  answer_en: "English is spoken all over the world",
  answer_hi: "अंग्रेज़ी पूरी दुनिया में बोली जाती है",
  attempted: false,
  selected: ""
},
{
  num:30,
  question_en: "Choose the synonym of 'Huge'.",
  question_hi: "'Huge' का समानार्थी चुनिए।",
  options_en: ["Enormous", "Tiny", "Small", "Little"],
  options_hi: ["विशाल", "छोटा", "नन्हा", "थोड़ा"],
  answer_en: "Enormous",
  answer_hi: "विशाल",
  attempted: false,
  selected: ""
},

{
  num:31,
  question_en: "Choose the antonym of 'Victory'.",
  question_hi: "'Victory' का विलोम चुनिए।",
  options_en: ["Defeat", "Win", "Success", "Achievement"],
  options_hi: ["हार", "जीत", "सफलता", "उपलब्धि"],
  answer_en: "Defeat",
  answer_hi: "हार",
  attempted: false,
  selected: ""
},
{
  num:32,
  question_en: "One word for 'A person who is fond of books'.",
  question_hi: "'जो किताबों का शौकीन है' उसके लिए एक शब्द।",
  options_en: ["Bibliophile", "Editor", "Librarian", "Publisher"],
  options_hi: ["पुस्तक प्रेमी", "संपादक", "पुस्तकालयाध्यक्ष", "प्रकाशक"],
  answer_en: "Bibliophile",
  answer_hi: "पुस्तक प्रेमी",
  attempted: false,
  selected: ""
},
{
  num:33,
  question_en: "Meaning of the idiom 'Call it a day'.",
  question_hi: "'Call it a day' का अर्थ क्या है?",
  options_en: ["Stop working", "Start working", "Celebrate", "Postpone"],
  options_hi: ["काम बंद करना", "काम शुरू करना", "जश्न मनाना", "टालना"],
  answer_en: "Stop working",
  answer_hi: "काम बंद करना",
  attempted: false,
  selected: ""
},
{
  num:34,
  question_en: "Identify the error: He gave me many informations.",
  question_hi: "त्रुटि पहचानें: He gave me many informations.",
  options_en: ["He", "gave", "many informations", "me"],
  options_hi: ["He", "gave", "many informations", "me"],
  answer_en: "many informations",
  answer_hi: "many informations",
  attempted: false,
  selected: ""
},
{
  num:35,
  question_en: "Fill in the blank: She has no interest ___ politics.",
  question_hi: "रिक्त स्थान भरें: She has no interest ___ politics.",
  options_en: ["in", "on", "with", "for"],
  options_hi: ["in", "on", "with", "for"],
  answer_en: "in",
  answer_hi: "in",
  attempted: false,
  selected: ""
},

{
  num:36,
  question_en: "Change into indirect speech: He said, 'Do your homework.'",
  question_hi: "Indirect speech में बदलें: He said, 'Do your homework.'",
  options_en: [
    "He told me to do my homework",
    "He said do your homework",
    "He asked me that I do homework",
    "He told me that do homework"
  ],
  options_hi: [
    "उसने मुझे होमवर्क करने को कहा",
    "उसने कहा होमवर्क करो",
    "उसने पूछा कि मैं होमवर्क करूँ",
    "उसने कहा कि होमवर्क करो"
  ],
  answer_en: "He told me to do my homework",
  answer_hi: "उसने मुझे होमवर्क करने को कहा",
  attempted: false,
  selected: ""
},
{
  num:37,
  question_en: "Choose the synonym of 'Correct'.",
  question_hi: "'Correct' का समानार्थी चुनिए।",
  options_en: ["Accurate", "Wrong", "False", "Incorrect"],
  options_hi: ["सही", "गलत", "झूठा", "अशुद्ध"],
  answer_en: "Accurate",
  answer_hi: "सही",
  attempted: false,
  selected: ""
},
{
  num:38,
  question_en: "Choose the antonym of 'Cheap'.",
  question_hi: "'Cheap' का विलोम चुनिए।",
  options_en: ["Expensive", "Low", "Small", "Easy"],
  options_hi: ["महँगा", "कम", "छोटा", "आसान"],
  answer_en: "Expensive",
  answer_hi: "महँगा",
  attempted: false,
  selected: ""
},
{
  num:39,
  question_en: "One word for 'A person who speaks less'.",
  question_hi: "'जो कम बोलता है' उसके लिए एक शब्द।",
  options_en: ["Taciturn", "Talkative", "Speaker", "Narrator"],
  options_hi: ["मितभाषी", "बातूनी", "वक्ता", "वर्णनकर्ता"],
  answer_en: "Taciturn",
  answer_hi: "मितभाषी",
  attempted: false,
  selected: ""
},
{
  num:40,
  question_en: "Meaning of the idiom 'On cloud nine'.",
  question_hi: "'On cloud nine' का अर्थ क्या है?",
  options_en: ["Very happy", "Very sad", "Very angry", "Confused"],
  options_hi: ["बहुत खुश", "बहुत दुखी", "बहुत गुस्से में", "उलझन में"],
  answer_en: "Very happy",
  answer_hi: "बहुत खुश",
  attempted: false,
  selected: ""
},

{
  num:41,
  question_en: "Identify the error: She does not knows the answer.",
  question_hi: "त्रुटि पहचानें: She does not knows the answer.",
  options_en: ["She", "does not", "knows", "the answer"],
  options_hi: ["She", "does not", "knows", "the answer"],
  answer_en: "knows",
  answer_hi: "knows",
  attempted: false,
  selected: ""
},
{
  num:42,
  question_en: "Fill in the blank: He congratulated me ___ my success.",
  question_hi: "रिक्त स्थान भरें: He congratulated me ___ my success.",
  options_en: ["on", "for", "to", "with"],
  options_hi: ["on", "for", "to", "with"],
  answer_en: "on",
  answer_hi: "on",
  attempted: false,
  selected: ""
},
{
  num:43,
  question_en: "Change into passive voice: The manager will review the report.",
  question_hi: "Passive voice में बदलें: The manager will review the report.",
  options_en: [
    "The report will be reviewed by the manager",
    "The report is reviewed",
    "The report was reviewed",
    "The report has reviewed"
  ],
  options_hi: [
    "रिपोर्ट की समीक्षा प्रबंधक द्वारा की जाएगी",
    "रिपोर्ट की समीक्षा होती है",
    "रिपोर्ट की समीक्षा हुई",
    "रिपोर्ट ने समीक्षा की"
  ],
  answer_en: "The report will be reviewed by the manager",
  answer_hi: "रिपोर्ट की समीक्षा प्रबंधक द्वारा की जाएगी",
  attempted: false,
  selected: ""
},
{
  num:44,
  question_en: "Choose the synonym of 'Quiet'.",
  question_hi: "'Quiet' का समानार्थी चुनिए।",
  options_en: ["Silent", "Noisy", "Loud", "Shouting"],
  options_hi: ["शांत", "शोरगुल वाला", "ज़ोरदार", "चिल्लाता हुआ"],
  answer_en: "Silent",
  answer_hi: "शांत",
  attempted: false,
  selected: ""
},
{
  num:45,
  question_en: "Choose the antonym of 'Early'.",
  question_hi: "'Early' का विलोम चुनिए।",
  options_en: ["Late", "Fast", "Soon", "Quick"],
  options_hi: ["देर से", "तेज़", "जल्दी", "शीघ्र"],
  answer_en: "Late",
  answer_hi: "देर से",
  attempted: false,
  selected: ""
},

{
  num:46,
  question_en: "One word for 'A person who cannot be corrected'.",
  question_hi: "'जिसे सुधारा न जा सके' उसके लिए एक शब्द।",
  options_en: ["Incorrigible", "Correctable", "Flexible", "Obedient"],
  options_hi: ["असुधारनीय", "सुधार योग्य", "लचीला", "आज्ञाकारी"],
  answer_en: "Incorrigible",
  answer_hi: "असुधारनीय",
  attempted: false,
  selected: ""
},
{
  num:47,
  question_en: "Meaning of the idiom 'Put off'.",
  question_hi: "'Put off' का अर्थ क्या है?",
  options_en: ["Postpone", "Start", "Finish", "Accept"],
  options_hi: ["टालना", "शुरू करना", "समाप्त करना", "स्वीकार करना"],
  answer_en: "Postpone",
  answer_hi: "टालना",
  attempted: false,
  selected: ""
},
{
  num:48,
  question_en: "Identify the error: She prefers tea than coffee.",
  question_hi: "त्रुटि पहचानें: She prefers tea than coffee.",
  options_en: ["She", "prefers", "tea than", "coffee"],
  options_hi: ["She", "prefers", "tea than", "coffee"],
  answer_en: "tea than",
  answer_hi: "tea than",
  attempted: false,
  selected: ""
},
{
  num:49,
  question_en: "Fill in the blank: He is accustomed ___ hard work.",
  question_hi: "रिक्त स्थान भरें: He is accustomed ___ hard work.",
  options_en: ["to", "with", "for", "in"],
  options_hi: ["to", "with", "for", "in"],
  answer_en: "to",
  answer_hi: "to",
  attempted: false,
  selected: ""
},
{
  num:50,
  question_en: "Choose the synonym of 'Difficult'.",
  question_hi: "'Difficult' का समानार्थी चुनिए।",
  options_en: ["Hard", "Easy", "Simple", "Clear"],
  options_hi: ["कठिन", "आसान", "सरल", "स्पष्ट"],
  answer_en: "Hard",
  answer_hi: "कठिन",
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