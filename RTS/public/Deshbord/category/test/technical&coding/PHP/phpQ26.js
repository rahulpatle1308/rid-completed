const questions = [
  {
    "num":1,
    "question_en": "Which function dumps information about a variable with type and value?",
    "question_hi": "कौन-सा फ़ंक्शन वैरिएबल के प्रकार और मान सहित जानकारी दिखाता है?",
    "options_en": [
      "array_keys()",
      "finally",
      "isset",
      "var_dump()"
    ],
    "options_hi": [
      "array_keys()",
      "finally",
      "isset",
      "var_dump()"
    ],
    "answer_en": "var_dump()",
    "answer_hi": "var_dump()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "Which construct includes a file and generates a fatal error if missing?",
    "question_hi": "कौन-सा construct फ़ाइल शामिल करता है और यदि फ़ाइल गायब हो तो fatal error देता है?",
    "options_en": [
      "protected",
      "static",
      ">",
      "require()"
    ],
    "options_hi": [
      "protected",
      "static",
      ">",
      "require()"
    ],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "Which construct includes a file only once?",
    "question_hi": "कौन-सा construct फ़ाइल को केवल एक बार include करता है?",
    "options_en": [
      "unlink()",
      "include_once()",
      "do-while",
      "is_file()"
    ],
    "options_hi": [
      "unlink()",
      "include_once()",
      "do-while",
      "is_file()"
    ],
    "answer_en": "include_once()",
    "answer_hi": "include_once()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "Which operator suppresses errors in PHP?",
    "question_hi": "PHP में errors suppress करने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": [
      "function",
      "$_SERVER",
      "implements",
      "@"
    ],
    "options_hi": [
      "function",
      "$_SERVER",
      "implements",
      "@"
    ],
    "answer_en": "@",
    "answer_hi": "@",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "Which operator is the null coalescing operator introduced in PHP 7?",
    "question_hi": "PHP 7 में पेश किया गया null coalescing operator कौन-सा है?",
    "options_en": [
      "const",
      "$_SERVER",
      "??",
      "json_encode()"
    ],
    "options_hi": [
      "const",
      "$_SERVER",
      "??",
      "json_encode()"
    ],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num":6,
    "question_en": "Which operator is the spaceship operator for three-way comparison?",
    "question_hi": "तीन-तरफा तुलना के लिए spaceship operator कौन-सा है?",
    "options_en": [
      "use",
      "<=>",
      "is_dir()",
      "rollBack()"
    ],
    "options_hi": [
      "use",
      "<=>",
      "is_dir()",
      "rollBack()"
    ],
    "answer_en": "<=>",
    "answer_hi": "<=>",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "Which PHP function returns the length of a string? (Example: beginTransaction())",
    "question_hi": "PHP में स्ट्रिंग की लंबाई किस फ़ंक्शन से मिलती है? (beginTransaction())",
    "options_en": [
      "beginTransaction()",
      "password_verify()",
      "array_map()",
      "require()"
    ],
    "options_hi": [
      "beginTransaction()",
      "password_verify()",
      "array_map()",
      "require()"
    ],
    "answer_en": "beginTransaction()",
    "answer_hi": "beginTransaction()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "Which function finds the position of the first occurrence of a substring? (Example: do-while)",
    "question_hi": "कौन-सा फ़ंक्शन किसी सबस्ट्रिंग के पहले occurrence की स्थिति देता है? (do-while)",
    "options_en": [
      "$_FILES",
      "do-while",
      "sort()",
      "array_unshift()"
    ],
    "options_hi": [
      "$_FILES",
      "do-while",
      "sort()",
      "array_unshift()"
    ],
    "answer_en": "do-while",
    "answer_hi": "do-while",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "Which function returns part of a string? (Example: password_hash())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग का हिस्सा लौटाता है? (password_hash())",
    "options_en": [
      "empty",
      "password_hash()",
      "implode()",
      "sort()"
    ],
    "options_hi": [
      "empty",
      "password_hash()",
      "implode()",
      "sort()"
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "Which function removes whitespace from both ends of a string? (Example: isset())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग के दोनों सिरों से whitespace हटाता है? (isset())",
    "options_en": [
      "phpversion()",
      "__LINE__",
      "json_encode()",
      "isset()"
    ],
    "options_hi": [
      "phpversion()",
      "__LINE__",
      "json_encode()",
      "isset()"
    ],
    "answer_en": "isset()",
    "answer_hi": "isset()",
    "attempted": false,
    "selected": ""
  },
  {
    "num":11,
    "question_en": "Which operator concatenates strings in PHP? (Example: >)",
    "question_hi": "PHP में स्ट्रिंग जोड़ने के लिए कौन-सा operator उपयोग होता है? (>)",
    "options_en": [
      ">",
      "__destruct()",
      "rollBack()",
      "interface"
    ],
    "options_hi": [
      ">",
      "__destruct()",
      "rollBack()",
      "interface"
    ],
    "answer_en": ">",
    "answer_hi": ">",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "Which superglobal stores POST data? (Example: $_POST)",
    "question_hi": "POST डेटा किस superglobal में संग्रहीत होता है? ($_POST)",
    "options_en": [
      "mkdir()",
      "unlink()",
      "$_POST",
      "trait"
    ],
    "options_hi": [
      "mkdir()",
      "unlink()",
      "$_POST",
      "trait"
    ],
    "answer_en": "$_POST",
    "answer_hi": "$_POST",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "Which function checks if a file exists? (Example: array_shift())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि फ़ाइल मौजूद है? (array_shift())",
    "options_en": [
      "private",
      "static",
      "array_shift()",
      "substr()"
    ],
    "options_hi": [
      "private",
      "static",
      "array_shift()",
      "substr()"
    ],
    "answer_en": "array_shift()",
    "answer_hi": "array_shift()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 664,
    "question_en": "Which function reads an entire file into a string? (Example: session_start())",
    "question_hi": "कौन-सा फ़ंक्शन पूरी फ़ाइल को एक स्ट्रिंग में पढ़ता है? (session_start())",
    "options_en": [
      "sort()",
      "fclose()",
      "session_start()",
      "trait"
    ],
    "options_hi": [
      "sort()",
      "fclose()",
      "session_start()",
      "trait"
    ],
    "answer_en": "session_start()",
    "answer_hi": "session_start()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 665,
    "question_en": "Which function opens a file or URL? (Example: __construct())",
    "question_hi": "कौन-सा फ़ंक्शन किसी फ़ाइल या URL को खोलता है? (__construct())",
    "options_en": [
      "&&",
      "array_filter()",
      "json_encode()",
      "__construct()"
    ],
    "options_hi": [
      "&&",
      "array_filter()",
      "json_encode()",
      "__construct()"
    ],
    "answer_en": "__construct()",
    "answer_hi": "__construct()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 666,
    "question_en": "Which function closes an open file pointer? (Example: is_file())",
    "question_hi": "कौन-सा फ़ंक्शन खुली फ़ाइल pointer को बंद करता है? (is_file())",
    "options_en": [
      "$_SESSION",
      "is_file()",
      "%",
      "$_ENV"
    ],
    "options_hi": [
      "$_SESSION",
      "is_file()",
      "%",
      "$_ENV"
    ],
    "answer_en": "is_file()",
    "answer_hi": "is_file()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 667,
    "question_en": "Which function writes data to a file? (Example: str_replace())",
    "question_hi": "कौन-सा फ़ंक्शन फ़ाइल में डेटा लिखता है? (str_replace())",
    "options_en": [
      "__LINE__",
      "str_replace()",
      "microtime()",
      "catch"
    ],
    "options_hi": [
      "__LINE__",
      "str_replace()",
      "microtime()",
      "catch"
    ],
    "answer_en": "str_replace()",
    "answer_hi": "str_replace()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 668,
    "question_en": "Which function splits a string by a delimiter into an array? (Example: array_push())",
    "question_hi": "कौन-सा फ़ंक्शन किसी delimiter से स्ट्रिंग को array में बाँटता है? (array_push())",
    "options_en": [
      "strlen()",
      "array_push()",
      "print",
      "substr()"
    ],
    "options_hi": [
      "strlen()",
      "array_push()",
      "print",
      "substr()"
    ],
    "answer_en": "array_push()",
    "answer_hi": "array_push()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 669,
    "question_en": "Which function joins array elements with a glue string? (Example: sort())",
    "question_hi": "कौन-सा फ़ंक्शन array के elements को एक string से जोड़ता है? (sort())",
    "options_en": [
      "+",
      "sort()",
      "setcookie()",
      "PDO::__construct()"
    ],
    "options_hi": [
      "+",
      "sort()",
      "setcookie()",
      "PDO::__construct()"
    ],
    "answer_en": "sort()",
    "answer_hi": "sort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 670,
    "question_en": "Which function adds one or more elements to the end of an array? (Example: print_r())",
    "question_hi": "कौन-सा फ़ंक्शन array के अंत में एक या अधिक तत्व जोड़ता है? (print_r())",
    "options_en": [
      "print_r()",
      "for",
      "trim()",
      "continue"
    ],
    "options_hi": [
      "print_r()",
      "for",
      "trim()",
      "continue"
    ],
    "answer_en": "print_r()",
    "answer_hi": "print_r()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 671,
    "question_en": "Which function removes and returns the last element of an array? (Example: empty())",
    "question_hi": "कौन-सा फ़ंक्शन array का अंतिम तत्व हटाता और लौटाता है? (empty())",
    "options_en": [
      "print",
      "fwrite()",
      "array_search()",
      "empty()"
    ],
    "options_hi": [
      "print",
      "fwrite()",
      "array_search()",
      "empty()"
    ],
    "answer_en": "empty()",
    "answer_hi": "empty()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 672,
    "question_en": "Which function checks if a value exists in an array? (Example: date())",
    "question_hi": "कौन-सा फ़ंक्शन जाँचता है कि कोई मान array में मौजूद है? (date())",
    "options_en": [
      "__LINE__",
      "date()",
      "htmlentities()",
      "array_slice()"
    ],
    "options_hi": [
      "__LINE__",
      "date()",
      "htmlentities()",
      "array_slice()"
    ],
    "answer_en": "date()",
    "answer_hi": "date()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 673,
    "question_en": "Which function returns the number of elements in an array? (Example: mysqli_connect())",
    "question_hi": "कौन-सा फ़ंक्शन array में तत्वों की संख्या देता है? (mysqli_connect())",
    "options_en": [
      "class",
      "mysqli_connect()",
      "beginTransaction()",
      "<=>"
    ],
    "options_hi": [
      "class",
      "mysqli_connect()",
      "beginTransaction()",
      "<=>"
    ],
    "answer_en": "mysqli_connect()",
    "answer_hi": "mysqli_connect()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 674,
    "question_en": "Which keyword defines a function in PHP? (Example: extends)",
    "question_hi": "PHP में फ़ंक्शन को परिभाषित करने के लिए कौन-सा keyword उपयोग होता है? (extends)",
    "options_en": [
      "__DIR__",
      "===",
      "session_start()",
      "extends"
    ],
    "options_hi": [
      "__DIR__",
      "===",
      "session_start()",
      "extends"
    ],
    "answer_en": "extends",
    "answer_hi": "extends",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 675,
    "question_en": "Which keyword declares a class in PHP? (Example: static)",
    "question_hi": "PHP में class घोषित करने के लिए कौन-सा keyword उपयोग होता है? (static)",
    "options_en": [
      "empty()",
      "static",
      "$_ENV",
      "$_GET"
    ],
    "options_hi": [
      "empty()",
      "static",
      "$_ENV",
      "$_GET"
    ],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 676,
    "question_en": "Which keyword is used to inherit from a parent class? (Example: use)",
    "question_hi": "Parent class से inherit करने के लिए कौन-सा keyword उपयोग होता है? (use)",
    "options_en": [
      "catch",
      "asort()",
      "session_destroy()",
      "use"
    ],
    "options_hi": [
      "catch",
      "asort()",
      "session_destroy()",
      "use"
    ],
    "answer_en": "use",
    "answer_hi": "use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 677,
    "question_en": "Which magic constant returns the full path and filename of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल का पूरा path और filename लौटाता है?",
    "options_en": [
      "@",
      "__FILE__",
      "header()",
      "microtime()"
    ],
    "options_hi": [
      "@",
      "__FILE__",
      "header()",
      "microtime()"
    ],
    "answer_en": "__FILE__",
    "answer_hi": "__FILE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 678,
    "question_en": "Which magic constant returns the directory of the current file?",
    "question_hi": "कौन-सा magic constant वर्तमान फ़ाइल की directory लौटाता है?",
    "options_en": [
      "strpos()",
      "private",
      "__DIR__",
      "class"
    ],
    "options_hi": [
      "strpos()",
      "private",
      "__DIR__",
      "class"
    ],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 679,
    "question_en": "Which function starts a session in PHP? (Example: require())",
    "question_hi": "PHP में session शुरू करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (require())",
    "options_en": [
      "<=",
      "require()",
      "session_start()",
      "mysqli_real_escape_string()"
    ],
    "options_hi": [
      "<=",
      "require()",
      "session_start()",
      "mysqli_real_escape_string()"
    ],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 680,
    "question_en": "Which function destroys a session? (Example: array_reduce())",
    "question_hi": "कौन-सा फ़ंक्शन session को नष्ट करता है? (array_reduce())",
    "options_en": [
      "mysqli_query()",
      "array_pop()",
      "array_filter()",
      "array_reduce()"
    ],
    "options_hi": [
      "mysqli_query()",
      "array_pop()",
      "array_filter()",
      "array_reduce()"
    ],
    "answer_en": "array_reduce()",
    "answer_hi": "array_reduce()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 681,
    "question_en": "Which function sets a cookie? (Example: isset())",
    "question_hi": "कौन-सा फ़ंक्शन cookie सेट करता है? (isset())",
    "options_en": [
      "isset()",
      "!",
      "header()",
      "/"
    ],
    "options_hi": [
      "isset()",
      "!",
      "header()",
      "/"
    ],
    "answer_en": "isset()",
    "answer_hi": "isset()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 682,
    "question_en": "Which function sends a raw HTTP header? (Example: define())",
    "question_hi": "कौन-सा फ़ंक्शन raw HTTP header भेजता है? (define())",
    "options_en": [
      "substr()",
      "define()",
      "explode()",
      "rollBack()"
    ],
    "options_hi": [
      "substr()",
      "define()",
      "explode()",
      "rollBack()"
    ],
    "answer_en": "define()",
    "answer_hi": "define()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 683,
    "question_en": "Which function connects to MySQL using mysqli extension? (Example: catch)",
    "question_hi": "mysqli के साथ MySQL से कनेक्ट करने के लिए कौन-सा फ़ंक्शन उपयोग होता है? (catch)",
    "options_en": [
      "catch",
      "substr()",
      "$_ENV",
      "throw"
    ],
    "options_hi": [
      "catch",
      "substr()",
      "$_ENV",
      "throw"
    ],
    "answer_en": "catch",
    "answer_hi": "catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 684,
    "question_en": "Which PHP extension offers a database abstraction layer (PDO)?",
    "question_hi": "कौन-सा extension database abstraction layer (PDO) प्रदान करता है?",
    "options_en": [
      "session_destroy()",
      "PDO",
      "in_array()",
      "is_dir()"
    ],
    "options_hi": [
      "session_destroy()",
      "PDO",
      "in_array()",
      "is_dir()"
    ],
    "answer_en": "PDO",
    "answer_hi": "PDO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 685,
    "question_en": "Which PDO method prepares a statement for execution?",
    "question_hi": "PDO में किस method से statement prepare किया जाता है?",
    "options_en": [
      "trait",
      "__destruct()",
      "prepare()",
      "$_ENV"
    ],
    "options_hi": [
      "trait",
      "__destruct()",
      "prepare()",
      "$_ENV"
    ],
    "answer_en": "prepare()",
    "answer_hi": "prepare()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 686,
    "question_en": "Which PDO method executes a prepared statement?",
    "question_hi": "PDO में किस method से prepared statement execute किया जाता है?",
    "options_en": [
      "sort()",
      "__destruct()",
      "execute()",
      "ksort()"
    ],
    "options_hi": [
      "sort()",
      "__destruct()",
      "execute()",
      "ksort()"
    ],
    "answer_en": "execute()",
    "answer_hi": "execute()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 687,
    "question_en": "Which PDO method begins a transaction?",
    "question_hi": "PDO में transaction शुरू करने के लिए कौन-सा method उपयोग होता है?",
    "options_en": [
      "beginTransaction()",
      "<",
      "protected",
      "execute()"
    ],
    "options_hi": [
      "beginTransaction()",
      "<",
      "protected",
      "execute()"
    ],
    "answer_en": "beginTransaction()",
    "answer_hi": "beginTransaction()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 688,
    "question_en": "Which function securely hashes passwords?",
    "question_hi": "पासवर्ड को सुरक्षित रूप से hash करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?",
    "options_en": [
      "print",
      "explode()",
      "yield",
      "password_hash()"
    ],
    "options_hi": [
      "print",
      "explode()",
      "yield",
      "password_hash()"
    ],
    "answer_en": "password_hash()",
    "answer_hi": "password_hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 689,
    "question_en": "Which function verifies a password against a hash?",
    "question_hi": "कौन-सा फ़ंक्शन पासवर्ड को hash के खिलाफ सत्यापित करता है?",
    "options_en": [
      "password_verify()",
      "fwrite()",
      "beginTransaction()",
      "array_unique()"
    ],
    "options_hi": [
      "password_verify()",
      "fwrite()",
      "beginTransaction()",
      "array_unique()"
    ],
    "answer_en": "password_verify()",
    "answer_hi": "password_verify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 690,
    "question_en": "Which function returns the type of a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल का प्रकार बताता है?",
    "options_en": [
      "||",
      "password_hash()",
      "gettype()",
      "sort()"
    ],
    "options_hi": [
      "||",
      "password_hash()",
      "gettype()",
      "sort()"
    ],
    "answer_en": "gettype()",
    "answer_hi": "gettype()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 691,
    "question_en": "Which function prints human-readable information about a variable?",
    "question_hi": "कौन-सा फ़ंक्शन किसी वैरिएबल की human-readable जानकारी दिखाता है?",
    "options_en": [
      "print_r()",
      "array_reduce()",
      "date()",
      "array_shift()"
    ],
    "options_hi": [
      "print_r()",
      "array_reduce()",
      "date()",
      "array_shift()"
    ],
    "answer_en": "print_r()",
    "answer_hi": "print_r()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 692,
    "question_en": "Which function dumps information about a variable with type and value?",
    "question_hi": "कौन-सा फ़ंक्शन वैरिएबल के प्रकार और मान सहित जानकारी दिखाता है?",
    "options_en": [
      "namespace",
      "password_hash()",
      "var_dump()",
      ">"
    ],
    "options_hi": [
      "namespace",
      "password_hash()",
      "var_dump()",
      ">"
    ],
    "answer_en": "var_dump()",
    "answer_hi": "var_dump()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 693,
    "question_en": "Which construct includes a file and generates a fatal error if missing?",
    "question_hi": "कौन-सा construct फ़ाइल शामिल करता है और यदि फ़ाइल गायब हो तो fatal error देता है?",
    "options_en": [
      "password_verify()",
      "public",
      "__DIR__",
      "require()"
    ],
    "options_hi": [
      "password_verify()",
      "public",
      "__DIR__",
      "require()"
    ],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 694,
    "question_en": "Which construct includes a file only once?",
    "question_hi": "कौन-सा construct फ़ाइल को केवल एक बार include करता है?",
    "options_en": [
      "session_start()",
      "protected",
      "is_dir()",
      "include_once()"
    ],
    "options_hi": [
      "session_start()",
      "protected",
      "is_dir()",
      "include_once()"
    ],
    "answer_en": "include_once()",
    "answer_hi": "include_once()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 695,
    "question_en": "Which operator suppresses errors in PHP?",
    "question_hi": "PHP में errors suppress करने के लिए कौन-सा operator उपयोग होता है?",
    "options_en": [
      "for",
      "password_verify()",
      "$GLOBALS",
      "@"
    ],
    "options_hi": [
      "for",
      "password_verify()",
      "$GLOBALS",
      "@"
    ],
    "answer_en": "@",
    "answer_hi": "@",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 696,
    "question_en": "Which operator is the null coalescing operator introduced in PHP 7?",
    "question_hi": "PHP 7 में पेश किया गया null coalescing operator कौन-सा है?",
    "options_en": [
      "??",
      "beginTransaction()",
      "print_r()",
      "exit()"
    ],
    "options_hi": [
      "??",
      "beginTransaction()",
      "print_r()",
      "exit()"
    ],
    "answer_en": "??",
    "answer_hi": "??",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 697,
    "question_en": "Which operator is the spaceship operator for three-way comparison?",
    "question_hi": "तीन-तरफा तुलना के लिए spaceship operator कौन-सा है?",
    "options_en": [
      "htmlspecialchars()",
      "<=>",
      "require_once()",
      "microtime()"
    ],
    "options_hi": [
      "htmlspecialchars()",
      "<=>",
      "require_once()",
      "microtime()"
    ],
    "answer_en": "<=>",
    "answer_hi": "<=>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 698,
    "question_en": "Which PHP function returns the length of a string? (Example: json_encode())",
    "question_hi": "PHP में स्ट्रिंग की लंबाई किस फ़ंक्शन से मिलती है? (json_encode())",
    "options_en": [
      "yield",
      "+",
      "isset()",
      "json_encode()"
    ],
    "options_hi": [
      "yield",
      "+",
      "isset()",
      "json_encode()"
    ],
    "answer_en": "json_encode()",
    "answer_hi": "json_encode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 699,
    "question_en": "Which function finds the position of the first occurrence of a substring? (Example: phpinfo())",
    "question_hi": "कौन-सा फ़ंक्शन किसी सबस्ट्रिंग के पहले occurrence की स्थिति देता है? (phpinfo())",
    "options_en": [
      "rmdir()",
      "phpinfo()",
      "$_SERVER",
      "ksort()"
    ],
    "options_hi": [
      "rmdir()",
      "phpinfo()",
      "$_SERVER",
      "ksort()"
    ],
    "answer_en": "phpinfo()",
    "answer_hi": "phpinfo()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 700,
    "question_en": "Which function returns part of a string? (Example: microtime())",
    "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग का हिस्सा लौटाता है? (microtime())",
    "options_en": [
      "microtime()",
      "try",
      "array_unique()",
      "unset"
    ],
    "options_hi": [
      "microtime()",
      "try",
      "array_unique()",
      "unset"
    ],
    "answer_en": "microtime()",
    "answer_hi": "microtime()",
    "attempted": false,
    "selected": ""
  },
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