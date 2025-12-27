const questions = [
  {
 "num":1,
  question_en: "What is the SI unit of force?",
  question_hi: "बल की SI इकाई क्या है?",
  options_en: ["Newton", "Joule", "Watt", "Pascal"],
  options_hi: ["न्यूटन", "जूल", "वाट", "पास्कल"],
  answer_en: "Newton",
  answer_hi: "न्यूटन",
  attempted: false,
  selected: ""
},
{
 "num":2,
  question_en: "Who formulated the three laws of motion?",
  question_hi: "गति के तीन नियम किसने प्रतिपादित किए?",
  options_en: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
  options_hi: ["आइजैक न्यूटन", "अल्बर्ट आइंस्टीन", "गैलीलियो गैलीली", "नील्स बोर"],
  answer_en: "Isaac Newton",
  answer_hi: "आइजैक न्यूटन",
  attempted: false,
  selected: ""
},
{
 "num": 3,
  question_en: "What is the unit of electric current?",
  question_hi: "विद्युत धारा की इकाई क्या है?",
  options_en: ["Ampere", "Volt", "Ohm", "Watt"],
  options_hi: ["एम्पीयर", "वोल्ट", "ओम", "वाट"],
  answer_en: "Ampere",
  answer_hi: "एम्पीयर",
  attempted: false,
  selected: ""
},
{
 "num": 4,
  question_en: "Which law states that every action has an equal and opposite reaction?",
  question_hi: "कौन सा नियम कहता है कि प्रत्येक क्रिया की समान और विपरीत प्रतिक्रिया होती है?",
  options_en: ["Newton's Third Law of Motion", "Newton's First Law of Motion", "Newton's Second Law of Motion", "Law of Gravitation"],
  options_hi: ["न्यूटन का गति का तीसरा नियम", "न्यूटन का गति का पहला नियम", "न्यूटन का गति का दूसरा नियम", "गुरुत्वाकर्षण का नियम"],
  answer_en: "Newton's Third Law of Motion",
  answer_hi: "न्यूटन का गति का तीसरा नियम",
  attempted: false,
  selected: ""
},
{
 "num": 5,
  question_en: "What is the speed of light in vacuum?",
  question_hi: "निर्वात में प्रकाश की गति क्या है?",
  options_en: ["3 × 10^8 m/s", "3 × 10^5 m/s", "3 × 10^10 m/s", "3 × 10^3 m/s"],
  options_hi: ["3 × 10^8 मीटर/सेकंड", "3 × 10^5 मीटर/सेकंड", "3 × 10^10 मीटर/सेकंड", "3 × 10^3 मीटर/सेकंड"],
  answer_en: "3 × 10^8 m/s",
  answer_hi: "3 × 10^8 मीटर/सेकंड",
  attempted: false,
  selected: ""
},
{
 "num": 6,
  question_en: "What does 'LASER' stand for?",
  question_hi: "'LASER' का पूरा नाम क्या है?",
  options_en: ["Light Amplification by Stimulated Emission of Radiation", "Light Absorption by Stimulated Emission of Radiation", "Light Amplification by Spontaneous Emission of Radiation", "Light Absorption by Spontaneous Emission of Radiation"],
  options_hi: ["विकिरण के उत्सर्जन द्वारा प्रकाश प्रवर्धन", "विकिरण के उत्सर्जन द्वारा प्रकाश अवशोषण", "विकिरण के सहज उत्सर्जन द्वारा प्रकाश प्रवर्धन", "विकिरण के सहज उत्सर्जन द्वारा प्रकाश अवशोषण"],
  answer_en: "Light Amplification by Stimulated Emission of Radiation",
  answer_hi: "विकिरण के उत्सर्जन द्वारा प्रकाश प्रवर्धन",
  attempted: false,
  selected: ""
},
{
 "num": 7,
  question_en: "What is the SI unit of energy?",
  question_hi: "ऊर्जा की SI इकाई क्या है?",
  options_en: ["Joule", "Watt", "Newton", "Pascal"],
  options_hi: ["जूल", "वाट", "न्यूटन", "पास्कल"],
  answer_en: "Joule",
  answer_hi: "जूल",
  attempted: false,
  selected: ""
},
{
 "num": 8,
  question_en: "Which scientist proposed the theory of relativity?",
  question_hi: "सापेक्षता का सिद्धांत किस वैज्ञानिक ने प्रस्तावित किया?",
  options_en: ["Albert Einstein", "Isaac Newton", "Stephen Hawking", "Niels Bohr"],
  options_hi: ["अल्बर्ट आइंस्टीन", "आइजैक न्यूटन", "स्टीफन हॉकिंग", "नील्स बोर"],
  answer_en: "Albert Einstein",
  answer_hi: "अल्बर्ट आइंस्टीन",
  attempted: false,
  selected: ""
},
{
 "num": 9,
  question_en: "What is the unit of frequency?",
  question_hi: "आवृत्ति की इकाई क्या है?",
  options_en: ["Hertz", "Decibel", "Watt", "Joule"],
  options_hi: ["हर्ट्ज़", "डेसिबल", "वाट", "जूल"],
  answer_en: "Hertz",
  answer_hi: "हर्ट्ज़",
  attempted: false,
  selected: ""
},
{
 "num": 10,
  question_en: "What is the acceleration due to gravity on Earth?",
  question_hi: "पृथ्वी पर गुरुत्वाकर्षण के कारण त्वरण क्या है?",
  options_en: ["9.8 m/s²", "8.9 m/s²", "10 m/s²", "6.67 m/s²"],
  options_hi: ["9.8 मी/से²", "8.9 मी/से²", "10 मी/से²", "6.67 मी/से²"],
  answer_en: "9.8 m/s²",
  answer_hi: "9.8 मी/से²",
  attempted: false,
  selected: ""
},
{
 "num": 11,
  question_en: "What is the formula for force?",
  question_hi: "बल का सूत्र क्या है?",
  options_en: ["F = ma", "F = mv", "F = m/a", "F = m + a"],
  options_hi: ["F = ma", "F = mv", "F = m/a", "F = m + a"],
  answer_en: "F = ma",
  answer_hi: "F = ma",
  attempted: false,
  selected: ""
},
{
 "num": 12,
  question_en: "What is the unit of power?",
  question_hi: "शक्ति की इकाई क्या है?",
  options_en: ["Watt", "Joule", "Newton", "Pascal"],
  options_hi: ["वाट", "जूल", "न्यूटन", "पास्कल"],
  answer_en: "Watt",
  answer_hi: "वाट",
  attempted: false,
  selected: ""
},
{
 "num": 13,
  question_en: "Which type of lens is thicker at the center than at the edges?",
  question_hi: "किस प्रकार का लेंस किनारों की तुलना में केंद्र में मोटा होता है?",
  options_en: ["Convex lens", "Concave lens", "Plano-convex lens", "Biconcave lens"],
  options_hi: ["उत्तल लेंस", "अवतल लेंस", "समतल-उत्तल लेंस", "द्वि-अवतल लेंस"],
  answer_en: "Convex lens",
  answer_hi: "उत्तल लेंस",
  attempted: false,
  selected: ""
},
{
 "num": 14,
  question_en: "What is the unit of electric charge?",
  question_hi: "विद्युत आवेश की इकाई क्या है?",
  options_en: ["Coulomb", "Ampere", "Volt", "Ohm"],
  options_hi: ["कूलम्ब", "एम्पीयर", "वोल्ट", "ओम"],
  answer_en: "Coulomb",
  answer_hi: "कूलम्ब",
  attempted: false,
  selected: ""
},
{
 "num": 15,
  question_en: "Which law states that the pressure of a gas is inversely proportional to its volume at constant temperature?",
  question_hi: "कौन सा नियम कहता है कि स्थिर तापमान पर गैस का दबाव उसके आयतन के व्युत्क्रमानुपाती होता है?",
  options_en: ["Boyle's law", "Charles's law", "Gay-Lussac's law", "Avogadro's law"],
  options_hi: ["बॉयल का नियम", "चार्ल्स का नियम", "गे-लुसाक का नियम", "अवोगाद्रो का नियम"],
  answer_en: "Boyle's law",
  answer_hi: "बॉयल का नियम",
  attempted: false,
  selected: ""
},
{
 "num": 16,
  question_en: "What is the SI unit of pressure?",
  question_hi: "दबाव की SI इकाई क्या है?",
  options_en: ["Pascal", "Newton", "Joule", "Watt"],
  options_hi: ["पास्कल", "न्यूटन", "जूल", "वाट"],
  answer_en: "Pascal",
  answer_hi: "पास्कल",
  attempted: false,
  selected: ""
},
{
 "num": 17,
  question_en: "What is the phenomenon of splitting of white light into its constituent colors called?",
  question_hi: "सफेद प्रकाश के उसके घटक रंगों में विभाजन की घटना को क्या कहा जाता है?",
  options_en: ["Dispersion", "Refraction", "Reflection", "Diffraction"],
  options_hi: ["विक्षेपण", "अपवर्तन", "परावर्तन", "विवर्तन"],
  answer_en: "Dispersion",
  answer_hi: "विक्षेपण",
  attempted: false,
  selected: ""
},
{
 "num": 18,
  question_en: "What is the unit of resistance?",
  question_hi: "प्रतिरोध की इकाई क्या है?",
  options_en: ["Ohm", "Ampere", "Volt", "Watt"],
  options_hi: ["ओम", "एम्पीयर", "वोल्ट", "वाट"],
  answer_en: "Ohm",
  answer_hi: "ओम",
  attempted: false,
  selected: ""
},
{
 "num": 19,
  question_en: "Which mirror always forms a virtual image?",
  question_hi: "कौन सा दर्पण हमेशा आभासी प्रतिबिंब बनाता है?",
  options_en: ["Concave mirror", "Convex mirror", "Plane mirror", "Spherical mirror"],
  options_hi: ["अवतल दर्पण", "उत्तल दर्पण", "समतल दर्पण", "गोलीय दर्पण"],
  answer_en: "Convex mirror",
  answer_hi: "उत्तल दर्पण",
  attempted: false,
  selected: ""
},
{
 "num": 20,
  question_en: "What is the formula for kinetic energy?",
  question_hi: "गतिज ऊर्जा का सूत्र क्या है?",
  options_en: ["½ mv²", "mgh", "mv", "ma"],
  options_hi: ["½ mv²", "mgh", "mv", "ma"],
  answer_en: "½ mv²",
  answer_hi: "½ mv²",
  attempted: false,
  selected: ""
},
{
 "num": 21,
  question_en: "What is the unit of work?",
  question_hi: "कार्य की इकाई क्या है?",
  options_en: ["Joule", "Newton", "Watt", "Pascal"],
  options_hi: ["जूल", "न्यूटन", "वाट", "पास्कल"],
  answer_en: "Joule",
  answer_hi: "जूल",
  attempted: false,
  selected: ""
},
{
 "num": 22,
  question_en: "What is the speed of sound in air at room temperature?",
  question_hi: "कमरे के तापमान पर हवा में ध्वनि की गति क्या है?",
  options_en: ["343 m/s", "300 m/s", "400 m/s", "500 m/s"],
  options_hi: ["343 मीटर/सेकंड", "300 मीटर/सेकंड", "400 मीटर/सेकंड", "500 मीटर/सेकंड"],
  answer_en: "343 m/s",
  answer_hi: "343 मीटर/सेकंड",
  attempted: false,
  selected: ""
},
{
 "num": 23,
  question_en: "Which law states that the angle of incidence is equal to the angle of reflection?",
  question_hi: "कौन सा नियम कहता है कि आपतन कोण परावर्तन कोण के बराबर होता है?",
  options_en: ["Law of reflection", "Law of refraction", "Law of dispersion", "Law of diffraction"],
  options_hi: ["परावर्तन का नियम", "अपवर्तन का नियम", "विक्षेपण का नियम", "विवर्तन का नियम"],
  answer_en: "Law of reflection",
  answer_hi: "परावर्तन का नियम",
  attempted: false,
  selected: ""
},
{
 "num": 24,
  question_en: "What is the formula for density?",
  question_hi: "घनत्व का सूत्र क्या है?",
  options_en: ["Mass/Volume", "Volume/Mass", "Mass × Volume", "Mass + Volume"],
  options_hi: ["द्रव्यमान/आयतन", "आयतन/द्रव्यमान", "द्रव्यमान × आयतन", "द्रव्यमान + आयतन"],
  answer_en: "Mass/Volume",
  answer_hi: "द्रव्यमान/आयतन",
  attempted: false,
  selected: ""
},
{
 "num": 25,
  question_en: "What is the unit of capacitance?",
  question_hi: "धारिता की इकाई क्या है?",
  options_en: ["Farad", "Henry", "Ohm", "Tesla"],
  options_hi: ["फैरड", "हेनरी", "ओम", "टेस्ला"],
  answer_en: "Farad",
  answer_hi: "फैरड",
  attempted: false,
  selected: ""
},
{
 "num": 26,
  question_en: "Which principle states that a body immersed in a fluid experiences an upward force equal to the weight of the fluid displaced?",
  question_hi: "कौन सा सिद्धांत कहता है कि एक तरल में डूबा हुआ पिंड एक ऊपर की ओर बल का अनुभव करता है जो विस्थापित तरल के वजन के बराबर होता है?",
  options_en: ["Archimedes' principle", "Pascal's principle", "Bernoulli's principle", "Newton's principle"],
  options_hi: ["आर्किमिडीज का सिद्धांत", "पास्कल का सिद्धांत", "बर्नौली का सिद्धांत", "न्यूटन का सिद्धांत"],
  answer_en: "Archimedes' principle",
  answer_hi: "आर्किमिडीज का सिद्धांत",
  attempted: false,
  selected: ""
},
{
 "num": 27,
  question_en: "What is the unit of magnetic flux?",
  question_hi: "चुंबकीय फ्लक्स की इकाई क्या है?",
  options_en: ["Weber", "Tesla", "Henry", "Gauss"],
  options_hi: ["वेबर", "टेस्ला", "हेनरी", "गॉस"],
  answer_en: "Weber",
  answer_hi: "वेबर",
  attempted: false,
  selected: ""
},
{
 "num": 28,
  question_en: "What is the formula for Ohm's Law?",
  question_hi: "ओम का नियम का सूत्र क्या है?",
  options_en: ["V = IR", "I = V/R", "R = V/I", "All of the above"],
  options_hi: ["V = IR", "I = V/R", "R = V/I", "उपरोक्त सभी"],
  answer_en: "All of the above",
  answer_hi: "उपरोक्त सभी",
  attempted: false,
  selected: ""
},
{
 "num": 29,
  question_en: "Which type of wave does not require a medium to propagate?",
  question_hi: "किस प्रकार की तरंग को संचरण के लिए माध्यम की आवश्यकता नहीं होती?",
  options_en: ["Electromagnetic waves", "Sound waves", "Water waves", "Seismic waves"],
  options_hi: ["विद्युत चुम्बकीय तरंगें", "ध्वनि तरंगें", "जल तरंगें", "भूकंपीय तरंगें"],
  answer_en: "Electromagnetic waves",
  answer_hi: "विद्युत चुम्बकीय तरंगें",
  attempted: false,
  selected: ""
},
{
 "num": 30,
  question_en: "What is the unit of inductance?",
  question_hi: "प्रेरकत्व की इकाई क्या है?",
  options_en: ["Henry", "Farad", "Ohm", "Weber"],
  options_hi: ["हेनरी", "फैरड", "ओम", "वेबर"],
  answer_en: "Henry",
  answer_hi: "हेनरी",
  attempted: false,
  selected: ""
},
{
 "num": 31,
  question_en: "Which law states that the total energy in an isolated system remains constant?",
  question_hi: "कौन सा नियम कहता है कि एक पृथक प्रणाली में कुल ऊर्जा स्थिर रहती है?",
  options_en: ["Law of conservation of energy", "Law of conservation of mass", "First law of thermodynamics", "Second law of thermodynamics"],
  options_hi: ["ऊर्जा के संरक्षण का नियम", "द्रव्यमान के संरक्षण का नियम", "ऊष्मागतिकी का पहला नियम", "ऊष्मागतिकी का दूसरा नियम"],
  answer_en: "Law of conservation of energy",
  answer_hi: "ऊर्जा के संरक्षण का नियम",
  attempted: false,
  selected: ""
},
{
 "num": 32,
  question_en: "What is the formula for potential energy?",
  question_hi: "स्थितिज ऊर्जा का सूत्र क्या है?",
  options_en: ["mgh", "½ mv²", "Fd", "ma"],
  options_hi: ["mgh", "½ mv²", "Fd", "ma"],
  answer_en: "mgh",
  answer_hi: "mgh",
  attempted: false,
  selected: ""
},
{
 "num": 33,
  question_en: "What is the unit of electric potential?",
  question_hi: "विद्युत विभव की इकाई क्या है?",
  options_en: ["Volt", "Ampere", "Ohm", "Watt"],
  options_hi: ["वोल्ट", "एम्पीयर", "ओम", "वाट"],
  answer_en: "Volt",
  answer_hi: "वोल्ट",
  attempted: false,
  selected: ""
},
{
 "num": 34,
  question_en: "Which particle has a negative charge?",
  question_hi: "किस कण का ऋणात्मक आवेश होता है?",
  options_en: ["Electron", "Proton", "Neutron", "Positron"],
  options_hi: ["इलेक्ट्रॉन", "प्रोटॉन", "न्यूट्रॉन", "पॉजिट्रॉन"],
  answer_en: "Electron",
  answer_hi: "इलेक्ट्रॉन",
  attempted: false,
  selected: ""
},
{
 "num": 35,
  question_en: "What is the formula for power?",
  question_hi: "शक्ति का सूत्र क्या है?",
  options_en: ["Work/Time", "Force × Distance", "Mass × Acceleration", "Voltage × Current"],
  options_hi: ["कार्य/समय", "बल × दूरी", "द्रव्यमान × त्वरण", "वोल्टेज × धारा"],
  answer_en: "Work/Time",
  answer_hi: "कार्य/समय",
  attempted: false,
  selected: ""
},
{
 "num": 36,
  question_en: "What is the unit of magnetic field strength?",
  question_hi: "चुंबकीय क्षेत्र शक्ति की इकाई क्या है?",
  options_en: ["Tesla", "Weber", "Henry", "Gauss"],
  options_hi: ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
  answer_en: "Tesla",
  answer_hi: "टेस्ला",
  attempted: false,
  selected: ""
},
{
 "num": 37,
  question_en: "Which law states that the rate of heat transfer is proportional to the temperature difference?",
  question_hi: "कौन सा नियम कहता है कि ऊष्मा स्थानांतरण की दर तापमान के अंतर के समानुपाती होती है?",
  options_en: ["Newton's law of cooling", "Stefan-Boltzmann law", "Wien's displacement law", "Fourier's law"],
  options_hi: ["न्यूटन का शीतलन नियम", "स्टीफन-बोल्ट्ज़मान नियम", "वीन का विस्थापन नियम", "फूरियर का नियम"],
  answer_en: "Newton's law of cooling",
  answer_hi: "न्यूटन का शीतलन नियम",
  attempted: false,
  selected: ""
},
{
 "num": 38,
  question_en: "What is the speed of light in a vacuum approximately?",
  question_hi: "निर्वात में प्रकाश की गति लगभग कितनी है?",
  options_en: ["3 × 10^8 m/s", "3 × 10^5 m/s", "3 × 10^10 m/s", "3 × 10^3 m/s"],
  options_hi: ["3 × 10^8 मीटर/सेकंड", "3 × 10^5 मीटर/सेकंड", "3 × 10^10 मीटर/सेकंड", "3 × 10^3 मीटर/सेकंड"],
  answer_en: "3 × 10^8 m/s",
  answer_hi: "3 × 10^8 मीटर/सेकंड",
  attempted: false,
  selected: ""
},
{
 "num": 39,
  question_en: "What is the unit of wavelength?",
  question_hi: "तरंग दैर्ध्य की इकाई क्या है?",
  options_en: ["Meter", "Hertz", "Second", "Newton"],
  options_hi: ["मीटर", "हर्ट्ज़", "सेकंड", "न्यूटन"],
  answer_en: "Meter",
  answer_hi: "मीटर",
  attempted: false,
  selected: ""
},
{
 "num": 40,
  question_en: "Which principle is used in hydraulic brakes?",
  question_hi: "हाइड्रोलिक ब्रेक में किस सिद्धांत का उपयोग किया जाता है?",
  options_en: ["Pascal's principle", "Archimedes' principle", "Bernoulli's principle", "Newton's principle"],
  options_hi: ["पास्कल का सिद्धांत", "आर्किमिडीज का सिद्धांत", "बर्नौली का सिद्धांत", "न्यूटन का सिद्धांत"],
  answer_en: "Pascal's principle",
  answer_hi: "पास्कल का सिद्धांत",
  attempted: false,
  selected: ""
},
{
 "num": 41,
  question_en: "What is the formula for momentum?",
  question_hi: "संवेग का सूत्र क्या है?",
  options_en: ["Mass × Velocity", "Mass × Acceleration", "Force × Time", "Work / Time"],
  options_hi: ["द्रव्यमान × वेग", "द्रव्यमान × त्वरण", "बल × समय", "कार्य / समय"],
  answer_en: "Mass × Velocity",
  answer_hi: "द्रव्यमान × वेग",
  attempted: false,
  selected: ""
},
{
 "num": 42,
  question_en: "What is the unit of luminous intensity?",
  question_hi: "ज्योति तीव्रता की इकाई क्या है?",
  options_en: ["Candela", "Lumen", "Lux", "Watt"],
  options_hi: ["कैंडेला", "लुमेन", "लक्स", "वाट"],
  answer_en: "Candela",
  answer_hi: "कैंडेला",
  attempted: false,
  selected: ""
},
{
 "num": 43,
  question_en: "Which law states that the pressure applied to a confined fluid is transmitted equally in all directions?",
  question_hi: "कौन सा नियम कहता है कि एक सीमित तरल पर लगाया गया दबाव सभी दिशाओं में समान रूप से संचरित होता है?",
  options_en: ["Pascal's law", "Archimedes' principle", "Bernoulli's principle", "Boyle's law"],
  options_hi: ["पास्कल का नियम", "आर्किमिडीज का सिद्धांत", "बर्नौली का सिद्धांत", "बॉयल का नियम"],
  answer_en: "Pascal's law",
  answer_hi: "पास्कल का नियम",
  attempted: false,
  selected: ""
},
{
 "num": 44,
  question_en: "What is the formula for gravitational force between two masses?",
  question_hi: "दो द्रव्यमानों के बीच गुरुत्वाकर्षण बल का सूत्र क्या है?",
  options_en: ["F = G(m₁m₂)/r²", "F = ma", "F = kx", "F = qE"],
  options_hi: ["F = G(m₁m₂)/r²", "F = ma", "F = kx", "F = qE"],
  answer_en: "F = G(m₁m₂)/r²",
  answer_hi: "F = G(m₁m₂)/r²",
  attempted: false,
  selected: ""
},
{
 "num": 45,
  question_en: "What is the unit of electric field strength?",
  question_hi: "विद्युत क्षेत्र शक्ति की इकाई क्या है?",
  options_en: ["Volt per meter", "Newton per coulomb", "Both A and B", "Tesla"],
  options_hi: ["वोल्ट प्रति मीटर", "न्यूटन प्रति कूलम्ब", "ए और बी दोनों", "टेस्ला"],
  answer_en: "Both A and B",
  answer_hi: "ए और बी दोनों",
  attempted: false,
  selected: ""
},
{
 "num": 46,
  question_en: "Which principle states that the buoyant force on an object is equal to the weight of the fluid displaced?",
  question_hi: "कौन सा सिद्धांत कहता है कि किसी वस्तु पर उत्प्लावन बल विस्थापित द्रव के वजन के बराबर होता है?",
  options_en: ["Archimedes' principle", "Pascal's principle", "Bernoulli's principle", "Newton's third law"],
  options_hi: ["आर्किमिडीज का सिद्धांत", "पास्कल का सिद्धांत", "बर्नौली का सिद्धांत", "न्यूटन का तीसरा नियम"],
  answer_en: "Archimedes' principle",
  answer_hi: "आर्किमिडीज का सिद्धांत",
  attempted: false,
  selected: ""
},
{
 "num": 47,
  question_en: "What is the formula for work done?",
  question_hi: "किए गए कार्य का सूत्र क्या है?",
  options_en: ["Force × Displacement", "Mass × Velocity", "Power × Time", "Energy / Time"],
  options_hi: ["बल × विस्थापन", "द्रव्यमान × वेग", "शक्ति × समय", "ऊर्जा / समय"],
  answer_en: "Force × Displacement",
  answer_hi: "बल × विस्थापन",
  attempted: false,
  selected: ""
},
{
 "num": 48,
  question_en: "What is the unit of specific heat capacity?",
  question_hi: "विशिष्ट ऊष्मा धारिता की इकाई क्या है?",
  options_en: ["J/(kg·K)", "J/kg", "J/K", "W/(m·K)"],
  options_hi: ["जूल/(किलोग्राम·केल्विन)", "जूल/किलोग्राम", "जूल/केल्विन", "वाट/(मीटर·केल्विन)"],
  answer_en: "J/(kg·K)",
  answer_hi: "जूल/(किलोग्राम·केल्विन)",
  attempted: false,
  selected: ""
},
{
 "num": 49,
  question_en: "Which law states that the volume of a gas is directly proportional to its temperature at constant pressure?",
  question_hi: "कौन सा नियम कहता है कि स्थिर दबाव पर गैस का आयतन उसके तापमान के समानुपाती होता है?",
  options_en: ["Charles's law", "Boyle's law", "Gay-Lussac's law", "Avogadro's law"],
  options_hi: ["चार्ल्स का नियम", "बॉयल का नियम", "गे-लुसाक का नियम", "अवोगाद्रो का नियम"],
  answer_en: "Charles's law",
  answer_hi: "चार्ल्स का नियम",
  attempted: false,
  selected: ""
},
{
 "num": 50,
  question_en: "What is the formula for the refractive index?",
  question_hi: "अपवर्तनांक का सूत्र क्या है?",
  options_en: ["Speed of light in vacuum / Speed of light in medium", "Speed of light in medium / Speed of light in vacuum", "Angle of incidence / Angle of refraction", "Sine of angle of incidence / Sine of angle of refraction"],
  options_hi: ["निर्वात में प्रकाश की गति / माध्यम में प्रकाश की गति", "माध्यम में प्रकाश की गति / निर्वात में प्रकाश की गति", "आपतन कोण / अपवर्तन कोण", "आपतन कोण की ज्या / अपवर्तन कोण की ज्या"],
  answer_en: "Speed of light in vacuum / Speed of light in medium",
  answer_hi: "निर्वात में प्रकाश की गति / माध्यम में प्रकाश की गति",
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