const questions=[
  {
    "num": 1,
    "question_en": "Which module is used for creating TCP clients in Node.js?",
    "question_hi": "Node.js में TCP client बनाने के लिए कौन सा module इस्तेमाल होता है?",
    "options_en": ["net", "http", "tcp", "socket"],
    "options_hi": ["net", "http", "tcp", "socket"],
    "answer_en": "net",
    "answer_hi": "net",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which Node.js module provides utilities for debugging?",
    "question_hi": "Debugging के लिए Node.js में कौन सा module है?",
    "options_en": ["util", "debug", "console", "logger"],
    "options_hi": ["util", "debug", "console", "logger"],
    "answer_en": "util",
    "answer_hi": "util",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which method schedules a callback on next event loop iteration?",
    "question_hi": "Next event loop iteration में callback schedule करने का method कौन सा है?",
    "options_en": ["process.nextTick()", "setImmediate()", "setTimeout()", "queueMicrotask()"],
    "options_hi": ["process.nextTick()", "setImmediate()", "setTimeout()", "queueMicrotask()"],
    "answer_en": "process.nextTick()",
    "answer_hi": "process.nextTick()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which module provides support for asynchronous context tracking?",
    "question_hi": "Asynchronous context tracking के लिए कौन सा module है?",
    "options_en": ["async_hooks", "context", "domains", "events"],
    "options_hi": ["async_hooks", "context", "domains", "events"],
    "answer_en": "async_hooks",
    "answer_hi": "async_hooks",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which method creates a readable stream from a string or buffer?",
    "question_hi": "String या Buffer से readable stream बनाने का method कौन सा है?",
    "options_en": ["stream.Readable.from()", "fs.createReadStream()", "stream.from()", "buffer.toStream()"],
    "options_hi": ["stream.Readable.from()", "fs.createReadStream()", "stream.from()", "buffer.toStream()"],
    "answer_en": "stream.Readable.from()",
    "answer_hi": "stream.Readable.from()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which module provides utilities for text encoding and decoding?",
    "question_hi": "Text encoding और decoding के लिए कौन सा module है?",
    "options_en": ["string_decoder", "buffer", "util", "crypto"],
    "options_hi": ["string_decoder", "buffer", "util", "crypto"],
    "answer_en": "string_decoder",
    "answer_hi": "string_decoder",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which method decodes a buffer into a string using a specific encoding?",
    "question_hi": "Buffer को string में decode करने का method कौन सा है?",
    "options_en": ["StringDecoder.write()", "Buffer.toString()", "decode()", "util.decode()"],
    "options_hi": ["StringDecoder.write()", "Buffer.toString()", "decode()", "util.decode()"],
    "answer_en": "StringDecoder.write()",
    "answer_hi": "StringDecoder.write()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which module allows creating multiple Node.js processes for scalability?",
    "question_hi": "Scalability के लिए multiple Node.js processes बनाने वाला module कौन सा है?",
    "options_en": ["cluster", "child_process", "worker_threads", "pm2"],
    "options_hi": ["cluster", "child_process", "worker_threads", "pm2"],
    "answer_en": "cluster",
    "answer_hi": "cluster",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which method of cluster module forks a new worker process?",
    "question_hi": "Cluster module का कौन सा method नया worker process बनाता है?",
    "options_en": ["cluster.fork()", "cluster.spawn()", "cluster.createWorker()", "cluster.new()"],
    "options_hi": ["cluster.fork()", "cluster.spawn()", "cluster.createWorker()", "cluster.new()"],
    "answer_en": "cluster.fork()",
    "answer_hi": "cluster.fork()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which module provides domain-based error handling in Node.js?",
    "question_hi": "Domain-based error handling के लिए कौन सा module है?",
    "options_en": ["domain", "errors", "events", "util"],
    "options_hi": ["domain", "errors", "events", "util"],
    "answer_en": "domain",
    "answer_hi": "domain",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which Node.js global object provides process information?",
    "question_hi": "Process की information देने वाला global object कौन सा है?",
    "options_en": ["process", "global", "__dirname", "module"],
    "options_hi": ["process", "global", "__dirname", "module"],
    "answer_en": "process",
    "answer_hi": "process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which property gives Node.js version of the running process?",
    "question_hi": "Running process की Node.js version बताने वाली property कौन सी है?",
    "options_en": ["process.version", "process.node", "process.release", "process.info"],
    "options_hi": ["process.version", "process.node", "process.release", "process.info"],
    "answer_en": "process.version",
    "answer_hi": "process.version",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which property returns the current working directory?",
    "question_hi": "Current working directory बताने वाली property कौन सी है?",
    "options_en": ["process.cwd()", "process.dir", "process.path", "process.currentDir()"],
    "options_hi": ["process.cwd()", "process.dir", "process.path", "process.currentDir()"],
    "answer_en": "process.cwd()",
    "answer_hi": "process.cwd()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which method exits the Node.js process?",
    "question_hi": "Node.js process को exit करने का method कौन सा है?",
    "options_en": ["process.exit()", "process.stop()", "process.kill()", "process.end()"],
    "options_hi": ["process.exit()", "process.stop()", "process.kill()", "process.end()"],
    "answer_en": "process.exit()",
    "answer_hi": "process.exit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which module allows inspecting objects in Node.js REPL?",
    "question_hi": "Node.js REPL में objects inspect करने वाला module कौन सा है?",
    "options_en": ["repl", "util", "debug", "console"],
    "options_hi": ["repl", "util", "debug", "console"],
    "answer_en": "repl",
    "answer_hi": "repl",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which method evaluates JavaScript code in Node.js REPL context?",
    "question_hi": "Node.js REPL context में JS code evaluate करने का method कौन सा है?",
    "options_en": ["repl.eval()", "repl.run()", "eval()", "vm.run()"],
    "options_hi": ["repl.eval()", "repl.run()", "eval()", "vm.run()"],
    "answer_en": "repl.eval()",
    "answer_hi": "repl.eval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which module provides virtual machine functionality in Node.js?",
    "question_hi": "Node.js में virtual machine functionality देने वाला module कौन सा है?",
    "options_en": ["vm", "util", "repl", "process"],
    "options_hi": ["vm", "util", "repl", "process"],
    "answer_en": "vm",
    "answer_hi": "vm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which method executes code in a new V8 context?",
    "question_hi": "New V8 context में code execute करने का method कौन सा है?",
    "options_en": ["vm.runInNewContext()", "vm.createContext()", "vm.execute()", "vm.run()"],
    "options_hi": ["vm.runInNewContext()", "vm.createContext()", "vm.execute()", "vm.run()"],
    "answer_en": "vm.runInNewContext()",
    "answer_hi": "vm.runInNewContext()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which module handles performance measurement in Node.js?",
    "question_hi": "Performance measurement के लिए Node.js module कौन सा है?",
    "options_en": ["perf_hooks", "performance", "util", "process"],
    "options_hi": ["perf_hooks", "performance", "util", "process"],
    "answer_en": "perf_hooks",
    "answer_hi": "perf_hooks",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which method measures time intervals in Node.js?",
    "question_hi": "Node.js में time intervals measure करने का method कौन सा है?",
    "options_en": ["perf_hooks.performance.now()", "Date.now()", "process.hrtime()", "performance.time()"],
    "options_hi": ["perf_hooks.performance.now()", "Date.now()", "process.hrtime()", "performance.time()"],
    "answer_en": "perf_hooks.performance.now()",
    "answer_hi": "perf_hooks.performance.now()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which module provides cryptographic functionality in Node.js?",
    "question_hi": "Node.js में cryptographic functionality देने वाला module कौन सा है?",
    "options_en": ["crypto", "hash", "security", "tls"],
    "options_hi": ["crypto", "hash", "security", "tls"],
    "answer_en": "crypto",
    "answer_hi": "crypto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which method generates a random UUID in Node.js?",
    "question_hi": "Node.js में random UUID generate करने का method कौन सा है?",
    "options_en": ["crypto.randomUUID()", "crypto.uuid()", "uuid.generate()", "crypto.randomBytes()"],
    "options_hi": ["crypto.randomUUID()", "crypto.uuid()", "uuid.generate()", "crypto.randomBytes()"],
    "answer_en": "crypto.randomUUID()",
    "answer_hi": "crypto.randomUUID()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which module handles TLS/SSL networking in Node.js?",
    "question_hi": "TLS/SSL networking के लिए Node.js module कौन सा है?",
    "options_en": ["tls", "https", "net", "crypto"],
    "options_hi": ["tls", "https", "net", "crypto"],
    "answer_en": "tls",
    "answer_hi": "tls",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which module provides HTTP/2 support in Node.js?",
    "question_hi": "Node.js में HTTP/2 support देने वाला module कौन सा है?",
    "options_en": ["http2", "http", "https", "net"],
    "options_hi": ["http2", "http", "https", "net"],
    "answer_en": "http2",
    "answer_hi": "http2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which module is used to spawn child processes?",
    "question_hi": "Child processes spawn करने के लिए Node.js module कौन सा है?",
    "options_en": ["child_process", "cluster", "worker_threads", "process"],
    "options_hi": ["child_process", "cluster", "worker_threads", "process"],
    "answer_en": "child_process",
    "answer_hi": "child_process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which method executes a command in a shell asynchronously?",
    "question_hi": "Shell में asynchronously command execute करने वाला method कौन सा है?",
    "options_en": ["child_process.exec()", "child_process.spawn()", "exec()", "run()"],
    "options_hi": ["child_process.exec()", "child_process.spawn()", "exec()", "run()"],
    "answer_en": "child_process.exec()",
    "answer_hi": "child_process.exec()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which module provides Worker Threads in Node.js?",
    "question_hi": "Node.js में Worker Threads देने वाला module कौन सा है?",
    "options_en": ["worker_threads", "threads", "cluster", "child_process"],
    "options_hi": ["worker_threads", "threads", "cluster", "child_process"],
    "answer_en": "worker_threads",
    "answer_hi": "worker_threads",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method creates a new worker thread?",
    "question_hi": "New worker thread बनाने वाला method कौन सा है?",
    "options_en": ["new Worker()", "Worker.create()", "worker_threads.spawn()", "thread.new()"],
    "options_hi": ["new Worker()", "Worker.create()", "worker_threads.spawn()", "thread.new()"],
    "answer_en": "new Worker()",
    "answer_hi": "new Worker()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which module allows reading and writing files asynchronously?",
    "question_hi": "Files asynchronously read और write करने वाला module कौन सा है?",
    "options_en": ["fs", "file", "stream", "buffer"],
    "options_hi": ["fs", "file", "stream", "buffer"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which fs method reads a file asynchronously?",
    "question_hi": "Asynchronously file read करने का fs method कौन सा है?",
    "options_en": ["fs.readFile()", "fs.read()", "fs.readAsync()", "fs.open()"],
    "options_hi": ["fs.readFile()", "fs.read()", "fs.readAsync()", "fs.open()"],
    "answer_en": "fs.readFile()",
    "answer_hi": "fs.readFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which fs method writes data asynchronously to a file?",
    "question_hi": "Data asynchronously write करने वाला fs method कौन सा है?",
    "options_en": ["fs.writeFile()", "fs.write()", "fs.writeAsync()", "fs.save()"],
    "options_hi": ["fs.writeFile()", "fs.write()", "fs.writeAsync()", "fs.save()"],
    "answer_en": "fs.writeFile()",
    "answer_hi": "fs.writeFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which module allows event-driven programming in Node.js?",
    "question_hi": "Event-driven programming के लिए Node.js module कौन सा है?",
    "options_en": ["events", "async", "stream", "process"],
    "options_hi": ["events", "async", "stream", "process"],
    "answer_en": "events",
    "answer_hi": "events",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which method adds a listener to an EventEmitter?",
    "question_hi": "EventEmitter में listener add करने का method कौन सा है?",
    "options_en": ["on()", "addListener()", "listen()", "subscribe()"],
    "options_hi": ["on()", "addListener()", "listen()", "subscribe()"],
    "answer_en": "on()",
    "answer_hi": "on()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which method removes a listener from an EventEmitter?",
    "question_hi": "EventEmitter से listener remove करने का method कौन सा है?",
    "options_en": ["removeListener()", "off()", "deleteListener()", "unsubscribe()"],
    "options_hi": ["removeListener()", "off()", "deleteListener()", "unsubscribe()"],
    "answer_en": "removeListener()",
    "answer_hi": "removeListener()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which module provides readable and writable streams?",
    "question_hi": "Readable और writable streams देने वाला module कौन सा है?",
    "options_en": ["stream", "fs", "buffer", "events"],
    "options_hi": ["stream", "fs", "buffer", "events"],
    "answer_en": "stream",
    "answer_hi": "stream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which stream type allows reading data sequentially?",
    "question_hi": "Sequentially data read करने वाला stream type कौन सा है?",
    "options_en": ["Readable", "Writable", "Duplex", "Transform"],
    "options_hi": ["Readable", "Writable", "Duplex", "Transform"],
    "answer_en": "Readable",
    "answer_hi": "Readable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which stream type allows writing data sequentially?",
    "question_hi": "Sequentially data write करने वाला stream type कौन सा है?",
    "options_en": ["Writable", "Readable", "Duplex", "Transform"],
    "options_hi": ["Writable", "Readable", "Duplex", "Transform"],
    "answer_en": "Writable",
    "answer_hi": "Writable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which stream type allows both read and write?",
    "question_hi": "Read और Write दोनों करने वाला stream type कौन सा है?",
    "options_en": ["Duplex", "Transform", "Writable", "Readable"],
    "options_hi": ["Duplex", "Transform", "Writable", "Readable"],
    "answer_en": "Duplex",
    "answer_hi": "Duplex",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which stream type transforms data while reading/writing?",
    "question_hi": "Data read/write करते समय transform करने वाला stream type कौन सा है?",
    "options_en": ["Transform", "Duplex", "Readable", "Writable"],
    "options_hi": ["Transform", "Duplex", "Readable", "Writable"],
    "answer_en": "Transform",
    "answer_hi": "Transform",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which module provides global timers in Node.js?",
    "question_hi": "Global timers देने वाला module कौन सा है?",
    "options_en": ["timers", "time", "schedule", "process"],
    "options_hi": ["timers", "time", "schedule", "process"],
    "answer_en": "timers",
    "answer_hi": "timers",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which method schedules a function to execute after delay in Node.js?",
    "question_hi": "Node.js में function delay के बाद execute करने वाला method कौन सा है?",
    "options_en": ["setTimeout()", "setInterval()", "setImmediate()", "process.nextTick()"],
    "options_hi": ["setTimeout()", "setInterval()", "setImmediate()", "process.nextTick()"],
    "answer_en": "setTimeout()",
    "answer_hi": "setTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which method repeatedly executes a function at interval?",
    "question_hi": "Function को interval पर repeatedly execute करने वाला method कौन सा है?",
    "options_en": ["setInterval()", "setTimeout()", "setImmediate()", "process.nextTick()"],
    "options_hi": ["setInterval()", "setTimeout()", "setImmediate()", "process.nextTick()"],
    "answer_en": "setInterval()",
    "answer_hi": "setInterval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which method executes a function immediately after I/O events?",
    "question_hi": "I/O events के बाद function immediately execute करने वाला method कौन सा है?",
    "options_en": ["setImmediate()", "setTimeout()", "process.nextTick()", "setInterval()"],
    "options_hi": ["setImmediate()", "setTimeout()", "process.nextTick()", "setInterval()"],
    "answer_en": "setImmediate()",
    "answer_hi": "setImmediate()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which module provides URL utilities in Node.js?",
    "question_hi": "URL utilities देने वाला Node.js module कौन सा है?",
    "options_en": ["url", "querystring", "http", "net"],
    "options_hi": ["url", "querystring", "http", "net"],
    "answer_en": "url",
    "answer_hi": "url",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which module provides query string parsing and formatting?",
    "question_hi": "Query string parsing और formatting देने वाला module कौन सा है?",
    "options_en": ["querystring", "url", "http", "util"],
    "options_hi": ["querystring", "url", "http", "util"],
    "answer_en": "querystring",
    "answer_hi": "querystring",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which module provides buffer functionality in Node.js?",
    "question_hi": "Buffer functionality देने वाला Node.js module कौन सा है?",
    "options_en": ["buffer", "fs", "stream", "util"],
    "options_hi": ["buffer", "fs", "stream", "util"],
    "answer_en": "buffer",
    "answer_hi": "buffer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which method allocates a new buffer of specified size?",
    "question_hi": "Specified size का नया buffer allocate करने वाला method कौन सा है?",
    "options_en": ["Buffer.alloc()", "Buffer.create()", "new Buffer()", "Buffer.new()"],
    "options_hi": ["Buffer.alloc()", "Buffer.create()", "new Buffer()", "Buffer.new()"],
    "answer_en": "Buffer.alloc()",
    "answer_hi": "Buffer.alloc()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which method concatenates multiple buffers?",
    "question_hi": "Multiple buffers को concatenate करने वाला method कौन सा है?",
    "options_en": ["Buffer.concat()", "Buffer.merge()", "Buffer.join()", "Buffer.combine()"],
    "options_hi": ["Buffer.concat()", "Buffer.merge()", "Buffer.join()", "Buffer.combine()"],
    "answer_en": "Buffer.concat()",
    "answer_hi": "Buffer.concat()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which module provides path utilities in Node.js?",
    "question_hi": "Path utilities देने वाला Node.js module कौन सा है?",
    "options_en": ["path", "fs", "url", "util"],
    "options_hi": ["path", "fs", "url", "util"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which method joins path segments into a single path?",
    "question_hi": "Path segments को single path में join करने वाला method कौन सा है?",
    "options_en": ["path.join()", "path.concat()", "path.resolve()", "path.combine()"],
    "options_hi": ["path.join()", "path.concat()", "path.resolve()", "path.combine()"],
    "answer_en": "path.join()",
    "answer_hi": "path.join()",
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