const questions=[
  {
    "num": 1,
    "question_en": "Which method is used to import modules in Node.js?",
    "question_hi": "Node.js में मॉड्यूल इम्पोर्ट करने के लिए कौन सी मेथड उपयोग की जाती है?",
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
    "question_hi": "Node.js में 'fs' का पूरा नाम क्या है?",
    "options_en": ["File Storage", "File System", "Fetch Service", "Fast Storage"],
    "options_hi": ["File Storage", "File System", "Fetch Service", "Fast Storage"],
    "answer_en": "File System",
    "answer_hi": "File System",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which JavaScript engine does Node.js use?",
    "question_hi": "Node.js किस JavaScript इंजन का उपयोग करता है?",
    "options_en": ["V8", "SpiderMonkey", "Chakra", "Rhino"],
    "options_hi": ["V8", "SpiderMonkey", "Chakra", "Rhino"],
    "answer_en": "V8",
    "answer_hi": "V8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which core module is used to create HTTP servers?",
    "question_hi": "HTTP सर्वर बनाने के लिए कौन सा कोर मॉड्यूल उपयोग होता है?",
    "options_en": ["http", "net", "fs", "url"],
    "options_hi": ["http", "net", "fs", "url"],
    "answer_en": "http",
    "answer_hi": "http",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which object provides information about the current process?",
    "question_hi": "वर्तमान Node.js प्रोसेस की जानकारी कौन सा ऑब्जेक्ट देता है?",
    "options_en": ["process", "global", "console", "buffer"],
    "options_hi": ["process", "global", "console", "buffer"],
    "answer_en": "process",
    "answer_hi": "process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which module handles file operations in Node.js?",
    "question_hi": "Node.js में फाइल से संबंधित कार्य कौन सा मॉड्यूल करता है?",
    "options_en": ["fs", "path", "os", "stream"],
    "options_hi": ["fs", "path", "os", "stream"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which command initializes a Node.js project?",
    "question_hi": "Node.js प्रोजेक्ट शुरू करने के लिए कौन सा कमांड उपयोग किया जाता है?",
    "options_en": ["npm init", "npm install", "node init", "npm start"],
    "options_hi": ["npm init", "npm install", "node init", "npm start"],
    "answer_en": "npm init",
    "answer_hi": "npm init",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which file manages dependencies in Node.js?",
    "question_hi": "Node.js में डिपेंडेंसी किस फाइल में मैनेज होती हैं?",
    "options_en": ["package.json", "node.json", "config.json", "index.js"],
    "options_hi": ["package.json", "node.json", "config.json", "index.js"],
    "answer_en": "package.json",
    "answer_hi": "package.json",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which module is used for handling file paths?",
    "question_hi": "फाइल पाथ के साथ काम करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["path", "fs", "url", "http"],
    "options_hi": ["path", "fs", "url", "http"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which function creates a server in Node.js?",
    "question_hi": "Node.js में सर्वर बनाने के लिए कौन सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["http.createServer()", "net.create()", "server.start()", "app.create()"],
    "options_hi": ["http.createServer()", "net.create()", "server.start()", "app.create()"],
    "answer_en": "http.createServer()",
    "answer_hi": "http.createServer()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which module is used to work with operating system info?",
    "question_hi": "ऑपरेटिंग सिस्टम की जानकारी के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["os", "fs", "path", "util"],
    "options_hi": ["os", "fs", "path", "util"],
    "answer_en": "os",
    "answer_hi": "os",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which global variable gives the directory name?",
    "question_hi": "डायरेक्टरी का नाम बताने वाला ग्लोबल वेरिएबल कौन सा है?",
    "options_en": ["__dirname", "__filename", "process.cwd()", "module.path"],
    "options_hi": ["__dirname", "__filename", "process.cwd()", "module.path"],
    "answer_en": "__dirname",
    "answer_hi": "__dirname",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which method reads a file asynchronously?",
    "question_hi": "फाइल को असिंक्रोनस तरीके से पढ़ने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["fs.readFile()", "fs.readFileSync()", "fs.open()", "fs.read()"],
    "options_hi": ["fs.readFile()", "fs.readFileSync()", "fs.open()", "fs.read()"],
    "answer_en": "fs.readFile()",
    "answer_hi": "fs.readFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which module is used for event handling?",
    "question_hi": "इवेंट हैंडलिंग के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["events", "stream", "buffer", "cluster"],
    "options_hi": ["events", "stream", "buffer", "cluster"],
    "answer_en": "events",
    "answer_hi": "events",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which module helps in creating child processes?",
    "question_hi": "चाइल्ड प्रोसेस बनाने में कौन सा मॉड्यूल मदद करता है?",
    "options_en": ["child_process", "cluster", "os", "process"],
    "options_hi": ["child_process", "cluster", "os", "process"],
    "answer_en": "child_process",
    "answer_hi": "child_process",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which environment variable sets the production mode?",
    "question_hi": "प्रोडक्शन मोड सेट करने के लिए कौन सा एनवायरनमेंट वेरिएबल उपयोग होता है?",
    "options_en": ["NODE_ENV", "ENV_MODE", "NODE_MODE", "APP_ENV"],
    "options_hi": ["NODE_ENV", "ENV_MODE", "NODE_MODE", "APP_ENV"],
    "answer_en": "NODE_ENV",
    "answer_hi": "NODE_ENV",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which module is used to compress data?",
    "question_hi": "डेटा को कंप्रेस करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["zlib", "stream", "buffer", "net"],
    "options_hi": ["zlib", "stream", "buffer", "net"],
    "answer_en": "zlib",
    "answer_hi": "zlib",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which module supports cryptography?",
    "question_hi": "क्रिप्टोग्राफी के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["crypto", "tls", "hash", "secure"],
    "options_hi": ["crypto", "tls", "hash", "secure"],
    "answer_en": "crypto",
    "answer_hi": "crypto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which method converts JSON string to object?",
    "question_hi": "JSON स्ट्रिंग को ऑब्जेक्ट में बदलने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.decode()"],
    "options_hi": ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.decode()"],
    "answer_en": "JSON.parse()",
    "answer_hi": "JSON.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which module helps with streams?",
    "question_hi": "स्ट्रीम्स के साथ काम करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["stream", "fs", "buffer", "net"],
    "options_hi": ["stream", "fs", "buffer", "net"],
    "answer_en": "stream",
    "answer_hi": "stream",
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
    "question_en": "Which module is used to parse URLs?",
    "question_hi": "URL को पार्स करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["url", "path", "http", "query"],
    "options_hi": ["url", "path", "http", "query"],
    "answer_en": "url",
    "answer_hi": "url",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which object is used to export modules?",
    "question_hi": "मॉड्यूल को एक्सपोर्ट करने के लिए कौन सा ऑब्जेक्ट उपयोग होता है?",
    "options_en": ["module.exports", "exports()", "require()", "export"],
    "options_hi": ["module.exports", "exports()", "require()", "export"],
    "answer_en": "module.exports",
    "answer_hi": "module.exports",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which method stops an interval timer?",
    "question_hi": "इंटरवल टाइमर को रोकने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["clearInterval()", "clearTimeout()", "stopInterval()", "endInterval()"],
    "options_hi": ["clearInterval()", "clearTimeout()", "stopInterval()", "endInterval()"],
    "answer_en": "clearInterval()",
    "answer_hi": "clearInterval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which module is used to create TCP servers?",
    "question_hi": "TCP सर्वर बनाने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["net", "http", "tls", "stream"],
    "options_hi": ["net", "http", "tls", "stream"],
    "answer_en": "net",
    "answer_hi": "net",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which property contains request headers?",
    "question_hi": "रिक्वेस्ट हेडर किस प्रॉपर्टी में होते हैं?",
    "options_en": ["req.headers", "req.params", "req.body", "req.query"],
    "options_hi": ["req.headers", "req.params", "req.body", "req.query"],
    "answer_en": "req.headers",
    "answer_hi": "req.headers",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which method sends JSON response in Express?",
    "question_hi": "Express में JSON रिस्पॉन्स भेजने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["res.json()", "res.send()", "res.end()", "res.write()"],
    "options_hi": ["res.json()", "res.send()", "res.end()", "res.write()"],
    "answer_en": "res.json()",
    "answer_hi": "res.json()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method defines middleware in Express?",
    "question_hi": "Express में मिडलवेयर परिभाषित करने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["app.use()", "app.set()", "app.get()", "app.route()"],
    "options_hi": ["app.use()", "app.set()", "app.get()", "app.route()"],
    "answer_en": "app.use()",
    "answer_hi": "app.use()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which module is used for buffering binary data?",
    "question_hi": "बाइनरी डेटा को बफर करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["Buffer", "Stream", "FS", "Binary"],
    "options_hi": ["Buffer", "Stream", "FS", "Binary"],
    "answer_en": "Buffer",
    "answer_hi": "Buffer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which command installs all dependencies?",
    "question_hi": "सभी डिपेंडेंसी इंस्टॉल करने के लिए कौन सा कमांड उपयोग होता है?",
    "options_en": ["npm install", "npm start", "npm init", "npm build"],
    "options_hi": ["npm install", "npm start", "npm init", "npm build"],
    "answer_en": "npm install",
    "answer_hi": "npm install",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which module helps in load balancing?",
    "question_hi": "लोड बैलेंसिंग में कौन सा मॉड्यूल मदद करता है?",
    "options_en": ["cluster", "net", "http", "os"],
    "options_hi": ["cluster", "net", "http", "os"],
    "answer_en": "cluster",
    "answer_hi": "cluster",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which method returns memory usage?",
    "question_hi": "मेमोरी उपयोग की जानकारी कौन सी मेथड देती है?",
    "options_en": ["process.memoryUsage()", "process.memory()", "os.memory()", "buffer.size()"],
    "options_hi": ["process.memoryUsage()", "process.memory()", "os.memory()", "buffer.size()"],
    "answer_en": "process.memoryUsage()",
    "answer_hi": "process.memoryUsage()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which module is used for HTTPS servers?",
    "question_hi": "HTTPS सर्वर बनाने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["https", "http", "tls", "net"],
    "options_hi": ["https", "http", "tls", "net"],
    "answer_en": "https",
    "answer_hi": "https",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which method clears a timeout?",
    "question_hi": "टाइमआउट को हटाने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["clearTimeout()", "clearInterval()", "stopTimeout()", "endTimeout()"],
    "options_hi": ["clearTimeout()", "clearInterval()", "stopTimeout()", "endTimeout()"],
    "answer_en": "clearTimeout()",
    "answer_hi": "clearTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which module provides utility functions?",
    "question_hi": "यूटिलिटी फ़ंक्शन प्रदान करने वाला मॉड्यूल कौन सा है?",
    "options_en": ["util", "tools", "helper", "support"],
    "options_hi": ["util", "tools", "helper", "support"],
    "answer_en": "util",
    "answer_hi": "util",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which property gives command-line arguments?",
    "question_hi": "कमांड लाइन आर्ग्युमेंट्स किस प्रॉपर्टी से मिलते हैं?",
    "options_en": ["process.argv", "process.env", "process.args", "process.cmd"],
    "options_hi": ["process.argv", "process.env", "process.args", "process.cmd"],
    "answer_en": "process.argv",
    "answer_hi": "process.argv",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which module supports WebSockets?",
    "question_hi": "WebSocket सपोर्ट के लिए सामान्यतः कौन सा पैकेज उपयोग होता है?",
    "options_en": ["ws", "socket", "net", "http"],
    "options_hi": ["ws", "socket", "net", "http"],
    "answer_en": "ws",
    "answer_hi": "ws",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which method is used to listen on a port?",
    "question_hi": "पोर्ट पर सुनने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["server.listen()", "server.start()", "app.start()", "http.listen()"],
    "options_hi": ["server.listen()", "server.start()", "app.start()", "http.listen()"],
    "answer_en": "server.listen()",
    "answer_hi": "server.listen()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which package manager comes with Node.js?",
    "question_hi": "Node.js के साथ कौन सा पैकेज मैनेजर आता है?",
    "options_en": ["npm", "yarn", "pnpm", "pip"],
    "options_hi": ["npm", "yarn", "pnpm", "pip"],
    "answer_en": "npm",
    "answer_hi": "npm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which module parses query strings?",
    "question_hi": "क्वेरी स्ट्रिंग को पार्स करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["querystring", "url", "path", "http"],
    "options_hi": ["querystring", "url", "path", "http"],
    "answer_en": "querystring",
    "answer_hi": "querystring",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which function schedules repeated execution?",
    "question_hi": "बार-बार चलने वाले कार्य को शेड्यूल करने के लिए कौन सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["setInterval()", "setTimeout()", "setImmediate()", "process.nextTick()"],
    "options_hi": ["setInterval()", "setTimeout()", "setImmediate()", "process.nextTick()"],
    "answer_en": "setInterval()",
    "answer_hi": "setInterval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which module provides DNS functionality?",
    "question_hi": "DNS से संबंधित कार्यों के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["dns", "net", "http", "url"],
    "options_hi": ["dns", "net", "http", "url"],
    "answer_en": "dns",
    "answer_hi": "dns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which module handles standard input and output?",
    "question_hi": "स्टैंडर्ड इनपुट और आउटपुट को कौन सा मॉड्यूल संभालता है?",
    "options_en": ["process", "fs", "console", "stream"],
    "options_hi": ["process", "fs", "console", "stream"],
    "answer_en": "process",
    "answer_hi": "process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which method exits the Node.js process?",
    "question_hi": "Node.js प्रोसेस को समाप्त करने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["process.exit()", "process.end()", "process.stop()", "process.kill()"],
    "options_hi": ["process.exit()", "process.end()", "process.stop()", "process.kill()"],
    "answer_en": "process.exit()",
    "answer_hi": "process.exit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which module supports timers?",
    "question_hi": "टाइमर से संबंधित कार्यों के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["timers", "time", "clock", "schedule"],
    "options_hi": ["timers", "time", "clock", "schedule"],
    "answer_en": "timers",
    "answer_hi": "timers",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which API is used for async hooks?",
    "question_hi": "असिंक्रोनस हुक्स के लिए कौन सा API उपयोग होता है?",
    "options_en": ["async_hooks", "events", "hooks", "promises"],
    "options_hi": ["async_hooks", "events", "hooks", "promises"],
    "answer_en": "async_hooks",
    "answer_hi": "async_hooks",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which module helps in performance monitoring?",
    "question_hi": "परफॉर्मेंस मॉनिटरिंग के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["perf_hooks", "performance", "monitor", "stats"],
    "options_hi": ["perf_hooks", "performance", "monitor", "stats"],
    "answer_en": "perf_hooks",
    "answer_hi": "perf_hooks",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which module provides assertion testing?",
    "question_hi": "असर्शन टेस्टिंग के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["assert", "test", "check", "verify"],
    "options_hi": ["assert", "test", "check", "verify"],
    "answer_en": "assert",
    "answer_hi": "assert",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which module is used to work with worker threads?",
    "question_hi": "वर्कर थ्रेड्स के साथ काम करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["worker_threads", "cluster", "threads", "child_process"],
    "options_hi": ["worker_threads", "cluster", "threads", "child_process"],
    "answer_en": "worker_threads",
    "answer_hi": "worker_threads",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which command updates Node.js packages?",
    "question_hi": "Node.js पैकेज अपडेट करने के लिए कौन सा कमांड उपयोग होता है?",
    "options_en": ["npm update", "npm upgrade", "npm refresh", "npm sync"],
    "options_hi": ["npm update", "npm upgrade", "npm refresh", "npm sync"],
    "answer_en": "npm update",
    "answer_hi": "npm update",
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