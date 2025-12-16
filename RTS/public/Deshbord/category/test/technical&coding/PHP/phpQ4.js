const questions =[
  {
    "num": 1,
    "question_en": "Which symbol is used to start a single-line comment in PHP?",
    "question_hi": "PHP में single-line टिप्पणी शुरू करने के लिए कौन-सा चिन्ह उपयोग होता है?",
    "options_en": ["//", "/* */", "##", "\\\\\\"],
    "options_hi": ["//", "/* */", "##", "\\\\\\"],
    "answer_en": "//",
    "answer_hi": "//",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which function outputs text in PHP?",
    "question_hi": "PHP में टेक्स्ट आउटपुट करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["echo", "print", "write", "output"],
    "options_hi": ["echo", "print", "write", "output"],
    "answer_en": "echo",
    "answer_hi": "echo",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the correct file extension for PHP files?",
    "question_hi": "PHP फाइल्स के लिए सही एक्सटेंशन क्या है?",
    "options_en": [".php", ".ph", ".phtml", ".html"],
    "options_hi": [".php", ".ph", ".phtml", ".html"],
    "answer_en": ".php",
    "answer_hi": ".php",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which operator concatenates strings in PHP?",
    "question_hi": "PHP में कौन-सा ऑपरेटर स्ट्रिंग्स को जोड़ता है?",
    "options_en": [".", "+", "&", "concat()"],
    "options_hi": [".", "+", "&", "concat()"],
    "answer_en": ".",
    "answer_hi": ".",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "How do you declare a variable in PHP?",
    "question_hi": "PHP में वैरिएबल कैसे घोषित करते हैं?",
    "options_en": ["$var = 5;", "var $var = 5;", "let $var = 5;", "declare $var = 5;"],
    "options_hi": ["$var = 5;", "var $var = 5;", "let $var = 5;", "declare $var = 5;"],
    "answer_en": "$var = 5;",
    "answer_hi": "$var = 5;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which function returns the length of a string?",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग की लंबाई लौटाता है?",
    "options_en": ["strlen()", "length()", "size()", "strlength()"],
    "options_hi": ["strlen()", "length()", "size()", "strlength()"],
    "answer_en": "strlen()",
    "answer_hi": "strlen()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which superglobal holds POST data?",
    "question_hi": "कौन-सा superglobal POST डेटा रखता है?",
    "options_en": ["$_POST", "$_GET", "$_REQUEST", "$_FORM"],
    "options_hi": ["$_POST", "$_GET", "$_REQUEST", "$_FORM"],
    "answer_en": "$_POST",
    "answer_hi": "$_POST",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which function is used to include a file in PHP?",
    "question_hi": "PHP में फ़ाइल include करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["include()", "require()", "include_once()", "require_once()"],
    "options_hi": ["include()", "require()", "include_once()", "require_once()"],
    "answer_en": "include()",
    "answer_hi": "include()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What does PDO stand for?",
    "question_hi": "PDO का पूरा नाम क्या है?",
    "options_en": ["PHP Data Objects", "PHP Database Objects", "Primary Data Object", "PHP Direct Objects"],
    "options_hi": ["PHP Data Objects", "PHP Database Objects", "Primary Data Object", "PHP Direct Objects"],
    "answer_en": "PHP Data Objects",
    "answer_hi": "PHP Data Objects",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which keyword defines a function in PHP?",
    "question_hi": "PHP में फ़ंक्शन परिभाषित करने के लिए कौन-सा कीवर्ड उपयोग होता है?",
    "options_en": ["function", "def", "fn", "func"],
    "options_hi": ["function", "def", "fn", "func"],
    "answer_en": "function",
    "answer_hi": "function",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which symbol is used for variables in PHP?",
    "question_hi": "PHP में वैरिएबल के लिए कौन-सा चिन्ह उपयोग होता है?",
    "options_en": ["$", "#", "@", "&"],
    "options_hi": ["$", "#", "@", "&"],
    "answer_en": "$",
    "answer_hi": "$",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which statement stops script execution?",
    "question_hi": "PHP में स्क्रिप्ट को रोकने के लिए कौन-सा स्टेटमेंट उपयोग होता है?",
    "options_en": ["exit()", "stop()", "break()", "return"],
    "options_hi": ["exit()", "stop()", "break()", "return"],
    "answer_en": "exit()",
    "answer_hi": "exit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which operator is used for comparison?",
    "question_hi": "तुलना के लिए कौन-सा ऑपरेटर उपयोग होता है?",
    "options_en": ["==", "=", "!=", "+="],
    "options_hi": ["==", "=", "!=", "+="],
    "answer_en": "==",
    "answer_hi": "==",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which function prints formatted output?",
    "question_hi": "Formatted output के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["printf()", "echo()", "print()", "format()"],
    "options_hi": ["printf()", "echo()", "print()", "format()"],
    "answer_en": "printf()",
    "answer_hi": "printf()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which loop is guaranteed to run at least once?",
    "question_hi": "कौन-सा loop कम से कम एक बार ज़रूर चलता है?",
    "options_en": ["do-while", "for", "while", "foreach"],
    "options_hi": ["do-while", "for", "while", "foreach"],
    "answer_en": "do-while",
    "answer_hi": "do-while",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which function is used to count array elements?",
    "question_hi": "Array के elements गिनने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["count()", "size()", "length()", "total()"],
    "options_hi": ["count()", "size()", "length()", "total()"],
    "answer_en": "count()",
    "answer_hi": "count()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which keyword is used for conditional statements?",
    "question_hi": "Conditional statements के लिए कौन-सा कीवर्ड उपयोग होता है?",
    "options_en": ["if", "when", "case", "then"],
    "options_hi": ["if", "when", "case", "then"],
    "answer_en": "if",
    "answer_hi": "if",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which function starts a session?",
    "question_hi": "Session शुरू करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["session_start()", "session_begin()", "start_session()", "init_session()"],
    "options_hi": ["session_start()", "session_begin()", "start_session()", "init_session()"],
    "answer_en": "session_start()",
    "answer_hi": "session_start()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which symbol is used to access object properties?",
    "question_hi": "Object properties access करने के लिए कौन-सा चिन्ह उपयोग होता है?",
    "options_en": ["->", "::", ".", "$"],
    "options_hi": ["->", "::", ".", "$"],
    "answer_en": "->",
    "answer_hi": "->",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which function checks variable type?",
    "question_hi": "Variable का type check करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["gettype()", "typeof()", "vartype()", "checktype()"],
    "options_hi": ["gettype()", "typeof()", "vartype()", "checktype()"],
    "answer_en": "gettype()",
    "answer_hi": "gettype()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which keyword is used to define constants?",
    "question_hi": "Constants परिभाषित करने के लिए कौन-सा कीवर्ड उपयोग होता है?",
    "options_en": ["define()", "const", "both A and B", "static"],
    "options_hi": ["define()", "const", "both A and B", "static"],
    "answer_en": "both A and B",
    "answer_hi": "both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which function is used to redirect page?",
    "question_hi": "Page redirect करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["header()", "redirect()", "location()", "move()"],
    "options_hi": ["header()", "redirect()", "location()", "move()"],
    "answer_en": "header()",
    "answer_hi": "header()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which function removes whitespace?",
    "question_hi": "Whitespace हटाने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["trim()", "cut()", "remove()", "strip()"],
    "options_hi": ["trim()", "cut()", "remove()", "strip()"],
    "answer_en": "trim()",
    "answer_hi": "trim()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which function converts string to array?",
    "question_hi": "String को array में बदलने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["explode()", "split()", "strtoarr()", "array()"],
    "options_hi": ["explode()", "split()", "strtoarr()", "array()"],
    "answer_en": "explode()",
    "answer_hi": "explode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which function joins array into string?",
    "question_hi": "Array को string में जोड़ने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["implode()", "join()", "both A and B", "merge()"],
    "options_hi": ["implode()", "join()", "both A and B", "merge()"],
    "answer_en": "both A and B",
    "answer_hi": "both A and B",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which keyword is used to include files conditionally?",
    "question_hi": "File को conditionally include करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["include_once()", "require()", "load()", "import()"],
    "options_hi": ["include_once()", "require()", "load()", "import()"],
    "answer_en": "include_once()",
    "answer_hi": "include_once()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which function hashes passwords?",
    "question_hi": "Password hash करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["password_hash()", "md5()", "sha1()", "crypt()"],
    "options_hi": ["password_hash()", "md5()", "sha1()", "crypt()"],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which function verifies password hash?",
    "question_hi": "Password hash verify करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["password_verify()", "hash_verify()", "check_password()", "verify()"],
    "options_hi": ["password_verify()", "hash_verify()", "check_password()", "verify()"],
    "answer_en": "password_verify()",
    "answer_hi": "password_verify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which superglobal stores server info?",
    "question_hi": "Server जानकारी कौन-सा superglobal रखता है?",
    "options_en": ["$_SERVER", "$_ENV", "$_SESSION", "$_COOKIE"],
    "options_hi": ["$_SERVER", "$_ENV", "$_SESSION", "$_COOKIE"],
    "answer_en": "$_SERVER",
    "answer_hi": "$_SERVER",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which function sets cookies?",
    "question_hi": "Cookie set करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["setcookie()", "createcookie()", "makecookie()", "cookie()"],
    "options_hi": ["setcookie()", "createcookie()", "makecookie()", "cookie()"],
    "answer_en": "setcookie()",
    "answer_hi": "setcookie()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which keyword is used for inheritance?",
    "question_hi": "Inheritance के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["extends", "implements", "inherits", "parent"],
    "options_hi": ["extends", "implements", "inherits", "parent"],
    "answer_en": "extends",
    "answer_hi": "extends",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which keyword is used for interfaces?",
    "question_hi": "Interface के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["interface", "implements", "extends", "abstract"],
    "options_hi": ["interface", "implements", "extends", "abstract"],
    "answer_en": "interface",
    "answer_hi": "interface",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which keyword implements an interface?",
    "question_hi": "Interface को implement करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["implements", "extends", "use", "apply"],
    "options_hi": ["implements", "extends", "use", "apply"],
    "answer_en": "implements",
    "answer_hi": "implements",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which function sorts array in ascending order?",
    "question_hi": "Array को ascending order में sort करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["sort()", "rsort()", "asort()", "ksort()"],
    "options_hi": ["sort()", "rsort()", "asort()", "ksort()"],
    "answer_en": "sort()",
    "answer_hi": "sort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which function sorts array in descending order?",
    "question_hi": "Array को descending order में sort करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["rsort()", "sort()", "asort()", "ksort()"],
    "options_hi": ["rsort()", "sort()", "asort()", "ksort()"],
    "answer_en": "rsort()",
    "answer_hi": "rsort()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which function checks if variable exists?",
    "question_hi": "Variable मौजूद है या नहीं check करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["isset()", "exists()", "check()", "defined()"],
    "options_hi": ["isset()", "exists()", "check()", "defined()"],
    "answer_en": "isset()",
    "answer_hi": "isset()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which function removes variable?",
    "question_hi": "Variable हटाने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["unset()", "remove()", "delete()", "clear()"],
    "options_hi": ["unset()", "remove()", "delete()", "clear()"],
    "answer_en": "unset()",
    "answer_hi": "unset()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which operator checks type and value?",
    "question_hi": "Type और value दोनों check करने के लिए कौन-सा ऑपरेटर उपयोग होता है?",
    "options_en": ["===", "==", "!=", "="],
    "options_hi": ["===", "==", "!=", "="],
    "answer_en": "===",
    "answer_hi": "===",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which function converts array to JSON?",
    "question_hi": "Array को JSON में बदलने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["json_encode()", "json_decode()", "toJSON()", "encodeJSON()"],
    "options_hi": ["json_encode()", "json_decode()", "toJSON()", "encodeJSON()"],
    "answer_en": "json_encode()",
    "answer_hi": "json_encode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which function converts JSON to array?",
    "question_hi": "JSON को array में बदलने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["json_decode()", "json_encode()", "fromJSON()", "decodeJSON()"],
    "options_hi": ["json_decode()", "json_encode()", "fromJSON()", "decodeJSON()"],
    "answer_en": "json_decode()",
    "answer_hi": "json_decode()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which keyword creates an object?",
    "question_hi": "Object बनाने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["new", "create", "object", "class"],
    "options_hi": ["new", "create", "object", "class"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which keyword defines a class?",
    "question_hi": "Class परिभाषित करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["class", "object", "struct", "define"],
    "options_hi": ["class", "object", "struct", "define"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which function connects MySQL using PDO?",
    "question_hi": "PDO का उपयोग करके MySQL connect करने के लिए क्या उपयोग होता है?",
    "options_en": ["new PDO()", "mysqli_connect()", "mysql_connect()", "db_connect()"],
    "options_hi": ["new PDO()", "mysqli_connect()", "mysql_connect()", "db_connect()"],
    "answer_en": "new PDO()",
    "answer_hi": "new PDO()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which method prepares SQL statement in PDO?",
    "question_hi": "PDO में SQL prepare करने के लिए कौन-सा method उपयोग होता है?",
    "options_en": ["prepare()", "query()", "execute()", "bind()"],
    "options_hi": ["prepare()", "query()", "execute()", "bind()"],
    "answer_en": "prepare()",
    "answer_hi": "prepare()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which method executes prepared statement?",
    "question_hi": "Prepared statement execute करने के लिए कौन-सा method उपयोग होता है?",
    "options_en": ["execute()", "run()", "query()", "start()"],
    "options_hi": ["execute()", "run()", "query()", "start()"],
    "answer_en": "execute()",
    "answer_hi": "execute()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which fetch mode returns associative array?",
    "question_hi": "Associative array return करने वाला fetch mode कौन-सा है?",
    "options_en": ["PDO::FETCH_ASSOC", "PDO::FETCH_NUM", "PDO::FETCH_OBJ", "PDO::FETCH_BOTH"],
    "options_hi": ["PDO::FETCH_ASSOC", "PDO::FETCH_NUM", "PDO::FETCH_OBJ", "PDO::FETCH_BOTH"],
    "answer_en": "PDO::FETCH_ASSOC",
    "answer_hi": "PDO::FETCH_ASSOC",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which function uploads files?",
    "question_hi": "File upload के लिए कौन-सा superglobal उपयोग होता है?",
    "options_en": ["$_FILES", "$_POST", "$_UPLOAD", "$_DATA"],
    "options_hi": ["$_FILES", "$_POST", "$_UPLOAD", "$_DATA"],
    "answer_en": "$_FILES",
    "answer_hi": "$_FILES",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which function moves uploaded file?",
    "question_hi": "Uploaded file move करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["move_uploaded_file()", "upload_file()", "copy()", "move()"],
    "options_hi": ["move_uploaded_file()", "upload_file()", "copy()", "move()"],
    "answer_en": "move_uploaded_file()",
    "answer_hi": "move_uploaded_file()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which function gets current date?",
    "question_hi": "Current date पाने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["date()", "now()", "today()", "getdate()"],
    "options_hi": ["date()", "now()", "today()", "getdate()"],
    "answer_en": "date()",
    "answer_hi": "date()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which function gets current timestamp?",
    "question_hi": "Current timestamp पाने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["time()", "timestamp()", "now()", "date()"],
    "options_hi": ["time()", "timestamp()", "now()", "date()"],
    "answer_en": "time()",
    "answer_hi": "time()",
    "attempted": false,
    "selected": ""
  }
]




let currentQuestion = 0; 
let language = "en";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes
let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");
        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

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

function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}



////////////////////////////////////////////////////////////////////////////////////////////

// submit 
function jumpToQuestion(index) {
            currentQuestion = index;
            loadQuestion(index);
        }

        function submitQuiz() {
            let confirmation = confirm("Are you sure you want to submit the test?");
            
            if (!confirmation) {
                return; // अगर यूज़र 'Cancel' करता है तो आगे नहीं बढ़ेंगे
            }

            let attempted = 0;
            let notAttempted = 0;
            let score = 0;
            const results = [];

            questions.forEach(q => {
                if (q.attempted) {
                    attempted++;
                    if (q.selected === q.answer) {
                        score++;
                    }
                } else {
                    notAttempted++;
                }
                results.push({ question: q.question, selected: q.selected || "Not Answered", correct: q.answer });
            });

            localStorage.setItem("attempted", attempted);
            localStorage.setItem("notAttempted", notAttempted);
            localStorage.setItem("score", score);
            localStorage.setItem("results", JSON.stringify(results));

            // रिजल्ट देखने से पहले एक और कन्फर्मेशन ले सकते हैं
            let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
            if (viewResult) {
                window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
            }
        }
        window.onload = () => {
            loadQuestion(currentQuestion);
        };


function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};


///////////////////////////////////////