const questions=[
  {
    "num": 1,
    "question_en": "Which Node.js module is used to manage worker threads?",
    "question_hi": "वर्कर थ्रेड्स को मैनेज करने के लिए Node.js का कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["worker_threads", "cluster", "threads", "os"],
    "options_hi": ["worker_threads", "cluster", "threads", "os"],
    "answer_en": "worker_threads",
    "answer_hi": "worker_threads",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which Node.js module helps in load balancing?",
    "question_hi": "लोड बैलेंसिंग में मदद करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["cluster", "net", "os", "worker_threads"],
    "options_hi": ["cluster", "net", "os", "worker_threads"],
    "answer_en": "cluster",
    "answer_hi": "cluster",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which Node.js module provides performance hooks?",
    "question_hi": "परफॉर्मेंस हुक्स प्रदान करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["perf_hooks", "performance", "hooks", "util"],
    "options_hi": ["perf_hooks", "performance", "hooks", "util"],
    "answer_en": "perf_hooks",
    "answer_hi": "perf_hooks",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which Node.js module allows executing system commands?",
    "question_hi": "सिस्टम कमांड चलाने के लिए Node.js का कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["child_process", "process", "os", "exec"],
    "options_hi": ["child_process", "process", "os", "exec"],
    "answer_en": "child_process",
    "answer_hi": "child_process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which Node.js method runs a command in a shell?",
    "question_hi": "शेल में कमांड चलाने के लिए कौन सी Node.js मेथड उपयोग होती है?",
    "options_en": ["exec()", "spawn()", "fork()", "run()"],
    "options_hi": ["exec()", "spawn()", "fork()", "run()"],
    "answer_en": "exec()",
    "answer_hi": "exec()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which Node.js method launches a new process?",
    "question_hi": "नया प्रोसेस शुरू करने के लिए Node.js की कौन सी मेथड उपयोग होती है?",
    "options_en": ["spawn()", "exec()", "open()", "start()"],
    "options_hi": ["spawn()", "exec()", "open()", "start()"],
    "answer_en": "spawn()",
    "answer_hi": "spawn()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which Node.js method creates a child Node process?",
    "question_hi": "चाइल्ड Node प्रोसेस बनाने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["fork()", "spawn()", "exec()", "child()"],
    "options_hi": ["fork()", "spawn()", "exec()", "child()"],
    "answer_en": "fork()",
    "answer_hi": "fork()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which Node.js module provides VM sandboxing?",
    "question_hi": "VM सैंडबॉक्सिंग प्रदान करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["vm", "v8", "sandbox", "runtime"],
    "options_hi": ["vm", "v8", "sandbox", "runtime"],
    "answer_en": "vm",
    "answer_hi": "vm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which Node.js engine executes JavaScript code?",
    "question_hi": "JavaScript को 실행 करने वाला Node.js इंजन कौन सा है?",
    "options_en": ["V8", "SpiderMonkey", "Chakra", "JavaScriptCore"],
    "options_hi": ["V8", "SpiderMonkey", "Chakra", "JavaScriptCore"],
    "answer_en": "V8",
    "answer_hi": "V8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which Node.js module gives access to V8 engine APIs?",
    "question_hi": "V8 इंजन APIs तक एक्सेस देने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["v8", "vm", "engine", "runtime"],
    "options_hi": ["v8", "vm", "engine", "runtime"],
    "answer_en": "v8",
    "answer_hi": "v8",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which Node.js module provides trace events?",
    "question_hi": "ट्रेस इवेंट्स प्रदान करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["trace_events", "events", "debug", "perf_hooks"],
    "options_hi": ["trace_events", "events", "debug", "perf_hooks"],
    "answer_en": "trace_events",
    "answer_hi": "trace_events",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which Node.js object represents standard input?",
    "question_hi": "स्टैंडर्ड इनपुट को दर्शाने वाला Node.js ऑब्जेक्ट कौन सा है?",
    "options_en": ["process.stdin", "console.input", "input", "fs.stdin"],
    "options_hi": ["process.stdin", "console.input", "input", "fs.stdin"],
    "answer_en": "process.stdin",
    "answer_hi": "process.stdin",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which Node.js object represents standard output?",
    "question_hi": "स्टैंडर्ड आउटपुट को दर्शाने वाला Node.js ऑब्जेक्ट कौन सा है?",
    "options_en": ["process.stdout", "console.output", "output", "fs.stdout"],
    "options_hi": ["process.stdout", "console.output", "output", "fs.stdout"],
    "answer_en": "process.stdout",
    "answer_hi": "process.stdout",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which Node.js object represents standard error?",
    "question_hi": "स्टैंडर्ड एरर को दर्शाने वाला Node.js ऑब्जेक्ट कौन सा है?",
    "options_en": ["process.stderr", "console.error", "error", "fs.stderr"],
    "options_hi": ["process.stderr", "console.error", "error", "fs.stderr"],
    "answer_en": "process.stderr",
    "answer_hi": "process.stderr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which Node.js module supports DNS lookup?",
    "question_hi": "DNS लुकअप सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["dns", "net", "http", "resolver"],
    "options_hi": ["dns", "net", "http", "resolver"],
    "answer_en": "dns",
    "answer_hi": "dns",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which Node.js method resolves hostname to IP?",
    "question_hi": "होस्टनेम को IP में बदलने के लिए कौन सी Node.js मेथड उपयोग होती है?",
    "options_en": ["dns.lookup()", "dns.resolve()", "net.lookup()", "os.lookup()"],
    "options_hi": ["dns.lookup()", "dns.resolve()", "net.lookup()", "os.lookup()"],
    "answer_en": "dns.lookup()",
    "answer_hi": "dns.lookup()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which Node.js module provides network interfaces info?",
    "question_hi": "नेटवर्क इंटरफेस की जानकारी देने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["os", "net", "dns", "system"],
    "options_hi": ["os", "net", "dns", "system"],
    "answer_en": "os",
    "answer_hi": "os",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which Node.js module provides memory usage info?",
    "question_hi": "मेमोरी उपयोग की जानकारी देने वाला Node.js फीचर कौन सा है?",
    "options_en": ["process.memoryUsage()", "os.memory()", "util.memory()", "system.memory()"],
    "options_hi": ["process.memoryUsage()", "os.memory()", "util.memory()", "system.memory()"],
    "answer_en": "process.memoryUsage()",
    "answer_hi": "process.memoryUsage()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which Node.js module supports signal handling?",
    "question_hi": "सिग्नल हैंडलिंग सपोर्ट करने वाला Node.js फीचर कौन सा है?",
    "options_en": ["process.on()", "events", "signal", "os"],
    "options_hi": ["process.on()", "events", "signal", "os"],
    "answer_en": "process.on()",
    "answer_hi": "process.on()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which signal is used to terminate a Node.js process?",
    "question_hi": "Node.js प्रोसेस को समाप्त करने के लिए कौन सा सिग्नल उपयोग होता है?",
    "options_en": ["SIGTERM", "SIGSTART", "SIGRUN", "SIGNODE"],
    "options_hi": ["SIGTERM", "SIGSTART", "SIGRUN", "SIGNODE"],
    "answer_en": "SIGTERM",
    "answer_hi": "SIGTERM",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which Node.js module supports timers?",
    "question_hi": "टाइमर सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["timers", "time", "schedule", "clock"],
    "options_hi": ["timers", "time", "schedule", "clock"],
    "answer_en": "timers",
    "answer_hi": "timers",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which Node.js function runs code after delay?",
    "question_hi": "डिले के बाद कोड चलाने के लिए कौन सा Node.js फ़ंक्शन उपयोग होता है?",
    "options_en": ["setTimeout()", "setInterval()", "setImmediate()", "delay()"],
    "options_hi": ["setTimeout()", "setInterval()", "setImmediate()", "delay()"],
    "answer_en": "setTimeout()",
    "answer_hi": "setTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which Node.js function runs code repeatedly?",
    "question_hi": "बार-बार कोड चलाने के लिए कौन सा Node.js फ़ंक्शन उपयोग होता है?",
    "options_en": ["setInterval()", "setTimeout()", "repeat()", "loop()"],
    "options_hi": ["setInterval()", "setTimeout()", "repeat()", "loop()"],
    "answer_en": "setInterval()",
    "answer_hi": "setInterval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which Node.js function executes after I/O events?",
    "question_hi": "I/O इवेंट्स के बाद चलने वाला Node.js फ़ंक्शन कौन सा है?",
    "options_en": ["setImmediate()", "setTimeout()", "nextTick()", "queue()"],
    "options_hi": ["setImmediate()", "setTimeout()", "nextTick()", "queue()"],
    "answer_en": "setImmediate()",
    "answer_hi": "setImmediate()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which Node.js function executes before event loop continues?",
    "question_hi": "इवेंट लूप से पहले चलने वाला Node.js फ़ंक्शन कौन सा है?",
    "options_en": ["process.nextTick()", "setImmediate()", "setTimeout()", "queueMicrotask()"],
    "options_hi": ["process.nextTick()", "setImmediate()", "setTimeout()", "queueMicrotask()"],
    "answer_en": "process.nextTick()",
    "answer_hi": "process.nextTick()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which Node.js module supports ECMAScript modules?",
    "question_hi": "ECMAScript मॉड्यूल सपोर्ट करने वाला Node.js फीचर कौन सा है?",
    "options_en": ["import/export", "require()", "module.exports", "commonjs"],
    "options_hi": ["import/export", "require()", "module.exports", "commonjs"],
    "answer_en": "import/export",
    "answer_hi": "import/export",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which file extension is used for ES modules?",
    "question_hi": "ES मॉड्यूल के लिए कौन सा फ़ाइल एक्सटेंशन उपयोग होता है?",
    "options_en": [".mjs", ".cjs", ".jsm", ".node"],
    "options_hi": [".mjs", ".cjs", ".jsm", ".node"],
    "answer_en": ".mjs",
    "answer_hi": ".mjs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which file extension is used for CommonJS modules?",
    "question_hi": "CommonJS मॉड्यूल के लिए कौन सा फ़ाइल एक्सटेंशन उपयोग होता है?",
    "options_en": [".cjs", ".mjs", ".jsm", ".node"],
    "options_hi": [".cjs", ".mjs", ".jsm", ".node"],
    "answer_en": ".cjs",
    "answer_hi": ".cjs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which Node.js object exports module content?",
    "question_hi": "मॉड्यूल कंटेंट एक्सपोर्ट करने वाला Node.js ऑब्जेक्ट कौन सा है?",
    "options_en": ["module.exports", "exports", "require", "import"],
    "options_hi": ["module.exports", "exports", "require", "import"],
    "answer_en": "module.exports",
    "answer_hi": "module.exports",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which Node.js function imports a module?",
    "question_hi": "मॉड्यूल इम्पोर्ट करने के लिए कौन सा Node.js फ़ंक्शन उपयोग होता है?",
    "options_en": ["require()", "import()", "load()", "include()"],
    "options_hi": ["require()", "import()", "load()", "include()"],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which Node.js module caches loaded modules?",
    "question_hi": "लोड किए गए मॉड्यूल को कैश करने वाला Node.js फीचर कौन सा है?",
    "options_en": ["require.cache", "module.cache", "cache", "exports.cache"],
    "options_hi": ["require.cache", "module.cache", "cache", "exports.cache"],
    "answer_en": "require.cache",
    "answer_hi": "require.cache",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which Node.js module provides path normalization?",
    "question_hi": "पाथ नॉर्मलाइजेशन प्रदान करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["path", "fs", "url", "normalize"],
    "options_hi": ["path", "fs", "url", "normalize"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which path method joins paths?",
    "question_hi": "पाथ को जोड़ने वाली Node.js मेथड कौन सी है?",
    "options_en": ["path.join()", "path.merge()", "path.concat()", "path.add()"],
    "options_hi": ["path.join()", "path.merge()", "path.concat()", "path.add()"],
    "answer_en": "path.join()",
    "answer_hi": "path.join()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which path method resolves absolute path?",
    "question_hi": "एब्सोल्यूट पाथ निकालने वाली Node.js मेथड कौन सी है?",
    "options_en": ["path.resolve()", "path.abs()", "path.full()", "path.root()"],
    "options_hi": ["path.resolve()", "path.abs()", "path.full()", "path.root()"],
    "answer_en": "path.resolve()",
    "answer_hi": "path.resolve()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which Node.js module supports file watchers?",
    "question_hi": "फाइल वॉचर सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["fs", "watcher", "path", "os"],
    "options_hi": ["fs", "watcher", "path", "os"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which fs method watches file changes?",
    "question_hi": "फाइल में बदलाव देखने के लिए कौन सी fs मेथड उपयोग होती है?",
    "options_en": ["fs.watch()", "fs.observe()", "fs.listen()", "fs.track()"],
    "options_hi": ["fs.watch()", "fs.observe()", "fs.listen()", "fs.track()"],
    "answer_en": "fs.watch()",
    "answer_hi": "fs.watch()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which Node.js module supports promises API?",
    "question_hi": "प्रॉमिस API सपोर्ट करने वाला Node.js फीचर कौन सा है?",
    "options_en": ["fs/promises", "promise", "async", "util"],
    "options_hi": ["fs/promises", "promise", "async", "util"],
    "answer_en": "fs/promises",
    "answer_hi": "fs/promises",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which Node.js module supports experimental features?",
    "question_hi": "एक्सपेरिमेंटल फीचर्स सक्षम करने के लिए Node.js में क्या उपयोग होता है?",
    "options_en": ["--experimental", "--beta", "--test", "--next"],
    "options_hi": ["--experimental", "--beta", "--test", "--next"],
    "answer_en": "--experimental",
    "answer_hi": "--experimental",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which Node.js flag prints version?",
    "question_hi": "Node.js का वर्ज़न दिखाने के लिए कौन सा फ़्लैग उपयोग होता है?",
    "options_en": ["-v", "--version", "-node", "--info"],
    "options_hi": ["-v", "--version", "-node", "--info"],
    "answer_en": "-v",
    "answer_hi": "-v",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which Node.js flag prints help?",
    "question_hi": "हेल्प देखने के लिए Node.js में कौन सा फ़्लैग उपयोग होता है?",
    "options_en": ["--help", "-h", "--info", "--support"],
    "options_hi": ["--help", "-h", "--info", "--support"],
    "answer_en": "--help",
    "answer_hi": "--help",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which Node.js module supports REPL?",
    "question_hi": "REPL सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["repl", "console", "cli", "terminal"],
    "options_hi": ["repl", "console", "cli", "terminal"],
    "answer_en": "repl",
    "answer_hi": "repl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which Node.js environment is interactive shell?",
    "question_hi": "इंटरएक्टिव शेल के रूप में कौन सा Node.js वातावरण उपयोग होता है?",
    "options_en": ["REPL", "CLI", "Shell", "Console"],
    "options_hi": ["REPL", "CLI", "Shell", "Console"],
    "answer_en": "REPL",
    "answer_hi": "REPL",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which Node.js module supports console timing?",
    "question_hi": "कंसोल टाइमिंग सपोर्ट करने वाला Node.js फीचर कौन सा है?",
    "options_en": ["console.time()", "process.time()", "util.time()", "os.time()"],
    "options_hi": ["console.time()", "process.time()", "util.time()", "os.time()"],
    "answer_en": "console.time()",
    "answer_hi": "console.time()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which Node.js module supports console grouping?",
    "question_hi": "कंसोल ग्रुपिंग सपोर्ट करने वाला Node.js फीचर कौन सा है?",
    "options_en": ["console.group()", "console.block()", "console.stack()", "console.wrap()"],
    "options_hi": ["console.group()", "console.block()", "console.stack()", "console.wrap()"],
    "answer_en": "console.group()",
    "answer_hi": "console.group()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which Node.js module supports console counters?",
    "question_hi": "कंसोल काउंटर सपोर्ट करने वाला Node.js फीचर कौन सा है?",
    "options_en": ["console.count()", "console.counter()", "console.track()", "console.inc()"],
    "options_hi": ["console.count()", "console.counter()", "console.track()", "console.inc()"],
    "answer_en": "console.count()",
    "answer_hi": "console.count()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which Node.js module supports console clearing?",
    "question_hi": "कंसोल क्लियर करने वाला Node.js फीचर कौन सा है?",
    "options_en": ["console.clear()", "process.clear()", "clear()", "console.reset()"],
    "options_hi": ["console.clear()", "process.clear()", "clear()", "console.reset()"],
    "answer_en": "console.clear()",
    "answer_hi": "console.clear()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which Node.js module supports high resolution time?",
    "question_hi": "हाई रेज़ोल्यूशन टाइम सपोर्ट करने वाला Node.js फीचर कौन सा है?",
    "options_en": ["process.hrtime()", "os.time()", "perf_hooks", "timers"],
    "options_hi": ["process.hrtime()", "os.time()", "perf_hooks", "timers"],
    "answer_en": "process.hrtime()",
    "answer_hi": "process.hrtime()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which Node.js module supports BigInt?",
    "question_hi": "BigInt सपोर्ट करने वाला Node.js फीचर कौन सा है?",
    "options_en": ["BigInt", "Number", "Integer", "Math"],
    "options_hi": ["BigInt", "Number", "Integer", "Math"],
    "answer_en": "BigInt",
    "answer_hi": "BigInt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which Node.js module supports structured cloning?",
    "question_hi": "स्ट्रक्चर्ड क्लोनिंग सपोर्ट करने वाला Node.js फीचर कौन सा है?",
    "options_en": ["structuredClone()", "clone()", "deepCopy()", "copyObject()"],
    "options_hi": ["structuredClone()", "clone()", "deepCopy()", "copyObject()"],
    "answer_en": "structuredClone()",
    "answer_hi": "structuredClone()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which Node.js module supports global objects?",
    "question_hi": "ग्लोबल ऑब्जेक्ट्स सपोर्ट करने वाला Node.js फीचर कौन सा है?",
    "options_en": ["global", "window", "this", "root"],
    "options_hi": ["global", "window", "this", "root"],
    "answer_en": "global",
    "answer_hi": "global",
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