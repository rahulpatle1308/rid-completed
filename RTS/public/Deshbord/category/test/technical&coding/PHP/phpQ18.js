const questions = [
  {
    "num": 1,
    "question_en": "Which construct includes a file and generates a fatal error if missing?",
    "question_hi": "कौन-सा construct फ़ाइल शामिल करता है और यदि फ़ाइल गायब हो तो fatal error देता है?",
    "options_en": [
      "time()",
      "explode()",
      "__FILE__",
      "require()"
    ],
    "options_hi": [
      "time()",
      "explode()",
      "__FILE__",
      "require()"
    ],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which construct includes a file only once?",
    "question_hi": "कौन-सा construct फ़ाइल को केवल एक बार include करता है?",
    "options_en": [
      "const",
      "fopen()",
      "include_once()",
      "==="
    ],
    "options_hi": [
      "const",
      "fopen()",
      "include_once()",
      "==="
    ],
    "answer_en": "include_once()",
    "answer_hi": "include_once()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which operator suppresses errors in PHP?",
    "question_hi": "PHP में errors suppress करने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": [
      "substr()",
      "array_merge()",
      ">=",
      "@"
    ],
    "options_hi": [
      "substr()",
      "array_merge()",
      ">=",
      "@"
    ],
    "answer_en": "@",
    "answer_hi": "@",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which operator is the null coalescing operator introduced in PHP 7?",
    "question_hi": "PHP 7 में पेश किया गया null coalescing operator कौन-सा है?",
    "options_en": [
      "%",
      "??",
      "try",
      "continue"
    ],
    "options_hi": [
      "%",
      "??",
      "try",
      "continue"
    ],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which operator is the spaceship operator for three-way comparison?",
    "question_hi": "तीन-तरफा तुलना के लिए spaceship operator कौन-सा है?",
    "options_en": [
      "<=>",
      "finally",
      "asort()",
      "mkdir()"
    ],
    "options_hi": [
      "<=>",
      "finally",
      "asort()",
      "mkdir()"
    ],
    "answer_en": "<=>",
    "answer_hi": "<=>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which PHP function returns the length of a string? (Example: exit())",
    "question_hi": "PHP में स्ट्रिंग की लंबाई किस फ़ंक्शन से मिलती है? (exit())",
    "options_en": [
      "interface",
      "exit()",
      "+",
      "isset()"
    ],
    "options_hi": [
      "interface",
      "exit()",
      "+",
      "isset()"
    ],
    "answer_en": "exit()",
    "answer_hi": "exit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which function finds the position of the first occurrence of a substring? (Example: mysqli_query())",
    "question_hi": "कौन-सा फ़ंक्शन किसी सबस्ट्रिंग के पहले occurrence की स्थिति देता है? (mysqli_query())",
    "options_en": [
      "mysqli_query()",
      "/",
      "array_values()",
      "session_destroy()"
    ],
    "options_hi": [
      "mysqli_query()",
      "/",
      "array_values()",
      "session_destroy()"
    ],
    "answer_en": "mysqli_query()",
    "answer_hi": "mysqli_query()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which function returns part of a string? (Example: __DIR__)",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग का हिस्सा लौटाता है? (__DIR__)",
    "options_en": [
      "unlink()",
      "implode()",
      "__DIR__",
      "phpversion()"
    ],
    "options_hi": [
      "unlink()",
      "implode()",
      "__DIR__",
      "phpversion()"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which function removes whitespace from both ends of a string? (Example: session_destroy())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग के दोनों सिरों से whitespace हटाता है? (session_destroy())",
    "options_en": [
      "explode()",
      "session_destroy()",
      "count()",
      "array_slice()"
    ],
    "options_hi": [
      "explode()",
      "session_destroy()",
      "count()",
      "array_slice()"
    ],
    "answer_en": "session_destroy()",
    "answer_hi": "session_destroy()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which operator concatenates strings in PHP? (Example: ||)",
    "question_hi": "PHP में स्ट्रिंग जोड़ने के लिए कौन-सा operator उपयोग होता है? (||)",
    "options_en": [
      "$_REQUEST",
      "microtime()",
      "||",
      "session_destroy()"
    ],
    "options_hi": [
      "$_REQUEST",
      "microtime()",
      "||",
      "session_destroy()"
    ],
    "answer_en": "||",
    "answer_hi": "||",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which superglobal stores POST data? (Example: $GLOBALS)",
    "question_hi": "POST डेटा किस superglobal में संग्रहीत होता है? ($GLOBALS)",
    "options_en": [
      "mysqli_query()",
      "execute()",
      "final",
      "$GLOBALS"
    ],
    "options_hi": [
      "mysqli_query()",
      "execute()",
      "final",
      "$GLOBALS"
    ],
    "answer_en": "$GLOBALS",
    "answer_hi": "$GLOBALS",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which function checks if a file exists? (Example: opendir())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि फ़ाइल मौजूद है? (opendir())",
    "options_en": [
      "mysqli_real_escape_string()",
      "opendir()",
      ">",
      "file_exists()"
    ],
    "options_hi": [
      "mysqli_real_escape_string()",
      "opendir()",
      ">",
      "file_exists()"
    ],
    "answer_en": "opendir()",
    "answer_hi": "opendir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which function reads an entire file into a string? (Example: array_splice())",
    "question_hi": "कौन-सा फ़ंक्शन पूरी फ़ाइल को एक स्ट्रिंग में पढ़ता है? (array_splice())",
    "options_en": [
      ">=",
      "array_splice()",
      "mkdir()",
      "__FILE__"
    ],
    "options_hi": [
      ">=",
      "array_splice()",
      "mkdir()",
      "__FILE__"
    ],
    "answer_en": "array_splice()",
    "answer_hi": "array_splice()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which function opens a file or URL? (Example: yield)",
    "question_hi": "कौन-सा फ़ंक्शन किसी फ़ाइल या URL को खोलता है? (yield)",
    "options_en": [
      "rmdir()",
      "break",
      "file_get_contents()",
      "yield"
    ],
    "options_hi": [
      "rmdir()",
      "break",
      "file_get_contents()",
      "yield"
    ],
    "answer_en": "yield",
    "answer_hi": "yield",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which function closes an open file pointer? (Example: __DIR__)",
    "question_hi": "कौन-सा फ़ंक्शन खुली फ़ाइल pointer को बंद करता है? (__DIR__)",
    "options_en": [
      "__DIR__",
      "catch",
      "trait",
      "final"
    ],
    "options_hi": [
      "__DIR__",
      "catch",
      "trait",
      "final"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which function writes data to a file? (Example: ksort())",
    "question_hi": "कौन-सा फ़ंक्शन फ़ाइल में डेटा लिखता है? (ksort())",
    "options_en": [
      "ksort()",
      "is_dir()",
      "sort()",
      "const"
    ],
    "options_hi": [
      "ksort()",
      "is_dir()",
      "sort()",
      "const"
    ],
    "answer_en": "ksort()",
    "answer_hi": "ksort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which function splits a string by a delimiter into an array? (Example: array_merge())",
    "question_hi": "कौन-सा फ़ंक्शन किसी delimiter से स्ट्रिंग को array में बाँटता है? (array_merge())",
    "options_en": [
      "public",
      "final",
      "microtime()",
      "array_merge()"
    ],
    "options_hi": [
      "public",
      "final",
      "microtime()",
      "array_merge()"
    ],
    "answer_en": "array_merge()",
    "answer_hi": "array_merge()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which function joins array elements with a glue string? (Example: prepare())",
    "question_hi": "कौन-सा फ़ंक्शन array के elements को एक string से जोड़ता है? (prepare())",
    "options_en": [
      "microtime()",
      "array_unshift()",
      "@",
      "prepare()"
    ],
    "options_hi": [
      "microtime()",
      "array_unshift()",
      "@",
      "prepare()"
    ],
    "answer_en": "prepare()",
    "answer_hi": "prepare()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which function adds one or more elements to the end of an array? (Example: htmlentities())",
    "question_hi": "कौन-सा फ़ंक्शन array के अंत में एक या अधिक तत्व जोड़ता है? (htmlentities())",
    "options_en": [
      "==",
      "htmlentities()",
      "@",
      "array_unshift()"
    ],
    "options_hi": [
      "==",
      "htmlentities()",
      "@",
      "array_unshift()"
    ],
    "answer_en": "htmlentities()",
    "answer_hi": "htmlentities()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which function removes and returns the last element of an array? (Example: microtime())",
    "question_hi": "कौन-सा फ़ंक्शन array का अंतिम तत्व हटाता और लौटाता है? (microtime())",
    "options_en": [
      "microtime()",
      "die()",
      "array_keys()",
      "password_hash()"
    ],
    "options_hi": [
      "microtime()",
      "die()",
      "array_keys()",
      "password_hash()"
    ],
    "answer_en": "microtime()",
    "answer_hi": "microtime()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which function checks if a value exists in an array? (Example: print_r())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि कोई मान array में मौजूद है? (print_r())",
    "options_en": [
      "array_map()",
      "mysqli_fetch_assoc()",
      "substr()",
      "print_r()"
    ],
    "options_hi": [
      "array_map()",
      "mysqli_fetch_assoc()",
      "substr()",
      "print_r()"
    ],
    "answer_en": "print_r()",
    "answer_hi": "print_r()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which function returns the number of elements in an array? (Example: array_map())",
    "question_hi": "कौन-सा फ़ंक्शन array में तत्वों की संख्या देता है? (array_map())",
    "options_en": [
      "is_null()",
      "mysqli_real_escape_string()",
      "array_map()",
      "__FILE__"
    ],
    "options_hi": [
      "is_null()",
      "mysqli_real_escape_string()",
      "array_map()",
      "__FILE__"
    ],
    "answer_en": "array_map()",
    "answer_hi": "array_map()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which keyword defines a function in PHP? (Example: trait)",
    "question_hi": "PHP में फ़ंक्शन को परिभाषित करने के लिए कौन-सा keyword उपयोग होता है? (trait)",
    "options_en": [
      "$GLOBALS",
      "array_unshift()",
      "yield",
      "trait"
    ],
    "options_hi": [
      "$GLOBALS",
      "array_unshift()",
      "yield",
      "trait"
    ],
    "answer_en": "trait",
    "answer_hi": "trait",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which keyword declares a class in PHP? (Example: protected)",
    "question_hi": "PHP में class घोषित करने के लिए कौन-सा keyword उपयोग होता है? (protected)",
    "options_en": [
      "isset",
      "var_dump()",
      "protected",
      "fopen()"
    ],
    "options_hi": [
      "isset",
      "var_dump()",
      "protected",
      "fopen()"
    ],
    "answer_en": "protected",
    "answer_hi": "protected",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which keyword is used to inherit from a parent class? (Example: namespace)",
    "question_hi": "Parent class से inherit करने के लिए कौन-सा keyword उपयोग होता है? (namespace)",
    "options_en": [
      "namespace",
      "array_shift()",
      "execute()",
      "$_SERVER"
    ],
    "options_hi": [
      "namespace",
      "array_shift()",
      "execute()",
      "$_SERVER"
    ],
    "answer_en": "namespace",
    "answer_hi": "namespace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which magic constant returns the full path and filename of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल का पूरा path और filename लौटाता है?",
    "options_en": [
      "interface",
      "strlen()",
      "print_r()",
      "__FILE__"
    ],
    "options_hi": [
      "interface",
      "strlen()",
      "print_r()",
      "__FILE__"
    ],
    "answer_en": "__FILE__",
    "answer_hi": "__FILE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which magic constant returns the directory of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल की directory लौटाता है?",
    "options_en": [
      "time()",
      "require_once()",
      "PDO::__construct()",
      "__DIR__"
    ],
    "options_hi": [
      "time()",
      "require_once()",
      "PDO::__construct()",
      "__DIR__"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which function starts a session in PHP? (Example: array_pop())",
    "question_hi": "PHP में session शुरू करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (array_pop())",
    "options_en": [
      "__construct()",
      "return",
      "password_verify()",
      "array_pop()"
    ],
    "options_hi": [
      "__construct()",
      "return",
      "password_verify()",
      "array_pop()"
    ],
    "answer_en": "array_pop()",
    "answer_hi": "array_pop()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which function destroys a session? (Example: header())",
    "question_hi": "कौन-सा फ़ंक्शन session को नष्ट करता है? (header())",
    "options_en": [
      "@",
      "/",
      "header()",
      "public"
    ],
    "options_hi": [
      "@",
      "/",
      "header()",
      "public"
    ],
    "answer_en": "header()",
    "answer_hi": "header()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which function sets a cookie? (Example: setcookie())",
    "question_hi": "कौन-सा फ़ंक्शन cookie सेट करता है? (setcookie())",
    "options_en": [
      "array_slice()",
      "setcookie()",
      "opendir()",
      "session_destroy()"
    ],
    "options_hi": [
      "array_slice()",
      "setcookie()",
      "opendir()",
      "session_destroy()"
    ],
    "answer_en": "setcookie()",
    "answer_hi": "setcookie()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which function sends a raw HTTP header? (Example: do-while)",
    "question_hi": "कौन-सा फ़ंक्शन raw HTTP header भेजता है? (do-while)",
    "options_en": [
      "do-while",
      "*",
      "$_ENV",
      "array_reduce()"
    ],
    "options_hi": [
      "do-while",
      "*",
      "$_ENV",
      "array_reduce()"
    ],
    "answer_en": "do-while",
    "answer_hi": "do-while",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which function connects to MySQL using mysqli extension? (Example: session_destroy())",
    "question_hi": "mysqli के साथ MySQL से कनेक्ट करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (session_destroy())",
    "options_en": [
      "htmlentities()",
      "session_destroy()",
      "yield",
      "str_replace()"
    ],
    "options_hi": [
      "htmlentities()",
      "session_destroy()",
      "yield",
      "str_replace()"
    ],
    "answer_en": "session_destroy()",
    "answer_hi": "session_destroy()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which PHP extension offers a database abstraction layer (PDO)?",
    "question_hi": "कौन-सा extension database abstraction layer (PDO) प्रदान करता है?",
    "options_en": [
      "PDO",
      "===",
      "microtime()",
      "print"
    ],
    "options_hi": [
      "PDO",
      "===",
      "microtime()",
      "print"
    ],
    "answer_en": "PDO",
    "answer_hi": "PDO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which PDO method prepares a statement for execution?",
    "question_hi": "PDO में किस method से statement prepare किया जाता है?",
    "options_en": [
      "implode()",
      "password_verify()",
      "prepare()",
      "print"
    ],
    "options_hi": [
      "implode()",
      "password_verify()",
      "prepare()",
      "print"
    ],
    "answer_en": "prepare()",
    "answer_hi": "prepare()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which PDO method executes a prepared statement?",
    "question_hi": "PDO में किस method से prepared statement execute किया जाता है?",
    "options_en": [
      "substr()",
      "execute()",
      "array_keys()",
      "array_splice()"
    ],
    "options_hi": [
      "substr()",
      "execute()",
      "array_keys()",
      "array_splice()"
    ],
    "answer_en": "execute()",
    "answer_hi": "execute()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which PDO method begins a transaction?",
    "question_hi": "PDO में transaction शुरू करने के लिए कौन-सा method उपयोग होता है?",
    "options_en": [
      "beginTransaction()",
      "include()",
      "eval()",
      "implode()"
    ],
    "options_hi": [
      "beginTransaction()",
      "include()",
      "eval()",
      "implode()"
    ],
    "answer_en": "beginTransaction()",
    "answer_hi": "beginTransaction()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which function securely hashes passwords?",
    "question_hi": "पासवर्ड को सुरक्षित रूप से hash करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": [
      "yield",
      "password_hash()",
      "finally",
      "require()"
    ],
    "options_hi": [
      "yield",
      "password_hash()",
      "finally",
      "require()"
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which function verifies a password against a hash?",
    "question_hi": "कौन-सा फ़ंक्शन पासवर्ड को hash के खिलाफ सत्यापित करता है?",
    "options_en": [
      "const",
      "password_verify()",
      "$GLOBALS",
      "fread()"
    ],
    "options_hi": [
      "const",
      "password_verify()",
      "$GLOBALS",
      "fread()"
    ],
    "answer_en": "password_verify()",
    "answer_hi": "password_verify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which function returns the type of a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल का प्रकार बताता है?",
    "options_en": [
      "public",
      "beginTransaction()",
      "array_merge()",
      "gettype()"
    ],
    "options_hi": [
      "public",
      "beginTransaction()",
      "array_merge()",
      "gettype()"
    ],
    "answer_en": "gettype()",
    "answer_hi": "gettype()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which function prints human-readable information about a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल की human-readable जानकारी दिखाता है?",
    "options_en": [
      "print_r()",
      "setcookie()",
      "yield",
      "header()"
    ],
    "options_hi": [
      "print_r()",
      "setcookie()",
      "yield",
      "header()"
    ],
    "answer_en": "print_r()",
    "answer_hi": "print_r()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which function dumps information about a variable with type and value?",
    "question_hi": "कौन-सा फ़ंक्शन वैरिएबल के प्रकार और मान सहित जानकारी दिखाता है?",
    "options_en": [
      "foreach",
      "rollBack()",
      "setcookie()",
      "var_dump()"
    ],
    "options_hi": [
      "foreach",
      "rollBack()",
      "setcookie()",
      "var_dump()"
    ],
    "answer_en": "var_dump()",
    "answer_hi": "var_dump()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which construct includes a file and generates a fatal error if missing?",
    "question_hi": "कौन-सा construct फ़ाइल शामिल करता है और यदि फ़ाइल गायब हो तो fatal error देता है?",
    "options_en": [
      "require()",
      "try",
      "date()",
      "static"
    ],
    "options_hi": [
      "require()",
      "try",
      "date()",
      "static"
    ],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which construct includes a file only once?",
    "question_hi": "कौन-सा construct फ़ाइल को केवल एक बार include करता है?",
    "options_en": [
      "include_once()",
      "$_GET",
      "finally",
      "array_shift()"
    ],
    "options_hi": [
      "include_once()",
      "$_GET",
      "finally",
      "array_shift()"
    ],
    "answer_en": "include_once()",
    "answer_hi": "include_once()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which operator suppresses errors in PHP?",
    "question_hi": "PHP में errors suppress करने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": [
      "microtime()",
      "@",
      "array_shift()",
      "array_reduce()"
    ],
    "options_hi": [
      "microtime()",
      "@",
      "array_shift()",
      "array_reduce()"
    ],
    "answer_en": "@",
    "answer_hi": "@",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which operator is the null coalescing operator introduced in PHP 7?",
    "question_hi": "PHP 7 में पेश किया गया null coalescing operator कौन-सा है?",
    "options_en": [
      "catch",
      "is_null()",
      "fread()",
      "??"
    ],
    "options_hi": [
      "catch",
      "is_null()",
      "fread()",
      "??"
    ],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which operator is the spaceship operator for three-way comparison?",
    "question_hi": "तीन-तरफा तुलना के लिए spaceship operator कौन-सा है?",
    "options_en": [
      "!==",
      "$GLOBALS",
      "gettype()",
      "<=>"
    ],
    "options_hi": [
      "!==",
      "$GLOBALS",
      "gettype()",
      "<=>"
    ],
    "answer_en": "<=>",
    "answer_hi": "<=>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which PHP function returns the length of a string? (Example: array_pop())",
    "question_hi": "PHP में स्ट्रिंग की लंबाई किस फ़ंक्शन से मिलती है? (array_pop())",
    "options_en": [
      "try",
      "mysqli_fetch_assoc()",
      "session_destroy()",
      "array_pop()"
    ],
    "options_hi": [
      "try",
      "mysqli_fetch_assoc()",
      "session_destroy()",
      "array_pop()"
    ],
    "answer_en": "array_pop()",
    "answer_hi": "array_pop()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which function finds the position of the first occurrence of a substring? (Example: array_filter())",
    "question_hi": "कौन-सा फ़ंक्शन किसी सबस्ट्रिंग के पहले occurrence की स्थिति देता है? (array_filter())",
    "options_en": [
      "unlink()",
      "__destruct()",
      "array_filter()",
      "<=>"
    ],
    "options_hi": [
      "unlink()",
      "__destruct()",
      "array_filter()",
      "<=>"
    ],
    "answer_en": "array_filter()",
    "answer_hi": "array_filter()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which function returns part of a string? (Example: file_exists())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग का हिस्सा लौटाता है? (file_exists())",
    "options_en": [
      "print",
      "yield",
      "catch",
      "file_exists()"
    ],
    "options_hi": [
      "print",
      "yield",
      "catch",
      "file_exists()"
    ],
    "answer_en": "file_exists()",
    "answer_hi": "file_exists()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which function removes whitespace from both ends of a string? (Example: while)",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग के दोनों सिरों से whitespace हटाता है? (while)",
    "options_en": [
      "while",
      "password_hash()",
      "finally",
      "is_null()"
    ],
    "options_hi": [
      "while",
      "password_hash()",
      "finally",
      "is_null()"
    ],
    "answer_en": "while",
    "answer_hi": "while",
    "attempted": false,
    "selected": ""
  },
];


// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;

// --------------------------- LOAD QUESTION ----------------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

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
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

// --------------------------- MARK ATTEMPT ----------------------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// --------------------------- NEXT / PREV -----------------------------
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

// --------------------------- LANGUAGE CHANGE -------------------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// --------------------------- TIMER -------------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Time Over!");
            submitQuiz();
            return;
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")}:${m
                .toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
}

// --------------------------- SUBMIT QUIZ ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // Calculate time spent
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // Save to localStorage
    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

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

    // Save result data
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // Stop camera stream if active
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }

    // Redirect
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// --------------------------- NAVIGATION ------------------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.background = color;
        circle.textContent = i + 1;
        circle.onclick = () => jumpToQuestion(i);
        nav.appendChild(circle);
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA ----------------------
let videoStream;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.background = "#000";
    container.style.border = "3px solid red";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};