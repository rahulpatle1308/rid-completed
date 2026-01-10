const questions=[
  {
    "num": 1,
    "question_en": "What is Node.js primarily used for?",
    "question_hi": "Node.js मुख्य रूप से किसके लिए उपयोग किया जाता है?",
    "options_en": ["Frontend development", "Backend development", "Mobile app development", "Game development"],
    "options_hi": ["फ्रंटएंड डेवलपमेंट", "बैकएंड डेवलपमेंट", "मोबाइल ऐप डेवलपमेंट", "गेम डेवलपमेंट"],
    "answer_en": "Backend development",
    "answer_hi": "बैकएंड डेवलपमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Node.js is built on which JavaScript engine?",
    "question_hi": "Node.js किस JavaScript इंजन पर आधारित है?",
    "options_en": ["V8", "SpiderMonkey", "Chakra", "Nashorn"],
    "options_hi": ["V8", "स्पाइडरमंकी", "चक्रा", "नैशॉर्न"],
    "answer_en": "V8",
    "answer_hi": "V8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which command initializes a Node.js project?",
    "question_hi": "Node.js प्रोजेक्ट शुरू करने के लिए कौन सा कमांड है?",
    "options_en": ["node init", "npm init", "npm start", "node start"],
    "options_hi": ["node init", "npm init", "npm start", "node start"],
    "answer_en": "npm init",
    "answer_hi": "npm init",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which file contains project configuration?",
    "question_hi": "प्रोजेक्ट की कॉन्फ़िगरेशन किस फाइल में होती है?",
    "options_en": ["index.js", "server.js", "package.json", "config.js"],
    "options_hi": ["index.js", "server.js", "package.json", "config.js"],
    "answer_en": "package.json",
    "answer_hi": "package.json",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which module is used to create a server?",
    "question_hi": "सर्वर बनाने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["http", "fs", "url", "path"],
    "options_hi": ["http", "fs", "url", "path"],
    "answer_en": "http",
    "answer_hi": "http",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Node.js follows which architecture?",
    "question_hi": "Node.js किस आर्किटेक्चर को फॉलो करता है?",
    "options_en": ["Single-threaded", "Multi-threaded", "Dual-threaded", "No-thread"],
    "options_hi": ["सिंगल थ्रेडेड", "मल्टी थ्रेडेड", "ड्यूल थ्रेडेड", "नो थ्रेड"],
    "answer_en": "Single-threaded",
    "answer_hi": "सिंगल थ्रेडेड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which I/O model does Node.js use?",
    "question_hi": "Node.js कौन सा I/O मॉडल उपयोग करता है?",
    "options_en": ["Blocking", "Non-blocking", "Synchronous", "Sequential"],
    "options_hi": ["ब्लॉकिंग", "नॉन-ब्लॉकिंग", "सिंक्रोनस", "सीक्वेंशियल"],
    "answer_en": "Non-blocking",
    "answer_hi": "नॉन-ब्लॉकिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which keyword is used to import modules?",
    "question_hi": "मॉड्यूल इम्पोर्ट करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["require", "import", "include", "load"],
    "options_hi": ["require", "import", "include", "load"],
    "answer_en": "require",
    "answer_hi": "require",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which module handles file system operations?",
    "question_hi": "फाइल सिस्टम ऑपरेशन के लिए कौन सा मॉड्यूल है?",
    "options_en": ["fs", "http", "os", "events"],
    "options_hi": ["fs", "http", "os", "events"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which framework is most popular with Node.js?",
    "question_hi": "Node.js के साथ सबसे लोकप्रिय फ्रेमवर्क कौन सा है?",
    "options_en": ["Express.js", "Laravel", "Django", "Spring"],
    "options_hi": ["Express.js", "Laravel", "Django", "Spring"],
    "answer_en": "Express.js",
    "answer_hi": "Express.js",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which command installs a package?",
    "question_hi": "पैकेज इंस्टॉल करने के लिए कौन सा कमांड है?",
    "options_en": ["npm install", "npm init", "node install", "install npm"],
    "options_hi": ["npm install", "npm init", "node install", "install npm"],
    "answer_en": "npm install",
    "answer_hi": "npm install",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What does npm stand for?",
    "question_hi": "npm का पूरा नाम क्या है?",
    "options_en": ["Node Package Manager", "New Package Manager", "Node Program Manager", "Network Package Manager"],
    "options_hi": ["Node Package Manager", "New Package Manager", "Node Program Manager", "Network Package Manager"],
    "answer_en": "Node Package Manager",
    "answer_hi": "Node Package Manager",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which object handles events in Node.js?",
    "question_hi": "Node.js में इवेंट्स कौन हैंडल करता है?",
    "options_en": ["EventEmitter", "EventLoop", "Callback", "Promise"],
    "options_hi": ["EventEmitter", "EventLoop", "Callback", "Promise"],
    "answer_en": "EventEmitter",
    "answer_hi": "EventEmitter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which global object is available in Node.js?",
    "question_hi": "Node.js में कौन सा global object होता है?",
    "options_en": ["window", "document", "process", "navigator"],
    "options_hi": ["window", "document", "process", "navigator"],
    "answer_en": "process",
    "answer_hi": "process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which function reads a file asynchronously?",
    "question_hi": "फाइल async पढ़ने का फंक्शन कौन सा है?",
    "options_en": ["fs.readFile", "fs.readFileSync", "read()", "open()"],
    "options_hi": ["fs.readFile", "fs.readFileSync", "read()", "open()"],
    "answer_en": "fs.readFile",
    "answer_hi": "fs.readFile",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which module provides OS information?",
    "question_hi": "OS से जुड़ी जानकारी कौन सा मॉड्यूल देता है?",
    "options_en": ["os", "fs", "http", "path"],
    "options_hi": ["os", "fs", "http", "path"],
    "answer_en": "os",
    "answer_hi": "os",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which module is used for file paths?",
    "question_hi": "फाइल पाथ के लिए कौन सा मॉड्यूल है?",
    "options_en": ["path", "fs", "url", "os"],
    "options_hi": ["path", "fs", "url", "os"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which statement exports a module?",
    "question_hi": "मॉड्यूल एक्सपोर्ट करने के लिए कौन सा स्टेटमेंट है?",
    "options_en": ["module.exports", "export.module", "require()", "exports.module"],
    "options_hi": ["module.exports", "export.module", "require()", "exports.module"],
    "answer_en": "module.exports",
    "answer_hi": "module.exports",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which Express method handles GET requests?",
    "question_hi": "GET request को कौन सा मेथड हैंडल करता है?",
    "options_en": ["app.get()", "app.post()", "app.use()", "app.listen()"],
    "options_hi": ["app.get()", "app.post()", "app.use()", "app.listen()"],
    "answer_en": "app.get()",
    "answer_hi": "app.get()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which method starts the Express server?",
    "question_hi": "Express सर्वर स्टार्ट करने का मेथड कौन सा है?",
    "options_en": ["app.listen()", "app.start()", "app.run()", "app.open()"],
    "options_hi": ["app.listen()", "app.start()", "app.run()", "app.open()"],
    "answer_en": "app.listen()",
    "answer_hi": "app.listen()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which HTTP method is used to send data?",
    "question_hi": "डेटा भेजने के लिए कौन सा HTTP मेथड है?",
    "options_en": ["POST", "GET", "PUT", "DELETE"],
    "options_hi": ["POST", "GET", "PUT", "DELETE"],
    "answer_en": "POST",
    "answer_hi": "POST",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which object sends response in Express?",
    "question_hi": "Express में response कौन भेजता है?",
    "options_en": ["res", "req", "app", "next"],
    "options_hi": ["res", "req", "app", "next"],
    "answer_en": "res",
    "answer_hi": "res",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which object receives client request?",
    "question_hi": "क्लाइंट की request कौन रिसीव करता है?",
    "options_en": ["req", "res", "app", "next"],
    "options_hi": ["req", "res", "app", "next"],
    "answer_en": "req",
    "answer_hi": "req",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which middleware parses JSON data?",
    "question_hi": "JSON डेटा को कौन सा middleware पार्स करता है?",
    "options_en": ["express.json()", "bodyParser()", "jsonParser()", "app.json()"],
    "options_hi": ["express.json()", "bodyParser()", "jsonParser()", "app.json()"],
    "answer_en": "express.json()",
    "answer_hi": "express.json()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which method deletes data?",
    "question_hi": "डेटा delete करने के लिए कौन सा मेथड है?",
    "options_en": ["DELETE", "GET", "POST", "PATCH"],
    "options_hi": ["DELETE", "GET", "POST", "PATCH"],
    "answer_en": "DELETE",
    "answer_hi": "DELETE",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which Node.js feature improves performance?",
    "question_hi": "Node.js की कौन सी फीचर परफॉर्मेंस बढ़ाती है?",
    "options_en": ["Event Loop", "Blocking I/O", "Delay", "Timeout"],
    "options_hi": ["Event Loop", "Blocking I/O", "डिले", "टाइमआउट"],
    "answer_en": "Event Loop",
    "answer_hi": "Event Loop",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which object handles async operations?",
    "question_hi": "Async ऑपरेशन कौन हैंडल करता है?",
    "options_en": ["Callback", "Loop", "Thread", "Timer"],
    "options_hi": ["Callback", "Loop", "Thread", "Timer"],
    "answer_en": "Callback",
    "answer_hi": "Callback",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method is used to create promises?",
    "question_hi": "Promise बनाने के लिए कौन सा तरीका है?",
    "options_en": ["new Promise()", "Promise.create()", "makePromise()", "promise()"],
    "options_hi": ["new Promise()", "Promise.create()", "makePromise()", "promise()"],
    "answer_en": "new Promise()",
    "answer_hi": "new Promise()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which keyword is used for async functions?",
    "question_hi": "Async फंक्शन के लिए कौन सा कीवर्ड है?",
    "options_en": ["async", "await", "promise", "defer"],
    "options_hi": ["async", "await", "promise", "defer"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which keyword waits for a promise?",
    "question_hi": "Promise के लिए कौन सा कीवर्ड wait करता है?",
    "options_en": ["await", "async", "wait", "then"],
    "options_hi": ["await", "async", "wait", "then"],
    "answer_en": "await",
    "answer_hi": "await",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which module handles URLs?",
    "question_hi": "URL को हैंडल करने वाला मॉड्यूल कौन सा है?",
    "options_en": ["url", "http", "path", "fs"],
    "options_hi": ["url", "http", "path", "fs"],
    "answer_en": "url",
    "answer_hi": "url",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which method writes data to a file?",
    "question_hi": "फाइल में डेटा लिखने का मेथड कौन सा है?",
    "options_en": ["fs.writeFile", "fs.readFile", "fs.open", "fs.get"],
    "options_hi": ["fs.writeFile", "fs.readFile", "fs.open", "fs.get"],
    "answer_en": "fs.writeFile",
    "answer_hi": "fs.writeFile",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which object contains environment variables?",
    "question_hi": "Environment variables किसमें होते हैं?",
    "options_en": ["process.env", "env.process", "node.env", "app.env"],
    "options_hi": ["process.env", "env.process", "node.env", "app.env"],
    "answer_en": "process.env",
    "answer_hi": "process.env",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which tool restarts server automatically?",
    "question_hi": "सर्वर ऑटोमैटिक रीस्टार्ट कौन करता है?",
    "options_en": ["nodemon", "npm", "pm2", "node"],
    "options_hi": ["nodemon", "npm", "pm2", "node"],
    "answer_en": "nodemon",
    "answer_hi": "nodemon",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which Node.js version manager is popular?",
    "question_hi": "Node.js वर्ज़न मैनेजर कौन सा है?",
    "options_en": ["nvm", "npm", "node", "yarn"],
    "options_hi": ["nvm", "npm", "node", "yarn"],
    "answer_en": "nvm",
    "answer_hi": "nvm",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which Express function handles middleware?",
    "question_hi": "Middleware को कौन सा फंक्शन हैंडल करता है?",
    "options_en": ["app.use()", "app.get()", "app.post()", "app.set()"],
    "options_hi": ["app.use()", "app.get()", "app.post()", "app.set()"],
    "answer_en": "app.use()",
    "answer_hi": "app.use()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which module compresses response data?",
    "question_hi": "Response डेटा को compress कौन करता है?",
    "options_en": ["compression", "zlib", "gzip", "zip"],
    "options_hi": ["compression", "zlib", "gzip", "zip"],
    "answer_en": "zlib",
    "answer_hi": "zlib",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which Node.js object gives directory name?",
    "question_hi": "डायरेक्टरी का नाम कौन देता है?",
    "options_en": ["__dirname", "__filename", "process.cwd()", "path.dir"],
    "options_hi": ["__dirname", "__filename", "process.cwd()", "path.dir"],
    "answer_en": "__dirname",
    "answer_hi": "__dirname",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which object gives file name?",
    "question_hi": "फाइल का नाम कौन देता है?",
    "options_en": ["__filename", "__dirname", "path.name", "file.name"],
    "options_hi": ["__filename", "__dirname", "path.name", "file.name"],
    "answer_en": "__filename",
    "answer_hi": "__filename",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which HTTP status code means success?",
    "question_hi": "Success का HTTP status code कौन सा है?",
    "options_en": ["200", "404", "500", "301"],
    "options_hi": ["200", "404", "500", "301"],
    "answer_en": "200",
    "answer_hi": "200",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which status code means Not Found?",
    "question_hi": "Not Found का status code कौन सा है?",
    "options_en": ["404", "200", "500", "403"],
    "options_hi": ["404", "200", "500", "403"],
    "answer_en": "404",
    "answer_hi": "404",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which module supports streams?",
    "question_hi": "Streams को कौन सा मॉड्यूल सपोर्ट करता है?",
    "options_en": ["stream", "fs", "http", "events"],
    "options_hi": ["stream", "fs", "http", "events"],
    "answer_en": "stream",
    "answer_hi": "stream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which stream type reads data?",
    "question_hi": "डेटा पढ़ने वाला stream कौन सा है?",
    "options_en": ["Readable", "Writable", "Duplex", "Transform"],
    "options_hi": ["Readable", "Writable", "Duplex", "Transform"],
    "answer_en": "Readable",
    "answer_hi": "Readable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which stream writes data?",
    "question_hi": "डेटा लिखने वाला stream कौन सा है?",
    "options_en": ["Writable", "Readable", "Duplex", "Transform"],
    "options_hi": ["Writable", "Readable", "Duplex", "Transform"],
    "answer_en": "Writable",
    "answer_hi": "Writable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which stream can read and write both?",
    "question_hi": "पढ़ और लिख दोनों करने वाला stream कौन सा है?",
    "options_en": ["Duplex", "Readable", "Writable", "Simple"],
    "options_hi": ["Duplex", "Readable", "Writable", "Simple"],
    "answer_en": "Duplex",
    "answer_hi": "Duplex",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which Node.js module handles encryption?",
    "question_hi": "Encryption के लिए कौन सा मॉड्यूल है?",
    "options_en": ["crypto", "secure", "hash", "bcrypt"],
    "options_hi": ["crypto", "secure", "hash", "bcrypt"],
    "answer_en": "crypto",
    "answer_hi": "crypto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which function generates random bytes?",
    "question_hi": "Random bytes कौन सा फंक्शन बनाता है?",
    "options_en": ["crypto.randomBytes()", "crypto.hash()", "crypto.encode()", "crypto.rand()"],
    "options_hi": ["crypto.randomBytes()", "crypto.hash()", "crypto.encode()", "crypto.rand()"],
    "answer_en": "crypto.randomBytes()",
    "answer_hi": "crypto.randomBytes()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which Node.js module handles child processes?",
    "question_hi": "Child process कौन सा मॉड्यूल हैंडल करता है?",
    "options_en": ["child_process", "process", "cluster", "worker"],
    "options_hi": ["child_process", "process", "cluster", "worker"],
    "answer_en": "child_process",
    "answer_hi": "child_process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which module is used for clustering?",
    "question_hi": "Clustering के लिए कौन सा मॉड्यूल है?",
    "options_en": ["cluster", "child_process", "worker", "thread"],
    "options_hi": ["cluster", "child_process", "worker", "thread"],
    "answer_en": "cluster",
    "answer_hi": "cluster",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which Node.js feature allows handling multiple requests?",
    "question_hi": "Multiple requests हैंडल करने की Node.js की खासियत क्या है?",
    "options_en": ["Event-driven architecture", "Blocking I/O", "Multi-threading", "Delays"],
    "options_hi": ["इवेंट ड्रिवन आर्किटेक्चर", "ब्लॉकिंग I/O", "मल्टी थ्रेडिंग", "डिले"],
    "answer_en": "Event-driven architecture",
    "answer_hi": "इवेंट ड्रिवन आर्किटेक्चर",
    "attempted": false,
    "selected": ""
  }
]



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