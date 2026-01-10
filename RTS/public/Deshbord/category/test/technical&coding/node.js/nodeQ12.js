const questions=[
  {
    "num": 1,
    "question_en": "Which module allows executing code in a separate V8 context?",
    "question_hi": "Alag V8 context me code execute karne wala module kaun sa hai?",
    "options_en": ["vm", "v8", "module", "inspector"],
    "options_hi": ["vm", "v8", "module", "inspector"],
    "answer_en": "vm",
    "answer_hi": "vm"
  },
  {
    "num": 2,
    "question_en": "Which vm method creates a new sandboxed context?",
    "question_hi": "Naya sandboxed context banane ka vm method kaun sa hai?",
    "options_en": ["vm.createContext()", "vm.newContext()", "vm.sandbox()", "vm.initContext()"],
    "options_hi": ["vm.createContext()", "vm.newContext()", "vm.sandbox()", "vm.initContext()"],
    "answer_en": "vm.createContext()",
    "answer_hi": "vm.createContext()"
  },
  {
    "num": 3,
    "question_en": "Which vm method runs code inside a context?",
    "question_hi": "Context ke andar code run karne wala vm method kaun sa hai?",
    "options_en": ["vm.runInContext()", "vm.execute()", "vm.start()", "vm.eval()"],
    "options_hi": ["vm.runInContext()", "vm.execute()", "vm.start()", "vm.eval()"],
    "answer_en": "vm.runInContext()",
    "answer_hi": "vm.runInContext()"
  },
  {
    "num": 4,
    "question_en": "Which module tracks asynchronous resources lifecycle?",
    "question_hi": "Async resources ka lifecycle track karne wala module kaun sa hai?",
    "options_en": ["async_hooks", "events", "timers", "process"],
    "options_hi": ["async_hooks", "events", "timers", "process"],
    "answer_en": "async_hooks",
    "answer_hi": "async_hooks"
  },
  {
    "num": 5,
    "question_en": "Which async_hooks class represents async resources?",
    "question_hi": "Async resources represent karne wali class kaun si hai?",
    "options_en": ["AsyncResource", "AsyncHook", "Resource", "Hook"],
    "options_hi": ["AsyncResource", "AsyncHook", "Resource", "Hook"],
    "answer_en": "AsyncResource",
    "answer_hi": "AsyncResource"
  },
  {
    "num": 6,
    "question_en": "Which module measures Node.js performance?",
    "question_hi": "Node.js performance measure karne wala module kaun sa hai?",
    "options_en": ["perf_hooks", "process", "v8", "inspector"],
    "options_hi": ["perf_hooks", "process", "v8", "inspector"],
    "answer_en": "perf_hooks",
    "answer_hi": "perf_hooks"
  },
  {
    "num": 7,
    "question_en": "Which perf_hooks method marks a performance entry?",
    "question_hi": "Performance entry mark karne ka method kaun sa hai?",
    "options_en": ["performance.mark()", "performance.note()", "performance.flag()", "performance.log()"],
    "options_hi": ["performance.mark()", "performance.note()", "performance.flag()", "performance.log()"],
    "answer_en": "performance.mark()",
    "answer_hi": "performance.mark()"
  },
  {
    "num": 8,
    "question_en": "Which perf_hooks method measures duration between marks?",
    "question_hi": "Do marks ke beech duration measure karne ka method kaun sa hai?",
    "options_en": ["performance.measure()", "performance.time()", "performance.diff()", "performance.calc()"],
    "options_hi": ["performance.measure()", "performance.time()", "performance.diff()", "performance.calc()"],
    "answer_en": "performance.measure()",
    "answer_hi": "performance.measure()"
  },
  {
    "num": 9,
    "question_en": "Which module provides promise-based filesystem API?",
    "question_hi": "Promise-based filesystem API dene wala module kaun sa hai?",
    "options_en": ["fs/promises", "fs_async", "fs.promise", "promises/fs"],
    "options_hi": ["fs/promises", "fs_async", "fs.promise", "promises/fs"],
    "answer_en": "fs/promises",
    "answer_hi": "fs/promises"
  },
  {
    "num": 10,
    "question_en": "Which fs/promises method reads file content?",
    "question_hi": "File content read karne ka fs/promises method kaun sa hai?",
    "options_en": ["readFile()", "open()", "read()", "load()"],
    "options_hi": ["readFile()", "open()", "read()", "load()"],
    "answer_en": "readFile()",
    "answer_hi": "readFile()"
  },
  {
    "num": 11,
    "question_en": "Which module reads input line by line?",
    "question_hi": "Line by line input read karne wala module kaun sa hai?",
    "options_en": ["readline", "tty", "stream", "fs"],
    "options_hi": ["readline", "tty", "stream", "fs"],
    "answer_en": "readline",
    "answer_hi": "readline"
  },
  {
    "num": 12,
    "question_en": "Which readline method creates an interface?",
    "question_hi": "Readline interface banane ka method kaun sa hai?",
    "options_en": ["readline.createInterface()", "readline.new()", "readline.init()", "readline.open()"],
    "options_hi": ["readline.createInterface()", "readline.new()", "readline.init()", "readline.open()"],
    "answer_en": "readline.createInterface()",
    "answer_hi": "readline.createInterface()"
  },
  {
    "num": 13,
    "question_en": "Which module provides TTY streams?",
    "question_hi": "TTY streams provide karne wala module kaun sa hai?",
    "options_en": ["tty", "readline", "process", "stream"],
    "options_hi": ["tty", "readline", "process", "stream"],
    "answer_en": "tty",
    "answer_hi": "tty"
  },
  {
    "num": 14,
    "question_en": "Which tty method checks if stream is a terminal?",
    "question_hi": "Stream terminal hai ya nahi check karne ka method kaun sa hai?",
    "options_en": ["tty.isatty()", "tty.check()", "tty.isTerminal()", "tty.validate()"],
    "options_hi": ["tty.isatty()", "tty.check()", "tty.isTerminal()", "tty.validate()"],
    "answer_en": "tty.isatty()",
    "answer_hi": "tty.isatty()"
  },
  {
    "num": 15,
    "question_en": "Which module parses query strings?",
    "question_hi": "Query string parse karne wala module kaun sa hai?",
    "options_en": ["querystring", "url", "http", "net"],
    "options_hi": ["querystring", "url", "http", "net"],
    "answer_en": "querystring",
    "answer_hi": "querystring"
  },
  {
    "num": 16,
    "question_en": "Which querystring method converts string to object?",
    "question_hi": "Query string ko object me convert karne ka method kaun sa hai?",
    "options_en": ["querystring.parse()", "querystring.decode()", "querystring.read()", "querystring.toObject()"],
    "options_hi": ["querystring.parse()", "querystring.decode()", "querystring.read()", "querystring.toObject()"],
    "answer_en": "querystring.parse()",
    "answer_hi": "querystring.parse()"
  },
  {
    "num": 17,
    "question_en": "Which querystring method converts object to string?",
    "question_hi": "Object ko query string me convert karne ka method kaun sa hai?",
    "options_en": ["querystring.stringify()", "querystring.encode()", "querystring.build()", "querystring.format()"],
    "options_hi": ["querystring.stringify()", "querystring.encode()", "querystring.build()", "querystring.format()"],
    "answer_en": "querystring.stringify()",
    "answer_hi": "querystring.stringify()"
  },
  {
    "num": 18,
    "question_en": "Which timers API returns promise-based timers?",
    "question_hi": "Promise-based timers dene wali API kaun si hai?",
    "options_en": ["timers/promises", "timers/async", "promise/timers", "async/timers"],
    "options_hi": ["timers/promises", "timers/async", "promise/timers", "async/timers"],
    "answer_en": "timers/promises",
    "answer_hi": "timers/promises"
  },
  {
    "num": 19,
    "question_en": "Which timers/promises method delays execution?",
    "question_hi": "Execution delay karne wala timers/promises method kaun sa hai?",
    "options_en": ["setTimeout()", "delay()", "wait()", "sleep()"],
    "options_hi": ["setTimeout()", "delay()", "wait()", "sleep()"],
    "answer_en": "setTimeout()",
    "answer_hi": "setTimeout()"
  },
  {
    "num": 20,
    "question_en": "Which module provides AbortController?",
    "question_hi": "AbortController provide karne wala module kaun sa hai?",
    "options_en": ["events", "abort-controller", "stream", "util"],
    "options_hi": ["events", "abort-controller", "stream", "util"],
    "answer_en": "events",
    "answer_hi": "events"
  },
  {
    "num": 21,
    "question_en": "Which event signals process is about to exit?",
    "question_hi": "Process exit hone se pehle kaunsa event fire hota hai?",
    "options_en": ["beforeExit", "exit", "close", "shutdown"],
    "options_hi": ["beforeExit", "exit", "close", "shutdown"],
    "answer_en": "beforeExit",
    "answer_hi": "beforeExit"
  },
  {
    "num": 22,
    "question_en": "Which process property returns Node.js version?",
    "question_hi": "Node.js version dene wali process property kaun si hai?",
    "options_en": ["process.version", "process.node", "process.versions.node", "process.release"],
    "options_hi": ["process.version", "process.node", "process.versions.node", "process.release"],
    "answer_en": "process.version",
    "answer_hi": "process.version"
  },
  {
    "num": 23,
    "question_en": "Which module provides REPL environment?",
    "question_hi": "REPL environment provide karne wala module kaun sa hai?",
    "options_en": ["repl", "vm", "console", "process"],
    "options_hi": ["repl", "vm", "console", "process"],
    "answer_en": "repl",
    "answer_hi": "repl"
  },
  {
    "num": 24,
    "question_en": "Which repl method starts interactive shell?",
    "question_hi": "Interactive shell start karne ka repl method kaun sa hai?",
    "options_en": ["repl.start()", "repl.init()", "repl.open()", "repl.run()"],
    "options_hi": ["repl.start()", "repl.init()", "repl.open()", "repl.run()"],
    "answer_en": "repl.start()",
    "answer_hi": "repl.start()"
  },
  {
    "num": 25,
    "question_en": "Which module handles internationalization?",
    "question_hi": "Internationalization handle karne wala module kaun sa hai?",
    "options_en": ["intl", "i18n", "util", "v8"],
    "options_hi": ["intl", "i18n", "util", "v8"],
    "answer_en": "intl",
    "answer_hi": "intl"
  },
  {
    "num": 26,
    "question_en": "Which module exposes Web Streams API?",
    "question_hi": "Web Streams API expose karne wala module kaun sa hai?",
    "options_en": ["stream/web", "web-streams", "streams", "stream"],
    "options_hi": ["stream/web", "web-streams", "streams", "stream"],
    "answer_en": "stream/web",
    "answer_hi": "stream/web"
  },
  {
    "num": 27,
    "question_en": "Which module provides TextEncoder and TextDecoder?",
    "question_hi": "TextEncoder aur TextDecoder dene wala module kaun sa hai?",
    "options_en": ["util", "buffer", "string_decoder", "stream"],
    "options_hi": ["util", "buffer", "string_decoder", "stream"],
    "answer_en": "util",
    "answer_hi": "util"
  },
  {
    "num": 28,
    "question_en": "Which util method formats strings?",
    "question_hi": "String format karne wala util method kaun sa hai?",
    "options_en": ["util.format()", "util.stringify()", "util.template()", "util.print()"],
    "options_hi": ["util.format()", "util.stringify()", "util.template()", "util.print()"],
    "answer_en": "util.format()",
    "answer_hi": "util.format()"
  },
  {
    "num": 29,
    "question_en": "Which module provides structured clone?",
    "question_hi": "Structured clone support dene wala module kaun sa hai?",
    "options_en": ["v8", "util", "vm", "buffer"],
    "options_hi": ["v8", "util", "vm", "buffer"],
    "answer_en": "v8",
    "answer_hi": "v8"
  },
  {
    "num": 30,
    "question_en": "Which v8 method serializes objects?",
    "question_hi": "Object serialize karne ka v8 method kaun sa hai?",
    "options_en": ["v8.serialize()", "v8.stringify()", "v8.encode()", "v8.clone()"],
    "options_hi": ["v8.serialize()", "v8.stringify()", "v8.encode()", "v8.clone()"],
    "answer_en": "v8.serialize()",
    "answer_hi": "v8.serialize()"
  },
  {
    "num": 31,
    "question_en": "Which module allows loading ES modules dynamically?",
    "question_hi": "Dynamically ES modules load karne ka feature kis se aata hai?",
    "options_en": ["import()", "require()", "module.load()", "loader"],
    "options_hi": ["import()", "require()", "module.load()", "loader"],
    "answer_en": "import()",
    "answer_hi": "import()"
  },
  {
    "num": 32,
    "question_en": "Which module provides diagnostics channel?",
    "question_hi": "Diagnostics channel provide karne wala module kaun sa hai?",
    "options_en": ["diagnostics_channel", "inspector", "debug", "trace"],
    "options_hi": ["diagnostics_channel", "inspector", "debug", "trace"],
    "answer_en": "diagnostics_channel",
    "answer_hi": "diagnostics_channel"
  },
  {
    "num": 33,
    "question_en": "Which diagnostics_channel method creates a channel?",
    "question_hi": "Channel create karne ka method kaun sa hai?",
    "options_en": ["channel()", "createChannel()", "newChannel()", "openChannel()"],
    "options_hi": ["channel()", "createChannel()", "newChannel()", "openChannel()"],
    "answer_en": "channel()",
    "answer_hi": "channel()"
  },
  {
    "num": 34,
    "question_en": "Which module exposes Web Crypto API?",
    "question_hi": "Web Crypto API expose karne wala module kaun sa hai?",
    "options_en": ["crypto", "webcrypto", "tls", "https"],
    "options_hi": ["crypto", "webcrypto", "tls", "https"],
    "answer_en": "crypto",
    "answer_hi": "crypto"
  },
  {
    "num": 35,
    "question_en": "Which crypto property accesses Web Crypto?",
    "question_hi": "Web Crypto access karne wali crypto property kaun si hai?",
    "options_en": ["crypto.webcrypto", "crypto.browser", "crypto.subtle", "crypto.web"],
    "options_hi": ["crypto.webcrypto", "crypto.browser", "crypto.subtle", "crypto.web"],
    "answer_en": "crypto.webcrypto",
    "answer_hi": "crypto.webcrypto"
  },
  {
    "num": 36,
    "question_en": "Which module supports WASI?",
    "question_hi": "WASI support dene wala module kaun sa hai?",
    "options_en": ["wasi", "wasm", "vm", "v8"],
    "options_hi": ["wasi", "wasm", "vm", "v8"],
    "answer_en": "wasi",
    "answer_hi": "wasi"
  },
  {
    "num": 37,
    "question_en": "Which wasi class represents WASI instance?",
    "question_hi": "WASI instance represent karne wali class kaun si hai?",
    "options_en": ["WASI", "WasiInstance", "WasiContext", "Wasm"],
    "options_hi": ["WASI", "WasiInstance", "WasiContext", "Wasm"],
    "answer_en": "WASI",
    "answer_hi": "WASI"
  },
  {
    "num": 38,
    "question_en": "Which module provides WebAssembly support?",
    "question_hi": "WebAssembly support Node.js me kaun deta hai?",
    "options_en": ["WebAssembly", "wasi", "vm", "v8"],
    "options_hi": ["WebAssembly", "wasi", "vm", "v8"],
    "answer_en": "WebAssembly",
    "answer_hi": "WebAssembly"
  },
  {
    "num": 39,
    "question_en": "Which console method outputs error stream?",
    "question_hi": "Error stream par output karne wala console method kaun sa hai?",
    "options_en": ["console.error()", "console.log()", "console.warn()", "console.info()"],
    "options_hi": ["console.error()", "console.log()", "console.warn()", "console.info()"],
    "answer_en": "console.error()",
    "answer_hi": "console.error()"
  },
  {
    "num": 40,
    "question_en": "Which console method clears terminal?",
    "question_hi": "Terminal clear karne wala console method kaun sa hai?",
    "options_en": ["console.clear()", "console.reset()", "console.clean()", "console.flush()"],
    "options_hi": ["console.clear()", "console.reset()", "console.clean()", "console.flush()"],
    "answer_en": "console.clear()",
    "answer_hi": "console.clear()"
  },
  {
    "num": 41,
    "question_en": "Which module supports file watching?",
    "question_hi": "File watch karne ka support kaun sa module deta hai?",
    "options_en": ["fs", "watcher", "path", "events"],
    "options_hi": ["fs", "watcher", "path", "events"],
    "answer_en": "fs",
    "answer_hi": "fs"
  },
  {
    "num": 42,
    "question_en": "Which fs method watches file changes?",
    "question_hi": "File changes watch karne wala fs method kaun sa hai?",
    "options_en": ["fs.watch()", "fs.observe()", "fs.listen()", "fs.track()"],
    "options_hi": ["fs.watch()", "fs.observe()", "fs.listen()", "fs.track()"],
    "answer_en": "fs.watch()",
    "answer_hi": "fs.watch()"
  },
  {
    "num": 43,
    "question_en": "Which module provides file system constants?",
    "question_hi": "File system constants provide karne wala module kaun sa hai?",
    "options_en": ["fs.constants", "os.constants", "process.constants", "path.constants"],
    "options_hi": ["fs.constants", "os.constants", "process.constants", "path.constants"],
    "answer_en": "fs.constants",
    "answer_hi": "fs.constants"
  },
  {
    "num": 44,
    "question_en": "Which fs constant checks file existence access?",
    "question_hi": "File existence check karne wali fs constant kaun si hai?",
    "options_en": ["F_OK", "R_OK", "W_OK", "X_OK"],
    "options_hi": ["F_OK", "R_OK", "W_OK", "X_OK"],
    "answer_en": "F_OK",
    "answer_hi": "F_OK"
  },
  {
    "num": 45,
    "question_en": "Which module exposes environment variables?",
    "question_hi": "Environment variables expose karne wala object kaun sa hai?",
    "options_en": ["process.env", "os.env", "env", "system.env"],
    "options_hi": ["process.env", "os.env", "env", "system.env"],
    "answer_en": "process.env",
    "answer_hi": "process.env"
  },
  {
    "num": 46,
    "question_en": "Which module provides standard input stream?",
    "question_hi": "Standard input stream kaun provide karta hai?",
    "options_en": ["process.stdin", "tty.stdin", "fs.stdin", "console.stdin"],
    "options_hi": ["process.stdin", "tty.stdin", "fs.stdin", "console.stdin"],
    "answer_en": "process.stdin",
    "answer_hi": "process.stdin"
  },
  {
    "num": 47,
    "question_en": "Which module provides standard output stream?",
    "question_hi": "Standard output stream kaun provide karta hai?",
    "options_en": ["process.stdout", "console.stdout", "tty.stdout", "fs.stdout"],
    "options_hi": ["process.stdout", "console.stdout", "tty.stdout", "fs.stdout"],
    "answer_en": "process.stdout",
    "answer_hi": "process.stdout"
  },
  {
    "num": 48,
    "question_en": "Which module provides standard error stream?",
    "question_hi": "Standard error stream kaun provide karta hai?",
    "options_en": ["process.stderr", "console.stderr", "tty.stderr", "fs.stderr"],
    "options_hi": ["process.stderr", "console.stderr", "tty.stderr", "fs.stderr"],
    "answer_en": "process.stderr",
    "answer_hi": "process.stderr"
  },
  {
    "num": 49,
    "question_en": "Which module supports JSON module import?",
    "question_hi": "JSON module import support kis se milta hai?",
    "options_en": ["assert { type: 'json' }", "require.json()", "import.json()", "json.load()"],
    "options_hi": ["assert { type: 'json' }", "require.json()", "import.json()", "json.load()"],
    "answer_en": "assert { type: 'json' }",
    "answer_hi": "assert { type: 'json' }"
  },
  {
    "num": 50,
    "question_en": "Which module handles experimental test runner?",
    "question_hi": "Experimental test runner kis module se aata hai?",
    "options_en": ["node:test", "assert", "test", "mocha"],
    "options_hi": ["node:test", "assert", "test", "mocha"],
    "answer_en": "node:test",
    "answer_hi": "node:test"
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