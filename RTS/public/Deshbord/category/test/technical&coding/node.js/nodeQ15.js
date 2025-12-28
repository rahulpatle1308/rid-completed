const questions=[
  {
    "num": 1,
    "question_en": "Which module provides information about the operating system?",
    "question_hi": "Operating system की जानकारी देने वाला Node.js module कौन सा है?",
    "options_en": ["os", "process", "system", "util"],
    "options_hi": ["os", "process", "system", "util"],
    "answer_en": "os",
    "answer_hi": "os"
  },
  {
    "num": 2,
    "question_en": "Which os method returns the platform name?",
    "question_hi": "Platform name बताने वाला os method कौन सा है?",
    "options_en": ["os.platform()", "os.type()", "os.arch()", "os.release()"],
    "options_hi": ["os.platform()", "os.type()", "os.arch()", "os.release()"],
    "answer_en": "os.platform()",
    "answer_hi": "os.platform()"
  },
  {
    "num": 3,
    "question_en": "Which module is used to create child processes?",
    "question_hi": "Child process बनाने के लिए कौन सा module use होता है?",
    "options_en": ["child_process", "cluster", "worker_threads", "process"],
    "options_hi": ["child_process", "cluster", "worker_threads", "process"],
    "answer_en": "child_process",
    "answer_hi": "child_process"
  },
  {
    "num": 4,
    "question_en": "Which method executes a shell command?",
    "question_hi": "Shell command execute करने वाला method कौन सा है?",
    "options_en": ["exec()", "fork()", "spawnSync()", "run()"],
    "options_hi": ["exec()", "fork()", "spawnSync()", "run()"],
    "answer_en": "exec()",
    "answer_hi": "exec()"
  },
  {
    "num": 5,
    "question_en": "Which child_process method creates a new Node.js process?",
    "question_hi": "New Node.js process बनाने वाला method कौन सा है?",
    "options_en": ["fork()", "exec()", "spawn()", "execFile()"],
    "options_hi": ["fork()", "exec()", "spawn()", "execFile()"],
    "answer_en": "fork()",
    "answer_hi": "fork()"
  },
  {
    "num": 6,
    "question_en": "Which module enables multi-core load balancing?",
    "question_hi": "Multi-core load balancing के लिए कौन सा module है?",
    "options_en": ["cluster", "os", "net", "worker_threads"],
    "options_hi": ["cluster", "os", "net", "worker_threads"],
    "answer_en": "cluster",
    "answer_hi": "cluster"
  },
  {
    "num": 7,
    "question_en": "Which cluster property checks if process is master?",
    "question_hi": "Process master है या नहीं check करने की property कौन सी है?",
    "options_en": ["cluster.isMaster", "cluster.master", "cluster.primary", "cluster.isWorker"],
    "options_hi": ["cluster.isMaster", "cluster.master", "cluster.primary", "cluster.isWorker"],
    "answer_en": "cluster.isMaster",
    "answer_hi": "cluster.isMaster"
  },
  {
    "num": 8,
    "question_en": "Which module provides threads in Node.js?",
    "question_hi": "Node.js में threads provide करने वाला module कौन सा है?",
    "options_en": ["worker_threads", "cluster", "threads", "async_hooks"],
    "options_hi": ["worker_threads", "cluster", "threads", "async_hooks"],
    "answer_en": "worker_threads",
    "answer_hi": "worker_threads"
  },
  {
    "num": 9,
    "question_en": "Which class represents a worker thread?",
    "question_hi": "Worker thread को represent करने वाली class कौन सी है?",
    "options_en": ["Worker", "Thread", "Child", "Task"],
    "options_hi": ["Worker", "Thread", "Child", "Task"],
    "answer_en": "Worker",
    "answer_hi": "Worker"
  },
  {
    "num": 10,
    "question_en": "Which module provides Buffer support?",
    "question_hi": "Buffer support देने वाला Node.js module कौन सा है?",
    "options_en": ["buffer", "stream", "fs", "util"],
    "options_hi": ["buffer", "stream", "fs", "util"],
    "answer_en": "buffer",
    "answer_hi": "buffer"
  },
  {
    "num": 11,
    "question_en": "Which method creates a buffer from a string?",
    "question_hi": "String से buffer बनाने वाला method कौन सा है?",
    "options_en": ["Buffer.from()", "Buffer.alloc()", "Buffer.create()", "Buffer.new()"],
    "options_hi": ["Buffer.from()", "Buffer.alloc()", "Buffer.create()", "Buffer.new()"],
    "answer_en": "Buffer.from()",
    "answer_hi": "Buffer.from()"
  },
  {
    "num": 12,
    "question_en": "Which method allocates a zero-filled buffer?",
    "question_hi": "Zero-filled buffer allocate करने वाला method कौन सा है?",
    "options_en": ["Buffer.alloc()", "Buffer.from()", "Buffer.concat()", "Buffer.fill()"],
    "options_hi": ["Buffer.alloc()", "Buffer.from()", "Buffer.concat()", "Buffer.fill()"],
    "answer_en": "Buffer.alloc()",
    "answer_hi": "Buffer.alloc()"
  },
  {
    "num": 13,
    "question_en": "Which module handles stream functionality?",
    "question_hi": "Streams handle करने वाला Node.js module कौन सा है?",
    "options_en": ["stream", "buffer", "fs", "events"],
    "options_hi": ["stream", "buffer", "fs", "events"],
    "answer_en": "stream",
    "answer_hi": "stream"
  },
  {
    "num": 14,
    "question_en": "Which stream type is used for reading data?",
    "question_hi": "Data read करने के लिए कौन सा stream type use होता है?",
    "options_en": ["Readable", "Writable", "Duplex", "Transform"],
    "options_hi": ["Readable", "Writable", "Duplex", "Transform"],
    "answer_en": "Readable",
    "answer_hi": "Readable"
  },
  {
    "num": 15,
    "question_en": "Which stream type modifies data while passing?",
    "question_hi": "Data को modify करते हुए pass करने वाला stream कौन सा है?",
    "options_en": ["Transform", "Duplex", "Readable", "Writable"],
    "options_hi": ["Transform", "Duplex", "Readable", "Writable"],
    "answer_en": "Transform",
    "answer_hi": "Transform"
  },
  {
    "num": 16,
    "question_en": "Which module provides terminal-related utilities?",
    "question_hi": "Terminal utilities देने वाला module कौन सा है?",
    "options_en": ["tty", "console", "process", "readline"],
    "options_hi": ["tty", "console", "process", "readline"],
    "answer_en": "tty",
    "answer_hi": "tty"
  },
  {
    "num": 17,
    "question_en": "Which module handles URL query strings?",
    "question_hi": "URL query string handle करने वाला module कौन सा है?",
    "options_en": ["querystring", "url", "path", "http"],
    "options_hi": ["querystring", "url", "path", "http"],
    "answer_en": "querystring",
    "answer_hi": "querystring"
  },
  {
    "num": 18,
    "question_en": "Which method parses a query string?",
    "question_hi": "Query string parse करने वाला method कौन सा है?",
    "options_en": ["querystring.parse()", "url.parse()", "path.parse()", "http.parse()"],
    "options_hi": ["querystring.parse()", "url.parse()", "path.parse()", "http.parse()"],
    "answer_en": "querystring.parse()",
    "answer_hi": "querystring.parse()"
  },
  {
    "num": 19,
    "question_en": "Which module provides WHATWG URL API?",
    "question_hi": "WHATWG URL API देने वाला module कौन सा है?",
    "options_en": ["url", "querystring", "http", "net"],
    "options_hi": ["url", "querystring", "http", "net"],
    "answer_en": "url",
    "answer_hi": "url"
  },
  {
    "num": 20,
    "question_en": "Which class represents a WHATWG URL?",
    "question_hi": "WHATWG URL को represent करने वाली class कौन सी है?",
    "options_en": ["URL", "Uri", "Link", "Address"],
    "options_hi": ["URL", "Uri", "Link", "Address"],
    "answer_en": "URL",
    "answer_hi": "URL"
  },
  {
    "num": 21,
    "question_en": "Which module provides file system constants?",
    "question_hi": "File system constants देने वाला module कौन सा है?",
    "options_en": ["fs.constants", "os.constants", "path.constants", "process.constants"],
    "options_hi": ["fs.constants", "os.constants", "path.constants", "process.constants"],
    "answer_en": "fs.constants",
    "answer_hi": "fs.constants"
  },
  {
    "num": 22,
    "question_en": "Which fs method checks file access permissions?",
    "question_hi": "File access permission check करने वाला fs method कौन सा है?",
    "options_en": ["fs.access()", "fs.exists()", "fs.open()", "fs.stat()"],
    "options_hi": ["fs.access()", "fs.exists()", "fs.open()", "fs.stat()"],
    "answer_en": "fs.access()",
    "answer_hi": "fs.access()"
  },
  {
    "num": 23,
    "question_en": "Which fs method reads directory contents?",
    "question_hi": "Directory contents read करने वाला fs method कौन सा है?",
    "options_en": ["fs.readdir()", "fs.read()", "fs.list()", "fs.scan()"],
    "options_hi": ["fs.readdir()", "fs.read()", "fs.list()", "fs.scan()"],
    "answer_en": "fs.readdir()",
    "answer_hi": "fs.readdir()"
  },
  {
    "num": 24,
    "question_en": "Which path method joins path segments?",
    "question_hi": "Path segments join करने वाला method कौन सा है?",
    "options_en": ["path.join()", "path.merge()", "path.concat()", "path.combine()"],
    "options_hi": ["path.join()", "path.merge()", "path.concat()", "path.combine()"],
    "answer_en": "path.join()",
    "answer_hi": "path.join()"
  },
  {
    "num": 25,
    "question_en": "Which path method resolves absolute paths?",
    "question_hi": "Absolute path resolve करने वाला method कौन सा है?",
    "options_en": ["path.resolve()", "path.normalize()", "path.absolute()", "path.fix()"],
    "options_hi": ["path.resolve()", "path.normalize()", "path.absolute()", "path.fix()"],
    "answer_en": "path.resolve()",
    "answer_hi": "path.resolve()"
  },
  {
    "num": 26,
    "question_en": "Which module provides HTTP/2 support?",
    "question_hi": "HTTP/2 support देने वाला module कौन सा है?",
    "options_en": ["http2", "http", "https", "net"],
    "options_hi": ["http2", "http", "https", "net"],
    "answer_en": "http2",
    "answer_hi": "http2"
  },
  {
    "num": 27,
    "question_en": "Which method creates an HTTP/2 server?",
    "question_hi": "HTTP/2 server बनाने वाला method कौन सा है?",
    "options_en": ["http2.createServer()", "http.createServer()", "https.createServer()", "net.createServer()"],
    "options_hi": ["http2.createServer()", "http.createServer()", "https.createServer()", "net.createServer()"],
    "answer_en": "http2.createServer()",
    "answer_hi": "http2.createServer()"
  },
  {
    "num": 28,
    "question_en": "Which module provides V8 engine APIs?",
    "question_hi": "V8 engine APIs देने वाला module कौन सा है?",
    "options_en": ["v8", "vm", "engine", "js"],
    "options_hi": ["v8", "vm", "engine", "js"],
    "answer_en": "v8",
    "answer_hi": "v8"
  },
  {
    "num": 29,
    "question_en": "Which module provides event tracing?",
    "question_hi": "Event tracing के लिए कौन सा module है?",
    "options_en": ["trace_events", "events", "diagnostics", "perf_hooks"],
    "options_hi": ["trace_events", "events", "diagnostics", "perf_hooks"],
    "answer_en": "trace_events",
    "answer_hi": "trace_events"
  },
  {
    "num": 30,
    "question_en": "Which module handles policy enforcement?",
    "question_hi": "Policy enforcement के लिए कौन सा module है?",
    "options_en": ["policy", "security", "vm", "process"],
    "options_hi": ["policy", "security", "vm", "process"],
    "answer_en": "policy",
    "answer_hi": "policy"
  },
  {
    "num": 31,
    "question_en": "Which module supports ES Modules loading?",
    "question_hi": "ES Modules loading से जुड़ा core module कौन सा है?",
    "options_en": ["module", "esm", "loader", "require"],
    "options_hi": ["module", "esm", "loader", "require"],
    "answer_en": "module",
    "answer_hi": "module"
  },
  {
    "num": 32,
    "question_en": "Which function is used to import CommonJS modules?",
    "question_hi": "CommonJS modules import करने के लिए कौन सा function है?",
    "options_en": ["require()", "import()", "load()", "include()"],
    "options_hi": ["require()", "import()", "load()", "include()"],
    "answer_en": "require()",
    "answer_hi": "require()"
  },
  {
    "num": 33,
    "question_en": "Which module provides timers like setImmediate?",
    "question_hi": "setImmediate जैसी timers देने वाला module कौन सा है?",
    "options_en": ["timers", "process", "events", "async_hooks"],
    "options_hi": ["timers", "process", "events", "async_hooks"],
    "answer_en": "timers",
    "answer_hi": "timers"
  },
  {
    "num": 34,
    "question_en": "Which function executes callback after I/O events?",
    "question_hi": "I/O events के बाद callback execute करने वाला function कौन सा है?",
    "options_en": ["setImmediate()", "setTimeout()", "nextTick()", "setInterval()"],
    "options_hi": ["setImmediate()", "setTimeout()", "nextTick()", "setInterval()"],
    "answer_en": "setImmediate()",
    "answer_hi": "setImmediate()"
  },
  {
    "num": 35,
    "question_en": "Which process method exits the application?",
    "question_hi": "Application exit करने वाला process method कौन सा है?",
    "options_en": ["process.exit()", "process.kill()", "process.stop()", "process.close()"],
    "options_hi": ["process.exit()", "process.kill()", "process.stop()", "process.close()"],
    "answer_en": "process.exit()",
    "answer_hi": "process.exit()"
  },
  {
    "num": 36,
    "question_en": "Which event is emitted before Node.js exits?",
    "question_hi": "Node.js exit से पहले कौन सा event emit होता है?",
    "options_en": ["beforeExit", "exit", "close", "end"],
    "options_hi": ["beforeExit", "exit", "close", "end"],
    "answer_en": "beforeExit",
    "answer_hi": "beforeExit"
  },
  {
    "num": 37,
    "question_en": "Which module provides punycode support?",
    "question_hi": "Punycode support देने वाला module कौन सा है?",
    "options_en": ["punycode", "url", "dns", "net"],
    "options_hi": ["punycode", "url", "dns", "net"],
    "answer_en": "punycode",
    "answer_hi": "punycode"
  },
  {
    "num": 38,
    "question_en": "Which module provides SEA support?",
    "question_hi": "Single Executable Application (SEA) से जुड़ा module कौन सा है?",
    "options_en": ["sea", "process", "module", "vm"],
    "options_hi": ["sea", "process", "module", "vm"],
    "answer_en": "sea",
    "answer_hi": "sea"
  },
  {
    "num": 39,
    "question_en": "Which module provides source map support?",
    "question_hi": "Source map support देने वाला module कौन सा है?",
    "options_en": ["source_map", "v8", "vm", "module"],
    "options_hi": ["source_map", "v8", "vm", "module"],
    "answer_en": "source_map",
    "answer_hi": "source_map"
  },
  {
    "num": 40,
    "question_en": "Which module helps detect deprecated APIs?",
    "question_hi": "Deprecated APIs detect करने वाला module कौन सा है?",
    "options_en": ["process", "util", "diagnostics_channel", "trace_events"],
    "options_hi": ["process", "util", "diagnostics_channel", "trace_events"],
    "answer_en": "process",
    "answer_hi": "process"
  },
  {
    "num": 41,
    "question_en": "Which process property gives Node.js version?",
    "question_hi": "Node.js version बताने वाली property कौन सी है?",
    "options_en": ["process.version", "process.node", "process.versions", "process.release"],
    "options_hi": ["process.version", "process.node", "process.versions", "process.release"],
    "answer_en": "process.version",
    "answer_hi": "process.version"
  },
  {
    "num": 42,
    "question_en": "Which module provides HTTP client requests?",
    "question_hi": "HTTP client request के लिए कौन सा module है?",
    "options_en": ["http", "net", "https", "fetch"],
    "options_hi": ["http", "net", "https", "fetch"],
    "answer_en": "http",
    "answer_hi": "http"
  },
  {
    "num": 43,
    "question_en": "Which http method sends a GET request?",
    "question_hi": "GET request भेजने वाला http method कौन सा है?",
    "options_en": ["http.get()", "http.fetch()", "http.request()", "http.send()"],
    "options_hi": ["http.get()", "http.fetch()", "http.request()", "http.send()"],
    "answer_en": "http.get()",
    "answer_hi": "http.get()"
  },
  {
    "num": 44,
    "question_en": "Which module provides HTTPS agent?",
    "question_hi": "HTTPS agent देने वाला module कौन सा है?",
    "options_en": ["https", "tls", "http2", "net"],
    "options_hi": ["https", "tls", "http2", "net"],
    "answer_en": "https",
    "answer_hi": "https"
  },
  {
    "num": 45,
    "question_en": "Which module handles socket-level encryption?",
    "question_hi": "Socket-level encryption handle करने वाला module कौन सा है?",
    "options_en": ["tls", "crypto", "https", "net"],
    "options_hi": ["tls", "crypto", "https", "net"],
    "answer_en": "tls",
    "answer_hi": "tls"
  },
  {
    "num": 46,
    "question_en": "Which tls method creates a secure server?",
    "question_hi": "Secure server बनाने वाला tls method कौन सा है?",
    "options_en": ["tls.createServer()", "tls.server()", "tls.listen()", "tls.createSocket()"],
    "options_hi": ["tls.createServer()", "tls.server()", "tls.listen()", "tls.createSocket()"],
    "answer_en": "tls.createServer()",
    "answer_hi": "tls.createServer()"
  },
  {
    "num": 47,
    "question_en": "Which module provides domain-based error handling?",
    "question_hi": "Domain-based error handling के लिए कौन सा module है?",
    "options_en": ["domain", "events", "process", "async_hooks"],
    "options_hi": ["domain", "events", "process", "async_hooks"],
    "answer_en": "domain",
    "answer_hi": "domain"
  },
  {
    "num": 48,
    "question_en": "Which module provides text encoding utilities?",
    "question_hi": "Text encoding utilities देने वाला module कौन सा है?",
    "options_en": ["string_decoder", "buffer", "util", "text"],
    "options_hi": ["string_decoder", "buffer", "util", "text"],
    "answer_en": "string_decoder",
    "answer_hi": "string_decoder"
  },
  {
    "num": 49,
    "question_en": "Which class decodes buffer to string safely?",
    "question_hi": "Buffer को safely string में decode करने वाली class कौन सी है?",
    "options_en": ["StringDecoder", "TextDecoder", "BufferDecoder", "SafeDecoder"],
    "options_hi": ["StringDecoder", "TextDecoder", "BufferDecoder", "SafeDecoder"],
    "answer_en": "StringDecoder",
    "answer_hi": "StringDecoder"
  },
  {
    "num": 50,
    "question_en": "Which module provides Node.js release metadata?",
    "question_hi": "Node.js release metadata देने वाला module कौन सा है?",
    "options_en": ["process.release", "os.release", "module.release", "v8.release"],
    "options_hi": ["process.release", "os.release", "module.release", "v8.release"],
    "answer_en": "process.release",
    "answer_hi": "process.release"
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