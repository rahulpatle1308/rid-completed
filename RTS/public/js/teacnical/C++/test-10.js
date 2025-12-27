const questions = [
    {
        "num": 1,
        "question_en": "Which of the following is a C++ Standard Library container that uses a hash table?",
        "question_hi": "निम्नलिखित में से कौन सा C++ स्टैंडर्ड लाइब्रेरी कंटेनर है जो हैश टेबल का उपयोग करता है?",
        "options_en": ["unordered_map", "map", "vector", "list"],
        "options_hi": ["unordered_map", "map", "vector", "list"],
        "answer_en": "unordered_map",
        "answer_hi": "unordered_map",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the time complexity of accessing an element in std::vector by index?",
        "question_hi": "std::vector में index द्वारा element तक पहुंचने की time complexity क्या है?",
        "options_en": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "options_hi": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "answer_en": "O(1)",
        "answer_hi": "O(1)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which container maintains elements in sorted order?",
        "question_hi": "कौन सा कंटेनर elements को sorted order में रखता है?",
        "options_en": ["set", "unordered_set", "vector", "list"],
        "options_hi": ["set", "unordered_set", "vector", "list"],
        "answer_en": "set",
        "answer_hi": "set",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the purpose of std::deque?",
        "question_hi": "std::deque का उद्देश्य क्या है?",
        "options_en": ["Double-ended queue", "Single-ended queue", "Stack", "List"],
        "options_hi": ["डबल-एंडेड क्यू", "सिंगल-एंडेड क्यू", "स्टैक", "लिस्ट"],
        "answer_en": "Double-ended queue",
        "answer_hi": "डबल-एंडेड क्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which container provides fastest insertion at the beginning?",
        "question_hi": "कौन सा कंटेनर beginning में सबसे तेज insertion प्रदान करता है?",
        "options_en": ["list", "vector", "array", "deque"],
        "options_hi": ["list", "vector", "array", "deque"],
        "answer_en": "list",
        "answer_hi": "list",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the default underlying container for std::stack?",
        "question_hi": "std::stack के लिए default underlying container क्या है?",
        "options_en": ["deque", "vector", "list", "array"],
        "options_hi": ["deque", "vector", "list", "array"],
        "answer_en": "deque",
        "answer_hi": "deque",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which algorithm is used to sort a range of elements?",
        "question_hi": "elements की एक रेंज को sort करने के लिए किस algorithm का उपयोग किया जाता है?",
        "options_en": ["std::sort", "std::find", "std::copy", "std::transform"],
        "options_hi": ["std::sort", "std::find", "std::copy", "std::transform"],
        "answer_en": "std::sort",
        "answer_hi": "std::sort",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does std::transform do?",
        "question_hi": "std::transform क्या करता है?",
        "options_en": ["Applies function to range and stores results", "Transforms container", "Changes type", "Converts values"],
        "options_hi": ["रेंज पर function लागू करता है और results store करता है", "कंटेनर transform करता है", "टाइप बदलता है", "मान convert करता है"],
        "answer_en": "Applies function to range and stores results",
        "answer_hi": "रेंज पर function लागू करता है और results store करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of std::accumulate?",
        "question_hi": "std::accumulate का उद्देश्य क्या है?",
        "options_en": ["Computes sum of range", "Accumulates values", "Adds numbers", "All of above"],
        "options_hi": ["रेंज का sum compute करता है", "मान accumulate करता है", "संख्या जोड़ता है", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which algorithm finds the first element satisfying condition?",
        "question_hi": "कौन सा algorithm condition को संतुष्ट करने वाला पहला element ढूंढता है?",
        "options_en": ["std::find_if", "std::find", "std::search", "std::locate"],
        "options_hi": ["std::find_if", "std::find", "std::search", "std::locate"],
        "answer_en": "std::find_if",
        "answer_hi": "std::find_if",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of std::remove?",
        "question_hi": "std::remove का उद्देश्य क्या है?",
        "options_en": ["Moves elements to be removed to end", "Deletes elements", "Removes permanently", "Erases elements"],
        "options_hi": ["हटाए जाने वाले elements को end पर move करता है", "elements delete करता है", "स्थायी रूप से remove करता है", "elements erase करता है"],
        "answer_en": "Moves elements to be removed to end",
        "answer_hi": "हटाए जाने वाले elements को end पर move करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What does std::unique do?",
        "question_hi": "std::unique क्या करता है?",
        "options_en": ["Removes consecutive duplicates", "Finds unique elements", "Makes elements unique", "All of above"],
        "options_hi": ["लगातार duplicates remove करता है", "unique elements ढूंढता है", "elements unique बनाता है", "उपरोक्त सभी"],
        "answer_en": "Removes consecutive duplicates",
        "answer_hi": "लगातार duplicates remove करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the purpose of std::partition?",
        "question_hi": "std::partition का उद्देश्य क्या है?",
        "options_en": ["Rearranges elements based on predicate", "Divides container", "Creates partitions", "All of above"],
        "options_hi": ["predicate के आधार पर elements rearrange करता है", "कंटेनर divide करता है", "partitions create करता है", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What does std::reverse do?",
        "question_hi": "std::reverse क्या करता है?",
        "options_en": ["Reverses order of elements", "Flips container", "Inverts order", "All of above"],
        "options_hi": ["elements का order reverse करता है", "कंटेनर flip करता है", "order invert करता है", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of std::rotate?",
        "question_hi": "std::rotate का उद्देश्य क्या है?",
        "options_en": ["Rotates elements around pivot", "Turns container", "Circular shift", "All of above"],
        "options_hi": ["pivot के चारों ओर elements rotate करता है", "कंटेनर turn करता है", "circular shift", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What does std::binary_search require?",
        "question_hi": "std::binary_search को क्या आवश्यकता होती है?",
        "options_en": ["Sorted range", "Unsorted range", "Any range", "Random range"],
        "options_hi": ["sorted रेंज", "unsorted रेंज", "कोई भी रेंज", "random रेंज"],
        "answer_en": "Sorted range",
        "answer_hi": "sorted रेंज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of std::lower_bound?",
        "question_hi": "std::lower_bound का उद्देश्य क्या है?",
        "options_en": ["Finds first element not less than value", "Lower bound", "Minimum element", "All of above"],
        "options_hi": ["value से कम न होने वाला पहला element ढूंढता है", "lower bound", "minimum element", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the purpose of std::upper_bound?",
        "question_hi": "std::upper_bound का उद्देश्य क्या है?",
        "options_en": ["Finds first element greater than value", "Upper bound", "Maximum element", "All of above"],
        "options_hi": ["value से अधिक पहला element ढूंढता है", "upper bound", "maximum element", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What does std::equal_range return?",
        "question_hi": "std::equal_range क्या लौटाता है?",
        "options_en": ["Pair of iterators defining range equal to value", "Equal range", "Range pair", "All of above"],
        "options_hi": ["value के बराबर रेंज को परिभाषित करने वाले iterators की pair", "equal range", "range pair", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the purpose of std::merge?",
        "question_hi": "std::merge का उद्देश्य क्या है?",
        "options_en": ["Merges two sorted ranges", "Combines ranges", "Merge operation", "All of above"],
        "options_hi": ["दो sorted ranges merge करता है", "ranges combine करता है", "merge operation", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What does std::inplace_merge do?",
        "question_hi": "std::inplace_merge क्या करता है?",
        "options_en": ["Merges consecutive sorted ranges in-place", "In-place merge", "Internal merge", "All of above"],
        "options_hi": ["लगातार sorted ranges को in-place merge करता है", "in-place merge", "internal merge", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the purpose of std::set_union?",
        "question_hi": "std::set_union का उद्देश्य क्या है?",
        "options_en": ["Computes union of two sorted ranges", "Set union", "Combines sets", "All of above"],
        "options_hi": ["दो sorted ranges का union compute करता है", "set union", "sets combine करता है", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the purpose of std::set_intersection?",
        "question_hi": "std::set_intersection का उद्देश्य क्या है?",
        "options_en": ["Computes intersection of two sorted ranges", "Set intersection", "Common elements", "All of above"],
        "options_hi": ["दो sorted ranges का intersection compute करता है", "set intersection", "common elements", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the purpose of std::set_difference?",
        "question_hi": "std::set_difference का उद्देश्य क्या है?",
        "options_en": ["Computes difference of two sorted ranges", "Set difference", "Different elements", "All of above"],
        "options_hi": ["दो sorted ranges का difference compute करता है", "set difference", "different elements", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of std::set_symmetric_difference?",
        "question_hi": "std::set_symmetric_difference का उद्देश्य क्या है?",
        "options_en": ["Computes symmetric difference of two sorted ranges", "Symmetric difference", "Elements in either but not both", "All of above"],
        "options_hi": ["दो sorted ranges का symmetric difference compute करता है", "symmetric difference", "किसी एक में लेकिन दोनों में नहीं elements", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What does std::min_element return?",
        "question_hi": "std::min_element क्या लौटाता है?",
        "options_en": ["Iterator to smallest element", "Minimum element", "Smallest value", "All of above"],
        "options_hi": ["सबसे छोटे element का iterator", "minimum element", "सबसे छोटा मान", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What does std::max_element return?",
        "question_hi": "std::max_element क्या लौटाता है?",
        "options_en": ["Iterator to largest element", "Maximum element", "Largest value", "All of above"],
        "options_hi": ["सबसे बड़े element का iterator", "maximum element", "सबसे बड़ा मान", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the purpose of std::lexicographical_compare?",
        "question_hi": "std::lexicographical_compare का उद्देश्य क्या है?",
        "options_en": ["Compares two ranges lexicographically", "Lexicographic comparison", "Dictionary order", "All of above"],
        "options_hi": ["दो ranges की lexicographically तुलना करता है", "lexicographic comparison", "dictionary order", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of std::next_permutation?",
        "question_hi": "std::next_permutation का उद्देश्य क्या है?",
        "options_en": ["Generates next lexicographic permutation", "Next permutation", "Permutation generation", "All of above"],
        "options_hi": ["अगला lexicographic permutation generate करता है", "next permutation", "permutation generation", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the purpose of std::prev_permutation?",
        "question_hi": "std::prev_permutation का उद्देश्य क्या है?",
        "options_en": ["Generates previous lexicographic permutation", "Previous permutation", "Previous generation", "All of above"],
        "options_hi": ["पिछला lexicographic permutation generate करता है", "previous permutation", "previous generation", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of std::iota?",
        "question_hi": "std::iota का उद्देश्य क्या है?",
        "options_en": ["Fills range with sequentially increasing values", "Sequential fill", "Increment values", "All of above"],
        "options_hi": ["रेंज को क्रमिक रूप से बढ़ते मानों से भरता है", "sequential fill", "मान increment करता है", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the purpose of std::adjacent_find?",
        "question_hi": "std::adjacent_find का उद्देश्य क्या है?",
        "options_en": ["Finds first two adjacent equal elements", "Adjacent duplicates", "Neighboring equal", "All of above"],
        "options_hi": ["पहले दो adjacent equal elements ढूंढता है", "adjacent duplicates", "neighboring equal", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of std::search?",
        "question_hi": "std::search का उद्देश्य क्या है?",
        "options_en": ["Searches for subsequence", "Finds pattern", "Searches range", "All of above"],
        "options_hi": ["subsequence search करता है", "pattern ढूंढता है", "रेंज search करता है", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the purpose of std::search_n?",
        "question_hi": "std::search_n का उद्देश्य क्या है?",
        "options_en": ["Searches for n consecutive copies of value", "N copies search", "Consecutive values", "All of above"],
        "options_hi": ["मान की n consecutive copies search करता है", "n copies search", "consecutive values", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of std::copy_if?",
        "question_hi": "std::copy_if का उद्देश्य क्या है?",
        "options_en": ["Copies elements satisfying condition", "Conditional copy", "Filter copy", "All of above"],
        "options_hi": ["condition को संतुष्ट करने वाले elements copy करता है", "conditional copy", "filter copy", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the purpose of std::move in algorithms?",
        "question_hi": "algorithms में std::move का उद्देश्य क्या है?",
        "options_en": ["Moves elements instead of copying", "Move operation", "Transfer elements", "All of above"],
        "options_hi": ["copy करने के बजाय elements move करता है", "move operation", "elements transfer करता है", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of std::swap_ranges?",
        "question_hi": "std::swap_ranges का उद्देश्य क्या है?",
        "options_en": ["Swaps elements between two ranges", "Range swap", "Exchange ranges", "All of above"],
        "options_hi": ["दो ranges के बीच elements swap करता है", "range swap", "ranges exchange करता है", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the purpose of std::replace?",
        "question_hi": "std::replace का उद्देश्य क्या है?",
        "options_en": ["Replaces all occurrences of value", "Value replacement", "Substitute values", "All of above"],
        "options_hi": ["मान की सभी occurrences replace करता है", "value replacement", "मान substitute करता है", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of std::replace_if?",
        "question_hi": "std::replace_if का उद्देश्य क्या है?",
        "options_en": ["Replaces elements satisfying condition", "Conditional replacement", "Filter replace", "All of above"],
        "options_hi": ["condition को संतुष्ट करने वाले elements replace करता है", "conditional replacement", "filter replace", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the purpose of std::fill?",
        "question_hi": "std::fill का उद्देश्य क्या है?",
        "options_en": ["Fills range with value", "Value fill", "Range filling", "All of above"],
        "options_hi": ["रेंज को मान से भरता है", "value fill", "range filling", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of std::fill_n?",
        "question_hi": "std::fill_n का उद्देश्य क्या है?",
        "options_en": ["Fills n elements with value", "N elements fill", "Counted fill", "All of above"],
        "options_hi": ["n elements को मान से भरता है", "n elements fill", "counted fill", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the purpose of std::generate?",
        "question_hi": "std::generate का उद्देश्य क्या है?",
        "options_en": ["Fills range with generator function results", "Generator fill", "Function generation", "All of above"],
        "options_hi": ["रेंज को generator function results से भरता है", "generator fill", "function generation", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of std::generate_n?",
        "question_hi": "std::generate_n का उद्देश्य क्या है?",
        "options_en": ["Generates n elements using generator", "N elements generation", "Counted generation", "All of above"],
        "options_hi": ["generator का उपयोग करके n elements generate करता है", "n elements generation", "counted generation", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the purpose of std::remove_copy?",
        "question_hi": "std::remove_copy का उद्देश्य क्या है?",
        "options_en": ["Copies range excluding elements equal to value", "Remove and copy", "Filter copy", "All of above"],
        "options_hi": ["मान के बराबर elements को छोड़कर रेंज copy करता है", "remove और copy", "filter copy", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of std::remove_copy_if?",
        "question_hi": "std::remove_copy_if का उद्देश्य क्या है?",
        "options_en": ["Copies range excluding elements satisfying condition", "Conditional remove copy", "Filtered copy", "All of above"],
        "options_hi": ["condition को संतुष्ट करने वाले elements को छोड़कर रेंज copy करता है", "conditional remove copy", "filtered copy", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the purpose of std::unique_copy?",
        "question_hi": "std::unique_copy का उद्देश्य क्या है?",
        "options_en": ["Copies range removing consecutive duplicates", "Unique copy", "Duplicate removal copy", "All of above"],
        "options_hi": ["लगातार duplicates remove करते हुए रेंज copy करता है", "unique copy", "duplicate removal copy", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of std::reverse_copy?",
        "question_hi": "std::reverse_copy का उद्देश्य क्या है?",
        "options_en": ["Copies range in reverse order", "Reverse copy", "Backward copy", "All of above"],
        "options_hi": ["रेंज को reverse order में copy करता है", "reverse copy", "backward copy", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the purpose of std::rotate_copy?",
        "question_hi": "std::rotate_copy का उद्देश्य क्या है?",
        "options_en": ["Copies range with rotation", "Rotate copy", "Circular copy", "All of above"],
        "options_hi": ["rotation के साथ रेंज copy करता है", "rotate copy", "circular copy", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of std::sample?",
        "question_hi": "std::sample का उद्देश्य क्या है?",
        "options_en": ["Selects n random elements from range", "Random sampling", "Sample selection", "All of above"],
        "options_hi": ["रेंज से n random elements select करता है", "random sampling", "sample selection", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the purpose of std::shuffle?",
        "question_hi": "std::shuffle का उद्देश्य क्या है?",
        "options_en": ["Randomly reorders elements using generator", "Random shuffle", "Random reorder", "All of above"],
        "options_hi": ["generator का उपयोग करके elements को randomly reorder करता है", "random shuffle", "random reorder", "उपरोक्त सभी"],
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