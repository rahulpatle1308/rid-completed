const questions=[
  {
    "num": 1,
    "question_en": "Which crypto method generates random bytes?",
    "question_hi": "Random bytes generate करने वाला crypto method कौन सा है?",
    "options_en": ["crypto.randomBytes()", "crypto.random()", "crypto.bytes()", "crypto.generate()"],
    "options_hi": ["crypto.randomBytes()", "crypto.random()", "crypto.bytes()", "crypto.generate()"],
    "answer_en": "crypto.randomBytes()",
    "answer_hi": "crypto.randomBytes()"
  },
  {
    "num": 2,
    "question_en": "Which crypto method creates HMAC?",
    "question_hi": "HMAC create करने वाला crypto method कौन सा है?",
    "options_en": ["crypto.createHmac()", "crypto.hmac()", "crypto.createHash()", "crypto.sign()"],
    "options_hi": ["crypto.createHmac()", "crypto.hmac()", "crypto.createHash()", "crypto.sign()"],
    "answer_en": "crypto.createHmac()",
    "answer_hi": "crypto.createHmac()"
  },
  {
    "num": 3,
    "question_en": "Which fs method gets file statistics?",
    "question_hi": "File statistics पाने वाला fs method कौन सा है?",
    "options_en": ["fs.stat()", "fs.info()", "fs.details()", "fs.check()"],
    "options_hi": ["fs.stat()", "fs.info()", "fs.details()", "fs.check()"],
    "answer_en": "fs.stat()",
    "answer_hi": "fs.stat()"
  },
  {
    "num": 4,
    "question_en": "Which fs method renames a file?",
    "question_hi": "File rename करने वाला fs method कौन सा है?",
    "options_en": ["fs.rename()", "fs.move()", "fs.change()", "fs.update()"],
    "options_hi": ["fs.rename()", "fs.move()", "fs.change()", "fs.update()"],
    "answer_en": "fs.rename()",
    "answer_hi": "fs.rename()"
  },
  {
    "num": 5,
    "question_en": "Which fs method deletes a file?",
    "question_hi": "File delete करने वाला fs method कौन सा है?",
    "options_en": ["fs.unlink()", "fs.remove()", "fs.delete()", "fs.erase()"],
    "options_hi": ["fs.unlink()", "fs.remove()", "fs.delete()", "fs.erase()"],
    "answer_en": "fs.unlink()",
    "answer_hi": "fs.unlink()"
  },
  {
    "num": 6,
    "question_en": "Which event is emitted when a stream ends?",
    "question_hi": "Stream खत्म होने पर कौन सा event emit होता है?",
    "options_en": ["end", "finish", "close", "stop"],
    "options_hi": ["end", "finish", "close", "stop"],
    "answer_en": "end",
    "answer_hi": "end"
  },
  {
    "num": 7,
    "question_en": "Which event indicates writable stream finished writing?",
    "question_hi": "Writable stream के finish होने पर कौन सा event आता है?",
    "options_en": ["finish", "end", "close", "done"],
    "options_hi": ["finish", "end", "close", "done"],
    "answer_en": "finish",
    "answer_hi": "finish"
  },
  {
    "num": 8,
    "question_en": "Which stream method pauses data flow?",
    "question_hi": "Data flow pause करने वाला stream method कौन सा है?",
    "options_en": ["pause()", "stop()", "halt()", "freeze()"],
    "options_hi": ["pause()", "stop()", "halt()", "freeze()"],
    "answer_en": "pause()",
    "answer_hi": "pause()"
  },
  {
    "num": 9,
    "question_en": "Which stream method resumes data flow?",
    "question_hi": "Paused stream को resume करने वाला method कौन सा है?",
    "options_en": ["resume()", "start()", "continue()", "flow()"],
    "options_hi": ["resume()", "start()", "continue()", "flow()"],
    "answer_en": "resume()",
    "answer_hi": "resume()"
  },
  {
    "num": 10,
    "question_en": "Which http module event fires on client request?",
    "question_hi": "HTTP client request पर कौन सा event fire होता है?",
    "options_en": ["request", "connect", "response", "data"],
    "options_hi": ["request", "connect", "response", "data"],
    "answer_en": "request",
    "answer_hi": "request"
  },
  {
    "num": 11,
    "question_en": "Which property sets HTTP response status code?",
    "question_hi": "HTTP response status code set करने की property कौन सी है?",
    "options_en": ["res.statusCode", "res.code", "res.status()", "res.sendStatus"],
    "options_hi": ["res.statusCode", "res.code", "res.status()", "res.sendStatus"],
    "answer_en": "res.statusCode",
    "answer_hi": "res.statusCode"
  },
  {
    "num": 12,
    "question_en": "Which method ends an HTTP response?",
    "question_hi": "HTTP response end करने वाला method कौन सा है?",
    "options_en": ["res.end()", "res.close()", "res.finish()", "res.stop()"],
    "options_hi": ["res.end()", "res.close()", "res.finish()", "res.stop()"],
    "answer_en": "res.end()",
    "answer_hi": "res.end()"
  },
  {
    "num": 13,
    "question_en": "Which event occurs when an HTTP server closes?",
    "question_hi": "HTTP server बंद होने पर कौन सा event emit होता है?",
    "options_en": ["close", "end", "exit", "finish"],
    "options_hi": ["close", "end", "exit", "finish"],
    "answer_en": "close",
    "answer_hi": "close"
  },
  {
    "num": 14,
    "question_en": "Which module provides UDP multicast?",
    "question_hi": "UDP multicast support देने वाला module कौन सा है?",
    "options_en": ["dgram", "net", "dns", "tls"],
    "options_hi": ["dgram", "net", "dns", "tls"],
    "answer_en": "dgram",
    "answer_hi": "dgram"
  },
  {
    "num": 15,
    "question_en": "Which dgram method sends a message?",
    "question_hi": "UDP message भेजने वाला dgram method कौन सा है?",
    "options_en": ["socket.send()", "socket.write()", "socket.emit()", "socket.push()"],
    "options_hi": ["socket.send()", "socket.write()", "socket.emit()", "socket.push()"],
    "answer_en": "socket.send()",
    "answer_hi": "socket.send()"
  },
  {
    "num": 16,
    "question_en": "Which os method returns CPU information?",
    "question_hi": "CPU information देने वाला os method कौन सा है?",
    "options_en": ["os.cpus()", "os.cpu()", "os.processor()", "os.arch()"],
    "options_hi": ["os.cpus()", "os.cpu()", "os.processor()", "os.arch()"],
    "answer_en": "os.cpus()",
    "answer_hi": "os.cpus()"
  },
  {
    "num": 17,
    "question_en": "Which os method returns system uptime?",
    "question_hi": "System uptime देने वाला os method कौन सा है?",
    "options_en": ["os.uptime()", "process.uptime()", "os.time()", "system.uptime()"],
    "options_hi": ["os.uptime()", "process.uptime()", "os.time()", "system.uptime()"],
    "answer_en": "os.uptime()",
    "answer_hi": "os.uptime()"
  },
  {
    "num": 18,
    "question_en": "Which process method returns memory usage?",
    "question_hi": "Memory usage देने वाला process method कौन सा है?",
    "options_en": ["process.memoryUsage()", "process.mem()", "process.usage()", "process.stats()"],
    "options_hi": ["process.memoryUsage()", "process.mem()", "process.usage()", "process.stats()"],
    "answer_en": "process.memoryUsage()",
    "answer_hi": "process.memoryUsage()"
  },
  {
    "num": 19,
    "question_en": "Which process event handles uncaught errors?",
    "question_hi": "Uncaught errors handle करने वाला process event कौन सा है?",
    "options_en": ["uncaughtException", "error", "exit", "warning"],
    "options_hi": ["uncaughtException", "error", "exit", "warning"],
    "answer_en": "uncaughtException",
    "answer_hi": "uncaughtException"
  },
  {
    "num": 20,
    "question_en": "Which process event handles rejected promises?",
    "question_hi": "Rejected promises handle करने वाला process event कौन सा है?",
    "options_en": ["unhandledRejection", "rejection", "promiseError", "reject"],
    "options_hi": ["unhandledRejection", "rejection", "promiseError", "reject"],
    "answer_en": "unhandledRejection",
    "answer_hi": "unhandledRejection"
  },
  {
    "num": 21,
    "question_en": "Which util method converts callback to promise?",
    "question_hi": "Callback को promise में convert करने वाला util method कौन सा है?",
    "options_en": ["util.promisify()", "util.promise()", "util.async()", "util.wrap()"],
    "options_hi": ["util.promisify()", "util.promise()", "util.async()", "util.wrap()"],
    "answer_en": "util.promisify()",
    "answer_hi": "util.promisify()"
  },
  {
    "num": 22,
    "question_en": "Which util method inspects objects?",
    "question_hi": "Object inspect करने वाला util method कौन सा है?",
    "options_en": ["util.inspect()", "util.view()", "util.debug()", "util.print()"],
    "options_hi": ["util.inspect()", "util.view()", "util.debug()", "util.print()"],
    "answer_en": "util.inspect()",
    "answer_hi": "util.inspect()"
  },
  {
    "num": 23,
    "question_en": "Which event loop phase executes timers?",
    "question_hi": "Timers किस event loop phase में execute होते हैं?",
    "options_en": ["timers phase", "poll phase", "check phase", "close phase"],
    "options_hi": ["timers phase", "poll phase", "check phase", "close phase"],
    "answer_en": "timers phase",
    "answer_hi": "timers phase"
  },
  {
    "num": 24,
    "question_en": "Which phase executes setImmediate callbacks?",
    "question_hi": "setImmediate callbacks किस phase में execute होते हैं?",
    "options_en": ["check phase", "poll phase", "timers phase", "close phase"],
    "options_hi": ["check phase", "poll phase", "timers phase", "close phase"],
    "answer_en": "check phase",
    "answer_hi": "check phase"
  },
  {
    "num": 25,
    "question_en": "Which module provides path parsing?",
    "question_hi": "Path parse करने वाला method किस module में होता है?",
    "options_en": ["path", "fs", "url", "util"],
    "options_hi": ["path", "fs", "url", "util"],
    "answer_en": "path",
    "answer_hi": "path"
  },
  {
    "num": 26,
    "question_en": "Which path method returns file extension?",
    "question_hi": "File extension देने वाला path method कौन सा है?",
    "options_en": ["path.extname()", "path.basename()", "path.dirname()", "path.parse()"],
    "options_hi": ["path.extname()", "path.basename()", "path.dirname()", "path.parse()"],
    "answer_en": "path.extname()",
    "answer_hi": "path.extname()"
  },
  {
    "num": 27,
    "question_en": "Which path method returns file name?",
    "question_hi": "File name देने वाला path method कौन सा है?",
    "options_en": ["path.basename()", "path.extname()", "path.root()", "path.dir()"],
    "options_hi": ["path.basename()", "path.extname()", "path.root()", "path.dir()"],
    "answer_en": "path.basename()",
    "answer_hi": "path.basename()"
  },
  {
    "num": 28,
    "question_en": "Which buffer method fills data?",
    "question_hi": "Buffer में data fill करने वाला method कौन सा है?",
    "options_en": ["buffer.fill()", "buffer.write()", "buffer.push()", "buffer.set()"],
    "options_hi": ["buffer.fill()", "buffer.write()", "buffer.push()", "buffer.set()"],
    "answer_en": "buffer.fill()",
    "answer_hi": "buffer.fill()"
  },
  {
    "num": 29,
    "question_en": "Which buffer method writes string data?",
    "question_hi": "String data write करने वाला buffer method कौन सा है?",
    "options_en": ["buffer.write()", "buffer.fill()", "buffer.add()", "buffer.push()"],
    "options_hi": ["buffer.write()", "buffer.fill()", "buffer.add()", "buffer.push()"],
    "answer_en": "buffer.write()",
    "answer_hi": "buffer.write()"
  },
  {
    "num": 30,
    "question_en": "Which events module method emits events?",
    "question_hi": "Event emit करने वाला method कौन सा है?",
    "options_en": ["emit()", "trigger()", "fire()", "dispatch()"],
    "options_hi": ["emit()", "trigger()", "fire()", "dispatch()"],
    "answer_en": "emit()",
    "answer_hi": "emit()"
  },
  {
    "num": 31,
    "question_en": "Which EventEmitter method adds one-time listener?",
    "question_hi": "One-time listener add करने वाला method कौन सा है?",
    "options_en": ["once()", "on()", "addListener()", "listenOnce()"],
    "options_hi": ["once()", "on()", "addListener()", "listenOnce()"],
    "answer_en": "once()",
    "answer_hi": "once()"
  },
  {
    "num": 32,
    "question_en": "Which EventEmitter method returns listener count?",
    "question_hi": "Listener count देने वाला method कौन सा है?",
    "options_en": ["listenerCount()", "listeners()", "count()", "size()"],
    "options_hi": ["listenerCount()", "listeners()", "count()", "size()"],
    "answer_en": "listenerCount()",
    "answer_hi": "listenerCount()"
  },
  {
    "num": 33,
    "question_en": "Which module provides HTTPS server support?",
    "question_hi": "HTTPS server support देने वाला module कौन सा है?",
    "options_en": ["https", "http", "tls", "net"],
    "options_hi": ["https", "http", "tls", "net"],
    "answer_en": "https",
    "answer_hi": "https"
  },
  {
    "num": 34,
    "question_en": "Which https method creates secure server?",
    "question_hi": "Secure server बनाने वाला https method कौन सा है?",
    "options_en": ["https.createServer()", "https.server()", "https.listen()", "https.start()"],
    "options_hi": ["https.createServer()", "https.server()", "https.listen()", "https.start()"],
    "answer_en": "https.createServer()",
    "answer_hi": "https.createServer()"
  },
  {
    "num": 35,
    "question_en": "Which module resolves domain names to IP?",
    "question_hi": "Domain name को IP में resolve करने वाला module कौन सा है?",
    "options_en": ["dns", "net", "url", "http"],
    "options_hi": ["dns", "net", "url", "http"],
    "answer_en": "dns",
    "answer_hi": "dns"
  },
  {
    "num": 36,
    "question_en": "Which dns method performs reverse lookup?",
    "question_hi": "Reverse DNS lookup करने वाला method कौन सा है?",
    "options_en": ["dns.reverse()", "dns.lookup()", "dns.resolve()", "dns.resolvePtr()"],
    "options_hi": ["dns.reverse()", "dns.lookup()", "dns.resolve()", "dns.resolvePtr()"],
    "answer_en": "dns.reverse()",
    "answer_hi": "dns.reverse()"
  },
  {
    "num": 37,
    "question_en": "Which module supports legacy domains?",
    "question_hi": "Legacy domain support देने वाला module कौन सा है?",
    "options_en": ["domain", "events", "async_hooks", "process"],
    "options_hi": ["domain", "events", "async_hooks", "process"],
    "answer_en": "domain",
    "answer_hi": "domain"
  },
  {
    "num": 38,
    "question_en": "Which module provides binary-to-text encoding?",
    "question_hi": "Binary को text में decode करने वाला module कौन सा है?",
    "options_en": ["string_decoder", "buffer", "util", "text"],
    "options_hi": ["string_decoder", "buffer", "util", "text"],
    "answer_en": "string_decoder",
    "answer_hi": "string_decoder"
  },
  {
    "num": 39,
    "question_en": "Which module provides gzip and deflate?",
    "question_hi": "Gzip और deflate support देने वाला module कौन सा है?",
    "options_en": ["zlib", "stream", "fs", "crypto"],
    "options_hi": ["zlib", "stream", "fs", "crypto"],
    "answer_en": "zlib",
    "answer_hi": "zlib"
  },
  {
    "num": 40,
    "question_en": "Which zlib method inflates data?",
    "question_hi": "Compressed data inflate करने वाला method कौन सा है?",
    "options_en": ["zlib.inflate()", "zlib.expand()", "zlib.decode()", "zlib.unzip()"],
    "options_hi": ["zlib.inflate()", "zlib.expand()", "zlib.decode()", "zlib.unzip()"],
    "answer_en": "zlib.inflate()",
    "answer_hi": "zlib.inflate()"
  },
  {
    "num": 41,
    "question_en": "Which module exposes JavaScript engine stats?",
    "question_hi": "JavaScript engine stats देने वाला module कौन सा है?",
    "options_en": ["v8", "vm", "process", "util"],
    "options_hi": ["v8", "vm", "process", "util"],
    "answer_en": "v8",
    "answer_hi": "v8"
  },
  {
    "num": 42,
    "question_en": "Which v8 method returns heap statistics?",
    "question_hi": "Heap statistics देने वाला v8 method कौन सा है?",
    "options_en": ["v8.getHeapStatistics()", "v8.heap()", "v8.memory()", "v8.stats()"],
    "options_hi": ["v8.getHeapStatistics()", "v8.heap()", "v8.memory()", "v8.stats()"],
    "answer_en": "v8.getHeapStatistics()",
    "answer_hi": "v8.getHeapStatistics()"
  },
  {
    "num": 43,
    "question_en": "Which module provides module cache?",
    "question_hi": "Module cache provide करने वाला object कौन सा है?",
    "options_en": ["require.cache", "module.cache", "process.cache", "import.cache"],
    "options_hi": ["require.cache", "module.cache", "process.cache", "import.cache"],
    "answer_en": "require.cache",
    "answer_hi": "require.cache"
  },
  {
    "num": 44,
    "question_en": "Which method clears a module from cache?",
    "question_hi": "Module cache clear करने के लिए क्या use होता है?",
    "options_en": ["delete require.cache[id]", "require.clear()", "module.reset()", "cache.clear()"],
    "options_hi": ["delete require.cache[id]", "require.clear()", "module.reset()", "cache.clear()"],
    "answer_en": "delete require.cache[id]",
    "answer_hi": "delete require.cache[id]"
  },
  {
    "num": 45,
    "question_en": "Which module provides binary inspector tools?",
    "question_hi": "Binary inspection tools देने वाला module कौन सा है?",
    "options_en": ["inspector", "v8", "vm", "debug"],
    "options_hi": ["inspector", "v8", "vm", "debug"],
    "answer_en": "inspector",
    "answer_hi": "inspector"
  },
  {
    "num": 46,
    "question_en": "Which inspector method closes the session?",
    "question_hi": "Inspector session close करने वाला method कौन सा है?",
    "options_en": ["inspector.close()", "inspector.stop()", "inspector.end()", "inspector.exit()"],
    "options_hi": ["inspector.close()", "inspector.stop()", "inspector.end()", "inspector.exit()"],
    "answer_en": "inspector.close()",
    "answer_hi": "inspector.close()"
  },
  {
    "num": 47,
    "question_en": "Which module supports policy manifests?",
    "question_hi": "Policy manifests support देने वाला module कौन सा है?",
    "options_en": ["policy", "process", "fs", "module"],
    "options_hi": ["policy", "process", "fs", "module"],
    "answer_en": "policy",
    "answer_hi": "policy"
  },
  {
    "num": 48,
    "question_en": "Which module provides module wrapping?",
    "question_hi": "Module wrapping functionality किस module से जुड़ी है?",
    "options_en": ["module", "vm", "process", "util"],
    "options_hi": ["module", "vm", "process", "util"],
    "answer_en": "module",
    "answer_hi": "module"
  },
  {
    "num": 49,
    "question_en": "Which module supports legacy URL parsing?",
    "question_hi": "Legacy URL parsing support देने वाला module कौन सा है?",
    "options_en": ["url", "querystring", "http", "net"],
    "options_hi": ["url", "querystring", "http", "net"],
    "answer_en": "url",
    "answer_hi": "url"
  },
  {
    "num": 50,
    "question_en": "Which url method parses a URL string?",
    "question_hi": "URL string parse करने वाला method कौन सा है?",
    "options_en": ["url.parse()", "url.resolve()", "url.format()", "url.decode()"],
    "options_hi": ["url.parse()", "url.resolve()", "url.format()", "url.decode()"],
    "answer_en": "url.parse()",
    "answer_hi": "url.parse()"
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