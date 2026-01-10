const questions=[
  {
    "num": 1,
    "question_en": "Which module is used to create an HTTP server in Node.js?",
    "question_hi": "Node.js में HTTP server बनाने के लिए कौन सा module use होता है?",
    "options_en": ["http", "https", "net", "http2"],
    "options_hi": ["http", "https", "net", "http2"],
    "answer_en": "http",
    "answer_hi": "http"
  },
  {
    "num": 2,
    "question_en": "Which method creates an HTTP server?",
    "question_hi": "HTTP server बनाने का method कौन सा है?",
    "options_en": ["http.createServer()", "http.server()", "http.newServer()", "http.listen()"],
    "options_hi": ["http.createServer()", "http.server()", "http.newServer()", "http.listen()"],
    "answer_en": "http.createServer()",
    "answer_hi": "http.createServer()"
  },
  {
    "num": 3,
    "question_en": "Which module is used to create HTTPS servers?",
    "question_hi": "HTTPS server बनाने के लिए कौन सा module use होता है?",
    "options_en": ["https", "http", "tls", "net"],
    "options_hi": ["https", "http", "tls", "net"],
    "answer_en": "https",
    "answer_hi": "https"
  },
  {
    "num": 4,
    "question_en": "Which object represents standard input in Node.js?",
    "question_hi": "Node.js में standard input किस object से represent होता है?",
    "options_en": ["process.stdin", "console.input", "fs.stdin", "input.stream"],
    "options_hi": ["process.stdin", "console.input", "fs.stdin", "input.stream"],
    "answer_en": "process.stdin",
    "answer_hi": "process.stdin"
  },
  {
    "num": 5,
    "question_en": "Which object represents standard output in Node.js?",
    "question_hi": "Node.js में standard output कौन सा object represent करता है?",
    "options_en": ["process.stdout", "console.output", "fs.stdout", "output.stream"],
    "options_hi": ["process.stdout", "console.output", "fs.stdout", "output.stream"],
    "answer_en": "process.stdout",
    "answer_hi": "process.stdout"
  },
  {
    "num": 6,
    "question_en": "Which module is used to compress data?",
    "question_hi": "Data compress करने के लिए Node.js का कौन सा module है?",
    "options_en": ["zlib", "gzip", "compress", "buffer"],
    "options_hi": ["zlib", "gzip", "compress", "buffer"],
    "answer_en": "zlib",
    "answer_hi": "zlib"
  },
  {
    "num": 7,
    "question_en": "Which zlib method creates a gzip stream?",
    "question_hi": "gzip stream बनाने का zlib method कौन सा है?",
    "options_en": ["zlib.createGzip()", "zlib.gzip()", "zlib.compress()", "zlib.newGzip()"],
    "options_hi": ["zlib.createGzip()", "zlib.gzip()", "zlib.compress()", "zlib.newGzip()"],
    "answer_en": "zlib.createGzip()",
    "answer_hi": "zlib.createGzip()"
  },
  {
    "num": 8,
    "question_en": "Which module helps convert callback APIs to Promise-based?",
    "question_hi": "Callback APIs को Promise में convert करने वाला module कौन सा है?",
    "options_en": ["util", "async", "events", "process"],
    "options_hi": ["util", "async", "events", "process"],
    "answer_en": "util",
    "answer_hi": "util"
  },
  {
    "num": 9,
    "question_en": "Which util method converts callbacks to promises?",
    "question_hi": "Callback को promise में बदलने वाला util method कौन सा है?",
    "options_en": ["util.promisify()", "util.promise()", "util.callback()", "util.async()"],
    "options_hi": ["util.promisify()", "util.promise()", "util.callback()", "util.async()"],
    "answer_en": "util.promisify()",
    "answer_hi": "util.promisify()"
  },
  {
    "num": 10,
    "question_en": "Which module provides assertion testing?",
    "question_hi": "Assertion testing के लिए कौन सा Node.js module है?",
    "options_en": ["assert", "test", "check", "verify"],
    "options_hi": ["assert", "test", "check", "verify"],
    "answer_en": "assert",
    "answer_hi": "assert"
  },
  {
    "num": 11,
    "question_en": "Which assert method checks strict equality?",
    "question_hi": "Strict equality check करने वाला assert method कौन सा है?",
    "options_en": ["assert.strictEqual()", "assert.equal()", "assert.same()", "assert.match()"],
    "options_hi": ["assert.strictEqual()", "assert.equal()", "assert.same()", "assert.match()"],
    "answer_en": "assert.strictEqual()",
    "answer_hi": "assert.strictEqual()"
  },
  {
    "num": 12,
    "question_en": "Which module provides DNS functionality?",
    "question_hi": "DNS functionality देने वाला Node.js module कौन सा है?",
    "options_en": ["dns", "net", "http", "os"],
    "options_hi": ["dns", "net", "http", "os"],
    "answer_en": "dns",
    "answer_hi": "dns"
  },
  {
    "num": 13,
    "question_en": "Which dns method resolves a hostname to IP?",
    "question_hi": "Hostname को IP में resolve करने वाला dns method कौन सा है?",
    "options_en": ["dns.lookup()", "dns.resolveIp()", "dns.find()", "dns.query()"],
    "options_hi": ["dns.lookup()", "dns.resolveIp()", "dns.find()", "dns.query()"],
    "answer_en": "dns.lookup()",
    "answer_hi": "dns.lookup()"
  },
  {
    "num": 14,
    "question_en": "Which module allows low-level TCP networking?",
    "question_hi": "Low-level TCP networking के लिए कौन सा module है?",
    "options_en": ["net", "http", "tls", "dns"],
    "options_hi": ["net", "http", "tls", "dns"],
    "answer_en": "net",
    "answer_hi": "net"
  },
  {
    "num": 15,
    "question_en": "Which net method creates a TCP server?",
    "question_hi": "TCP server बनाने वाला net method कौन सा है?",
    "options_en": ["net.createServer()", "net.server()", "net.listen()", "net.connect()"],
    "options_hi": ["net.createServer()", "net.server()", "net.listen()", "net.connect()"],
    "answer_en": "net.createServer()",
    "answer_hi": "net.createServer()"
  },
  {
    "num": 16,
    "question_en": "Which module is used to work with UDP sockets?",
    "question_hi": "UDP sockets के लिए कौन सा module use होता है?",
    "options_en": ["dgram", "net", "udp", "socket"],
    "options_hi": ["dgram", "net", "udp", "socket"],
    "answer_en": "dgram",
    "answer_hi": "dgram"
  },
  {
    "num": 17,
    "question_en": "Which dgram method creates a UDP socket?",
    "question_hi": "UDP socket बनाने वाला dgram method कौन सा है?",
    "options_en": ["dgram.createSocket()", "dgram.socket()", "dgram.newSocket()", "dgram.open()"],
    "options_hi": ["dgram.createSocket()", "dgram.socket()", "dgram.newSocket()", "dgram.open()"],
    "answer_en": "dgram.createSocket()",
    "answer_hi": "dgram.createSocket()"
  },
  {
    "num": 18,
    "question_en": "Which module provides readline interface?",
    "question_hi": "Readline interface देने वाला module कौन सा है?",
    "options_en": ["readline", "input", "stream", "fs"],
    "options_hi": ["readline", "input", "stream", "fs"],
    "answer_en": "readline",
    "answer_hi": "readline"
  },
  {
    "num": 19,
    "question_en": "Which method creates a readline interface?",
    "question_hi": "Readline interface बनाने वाला method कौन सा है?",
    "options_en": ["readline.createInterface()", "readline.new()", "readline.open()", "readline.start()"],
    "options_hi": ["readline.createInterface()", "readline.new()", "readline.open()", "readline.start()"],
    "answer_en": "readline.createInterface()",
    "answer_hi": "readline.createInterface()"
  },
  {
    "num": 20,
    "question_en": "Which module is used to work with file paths in URL format?",
    "question_hi": "URL format में file paths handle करने वाला module कौन सा है?",
    "options_en": ["url", "path", "fs", "util"],
    "options_hi": ["url", "path", "fs", "util"],
    "answer_en": "url",
    "answer_hi": "url"
  },

  {
    "num": 21,
    "question_en": "Which global object represents the global scope?",
    "question_hi": "Global scope को represent करने वाला object कौन सा है?",
    "options_en": ["global", "process", "window", "this"],
    "options_hi": ["global", "process", "window", "this"],
    "answer_en": "global",
    "answer_hi": "global"
  },
  {
    "num": 22,
    "question_en": "Which module provides VM sandboxing?",
    "question_hi": "Sandboxed code execution के लिए कौन सा module है?",
    "options_en": ["vm", "sandbox", "eval", "script"],
    "options_hi": ["vm", "sandbox", "eval", "script"],
    "answer_en": "vm",
    "answer_hi": "vm"
  },
  {
    "num": 23,
    "question_en": "Which vm method runs code in a new context?",
    "question_hi": "New context में code run करने वाला vm method कौन सा है?",
    "options_en": ["vm.runInNewContext()", "vm.run()", "vm.execute()", "vm.eval()"],
    "options_hi": ["vm.runInNewContext()", "vm.run()", "vm.execute()", "vm.eval()"],
    "answer_en": "vm.runInNewContext()",
    "answer_hi": "vm.runInNewContext()"
  },
  {
    "num": 24,
    "question_en": "Which module provides performance hooks?",
    "question_hi": "Performance measurement के लिए कौन सा module है?",
    "options_en": ["perf_hooks", "process", "os", "timers"],
    "options_hi": ["perf_hooks", "process", "os", "timers"],
    "answer_en": "perf_hooks",
    "answer_hi": "perf_hooks"
  },
  {
    "num": 25,
    "question_en": "Which object measures performance timings?",
    "question_hi": "Performance timing measure करने वाला object कौन सा है?",
    "options_en": ["performance", "process", "timer", "measure"],
    "options_hi": ["performance", "process", "timer", "measure"],
    "answer_en": "performance",
    "answer_hi": "performance"
  },
  {
    "num": 26,
    "question_en": "Which module provides internationalization support?",
    "question_hi": "Internationalization support देने वाला module कौन सा है?",
    "options_en": ["intl", "i18n", "util", "global"],
    "options_hi": ["intl", "i18n", "util", "global"],
    "answer_en": "intl",
    "answer_hi": "intl"
  },
  {
    "num": 27,
    "question_en": "Which module helps handle file system promises?",
    "question_hi": "File system promises handle करने वाला module कौन सा है?",
    "options_en": ["fs/promises", "fs-promise", "promise-fs", "fs.async"],
    "options_hi": ["fs/promises", "fs-promise", "promise-fs", "fs.async"],
    "answer_en": "fs/promises",
    "answer_hi": "fs/promises"
  },
  {
    "num": 28,
    "question_en": "Which module provides Web Streams API?",
    "question_hi": "Web Streams API देने वाला module कौन सा है?",
    "options_en": ["stream/web", "webstream", "streams", "http"],
    "options_hi": ["stream/web", "webstream", "streams", "http"],
    "answer_en": "stream/web",
    "answer_hi": "stream/web"
  },
  {
    "num": 29,
    "question_en": "Which module provides diagnostics channel?",
    "question_hi": "Diagnostics channel देने वाला module कौन सा है?",
    "options_en": ["diagnostics_channel", "debug", "trace", "inspect"],
    "options_hi": ["diagnostics_channel", "debug", "trace", "inspect"],
    "answer_en": "diagnostics_channel",
    "answer_hi": "diagnostics_channel"
  },
  {
    "num": 30,
    "question_en": "Which module provides test runner in Node.js?",
    "question_hi": "Node.js का built-in test runner किस module में है?",
    "options_en": ["node:test", "assert", "test", "check"],
    "options_hi": ["node:test", "assert", "test", "check"],
    "answer_en": "node:test",
    "answer_hi": "node:test"
  },

  {
    "num": 31,
    "question_en": "Which method defines a test case in node:test?",
    "question_hi": "node:test में test define करने वाला method कौन सा है?",
    "options_en": ["test()", "it()", "describe()", "run()"],
    "options_hi": ["test()", "it()", "describe()", "run()"],
    "answer_en": "test()",
    "answer_hi": "test()"
  },
  {
    "num": 32,
    "question_en": "Which module provides web crypto API?",
    "question_hi": "Web Crypto API देने वाला module कौन सा है?",
    "options_en": ["crypto", "webcrypto", "tls", "security"],
    "options_hi": ["crypto", "webcrypto", "tls", "security"],
    "answer_en": "crypto",
    "answer_hi": "crypto"
  },
  {
    "num": 33,
    "question_en": "Which crypto property provides Web Crypto?",
    "question_hi": "Web Crypto देने वाली crypto property कौन सी है?",
    "options_en": ["crypto.webcrypto", "crypto.web", "crypto.api", "crypto.secure"],
    "options_hi": ["crypto.webcrypto", "crypto.web", "crypto.api", "crypto.secure"],
    "answer_en": "crypto.webcrypto",
    "answer_hi": "crypto.webcrypto"
  },
  {
    "num": 34,
    "question_en": "Which module allows file watching?",
    "question_hi": "File changes watch करने वाला module कौन सा है?",
    "options_en": ["fs", "watcher", "events", "path"],
    "options_hi": ["fs", "watcher", "events", "path"],
    "answer_en": "fs",
    "answer_hi": "fs"
  },
  {
    "num": 35,
    "question_en": "Which fs method watches file changes?",
    "question_hi": "File changes watch करने वाला fs method कौन सा है?",
    "options_en": ["fs.watch()", "fs.observe()", "fs.track()", "fs.listen()"],
    "options_hi": ["fs.watch()", "fs.observe()", "fs.track()", "fs.listen()"],
    "answer_en": "fs.watch()",
    "answer_hi": "fs.watch()"
  },
  {
    "num": 36,
    "question_en": "Which module provides console utilities?",
    "question_hi": "Console utilities देने वाला module कौन सा है?",
    "options_en": ["console", "util", "process", "debug"],
    "options_hi": ["console", "util", "process", "debug"],
    "answer_en": "console",
    "answer_hi": "console"
  },
  {
    "num": 37,
    "question_en": "Which console method measures execution time?",
    "question_hi": "Execution time measure करने वाला console method कौन सा है?",
    "options_en": ["console.time()", "console.count()", "console.log()", "console.trace()"],
    "options_hi": ["console.time()", "console.count()", "console.log()", "console.trace()"],
    "answer_en": "console.time()",
    "answer_hi": "console.time()"
  },
  {
    "num": 38,
    "question_en": "Which module provides inspector API?",
    "question_hi": "Inspector API देने वाला module कौन सा है?",
    "options_en": ["inspector", "debug", "util", "process"],
    "options_hi": ["inspector", "debug", "util", "process"],
    "answer_en": "inspector",
    "answer_hi": "inspector"
  },
  {
    "num": 39,
    "question_en": "Which module helps with async hooks?",
    "question_hi": "Async lifecycle track करने वाला module कौन सा है?",
    "options_en": ["async_hooks", "hooks", "events", "process"],
    "options_hi": ["async_hooks", "hooks", "events", "process"],
    "answer_en": "async_hooks",
    "answer_hi": "async_hooks"
  },
  {
    "num": 40,
    "question_en": "Which async_hooks method creates a hook?",
    "question_hi": "Async hook बनाने वाला method कौन सा है?",
    "options_en": ["async_hooks.createHook()", "async_hooks.new()", "async_hooks.hook()", "async_hooks.init()"],
    "options_hi": ["async_hooks.createHook()", "async_hooks.new()", "async_hooks.hook()", "async_hooks.init()"],
    "answer_en": "async_hooks.createHook()",
    "answer_hi": "async_hooks.createHook()"
  },

  {
    "num": 41,
    "question_en": "Which module provides AbortController?",
    "question_hi": "AbortController देने वाला module कौन सा है?",
    "options_en": ["events", "abort-controller", "util", "process"],
    "options_hi": ["events", "abort-controller", "util", "process"],
    "answer_en": "events",
    "answer_hi": "events"
  },
  {
    "num": 42,
    "question_en": "Which object is used to cancel async operations?",
    "question_hi": "Async operations cancel करने के लिए कौन सा object use होता है?",
    "options_en": ["AbortController", "CancelToken", "StopController", "Signal"],
    "options_hi": ["AbortController", "CancelToken", "StopController", "Signal"],
    "answer_en": "AbortController",
    "answer_hi": "AbortController"
  },
  {
    "num": 43,
    "question_en": "Which module provides web-compatible timers?",
    "question_hi": "Web-compatible timers देने वाला module कौन सा है?",
    "options_en": ["timers/promises", "timers", "time", "schedule"],
    "options_hi": ["timers/promises", "timers", "time", "schedule"],
    "answer_en": "timers/promises",
    "answer_hi": "timers/promises"
  },
  {
    "num": 44,
    "question_en": "Which method delays execution using promises?",
    "question_hi": "Promise के साथ delay करने वाला method कौन सा है?",
    "options_en": ["setTimeout()", "sleep()", "delay()", "wait()"],
    "options_hi": ["setTimeout()", "sleep()", "delay()", "wait()"],
    "answer_en": "setTimeout()",
    "answer_hi": "setTimeout()"
  },
  {
    "num": 45,
    "question_en": "Which module provides WASI support?",
    "question_hi": "WASI support देने वाला module कौन सा है?",
    "options_en": ["wasi", "wasm", "webassembly", "vm"],
    "options_hi": ["wasi", "wasm", "webassembly", "vm"],
    "answer_en": "wasi",
    "answer_hi": "wasi"
  },
  {
    "num": 46,
    "question_en": "Which module supports WebAssembly?",
    "question_hi": "WebAssembly support देने वाला module कौन सा है?",
    "options_en": ["webassembly", "wasm", "vm", "wasi"],
    "options_hi": ["webassembly", "wasm", "vm", "wasi"],
    "answer_en": "webassembly",
    "answer_hi": "webassembly"
  },
  {
    "num": 47,
    "question_en": "Which object gives environment variables?",
    "question_hi": "Environment variables कौन सा object देता है?",
    "options_en": ["process.env", "os.env", "global.env", "system.env"],
    "options_hi": ["process.env", "os.env", "global.env", "system.env"],
    "answer_en": "process.env",
    "answer_hi": "process.env"
  },
  {
    "num": 48,
    "question_en": "Which module provides command-line argument parsing?",
    "question_hi": "Command-line arguments parse करने के लिए कौन सा module है?",
    "options_en": ["process", "util", "args", "cli"],
    "options_hi": ["process", "util", "args", "cli"],
    "answer_en": "process",
    "answer_hi": "process"
  },
  {
    "num": 49,
    "question_en": "Which property gives command-line arguments?",
    "question_hi": "Command-line arguments देने वाली property कौन सी है?",
    "options_en": ["process.argv", "process.args", "process.cli", "process.params"],
    "options_hi": ["process.argv", "process.args", "process.cli", "process.params"],
    "answer_en": "process.argv",
    "answer_hi": "process.argv"
  },
  {
    "num": 50,
    "question_en": "Which module provides REPL environment?",
    "question_hi": "REPL environment देने वाला Node.js module कौन सा है?",
    "options_en": ["repl", "console", "vm", "process"],
    "options_hi": ["repl", "console", "vm", "process"],
    "answer_en": "repl",
    "answer_hi": "repl"
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