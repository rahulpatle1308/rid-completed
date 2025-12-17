const questions = [
    {
        "num": 1,
        "question_en": "What is the output of print([i for i in filter(lambda x: x % 2, range(10))])?",
        "question_hi": "print([i for i in filter(lambda x: x % 2, range(10))]) का आउटपुट क्या होगा?",
        "options_en": ["[1, 3, 5, 7, 9]", "[0, 2, 4, 6, 8]", "[1, 2, 3, 4, 5]", "Error"],
        "options_hi": ["[1, 3, 5, 7, 9]", "[0, 2, 4, 6, 8]", "[1, 2, 3, 4, 5]", "त्रुटि"],
        "answer_en": "[1, 3, 5, 7, 9]",
        "answer_hi": "[1, 3, 5, 7, 9]"
    },
    {
        "num": 2,
        "question_en": "What does print(eval('2 ** 3 ** 2')) output?",
        "question_hi": "print(eval('2 ** 3 ** 2')) का आउटपुट क्या होगा?",
        "options_en": ["512", "64", "256", "Error"],
        "options_hi": ["512", "64", "256", "त्रुटि"],
        "answer_en": "512",
        "answer_hi": "512"
    },
    {
        "num": 3,
        "question_en": "What is the output of print({True: 'yes', 1: 'no', 1.0: 'maybe'})?",
        "question_hi": "print({True: 'yes', 1: 'no', 1.0: 'maybe'}) का आउटपुट क्या होगा?",
        "options_en": ["{True: 'maybe'}", "{True: 'yes', 1: 'no', 1.0: 'maybe'}", "{1: 'maybe'}", "Error"],
        "options_hi": ["{True: 'maybe'}", "{True: 'yes', 1: 'no', 1.0: 'maybe'}", "{1: 'maybe'}", "त्रुटि"],
        "answer_en": "{True: 'maybe'}",
        "answer_hi": "{True: 'maybe'}"
    },
    {
        "num": 4,
        "question_en": "What does print(0.1 + 0.2 == 0.3) output?",
        "question_hi": "print(0.1 + 0.2 == 0.3) का आउटपुट क्या होगा?",
        "options_en": ["False", "True", "Error", "None"],
        "options_hi": ["False", "True", "त्रुटि", "None"],
        "answer_en": "False",
        "answer_hi": "False"
    },
    {
        "num": 5,
        "question_en": "What is the output of print([x**2 for x in range(5) if x % 2 == 0])?",
        "question_hi": "print([x**2 for x in range(5) if x % 2 == 0]) का आउटपुट क्या होगा?",
        "options_en": ["[0, 4, 16]", "[0, 1, 4, 9, 16]", "[0, 4]", "[1, 9]"],
        "options_hi": ["[0, 4, 16]", "[0, 1, 4, 9, 16]", "[0, 4]", "[1, 9]"],
        "answer_en": "[0, 4, 16]",
        "answer_hi": "[0, 4, 16]"
    },
    {
        "num": 6,
        "question_en": "What does print(''.join(reversed('hello'))) output?",
        "question_hi": "print(''.join(reversed('hello'))) का आउटपुट क्या होगा?",
        "options_en": ["olleh", "hello", "h e l l o", "Error"],
        "options_hi": ["olleh", "hello", "h e l l o", "त्रुटि"],
        "answer_en": "olleh",
        "answer_hi": "olleh"
    },
    {
        "num": 7,
        "question_en": "What is the output of print(all([]))?",
        "question_hi": "print(all([])) का आउटपुट क्या होगा?",
        "options_en": ["True", "False", "Error", "None"],
        "options_hi": ["True", "False", "त्रुटि", "None"],
        "answer_en": "True",
        "answer_hi": "True"
    },
    {
        "num": 8,
        "question_en": "What does print(any([])) output?",
        "question_hi": "print(any([])) का आउटपुट क्या होगा?",
        "options_en": ["False", "True", "Error", "None"],
        "options_hi": ["False", "True", "त्रुटि", "None"],
        "answer_en": "False",
        "answer_hi": "False"
    },
    {
        "num": 9,
        "question_en": "What is the output of print([i for i in map(lambda x: x*2, [1,2,3])])?",
        "question_hi": "print([i for i in map(lambda x: x*2, [1,2,3])]) का आउटपुट क्या होगा?",
        "options_en": ["[2, 4, 6]", "[1, 2, 3]", "[1, 4, 9]", "Error"],
        "options_hi": ["[2, 4, 6]", "[1, 2, 3]", "[1, 4, 9]", "त्रुटि"],
        "answer_en": "[2, 4, 6]",
        "answer_hi": "[2, 4, 6]"
    },
    {
        "num": 10,
        "question_en": "What does print(bool('False')) output?",
        "question_hi": "print(bool('False')) का आउटपुट क्या होगा?",
        "options_en": ["True", "False", "Error", "None"],
        "options_hi": ["True", "False", "त्रुटि", "None"],
        "answer_en": "True",
        "answer_hi": "True"
    },
    {
        "num": 11,
        "question_en": "What is the output of print(chr(97))?",
        "question_hi": "print(chr(97)) का आउटपुट क्या होगा?",
        "options_en": ["a", "A", "97", "Error"],
        "options_hi": ["a", "A", "97", "त्रुटि"],
        "answer_en": "a",
        "answer_hi": "a"
    },
    {
        "num": 12,
        "question_en": "What does print(divmod(10, 3)) output?",
        "question_hi": "print(divmod(10, 3)) का आउटपुट क्या होगा?",
        "options_en": ["(3, 1)", "(1, 3)", "(3, 3)", "Error"],
        "options_hi": ["(3, 1)", "(1, 3)", "(3, 3)", "त्रुटि"],
        "answer_en": "(3, 1)",
        "answer_hi": "(3, 1)"
    },
    {
        "num": 13,
        "question_en": "What is the output of print(enumerate(['a', 'b', 'c']))?",
        "question_hi": "print(enumerate(['a', 'b', 'c'])) का आउटपुट क्या होगा?",
        "options_en": ["<enumerate object>", "[(0, 'a'), (1, 'b'), (2, 'c')]", "['a', 'b', 'c']", "Error"],
        "options_hi": ["<enumerate object>", "[(0, 'a'), (1, 'b'), (2, 'c')]", "['a', 'b', 'c']", "त्रुटि"],
        "answer_en": "<enumerate object>",
        "answer_hi": "<enumerate object>"
    },
    {
        "num": 14,
        "question_en": "What does print(float('inf')) output?",
        "question_hi": "print(float('inf')) का आउटपुट क्या होगा?",
        "options_en": ["inf", "0.0", "Error", "None"],
        "options_hi": ["inf", "0.0", "त्रुटि", "None"],
        "answer_en": "inf",
        "answer_hi": "inf"
    },
    {
        "num": 15,
        "question_en": "What is the output of print(hash('hello'))?",
        "question_hi": "print(hash('hello')) का आउटपुट क्या होगा?",
        "options_en": ["A large integer", "hello", "Error", "None"],
        "options_hi": ["एक बड़ा इंटीजर", "hello", "त्रुटि", "None"],
        "answer_en": "A large integer",
        "answer_hi": "एक बड़ा इंटीजर"
    },
    {
        "num": 16,
        "question_en": "What does print(int('1010', 2)) output?",
        "question_hi": "print(int('1010', 2)) का आउटपुट क्या होगा?",
        "options_en": ["10", "1010", "20", "Error"],
        "options_hi": ["10", "1010", "20", "त्रुटि"],
        "answer_en": "10",
        "answer_hi": "10"
    },
    {
        "num": 17,
        "question_en": "What is the output of print(isinstance(True, int))?",
        "question_hi": "print(isinstance(True, int)) का आउटपुट क्या होगा?",
        "options_en": ["True", "False", "Error", "None"],
        "options_hi": ["True", "False", "त्रुटि", "None"],
        "answer_en": "True",
        "answer_hi": "True"
    },
    {
        "num": 18,
        "question_en": "What does print(len({'a': 1, 'b': 2}.keys())) output?",
        "question_hi": "print(len({'a': 1, 'b': 2}.keys())) का आउटपुट क्या होगा?",
        "options_en": ["2", "1", "0", "Error"],
        "options_hi": ["2", "1", "0", "त्रुटि"],
        "answer_en": "2",
        "answer_hi": "2"
    },
    {
        "num": 19,
        "question_en": "What is the output of print(max([1, 2, 3], key=lambda x: -x))?",
        "question_hi": "print(max([1, 2, 3], key=lambda x: -x)) का आउटपुट क्या होगा?",
        "options_en": ["1", "3", "2", "Error"],
        "options_hi": ["1", "3", "2", "त्रुटि"],
        "answer_en": "1",
        "answer_hi": "1"
    },
    {
        "num": 20,
        "question_en": "What does print(min([], default=0)) output?",
        "question_hi": "print(min([], default=0)) का आउटपुट क्या होगा?",
        "options_en": ["0", "Error", "None", "[]"],
        "options_hi": ["0", "त्रुटि", "None", "[]"],
        "answer_en": "0",
        "answer_hi": "0"
    },
    {
        "num": 21,
        "question_en": "What is the output of print(oct(0o10))?",
        "question_hi": "print(oct(0o10)) का आउटपुट क्या होगा?",
        "options_en": ["0o10", "10", "8", "Error"],
        "options_hi": ["0o10", "10", "8", "त्रुटि"],
        "answer_en": "0o10",
        "answer_hi": "0o10"
    },
    {
        "num": 22,
        "question_en": "What does print(ord('A')) output?",
        "question_hi": "print(ord('A')) का आउटपुट क्या होगा?",
        "options_en": ["65", "97", "A", "Error"],
        "options_hi": ["65", "97", "A", "त्रुटि"],
        "answer_en": "65",
        "answer_hi": "65"
    },
    {
        "num": 23,
        "question_en": "What is the output of print(pow(2, 3, 3))?",
        "question_hi": "print(pow(2, 3, 3)) का आउटपुट क्या होगा?",
        "options_en": ["2", "8", "1", "Error"],
        "options_hi": ["2", "8", "1", "त्रुटि"],
        "answer_en": "2",
        "answer_hi": "2"
    },
    {
        "num": 24,
        "question_en": "What does print(repr('hello\nworld')) output?",
        "question_hi": "print(repr('hello\nworld')) का आउटपुट क्या होगा?",
        "options_en": ["'hello\\nworld'", "hello world", "hello\nworld", "Error"],
        "options_hi": ["'hello\\nworld'", "hello world", "hello\nworld", "त्रुटि"],
        "answer_en": "'hello\\nworld'",
        "answer_hi": "'hello\\nworld'"
    },
    {
        "num": 25,
        "question_en": "What is the output of print(round(2.5))?",
        "question_hi": "print(round(2.5)) का आउटपुट क्या होगा?",
        "options_en": ["2", "3", "2.5", "Error"],
        "options_hi": ["2", "3", "2.5", "त्रुटि"],
        "answer_en": "2",
        "answer_hi": "2"
    },
    {
        "num": 26,
        "question_en": "What does print(sorted('cba')) output?",
        "question_hi": "print(sorted('cba')) का आउटपुट क्या होगा?",
        "options_en": ["['a', 'b', 'c']", "['c', 'b', 'a']", "cba", "Error"],
        "options_hi": ["['a', 'b', 'c']", "['c', 'b', 'a']", "cba", "त्रुटि"],
        "answer_en": "['a', 'b', 'c']",
        "answer_hi": "['a', 'b', 'c']"
    },
    {
        "num": 27,
        "question_en": "What is the output of print(str(123))?",
        "question_hi": "print(str(123)) का आउटपुट क्या होगा?",
        "options_en": ["123", "123", "'123'", "Error"],
        "options_hi": ["123", "123", "'123'", "त्रुटि"],
        "answer_en": "123",
        "answer_hi": "123"
    },
    {
        "num": 28,
        "question_en": "What does print(sum([1, 2, 3], 10)) output?",
        "question_hi": "print(sum([1, 2, 3], 10)) का आउटपुट क्या होगा?",
        "options_en": ["16", "6", "15", "Error"],
        "options_hi": ["16", "6", "15", "त्रुटि"],
        "answer_en": "16",
        "answer_hi": "16"
    },
    {
        "num": 29,
        "question_en": "What is the output of print(type(1).__name__)?",
        "question_hi": "print(type(1).__name__) का आउटपुट क्या होगा?",
        "options_en": ["int", "type", "1", "Error"],
        "options_hi": ["int", "type", "1", "त्रुटि"],
        "answer_en": "int",
        "answer_hi": "int"
    },
    {
        "num": 30,
        "question_en": "What does print(zip([1, 2], ['a', 'b'])) output?",
        "question_hi": "print(zip([1, 2], ['a', 'b'])) का आउटपुट क्या होगा?",
        "options_en": ["<zip object>", "[(1, 'a'), (2, 'b')]", "[1, 2, 'a', 'b']", "Error"],
        "options_hi": ["<zip object>", "[(1, 'a'), (2, 'b')]", "[1, 2, 'a', 'b']", "त्रुटि"],
        "answer_en": "<zip object>",
        "answer_hi": "<zip object>"
    },
    {
        "num": 31,
        "question_en": "What is the output of print(__name__)?",
        "question_hi": "print(__name__) का आउटपुट क्या होगा?",
        "options_en": ["__main__", "main", "name", "Error"],
        "options_hi": ["__main__", "main", "name", "त्रुटि"],
        "answer_en": "__main__",
        "answer_hi": "__main__"
    },
    {
        "num": 32,
        "question_en": "What does print(bool([])) output?",
        "question_hi": "print(bool([])) का आउटपुट क्या होगा?",
        "options_en": ["False", "True", "[]", "Error"],
        "options_hi": ["False", "True", "[]", "त्रुटि"],
        "answer_en": "False",
        "answer_hi": "False"
    },
    {
        "num": 33,
        "question_en": "What is the output of print(complex(1, 2))?",
        "question_hi": "print(complex(1, 2)) का आउटपुट क्या होगा?",
        "options_en": ["(1+2j)", "1+2j", "3", "Error"],
        "options_hi": ["(1+2j)", "1+2j", "3", "त्रुटि"],
        "answer_en": "(1+2j)",
        "answer_hi": "(1+2j)"
    },
    {
        "num": 34,
        "question_en": "What does print(dict(a=1, b=2)) output?",
        "question_hi": "print(dict(a=1, b=2)) का आउटपुट क्या होगा?",
        "options_en": ["{'a': 1, 'b': 2}", "{a: 1, b: 2}", "['a', 'b']", "Error"],
        "options_hi": ["{'a': 1, 'b': 2}", "{a: 1, b: 2}", "['a', 'b']", "त्रुटि"],
        "answer_en": "{'a': 1, 'b': 2}",
        "answer_hi": "{'a': 1, 'b': 2}"
    },
    {
        "num": 35,
        "question_en": "What is the output of print(frozenset([1, 2, 3]))?",
        "question_hi": "print(frozenset([1, 2, 3])) का आउटपुट क्या होगा?",
        "options_en": ["frozenset({1, 2, 3})", "{1, 2, 3}", "[1, 2, 3]", "Error"],
        "options_hi": ["frozenset({1, 2, 3})", "{1, 2, 3}", "[1, 2, 3]", "त्रुटि"],
        "answer_en": "frozenset({1, 2, 3})",
        "answer_hi": "frozenset({1, 2, 3})"
    },
    {
        "num": 36,
        "question_en": "What does print(globals() is locals()) output?",
        "question_hi": "print(globals() is locals()) का आउटपुट क्या होगा?",
        "options_en": ["True", "False", "Error", "None"],
        "options_hi": ["True", "False", "त्रुटि", "None"],
        "answer_en": "True",
        "answer_hi": "True"
    },
    {
        "num": 37,
        "question_en": "What is the output of print(hasattr(str, 'upper'))?",
        "question_hi": "print(hasattr(str, 'upper')) का आउटपुट क्या होगा?",
        "options_en": ["True", "False", "Error", "None"],
        "options_hi": ["True", "False", "त्रुटि", "None"],
        "answer_en": "True",
        "answer_hi": "True"
    },
    {
        "num": 38,
        "question_en": "What does print(isinstance(1, (int, float))) output?",
        "question_hi": "print(isinstance(1, (int, float))) का आउटपुट क्या होगा?",
        "options_en": ["True", "False", "Error", "None"],
        "options_hi": ["True", "False", "त्रुटि", "None"],
        "answer_en": "True",
        "answer_hi": "True"
    },
    {
        "num": 39,
        "question_en": "What is the output of print(issubclass(bool, int))?",
        "question_hi": "print(issubclass(bool, int)) का आउटपुट क्या होगा?",
        "options_en": ["True", "False", "Error", "None"],
        "options_hi": ["True", "False", "त्रुटि", "None"],
        "answer_en": "True",
        "answer_hi": "True"
    },
    {
        "num": 40,
        "question_en": "What does print(len(range(0, 10, 2))) output?",
        "question_hi": "print(len(range(0, 10, 2))) का आउटपुट क्या होगा?",
        "options_en": ["5", "10", "2", "Error"],
        "options_hi": ["5", "10", "2", "त्रुटि"],
        "answer_en": "5",
        "answer_hi": "5"
    },
    {
        "num": 41,
        "question_en": "What is the output of print(list(zip([1, 2], ['a', 'b'])))?",
        "question_hi": "print(list(zip([1, 2], ['a', 'b']))) का आउटपुट क्या होगा?",
        "options_en": ["[(1, 'a'), (2, 'b')]", "[[1, 'a'], [2, 'b']]", "[1, 2, 'a', 'b']", "Error"],
        "options_hi": ["[(1, 'a'), (2, 'b')]", "[[1, 'a'], [2, 'b']]", "[1, 2, 'a', 'b']", "त्रुटि"],
        "answer_en": "[(1, 'a'), (2, 'b')]",
        "answer_hi": "[(1, 'a'), (2, 'b')]"
    },
    {
        "num": 42,
        "question_en": "What does print(memoryview(b'abc')) output?",
        "question_hi": "print(memoryview(b'abc')) का आउटपुट क्या होगा?",
        "options_en": ["<memory at ...>", "b'abc'", "abc", "Error"],
        "options_hi": ["<memory at ...>", "b'abc'", "abc", "त्रुटि"],
        "answer_en": "<memory at ...>",
        "answer_hi": "<memory at ...>"
    },
    {
        "num": 43,
        "question_en": "What is the output of print(object())?",
        "question_hi": "print(object()) का आउटपुट क्या होगा?",
        "options_en": ["<object object at ...>", "object", "{}", "Error"],
        "options_hi": ["<object object at ...>", "object", "{}", "त्रुटि"],
        "answer_en": "<object object at ...>",
        "answer_hi": "<object object at ...>"
    },
    {
        "num": 44,
        "question_en": "What does print(property()) output?",
        "question_hi": "print(property()) का आउटपुट क्या होगा?",
        "options_en": ["<property object at ...>", "property", "{}", "Error"],
        "options_hi": ["<property object at ...>", "property", "{}", "त्रुटि"],
        "answer_en": "<property object at ...>",
        "answer_hi": "<property object at ...>"
    },
    {
        "num": 45,
        "question_en": "What is the output of print(reversed([1, 2, 3]))?",
        "question_hi": "print(reversed([1, 2, 3])) का आउटपुट क्या होगा?",
        "options_en": ["<list_reverseiterator object>", "[3, 2, 1]", "[1, 2, 3]", "Error"],
        "options_hi": ["<list_reverseiterator object>", "[3, 2, 1]", "[1, 2, 3]", "त्रुटि"],
        "answer_en": "<list_reverseiterator object>",
        "answer_hi": "<list_reverseiterator object>"
    },
    {
        "num": 46,
        "question_en": "What does print(set([1, 2, 2, 3])) output?",
        "question_hi": "print(set([1, 2, 2, 3])) का आउटपुट क्या होगा?",
        "options_en": ["{1, 2, 3}", "{1, 2, 2, 3}", "[1, 2, 3]", "Error"],
        "options_hi": ["{1, 2, 3}", "{1, 2, 2, 3}", "[1, 2, 3]", "त्रुटि"],
        "answer_en": "{1, 2, 3}",
        "answer_hi": "{1, 2, 3}"
    },
    {
        "num": 47,
        "question_en": "What is the output of print(slice(1, 5, 2))?",
        "question_hi": "print(slice(1, 5, 2)) का आउटपुट क्या होगा?",
        "options_en": ["slice(1, 5, 2)", "[1, 3]", "[2, 4]", "Error"],
        "options_hi": ["slice(1, 5, 2)", "[1, 3]", "[2, 4]", "त्रुटि"],
        "answer_en": "slice(1, 5, 2)",
        "answer_hi": "slice(1, 5, 2)"
    },
    {
        "num": 48,
        "question_en": "What does print(staticmethod(lambda: None)) output?",
        "question_hi": "print(staticmethod(lambda: None)) का आउटपुट क्या होगा?",
        "options_en": ["<staticmethod object>", "None", "<function>", "Error"],
        "options_hi": ["<staticmethod object>", "None", "<function>", "त्रुटि"],
        "answer_en": "<staticmethod object>",
        "answer_hi": "<staticmethod object>"
    },
    {
        "num": 49,
        "question_en": "What is the output of print(super())?",
        "question_hi": "print(super()) का आउटपुट क्या होगा?",
        "options_en": ["<super: <class ...>>", "super", "None", "Error"],
        "options_hi": ["<super: <class ...>>", "super", "None", "त्रुटि"],
        "answer_en": "<super: <class ...>>",
        "answer_hi": "<super: <class ...>>"
    },
    {
        "num": 50,
        "question_en": "What does print(tuple([1, 2, 3])) output?",
        "question_hi": "print(tuple([1, 2, 3])) का आउटपुट क्या होगा?",
        "options_en": ["(1, 2, 3)", "[1, 2, 3]", "{1, 2, 3}", "Error"],
        "options_hi": ["(1, 2, 3)", "[1, 2, 3]", "{1, 2, 3}", "त्रुटि"],
        "answer_en": "(1, 2, 3)",
        "answer_hi": "(1, 2, 3)"
    }
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