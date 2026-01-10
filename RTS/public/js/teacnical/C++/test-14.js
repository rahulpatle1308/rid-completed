const questions=[
    {
        "num": 1,
        "question_en": "What is the purpose of 'using namespace std;' in C++?",
        "question_hi": "C++ में 'using namespace std;' का उद्देश्य क्या है?",
        "options_en": ["To avoid writing std:: before standard library names", "To import all functions", "To use standard functions", "All of above"],
        "options_hi": ["standard library names से पहले std:: लिखने से बचने के लिए", "सभी functions import करने के लिए", "standard functions उपयोग करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which header is needed for std::cout and std::cin?",
        "question_hi": "std::cout और std::cin के लिए कौन सा header आवश्यक है?",
        "options_en": ["<iostream>", "<stdio.h>", "<ostream>", "<console>"],
        "options_hi": ["<iostream>", "<stdio.h>", "<ostream>", "<console>"],
        "answer_en": "<iostream>",
        "answer_hi": "<iostream>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What does the 'endl' manipulator do?",
        "question_hi": "'endl' manipulator क्या करता है?",
        "options_en": ["Inserts newline and flushes output buffer", "Only newline", "Ends line", "All of above"],
        "options_hi": ["newline insert करता है और output buffer flush करता है", "केवल newline", "line end करता है", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the purpose of std::setw manipulator?",
        "question_hi": "std::setw manipulator का उद्देश्य क्या है?",
        "options_en": ["Sets field width for output", "Width setting", "Format width", "All of above"],
        "options_hi": ["output के लिए field width set करता है", "width setting", "format width", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which header is needed for std::string?",
        "question_hi": "std::string के लिए कौन सा header आवश्यक है?",
        "options_en": ["<string>", "<string.h>", "<cstring>", "<str>"],
        "options_hi": ["<string>", "<string.h>", "<cstring>", "<str>"],
        "answer_en": "<string>",
        "answer_hi": "<string>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the purpose of std::getline?",
        "question_hi": "std::getline का उद्देश्य क्या है?",
        "options_en": ["Reads line with spaces from input", "Line reading", "Full line input", "All of above"],
        "options_hi": ["input से spaces के साथ line read करता है", "line reading", "full line input", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which function converts string to integer?",
        "question_hi": "कौन सा function string को integer में convert करता है?",
        "options_en": ["std::stoi", "atoi", "Both A and B", "to_int"],
        "options_hi": ["std::stoi", "atoi", "A और B दोनों", "to_int"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the purpose of std::to_string?",
        "question_hi": "std::to_string का उद्देश्य क्या है?",
        "options_en": ["Converts numeric value to string", "Number to string", "String conversion", "All of above"],
        "options_hi": ["numeric value को string में convert करता है", "number to string", "string conversion", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which header is needed for mathematical functions like sqrt?",
        "question_hi": "sqrt जैसे mathematical functions के लिए कौन सा header आवश्यक है?",
        "options_en": ["<cmath>", "<math.h>", "Both A and B", "<numeric>"],
        "options_hi": ["<cmath>", "<math.h>", "A और B दोनों", "<numeric>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the purpose of std::abs?",
        "question_hi": "std::abs का उद्देश्य क्या है?",
        "options_en": ["Returns absolute value", "Absolute function", "Positive value", "All of above"],
        "options_hi": ["absolute value return करता है", "absolute function", "positive value", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which header is needed for time functions?",
        "question_hi": "time functions के लिए कौन सा header आवश्यक है?",
        "options_en": ["<ctime>", "<time.h>", "Both A and B", "<chrono>"],
        "options_hi": ["<ctime>", "<time.h>", "A और B दोनों", "<chrono>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the purpose of std::chrono library?",
        "question_hi": "std::chrono library का उद्देश्य क्या है?",
        "options_en": ["Time utilities", "Clock and time", "Time measurement", "All of above"],
        "options_hi": ["time utilities", "clock और time", "time measurement", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which header is needed for random number generation?",
        "question_hi": "random number generation के लिए कौन सा header आवश्यक है?",
        "options_en": ["<random>", "<stdlib.h>", "Both A and B", "<cstdlib>"],
        "options_hi": ["<random>", "<stdlib.h>", "A और B दोनों", "<cstdlib>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the purpose of std::random_device?",
        "question_hi": "std::random_device का उद्देश्य क्या है?",
        "options_en": ["Non-deterministic random number generator", "True random", "Hardware random", "All of above"],
        "options_hi": ["non-deterministic random number generator", "true random", "hardware random", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which header is needed for file operations?",
        "question_hi": "file operations के लिए कौन सा header आवश्यक है?",
        "options_en": ["<fstream>", "<iostream>", "<file>", "<stream>"],
        "options_hi": ["<fstream>", "<iostream>", "<file>", "<stream>"],
        "answer_en": "<fstream>",
        "answer_hi": "<fstream>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the purpose of std::ifstream?",
        "question_hi": "std::ifstream का उद्देश्य क्या है?",
        "options_en": ["Input file stream", "File reading", "Input from file", "All of above"],
        "options_hi": ["input file stream", "file reading", "file से input", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of std::ofstream?",
        "question_hi": "std::ofstream का उद्देश्य क्या है?",
        "options_en": ["Output file stream", "File writing", "Output to file", "All of above"],
        "options_hi": ["output file stream", "file writing", "file में output", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the purpose of std::fstream?",
        "question_hi": "std::fstream का उद्देश्य क्या है?",
        "options_en": ["Both input and output file stream", "File stream", "Read/write file", "All of above"],
        "options_hi": ["input और output दोनों file stream", "file stream", "read/write file", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of std::get and std::put for files?",
        "question_hi": "files के लिए std::get और std::put का उद्देश्य क्या है?",
        "options_en": ["Character input/output", "Single character operations", "Char read/write", "All of above"],
        "options_hi": ["character input/output", "single character operations", "char read/write", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the purpose of std::tellg and std::tellp?",
        "question_hi": "std::tellg और std::tellp का उद्देश्य क्या है?",
        "options_en": ["Get current position in file", "Position tellers", "File position", "All of above"],
        "options_hi": ["file में current position get करना", "position tellers", "file position", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of std::seekg and std::seekp?",
        "question_hi": "std::seekg और std::seekp का उद्देश्य क्या है?",
        "options_en": ["Set position in file", "Position seeking", "Move file pointer", "All of above"],
        "options_hi": ["file में position set करना", "position seeking", "file pointer move करना", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the purpose of std::ios::binary flag?",
        "question_hi": "std::ios::binary flag का उद्देश्य क्या है?",
        "options_en": ["Open file in binary mode", "Binary file", "No text translation", "All of above"],
        "options_hi": ["binary mode में file open करना", "binary file", "text translation नहीं", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which header is needed for exception handling?",
        "question_hi": "exception handling के लिए कौन सा header आवश्यक है?",
        "options_en": ["<exception>", "<stdexcept>", "Both A and B", "<error>"],
        "options_hi": ["<exception>", "<stdexcept>", "A और B दोनों", "<error>"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is std::exception base class for?",
        "question_hi": "std::exception base class किस लिए है?",
        "options_en": ["Base for all standard exceptions", "Exception base", "All exceptions derive from it", "All of above"],
        "options_hi": ["सभी standard exceptions का base", "exception base", "सभी exceptions इससे derive होते हैं", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of std::runtime_error?",
        "question_hi": "std::runtime_error का उद्देश्य क्या है?",
        "options_en": ["Runtime errors that can be detected only at runtime", "Runtime exception", "Dynamic errors", "All of above"],
        "options_hi": ["runtime errors जो केवल runtime पर detect किए जा सकते हैं", "runtime exception", "dynamic errors", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the purpose of std::logic_error?",
        "question_hi": "std::logic_error का उद्देश्य क्या है?",
        "options_en": ["Errors in program logic", "Logic mistakes", "Programmer errors", "All of above"],
        "options_hi": ["program logic में errors", "logic mistakes", "programmer errors", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which header is needed for type traits?",
        "question_hi": "type traits के लिए कौन सा header आवश्यक है?",
        "options_en": ["<type_traits>", "<traits>", "<types>", "<typetraits>"],
        "options_hi": ["<type_traits>", "<traits>", "<types>", "<typetraits>"],
        "answer_en": "<type_traits>",
        "answer_hi": "<type_traits>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the purpose of std::is_same?",
        "question_hi": "std::is_same का उद्देश्य क्या है?",
        "options_en": ["Checks if two types are same", "Type equality", "Same type check", "All of above"],
        "options_hi": ["जाँचता है कि दो types same हैं या नहीं", "type equality", "same type check", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of std::is_integral?",
        "question_hi": "std::is_integral का उद्देश्य क्या है?",
        "options_en": ["Checks if type is integral", "Integral type", "Integer type check", "All of above"],
        "options_hi": ["जाँचता है कि type integral है या नहीं", "integral type", "integer type check", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the purpose of std::is_floating_point?",
        "question_hi": "std::is_floating_point का उद्देश्य क्या है?",
        "options_en": ["Checks if type is floating point", "Floating type", "Float check", "All of above"],
        "options_hi": ["जाँचता है कि type floating point है या नहीं", "floating type", "float check", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which header is needed for smart pointers?",
        "question_hi": "smart pointers के लिए कौन सा header आवश्यक है?",
        "options_en": ["<memory>", "<smartptr>", "<pointer>", "<ptr>"],
        "options_hi": ["<memory>", "<smartptr>", "<pointer>", "<ptr>"],
        "answer_en": "<memory>",
        "answer_hi": "<memory>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the purpose of std::make_unique?",
        "question_hi": "std::make_unique का उद्देश्य क्या है?",
        "options_en": ["Creates unique_ptr", "Factory for unique_ptr", "Safe unique_ptr creation", "All of above"],
        "options_hi": ["unique_ptr create करता है", "unique_ptr के लिए factory", "safe unique_ptr creation", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of std::make_shared?",
        "question_hi": "std::make_shared का उद्देश्य क्या है?",
        "options_en": ["Creates shared_ptr", "Factory for shared_ptr", "Efficient shared_ptr creation", "All of above"],
        "options_hi": ["shared_ptr create करता है", "shared_ptr के लिए factory", "efficient shared_ptr creation", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which header is needed for std::function?",
        "question_hi": "std::function के लिए कौन सा header आवश्यक है?",
        "options_en": ["<functional>", "<function>", "<functor>", "<func>"],
        "options_hi": ["<functional>", "<function>", "<functor>", "<func>"],
        "answer_en": "<functional>",
        "answer_hi": "<functional>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of std::bind?",
        "question_hi": "std::bind का उद्देश्य क्या है?",
        "options_en": ["Binds arguments to function", "Function binding", "Partial application", "All of above"],
        "options_hi": ["function से arguments bind करता है", "function binding", "partial application", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the purpose of std::ref and std::cref?",
        "question_hi": "std::ref और std::cref का उद्देश्य क्या है?",
        "options_en": ["Create reference wrappers", "Reference creation", "Bind by reference", "All of above"],
        "options_hi": ["reference wrappers create करते हैं", "reference creation", "reference द्वारा bind", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which header is needed for std::thread?",
        "question_hi": "std::thread के लिए कौन सा header आवश्यक है?",
        "options_en": ["<thread>", "<pthread>", "<concurrent>", "<parallel>"],
        "options_hi": ["<thread>", "<pthread>", "<concurrent>", "<parallel>"],
        "answer_en": "<thread>",
        "answer_hi": "<thread>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the purpose of std::async?",
        "question_hi": "std::async का उद्देश्य क्या है?",
        "options_en": ["Runs function asynchronously", "Async execution", "Future creation", "All of above"],
        "options_hi": ["function को asynchronously run करता है", "async execution", "future creation", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of std::future?",
        "question_hi": "std::future का उद्देश्य क्या है?",
        "options_en": ["Represents result of async operation", "Future value", "Async result", "All of above"],
        "options_hi": ["async operation का result represent करता है", "future value", "async result", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the purpose of std::promise?",
        "question_hi": "std::promise का उद्देश्य क्या है?",
        "options_en": ["Stores value for async retrieval", "Promise value", "Value storage for future", "All of above"],
        "options_hi": ["async retrieval के लिए मान store करता है", "promise value", "future के लिए value storage", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which header is needed for std::mutex?",
        "question_hi": "std::mutex के लिए कौन सा header आवश्यक है?",
        "options_en": ["<mutex>", "<thread>", "<sync>", "<lock>"],
        "options_hi": ["<mutex>", "<thread>", "<sync>", "<lock>"],
        "answer_en": "<mutex>",
        "answer_hi": "<mutex>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the purpose of std::lock_guard?",
        "question_hi": "std::lock_guard का उद्देश्य क्या है?",
        "options_en": ["RAII wrapper for mutex", "Automatic lock management", "Scope-based locking", "All of above"],
        "options_hi": ["mutex के लिए RAII wrapper", "automatic lock management", "scope-based locking", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of std::unique_lock?",
        "question_hi": "std::unique_lock का उद्देश्य क्या है?",
        "options_en": ["More flexible lock than lock_guard", "Flexible locking", "Deferred locking", "All of above"],
        "options_hi": ["lock_guard से अधिक flexible lock", "flexible locking", "deferred locking", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the purpose of std::condition_variable?",
        "question_hi": "std::condition_variable का उद्देश्य क्या है?",
        "options_en": ["Thread synchronization", "Wait/notify mechanism", "Condition waiting", "All of above"],
        "options_hi": ["thread synchronization", "wait/notify mechanism", "condition waiting", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which header is needed for std::atomic?",
        "question_hi": "std::atomic के लिए कौन सा header आवश्यक है?",
        "options_en": ["<atomic>", "<thread>", "<sync>", "<concurrent>"],
        "options_hi": ["<atomic>", "<thread>", "<sync>", "<concurrent>"],
        "answer_en": "<atomic>",
        "answer_hi": "<atomic>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the purpose of std::atomic_flag?",
        "question_hi": "std::atomic_flag का उद्देश्य क्या है?",
        "options_en": ["Atomic boolean flag", "Lock-free flag", "Atomic boolean", "All of above"],
        "options_hi": ["atomic boolean flag", "lock-free flag", "atomic boolean", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which header is needed for std::optional?",
        "question_hi": "std::optional के लिए कौन सा header आवश्यक है?",
        "options_en": ["<optional>", "<variant>", "<any>", "<maybe>"],
        "options_hi": ["<optional>", "<variant>", "<any>", "<maybe>"],
        "answer_en": "<optional>",
        "answer_hi": "<optional>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the purpose of std::variant?",
        "question_hi": "std::variant का उद्देश्य क्या है?",
        "options_en": ["Type-safe union", "Variant type", "Multiple types container", "All of above"],
        "options_hi": ["type-safe union", "variant type", "multiple types container", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of std::any?",
        "question_hi": "std::any का उद्देश्य क्या है?",
        "options_en": ["Type-erased container for any type", "Any type storage", "Dynamic type", "All of above"],
        "options_hi": ["किसी भी type के लिए type-erased container", "any type storage", "dynamic type", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which header is needed for std::filesystem?",
        "question_hi": "std::filesystem के लिए कौन सा header आवश्यक है?",
        "options_en": ["<filesystem>", "<fstream>", "<sys/stat.h>", "<dirent.h>"],
        "options_hi": ["<filesystem>", "<fstream>", "<sys/stat.h>", "<dirent.h>"],
        "answer_en": "<filesystem>",
        "answer_hi": "<filesystem>",
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