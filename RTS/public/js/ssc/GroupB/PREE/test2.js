const questions = [
  {
    "num": 1,
    "question_en": "Which principle explains why ships float in water?",
    "question_hi": "कौन सा सिद्धांत बताता है कि जहाज पानी में क्यों तैरते हैं?",
    "options_en": ["Bernoulli's principle", "Archimedes' principle", "Pascal's law", "Newton's third law"],
    "options_hi": ["बर्नौली का सिद्धांत", "आर्किमिडीज का सिद्धांत", "पास्कल का नियम", "न्यूटन का तीसरा नियम"],
    "answer_en": "Archimedes' principle",
    "answer_hi": "आर्किमिडीज का सिद्धांत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the value of \( \int \cos x \, dx \)?",
    "question_hi": "\( \int \cos x \, dx \) का मान क्या है?",
    "options_en": ["sin x + C", "-sin x + C", "cos x + C", "-cos x + C"],
    "options_hi": ["sin x + C", "-sin x + C", "cos x + C", "-cos x + C"],
    "answer_en": "sin x + C",
    "answer_hi": "sin x + C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "The unit of frequency is:",
    "question_hi": "आवृत्ति की इकाई है:",
    "options_en": ["Hertz", "Decibel", "Watt", "Joule"],
    "options_hi": ["हर्ट्ज", "डेसिबल", "वाट", "जूल"],
    "answer_en": "Hertz",
    "answer_hi": "हर्ट्ज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the solution of \( 2x + 5 = 15 \)?",
    "question_hi": "\( 2x + 5 = 15 \) का हल क्या है?",
    "options_en": ["x = 5", "x = 10", "x = 15", "x = 20"],
    "options_hi": ["x = 5", "x = 10", "x = 15", "x = 20"],
    "answer_en": "x = 5",
    "answer_hi": "x = 5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which lens is used to correct myopia?",
    "question_hi": "निकटदृष्टि को ठीक करने के लिए कौन सा लेंस उपयोग किया जाता है?",
    "options_en": ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"],
    "options_hi": ["उत्तल लेंस", "अवतल लेंस", "बेलनाकार लेंस", "द्विफोकसी लेंस"],
    "answer_en": "Concave lens",
    "answer_hi": "अवतल लेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the value of \( 8! / 6! \)?",
    "question_hi": "\( 8! / 6! \) का मान क्या है?",
    "options_en": ["48", "56", "64", "72"],
    "options_hi": ["48", "56", "64", "72"],
    "answer_en": "56",
    "answer_hi": "56",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "The resistance of a wire depends on:",
    "question_hi": "एक तार का प्रतिरोध निर्भर करता है:",
    "options_en": ["Length", "Area of cross-section", "Material", "All of the above"],
    "options_hi": ["लंबाई", "अनुप्रस्थ काट का क्षेत्रफल", "सामग्री", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the value of \( \tan 45^\circ \)?",
    "question_hi": "\( \tan 45^\circ \) का मान क्या है?",
    "options_en": ["0", "1", "√3", "1/√3"],
    "options_hi": ["0", "1", "√3", "1/√3"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which electromagnetic radiation is used for satellite communication?",
    "question_hi": "उपग्रह संचार के लिए किस विद्युत चुंबकीय विकिरण का उपयोग किया जाता है?",
    "options_en": ["Radio waves", "Microwaves", "Infrared", "X-rays"],
    "options_hi": ["रेडियो तरंगें", "माइक्रोवेव", "अवरक्त", "एक्स-रे"],
    "answer_en": "Microwaves",
    "answer_hi": "माइक्रोवेव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "If \( a:b = 2:3 \) and \( b:c = 4:5 \), what is \( a:c \)?",
    "question_hi": "यदि \( a:b = 2:3 \) और \( b:c = 4:5 \), तो \( a:c \) क्या है?",
    "options_en": ["8:15", "3:4", "5:8", "2:5"],
    "options_hi": ["8:15", "3:4", "5:8", "2:5"],
    "answer_en": "8:15",
    "answer_hi": "8:15",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "The phenomenon of splitting of white light into its constituent colors is called:",
    "question_hi": "सफेद प्रकाश का उसके घटक रंगों में विभाजन की घटना कहलाती है:",
    "options_en": ["Reflection", "Refraction", "Dispersion", "Scattering"],
    "options_hi": ["परावर्तन", "अपवर्तन", "विक्षेपण", "प्रकीर्णन"],
    "answer_en": "Dispersion",
    "answer_hi": "विक्षेपण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the derivative of \( \sin(2x) \)?",
    "question_hi": "\( \sin(2x) \) का अवकलज क्या है?",
    "options_en": ["2 cos(2x)", "cos(2x)", "2 sin(2x)", "-2 cos(2x)"],
    "options_hi": ["2 cos(2x)", "cos(2x)", "2 sin(2x)", "-2 cos(2x)"],
    "answer_en": "2 cos(2x)",
    "answer_hi": "2 cos(2x)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "The SI unit of electric charge is:",
    "question_hi": "विद्युत आवेश की SI इकाई है:",
    "options_en": ["Ampere", "Coulomb", "Volt", "Ohm"],
    "options_hi": ["एम्पियर", "कूलॉम", "वोल्ट", "ओम"],
    "answer_en": "Coulomb",
    "answer_hi": "कूलॉम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the sum of the interior angles of a hexagon?",
    "question_hi": "एक षट्भुज के आंतरिक कोणों का योग क्या है?",
    "options_en": ["540°", "720°", "900°", "1080°"],
    "options_hi": ["540°", "720°", "900°", "1080°"],
    "answer_en": "720°",
    "answer_hi": "720°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which law states that the volume of a gas is inversely proportional to its pressure at constant temperature?",
    "question_hi": "कौन सा नियम कहता है कि नियत तापमान पर गैस का आयतन उसके दाब के व्युत्क्रमानुपाती होता है?",
    "options_en": ["Charles' law", "Boyle's law", "Gay-Lussac's law", "Avogadro's law"],
    "options_hi": ["चार्ल्स का नियम", "बॉयल का नियम", "गे-लुसाक का नियम", "अवोगाद्रो का नियम"],
    "answer_en": "Boyle's law",
    "answer_hi": "बॉयल का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the value of \( (a+b)^2 - (a-b)^2 \)?",
    "question_hi": "\( (a+b)^2 - (a-b)^2 \) का मान क्या है?",
    "options_en": ["2ab", "4ab", "2a²", "2b²"],
    "options_hi": ["2ab", "4ab", "2a²", "2b²"],
    "answer_en": "4ab",
    "answer_hi": "4ab",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "The image formed by a plane mirror is always:",
    "question_hi": "समतल दर्पण द्वारा बना प्रतिबिंब हमेशा होता है:",
    "options_en": ["Real and inverted", "Virtual and erect", "Real and erect", "Virtual and inverted"],
    "options_hi": ["वास्तविक और उल्टा", "आभासी और सीधा", "वास्तविक और सीधा", "आभासी और उल्टा"],
    "answer_en": "Virtual and erect",
    "answer_hi": "आभासी और सीधा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the probability of getting a prime number when a die is rolled?",
    "question_hi": "एक पासा फेंकने पर एक अभाज्य संख्या आने की प्रायिकता क्या है?",
    "options_en": ["1/6", "1/3", "1/2", "2/3"],
    "options_hi": ["1/6", "1/3", "1/2", "2/3"],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "The device that converts mechanical energy into electrical energy is:",
    "question_hi": "वह उपकरण जो यांत्रिक ऊर्जा को विद्युत ऊर्जा में बदलता है:",
    "options_en": ["Motor", "Generator", "Transformer", "Rectifier"],
    "options_hi": ["मोटर", "जनरेटर", "ट्रांसफार्मर", "दिष्टकारी"],
    "answer_en": "Generator",
    "answer_hi": "जनरेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the LCM of 12 and 18?",
    "question_hi": "12 और 18 का लघुत्तम समापवर्त्य (LCM) क्या है?",
    "options_en": ["24", "36", "48", "72"],
    "options_hi": ["24", "36", "48", "72"],
    "answer_en": "36",
    "answer_hi": "36",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which color of light has the maximum wavelength?",
    "question_hi": "किस रंग के प्रकाश की तरंगदैर्ध्य अधिकतम होती है?",
    "options_en": ["Red", "Green", "Blue", "Violet"],
    "options_hi": ["लाल", "हरा", "नीला", "बैंगनी"],
    "answer_en": "Red",
    "answer_hi": "लाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the value of \( \frac{d}{dx}(e^{x^2}) \)?",
    "question_hi": "\( \frac{d}{dx}(e^{x^2}) \) का मान क्या है?",
    "options_en": ["2x e^{x^2}", "e^{x^2}", "2e^{x^2}", "x^2 e^{x^2}"],
    "options_hi": ["2x e^{x^2}", "e^{x^2}", "2e^{x^2}", "x^2 e^{x^2}"],
    "answer_en": "2x e^{x^2}",
    "answer_hi": "2x e^{x^2}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "The phenomenon due to which a solid changes directly into vapor is called:",
    "question_hi": "वह घटना जिसके कारण एक ठोस सीधे वाष्प में बदल जाता है, कहलाती है:",
    "options_en": ["Evaporation", "Condensation", "Sublimation", "Fusion"],
    "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "द्रवीकरण"],
    "answer_en": "Sublimation",
    "answer_hi": "उर्ध्वपातन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the value of \( \sin^2 \theta + \cos^2 \theta \)?",
    "question_hi": "\( \sin^2 \theta + \cos^2 \theta \) का मान क्या है?",
    "options_en": ["0", "1", "tan θ", "sec θ"],
    "options_hi": ["0", "1", "tan θ", "sec θ"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which instrument is used to measure electric potential difference?",
    "question_hi": "विद्युत विभवांतर मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Ammeter", "Voltmeter", "Galvanometer", "Ohmmeter"],
    "options_hi": ["एमीटर", "वोल्टमीटर", "गैल्वेनोमीटर", "ओममीटर"],
    "answer_en": "Voltmeter",
    "answer_hi": "वोल्टमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the area of a triangle with base 10 cm and height 6 cm?",
    "question_hi": "आधार 10 सेमी और ऊंचाई 6 सेमी वाले त्रिभुज का क्षेत्रफल क्या है?",
    "options_en": ["30 cm²", "60 cm²", "16 cm²", "20 cm²"],
    "options_hi": ["30 सेमी²", "60 सेमी²", "16 सेमी²", "20 सेमी²"],
    "answer_en": "30 cm²",
    "answer_hi": "30 सेमी²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "The process by which plants make their food is called:",
    "question_hi": "वह प्रक्रिया जिससे पौधे अपना भोजन बनाते हैं, कहलाती है:",
    "options_en": ["Respiration", "Photosynthesis", "Transpiration", "Digestion"],
    "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "पाचन"],
    "answer_en": "Photosynthesis",
    "answer_hi": "प्रकाश संश्लेषण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the value of \( \log_{10} 1 \)?",
    "question_hi": "\( \log_{10} 1 \) का मान क्या है?",
    "options_en": ["0", "1", "10", "Undefined"],
    "options_hi": ["0", "1", "10", "अपरिभाषित"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which type of mirror is used in solar cookers?",
    "question_hi": "सौर कुकर में किस प्रकार के दर्पण का उपयोग किया जाता है?",
    "options_en": ["Plane mirror", "Concave mirror", "Convex mirror", "Spherical mirror"],
    "options_hi": ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "गोलीय दर्पण"],
    "answer_en": "Concave mirror",
    "answer_hi": "अवतल दर्पण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the solution of the equation \( x^2 + 4x + 4 = 0 \)?",
    "question_hi": "समीकरण \( x^2 + 4x + 4 = 0 \) का हल क्या है?",
    "options_en": ["x = 2", "x = -2", "x = 4", "x = -4"],
    "options_hi": ["x = 2", "x = -2", "x = 4", "x = -4"],
    "answer_en": "x = -2",
    "answer_hi": "x = -2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "The unit of power is:",
    "question_hi": "शक्ति की इकाई है:",
    "options_en": ["Joule", "Watt", "Newton", "Pascal"],
    "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
    "answer_en": "Watt",
    "answer_hi": "वाट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the value of \( \int_0^{\pi} \sin x \, dx \)?",
    "question_hi": "\( \int_0^{\pi} \sin x \, dx \) का मान क्या है?",
    "options_en": ["0", "1", "2", "π"],
    "options_hi": ["0", "1", "2", "π"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which gas is most abundant in the Earth's atmosphere?",
    "question_hi": "पृथ्वी के वायुमंडल में कौन सी गैस सबसे अधिक मात्रा में पाई जाती है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "आर्गन"],
    "answer_en": "Nitrogen",
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the value of \( 1 + 2 + 3 + ... + 20 \)?",
    "question_hi": "\( 1 + 2 + 3 + ... + 20 \) का मान क्या है?",
    "options_en": ["200", "210", "220", "230"],
    "options_hi": ["200", "210", "220", "230"],
    "answer_en": "210",
    "answer_hi": "210",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "The process of charging a conductor by bringing it near another charged conductor without touching is called:",
    "question_hi": "बिना छुए किसी आवेशित चालक के पास लाकर एक चालक को आवेशित करने की प्रक्रिया कहलाती है:",
    "options_en": ["Conduction", "Induction", "Friction", "Polarization"],
    "options_hi": ["चालन", "प्रेरण", "घर्षण", "ध्रुवण"],
    "answer_en": "Induction",
    "answer_hi": "प्रेरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the value of \( \sqrt{2} \times \sqrt{8} \)?",
    "question_hi": "\( \sqrt{2} \times \sqrt{8} \) का मान क्या है?",
    "options_en": ["2", "4", "8", "16"],
    "options_hi": ["2", "4", "8", "16"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "The substance that allows electric current to pass through it easily is called:",
    "question_hi": "वह पदार्थ जो विद्युत धारा को आसानी से गुजरने देता है, कहलाता है:",
    "options_en": ["Insulator", "Conductor", "Semiconductor", "Resistor"],
    "options_hi": ["कुचालक", "चालक", "अर्धचालक", "प्रतिरोधक"],
    "answer_en": "Conductor",
    "answer_hi": "चालक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the volume of a cube with side 5 cm?",
    "question_hi": "5 सेमी भुजा वाले घन का आयतन क्या है?",
    "options_en": ["25 cm³", "100 cm³", "125 cm³", "150 cm³"],
    "options_hi": ["25 सेमी³", "100 सेमी³", "125 सेमी³", "150 सेमी³"],
    "answer_en": "125 cm³",
    "answer_hi": "125 सेमी³",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which law of motion is also called the law of inertia?",
    "question_hi": "गति का कौन सा नियम जड़त्व के नियम के रूप में भी जाना जाता है?",
    "options_en": ["First law", "Second law", "Third law", "Law of gravitation"],
    "options_hi": ["प्रथम नियम", "द्वितीय नियम", "तृतीय नियम", "गुरुत्वाकर्षण का नियम"],
    "answer_en": "First law",
    "answer_hi": "प्रथम नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the value of \( \frac{2^3 \times 3^2}{6^2} \)?",
    "question_hi": "\( \frac{2^3 \times 3^2}{6^2} \) का मान क्या है?",
    "options_en": ["1", "2", "3", "4"],
    "options_hi": ["1", "2", "3", "4"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "The phenomenon of persistence of vision is used in:",
    "question_hi": "दृष्टि की दृढ़ता की घटना का उपयोग किया जाता है:",
    "options_en": ["Microscope", "Telescope", "Cinema", "Periscope"],
    "options_hi": ["सूक्ष्मदर्शी", "दूरबीन", "सिनेमा", "पेरिस्कोप"],
    "answer_en": "Cinema",
    "answer_hi": "सिनेमा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the derivative of \( \ln(x^2) \)?",
    "question_hi": "\( \ln(x^2) \) का अवकलज क्या है?",
    "options_en": ["1/x", "2/x", "1/x^2", "2x"],
    "options_hi": ["1/x", "2/x", "1/x^2", "2x"],
    "answer_en": "2/x",
    "answer_hi": "2/x",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which planet is known as the Red Planet?",
    "question_hi": "किस ग्रह को लाल ग्रह के नाम से जाना जाता है?",
    "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
    "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
    "answer_en": "Mars",
    "answer_hi": "मंगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the value of \( \sec^2 \theta - \tan^2 \theta \)?",
    "question_hi": "\( \sec^2 \theta - \tan^2 \theta \) का मान क्या है?",
    "options_en": ["0", "1", "sin θ", "cos θ"],
    "options_hi": ["0", "1", "sin θ", "cos θ"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "The unit of capacitance is:",
    "question_hi": "धारिता की इकाई है:",
    "options_en": ["Ohm", "Farad", "Henry", "Tesla"],
    "options_hi": ["ओम", "फैरड", "हेनरी", "टेस्ला"],
    "answer_en": "Farad",
    "answer_hi": "फैरड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the perimeter of a rectangle with length 12 cm and width 8 cm?",
    "question_hi": "लंबाई 12 सेमी और चौड़ाई 8 सेमी वाले आयत का परिमाप क्या है?",
    "options_en": ["20 cm", "40 cm", "48 cm", "96 cm"],
    "options_hi": ["20 सेमी", "40 सेमी", "48 सेमी", "96 सेमी"],
    "answer_en": "40 cm",
    "answer_hi": "40 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which metal is liquid at room temperature?",
    "question_hi": "कौन सी धातु कमरे के तापमान पर तरल होती है?",
    "options_en": ["Iron", "Mercury", "Copper", "Aluminum"],
    "options_hi": ["लोहा", "पारा", "तांबा", "एल्यूमीनियम"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the value of \( \frac{1}{2} + \frac{1}{3} + \frac{1}{6} \)?",
    "question_hi": "\( \frac{1}{2} + \frac{1}{3} + \frac{1}{6} \) का मान क्या है?",
    "options_en": ["1", "1/2", "2/3", "5/6"],
    "options_hi": ["1", "1/2", "2/3", "5/6"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "The loudness of sound is measured in:",
    "question_hi": "ध्वनि की प्रबलता को मापा जाता है:",
    "options_en": ["Hertz", "Decibel", "Watt", "Joule"],
    "options_hi": ["हर्ट्ज", "डेसिबल", "वाट", "जूल"],
    "answer_en": "Decibel",
    "answer_hi": "डेसिबल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is the value of \( (x+y)^3 - (x-y)^3 \)?",
    "question_hi": "\( (x+y)^3 - (x-y)^3 \) का मान क्या है?",
    "options_en": ["2y^3", "2x^3", "2(x^3+y^3)", "6xy(x+y)"],
    "options_hi": ["2y^3", "2x^3", "2(x^3+y^3)", "6xy(x+y)"],
    "answer_en": "6xy(x+y)",
    "answer_hi": "6xy(x+y)",
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