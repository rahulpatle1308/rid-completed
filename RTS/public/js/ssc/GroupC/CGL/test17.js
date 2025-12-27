const questions = [
 {
   "num":1,
  question_en: "The 'Pale Blue Dot' is a famous photograph of Earth taken from which spacecraft?",
  question_hi: "'पेल ब्लू डॉट' पृथ्वी की एक प्रसिद्ध तस्वीर है जो किस अंतरिक्ष यान से ली गई थी?",
  options_en: ["Voyager 1", "Hubble Space Telescope", "Cassini", "Mars Rover"],
  options_hi: ["वॉयजर 1", "हबल स्पेस टेलीस्कोप", "कैसिनी", "मार्स रोवर"],
  answer_en: "Voyager 1",
  answer_hi: "वॉयजर 1",
  attempted: false,
  selected: ""
},
{
   "num":2,
  question_en: "Which Indian physicist is known for the 'Saha Ionization Equation'?",
  question_hi: "किस भारतीय भौतिक विज्ञानी को 'साहा आयनीकरण समीकरण' के लिए जाना जाता है?",
  options_en: ["Meghnad Saha", "C.V. Raman", "Satyendra Nath Bose", "Homi J. Bhabha"],
  options_hi: ["मेघनाद साहा", "सी.वी. रमन", "सत्येंद्र नाथ बोस", "होमी जे. भाभा"],
  answer_en: "Meghnad Saha",
  answer_hi: "मेघनाद साहा",
  attempted: false,
  selected: ""
},
{
   "num":3,
  question_en: "What is the term for the boundary between the Earth's crust and mantle?",
  question_hi: "पृथ्वी की पपड़ी और मेंटल के बीच की सीमा को क्या कहा जाता है?",
  options_en: ["Mohorovičić discontinuity", "Gutenberg discontinuity", "Lehmann discontinuity", "Conrad discontinuity"],
  options_hi: ["मोहोरोविकिअस असंततता", "गुटेनबर्ग असंततता", "लेहमैन असंततता", "कॉनराड असंततता"],
  answer_en: "Mohorovičić discontinuity",
  answer_hi: "मोहोरोविकिअस असंततता",
  attempted: false,
  selected: ""
},
{
   "num":4,
  question_en: "Which ancient Indian text contains the earliest known mention of the concept of zero?",
  question_hi: "किस प्राचीन भारतीय ग्रंथ में शून्य की अवधारणा का सबसे पहला ज्ञात उल्लेख है?",
  options_en: ["Vedas", "Aryabhatiya", "Bakhshali Manuscript", "Sulba Sutras"],
  options_hi: ["वेद", "आर्यभटीय", "बख्शाली पाण्डुलिपि", "शुल्ब सूत्र"],
  answer_en: "Bakhshali Manuscript",
  answer_hi: "बख्शाली पाण्डुलिपि",
  attempted: false,
  selected: ""
},
{
   "num":5,
  question_en: "The 'Great Attractor' is a gravitational anomaly in which direction from our galaxy?",
  question_hi: "'महान आकर्षक' हमारी आकाशगंगा से किस दिशा में एक गुरुत्वाकर्षण विसंगति है?",
  options_en: ["Towards the constellation Centaurus", "Towards Andromeda", "Towards Virgo Cluster", "Towards Orion"],
  options_hi: ["सेंटोरस तारामंडल की ओर", "एंड्रोमेडा की ओर", "कन्या समूह की ओर", "ओरियन की ओर"],
  answer_en: "Towards the constellation Centaurus",
  answer_hi: "सेंटोरस तारामंडल की ओर",
  attempted: false,
  selected: ""
},
{
   "num":6,
  question_en: "Who is credited with the discovery of the 'Raman Effect'?",
  question_hi: "'रमन प्रभाव' की खोज का श्रेय किसे दिया जाता है?",
  options_en: ["C.V. Raman", "S.N. Bose", "Homi Bhabha", "Jagadish Chandra Bose"],
  options_hi: ["सी.वी. रमन", "एस.एन. बोस", "होमी भाभा", "जगदीश चंद्र बोस"],
  answer_en: "C.V. Raman",
  answer_hi: "सी.वी. रमन",
  attempted: false,
  selected: ""
},
{
   "num":7,
  question_en: "The 'Doomsday Clock' is maintained by which organization?",
  question_hi: "'प्रलय घड़ी' किस संगठन द्वारा बनाए रखी जाती है?",
  options_en: ["Bulletin of the Atomic Scientists", "United Nations", "CERN", "NASA"],
  options_hi: ["बुलेटिन ऑफ द एटॉमिक साइंटिस्ट्स", "संयुक्त राष्ट्र", "सर्न", "नासा"],
  answer_en: "Bulletin of the Atomic Scientists",
  answer_hi: "बुलेटिन ऑफ द एटॉमिक साइंटिस्ट्स",
  attempted: false,
  selected: ""
},
{
   "num":8,
  question_en: "Which Indian mathematician contributed to the 'Hardy-Ramanujan number' 1729?",
  question_hi: "किस भारतीय गणितज्ञ ने 'हार्डी-रमनुजन संख्या' 1729 में योगदान दिया?",
  options_en: ["Srinivasa Ramanujan", "Aryabhata", "Bhaskara II", "Brahmagupta"],
  options_hi: ["श्रीनिवास रामानुजन", "आर्यभट्ट", "भास्कर द्वितीय", "ब्रह्मगुप्त"],
  answer_en: "Srinivasa Ramanujan",
  answer_hi: "श्रीनिवास रामानुजन",
  attempted: false,
  selected: ""
},
{
   "num":9,
  question_en: "The 'Kuiper Belt' is a region of the Solar System beyond the orbit of which planet?",
  question_hi: "'काइपर बेल्ट' सौर मंडल का एक क्षेत्र है जो किस ग्रह की कक्षा से परे है?",
  options_en: ["Neptune", "Uranus", "Saturn", "Pluto (dwarf planet)"],
  options_hi: ["वरुण", "अरुण", "शनि", "प्लूटो (बौना ग्रह)"],
  answer_en: "Neptune",
  answer_hi: "वरुण",
  attempted: false,
  selected: ""
},
{
   "num":10,
  question_en: "What is the term for the study of tree rings to determine past climatic conditions?",
  question_hi: "पिछली जलवायु परिस्थितियों का निर्धारण करने के लिए पेड़ के छल्लों के अध्ययन को क्या कहा जाता है?",
  options_en: ["Dendrochronology", "Dendrology", "Climatology", "Paleoclimatology"],
  options_hi: ["डेंड्रोक्रोनोलॉजी", "डेंड्रोलॉजी", "जलवायु विज्ञान", "पुराजलवायु विज्ञान"],
  answer_en: "Dendrochronology",
  answer_hi: "डेंड्रोक्रोनोलॉजी",
  attempted: false,
  selected: ""
},
{
   "num":11,
  question_en: "Who formulated the 'Chandrasekhar Limit'?",
  question_hi: "'चंद्रशेखर सीमा' किसने प्रतिपादित की?",
  options_en: ["Subrahmanyan Chandrasekhar", "Arthur Eddington", "Stephen Hawking", "Albert Einstein"],
  options_hi: ["सुब्रह्मण्यन चंद्रशेखर", "आर्थर एडिंगटन", "स्टीफन हॉकिंग", "अल्बर्ट आइंस्टीन"],
  answer_en: "Subrahmanyan Chandrasekhar",
  answer_hi: "सुब्रह्मण्यन चंद्रशेखर",
  attempted: false,
  selected: ""
},
{
   "num":12,
  question_en: "The 'Anthropocene' is a proposed geological epoch characterized by what?",
  question_hi: "'एंथ्रोपोसीन' एक प्रस्तावित भूवैज्ञानिक युग है जिसकी विशेषता क्या है?",
  options_en: ["Human impact on Earth's geology", "Ice Ages", "Dinosaur extinction", "Formation of continents"],
  options_hi: ["पृथ्वी की भूविज्ञान पर मानव प्रभाव", "हिम युग", "डायनासोर विलुप्ति", "महाद्वीपों का निर्माण"],
  answer_en: "Human impact on Earth's geology",
  answer_hi: "पृथ्वी की भूविज्ञान पर मानव प्रभाव",
  attempted: false,
  selected: ""
},
{
   "num":13,
  question_en: "Which Indian scientist is known for his work on 'Cherenkov radiation'?",
  question_hi: "किस भारतीय वैज्ञानिक को 'चेरेंकोव विकिरण' पर उनके काम के लिए जाना जाता है?",
  options_en: ["Homi J. Bhabha", "Vikram Sarabhai", "Satyendra Nath Bose", "Jagadish Chandra Bose"],
  options_hi: ["होमी जे. भाभा", "विक्रम साराभाई", "सत्येंद्र नाथ बोस", "जगदीश चंद्र बोस"],
  answer_en: "Homi J. Bhabha",
  answer_hi: "होमी जे. भाभा",
  attempted: false,
  selected: ""
},
{
   "num":14,
  question_en: "What is the name of the hypothetical particle that is its own antiparticle?",
  question_hi: "उस काल्पनिक कण का नाम क्या है जो अपना ही प्रतिकण है?",
  options_en: ["Majorana fermion", "Higgs boson", "Neutrino", "Quark"],
  options_hi: ["मेजोराना फर्मिऑन", "हिग्स बोसोन", "न्यूट्रिनो", "क्वार्क"],
  answer_en: "Majorana fermion",
  answer_hi: "मेजोराना फर्मिऑन",
  attempted: false,
  selected: ""
},
{
   "num":15,
  question_en: "The 'Parker Solar Probe' was launched to study which star?",
  question_hi: "'पार्कर सोलर प्रोब' किस तारे का अध्ययन करने के लिए लॉन्च किया गया था?",
  options_en: ["The Sun", "Proxima Centauri", "Sirius", "Alpha Centauri"],
  options_hi: ["सूर्य", "प्रॉक्सिमा सेंटॉरी", "सीरियस", "अल्फा सेंटॉरी"],
  answer_en: "The Sun",
  answer_hi: "सूर्य",
  attempted: false,
  selected: ""
},
{
   "num":16,
  question_en: "Who discovered the 'Neutron'?",
  question_hi: "'न्यूट्रॉन' की खोज किसने की?",
  options_en: ["James Chadwick", "Ernest Rutherford", "J.J. Thomson", "Niels Bohr"],
  options_hi: ["जेम्स चैडविक", "अर्नेस्ट रदरफोर्ड", "जे.जे. थॉमसन", "नील्स बोर"],
  answer_en: "James Chadwick",
  answer_hi: "जेम्स चैडविक",
  attempted: false,
  selected: ""
},
{
   "num":17,
  question_en: "What is the term for the theoretical boundary around a black hole beyond which nothing can escape?",
  question_hi: "ब्लैक होल के चारों ओर उस सैद्धांतिक सीमा को क्या कहा जाता है जिसके बाद कुछ भी बच नहीं सकता?",
  options_en: ["Event horizon", "Schwarzschild radius", "Accretion disk", "Singularity"],
  options_hi: ["घटना क्षितिज", "श्वार्ज़स्चिल्ड त्रिज्या", "संचय डिस्क", "विलक्षणता"],
  answer_en: "Event horizon",
  answer_hi: "घटना क्षितिज",
  attempted: false,
  selected: ""
},
{
   "num":18,
  question_en: "Which Indian astronomer wrote the 'Surya Siddhanta'?",
  question_hi: "किस भारतीय खगोलशास्त्री ने 'सूर्य सिद्धांत' लिखा?",
  options_en: ["Aryabhata", "Varahamihira", "Bhaskara I", "Unknown ancient authors"],
  options_hi: ["आर्यभट्ट", "वराहमिहिर", "भास्कर प्रथम", "अज्ञात प्राचीन लेखक"],
  answer_en: "Unknown ancient authors",
  answer_hi: "अज्ञात प्राचीन लेखक",
  attempted: false,
  selected: ""
},
{
   "num":19,
  question_en: "The 'Olbers' Paradox' questions why the night sky is dark despite the infinite universe. Who formulated it?",
  question_hi: "'ओल्बर्स का विरोधाभास' इस सवाल को उठाता है कि अनंत ब्रह्मांड होने के बावजूद रात का आकाश अंधेरा क्यों है। इसे किसने प्रतिपादित किया?",
  options_en: ["Heinrich Wilhelm Olbers", "Johannes Kepler", "Isaac Newton", "Edmond Halley"],
  options_hi: ["हेनरिक विल्हेम ओल्बर्स", "जोहान्स केप्लर", "आइजैक न्यूटन", "एडमंड हैली"],
  answer_en: "Heinrich Wilhelm Olbers",
  answer_hi: "हेनरिक विल्हेम ओल्बर्स",
  attempted: false,
  selected: ""
},
{
   "num":20,
  question_en: "What is the term for the hypothetical form of matter that makes up most of the universe's mass?",
  question_hi: "उस काल्पनिक पदार्थ को क्या कहा जाता है जो ब्रह्मांड के अधिकांश द्रव्यमान का निर्माण करता है?",
  options_en: ["Dark matter", "Dark energy", "Antimatter", "Baryonic matter"],
  options_hi: ["डार्क मैटर", "डार्क एनर्जी", "प्रतिपदार्थ", "बेरिऑनिक पदार्थ"],
  answer_en: "Dark matter",
  answer_hi: "डार्क मैटर",
  attempted: false,
  selected: ""
},
{
   "num":21,
  question_en: "Who is known for the 'Bose-Einstein statistics'?",
  question_hi: "'बोस-आइंस्टीन सांख्यिकी' के लिए कौन जाने जाते हैं?",
  options_en: ["Satyendra Nath Bose", "Albert Einstein", "Both Satyendra Nath Bose and Albert Einstein", "Enrico Fermi"],
  options_hi: ["सत्येंद्र नाथ बोस", "अल्बर्ट आइंस्टीन", "सत्येंद्र नाथ बोस और अल्बर्ट आइंस्टीन दोनों", "एनरिको फर्मी"],
  answer_en: "Both Satyendra Nath Bose and Albert Einstein",
  answer_hi: "सत्येंद्र नाथ बोस और अल्बर्ट आइंस्टीन दोनों",
  attempted: false,
  selected: ""
},
{
   "num":22,
  question_en: "The 'Great Oxidation Event' occurred approximately how many years ago?",
  question_hi: "'महान ऑक्सीकरण घटना' लगभग कितने वर्ष पूर्व हुई थी?",
  options_en: ["2.4 billion years ago", "540 million years ago", "65 million years ago", "200,000 years ago"],
  options_hi: ["2.4 अरब वर्ष पूर्व", "540 मिलियन वर्ष पूर्व", "65 मिलियन वर्ष पूर्व", "200,000 वर्ष पूर्व"],
  answer_en: "2.4 billion years ago",
  answer_hi: "2.4 अरब वर्ष पूर्व",
  attempted: false,
  selected: ""
},
{
   "num":23,
  question_en: "Which Indian scientist is known for the 'Raman–Nath diffraction'?",
  question_hi: "किस भारतीय वैज्ञानिक को 'रमन-नाथ विवर्तन' के लिए जाना जाता है?",
  options_en: ["C.V. Raman and S. N. Nath", "Homi Bhabha", "Vikram Sarabhai", "Meghnad Saha"],
  options_hi: ["सी.वी. रमन और एस. एन. नाथ", "होमी भाभा", "विक्रम साराभाई", "मेघनाद साहा"],
  answer_en: "C.V. Raman and S. N. Nath",
  answer_hi: "सी.वी. रमन और एस. एन. नाथ",
  attempted: false,
  selected: ""
},
{
   "num":24,
  question_en: "What is the term for the point in an orbit closest to the Earth?",
  question_hi: "पृथ्वी के सबसे निकट की कक्षा के बिंदु को क्या कहा जाता है?",
  options_en: ["Perigee", "Apogee", "Perihelion", "Aphelion"],
  options_hi: ["उपभू", "अपभू", "सूर्य के निकटतम बिंदु", "सूर्य से सबसे दूर बिंदु"],
  answer_en: "Perigee",
  answer_hi: "उपभू",
  attempted: false,
  selected: ""
},
{
   "num":25,
  question_en: "Who proposed the 'Gaia Hypothesis'?",
  question_hi: "'गैया परिकल्पना' किसने प्रस्तावित की?",
  options_en: ["James Lovelock", "Lynn Margulis", "Charles Darwin", "Rachel Carson"],
  options_hi: ["जेम्स लवलॉक", "लिन मार्गुलिस", "चार्ल्स डार्विन", "रेचल कार्सन"],
  answer_en: "James Lovelock",
  answer_hi: "जेम्स लवलॉक",
  attempted: false,
  selected: ""
},
{
   "num":26,
  question_en: "The 'M-theory' is an extension of which theory in physics?",
  question_hi: "'एम-सिद्धांत' भौतिकी में किस सिद्धांत का विस्तार है?",
  options_en: ["String theory", "Quantum mechanics", "General relativity", "Thermodynamics"],
  options_hi: ["स्ट्रिंग थ्योरी", "क्वांटम यांत्रिकी", "सामान्य सापेक्षता", "ऊष्मागतिकी"],
  answer_en: "String theory",
  answer_hi: "स्ट्रिंग थ्योरी",
  attempted: false,
  selected: ""
},
{
   "num":27,
  question_en: "Which Indian mathematician is known for the 'Kaprekar constant' 6174?",
  question_hi: "किस भारतीय गणितज्ञ को 'कापरेकर स्थिरांक' 6174 के लिए जाना जाता है?",
  options_en: ["D.R. Kaprekar", "Srinivasa Ramanujan", "Bhaskara II", "Aryabhata"],
  options_hi: ["डी.आर. कापरेकर", "श्रीनिवास रामानुजन", "भास्कर द्वितीय", "आर्यभट्ट"],
  answer_en: "D.R. Kaprekar",
  answer_hi: "डी.आर. कापरेकर",
  attempted: false,
  selected: ""
},
{
   "num":28,
  question_en: "What is the term for the hypothetical 'fifth state of matter'?",
  question_hi: "काल्पनिक 'पदार्थ की पांचवी अवस्था' को क्या कहा जाता है?",
  options_en: ["Bose–Einstein condensate", "Plasma", "Superfluid", "Quark–gluon plasma"],
  options_hi: ["बोस-आइंस्टीन कंडेनसेट", "प्लाज्मा", "सुपरफ्लुइड", "क्वार्क-ग्लूऑन प्लाज्मा"],
  answer_en: "Bose–Einstein condensate",
  answer_hi: "बोस-आइंस्टीन कंडेनसेट",
  attempted: false,
  selected: ""
},
{
   "num":29,
  question_en: "The 'Voynich Manuscript' is famous for being written in what?",
  question_hi: "'वॉयनिच पांडुलिपि' किस में लिखे जाने के लिए प्रसिद्ध है?",
  options_en: ["An unknown script and language", "Sanskrit", "Latin code", "Egyptian hieroglyphs"],
  options_hi: ["एक अज्ञात लिपि और भाषा", "संस्कृत", "लैटिन कोड", "मिस्र की चित्रलिपि"],
  answer_en: "An unknown script and language",
  answer_hi: "एक अज्ञात लिपि और भाषा",
  attempted: false,
  selected: ""
},
{
   "num":30,
  question_en: "Who discovered the 'Cosmic Microwave Background Radiation'?",
  question_hi: "'कोस्मिक माइक्रोवेव बैकग्राउंड रेडिएशन' की खोज किसने की?",
  options_en: ["Arno Penzias and Robert Wilson", "Edwin Hubble", "George Gamow", "Albert Einstein"],
  options_hi: ["आर्नो पेन्ज़ियस और रॉबर्ट विल्सन", "एडविन हबल", "जॉर्ज गैमो", "अल्बर्ट आइंस्टीन"],
  answer_en: "Arno Penzias and Robert Wilson",
  answer_hi: "आर्नो पेन्ज़ियस और रॉबर्ट विल्सन",
  attempted: false,
  selected: ""
},
{
   "num":31,
  question_en: "Which Indian scientist is known for the 'Bhabha scattering'?",
  question_hi: "किस भारतीय वैज्ञानिक को 'भाभा प्रकीर्णन' के लिए जाना जाता है?",
  options_en: ["Homi J. Bhabha", "C.V. Raman", "Satyendra Nath Bose", "Vikram Sarabhai"],
  options_hi: ["होमी जे. भाभा", "सी.वी. रमन", "सत्येंद्र नाथ बोस", "विक्रम साराभाई"],
  answer_en: "Homi J. Bhabha",
  answer_hi: "होमी जे. भाभा",
  attempted: false,
  selected: ""
},
{
   "num":32,
  question_en: "What is the term for the theoretical 'island of stability' in the periodic table?",
  question_hi: "आवर्त सारणी में सैद्धांतिक 'स्थिरता द्वीप' को क्या कहा जाता है?",
  options_en: ["A region of superheavy elements with relatively long half-lives", "Group 18 elements", "Lanthanides", "Actinides"],
  options_hi: ["अपेक्षाकृत लंबे अर्ध-जीवन वाले अतिभारी तत्वों का क्षेत्र", "समूह 18 के तत्व", "लैन्थेनाइड्स", "एक्टिनाइड्स"],
  answer_en: "A region of superheavy elements with relatively long half-lives",
  answer_hi: "अपेक्षाकृत लंबे अर्ध-जीवन वाले अतिभारी तत्वों का क्षेत्र",
  attempted: false,
  selected: ""
},
{
   "num":33,
  question_en: "The 'Anthropic Principle' in cosmology suggests what?",
  question_hi: "ब्रह्माण्ड विज्ञान में 'मानवीय सिद्धांत' क्या सुझाता है?",
  options_en: ["The universe is fine-tuned for the existence of life", "Humans are the center of the universe", "The universe is infinite", "Life is rare in the universe"],
  options_hi: ["ब्रह्मांड जीवन के अस्तित्व के लिए सूक्ष्म रूप से समायोजित है", "मानव ब्रह्मांड के केंद्र में हैं", "ब्रह्मांड अनंत है", "ब्रह्मांड में जीवन दुर्लभ है"],
  answer_en: "The universe is fine-tuned for the existence of life",
  answer_hi: "ब्रह्मांड जीवन के अस्तित्व के लिए सूक्ष्म रूप से समायोजित है",
  attempted: false,
  selected: ""
},
{
   "num":34,
  question_en: "Who is known for the 'Satyendra Nath Bose–Albert Einstein condensate'?",
  question_hi: "'सत्येंद्र नाथ बोस-अल्बर्ट आइंस्टीन संक्षेपण' के लिए कौन जाने जाते हैं?",
  options_en: ["Satyendra Nath Bose and Albert Einstein", "C.V. Raman", "Homi Bhabha", "Meghnad Saha"],
  options_hi: ["सत्येंद्र नाथ बोस और अल्बर्ट आइंस्टीन", "सी.वी. रमन", "होमी भाभा", "मेघनाद साहा"],
  answer_en: "Satyendra Nath Bose and Albert Einstein",
  answer_hi: "सत्येंद्र नाथ बोस और अल्बर्ट आइंस्टीन",
  attempted: false,
  selected: ""
},
{
   "num":35,
  question_en: "The 'Paleocene-Eocene Thermal Maximum' (PETM) was a period of rapid global warming about how many million years ago?",
  question_hi: "'पैलियोसीन-इयोसीन थर्मल मैक्सिमम' (PETM) लगभग कितने मिलियन वर्ष पूर्व तीव्र ग्लोबल वार्मिंग की अवधि थी?",
  options_en: ["56 million years ago", "65 million years ago", "100 million years ago", "200 million years ago"],
  options_hi: ["56 मिलियन वर्ष पूर्व", "65 मिलियन वर्ष पूर्व", "100 मिलियन वर्ष पूर्व", "200 मिलियन वर्ष पूर्व"],
  answer_en: "56 million years ago",
  answer_hi: "56 मिलियन वर्ष पूर्व",
  attempted: false,
  selected: ""
},
{
   "num":36,
  question_en: "Which Indian physicist is known for the 'Pancharatnam–Berry phase'?",
  question_hi: "किस भारतीय भौतिक विज्ञानी को 'पंचरत्नम-बेरी चरण' के लिए जाना जाता है?",
  options_en: ["S. Pancharatnam", "C.V. Raman", "Homi Bhabha", "Vikram Sarabhai"],
  options_hi: ["एस. पंचरत्नम", "सी.वी. रमन", "होमी भाभा", "विक्रम साराभाई"],
  answer_en: "S. Pancharatnam",
  answer_hi: "एस. पंचरत्नम",
  attempted: false,
  selected: ""
},
{
   "num":37,
  question_en: "What is the term for the hypothetical 'ninth planet' in our solar system?",
  question_hi: "हमारे सौर मंडल में काल्पनिक 'नौवें ग्रह' को क्या कहा जाता है?",
  options_en: ["Planet Nine", "Nibiru", "Planet X", "Eris"],
  options_hi: ["ग्रह नौ", "निबिरु", "ग्रह एक्स", "एरिस"],
  answer_en: "Planet Nine",
  answer_hi: "ग्रह नौ",
  attempted: false,
  selected: ""
},
{
   "num":38,
  question_en: "The 'Medieval Warm Period' occurred during which centuries?",
  question_hi: "'मध्यकालीन गर्म अवधि' किस शताब्दी के दौरान हुई?",
  options_en: ["Approximately 950–1250 AD", "Approximately 1350–1850 AD", "Approximately 500–800 AD", "Approximately 1500–1700 AD"],
  options_hi: ["लगभग 950–1250 ईस्वी", "लगभग 1350–1850 ईस्वी", "लगभग 500–800 ईस्वी", "लगभग 1500–1700 ईस्वी"],
  answer_en: "Approximately 950–1250 AD",
  answer_hi: "लगभग 950–1250 ईस्वी",
  attempted: false,
  selected: ""
},
{
   "num":39,
  question_en: "Who discovered the 'Positron'?",
  question_hi: "'पॉजिट्रॉन' की खोज किसने की?",
  options_en: ["Carl David Anderson", "Paul Dirac", "J.J. Thomson", "Ernest Rutherford"],
  options_hi: ["कार्ल डेविड एंडरसन", "पॉल डिराक", "जे.जे. थॉमसन", "अर्नेस्ट रदरफोर्ड"],
  answer_en: "Carl David Anderson",
  answer_hi: "कार्ल डेविड एंडरसन",
  attempted: false,
  selected: ""
},
{
   "num":40,
  question_en: "The 'Schrödinger's cat' thought experiment is related to which concept in quantum mechanics?",
  question_hi: "'श्रोडिंगर की बिल्ली' विचार प्रयोग क्वांटम यांत्रिकी में किस अवधारणा से संबंधित है?",
  options_en: ["Quantum superposition", "Quantum entanglement", "Wave-particle duality", "Uncertainty principle"],
  options_hi: ["क्वांटम सुपरपोजिशन", "क्वांटम उलझन", "तरंग-कण द्वैत", "अनिश्चितता सिद्धांत"],
  answer_en: "Quantum superposition",
  answer_hi: "क्वांटम सुपरपोजिशन",
  attempted: false,
  selected: ""
},
{
   "num":41,
  question_en: "Which Indian mathematician is known for the 'Madhava series' for π?",
  question_hi: "किस भारतीय गणितज्ञ को π के लिए 'माधव श्रृंखला' के लिए जाना जाता है?",
  options_en: ["Madhava of Sangamagrama", "Bhaskara II", "Aryabhata", "Brahmagupta"],
  options_hi: ["संगमग्राम के माधव", "भास्कर द्वितीय", "आर्यभट्ट", "ब्रह्मगुप्त"],
  answer_en: "Madhava of Sangamagrama",
  answer_hi: "संगमग्राम के माधव",
  attempted: false,
  selected: ""
},
{
   "num":42,
  question_en: "What is the term for the hypothetical 'white holes' in cosmology?",
  question_hi: "ब्रह्माण्ड विज्ञान में काल्पनिक 'सफेद छिद्रों' को क्या कहा जाता है?",
  options_en: ["The time-reversal of a black hole", "Wormholes", "Neutron stars", "Pulsars"],
  options_hi: ["ब्लैक होल का समय उलटा", "वर्महोल", "न्यूट्रॉन तारे", "पल्सर"],
  answer_en: "The time-reversal of a black hole",
  answer_hi: "ब्लैक होल का समय उलटा",
  attempted: false,
  selected: ""
},
{
   "num":43,
  question_en: "The 'Tully–Fisher relation' is used in astronomy to measure what?",
  question_hi: "'टली-फिशर संबंध' का उपयोग खगोल विज्ञान में क्या मापने के लिए किया जाता है?",
  options_en: ["Distances to galaxies", "Mass of black holes", "Age of stars", "Composition of nebulae"],
  options_hi: ["आकाशगंगाओं की दूरी", "ब्लैक होल का द्रव्यमान", "तारों की आयु", "निहारिकाओं की संरचना"],
  answer_en: "Distances to galaxies",
  answer_hi: "आकाशगंगाओं की दूरी",
  attempted: false,
  selected: ""
},
{
   "num":44,
  question_en: "Who is known for the 'Hawking radiation'?",
  question_hi: "'हॉकिंग विकिरण' के लिए कौन जाने जाते हैं?",
  options_en: ["Stephen Hawking", "Albert Einstein", "Roger Penrose", "Kip Thorne"],
  options_hi: ["स्टीफन हॉकिंग", "अल्बर्ट आइंस्टीन", "रोजर पेनरोज़", "किप थॉर्न"],
  answer_en: "Stephen Hawking",
  answer_hi: "स्टीफन हॉकिंग",
  attempted: false,
  selected: ""
},
{
   "num":45,
  question_en: "The 'Permian–Triassic extinction event' is also known as what?",
  question_hi: "'पर्मियन-ट्राइऐसिक विलुप्ति घटना' को और क्या कहा जाता है?",
  options_en: ["The Great Dying", "The K-T extinction", "The Ordovician extinction", "The Devonian extinction"],
  options_hi: ["महान मृत्यु", "के-टी विलुप्ति", "ऑर्डोविशियन विलुप्ति", "डेवोनियन विलुप्ति"],
  answer_en: "The Great Dying",
  answer_hi: "महान मृत्यु",
  attempted: false,
  selected: ""
},
{
   "num":46,
  question_en: "Which Indian scientist is known for the 'Saha ionization equation'?",
  question_hi: "किस भारतीय वैज्ञानिक को 'साहा आयनीकरण समीकरण' के लिए जाना जाता है?",
  options_en: ["Meghnad Saha", "C.V. Raman", "Satyendra Nath Bose", "Homi J. Bhabha"],
  options_hi: ["मेघनाद साहा", "सी.वी. रमन", "सत्येंद्र नाथ बोस", "होमी जे. भाभा"],
  answer_en: "Meghnad Saha",
  answer_hi: "मेघनाद साहा",
  attempted: false,
  selected: ""
},
{
   "num":47,
  question_en: "What is the term for the theoretical 'multiverse' concept?",
  question_hi: "सैद्धांतिक 'मल्टीवर्स' अवधारणा को क्या कहा जाता है?",
  options_en: ["A hypothetical group of multiple universes", "Parallel dimensions", "Alternate timelines", "All of the above"],
  options_hi: ["एक काल्पनिक बहु ब्रह्मांडों का समूह", "समानांतर आयाम", "वैकल्पिक समयरेखा", "उपरोक्त सभी"],
  answer_en: "All of the above",
  answer_hi: "उपरोक्त सभी",
  attempted: false,
  selected: ""
},
{
   "num":48,
  question_en: "The 'Holocene extinction' is also known as what?",
  question_hi: "'होलोसीन विलुप्ति' को और क्या कहा जाता है?",
  options_en: ["The Sixth Extinction", "The Fifth Extinction", "The Anthropocene extinction", "The Modern extinction"],
  options_hi: ["छठी विलुप्ति", "पांचवीं विलुप्ति", "एंथ्रोपोसीन विलुप्ति", "आधुनिक विलुप्ति"],
  answer_en: "The Sixth Extinction",
  answer_hi: "छठी विलुप्ति",
  attempted: false,
  selected: ""
},
{
   "num":49,
  question_en: "Who proposed the 'Many-worlds interpretation' of quantum mechanics?",
  question_hi: "क्वांटम यांत्रिकी की 'मेनी-वर्ल्ड्स व्याख्या' किसने प्रस्तावित की?",
  options_en: ["Hugh Everett", "Niels Bohr", "Erwin Schrödinger", "Werner Heisenberg"],
  options_hi: ["ह्यू एवरेट", "नील्स बोर", "अरविन श्रोडिंगर", "वर्नर हाइजेनबर्ग"],
  answer_en: "Hugh Everett",
  answer_hi: "ह्यू एवरेट",
  attempted: false,
  selected: ""
},
{
   "num":50,
  question_en: "The 'Fermi Paradox' questions why we haven't found evidence of what?",
  question_hi: "'फर्मि विरोधाभास' इस सवाल को उठाता है कि हमें किसका सबूत क्यों नहीं मिला?",
  options_en: ["Extraterrestrial civilizations", "Dark matter", "Parallel universes", "The Big Bang"],
  options_hi: ["अलौकिक सभ्यताएं", "डार्क मैटर", "समानांतर ब्रह्मांड", "बिग बैंग"],
  answer_en: "Extraterrestrial civilizations",
  answer_hi: "अलौकिक सभ्यताएं",
  attempted: false,
  selected: ""
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