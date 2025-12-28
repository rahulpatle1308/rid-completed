const questions=[
  {
    "num": 1,
    "question_en": "Which method is used to import modules in Node.js?",
    "question_hi": "Node.js में मॉड्यूल आयात करने के लिए कौन सी विधि उपयोग की जाती है?",
    "options_en": ["require()", "import()", "include()", "load()"],
    "options_hi": ["require()", "import()", "include()", "load()"],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What does 'fs' stand for in Node.js?",
    "question_hi": "Node.js में 'fs' का क्या मतलब है?",
    "options_en": ["File Storage", "File System", "Fetch Service", "Fast Storage"],
    "options_hi": ["File Storage", "File System", "Fetch Service", "Fast Storage"],
    "answer_en": "File System",
    "answer_hi": "File System",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which of the following is a core module in Node.js?",
    "question_hi": "निम्नलिखित में से कौन सा Node.js का कोर मॉड्यूल है?",
    "options_en": ["fs", "express", "mongoose", "webpack"],
    "options_hi": ["fs", "express", "mongoose", "webpack"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which function is used to handle exceptions in Node.js?",
    "question_hi": "Node.js में अपवादों को संभालने के लिए कौन सा फंक्शन उपयोग होता है?",
    "options_en": ["try-catch", "onError()", "errorHandler()", "catch()"],
    "options_hi": ["try-catch", "onError()", "errorHandler()", "catch()"],
    "answer_en": "try-catch",
    "answer_hi": "try-catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which object manages the current Node.js process?",
    "question_hi": "Node.js प्रक्रिया को प्रबंधित करने के लिए कौन सा ऑब्जेक्ट उपयोग होता है?",
    "options_en": ["process", "global", "buffer", "console"],
    "options_hi": ["process", "global", "buffer", "console"],
    "answer_en": "process",
    "answer_hi": "process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which module handles events in Node.js?",
    "question_hi": "Node.js में इवेंट्स को संभालने वाला मॉड्यूल कौन सा है?",
    "options_en": ["events", "fs", "http", "stream"],
    "options_hi": ["events", "fs", "http", "stream"],
    "answer_en": "events",
    "answer_hi": "events",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which module is used to work with file paths?",
    "question_hi": "फाइल पाथ के साथ काम करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["path", "fs", "url", "http"],
    "options_hi": ["path", "fs", "url", "http"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which command initializes a Node.js project?",
    "question_hi": "Node.js प्रोजेक्ट को आरंभ करने के लिए कौन सा कमांड उपयोग होता है?",
    "options_en": ["npm init", "npm install", "node start", "npm create"],
    "options_hi": ["npm init", "npm install", "node start", "npm create"],
    "answer_en": "npm init",
    "answer_hi": "npm init",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which method creates an HTTP server?",
    "question_hi": "HTTP सर्वर बनाने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["http.createServer()", "http.newServer()", "net.create()", "server.create()"],
    "options_hi": ["http.createServer()", "http.newServer()", "net.create()", "server.create()"],
    "answer_en": "http.createServer()",
    "answer_hi": "http.createServer()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which is a third-party module?",
    "question_hi": "निम्नलिखित में से कौन सा थर्ड-पार्टी मॉड्यूल है?",
    "options_en": ["express", "fs", "http", "path"],
    "options_hi": ["express", "fs", "http", "path"],
    "answer_en": "express",
    "answer_hi": "express",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which method writes data to a file asynchronously?",
    "question_hi": "फाइल में डेटा असिंक्रोनस रूप से लिखने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.writeFile()", "fs.write()", "fs.save()", "fs.append()"],
    "options_hi": ["fs.writeFile()", "fs.write()", "fs.save()", "fs.append()"],
    "answer_en": "fs.writeFile()",
    "answer_hi": "fs.writeFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which global variable gives current file name?",
    "question_hi": "वर्तमान फाइल का नाम देने वाला ग्लोबल वेरिएबल कौन सा है?",
    "options_en": ["__filename", "__dirname", "module.filename", "file.name"],
    "options_hi": ["__filename", "__dirname", "module.filename", "file.name"],
    "answer_en": "__filename",
    "answer_hi": "__filename",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which module creates HTTPS servers?",
    "question_hi": "HTTPS सर्वर बनाने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["https", "http", "tls", "net"],
    "options_hi": ["https", "http", "tls", "net"],
    "answer_en": "https",
    "answer_hi": "https",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which module provides utility functions?",
    "question_hi": "यूटिलिटी फ़ंक्शन्स देने वाला मॉड्यूल कौन सा है?",
    "options_en": ["util", "fs", "path", "url"],
    "options_hi": ["util", "fs", "path", "url"],
    "answer_en": "util",
    "answer_hi": "util",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which method reads a file synchronously?",
    "question_hi": "फाइल को सिंक्रोनस रूप से पढ़ने की विधि कौन सी है?",
    "options_en": ["fs.readFileSync()", "fs.readFile()", "fs.open()", "fs.read()"],
    "options_hi": ["fs.readFileSync()", "fs.readFile()", "fs.open()", "fs.read()"],
    "answer_en": "fs.readFileSync()",
    "answer_hi": "fs.readFileSync()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which environment variable sets production mode?",
    "question_hi": "प्रोडक्शन मोड सेट करने के लिए कौन सा एनवायरनमेंट वेरिएबल उपयोग होता है?",
    "options_en": ["NODE_ENV", "ENV_MODE", "NODE_MODE", "MODE"],
    "options_hi": ["NODE_ENV", "ENV_MODE", "NODE_MODE", "MODE"],
    "answer_en": "NODE_ENV",
    "answer_hi": "NODE_ENV",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which module helps create child processes?",
    "question_hi": "चाइल्ड प्रोसेस बनाने में कौन सा मॉड्यूल मदद करता है?",
    "options_en": ["cluster", "crypto", "dns", "os"],
    "options_hi": ["cluster", "crypto", "dns", "os"],
    "answer_en": "cluster",
    "answer_hi": "cluster",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which command installs dependencies?",
    "question_hi": "डिपेंडेंसी इंस्टॉल करने के लिए कौन सा कमांड उपयोग होता है?",
    "options_en": ["npm install", "npm start", "npm init", "node install"],
    "options_hi": ["npm install", "npm start", "npm init", "node install"],
    "answer_en": "npm install",
    "answer_hi": "npm install",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which file contains project metadata?",
    "question_hi": "प्रोजेक्ट की मेटाडेटा किस फाइल में होती है?",
    "options_en": ["package.json", "node.json", "app.json", "npm.json"],
    "options_hi": ["package.json", "node.json", "app.json", "npm.json"],
    "answer_en": "package.json",
    "answer_hi": "package.json",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which module creates TCP servers?",
    "question_hi": "TCP सर्वर बनाने वाला मॉड्यूल कौन सा है?",
    "options_en": ["net", "http", "tls", "stream"],
    "options_hi": ["net", "http", "tls", "stream"],
    "answer_en": "net",
    "answer_hi": "net",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which command runs a Node.js file?",
    "question_hi": "Node.js फाइल चलाने के लिए कौन सा कमांड उपयोग होता है?",
    "options_en": ["node app.js", "npm app.js", "run app.js", "start app.js"],
    "options_hi": ["node app.js", "npm app.js", "run app.js", "start app.js"],
    "answer_en": "node app.js",
    "answer_hi": "node app.js",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which module handles compression?",
    "question_hi": "कंप्रेशन संभालने वाला मॉड्यूल कौन सा है?",
    "options_en": ["zlib", "buffer", "fs", "net"],
    "options_hi": ["zlib", "buffer", "fs", "net"],
    "answer_en": "zlib",
    "answer_hi": "zlib",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which method returns exported object?",
    "question_hi": "एक्सपोर्ट किया गया ऑब्जेक्ट कौन सी विधि लौटाती है?",
    "options_en": ["require()", "import()", "load()", "use()"],
    "options_hi": ["require()", "import()", "load()", "use()"],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which statement exports a function?",
    "question_hi": "किसी फंक्शन को एक्सपोर्ट करने के लिए कौन सा स्टेटमेंट उपयोग होता है?",
    "options_en": ["module.exports", "export default", "require()", "return"],
    "options_hi": ["module.exports", "export default", "require()", "return"],
    "answer_en": "module.exports",
    "answer_hi": "module.exports",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which fs method reads file asynchronously?",
    "question_hi": "असिंक्रोनस रूप से फाइल पढ़ने की विधि कौन सी है?",
    "options_en": ["fs.readFile()", "fs.readFileSync()", "fs.open()", "fs.read()"],
    "options_hi": ["fs.readFile()", "fs.readFileSync()", "fs.open()", "fs.read()"],
    "answer_en": "fs.readFile()",
    "answer_hi": "fs.readFile()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which Express method defines middleware?",
    "question_hi": "Express में मिडलवेयर परिभाषित करने की विधि कौन सी है?",
    "options_en": ["app.use()", "app.get()", "app.set()", "app.route()"],
    "options_hi": ["app.use()", "app.get()", "app.set()", "app.route()"],
    "answer_en": "app.use()",
    "answer_hi": "app.use()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What does next() do in Express?",
    "question_hi": "Express में next() का क्या काम है?",
    "options_en": ["Next middleware", "End request", "Restart server", "Send response"],
    "options_hi": ["Next middleware", "End request", "Restart server", "Send response"],
    "answer_en": "Next middleware",
    "answer_hi": "Next middleware",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method sends JSON response?",
    "question_hi": "JSON प्रतिक्रिया भेजने की विधि कौन सी है?",
    "options_en": ["res.json()", "res.send()", "res.write()", "res.end()"],
    "options_hi": ["res.json()", "res.send()", "res.write()", "res.end()"],
    "answer_en": "res.json()",
    "answer_hi": "res.json()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which property stores request headers?",
    "question_hi": "रिक्वेस्ट हेडर किस प्रॉपर्टी में होते हैं?",
    "options_en": ["req.headers", "req.body", "req.params", "req.query"],
    "options_hi": ["req.headers", "req.body", "req.params", "req.query"],
    "answer_en": "req.headers",
    "answer_hi": "req.headers",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which module parses URLs?",
    "question_hi": "URL पार्स करने वाला मॉड्यूल कौन सा है?",
    "options_en": ["url", "path", "http", "fs"],
    "options_hi": ["url", "path", "http", "fs"],
    "answer_en": "url",
    "answer_hi": "url",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which timer runs repeatedly?",
    "question_hi": "बार-बार चलने वाला टाइमर कौन सा है?",
    "options_en": ["setInterval()", "setTimeout()", "setImmediate()", "nextTick()"],
    "options_hi": ["setInterval()", "setTimeout()", "setImmediate()", "nextTick()"],
    "answer_en": "setInterval()",
    "answer_hi": "setInterval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which clears timeout?",
    "question_hi": "टाइमआउट रोकने की विधि कौन सी है?",
    "options_en": ["clearTimeout()", "clearInterval()", "stopTimeout()", "endTimeout()"],
    "options_hi": ["clearTimeout()", "clearInterval()", "stopTimeout()", "endTimeout()"],
    "answer_en": "clearTimeout()",
    "answer_hi": "clearTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which module handles cryptography?",
    "question_hi": "क्रिप्टोग्राफी के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["crypto", "tls", "hash", "security"],
    "options_hi": ["crypto", "tls", "hash", "security"],
    "answer_en": "crypto",
    "answer_hi": "crypto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which method generates random bytes?",
    "question_hi": "रैंडम बाइट्स बनाने की विधि कौन सी है?",
    "options_en": ["crypto.randomBytes()", "crypto.rand()", "crypto.bytes()", "crypto.generate()"],
    "options_hi": ["crypto.randomBytes()", "crypto.rand()", "crypto.bytes()", "crypto.generate()"],
    "answer_en": "crypto.randomBytes()",
    "answer_hi": "crypto.randomBytes()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which module gives OS info?",
    "question_hi": "OS की जानकारी देने वाला मॉड्यूल कौन सा है?",
    "options_en": ["os", "process", "system", "env"],
    "options_hi": ["os", "process", "system", "env"],
    "answer_en": "os",
    "answer_hi": "os",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which method gives system uptime?",
    "question_hi": "सिस्टम अपटाइम देने की विधि कौन सी है?",
    "options_en": ["os.uptime()", "os.time()", "os.start()", "os.runTime()"],
    "options_hi": ["os.uptime()", "os.time()", "os.start()", "os.runTime()"],
    "answer_en": "os.uptime()",
    "answer_hi": "os.uptime()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which module handles streams?",
    "question_hi": "स्ट्रीम्स संभालने वाला मॉड्यूल कौन सा है?",
    "options_en": ["stream", "buffer", "fs", "net"],
    "options_hi": ["stream", "buffer", "fs", "net"],
    "answer_en": "stream",
    "answer_hi": "stream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which object gives current working directory?",
    "question_hi": "वर्तमान वर्किंग डायरेक्टरी कौन देता है?",
    "options_en": ["process.cwd()", "os.cwd()", "path.cwd()", "fs.cwd()"],
    "options_hi": ["process.cwd()", "os.cwd()", "path.cwd()", "fs.cwd()"],
    "answer_en": "process.cwd()",
    "answer_hi": "process.cwd()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which event fires on new TCP connection?",
    "question_hi": "नए TCP कनेक्शन पर कौन सा इवेंट फायर होता है?",
    "options_en": ["connection", "connect", "data", "open"],
    "options_hi": ["connection", "connect", "data", "open"],
    "answer_en": "connection",
    "answer_hi": "connection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which object handles uncaught exceptions?",
    "question_hi": "अनकॉट एक्सेप्शन कौन संभालता है?",
    "options_en": ["process", "console", "global", "error"],
    "options_hi": ["process", "console", "global", "error"],
    "answer_en": "process",
    "answer_hi": "process",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which method parses JSON?",
    "question_hi": "JSON पार्स करने की विधि कौन सी है?",
    "options_en": ["JSON.parse()", "JSON.stringify()", "JSON.decode()", "JSON.read()"],
    "options_hi": ["JSON.parse()", "JSON.stringify()", "JSON.decode()", "JSON.read()"],
    "answer_en": "JSON.parse()",
    "answer_hi": "JSON.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which clears interval?",
    "question_hi": "इंटरवल रोकने की विधि कौन सी है?",
    "options_en": ["clearInterval()", "clearTimeout()", "stopInterval()", "endInterval()"],
    "options_hi": ["clearInterval()", "clearTimeout()", "stopInterval()", "endInterval()"],
    "answer_en": "clearInterval()",
    "answer_hi": "clearInterval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which module decodes buffers to strings?",
    "question_hi": "बफर को स्ट्रिंग में डिकोड करने वाला मॉड्यूल कौन सा है?",
    "options_en": ["string_decoder", "buffer", "util", "stream"],
    "options_hi": ["string_decoder", "buffer", "util", "stream"],
    "answer_en": "string_decoder",
    "answer_hi": "string_decoder",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which class decodes buffers incrementally?",
    "question_hi": "इन्क्रिमेंटली बफर डिकोड करने वाली क्लास कौन सी है?",
    "options_en": ["StringDecoder", "TextDecoder", "Decoder", "BufferDecoder"],
    "options_hi": ["StringDecoder", "TextDecoder", "Decoder", "BufferDecoder"],
    "answer_en": "StringDecoder",
    "answer_hi": "StringDecoder",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which module handles assertions?",
    "question_hi": "असर्शन संभालने वाला मॉड्यूल कौन सा है?",
    "options_en": ["assert", "test", "verify", "check"],
    "options_hi": ["assert", "test", "verify", "check"],
    "answer_en": "assert",
    "answer_hi": "assert",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which assert method checks strict equality?",
    "question_hi": "स्ट्रिक्ट इक्वैलिटी चेक करने की विधि कौन सी है?",
    "options_en": ["assert.strictEqual()", "assert.equal()", "assert.deepEqual()", "assert.match()"],
    "options_hi": ["assert.strictEqual()", "assert.equal()", "assert.deepEqual()", "assert.match()"],
    "answer_en": "assert.strictEqual()",
    "answer_hi": "assert.strictEqual()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which module exposes heap statistics?",
    "question_hi": "हीप स्टैटिस्टिक्स देने वाला मॉड्यूल कौन सा है?",
    "options_en": ["v8", "os", "process", "util"],
    "options_hi": ["v8", "os", "process", "util"],
    "answer_en": "v8",
    "answer_hi": "v8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which v8 method returns heap statistics?",
    "question_hi": "हीप स्टैटिस्टिक्स देने की v8 विधि कौन सी है?",
    "options_en": ["v8.getHeapStatistics()", "v8.stats()", "v8.memory()", "v8.heapInfo()"],
    "options_hi": ["v8.getHeapStatistics()", "v8.stats()", "v8.memory()", "v8.heapInfo()"],
    "answer_en": "v8.getHeapStatistics()",
    "answer_hi": "v8.getHeapStatistics()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which feature restricts module loading?",
    "question_hi": "मॉड्यूल लोडिंग को सीमित करने वाली सुविधा कौन सी है?",
    "options_en": ["Policy system", "Permission model", "Sandbox", "Strict mode"],
    "options_hi": ["Policy system", "Permission model", "Sandbox", "Strict mode"],
    "answer_en": "Policy system",
    "answer_hi": "Policy system",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which command saves dependency in package.json?",
    "question_hi": "कौन सा कमांड पैकेज को package.json में डिपेंडेंसी के रूप में सेव करता है?",
    "options_en": ["npm install pkg --save", "npm add pkg", "npm get pkg", "npm save pkg"],
    "options_hi": ["npm install pkg --save", "npm add pkg", "npm get pkg", "npm save pkg"],
    "answer_en": "npm install pkg --save",
    "answer_hi": "npm install pkg --save",
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