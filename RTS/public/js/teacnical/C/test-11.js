const questions = [
  {
    "num": 1,
    "question_en": "What is the simplest C program that does nothing?",
    "question_hi": "सबसे सरल C प्रोग्राम जो कुछ नहीं करता?",
    "options_en": ["int main() {}", "main() {}", "program {}", "start() {}"],
    "options_hi": ["int main() {}", "main() {}", "program {}", "start() {}"],
    "answer_en": "int main() {}",
    "answer_hi": "int main() {}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What does every complete C program must have?",
    "question_hi": "हर पूर्ण C प्रोग्राम में क्या होना चाहिए?",
    "options_en": ["main() function", "printf()", "variables", "comments"],
    "options_hi": ["main() फंक्शन", "printf()", "वेरिएबल्स", "कमेंट्स"],
    "answer_en": "main() function",
    "answer_hi": "main() फंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What are the basic steps to run a C program?",
    "question_hi": "C प्रोग्राम चलाने के बेसिक स्टेप्स क्या हैं?",
    "options_en": ["Write, Compile, Run", "Run only", "Write only", "Compile only"],
    "options_hi": ["लिखें, कंपाइल करें, चलाएँ", "केवल चलाएँ", "केवल लिखें", "केवल कंपाइल करें"],
    "answer_en": "Write, Compile, Run",
    "answer_hi": "लिखें, कंपाइल करें, चलाएँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the purpose of writing code?",
    "question_hi": "कोड लिखने का उद्देश्य क्या है?",
    "options_en": ["To instruct computer", "To decorate", "To confuse", "To waste time"],
    "options_hi": ["कंप्यूटर को निर्देश देना", "सजाना", "उलझाना", "समय बर्बाद करना"],
    "answer_en": "To instruct computer",
    "answer_hi": "कंप्यूटर को निर्देश देना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is source code?",
    "question_hi": "सोर्स कोड क्या है?",
    "options_en": ["Human-readable program text", "Machine code", "Binary file", "Executable"],
    "options_hi": ["मानव-पठनीय प्रोग्राम टेक्स्ट", "मशीन कोड", "बाइनरी फाइल", "एग्जीक्यूटेबल"],
    "answer_en": "Human-readable program text",
    "answer_hi": "मानव-पठनीय प्रोग्राम टेक्स्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is machine code?",
    "question_hi": "मशीन कोड क्या है?",
    "options_en": ["Binary instructions for computer", "Human text", "Source code", "Comments"],
    "options_hi": ["कंप्यूटर के लिए बाइनरी निर्देश", "मानव टेक्स्ट", "सोर्स कोड", "कमेंट्स"],
    "answer_en": "Binary instructions for computer",
    "answer_hi": "कंप्यूटर के लिए बाइनरी निर्देश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is compiling?",
    "question_hi": "कंपाइलिंग क्या है?",
    "options_en": ["Converting source code to machine code", "Writing code", "Running program", "Debugging"],
    "options_hi": ["सोर्स कोड को मशीन कोड में बदलना", "कोड लिखना", "प्रोग्राम चलाना", "डीबगिंग"],
    "answer_en": "Converting source code to machine code",
    "answer_hi": "सोर्स कोड को मशीन कोड में बदलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What do we call the person who writes programs?",
    "question_hi": "प्रोग्राम लिखने वाले व्यक्ति को क्या कहते हैं?",
    "options_en": ["Programmer", "User", "Tester", "Designer"],
    "options_hi": ["प्रोग्रामर", "यूजर", "टेस्टर", "डिजाइनर"],
    "answer_en": "Programmer",
    "answer_hi": "प्रोग्रामर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is programming?",
    "question_hi": "प्रोग्रामिंग क्या है?",
    "options_en": ["Writing instructions for computer", "Using computer", "Buying computer", "Cleaning computer"],
    "options_hi": ["कंप्यूटर के लिए निर्देश लिखना", "कंप्यूटर उपयोग", "कंप्यूटर खरीदना", "कंप्यूटर साफ करना"],
    "answer_en": "Writing instructions for computer",
    "answer_hi": "कंप्यूटर के लिए निर्देश लिखना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is a programming language?",
    "question_hi": "प्रोग्रामिंग लैंग्वेज क्या है?",
    "options_en": ["Set of rules to write programs", "Spoken language", "Math language", "Science language"],
    "options_hi": ["प्रोग्राम लिखने के नियमों का सेट", "बोली जाने वाली भाषा", "गणित भाषा", "विज्ञान भाषा"],
    "answer_en": "Set of rules to write programs",
    "answer_hi": "प्रोग्राम लिखने के नियमों का सेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is C programming language used for?",
    "question_hi": "C प्रोग्रामिंग लैंग्वेज किसके लिए उपयोग होती है?",
    "options_en": ["System programming, applications", "Only games", "Only websites", "Only mobile apps"],
    "options_hi": ["सिस्टम प्रोग्रामिंग, एप्लिकेशन्स", "केवल गेम्स", "केवल वेबसाइट्स", "केवल मोबाइल ऐप्स"],
    "answer_en": "System programming, applications",
    "answer_hi": "सिस्टम प्रोग्रामिंग, एप्लिकेशन्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the first thing you write in C program?",
    "question_hi": "C प्रोग्राम में पहली चीज क्या लिखते हैं?",
    "options_en": ["#include <stdio.h>", "main()", "printf()", "comments"],
    "options_hi": ["#include <stdio.h>", "main()", "printf()", "कमेंट्स"],
    "answer_en": "#include <stdio.h>",
    "answer_hi": "#include <stdio.h>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Why do we need #include <stdio.h>?",
    "question_hi": "हमें #include <stdio.h> की आवश्यकता क्यों है?",
    "options_en": ["For input/output functions", "For math", "For strings", "For memory"],
    "options_hi": ["इनपुट/आउटपुट फंक्शन्स के लिए", "गणित के लिए", "स्ट्रिंग्स के लिए", "मेमोरी के लिए"],
    "answer_en": "For input/output functions",
    "answer_hi": "इनपुट/आउटपुट फंक्शन्स के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does stdio stand for?",
    "question_hi": "stdio का क्या अर्थ है?",
    "options_en": ["Standard Input Output", "Standard Data IO", "System IO", "Simple IO"],
    "options_hi": ["स्टैंडर्ड इनपुट आउटपुट", "स्टैंडर्ड डेटा IO", "सिस्टम IO", "सिंपल IO"],
    "answer_en": "Standard Input Output",
    "answer_hi": "स्टैंडर्ड इनपुट आउटपुट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is .h extension in header files?",
    "question_hi": "हेडर फाइल्स में .h एक्सटेंशन क्या है?",
    "options_en": ["Header", "Help", "Home", "High"],
    "options_hi": ["हेडर", "हेल्प", "होम", "हाई"],
    "answer_en": "Header",
    "answer_hi": "हेडर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What are header files?",
    "question_hi": "हेडर फाइल्स क्या हैं?",
    "options_en": ["Files containing declarations", "Source code files", "Executable files", "Data files"],
    "options_hi": ["डिक्लेरेशन्स रखने वाली फाइल्स", "सोर्स कोड फाइल्स", "एग्जीक्यूटेबल फाइल्स", "डेटा फाइल्स"],
    "answer_en": "Files containing declarations",
    "answer_hi": "डिक्लेरेशन्स रखने वाली फाइल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What are angle brackets < > used for in #include?",
    "question_hi": "#include में angle brackets < > किसके लिए उपयोग होते हैं?",
    "options_en": ["System header files", "User header files", "Both", "Neither"],
    "options_hi": ["सिस्टम हेडर फाइल्स", "यूजर हेडर फाइल्स", "दोनों", "कोई नहीं"],
    "answer_en": "System header files",
    "answer_hi": "सिस्टम हेडर फाइल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What are double quotes \" \" used for in #include?",
    "question_hi": "#include में double quotes \" \" किसके लिए उपयोग होते हैं?",
    "options_en": ["User header files", "System header files", "Both", "Neither"],
    "options_hi": ["यूजर हेडर फाइल्स", "सिस्टम हेडर फाइल्स", "दोनों", "कोई नहीं"],
    "answer_en": "User header files",
    "answer_hi": "यूजर हेडर फाइल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the minimal C program that prints something?",
    "question_hi": "न्यूनतम C प्रोग्राम जो कुछ प्रिंट करता है?",
    "options_en": ["#include <stdio.h>\nint main() { printf(\"Hello\"); }", "main() { print Hello }", "program { show Hello }", "display Hello"],
    "options_hi": ["#include <stdio.h>\nint main() { printf(\"Hello\"); }", "main() { print Hello }", "program { show Hello }", "display Hello"],
    "answer_en": "#include <stdio.h>\nint main() { printf(\"Hello\"); }",
    "answer_hi": "#include <stdio.h>\nint main() { printf(\"Hello\"); }",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the purpose of printf() function?",
    "question_hi": "printf() फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Print output to screen", "Read input", "Calculate", "Store data"],
    "options_hi": ["स्क्रीन पर आउटपुट प्रिंट करना", "इनपुट पढ़ना", "कैलकुलेट करना", "डेटा स्टोर करना"],
    "answer_en": "Print output to screen",
    "answer_hi": "स्क्रीन पर आउटपुट प्रिंट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What does the backslash n \\n do in printf?",
    "question_hi": "printf में backslash n \\n क्या करता है?",
    "options_en": ["Moves to new line", "Prints n", "Space", "Tab"],
    "options_hi": ["नई लाइन पर जाता है", "n प्रिंट करता है", "स्पेस", "टैब"],
    "answer_en": "Moves to new line",
    "answer_hi": "नई लाइन पर जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the correct way to print Hello World?",
    "question_hi": "Hello World प्रिंट करने का सही तरीका क्या है?",
    "options_en": ["printf(\"Hello World\");", "print \"Hello World\"", "echo Hello World", "display Hello World"],
    "options_hi": ["printf(\"Hello World\");", "print \"Hello World\"", "echo Hello World", "display Hello World"],
    "answer_en": "printf(\"Hello World\");",
    "answer_hi": "printf(\"Hello World\");",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the difference between printf and puts?",
    "question_hi": "printf और puts में क्या अंतर है?",
    "options_en": ["puts adds newline automatically", "printf adds newline", "No difference", "puts doesn't exist"],
    "options_hi": ["puts ऑटोमैटिक न्यूलाइन जोड़ता है", "printf न्यूलाइन जोड़ता है", "कोई अंतर नहीं", "puts मौजूद नहीं"],
    "answer_en": "puts adds newline automatically",
    "answer_hi": "puts ऑटोमैटिक न्यूलाइन जोड़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "How to print multiple lines?",
    "question_hi": "मल्टीपल लाइन्स कैसे प्रिंट करें?",
    "options_en": ["Use \\n in printf", "Multiple printf", "Both a and b", "Cannot print multiple lines"],
    "options_hi": ["printf में \\n उपयोग करें", "मल्टीपल printf", "a और b दोनों", "मल्टीपल लाइन्स प्रिंट नहीं कर सकते"],
    "answer_en": "Both a and b",
    "answer_hi": "a और b दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is a string in C?",
    "question_hi": "C में स्ट्रिंग क्या है?",
    "options_en": ["Text inside double quotes", "Number", "Single character", "Code"],
    "options_hi": ["डबल कोट्स के अंदर टेक्स्ट", "नंबर", "सिंगल कैरेक्टर", "कोड"],
    "answer_en": "Text inside double quotes",
    "answer_hi": "डबल कोट्स के अंदर टेक्स्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Example of string?",
    "question_hi": "स्ट्रिंग का उदाहरण?",
    "options_en": ["\"Hello\"", "123", "A", ";"],
    "options_hi": ["\"Hello\"", "123", "A", ";"],
    "answer_en": "\"Hello\"",
    "answer_hi": "\"Hello\"",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What are the three main parts of a simple C program?",
    "question_hi": "सिंपल C प्रोग्राम के तीन मुख्य भाग क्या हैं?",
    "options_en": ["Header, main function, statements", "Only main", "Only header", "Only statements"],
    "options_hi": ["हेडर, मेन फंक्शन, स्टेटमेंट्स", "केवल मेन", "केवल हेडर", "केवल स्टेटमेंट्स"],
    "answer_en": "Header, main function, statements",
    "answer_hi": "हेडर, मेन फंक्शन, स्टेटमेंट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What are statements in C?",
    "question_hi": "C में स्टेटमेंट्स क्या हैं?",
    "options_en": ["Instructions to computer", "Comments", "Headers", "Functions"],
    "options_hi": ["कंप्यूटर को निर्देश", "कमेंट्स", "हेडर्स", "फंक्शन्स"],
    "answer_en": "Instructions to computer",
    "answer_hi": "कंप्यूटर को निर्देश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "How do statements end in C?",
    "question_hi": "C में स्टेटमेंट्स कैसे समाप्त होते हैं?",
    "options_en": ["With semicolon ;", "With period .", "With comma ,", "With colon :"],
    "options_hi": ["सेमीकॉलन ; से", "पीरियड . से", "कॉमा , से", "कोलन : से"],
    "answer_en": "With semicolon ;",
    "answer_hi": "सेमीकॉलन ; से",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What happens if you forget semicolon?",
    "question_hi": "अगर सेमीकॉलन भूल जाएं तो क्या होता है?",
    "options_en": ["Compilation error", "Program runs fine", "Warning only", "No effect"],
    "options_hi": ["कंपाइलेशन एरर", "प्रोग्राम ठीक चलता है", "केवल वार्निंग", "कोई प्रभाव नहीं"],
    "answer_en": "Compilation error",
    "answer_hi": "कंपाइलेशन एरर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What are comments in C?",
    "question_hi": "C में कमेंट्स क्या हैं?",
    "options_en": ["Explanations ignored by compiler", "Executable code", "Variables", "Functions"],
    "options_hi": ["कंपाइलर द्वारा इग्नोर की गई व्याख्याएं", "एग्जीक्यूटेबल कोड", "वेरिएबल्स", "फंक्शन्स"],
    "answer_en": "Explanations ignored by compiler",
    "answer_hi": "कंपाइलर द्वारा इग्नोर की गई व्याख्याएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Why use comments?",
    "question_hi": "कमेंट्स क्यों उपयोग करें?",
    "options_en": ["To explain code", "To run code faster", "To make code smaller", "To hide code"],
    "options_hi": ["कोड समझाने के लिए", "कोड तेज चलाने के लिए", "कोड छोटा बनाने के लिए", "कोड छिपाने के लिए"],
    "answer_en": "To explain code",
    "answer_hi": "कोड समझाने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "How to write single line comment?",
    "question_hi": "सिंगल लाइन कमेंट कैसे लिखें?",
    "options_en": ["// comment", "/* comment */", "# comment", "-- comment"],
    "options_hi": ["// comment", "/* comment */", "# comment", "-- comment"],
    "answer_en": "// comment",
    "answer_hi": "// comment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "How to write multi-line comment?",
    "question_hi": "मल्टी-लाइन कमेंट कैसे लिखें?",
    "options_en": ["/* comment */", "// comment", "# comment", "-- comment"],
    "options_hi": ["/* comment */", "// comment", "# comment", "-- comment"],
    "answer_en": "/* comment */",
    "answer_hi": "/* comment */",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Can comments be nested?",
    "question_hi": "क्या कमेंट्स नेस्टेड हो सकते हैं?",
    "options_en": ["No in standard C", "Yes", "Sometimes", "Only in C++"],
    "options_hi": ["स्टैंडर्ड C में नहीं", "हाँ", "कभी-कभी", "केवल C++ में"],
    "answer_en": "No in standard C",
    "answer_hi": "स्टैंडर्ड C में नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is a variable?",
    "question_hi": "वेरिएबल क्या है?",
    "options_en": ["Named storage for data", "Function", "Comment", "Header"],
    "options_hi": ["डेटा के लिए नामित स्टोरेज", "फंक्शन", "कमेंट", "हेडर"],
    "answer_en": "Named storage for data",
    "answer_hi": "डेटा के लिए नामित स्टोरेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Why use variables?",
    "question_hi": "वेरिएबल्स क्यों उपयोग करें?",
    "options_en": ["To store and reuse data", "To make code longer", "To confuse", "To comment"],
    "options_hi": ["डेटा स्टोर और रीयूज करने के लिए", "कोड लंबा बनाने के लिए", "उलझाने के लिए", "कमेंट करने के लिए"],
    "answer_en": "To store and reuse data",
    "answer_hi": "डेटा स्टोर और रीयूज करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "How to declare an integer variable?",
    "question_hi": "इंटीजर वेरिएबल कैसे डिक्लेयर करें?",
    "options_en": ["int x;", "integer x;", "var x;", "x int;"],
    "options_hi": ["int x;", "integer x;", "var x;", "x int;"],
    "answer_en": "int x;",
    "answer_hi": "int x;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "How to assign value to variable?",
    "question_hi": "वेरिएबल को वैल्यू कैसे असाइन करें?",
    "options_en": ["x = 10;", "x == 10;", "x -> 10;", "10 = x;"],
    "options_hi": ["x = 10;", "x == 10;", "x -> 10;", "10 = x;"],
    "answer_en": "x = 10;",
    "answer_hi": "x = 10;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "How to declare and assign together?",
    "question_hi": "एक साथ डिक्लेयर और असाइन कैसे करें?",
    "options_en": ["int x = 10;", "int 10 = x;", "x int = 10;", "10 int x;"],
    "options_hi": ["int x = 10;", "int 10 = x;", "x int = 10;", "10 int x;"],
    "answer_en": "int x = 10;",
    "answer_hi": "int x = 10;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the assignment operator?",
    "question_hi": "असाइनमेंट ऑपरेटर क्या है?",
    "options_en": ["=", "==", "+", "-"],
    "options_hi": ["=", "==", "+", "-"],
    "answer_en": "=",
    "answer_hi": "=",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does = do?",
    "question_hi": "= क्या करता है?",
    "options_en": ["Assigns right value to left variable", "Checks equality", "Adds", "Subtracts"],
    "options_hi": ["दाईं वैल्यू बाईं वेरिएबल को असाइन करता है", "समानता चेक करता है", "जोड़ता है", "घटाता है"],
    "answer_en": "Assigns right value to left variable",
    "answer_hi": "दाईं वैल्यू बाईं वेरिएबल को असाइन करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "How to print variable value?",
    "question_hi": "वेरिएबल वैल्यू कैसे प्रिंट करें?",
    "options_en": ["printf(\"%d\", x);", "printf(x);", "print x;", "display x;"],
    "options_hi": ["printf(\"%d\", x);", "printf(x);", "print x;", "display x;"],
    "answer_en": "printf(\"%d\", x);",
    "answer_hi": "printf(\"%d\", x);",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What does %d mean in printf?",
    "question_hi": "printf में %d का क्या अर्थ है?",
    "options_en": ["Format for integer", "Format for character", "Format for string", "Format for float"],
    "options_hi": ["इंटीजर के लिए फॉर्मेट", "कैरेक्टर के लिए फॉर्मेट", "स्ट्रिंग के लिए फॉर्मेट", "फ्लोट के लिए फॉर्मेट"],
    "answer_en": "Format for integer",
    "answer_hi": "इंटीजर के लिए फॉर्मेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "How to print text and variable together?",
    "question_hi": "टेक्स्ट और वेरिएबल एक साथ कैसे प्रिंट करें?",
    "options_en": ["printf(\"Value: %d\", x);", "printf(x + \"Value\");", "print \"Value\" x;", "display x and Value;"],
    "options_hi": ["printf(\"Value: %d\", x);", "printf(x + \"Value\");", "print \"Value\" x;", "display x and Value;"],
    "answer_en": "printf(\"Value: %d\", x);",
    "answer_hi": "printf(\"Value: %d\", x);",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is scanf() function?",
    "question_hi": "scanf() फंक्शन क्या है?",
    "options_en": ["Reads input from user", "Prints output", "Calculates", "Stores data"],
    "options_hi": ["यूजर से इनपुट पढ़ता है", "आउटपुट प्रिंट करता है", "कैलकुलेट करता है", "डेटा स्टोर करता है"],
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "How to read integer input?",
    "question_hi": "इंटीजर इनपुट कैसे पढ़ें?",
    "options_en": ["scanf(\"%d\", &x);", "scanf(x);", "read x;", "input x;"],
    "options_hi": ["scanf(\"%d\", &x);", "scanf(x);", "read x;", "input x;"],
    "answer_en": "scanf(\"%d\", &x);",
    "answer_hi": "scanf(\"%d\", &x);",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Why & before variable in scanf?",
    "question_hi": "scanf में वेरिएबल से पहले & क्यों?",
    "options_en": ["Gets address of variable", "Means and", "Optional", "Not needed"],
    "options_hi": ["वेरिएबल का एड्रेस प्राप्त करता है", "और का मतलब", "ऑप्शनल", "जरूरी नहीं"],
    "answer_en": "Gets address of variable",
    "answer_hi": "वेरिएबल का एड्रेस प्राप्त करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Simple program to add two numbers?",
    "question_hi": "दो नंबर जोड़ने का सरल प्रोग्राम?",
    "options_en": [
      "#include <stdio.h>\nint main() { int a=5,b=3,sum; sum=a+b; printf(\"Sum: %d\",sum); }",
      "add 5 and 3",
      "5+3",
      "sum=5+3"
    ],
    "options_hi": [
      "#include <stdio.h>\nint main() { int a=5,b=3,sum; sum=a+b; printf(\"Sum: %d\",sum); }",
      "add 5 and 3",
      "5+3",
      "sum=5+3"
    ],
    "answer_en": "#include <stdio.h>\nint main() { int a=5,b=3,sum; sum=a+b; printf(\"Sum: %d\",sum); }",
    "answer_hi": "#include <stdio.h>\nint main() { int a=5,b=3,sum; sum=a+b; printf(\"Sum: %d\",sum); }",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What are arithmetic operators?",
    "question_hi": "अरिथमेटिक ऑपरेटर्स क्या हैं?",
    "options_en": ["+ - * / %", "= == !=", "&& || !", "& | ^"],
    "options_hi": ["+ - * / %", "= == !=", "&& || !", "& | ^"],
    "answer_en": "+ - * / %",
    "answer_hi": "+ - * / %",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What does + operator do?",
    "question_hi": "+ ऑपरेटर क्या करता है?",
    "options_en": ["Addition", "Subtraction", "Multiplication", "Division"],
    "options_hi": ["जोड़", "घटाव", "गुणा", "भाग"],
    "answer_en": "Addition",
    "answer_hi": "जोड़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What does - operator do?",
    "question_hi": "- ऑपरेटर क्या करता है?",
    "options_en": ["Subtraction", "Addition", "Multiplication", "Division"],
    "options_hi": ["घटाव", "जोड़", "गुणा", "भाग"],
    "answer_en": "Subtraction",
    "answer_hi": "घटाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What does * operator do?",
    "question_hi": "* ऑपरेटर क्या करता है?",
    "options_en": ["Multiplication", "Addition", "Subtraction", "Division"],
    "options_hi": ["गुणा", "जोड़", "घटाव", "भाग"],
    "answer_en": "Multiplication",
    "answer_hi": "गुणा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What does / operator do?",
    "question_hi": "/ ऑपरेटर क्या करता है?",
    "options_en": ["Division", "Addition", "Subtraction", "Multiplication"],
    "options_hi": ["भाग", "जोड़", "घटाव", "गुणा"],
    "answer_en": "Division",
    "answer_hi": "भाग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What does % operator do?",
    "question_hi": "% ऑपरेटर क्या करता है?",
    "options_en": ["Remainder", "Percentage", "Division", "Multiplication"],
    "options_hi": ["शेष", "प्रतिशत", "भाग", "गुणा"],
    "answer_en": "Remainder",
    "answer_hi": "शेष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Example: 10 % 3 equals?",
    "question_hi": "उदाहरण: 10 % 3 बराबर?",
    "options_en": ["1", "3", "0", "10"],
    "options_hi": ["1", "3", "0", "10"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is operator precedence?",
    "question_hi": "ऑपरेटर प्रीसीडेंस क्या है?",
    "options_en": ["Order of evaluation", "Speed", "Memory usage", "Function"],
    "options_hi": ["मूल्यांकन का क्रम", "गति", "मेमोरी उपयोग", "फंक्शन"],
    "answer_en": "Order of evaluation",
    "answer_hi": "मूल्यांकन का क्रम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which has higher precedence: * or +?",
    "question_hi": "किसकी प्रीसीडेंस अधिक है: * या +?",
    "options_en": ["*", "+", "Same", "Depends"],
    "options_hi": ["*", "+", "समान", "निर्भर"],
    "answer_en": "*",
    "answer_hi": "*",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What does 2 + 3 * 4 equal?",
    "question_hi": "2 + 3 * 4 बराबर?",
    "options_en": ["14", "20", "10", "24"],
    "options_hi": ["14", "20", "10", "24"],
    "answer_en": "14",
    "answer_hi": "14",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "How to change precedence?",
    "question_hi": "प्रीसीडेंस कैसे बदलें?",
    "options_en": ["Use parentheses ()", "Change order", "Cannot change", "Use brackets []"],
    "options_hi": ["पैरेंथेसिस () उपयोग करें", "क्रम बदलें", "बदल नहीं सकते", "ब्रैकेट्स [] उपयोग करें"],
    "answer_en": "Use parentheses ()",
    "answer_hi": "पैरेंथेसिस () उपयोग करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What does (2 + 3) * 4 equal?",
    "question_hi": "(2 + 3) * 4 बराबर?",
    "options_en": ["20", "14", "10", "24"],
    "options_hi": ["20", "14", "10", "24"],
    "answer_en": "20",
    "answer_hi": "20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What are relational operators?",
    "question_hi": "रिलेशनल ऑपरेटर्स क्या हैं?",
    "options_en": ["< > <= >= == !=", "+ - * /", "&& || !", "& | ^"],
    "options_hi": ["< > <= >= == !=", "+ - * /", "&& || !", "& | ^"],
    "answer_en": "< > <= >= == !=",
    "answer_hi": "< > <= >= == !=",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What does < operator do?",
    "question_hi": "< ऑपरेटर क्या करता है?",
    "options_en": ["Less than", "Greater than", "Equal", "Not equal"],
    "options_hi": ["से कम", "से अधिक", "बराबर", "बराबर नहीं"],
    "answer_en": "Less than",
    "answer_hi": "से कम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What does > operator do?",
    "question_hi": "> ऑपरेटर क्या करता है?",
    "options_en": ["Greater than", "Less than", "Equal", "Not equal"],
    "options_hi": ["से अधिक", "से कम", "बराबर", "बराबर नहीं"],
    "answer_en": "Greater than",
    "answer_hi": "से अधिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What does == operator do?",
    "question_hi": "== ऑपरेटर क्या करता है?",
    "options_en": ["Checks equality", "Assigns", "Adds", "Subtracts"],
    "options_hi": ["समानता चेक करता है", "असाइन करता है", "जोड़ता है", "घटाता है"],
    "answer_en": "Checks equality",
    "answer_hi": "समानता चेक करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What does != operator do?",
    "question_hi": "!= ऑपरेटर क्या करता है?",
    "options_en": ["Checks not equal", "Checks equal", "Assigns", "Adds"],
    "options_hi": ["बराबर नहीं चेक करता है", "बराबर चेक करता है", "असाइन करता है", "जोड़ता है"],
    "answer_en": "Checks not equal",
    "answer_hi": "बराबर नहीं चेक करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What are logical operators?",
    "question_hi": "लॉजिकल ऑपरेटर्स क्या हैं?",
    "options_en": ["&& || !", "+ - *", "< > ==", "& | ^"],
    "options_hi": ["&& || !", "+ - *", "< > ==", "& | ^"],
    "answer_en": "&& || !",
    "answer_hi": "&& || !",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What does && operator do?",
    "question_hi": "&& ऑपरेटर क्या करता है?",
    "options_en": ["Logical AND", "Logical OR", "Logical NOT", "Addition"],
    "options_hi": ["लॉजिकल AND", "लॉजिकल OR", "लॉजिकल NOT", "जोड़"],
    "answer_en": "Logical AND",
    "answer_hi": "लॉजिकल AND",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What does || operator do?",
    "question_hi": "|| ऑपरेटर क्या करता है?",
    "options_en": ["Logical OR", "Logical AND", "Logical NOT", "Subtraction"],
    "options_hi": ["लॉजिकल OR", "लॉजिकल AND", "लॉजिकल NOT", "घटाव"],
    "answer_en": "Logical OR",
    "answer_hi": "लॉजिकल OR",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What does ! operator do?",
    "question_hi": "! ऑपरेटर क्या करता है?",
    "options_en": ["Logical NOT", "Logical AND", "Logical OR", "Multiplication"],
    "options_hi": ["लॉजिकल NOT", "लॉजिकल AND", "लॉजिकल OR", "गुणा"],
    "answer_en": "Logical NOT",
    "answer_hi": "लॉजिकल NOT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is if statement?",
    "question_hi": "if स्टेटमेंट क्या है?",
    "options_en": ["Conditional execution", "Loop", "Function", "Variable"],
    "options_hi": ["कंडिशनल एक्जीक्यूशन", "लूप", "फंक्शन", "वेरिएबल"],
    "answer_en": "Conditional execution",
    "answer_hi": "कंडिशनल एक्जीक्यूशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Syntax of if statement?",
    "question_hi": "if स्टेटमेंट का सिंटैक्स?",
    "options_en": ["if(condition) { }", "if condition { }", "if {condition}", "if [] {}"],
    "options_hi": ["if(condition) { }", "if condition { }", "if {condition}", "if [] {}"],
    "answer_en": "if(condition) { }",
    "answer_hi": "if(condition) { }",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Example: if(x > 10) { printf(\"Large\"); }",
    "question_hi": "उदाहरण: if(x > 10) { printf(\"Large\"); }",
    "options_en": ["Prints if x > 10", "Always prints", "Never prints", "Prints if x < 10"],
    "options_hi": ["प्रिंट करता है अगर x > 10", "हमेशा प्रिंट करता है", "कभी नहीं प्रिंट करता", "प्रिंट करता है अगर x < 10"],
    "answer_en": "Prints if x > 10",
    "answer_hi": "प्रिंट करता है अगर x > 10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is if-else statement?",
    "question_hi": "if-else स्टेटमेंट क्या है?",
    "options_en": ["Two-way decision", "One-way", "Loop", "Function"],
    "options_hi": ["दो-तरफा निर्णय", "एक-तरफा", "लूप", "फंक्शन"],
    "answer_en": "Two-way decision",
    "answer_hi": "दो-तरफा निर्णय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Syntax of if-else?",
    "question_hi": "if-else का सिंटैक्स?",
    "options_en": ["if(condition) { } else { }", "if { } else { }", "if() else()", "if-else {}"],
    "options_hi": ["if(condition) { } else { }", "if { } else { }", "if() else()", "if-else {}"],
    "answer_en": "if(condition) { } else { }",
    "answer_hi": "if(condition) { } else { }",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is loop?",
    "question_hi": "लूप क्या है?",
    "options_en": ["Repeats code", "Condition", "Variable", "Function"],
    "options_hi": ["कोड दोहराता है", "कंडीशन", "वेरिएबल", "फंक्शन"],
    "answer_en": "Repeats code",
    "answer_hi": "कोड दोहराता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Why use loops?",
    "question_hi": "लूप क्यों उपयोग करें?",
    "options_en": ["To avoid repeating code", "To make code longer", "To confuse", "To comment"],
    "options_hi": ["कोड दोहराने से बचने के लिए", "कोड लंबा बनाने के लिए", "उलझाने के लिए", "कमेंट करने के लिए"],
    "answer_en": "To avoid repeating code",
    "answer_hi": "कोड दोहराने से बचने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is for loop?",
    "question_hi": "for लूप क्या है?",
    "options_en": ["Loop with counter", "Conditional loop", "Infinite loop", "No loop"],
    "options_hi": ["काउंटर वाला लूप", "कंडिशनल लूप", "इनफिनाइट लूप", "कोई लूप नहीं"],
    "answer_en": "Loop with counter",
    "answer_hi": "काउंटर वाला लूप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Syntax of for loop?",
    "question_hi": "for लूप का सिंटैक्स?",
    "options_en": ["for(init; condition; update) { }", "for init condition update { }", "for() {}", "for [] {}"],
    "options_hi": ["for(init; condition; update) { }", "for init condition update { }", "for() {}", "for [] {}"],
    "answer_en": "for(init; condition; update) { }",
    "answer_hi": "for(init; condition; update) { }",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Example: for(i=1; i<=5; i++) { printf(\"%d \", i); }",
    "question_hi": "उदाहरण: for(i=1; i<=5; i++) { printf(\"%d \", i); }",
    "options_en": ["Prints 1 2 3 4 5", "Prints 5 times", "Infinite loop", "Error"],
    "options_hi": ["प्रिंट करता है 1 2 3 4 5", "5 बार प्रिंट करता है", "इनफिनाइट लूप", "एरर"],
    "answer_en": "Prints 1 2 3 4 5",
    "answer_hi": "प्रिंट करता है 1 2 3 4 5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is while loop?",
    "question_hi": "while लूप क्या है?",
    "options_en": ["Loop while condition true", "Counter loop", "Infinite loop", "No loop"],
    "options_hi": ["लूप जब तक कंडीशन सच", "काउंटर लूप", "इनफिनाइट लूप", "कोई लूप नहीं"],
    "answer_en": "Loop while condition true",
    "answer_hi": "लूप जब तक कंडीशन सच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Syntax of while loop?",
    "question_hi": "while लूप का सिंटैक्स?",
    "options_en": ["while(condition) { }", "while condition { }", "while {} condition", "while [] {}"],
    "options_hi": ["while(condition) { }", "while condition { }", "while {} condition", "while [] {}"],
    "answer_en": "while(condition) { }",
    "answer_hi": "while(condition) { }",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is do-while loop?",
    "question_hi": "do-while लूप क्या है?",
    "options_en": ["Loop that runs at least once", "Runs zero times", "Infinite", "No loop"],
    "options_hi": ["लूप जो कम से कम एक बार चलता है", "शून्य बार चलता है", "अनंत", "कोई लूप नहीं"],
    "answer_en": "Loop that runs at least once",
    "answer_hi": "लूप जो कम से कम एक बार चलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Syntax of do-while?",
    "question_hi": "do-while का सिंटैक्स?",
    "options_en": ["do { } while(condition);", "do while(condition) {}", "do {} condition while", "while do {}"],
    "options_hi": ["do { } while(condition);", "do while(condition) {}", "do {} condition while", "while do {}"],
    "answer_en": "do { } while(condition);",
    "answer_hi": "do { } while(condition);",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Difference between while and do-while?",
    "question_hi": "while और do-while में अंतर?",
    "options_en": ["do-while runs at least once", "while runs at least once", "No difference", "Both same"],
    "options_hi": ["do-while कम से कम एक बार चलता है", "while कम से कम एक बार चलता है", "कोई अंतर नहीं", "दोनों समान"],
    "answer_en": "do-while runs at least once",
    "answer_hi": "do-while कम से कम एक बार चलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is array?",
    "question_hi": "एरे क्या है?",
    "options_en": ["Collection of same type items", "Single item", "Function", "Loop"],
    "options_hi": ["समान टाइप आइटम्स का कलेक्शन", "सिंगल आइटम", "फंक्शन", "लूप"],
    "answer_en": "Collection of same type items",
    "answer_hi": "समान टाइप आइटम्स का कलेक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Why use arrays?",
    "question_hi": "एरे क्यों उपयोग करें?",
    "options_en": ["Store multiple values easily", "Store single value", "Make code longer", "Confuse"],
    "options_hi": ["मल्टीपल वैल्यूज आसानी से स्टोर करने के लिए", "सिंगल वैल्यू स्टोर करने के लिए", "कोड लंबा बनाने के लिए", "उलझाने के लिए"],
    "answer_en": "Store multiple values easily",
    "answer_hi": "मल्टीपल वैल्यूज आसानी से स्टोर करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "How to declare int array of size 5?",
    "question_hi": "साइज 5 का int एरे कैसे डिक्लेयर करें?",
    "options_en": ["int arr[5];", "array arr[5];", "int arr(5);", "arr[5] int;"],
    "options_hi": ["int arr[5];", "array arr[5];", "int arr(5);", "arr[5] int;"],
    "answer_en": "int arr[5];",
    "answer_hi": "int arr[5];",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "How to access first element of array?",
    "question_hi": "एरे के पहले एलिमेंट तक कैसे पहुंचें?",
    "options_en": ["arr[0]", "arr[1]", "arr.first", "arr(0)"],
    "options_hi": ["arr[0]", "arr[1]", "arr.first", "arr(0)"],
    "answer_en": "arr[0]",
    "answer_hi": "arr[0]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is function?",
    "question_hi": "फंक्शन क्या है?",
    "options_en": ["Reusable code block", "Variable", "Loop", "Condition"],
    "options_hi": ["रीयूजेबल कोड ब्लॉक", "वेरिएबल", "लूप", "कंडीशन"],
    "answer_en": "Reusable code block",
    "answer_hi": "रीयूजेबल कोड ब्लॉक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "Why use functions?",
    "question_hi": "फंक्शन्स क्यों उपयोग करें?",
    "options_en": ["Code reuse, organization", "Make code longer", "Confuse", "Slow down"],
    "options_hi": ["कोड रीयूज, ऑर्गनाइजेशन", "कोड लंबा बनाने के लिए", "उलझाने के लिए", "धीमा करने के लिए"],
    "answer_en": "Code reuse, organization",
    "answer_hi": "कोड रीयूज, ऑर्गनाइजेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "How to define simple function?",
    "question_hi": "सिंपल फंक्शन कैसे डिफाइन करें?",
    "options_en": ["void hello() { printf(\"Hello\"); }", "function hello() {}", "def hello() {}", "hello() = {}"],
    "options_hi": ["void hello() { printf(\"Hello\"); }", "function hello() {}", "def hello() {}", "hello() = {}"],
    "answer_en": "void hello() { printf(\"Hello\"); }",
    "answer_hi": "void hello() { printf(\"Hello\"); }",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "How to call function?",
    "question_hi": "फंक्शन कैसे कॉल करें?",
    "options_en": ["hello();", "call hello();", "hello;", "execute hello();"],
    "options_hi": ["hello();", "call hello();", "hello;", "execute hello();"],
    "answer_en": "hello();",
    "answer_hi": "hello();",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is return type void?",
    "question_hi": "रिटर्न टाइप void क्या है?",
    "options_en": ["Function returns nothing", "Returns integer", "Returns float", "Returns character"],
    "options_hi": ["फंक्शन कुछ नहीं रिटर्न करता", "इंटीजर रिटर्न करता है", "फ्लोट रिटर्न करता है", "कैरेक्टर रिटर्न करता है"],
    "answer_en": "Function returns nothing",
    "answer_hi": "फंक्शन कुछ नहीं रिटर्न करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is the purpose of return 0 in main?",
    "question_hi": "main में return 0 का उद्देश्य क्या है?",
    "options_en": ["Indicates successful execution", "Returns error", "Prints 0", "Ends program"],
    "options_hi": ["सफल एक्जीक्यूशन दर्शाता है", "एरर रिटर्न करता है", "0 प्रिंट करता है", "प्रोग्राम खत्म करता है"],
    "answer_en": "Indicates successful execution",
    "answer_hi": "सफल एक्जीक्यूशन दर्शाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is debugging?",
    "question_hi": "डीबगिंग क्या है?",
    "options_en": ["Finding and fixing errors", "Writing code", "Compiling", "Running"],
    "options_hi": ["एरर्स ढूंढना और ठीक करना", "कोड लिखना", "कंपाइलिंग", "रनिंग"],
    "answer_en": "Finding and fixing errors",
    "answer_hi": "एरर्स ढूंढना और ठीक करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What are common errors beginners make?",
    "question_hi": "शुरुआती कौन सी कॉमन एरर्स करते हैं?",
    "options_en": ["Forgetting semicolon, wrong braces", "Everything correct", "No errors", "Only logical errors"],
    "options_hi": ["सेमीकॉलन भूलना, गलत ब्रेसिज़", "सब कुछ सही", "कोई एरर नहीं", "केवल लॉजिकल एरर्स"],
    "answer_en": "Forgetting semicolon, wrong braces",
    "answer_hi": "सेमीकॉलन भूलना, गलत ब्रेसिज़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "How to learn C programming?",
    "question_hi": "C प्रोग्रामिंग कैसे सीखें?",
    "options_en": ["Practice, write code, make mistakes", "Only read", "Only watch videos", "Avoid practice"],
    "options_hi": ["अभ्यास, कोड लिखें, गलतियाँ करें", "केवल पढ़ें", "केवल वीडियो देखें", "अभ्यास न करें"],
    "answer_en": "Practice, write code, make mistakes",
    "answer_hi": "अभ्यास, कोड लिखें, गलतियाँ करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is the most important thing in programming?",
    "question_hi": "प्रोग्रामिंग में सबसे महत्वपूर्ण चीज क्या है?",
    "options_en": ["Logic and problem solving", "Typing speed", "Memory", "Math"],
    "options_hi": ["लॉजिक और प्रॉब्लम सॉल्विंग", "टाइपिंग स्पीड", "मेमोरी", "गणित"],
    "answer_en": "Logic and problem solving",
    "answer_hi": "लॉजिक और प्रॉब्लम सॉल्विंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What should be your first C program?",
    "question_hi": "आपका पहला C प्रोग्राम क्या होना चाहिए?",
    "options_en": ["Hello World program", "Complex game", "Operating system", "Compiler"],
    "options_hi": ["Hello World प्रोग्राम", "कॉम्प्लेक्स गेम", "ऑपरेटिंग सिस्टम", "कंपाइलर"],
    "answer_en": "Hello World program",
    "answer_hi": "Hello World प्रोग्राम",
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