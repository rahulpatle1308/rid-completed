const questions = [
  {
    "num": 1,
    "question_en": "What is 'pointer provenance' and how does it affect compiler optimizations?",
    "question_hi": "'पॉइंटर प्रोवेनेंस' क्या है और यह कंपाइलर ऑप्टिमाइज़ेशन को कैसे प्रभावित करता है?",
    "options_en": [
      "Concept tracking allocation origin; enables alias analysis and dead store elimination",
      "Pointer value only",
      "No effect on optimization",
      "Only for debugging"
    ],
    "options_hi": [
      "आवंटन मूल ट्रैकिंग अवधारणा; एलियास विश्लेषण और डेड स्टोर एलिमिनेशन सक्षम करता है",
      "केवल पॉइंटर मान",
      "ऑप्टिमाइज़ेशन पर कोई प्रभाव नहीं",
      "केवल डिबगिंग के लिए"
    ],
    "answer_en": "Concept tracking allocation origin; enables alias analysis and dead store elimination",
    "answer_hi": "आवंटन मूल ट्रैकिंग अवधारणा; एलियास विश्लेषण और डेड स्टोर एलिमिनेशन सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is 'pointer integer representation' and its portability issues?",
    "question_hi": "'पॉइंटर पूर्णांक प्रतिनिधित्व' क्या है और इसकी पोर्टेबिलिटी समस्याएं क्या हैं?",
    "options_en": [
      "Cast between pointer and integer; implementation-defined size, trap representations",
      "Always portable",
      "Standard guarantees size",
      "No issues"
    ],
    "options_hi": [
      "पॉइंटर और पूर्णांक के बीच कास्ट; कार्यान्वयन-परिभाषित आकार, ट्रैप प्रतिनिधित्व",
      "हमेशा पोर्टेबल",
      "मानक आकार की गारंटी देता है",
      "कोई समस्या नहीं"
    ],
    "answer_en": "Cast between pointer and integer; implementation-defined size, trap representations",
    "answer_hi": "पॉइंटर और पूर्णांक के बीच कास्ट; कार्यान्वयन-परिभाषित आकार, ट्रैप प्रतिनिधित्व",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is 'pointer arithmetic on void pointers' and C standard rules?",
    "question_hi": "'void पॉइंटर पर पॉइंटर अंकगणित' और C मानक नियम क्या हैं?",
    "options_en": [
      "Not allowed in standard C; GCC extension allows with size 1",
      "Always allowed",
      "Only in C++",
      "Standard defines size"
    ],
    "options_hi": [
      "मानक C में अनुमति नहीं; GCC एक्सटेंशन आकार 1 के साथ अनुमति देता है",
      "हमेशा अनुमति",
      "केवल C++ में",
      "मानक आकार परिभाषित करता है"
    ],
    "answer_en": "Not allowed in standard C; GCC extension allows with size 1",
    "answer_hi": "मानक C में अनुमति नहीं; GCC एक्सटेंशन आकार 1 के साथ अनुमति देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is 'strict pointer aliasing' exceptions for aggregates?",
    "question_hi": "एग्रीगेट्स के लिए 'स्ट्रिक्ट पॉइंटर एलियासिंग' अपवाद क्या हैं?",
    "options_en": [
      "Struct/union can alias with contained types; char* can alias anything",
      "No exceptions",
      "Only arrays",
      "All pointers can alias"
    ],
    "options_hi": [
      "स्ट्रक्चर/यूनियन समाहित प्रकारों के साथ एलियास कर सकते हैं; char* कुछ भी एलियास कर सकता है",
      "कोई अपवाद नहीं",
      "केवल ऐरे",
      "सभी पॉइंटर्स एलियास कर सकते हैं"
    ],
    "answer_en": "Struct/union can alias with contained types; char* can alias anything",
    "answer_hi": "स्ट्रक्चर/यूनियन समाहित प्रकारों के साथ एलियास कर सकते हैं; char* कुछ भी एलियास कर सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is 'effective type' rule for allocated memory?",
    "question_hi": "आवंटित मेमोरी के लिए 'प्रभावी प्रकार' नियम क्या है?",
    "options_en": [
      "Type of lvalue used for store determines effective type; can change with subsequent stores",
      "Always void*",
      "First store type fixed",
      "No effective type"
    ],
    "options_hi": [
      "स्टोर के लिए उपयोग किए गए lvalue का प्रकार प्रभावी प्रकार निर्धारित करता है; बाद के स्टोर के साथ बदल सकता है",
      "हमेशा void*",
      "पहला स्टोर प्रकार निश्चित",
      "कोई प्रभावी प्रकार नहीं"
    ],
    "answer_en": "Type of lvalue used for store determines effective type; can change with subsequent stores",
    "answer_hi": "स्टोर के लिए उपयोग किए गए lvalue का प्रकार प्रभावी प्रकार निर्धारित करता है; बाद के स्टोर के साथ बदल सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is 'strict aliasing' violation example causing UB?",
    "question_hi": "UB का कारण बनने वाले 'स्ट्रिक्ट एलियासिंग' उल्लंघन का उदाहरण क्या है?",
    "options_en": [
      "int i; float *f = (float*)&i; *f = 1.0; (incompatible types)",
      "char *c = (char*)&i; (allowed)",
      "Same type access",
      "Union access"
    ],
    "options_hi": [
      "int i; float *f = (float*)&i; *f = 1.0; (असंगत प्रकार)",
      "char *c = (char*)&i; (अनुमत)",
      "समान प्रकार एक्सेस",
      "यूनियन एक्सेस"
    ],
    "answer_en": "int i; float *f = (float*)&i; *f = 1.0; (incompatible types)",
    "answer_hi": "int i; float *f = (float*)&i; *f = 1.0; (असंगत प्रकार)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is 'type-based alias analysis' (TBAA) in compilers?",
    "question_hi": "कंपाइलर में 'टाइप-आधारित एलियास विश्लेषण' (TBAA) क्या है?",
    "options_en": [
      "Optimization assuming pointers of different types don't alias",
      "All pointers alias",
      "Only for same types",
      "No optimization"
    ],
    "options_hi": [
      "ऑप्टिमाइज़ेशन यह मानते हुए कि विभिन्न प्रकार के पॉइंटर्स एलियास नहीं करते",
      "सभी पॉइंटर्स एलियास",
      "केवल समान प्रकारों के लिए",
      "कोई ऑप्टिमाइज़ेशन नहीं"
    ],
    "answer_en": "Optimization assuming pointers of different types don't alias",
    "answer_hi": "ऑप्टिमाइज़ेशन यह मानते हुए कि विभिन्न प्रकार के पॉइंटर्स एलियास नहीं करते",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is 'dead store elimination' interaction with volatile?",
    "question_hi": "volatile के साथ 'डेड स्टोर एलिमिनेशन' इंटरैक्शन क्या है?",
    "options_en": [
      "volatile prevents elimination of writes; all volatile accesses preserved",
      "No prevention",
      "Only reads preserved",
      "Elimination allowed"
    ],
    "options_hi": [
      "volatile लिखने के उन्मूलन को रोकता है; सभी volatile एक्सेस संरक्षित",
      "कोई रोकथाम नहीं",
      "केवल पढ़ना संरक्षित",
      "उन्मूलन अनुमत"
    ],
    "answer_en": "volatile prevents elimination of writes; all volatile accesses preserved",
    "answer_hi": "volatile लिखने के उन्मूलन को रोकता है; सभी volatile एक्सेस संरक्षित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is 'common subexpression elimination' across statements?",
    "question_hi": "कथनों में 'कॉमन सबएक्सप्रेशन एलिमिनेशन' क्या है?",
    "options_en": [
      "Reusing computed value from earlier expression; requires no intervening modifications",
      "Only within same statement",
      "Not allowed",
      "Always safe"
    ],
    "options_hi": [
      "पहले के एक्सप्रेशन से गणना किए गए मान का पुन: उपयोग; कोई हस्तक्षेप संशोधन की आवश्यकता नहीं",
      "केवल एक ही कथन में",
      "अनुमति नहीं",
      "हमेशा सुरक्षित"
    ],
    "answer_en": "Reusing computed value from earlier expression; requires no intervening modifications",
    "answer_hi": "पहले के एक्सप्रेशन से गणना किए गए मान का पुन: उपयोग; कोई हस्तक्षेप संशोधन की आवश्यकता नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 'loop unrolling' and trade-offs?",
    "question_hi": "'लूप अनरोलिंग' और ट्रेड-ऑफ क्या है?",
    "options_en": [
      "Replicating loop body to reduce overhead; increases code size, may hurt cache",
      "Always beneficial",
      "Only for small loops",
      "No trade-offs"
    ],
    "options_hi": [
      "ओवरहेड कम करने के लिए लूप बॉडी की प्रतिकृति; कोड आकार बढ़ाता है, कैश को नुकसान पहुंचा सकता है",
      "हमेशा लाभदायक",
      "केवल छोटे लूप के लिए",
      "कोई ट्रेड-ऑफ नहीं"
    ],
    "answer_en": "Replicating loop body to reduce overhead; increases code size, may hurt cache",
    "answer_hi": "ओवरहेड कम करने के लिए लूप बॉडी की प्रतिकृति; कोड आकार बढ़ाता है, कैश को नुकसान पहुंचा सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is 'instruction scheduling' and pipeline hazards?",
    "question_hi": "'निर्देश शेड्यूलिंग' और पाइपलाइन खतरे क्या हैं?",
    "options_en": [
      "Reordering instructions to avoid stalls; data, control, structural hazards",
      "No hazards",
      "Only for RISC",
      "Compiler doesn't schedule"
    ],
    "options_hi": [
      "स्टॉल से बचने के लिए निर्देशों को पुन: व्यवस्थित करना; डेटा, नियंत्रण, संरचनात्मक खतरे",
      "कोई खतरा नहीं",
      "केवल RISC के लिए",
      "कंपाइलर शेड्यूल नहीं करता"
    ],
    "answer_en": "Reordering instructions to avoid stalls; data, control, structural hazards",
    "answer_hi": "स्टॉल से बचने के लिए निर्देशों को पुन: व्यवस्थित करना; डेटा, नियंत्रण, संरचनात्मक खतरे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is 'register allocation' and spilling?",
    "question_hi": "'रजिस्टर आवंटन' और स्पिलिंग क्या है?",
    "options_en": [
      "Assigning variables to registers; spilling to memory when registers exhausted",
      "Unlimited registers",
      "No spilling",
      "Only for globals"
    ],
    "options_hi": [
      "वेरिएबल्स को रजिस्टरों में असाइन करना; रजिस्टर समाप्त होने पर मेमोरी में स्पिलिंग",
      "असीमित रजिस्टर",
      "कोई स्पिलिंग नहीं",
      "केवल ग्लोबल्स के लिए"
    ],
    "answer_en": "Assigning variables to registers; spilling to memory when registers exhausted",
    "answer_hi": "वेरिएबल्स को रजिस्टरों में असाइन करना; रजिस्टर समाप्त होने पर मेमोरी में स्पिलिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is 'function inlining' heuristics?",
    "question_hi": "'फ़ंक्शन इनलाइनिंग' हेयूरिस्टिक्स क्या है?",
    "options_en": [
      "Size threshold, call frequency, optimization level determine inlining",
      "Always inline",
      "Never inline",
      "Only small functions"
    ],
    "options_hi": [
      "आकार सीमा, कॉल आवृत्ति, ऑप्टिमाइज़ेशन स्तर इनलाइनिंग निर्धारित करते हैं",
      "हमेशा इनलाइन",
      "कभी इनलाइन नहीं",
      "केवल छोटे फ़ंक्शन"
    ],
    "answer_en": "Size threshold, call frequency, optimization level determine inlining",
    "answer_hi": "आकार सीमा, कॉल आवृत्ति, ऑप्टिमाइज़ेशन स्तर इनलाइनिंग निर्धारित करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is 'link-time optimization' (LTO) benefits?",
    "question_hi": "'लिंक-टाइम ऑप्टिमाइज़ेशन' (LTO) के लाभ क्या हैं?",
    "options_en": [
      "Cross-module inlining, interprocedural optimization, dead code elimination",
      "No benefits",
      "Only faster linking",
      "Smaller objects"
    ],
    "options_hi": [
      "क्रॉस-मॉड्यूल इनलाइनिंग, अंतर-प्रक्रियात्मक ऑप्टिमाइज़ेशन, डेड कोड एलिमिनेशन",
      "कोई लाभ नहीं",
      "केवल तेज लिंकिंग",
      "छोटी वस्तुएं"
    ],
    "answer_en": "Cross-module inlining, interprocedural optimization, dead code elimination",
    "answer_hi": "क्रॉस-मॉड्यूल इनलाइनिंग, अंतर-प्रक्रियात्मक ऑप्टिमाइज़ेशन, डेड कोड एलिमिनेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is 'profile-guided optimization' (PGO) workflow?",
    "question_hi": "'प्रोफाइल-गाइडेड ऑप्टिमाइज़ेशन' (PGO) वर्कफ़्लो क्या है?",
    "options_en": [
      "Instrument, run with training data, recompile with profile",
      "Single compilation",
      "No training",
      "Static only"
    ],
    "options_hi": [
      "इंस्ट्रूमेंट, प्रशिक्षण डेटा के साथ चलाएं, प्रोफाइल के साथ पुनः संकलित करें",
      "एकल संकलन",
      "कोई प्रशिक्षण नहीं",
      "केवल स्थैतिक"
    ],
    "answer_en": "Instrument, run with training data, recompile with profile",
    "answer_hi": "इंस्ट्रूमेंट, प्रशिक्षण डेटा के साथ चलाएं, प्रोफाइल के साथ पुनः संकलित करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'speculative execution' side-channel attacks?",
    "question_hi": "'स्पेक्युलेटिव एक्ज़िक्यूशन' साइड-चैनल हमले क्या हैं?",
    "options_en": [
      "Spectre, Meltdown exploiting branch prediction and cache timing",
      "No attacks",
      "Only theoretical",
      "Not in CPUs"
    ],
    "options_hi": [
      "स्पेक्ट्रे, मेल्टडाउन ब्रांच प्रेडिक्शन और कैश टाइमिंग का शोषण करते हैं",
      "कोई हमला नहीं",
      "केवल सैद्धांतिक",
      "CPU में नहीं"
    ],
    "answer_en": "Spectre, Meltdown exploiting branch prediction and cache timing",
    "answer_hi": "स्पेक्ट्रे, मेल्टडाउन ब्रांच प्रेडिक्शन और कैश टाइमिंग का शोषण करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is 'cache prefetching' strategies?",
    "question_hi": "'कैच प्रीफ़ेचिंग' रणनीतियाँ क्या हैं?",
    "options_en": [
      "Hardware prefetch (stream, stride), software __builtin_prefetch",
      "No prefetching",
      "Only hardware",
      "Only software"
    ],
    "options_hi": [
      "हार्डवेयर प्रीफ़ेच (स्ट्रीम, स्ट्राइड), सॉफ्टवेयर __builtin_prefetch",
      "कोई प्रीफ़ेचिंग नहीं",
      "केवल हार्डवेयर",
      "केवल सॉफ्टवेयर"
    ],
    "answer_en": "Hardware prefetch (stream, stride), software __builtin_prefetch",
    "answer_hi": "हार्डवेयर प्रीफ़ेच (स्ट्रीम, स्ट्राइड), सॉफ्टवेयर __builtin_prefetch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is 'TLB' (Translation Lookaside Buffer) and misses?",
    "question_hi": "'TLB' (ट्रांसलेशन लुकएसाइड बफर) और मिस क्या है?",
    "options_en": [
      "Cache for virtual-to-physical address translation; miss causes page walk",
      "No TLB",
      "Only for kernel",
      "No misses"
    ],
    "options_hi": [
      "वर्चुअल-टू-फिजिकल एड्रेस ट्रांसलेशन के लिए कैश; मिस पेज वॉक का कारण बनता है",
      "कोई TLB नहीं",
      "केवल कर्नेल के लिए",
      "कोई मिस नहीं"
    ],
    "answer_en": "Cache for virtual-to-physical address translation; miss causes page walk",
    "answer_hi": "वर्चुअल-टू-फिजिकल एड्रेस ट्रांसलेशन के लिए कैश; मिस पेज वॉक का कारण बनता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'memory disambiguation' in out-of-order CPUs?",
    "question_hi": "आउट-ऑफ-ऑर्डर CPU में 'मेमोरी डिसएम्बिगुइशन' क्या है?",
    "options_en": [
      "Hardware determining if memory operations can be reordered; store-to-load forwarding",
      "No reordering",
      "Only in-order",
      "Compiler only"
    ],
    "options_hi": [
      "हार्डवेयर निर्धारित करता है कि क्या मेमोरी ऑपरेशन पुन: क्रमबद्ध किए जा सकते हैं; स्टोर-टू-लोड फॉरवर्डिंग",
      "कोई पुन: क्रमबद्ध नहीं",
      "केवल इन-ऑर्डर",
      "केवल कंपाइलर"
    ],
    "answer_en": "Hardware determining if memory operations can be reordered; store-to-load forwarding",
    "answer_hi": "हार्डवेयर निर्धारित करता है कि क्या मेमोरी ऑपरेशन पुन: क्रमबद्ध किए जा सकते हैं; स्टोर-टू-लोड फॉरवर्डिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is 'cache coherence protocol' states (MESI)?",
    "question_hi": "'कैश कोहेरेंस प्रोटोकॉल' स्थितियाँ (MESI) क्या हैं?",
    "options_en": [
      "Modified, Exclusive, Shared, Invalid; track cache line ownership",
      "Only valid/invalid",
      "No states",
      "Not for coherence"
    ],
    "options_hi": [
      "संशोधित, अनन्य, साझा, अमान्य; कैश लाइन स्वामित्व ट्रैक करें",
      "केवल वैध/अमान्य",
      "कोई स्थिति नहीं",
      "सुसंगति के लिए नहीं"
    ],
    "answer_en": "Modified, Exclusive, Shared, Invalid; track cache line ownership",
    "answer_hi": "संशोधित, अनन्य, साझा, अमान्य; कैश लाइन स्वामित्व ट्रैक करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 'false sharing' detection tools?",
    "question_hi": "'फॉल्स शेयरिंग' डिटेक्शन टूल्स क्या हैं?",
    "options_en": [
      "Perf, VTune, cachegrind; monitor cache misses, contention",
      "No tools",
      "Only static analysis",
      "Compiler warnings"
    ],
    "options_hi": [
      "Perf, VTune, cachegrind; कैश मिस, संघर्ष की निगरानी",
      "कोई टूल नहीं",
      "केवल स्थैतिक विश्लेषण",
      "कंपाइलर चेतावनियाँ"
    ],
    "answer_en": "Perf, VTune, cachegrind; monitor cache misses, contention",
    "answer_hi": "Perf, VTune, cachegrind; कैश मिस, संघर्ष की निगरानी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is 'memory barrier' types (full, acquire, release)?",
    "question_hi": "'मेमोरी बैरियर' प्रकार (फुल, एक्वायर, रिलीज़) क्या हैं?",
    "options_en": [
      "Full barrier (mfence), acquire barrier (loads), release barrier (stores)",
      "All same",
      "Only full",
      "No types"
    ],
    "options_hi": [
      "फुल बैरियर (mfence), एक्वायर बैरियर (लोड), रिलीज़ बैरियर (स्टोर)",
      "सभी समान",
      "केवल फुल",
      "कोई प्रकार नहीं"
    ],
    "answer_en": "Full barrier (mfence), acquire barrier (loads), release barrier (stores)",
    "answer_hi": "फुल बैरियर (mfence), एक्वायर बैरियर (लोड), रिलीज़ बैरियर (स्टोर)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is 'RCU' (Read-Copy-Update) synchronization?",
    "question_hi": "'RCU' (रीड-कॉपी-अपडेट) सिंक्रोनाइज़ेशन क्या है?",
    "options_en": [
      "Lock-free reads, deferred reclamation; grace periods, quiescent states",
      "Lock-based",
      "Only for writes",
      "No synchronization"
    ],
    "options_hi": [
      "लॉक-फ्री रीड, विलंबित पुनर्प्राप्ति; ग्रेस अवधि, शांत अवस्थाएं",
      "लॉक-आधारित",
      "केवल लिखने के लिए",
      "कोई सिंक्रोनाइज़ेशन नहीं"
    ],
    "answer_en": "Lock-free reads, deferred reclamation; grace periods, quiescent states",
    "answer_hi": "लॉक-फ्री रीड, विलंबित पुनर्प्राप्ति; ग्रेस अवधि, शांत अवस्थाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is 'ABA problem' solutions (tagged pointers, hazard pointers)?",
    "question_hi": "'ABA समस्या' समाधान (टैग किए गए पॉइंटर्स, खतरा पॉइंटर्स) क्या हैं?",
    "options_en": [
      "Version tags in pointer, hazard pointers for safe memory reclamation",
      "No solutions",
      "Only mutexes",
      "Ignore problem"
    ],
    "options_hi": [
      "पॉइंटर में संस्करण टैग, सुरक्षित मेमोरी पुनर्प्राप्ति के लिए खतरा पॉइंटर्स",
      "कोई समाधान नहीं",
      "केवल म्यूटेक्स",
      "समस्या अनदेखा करें"
    ],
    "answer_en": "Version tags in pointer, hazard pointers for safe memory reclamation",
    "answer_hi": "पॉइंटर में संस्करण टैग, सुरक्षित मेमोरी पुनर्प्राप्ति के लिए खतरा पॉइंटर्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is 'priority inheritance' vs 'priority ceiling'?",
    "question_hi": "'प्राथमिकता विरासत' बनाम 'प्राथमिकता सीलिंग' क्या है?",
    "options_en": [
      "Inheritance: low-priority inherits high; Ceiling: pre-defined priority for lock",
      "Same thing",
      "Only inheritance",
      "No difference"
    ],
    "options_hi": [
      "विरासत: निम्न-प्राथमिकता उच्च को विरासत में मिलती है; सीलिंग: लॉक के लिए पूर्वनिर्धारित प्राथमिकता",
      "एक ही बात",
      "केवल विरासत",
      "कोई अंतर नहीं"
    ],
    "answer_en": "Inheritance: low-priority inherits high; Ceiling: pre-defined priority for lock",
    "answer_hi": "विरासत: निम्न-प्राथमिकता उच्च को विरासत में मिलती है; सीलिंग: लॉक के लिए पूर्वनिर्धारित प्राथमिकता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is 'memory model' for atomics (SC, TSO, relaxed)?",
    "question_hi": "एटॉमिक्स के लिए 'मेमोरी मॉडल' (SC, TSO, रिलैक्स्ड) क्या है?",
    "options_en": [
      "Sequential Consistency (SC), Total Store Order (TSO), relaxed with minimal guarantees",
      "Only SC",
      "All same",
      "No model"
    ],
    "options_hi": [
      "अनुक्रमिक स्थिरता (SC), कुल स्टोर आदेश (TSO), न्यूनतम गारंटी के साथ शिथिल",
      "केवल SC",
      "सभी समान",
      "कोई मॉडल नहीं"
    ],
    "answer_en": "Sequential Consistency (SC), Total Store Order (TSO), relaxed with minimal guarantees",
    "answer_hi": "अनुक्रमिक स्थिरता (SC), कुल स्टोर आदेश (TSO), न्यूनतम गारंटी के साथ शिथिल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is 'data race' detection tools (ThreadSanitizer, Helgrind)?",
    "question_hi": "'डेटा रेस' डिटेक्शन टूल्स (ThreadSanitizer, Helgrind) क्या हैं?",
    "options_en": [
      "Dynamic analysis tools detecting unsynchronized memory accesses",
      "No tools",
      "Only static",
      "Compiler detects"
    ],
    "options_hi": [
      "गतिशील विश्लेषण टूल असंगत मेमोरी एक्सेस का पता लगाते हैं",
      "कोई टूल नहीं",
      "केवल स्थैतिक",
      "कंपाइलर पता लगाता है"
    ],
    "answer_en": "Dynamic analysis tools detecting unsynchronized memory accesses",
    "answer_hi": "गतिशील विश्लेषण टूल असंगत मेमोरी एक्सेस का पता लगाते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 'thread-local storage' implementation (ELF TLS, Windows TLS)?",
    "question_hi": "'थ्रेड-लोकल स्टोरेज' कार्यान्वयन (ELF TLS, Windows TLS) क्या है?",
    "options_en": [
      "ELF: gs/fs segment, Windows: TIB; compiler generates access wrappers",
      "Same everywhere",
      "Only stack",
      "No implementation"
    ],
    "options_hi": [
      "ELF: gs/fs सेगमेंट, Windows: TIB; कंपाइलर एक्सेस रैपर्स उत्पन्न करता है",
      "हर जगह समान",
      "केवल स्टैक",
      "कोई कार्यान्वयन नहीं"
    ],
    "answer_en": "ELF: gs/fs segment, Windows: TIB; compiler generates access wrappers",
    "answer_hi": "ELF: gs/fs सेगमेंट, Windows: TIB; कंपाइलर एक्सेस रैपर्स उत्पन्न करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is 'async-signal-safe' function requirements?",
    "question_hi": "'एसिंक-सिग्नल-सुरक्षित' फ़ंक्शन आवश्यकताएं क्या हैं?",
    "options_en": [
      "Reentrant, non-blocking, no static buffers; only specific functions listed in POSIX",
      "Any function",
      "Only printf",
      "No requirements"
    ],
    "options_hi": [
      "रीएंट्रेंट, गैर-ब्लॉकिंग, कोई स्थैतिक बफर नहीं; केवल POSIX में सूचीबद्ध विशिष्ट कार्य",
      "कोई भी फ़ंक्शन",
      "केवल printf",
      "कोई आवश्यकता नहीं"
    ],
    "answer_en": "Reentrant, non-blocking, no static buffers; only specific functions listed in POSIX",
    "answer_hi": "रीएंट्रेंट, गैर-ब्लॉकिंग, कोई स्थैतिक बफर नहीं; केवल POSIX में सूचीबद्ध विशिष्ट कार्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is 'setjmp/longjmp' with automatic variables (stack unwinding)?",
    "question_hi": "स्वचालित चर (स्टैक अनवाइंडिंग) के साथ 'setjmp/longjmp' क्या है?",
    "options_en": [
      "Automatic variables may have undefined values; no destructor calls",
      "Values preserved",
      "Destructors called",
      "Safe for all variables"
    ],
    "options_hi": [
      "स्वचालित चर के अपरिभाषित मान हो सकते हैं; कोई डिस्ट्रक्टर कॉल नहीं",
      "मान संरक्षित",
      "डिस्ट्रक्टर कहलाए",
      "सभी चर के लिए सुरक्षित"
    ],
    "answer_en": "Automatic variables may have undefined values; no destructor calls",
    "answer_hi": "स्वचालित चर के अपरिभाषित मान हो सकते हैं; कोई डिस्ट्रक्टर कॉल नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'floating-point environment' preservation across function calls?",
    "question_hi": "फ़ंक्शन कॉल में 'फ्लोटिंग-पॉइंट एनवायरनमेंट' संरक्षण क्या है?",
    "options_en": [
      "Rounding mode, exceptions may be preserved or changed; implementation-defined",
      "Always preserved",
      "Always changed",
      "No environment"
    ],
    "options_hi": [
      "राउंडिंग मोड, अपवाद संरक्षित या बदले जा सकते हैं; कार्यान्वयन-परिभाषित",
      "हमेशा संरक्षित",
      "हमेशा बदला हुआ",
      "कोई वातावरण नहीं"
    ],
    "answer_en": "Rounding mode, exceptions may be preserved or changed; implementation-defined",
    "answer_hi": "राउंडिंग मोड, अपवाद संरक्षित या बदले जा सकते हैं; कार्यान्वयन-परिभाषित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is 'contract programming' with GCC '__attribute__((contract))'?",
    "question_hi": "GCC '__attribute__((contract))' के साथ 'कॉन्ट्रैक्ट प्रोग्रामिंग' क्या है?",
    "options_en": [
      "GCC extension for pre/post conditions; not standard C",
      "Standard feature",
      "Only in C++",
      "No such attribute"
    ],
    "options_hi": [
      "पूर्व/पोस्ट शर्तों के लिए GCC एक्सटेंशन; मानक C नहीं",
      "मानक सुविधा",
      "केवल C++ में",
      "ऐसी कोई विशेषता नहीं"
    ],
    "answer_en": "GCC extension for pre/post conditions; not standard C",
    "answer_hi": "पूर्व/पोस्ट शर्तों के लिए GCC एक्सटेंशन; मानक C नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is 'defensive programming' for integer overflow?",
    "question_hi": "पूर्णांक अतिप्रवाह के लिए 'रक्षात्मक प्रोग्रामिंग' क्या है?",
    "options_en": [
      "Checked addition (__builtin_add_overflow), saturation, big integer libraries",
      "Ignore overflow",
      "Only for signed",
      "No defense"
    ],
    "options_hi": [
      "जाँच की गई जोड़ (__builtin_add_overflow), संतृप्ति, बड़ा पूर्णांक पुस्तकालय",
      "ओवरफ्लो अनदेखा करें",
      "केवल साइनड के लिए",
      "कोई बचाव नहीं"
    ],
    "answer_en": "Checked addition (__builtin_add_overflow), saturation, big integer libraries",
    "answer_hi": "जाँच की गई जोड़ (__builtin_add_overflow), संतृप्ति, बड़ा पूर्णांक पुस्तकालय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 'const correctness' for pointer parameters?",
    "question_hi": "पॉइंटर पैरामीटर के लिए 'कॉन्स्ट करेक्टनेस' क्या है?",
    "options_en": [
      "const T* vs T* const vs const T* const; different protections",
      "All same",
      "Only const T*",
      "No protection"
    ],
    "options_hi": [
      "const T* बनाम T* const बनाम const T* const; विभिन्न सुरक्षा",
      "सभी समान",
      "केवल const T*",
      "कोई सुरक्षा नहीं"
    ],
    "answer_en": "const T* vs T* const vs const T* const; different protections",
    "answer_hi": "const T* बनाम T* const बनाम const T* const; विभिन्न सुरक्षा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is 'RAII pattern' in C using cleanup attribute?",
    "question_hi": "क्लीनअप विशेषता का उपयोग कर C में 'RAII पैटर्न' क्या है?",
    "options_en": [
      "__attribute__((cleanup)) calls function when variable goes out of scope",
      "No RAII in C",
      "Only destructors",
      "Not possible"
    ],
    "options_hi": [
      "__attribute__((cleanup)) फ़ंक्शन को कॉल करता है जब वेरिएबल स्कोप से बाहर जाता है",
      "C में कोई RAII नहीं",
      "केवल डिस्ट्रक्टर",
      "संभव नहीं"
    ],
    "answer_en": "__attribute__((cleanup)) calls function when variable goes out of scope",
    "answer_hi": "__attribute__((cleanup)) फ़ंक्शन को कॉल करता है जब वेरिएबल स्कोप से बाहर जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 'design by contract' using ASSERT macros?",
    "question_hi": "ASSERT मैक्रो का उपयोग कर 'कॉन्ट्रैक्ट द्वारा डिज़ाइन' क्या है?",
    "options_en": [
      "Custom ASSERT with pre/post conditions; disabled in release with NDEBUG",
      "Only standard assert",
      "Always enabled",
      "No macros"
    ],
    "options_hi": [
      "पूर्व/पोस्ट शर्तों के साथ कस्टम ASSERT; NDEBUG के साथ रिलीज़ में अक्षम",
      "केवल मानक अभिकथन",
      "हमेशा सक्षम",
      "कोई मैक्रो नहीं"
    ],
    "answer_en": "Custom ASSERT with pre/post conditions; disabled in release with NDEBUG",
    "answer_hi": "पूर्व/पोस्ट शर्तों के साथ कस्टम ASSERT; NDEBUG के साथ रिलीज़ में अक्षम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is 'assert' vs 'static_assert' in C11?",
    "question_hi": "C11 में 'assert' बनाम 'static_assert' क्या है?",
    "options_en": [
      "assert runtime check; static_assert compile-time check",
      "Both runtime",
      "Both compile-time",
      "Same thing"
    ],
    "options_hi": [
      "assert रनटाइम चेक; static_assert कंपाइल-टाइम चेक",
      "दोनों रनटाइम",
      "दोनों कंपाइल-टाइम",
      "एक ही बात"
    ],
    "answer_en": "assert runtime check; static_assert compile-time check",
    "answer_hi": "assert रनटाइम चेक; static_assert कंपाइल-टाइम चेक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'errno' thread-local implementation?",
    "question_hi": "'errno' थ्रेड-लोकल कार्यान्वयन क्या है?",
    "options_en": [
      "Macro expanding to (*__errno_location()); each thread has separate storage",
      "Global variable",
      "Shared between threads",
      "No implementation"
    ],
    "options_hi": [
      "मैक्रो (*__errno_location()) का विस्तार; प्रत्येक थ्रेड के पास अलग स्टोरेज है",
      "वैश्विक चर",
      "थ्रेड के बीच साझा",
      "कोई कार्यान्वयन नहीं"
    ],
    "answer_en": "Macro expanding to (*__errno_location()); each thread has separate storage",
    "answer_hi": "मैक्रो (*__errno_location()) का विस्तार; प्रत्येक थ्रेड के पास अलग स्टोरेज है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is 'locale' impact on wide character functions?",
    "question_hi": "वाइड कैरेक्टर फ़ंक्शन पर 'लोकेल' प्रभाव क्या है?",
    "options_en": [
      "Affects wcscoll, wcsxfrm collation; encoding conversion",
      "No impact",
      "Only narrow chars",
      "Not for wide"
    ],
    "options_hi": [
      "wcscoll, wcsxfrm कोलेशन को प्रभावित करता है; एन्कोडिंग रूपांतरण",
      "कोई प्रभाव नहीं",
      "केवल संकीर्ण वर्ण",
      "वाइड के लिए नहीं"
    ],
    "answer_en": "Affects wcscoll, wcsxfrm collation; encoding conversion",
    "answer_hi": "wcscoll, wcsxfrm कोलेशन को प्रभावित करता है; एन्कोडिंग रूपांतरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'UTF-8' validation and security issues?",
    "question_hi": "'UTF-8' सत्यापन और सुरक्षा मुद्दे क्या हैं?",
    "options_en": [
      "Overlong encodings, surrogate pairs; can bypass security checks",
      "No issues",
      "Always valid",
      "No security"
    ],
    "options_hi": [
      "अतिलंबित एन्कोडिंग, सरोगेट जोड़े; सुरक्षा जाँच को बायपास कर सकते हैं",
      "कोई मुद्दा नहीं",
      "हमेशा वैध",
      "कोई सुरक्षा नहीं"
    ],
    "answer_en": "Overlong encodings, surrogate pairs; can bypass security checks",
    "answer_hi": "अतिलंबित एन्कोडिंग, सरोगेट जोड़े; सुरक्षा जाँच को बायपास कर सकते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is 'endianness' detection at compile-time?",
    "question_hi": "कंपाइल-टाइम पर 'एंडियननेस' का पता लगाना क्या है?",
    "options_en": [
      "#if __BYTE_ORDER__ == __ORDER_LITTLE_ENDIAN__; platform macros",
      "Runtime only",
      "No detection",
      "Always little"
    ],
    "options_hi": [
      "#if __BYTE_ORDER__ == __ORDER_LITTLE_ENDIAN__; प्लेटफ़ॉर्म मैक्रो",
      "केवल रनटाइम",
      "कोई पता लगाना नहीं",
      "हमेशा छोटा"
    ],
    "answer_en": "#if __BYTE_ORDER__ == __ORDER_LITTLE_ENDIAN__; platform macros",
    "answer_hi": "#if __BYTE_ORDER__ == __ORDER_LITTLE_ENDIAN__; प्लेटफ़ॉर्म मैक्रो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is 'strict aliasing' with bitfields?",
    "question_hi": "बिटफ़ील्ड के साथ 'स्ट्रिक्ट एलियासिंग' क्या है?",
    "options_en": [
      "Accessing bitfield through incompatible pointer is UB; implementation-defined layout",
      "Allowed",
      "Only through char*",
      "No UB"
    ],
    "options_hi": [
      "असंगत पॉइंटर के माध्यम से बिटफ़ील्ड एक्सेस करना UB है; कार्यान्वयन-परिभाषित लेआउट",
      "अनुमति",
      "केवल char* के माध्यम से",
      "कोई UB नहीं"
    ],
    "answer_en": "Accessing bitfield through incompatible pointer is UB; implementation-defined layout",
    "answer_hi": "असंगत पॉइंटर के माध्यम से बिटफ़ील्ड एक्सेस करना UB है; कार्यान्वयन-परिभाषित लेआउट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'flexible array member' vs zero-length array?",
    "question_hi": "'फ्लेक्सिबल ऐरे मेंबर' बनाम शून्य-लंबाई ऐरे क्या है?",
    "options_en": [
      "FAM standard C99; zero-length GCC extension; different sizeof behavior",
      "Same thing",
      "Only FAM allowed",
      "No difference"
    ],
    "options_hi": [
      "FAM मानक C99; शून्य-लंबाई GCC एक्सटेंशन; अलग sizeof व्यवहार",
      "एक ही बात",
      "केवल FAM अनुमत",
      "कोई अंतर नहीं"
    ],
    "answer_en": "FAM standard C99; zero-length GCC extension; different sizeof behavior",
    "answer_hi": "FAM मानक C99; शून्य-लंबाई GCC एक्सटेंशन; अलग sizeof व्यवहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'designated initializers' for arrays?",
    "question_hi": "ऐरे के लिए 'नामित प्रारंभिक' क्या हैं?",
    "options_en": [
      "[index] = value; can initialize specific elements, others zero-initialized",
      "Not for arrays",
      "Only for structs",
      "All elements set"
    ],
    "options_hi": [
      "[index] = value; विशिष्ट तत्वों को प्रारंभ कर सकते हैं, अन्य शून्य-प्रारंभ",
      "ऐरे के लिए नहीं",
      "केवल स्ट्रक्चर के लिए",
      "सभी तत्व सेट"
    ],
    "answer_en": "[index] = value; can initialize specific elements, others zero-initialized",
    "answer_hi": "[index] = value; विशिष्ट तत्वों को प्रारंभ कर सकते हैं, अन्य शून्य-प्रारंभ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is 'compound literals' lifetime?",
    "question_hi": "'यौगिक शाब्दिक' जीवनकाल क्या है?",
    "options_en": [
      "Automatic storage if in block scope; static if file scope",
      "Always static",
      "Always heap",
      "No lifetime"
    ],
    "options_hi": [
      "स्वचालित भंडारण यदि ब्लॉक स्कोप में; स्थैतिक यदि फ़ाइल स्कोप",
      "हमेशा स्थैतिक",
      "हमेशा ढेर",
      "कोई जीवनकाल नहीं"
    ],
    "answer_en": "Automatic storage if in block scope; static if file scope",
    "answer_hi": "स्वचालित भंडारण यदि ब्लॉक स्कोप में; स्थैतिक यदि फ़ाइल स्कोप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'VLA' (Variable Length Array) alloca() comparison?",
    "question_hi": "'VLA' (परिवर्तनशील लंबाई ऐरे) alloca() तुलना क्या है?",
    "options_en": [
      "VLA standard C99; alloca() compiler extension; similar stack allocation",
      "Same thing",
      "Only VLA",
      "No comparison"
    ],
    "options_hi": [
      "VLA मानक C99; alloca() कंपाइलर एक्सटेंशन; समान स्टैक आवंटन",
      "एक ही बात",
      "केवल VLA",
      "कोई तुलना नहीं"
    ],
    "answer_en": "VLA standard C99; alloca() compiler extension; similar stack allocation",
    "answer_hi": "VLA मानक C99; alloca() कंपाइलर एक्सटेंशन; समान स्टैक आवंटन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is 'restrict' and loop vectorization?",
    "question_hi": "'रिस्ट्रिक्ट' और लूप वेक्टराइजेशन क्या है?",
    "options_en": [
      "restrict enables auto-vectorization by promising no pointer aliasing",
      "No effect",
      "Prevents vectorization",
      "Only for manual"
    ],
    "options_hi": [
      "रिस्ट्रिक्ट कोई पॉइंटर एलियासिंग न होने का वादा करके ऑटो-वेक्टराइजेशन सक्षम करता है",
      "कोई प्रभाव नहीं",
      "वेक्टराइजेशन को रोकता है",
      "केवल मैनुअल के लिए"
    ],
    "answer_en": "restrict enables auto-vectorization by promising no pointer aliasing",
    "answer_hi": "रिस्ट्रिक्ट कोई पॉइंटर एलियासिंग न होने का वादा करके ऑटो-वेक्टराइजेशन सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is 'inline' vs 'static inline' linkage?",
    "question_hi": "'इनलाइन' बनाम 'स्थैतिक इनलाइन' लिंकेज क्या है?",
    "options_en": [
      "inline: external linkage, multiple definitions; static inline: internal linkage",
      "Same linkage",
      "Only inline",
      "No linkage difference"
    ],
    "options_hi": [
      "इनलाइन: बाहरी लिंकेज, एकाधिक परिभाषाएँ; स्थैतिक इनलाइन: आंतरिक लिंकेज",
      "समान लिंकेज",
      "केवल इनलाइन",
      "कोई लिंकेज अंतर नहीं"
    ],
    "answer_en": "inline: external linkage, multiple definitions; static inline: internal linkage",
    "answer_hi": "इनलाइन: बाहरी लिंकेज, एकाधिक परिभाषाएँ; स्थैतिक इनलाइन: आंतरिक लिंकेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 'static' for array parameters?",
    "question_hi": "ऐरे पैरामीटर के लिए 'स्थैतिक' क्या है?",
    "options_en": [
      "void f(int a[static 10]); guarantees at least 10 elements",
      "No meaning",
      "Same as normal",
      "Not allowed"
    ],
    "options_hi": [
      "void f(int a[static 10]); कम से कम 10 तत्वों की गारंटी",
      "कोई अर्थ नहीं",
      "सामान्य के समान",
      "अनुमति नहीं"
    ],
    "answer_en": "void f(int a[static 10]); guarantees at least 10 elements",
    "answer_hi": "void f(int a[static 10]); कम से कम 10 तत्वों की गारंटी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is 'extern' with 'C' linkage?",
    "question_hi": "'C' लिंकेज के साथ 'extern' क्या है?",
    "options_en": [
      "extern \"C\" { ... }; C++ feature for C linkage; not in C",
      "Standard C",
      "Only for C++",
      "No such syntax"
    ],
    "options_hi": [
      "extern \"C\" { ... }; C लिंकेज के लिए C++ सुविधा; C में नहीं",
      "मानक C",
      "केवल C++ के लिए",
      "ऐसा कोई सिंटैक्स नहीं"
    ],
    "answer_en": "extern \"C\" { ... }; C++ feature for C linkage; not in C",
    "answer_hi": "extern \"C\" { ... }; C लिंकेज के लिए C++ सुविधा; C में नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is 'typedef' for function pointers?",
    "question_hi": "फ़ंक्शन पॉइंटर्स के लिए 'typedef' क्या है?",
    "options_en": [
      "typedef int (*func_ptr)(int); creates readable function pointer type",
      "Not for pointers",
      "Only for variables",
      "No typedef"
    ],
    "options_hi": [
      "typedef int (*func_ptr)(int); पठनीय फ़ंक्शन पॉइंटर प्रकार बनाता है",
      "पॉइंटर्स के लिए नहीं",
      "केवल चर के लिए",
      "कोई typedef नहीं"
    ],
    "answer_en": "typedef int (*func_ptr)(int); creates readable function pointer type",
    "answer_hi": "typedef int (*func_ptr)(int); पठनीय फ़ंक्शन पॉइंटर प्रकार बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is '__attribute__((aligned))' vs '_Alignas'?",
    "question_hi": "'__attribute__((aligned))' बनाम '_Alignas' क्या है?",
    "options_en": [
      "attribute: GCC extension; _Alignas: C11 standard; both control alignment",
      "Same thing",
      "Only attribute",
      "No alignment"
    ],
    "options_hi": [
      "विशेषता: GCC एक्सटेंशन; _Alignas: C11 मानक; दोनों संरेखण नियंत्रण",
      "एक ही बात",
      "केवल विशेषता",
      "कोई संरेखण नहीं"
    ],
    "answer_en": "attribute: GCC extension; _Alignas: C11 standard; both control alignment",
    "answer_hi": "विशेषता: GCC एक्सटेंशन; _Alignas: C11 मानक; दोनों संरेखण नियंत्रण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is '#pragma pack' push/pop?",
    "question_hi": "'#pragma pack' पुश/पॉप क्या है?",
    "options_en": [
      "#pragma pack(push, n) save alignment, set new; #pragma pack(pop) restore",
      "No push/pop",
      "Only set",
      "Not in C"
    ],
    "options_hi": [
      "#pragma pack(push, n) संरेखण सहेजें, नया सेट करें; #pragma pack(pop) पुनर्स्थापित",
      "कोई पुश/पॉप नहीं",
      "केवल सेट",
      "C में नहीं"
    ],
    "answer_en": "#pragma pack(push, n) save alignment, set new; #pragma pack(pop) restore",
    "answer_hi": "#pragma pack(push, n) संरेखण सहेजें, नया सेट करें; #pragma pack(pop) पुनर्स्थापित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is 'preprocessor' token pasting (##)?",
    "question_hi": "'प्रीप्रोसेसर' टोकन पेस्टिंग (##) क्या है?",
    "options_en": [
      "Concatenates tokens: a ## b becomes ab; used in macro expansion",
      "String concatenation",
      "Not in C",
      "No pasting"
    ],
    "options_hi": [
      "टोकन को जोड़ता है: a ## b ab बन जाता है; मैक्रो विस्तार में उपयोग किया जाता है",
      "स्ट्रिंग संयोजन",
      "C में नहीं",
      "कोई पेस्टिंग नहीं"
    ],
    "answer_en": "Concatenates tokens: a ## b becomes ab; used in macro expansion",
    "answer_hi": "टोकन को जोड़ता है: a ## b ab बन जाता है; मैक्रो विस्तार में उपयोग किया जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is 'preprocessor' stringizing (#)?",
    "question_hi": "'प्रीप्रोसेसर' स्ट्रिंगाइज़िंग (#) क्या है?",
    "options_en": [
      "Converts token to string: #x becomes \"x\"; creates string literals",
      "Not in C",
      "Only for chars",
      "No stringizing"
    ],
    "options_hi": [
      "टोकन को स्ट्रिंग में बदलता है: #x \"x\" बन जाता है; स्ट्रिंग शाब्दिक बनाता है",
      "C में नहीं",
      "केवल वर्णों के लिए",
      "कोई स्ट्रिंगाइज़िंग नहीं"
    ],
    "answer_en": "Converts token to string: #x becomes \"x\"; creates string literals",
    "answer_hi": "टोकन को स्ट्रिंग में बदलता है: #x \"x\" बन जाता है; स्ट्रिंग शाब्दिक बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 'preprocessor' _Pragma operator?",
    "question_hi": "'प्रीप्रोसेसर' _Pragma ऑपरेटर क्या है?",
    "options_en": [
      "C99 operator: _Pragma(\"pack(1)\") equivalent to #pragma pack(1)",
      "Not in C",
      "Only #pragma",
      "No operator"
    ],
    "options_hi": [
      "C99 ऑपरेटर: _Pragma(\"pack(1)\") #pragma pack(1) के बराबर",
      "C में नहीं",
      "केवल #pragma",
      "कोई ऑपरेटर नहीं"
    ],
    "answer_en": "C99 operator: _Pragma(\"pack(1)\") equivalent to #pragma pack(1)",
    "answer_hi": "C99 ऑपरेटर: _Pragma(\"pack(1)\") #pragma pack(1) के बराबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is 'linker' section attribute?",
    "question_hi": "'लिंकर' सेक्शन विशेषता क्या है?",
    "options_en": [
      "__attribute__((section(\".mysection\"))) places variable/function in specific section",
      "Not in C",
      "Only for code",
      "No sections"
    ],
    "options_hi": [
      "__attribute__((section(\".mysection\"))) विशिष्ट खंड में चर/फ़ंक्शन रखता है",
      "C में नहीं",
      "केवल कोड के लिए",
      "कोई अनुभाग नहीं"
    ],
    "answer_en": "__attribute__((section(\".mysection\"))) places variable/function in specific section",
    "answer_hi": "__attribute__((section(\".mysection\"))) विशिष्ट खंड में चर/फ़ंक्शन रखता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is 'linker' weak symbol?",
    "question_hi": "'लिंकर' कमजोर प्रतीक क्या है?",
    "options_en": [
      "__attribute__((weak)) allows undefined reference; stronger symbol overrides",
      "Not in C",
      "Only for functions",
      "No weak symbols"
    ],
    "options_hi": [
      "__attribute__((weak)) अपरिभाषित संदर्भ की अनुमति देता है; मजबूत प्रतीक ओवरराइड करता है",
      "C में नहीं",
      "केवल फ़ंक्शन के लिए",
      "कोई कमजोर प्रतीक नहीं"
    ],
    "answer_en": "__attribute__((weak)) allows undefined reference; stronger symbol overrides",
    "answer_hi": "__attribute__((weak)) अपरिभाषित संदर्भ की अनुमति देता है; मजबूत प्रतीक ओवरराइड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 'linker' visibility attribute?",
    "question_hi": "'लिंकर' दृश्यता विशेषता क्या है?",
    "options_en": [
      "__attribute__((visibility(\"hidden\"))) limits symbol export; reduces dynamic linking overhead",
      "Not in C",
      "Only for variables",
      "No visibility"
    ],
    "options_hi": [
      "__attribute__((visibility(\"hidden\"))) प्रतीक निर्यात सीमित करता है; गतिशील लिंकिंग ओवरहेड कम करता है",
      "C में नहीं",
      "केवल चर के लिए",
      "कोई दृश्यता नहीं"
    ],
    "answer_en": "__attribute__((visibility(\"hidden\"))) limits symbol export; reduces dynamic linking overhead",
    "answer_hi": "__attribute__((visibility(\"hidden\"))) प्रतीक निर्यात सीमित करता है; गतिशील लिंकिंग ओवरहेड कम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is 'dynamic linking' PLT/GOT?",
    "question_hi": "'डायनामिक लिंकिंग' PLT/GOT क्या है?",
    "options_en": [
      "Procedure Linkage Table (PLT), Global Offset Table (GOT); enable position-independent code",
      "Not in C",
      "Only static",
      "No tables"
    ],
    "options_hi": [
      "प्रक्रिया लिंकेज तालिका (PLT), वैश्विक ऑफसेट तालिका (GOT); स्थिति-स्वतंत्र कोड सक्षम करें",
      "C में नहीं",
      "केवल स्थैतिक",
      "कोई तालिका नहीं"
    ],
    "answer_en": "Procedure Linkage Table (PLT), Global Offset Table (GOT); enable position-independent code",
    "answer_hi": "प्रक्रिया लिंकेज तालिका (PLT), वैश्विक ऑफसेट तालिका (GOT); स्थिति-स्वतंत्र कोड सक्षम करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 'position independent code' (PIC) cost?",
    "question_hi": "'पोजिशन इंडिपेंडेंट कोड' (PIC) लागत क्या है?",
    "options_en": [
      "Extra indirection through GOT; slower, but enables shared libraries",
      "No cost",
      "Faster",
      "Not for shared"
    ],
    "options_hi": [
      "GOT के माध्यम से अतिरिक्त अप्रत्यक्षता; धीमी, लेकिन साझा लाइब्रेरी सक्षम करता है",
      "कोई लागत नहीं",
      "तेज़",
      "साझा के लिए नहीं"
    ],
    "answer_en": "Extra indirection through GOT; slower, but enables shared libraries",
    "answer_hi": "GOT के माध्यम से अतिरिक्त अप्रत्यक्षता; धीमी, लेकिन साझा लाइब्रेरी सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is 'stack protector' canary types?",
    "question_hi": "'स्टैक प्रोटेक्टर' कैनेरी प्रकार क्या हैं?",
    "options_en": [
      "Terminator, random, XOR random; guard against stack overflow",
      "Only one type",
      "No canaries",
      "Not for stack"
    ],
    "options_hi": [
      "टर्मिनेटर, रैंडम, XOR रैंडम; स्टैक ओवरफ्लो के खिलाफ रक्षा",
      "केवल एक प्रकार",
      "कोई कैनेरी नहीं",
      "स्टैक के लिए नहीं"
    ],
    "answer_en": "Terminator, random, XOR random; guard against stack overflow",
    "answer_hi": "टर्मिनेटर, रैंडम, XOR रैंडम; स्टैक ओवरफ्लो के खिलाफ रक्षा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is 'AddressSanitizer' (ASan) shadow memory?",
    "question_hi": "'AddressSanitizer' (ASan) शैडो मेमोरी क्या है?",
    "options_en": [
      "1 byte shadow for 8 bytes application; tracks validity, detects use-after-free",
      "No shadow",
      "1:1 mapping",
      "Not for memory"
    ],
    "options_hi": [
      "8 बाइट्स एप्लिकेशन के लिए 1 बाइट छाया; वैधता ट्रैक करता है, यूज़-आफ्टर-फ्री का पता लगाता है",
      "कोई छाया नहीं",
      "1:1 मैपिंग",
      "मेमोरी के लिए नहीं"
    ],
    "answer_en": "1 byte shadow for 8 bytes application; tracks validity, detects use-after-free",
    "answer_hi": "8 बाइट्स एप्लिकेशन के लिए 1 बाइट छाया; वैधता ट्रैक करता है, यूज़-आफ्टर-फ्री का पता लगाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 'UndefinedBehaviorSanitizer' (UBSan) checks?",
    "question_hi": "'UndefinedBehaviorSanitizer' (UBSan) जाँच क्या हैं?",
    "options_en": [
      "Integer overflow, null pointer, alignment, bounds; runtime detection",
      "No checks",
      "Only overflow",
      "Compile-time"
    ],
    "options_hi": [
      "पूर्णांक अतिप्रवाह, शून्य सूचक, संरेखण, सीमाएँ; रनटाइम का पता लगाना",
      "कोई जाँच नहीं",
      "केवल अतिप्रवाह",
      "कंपाइल-टाइम"
    ],
    "answer_en": "Integer overflow, null pointer, alignment, bounds; runtime detection",
    "answer_hi": "पूर्णांक अतिप्रवाह, शून्य सूचक, संरेखण, सीमाएँ; रनटाइम का पता लगाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is 'ThreadSanitizer' (TSan) happens-before?",
    "question_hi": "'ThreadSanitizer' (TSan) हैपेंस-बिफोर क्या है?",
    "options_en": [
      "Vector clocks tracking synchronization; detect data races",
      "No tracking",
      "Only locks",
      "Not for races"
    ],
    "options_hi": [
      "वेक्टर घड़ियाँ सिंक्रोनाइज़ेशन ट्रैकिंग; डेटा रेस का पता लगाएं",
      "कोई ट्रैकिंग नहीं",
      "केवल लॉक",
      "रेस के लिए नहीं"
    ],
    "answer_en": "Vector clocks tracking synchronization; detect data races",
    "answer_hi": "वेक्टर घड़ियाँ सिंक्रोनाइज़ेशन ट्रैकिंग; डेटा रेस का पता लगाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is 'MemorySanitizer' (MSan) uninitialized memory?",
    "question_hi": "'MemorySanitizer' (MSan) अप्रारंभिक मेमोरी क्या है?",
    "options_en": [
      "Tracks initialized bits; detects use of uninitialized values",
      "No tracking",
      "Only stack",
      "Not for memory"
    ],
    "options_hi": [
      "प्रारंभिक बिट्स ट्रैक करता है; अप्रारंभिक मानों के उपयोग का पता लगाता है",
      "कोई ट्रैकिंग नहीं",
      "केवल स्टैक",
      "मेमोरी के लिए नहीं"
    ],
    "answer_en": "Tracks initialized bits; detects use of uninitialized values",
    "answer_hi": "प्रारंभिक बिट्स ट्रैक करता है; अप्रारंभिक मानों के उपयोग का पता लगाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 'LeakSanitizer' (LSan) root set?",
    "question_hi": "'LeakSanitizer' (LSan) रूट सेट क्या है?",
    "options_en": [
      "Global variables, registers, stack; starting points for reachable memory",
      "No root set",
      "Only heap",
      "Not for leaks"
    ],
    "options_hi": [
      "वैश्विक चर, रजिस्टर, स्टैक; पहुंच योग्य मेमोरी के लिए शुरुआती बिंदु",
      "कोई रूट सेट नहीं",
      "केवल ढेर",
      "लीक के लिए नहीं"
    ],
    "answer_en": "Global variables, registers, stack; starting points for reachable memory",
    "answer_hi": "वैश्विक चर, रजिस्टर, स्टैक; पहुंच योग्य मेमोरी के लिए शुरुआती बिंदु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is 'control flow integrity' (CFI) forward-edge?",
    "question_hi": "'कंट्रोल फ्लो इंटीग्रिटी' (CFI) फॉरवर्ड-एज क्या है?",
    "options_en": [
      "Validates indirect calls/jumps; prevents code reuse attacks",
      "No validation",
      "Only returns",
      "Not for security"
    ],
    "options_hi": [
      "अप्रत्यक्ष कॉल/कूद सत्यापित करता है; कोड पुन: उपयोग हमलों को रोकता है",
      "कोई सत्यापन नहीं",
      "केवल रिटर्न",
      "सुरक्षा के लिए नहीं"
    ],
    "answer_en": "Validates indirect calls/jumps; prevents code reuse attacks",
    "answer_hi": "अप्रत्यक्ष कॉल/कूद सत्यापित करता है; कोड पुन: उपयोग हमलों को रोकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is 'shadow call stack' for return addresses?",
    "question_hi": "रिटर्न एड्रेस के लिए 'शैडो कॉल स्टैक' क्या है?",
    "options_en": [
      "Separate stack for return addresses; protected from overflow",
      "No shadow",
      "Only for data",
      "Not for returns"
    ],
    "options_hi": [
      "रिटर्न एड्रेस के लिए अलग स्टैक; ओवरफ्लो से सुरक्षित",
      "कोई छाया नहीं",
      "केवल डेटा के लिए",
      "रिटर्न के लिए नहीं"
    ],
    "answer_en": "Separate stack for return addresses; protected from overflow",
    "answer_hi": "रिटर्न एड्रेस के लिए अलग स्टैक; ओवरफ्लो से सुरक्षित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 'safe stack' for vulnerable variables?",
    "question_hi": "कमजोर वेरिएबल्स के लिए 'सेफ स्टैक' क्या है?",
    "options_en": [
      "Separate stack for arrays/pointers; isolates from return addresses",
      "No safe stack",
      "Only for arrays",
      "Not for security"
    ],
    "options_hi": [
      "ऐरे/पॉइंटर्स के लिए अलग स्टैक; रिटर्न एड्रेस से अलग करता है",
      "कोई सुरक्षित स्टैक नहीं",
      "केवल ऐरे के लिए",
      "सुरक्षा के लिए नहीं"
    ],
    "answer_en": "Separate stack for arrays/pointers; isolates from return addresses",
    "answer_hi": "ऐरे/पॉइंटर्स के लिए अलग स्टैक; रिटर्न एड्रेस से अलग करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is 'integer sanitizer' overflow handling?",
    "question_hi": "'इंटीजर सैनिटाइज़र' ओवरफ्लो हैंडलिंग क्या है?",
    "options_en": [
      "Traps on overflow (SIGABRT), saturation, wrap-around; configurable",
      "No handling",
      "Only trap",
      "Not for integers"
    ],
    "options_hi": [
      "ओवरफ्लो पर ट्रैप (SIGABRT), संतृप्ति, रैप-अराउंड; विन्यास योग्य",
      "कोई हैंडलिंग नहीं",
      "केवल ट्रैप",
      "पूर्णांक के लिए नहीं"
    ],
    "answer_en": "Traps on overflow (SIGABRT), saturation, wrap-around; configurable",
    "answer_hi": "ओवरफ्लो पर ट्रैप (SIGABRT), संतृप्ति, रैप-अराउंड; विन्यास योग्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is 'fuzzing' (AFL, libFuzzer) for C code?",
    "question_hi": "C कोड के लिए 'फ़ज़िंग' (AFL, libFuzzer) क्या है?",
    "options_en": [
      "Automated testing with random inputs; coverage-guided; finds crashes",
      "No fuzzing",
      "Only manual",
      "Not for C"
    ],
    "options_hi": [
      "यादृच्छिक इनपुट के साथ स्वचालित परीक्षण; कवरेज-निर्देशित; क्रैश ढूंढता है",
      "कोई फ़ज़िंग नहीं",
      "केवल मैनुअल",
      "C के लिए नहीं"
    ],
    "answer_en": "Automated testing with random inputs; coverage-guided; finds crashes",
    "answer_hi": "यादृच्छिक इनपुट के साथ स्वचालित परीक्षण; कवरेज-निर्देशित; क्रैश ढूंढता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 'formal verification' for C (Frama-C, CBMC)?",
    "question_hi": "C (Frama-C, CBMC) के लिए 'औपचारिक सत्यापन' क्या है?",
    "options_en": [
      "Mathematical proof of correctness; model checking, abstract interpretation",
      "No verification",
      "Only testing",
      "Not for C"
    ],
    "options_hi": [
      "शुद्धता का गणितीय प्रमाण; मॉडल जाँच, अमूर्त व्याख्या",
      "कोई सत्यापन नहीं",
      "केवल परीक्षण",
      "C के लिए नहीं"
    ],
    "answer_en": "Mathematical proof of correctness; model checking, abstract interpretation",
    "answer_hi": "शुद्धता का गणितीय प्रमाण; मॉडल जाँच, अमूर्त व्याख्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is 'static analysis' tools (Coverity, Clang Analyzer)?",
    "question_hi": "'स्टैटिक एनालिसिस' टूल्स (Coverity, Clang Analyzer) क्या हैं?",
    "options_en": [
      "Analyze source without execution; find bugs, security vulnerabilities",
      "No analysis",
      "Only dynamic",
      "Not for C"
    ],
    "options_hi": [
      "निष्पादन के बिना स्रोत का विश्लेषण करें; बग, सुरक्षा कमजोरियां खोजें",
      "कोई विश्लेषण नहीं",
      "केवल गतिशील",
      "C के लिए नहीं"
    ],
    "answer_en": "Analyze source without execution; find bugs, security vulnerabilities",
    "answer_hi": "निष्पादन के बिना स्रोत का विश्लेषण करें; बग, सुरक्षा कमजोरियां खोजें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is 'bounds checking' instrumentation?",
    "question_hi": "'बाउंड्स चेकिंग' इंस्ट्रुमेंटेशन क्या है?",
    "options_en": [
      "Adds runtime checks for array/pointer bounds; performance overhead",
      "No checking",
      "Compile-time only",
      "Not for arrays"
    ],
    "options_hi": [
      "ऐरे/पॉइंटर सीमा के लिए रनटाइम जाँच जोड़ता है; प्रदर्शन ओवरहेड",
      "कोई जाँच नहीं",
      "केवल कंपाइल-टाइम",
      "ऐरे के लिए नहीं"
    ],
    "answer_en": "Adds runtime checks for array/pointer bounds; performance overhead",
    "answer_hi": "ऐरे/पॉइंटर सीमा के लिए रनटाइम जाँच जोड़ता है; प्रदर्शन ओवरहेड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'type qualifiers' compatibility?",
    "question_hi": "'टाइप क्वालीफायर' संगतता क्या है?",
    "options_en": [
      "Adding qualifiers safe; removing requires cast; const/volatile/restrict",
      "All compatible",
      "No compatibility",
      "Only const"
    ],
    "options_hi": [
      "क्वालीफायर जोड़ना सुरक्षित; हटाने के लिए कास्ट की आवश्यकता; const/volatile/restrict",
      "सभी संगत",
      "कोई संगतता नहीं",
      "केवल const"
    ],
    "answer_en": "Adding qualifiers safe; removing requires cast; const/volatile/restrict",
    "answer_hi": "क्वालीफायर जोड़ना सुरक्षित; हटाने के लिए कास्ट की आवश्यकता; const/volatile/restrict",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is 'composite type' construction?",
    "question_hi": "'कम्पोजिट टाइप' निर्माण क्या है?",
    "options_en": [
      "Type derived from multiple types (function, array); decay rules apply",
      "No composite",
      "Only structs",
      "Not in C"
    ],
    "options_hi": [
      "कई प्रकारों से प्राप्त प्रकार (फ़ंक्शन, ऐरे); क्षय नियम लागू",
      "कोई कम्पोजिट नहीं",
      "केवल स्ट्रक्चर",
      "C में नहीं"
    ],
    "answer_en": "Type derived from multiple types (function, array); decay rules apply",
    "answer_hi": "कई प्रकारों से प्राप्त प्रकार (फ़ंक्शन, ऐरे); क्षय नियम लागू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is 'type compatibility' for function parameters?",
    "question_hi": "फ़ंक्शन पैरामीटर के लिए 'टाइप कम्पेटिबिलिटी' क्या है?",
    "options_en": [
      "Compatible if same after adjustments (array to pointer, function to pointer)",
      "Must match exactly",
      "No compatibility",
      "Only for return"
    ],
    "options_hi": [
      "संगत यदि समायोजन के बाद समान (पॉइंटर को ऐरे, पॉइंटर को फ़ंक्शन)",
      "बिल्कुल मेल खाना चाहिए",
      "कोई संगतता नहीं",
      "केवल रिटर्न के लिए"
    ],
    "answer_en": "Compatible if same after adjustments (array to pointer, function to pointer)",
    "answer_hi": "संगत यदि समायोजन के बाद समान (पॉइंटर को ऐरे, पॉइंटर को फ़ंक्शन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 'incomplete type' uses?",
    "question_hi": "'अपूर्ण प्रकार' उपयोग क्या हैं?",
    "options_en": [
      "void, unspecified array size, forward-declared struct; can't define objects",
      "No uses",
      "Complete only",
      "Not in C"
    ],
    "options_hi": [
      "void, अनिर्दिष्ट ऐरे आकार, फॉरवर्ड-घोषित स्ट्रक्चर; वस्तुएं परिभाषित नहीं कर सकते",
      "कोई उपयोग नहीं",
      "केवल पूर्ण",
      "C में नहीं"
    ],
    "answer_en": "void, unspecified array size, forward-declared struct; can't define objects",
    "answer_hi": "void, अनिर्दिष्ट ऐरे आकार, फॉरवर्ड-घोषित स्ट्रक्चर; वस्तुएं परिभाषित नहीं कर सकते",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is 'compatible types' for tags?",
    "question_hi": "टैग के लिए 'संगत प्रकार' क्या है?",
    "options_en": [
      "struct/union/enum tags compatible if same in same scope; can be redeclared",
      "No compatibility",
      "Always compatible",
      "Not for tags"
    ],
    "options_hi": [
      "स्ट्रक्चर/यूनियन/एनम टैग संगत यदि एक ही स्कोप में समान; पुनर्घोषित किया जा सकता है",
      "कोई संगतता नहीं",
      "हमेशा संगत",
      "टैग के लिए नहीं"
    ],
    "answer_en": "struct/union/enum tags compatible if same in same scope; can be redeclared",
    "answer_hi": "स्ट्रक्चर/यूनियन/एनम टैग संगत यदि एक ही स्कोप में समान; पुनर्घोषित किया जा सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is 'alignment' requirements for atomic types?",
    "question_hi": "परमाणु प्रकारों के लिए 'संरेखण' आवश्यकताएँ क्या हैं?",
    "options_en": [
      "_Atomic types may have stricter alignment than base type; implementation-defined",
      "Same alignment",
      "No alignment",
      "Not for atomic"
    ],
    "options_hi": [
      "_Atomic प्रकारों में आधार प्रकार की तुलना में सख्त संरेखण हो सकता है; कार्यान्वयन-परिभाषित",
      "समान संरेखण",
      "कोई संरेखण नहीं",
      "परमाणु के लिए नहीं"
    ],
    "answer_en": "_Atomic types may have stricter alignment than base type; implementation-defined",
    "answer_hi": "_Atomic प्रकारों में आधार प्रकार की तुलना में सख्त संरेखण हो सकता है; कार्यान्वयन-परिभाषित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 'bit-precise integers' (_BitInt)?",
    "question_hi": "'बिट-सटीक पूर्णांक' (_BitInt) क्या है?",
    "options_en": [
      "C23 feature for arbitrary-width integers; _BitInt(N) where 2 ≤ N ≤ supported",
      "Not in C",
      "Only fixed",
      "No such type"
    ],
    "options_hi": [
      "मनमानी-चौड़ाई पूर्णांक के लिए C23 सुविधा; _BitInt(N) जहां 2 ≤ N ≤ समर्थित",
      "C में नहीं",
      "केवल निश्चित",
      "ऐसा कोई प्रकार नहीं"
    ],
    "answer_en": "C23 feature for arbitrary-width integers; _BitInt(N) where 2 ≤ N ≤ supported",
    "answer_hi": "मनमानी-चौड़ाई पूर्णांक के लिए C23 सुविधा; _BitInt(N) जहां 2 ≤ N ≤ समर्थित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is 'decimal floating-point' (_Decimal32, _Decimal64)?",
    "question_hi": "'दशमलव फ्लोटिंग-पॉइंट' (_Decimal32, _Decimal64) क्या है?",
    "options_en": [
      "Decimal (base-10) floating types; exact decimal representation; not widely supported",
      "Standard float",
      "Only binary",
      "Not in C"
    ],
    "options_hi": [
      "दशमलव (बेस-10) फ्लोटिंग प्रकार; सटीक दशमलव प्रतिनिधित्व; व्यापक रूप से समर्थित नहीं",
      "मानक फ्लोट",
      "केवल बाइनरी",
      "C में नहीं"
    ],
    "answer_en": "Decimal (base-10) floating types; exact decimal representation; not widely supported",
    "answer_hi": "दशमलव (बेस-10) फ्लोटिंग प्रकार; सटीक दशमलव प्रतिनिधित्व; व्यापक रूप से समर्थित नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is 'complex numbers' (_Complex) alignment?",
    "question_hi": "'सम्मिश्र संख्या' (_Complex) संरेखण क्या है?",
    "options_en": [
      "_Complex float may have different alignment than float[2]; implementation-defined",
      "Same alignment",
      "No alignment",
      "Not for complex"
    ],
    "options_hi": [
      "_Complex फ्लोट का फ्लोट[2] से अलग संरेखण हो सकता है; कार्यान्वयन-परिभाषित",
      "समान संरेखण",
      "कोई संरेखण नहीं",
      "जटिल के लिए नहीं"
    ],
    "answer_en": "_Complex float may have different alignment than float[2]; implementation-defined",
    "answer_hi": "_Complex फ्लोट का फ्लोट[2] से अलग संरेखण हो सकता है; कार्यान्वयन-परिभाषित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is 'null pointer' representation?",
    "question_hi": "'नल पॉइंटर' प्रतिनिधित्व क्या है?",
    "options_en": [
      "All-bits-zero common but not required; (void*)0 is null pointer constant",
      "Always zero",
      "No representation",
      "Not a pointer"
    ],
    "options_hi": [
      "सभी-बिट्स-शून्य सामान्य लेकिन आवश्यक नहीं; (void*)0 शून्य सूचक स्थिरांक है",
      "हमेशा शून्य",
      "कोई प्रतिनिधित्व नहीं",
      "पॉइंटर नहीं"
    ],
    "answer_en": "All-bits-zero common but not required; (void*)0 is null pointer constant",
    "answer_hi": "सभी-बिट्स-शून्य सामान्य लेकिन आवश्यक नहीं; (void*)0 शून्य सूचक स्थिरांक है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is 'pointer to function' vs 'pointer to data'?",
    "question_hi": "'फ़ंक्शन का पॉइंटर' बनाम 'डेटा का पॉइंटर' क्या है?",
    "options_en": [
      "Different representations; casting between may not work; separate pointer spaces",
      "Same representation",
      "Always convertible",
      "No difference"
    ],
    "options_hi": [
      "विभिन्न प्रतिनिधित्व; बीच में कास्टिंग काम नहीं कर सकती; अलग पॉइंटर स्पेस",
      "समान प्रतिनिधित्व",
      "हमेशा परिवर्तनीय",
      "कोई अंतर नहीं"
    ],
    "answer_en": "Different representations; casting between may not work; separate pointer spaces",
    "answer_hi": "विभिन्न प्रतिनिधित्व; बीच में कास्टिंग काम नहीं कर सकती; अलग पॉइंटर स्पेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is 'object representation' vs 'value representation'?",
    "question_hi": "'ऑब्जेक्ट प्रतिनिधित्व' बनाम 'मूल्य प्रतिनिधित्व' क्या है?",
    "options_en": [
      "Object: raw bytes; Value: meaningful bits excluding padding/trap",
      "Same thing",
      "Only object",
      "Only value"
    ],
    "options_hi": [
      "ऑब्जेक्ट: कच्चे बाइट्स; मूल्य: पैडिंग/ट्रैप को छोड़कर सार्थक बिट्स",
      "एक ही बात",
      "केवल ऑब्जेक्ट",
      "केवल मूल्य"
    ],
    "answer_en": "Object: raw bytes; Value: meaningful bits excluding padding/trap",
    "answer_hi": "ऑब्जेक्ट: कच्चे बाइट्स; मूल्य: पैडिंग/ट्रैप को छोड़कर सार्थक बिट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 'effective type' for memcpy'd memory?",
    "question_hi": "memcpy'd मेमोरी के लिए 'प्रभावी प्रकार' क्या है?",
    "options_en": [
      "memcpy doesn't set effective type; first access after determines type",
      "memcpy sets type",
      "No effective type",
      "Always void"
    ],
    "answer_en": "memcpy doesn't set effective type; first access after determines type",
    "answer_hi": "memcpy प्रभावी प्रकार सेट नहीं करता; पहली एक्सेस के बाद प्रकार निर्धारित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 'strict aliasing' and memcpy workaround?",
    "question_hi": "'स्ट्रिक्ट एलियासिंग' और memcpy वर्कअराउंड क्या है?",
    "options_en": [
      "Use memcpy for type punning; compilers optimize small memcpy as move",
      "memcpy not allowed",
      "Only unions",
      "No workaround"
    ],
    "options_hi": [
      "टाइप पनिंग के लिए memcpy का उपयोग करें; कंपाइलर छोटे memcpy को मूव के रूप में ऑप्टिमाइज़ करते हैं",
      "memcpy अनुमति नहीं",
      "केवल यूनियन",
      "कोई वर्कअराउंड नहीं"
    ],
    "answer_en": "Use memcpy for type punning; compilers optimize small memcpy as move",
    "answer_hi": "टाइप पनिंग के लिए memcpy का उपयोग करें; कंपाइलर छोटे memcpy को मूव के रूप में ऑप्टिमाइज़ करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is 'type-generic expressions' (_Generic)?",
    "question_hi": "'टाइप-जेनेरिक एक्सप्रेशन' (_Generic) क्या है?",
    "options_en": [
      "C11 feature: _Generic(expr, type1: val1, default: val) compile-time type switch",
      "Not in C",
      "Runtime only",
      "No generics"
    ],
    "options_hi": [
      "C11 सुविधा: _Generic(expr, type1: val1, default: val) कंपाइल-टाइम टाइप स्विच",
      "C में नहीं",
      "केवल रनटाइम",
      "कोई जेनेरिक नहीं"
    ],
    "answer_en": "C11 feature: _Generic(expr, type1: val1, default: val) compile-time type switch",
    "answer_hi": "C11 सुविधा: _Generic(expr, type1: val1, default: val) कंपाइल-टाइम टाइप स्विच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is 'static assertions' with _Static_assert?",
    "question_hi": "_Static_assert के साथ 'स्थैतिक अभिकथन' क्या है?",
    "options_en": [
      "C11: _Static_assert(cond, msg) compile-time assertion; fails compilation if false",
      "Runtime only",
      "Not in C",
      "No assertions"
    ],
    "options_hi": [
      "C11: _Static_assert(cond, msg) कंपाइल-टाइम अभिकथन; गलत होने पर संकलन विफल",
      "केवल रनटाइम",
      "C में नहीं",
      "कोई अभिकथन नहीं"
    ],
    "answer_en": "C11: _Static_assert(cond, msg) compile-time assertion; fails compilation if false",
    "answer_hi": "C11: _Static_assert(cond, msg) कंपाइल-टाइम अभिकथन; गलत होने पर संकलन विफल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is 'anonymous structs/unions' in C11?",
    "question_hi": "C11 में 'अनाम स्ट्रक्चर/यूनियन' क्या है?",
    "options_en": [
      "Struct/union without tag; members accessed directly in containing struct",
      "Not in C",
      "Only in C++",
      "No anonymous"
    ],
    "options_hi": [
      "टैग के बिना स्ट्रक्चर/यूनियन; सदस्यों को युक्त स्ट्रक्चर में सीधे एक्सेस किया गया",
      "C में नहीं",
      "केवल C++ में",
      "कोई अनाम नहीं"
    ],
    "answer_en": "Struct/union without tag; members accessed directly in containing struct",
    "answer_hi": "टैग के बिना स्ट्रक्चर/यूनियन; सदस्यों को युक्त स्ट्रक्चर में सीधे एक्सेस किया गया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 'alignment specifier' _Alignas?",
    "question_hi": "'संरेखण निर्दिष्टकर्ता' _Alignas क्या है?",
    "options_en": [
      "C11: _Alignas(N) or _Alignas(type) specifies alignment requirement",
      "Not in C",
      "Only attribute",
      "No alignment"
    ],
    "options_hi": [
      "C11: _Alignas(N) या _Alignas(type) संरेखण आवश्यकता निर्दिष्ट करता है",
      "C में नहीं",
      "केवल विशेषता",
      "कोई संरेखण नहीं"
    ],
    "answer_en": "C11: _Alignas(N) or _Alignas(type) specifies alignment requirement",
    "answer_hi": "C11: _Alignas(N) या _Alignas(type) संरेखण आवश्यकता निर्दिष्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 'noreturn' attribute/_Noreturn?",
    "question_hi": "'नॉरिटर्न' विशेषता/_Noreturn क्या है?",
    "options_en": [
      "Function doesn't return; enables optimizations, suppresses warnings",
      "No effect",
      "Only for void",
      "Not in C"
    ],
    "options_hi": [
      "फ़ंक्शन वापस नहीं आता है; ऑप्टिमाइज़ेशन सक्षम करता है, चेतावनियों को दबाता है",
      "कोई प्रभाव नहीं",
      "केवल शून्य के लिए",
      "C में नहीं"
    ],
    "answer_en": "Function doesn't return; enables optimizations, suppresses warnings",
    "answer_hi": "फ़ंक्शन वापस नहीं आता है; ऑप्टिमाइज़ेशन सक्षम करता है, चेतावनियों को दबाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is 'threads' in C11 (thrd_t, mtx_t)?",
    "question_hi": "C11 में 'थ्रेड्स' (thrd_t, mtx_t) क्या है?",
    "options_en": [
      "Standard thread API: thrd_create, mtx_lock, cnd_wait; optional feature",
      "Not in C",
      "Only POSIX",
      "No threads"
    ],
    "options_hi": [
      "मानक थ्रेड API: thrd_create, mtx_lock, cnd_wait; वैकल्पिक सुविधा",
      "C में नहीं",
      "केवल POSIX",
      "कोई थ्रेड नहीं"
    ],
    "answer_en": "Standard thread API: thrd_create, mtx_lock, cnd_wait; optional feature",
    "answer_hi": "मानक थ्रेड API: thrd_create, mtx_lock, cnd_wait; वैकल्पिक सुविधा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is 'atomics' in C11 (_Atomic, atomic_flag)?",
    "question_hi": "C11 में 'एटॉमिक्स' (_Atomic, atomic_flag) क्या है?",
    "options_en": [
      "Standard atomic types, operations; lock-free if ATOMIC_*_LOCK_FREE",
      "Not in C",
      "Only GCC",
      "No atomics"
    ],
    "options_hi": [
      "मानक परमाणु प्रकार, संचालन; लॉक-मुक्त यदि ATOMIC_*_LOCK_FREE",
      "C में नहीं",
      "केवल GCC",
      "कोई एटॉमिक नहीं"
    ],
    "answer_en": "Standard atomic types, operations; lock-free if ATOMIC_*_LOCK_FREE",
    "answer_hi": "मानक परमाणु प्रकार, संचालन; लॉक-मुक्त यदि ATOMIC_*_LOCK_FREE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is 'complex numbers' in C (_Complex, _Imaginary)?",
    "question_hi": "C में 'सम्मिश्र संख्या' (_Complex, _Imaginary) क्या है?",
    "options_en": [
      "Standard complex types; _Imaginary optional; operations via <complex.h>",
      "Not in C",
      "Only C++",
      "No complex"
    ],
    "options_hi": [
      "मानक जटिल प्रकार; _Imaginary वैकल्पिक; <complex.h> के माध्यम से संचालन",
      "C में नहीं",
      "केवल C++",
      "कोई जटिल नहीं"
    ],
    "answer_en": "Standard complex types; _Imaginary optional; operations via <complex.h>",
    "answer_hi": "मानक जटिल प्रकार; _Imaginary वैकल्पिक; <complex.h> के माध्यम से संचालन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 'bounds-checking interfaces' Annex K?",
    "question_hi": "'बाउंड्स-चेकिंग इंटरफेस' अनुबंध K क्या है?",
    "options_en": [
      "Optional secure functions: strcpy_s, scanf_s; not widely implemented",
      "Standard C",
      "Always available",
      "No such annex"
    ],
    "options_hi": [
      "वैकल्पिक सुरक्षित कार्य: strcpy_s, scanf_s; व्यापक रूप से लागू नहीं",
      "मानक C",
      "हमेशा उपलब्ध",
      "ऐसा कोई परिशिष्ट नहीं"
    ],
    "answer_en": "Optional secure functions: strcpy_s, scanf_s; not widely implemented",
    "answer_hi": "वैकल्पिक सुरक्षित कार्य: strcpy_s, scanf_s; व्यापक रूप से लागू नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is 'freestanding implementation' features?",
    "question_hi": "'फ्रीस्टैंडिंग कार्यान्वयन' सुविधाएँ क्या हैं?",
    "options_en": [
      "No standard library required; only <float.h>, <limits.h>, <stdarg.h>, <stddef.h>",
      "Full library",
      "No headers",
      "Not a concept"
    ],
    "options_hi": [
      "मानक लाइब्रेरी की आवश्यकता नहीं; केवल <float.h>, <limits.h>, <stdarg.h>, <stddef.h>",
      "पूर्ण पुस्तकालय",
      "कोई हेडर नहीं",
      "कोई अवधारणा नहीं"
    ],
    "answer_en": "No standard library required; only <float.h>, <limits.h>, <stdarg.h>, <stddef.h>",
    "answer_hi": "मानक लाइब्रेरी की आवश्यकता नहीं; केवल <float.h>, <limits.h>, <stdarg.h>, <stddef.h>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is 'interoperability' with other languages (C++/Rust/Assembly)?",
    "question_hi": "अन्य भाषाओं (C++/Rust/Assembly) के साथ 'अंतरसंचालनीयता' क्या है?",
    "options_en": [
      "C ABI stable; extern \"C\", FFI, calling conventions, name mangling differences",
      "No interoperability",
      "Only C++",
      "Same as C"
    ],
    "options_hi": [
      "C ABI स्थिर; extern \"C\", FFI, कॉलिंग कन्वेंशन, नाम मैंगलिंग अंतर",
      "कोई अंतरसंचालनीयता नहीं",
      "केवल C++",
      "C के समान"
    ],
    "answer_en": "C ABI stable; extern \"C\", FFI, calling conventions, name mangling differences",
    "answer_hi": "C ABI स्थिर; extern \"C\", FFI, कॉलिंग कन्वेंशन, नाम मैंगलिंग अंतर",
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