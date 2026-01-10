const questions=[
  {
    "num": 1,
    "question_en": "Which Node.js module handles file streams?",
    "question_hi": "File streams को कौन सा Node.js मॉड्यूल हैंडल करता है?",
    "options_en": ["fs", "stream", "path", "buffer"],
    "options_hi": ["fs", "stream", "path", "buffer"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which stream type is readable?",
    "question_hi": "कौन सा stream type readable होता है?",
    "options_en": ["Readable", "Writable", "Duplex", "Transform"],
    "options_hi": ["Readable", "Writable", "Duplex", "Transform"],
    "answer_en": "Readable",
    "answer_hi": "Readable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which stream type can both read and write?",
    "question_hi": "कौन सा stream type read और write दोनों कर सकता है?",
    "options_en": ["Duplex", "Readable", "Writable", "Transform"],
    "options_hi": ["Duplex", "Readable", "Writable", "Transform"],
    "answer_en": "Duplex",
    "answer_hi": "Duplex",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which stream type modifies data while passing through?",
    "question_hi": "कौन सा stream type data को modify करता है?",
    "options_en": ["Transform", "Duplex", "Readable", "Writable"],
    "options_hi": ["Transform", "Duplex", "Readable", "Writable"],
    "answer_en": "Transform",
    "answer_hi": "Transform",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which event is emitted when data is available in a readable stream?",
    "question_hi": "Readable stream में data उपलब्ध होने पर कौन सा event emit होता है?",
    "options_en": ["data", "readable", "end", "finish"],
    "options_hi": ["data", "readable", "end", "finish"],
    "answer_en": "data",
    "answer_hi": "data",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which event indicates the end of a readable stream?",
    "question_hi": "Readable stream के end होने पर कौन सा event आता है?",
    "options_en": ["end", "finish", "close", "exit"],
    "options_hi": ["end", "finish", "close", "exit"],
    "answer_en": "end",
    "answer_hi": "end",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which method writes data to a writable stream?",
    "question_hi": "Writable stream में data लिखने का मेथड कौन सा है?",
    "options_en": ["write()", "send()", "push()", "add()"],
    "options_hi": ["write()", "send()", "push()", "add()"],
    "answer_en": "write()",
    "answer_hi": "write()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which event signals that writable stream finished writing?",
    "question_hi": "Writable stream के पूरा लिखने पर कौन सा event emit होता है?",
    "options_en": ["finish", "end", "done", "complete"],
    "options_hi": ["finish", "end", "done", "complete"],
    "answer_en": "finish",
    "answer_hi": "finish",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which Node.js module handles child processes?",
    "question_hi": "Child processes को कौन सा मॉड्यूल हैंडल करता है?",
    "options_en": ["child_process", "process", "cluster", "worker_threads"],
    "options_hi": ["child_process", "process", "cluster", "worker_threads"],
    "answer_en": "child_process",
    "answer_hi": "child_process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which method spawns a new process?",
    "question_hi": "नया process बनाने का method कौन सा है?",
    "options_en": ["spawn()", "fork()", "exec()", "start()"],
    "options_hi": ["spawn()", "fork()", "exec()", "start()"],
    "answer_en": "spawn()",
    "answer_hi": "spawn()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which method executes shell commands and buffers output?",
    "question_hi": "Shell commands execute करने और output buffer करने का method कौन सा है?",
    "options_en": ["exec()", "spawn()", "fork()", "run()"],
    "options_hi": ["exec()", "spawn()", "fork()", "run()"],
    "answer_en": "exec()",
    "answer_hi": "exec()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which method spawns new Node process?",
    "question_hi": "नया Node process बनाने का method कौन सा है?",
    "options_en": ["fork()", "spawn()", "exec()", "start()"],
    "options_hi": ["fork()", "spawn()", "exec()", "start()"],
    "answer_en": "fork()",
    "answer_hi": "fork()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which Node.js module handles events?",
    "question_hi": "Events को हैंडल करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["events", "eventemitter", "event", "emitter"],
    "options_hi": ["events", "eventemitter", "event", "emitter"],
    "answer_en": "events",
    "answer_hi": "events",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which class allows creating event emitters?",
    "question_hi": "Event emitters बनाने वाली class कौन सी है?",
    "options_en": ["EventEmitter", "Emitter", "Event", "Handler"],
    "options_hi": ["EventEmitter", "Emitter", "Event", "Handler"],
    "answer_en": "EventEmitter",
    "answer_hi": "EventEmitter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which method registers an event listener?",
    "question_hi": "Event listener register करने का method कौन सा है?",
    "options_en": ["on()", "addListener()", "emit()", "listen()"],
    "options_hi": ["on()", "addListener()", "emit()", "listen()"],
    "answer_en": "on()",
    "answer_hi": "on()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which method emits an event?",
    "question_hi": "Event emit करने का method कौन सा है?",
    "options_en": ["emit()", "trigger()", "send()", "call()"],
    "options_hi": ["emit()", "trigger()", "send()", "call()"],
    "answer_en": "emit()",
    "answer_hi": "emit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which Node.js module handles OS info?",
    "question_hi": "OS info को कौन सा मॉड्यूल हैंडल करता है?",
    "options_en": ["os", "process", "system", "platform"],
    "options_hi": ["os", "process", "system", "platform"],
    "answer_en": "os",
    "answer_hi": "os",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which method returns free system memory?",
    "question_hi": "System की free memory बताने वाला method कौन सा है?",
    "options_en": ["os.freemem()", "os.totalmem()", "os.memory()", "os.avail()"],
    "options_hi": ["os.freemem()", "os.totalmem()", "os.memory()", "os.avail()"],
    "answer_en": "os.freemem()",
    "answer_hi": "os.freemem()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which method returns OS platform?",
    "question_hi": "OS का platform बताने वाला method कौन सा है?",
    "options_en": ["os.platform()", "os.type()", "os.name()", "os.system()"],
    "options_hi": ["os.platform()", "os.type()", "os.name()", "os.system()"],
    "answer_en": "os.platform()",
    "answer_hi": "os.platform()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which Node.js module handles URL parsing?",
    "question_hi": "URL parsing के लिए कौन सा module है?",
    "options_en": ["url", "querystring", "path", "http"],
    "options_hi": ["url", "querystring", "path", "http"],
    "answer_en": "url",
    "answer_hi": "url",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which method parses a URL string?",
    "question_hi": "URL string parse करने का method कौन सा है?",
    "options_en": ["url.parse()", "url.format()", "url.resolve()", "url.stringify()"],
    "options_hi": ["url.parse()", "url.format()", "url.resolve()", "url.stringify()"],
    "answer_en": "url.parse()",
    "answer_hi": "url.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which method formats a URL object to string?",
    "question_hi": "URL object को string में format करने का method कौन सा है?",
    "options_en": ["url.format()", "url.parse()", "url.stringify()", "url.toString()"],
    "options_hi": ["url.format()", "url.parse()", "url.stringify()", "url.toString()"],
    "answer_en": "url.format()",
    "answer_hi": "url.format()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which Node.js module handles timers?",
    "question_hi": "Timers को हैंडल करने वाला module कौन सा है?",
    "options_en": ["timers", "setTimeout", "setInterval", "schedule"],
    "options_hi": ["timers", "setTimeout", "setInterval", "schedule"],
    "answer_en": "timers",
    "answer_hi": "timers",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which method executes code after delay?",
    "question_hi": "Delay के बाद code execute करने का method कौन सा है?",
    "options_en": ["setTimeout()", "setInterval()", "setImmediate()", "process.nextTick()"],
    "options_hi": ["setTimeout()", "setInterval()", "setImmediate()", "process.nextTick()"],
    "answer_en": "setTimeout()",
    "answer_hi": "setTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which method executes code immediately after I/O events?",
    "question_hi": "I/O events के बाद तुरंत code execute करने का method कौन सा है?",
    "options_en": ["setImmediate()", "setTimeout()", "process.nextTick()", "setInterval()"],
    "options_hi": ["setImmediate()", "setTimeout()", "process.nextTick()", "setInterval()"],
    "answer_en": "setImmediate()",
    "answer_hi": "setImmediate()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which method executes code at the beginning of next event loop?",
    "question_hi": "Next event loop के शुरुआत में code execute करने का method कौन सा है?",
    "options_en": ["process.nextTick()", "setImmediate()", "setTimeout()", "setInterval()"],
    "options_hi": ["process.nextTick()", "setImmediate()", "setTimeout()", "setInterval()"],
    "answer_en": "process.nextTick()",
    "answer_hi": "process.nextTick()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which Node.js module handles cryptography?",
    "question_hi": "Cryptography के लिए Node.js module कौन सा है?",
    "options_en": ["crypto", "hash", "cipher", "security"],
    "options_hi": ["crypto", "hash", "cipher", "security"],
    "answer_en": "crypto",
    "answer_hi": "crypto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method creates a hash?",
    "question_hi": "Hash बनाने का method कौन सा है?",
    "options_en": ["crypto.createHash()", "crypto.hash()", "crypto.digest()", "crypto.encode()"],
    "options_hi": ["crypto.createHash()", "crypto.hash()", "crypto.digest()", "crypto.encode()"],
    "answer_en": "crypto.createHash()",
    "answer_hi": "crypto.createHash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which Node.js module handles HTTP/2?",
    "question_hi": "HTTP/2 को हैंडल करने वाला Node.js module कौन सा है?",
    "options_en": ["http2", "http", "https", "net"],
    "options_hi": ["http2", "http", "https", "net"],
    "answer_en": "http2",
    "answer_hi": "http2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which Node.js module handles zlib compression?",
    "question_hi": "zlib compression के लिए Node.js module कौन सा है?",
    "options_en": ["zlib", "compress", "gzip", "archive"],
    "options_hi": ["zlib", "compress", "gzip", "archive"],
    "answer_en": "zlib",
    "answer_hi": "zlib",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which method compresses data asynchronously?",
    "question_hi": "Asynchronous data compression करने का method कौन सा है?",
    "options_en": ["zlib.deflate()", "zlib.deflateSync()", "zlib.compress()", "zlib.compressSync()"],
    "options_hi": ["zlib.deflate()", "zlib.deflateSync()", "zlib.compress()", "zlib.compressSync()"],
    "answer_en": "zlib.deflate()",
    "answer_hi": "zlib.deflate()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which method compresses data synchronously?",
    "question_hi": "Synchronous data compression करने का method कौन सा है?",
    "options_en": ["zlib.deflateSync()", "zlib.deflate()", "zlib.compressSync()", "zlib.compress()"],
    "options_hi": ["zlib.deflateSync()", "zlib.deflate()", "zlib.compressSync()", "zlib.compress()"],
    "answer_en": "zlib.deflateSync()",
    "answer_hi": "zlib.deflateSync()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which Node.js module provides inspection of objects?",
    "question_hi": "Objects inspect करने वाला Node.js module कौन सा है?",
    "options_en": ["util", "inspect", "debug", "console"],
    "options_hi": ["util", "inspect", "debug", "console"],
    "answer_en": "util",
    "answer_hi": "util",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which method returns object’s string representation?",
    "question_hi": "Object का string representation देने वाला method कौन सा है?",
    "options_en": ["util.inspect()", "util.format()", "util.stringify()", "util.toString()"],
    "options_hi": ["util.inspect()", "util.format()", "util.stringify()", "util.toString()"],
    "answer_en": "util.inspect()",
    "answer_hi": "util.inspect()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which Node.js module handles internationalization?",
    "question_hi": "Internationalization के लिए Node.js module कौन सा है?",
    "options_en": ["intl", "i18n", "locales", "globalize"],
    "options_hi": ["intl", "i18n", "locales", "globalize"],
    "answer_en": "intl",
    "answer_hi": "intl",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which module parses command line arguments?",
    "question_hi": "Command line arguments parse करने वाला module कौन सा है?",
    "options_en": ["process.argv", "commander", "args", "yargs"],
    "options_hi": ["process.argv", "commander", "args", "yargs"],
    "answer_en": "process.argv",
    "answer_hi": "process.argv",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which Node.js module handles TCP sockets?",
    "question_hi": "TCP sockets को हैंडल करने वाला Node.js module कौन सा है?",
    "options_en": ["net", "tcp", "socket", "stream"],
    "options_hi": ["net", "tcp", "socket", "stream"],
    "answer_en": "net",
    "answer_hi": "net",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which method creates a TCP server?",
    "question_hi": "TCP server बनाने का method कौन सा है?",
    "options_en": ["net.createServer()", "net.createSocket()", "net.startServer()", "net.listen()"],
    "options_hi": ["net.createServer()", "net.createSocket()", "net.startServer()", "net.listen()"],
    "answer_en": "net.createServer()",
    "answer_hi": "net.createServer()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which Node.js module handles DNS lookup?",
    "question_hi": "DNS lookup के लिए Node.js module कौन सा है?",
    "options_en": ["dns", "net", "url", "http"],
    "options_hi": ["dns", "net", "url", "http"],
    "answer_en": "dns",
    "answer_hi": "dns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which method resolves a hostname to IP?",
    "question_hi": "Hostname को IP में resolve करने का method कौन सा है?",
    "options_en": ["dns.lookup()", "dns.resolve()", "dns.get()", "dns.ip()"],
    "options_hi": ["dns.lookup()", "dns.resolve()", "dns.get()", "dns.ip()"],
    "answer_en": "dns.lookup()",
    "answer_hi": "dns.lookup()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which Node.js module handles HTTP cookies?",
    "question_hi": "HTTP cookies को handle करने वाला module कौन सा है?",
    "options_en": ["cookie", "cookies", "http", "express"],
    "options_hi": ["cookie", "cookies", "http", "express"],
    "answer_en": "cookie",
    "answer_hi": "cookie",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which Node.js module handles query strings?",
    "question_hi": "Query strings को parse करने वाला module कौन सा है?",
    "options_en": ["querystring", "url", "qs", "http"],
    "options_hi": ["querystring", "url", "qs", "http"],
    "answer_en": "querystring",
    "answer_hi": "querystring",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which method parses a query string?",
    "question_hi": "Query string parse करने का method कौन सा है?",
    "options_en": ["querystring.parse()", "querystring.stringify()", "querystring.format()", "querystring.decode()"],
    "options_hi": ["querystring.parse()", "querystring.stringify()", "querystring.format()", "querystring.decode()"],
    "answer_en": "querystring.parse()",
    "answer_hi": "querystring.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which Node.js module handles path operations?",
    "question_hi": "Path operations के लिए Node.js module कौन सा है?",
    "options_en": ["path", "fs", "url", "os"],
    "options_hi": ["path", "fs", "url", "os"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which method joins path segments?",
    "question_hi": "Path segments join करने का method कौन सा है?",
    "options_en": ["path.join()", "path.concat()", "path.resolve()", "path.combine()"],
    "options_hi": ["path.join()", "path.concat()", "path.resolve()", "path.combine()"],
    "answer_en": "path.join()",
    "answer_hi": "path.join()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which method resolves an absolute path?",
    "question_hi": "Absolute path resolve करने का method कौन सा है?",
    "options_en": ["path.resolve()", "path.join()", "path.absolute()", "path.fullpath()"],
    "options_hi": ["path.resolve()", "path.join()", "path.absolute()", "path.fullpath()"],
    "answer_en": "path.resolve()",
    "answer_hi": "path.resolve()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which Node.js module handles buffer operations?",
    "question_hi": "Buffer operations के लिए Node.js module कौन सा है?",
    "options_en": ["buffer", "fs", "stream", "util"],
    "options_hi": ["buffer", "fs", "stream", "util"],
    "answer_en": "buffer",
    "answer_hi": "buffer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which method allocates a new buffer of size?",
    "question_hi": "New buffer allocate करने का method कौन सा है?",
    "options_en": ["Buffer.alloc()", "Buffer.create()", "Buffer.new()", "Buffer.make()"],
    "options_hi": ["Buffer.alloc()", "Buffer.create()", "Buffer.new()", "Buffer.make()"],
    "answer_en": "Buffer.alloc()",
    "answer_hi": "Buffer.alloc()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which method converts buffer to string?",
    "question_hi": "Buffer को string में convert करने का method कौन सा है?",
    "options_en": ["buffer.toString()", "buffer.stringify()", "buffer.convert()", "buffer.encode()"],
    "options_hi": ["buffer.toString()", "buffer.stringify()", "buffer.convert()", "buffer.encode()"],
    "answer_en": "buffer.toString()",
    "answer_hi": "buffer.toString()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which Node.js module handles child threads?",
    "question_hi": "Child threads को handle करने वाला Node.js module कौन सा है?",
    "options_en": ["worker_threads", "thread", "cluster", "child_process"],
    "options_hi": ["worker_threads", "thread", "cluster", "child_process"],
    "answer_en": "worker_threads",
    "answer_hi": "worker_threads",
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