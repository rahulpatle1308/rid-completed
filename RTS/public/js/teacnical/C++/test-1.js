const questions = [
    {
        "num": 1,
        "question_en": "What is the difference between malloc() and new in C++?",
        "question_hi": "C++ में malloc() और new में क्या अंतर है?",
        "options_en": ["new calls constructor, malloc doesn't", "malloc calls constructor", "Both same", "No difference"],
        "options_hi": ["new constructor को call करता है, malloc नहीं", "malloc constructor को call करता है", "दोनों समान", "कोई अंतर नहीं"],
        "answer_en": "new calls constructor, malloc doesn't",
        "answer_hi": "new constructor को call करता है, malloc नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the purpose of delete operator in C++?",
        "question_hi": "C++ में delete operator का उद्देश्य क्या है?",
        "options_en": ["Deallocates memory allocated by new", "Deletes files", "Removes variables", "Clears memory"],
        "options_hi": ["new द्वारा allocated memory deallocate करता है", "files delete करता है", "variables remove करता है", "memory clear करता है"],
        "answer_en": "Deallocates memory allocated by new",
        "answer_hi": "new द्वारा allocated memory deallocate करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is memory leak in C++?",
        "question_hi": "C++ में memory leak क्या है?",
        "options_en": ["Memory allocated but not deallocated", "Memory corruption", "Memory shortage", "Memory overflow"],
        "options_hi": ["memory allocated लेकिन deallocated नहीं", "memory corruption", "memory shortage", "memory overflow"],
        "answer_en": "Memory allocated but not deallocated",
        "answer_hi": "memory allocated लेकिन deallocated नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the purpose of placement new operator?",
        "question_hi": "placement new operator का उद्देश्य क्या है?",
        "options_en": ["Construct object at pre-allocated memory", "Allocate new memory", "Place object", "New placement"],
        "options_hi": ["pre-allocated memory पर object construct करना", "नई memory allocate करना", "object place करना", "new placement"],
        "answer_en": "Construct object at pre-allocated memory",
        "answer_hi": "pre-allocated memory पर object construct करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is smart pointer in C++?",
        "question_hi": "C++ में smart pointer क्या है?",
        "options_en": ["Pointer that manages memory automatically", "Fast pointer", "Intelligent pointer", "Manual pointer"],
        "options_hi": ["स्वचालित रूप से memory manage करने वाला pointer", "तेज़ pointer", "intelligent pointer", "manual pointer"],
        "answer_en": "Pointer that manages memory automatically",
        "answer_hi": "स्वचालित रूप से memory manage करने वाला pointer",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which smart pointer allows multiple ownership?",
        "question_hi": "कौन सा smart pointer multiple ownership की अनुमति देता है?",
        "options_en": ["shared_ptr", "unique_ptr", "weak_ptr", "auto_ptr"],
        "options_hi": ["shared_ptr", "unique_ptr", "weak_ptr", "auto_ptr"],
        "answer_en": "shared_ptr",
        "answer_hi": "shared_ptr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of weak_ptr?",
        "question_hi": "weak_ptr का उद्देश्य क्या है?",
        "options_en": ["Break circular references", "Weak reference", "Temporary pointer", "Shared pointer"],
        "options_hi": ["circular references तोड़ना", "weak reference", "temporary pointer", "shared pointer"],
        "answer_en": "Break circular references",
        "answer_hi": "circular references तोड़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is RAII (Resource Acquisition Is Initialization)?",
        "question_hi": "RAII (Resource Acquisition Is Initialization) क्या है?",
        "options_en": ["Resource management tied to object lifetime", "Resource allocation", "Initialization only", "Acquisition method"],
        "options_hi": ["object lifetime से जुड़ा resource management", "resource allocation", "केवल initialization", "acquisition method"],
        "answer_en": "Resource management tied to object lifetime",
        "answer_hi": "object lifetime से जुड़ा resource management",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is move semantics in C++11?",
        "question_hi": "C++11 में move semantics क्या है?",
        "options_en": ["Transfer resources without copying", "Moving objects", "Copy semantics", "Static semantics"],
        "options_hi": ["copy किए बिना resources transfer करना", "objects move करना", "copy semantics", "static semantics"],
        "answer_en": "Transfer resources without copying",
        "answer_hi": "copy किए बिना resources transfer करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is rvalue reference?",
        "question_hi": "rvalue reference क्या है?",
        "options_en": ["Reference to temporary object", "Reference to lvalue", "Right reference", "Read reference"],
        "options_hi": ["temporary object का reference", "lvalue का reference", "right reference", "read reference"],
        "answer_en": "Reference to temporary object",
        "answer_hi": "temporary object का reference",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is std::move used for?",
        "question_hi": "std::move का उपयोग किस लिए किया जाता है?",
        "options_en": ["Convert to rvalue reference", "Move object", "Transfer ownership", "All of above"],
        "options_hi": ["rvalue reference में convert करना", "object move करना", "ownership transfer करना", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is copy elision?",
        "question_hi": "copy elision क्या है?",
        "options_en": ["Compiler optimization to avoid unnecessary copying", "Copy elimination", "Move copying", "Copy optimization"],
        "options_hi": ["अनावश्यक copying से बचने के लिए compiler optimization", "copy elimination", "move copying", "copy optimization"],
        "answer_en": "Compiler optimization to avoid unnecessary copying",
        "answer_hi": "अनावश्यक copying से बचने के लिए compiler optimization",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the rule of three/five/zero?",
        "question_hi": "rule of three/five/zero क्या है?",
        "options_en": ["Guidelines for special member functions", "Rule for variables", "Function rules", "Class rules"],
        "options_hi": ["special member functions के लिए guidelines", "variables के लिए rule", "function rules", "class rules"],
        "answer_en": "Guidelines for special member functions",
        "answer_hi": "special member functions के लिए guidelines",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is deep copy vs shallow copy?",
        "question_hi": "deep copy vs shallow copy क्या है?",
        "options_en": ["Deep copy copies pointed data, shallow copies pointers", "Shallow copy copies data", "Both same", "No difference"],
        "options_hi": ["deep copy pointed data copy करती है, shallow copy pointers copy करती है", "shallow copy data copy करती है", "दोनों समान", "कोई अंतर नहीं"],
        "answer_en": "Deep copy copies pointed data, shallow copies pointers",
        "answer_hi": "deep copy pointed data copy करती है, shallow copy pointers copy करती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of std::allocator?",
        "question_hi": "std::allocator का उद्देश्य क्या है?",
        "options_en": ["Memory allocation abstraction", "Allocate memory", "Deallocate memory", "All of above"],
        "options_hi": ["memory allocation abstraction", "memory allocate करना", "memory deallocate करना", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is memory alignment?",
        "question_hi": "memory alignment क्या है?",
        "options_en": ["Placing data at memory addresses divisible by size", "Aligning memory", "Memory arrangement", "Data alignment"],
        "options_hi": ["size से विभाज्य memory addresses पर data place करना", "memory aligning", "memory arrangement", "data alignment"],
        "answer_en": "Placing data at memory addresses divisible by size",
        "answer_hi": "size से विभाज्य memory addresses पर data place करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of alignas specifier?",
        "question_hi": "alignas specifier का उद्देश्य क्या है?",
        "options_en": ["Specify alignment requirement", "Align as", "Alignment specification", "All of above"],
        "options_hi": ["alignment requirement निर्दिष्ट करना", "align as", "alignment specification", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is memory pool?",
        "question_hi": "memory pool क्या है?",
        "options_en": ["Pre-allocated memory for efficient allocation", "Pool of memory", "Memory collection", "Allocated pool"],
        "options_hi": ["कुशल allocation के लिए pre-allocated memory", "memory का pool", "memory collection", "allocated pool"],
        "answer_en": "Pre-allocated memory for efficient allocation",
        "answer_hi": "कुशल allocation के लिए pre-allocated memory",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is garbage collection in C++?",
        "question_hi": "C++ में garbage collection क्या है?",
        "options_en": ["Not built-in, manual memory management", "Automatic memory management", "Garbage collection", "Memory cleanup"],
        "options_hi": ["built-in नहीं, manual memory management", "automatic memory management", "garbage collection", "memory cleanup"],
        "answer_en": "Not built-in, manual memory management",
        "answer_hi": "built-in नहीं, manual memory management",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is memory fragmentation?",
        "question_hi": "memory fragmentation क्या है?",
        "options_en": ["Memory divided into small unusable pieces", "Memory broken", "Fragmented memory", "Memory pieces"],
        "options_hi": ["memory छोटे unusable pieces में विभाजित", "memory broken", "fragmented memory", "memory pieces"],
        "answer_en": "Memory divided into small unusable pieces",
        "answer_hi": "memory छोटे unusable pieces में विभाजित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of operator new[]?",
        "question_hi": "operator new[] का उद्देश्य क्या है?",
        "options_en": ["Allocate array of objects", "New array operator", "Array allocation", "All of above"],
        "options_hi": ["objects का array allocate करना", "new array operator", "array allocation", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is custom allocator?",
        "question_hi": "custom allocator क्या है?",
        "options_en": ["User-defined memory allocation strategy", "Custom allocation", "Allocator design", "User allocator"],
        "options_hi": ["user-defined memory allocation strategy", "custom allocation", "allocator design", "user allocator"],
        "answer_en": "User-defined memory allocation strategy",
        "answer_hi": "user-defined memory allocation strategy",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the purpose of memory_order in atomic operations?",
        "question_hi": "atomic operations में memory_order का उद्देश्य क्या है?",
        "options_en": ["Specify memory synchronization constraints", "Memory order", "Atomic order", "Synchronization order"],
        "options_hi": ["memory synchronization constraints निर्दिष्ट करना", "memory order", "atomic order", "synchronization order"],
        "answer_en": "Specify memory synchronization constraints",
        "answer_hi": "memory synchronization constraints निर्दिष्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is placement delete?",
        "question_hi": "placement delete क्या है?",
        "options_en": ["Match placement new for exception safety", "Delete placement", "Placement deallocation", "Delete operator"],
        "options_hi": ["exception safety के लिए placement new से match करना", "delete placement", "placement deallocation", "delete operator"],
        "answer_en": "Match placement new for exception safety",
        "answer_hi": "exception safety के लिए placement new से match करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of std::addressof?",
        "question_hi": "std::addressof का उद्देश्य क्या है?",
        "options_en": ["Get actual address even if operator& overloaded", "Get address", "Address operator", "All of above"],
        "options_hi": ["operator& overloaded होने पर भी actual address प्राप्त करना", "address प्राप्त करना", "address operator", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is memory model in C++?",
        "question_hi": "C++ में memory model क्या है?",
        "options_en": ["Defines how memory accesses are ordered", "Memory structure", "Model of memory", "Memory layout"],
        "options_hi": ["memory accesses कैसे ordered हैं यह परिभाषित करता है", "memory structure", "memory का model", "memory layout"],
        "answer_en": "Defines how memory accesses are ordered",
        "answer_hi": "memory accesses कैसे ordered हैं यह परिभाषित करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of std::launder?",
        "question_hi": "std::launder का उद्देश्य क्या है?",
        "options_en": ["Bypass compiler optimizations for placement new", "Clean memory", "Launder pointer", "Optimization bypass"],
        "options_hi": ["placement new के लिए compiler optimizations bypass करना", "memory clean करना", "pointer launder करना", "optimization bypass"],
        "answer_en": "Bypass compiler optimizations for placement new",
        "answer_hi": "placement new के लिए compiler optimizations bypass करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is pointer arithmetic?",
        "question_hi": "pointer arithmetic क्या है?",
        "options_en": ["Arithmetic operations on pointers", "Pointer math", "Address arithmetic", "All of above"],
        "options_hi": ["pointers पर arithmetic operations", "pointer math", "address arithmetic", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of std::align?",
        "question_hi": "std::align का उद्देश्य क्या है?",
        "options_en": ["Align pointer within buffer", "Align memory", "Pointer alignment", "Buffer alignment"],
        "options_hi": ["buffer के भीतर pointer align करना", "memory align करना", "pointer alignment", "buffer alignment"],
        "answer_en": "Align pointer within buffer",
        "answer_hi": "buffer के भीतर pointer align करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is memory barrier?",
        "question_hi": "memory barrier क्या है?",
        "options_en": ["Instruction that enforces memory ordering", "Memory fence", "Barrier for memory", "All of above"],
        "options_hi": ["memory ordering लागू करने वाला instruction", "memory fence", "memory के लिए barrier", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of std::malloc vs new?",
        "question_hi": "std::malloc vs new का उद्देश्य क्या है?",
        "options_en": ["malloc is C function, new is C++ operator", "Both same", "No difference", "malloc is C++"],
        "options_hi": ["malloc C function है, new C++ operator है", "दोनों समान", "कोई अंतर नहीं", "malloc C++ है"],
        "answer_en": "malloc is C function, new is C++ operator",
        "answer_hi": "malloc C function है, new C++ operator है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the purpose of operator delete vs free?",
        "question_hi": "operator delete vs free का उद्देश्य क्या है?",
        "options_en": ["delete calls destructor, free doesn't", "free calls destructor", "Both same", "No difference"],
        "options_hi": ["delete destructor को call करता है, free नहीं", "free destructor को call करता है", "दोनों समान", "कोई अंतर नहीं"],
        "answer_en": "delete calls destructor, free doesn't",
        "answer_hi": "delete destructor को call करता है, free नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is memory-mapped file?",
        "question_hi": "memory-mapped file क्या है?",
        "options_en": ["File mapped to memory address space", "Memory file", "Mapped memory", "File memory"],
        "options_hi": ["memory address space पर map की गई file", "memory file", "mapped memory", "file memory"],
        "answer_en": "File mapped to memory address space",
        "answer_hi": "memory address space पर map की गई file",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the purpose of std::pmr (polymorphic memory resource)?",
        "question_hi": "std::pmr (polymorphic memory resource) का उद्देश्य क्या है?",
        "options_en": ["Runtime polymorphic memory allocation", "Memory resource", "Polymorphic allocation", "All of above"],
        "options_hi": ["runtime polymorphic memory allocation", "memory resource", "polymorphic allocation", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of aligned_alloc?",
        "question_hi": "aligned_alloc का उद्देश्य क्या है?",
        "options_en": ["Allocate aligned memory", "Aligned allocation", "Memory alignment allocation", "All of above"],
        "options_hi": ["aligned memory allocate करना", "aligned allocation", "memory alignment allocation", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the purpose of memory tagging?",
        "question_hi": "memory tagging का उद्देश्य क्या है?",
        "options_en": ["Associate metadata with memory", "Tag memory", "Memory metadata", "All of above"],
        "options_hi": ["memory के साथ metadata associate करना", "memory tag करना", "memory metadata", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of custom deleters in smart pointers?",
        "question_hi": "smart pointers में custom deleters का उद्देश्य क्या है?",
        "options_en": ["Custom cleanup when pointer is destroyed", "Custom delete", "Cleanup function", "All of above"],
        "options_hi": ["pointer destroy होने पर custom cleanup", "custom delete", "cleanup function", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the purpose of make_shared?",
        "question_hi": "make_shared का उद्देश्य क्या है?",
        "options_en": ["Efficient shared_ptr creation with single allocation", "Make shared pointer", "Create shared", "All of above"],
        "options_hi": ["single allocation के साथ efficient shared_ptr creation", "shared pointer बनाना", "shared create करना", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of make_unique?",
        "question_hi": "make_unique का उद्देश्य क्या है?",
        "options_en": ["Create unique_ptr", "Make unique pointer", "Unique creation", "All of above"],
        "options_hi": ["unique_ptr create करना", "unique pointer बनाना", "unique creation", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the purpose of std::allocator_traits?",
        "question_hi": "std::allocator_traits का उद्देश्य क्या है?",
        "options_en": ["Uniform interface to allocators", "Allocator traits", "Allocator interface", "All of above"],
        "options_hi": ["allocators के लिए uniform interface", "allocator traits", "allocator interface", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of std::destroy?",
        "question_hi": "std::destroy का उद्देश्य क्या है?",
        "options_en": ["Destroy objects without deallocating memory", "Destroy objects", "Object destruction", "All of above"],
        "options_hi": ["memory deallocate किए बिना objects destroy करना", "objects destroy करना", "object destruction", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the purpose of std::construct_at?",
        "question_hi": "std::construct_at का उद्देश्य क्या है?",
        "options_en": ["Construct object at specific location", "Construct at", "Location construction", "All of above"],
        "options_hi": ["specific location पर object construct करना", "construct at", "location construction", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of memory order consume?",
        "question_hi": "memory order consume का उद्देश्य क्या है?",
        "options_en": ["Data dependency ordering", "Consume ordering", "Dependency order", "All of above"],
        "options_hi": ["data dependency ordering", "consume ordering", "dependency order", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the purpose of std::atomic_ref?",
        "question_hi": "std::atomic_ref का उद्देश्य क्या है?",
        "options_en": ["Atomic reference to non-atomic object", "Atomic reference", "Reference atomic", "All of above"],
        "options_hi": ["non-atomic object का atomic reference", "atomic reference", "reference atomic", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of std::to_address?",
        "question_hi": "std::to_address का उद्देश्य क्या है?",
        "options_en": ["Convert pointer-like to raw pointer", "To address", "Address conversion", "All of above"],
        "options_hi": ["pointer-like को raw pointer में convert करना", "to address", "address conversion", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the purpose of memory synchronization?",
        "question_hi": "memory synchronization का उद्देश्य क्या है?",
        "options_en": ["Ensure consistent memory view across threads", "Memory consistency", "Thread synchronization", "All of above"],
        "options_hi": ["threads के बीच consistent memory view सुनिश्चित करना", "memory consistency", "thread synchronization", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of std::assume_aligned?",
        "question_hi": "std::assume_aligned का उद्देश्य क्या है?",
        "options_en": ["Hint compiler about pointer alignment", "Assume aligned", "Alignment hint", "All of above"],
        "options_hi": ["pointer alignment के बारे में compiler को hint देना", "assume aligned", "alignment hint", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the purpose of memory ordering relaxed?",
        "question_hi": "memory ordering relaxed का उद्देश्य क्या है?",
        "options_en": ["No synchronization, only atomicity", "Relaxed ordering", "Weak ordering", "All of above"],
        "options_hi": ["कोई synchronization नहीं, केवल atomicity", "relaxed ordering", "weak ordering", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of std::uninitialized_copy?",
        "question_hi": "std::uninitialized_copy का उद्देश्य क्या है?",
        "options_en": ["Copy to uninitialized memory", "Uninitialized copy", "Memory copy", "All of above"],
        "options_hi": ["uninitialized memory पर copy करना", "uninitialized copy", "memory copy", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the purpose of std::destroy_at?",
        "question_hi": "std::destroy_at का उद्देश्य क्या है?",
        "options_en": ["Destroy object at specific location", "Destroy at", "Location destruction", "All of above"],
        "options_hi": ["specific location पर object destroy करना", "destroy at", "location destruction", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    }
]
// --------------------------- GLOBAL VARS -----------------------------
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