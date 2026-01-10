const questions = [
   {
    "num":1,
    "question_en": "In abstract algebra, which of the following is NOT a characteristic of a field?",
    "question_hi": "अमूर्त बीजगणित में, निम्नलिखित में से कौन सा क्षेत्र की विशेषता नहीं है?",
    "options_en": ["Every element has a multiplicative inverse", "Commutative under addition", "Contains at least two elements", "Every non-zero element is a unit"],
    "options_hi": ["प्रत्येक तत्व का गुणात्मक व्युत्क्रम होता है", "जोड़ के तहत क्रमविनिमेय", "कम से कम दो तत्व होते हैं", "प्रत्येक गैर-शून्य तत्व एक इकाई है"],
    "answer_en": "Contains at least two elements",
    "answer_hi": "कम से कम दो तत्व होते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "The Riemann zeta function ζ(s) is defined for Re(s) > 1 by which series?",
    "question_hi": "रिमान जीटा फलन ζ(s) को Re(s) > 1 के लिए किस श्रृंखला द्वारा परिभाषित किया जाता है?",
    "options_en": ["∑ (1/n^s)", "∑ (n^s)", "∑ (1/n!)", "∑ (s^n/n!)"],
    "options_hi": ["∑ (1/n^s)", "∑ (n^s)", "∑ (1/n!)", "∑ (s^n/n!)"],
    "answer_en": "∑ (1/n^s)",
    "answer_hi": "∑ (1/n^s)",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "Which theorem states that every bounded sequence in ℝⁿ has a convergent subsequence?",
    "question_hi": "कौन सा प्रमेय कहता है कि ℝⁿ में प्रत्येक परिबद्ध अनुक्रम का एक अभिसारी उपानुक्रम होता है?",
    "options_en": ["Bolzano-Weierstrass Theorem", "Heine-Borel Theorem", "Cauchy Convergence Criterion", "Monotone Convergence Theorem"],
    "options_hi": ["बोलजानो-वीयरस्ट्रास प्रमेय", "हीने-बोरेल प्रमेय", "कोशी अभिसरण मानदंड", "मोनोटोन अभिसरण प्रमेय"],
    "answer_en": "Bolzano-Weierstrass Theorem",
    "answer_hi": "बोलजानो-वीयरस्ट्रास प्रमेय",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "In differential geometry, the Gaussian curvature K of a surface is given by:",
    "question_hi": "अवकल ज्यामिति में, एक सतह की गॉसियन वक्रता K किसके द्वारा दी जाती है:",
    "options_en": ["K = κ₁κ₂", "K = κ₁ + κ₂", "K = (κ₁ + κ₂)/2", "K = κ₁² + κ₂²"],
    "options_hi": ["K = κ₁κ₂", "K = κ₁ + κ₂", "K = (κ₁ + κ₂)/2", "K = κ₁² + κ₂²"],
    "answer_en": "K = κ₁κ₂",
    "answer_hi": "K = κ₁κ₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "Which of the following is NOT a Banach space?",
    "question_hi": "निम्नलिखित में से कौन सा बनाख स्थान नहीं है?",
    "options_en": ["C[0,1] with sup norm", "ℓ¹ space", "ℓ∞ space", "C[0,1] with L¹ norm"],
    "options_hi": ["सुप मानदंड के साथ C[0,1]", "ℓ¹ स्थान", "ℓ∞ स्थान", "L¹ मानदंड के साथ C[0,1]"],
    "answer_en": "C[0,1] with L¹ norm",
    "answer_hi": "L¹ मानदंड के साथ C[0,1]",
    "attempted": false,
    "selected": ""
  },
  {
    "num":6,
    "question_en": "The fundamental theorem of Galois theory establishes a correspondence between:",
    "question_hi": "गैलोइस सिद्धांत का मौलिक प्रमेय किसके बीच एक पत्राचार स्थापित करता है:",
    "options_en": ["Field extensions and Galois groups", "Groups and rings", "Vector spaces and fields", "Topological spaces and groups"],
    "options_hi": ["क्षेत्र विस्तार और गैलोइस समूह", "समूह और वलय", "सदिश समष्टि और क्षेत्र", "टोपोलॉजिकल स्थान और समूह"],
    "answer_en": "Field extensions and Galois groups",
    "answer_hi": "क्षेत्र विस्तार और गैलोइस समूह",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "In complex analysis, Liouville's theorem states that every bounded entire function is:",
    "question_hi": "समिश्र विश्लेषण में, लिउविल का प्रमेय कहता है कि प्रत्येक परिबद्ध संपूर्ण फलन है:",
    "options_en": ["Constant", "Polynomial", "Exponential", "Rational"],
    "options_hi": ["अचर", "बहुपद", "घातांकीय", "परिमेय"],
    "answer_en": "Constant",
    "answer_hi": "अचर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "The Hahn-Banach theorem is concerned with extending:",
    "question_hi": "हान-बनाख प्रमेय का संबंध विस्तार से है:",
    "options_en": ["Linear functionals", "Continuous functions", "Measure spaces", "Topological spaces"],
    "options_hi": ["रैखिक फलनात्मक", "सतत फलन", "माप स्थान", "टोपोलॉजिकल स्थान"],
    "answer_en": "Linear functionals",
    "answer_hi": "रैखिक फलनात्मक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "Which of the following is a characteristic of a Hilbert space?",
    "question_hi": "निम्नलिखित में से कौन सा हिल्बर्ट स्थान की विशेषता है?",
    "options_en": ["Complete inner product space", "Complete normed space", "Compact space", "Finite dimensional space"],
    "options_hi": ["पूर्ण आंतरिक गुणन स्थान", "पूर्ण मानदंडित स्थान", "संहत स्थान", "परिमित आयामी स्थान"],
    "answer_en": "Complete inner product space",
    "answer_hi": "पूर्ण आंतरिक गुणन स्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "In topology, a space is said to be simply connected if:",
    "question_hi": "टोपोलॉजी में, एक स्थान को सरल संबद्ध कहा जाता है यदि:",
    "options_en": ["It is path-connected and has trivial fundamental group", "It is compact and Hausdorff", "It is connected and locally path-connected", "It is complete and separable"],
    "options_hi": ["यह पथ-संबद्ध है और तुच्छ मौलिक समूह है", "यह संहत और हॉसडॉर्फ है", "यह संबद्ध और स्थानीय रूप से पथ-संबद्ध है", "यह पूर्ण और पृथक्करणीय है"],
    "answer_en": "It is path-connected and has trivial fundamental group",
    "answer_hi": "यह पथ-संबद्ध है और तुच्छ मौलिक समूह है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":11,
    "question_en": "The Fourier transform of the Gaussian function f(x) = e^{-ax²} is:",
    "question_hi": "गॉसियन फलन f(x) = e^{-ax²} का फूरियर रूपांतरण है:",
    "options_en": ["√(π/a) e^{-ω²/(4a)}", "√(π/a) e^{-aω²}", "e^{-ω²/(4a)}", "√(2π/a) e^{-ω²/(2a)}"],
    "options_hi": ["√(π/a) e^{-ω²/(4a)}", "√(π/a) e^{-aω²}", "e^{-ω²/(4a)}", "√(2π/a) e^{-ω²/(2a)}"],
    "answer_en": "√(π/a) e^{-ω²/(4a)}",
    "answer_hi": "√(π/a) e^{-ω²/(4a)}",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "In measure theory, a function f is said to be measurable if:",
    "question_hi": "माप सिद्धांत में, एक फलन f को मापने योग्य कहा जाता है यदि:",
    "options_en": ["For every α ∈ ℝ, {x: f(x) > α} is measurable", "f is continuous", "f is bounded", "f is differentiable"],
    "options_hi": ["प्रत्येक α ∈ ℝ के लिए, {x: f(x) > α} मापने योग्य है", "f सतत है", "f परिबद्ध है", "f अवकलनीय है"],
    "answer_en": "For every α ∈ ℝ, {x: f(x) > α} is measurable",
    "answer_hi": "प्रत्येक α ∈ ℝ के लिए, {x: f(x) > α} मापने योग्य है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "The Jordan canonical form applies to:",
    "question_hi": "जॉर्डन विहित रूप लागू होता है:",
    "options_en": ["Linear operators on finite-dimensional vector spaces", "All linear operators", "Symmetric matrices only", "Orthogonal matrices only"],
    "options_hi": ["परिमित-आयामी सदिश समष्टि पर रैखिक संकारक", "सभी रैखिक संकारक", "केवल सममित आव्यूह", "केवल लांबिक आव्यूह"],
    "answer_en": "Linear operators on finite-dimensional vector spaces",
    "answer_hi": "परिमित-आयामी सदिश समष्टि पर रैखिक संकारक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "The spectral theorem for self-adjoint operators states that:",
    "question_hi": "स्व-संयुक्त संकारकों के लिए स्पेक्ट्रम प्रमेय कहता है कि:",
    "options_en": ["They can be diagonalized by an orthonormal basis", "They are compact", "They have real spectrum", "All of the above"],
    "options_hi": ["उन्हें एक ऑर्थोनॉर्मल आधार द्वारा विकर्णीकृत किया जा सकता है", "वे संहत हैं", "उनका वास्तविक स्पेक्ट्रम है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
    "question_en": "In differential equations, the method of characteristics is used to solve:",
    "question_hi": "अवकल समीकरणों में, अभिलक्षण विधि का उपयोग हल करने के लिए किया जाता है:",
    "options_en": ["First-order partial differential equations", "Second-order ODEs", "Linear systems", "Nonlinear ODEs"],
    "options_hi": ["प्रथम-कोटि आंशिक अवकल समीकरण", "द्वितीय-कोटि साधारण अवकल समीकरण", "रैखिक तंत्र", "अरैखिक साधारण अवकल समीकरण"],
    "answer_en": "First-order partial differential equations",
    "answer_hi": "प्रथम-कोटि आंशिक अवकल समीकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num":16,
    "question_en": "The Riemann mapping theorem states that:",
    "question_hi": "रिमान मानचित्रण प्रमेय कहता है कि:",
    "options_en": ["Any simply connected proper subset of ℂ is conformally equivalent to the unit disk", "Every continuous function is Riemann integrable", "Every analytic function has a power series expansion", "All bounded entire functions are constant"],
    "options_hi": ["ℂ का कोई भी सरल संबद्ध उचित उपसमुच्चय इकाई डिस्क के लिए संयोजी समतुल्य है", "प्रत्येक सतत फलन रिमान समाकलनीय है", "प्रत्येक विश्लेषणात्मक फलन की घात श्रृंखला विस्तार है", "सभी परिबद्ध संपूर्ण फलन अचर हैं"],
    "answer_en": "Any simply connected proper subset of ℂ is conformally equivalent to the unit disk",
    "answer_hi": "ℂ का कोई भी सरल संबद्ध उचित उपसमुच्चय इकाई डिस्क के लिए संयोजी समतुल्य है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "In functional analysis, the closed graph theorem applies to:",
    "question_hi": "फलनात्मक विश्लेषण में, संवृत आलेख प्रमेय लागू होता है:",
    "options_en": ["Closed linear operators between Banach spaces", "All linear operators", "Compact operators", "Self-adjoint operators"],
    "options_hi": ["बनाख स्थानों के बीच संवृत रैखिक संकारक", "सभी रैखिक संकारक", "संहत संकारक", "स्व-संयुक्त संकारक"],
    "answer_en": "Closed linear operators between Banach spaces",
    "answer_hi": "बनाख स्थानों के बीच संवृत रैखिक संकारक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "The Cauchy integral formula states that for an analytic function f in a simply connected domain D:",
    "question_hi": "कोशी समाकल सूत्र कहता है कि एक सरल संबद्ध डोमेन D में एक विश्लेषणात्मक फलन f के लिए:",
    "options_en": ["f(z) = (1/2πi) ∮_γ f(ζ)/(ζ-z) dζ", "f(z) = ∮_γ f(ζ) dζ", "f'(z) = (1/2πi) ∮_γ f(ζ)/(ζ-z)² dζ", "Both A and C"],
    "options_hi": ["f(z) = (1/2πi) ∮_γ f(ζ)/(ζ-z) dζ", "f(z) = ∮_γ f(ζ) dζ", "f'(z) = (1/2πi) ∮_γ f(ζ)/(ζ-z)² dζ", "A और C दोनों"],
    "answer_en": "Both A and C",
    "answer_hi": "A और C दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "A topological space is compact if:",
    "question_hi": "एक टोपोलॉजिकल स्थान संहत है यदि:",
    "options_en": ["Every open cover has a finite subcover", "It is closed and bounded", "It is complete and totally bounded", "It is connected and locally compact"],
    "options_hi": ["प्रत्येक खुले आवरण का एक परिमित उपआवरण है", "यह संवृत और परिबद्ध है", "यह पूर्ण और पूर्णतः परिबद्ध है", "यह संबद्ध और स्थानीय रूप से संहत है"],
    "answer_en": "Every open cover has a finite subcover",
    "answer_hi": "प्रत्येक खुले आवरण का एक परिमित उपआवरण है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "The Implicit Function Theorem deals with:",
    "question_hi": "अंतर्निहित फलन प्रमेय संबंधित है:",
    "options_en": ["Solving equations of the form F(x,y)=0 for y as a function of x", "Finding derivatives of implicit functions", "Both A and B", "Neither A nor B"],
    "options_hi": ["F(x,y)=0 के रूप के समीकरणों को y को x के फलन के रूप में हल करना", "अंतर्निहित फलनों के अवकलज ज्ञात करना", "A और B दोनों", "न तो A और न ही B"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num":21,
    "question_en": "In number theory, the Chinese Remainder Theorem applies to:",
    "question_hi": "संख्या सिद्धांत में, चीनी शेषफल प्रमेय लागू होता है:",
    "options_en": ["Systems of congruences with pairwise coprime moduli", "Prime numbers only", "Diophantine equations", "All modular arithmetic problems"],
    "options_hi": ["युग्मानुसार सहअभाज्य मॉड्यूली वाली सर्वांगसमता प्रणाली", "केवल अभाज्य संख्याएं", "डायोफैंटाइन समीकरण", "सभी मॉड्यूलर अंकगणित समस्याएं"],
    "answer_en": "Systems of congruences with pairwise coprime moduli",
    "answer_hi": "युग्मानुसार सहअभाज्य मॉड्यूली वाली सर्वांगसमता प्रणाली",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
    "question_en": "The Banach fixed-point theorem is also known as:",
    "question_hi": "बनाख निश्चित-बिंदु प्रमेय के रूप में भी जाना जाता है:",
    "options_en": ["Contraction Mapping Theorem", "Brouwer Fixed-Point Theorem", "Schauder Fixed-Point Theorem", "Kakutani Fixed-Point Theorem"],
    "options_hi": ["संकुचन मानचित्रण प्रमेय", "ब्राउवर निश्चित-बिंदु प्रमेय", "शाउडर निश्चित-बिंदु प्रमेय", "काकुतानी निश्चित-बिंदु प्रमेय"],
    "answer_en": "Contraction Mapping Theorem",
    "answer_hi": "संकुचन मानचित्रण प्रमेय",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "In group theory, Lagrange's theorem states that:",
    "question_hi": "समूह सिद्धांत में, लाग्रांज का प्रमेय कहता है कि:",
    "options_en": ["The order of a subgroup divides the order of the group", "Every group of prime order is cyclic", "Every finite group is abelian", "The center of a group is always non-trivial"],
    "options_hi": ["उपसमूह का क्रम समूह के क्रम को विभाजित करता है", "प्रत्येक अभाज्य क्रम का समूह चक्रीय है", "प्रत्येक परिमित समूह आबेलियन है", "समूह का केंद्र हमेशा गैर-तुच्छ होता है"],
    "answer_en": "The order of a subgroup divides the order of the group",
    "answer_hi": "उपसमूह का क्रम समूह के क्रम को विभाजित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "The Stone-Weierstrass theorem approximates:",
    "question_hi": "स्टोन-वीयरस्ट्रास प्रमेय सन्निकटन करता है:",
    "options_en": ["Continuous functions on compact sets by polynomials", "Measurable functions by continuous functions", "L² functions by trigonometric polynomials", "All functions by analytic functions"],
    "options_hi": ["संहत समुच्चय पर सतत फलनों का बहुपदों द्वारा", "मापने योग्य फलनों का सतत फलनों द्वारा", "L² फलनों का त्रिकोणमितीय बहुपदों द्वारा", "सभी फलनों का विश्लेषणात्मक फलनों द्वारा"],
    "answer_en": "Continuous functions on compact sets by polynomials",
    "answer_hi": "संहत समुच्चय पर सतत फलनों का बहुपदों द्वारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
    "question_en": "The fundamental theorem of calculus connects:",
    "question_hi": "कलन का मौलिक प्रमेय जोड़ता है:",
    "options_en": ["Differentiation and integration", "Limits and continuity", "Series and sequences", "Algebra and geometry"],
    "options_hi": ["अवकलन और समाकलन", "सीमाएं और सातत्य", "श्रृंखला और अनुक्रम", "बीजगणित और ज्यामिति"],
    "answer_en": "Differentiation and integration",
    "answer_hi": "अवकलन और समाकलन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":26,
    "question_en": "In linear algebra, the rank-nullity theorem states that for a linear transformation T: V → W:",
    "question_hi": "रैखिक बीजगणित में, रैंक-शून्यता प्रमेय कहता है कि एक रैखिक परिवर्तन T: V → W के लिए:",
    "options_en": ["dim(V) = rank(T) + nullity(T)", "dim(W) = rank(T) + nullity(T)", "rank(T) = dim(V) - dim(W)", "nullity(T) = dim(W) - rank(T)"],
    "options_hi": ["dim(V) = rank(T) + nullity(T)", "dim(W) = rank(T) + nullity(T)", "rank(T) = dim(V) - dim(W)", "nullity(T) = dim(W) - rank(T)"],
    "answer_en": "dim(V) = rank(T) + nullity(T)",
    "answer_hi": "dim(V) = rank(T) + nullity(T)",
    "attempted": false,
    "selected": ""
  },
  {
    "num":27,
    "question_en": "The Poisson summation formula relates:",
    "question_hi": "पॉइसन योग सूत्र संबंधित करता है:",
    "options_en": ["A function and its Fourier transform evaluated at integers", "Series and integrals", "Discrete and continuous Fourier transforms", "All of the above"],
    "options_hi": ["एक फलन और उसके फूरियर रूपांतरण का पूर्णांकों पर मूल्यांकन", "श्रृंखला और समाकल", "असतत और सतत फूरियर रूपांतरण", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":28,
    "question_en": "In probability theory, the Central Limit Theorem states that:",
    "question_hi": "प्रायिकता सिद्धांत में, केंद्रीय सीमा प्रमेय कहता है कि:",
    "options_en": ["The sum of independent random variables tends to a normal distribution", "Sample means converge to the population mean", "Both A and B", "Neither A nor B"],
    "options_hi": ["स्वतंत्र यादृच्छिक चरों का योग एक सामान्य वितरण की ओर प्रवृत्त होता है", "नमूना माध्य जनसंख्या माध्य में अभिसरण करते हैं", "A और B दोनों", "न तो A और न ही B"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num":29,
    "question_en": "The Euler-Lagrange equation is used to find:",
    "question_hi": "यूलर-लाग्रांज समीकरण का उपयोग खोजने के लिए किया जाता है:",
    "options_en": ["Extrema of functionals in calculus of variations", "Solutions to differential equations", "Critical points of functions", "All of the above"],
    "options_hi": ["विविधता कलन में फलनात्मक के चरम", "अवकल समीकरणों के हल", "फलनों के क्रांतिक बिंदु", "उपरोक्त सभी"],
    "answer_en": "Extrema of functionals in calculus of variations",
    "answer_hi": "विविधता कलन में फलनात्मक के चरम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "A metric space is complete if:",
    "question_hi": "एक मीट्रिक स्थान पूर्ण है यदि:",
    "options_en": ["Every Cauchy sequence converges", "It is compact", "It is bounded", "It is connected"],
    "options_hi": ["प्रत्येक कोशी अनुक्रम अभिसरण करता है", "यह संहत है", "यह परिबद्ध है", "यह संबद्ध है"],
    "answer_en": "Every Cauchy sequence converges",
    "answer_hi": "प्रत्येक कोशी अनुक्रम अभिसरण करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":31,
    "question_en": "The Peter-Weyl theorem in representation theory states that:",
    "question_hi": "निरूपण सिद्धांत में पीटर-वेल प्रमेय कहता है कि:",
    "options_en": ["The matrix coefficients of irreducible representations are dense in C(G)", "Every compact group has faithful representations", "All representations are completely reducible", "Finite groups have finite-dimensional representations"],
    "options_hi": ["अपरिवर्तनीय निरूपणों के आव्यूह गुणांक C(G) में सघन हैं", "प्रत्येक संहत समूह के विश्वासयोग्य निरूपण हैं", "सभी निरूपण पूर्णतः अपचयनीय हैं", "परिमित समूहों के परिमित-आयामी निरूपण हैं"],
    "answer_en": "The matrix coefficients of irreducible representations are dense in C(G)",
    "answer_hi": "अपरिवर्तनीय निरूपणों के आव्यूह गुणांक C(G) में सघन हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num":32,
    "question_en": "In algebraic geometry, the Nullstellensatz (Hilbert's theorem) establishes a correspondence between:",
    "question_hi": "बीजगणितीय ज्यामिति में, नलस्टेलनसैट्ज़ (हिल्बर्ट का प्रमेय) के बीच एक पत्राचार स्थापित करता है:",
    "options_en": ["Algebraic sets and radical ideals", "Varieties and prime ideals", "Both A and B", "Neither A nor B"],
    "options_hi": ["बीजगणितीय समुच्चय और मूलक आदर्श", "वैरायटी और अभाज्य आदर्श", "A और B दोनों", "न तो A और न ही B"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num":33,
    "question_en": "The Sobolev embedding theorem deals with:",
    "question_hi": "सोबोलेव एम्बेडिंग प्रमेय संबंधित है:",
    "options_en": ["Inclusions between Sobolev spaces and other function spaces", "Existence of solutions to PDEs", "Regularity of solutions", "Compactness of embeddings"],
    "options_hi": ["सोबोलेव स्थानों और अन्य फलन स्थानों के बीच समावेशन", "आंशिक अवकल समीकरणों के हलों का अस्तित्व", "हलों की नियमितता", "एम्बेडिंग की संहतता"],
    "answer_en": "Inclusions between Sobolev spaces and other function spaces",
    "answer_hi": "सोबोलेव स्थानों और अन्य फलन स्थानों के बीच समावेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "The Atiyah-Singer index theorem relates:",
    "question_hi": "अतियाह-सिंगर सूचकांक प्रमेय संबंधित करता है:",
    "options_en": ["Topological and analytical indices of elliptic operators", "Geometry and analysis", "Both A and B", "Neither A nor B"],
    "options_hi": ["दीर्घवृत्तीय संकारकों के टोपोलॉजिकल और विश्लेषणात्मक सूचकांक", "ज्यामिति और विश्लेषण", "A और B दोनों", "न तो A और न ही B"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num":35,
    "question_en": "In category theory, Yoneda's lemma states that:",
    "question_hi": "श्रेणी सिद्धांत में, योनेडा की प्रमेयिका कहती है कि:",
    "options_en": ["An object is determined by its relationships with other objects", "Every functor has a left adjoint", "Limits and colimits exist in complete categories", "Natural transformations form a category"],
    "options_hi": ["एक वस्तु अन्य वस्तुओं के साथ उसके संबंधों द्वारा निर्धारित होती है", "प्रत्येक फलक का एक बायाँ सहयुक्त होता है", "पूर्ण श्रेणियों में सीमाएं और सहसीमाएं मौजूद हैं", "प्राकृतिक परिवर्तन एक श्रेणी बनाते हैं"],
    "answer_en": "An object is determined by its relationships with other objects",
    "answer_hi": "एक वस्तु अन्य वस्तुओं के साथ उसके संबंधों द्वारा निर्धारित होती है",
    "attempted": false,
    "selected": ""
  },
  {
"num":36,
"question_en": "In the context of computer networks, what does the acronym CSMA/CD stand for?",
"question_hi": "कंप्यूटर नेटवर्क के संदर्भ में, CSMA/CD का पूर्ण रूप क्या है?",
"options_en": ["Carrier Sense Multiple Access with Collision Detection", "Carrier System Multiple Access with Collision Domain", "Collision Sense Multiple Access with Carrier Detection", "Carrier Signal Multiple Access with Collision Detection"],
"options_hi": ["कैरियर सेंस मल्टीपल एक्सेस विद कॉलिज़न डिटेक्शन", "कैरियर सिस्टम मल्टीपल एक्सेस विद कॉलिज़न डोमेन", "कॉलिज़न सेंस मल्टीपल एक्सेस विद कैरियर डिटेक्शन", "कैरियर सिग्नल मल्टीपल एक्सेस विद कॉलिज़न डिटेक्शन"],
"answer_en": "Carrier Sense Multiple Access with Collision Detection",
"answer_hi": "कैरियर सेंस मल्टीपल एक्सेस विद कॉलिज़न डिटेक्शन",
"attempted": false,
"selected": ""
},
{
"num":37,
"question_en": "In linear algebra, the Cayley-Hamilton theorem states that:",
"question_hi": "रैखिक बीजगणित में, केली-हैमिल्टन प्रमेय कहता है कि:",
"options_en": ["Every square matrix satisfies its own characteristic equation", "The determinant of a product is the product of determinants", "Eigenvectors corresponding to distinct eigenvalues are orthogonal", "The trace is the sum of eigenvalues"],
"options_hi": ["प्रत्येक वर्ग मैट्रिक्स अपने स्वयं के अभिलक्षणिक समीकरण को संतुष्ट करती है", "एक गुणनफल का सारणिक, सारणिकों के गुणनफल के बराबर होता है", "भिन्न आइगेनमानों के संगत आइगेनसदिश लंबकोणीय होते हैं", "ट्रेस, आइगेनमानों के योग के बराबर होता है"],
"answer_en": "Every square matrix satisfies its own characteristic equation",
"answer_hi": "प्रत्येक वर्ग मैट्रिक्स अपने स्वयं के अभिलक्षणिक समीकरण को संतुष्ट करती है",
"attempted": false,
"selected": ""
},
{
"num":38,
"question_en": "Which law of thermodynamics is often stated as 'the entropy of an isolated system never decreases'?",
"question_hi": "ऊष्मागतिकी का कौन सा नियम अक्सर 'एक पृथक प्रणाली की एन्ट्रॉपी कभी कम नहीं होती' के रूप में कहा जाता है?",
"options_en": ["First Law", "Second Law", "Third Law", "Zeroth Law"],
"options_hi": ["प्रथम नियम", "द्वितीय नियम", "तृतीय नियम", "शून्य नियम"],
"answer_en": "Second Law",
"answer_hi": "द्वितीय नियम",
"attempted": false,
"selected": ""
},
{
"num":39,
"question_en": "In developmental biology, the process by which cells become specialized in structure and function is called:",
"question_hi": "विकासात्मक जीवविज्ञान में, वह प्रक्रिया जिसके द्वारा कोशिकाएं संरचना और कार्य में विशिष्ट हो जाती हैं, कहलाती है:",
"options_en": ["Differentiation", "Proliferation", "Metamorphosis", "Homeostasis"],
"options_hi": ["विभेदन", "प्रसरण", "कायांतरण", "समस्थिति"],
"answer_en": "Differentiation",
"answer_hi": "विभेदन",
"attempted": false,
"selected": ""
},
{
"num":40,
"question_en": "In linguistics, the term 'phoneme' refers to:",
"question_hi": "भाषाविज्ञान में, 'स्वनिम' शब्द संदर्भित करता है:",
"options_en": ["The smallest unit of sound that can distinguish meaning", "The smallest unit of grammatical function", "The study of word origins", "The rules for sentence formation"],
"options_hi": ["ध्वनि की सबसे छोटी इकाई जो अर्थ में भेद कर सकती है", "व्याकरणिक कार्य की सबसे छोटी इकाई", "शब्द-मूल का अध्ययन", "वाक्य निर्माण के नियम"],
"answer_en": "The smallest unit of sound that can distinguish meaning",
"answer_hi": "ध्वनि की सबसे छोटी इकाई जो अर्थ में भेद कर सकती है",
"attempted": false,
"selected": ""
},
{
"num":41,
"question_en": "In economics, the 'Gini coefficient' is a measure of:",
"question_hi": "अर्थशास्त्र में, 'जिनी गुणांक' एक माप है:",
"options_en": ["Income inequality within a nation", "Inflation rate", "Gross Domestic Product growth", "Unemployment rate"],
"options_hi": ["एक राष्ट्र के भीतर आय असमानता का", "मुद्रास्फीति दर का", "सकल घरेलू उत्पाद वृद्धि का", "बेरोजगारी दर का"],
"answer_en": "Income inequality within a nation",
"answer_hi": "एक राष्ट्र के भीतर आय असमानता का",
"attempted": false,
"selected": ""
},
{
"num":42,
"question_en": "In geology, the 'Mohs scale' is used to measure:",
"question_hi": "भूविज्ञान में, 'मोह्स पैमाना' मापने के लिए प्रयोग किया जाता है:",
"options_en": ["The hardness of minerals", "The magnitude of earthquakes", "The acidity of rocks", "The age of fossils"],
"options_hi": ["खनिजों की कठोरता का", "भूकंप की तीव्रता का", "चट्टानों की अम्लता का", "जीवाश्मों की आयु का"],
"answer_en": "The hardness of minerals",
"answer_hi": "खनिजों की कठोरता का",
"attempted": false,
"selected": ""
},
{
"num":43,
"question_en": "In astronomy, the 'Chandrasekhar limit' is the maximum mass possible for a stable:",
"question_hi": "खगोल विज्ञान में, 'चंद्रशेखर सीमा' एक स्थिर ______ के लिए संभव अधिकतम द्रव्यमान है:",
"options_en": ["White dwarf star", "Neutron star", "Black hole", "Red giant star"],
"options_hi": ["श्वेत वामन तारे का", "न्यूट्रॉन तारे का", "ब्लैक होल का", "लाल दानव तारे का"],
"answer_en": "White dwarf star",
"answer_hi": "श्वेत वामन तारे का",
"attempted": false,
"selected": ""
},
{
"num":44,
"question_en": "In political philosophy, John Rawls' 'veil of ignorance' is a concept used to:",
"question_hi": "राजनीतिक दर्शन में, जॉन रॉल्स का 'अज्ञानता का आवरण' एक अवधारणा है जिसका प्रयोग किया जाता है:",
"options_en": ["Ensure fairness in principles of justice", "Promote absolute monarchy", "Justify historical determinism", "Critique utilitarianism"],
"options_hi": ["न्याय के सिद्धांतों में निष्पक्षता सुनिश्चित करने के लिए", "निरंकुश राजतंत्र को बढ़ावा देने के लिए", "ऐतिहासिक नियतिवाद को उचित ठहराने के लिए", "उपयोगितावाद की आलोचना करने के लिए"],
"answer_en": "Ensure fairness in principles of justice",
"answer_hi": "न्याय के सिद्धांतों में निष्पक्षता सुनिश्चित करने के लिए",
"attempted": false,
"selected": ""
},
{
"num":45,
"question_en": "In computer science, 'Dijkstra's algorithm' is used to solve:",
"question_hi": "कंप्यूटर विज्ञान में, 'डाइक्स्ट्रा का एल्गोरिदम' हल करने के लिए प्रयोग किया जाता है:",
"options_en": ["The single-source shortest path problem", "Sorting a list of numbers", "The traveling salesman problem", "Matrix multiplication"],
"options_hi": ["एकल-स्रोत न्यूनतम पथ समस्या को", "संख्याओं की सूची को क्रमबद्ध करने के लिए", "यात्रा विक्रेता समस्या को", "मैट्रिक्स गुणन को"],
"answer_en": "The single-source shortest path problem",
"answer_hi": "एकल-स्रोत न्यूनतम पथ समस्या को",
"attempted": false,
"selected": ""
},
{
"num":46,
"question_en": "In organic chemistry, a 'meso compound' is characterized by:",
"question_hi": "कार्बनिक रसायन विज्ञान में, एक 'मीसो यौगिक' की विशेषता है:",
"options_en": ["Having chiral centers but being achiral overall", "Having no chiral centers", "Being optically active", "Having a plane of symmetry"],
"options_hi": ["चिरल केंद्र होने पर भी समग्र रूप से अचिरल होना", "कोई चिरल केंद्र न होना", "प्रकाशिक सक्रिय होना", "सममिति का एक तल होना"],
"answer_en": "Having chiral centers but being achiral overall",
"answer_hi": "चिरल केंद्र होने पर भी समग्र रूप से अचिरल होना",
"attempted": false,
"selected": ""
},
{
"num":47,
"question_en": "In physics, the 'Pauli exclusion principle' applies to:",
"question_hi": "भौतिकी में, 'पाउली अपवर्जन सिद्धांत' लागू होता है:",
"options_en": ["Fermions", "Bosons", "Photons", "All quantum particles"],
"options_hi": ["फर्मिऑन पर", "बोसॉन पर", "फोटॉन पर", "सभी क्वांटम कणों पर"],
"answer_en": "Fermions",
"answer_hi": "फर्मिऑन पर",
"attempted": false,
"selected": ""
},
{
"num":48,
"question_en": "In Indian classical music, a 'thaat' is primarily:",
"question_hi": "भारतीय शास्त्रीय संगीत में, एक 'थाट' मूल रूप से है:",
"options_en": ["A system for classifying ragas", "A type of rhythmic cycle", "A devotional song form", "A melodic ornamentation"],
"options_hi": ["रागों को वर्गीकृत करने की एक प्रणाली", "ताल चक्र का एक प्रकार", "एक भक्ति गीत रूप", "एक स्वराभूषण"],
"answer_en": "A system for classifying ragas",
"answer_hi": "रागों को वर्गीकृत करने की एक प्रणाली",
"attempted": false,
"selected": ""
},
{
"num":49,
"question_en": "In botany, the 'Casparian strip' is a feature found in:",
"question_hi": "वनस्पति विज्ञान में, 'कैस्पेरियन पट्टी' एक संरचना है जो पाई जाती है:",
"options_en": ["The endodermis of plant roots", "The stomata of leaves", "The xylem vessels", "The phloem sieve tubes"],
"options_hi": ["पादप जड़ों के अंतस्त्वचा में", "पत्तियों के रंध्रों में", "जाइलम वाहिकाओं में", "फ्लोएम चालनी नलिकाओं में"],
"answer_en": "The endodermis of plant roots",
"answer_hi": "पादप जड़ों के अंतस्त्वचा में",
"attempted": false,
"selected": ""
},
{
"num":50,
"question_en": "In international law, 'jus cogens' refers to:",
"question_hi": "अंतरराष्ट्रीय कानून में, 'जस कोजेन्स' संदर्भित करता है:",
"options_en": ["A peremptory norm from which no derogation is permitted", "The law governing diplomatic immunity", "Customary international law", "Treaties between states"],
"options_hi": ["एक परम आदर्श जिससे कोई विचलन अनुमति नहीं है", "राजनयिक सुरक्षा को नियंत्रित करने वाले कानून को", "प्रथागत अंतरराष्ट्रीय कानून को", "राज्यों के बीच संधियों को"],
"answer_en": "A peremptory norm from which no derogation is permitted",
"answer_hi": "एक परम आदर्श जिससे कोई विचलन अनुमति नहीं है",
"attempted": false,
"selected": ""
}
];


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