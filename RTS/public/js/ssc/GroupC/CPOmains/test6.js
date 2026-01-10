const questions = [
  {
    "num": 1,
    "question_en": "What is the SI unit of force?",
    "question_hi": "बल की SI इकाई क्या है?",
    "options_en": ["Joule", "Newton", "Watt", "Pascal"],
    "options_hi": ["जूल", "न्यूटन", "वाट", "पास्कल"],
    "answer_en": "Newton",
    "answer_hi": "न्यूटन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which law states that 'every action has an equal and opposite reaction'?",
    "question_hi": "कौन सा नियम कहता है कि 'प्रत्येक क्रिया की समान और विपरीत प्रतिक्रिया होती है'?",
    "options_en": ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"],
    "options_hi": ["न्यूटन का पहला नियम", "न्यूटन का दूसरा नियम", "न्यूटन का तीसरा नियम", "गुरुत्वाकर्षण का नियम"],
    "answer_en": "Newton's Third Law",
    "answer_hi": "न्यूटन का तीसरा नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the SI unit of electric current?",
    "question_hi": "विद्युत धारा की SI इकाई क्या है?",
    "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
    "options_hi": ["वोल्ट", "एम्पीयर", "ओम", "वाट"],
    "answer_en": "Ampere",
    "answer_hi": "एम्पीयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which device is used to measure electric potential difference?",
    "question_hi": "विद्युत विभवांतर मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Ammeter", "Voltmeter", "Galvanometer", "Ohmmeter"],
    "options_hi": ["अमीटर", "वोल्टमीटर", "गैल्वेनोमीटर", "ओममीटर"],
    "answer_en": "Voltmeter",
    "answer_hi": "वोल्टमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the SI unit of power?",
    "question_hi": "शक्ति की SI इकाई क्या है?",
    "options_en": ["Joule", "Watt", "Newton", "Pascal"],
    "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
    "answer_en": "Watt",
    "answer_hi": "वाट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which type of lens is used to correct myopia (short-sightedness)?",
    "question_hi": "मायोपिया (निकटदृष्टि) को ठीक करने के लिए किस प्रकार के लेंस का उपयोग किया जाता है?",
    "options_en": ["Convex lens", "Concave lens", "Bifocal lens", "Cylindrical lens"],
    "options_hi": ["उत्तल लेंस", "अवतल लेंस", "द्विफोकस लेंस", "बेलनाकार लेंस"],
    "answer_en": "Concave lens",
    "answer_hi": "अवतल लेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the speed of light in vacuum?",
    "question_hi": "निर्वात में प्रकाश की गति क्या है?",
    "options_en": ["3 × 10^5 m/s", "3 × 10^6 m/s", "3 × 10^8 m/s", "3 × 10^10 m/s"],
    "options_hi": ["3 × 10^5 मी/से", "3 × 10^6 मी/से", "3 × 10^8 मी/से", "3 × 10^10 मी/से"],
    "answer_en": "3 × 10^8 m/s",
    "answer_hi": "3 × 10^8 मी/से",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which law states that pressure exerted by a fluid decreases as its velocity increases?",
    "question_hi": "कौन सा नियम कहता है कि किसी तरल द्वारा डाला गया दबाव उसके वेग बढ़ने के साथ घटता है?",
    "options_en": ["Pascal's Law", "Archimedes' Principle", "Bernoulli's Principle", "Boyle's Law"],
    "options_hi": ["पास्कल का नियम", "आर्किमिडीज का सिद्धांत", "बरनौली का सिद्धांत", "बॉयल का नियम"],
    "answer_en": "Bernoulli's Principle",
    "answer_hi": "बरनौली का सिद्धांत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the SI unit of frequency?",
    "question_hi": "आवृत्ति की SI इकाई क्या है?",
    "options_en": ["Hertz", "Decibel", "Watt", "Tesla"],
    "options_hi": ["हर्ट्ज", "डेसिबल", "वाट", "टेस्ला"],
    "answer_en": "Hertz",
    "answer_hi": "हर्ट्ज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which mirror always forms a virtual, erect and diminished image?",
    "question_hi": "कौन सा दर्पण हमेशा आभासी, सीधा और छोटा प्रतिबिंब बनाता है?",
    "options_en": ["Plane mirror", "Concave mirror", "Convex mirror", "Spherical mirror"],
    "options_hi": ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "गोलीय दर्पण"],
    "answer_en": "Convex mirror",
    "answer_hi": "उत्तल दर्पण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the SI unit of electric charge?",
    "question_hi": "विद्युत आवेश की SI इकाई क्या है?",
    "options_en": ["Ampere", "Volt", "Coulomb", "Ohm"],
    "options_hi": ["एम्पीयर", "वोल्ट", "कूलॉम", "ओम"],
    "answer_en": "Coulomb",
    "answer_hi": "कूलॉम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which type of energy is stored in a stretched spring?",
    "question_hi": "खींची हुई स्प्रिंग में किस प्रकार की ऊर्जा संचित होती है?",
    "options_en": ["Kinetic energy", "Potential energy", "Thermal energy", "Chemical energy"],
    "options_hi": ["गतिज ऊर्जा", "स्थितिज ऊर्जा", "तापीय ऊर्जा", "रासायनिक ऊर्जा"],
    "answer_en": "Potential energy",
    "answer_hi": "स्थितिज ऊर्जा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the SI unit of pressure?",
    "question_hi": "दाब की SI इकाई क्या है?",
    "options_en": ["Newton", "Joule", "Pascal", "Watt"],
    "options_hi": ["न्यूटन", "जूल", "पास्कल", "वाट"],
    "answer_en": "Pascal",
    "answer_hi": "पास्कल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which law states that the volume of a given mass of gas is inversely proportional to its pressure at constant temperature?",
    "question_hi": "कौन सा नियम कहता है कि गैस की एक निश्चित मात्रा का आयतन स्थिर तापमान पर उसके दाब के व्युत्क्रमानुपाती होता है?",
    "options_en": ["Charles' Law", "Boyle's Law", "Gay-Lussac's Law", "Avogadro's Law"],
    "options_hi": ["चार्ल्स का नियम", "बॉयल का नियम", "गे-लुसाक का नियम", "एवोगेड्रो का नियम"],
    "answer_en": "Boyle's Law",
    "answer_hi": "बॉयल का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the SI unit of work?",
    "question_hi": "कार्य की SI इकाई क्या है?",
    "options_en": ["Watt", "Newton", "Joule", "Pascal"],
    "options_hi": ["वाट", "न्यूटन", "जूल", "पास्कल"],
    "answer_en": "Joule",
    "answer_hi": "जूल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which device converts mechanical energy into electrical energy?",
    "question_hi": "कौन सा उपकरण यांत्रिक ऊर्जा को विद्युत ऊर्जा में परिवर्तित करता है?",
    "options_en": ["Electric motor", "Generator", "Transformer", "Rectifier"],
    "options_hi": ["विद्युत मोटर", "जनरेटर", "ट्रांसफॉर्मर", "रेक्टिफायर"],
    "answer_en": "Generator",
    "answer_hi": "जनरेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the SI unit of resistance?",
    "question_hi": "प्रतिरोध की SI इकाई क्या है?",
    "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
    "options_hi": ["वोल्ट", "एम्पीयर", "ओम", "वाट"],
    "answer_en": "Ohm",
    "answer_hi": "ओम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which type of waves are sound waves?",
    "question_hi": "ध्वनि तरंगें किस प्रकार की तरंगें हैं?",
    "options_en": ["Transverse waves", "Longitudinal waves", "Electromagnetic waves", "Radio waves"],
    "options_hi": ["अनुप्रस्थ तरंगें", "अनुदैर्ध्य तरंगें", "विद्युत चुम्बकीय तरंगें", "रेडियो तरंगें"],
    "answer_en": "Longitudinal waves",
    "answer_hi": "अनुदैर्ध्य तरंगें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the SI unit of temperature?",
    "question_hi": "तापमान की SI इकाई क्या है?",
    "options_en": ["Celsius", "Fahrenheit", "Kelvin", "Rankine"],
    "options_hi": ["सेल्सियस", "फारेनहाइट", "केल्विन", "रैंकिन"],
    "answer_en": "Kelvin",
    "answer_hi": "केल्विन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which law states that the angle of incidence is equal to the angle of reflection?",
    "question_hi": "कौन सा नियम कहता है कि आपतन कोण परावर्तन कोण के बराबर होता है?",
    "options_en": ["Snell's Law", "Law of Refraction", "Law of Reflection", "Law of Diffraction"],
    "options_hi": ["स्नेल का नियम", "अपवर्तन का नियम", "परावर्तन का नियम", "विवर्तन का नियम"],
    "answer_en": "Law of Reflection",
    "answer_hi": "परावर्तन का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the SI unit of capacitance?",
    "question_hi": "धारिता की SI इकाई क्या है?",
    "options_en": ["Farad", "Henry", "Weber", "Tesla"],
    "options_hi": ["फैरड", "हेनरी", "वेबर", "टेस्ला"],
    "answer_en": "Farad",
    "answer_hi": "फैरड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which device is used to measure atmospheric pressure?",
    "question_hi": "वायुमंडलीय दबाव मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Hydrometer", "Barometer", "Manometer", "Hygrometer"],
    "options_hi": ["हाइड्रोमीटर", "बैरोमीटर", "मैनोमीटर", "हाइग्रोमीटर"],
    "answer_en": "Barometer",
    "answer_hi": "बैरोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the SI unit of magnetic flux?",
    "question_hi": "चुंबकीय फ्लक्स की SI इकाई क्या है?",
    "options_en": ["Tesla", "Weber", "Henry", "Farad"],
    "options_hi": ["टेस्ला", "वेबर", "हेनरी", "फैरड"],
    "answer_en": "Weber",
    "answer_hi": "वेबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which type of lens is used in a magnifying glass?",
    "question_hi": "आवर्धक कांच में किस प्रकार के लेंस का उपयोग किया जाता है?",
    "options_en": ["Concave lens", "Convex lens", "Plano-concave lens", "Biconvex lens"],
    "options_hi": ["अवतल लेंस", "उत्तल लेंस", "समतल-अवतल लेंस", "द्विउत्तल लेंस"],
    "answer_en": "Convex lens",
    "answer_hi": "उत्तल लेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the SI unit of inductance?",
    "question_hi": "प्रेरकत्व की SI इकाई क्या है?",
    "options_en": ["Farad", "Henry", "Weber", "Tesla"],
    "options_hi": ["फैरड", "हेनरी", "वेबर", "टेस्ला"],
    "answer_en": "Henry",
    "answer_hi": "हेनरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which law states that the force between two charges is directly proportional to the product of charges and inversely proportional to the square of distance between them?",
    "question_hi": "कौन सा नियम कहता है कि दो आवेशों के बीच का बल आवेशों के गुणनफल के समानुपाती होता है और उनके बीच की दूरी के वर्ग के व्युत्क्रमानुपाती होता है?",
    "options_en": ["Ohm's Law", "Coulomb's Law", "Faraday's Law", "Ampere's Law"],
    "options_hi": ["ओम का नियम", "कूलॉम का नियम", "फैराडे का नियम", "एम्पीयर का नियम"],
    "answer_en": "Coulomb's Law",
    "answer_hi": "कूलॉम का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the SI unit of luminous intensity?",
    "question_hi": "ज्योति तीव्रता की SI इकाई क्या है?",
    "options_en": ["Lumen", "Candela", "Lux", "Watt"],
    "options_hi": ["लुमेन", "कैंडेला", "लक्स", "वाट"],
    "answer_en": "Candela",
    "answer_hi": "कैंडेला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which principle states that when a body is partially or fully immersed in a fluid, it experiences an upward thrust equal to the weight of fluid displaced?",
    "question_hi": "कौन सा सिद्धांत कहता है कि जब कोई पिंड किसी तरल में आंशिक या पूर्ण रूप से डूबा होता है, तो वह विस्थापित तरल के वजन के बराबर ऊपर की ओर एक प्रणोद अनुभव करता है?",
    "options_en": ["Pascal's Principle", "Archimedes' Principle", "Bernoulli's Principle", "Newton's Principle"],
    "options_hi": ["पास्कल का सिद्धांत", "आर्किमिडीज का सिद्धांत", "बरनौली का सिद्धांत", "न्यूटन का सिद्धांत"],
    "answer_en": "Archimedes' Principle",
    "answer_hi": "आर्किमिडीज का सिद्धांत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the SI unit of electric potential?",
    "question_hi": "विद्युत विभव की SI इकाई क्या है?",
    "options_en": ["Ampere", "Volt", "Ohm", "Watt"],
    "options_hi": ["एम्पीयर", "वोल्ट", "ओम", "वाट"],
    "answer_en": "Volt",
    "answer_hi": "वोल्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which type of mirror is used in vehicle headlights?",
    "question_hi": "वाहन हेडलाइट्स में किस प्रकार के दर्पण का उपयोग किया जाता है?",
    "options_en": ["Plane mirror", "Convex mirror", "Concave mirror", "Spherical mirror"],
    "options_hi": ["समतल दर्पण", "उत्तल दर्पण", "अवतल दर्पण", "गोलीय दर्पण"],
    "answer_en": "Concave mirror",
    "answer_hi": "अवतल दर्पण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the SI unit of energy?",
    "question_hi": "ऊर्जा की SI इकाई क्या है?",
    "options_en": ["Watt", "Joule", "Newton", "Pascal"],
    "options_hi": ["वाट", "जूल", "न्यूटन", "पास्कल"],
    "answer_en": "Joule",
    "answer_hi": "जूल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which law states that the current flowing through a conductor is directly proportional to the potential difference across its ends, provided temperature remains constant?",
    "question_hi": "कौन सा नियम कहता है कि एक चालक में प्रवाहित धारा उसके सिरों पर विभवांतर के समानुपाती होती है, बशर्ते तापमान स्थिर रहे?",
    "options_en": ["Coulomb's Law", "Ohm's Law", "Faraday's Law", "Kirchhoff's Law"],
    "options_hi": ["कूलॉम का नियम", "ओम का नियम", "फैराडे का नियम", "किरचॉफ का नियम"],
    "answer_en": "Ohm's Law",
    "answer_hi": "ओम का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the SI unit of magnetic field strength?",
    "question_hi": "चुंबकीय क्षेत्र सामर्थ्य की SI इकाई क्या है?",
    "options_en": ["Tesla", "Weber", "Henry", "Farad"],
    "options_hi": ["टेस्ला", "वेबर", "हेनरी", "फैरड"],
    "answer_en": "Tesla",
    "answer_hi": "टेस्ला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which device converts AC to DC?",
    "question_hi": "कौन सा उपकरण AC को DC में परिवर्तित करता है?",
    "options_en": ["Transformer", "Rectifier", "Inverter", "Generator"],
    "options_hi": ["ट्रांसफॉर्मर", "रेक्टिफायर", "इन्वर्टर", "जनरेटर"],
    "answer_en": "Rectifier",
    "answer_hi": "रेक्टिफायर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the SI unit of heat?",
    "question_hi": "ऊष्मा की SI इकाई क्या है?",
    "options_en": ["Calorie", "Joule", "Kelvin", "Watt"],
    "options_hi": ["कैलोरी", "जूल", "केल्विन", "वाट"],
    "answer_en": "Joule",
    "answer_hi": "जूल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which type of wave is used in mobile phone communication?",
    "question_hi": "मोबाइल फोन संचार में किस प्रकार की तरंग का उपयोग किया जाता है?",
    "options_en": ["Radio waves", "Microwaves", "Infrared waves", "Ultraviolet waves"],
    "options_hi": ["रेडियो तरंगें", "माइक्रोवेव", "अवरक्त तरंगें", "पराबैंगनी तरंगें"],
    "answer_en": "Microwaves",
    "answer_hi": "माइक्रोवेव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the SI unit of angular velocity?",
    "question_hi": "कोणीय वेग की SI इकाई क्या है?",
    "options_en": ["rad/s", "m/s", "Hz", "rpm"],
    "options_hi": ["रेड/से", "मी/से", "हर्ट्ज", "आरपीएम"],
    "answer_en": "rad/s",
    "answer_hi": "रेड/से",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which law states that the pressure applied to a confined fluid is transmitted equally in all directions?",
    "question_hi": "कौन सा नियम कहता है कि एक सीमित तरल पर लगाया गया दबाव सभी दिशाओं में समान रूप से संचरित होता है?",
    "options_en": ["Archimedes' Principle", "Bernoulli's Principle", "Pascal's Law", "Boyle's Law"],
    "options_hi": ["आर्किमिडीज का सिद्धांत", "बरनौली का सिद्धांत", "पास्कल का नियम", "बॉयल का नियम"],
    "answer_en": "Pascal's Law",
    "answer_hi": "पास्कल का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the SI unit of electric conductivity?",
    "question_hi": "विद्युत चालकता की SI इकाई क्या है?",
    "options_en": ["Siemens/meter", "Ohm-meter", "Mho", "Ampere/meter"],
    "options_hi": ["सीमेंस/मीटर", "ओम-मीटर", "म्हो", "एम्पीयर/मीटर"],
    "answer_en": "Siemens/meter",
    "answer_hi": "सीमेंस/मीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which lens is used to correct hypermetropia (long-sightedness)?",
    "question_hi": "हाइपरमेट्रोपिया (दूरदृष्टि) को ठीक करने के लिए किस लेंस का उपयोग किया जाता है?",
    "options_en": ["Concave lens", "Convex lens", "Cylindrical lens", "Bifocal lens"],
    "options_hi": ["अवतल लेंस", "उत्तल लेंस", "बेलनाकार लेंस", "द्विफोकस लेंस"],
    "answer_en": "Convex lens",
    "answer_hi": "उत्तल लेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the SI unit of impulse?",
    "question_hi": "संवेग की SI इकाई क्या है?",
    "options_en": ["Newton-second", "Joule", "Watt-second", "Kg-m/s"],
    "options_hi": ["न्यूटन-सेकंड", "जूल", "वाट-सेकंड", "किग्रा-मी/से"],
    "answer_en": "Newton-second",
    "answer_hi": "न्यूटन-सेकंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which principle is used in the working of a hydraulic lift?",
    "question_hi": "हाइड्रोलिक लिफ्ट के काम करने में किस सिद्धांत का उपयोग किया जाता है?",
    "options_en": ["Bernoulli's Principle", "Archimedes' Principle", "Pascal's Law", "Newton's Third Law"],
    "options_hi": ["बरनौली का सिद्धांत", "आर्किमिडीज का सिद्धांत", "पास्कल का नियम", "न्यूटन का तीसरा नियम"],
    "answer_en": "Pascal's Law",
    "answer_hi": "पास्कल का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the SI unit of luminous flux?",
    "question_hi": "ज्योति फ्लक्स की SI इकाई क्या है?",
    "options_en": ["Candela", "Lumen", "Lux", "Watt"],
    "options_hi": ["कैंडेला", "लुमेन", "लक्स", "वाट"],
    "answer_en": "Lumen",
    "answer_hi": "लुमेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which law of motion is also called 'Law of Inertia'?",
    "question_hi": "गति का कौन सा नियम 'जड़त्व का नियम' भी कहलाता है?",
    "options_en": ["First Law", "Second Law", "Third Law", "Universal Law of Gravitation"],
    "options_hi": ["पहला नियम", "दूसरा नियम", "तीसरा नियम", "गुरुत्वाकर्षण का सार्वत्रिक नियम"],
    "answer_en": "First Law",
    "answer_hi": "पहला नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the SI unit of radioactivity?",
    "question_hi": "रेडियोधर्मिता की SI इकाई क्या है?",
    "options_en": ["Curie", "Becquerel", "Rutherford", "Roentgen"],
    "options_hi": ["क्यूरी", "बेकरेल", "रदरफोर्ड", "रोएंटजन"],
    "answer_en": "Becquerel",
    "answer_hi": "बेकरेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which device is used to measure electric current?",
    "question_hi": "विद्युत धारा मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Voltmeter", "Ammeter", "Galvanometer", "Multimeter"],
    "options_hi": ["वोल्टमीटर", "अमीटर", "गैल्वेनोमीटर", "मल्टीमीटर"],
    "answer_en": "Ammeter",
    "answer_hi": "अमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the SI unit of wavelength?",
    "question_hi": "तरंगदैर्ध्य की SI इकाई क्या है?",
    "options_en": ["Hertz", "Meter", "Second", "Newton"],
    "options_hi": ["हर्ट्ज", "मीटर", "सेकंड", "न्यूटन"],
    "answer_en": "Meter",
    "answer_hi": "मीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which principle explains why ships float on water?",
    "question_hi": "कौन सा सिद्धांत समझाता है कि जहाज पानी पर क्यों तैरते हैं?",
    "options_en": ["Pascal's Principle", "Bernoulli's Principle", "Archimedes' Principle", "Newton's Third Law"],
    "options_hi": ["पास्कल का सिद्धांत", "बरनौली का सिद्धांत", "आर्किमिडीज का सिद्धांत", "न्यूटन का तीसरा नियम"],
    "answer_en": "Archimedes' Principle",
    "answer_hi": "आर्किमिडीज का सिद्धांत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the SI unit of electric field intensity?",
    "question_hi": "विद्युत क्षेत्र तीव्रता की SI इकाई क्या है?",
    "options_en": ["Volt/meter", "Newton/Coulomb", "Both A and B", "Watt/meter"],
    "options_hi": ["वोल्ट/मीटर", "न्यूटन/कूलॉम", "A और B दोनों", "वाट/मीटर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which law states that the rate of change of momentum is directly proportional to the applied force?",
    "question_hi": "कौन सा नियम कहता है कि संवेग परिवर्तन की दर लगाए गए बल के समानुपाती होती है?",
    "options_en": ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Conservation of Momentum"],
    "options_hi": ["न्यूटन का पहला नियम", "न्यूटन का दूसरा नियम", "न्यूटन का तीसरा नियम", "संवेग संरक्षण का नियम"],
    "answer_en": "Newton's Second Law",
    "answer_hi": "न्यूटन का दूसरा नियम",
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