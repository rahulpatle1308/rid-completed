const questions = [
  {
    "num": 1,
    "question_en": "What is 'translation phase 7' in C compilation?",
    "question_hi": "C संकलन में 'translation phase 7' क्या है?",
    "options_en": ["Linking", "Preprocessing", "Code generation", "Syntax analysis"],
    "options_hi": ["लिंकिंग", "प्रीप्रोसेसिंग", "कोड जनरेशन", "सिंटैक्स विश्लेषण"],
    "answer_en": "Linking",
    "answer_hi": "लिंकिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is 'lexical analysis' responsible for?",
    "question_hi": "'lexical analysis' किसके लिए जिम्मेदार है?",
    "options_en": ["Tokenization", "Parsing", "Optimization", "Linking"],
    "options_hi": ["टोकनाइजेशन", "पार्सिंग", "ऑप्टिमाइज़ेशन", "लिंकिंग"],
    "answer_en": "Tokenization",
    "answer_hi": "टोकनाइजेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is 'syntax analysis' also called?",
    "question_hi": "'syntax analysis' को क्या भी कहा जाता है?",
    "options_en": ["Parsing", "Tokenization", "Lexical analysis", "Semantic analysis"],
    "options_hi": ["पार्सिंग", "टोकनाइजेशन", "लेक्सिकल विश्लेषण", "सिमेंटिक विश्लेषण"],
    "answer_en": "Parsing",
    "answer_hi": "पार्सिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What does 'semantic analysis' check?",
    "question_hi": "'semantic analysis' क्या जाँचता है?",
    "options_en": ["Meaning correctness", "Syntax correctness", "Token correctness", "Memory layout"],
    "options_hi": ["अर्थ शुद्धता", "सिंटैक्स शुद्धता", "टोकन शुद्धता", "मेमोरी लेआउट"],
    "answer_en": "Meaning correctness",
    "answer_hi": "अर्थ शुद्धता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is 'intermediate code generation'?",
    "question_hi": "'intermediate code generation' क्या है?",
    "options_en": ["Three-address code or similar", "Assembly code", "Machine code", "Source code"],
    "options_hi": ["थ्री-एड्रेस कोड या समान", "असेंबली कोड", "मशीन कोड", "स्रोत कोड"],
    "answer_en": "Three-address code or similar",
    "answer_hi": "थ्री-एड्रेस कोड या समान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is 'code optimization' goal?",
    "question_hi": "'code optimization' का लक्ष्य क्या है?",
    "options_en": ["Improve performance/size", "Fix errors", "Add features", "Change syntax"],
    "options_hi": ["प्रदर्शन/आकार में सुधार", "त्रुटियाँ ठीक करें", "सुविधाएँ जोड़ें", "सिंटैक्स बदलें"],
    "answer_en": "Improve performance/size",
    "answer_hi": "प्रदर्शन/आकार में सुधार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is 'code generation' final output?",
    "question_hi": "'code generation' का अंतिम आउटपुट क्या है?",
    "options_en": ["Target machine code", "Intermediate code", "Assembly code", "Bytecode"],
    "options_hi": ["टार्गेट मशीन कोड", "इंटरमीडिएट कोड", "असेंबली कोड", "बाइटकोड"],
    "answer_en": "Target machine code",
    "answer_hi": "टार्गेट मशीन कोड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is 'symbol table' used for?",
    "question_hi": "'symbol table' का उपयोग किस लिए किया जाता है?",
    "options_en": ["Store identifier information", "Store values", "Store tokens", "Store machine code"],
    "options_hi": ["पहचानकर्ता जानकारी संग्रहीत करें", "मान संग्रहीत करें", "टोकन संग्रहीत करें", "मशीन कोड संग्रहीत करें"],
    "answer_en": "Store identifier information",
    "answer_hi": "पहचानकर्ता जानकारी संग्रहीत करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is 'constant folding'?",
    "question_hi": "'constant folding' क्या है?",
    "options_en": ["Evaluate constant expressions at compile time", "Fold constants", "Remove constants", "Add constants"],
    "options_hi": ["कंपाइल समय पर स्थिर भावों का मूल्यांकन करें", "स्थिरांक मोड़ें", "स्थिरांक हटाएं", "स्थिरांक जोड़ें"],
    "answer_en": "Evaluate constant expressions at compile time",
    "answer_hi": "कंपाइल समय पर स्थिर भावों का मूल्यांकन करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 'dead code elimination'?",
    "question_hi": "'dead code elimination' क्या है?",
    "options_en": ["Remove unreachable code", "Remove all code", "Remove comments", "Remove whitespace"],
    "options_hi": ["अपहनीय कोड हटाएं", "सभी कोड हटाएं", "टिप्पणियाँ हटाएं", "रिक्त स्थान हटाएं"],
    "answer_en": "Remove unreachable code",
    "answer_hi": "अपहनीय कोड हटाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is 'common subexpression elimination'?",
    "question_hi": "'common subexpression elimination' क्या है?",
    "options_en": ["Reuse computed expressions", "Remove all expressions", "Simplify expressions", "Complexify expressions"],
    "options_hi": ["गणितीय व्यंजकों का पुन: उपयोग", "सभी व्यंजक हटाएं", "व्यंजक सरल करें", "व्यंजक जटिल करें"],
    "answer_en": "Reuse computed expressions",
    "answer_hi": "गणितीय व्यंजकों का पुन: उपयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is 'loop invariant code motion'?",
    "question_hi": "'loop invariant code motion' क्या है?",
    "options_en": ["Move invariant code outside loop", "Move code into loop", "Remove loop", "Add loop"],
    "options_hi": ["अपरिवर्तनीय कोड को लूप के बाहर ले जाएं", "कोड को लूप में ले जाएं", "लूप हटाएं", "लूप जोड़ें"],
    "answer_en": "Move invariant code outside loop",
    "answer_hi": "अपरिवर्तनीय कोड को लूप के बाहर ले जाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is 'function inlining'?",
    "question_hi": "'function inlining' क्या है?",
    "options_en": ["Replace call with function body", "Remove function", "Add function", "Move function"],
    "options_hi": ["कॉल को फ़ंक्शन बॉडी से बदलें", "फ़ंक्शन हटाएं", "फ़ंक्शन जोड़ें", "फ़ंक्शन ले जाएं"],
    "answer_en": "Replace call with function body",
    "answer_hi": "कॉल को फ़ंक्शन बॉडी से बदलें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is 'tail recursion optimization'?",
    "question_hi": "'tail recursion optimization' क्या है?",
    "options_en": ["Convert to iteration", "Remove recursion", "Add recursion", "Move recursion"],
    "options_hi": ["पुनरावृत्ति में बदलें", "पुनरावर्तन हटाएं", "पुनरावर्तन जोड़ें", "पुनरावर्तन ले जाएं"],
    "answer_en": "Convert to iteration",
    "answer_hi": "पुनरावृत्ति में बदलें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is 'register allocation'?",
    "question_hi": "'register allocation' क्या है?",
    "options_en": ["Assign variables to registers", "Allocate memory", "Allocate stack", "Allocate heap"],
    "options_hi": ["रजिस्टरों को वेरिएबल्स असाइन करें", "मेमोरी आवंटित करें", "स्टैक आवंटित करें", "हीप आवंटित करें"],
    "answer_en": "Assign variables to registers",
    "answer_hi": "रजिस्टरों को वेरिएबल्स असाइन करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'instruction scheduling'?",
    "question_hi": "'instruction scheduling' क्या है?",
    "options_en": ["Reorder instructions for performance", "Schedule execution", "Time instructions", "Count instructions"],
    "options_hi": ["प्रदर्शन के लिए निर्देशों को पुन: क्रमबद्ध करें", "निष्पादन शेड्यूल करें", "समय निर्देश", "निर्देश गिनें"],
    "answer_en": "Reorder instructions for performance",
    "answer_hi": "प्रदर्शन के लिए निर्देशों को पुन: क्रमबद्ध करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is 'peephole optimization'?",
    "question_hi": "'peephole optimization' क्या है?",
    "options_en": ["Local pattern-based optimization", "Global optimization", "Loop optimization", "Function optimization"],
    "options_hi": ["स्थानीय पैटर्न-आधारित अनुकूलन", "वैश्विक अनुकूलन", "लूप अनुकूलन", "फ़ंक्शन अनुकूलन"],
    "answer_en": "Local pattern-based optimization",
    "answer_hi": "स्थानीय पैटर्न-आधारित अनुकूलन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is 'global optimization'?",
    "question_hi": "'global optimization' क्या है?",
    "options_en": ["Whole-program optimization", "Local optimization", "Module optimization", "Function optimization"],
    "options_hi": ["संपूर्ण-प्रोग्राम अनुकूलन", "स्थानीय अनुकूलन", "मॉड्यूल अनुकूलन", "फ़ंक्शन अनुकूलन"],
    "answer_en": "Whole-program optimization",
    "answer_hi": "संपूर्ण-प्रोग्राम अनुकूलन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'link-time optimization' (LTO)?",
    "question_hi": "'link-time optimization' (LTO) क्या है?",
    "options_en": ["Optimization across translation units", "Within unit only", "No optimization", "Pre-link optimization"],
    "options_hi": ["अनुवाद इकाइयों में अनुकूलन", "केवल इकाई के भीतर", "कोई अनुकूलन नहीं", "प्री-लिंक अनुकूलन"],
    "answer_en": "Optimization across translation units",
    "answer_hi": "अनुवाद इकाइयों में अनुकूलन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is 'profile-guided optimization' (PGO)?",
    "question_hi": "'profile-guided optimization' (PGO) क्या है?",
    "options_en": ["Optimization based on runtime profiles", "Static profiles", "No profiles", "Compiler profiles"],
    "options_hi": ["रनटाइम प्रोफाइल के आधार पर अनुकूलन", "स्थैतिक प्रोफाइल", "कोई प्रोफाइल नहीं", "कंपाइलर प्रोफाइल"],
    "answer_en": "Optimization based on runtime profiles",
    "answer_hi": "रनटाइम प्रोफाइल के आधार पर अनुकूलन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 'interprocedural optimization'?",
    "question_hi": "'interprocedural optimization' क्या है?",
    "options_en": ["Optimization across functions", "Within function only", "No optimization", "Global optimization"],
    "options_hi": ["फ़ंक्शन में अनुकूलन", "केवल फ़ंक्शन के भीतर", "कोई अनुकूलन नहीं", "वैश्विक अनुकूलन"],
    "answer_en": "Optimization across functions",
    "answer_hi": "फ़ंक्शन में अनुकूलन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is 'vectorization'?",
    "question_hi": "'vectorization' क्या है?",
    "options_en": ["Use SIMD instructions", "Use vectors", "Use arrays", "Use pointers"],
    "options_hi": ["SIMD निर्देशों का उपयोग करें", "वेक्टर का उपयोग करें", "सरणियों का उपयोग करें", "पॉइंटर्स का उपयोग करें"],
    "answer_en": "Use SIMD instructions",
    "answer_hi": "SIMD निर्देशों का उपयोग करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is 'auto-vectorization'?",
    "question_hi": "'auto-vectorization' क्या है?",
    "options_en": ["Automatic SIMD code generation", "Manual vectorization", "No vectorization", "Semi-auto vectorization"],
    "options_hi": ["स्वचालित SIMD कोड जनरेशन", "मैनुअल वेक्टराइजेशन", "कोई वेक्टराइजेशन नहीं", "अर्ध-स्वचालित वेक्टराइजेशन"],
    "answer_en": "Automatic SIMD code generation",
    "answer_hi": "स्वचालित SIMD कोड जनरेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is 'loop unrolling'?",
    "question_hi": "'loop unrolling' क्या है?",
    "options_en": ["Duplicate loop body", "Remove loop", "Add loop", "Move loop"],
    "options_hi": ["लूप बॉडी डुप्लिकेट करें", "लूप हटाएं", "लूप जोड़ें", "लूप ले जाएं"],
    "answer_en": "Duplicate loop body",
    "answer_hi": "लूप बॉडी डुप्लिकेट करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is 'loop fusion'?",
    "question_hi": "'loop fusion' क्या है?",
    "options_en": ["Combine adjacent loops", "Separate loops", "Remove loops", "Add loops"],
    "options_hi": ["आसन्न लूप संयोजित करें", "लूप अलग करें", "लूप हटाएं", "लूप जोड़ें"],
    "answer_en": "Combine adjacent loops",
    "answer_hi": "आसन्न लूप संयोजित करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is 'loop fission'?",
    "question_hi": "'loop fission' क्या है?",
    "options_en": ["Split loop into multiple", "Combine loops", "Remove loop", "Add loop"],
    "options_hi": ["लूप को कई में विभाजित करें", "लूप संयोजित करें", "लूप हटाएं", "लूप जोड़ें"],
    "answer_en": "Split loop into multiple",
    "answer_hi": "लूप को कई में विभाजित करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is 'loop interchange'?",
    "question_hi": "'loop interchange' क्या है?",
    "options_en": ["Swap loop nesting order", "Change loop bounds", "Remove loop", "Add loop"],
    "options_hi": ["लूप नेस्टिंग क्रम स्वैप करें", "लूप सीमा बदलें", "लूप हटाएं", "लूप जोड़ें"],
    "answer_en": "Swap loop nesting order",
    "answer_hi": "लूप नेस्टिंग क्रम स्वैप करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 'loop tiling'?",
    "question_hi": "'loop tiling' क्या है?",
    "options_en": ["Block loops for cache", "Tile loops", "Remove loops", "Add loops"],
    "options_hi": ["कैश के लिए लूप ब्लॉक करें", "लूप टाइल करें", "लूप हटाएं", "लूप जोड़ें"],
    "answer_en": "Block loops for cache",
    "answer_hi": "कैश के लिए लूप ब्लॉक करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is 'loop skewing'?",
    "question_hi": "'loop skewing' क्या है?",
    "options_en": ["Transform loop for parallelism", "Skew loop", "Remove loop", "Add loop"],
    "options_hi": ["समानांतरता के लिए लूप रूपांतरित करें", "लूप तिरछा करें", "लूप हटाएं", "लूप जोड़ें"],
    "answer_en": "Transform loop for parallelism",
    "answer_hi": "समानांतरता के लिए लूप रूपांतरित करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is 'loop peeling'?",
    "question_hi": "'loop peeling' क्या है?",
    "options_en": ["Extract first/last iterations", "Peel loop", "Remove loop", "Add loop"],
    "options_hi": ["पहले/अंतिम पुनरावृत्तियाँ निकालें", "लूप छीलें", "लूप हटाएं", "लूप जोड़ें"],
    "answer_en": "Extract first/last iterations",
    "answer_hi": "पहले/अंतिम पुनरावृत्तियाँ निकालें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'strength reduction'?",
    "question_hi": "'strength reduction' क्या है?",
    "options_en": ["Replace expensive ops with cheaper", "Reduce strength", "Remove ops", "Add ops"],
    "options_hi": ["महंगे ऑप्स को सस्ते से बदलें", "शक्ति कम करें", "ऑप्स हटाएं", "ऑप्स जोड़ें"],
    "answer_en": "Replace expensive ops with cheaper",
    "answer_hi": "महंगे ऑप्स को सस्ते से बदलें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is 'induction variable elimination'?",
    "question_hi": "'induction variable elimination' क्या है?",
    "options_en": ["Remove loop induction variables", "Add variables", "Move variables", "Copy variables"],
    "options_hi": ["लूप इंडक्शन वेरिएबल्स हटाएं", "वेरिएबल्स जोड़ें", "वेरिएबल्स ले जाएं", "वेरिएबल्स कॉपी करें"],
    "answer_en": "Remove loop induction variables",
    "answer_hi": "लूप इंडक्शन वेरिएबल्स हटाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is 'copy propagation'?",
    "question_hi": "'copy propagation' क्या है?",
    "options_en": ["Propagate copied values", "Copy values", "Remove copies", "Add copies"],
    "options_hi": ["कॉपी किए गए मानों का प्रचार करें", "मान कॉपी करें", "कॉपी हटाएं", "कॉपी जोड़ें"],
    "answer_en": "Propagate copied values",
    "answer_hi": "कॉपी किए गए मानों का प्रचार करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 'constant propagation'?",
    "question_hi": "'constant propagation' क्या है?",
    "options_en": ["Propagate constant values", "Propagate variables", "Remove constants", "Add constants"],
    "options_hi": ["स्थिर मानों का प्रचार करें", "वेरिएबल्स का प्रचार करें", "स्थिरांक हटाएं", "स्थिरांक जोड़ें"],
    "answer_en": "Propagate constant values",
    "answer_hi": "स्थिर मानों का प्रचार करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is 'value numbering'?",
    "question_hi": "'value numbering' क्या है?",
    "options_en": ["Assign unique numbers to values", "Number values", "Remove values", "Add values"],
    "options_hi": ["मानों को अद्वितीय संख्याएँ असाइन करें", "मान संख्या दें", "मान हटाएं", "मान जोड़ें"],
    "answer_en": "Assign unique numbers to values",
    "answer_hi": "मानों को अद्वितीय संख्याएँ असाइन करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 'global value numbering'?",
    "question_hi": "'global value numbering' क्या है?",
    "options_en": ["Value numbering across basic blocks", "Within block only", "No numbering", "Local numbering"],
    "options_hi": ["बेसिक ब्लॉक में मान नंबरिंग", "केवल ब्लॉक के भीतर", "कोई नंबरिंग नहीं", "स्थानीय नंबरिंग"],
    "answer_en": "Value numbering across basic blocks",
    "answer_hi": "बेसिक ब्लॉक में मान नंबरिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is 'static single assignment' (SSA)?",
    "question_hi": "'static single assignment' (SSA) क्या है?",
    "options_en": ["Each variable assigned once", "Multiple assignments", "No assignments", "Dynamic assignments"],
    "options_hi": ["प्रत्येक चर एक बार असाइन किया गया", "एकाधिक असाइनमेंट", "कोई असाइनमेंट नहीं", "गतिशील असाइनमेंट"],
    "answer_en": "Each variable assigned once",
    "answer_hi": "प्रत्येक चर एक बार असाइन किया गया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'phi function' in SSA?",
    "question_hi": "SSA में 'phi function' क्या है?",
    "options_en": ["Merge values from different paths", "Math phi", "No phi", "Simple function"],
    "options_hi": ["विभिन्न पथों से मान मर्ज करें", "गणित phi", "कोई phi नहीं", "सरल फ़ंक्शन"],
    "answer_en": "Merge values from different paths",
    "answer_hi": "विभिन्न पथों से मान मर्ज करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is 'basic block'?",
    "question_hi": "'basic block' क्या है?",
    "options_en": ["Straight-line code sequence", "Block of code", "Function block", "Loop block"],
    "options_hi": ["सीधी-रेखा कोड अनुक्रम", "कोड ब्लॉक", "फ़ंक्शन ब्लॉक", "लूप ब्लॉक"],
    "answer_en": "Straight-line code sequence",
    "answer_hi": "सीधी-रेखा कोड अनुक्रम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'control flow graph' (CFG)?",
    "question_hi": "'control flow graph' (CFG) क्या है?",
    "options_en": ["Graph of basic blocks and control flow", "Data flow graph", "Call graph", "Dependency graph"],
    "options_hi": ["बेसिक ब्लॉक और कंट्रोल फ्लो का ग्राफ", "डेटा फ्लो ग्राफ", "कॉल ग्राफ", "निर्भरता ग्राफ"],
    "answer_en": "Graph of basic blocks and control flow",
    "answer_hi": "बेसिक ब्लॉक और कंट्रोल फ्लो का ग्राफ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is 'data flow analysis'?",
    "question_hi": "'data flow analysis' क्या है?",
    "options_en": ["Analyze data flow in program", "Control flow analysis", "Syntax analysis", "Lexical analysis"],
    "options_hi": ["प्रोग्राम में डेटा प्रवाह का विश्लेषण करें", "कंट्रोल फ्लो विश्लेषण", "सिंटैक्स विश्लेषण", "लेक्सिकल विश्लेषण"],
    "answer_en": "Analyze data flow in program",
    "answer_hi": "प्रोग्राम में डेटा प्रवाह का विश्लेषण करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is 'liveness analysis'?",
    "question_hi": "'liveness analysis' क्या है?",
    "options_en": ["Determine live variables", "Determine dead variables", "Variable types", "Variable values"],
    "options_hi": ["लाइव वेरिएबल्स निर्धारित करें", "डेड वेरिएबल्स निर्धारित करें", "वेरिएबल प्रकार", "वेरिएबल मान"],
    "answer_en": "Determine live variables",
    "answer_hi": "लाइव वेरिएबल्स निर्धारित करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'reaching definitions'?",
    "question_hi": "'reaching definitions' क्या है?",
    "options_en": ["Definitions reaching a point", "Definitions not reaching", "All definitions", "No definitions"],
    "options_hi": ["एक बिंदु तक पहुँचने वाली परिभाषाएँ", "पहुँचने वाली परिभाषाएँ नहीं", "सभी परिभाषाएँ", "कोई परिभाषा नहीं"],
    "answer_en": "Definitions reaching a point",
    "answer_hi": "एक बिंदु तक पहुँचने वाली परिभाषाएँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'available expressions'?",
    "question_hi": "'available expressions' क्या है?",
    "options_en": ["Expressions available at point", "Not available", "All expressions", "No expressions"],
    "options_hi": ["बिंदु पर उपलब्ध व्यंजक", "उपलब्ध नहीं", "सभी व्यंजक", "कोई व्यंजक नहीं"],
    "answer_en": "Expressions available at point",
    "answer_hi": "बिंदु पर उपलब्ध व्यंजक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is 'very busy expressions'?",
    "question_hi": "'very busy expressions' क्या है?",
    "options_en": ["Expressions used on all paths", "Not used", "Sometimes used", "Never used"],
    "options_hi": ["सभी पथों पर उपयोग किए जाने वाले व्यंजक", "उपयोग नहीं किया गया", "कभी-कभी उपयोग किया जाता है", "कभी उपयोग नहीं किया जाता"],
    "answer_en": "Expressions used on all paths",
    "answer_hi": "सभी पथों पर उपयोग किए जाने वाले व्यंजक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'alias analysis'?",
    "question_hi": "'alias analysis' क्या है?",
    "options_en": ["Determine if pointers alias", "Determine values", "Determine types", "Determine sizes"],
    "options_hi": ["निर्धारित करें कि क्या पॉइंटर्स एलियास हैं", "मान निर्धारित करें", "प्रकार निर्धारित करें", "आकार निर्धारित करें"],
    "answer_en": "Determine if pointers alias",
    "answer_hi": "निर्धारित करें कि क्या पॉइंटर्स एलियास हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is 'pointer analysis'?",
    "question_hi": "'pointer analysis' क्या है?",
    "options_en": ["Analyze pointer relationships", "Analyze values", "Analyze types", "Analyze sizes"],
    "options_hi": ["पॉइंटर संबंधों का विश्लेषण करें", "मानों का विश्लेषण करें", "प्रकारों का विश्लेषण करें", "आकारों का विश्लेषण करें"],
    "answer_en": "Analyze pointer relationships",
    "answer_hi": "पॉइंटर संबंधों का विश्लेषण करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is 'escape analysis'?",
    "question_hi": "'escape analysis' क्या है?",
    "options_en": ["Determine if object escapes scope", "Escapes function", "Escapes program", "Never escapes"],
    "options_hi": ["निर्धारित करें कि क्या ऑब्जेक्ट स्कोप से बच जाता है", "फ़ंक्शन से बच जाता है", "प्रोग्राम से बच जाता है", "कभी नहीं बचता"],
    "answer_en": "Determine if object escapes scope",
    "answer_hi": "निर्धारित करें कि क्या ऑब्जेक्ट स्कोप से बच जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 'call graph'?",
    "question_hi": "'call graph' क्या है?",
    "options_en": ["Graph of function calls", "Control flow graph", "Data flow graph", "Dependency graph"],
    "options_hi": ["फ़ंक्शन कॉल का ग्राफ", "कंट्रोल फ्लो ग्राफ", "डेटा फ्लो ग्राफ", "निर्भरता ग्राफ"],
    "answer_en": "Graph of function calls",
    "answer_hi": "फ़ंक्शन कॉल का ग्राफ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is 'interprocedural analysis'?",
    "question_hi": "'interprocedural analysis' क्या है?",
    "options_en": ["Analysis across functions", "Within function only", "No analysis", "Global analysis"],
    "options_hi": ["फ़ंक्शन में विश्लेषण", "केवल फ़ंक्शन के भीतर", "कोई विश्लेषण नहीं", "वैश्विक विश्लेषण"],
    "answer_en": "Analysis across functions",
    "answer_hi": "फ़ंक्शन में विश्लेषण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is 'abstract interpretation'?",
    "question_hi": "'abstract interpretation' क्या है?",
    "options_en": ["Approximate program semantics", "Exact semantics", "No semantics", "Partial semantics"],
    "options_hi": ["अनुमानित प्रोग्राम शब्दार्थ", "सटीक शब्दार्थ", "कोई शब्दार्थ नहीं", "आंशिक शब्दार्थ"],
    "answer_en": "Approximate program semantics",
    "answer_hi": "अनुमानित प्रोग्राम शब्दार्थ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is 'type inference'?",
    "question_hi": "'type inference' क्या है?",
    "options_en": ["Infer types automatically", "Declare types", "No types", "Guess types"],
    "options_hi": ["स्वचालित रूप से प्रकार अनुमान लगाएं", "प्रकार घोषित करें", "कोई प्रकार नहीं", "अनुमान प्रकार"],
    "answer_en": "Infer types automatically",
    "answer_hi": "स्वचालित रूप से प्रकार अनुमान लगाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is 'type checking'?",
    "question_hi": "'type checking' क्या है?",
    "options_en": ["Verify type correctness", "Ignore types", "Change types", "Remove types"],
    "options_hi": ["प्रकार शुद्धता सत्यापित करें", "प्रकारों को अनदेखा करें", "प्रकार बदलें", "प्रकार हटाएं"],
    "answer_en": "Verify type correctness",
    "answer_hi": "प्रकार शुद्धता सत्यापित करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is 'type system'?",
    "question_hi": "'type system' क्या है?",
    "options_en": ["Set of rules for types", "No rules", "Some rules", "Variable rules"],
    "options_hi": ["प्रकारों के लिए नियमों का सेट", "कोई नियम नहीं", "कुछ नियम", "परिवर्तनशील नियम"],
    "answer_en": "Set of rules for types",
    "answer_hi": "प्रकारों के लिए नियमों का सेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is 'strong typing'?",
    "question_hi": "'strong typing' क्या है?",
    "options_en": ["Strict type enforcement", "Weak enforcement", "No enforcement", "Partial enforcement"],
    "options_hi": ["सख्त प्रकार प्रवर्तन", "कमजोर प्रवर्तन", "कोई प्रवर्तन नहीं", "आंशिक प्रवर्तन"],
    "answer_en": "Strict type enforcement",
    "answer_hi": "सख्त प्रकार प्रवर्तन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 'weak typing'?",
    "question_hi": "'weak typing' क्या है?",
    "options_en": ["Loose type enforcement", "Strict enforcement", "No enforcement", "Partial enforcement"],
    "options_hi": ["ढीला प्रकार प्रवर्तन", "सख्त प्रवर्तन", "कोई प्रवर्तन नहीं", "आंशिक प्रवर्तन"],
    "answer_en": "Loose type enforcement",
    "answer_hi": "ढीला प्रकार प्रवर्तन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is 'static typing'?",
    "question_hi": "'static typing' क्या है?",
    "options_en": ["Type checking at compile time", "Runtime checking", "No checking", "Partial checking"],
    "options_hi": ["कंपाइल समय पर प्रकार जाँच", "रनटाइम जाँच", "कोई जाँच नहीं", "आंशिक जाँच"],
    "answer_en": "Type checking at compile time",
    "answer_hi": "कंपाइल समय पर प्रकार जाँच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is 'dynamic typing'?",
    "question_hi": "'dynamic typing' क्या है?",
    "options_en": ["Type checking at runtime", "Compile time checking", "No checking", "Partial checking"],
    "options_hi": ["रनटाइम पर प्रकार जाँच", "कंपाइल टाइम जाँच", "कोई जाँच नहीं", "आंशिक जाँच"],
    "answer_en": "Type checking at runtime",
    "answer_hi": "रनटाइम पर प्रकार जाँच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 'type safety'?",
    "question_hi": "'type safety' क्या है?",
    "options_en": ["Prevent type errors", "Allow type errors", "Ignore type errors", "Cause type errors"],
    "options_hi": ["प्रकार त्रुटियों को रोकें", "प्रकार त्रुटियों की अनुमति दें", "प्रकार त्रुटियों को अनदेखा करें", "प्रकार त्रुटियों का कारण बनें"],
    "answer_en": "Prevent type errors",
    "answer_hi": "प्रकार त्रुटियों को रोकें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is 'type conversion'?",
    "question_hi": "'type conversion' क्या है?",
    "options_en": ["Convert between types", "Keep types", "Remove types", "Add types"],
    "options_hi": ["प्रकारों के बीच रूपांतरण", "प्रकार रखें", "प्रकार हटाएं", "प्रकार जोड़ें"],
    "answer_en": "Convert between types",
    "answer_hi": "प्रकारों के बीच रूपांतरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 'type coercion'?",
    "question_hi": "'type coercion' क्या है?",
    "options_en": ["Implicit type conversion", "Explicit conversion", "No conversion", "Partial conversion"],
    "options_hi": ["अंतर्निहित प्रकार रूपांतरण", "स्पष्ट रूपांतरण", "कोई रूपांतरण नहीं", "आंशिक रूपांतरण"],
    "answer_en": "Implicit type conversion",
    "answer_hi": "अंतर्निहित प्रकार रूपांतरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is 'type casting'?",
    "question_hi": "'type casting' क्या है?",
    "options_en": ["Explicit type conversion", "Implicit conversion", "No conversion", "Automatic conversion"],
    "options_hi": ["स्पष्ट प्रकार रूपांतरण", "अंतर्निहित रूपांतरण", "कोई रूपांतरण नहीं", "स्वचालित रूपांतरण"],
    "answer_en": "Explicit type conversion",
    "answer_hi": "स्पष्ट प्रकार रूपांतरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is 'type punning'?",
    "question_hi": "'type punning' क्या है?",
    "options_en": ["Reinterpret memory as different type", "Same type", "No type", "Multiple types"],
    "options_hi": ["मेमोरी को भिन्न प्रकार के रूप में पुनर्व्याख्या करें", "समान प्रकार", "कोई प्रकार नहीं", "एकाधिक प्रकार"],
    "answer_en": "Reinterpret memory as different type",
    "answer_hi": "मेमोरी को भिन्न प्रकार के रूप में पुनर्व्याख्या करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 'type inference algorithm'?",
    "question_hi": "'type inference algorithm' क्या है?",
    "options_en": ["Algorithm to infer types", "Declare types", "No algorithm", "Simple algorithm"],
    "options_hi": ["प्रकारों का अनुमान लगाने के लिए एल्गोरिदम", "प्रकार घोषित करें", "कोई एल्गोरिदम नहीं", "सरल एल्गोरिदम"],
    "answer_en": "Algorithm to infer types",
    "answer_hi": "प्रकारों का अनुमान लगाने के लिए एल्गोरिदम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is 'Hindley-Milner type system'?",
    "question_hi": "'Hindley-Milner type system' क्या है?",
    "options_en": ["Type system for functional languages", "For C", "For assembly", "No type system"],
    "options_hi": ["फंक्शनल भाषाओं के लिए प्रकार प्रणाली", "C के लिए", "असेंबली के लिए", "कोई प्रकार प्रणाली नहीं"],
    "answer_en": "Type system for functional languages",
    "answer_hi": "फंक्शनल भाषाओं के लिए प्रकार प्रणाली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is 'unification' in type inference?",
    "question_hi": "टाइप इंफेरेंस में 'unification' क्या है?",
    "options_en": ["Find type substitution", "Separate types", "No unification", "Simple unification"],
    "options_hi": ["प्रकार प्रतिस्थापन खोजें", "प्रकार अलग करें", "कोई एकीकरण नहीं", "सरल एकीकरण"],
    "answer_en": "Find type substitution",
    "answer_hi": "प्रकार प्रतिस्थापन खोजें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 'type variable'?",
    "question_hi": "'type variable' क्या है?",
    "options_en": ["Placeholder for type", "Actual type", "No type", "Simple type"],
    "options_hi": ["प्रकार के लिए प्लेसहोल्डर", "वास्तविक प्रकार", "कोई प्रकार नहीं", "सरल प्रकार"],
    "answer_en": "Placeholder for type",
    "answer_hi": "प्रकार के लिए प्लेसहोल्डर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is 'polymorphic type'?",
    "question_hi": "'polymorphic type' क्या है?",
    "options_en": ["Type with type variables", "Fixed type", "No type", "Simple type"],
    "options_hi": ["टाइप वेरिएबल्स के साथ प्रकार", "निश्चित प्रकार", "कोई प्रकार नहीं", "सरल प्रकार"],
    "answer_en": "Type with type variables",
    "answer_hi": "टाइप वेरिएबल्स के साथ प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is 'parametric polymorphism'?",
    "question_hi": "'parametric polymorphism' क्या है?",
    "options_en": ["Generics/templates", "Inheritance", "No polymorphism", "Simple polymorphism"],
    "options_hi": ["जेनेरिक/टेम्प्लेट", "विरासत", "कोई बहुरूपता नहीं", "सरल बहुरूपता"],
    "answer_en": "Generics/templates",
    "answer_hi": "जेनेरिक/टेम्प्लेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 'ad-hoc polymorphism'?",
    "question_hi": "'ad-hoc polymorphism' क्या है?",
    "options_en": ["Function overloading", "Generics", "No polymorphism", "Simple polymorphism"],
    "options_hi": ["फ़ंक्शन ओवरलोडिंग", "जेनेरिक", "कोई बहुरूपता नहीं", "सरल बहुरूपता"],
    "answer_en": "Function overloading",
    "answer_hi": "फ़ंक्शन ओवरलोडिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is 'subtype polymorphism'?",
    "question_hi": "'subtype polymorphism' क्या है?",
    "options_en": ["Inheritance", "Generics", "Overloading", "No polymorphism"],
    "options_hi": ["विरासत", "जेनेरिक", "ओवरलोडिंग", "कोई बहुरूपता नहीं"],
    "answer_en": "Inheritance",
    "answer_hi": "विरासत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is 'row polymorphism'?",
    "question_hi": "'row polymorphism' क्या है?",
    "options_en": ["Structural typing for records", "Nominal typing", "No polymorphism", "Simple polymorphism"],
    "options_hi": ["रिकॉर्ड के लिए संरचनात्मक टाइपिंग", "नाममात्र टाइपिंग", "कोई बहुरूपता नहीं", "सरल बहुरूपता"],
    "answer_en": "Structural typing for records",
    "answer_hi": "रिकॉर्ड के लिए संरचनात्मक टाइपिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 'gradual typing'?",
    "question_hi": "'gradual typing' क्या है?",
    "options_en": ["Mix static and dynamic typing", "Only static", "Only dynamic", "No typing"],
    "options_hi": ["स्थैतिक और गतिशील टाइपिंग मिलाएं", "केवल स्थैतिक", "केवल गतिशील", "कोई टाइपिंग नहीं"],
    "answer_en": "Mix static and dynamic typing",
    "answer_hi": "स्थैतिक और गतिशील टाइपिंग मिलाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is 'dependent typing'?",
    "question_hi": "'dependent typing' क्या है?",
    "options_en": ["Types depend on values", "Independent", "No dependence", "Simple dependence"],
    "options_hi": ["प्रकार मानों पर निर्भर करते हैं", "स्वतंत्र", "कोई निर्भरता नहीं", "सरल निर्भरता"],
    "answer_en": "Types depend on values",
    "answer_hi": "प्रकार मानों पर निर्भर करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is 'linear typing'?",
    "question_hi": "'linear typing' क्या है?",
    "options_en": ["Track resource usage", "Ignore usage", "No tracking", "Simple tracking"],
    "options_hi": ["संसाधन उपयोग ट्रैक करें", "उपयोग अनदेखा करें", "कोई ट्रैकिंग नहीं", "सरल ट्रैकिंग"],
    "answer_en": "Track resource usage",
    "answer_hi": "संसाधन उपयोग ट्रैक करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'affine typing'?",
    "question_hi": "'affine typing' क्या है?",
    "options_en": ["Use at most once", "Use many times", "No use", "Simple use"],
    "options_hi": ["अधिकतम एक बार उपयोग करें", "कई बार उपयोग करें", "कोई उपयोग नहीं", "सरल उपयोग"],
    "answer_en": "Use at most once",
    "answer_hi": "अधिकतम एक बार उपयोग करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is 'uniqueness typing'?",
    "question_hi": "'uniqueness typing' क्या है?",
    "options_en": ["Unique reference", "Shared reference", "No reference", "Simple reference"],
    "options_hi": ["अद्वितीय संदर्भ", "साझा संदर्भ", "कोई संदर्भ नहीं", "सरल संदर्भ"],
    "answer_en": "Unique reference",
    "answer_hi": "अद्वितीय संदर्भ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is 'session typing'?",
    "question_hi": "'session typing' क्या है?",
    "options_en": ["Type communication protocols", "No protocols", "Simple protocols", "Complex protocols"],
    "options_hi": ["प्रकार संचार प्रोटोकॉल", "कोई प्रोटोकॉल नहीं", "सरल प्रोटोकॉल", "जटिल प्रोटोकॉल"],
    "answer_en": "Type communication protocols",
    "answer_hi": "प्रकार संचार प्रोटोकॉल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 'refinement typing'?",
    "question_hi": "'refinement typing' क्या है?",
    "options_en": ["Refine types with predicates", "No refinement", "Simple refinement", "Complex refinement"],
    "options_hi": ["विधेयों के साथ प्रकारों को परिष्कृत करें", "कोई परिष्करण नहीं", "सरल परिष्करण", "जटिल परिष्करण"],
    "answer_en": "Refine types with predicates",
    "answer_hi": "विधेयों के साथ प्रकारों को परिष्कृत करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is 'occurrence typing'?",
    "question_hi": "'occurrence typing' क्या है?",
    "options_en": ["Type based on occurrence context", "No context", "Simple context", "Complex context"],
    "options_hi": ["घटना संदर्भ के आधार पर प्रकार", "कोई संदर्भ नहीं", "सरल संदर्भ", "जटिल संदर्भ"],
    "answer_en": "Type based on occurrence context",
    "answer_hi": "घटना संदर्भ के आधार पर प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is 'nominal typing'?",
    "question_hi": "'nominal typing' क्या है?",
    "options_en": ["Type identity by name", "By structure", "No identity", "Simple identity"],
    "options_hi": ["नाम से प्रकार पहचान", "संरचना से", "कोई पहचान नहीं", "सरल पहचान"],
    "answer_en": "Type identity by name",
    "answer_hi": "नाम से प्रकार पहचान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 'structural typing'?",
    "question_hi": "'structural typing' क्या है?",
    "options_en": ["Type identity by structure", "By name", "No identity", "Simple identity"],
    "options_hi": ["संरचना से प्रकार पहचान", "नाम से", "कोई पहचान नहीं", "सरल पहचान"],
    "answer_en": "Type identity by structure",
    "answer_hi": "संरचना से प्रकार पहचान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is 'duck typing'?",
    "question_hi": "'duck typing' क्या है?",
    "options_en": ["If it quacks like a duck...", "Strict typing", "No typing", "Simple typing"],
    "options_hi": ["अगर यह बत्तख की तरह क्वैक करता है...", "सख्त टाइपिंग", "कोई टाइपिंग नहीं", "सरल टाइपिंग"],
    "answer_en": "If it quacks like a duck...",
    "answer_hi": "अगर यह बत्तख की तरह क्वैक करता है...",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is 'type class'?",
    "question_hi": "'type class' क्या है?",
    "options_en": ["Interface for types", "Class for types", "No class", "Simple class"],
    "options_hi": ["प्रकारों के लिए इंटरफ़ेस", "प्रकारों के लिए कक्षा", "कोई कक्षा नहीं", "सरल कक्षा"],
    "answer_en": "Interface for types",
    "answer_hi": "प्रकारों के लिए इंटरफ़ेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is 'higher-kinded type'?",
    "question_hi": "'higher-kinded type' क्या है?",
    "options_en": ["Type constructor", "Simple type", "No type", "Complex type"],
    "options_hi": ["टाइप कंस्ट्रक्टर", "सरल प्रकार", "कोई प्रकार नहीं", "जटिल प्रकार"],
    "answer_en": "Type constructor",
    "answer_hi": "टाइप कंस्ट्रक्टर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is 'existential type'?",
    "question_hi": "'existential type' क्या है?",
    "options_en": ["There exists some type", "For all types", "No type", "Specific type"],
    "options_hi": ["कुछ प्रकार मौजूद है", "सभी प्रकारों के लिए", "कोई प्रकार नहीं", "विशिष्ट प्रकार"],
    "answer_en": "There exists some type",
    "answer_hi": "कुछ प्रकार मौजूद है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is 'universal type'?",
    "question_hi": "'universal type' क्या है?",
    "options_en": ["For all types", "Exists some type", "No type", "Specific type"],
    "options_hi": ["सभी प्रकारों के लिए", "कुछ प्रकार मौजूद है", "कोई प्रकार नहीं", "विशिष्ट प्रकार"],
    "answer_en": "For all types",
    "answer_hi": "सभी प्रकारों के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 'recursive type'?",
    "question_hi": "'recursive type' क्या है?",
    "options_en": ["Type defined in terms of itself", "Non-recursive", "No type", "Simple type"],
    "options_hi": ["स्वयं के संदर्भ में परिभाषित प्रकार", "गैर-पुनरावर्ती", "कोई प्रकार नहीं", "सरल प्रकार"],
    "answer_en": "Type defined in terms of itself",
    "answer_hi": "स्वयं के संदर्भ में परिभाषित प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 'algebraic data type'?",
    "question_hi": "'algebraic data type' क्या है?",
    "options_en": ["Sum and product types", "Simple types", "No types", "Complex types"],
    "options_hi": ["योग और उत्पाद प्रकार", "सरल प्रकार", "कोई प्रकार नहीं", "जटिल प्रकार"],
    "answer_en": "Sum and product types",
    "answer_hi": "योग और उत्पाद प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is 'sum type'?",
    "question_hi": "'sum type' क्या है?",
    "options_en": ["Tagged union/variant", "Union only", "No union", "Simple union"],
    "options_hi": ["टैग किया गया यूनियन/वेरिएंट", "केवल यूनियन", "कोई यूनियन नहीं", "सरल यूनियन"],
    "answer_en": "Tagged union/variant",
    "answer_hi": "टैग किया गया यूनियन/वेरिएंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is 'product type'?",
    "question_hi": "'product type' क्या है?",
    "options_en": ["Tuple/record", "Single value", "No product", "Simple product"],
    "options_hi": ["टपल/रिकॉर्ड", "एकल मान", "कोई उत्पाद नहीं", "सरल उत्पाद"],
    "answer_en": "Tuple/record",
    "answer_hi": "टपल/रिकॉर्ड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is 'dependent sum type'?",
    "question_hi": "'dependent sum type' क्या है?",
    "options_en": ["Sigma type", "Pi type", "No type", "Simple type"],
    "options_hi": ["सिग्मा प्रकार", "पाई प्रकार", "कोई प्रकार नहीं", "सरल प्रकार"],
    "answer_en": "Sigma type",
    "answer_hi": "सिग्मा प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 'dependent product type'?",
    "question_hi": "'dependent product type' क्या है?",
    "options_en": ["Pi type", "Sigma type", "No type", "Simple type"],
    "options_hi": ["पाई प्रकार", "सिग्मा प्रकार", "कोई प्रकार नहीं", "सरल प्रकार"],
    "answer_en": "Pi type",
    "answer_hi": "पाई प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 'phantom type'?",
    "question_hi": "'phantom type' क्या है?",
    "options_en": ["Type parameter unused in definition", "Used parameter", "No parameter", "Simple parameter"],
    "options_hi": ["परिभाषा में अप्रयुक्त प्रकार पैरामीटर", "प्रयुक्त पैरामीटर", "कोई पैरामीटर नहीं", "सरल पैरामीटर"],
    "answer_en": "Type parameter unused in definition",
    "answer_hi": "परिभाषा में अप्रयुक्त प्रकार पैरामीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is 'type witness'?",
    "question_hi": "'type witness' क्या है?",
    "options_en": ["Value witnessing type equality", "No witness", "Simple witness", "Complex witness"],
    "options_hi": ["प्रकार समानता का साक्षी मान", "कोई साक्षी नहीं", "सरल साक्षी", "जटिल साक्षी"],
    "answer_en": "Value witnessing type equality",
    "answer_hi": "प्रकार समानता का साक्षी मान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is 'type family'?",
    "question_hi": "'type family' क्या है?",
    "options_en": ["Type-level function", "Value function", "No function", "Simple function"],
    "options_hi": ["टाइप-लेवल फ़ंक्शन", "वैल्यू फ़ंक्शन", "कोई फ़ंक्शन नहीं", "सरल फ़ंक्शन"],
    "answer_en": "Type-level function",
    "answer_hi": "टाइप-लेवल फ़ंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is 'type synonym'?",
    "question_hi": "'type synonym' क्या है?",
    "options_en": ["Type alias", "New type", "No type", "Simple type"],
    "options_hi": ["टाइप उपनाम", "नया प्रकार", "कोई प्रकार नहीं", "सरल प्रकार"],
    "answer_en": "Type alias",
    "answer_hi": "टाइप उपनाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 'newtype'?",
    "question_hi": "'newtype' क्या है?",
    "options_en": ["Distinct type with same representation", "Same type", "No type", "Simple type"],
    "options_hi": ["समान प्रतिनिधित्व के साथ विशिष्ट प्रकार", "समान प्रकार", "कोई प्रकार नहीं", "सरल प्रकार"],
    "answer_en": "Distinct type with same representation",
    "answer_hi": "समान प्रतिनिधित्व के साथ विशिष्ट प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is 'type role'?",
    "question_hi": "'type role' क्या है?",
    "options_en": ["Coercion safety role", "No role", "Simple role", "Complex role"],
    "options_hi": ["जबरदस्ती सुरक्षा भूमिका", "कोई भूमिका नहीं", "सरल भूमिका", "जटिल भूमिका"],
    "answer_en": "Coercion safety role",
    "answer_hi": "जबरदस्ती सुरक्षा भूमिका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is 'type application'?",
    "question_hi": "'type application' क्या है?",
    "options_en": ["Apply type to type constructor", "Apply value", "No application", "Simple application"],
    "options_hi": ["टाइप कंस्ट्रक्टर को टाइप लागू करें", "मान लागू करें", "कोई आवेदन नहीं", "सरल आवेदन"],
    "answer_en": "Apply type to type constructor",
    "answer_hi": "टाइप कंस्ट्रक्टर को टाइप लागू करें",
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