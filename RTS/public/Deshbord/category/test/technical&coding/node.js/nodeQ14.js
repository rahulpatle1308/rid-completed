const questions=[
  {
    "num": 1,
    "question_en": "Which module provides DNS lookup functionality?",
    "question_hi": "DNS lookup functionality देने वाला Node.js module कौन सा है?",
    "options_en": ["dns", "net", "http", "url"],
    "options_hi": ["dns", "net", "http", "url"],
    "answer_en": "dns",
    "answer_hi": "dns"
  },
  {
    "num": 2,
    "question_en": "Which dns method resolves a hostname to IPv4 address?",
    "question_hi": "Hostname को IPv4 address में resolve करने वाला dns method कौन सा है?",
    "options_en": ["dns.resolve4()", "dns.lookup()", "dns.reverse()", "dns.resolve()"],
    "options_hi": ["dns.resolve4()", "dns.lookup()", "dns.reverse()", "dns.resolve()"],
    "answer_en": "dns.resolve4()",
    "answer_hi": "dns.resolve4()"
  },
  {
    "num": 3,
    "question_en": "Which module provides TCP networking?",
    "question_hi": "TCP networking के लिए Node.js module कौन सा है?",
    "options_en": ["net", "http", "tls", "dgram"],
    "options_hi": ["net", "http", "tls", "dgram"],
    "answer_en": "net",
    "answer_hi": "net"
  },
  {
    "num": 4,
    "question_en": "Which method creates a TCP server?",
    "question_hi": "TCP server बनाने वाला method कौन सा है?",
    "options_en": ["net.createServer()", "net.createSocket()", "net.listen()", "net.server()"],
    "options_hi": ["net.createServer()", "net.createSocket()", "net.listen()", "net.server()"],
    "answer_en": "net.createServer()",
    "answer_hi": "net.createServer()"
  },
  {
    "num": 5,
    "question_en": "Which module supports UDP datagram sockets?",
    "question_hi": "UDP datagram sockets के लिए कौन सा module है?",
    "options_en": ["dgram", "net", "udp", "dns"],
    "options_hi": ["dgram", "net", "udp", "dns"],
    "answer_en": "dgram",
    "answer_hi": "dgram"
  },
  {
    "num": 6,
    "question_en": "Which method creates a UDP socket?",
    "question_hi": "UDP socket बनाने वाला method कौन सा है?",
    "options_en": ["dgram.createSocket()", "dgram.create()", "udp.create()", "net.createSocket()"],
    "options_hi": ["dgram.createSocket()", "dgram.create()", "udp.create()", "net.createSocket()"],
    "answer_en": "dgram.createSocket()",
    "answer_hi": "dgram.createSocket()"
  },
  {
    "num": 7,
    "question_en": "Which module provides performance timing APIs?",
    "question_hi": "Performance timing APIs देने वाला module कौन सा है?",
    "options_en": ["perf_hooks", "process", "timers", "v8"],
    "options_hi": ["perf_hooks", "process", "timers", "v8"],
    "answer_en": "perf_hooks",
    "answer_hi": "perf_hooks"
  },
  {
    "num": 8,
    "question_en": "Which class measures performance entries?",
    "question_hi": "Performance entries measure करने वाली class कौन सी है?",
    "options_en": ["PerformanceObserver", "PerformanceTimer", "PerformanceHook", "Observer"],
    "options_hi": ["PerformanceObserver", "PerformanceTimer", "PerformanceHook", "Observer"],
    "answer_en": "PerformanceObserver",
    "answer_hi": "PerformanceObserver"
  },
  {
    "num": 9,
    "question_en": "Which module allows sandboxed code execution?",
    "question_hi": "Sandboxed code execution के लिए कौन सा module है?",
    "options_en": ["vm", "v8", "module", "process"],
    "options_hi": ["vm", "v8", "module", "process"],
    "answer_en": "vm",
    "answer_hi": "vm"
  },
  {
    "num": 10,
    "question_en": "Which vm method runs code in a new context?",
    "question_hi": "New context में code run करने वाला vm method कौन सा है?",
    "options_en": ["vm.runInNewContext()", "vm.run()", "vm.execute()", "vm.eval()"],
    "options_hi": ["vm.runInNewContext()", "vm.run()", "vm.execute()", "vm.eval()"],
    "answer_en": "vm.runInNewContext()",
    "answer_hi": "vm.runInNewContext()"
  },
  {
    "num": 11,
    "question_en": "Which module provides async resource tracking?",
    "question_hi": "Async resources track करने वाला module कौन सा है?",
    "options_en": ["async_hooks", "events", "timers", "perf_hooks"],
    "options_hi": ["async_hooks", "events", "timers", "perf_hooks"],
    "answer_en": "async_hooks",
    "answer_hi": "async_hooks"
  },
  {
    "num": 12,
    "question_en": "Which class represents an async resource?",
    "question_hi": "Async resource को represent करने वाली class कौन सी है?",
    "options_en": ["AsyncResource", "Hook", "AsyncHook", "Resource"],
    "options_hi": ["AsyncResource", "Hook", "AsyncHook", "Resource"],
    "answer_en": "AsyncResource",
    "answer_hi": "AsyncResource"
  },
  {
    "num": 13,
    "question_en": "Which module provides compression support?",
    "question_hi": "Compression support देने वाला Node.js module कौन सा है?",
    "options_en": ["zlib", "gzip", "compress", "stream"],
    "options_hi": ["zlib", "gzip", "compress", "stream"],
    "answer_en": "zlib",
    "answer_hi": "zlib"
  },
  {
    "num": 14,
    "question_en": "Which zlib method creates a gzip stream?",
    "question_hi": "Gzip stream बनाने वाला zlib method कौन सा है?",
    "options_en": ["zlib.createGzip()", "zlib.gzip()", "zlib.compress()", "zlib.zip()"],
    "options_hi": ["zlib.createGzip()", "zlib.gzip()", "zlib.compress()", "zlib.zip()"],
    "answer_en": "zlib.createGzip()",
    "answer_hi": "zlib.createGzip()"
  },
  {
    "num": 15,
    "question_en": "Which module provides cryptographic hashes?",
    "question_hi": "Cryptographic hashes देने वाला module कौन सा है?",
    "options_en": ["crypto", "hash", "tls", "security"],
    "options_hi": ["crypto", "hash", "tls", "security"],
    "answer_en": "crypto",
    "answer_hi": "crypto"
  },
  {
    "num": 16,
    "question_en": "Which crypto method creates a hash object?",
    "question_hi": "Hash object बनाने वाला crypto method कौन सा है?",
    "options_en": ["crypto.createHash()", "crypto.hash()", "crypto.digest()", "crypto.encrypt()"],
    "options_hi": ["crypto.createHash()", "crypto.hash()", "crypto.digest()", "crypto.encrypt()"],
    "answer_en": "crypto.createHash()",
    "answer_hi": "crypto.createHash()"
  },
  {
    "num": 17,
    "question_en": "Which module supports internationalization APIs?",
    "question_hi": "Internationalization APIs देने वाला module कौन सा है?",
    "options_en": ["intl", "util", "i18n", "os"],
    "options_hi": ["intl", "util", "i18n", "os"],
    "answer_en": "intl",
    "answer_hi": "intl"
  },
  {
    "num": 18,
    "question_en": "Which module provides readline interface?",
    "question_hi": "Readline interface देने वाला module कौन सा है?",
    "options_en": ["readline", "tty", "fs", "console"],
    "options_hi": ["readline", "tty", "fs", "console"],
    "answer_en": "readline",
    "answer_hi": "readline"
  },
  {
    "num": 19,
    "question_en": "Which readline method closes the interface?",
    "question_hi": "Readline interface close करने वाला method कौन सा है?",
    "options_en": ["rl.close()", "rl.end()", "rl.stop()", "rl.exit()"],
    "options_hi": ["rl.close()", "rl.end()", "rl.stop()", "rl.exit()"],
    "answer_en": "rl.close()",
    "answer_hi": "rl.close()"
  },
  {
    "num": 20,
    "question_en": "Which module provides REPL environment?",
    "question_hi": "REPL environment देने वाला Node.js module कौन सा है?",
    "options_en": ["repl", "console", "vm", "process"],
    "options_hi": ["repl", "console", "vm", "process"],
    "answer_en": "repl",
    "answer_hi": "repl"
  },
  {
    "num": 21,
    "question_en": "Which repl method starts a REPL session?",
    "question_hi": "REPL session start करने वाला method कौन सा है?",
    "options_en": ["repl.start()", "repl.run()", "repl.open()", "repl.create()"],
    "options_hi": ["repl.start()", "repl.run()", "repl.open()", "repl.create()"],
    "answer_en": "repl.start()",
    "answer_hi": "repl.start()"
  },
  {
    "num": 22,
    "question_en": "Which module provides console utilities?",
    "question_hi": "Console utilities देने वाला module कौन सा है?",
    "options_en": ["console", "util", "tty", "process"],
    "options_hi": ["console", "util", "tty", "process"],
    "answer_en": "console",
    "answer_hi": "console"
  },
  {
    "num": 23,
    "question_en": "Which console method prints error messages?",
    "question_hi": "Error messages print करने वाला console method कौन सा है?",
    "options_en": ["console.error()", "console.log()", "console.warn()", "console.info()"],
    "options_hi": ["console.error()", "console.log()", "console.warn()", "console.info()"],
    "answer_en": "console.error()",
    "answer_hi": "console.error()"
  },
  {
    "num": 24,
    "question_en": "Which module provides assertion testing?",
    "question_hi": "Assertion testing देने वाला module कौन सा है?",
    "options_en": ["assert", "test", "check", "verify"],
    "options_hi": ["assert", "test", "check", "verify"],
    "answer_en": "assert",
    "answer_hi": "assert"
  },
  {
    "num": 25,
    "question_en": "Which assert method checks strict equality?",
    "question_hi": "Strict equality check करने वाला assert method कौन सा है?",
    "options_en": ["assert.strictEqual()", "assert.equal()", "assert.deepEqual()", "assert.match()"],
    "options_hi": ["assert.strictEqual()", "assert.equal()", "assert.deepEqual()", "assert.match()"],
    "answer_en": "assert.strictEqual()",
    "answer_hi": "assert.strictEqual()"
  },
  {
    "num": 26,
    "question_en": "Which module provides test runner?",
    "question_hi": "Built-in test runner देने वाला Node.js module कौन सा है?",
    "options_en": ["node:test", "assert", "test_runner", "check"],
    "options_hi": ["node:test", "assert", "test_runner", "check"],
    "answer_en": "node:test",
    "answer_hi": "node:test"
  },
  {
    "num": 27,
    "question_en": "Which function defines a test case?",
    "question_hi": "Test case define करने वाला function कौन सा है?",
    "options_en": ["test()", "it()", "describe()", "case()"],
    "options_hi": ["test()", "it()", "describe()", "case()"],
    "answer_en": "test()",
    "answer_hi": "test()"
  },
  {
    "num": 28,
    "question_en": "Which module provides diagnostics channels?",
    "question_hi": "Diagnostics channels देने वाला module कौन सा है?",
    "options_en": ["diagnostics_channel", "trace_events", "perf_hooks", "events"],
    "options_hi": ["diagnostics_channel", "trace_events", "perf_hooks", "events"],
    "answer_en": "diagnostics_channel",
    "answer_hi": "diagnostics_channel"
  },
  {
    "num": 29,
    "question_en": "Which method creates a diagnostics channel?",
    "question_hi": "Diagnostics channel create करने वाला method कौन सा है?",
    "options_en": ["channel()", "createChannel()", "open()", "register()"],
    "options_hi": ["channel()", "createChannel()", "open()", "register()"],
    "answer_en": "channel()",
    "answer_hi": "channel()"
  },
  {
    "num": 30,
    "question_en": "Which module provides WebAssembly support?",
    "question_hi": "WebAssembly support देने वाला Node.js module कौन सा है?",
    "options_en": ["wasi", "wasm", "vm", "v8"],
    "options_hi": ["wasi", "wasm", "vm", "v8"],
    "answer_en": "wasi",
    "answer_hi": "wasi"
  },
  {
    "num": 31,
    "question_en": "Which class represents a WASI instance?",
    "question_hi": "WASI instance को represent करने वाली class कौन सी है?",
    "options_en": ["WASI", "Wasm", "Instance", "Module"],
    "options_hi": ["WASI", "Wasm", "Instance", "Module"],
    "answer_en": "WASI",
    "answer_hi": "WASI"
  },
  {
    "num": 32,
    "question_en": "Which module provides filesystem promises API?",
    "question_hi": "Filesystem promises API देने वाला module कौन सा है?",
    "options_en": ["fs/promises", "fs.async", "fs.promise", "promises"],
    "options_hi": ["fs/promises", "fs.async", "fs.promise", "promises"],
    "answer_en": "fs/promises",
    "answer_hi": "fs/promises"
  },
  {
    "num": 33,
    "question_en": "Which fs/promises method reads a file?",
    "question_hi": "fs/promises में file read करने वाला method कौन सा है?",
    "options_en": ["readFile()", "read()", "open()", "load()"],
    "options_hi": ["readFile()", "read()", "open()", "load()"],
    "answer_en": "readFile()",
    "answer_hi": "readFile()"
  },
  {
    "num": 34,
    "question_en": "Which module provides web streams API?",
    "question_hi": "Web streams API देने वाला Node.js module कौन सा है?",
    "options_en": ["stream/web", "stream", "web", "fetch"],
    "options_hi": ["stream/web", "stream", "web", "fetch"],
    "answer_en": "stream/web",
    "answer_hi": "stream/web"
  },
  {
    "num": 35,
    "question_en": "Which global API fetches web resources?",
    "question_hi": "Web resources fetch करने वाली global API कौन सी है?",
    "options_en": ["fetch()", "http.get()", "request()", "axios()"],
    "options_hi": ["fetch()", "http.get()", "request()", "axios()"],
    "answer_en": "fetch()",
    "answer_hi": "fetch()"
  },
  {
    "num": 36,
    "question_en": "Which module provides AbortController?",
    "question_hi": "AbortController देने वाला module कौन सा है?",
    "options_en": ["abort-controller", "events", "timers", "process"],
    "options_hi": ["abort-controller", "events", "timers", "process"],
    "answer_en": "abort-controller",
    "answer_hi": "abort-controller"
  },
  {
    "num": 37,
    "question_en": "Which object is used to cancel async operations?",
    "question_hi": "Async operations cancel करने के लिए कौन सा object use होता है?",
    "options_en": ["AbortController", "AbortSignal", "Controller", "Signal"],
    "options_hi": ["AbortController", "AbortSignal", "Controller", "Signal"],
    "answer_en": "AbortController",
    "answer_hi": "AbortController"
  },
  {
    "num": 38,
    "question_en": "Which module provides node version details?",
    "question_hi": "Node version details देने वाला module कौन सा है?",
    "options_en": ["process", "os", "module", "util"],
    "options_hi": ["process", "os", "module", "util"],
    "answer_en": "process",
    "answer_hi": "process"
  },
  {
    "num": 39,
    "question_en": "Which process property lists dependency versions?",
    "question_hi": "Dependency versions list करने वाली property कौन सी है?",
    "options_en": ["process.versions", "process.version", "process.release", "process.env"],
    "options_hi": ["process.versions", "process.version", "process.release", "process.env"],
    "answer_en": "process.versions",
    "answer_hi": "process.versions"
  },
  {
    "num": 40,
    "question_en": "Which module provides environment variable access?",
    "question_hi": "Environment variables access करने के लिए कौन सा module है?",
    "options_en": ["process", "os", "env", "system"],
    "options_hi": ["process", "os", "env", "system"],
    "answer_en": "process",
    "answer_hi": "process"
  },
  {
    "num": 41,
    "question_en": "Which property accesses environment variables?",
    "question_hi": "Environment variables access करने वाली property कौन सी है?",
    "options_en": ["process.env", "os.env", "env.process", "system.env"],
    "options_hi": ["process.env", "os.env", "env.process", "system.env"],
    "answer_en": "process.env",
    "answer_hi": "process.env"
  },
  {
    "num": 42,
    "question_en": "Which module provides file watching?",
    "question_hi": "File watching के लिए कौन सा module use होता है?",
    "options_en": ["fs", "watcher", "events", "path"],
    "options_hi": ["fs", "watcher", "events", "path"],
    "answer_en": "fs",
    "answer_hi": "fs"
  },
  {
    "num": 43,
    "question_en": "Which fs method watches file changes?",
    "question_hi": "File changes watch करने वाला fs method कौन सा है?",
    "options_en": ["fs.watch()", "fs.observe()", "fs.listen()", "fs.monitor()"],
    "options_hi": ["fs.watch()", "fs.observe()", "fs.listen()", "fs.monitor()"],
    "answer_en": "fs.watch()",
    "answer_hi": "fs.watch()"
  },
  {
    "num": 44,
    "question_en": "Which module provides permissions API?",
    "question_hi": "Permissions API देने वाला Node.js module कौन सा है?",
    "options_en": ["process", "fs", "policy", "os"],
    "options_hi": ["process", "fs", "policy", "os"],
    "answer_en": "process",
    "answer_hi": "process"
  },
  {
    "num": 45,
    "question_en": "Which method checks permission status?",
    "question_hi": "Permission status check करने वाला method कौन सा है?",
    "options_en": ["process.permission.has()", "process.hasPermission()", "permission.check()", "process.check()"],
    "options_hi": ["process.permission.has()", "process.hasPermission()", "permission.check()", "process.check()"],
    "answer_en": "process.permission.has()",
    "answer_hi": "process.permission.has()"
  },
  {
    "num": 46,
    "question_en": "Which module provides inspector protocol?",
    "question_hi": "Inspector protocol देने वाला module कौन सा है?",
    "options_en": ["inspector", "debug", "v8", "process"],
    "options_hi": ["inspector", "debug", "v8", "process"],
    "answer_en": "inspector",
    "answer_hi": "inspector"
  },
  {
    "num": 47,
    "question_en": "Which inspector method opens debugging session?",
    "question_hi": "Debugging session open करने वाला method कौन सा है?",
    "options_en": ["inspector.open()", "inspector.start()", "inspector.debug()", "inspector.attach()"],
    "options_hi": ["inspector.open()", "inspector.start()", "inspector.debug()", "inspector.attach()"],
    "answer_en": "inspector.open()",
    "answer_hi": "inspector.open()"
  },
  {
    "num": 48,
    "question_en": "Which module provides module resolution hooks?",
    "question_hi": "Module resolution hooks देने वाला module कौन सा है?",
    "options_en": ["module", "vm", "process", "loader"],
    "options_hi": ["module", "vm", "process", "loader"],
    "answer_en": "module",
    "answer_hi": "module"
  },
  {
    "num": 49,
    "question_en": "Which module provides built-in fetch implementation?",
    "question_hi": "Built-in fetch implementation Node.js में किससे मिलती है?",
    "options_en": ["undici", "http", "https", "net"],
    "options_hi": ["undici", "http", "https", "net"],
    "answer_en": "undici",
    "answer_hi": "undici"
  },
  {
    "num": 50,
    "question_en": "Which module provides web socket client internally?",
    "question_hi": "Internally web socket client support देने वाला module कौन सा है?",
    "options_en": ["undici", "net", "http2", "ws"],
    "options_hi": ["undici", "net", "http2", "ws"],
    "answer_en": "undici",
    "answer_hi": "undici"
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