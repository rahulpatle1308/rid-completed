const questions = [
  {
    "num": 1,
    "question_en": "Which module is used to create a web server in Node.js?",
    "question_hi": "Node.js में वेब सर्वर बनाने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["http", "fs", "path", "url"],
    "options_hi": ["http", "fs", "path", "url"],
    "answer_en": "http",
    "answer_hi": "http",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which method is used to read a file asynchronously in Node.js?",
    "question_hi": "Node.js में एक फाइल को एसिंक्रोनस रूप से पढ़ने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["fs.readFile()", "fs.readFileSync()", "fs.read()", "fs.readSync()"],
    "options_hi": ["fs.readFile()", "fs.readFileSync()", "fs.read()", "fs.readSync()"],
    "answer_en": "fs.readFile()",
    "answer_hi": "fs.readFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the default port for a Node.js HTTP server?",
    "question_hi": "Node.js HTTP सर्वर के लिए डिफ़ॉल्ट पोर्ट क्या है?",
    "options_en": ["3000", "8080", "80", "5000"],
    "options_hi": ["3000", "8080", "80", "5000"],
    "answer_en": "3000",
    "answer_hi": "3000",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which global object is available in all Node.js modules?",
    "question_hi": "कौन सा ग्लोबल ऑब्जेक्ट सभी Node.js मॉड्यूल में उपलब्ध है?",
    "options_en": ["global", "window", "document", "process"],
    "options_hi": ["global", "window", "document", "process"],
    "answer_en": "global",
    "answer_hi": "global",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which method is used to include modules in Node.js?",
    "question_hi": "Node.js में मॉड्यूल शामिल करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["require()", "import()", "include()", "use()"],
    "options_hi": ["require()", "import()", "include()", "use()"],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which of the following is NOT a core module in Node.js?",
    "question_hi": "निम्नलिखित में से कौन सा Node.js में कोर मॉड्यूल नहीं है?",
    "options_en": ["express", "fs", "http", "path"],
    "options_hi": ["express", "fs", "http", "path"],
    "answer_en": "express",
    "answer_hi": "express",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which method is used to create a directory in Node.js?",
    "question_hi": "Node.js में एक डायरेक्टरी बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["fs.mkdir()", "fs.createDir()", "fs.newDir()", "fs.makeDir()"],
    "options_hi": ["fs.mkdir()", "fs.createDir()", "fs.newDir()", "fs.makeDir()"],
    "answer_en": "fs.mkdir()",
    "answer_hi": "fs.mkdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which object contains information about the current operating system?",
    "question_hi": "कौन सा ऑब्जेक्ट वर्तमान ऑपरेटिंग सिस्टम के बारे में जानकारी रखता है?",
    "options_en": ["os", "system", "process", "platform"],
    "options_hi": ["os", "system", "process", "platform"],
    "answer_en": "os",
    "answer_hi": "os",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which method is used to parse JSON in Node.js?",
    "question_hi": "Node.js में JSON को पार्स करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["JSON.parse()", "JSON.decode()", "JSON.read()", "JSON.convert()"],
    "options_hi": ["JSON.parse()", "JSON.decode()", "JSON.read()", "JSON.convert()"],
    "answer_en": "JSON.parse()",
    "answer_hi": "JSON.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which module is used to handle file paths in Node.js?",
    "question_hi": "Node.js में फाइल पाथ को हैंडल करने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["path", "fs", "os", "url"],
    "options_hi": ["path", "fs", "os", "url"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which method is used to execute a callback after a delay in Node.js?",
    "question_hi": "Node.js में एक देरी के बाद कॉलबैक को एक्जीक्यूट करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["setTimeout()", "setInterval()", "setImmediate()", "process.nextTick()"],
    "options_hi": ["setTimeout()", "setInterval()", "setImmediate()", "process.nextTick()"],
    "answer_en": "setTimeout()",
    "answer_hi": "setTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which module is used to handle events in Node.js?",
    "question_hi": "Node.js में इवेंट्स को हैंडल करने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["events", "event", "emitter", "eventEmitter"],
    "options_hi": ["events", "event", "emitter", "eventEmitter"],
    "answer_en": "events",
    "answer_hi": "events",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which method is used to write to a file asynchronously in Node.js?",
    "question_hi": "Node.js में एक फाइल को एसिंक्रोनस रूप से लिखने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["fs.writeFile()", "fs.writeFileSync()", "fs.write()", "fs.writeSync()"],
    "options_hi": ["fs.writeFile()", "fs.writeFileSync()", "fs.write()", "fs.writeSync()"],
    "answer_en": "fs.writeFile()",
    "answer_hi": "fs.writeFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which method is used to test equality in the 'assert' module?",
    "question_hi": "'assert' मॉड्यूल में समानता का परीक्षण करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["assert.equal()", "assert.test()", "assert.check()", "assert.match()"],
    "options_hi": ["assert.equal()", "assert.test()", "assert.check()", "assert.match()"],
    "answer_en": "assert.equal()",
    "answer_hi": "assert.equal()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which module is used to create child processes in Node.js?",
    "question_hi": "Node.js में चाइल्ड प्रोसेसेस बनाने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["child_process", "process", "worker", "cluster"],
    "options_hi": ["child_process", "process", "worker", "cluster"],
    "answer_en": "child_process",
    "answer_hi": "child_process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which method is used to resolve a sequence of paths in Node.js?",
    "question_hi": "Node.js में पाथ के एक सीक्वेंस को रिज़ॉल्व करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["path.join()", "path.resolve()", "path.concat()", "path.merge()"],
    "options_hi": ["path.join()", "path.resolve()", "path.concat()", "path.merge()"],
    "answer_en": "path.resolve()",
    "answer_hi": "path.resolve()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which method is used to parse a URL in Node.js?",
    "question_hi": "Node.js में एक URL को पार्स करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["url.parse()", "url.decode()", "url.read()", "url.analyze()"],
    "options_hi": ["url.parse()", "url.decode()", "url.read()", "url.analyze()"],
    "answer_en": "url.parse()",
    "answer_hi": "url.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which module is used to compress files in Node.js?",
    "question_hi": "Node.js में फाइलों को कंप्रेस करने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["zlib", "compress", "gzip", "zip"],
    "options_hi": ["zlib", "compress", "gzip", "zip"],
    "answer_en": "zlib",
    "answer_hi": "zlib",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which method is used to create a new buffer in Node.js?",
    "question_hi": "Node.js में एक नया बफर बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["Buffer.alloc()", "Buffer.new()", "Buffer.create()", "Buffer.make()"],
    "options_hi": ["Buffer.alloc()", "Buffer.new()", "Buffer.create()", "Buffer.make()"],
    "answer_en": "Buffer.alloc()",
    "answer_hi": "Buffer.alloc()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which module is used to perform DNS lookups in Node.js?",
    "question_hi": "Node.js में DNS लुकअप करने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["dns", "net", "http", "url"],
    "options_hi": ["dns", "net", "http", "url"],
    "answer_en": "dns",
    "answer_hi": "dns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which method is used to create a HTTP server in Node.js?",
    "question_hi": "Node.js में HTTP सर्वर बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["http.createServer()", "http.newServer()", "http.makeServer()", "http.server()"],
    "options_hi": ["http.createServer()", "http.newServer()", "http.makeServer()", "http.server()"],
    "answer_en": "http.createServer()",
    "answer_hi": "http.createServer()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which module is used to handle streams in Node.js?",
    "question_hi": "Node.js में स्ट्रीम्स को हैंडल करने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["stream", "fs", "buffer", "data"],
    "options_hi": ["stream", "fs", "buffer", "data"],
    "answer_en": "stream",
    "answer_hi": "stream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which method is used to read input from the command line in Node.js?",
    "question_hi": "Node.js में कमांड लाइन से इनपुट पढ़ने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["readline", "input", "console", "process.stdin"],
    "options_hi": ["readline", "input", "console", "process.stdin"],
    "answer_en": "readline",
    "answer_hi": "readline",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which module is used to handle cryptographic operations in Node.js?",
    "question_hi": "Node.js में क्रिप्टोग्राफिक ऑपरेशन्स को हैंडल करने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["crypto", "hash", "encrypt", "security"],
    "options_hi": ["crypto", "hash", "encrypt", "security"],
    "answer_en": "crypto",
    "answer_hi": "crypto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which method is used to create a new Promise in Node.js?",
    "question_hi": "Node.js में एक नया प्रॉमिस बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["new Promise()", "Promise.create()", "Promise.new()", "Promise.make()"],
    "options_hi": ["new Promise()", "Promise.create()", "Promise.new()", "Promise.make()"],
    "answer_en": "new Promise()",
    "answer_hi": "new Promise()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which module is used to handle operating system related operations in Node.js?",
    "question_hi": "Node.js में ऑपरेटिंग सिस्टम संबंधित ऑपरेशन्स को हैंडल करने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["os", "system", "process", "platform"],
    "options_hi": ["os", "system", "process", "platform"],
    "answer_en": "os",
    "answer_hi": "os",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which method is used to get the current working directory in Node.js?",
    "question_hi": "Node.js में करंट वर्किंग डायरेक्टरी प्राप्त करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["process.cwd()", "process.dir()", "process.pwd()", "process.getcwd()"],
    "options_hi": ["process.cwd()", "process.dir()", "process.pwd()", "process.getcwd()"],
    "answer_en": "process.cwd()",
    "answer_hi": "process.cwd()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which module is used to handle query strings in Node.js?",
    "question_hi": "Node.js में क्वेरी स्ट्रिंग्स को हैंडल करने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["querystring", "url", "http", "query"],
    "options_hi": ["querystring", "url", "http", "query"],
    "answer_en": "querystring",
    "answer_hi": "querystring",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which method is used to convert a buffer to a string in Node.js?",
    "question_hi": "Node.js में एक बफर को स्ट्रिंग में कन्वर्ट करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["buffer.toString()", "buffer.toStr()", "buffer.str()", "buffer.convert()"],
    "options_hi": ["buffer.toString()", "buffer.toStr()", "buffer.str()", "buffer.convert()"],
    "answer_en": "buffer.toString()",
    "answer_hi": "buffer.toString()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which module is used to handle timers in Node.js?",
    "question_hi": "Node.js में टाइमर्स को हैंडल करने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["timers", "time", "setTimeout", "interval"],
    "options_hi": ["timers", "time", "setTimeout", "interval"],
    "answer_en": "timers",
    "answer_hi": "timers",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which method is used to create a new event emitter in Node.js?",
    "question_hi": "Node.js में एक नया इवेंट एमिटर बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["new events.EventEmitter()", "events.createEmitter()", "events.newEmitter()", "events.makeEmitter()"],
    "options_hi": ["new events.EventEmitter()", "events.createEmitter()", "events.newEmitter()", "events.makeEmitter()"],
    "answer_en": "new events.EventEmitter()",
    "answer_hi": "new events.EventEmitter()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which module is used to handle file system operations in Node.js?",
    "question_hi": "Node.js में फाइल सिस्टम ऑपरेशन्स को हैंडल करने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["fs", "file", "path", "os"],
    "options_hi": ["fs", "file", "path", "os"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which method is used to delete a file in Node.js?",
    "question_hi": "Node.js में एक फाइल को डिलीट करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["fs.unlink()", "fs.delete()", "fs.remove()", "fs.rm()"],
    "options_hi": ["fs.unlink()", "fs.delete()", "fs.remove()", "fs.rm()"],
    "answer_en": "fs.unlink()",
    "answer_hi": "fs.unlink()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which module is used to create a TCP server in Node.js?",
    "question_hi": "Node.js में एक TCP सर्वर बनाने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["net", "tcp", "http", "socket"],
    "options_hi": ["net", "tcp", "http", "socket"],
    "answer_en": "net",
    "answer_hi": "net",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which method is used to resolve a promise in Node.js?",
    "question_hi": "Node.js में एक प्रॉमिस को रिज़ॉल्व करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["resolve()", "fulfill()", "complete()", "done()"],
    "options_hi": ["resolve()", "fulfill()", "complete()", "done()"],
    "answer_en": "resolve()",
    "answer_hi": "resolve()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which module is used to handle HTTP requests in Node.js?",
    "question_hi": "Node.js में HTTP रिक्वेस्ट्स को हैंडल करने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["http", "https", "request", "fetch"],
    "options_hi": ["http", "https", "request", "fetch"],
    "answer_en": "http",
    "answer_hi": "http",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which method is used to create a new child process in Node.js?",
    "question_hi": "Node.js में एक नया चाइल्ड प्रोसेस बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["child_process.spawn()", "child_process.new()", "child_process.create()", "child_process.make()"],
    "options_hi": ["child_process.spawn()", "child_process.new()", "child_process.create()", "child_process.make()"],
    "answer_en": "child_process.spawn()",
    "answer_hi": "child_process.spawn()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which module is used to handle URL operations in Node.js?",
    "question_hi": "Node.js में URL ऑपरेशन्स को हैंडल करने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["url", "http", "querystring", "path"],
    "options_hi": ["url", "http", "querystring", "path"],
    "answer_en": "url",
    "answer_hi": "url",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which method is used to create a new HTTP request in Node.js?",
    "question_hi": "Node.js में एक नया HTTP रिक्वेस्ट बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["http.request()", "http.newRequest()", "http.createRequest()", "http.makeRequest()"],
    "options_hi": ["http.request()", "http.newRequest()", "http.createRequest()", "http.makeRequest()"],
    "answer_en": "http.request()",
    "answer_hi": "http.request()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which module is used to handle console operations in Node.js?",
    "question_hi": "Node.js में कंसोल ऑपरेशन्स को हैंडल करने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["console", "log", "output", "print"],
    "options_hi": ["console", "log", "output", "print"],
    "answer_en": "console",
    "answer_hi": "console",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which method is used to listen for events in Node.js?",
    "question_hi": "Node.js में इवेंट्स के लिए लिसन करने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["on()", "listen()", "addListener()", "event()"],
    "options_hi": ["on()", "listen()", "addListener()", "event()"],
    "answer_en": "on()",
    "answer_hi": "on()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which module is used to handle cluster operations in Node.js?",
    "question_hi": "Node.js में क्लस्टर ऑपरेशन्स को हैंडल करने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["cluster", "child_process", "worker", "process"],
    "options_hi": ["cluster", "child_process", "worker", "process"],
    "answer_en": "cluster",
    "answer_hi": "cluster",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which method is used to create a new stream in Node.js?",
    "question_hi": "Node.js में एक नई स्ट्रीम बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["new stream.Stream()", "stream.create()", "stream.new()", "stream.make()"],
    "options_hi": ["new stream.Stream()", "stream.create()", "stream.new()", "stream.make()"],
    "answer_en": "new stream.Stream()",
    "answer_hi": "new stream.Stream()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which module is used to handle errors in Node.js?",
    "question_hi": "Node.js में एरर्स को हैंडल करने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["error", "err", "process", "events"],
    "options_hi": ["error", "err", "process", "events"],
    "answer_en": "error",
    "answer_hi": "error",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which method is used to create a new HTTPS server in Node.js?",
    "question_hi": "Node.js में एक नया HTTPS सर्वर बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["https.createServer()", "https.newServer()", "https.makeServer()", "https.server()"],
    "options_hi": ["https.createServer()", "https.newServer()", "https.makeServer()", "https.server()"],
    "answer_en": "https.createServer()",
    "answer_hi": "https.createServer()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which module is used to handle buffer operations in Node.js?",
    "question_hi": "Node.js में बफर ऑपरेशन्स को हैंडल करने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["buffer", "data", "stream", "binary"],
    "options_hi": ["buffer", "data", "stream", "binary"],
    "answer_en": "buffer",
    "answer_hi": "buffer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which method is used to create a new read stream in Node.js?",
    "question_hi": "Node.js में एक नया रीड स्ट्रीम बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["fs.createReadStream()", "fs.readStream()", "fs.newReadStream()", "fs.makeReadStream()"],
    "options_hi": ["fs.createReadStream()", "fs.readStream()", "fs.newReadStream()", "fs.makeReadStream()"],
    "answer_en": "fs.createReadStream()",
    "answer_hi": "fs.createReadStream()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which module is used to handle path operations in Node.js?",
    "question_hi": "Node.js में पाथ ऑपरेशन्स को हैंडल करने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["path", "fs", "os", "url"],
    "options_hi": ["path", "fs", "os", "url"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which method is used to create a new write stream in Node.js?",
    "question_hi": "Node.js में एक नया राइट स्ट्रीम बनाने के लिए किस विधि का उपयोग किया जाता है?",
    "options_en": ["fs.createWriteStream()", "fs.writeStream()", "fs.newWriteStream()", "fs.makeWriteStream()"],
    "options_hi": ["fs.createWriteStream()", "fs.writeStream()", "fs.newWriteStream()", "fs.makeWriteStream()"],
    "answer_en": "fs.createWriteStream()",
    "answer_hi": "fs.createWriteStream()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which module is used to handle utility operations in Node.js?",
    "question_hi": "Node.js में यूटिलिटी ऑपरेशन्स को हैंडल करने के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["util", "utility", "tools", "helper"],
    "options_hi": ["util", "utility", "tools", "helper"],
    "answer_en": "util",
    "answer_hi": "util",
    "attempted": false,
    "selected": ""
  }
];


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