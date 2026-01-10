const questions=[
  {
    "num": 1,
    "question_en": "Which module provides cryptographic functionality in Node.js?",
    "question_hi": "Node.js में cryptographic functionality देने वाला module कौन सा है?",
    "options_en": ["crypto", "hash", "security", "tls"],
    "options_hi": ["crypto", "hash", "security", "tls"],
    "answer_en": "crypto",
    "answer_hi": "crypto"
  },
  {
    "num": 2,
    "question_en": "Which method generates a random UUID in Node.js?",
    "question_hi": "Node.js में random UUID generate करने का method कौन सा है?",
    "options_en": ["crypto.randomUUID()", "crypto.uuid()", "uuid.generate()", "crypto.randomBytes()"],
    "options_hi": ["crypto.randomUUID()", "crypto.uuid()", "uuid.generate()", "crypto.randomBytes()"],
    "answer_en": "crypto.randomUUID()",
    "answer_hi": "crypto.randomUUID()"
  },
  {
    "num": 3,
    "question_en": "Which module handles TLS/SSL networking in Node.js?",
    "question_hi": "TLS/SSL networking के लिए Node.js module कौन सा है?",
    "options_en": ["tls", "https", "net", "crypto"],
    "options_hi": ["tls", "https", "net", "crypto"],
    "answer_en": "tls",
    "answer_hi": "tls"
  },
  {
    "num": 4,
    "question_en": "Which module provides HTTP/2 support in Node.js?",
    "question_hi": "Node.js में HTTP/2 support देने वाला module कौन सा है?",
    "options_en": ["http2", "http", "https", "net"],
    "options_hi": ["http2", "http", "https", "net"],
    "answer_en": "http2",
    "answer_hi": "http2"
  },
  {
    "num": 5,
    "question_en": "Which module is used to spawn child processes?",
    "question_hi": "Child processes spawn करने के लिए Node.js module कौन सा है?",
    "options_en": ["child_process", "cluster", "worker_threads", "process"],
    "options_hi": ["child_process", "cluster", "worker_threads", "process"],
    "answer_en": "child_process",
    "answer_hi": "child_process"
  },
  {
    "num": 6,
    "question_en": "Which method executes a command in a shell asynchronously?",
    "question_hi": "Shell में asynchronously command execute करने वाला method कौन सा है?",
    "options_en": ["child_process.exec()", "child_process.spawn()", "exec()", "run()"],
    "options_hi": ["child_process.exec()", "child_process.spawn()", "exec()", "run()"],
    "answer_en": "child_process.exec()",
    "answer_hi": "child_process.exec()"
  },
  {
    "num": 7,
    "question_en": "Which module provides Worker Threads in Node.js?",
    "question_hi": "Node.js में Worker Threads देने वाला module कौन सा है?",
    "options_en": ["worker_threads", "threads", "cluster", "child_process"],
    "options_hi": ["worker_threads", "threads", "cluster", "child_process"],
    "answer_en": "worker_threads",
    "answer_hi": "worker_threads"
  },
  {
    "num": 8,
    "question_en": "Which method creates a new worker thread?",
    "question_hi": "New worker thread बनाने वाला method कौन सा है?",
    "options_en": ["new Worker()", "Worker.create()", "worker_threads.spawn()", "thread.new()"],
    "options_hi": ["new Worker()", "Worker.create()", "worker_threads.spawn()", "thread.new()"],
    "answer_en": "new Worker()",
    "answer_hi": "new Worker()"
  },
  {
    "num": 9,
    "question_en": "Which module allows reading and writing files asynchronously?",
    "question_hi": "Files asynchronously read और write करने वाला module कौन सा है?",
    "options_en": ["fs", "file", "stream", "buffer"],
    "options_hi": ["fs", "file", "stream", "buffer"],
    "answer_en": "fs",
    "answer_hi": "fs"
  },
  {
    "num": 10,
    "question_en": "Which fs method reads a file asynchronously?",
    "question_hi": "Asynchronously file read करने का fs method कौन सा है?",
    "options_en": ["fs.readFile()", "fs.read()", "fs.readAsync()", "fs.open()"],
    "options_hi": ["fs.readFile()", "fs.read()", "fs.readAsync()", "fs.open()"],
    "answer_en": "fs.readFile()",
    "answer_hi": "fs.readFile()"
  },
  {
    "num": 11,
    "question_en": "Which fs method writes data asynchronously to a file?",
    "question_hi": "Data asynchronously write करने वाला fs method कौन सा है?",
    "options_en": ["fs.writeFile()", "fs.write()", "fs.writeAsync()", "fs.save()"],
    "options_hi": ["fs.writeFile()", "fs.write()", "fs.writeAsync()", "fs.save()"],
    "answer_en": "fs.writeFile()",
    "answer_hi": "fs.writeFile()"
  },
  {
    "num": 12,
    "question_en": "Which module allows event-driven programming in Node.js?",
    "question_hi": "Event-driven programming के लिए Node.js module कौन सा है?",
    "options_en": ["events", "async", "stream", "process"],
    "options_hi": ["events", "async", "stream", "process"],
    "answer_en": "events",
    "answer_hi": "events"
  },
  {
    "num": 13,
    "question_en": "Which method adds a listener to an EventEmitter?",
    "question_hi": "EventEmitter में listener add करने का method कौन सा है?",
    "options_en": ["on()", "addListener()", "listen()", "subscribe()"],
    "options_hi": ["on()", "addListener()", "listen()", "subscribe()"],
    "answer_en": "on()",
    "answer_hi": "on()"
  },
  {
    "num": 14,
    "question_en": "Which method removes a listener from an EventEmitter?",
    "question_hi": "EventEmitter से listener remove करने का method कौन सा है?",
    "options_en": ["removeListener()", "off()", "deleteListener()", "unsubscribe()"],
    "options_hi": ["removeListener()", "off()", "deleteListener()", "unsubscribe()"],
    "answer_en": "removeListener()",
    "answer_hi": "removeListener()"
  },
  {
    "num": 15,
    "question_en": "Which module provides readable and writable streams?",
    "question_hi": "Readable और writable streams देने वाला module कौन सा है?",
    "options_en": ["stream", "fs", "buffer", "events"],
    "options_hi": ["stream", "fs", "buffer", "events"],
    "answer_en": "stream",
    "answer_hi": "stream"
  },
  {
    "num": 16,
    "question_en": "Which stream type allows reading data sequentially?",
    "question_hi": "Sequentially data read करने वाला stream type कौन सा है?",
    "options_en": ["Readable", "Writable", "Duplex", "Transform"],
    "options_hi": ["Readable", "Writable", "Duplex", "Transform"],
    "answer_en": "Readable",
    "answer_hi": "Readable"
  },
  {
    "num": 17,
    "question_en": "Which stream type allows writing data sequentially?",
    "question_hi": "Sequentially data write करने वाला stream type कौन सा है?",
    "options_en": ["Writable", "Readable", "Duplex", "Transform"],
    "options_hi": ["Writable", "Readable", "Duplex", "Transform"],
    "answer_en": "Writable",
    "answer_hi": "Writable"
  },
  {
    "num": 18,
    "question_en": "Which stream type allows both read and write?",
    "question_hi": "Read और Write दोनों करने वाला stream type कौन सा है?",
    "options_en": ["Duplex", "Transform", "Writable", "Readable"],
    "options_hi": ["Duplex", "Transform", "Writable", "Readable"],
    "answer_en": "Duplex",
    "answer_hi": "Duplex"
  },
  {
    "num": 19,
    "question_en": "Which stream type transforms data while reading/writing?",
    "question_hi": "Data read/write करते समय transform करने वाला stream type कौन सा है?",
    "options_en": ["Transform", "Duplex", "Readable", "Writable"],
    "options_hi": ["Transform", "Duplex", "Readable", "Writable"],
    "answer_en": "Transform",
    "answer_hi": "Transform"
  },
  {
    "num": 20,
    "question_en": "Which module provides global timers in Node.js?",
    "question_hi": "Global timers देने वाला module कौन सा है?",
    "options_en": ["timers", "time", "schedule", "process"],
    "options_hi": ["timers", "time", "schedule", "process"],
    "answer_en": "timers",
    "answer_hi": "timers"
  },
  {
    "num": 21,
    "question_en": "Which method schedules a function to execute after delay in Node.js?",
    "question_hi": "Node.js में function delay के बाद execute करने वाला method कौन सा है?",
    "options_en": ["setTimeout()", "setInterval()", "setImmediate()", "process.nextTick()"],
    "options_hi": ["setTimeout()", "setInterval()", "setImmediate()", "process.nextTick()"],
    "answer_en": "setTimeout()",
    "answer_hi": "setTimeout()"
  },
  {
    "num": 22,
    "question_en": "Which method repeatedly executes a function at interval?",
    "question_hi": "Function को interval पर repeatedly execute करने वाला method कौन सा है?",
    "options_en": ["setInterval()", "setTimeout()", "setImmediate()", "process.nextTick()"],
    "options_hi": ["setInterval()", "setTimeout()", "setImmediate()", "process.nextTick()"],
    "answer_en": "setInterval()",
    "answer_hi": "setInterval()"
  },
  {
    "num": 23,
    "question_en": "Which method executes a function immediately after I/O events?",
    "question_hi": "I/O events के बाद function immediately execute करने वाला method कौन सा है?",
    "options_en": ["setImmediate()", "setTimeout()", "process.nextTick()", "setInterval()"],
    "options_hi": ["setImmediate()", "setTimeout()", "process.nextTick()", "setInterval()"],
    "answer_en": "setImmediate()",
    "answer_hi": "setImmediate()"
  },
  {
    "num": 24,
    "question_en": "Which module provides URL utilities in Node.js?",
    "question_hi": "URL utilities देने वाला Node.js module कौन सा है?",
    "options_en": ["url", "querystring", "http", "net"],
    "options_hi": ["url", "querystring", "http", "net"],
    "answer_en": "url",
    "answer_hi": "url"
  },
  {
    "num": 25,
    "question_en": "Which module provides query string parsing and formatting?",
    "question_hi": "Query string parsing और formatting देने वाला module कौन सा है?",
    "options_en": ["querystring", "url", "http", "util"],
    "options_hi": ["querystring", "url", "http", "util"],
    "answer_en": "querystring",
    "answer_hi": "querystring"
  },
  {
    "num": 26,
    "question_en": "Which module provides buffer functionality in Node.js?",
    "question_hi": "Buffer functionality देने वाला Node.js module कौन सा है?",
    "options_en": ["buffer", "fs", "stream", "util"],
    "options_hi": ["buffer", "fs", "stream", "util"],
    "answer_en": "buffer",
    "answer_hi": "buffer"
  },
  {
    "num": 27,
    "question_en": "Which method allocates a new buffer of specified size?",
    "question_hi": "Specified size का नया buffer allocate करने वाला method कौन सा है?",
    "options_en": ["Buffer.alloc()", "Buffer.create()", "new Buffer()", "Buffer.new()"],
    "options_hi": ["Buffer.alloc()", "Buffer.create()", "new Buffer()", "Buffer.new()"],
    "answer_en": "Buffer.alloc()",
    "answer_hi": "Buffer.alloc()"
  },
  {
    "num": 28,
    "question_en": "Which method concatenates multiple buffers?",
    "question_hi": "Multiple buffers को concatenate करने वाला method कौन सा है?",
    "options_en": ["Buffer.concat()", "Buffer.merge()", "Buffer.join()", "Buffer.combine()"],
    "options_hi": ["Buffer.concat()", "Buffer.merge()", "Buffer.join()", "Buffer.combine()"],
    "answer_en": "Buffer.concat()",
    "answer_hi": "Buffer.concat()"
  },
  {
    "num": 29,
    "question_en": "Which module provides path utilities in Node.js?",
    "question_hi": "Path utilities देने वाला Node.js module कौन सा है?",
    "options_en": ["path", "fs", "url", "util"],
    "options_hi": ["path", "fs", "url", "util"],
    "answer_en": "path",
    "answer_hi": "path"
  },
  {
    "num": 30,
    "question_en": "Which method joins path segments into a single path?",
    "question_hi": "Path segments को single path में join करने वाला method कौन सा है?",
    "options_en": ["path.join()", "path.concat()", "path.resolve()", "path.combine()"],
    "options_hi": ["path.join()", "path.concat()", "path.resolve()", "path.combine()"],
    "answer_en": "path.join()",
    "answer_hi": "path.join()"
  },
  {
    "num": 31,
    "question_en": "Which method resolves a sequence of paths into an absolute path?",
    "question_hi": "Paths की sequence को absolute path में convert करने वाला method कौन सा है?",
    "options_en": ["path.resolve()", "path.join()", "path.normalize()", "path.absolute()"],
    "options_hi": ["path.resolve()", "path.join()", "path.normalize()", "path.absolute()"],
    "answer_en": "path.resolve()",
    "answer_hi": "path.resolve()"
  },
  {
    "num": 32,
    "question_en": "Which method normalizes a path, resolving '..' and '.' segments?",
    "question_hi": "Path normalize करने वाला method कौन सा है?",
    "options_en": ["path.normalize()", "path.join()", "path.resolve()", "path.clean()"],
    "options_hi": ["path.normalize()", "path.join()", "path.resolve()", "path.clean()"],
    "answer_en": "path.normalize()",
    "answer_hi": "path.normalize()"
  },
  {
    "num": 33,
    "question_en": "Which module provides OS-related utility methods in Node.js?",
    "question_hi": "OS-related utility methods देने वाला Node.js module कौन सा है?",
    "options_en": ["os", "process", "util", "system"],
    "options_hi": ["os", "process", "util", "system"],
    "answer_en": "os",
    "answer_hi": "os"
  },
  {
    "num": 34,
    "question_en": "Which method returns the platform Node.js is running on?",
    "question_hi": "Node.js किस platform पर run हो रहा है ये बताने वाला method कौन सा है?",
    "options_en": ["os.platform()", "os.type()", "process.platform", "process.os()"],
    "options_hi": ["os.platform()", "os.type()", "process.platform", "process.os()"],
    "answer_en": "os.platform()",
    "answer_hi": "os.platform()"
  },
  {
    "num": 35,
    "question_en": "Which module provides utilities for inspecting objects in Node.js?",
    "question_hi": "Objects inspect करने के लिए Node.js module कौन सा है?",
    "options_en": ["util", "inspect", "os", "debug"],
    "options_hi": ["util", "inspect", "os", "debug"],
    "answer_en": "util",
    "answer_hi": "util"
  },
  {
    "num": 36,
    "question_en": "Which method prints a formatted string in Node.js?",
    "question_hi": "Formatted string print करने वाला method कौन सा है?",
    "options_en": ["util.format()", "console.log()", "util.print()", "process.write()"],
    "options_hi": ["util.format()", "console.log()", "util.print()", "process.write()"],
    "answer_en": "util.format()",
    "answer_hi": "util.format()"
  },
  {
    "num": 37,
    "question_en": "Which module allows creating custom readable and writable streams?",
    "question_hi": "Custom readable और writable streams बनाने वाला module कौन सा है?",
    "options_en": ["stream", "fs", "buffer", "events"],
    "options_hi": ["stream", "fs", "buffer", "events"],
    "answer_en": "stream",
    "answer_hi": "stream"
  },
  {
    "num": 38,
    "question_en": "Which method reads a file synchronously in Node.js?",
    "question_hi": "File को synchronously read करने वाला method कौन सा है?",
    "options_en": ["fs.readFileSync()", "fs.readFile()", "fs.openSync()", "fs.readSync()"],
    "options_hi": ["fs.readFileSync()", "fs.readFile()", "fs.openSync()", "fs.readSync()"],
    "answer_en": "fs.readFileSync()",
    "answer_hi": "fs.readFileSync()"
  },
  {
    "num": 39,
    "question_en": "Which method writes a file synchronously in Node.js?",
    "question_hi": "File को synchronously write करने वाला method कौन सा है?",
    "options_en": ["fs.writeFileSync()", "fs.writeFile()", "fs.writeSync()", "fs.saveSync()"],
    "options_hi": ["fs.writeFileSync()", "fs.writeFile()", "fs.writeSync()", "fs.saveSync()"],
    "answer_en": "fs.writeFileSync()",
    "answer_hi": "fs.writeFileSync()"
  },
  {
    "num": 40,
    "question_en": "Which module provides child process utilities to execute system commands?",
    "question_hi": "System commands execute करने के लिए Node.js module कौन सा है?",
    "options_en": ["child_process", "process", "cluster", "worker_threads"],
    "options_hi": ["child_process", "process", "cluster", "worker_threads"],
    "answer_en": "child_process",
    "answer_hi": "child_process"
  },
  {
    "num": 41,
    "question_en": "Which method spawns a new process asynchronously in Node.js?",
    "question_hi": "New process asynchronously spawn करने वाला method कौन सा है?",
    "options_en": ["child_process.spawn()", "child_process.exec()", "process.spawn()", "cluster.fork()"],
    "options_hi": ["child_process.spawn()", "child_process.exec()", "process.spawn()", "cluster.fork()"],
    "answer_en": "child_process.spawn()",
    "answer_hi": "child_process.spawn()"
  },
  {
    "num": 42,
    "question_en": "Which module provides the cluster functionality in Node.js?",
    "question_hi": "Cluster functionality देने वाला Node.js module कौन सा है?",
    "options_en": ["cluster", "child_process", "worker_threads", "process"],
    "options_hi": ["cluster", "child_process", "worker_threads", "process"],
    "answer_en": "cluster",
    "answer_hi": "cluster"
  },
  {
    "num": 43,
    "question_en": "Which method forks a new worker in a cluster?",
    "question_hi": "Cluster में new worker fork करने वाला method कौन सा है?",
    "options_en": ["cluster.fork()", "cluster.spawn()", "cluster.create()", "worker_threads.fork()"],
    "options_hi": ["cluster.fork()", "cluster.spawn()", "cluster.create()", "worker_threads.fork()"],
    "answer_en": "cluster.fork()",
    "answer_hi": "cluster.fork()"
  },
  {
    "num": 44,
    "question_en": "Which module allows you to perform high-resolution time measurements?",
    "question_hi": "High-resolution time measurements देने वाला Node.js module कौन सा है?",
    "options_en": ["process", "os", "timers", "util"],
    "options_hi": ["process", "os", "timers", "util"],
    "answer_en": "process",
    "answer_hi": "process"
  },
  {
    "num": 45,
    "question_en": "Which method returns the current high-resolution real time in Node.js?",
    "question_hi": "Current high-resolution real time देने वाला method कौन सा है?",
    "options_en": ["process.hrtime()", "process.time()", "Date.now()", "os.uptime()"],
    "options_hi": ["process.hrtime()", "process.time()", "Date.now()", "os.uptime()"],
    "answer_en": "process.hrtime()",
    "answer_hi": "process.hrtime()"
  },
  {
    "num": 46,
    "question_en": "Which module provides methods for operating system memory and CPU info?",
    "question_hi": "OS memory और CPU info देने वाला module कौन सा है?",
    "options_en": ["os", "process", "util", "system"],
    "options_hi": ["os", "process", "util", "system"],
    "answer_en": "os",
    "answer_hi": "os"
  },
  {
    "num": 47,
    "question_en": "Which method returns the total system memory in bytes?",
    "question_hi": "Total system memory bytes में देने वाला method कौन सा है?",
    "options_en": ["os.totalmem()", "os.freemem()", "process.memoryUsage()", "os.memory()"],
    "options_hi": ["os.totalmem()", "os.freemem()", "process.memoryUsage()", "os.memory()"],
    "answer_en": "os.totalmem()",
    "answer_hi": "os.totalmem()"
  },
  {
    "num": 48,
    "question_en": "Which method returns the free system memory in bytes?",
    "question_hi": "Free system memory bytes में देने वाला method कौन सा है?",
    "options_en": ["os.freemem()", "os.totalmem()", "process.memoryUsage()", "os.memory()"],
    "options_hi": ["os.freemem()", "os.totalmem()", "process.memoryUsage()", "os.memory()"],
    "answer_en": "os.freemem()",
    "answer_hi": "os.freemem()"
  },
  {
    "num": 49,
    "question_en": "Which module provides the EventEmitter class in Node.js?",
    "question_hi": "EventEmitter class देने वाला module कौन सा है?",
    "options_en": ["events", "stream", "util", "process"],
    "options_hi": ["events", "stream", "util", "process"],
    "answer_en": "events",
    "answer_hi": "events"
  },

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