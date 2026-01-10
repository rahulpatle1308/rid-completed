const questions= [
    {
        "num": 1,
        "question_en": "What is the difference between int* p and int *p in C++?",
        "question_hi": "C++ में int* p और int *p में क्या अंतर है?",
        "options_en": ["No difference, both declare pointer to int", "Style difference only", "Same meaning", "All of above"],
        "options_hi": ["कोई अंतर नहीं, दोनों int के pointer declare करते हैं", "केवल style difference", "same meaning", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is a dangling pointer in C++?",
        "question_hi": "C++ में dangling pointer क्या है?",
        "options_en": ["Pointer pointing to deallocated memory", "Invalid pointer", "Pointer to freed memory", "All of above"],
        "options_hi": ["Pointer pointing to deallocated memory", "Invalid pointer", "Pointer to freed memory", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is a wild pointer in C++?",
        "question_hi": "C++ में wild pointer क्या है?",
        "options_en": ["Uninitialized pointer", "Pointer with garbage value", "Undefined pointer", "All of above"],
        "options_hi": ["Uninitialized pointer", "Pointer with garbage value", "Undefined pointer", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the purpose of nullptr in C++?",
        "question_hi": "C++ में nullptr का उद्देश्य क्या है?",
        "options_en": ["Type-safe null pointer", "Better than NULL or 0", "Prevents ambiguity", "All of above"],
        "options_hi": ["Type-safe null pointer", "Better than NULL or 0", "Prevents ambiguity", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is pointer to pointer in C++?",
        "question_hi": "C++ में pointer to pointer क्या है?",
        "options_en": ["Pointer that points to another pointer", "Double pointer", "int** type", "All of above"],
        "options_hi": ["Pointer that points to another pointer", "Double pointer", "int** type", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is array to pointer decay?",
        "question_hi": "array to pointer decay क्या है?",
        "options_en": ["Array implicitly converts to pointer to first element", "Array name as pointer", "Automatic conversion", "All of above"],
        "options_hi": ["Array implicitly converts to pointer to first element", "Array name as pointer", "Automatic conversion", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is pointer arithmetic?",
        "question_hi": "pointer arithmetic क्या है?",
        "options_en": ["Arithmetic operations on pointers", "Increment/decrement pointers", "Pointer manipulation", "All of above"],
        "options_hi": ["Arithmetic operations on pointers", "Increment/decrement pointers", "Pointer manipulation", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is void pointer in C++?",
        "question_hi": "C++ में void pointer क्या है?",
        "options_en": ["Pointer to any type", "Generic pointer", "void* type", "All of above"],
        "options_hi": ["Pointer to any type", "Generic pointer", "void* type", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is function pointer in C++?",
        "question_hi": "C++ में function pointer क्या है?",
        "options_en": ["Pointer that points to function", "Variable storing function address", "Callable pointer", "All of above"],
        "options_hi": ["Pointer that points to function", "Variable storing function address", "Callable pointer", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is const pointer vs pointer to const?",
        "question_hi": "const pointer vs pointer to const क्या है?",
        "options_en": ["const int* vs int* const", "Pointer to const vs const pointer", "Different const placements", "All of above"],
        "options_hi": ["const int* vs int* const", "Pointer to const vs const pointer", "Different const placements", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is smart pointer in C++?",
        "question_hi": "C++ में smart pointer क्या है?",
        "options_en": ["RAII wrapper for raw pointers", "Automatic memory management", "unique_ptr, shared_ptr, weak_ptr", "All of above"],
        "options_hi": ["RAII wrapper for raw pointers", "Automatic memory management", "unique_ptr, shared_ptr, weak_ptr", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is unique_ptr?",
        "question_hi": "unique_ptr क्या है?",
        "options_en": ["Exclusive ownership smart pointer", "Non-copyable pointer", "Single owner", "All of above"],
        "options_hi": ["Exclusive ownership smart pointer", "Non-copyable pointer", "Single owner", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is shared_ptr?",
        "question_hi": "shared_ptr क्या है?",
        "options_en": ["Shared ownership smart pointer", "Reference counting pointer", "Multiple owners", "All of above"],
        "options_hi": ["Shared ownership smart pointer", "Reference counting pointer", "Multiple owners", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is weak_ptr?",
        "question_hi": "weak_ptr क्या है?",
        "options_en": ["Non-owning reference to shared_ptr", "Break circular references", "Weak reference", "All of above"],
        "options_hi": ["Non-owning reference to shared_ptr", "Break circular references", "Weak reference", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is auto_ptr (deprecated)?",
        "question_hi": "auto_ptr (deprecated) क्या है?",
        "options_en": ["Deprecated smart pointer", "Has ownership issues", "Replaced by unique_ptr", "All of above"],
        "options_hi": ["Deprecated smart pointer", "Has ownership issues", "Replaced by unique_ptr", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is RAII?",
        "question_hi": "RAII क्या है?",
        "options_en": ["Resource Acquisition Is Initialization", "Tie resource lifetime to object", "Automatic cleanup", "All of above"],
        "options_hi": ["Resource Acquisition Is Initialization", "Tie resource lifetime to object", "Automatic cleanup", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is reference in C++?",
        "question_hi": "C++ में reference क्या है?",
        "options_en": ["Alias for existing variable", "Another name for variable", "Must be initialized", "All of above"],
        "options_hi": ["Alias for existing variable", "Another name for variable", "Must be initialized", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is lvalue reference?",
        "question_hi": "lvalue reference क्या है?",
        "options_en": ["Reference to lvalue", "T& type", "Binds to named objects", "All of above"],
        "options_hi": ["Reference to lvalue", "T& type", "Binds to named objects", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is rvalue reference?",
        "question_hi": "rvalue reference क्या है?",
        "options_en": ["Reference to rvalue", "T&& type", "Move semantics", "All of above"],
        "options_hi": ["Reference to rvalue", "T&& type", "Move semantics", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is forwarding reference?",
        "question_hi": "forwarding reference क्या है?",
        "options_en": ["T&& in template context", "Universal reference", "Perfect forwarding", "All of above"],
        "options_hi": ["Template context में T&&", "Universal reference", "Perfect forwarding", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is const reference?",
        "question_hi": "const reference क्या है?",
        "options_en": ["Reference to const object", "const T& type", "Read-only reference", "All of above"],
        "options_hi": ["const object का reference", "const T& type", "Read-only reference", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is reference collapsing?",
        "question_hi": "reference collapsing क्या है?",
        "options_en": ["Rule for reference to reference", "Template type deduction", "&& + && = &&, etc.", "All of above"],
        "options_hi": ["Rule for reference to reference", "Template type deduction", "&& + && = &&, etc.", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is std::ref?",
        "question_hi": "std::ref क्या है?",
        "options_en": ["Creates reference wrapper", "Pass reference to templates", "std::reference_wrapper", "All of above"],
        "options_hi": ["reference wrapper create करता है", "templates को reference pass करता है", "std::reference_wrapper", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is dangling reference?",
        "question_hi": "dangling reference क्या है?",
        "options_en": ["Reference to destroyed object", "Invalid reference", "Reference to out-of-scope variable", "All of above"],
        "options_hi": ["destroyed object का reference", "Invalid reference", "out-of-scope variable का reference", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is return by reference?",
        "question_hi": "return by reference क्या है?",
        "options_en": ["Function returns reference", "Avoid copy", "Return existing object", "All of above"],
        "options_hi": ["Function returns reference", "Avoid copy", "Return existing object", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is reference as function parameter?",
        "question_hi": "function parameter के रूप में reference क्या है?",
        "options_en": ["Pass by reference", "Avoid copy of argument", "Modify original", "All of above"],
        "options_hi": ["Pass by reference", "Avoid copy of argument", "Modify original", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is const reference parameter?",
        "question_hi": "const reference parameter क्या है?",
        "options_en": ["Read-only reference parameter", "Avoid copy, prevent modification", "const T& parameter", "All of above"],
        "options_hi": ["Read-only reference parameter", "Avoid copy, prevent modification", "const T& parameter", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is reference to pointer?",
        "question_hi": "pointer का reference क्या है?",
        "options_en": ["Reference that refers to pointer", "T*& type", "Modify pointer itself", "All of above"],
        "options_hi": ["Reference that refers to pointer", "T*& type", "Modify pointer itself", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is pointer to reference?",
        "question_hi": "reference का pointer क्या है?",
        "options_en": ["Not allowed in C++", "Cannot have pointer to reference", "Illegal", "All of above"],
        "options_hi": ["C++ में allowed नहीं", "Cannot have pointer to reference", "Illegal", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is reference to array?",
        "question_hi": "array का reference क्या है?",
        "options_en": ["Reference to entire array", "T(&)[N] type", "Preserves array size", "All of above"],
        "options_hi": ["Reference to entire array", "T(&)[N] type", "Preserves array size", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is reference qualifiers for member functions?",
        "question_hi": "member functions के लिए reference qualifiers क्या हैं?",
        "options_en": ["& and && after function", "Overload on lvalue/rvalue object", "this pointer qualification", "All of above"],
        "options_hi": ["& and && after function", "Overload on lvalue/rvalue object", "this pointer qualification", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is std::reference_wrapper?",
        "question_hi": "std::reference_wrapper क्या है?",
        "options_en": ["Copyable reference wrapper", "Can store in containers", "Behaves like reference", "All of above"],
        "options_hi": ["Copyable reference wrapper", "Can store in containers", "Behaves like reference", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is temporary materialization?",
        "question_hi": "temporary materialization क्या है?",
        "options_en": ["prvalue becomes xvalue", "Temporary object created", "For reference binding", "All of above"],
        "options_hi": ["prvalue becomes xvalue", "Temporary object created", "For reference binding", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is lifetime extension of temporaries?",
        "question_hi": "temporaries का lifetime extension क्या है?",
        "options_en": ["Temporary bound to const reference lives longer", "Extended lifetime", "Reference extends life", "All of above"],
        "options_hi": ["Temporary bound to const reference lives longer", "Extended lifetime", "Reference extends life", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is reference initialization?",
        "question_hi": "reference initialization क्या है?",
        "options_en": ["Must bind to valid object", "Initialization rules", "Direct or copy initialization", "All of above"],
        "options_hi": ["Must bind to valid object", "Initialization rules", "Direct or copy initialization", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is reference reassignment?",
        "question_hi": "reference reassignment क्या है?",
        "options_en": ["Not allowed in C++", "Reference cannot be rebound", "Once bound, always bound", "All of above"],
        "options_hi": ["C++ में allowed नहीं", "Reference cannot be rebound", "Once bound, always bound", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is reference comparison?",
        "question_hi": "reference comparison क्या है?",
        "options_en": ["Compares referred objects", "Not addresses", "Same as object comparison", "All of above"],
        "options_hi": ["referred objects compare करता है", "addresses नहीं", "object comparison के समान", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is reference in range-based for loop?",
        "question_hi": "range-based for loop में reference क्या है?",
        "options_en": ["Avoid copy of elements", "Modify elements", "auto& or const auto&", "All of above"],
        "options_hi": ["elements की copy avoid करें", "elements modify करें", "auto& or const auto&", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is forwarding reference in auto?",
        "question_hi": "auto में forwarding reference क्या है?",
        "options_en": ["auto&& is forwarding reference", "Universal reference for auto", "Deduces lvalue/rvalue", "All of above"],
        "options_hi": ["auto&& forwarding reference है", "auto के लिए universal reference", "lvalue/rvalue deduces करता है", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is reference in structured binding?",
        "question_hi": "structured binding में reference क्या है?",
        "options_en": ["Can bind as reference", "auto& [a,b] = tuple", "Reference to elements", "All of above"],
        "options_hi": ["reference के रूप में bind कर सकते हैं", "auto& [a,b] = tuple", "elements का reference", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is reference to static member?",
        "question_hi": "static member का reference क्या है?",
        "options_en": ["Reference to static variable", "Works like normal reference", "Bound to static storage", "All of above"],
        "options_hi": ["static variable का reference", "normal reference की तरह काम करता है", "static storage से bound", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is reference to bit-field?",
        "question_hi": "bit-field का reference क्या है?",
        "options_en": ["Not allowed in C++", "Cannot have reference to bit-field", "Illegal", "All of above"],
        "options_hi": ["C++ में allowed नहीं", "Cannot have reference to bit-field", "Illegal", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is reference to void?",
        "question_hi": "void का reference क्या है?",
        "options_en": ["Not allowed in C++", "Cannot have reference to void", "Illegal", "All of above"],
        "options_hi": ["C++ में allowed नहीं", "Cannot have reference to void", "Illegal", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is reference to function?",
        "question_hi": "function का reference क्या है?",
        "options_en": ["Reference to function", "T(&)() type", "Alternative to function pointer", "All of above"],
        "options_hi": ["function का reference", "T(&)() type", "function pointer का alternative", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is reference to member?",
        "question_hi": "member का reference क्या है?",
        "options_en": ["Pointer to member alternative", "T C::& type", "Reference to class member", "All of above"],
        "options_hi": ["Pointer to member alternative", "T C::& type", "class member का reference", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is volatile reference?",
        "question_hi": "volatile reference क्या है?",
        "options_en": ["Reference to volatile object", "volatile T& type", "Prevent optimization on access", "All of above"],
        "options_hi": ["volatile object का reference", "volatile T& type", "access पर optimization prevent करें", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is reference in exception specification?",
        "question_hi": "exception specification में reference क्या है?",
        "options_en": ["Throw by reference", "Catch by reference", "Avoid slicing", "All of above"],
        "options_hi": ["Throw by reference", "Catch by reference", "Avoid slicing", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is reference in lambda capture?",
        "question_hi": "lambda capture में reference क्या है?",
        "options_en": ["Capture by reference", "[&] or [&var]", "Reference to outer variables", "All of above"],
        "options_hi": ["Capture by reference", "[&] or [&var]", "outer variables का reference", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is reference in template?",
        "question_hi": "template में reference क्या है?",
        "options_en": ["Template parameter can be reference", "T& as parameter", "Reference type deduction", "All of above"],
        "options_hi": ["Template parameter reference हो सकता है", "T& as parameter", "Reference type deduction", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is reference vs pointer summary?",
        "question_hi": "reference vs pointer summary क्या है?",
        "options_en": ["Reference is alias, pointer is variable", "Reference must be initialized", "Reference cannot be null", "All of above"],
        "options_hi": ["Reference alias है, pointer variable है", "Reference initialized होना चाहिए", "Reference null नहीं हो सकता", "उपरोक्त सभी"],
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