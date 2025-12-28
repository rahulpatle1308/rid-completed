const questions=[
  {
    "num": 1,
    "question_en": "Node.js is built on which architecture?",
    "question_hi": "Node.js किस आर्किटेक्चर पर आधारित है?",
    "options_en": ["Event-driven", "Thread-based", "Blocking", "Multi-process"],
    "options_hi": ["Event-driven", "Thread-based", "Blocking", "Multi-process"],
    "answer_en": "Event-driven",
    "answer_hi": "Event-driven",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which file extension is commonly used for Node.js files?",
    "question_hi": "Node.js फाइलों के लिए सामान्यतः कौन सा एक्सटेंशन उपयोग होता है?",
    "options_en": [".js", ".node", ".json", ".jsx"],
    "options_hi": [".js", ".node", ".json", ".jsx"],
    "answer_en": ".js",
    "answer_hi": ".js",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which function schedules a callback after I/O events?",
    "question_hi": "I/O इवेंट्स के बाद callback शेड्यूल करने वाली function कौन सी है?",
    "options_en": ["setImmediate()", "setTimeout()", "setInterval()", "process.nextTick()"],
    "options_hi": ["setImmediate()", "setTimeout()", "setInterval()", "process.nextTick()"],
    "answer_en": "setImmediate()",
    "answer_hi": "setImmediate()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which object is the parent of all objects in Node.js?",
    "question_hi": "Node.js में सभी ऑब्जेक्ट्स का पैरेंट ऑब्जेक्ट कौन सा है?",
    "options_en": ["global", "process", "module", "console"],
    "options_hi": ["global", "process", "module", "console"],
    "answer_en": "global",
    "answer_hi": "global",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which method converts an object to JSON string?",
    "question_hi": "किस method से object को JSON string में बदला जाता है?",
    "options_en": ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.encode()"],
    "options_hi": ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.encode()"],
    "answer_en": "JSON.stringify()",
    "answer_hi": "JSON.stringify()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which module allows you to watch file changes?",
    "question_hi": "फाइल में बदलाव देखने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["fs", "path", "os", "events"],
    "options_hi": ["fs", "path", "os", "events"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which fs method deletes a file?",
    "question_hi": "फाइल डिलीट करने के लिए fs की कौन सी method है?",
    "options_en": ["fs.unlink()", "fs.remove()", "fs.delete()", "fs.drop()"],
    "options_hi": ["fs.unlink()", "fs.remove()", "fs.delete()", "fs.drop()"],
    "answer_en": "fs.unlink()",
    "answer_hi": "fs.unlink()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which module provides CPU information?",
    "question_hi": "CPU की जानकारी देने वाला मॉड्यूल कौन सा है?",
    "options_en": ["os", "process", "v8", "util"],
    "options_hi": ["os", "process", "v8", "util"],
    "answer_en": "os",
    "answer_hi": "os",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which property gives platform name?",
    "question_hi": "Platform का नाम बताने वाली property कौन सी है?",
    "options_en": ["process.platform", "os.platform()", "node.platform", "env.platform"],
    "options_hi": ["process.platform", "os.platform()", "node.platform", "env.platform"],
    "answer_en": "process.platform",
    "answer_hi": "process.platform",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which Node.js module handles child processes?",
    "question_hi": "Child process को संभालने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["child_process", "cluster", "worker", "process"],
    "options_hi": ["child_process", "cluster", "worker", "process"],
    "answer_en": "child_process",
    "answer_hi": "child_process",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which method executes a shell command?",
    "question_hi": "Shell command execute करने वाली method कौन सी है?",
    "options_en": ["exec()", "run()", "spawnSync()", "fork()"],
    "options_hi": ["exec()", "run()", "spawnSync()", "fork()"],
    "answer_en": "exec()",
    "answer_hi": "exec()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which module helps in load balancing?",
    "question_hi": "Load balancing में मदद करने वाला मॉड्यूल कौन सा है?",
    "options_en": ["cluster", "net", "http", "dns"],
    "options_hi": ["cluster", "net", "http", "dns"],
    "answer_en": "cluster",
    "answer_hi": "cluster",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which object contains command-line arguments?",
    "question_hi": "Command-line arguments किस object में होते हैं?",
    "options_en": ["process.argv", "process.args", "os.argv", "node.args"],
    "options_hi": ["process.argv", "process.args", "os.argv", "node.args"],
    "answer_en": "process.argv",
    "answer_hi": "process.argv",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which module converts callback APIs to promises?",
    "question_hi": "Callback API को promise में बदलने वाला मॉड्यूल कौन सा है?",
    "options_en": ["util", "events", "stream", "async"],
    "options_hi": ["util", "events", "stream", "async"],
    "answer_en": "util",
    "answer_hi": "util",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which util method promisifies functions?",
    "question_hi": "Functions को promisify करने वाली util method कौन सी है?",
    "options_en": ["util.promisify()", "util.promise()", "util.async()", "util.wrap()"],
    "options_hi": ["util.promisify()", "util.promise()", "util.async()", "util.wrap()"],
    "answer_en": "util.promisify()",
    "answer_hi": "util.promisify()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which module handles binary data?",
    "question_hi": "Binary data को संभालने वाला मॉड्यूल कौन सा है?",
    "options_en": ["buffer", "stream", "fs", "crypto"],
    "options_hi": ["buffer", "stream", "fs", "crypto"],
    "answer_en": "buffer",
    "answer_hi": "buffer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which Buffer method writes data?",
    "question_hi": "Data लिखने वाली Buffer method कौन सी है?",
    "options_en": ["buffer.write()", "buffer.fill()", "buffer.push()", "buffer.add()"],
    "options_hi": ["buffer.write()", "buffer.fill()", "buffer.push()", "buffer.add()"],
    "answer_en": "buffer.write()",
    "answer_hi": "buffer.write()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which stream can both read and write?",
    "question_hi": "कौन सी stream read और write दोनों कर सकती है?",
    "options_en": ["Duplex", "Readable", "Writable", "Pipe"],
    "options_hi": ["Duplex", "Readable", "Writable", "Pipe"],
    "answer_en": "Duplex",
    "answer_hi": "Duplex",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which module resolves domain names?",
    "question_hi": "Domain name resolve करने वाला मॉड्यूल कौन सा है?",
    "options_en": ["dns", "url", "net", "http"],
    "options_hi": ["dns", "url", "net", "http"],
    "answer_en": "dns",
    "answer_hi": "dns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which HTTP status code means Not Found?",
    "question_hi": "Not Found के लिए कौन सा HTTP status code होता है?",
    "options_en": ["404", "401", "500", "403"],
    "options_hi": ["404", "401", "500", "403"],
    "answer_en": "404",
    "answer_hi": "404",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which Express method starts the server?",
    "question_hi": "Server start करने के लिए Express की कौन सी method है?",
    "options_en": ["app.listen()", "app.start()", "app.run()", "app.open()"],
    "options_hi": ["app.listen()", "app.start()", "app.run()", "app.open()"],
    "answer_en": "app.listen()",
    "answer_hi": "app.listen()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which middleware logs HTTP requests?",
    "question_hi": "HTTP requests log करने वाला middleware कौन सा है?",
    "options_en": ["morgan", "helmet", "cors", "dotenv"],
    "options_hi": ["morgan", "helmet", "cors", "dotenv"],
    "answer_en": "morgan",
    "answer_hi": "morgan",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which package loads environment variables from .env file?",
    "question_hi": ".env फाइल से environment variables load करने वाला पैकेज कौन सा है?",
    "options_en": ["dotenv", "env-loader", "config", "process-env"],
    "options_hi": ["dotenv", "env-loader", "config", "process-env"],
    "answer_en": "dotenv",
    "answer_hi": "dotenv",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which HTTP method is used to update data?",
    "question_hi": "डेटा अपडेट करने के लिए कौन सा HTTP method उपयोग होता है?",
    "options_en": ["PUT", "GET", "DELETE", "HEAD"],
    "options_hi": ["PUT", "GET", "DELETE", "HEAD"],
    "answer_en": "PUT",
    "answer_hi": "PUT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which HTTP method deletes data?",
    "question_hi": "डेटा डिलीट करने के लिए कौन सा HTTP method है?",
    "options_en": ["DELETE", "PUT", "POST", "PATCH"],
    "options_hi": ["DELETE", "PUT", "POST", "PATCH"],
    "answer_en": "DELETE",
    "answer_hi": "DELETE",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which Express object represents the request?",
    "question_hi": "Request को represent करने वाला Express object कौन सा है?",
    "options_en": ["req", "res", "app", "next"],
    "options_hi": ["req", "res", "app", "next"],
    "answer_en": "req",
    "answer_hi": "req",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which Express object represents the response?",
    "question_hi": "Response को represent करने वाला Express object कौन सा है?",
    "options_en": ["res", "req", "app", "router"],
    "options_hi": ["res", "req", "app", "router"],
    "answer_en": "res",
    "answer_hi": "res",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method sets HTTP status code in Express?",
    "question_hi": "Express में HTTP status code सेट करने की method कौन सी है?",
    "options_en": ["res.status()", "res.code()", "res.set()", "res.header()"],
    "options_hi": ["res.status()", "res.code()", "res.set()", "res.header()"],
    "answer_en": "res.status()",
    "answer_hi": "res.status()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which module enables CORS in Express?",
    "question_hi": "Express में CORS enable करने वाला मॉड्यूल कौन सा है?",
    "options_en": ["cors", "helmet", "secure", "allow"],
    "options_hi": ["cors", "helmet", "secure", "allow"],
    "answer_en": "cors",
    "answer_hi": "cors",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which HTTP method partially updates data?",
    "question_hi": "डेटा को आंशिक रूप से अपडेट करने वाला HTTP method कौन सा है?",
    "options_en": ["PATCH", "PUT", "POST", "DELETE"],
    "options_hi": ["PATCH", "PUT", "POST", "DELETE"],
    "answer_en": "PATCH",
    "answer_hi": "PATCH",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which npm command removes a package?",
    "question_hi": "Package हटाने के लिए कौन सा npm command है?",
    "options_en": ["npm uninstall", "npm delete", "npm remove -g", "npm clear"],
    "options_hi": ["npm uninstall", "npm delete", "npm remove -g", "npm clear"],
    "answer_en": "npm uninstall",
    "answer_hi": "npm uninstall",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which npm file locks dependency versions?",
    "question_hi": "Dependency versions lock करने वाली npm फाइल कौन सी है?",
    "options_en": ["package-lock.json", "package.json", "npm-lock.json", "lock.json"],
    "options_hi": ["package-lock.json", "package.json", "npm-lock.json", "lock.json"],
    "answer_en": "package-lock.json",
    "answer_hi": "package-lock.json",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which Node.js version manager is commonly used?",
    "question_hi": "आमतौर पर उपयोग होने वाला Node.js version manager कौन सा है?",
    "options_en": ["nvm", "nodem", "nvnode", "nodevm"],
    "options_hi": ["nvm", "nodem", "nvnode", "nodevm"],
    "answer_en": "nvm",
    "answer_hi": "nvm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which command shows Node.js version?",
    "question_hi": "Node.js version देखने का command कौन सा है?",
    "options_en": ["node -v", "node --version", "Both A and B", "npm -v"],
    "options_hi": ["node -v", "node --version", "Both A and B", "npm -v"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which tool restarts server on file changes?",
    "question_hi": "File change पर server restart करने वाला tool कौन सा है?",
    "options_en": ["nodemon", "pm2", "forever", "node-dev"],
    "options_hi": ["nodemon", "pm2", "forever", "node-dev"],
    "answer_en": "nodemon",
    "answer_hi": "nodemon",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which process manager is used in production?",
    "question_hi": "Production में उपयोग होने वाला process manager कौन सा है?",
    "options_en": ["pm2", "nodemon", "npm", "node"],
    "options_hi": ["pm2", "nodemon", "npm", "node"],
    "answer_en": "pm2",
    "answer_hi": "pm2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which pm2 command starts an app?",
    "question_hi": "App start करने की pm2 command कौन सी है?",
    "options_en": ["pm2 start app.js", "pm2 run app.js", "pm2 init", "pm2 open"],
    "options_hi": ["pm2 start app.js", "pm2 run app.js", "pm2 init", "pm2 open"],
    "answer_en": "pm2 start app.js",
    "answer_hi": "pm2 start app.js",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which Node.js feature improves performance using multiple cores?",
    "question_hi": "Multiple cores का उपयोग कर performance बढ़ाने वाली feature कौन सी है?",
    "options_en": ["Cluster", "Streams", "Buffers", "Events"],
    "options_hi": ["Cluster", "Streams", "Buffers", "Events"],
    "answer_en": "Cluster",
    "answer_hi": "Cluster",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which module enables WebSocket support?",
    "question_hi": "WebSocket support देने वाला पैकेज कौन सा है?",
    "options_en": ["ws", "socket.io", "net", "http"],
    "options_hi": ["ws", "socket.io", "net", "http"],
    "answer_en": "socket.io",
    "answer_hi": "socket.io",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which database is commonly used with Node.js?",
    "question_hi": "Node.js के साथ आमतौर पर कौन सा डेटाबेस उपयोग होता है?",
    "options_en": ["MongoDB", "Oracle", "Cassandra", "SQLite"],
    "options_hi": ["MongoDB", "Oracle", "Cassandra", "SQLite"],
    "answer_en": "MongoDB",
    "answer_hi": "MongoDB",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which ODM is used with MongoDB in Node.js?",
    "question_hi": "MongoDB के साथ उपयोग होने वाला ODM कौन सा है?",
    "options_en": ["mongoose", "sequelize", "typeorm", "knex"],
    "options_hi": ["mongoose", "sequelize", "typeorm", "knex"],
    "answer_en": "mongoose",
    "answer_hi": "mongoose",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which middleware secures HTTP headers?",
    "question_hi": "HTTP headers को secure करने वाला middleware कौन सा है?",
    "options_en": ["helmet", "cors", "morgan", "secure"],
    "options_hi": ["helmet", "cors", "morgan", "secure"],
    "answer_en": "helmet",
    "answer_hi": "helmet",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which hashing algorithm is supported by crypto module?",
    "question_hi": "crypto module द्वारा समर्थित hashing algorithm कौन सा है?",
    "options_en": ["SHA256", "MD5", "Both A and B", "None"],
    "options_hi": ["SHA256", "MD5", "Both A and B", "None"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which Node.js feature handles asynchronous operations?",
    "question_hi": "Asynchronous operations संभालने वाली Node.js feature कौन सी है?",
    "options_en": ["Event Loop", "Thread Pool", "Worker", "Scheduler"],
    "options_hi": ["Event Loop", "Thread Pool", "Worker", "Scheduler"],
    "answer_en": "Event Loop",
    "answer_hi": "Event Loop",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which libuv feature supports async I/O?",
    "question_hi": "Async I/O को सपोर्ट करने वाली libuv feature कौन सी है?",
    "options_en": ["Event loop", "Heap", "Stack", "Queue"],
    "options_hi": ["Event loop", "Heap", "Stack", "Queue"],
    "answer_en": "Event loop",
    "answer_hi": "Event loop",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which Node.js module provides performance hooks?",
    "question_hi": "Performance hooks देने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["perf_hooks", "performance", "monitor", "metrics"],
    "options_hi": ["perf_hooks", "performance", "monitor", "metrics"],
    "answer_en": "perf_hooks",
    "answer_hi": "perf_hooks",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which hook measures execution time?",
    "question_hi": "Execution time मापने वाला hook कौन सा है?",
    "options_en": ["performance.now()", "Date.now()", "process.time()", "timer.now()"],
    "options_hi": ["performance.now()", "Date.now()", "process.time()", "timer.now()"],
    "answer_en": "performance.now()",
    "answer_hi": "performance.now()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which Node.js feature supports ES modules?",
    "question_hi": "ES modules को सपोर्ट करने वाली Node.js feature कौन सी है?",
    "options_en": ["type: module", "babel", "webpack", "require"],
    "options_hi": ["type: module", "babel", "webpack", "require"],
    "answer_en": "type: module",
    "answer_hi": "type: module",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which statement imports ES modules?",
    "question_hi": "ES modules import करने वाला statement कौन सा है?",
    "options_en": ["import", "require", "include", "load"],
    "options_hi": ["import", "require", "include", "load"],
    "answer_en": "import",
    "answer_hi": "import",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which statement exports ES modules?",
    "question_hi": "ES modules export करने वाला statement कौन सा है?",
    "options_en": ["export", "module.exports", "exports", "send"],
    "options_hi": ["export", "module.exports", "exports", "send"],
    "answer_en": "export",
    "answer_hi": "export",
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