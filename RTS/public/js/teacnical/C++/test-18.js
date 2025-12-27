const questions = [
    {
        "num": 1,
        "question_en": "What is the difference between overloading and overriding in C++?",
        "question_hi": "C++ में overloading और overriding में क्या अंतर है?",
        "options_en": ["Overloading same function name different parameters, overriding redefines base class function", "Both same", "No difference", "Overriding same function"],
        "options_hi": ["Overloading same function name different parameters, overriding redefines base class function", "दोनों समान", "कोई अंतर नहीं", "Overriding same function"],
        "answer_en": "Overloading same function name different parameters, overriding redefines base class function",
        "answer_hi": "Overloading same function name different parameters, overriding redefines base class function",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is a pure virtual function in C++?",
        "question_hi": "C++ में pure virtual function क्या है?",
        "options_en": ["Virtual function with = 0", "Abstract function", "No implementation in base class", "All of above"],
        "options_hi": ["Virtual function with = 0", "Abstract function", "No implementation in base class", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is multiple inheritance in C++?",
        "question_hi": "C++ में multiple inheritance क्या है?",
        "options_en": ["Class inherits from multiple base classes", "Multiple parents", "Many inheritance", "All of above"],
        "options_hi": ["Class inherits from multiple base classes", "Multiple parents", "Many inheritance", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the diamond problem in multiple inheritance?",
        "question_hi": "multiple inheritance में diamond problem क्या है?",
        "options_en": ["Ambiguity when two base classes inherit from same grandparent", "Diamond shape inheritance", "Ambiguity problem", "All of above"],
        "options_hi": ["Ambiguity when two base classes inherit from same grandparent", "Diamond shape inheritance", "Ambiguity problem", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is virtual inheritance used for?",
        "question_hi": "virtual inheritance का उपयोग किस लिए किया जाता है?",
        "options_en": ["Solve diamond problem", "Single instance of base", "Avoid duplication", "All of above"],
        "options_hi": ["Solve diamond problem", "Single instance of base", "Avoid duplication", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is a friend class in C++?",
        "question_hi": "C++ में friend class क्या है?",
        "options_en": ["Class that can access private members of another class", "Friendly class", "Access grant", "All of above"],
        "options_hi": ["Class that can access private members of another class", "Friendly class", "Access grant", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of explicit keyword for constructors?",
        "question_hi": "constructors के लिए explicit keyword का उद्देश्य क्या है?",
        "options_en": ["Prevent implicit conversions", "Explicit construction only", "No automatic conversion", "All of above"],
        "options_hi": ["Prevent implicit conversions", "Explicit construction only", "No automatic conversion", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is a conversion constructor?",
        "question_hi": "conversion constructor क्या है?",
        "options_en": ["Constructor that can be called with single argument for conversion", "Type conversion constructor", "Implicit conversion", "All of above"],
        "options_hi": ["Constructor that can be called with single argument for conversion", "Type conversion constructor", "Implicit conversion", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the difference between static and dynamic casting?",
        "question_hi": "static और dynamic casting में क्या अंतर है?",
        "options_en": ["Static compile-time, dynamic runtime with type checking", "Both same", "No difference", "Dynamic compile-time"],
        "options_hi": ["Static compile-time, dynamic runtime with type checking", "दोनों समान", "कोई अंतर नहीं", "Dynamic compile-time"],
        "answer_en": "Static compile-time, dynamic runtime with type checking",
        "answer_hi": "Static compile-time, dynamic runtime with type checking",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is RTTI (Run-Time Type Information)?",
        "question_hi": "RTTI (Run-Time Type Information) क्या है?",
        "options_en": ["Runtime type identification mechanism", "Type information at runtime", "dynamic_cast and typeid", "All of above"],
        "options_hi": ["Runtime type identification mechanism", "Type information at runtime", "dynamic_cast and typeid", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of typeid operator?",
        "question_hi": "typeid operator का उद्देश्य क्या है?",
        "options_en": ["Get type information at runtime", "Type identification", "Runtime type", "All of above"],
        "options_hi": ["Get type information at runtime", "Type identification", "Runtime type", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is a namespace alias?",
        "question_hi": "namespace alias क्या है?",
        "options_en": ["Alternative name for namespace", "Namespace shortcut", "Alias definition", "All of above"],
        "options_hi": ["Alternative name for namespace", "Namespace shortcut", "Alias definition", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is an unnamed namespace?",
        "question_hi": "unnamed namespace क्या है?",
        "options_en": ["Namespace without name for internal linkage", "Anonymous namespace", "Internal linkage namespace", "All of above"],
        "options_hi": ["Namespace without name for internal linkage", "Anonymous namespace", "Internal linkage namespace", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is function object (functor)?",
        "question_hi": "function object (functor) क्या है?",
        "options_en": ["Object that can be called like function", "Class with operator()", "Callable object", "All of above"],
        "options_hi": ["Object that can be called like function", "Class with operator()", "Callable object", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of std::function?",
        "question_hi": "std::function का उद्देश्य क्या है?",
        "options_en": ["General-purpose polymorphic function wrapper", "Function container", "Callable storage", "All of above"],
        "options_hi": ["General-purpose polymorphic function wrapper", "Function container", "Callable storage", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is lambda expression in C++?",
        "question_hi": "C++ में lambda expression क्या है?",
        "options_en": ["Anonymous function object", "Inline function", "Closure", "All of above"],
        "options_hi": ["Anonymous function object", "Inline function", "Closure", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is capture list in lambda?",
        "question_hi": "lambda में capture list क्या है?",
        "options_en": ["Specifies which variables are captured", "Variable capture", "Context capture", "All of above"],
        "options_hi": ["Specifies which variables are captured", "Variable capture", "Context capture", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is mutable lambda?",
        "question_hi": "mutable lambda क्या है?",
        "options_en": ["Lambda that can modify captured by-value variables", "Modifiable lambda", "Mutable capture", "All of above"],
        "options_hi": ["Lambda that can modify captured by-value variables", "Modifiable lambda", "Mutable capture", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is generic lambda (C++14)?",
        "question_hi": "generic lambda (C++14) क्या है?",
        "options_en": ["Lambda with auto parameters", "Template lambda", "Generic parameters", "All of above"],
        "options_hi": ["Lambda with auto parameters", "Template lambda", "Generic parameters", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is init-capture in lambda (C++14)?",
        "question_hi": "lambda में init-capture (C++14) क्या है?",
        "options_en": ["Capture with initializer", "Generalized capture", "Move capture", "All of above"],
        "options_hi": ["Capture with initializer", "Generalized capture", "Move capture", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is template metaprogramming?",
        "question_hi": "template metaprogramming क्या है?",
        "options_en": ["Programming with templates at compile time", "Compile-time computation", "Template programming", "All of above"],
        "options_hi": ["Programming with templates at compile time", "Compile-time computation", "Template programming", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is SFINAE?",
        "question_hi": "SFINAE क्या है?",
        "options_en": ["Substitution Failure Is Not An Error", "Template substitution", "Overload resolution", "All of above"],
        "options_hi": ["Substitution Failure Is Not An Error", "Template substitution", "Overload resolution", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is CRTP (Curiously Recurring Template Pattern)?",
        "question_hi": "CRTP (Curiously Recurring Template Pattern) क्या है?",
        "options_en": ["Class inherits from template instantiation of itself", "Recursive template", "Static polymorphism", "All of above"],
        "options_hi": ["Class inherits from template instantiation of itself", "Recursive template", "Static polymorphism", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is type trait?",
        "question_hi": "type trait क्या है?",
        "options_en": ["Template to query/transform type properties", "Type information", "Compile-time type inspection", "All of above"],
        "options_hi": ["Template to query/transform type properties", "Type information", "Compile-time type inspection", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is variable template (C++14)?",
        "question_hi": "variable template (C++14) क्या है?",
        "options_en": ["Template that represents variable", "Variable with template parameters", "Template variable", "All of above"],
        "options_hi": ["Template that represents variable", "Variable with template parameters", "Template variable", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is fold expression (C++17)?",
        "question_hi": "fold expression (C++17) क्या है?",
        "options_en": ["Compile-time reduction of parameter pack", "Parameter pack folding", "Pack expansion", "All of above"],
        "options_hi": ["Compile-time reduction of parameter pack", "Parameter pack folding", "Pack expansion", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is constexpr if (C++17)?",
        "question_hi": "constexpr if (C++17) क्या है?",
        "options_en": ["Compile-time if statement", "Conditional compilation", "Template metaprogramming if", "All of above"],
        "options_hi": ["Compile-time if statement", "Conditional compilation", "Template metaprogramming if", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is structured binding (C++17)?",
        "question_hi": "structured binding (C++17) क्या है?",
        "options_en": ["Decompose tuple-like objects into variables", "Multiple return values", "Auto decomposition", "All of above"],
        "options_hi": ["Decompose tuple-like objects into variables", "Multiple return values", "Auto decomposition", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is inline variable (C++17)?",
        "question_hi": "inline variable (C++17) क्या है?",
        "options_en": ["Variable allowed in multiple translation units", "Header-only variable", "Single definition variable", "All of above"],
        "options_hi": ["Variable allowed in multiple translation units", "Header-only variable", "Single definition variable", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is template argument deduction for classes (C++17)?",
        "question_hi": "classes के लिए template argument deduction (C++17) क्या है?",
        "options_en": ["Deduce template arguments from constructor", "Class template argument deduction (CTAD)", "Auto template arguments", "All of above"],
        "options_hi": ["Deduce template arguments from constructor", "Class template argument deduction (CTAD)", "Auto template arguments", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is three-way comparison (C++20)?",
        "question_hi": "three-way comparison (C++20) क्या है?",
        "options_en": ["Spaceship operator <=>", "Comparison categories", "Synthesized comparisons", "All of above"],
        "options_hi": ["Spaceship operator <=>", "Comparison categories", "Synthesized comparisons", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is concept (C++20)?",
        "question_hi": "concept (C++20) क्या है?",
        "options_en": ["Named boolean predicate on template parameters", "Template constraints", "Type requirements", "All of above"],
        "options_hi": ["Named boolean predicate on template parameters", "Template constraints", "Type requirements", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is range-based for with initializer (C++20)?",
        "question_hi": "initializer के साथ range-based for (C++20) क्या है?",
        "options_en": ["For loop with init-statement", "Initialized range for", "For with initialization", "All of above"],
        "options_hi": ["For loop with init-statement", "Initialized range for", "For with initialization", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is coroutine (C++20)?",
        "question_hi": "coroutine (C++20) क्या है?",
        "options_en": ["Function that can suspend and resume", "Cooperative multitasking", "Suspendable function", "All of above"],
        "options_hi": ["Function that can suspend and resume", "Cooperative multitasking", "Suspendable function", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is module (C++20)?",
        "question_hi": "module (C++20) क्या है?",
        "options_en": ["New compilation unit replacing headers", "Module system", "Header replacement", "All of above"],
        "options_hi": ["New compilation unit replacing headers", "Module system", "Header replacement", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is designated initializer (C++20)?",
        "question_hi": "designated initializer (C++20) क्या है?",
        "options_en": ["Initialize specific members by name", "Named initialization", "Member initialization", "All of above"],
        "options_hi": ["Initialize specific members by name", "Named initialization", "Member initialization", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is likely/unlikely attribute (C++20)?",
        "question_hi": "likely/unlikely attribute (C++20) क्या है?",
        "options_en": ["Hint for branch prediction", "Optimization hint", "Branch likelihood", "All of above"],
        "options_hi": ["Hint for branch prediction", "Optimization hint", "Branch likelihood", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is consteval (C++20)?",
        "question_hi": "consteval (C++20) क्या है?",
        "options_en": ["Immediate function - must produce compile-time constant", "Compile-time only function", "Constant evaluation", "All of above"],
        "options_hi": ["Immediate function - must produce compile-time constant", "Compile-time only function", "Constant evaluation", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is constinit (C++20)?",
        "question_hi": "constinit (C++20) क्या है?",
        "options_en": ["Variable must be initialized with constant", "Static initialization", "Constant initialization", "All of above"],
        "options_hi": ["Variable must be initialized with constant", "Static initialization", "Constant initialization", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is std::format (C++20)?",
        "question_hi": "std::format (C++20) क्या है?",
        "options_en": ["Type-safe string formatting", "Format library", "Printf replacement", "All of above"],
        "options_hi": ["Type-safe string formatting", "Format library", "Printf replacement", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is std::span (C++20)?",
        "question_hi": "std::span (C++20) क्या है?",
        "options_en": ["Non-owning view over contiguous sequence", "Array view", "Sequence reference", "All of above"],
        "options_hi": ["Non-owning view over contiguous sequence", "Array view", "Sequence reference", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is std::jthread (C++20)?",
        "question_hi": "std::jthread (C++20) क्या है?",
        "options_en": ["Joinable thread with automatic join", "RAII thread", "Automatic joining thread", "All of above"],
        "options_hi": ["Joinable thread with automatic join", "RAII thread", "Automatic joining thread", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is std::atomic_ref (C++20)?",
        "question_hi": "std::atomic_ref (C++20) क्या है?",
        "options_en": ["Atomic reference to non-atomic object", "Reference atomic operations", "Atomic access to non-atomic", "All of above"],
        "options_hi": ["Atomic reference to non-atomic object", "Reference atomic operations", "Atomic access to non-atomic", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is std::bit_cast (C++20)?",
        "question_hi": "std::bit_cast (C++20) क्या है?",
        "options_en": ["Reinterpret object representation as different type", "Type punning", "Bitwise cast", "All of above"],
        "options_hi": ["Reinterpret object representation as different type", "Type punning", "Bitwise cast", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is std::source_location (C++20)?",
        "question_hi": "std::source_location (C++20) क्या है?",
        "options_en": ["Source code location information", "File, line, function info", "Debug information", "All of above"],
        "options_hi": ["Source code location information", "File, line, function info", "Debug information", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is std::endian (C++20)?",
        "question_hi": "std::endian (C++20) क्या है?",
        "options_en": ["Endianness enumeration", "Byte order detection", "Endian type", "All of above"],
        "options_hi": ["Endianness enumeration", "Byte order detection", "Endian type", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is std::is_constant_evaluated (C++20)?",
        "question_hi": "std::is_constant_evaluated (C++20) क्या है?",
        "options_en": ["Detect if called in constant evaluation context", "Compile-time context detection", "Constant evaluation check", "All of above"],
        "options_hi": ["Detect if called in constant evaluation context", "Compile-time context detection", "Constant evaluation check", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is std::lerp (C++20)?",
        "question_hi": "std::lerp (C++20) क्या है?",
        "options_en": ["Linear interpolation function", "Lerp algorithm", "Interpolation", "All of above"],
        "options_hi": ["Linear interpolation function", "Lerp algorithm", "Interpolation", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is std::midpoint (C++20)?",
        "question_hi": "std::midpoint (C++20) क्या है?",
        "options_en": ["Compute midpoint of two values", "Middle point", "Average without overflow", "All of above"],
        "options_hi": ["Compute midpoint of two values", "Middle point", "Average without overflow", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is std::bind_front (C++20)?",
        "question_hi": "std::bind_front (C++20) क्या है?",
        "options_en": ["Bind arguments to front of function", "Partial application", "Bind first arguments", "All of above"],
        "options_hi": ["Bind arguments to front of function", "Partial application", "Bind first arguments", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
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