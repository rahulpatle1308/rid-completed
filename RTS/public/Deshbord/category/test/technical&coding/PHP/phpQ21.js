const questions = [
 {
    "num":1,
    "question_en": "Which function starts a session in PHP? (Example: phpversion())",
    "question_hi": "PHP में session शुरू करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (phpversion())",
    "options_en": [
      "<",
      "password_verify()",
      "phpversion()",
      "is_null()"
    ],
    "options_hi": [
      "<",
      "password_verify()",
      "phpversion()",
      "is_null()"
    ],
    "answer_en": "phpversion()",
    "answer_hi": "phpversion()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "Which function destroys a session? (Example: __LINE__)",
    "question_hi": "कौन-सा फ़ंक्शन session को नष्ट करता है? (__LINE__)",
    "options_en": [
      "new",
      "is_null()",
      "__LINE__",
      "while"
    ],
    "options_hi": [
      "new",
      "is_null()",
      "__LINE__",
      "while"
    ],
    "answer_en": "__LINE__",
    "answer_hi": "__LINE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "Which function sets a cookie? (Example: password_hash())",
    "question_hi": "कौन-सा फ़ंक्शन cookie सेट करता है? (password_hash())",
    "options_en": [
      "password_hash()",
      "die()",
      "empty",
      "throw"
    ],
    "options_hi": [
      "password_hash()",
      "die()",
      "empty",
      "throw"
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "Which function sends a raw HTTP header? (Example: count())",
    "question_hi": "कौन-सा फ़ंक्शन raw HTTP header भेजता है? (count())",
    "options_en": [
      "$_FILES",
      "!=",
      "$_SESSION",
      "count()"
    ],
    "options_hi": [
      "$_FILES",
      "!=",
      "$_SESSION",
      "count()"
    ],
    "answer_en": "count()",
    "answer_hi": "count()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "Which function connects to MySQL using mysqli extension? (Example: phpversion())",
    "question_hi": "mysqli के साथ MySQL से कनेक्ट करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (phpversion())",
    "options_en": [
      "commit()",
      "array_map()",
      "gettype()",
      "phpversion()"
    ],
    "options_hi": [
      "commit()",
      "array_map()",
      "gettype()",
      "phpversion()"
    ],
    "answer_en": "phpversion()",
    "answer_hi": "phpversion()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":6,
    "question_en": "Which PHP extension offers a database abstraction layer (PDO)?",
    "question_hi": "कौन-सा extension database abstraction layer (PDO) प्रदान करता है?",
    "options_en": [
      "PDO",
      "array_pop()",
      "print",
      "in_array()"
    ],
    "options_hi": [
      "PDO",
      "array_pop()",
      "print",
      "in_array()"
    ],
    "answer_en": "PDO",
    "answer_hi": "PDO",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "Which PDO method prepares a statement for execution?",
    "question_hi": "PDO में किस method से statement prepare किया जाता है?",
    "options_en": [
      "<=",
      "!=",
      "prepare()",
      "beginTransaction()"
    ],
    "options_hi": [
      "<=",
      "!=",
      "prepare()",
      "beginTransaction()"
    ],
    "answer_en": "prepare()",
    "answer_hi": "prepare()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "Which PDO method executes a prepared statement?",
    "question_hi": "PDO में किस method से prepared statement execute किया जाता है?",
    "options_en": [
      "__DIR__",
      "==",
      "$_GET",
      "execute()"
    ],
    "options_hi": [
      "__DIR__",
      "==",
      "$_GET",
      "execute()"
    ],
    "answer_en": "execute()",
    "answer_hi": "execute()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "Which PDO method begins a transaction?",
    "question_hi": "PDO में transaction शुरू करने के लिए कौन-सा method उपयोग होता है?",
    "options_en": [
      "fclose()",
      "beginTransaction()",
      "!==",
      "is_null()"
    ],
    "options_hi": [
      "fclose()",
      "beginTransaction()",
      "!==",
      "is_null()"
    ],
    "answer_en": "beginTransaction()",
    "answer_hi": "beginTransaction()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "Which function securely hashes passwords?",
    "question_hi": "पासवर्ड को सुरक्षित रूप से hash करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": [
      "password_hash()",
      "setcookie()",
      "__construct()",
      "phpinfo()"
    ],
    "options_hi": [
      "password_hash()",
      "setcookie()",
      "__construct()",
      "phpinfo()"
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":11,
    "question_en": "Which function verifies a password against a hash?",
    "question_hi": "कौन-सा फ़ंक्शन पासवर्ड को hash के खिलाफ सत्यापित करता है?",
    "options_en": [
      "exit()",
      "yield",
      "$GLOBALS",
      "password_verify()"
    ],
    "options_hi": [
      "exit()",
      "yield",
      "$GLOBALS",
      "password_verify()"
    ],
    "answer_en": "password_verify()",
    "answer_hi": "password_verify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "Which function returns the type of a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल का प्रकार बताता है?",
    "options_en": [
      "gettype()",
      "json_encode()",
      "while",
      "+"
    ],
    "options_hi": [
      "gettype()",
      "json_encode()",
      "while",
      "+"
    ],
    "answer_en": "gettype()",
    "answer_hi": "gettype()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "Which function prints human-readable information about a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल की human-readable जानकारी दिखाता है?",
    "options_en": [
      "$_COOKIE",
      "explode()",
      "print_r()",
      "eval()"
    ],
    "options_hi": [
      "$_COOKIE",
      "explode()",
      "print_r()",
      "eval()"
    ],
    "answer_en": "print_r()",
    "answer_hi": "print_r()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "Which function dumps information about a variable with type and value?",
    "question_hi": "कौन-सा फ़ंक्शन वैरिएबल के प्रकार और मान सहित जानकारी दिखाता है?",
    "options_en": [
      "catch",
      "%",
      "var_dump()",
      "!"
    ],
    "options_hi": [
      "catch",
      "%",
      "var_dump()",
      "!"
    ],
    "answer_en": "var_dump()",
    "answer_hi": "var_dump()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
    "question_en": "Which construct includes a file and generates a fatal error if missing?",
    "question_hi": "कौन-सा construct फ़ाइल शामिल करता है और यदि फ़ाइल गायब हो तो fatal error देता है?",
    "options_en": [
      "catch",
      "require()",
      "prepare()",
      "unlink()"
    ],
    "options_hi": [
      "catch",
      "require()",
      "prepare()",
      "unlink()"
    ],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":16,
    "question_en": "Which construct includes a file only once?",
    "question_hi": "कौन-सा construct फ़ाइल को केवल एक बार include करता है?",
    "options_en": [
      "&&",
      "explode()",
      "include_once()",
      "use"
    ],
    "options_hi": [
      "&&",
      "explode()",
      "include_once()",
      "use"
    ],
    "answer_en": "include_once()",
    "answer_hi": "include_once()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "Which operator suppresses errors in PHP?",
    "question_hi": "PHP में errors suppress करने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": [
      "__LINE__",
      "@",
      "<=>",
      "yield"
    ],
    "options_hi": [
      "__LINE__",
      "@",
      "<=>",
      "yield"
    ],
    "answer_en": "@",
    "answer_hi": "@",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "Which operator is the null coalescing operator introduced in PHP 7?",
    "question_hi": "PHP 7 में पेश किया गया null coalescing operator कौन-सा है?",
    "options_en": [
      "??",
      "eval()",
      "$_ENV",
      "fopen()"
    ],
    "options_hi": [
      "??",
      "eval()",
      "$_ENV",
      "fopen()"
    ],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "Which operator is the spaceship operator for three-way comparison?",
    "question_hi": "तीन-तरफा तुलना के लिए spaceship operator कौन-सा है?",
    "options_en": [
      "<",
      "strlen()",
      "print_r()",
      "<=>"
    ],
    "options_hi": [
      "<",
      "strlen()",
      "print_r()",
      "<=>"
    ],
    "answer_en": "<=>",
    "answer_hi": "<=>",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "Which PHP function returns the length of a string? (Example: exit())",
    "question_hi": "PHP में स्ट्रिंग की लंबाई किस फ़ंक्शन से मिलती है? (exit())",
    "options_en": [
      "exit()",
      "array_map()",
      "*",
      "trim()"
    ],
    "options_hi": [
      "exit()",
      "array_map()",
      "*",
      "trim()"
    ],
    "answer_en": "exit()",
    "answer_hi": "exit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":21,
    "question_en": "Which function finds the position of the first occurrence of a substring? (Example: microtime())",
    "question_hi": "कौन-सा फ़ंक्शन किसी सबस्ट्रिंग के पहले occurrence की स्थिति देता है? (microtime())",
    "options_en": [
      "!=",
      "file_exists()",
      "microtime()",
      "trim()"
    ],
    "options_hi": [
      "!=",
      "file_exists()",
      "microtime()",
      "trim()"
    ],
    "answer_en": "microtime()",
    "answer_hi": "microtime()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
    "question_en": "Which function returns part of a string? (Example: json_decode())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग का हिस्सा लौटाता है? (json_decode())",
    "options_en": [
      "private",
      "+",
      "password_verify()",
      "json_decode()"
    ],
    "options_hi": [
      "private",
      "+",
      "password_verify()",
      "json_decode()"
    ],
    "answer_en": "json_decode()",
    "answer_hi": "json_decode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "Which function removes whitespace from both ends of a string? (Example: die())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग के दोनों सिरों से whitespace हटाता है? (die())",
    "options_en": [
      "try",
      "str_replace()",
      "die()",
      "__destruct()"
    ],
    "options_hi": [
      "try",
      "str_replace()",
      "die()",
      "__destruct()"
    ],
    "answer_en": "die()",
    "answer_hi": "die()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "Which operator concatenates strings in PHP? (Example: !==)",
    "question_hi": "PHP में स्ट्रिंग जोड़ने के लिए कौन-सा operator उपयोग होता है? (!==)",
    "options_en": [
      "$_SESSION",
      "!==",
      "array_pop()",
      "mysqli_fetch_assoc()"
    ],
    "options_hi": [
      "$_SESSION",
      "!==",
      "array_pop()",
      "mysqli_fetch_assoc()"
    ],
    "answer_en": "!==",
    "answer_hi": "!==",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
    "question_en": "Which superglobal stores POST data? (Example: $_FILES)",
    "question_hi": "POST डेटा किस superglobal में संग्रहीत होता है? ($_FILES)",
    "options_en": [
      "$_FILES",
      "readdir()",
      "array_keys()",
      "$_SERVER"
    ],
    "options_hi": [
      "$_FILES",
      "readdir()",
      "array_keys()",
      "$_SERVER"
    ],
    "answer_en": "$_FILES",
    "answer_hi": "$_FILES",
    "attempted": false,
    "selected": ""
  },
  {
    "num":26,
    "question_en": "Which function checks if a file exists? (Example: commit())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि फ़ाइल मौजूद है? (commit())",
    "options_en": [
      "microtime()",
      "finally",
      "$_SESSION",
      "commit()"
    ],
    "options_hi": [
      "microtime()",
      "finally",
      "$_SESSION",
      "commit()"
    ],
    "answer_en": "commit()",
    "answer_hi": "commit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":27,
    "question_en": "Which function reads an entire file into a string? (Example: throw)",
    "question_hi": "कौन-सा फ़ंक्शन पूरी फ़ाइल को एक स्ट्रिंग में पढ़ता है? (throw)",
    "options_en": [
      "yield",
      "password_verify()",
      "catch",
      "throw"
    ],
    "options_hi": [
      "yield",
      "password_verify()",
      "catch",
      "throw"
    ],
    "answer_en": "throw",
    "answer_hi": "throw",
    "attempted": false,
    "selected": ""
  },
  {
    "num":28,
    "question_en": "Which function opens a file or URL? (Example: is_null())",
    "question_hi": "कौन-सा फ़ंक्शन किसी फ़ाइल या URL को खोलता है? (is_null())",
    "options_en": [
      "$GLOBALS",
      "htmlentities()",
      "file_get_contents()",
      "is_null()"
    ],
    "options_hi": [
      "$GLOBALS",
      "htmlentities()",
      "file_get_contents()",
      "is_null()"
    ],
    "answer_en": "is_null()",
    "answer_hi": "is_null()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":29,
    "question_en": "Which function closes an open file pointer? (Example: count())",
    "question_hi": "कौन-सा फ़ंक्शन खुली फ़ाइल pointer को बंद करता है? (count())",
    "options_en": [
      "fread()",
      "define()",
      "@",
      "count()"
    ],
    "options_hi": [
      "fread()",
      "define()",
      "@",
      "count()"
    ],
    "answer_en": "count()",
    "answer_hi": "count()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "Which function writes data to a file? (Example: array_keys())",
    "question_hi": "कौन-सा फ़ंक्शन फ़ाइल में डेटा लिखता है? (array_keys())",
    "options_en": [
      "new",
      "array_keys()",
      "throw",
      "readdir()"
    ],
    "options_hi": [
      "new",
      "array_keys()",
      "throw",
      "readdir()"
    ],
    "answer_en": "array_keys()",
    "answer_hi": "array_keys()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":31,
    "question_en": "Which function splits a string by a delimiter into an array? (Example: readdir())",
    "question_hi": "कौन-सा फ़ंक्शन किसी delimiter से स्ट्रिंग को array में बाँटता है? (readdir())",
    "options_en": [
      "readdir()",
      "require_once()",
      "try",
      "array_splice()"
    ],
    "options_hi": [
      "readdir()",
      "require_once()",
      "try",
      "array_splice()"
    ],
    "answer_en": "readdir()",
    "answer_hi": "readdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":32,
    "question_en": "Which function joins array elements with a glue string? (Example: array_shift())",
    "question_hi": "कौन-सा फ़ंक्शन array के elements को एक string से जोड़ता है? (array_shift())",
    "options_en": [
      "time()",
      "public",
      "yield",
      "array_shift()"
    ],
    "options_hi": [
      "time()",
      "public",
      "yield",
      "array_shift()"
    ],
    "answer_en": "array_shift()",
    "answer_hi": "array_shift()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":33,
    "question_en": "Which function adds one or more elements to the end of an array? (Example: array_map())",
    "question_hi": "कौन-सा फ़ंक्शन array के अंत में एक या अधिक तत्व जोड़ता है? (array_map())",
    "options_en": [
      "closedir()",
      "array_map()",
      "array_keys()",
      "use"
    ],
    "options_hi": [
      "closedir()",
      "array_map()",
      "array_keys()",
      "use"
    ],
    "answer_en": "array_map()",
    "answer_hi": "array_map()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "Which function removes and returns the last element of an array? (Example: date())",
    "question_hi": "कौन-सा फ़ंक्शन array का अंतिम तत्व हटाता और लौटाता है? (date())",
    "options_en": [
      "array_values()",
      "$_POST",
      "interface",
      "date()"
    ],
    "options_hi": [
      "array_values()",
      "$_POST",
      "interface",
      "date()"
    ],
    "answer_en": "date()",
    "answer_hi": "date()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":35,
    "question_en": "Which function checks if a value exists in an array? (Example: PDO::__construct())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि कोई मान array में मौजूद है? (PDO::__construct())",
    "options_en": [
      "gettype()",
      "var_dump()",
      "catch",
      "PDO::__construct()"
    ],
    "options_hi": [
      "gettype()",
      "var_dump()",
      "catch",
      "PDO::__construct()"
    ],
    "answer_en": "PDO::__construct()",
    "answer_hi": "PDO::__construct()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "Which function returns the number of elements in an array? (Example: strpos())",
    "question_hi": "कौन-सा फ़ंक्शन array में तत्वों की संख्या देता है? (strpos())",
    "options_en": [
      "strpos()",
      "password_verify()",
      "mysqli_fetch_assoc()",
      "$_GET"
    ],
    "options_hi": [
      "strpos()",
      "password_verify()",
      "mysqli_fetch_assoc()",
      "$_GET"
    ],
    "answer_en": "strpos()",
    "answer_hi": "strpos()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":37,
    "question_en": "Which keyword defines a function in PHP? (Example: try)",
    "question_hi": "PHP में फ़ंक्शन को परिभाषित करने के लिए कौन-सा keyword उपयोग होता है? (try)",
    "options_en": [
      "*",
      "unlink()",
      "try",
      "const"
    ],
    "options_hi": [
      "*",
      "unlink()",
      "try",
      "const"
    ],
    "answer_en": "try",
    "answer_hi": "try",
    "attempted": false,
    "selected": ""
  },
  {
    "num":38,
    "question_en": "Which keyword declares a class in PHP? (Example: namespace)",
    "question_hi": "PHP में class घोषित करने के लिए कौन-सा keyword उपयोग होता है? (namespace)",
    "options_en": [
      "while",
      "!=",
      "strpos()",
      "namespace"
    ],
    "options_hi": [
      "while",
      "!=",
      "strpos()",
      "namespace"
    ],
    "answer_en": "namespace",
    "answer_hi": "namespace",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "Which keyword is used to inherit from a parent class? (Example: extends)",
    "question_hi": "Parent class से inherit करने के लिए कौन-सा keyword उपयोग होता है? (extends)",
    "options_en": [
      "extends",
      "fwrite()",
      "$_POST",
      "json_encode()"
    ],
    "options_hi": [
      "extends",
      "fwrite()",
      "$_POST",
      "json_encode()"
    ],
    "answer_en": "extends",
    "answer_hi": "extends",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "Which magic constant returns the full path and filename of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल का पूरा path और filename लौटाता है?",
    "options_en": [
      "trim()",
      "fclose()",
      "phpinfo()",
      "__FILE__"
    ],
    "options_hi": [
      "trim()",
      "fclose()",
      "phpinfo()",
      "__FILE__"
    ],
    "answer_en": "__FILE__",
    "answer_hi": "__FILE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num":41,
    "question_en": "Which magic constant returns the directory of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल की directory लौटाता है?",
    "options_en": [
      "htmlspecialchars()",
      "private",
      "__DIR__",
      "const"
    ],
    "options_hi": [
      "htmlspecialchars()",
      "private",
      "__DIR__",
      "const"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num":42,
    "question_en": "Which function starts a session in PHP? (Example: __construct())",
    "question_hi": "PHP में session शुरू करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (__construct())",
    "options_en": [
      "trait",
      "$GLOBALS",
      "__construct()",
      "array_reduce()"
    ],
    "options_hi": [
      "trait",
      "$GLOBALS",
      "__construct()",
      "array_reduce()"
    ],
    "answer_en": "__construct()",
    "answer_hi": "__construct()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
    "question_en": "Which function destroys a session? (Example: eval())",
    "question_hi": "कौन-सा फ़ंक्शन session को नष्ट करता है? (eval())",
    "options_en": [
      "json_decode()",
      "htmlspecialchars()",
      "interface",
      "eval()"
    ],
    "options_hi": [
      "json_decode()",
      "htmlspecialchars()",
      "interface",
      "eval()"
    ],
    "answer_en": "eval()",
    "answer_hi": "eval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":44,
    "question_en": "Which function sets a cookie? (Example: htmlentities())",
    "question_hi": "कौन-सा फ़ंक्शन cookie सेट करता है? (htmlentities())",
    "options_en": [
      "||",
      "file_get_contents()",
      "htmlentities()",
      "global"
    ],
    "options_hi": [
      "||",
      "file_get_contents()",
      "htmlentities()",
      "global"
    ],
    "answer_en": "htmlentities()",
    "answer_hi": "htmlentities()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
    "question_en": "Which function sends a raw HTTP header? (Example: array_search())",
    "question_hi": "कौन-सा फ़ंक्शन raw HTTP header भेजता है? (array_search())",
    "options_en": [
      "$_COOKIE",
      "array_search()",
      "fopen()",
      "isset"
    ],
    "options_hi": [
      "$_COOKIE",
      "array_search()",
      "fopen()",
      "isset"
    ],
    "answer_en": "array_search()",
    "answer_hi": "array_search()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":46,
    "question_en": "Which function connects to MySQL using mysqli extension? (Example: file_put_contents())",
    "question_hi": "mysqli के साथ MySQL से कनेक्ट करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (file_put_contents())",
    "options_en": [
      "file_put_contents()",
      "$_SESSION",
      "is_dir()",
      "unlink()"
    ],
    "options_hi": [
      "file_put_contents()",
      "$_SESSION",
      "is_dir()",
      "unlink()"
    ],
    "answer_en": "file_put_contents()",
    "answer_hi": "file_put_contents()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":47,
    "question_en": "Which PHP extension offers a database abstraction layer (PDO)?",
    "question_hi": "कौन-सा extension database abstraction layer (PDO) प्रदान करता है?",
    "options_en": [
      "PDO",
      "<=",
      "/",
      "@"
    ],
    "options_hi": [
      "PDO",
      "<=",
      "/",
      "@"
    ],
    "answer_en": "PDO",
    "answer_hi": "PDO",
    "attempted": false,
    "selected": ""
  },
  {
    "num":48,
    "question_en": "Which PDO method prepares a statement for execution?",
    "question_hi": "PDO में किस method से statement prepare किया जाता है?",
    "options_en": [
      "prepare()",
      "<=",
      "||",
      "mysqli_connect()"
    ],
    "options_hi": [
      "prepare()",
      "<=",
      "||",
      "mysqli_connect()"
    ],
    "answer_en": "prepare()",
    "answer_hi": "prepare()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "Which PDO method executes a prepared statement?",
    "question_hi": "PDO में किस method से prepared statement execute किया जाता है?",
    "options_en": [
      "readdir()",
      "$_POST",
      "class",
      "execute()"
    ],
    "options_hi": [
      "readdir()",
      "$_POST",
      "class",
      "execute()"
    ],
    "answer_en": "execute()",
    "answer_hi": "execute()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "Which PDO method begins a transaction?",
    "question_hi": "PDO में transaction शुरू करने के लिए कौन-सा method उपयोग होता है?",
    "options_en": [
      "unset",
      "beginTransaction()",
      "eval()",
      "session_start()"
    ],
    "options_hi": [
      "unset",
      "beginTransaction()",
      "eval()",
      "session_start()"
    ],
    "answer_en": "beginTransaction()",
    "answer_hi": "beginTransaction()",
    "attempted": false,
    "selected": ""
  },
];



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