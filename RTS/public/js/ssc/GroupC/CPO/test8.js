const questions = [
  {
  "num":1,
  question_en: "Which instrument is used to measure electric current?",
  question_hi: "विद्युत धारा मापने के लिए किस उपकरण का उपयोग किया जाता है?",
  options_en: ["Voltmeter", "Ammeter", "Galvanometer", "Ohmmeter"],
  options_hi: ["वोल्टमीटर", "अमीटर", "गैल्वेनोमीटर", "ओममीटर"],
  answer_en: "Ammeter",
  answer_hi: "अमीटर",
  attempted: false,
  selected: ""
},
{
  "num":2,
  question_en: "What is the SI unit of force?",
  question_hi: "बल की SI इकाई क्या है?",
  options_en: ["Joule", "Newton", "Watt", "Pascal"],
  options_hi: ["जूल", "न्यूटन", "वाट", "पास्कल"],
  answer_en: "Newton",
  answer_hi: "न्यूटन",
  attempted: false,
  selected: ""
},
{
  "num":3,
  question_en: "Which type of lens is used to correct myopia (nearsightedness)?",
  question_hi: "मायोपिया (निकटदृष्टि) को सही करने के लिए किस प्रकार के लेंस का उपयोग किया जाता है?",
  options_en: ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"],
  options_hi: ["उत्तल लेंस", "अवतल लेंस", "बेलनाकार लेंस", "द्विफोकसी लेंस"],
  answer_en: "Concave lens",
  answer_hi: "अवतल लेंस",
  attempted: false,
  selected: ""
},
{
  "num":4,
  question_en: "The speed of sound is maximum in which medium?",
  question_hi: "ध्वनि की गति किस माध्यम में अधिकतम होती है?",
  options_en: ["Air", "Water", "Steel", "Vacuum"],
  options_hi: ["वायु", "जल", "स्टील", "निर्वात"],
  answer_en: "Steel",
  answer_hi: "स्टील",
  attempted: false,
  selected: ""
},
{
  "num":5,
  question_en: "What is the unit of electric resistance?",
  question_hi: "विद्युत प्रतिरोध की इकाई क्या है?",
  options_en: ["Volt", "Ampere", "Ohm", "Watt"],
  options_hi: ["वोल्ट", "एम्पीयर", "ओम", "वाट"],
  answer_en: "Ohm",
  answer_hi: "ओम",
  attempted: false,
  selected: ""
},
{
  "num":6,
  question_en: "Which law states that pressure applied to a confined fluid is transmitted equally in all directions?",
  question_hi: "कौन सा नियम कहता है कि एक सीमित तरल पर लगाया गया दाब सभी दिशाओं में समान रूप से संचरित होता है?",
  options_en: ["Bernoulli's Principle", "Pascal's Law", "Archimedes' Principle", "Newton's Third Law"],
  options_hi: ["बर्नौली का सिद्धांत", "पास्कल का नियम", "आर्किमिडीज का सिद्धांत", "न्यूटन का तीसरा नियम"],
  answer_en: "Pascal's Law",
  answer_hi: "पास्कल का नियम",
  attempted: false,
  selected: ""
},
{
  "num":7,
  question_en: "What is the SI unit of power?",
  question_hi: "शक्ति की SI इकाई क्या है?",
  options_en: ["Joule", "Newton", "Watt", "Volt"],
  options_hi: ["जूल", "न्यूटन", "वाट", "वोल्ट"],
  answer_en: "Watt",
  answer_hi: "वाट",
  attempted: false,
  selected: ""
},
{
  "num":8,
  question_en: "Which type of mirror is used in vehicles as rearview mirror?",
  question_hi: "वाहनों में रियरव्यू मिरर के रूप में किस प्रकार के दर्पण का उपयोग किया जाता है?",
  options_en: ["Plane mirror", "Concave mirror", "Convex mirror", "Spherical mirror"],
  options_hi: ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "गोलीय दर्पण"],
  answer_en: "Convex mirror",
  answer_hi: "उत्तल दर्पण",
  attempted: false,
  selected: ""
},
{
  "num":9,
  question_en: "What is the SI unit of frequency?",
  question_hi: "आवृत्ति की SI इकाई क्या है?",
  options_en: ["Hertz", "Decibel", "Watt", "Newton"],
  options_hi: ["हर्ट्ज", "डेसिबल", "वाट", "न्यूटन"],
  answer_en: "Hertz",
  answer_hi: "हर्ट्ज",
  attempted: false,
  selected: ""
},
{
  "num":10,
  question_en: "Which color of light has the longest wavelength?",
  question_hi: "किस रंग के प्रकाश की तरंगदैर्ध्य सबसे लंबी होती है?",
  options_en: ["Violet", "Blue", "Green", "Red"],
  options_hi: ["बैंगनी", "नीला", "हरा", "लाल"],
  answer_en: "Red",
  answer_hi: "लाल",
  attempted: false,
  selected: ""
},
{
  "num":11,
  question_en: "What is the value of acceleration due to gravity on Earth's surface?",
  question_hi: "पृथ्वी की सतह पर गुरुत्वीय त्वरण का मान क्या है?",
  options_en: ["6.67 m/s²", "9.8 m/s²", "10 m/s²", "12 m/s²"],
  options_hi: ["6.67 मी/से²", "9.8 मी/से²", "10 मी/से²", "12 मी/से²"],
  answer_en: "9.8 m/s²",
  answer_hi: "9.8 मी/से²",
  attempted: false,
  selected: ""
},
{
  "num":12,
  question_en: "Which device converts mechanical energy into electrical energy?",
  question_hi: "कौन सा उपकरण यांत्रिक ऊर्जा को विद्युत ऊर्जा में परिवर्तित करता है?",
  options_en: ["Motor", "Generator", "Transformer", "Rectifier"],
  options_hi: ["मोटर", "जनरेटर", "ट्रांसफार्मर", "रेक्टिफायर"],
  answer_en: "Generator",
  answer_hi: "जनरेटर",
  attempted: false,
  selected: ""
},
{
  "num":13,
  question_en: "What is the SI unit of pressure?",
  question_hi: "दाब की SI इकाई क्या है?",
  options_en: ["Newton", "Pascal", "Joule", "Watt"],
  options_hi: ["न्यूटन", "पास्कल", "जूल", "वाट"],
  answer_en: "Pascal",
  answer_hi: "पास्कल",
  attempted: false,
  selected: ""
},
{
  "num":14,
  question_en: "Which type of energy is stored in a stretched spring?",
  question_hi: "खींचे हुए स्प्रिंग में किस प्रकार की ऊर्जा संचित रहती है?",
  options_en: ["Kinetic energy", "Potential energy", "Thermal energy", "Chemical energy"],
  options_hi: ["गतिज ऊर्जा", "स्थितिज ऊर्जा", "तापीय ऊर्जा", "रासायनिक ऊर्जा"],
  answer_en: "Potential energy",
  answer_hi: "स्थितिज ऊर्जा",
  attempted: false,
  selected: ""
},
{
  "num":15,
  question_en: "What is the SI unit of electric charge?",
  question_hi: "विद्युत आवेश की SI इकाई क्या है?",
  options_en: ["Volt", "Ampere", "Coulomb", "Ohm"],
  options_hi: ["वोल्ट", "एम्पीयर", "कूलॉम", "ओम"],
  answer_en: "Coulomb",
  answer_hi: "कूलॉम",
  attempted: false,
  selected: ""
},
{
  "num":16,
  question_en: "Which law states that every action has an equal and opposite reaction?",
  question_hi: "कौन सा नियम कहता है कि प्रत्येक क्रिया की समान और विपरीत प्रतिक्रिया होती है?",
  options_en: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"],
  options_hi: ["न्यूटन का पहला नियम", "न्यूटन का दूसरा नियम", "न्यूटन का तीसरा नियम", "गुरुत्वाकर्षण का नियम"],
  answer_en: "Newton's Third Law",
  answer_hi: "न्यूटन का तीसरा नियम",
  attempted: false,
  selected: ""
},
{
  "num":17,
  question_en: "What is the speed of light in vacuum?",
  question_hi: "निर्वात में प्रकाश की गति क्या है?",
  options_en: ["3 × 10^5 m/s", "3 × 10^6 m/s", "3 × 10^8 m/s", "3 × 10^10 m/s"],
  options_hi: ["3 × 10^5 मी/से", "3 × 10^6 मी/से", "3 × 10^8 मी/से", "3 × 10^10 मी/से"],
  answer_en: "3 × 10^8 m/s",
  answer_hi: "3 × 10^8 मी/से",
  attempted: false,
  selected: ""
},
{
  "num":18,
  question_en: "Which instrument is used to measure atmospheric pressure?",
  question_hi: "वायुमंडलीय दाब मापने के लिए किस उपकरण का उपयोग किया जाता है?",
  options_en: ["Hydrometer", "Barometer", "Hygrometer", "Thermometer"],
  options_hi: ["हाइड्रोमीटर", "बैरोमीटर", "हाइग्रोमीटर", "थर्मामीटर"],
  answer_en: "Barometer",
  answer_hi: "बैरोमीटर",
  attempted: false,
  selected: ""
},
{
  "num":19,
  question_en: "What is the SI unit of work?",
  question_hi: "कार्य की SI इकाई क्या है?",
  options_en: ["Newton", "Joule", "Watt", "Pascal"],
  options_hi: ["न्यूटन", "जूल", "वाट", "पास्कल"],
  answer_en: "Joule",
  answer_hi: "जूल",
  attempted: false,
  selected: ""
},
{
  "num":20,
  question_en: "Which type of current is supplied by batteries?",
  question_hi: "बैटरियों द्वारा किस प्रकार की धारा की आपूर्ति की जाती है?",
  options_en: ["AC only", "DC only", "Both AC and DC", "Pulsating DC"],
  options_hi: ["केवल AC", "केवल DC", "AC और DC दोनों", "स्पंदी DC"],
  answer_en: "DC only",
  answer_hi: "केवल DC",
  attempted: false,
  selected: ""
},
{
  "num":21,
  question_en: "What is the principle behind working of a hydraulic lift?",
  question_hi: "हाइड्रोलिक लिफ्ट के कार्य करने का सिद्धांत क्या है?",
  options_en: ["Bernoulli's Principle", "Pascal's Law", "Archimedes' Principle", "Newton's Law"],
  options_hi: ["बर्नौली का सिद्धांत", "पास्कल का नियम", "आर्किमिडीज का सिद्धांत", "न्यूटन का नियम"],
  answer_en: "Pascal's Law",
  answer_hi: "पास्कल का नियम",
  attempted: false,
  selected: ""
},
{
  "num":22,
  question_en: "Which lens is used in magnifying glass?",
  question_hi: "आवर्धक कांच में किस लेंस का उपयोग किया जाता है?",
  options_en: ["Concave lens", "Convex lens", "Plano-concave lens", "Cylindrical lens"],
  options_hi: ["अवतल लेंस", "उत्तल लेंस", "समतल-अवतल लेंस", "बेलनाकार लेंस"],
  answer_en: "Convex lens",
  answer_hi: "उत्तल लेंस",
  attempted: false,
  selected: ""
},
{
  "num":23,
  question_en: "What is the SI unit of temperature?",
  question_hi: "तापमान की SI इकाई क्या है?",
  options_en: ["Kelvin", "Celsius", "Fahrenheit", "Rankine"],
  options_hi: ["केल्विन", "सेल्सियस", "फारेनहाइट", "रैंकिन"],
  answer_en: "Kelvin",
  answer_hi: "केल्विन",
  attempted: false,
  selected: ""
},
{
  "num":24,
  question_en: "Which metal is the best conductor of electricity?",
  question_hi: "कौन सी धातु विद्युत की सबसे अच्छी सुचालक है?",
  options_en: ["Copper", "Aluminum", "Silver", "Gold"],
  options_hi: ["तांबा", "एल्युमिनियम", "चांदी", "सोना"],
  answer_en: "Silver",
  answer_hi: "चांदी",
  attempted: false,
  selected: ""
},
{
  "num":25,
  question_en: "What is the unit of wavelength?",
  question_hi: "तरंगदैर्ध्य की इकाई क्या है?",
  options_en: ["Hertz", "Meter", "Second", "Newton"],
  options_hi: ["हर्ट्ज", "मीटर", "सेकंड", "न्यूटन"],
  answer_en: "Meter",
  answer_hi: "मीटर",
  attempted: false,
  selected: ""
},
{
  "num":26,
  question_en: "Which instrument is used to measure potential difference?",
  question_hi: "विभवांतर मापने के लिए किस उपकरण का उपयोग किया जाता है?",
  options_en: ["Ammeter", "Voltmeter", "Galvanometer", "Ohmmeter"],
  options_hi: ["अमीटर", "वोल्टमीटर", "गैल्वेनोमीटर", "ओममीटर"],
  answer_en: "Voltmeter",
  answer_hi: "वोल्टमीटर",
  attempted: false,
  selected: ""
},
{
  "num":27,
  question_en: "What is the audible frequency range for humans?",
  question_hi: "मनुष्यों के लिए श्रव्य आवृत्ति सीमा क्या है?",
  options_en: ["20 Hz - 200 Hz", "20 Hz - 2000 Hz", "20 Hz - 20,000 Hz", "200 Hz - 20,000 Hz"],
  options_hi: ["20 हर्ट्ज - 200 हर्ट्ज", "20 हर्ट्ज - 2000 हर्ट्ज", "20 हर्ट्ज - 20,000 हर्ट्ज", "200 हर्ट्ज - 20,000 हर्ट्ज"],
  answer_en: "20 Hz - 20,000 Hz",
  answer_hi: "20 हर्ट्ज - 20,000 हर्ट्ज",
  attempted: false,
  selected: ""
},
{
  "num":28,
  question_en: "Which gas is filled in electric bulbs?",
  question_hi: "विद्युत बल्बों में कौन सी गैस भरी जाती है?",
  options_en: ["Oxygen", "Hydrogen", "Nitrogen", "Argon"],
  options_hi: ["ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन", "आर्गन"],
  answer_en: "Argon",
  answer_hi: "आर्गन",
  attempted: false,
  selected: ""
},
{
  "num":29,
  question_en: "What is the SI unit of magnetic flux?",
  question_hi: "चुंबकीय फ्लक्स की SI इकाई क्या है?",
  options_en: ["Tesla", "Weber", "Henry", "Gauss"],
  options_hi: ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
  answer_en: "Weber",
  answer_hi: "वेबर",
  attempted: false,
  selected: ""
},
{
  "num":30,
  question_en: "Which phenomenon causes the sky to appear blue?",
  question_hi: "कौन सी घटना आकाश को नीला दिखाई देने का कारण बनती है?",
  options_en: ["Reflection", "Refraction", "Scattering", "Dispersion"],
  options_hi: ["परावर्तन", "अपवर्तन", "प्रकीर्णन", "विक्षेपण"],
  answer_en: "Scattering",
  answer_hi: "प्रकीर्णन",
  attempted: false,
  selected: ""
},
{
  "num":31,
  question_en: "What is the SI unit of capacitance?",
  question_hi: "धारिता की SI इकाई क्या है?",
  options_en: ["Farad", "Henry", "Ohm", "Siemens"],
  options_hi: ["फैरड", "हेनरी", "ओम", "सीमेंस"],
  answer_en: "Farad",
  answer_hi: "फैरड",
  attempted: false,
  selected: ""
},
{
  "num":32,
  question_en: "Which type of mirror always forms a virtual, erect and diminished image?",
  question_hi: "किस प्रकार का दर्पण हमेशा आभासी, सीधा और छोटा प्रतिबिम्ब बनाता है?",
  options_en: ["Plane mirror", "Concave mirror", "Convex mirror", "Spherical mirror"],
  options_hi: ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "गोलीय दर्पण"],
  answer_en: "Convex mirror",
  answer_hi: "उत्तल दर्पण",
  attempted: false,
  selected: ""
},
{
  "num":33,
  question_en: "What is the unit of electric power?",
  question_hi: "विद्युत शक्ति की इकाई क्या है?",
  options_en: ["Volt", "Watt", "Joule", "Ampere"],
  options_hi: ["वोल्ट", "वाट", "जूल", "एम्पीयर"],
  answer_en: "Watt",
  answer_hi: "वाट",
  attempted: false,
  selected: ""
},
{
  "num":34,
  question_en: "Which law explains the working of a rocket?",
  question_hi: "रॉकेट के कार्य करने की व्याख्या कौन सा नियम करता है?",
  options_en: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Conservation of Energy"],
  options_hi: ["न्यूटन का पहला नियम", "न्यूटन का दूसरा नियम", "न्यूटन का तीसरा नियम", "ऊर्जा संरक्षण का नियम"],
  answer_en: "Newton's Third Law",
  answer_hi: "न्यूटन का तीसरा नियम",
  attempted: false,
  selected: ""
},
{
  "num":35,
  question_en: "What is the SI unit of inductance?",
  question_hi: "प्रेरकत्व की SI इकाई क्या है?",
  options_en: ["Farad", "Henry", "Weber", "Tesla"],
  options_hi: ["फैरड", "हेनरी", "वेबर", "टेस्ला"],
  answer_en: "Henry",
  answer_hi: "हेनरी",
  attempted: false,
  selected: ""
},
{
  "num":36,
  question_en: "Which principle explains why ships float on water?",
  question_hi: "कौन सा सिद्धांत बताता है कि जहाज पानी पर क्यों तैरते हैं?",
  options_en: ["Pascal's Law", "Bernoulli's Principle", "Archimedes' Principle", "Newton's Law"],
  options_hi: ["पास्कल का नियम", "बर्नौली का सिद्धांत", "आर्किमिडीज का सिद्धांत", "न्यूटन का नियम"],
  answer_en: "Archimedes' Principle",
  answer_hi: "आर्किमिडीज का सिद्धांत",
  attempted: false,
  selected: ""
},
{
  "num":37,
  question_en: "What is the SI unit of luminous intensity?",
  question_hi: "ज्योति तीव्रता की SI इकाई क्या है?",
  options_en: ["Lumen", "Candela", "Lux", "Watt"],
  options_hi: ["लुमेन", "कैंडेला", "लक्स", "वाट"],
  answer_en: "Candela",
  answer_hi: "कैंडेला",
  attempted: false,
  selected: ""
},
{
  "num":38,
  question_en: "Which instrument is used to measure the purity of milk?",
  question_hi: "दूध की शुद्धता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
  options_en: ["Barometer", "Hydrometer", "Lactometer", "Hygrometer"],
  options_hi: ["बैरोमीटर", "हाइड्रोमीटर", "लैक्टोमीटर", "हाइग्रोमीटर"],
  answer_en: "Lactometer",
  answer_hi: "लैक्टोमीटर",
  attempted: false,
  selected: ""
},
{
  "num":39,
  question_en: "What is the phenomenon of splitting of white light into its constituent colors called?",
  question_hi: "सफेद प्रकाश के अपने घटक रंगों में विभाजन की घटना को क्या कहा जाता है?",
  options_en: ["Reflection", "Refraction", "Scattering", "Dispersion"],
  options_hi: ["परावर्तन", "अपवर्तन", "प्रकीर्णन", "विक्षेपण"],
  answer_en: "Dispersion",
  answer_hi: "विक्षेपण",
  attempted: false,
  selected: ""
},
{
  "num":40,
  question_en: "Which type of lens is thicker at the center than at the edges?",
  question_hi: "किस प्रकार का लेंस किनारों की तुलना में केंद्र में मोटा होता है?",
  options_en: ["Concave lens", "Convex lens", "Plano-concave lens", "Cylindrical lens"],
  options_hi: ["अवतल लेंस", "उत्तल लेंस", "समतल-अवतल लेंस", "बेलनाकार लेंस"],
  answer_en: "Convex lens",
  answer_hi: "उत्तल लेंस",
  attempted: false,
  selected: ""
},
{
  "num":41,
  question_en: "What is the SI unit of heat?",
  question_hi: "ऊष्मा की SI इकाई क्या है?",
  options_en: ["Kelvin", "Joule", "Calorie", "Watt"],
  options_hi: ["केल्विन", "जूल", "कैलोरी", "वाट"],
  answer_en: "Joule",
  answer_hi: "जूल",
  attempted: false,
  selected: ""
},
{
  "num":42,
  question_en: "Which law states that the volume of a gas is directly proportional to its temperature at constant pressure?",
  question_hi: "कौन सा नियम कहता है कि नियत दाब पर किसी गैस का आयतन उसके तापमान के अनुक्रमानुपाती होता है?",
  options_en: ["Boyle's Law", "Charles' Law", "Gay-Lussac's Law", "Avogadro's Law"],
  options_hi: ["बॉयल का नियम", "चार्ल्स का नियम", "गे-लुसाक का नियम", "ऐवोगैड्रो का नियम"],
  answer_en: "Charles' Law",
  answer_hi: "चार्ल्स का नियम",
  attempted: false,
  selected: ""
},
{
  "num":43,
  question_en: "What is the unit of electric conductivity?",
  question_hi: "विद्युत चालकता की इकाई क्या है?",
  options_en: ["Ohm", "Siemens", "Farad", "Henry"],
  options_hi: ["ओम", "सीमेंस", "फैरड", "हेनरी"],
  answer_en: "Siemens",
  answer_hi: "सीमेंस",
  attempted: false,
  selected: ""
},
{
  "num":44,
  question_en: "Which mirror is used by dentists to see enlarged image of teeth?",
  question_hi: "दंत चिकित्सक दांतों का विस्तृत प्रतिबिम्ब देखने के लिए किस दर्पण का उपयोग करते हैं?",
  options_en: ["Plane mirror", "Concave mirror", "Convex mirror", "Spherical mirror"],
  options_hi: ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "गोलीय दर्पण"],
  answer_en: "Concave mirror",
  answer_hi: "अवतल दर्पण",
  attempted: false,
  selected: ""
},
{
  "num":45,
  question_en: "What is the SI unit of electric field intensity?",
  question_hi: "विद्युत क्षेत्र तीव्रता की SI इकाई क्या है?",
  options_en: ["Newton/Coulomb", "Volt/meter", "Both A and B", "Joule/Coulomb"],
  options_hi: ["न्यूटन/कूलॉम", "वोल्ट/मीटर", "A और B दोनों", "जूल/कूलॉम"],
  answer_en: "Both A and B",
  answer_hi: "A और B दोनों",
  attempted: false,
  selected: ""
},
{
  "num":46,
  question_en: "Which phenomenon is responsible for the formation of rainbow?",
  question_hi: "इंद्रधनुष के निर्माण के लिए कौन सी घटना जिम्मेदार है?",
  options_en: ["Reflection only", "Refraction only", "Dispersion only", "Refraction and internal reflection"],
  options_hi: ["केवल परावर्तन", "केवल अपवर्तन", "केवल विक्षेपण", "अपवर्तन और पूर्ण आंतरिक परावर्तन"],
  answer_en: "Refraction and internal reflection",
  answer_hi: "अपवर्तन और पूर्ण आंतरिक परावर्तन",
  attempted: false,
  selected: ""
},
{
  "num":47,
  question_en: "What is the SI unit of magnetic field strength?",
  question_hi: "चुंबकीय क्षेत्र सामर्थ्य की SI इकाई क्या है?",
  options_en: ["Weber", "Tesla", "Henry", "Gauss"],
  options_hi: ["वेबर", "टेस्ला", "हेनरी", "गॉस"],
  answer_en: "Tesla",
  answer_hi: "टेस्ला",
  attempted: false,
  selected: ""
},
{
  "num":48,
  question_en: "Which law states that the pressure of a gas is inversely proportional to its volume at constant temperature?",
  question_hi: "कौन सा नियम कहता है कि नियत तापमान पर किसी गैस का दाब उसके आयतन के व्युत्क्रमानुपाती होता है?",
  options_en: ["Boyle's Law", "Charles' Law", "Gay-Lussac's Law", "Avogadro's Law"],
  options_hi: ["बॉयल का नियम", "चार्ल्स का नियम", "गे-लुसाक का नियम", "ऐवोगैड्रो का नियम"],
  answer_en: "Boyle's Law",
  answer_hi: "बॉयल का नियम",
  attempted: false,
  selected: ""
},
{
  "num":49,
  question_en: "Which device converts AC to DC?",
  question_hi: "कौन सा उपकरण AC को DC में परिवर्तित करता है?",
  options_en: ["Transformer", "Rectifier", "Inverter", "Amplifier"],
  options_hi: ["ट्रांसफार्मर", "रेक्टिफायर", "इन्वर्टर", "एम्पलीफायर"],
  answer_en: "Rectifier",
  answer_hi: "रेक्टिफायर",
  attempted: false,
  selected: ""
},
{
  "num":50,
  question_en: "What is the SI unit of radioactivity?",
  question_hi: "रेडियोधर्मिता की SI इकाई क्या है?",
  options_en: ["Curie", "Rutherford", "Becquerel", "Roentgen"],
  options_hi: ["क्यूरी", "रदरफोर्ड", "बेकरेल", "रॉन्टजन"],
  answer_en: "Becquerel",
  answer_hi: "बेकरेल",
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