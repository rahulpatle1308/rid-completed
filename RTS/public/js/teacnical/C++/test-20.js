const questions= [
    {
        "num": 1,
        "question_en": "What is the purpose of 'std::move' in C++?",
        "question_hi": "C++ में 'std::move' का उद्देश्य क्या है?",
        "options_en": ["Converts to rvalue reference", "Moves resources", "Enables move semantics", "All of above"],
        "options_hi": ["rvalue reference में convert करता है", "resources move करता है", "move semantics enable करता है", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is perfect forwarding in C++?",
        "question_hi": "C++ में perfect forwarding क्या है?",
        "options_en": ["Forward arguments preserving value category", "Complete forwarding", "Preserve lvalue/rvalue", "All of above"],
        "options_hi": ["value category preserve करते हुए arguments forward करना", "complete forwarding", "lvalue/rvalue preserve करना", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is 'std::forward' used for?",
        "question_hi": "'std::forward' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Perfect forwarding of arguments", "Forward references", "Preserve value category", "All of above"],
        "options_hi": ["arguments का perfect forwarding", "forward references", "value category preserve करना", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is universal reference?",
        "question_hi": "universal reference क्या है?",
        "options_en": ["Template parameter that can be lvalue or rvalue reference", "Forwarding reference", "T&& in template context", "All of above"],
        "options_hi": ["Template parameter जो lvalue या rvalue reference हो सकता है", "forwarding reference", "template context में T&&", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is move constructor?",
        "question_hi": "move constructor क्या है?",
        "options_en": ["Constructor that moves resources from another object", "Rvalue reference constructor", "Transfer constructor", "All of above"],
        "options_hi": ["Constructor जो दूसरे object से resources move करता है", "rvalue reference constructor", "transfer constructor", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is move assignment operator?",
        "question_hi": "move assignment operator क्या है?",
        "options_en": ["Assignment operator that moves resources", "Move assignment", "Operator= with rvalue reference", "All of above"],
        "options_hi": ["Assignment operator जो resources move करता है", "move assignment", "rvalue reference के साथ operator=", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the rule of five?",
        "question_hi": "rule of five क्या है?",
        "options_en": ["If you define one of destructor, copy constructor, copy assignment, move constructor, move assignment, define all", "Five special members", "Resource management rule", "All of above"],
        "options_hi": ["यदि आप destructor, copy constructor, copy assignment, move constructor, move assignment में से एक define करते हैं, तो सभी define करें", "five special members", "resource management rule", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is copy elision?",
        "question_hi": "copy elision क्या है?",
        "options_en": ["Compiler optimization to avoid unnecessary copies", "Copy elimination", "Return value optimization", "All of above"],
        "options_hi": ["अनावश्यक copies से बचने के लिए compiler optimization", "copy elimination", "return value optimization", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is RVO (Return Value Optimization)?",
        "question_hi": "RVO (Return Value Optimization) क्या है?",
        "options_en": ["Optimization to eliminate temporary when returning", "Return optimization", "Eliminate copy on return", "All of above"],
        "options_hi": ["return करते समय temporary eliminate करने के लिए optimization", "return optimization", "return पर copy eliminate करना", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is NRVO (Named Return Value Optimization)?",
        "question_hi": "NRVO (Named Return Value Optimization) क्या है?",
        "options_en": ["Optimization for named local variable return", "Named return optimization", "Local variable return optimization", "All of above"],
        "options_hi": ["named local variable return के लिए optimization", "named return optimization", "local variable return optimization", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is std::exchange?",
        "question_hi": "std::exchange क्या है?",
        "options_en": ["Replace value and return old value", "Atomic exchange", "Value swapping", "All of above"],
        "options_hi": ["value replace करें और old value return करें", "atomic exchange", "value swapping", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is std::swap?",
        "question_hi": "std::swap क्या है?",
        "options_en": ["Exchange values of two objects", "Value swapping", "Template swap function", "All of above"],
        "options_hi": ["दो objects के values exchange करें", "value swapping", "template swap function", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is move-only type?",
        "question_hi": "move-only type क्या है?",
        "options_en": ["Type that can be moved but not copied", "Only movable", "Non-copyable movable", "All of above"],
        "options_hi": ["Type जो move किया जा सकता है लेकिन copy नहीं", "only movable", "non-copyable movable", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is noexcept specifier?",
        "question_hi": "noexcept specifier क्या है?",
        "options_en": ["Specifies function won't throw exceptions", "No exception guarantee", "Exception specification", "All of above"],
        "options_hi": ["Specifies function won't throw exceptions", "No exception guarantee", "Exception specification", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is move_if_noexcept?",
        "question_hi": "move_if_noexcept क्या है?",
        "options_en": ["Conditional move based on noexcept", "Move if noexcept", "Safe move", "All of above"],
        "options_hi": ["noexcept के आधार पर conditional move", "move if noexcept", "safe move", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is forwarding constructor?",
        "question_hi": "forwarding constructor क्या है?",
        "options_en": ["Constructor that forwards arguments to member", "Perfect forwarding constructor", "Member initialization forwarding", "All of above"],
        "options_hi": ["Constructor जो arguments को member में forward करता है", "perfect forwarding constructor", "member initialization forwarding", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is emplace_back in vector?",
        "question_hi": "vector में emplace_back क्या है?",
        "options_en": ["Construct element in-place at back", "In-place construction", "Avoid copy/move", "All of above"],
        "options_hi": ["back पर in-place element construct करें", "in-place construction", "copy/move avoid करें", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is emplace in containers?",
        "question_hi": "containers में emplace क्या है?",
        "options_en": ["In-place construction in containers", "Direct construction", "Avoid temporaries", "All of above"],
        "options_hi": ["containers में in-place construction", "direct construction", "temporaries avoid करें", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of std::make_unique?",
        "question_hi": "std::make_unique का उद्देश्य क्या है?",
        "options_en": ["Create unique_ptr with single allocation", "Safe unique_ptr creation", "Exception safety", "All of above"],
        "options_hi": ["single allocation के साथ unique_ptr create करें", "safe unique_ptr creation", "exception safety", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the purpose of std::make_shared?",
        "question_hi": "std::make_shared का उद्देश्य क्या है?",
        "options_en": ["Create shared_ptr with single allocation", "Efficient shared_ptr", "Control block with object", "All of above"],
        "options_hi": ["single allocation के साथ shared_ptr create करें", "efficient shared_ptr", "object के साथ control block", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of std::make_shared vs new?",
        "question_hi": "std::make_shared vs new का उद्देश्य क्या है?",
        "options_en": ["Single allocation for object and control block", "Exception safety", "Better performance", "All of above"],
        "options_hi": ["object और control block के लिए single allocation", "exception safety", "better performance", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the purpose of std::make_unique vs new?",
        "question_hi": "std::make_unique vs new का उद्देश्य क्या है?",
        "options_en": ["Exception safety", "No raw new", "Modern C++ style", "All of above"],
        "options_hi": ["exception safety", "no raw new", "modern C++ style", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the purpose of std::forward_list?",
        "question_hi": "std::forward_list का उद्देश्य क्या है?",
        "options_en": ["Singly linked list", "Forward-only list", "Memory efficient list", "All of above"],
        "options_hi": ["singly linked list", "forward-only list", "memory efficient list", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the purpose of std::array?",
        "question_hi": "std::array का उद्देश्य क्या है?",
        "options_en": ["Fixed-size array container", "Stack-allocated array", "STL interface for arrays", "All of above"],
        "options_hi": ["fixed-size array container", "stack-allocated array", "arrays के लिए STL interface", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of std::tuple?",
        "question_hi": "std::tuple का उद्देश्य क्या है?",
        "options_en": ["Heterogeneous collection of elements", "Fixed-size heterogeneous container", "Multiple return values", "All of above"],
        "options_hi": ["elements का heterogeneous collection", "fixed-size heterogeneous container", "multiple return values", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the purpose of std::pair?",
        "question_hi": "std::pair का उद्देश्य क्या है?",
        "options_en": ["Two-element tuple", "Key-value pair", "Simple pair container", "All of above"],
        "options_hi": ["two-element tuple", "key-value pair", "simple pair container", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of std::bitset?",
        "question_hi": "std::bitset का उद्देश्य क्या है?",
        "options_en": ["Fixed-size sequence of bits", "Bit manipulation", "Boolean array", "All of above"],
        "options_hi": ["bits की fixed-size sequence", "bit manipulation", "boolean array", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the purpose of std::valarray?",
        "question_hi": "std::valarray का उद्देश्य क्या है?",
        "options_en": ["Numerical array with operations", "Mathematical array", "Vector operations", "All of above"],
        "options_hi": ["operations के साथ numerical array", "mathematical array", "vector operations", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of std::initializer_list?",
        "question_hi": "std::initializer_list का उद्देश्य क्या है?",
        "options_en": ["Initialize containers with list", "Brace initialization", "Initializer list constructor", "All of above"],
        "options_hi": ["list के साथ containers initialize करें", "brace initialization", "initializer list constructor", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the purpose of std::ratio?",
        "question_hi": "std::ratio का उद्देश्य क्या है?",
        "options_en": ["Compile-time rational numbers", "Ratio arithmetic", "Template rational", "All of above"],
        "options_hi": ["compile-time rational numbers", "ratio arithmetic", "template rational", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of std::chrono::duration?",
        "question_hi": "std::chrono::duration का उद्देश्य क्या है?",
        "options_en": ["Time duration", "Time interval", "Duration type", "All of above"],
        "options_hi": ["time duration", "time interval", "duration type", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the purpose of std::chrono::time_point?",
        "question_hi": "std::chrono::time_point का उद्देश्य क्या है?",
        "options_en": ["Point in time", "Timestamp", "Time reference", "All of above"],
        "options_hi": ["point in time", "timestamp", "time reference", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of std::regex?",
        "question_hi": "std::regex का उद्देश्य क्या है?",
        "options_en": ["Regular expressions", "Pattern matching", "Text search/replace", "All of above"],
        "options_hi": ["regular expressions", "pattern matching", "text search/replace", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the purpose of std::random_device?",
        "question_hi": "std::random_device का उद्देश्य क्या है?",
        "options_en": ["Non-deterministic random number generator", "True random numbers", "Hardware entropy", "All of above"],
        "options_hi": ["non-deterministic random number generator", "true random numbers", "hardware entropy", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of std::mt19937?",
        "question_hi": "std::mt19937 का उद्देश्य क्या है?",
        "options_en": ["Mersenne Twister PRNG", "Pseudorandom generator", "Fast random numbers", "All of above"],
        "options_hi": ["Mersenne Twister PRNG", "pseudorandom generator", "fast random numbers", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the purpose of std::uniform_int_distribution?",
        "question_hi": "std::uniform_int_distribution का उद्देश्य क्या है?",
        "options_en": ["Uniform integer distribution", "Random integers in range", "Equal probability integers", "All of above"],
        "options_hi": ["uniform integer distribution", "range में random integers", "equal probability integers", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of std::normal_distribution?",
        "question_hi": "std::normal_distribution का उद्देश्य क्या है?",
        "options_en": ["Normal (Gaussian) distribution", "Bell curve distribution", "Real numbers with mean/stddev", "All of above"],
        "options_hi": ["normal (Gaussian) distribution", "bell curve distribution", "mean/stddev के साथ real numbers", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the purpose of std::accumulate?",
        "question_hi": "std::accumulate का उद्देश्य क्या है?",
        "options_en": ["Accumulate values in range", "Sum of elements", "Fold operation", "All of above"],
        "options_hi": ["range में values accumulate करें", "elements का sum", "fold operation", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of std::inner_product?",
        "question_hi": "std::inner_product का उद्देश्य क्या है?",
        "options_en": ["Compute inner product of two ranges", "Dot product", "Vector multiplication", "All of above"],
        "options_hi": ["दो ranges का inner product compute करें", "dot product", "vector multiplication", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the purpose of std::partial_sum?",
        "question_hi": "std::partial_sum का उद्देश्य क्या है?",
        "options_en": ["Compute partial sums of range", "Running total", "Cumulative sum", "All of above"],
        "options_hi": ["range का partial sums compute करें", "running total", "cumulative sum", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of std::adjacent_difference?",
        "question_hi": "std::adjacent_difference का उद्देश्य क्या है?",
        "options_en": ["Compute differences between adjacent elements", "Consecutive differences", "Element differences", "All of above"],
        "options_hi": ["adjacent elements के बीच differences compute करें", "consecutive differences", "element differences", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the purpose of std::gcd?",
        "question_hi": "std::gcd का उद्देश्य क्या है?",
        "options_en": ["Compute greatest common divisor", "GCD function", "Mathematical gcd", "All of above"],
        "options_hi": ["greatest common divisor compute करें", "GCD function", "mathematical gcd", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of std::lcm?",
        "question_hi": "std::lcm का उद्देश्य क्या है?",
        "options_en": ["Compute least common multiple", "LCM function", "Mathematical lcm", "All of above"],
        "options_hi": ["least common multiple compute करें", "LCM function", "mathematical lcm", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the purpose of std::midpoint?",
        "question_hi": "std::midpoint का उद्देश्य क्या है?",
        "options_en": ["Compute midpoint of two values", "Middle point", "Average without overflow", "All of above"],
        "options_hi": ["दो values का midpoint compute करें", "middle point", "overflow के बिना average", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of std::lerp?",
        "question_hi": "std::lerp का उद्देश्य क्या है?",
        "options_en": ["Linear interpolation", "Lerp function", "Interpolate between values", "All of above"],
        "options_hi": ["linear interpolation", "lerp function", "values के बीच interpolate", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the purpose of std::clamp?",
        "question_hi": "std::clamp का उद्देश्य क्या है?",
        "options_en": ["Clamp value between bounds", "Limit value to range", "Bound checking", "All of above"],
        "options_hi": ["bounds के बीच value clamp करें", "range में value limit करें", "bound checking", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of std::sample?",
        "question_hi": "std::sample का उद्देश्य क्या है?",
        "options_en": ["Random sampling from range", "Select random elements", "Statistical sampling", "All of above"],
        "options_hi": ["range से random sampling", "random elements select करें", "statistical sampling", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the purpose of std::shuffle?",
        "question_hi": "std::shuffle का उद्देश्य क्या है?",
        "options_en": ["Randomly reorder elements", "Shuffle sequence", "Random permutation", "All of above"],
        "options_hi": ["randomly elements reorder करें", "sequence shuffle करें", "random permutation", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of std::next_permutation?",
        "question_hi": "std::next_permutation का उद्देश्य क्या है?",
        "options_en": ["Generate next lexicographic permutation", "Permutation generation", "All permutations", "All of above"],
        "options_hi": ["next lexicographic permutation generate करें", "permutation generation", "all permutations", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the purpose of std::prev_permutation?",
        "question_hi": "std::prev_permutation का उद्देश्य क्या है?",
        "options_en": ["Generate previous lexicographic permutation", "Previous permutation", "Reverse permutation", "All of above"],
        "options_hi": ["previous lexicographic permutation generate करें", "previous permutation", "reverse permutation", "उपरोक्त सभी"],
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