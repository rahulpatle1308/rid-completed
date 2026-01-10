const questions=[
  {
    "num": 1,
    "question_en": "Which Node.js module is used to create TCP servers?",
    "question_hi": "TCP सर्वर बनाने के लिए Node.js का कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["net", "http", "tls", "dns"],
    "options_hi": ["net", "http", "tls", "dns"],
    "answer_en": "net",
    "answer_hi": "net",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which Node.js module is used to create UDP sockets?",
    "question_hi": "UDP सॉकेट बनाने के लिए Node.js का कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["dgram", "net", "udp", "socket"],
    "options_hi": ["dgram", "net", "udp", "socket"],
    "answer_en": "dgram",
    "answer_hi": "dgram",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which Node.js module helps in debugging?",
    "question_hi": "डिबगिंग में मदद करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["util", "debug", "assert", "inspector"],
    "options_hi": ["util", "debug", "assert", "inspector"],
    "answer_en": "inspector",
    "answer_hi": "inspector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which flag enables strict mode in Node.js?",
    "question_hi": "Node.js में स्ट्रिक्ट मोड सक्षम करने के लिए कौन सा फ़्लैग उपयोग होता है?",
    "options_en": ["use strict", "--strict", "--use-strict", "--safe"],
    "options_hi": ["use strict", "--strict", "--use-strict", "--safe"],
    "answer_en": "use strict",
    "answer_hi": "use strict",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which Node.js module provides command-line argument parsing?",
    "question_hi": "कमांड लाइन आर्ग्युमेंट पढ़ने के लिए कौन सा Node.js फीचर उपयोग होता है?",
    "options_en": ["process.argv", "cli", "args", "command"],
    "options_hi": ["process.argv", "cli", "args", "command"],
    "answer_en": "process.argv",
    "answer_hi": "process.argv",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which method exits the Node.js process?",
    "question_hi": "Node.js प्रोसेस को समाप्त करने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["process.exit()", "process.stop()", "process.end()", "exit()"],
    "options_hi": ["process.exit()", "process.stop()", "process.end()", "exit()"],
    "answer_en": "process.exit()",
    "answer_hi": "process.exit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which Node.js module supports HTTP client requests?",
    "question_hi": "HTTP क्लाइंट रिक्वेस्ट सपोर्ट करने वाला मॉड्यूल कौन सा है?",
    "options_en": ["http", "https", "net", "request"],
    "options_hi": ["http", "https", "net", "request"],
    "answer_en": "http",
    "answer_hi": "http",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which Node.js module supports HTTPS server?",
    "question_hi": "HTTPS सर्वर सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["https", "tls", "crypto", "net"],
    "options_hi": ["https", "tls", "crypto", "net"],
    "answer_en": "https",
    "answer_hi": "https",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which Node.js module is used for text encoding?",
    "question_hi": "टेक्स्ट एन्कोडिंग के लिए Node.js का कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["string_decoder", "buffer", "text", "encode"],
    "options_hi": ["string_decoder", "buffer", "text", "encode"],
    "answer_en": "string_decoder",
    "answer_hi": "string_decoder",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which Node.js module supports internationalization?",
    "question_hi": "इंटरनेशनलाइज़ेशन सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["intl", "i18n", "util", "global"],
    "options_hi": ["intl", "i18n", "util", "global"],
    "answer_en": "intl",
    "answer_hi": "intl",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which Node.js method returns current working directory?",
    "question_hi": "वर्तमान वर्किंग डायरेक्टरी बताने वाली Node.js मेथड कौन सी है?",
    "options_en": ["process.cwd()", "process.dir()", "process.path()", "os.cwd()"],
    "options_hi": ["process.cwd()", "process.dir()", "process.path()", "os.cwd()"],
    "answer_en": "process.cwd()",
    "answer_hi": "process.cwd()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which Node.js method changes directory?",
    "question_hi": "डायरेक्टरी बदलने के लिए कौन सी Node.js मेथड उपयोग होती है?",
    "options_en": ["process.chdir()", "process.move()", "process.cd()", "os.chdir()"],
    "options_hi": ["process.chdir()", "process.move()", "process.cd()", "os.chdir()"],
    "answer_en": "process.chdir()",
    "answer_hi": "process.chdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which Node.js module supports URL search params?",
    "question_hi": "URL सर्च पैरामीटर सपोर्ट करने वाला मॉड्यूल कौन सा है?",
    "options_en": ["url", "querystring", "params", "search"],
    "options_hi": ["url", "querystring", "params", "search"],
    "answer_en": "url",
    "answer_hi": "url",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which Node.js module helps with text formatting?",
    "question_hi": "टेक्स्ट फॉर्मेटिंग में मदद करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["util", "format", "string", "text"],
    "options_hi": ["util", "format", "string", "text"],
    "answer_en": "util",
    "answer_hi": "util",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which Node.js module provides punycode support?",
    "question_hi": "प्यूनिकोड सपोर्ट देने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["punycode", "unicode", "encode", "string"],
    "options_hi": ["punycode", "unicode", "encode", "string"],
    "answer_en": "punycode",
    "answer_hi": "punycode",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which Node.js module supports readline interface?",
    "question_hi": "रीडलाइन इंटरफेस सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["readline", "fs", "stream", "input"],
    "options_hi": ["readline", "fs", "stream", "input"],
    "answer_en": "readline",
    "answer_hi": "readline",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which Node.js module supports TTY streams?",
    "question_hi": "TTY स्ट्रीम्स सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["tty", "console", "stdio", "process"],
    "options_hi": ["tty", "console", "stdio", "process"],
    "answer_en": "tty",
    "answer_hi": "tty",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which Node.js module supports HTTPS agents?",
    "question_hi": "HTTPS एजेंट सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["https", "http", "agent", "tls"],
    "options_hi": ["https", "http", "agent", "tls"],
    "answer_en": "https",
    "answer_hi": "https",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which Node.js module supports data decompression?",
    "question_hi": "डेटा डी-कंप्रेशन सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["zlib", "gzip", "compress", "zip"],
    "options_hi": ["zlib", "gzip", "compress", "zip"],
    "answer_en": "zlib",
    "answer_hi": "zlib",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which Node.js module supports file permissions?",
    "question_hi": "फाइल परमिशन से संबंधित कार्य कौन सा Node.js मॉड्यूल करता है?",
    "options_en": ["fs", "path", "os", "chmod"],
    "options_hi": ["fs", "path", "os", "chmod"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which Node.js module supports symbolic links?",
    "question_hi": "सिंबॉलिक लिंक सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["fs", "path", "link", "os"],
    "options_hi": ["fs", "path", "link", "os"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which Node.js module supports file stats?",
    "question_hi": "फाइल की जानकारी (स्टैट्स) देने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["fs", "stat", "os", "path"],
    "options_hi": ["fs", "stat", "os", "path"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which Node.js module supports socket connections?",
    "question_hi": "सॉकेट कनेक्शन सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["net", "socket", "http", "dns"],
    "options_hi": ["net", "socket", "http", "dns"],
    "answer_en": "net",
    "answer_hi": "net",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which Node.js module supports file streams?",
    "question_hi": "फाइल स्ट्रीम सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["fs", "stream", "buffer", "file"],
    "options_hi": ["fs", "stream", "buffer", "file"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which Node.js module supports pipeline API?",
    "question_hi": "पाइपलाइन API सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["stream", "fs", "util", "net"],
    "options_hi": ["stream", "fs", "util", "net"],
    "answer_en": "stream",
    "answer_hi": "stream",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which Node.js module supports abort signals?",
    "question_hi": "अबॉर्ट सिग्नल सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["events", "abort-controller", "signal", "process"],
    "options_hi": ["events", "abort-controller", "signal", "process"],
    "answer_en": "abort-controller",
    "answer_hi": "abort-controller",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which Node.js module supports async hooks?",
    "question_hi": "असिंक्रोनस हुक्स सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["async_hooks", "hooks", "events", "timers"],
    "options_hi": ["async_hooks", "hooks", "events", "timers"],
    "answer_en": "async_hooks",
    "answer_hi": "async_hooks",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which Node.js module supports WASI?",
    "question_hi": "WASI सपोर्ट देने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["wasi", "wasm", "vm", "v8"],
    "options_hi": ["wasi", "wasm", "vm", "v8"],
    "answer_en": "wasi",
    "answer_hi": "wasi",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which Node.js module supports WebAssembly?",
    "question_hi": "वेबअसेंबली सपोर्ट देने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["webassembly", "wasm", "vm", "v8"],
    "options_hi": ["webassembly", "wasm", "vm", "v8"],
    "answer_en": "wasm",
    "answer_hi": "wasm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which Node.js module supports diagnostics reports?",
    "question_hi": "डायग्नोस्टिक रिपोर्ट सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["report", "diagnostics", "process", "util"],
    "options_hi": ["report", "diagnostics", "process", "util"],
    "answer_en": "process",
    "answer_hi": "process",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which Node.js module supports environment config?",
    "question_hi": "एनवायरनमेंट कॉन्फ़िगरेशन सपोर्ट करने वाला Node.js फीचर कौन सा है?",
    "options_en": ["process.env", "config", "env", "system"],
    "options_hi": ["process.env", "config", "env", "system"],
    "answer_en": "process.env",
    "answer_hi": "process.env",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which Node.js module supports crypto hashes?",
    "question_hi": "क्रिप्टो हैश सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["crypto", "hash", "secure", "tls"],
    "options_hi": ["crypto", "hash", "secure", "tls"],
    "answer_en": "crypto",
    "answer_hi": "crypto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which Node.js module supports random bytes?",
    "question_hi": "रैंडम बाइट्स जनरेट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["crypto", "buffer", "random", "util"],
    "options_hi": ["crypto", "buffer", "random", "util"],
    "answer_en": "crypto",
    "answer_hi": "crypto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which Node.js module supports HTTP headers parsing?",
    "question_hi": "HTTP हेडर पार्स करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["http", "net", "url", "headers"],
    "options_hi": ["http", "net", "url", "headers"],
    "answer_en": "http",
    "answer_hi": "http",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which Node.js module supports socket timeouts?",
    "question_hi": "सॉकेट टाइमआउट सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["net", "timers", "http", "os"],
    "options_hi": ["net", "timers", "http", "os"],
    "answer_en": "net",
    "answer_hi": "net",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which Node.js module supports error assertions?",
    "question_hi": "एरर असर्शन सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["assert", "error", "util", "debug"],
    "options_hi": ["assert", "error", "util", "debug"],
    "answer_en": "assert",
    "answer_hi": "assert",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which Node.js module supports encoding validation?",
    "question_hi": "एन्कोडिंग वैलिडेशन सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["buffer", "string_decoder", "util", "encode"],
    "options_hi": ["buffer", "string_decoder", "util", "encode"],
    "answer_en": "buffer",
    "answer_hi": "buffer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which Node.js module supports URL encoding and decoding?",
    "question_hi": "URL एन्कोड और डीकोड करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["querystring", "url", "encode", "path"],
    "options_hi": ["querystring", "url", "encode", "path"],
    "answer_en": "querystring",
    "answer_hi": "querystring",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which Node.js module supports file truncation?",
    "question_hi": "फाइल ट्रंकेशन सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["fs", "path", "os", "util"],
    "options_hi": ["fs", "path", "os", "util"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which Node.js module supports directory watching?",
    "question_hi": "डायरेक्टरी वॉचिंग सपोर्ट करने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["fs", "watch", "path", "os"],
    "options_hi": ["fs", "watch", "path", "os"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which Node.js module supports file renaming?",
    "question_hi": "फाइल का नाम बदलने के लिए Node.js का कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["fs", "path", "os", "rename"],
    "options_hi": ["fs", "path", "os", "rename"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which Node.js module supports file deletion?",
    "question_hi": "फाइल डिलीट करने के लिए Node.js का कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["fs", "delete", "remove", "path"],
    "options_hi": ["fs", "delete", "remove", "path"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which Node.js module supports directory creation?",
    "question_hi": "डायरेक्टरी बनाने के लिए Node.js का कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["fs", "mkdir", "path", "os"],
    "options_hi": ["fs", "mkdir", "path", "os"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which Node.js module supports directory removal?",
    "question_hi": "डायरेक्टरी हटाने के लिए Node.js का कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["fs", "rmdir", "path", "os"],
    "options_hi": ["fs", "rmdir", "path", "os"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which Node.js module supports file copy?",
    "question_hi": "फाइल कॉपी करने के लिए Node.js का कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["fs", "copy", "path", "util"],
    "options_hi": ["fs", "copy", "path", "util"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which Node.js module supports file access checks?",
    "question_hi": "फाइल एक्सेस चेक करने के लिए Node.js का कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["fs", "access", "os", "path"],
    "options_hi": ["fs", "access", "os", "path"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which Node.js module supports symbolic link creation?",
    "question_hi": "सिंबॉलिक लिंक बनाने के लिए Node.js का कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["fs", "link", "path", "os"],
    "options_hi": ["fs", "link", "path", "os"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which Node.js module supports file ownership changes?",
    "question_hi": "फाइल ओनरशिप बदलने के लिए Node.js का कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["fs", "owner", "chmod", "os"],
    "options_hi": ["fs", "owner", "chmod", "os"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which Node.js module supports CPU usage info?",
    "question_hi": "CPU उपयोग की जानकारी देने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["process", "os", "util", "system"],
    "options_hi": ["process", "os", "util", "system"],
    "answer_en": "process",
    "answer_hi": "process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which Node.js module supports uptime information?",
    "question_hi": "सिस्टम अपटाइम की जानकारी देने वाला Node.js मॉड्यूल कौन सा है?",
    "options_en": ["os", "process", "time", "util"],
    "options_hi": ["os", "process", "time", "util"],
    "answer_en": "os",
    "answer_hi": "os",
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