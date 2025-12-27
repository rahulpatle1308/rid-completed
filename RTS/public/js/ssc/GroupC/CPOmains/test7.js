const questions = [
  {
    "num":1,
    "question_en": "The work function of a metal is 2.5 eV. What is the threshold frequency for photoelectric emission? (h = 6.63 × 10⁻³⁴ J·s)",
    "question_hi": "एक धातु का कार्य फलन 2.5 eV है। प्रकाशविद्युत उत्सर्जन के लिए देहली आवृत्ति क्या है? (h = 6.63 × 10⁻³⁴ J·s)",
    "options_en": ["6.04 × 10¹⁴ Hz", "4.84 × 10¹⁴ Hz", "3.02 × 10¹⁴ Hz", "2.42 × 10¹⁴ Hz"],
    "options_hi": ["6.04 × 10¹⁴ Hz", "4.84 × 10¹⁴ Hz", "3.02 × 10¹⁴ Hz", "2.42 × 10¹⁴ Hz"],
    "answer_en": "6.04 × 10¹⁴ Hz",
    "answer_hi": "6.04 × 10¹⁴ Hz",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "A particle executes SHM with amplitude 5 cm and time period 2 seconds. What is its maximum acceleration?",
    "question_hi": "एक कण 5 सेमी आयाम और 2 सेकंड आवर्तकाल से सरल आवर्त गति करता है। इसका अधिकतम त्वरण क्या है?",
    "options_en": ["0.5 m/s²", "0.05π² m/s²", "0.5π² m/s²", "5π² m/s²"],
    "options_hi": ["0.5 मी/से²", "0.05π² मी/से²", "0.5π² मी/से²", "5π² मी/से²"],
    "answer_en": "0.05π² m/s²",
    "answer_hi": "0.05π² मी/से²",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "What is the de Broglie wavelength of an electron accelerated through 100 V potential?",
    "question_hi": "100 V विभवांतर से त्वरित इलेक्ट्रॉन की डी ब्रोग्ली तरंगदैर्ध्य क्या है?",
    "options_en": ["1.23 Å", "12.3 Å", "0.123 Å", "123 Å"],
    "options_hi": ["1.23 Å", "12.3 Å", "0.123 Å", "123 Å"],
    "answer_en": "1.23 Å",
    "answer_hi": "1.23 Å",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "A Carnot engine operates between 400 K and 300 K. Its efficiency is:",
    "question_hi": "एक कार्नोट इंजन 400 K और 300 K के बीच कार्य करता है। इसकी दक्षता है:",
    "options_en": ["25%", "30%", "40%", "75%"],
    "options_hi": ["25%", "30%", "40%", "75%"],
    "answer_en": "25%",
    "answer_hi": "25%",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "The ratio of specific heats (Cp/Cv) for a monatomic gas is:",
    "question_hi": "एकपरमाणुक गैस के लिए विशिष्ट ऊष्माओं का अनुपात (Cp/Cv) है:",
    "options_en": ["1.33", "1.40", "1.67", "1.50"],
    "options_hi": ["1.33", "1.40", "1.67", "1.50"],
    "answer_en": "1.67",
    "answer_hi": "1.67",
    "attempted": false,
    "selected": ""
  },
  {
    "num":6,
    "question_en": "A parallel plate capacitor has capacitance C. If the distance between plates is halved and area is doubled, the new capacitance is:",
    "question_hi": "एक समांतर प्लेट संधारित्र की धारिता C है। यदि प्लेटों के बीच की दूरी आधी कर दी जाए और क्षेत्रफल दोगुना कर दिया जाए, तो नई धारिता है:",
    "options_en": ["C", "2C", "4C", "8C"],
    "options_hi": ["C", "2C", "4C", "8C"],
    "answer_en": "4C",
    "answer_hi": "4C",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "The energy stored in an inductor of inductance L carrying current I is:",
    "question_hi": "प्रेरकत्व L के एक प्रेरक में संचित ऊर्जा जो धारा I वहन कर रहा है, है:",
    "options_en": ["½LI²", "LI²", "½L²I", "L²I²"],
    "options_hi": ["½LI²", "LI²", "½L²I", "L²I²"],
    "answer_en": "½LI²",
    "answer_hi": "½LI²",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "In Young's double slit experiment, the fringe width is β. If the distance between slits is doubled, the new fringe width becomes:",
    "question_hi": "यंग के द्वि-छिद्र प्रयोग में, फ्रिंज चौड़ाई β है। यदि छिद्रों के बीच की दूरी दोगुनी कर दी जाए, तो नई फ्रिंज चौड़ाई हो जाती है:",
    "options_en": ["β/2", "β", "2β", "4β"],
    "options_hi": ["β/2", "β", "2β", "4β"],
    "answer_en": "β/2",
    "answer_hi": "β/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "The half-life of a radioactive element is 10 days. What fraction remains undecayed after 30 days?",
    "question_hi": "एक रेडियोधर्मी तत्व का अर्ध-आयुकाल 10 दिन है। 30 दिन बाद कितना अंश अक्षुण्ण रहता है?",
    "options_en": ["1/2", "1/4", "1/8", "1/16"],
    "options_hi": ["1/2", "1/4", "1/8", "1/16"],
    "answer_en": "1/8",
    "answer_hi": "1/8",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "A convex lens of focal length 20 cm is placed in contact with a concave lens of focal length 10 cm. The power of combination is:",
    "question_hi": "20 सेमी फोकस दूरी का एक उत्तल लेंस 10 सेमी फोकस दूरी के एक अवतल लेंस के संपर्क में रखा जाता है। संयोजन की क्षमता है:",
    "options_en": ["+5 D", "-5 D", "+10 D", "-10 D"],
    "options_hi": ["+5 D", "-5 D", "+10 D", "-10 D"],
    "answer_en": "-5 D",
    "answer_hi": "-5 D",
    "attempted": false,
    "selected": ""
  },
  {
    "num":11,
    "question_en": "The magnetic flux through a coil changes from 2 Wb to 10 Wb in 0.4 seconds. The induced emf is:",
    "question_hi": "एक कुंडली से गुजरने वाला चुंबकीय फ्लक्स 0.4 सेकंड में 2 Wb से 10 Wb तक बदलता है। प्रेरित विद्युत वाहक बल है:",
    "options_en": ["20 V", "30 V", "-20 V", "-30 V"],
    "options_hi": ["20 V", "30 V", "-20 V", "-30 V"],
    "answer_en": "-20 V",
    "answer_hi": "-20 V",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "A particle of mass m moves in a circle of radius r with speed v. Its centripetal force is:",
    "question_hi": "द्रव्यमान m का एक कण त्रिज्या r के वृत्त में गति v से गति करता है। इसका अभिकेंद्री बल है:",
    "options_en": ["mv²/r", "mv/r", "mv²/r²", "mvr"],
    "options_hi": ["mv²/r", "mv/r", "mv²/r²", "mvr"],
    "answer_en": "mv²/r",
    "answer_hi": "mv²/r",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "In a p-n junction diode, the barrier potential is 0.7 V for silicon and 0.3 V for germanium. This is because:",
    "question_hi": "एक p-n संधि डायोड में, अवरोध विभव सिलिकॉन के लिए 0.7 V और जर्मेनियम के लिए 0.3 V है। ऐसा इसलिए है क्योंकि:",
    "options_en": ["Silicon has larger energy gap", "Germanium has larger energy gap", "Both have same energy gap", "Doping concentration differs"],
    "options_hi": ["सिलिकॉन की ऊर्जा अंतराल बड़ी होती है", "जर्मेनियम की ऊर्जा अंतराल बड़ी होती है", "दोनों का ऊर्जा अंतराल समान होता है", "डोपन सांद्रता भिन्न होती है"],
    "answer_en": "Silicon has larger energy gap",
    "answer_hi": "सिलिकॉन की ऊर्जा अंतराल बड़ी होती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "The mass defect in nuclear binding energy is converted to energy according to:",
    "question_hi": "नाभिकीय बंधन ऊर्जा में द्रव्यमान क्षति ऊर्जा में परिवर्तित होती है, के अनुसार:",
    "options_en": ["E = mc²", "E = hν", "E = ½mv²", "E = kq₁q₂/r"],
    "options_hi": ["E = mc²", "E = hν", "E = ½mv²", "E = kq₁q₂/r"],
    "answer_en": "E = mc²",
    "answer_hi": "E = mc²",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
    "question_en": "A transformer has 100 turns in primary and 200 turns in secondary. If input voltage is 220 V AC, output voltage is:",
    "question_hi": "एक ट्रांसफॉर्मर में प्राथमिक में 100 फेरे और द्वितीयक में 200 फेरे हैं। यदि निवेश वोल्टेज 220 V AC है, तो निर्गत वोल्टेज है:",
    "options_en": ["110 V", "220 V", "440 V", "880 V"],
    "options_hi": ["110 V", "220 V", "440 V", "880 V"],
    "answer_en": "440 V",
    "answer_hi": "440 V",
    "attempted": false,
    "selected": ""
  },
  {
    "num":16,
    "question_en": "The critical angle for a medium is 30°. Its refractive index is:",
    "question_hi": "एक माध्यम के लिए क्रांतिक कोण 30° है। इसका अपवर्तनांक है:",
    "options_en": ["1.5", "2.0", "√2", "2.5"],
    "options_hi": ["1.5", "2.0", "√2", "2.5"],
    "answer_en": "2.0",
    "answer_hi": "2.0",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "In Bohr's model of hydrogen atom, the radius of first orbit is r. The radius of third orbit is:",
    "question_hi": "हाइड्रोजन परमाणु के बोहर मॉडल में, पहली कक्षा की त्रिज्या r है। तीसरी कक्षा की त्रिज्या है:",
    "options_en": ["3r", "6r", "9r", "27r"],
    "options_hi": ["3r", "6r", "9r", "27r"],
    "answer_en": "9r",
    "answer_hi": "9r",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "The RMS value of AC is 10 A. Its peak value is:",
    "question_hi": "AC का RMS मान 10 A है। इसका शिखर मान है:",
    "options_en": ["7.07 A", "10 A", "14.14 A", "20 A"],
    "options_hi": ["7.07 A", "10 A", "14.14 A", "20 A"],
    "answer_en": "14.14 A",
    "answer_hi": "14.14 A",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "Two resistors 3Ω and 6Ω are connected in parallel. Their equivalent resistance is:",
    "question_hi": "दो प्रतिरोधक 3Ω और 6Ω समांतर क्रम में जुड़े हैं। उनका तुल्य प्रतिरोध है:",
    "options_en": ["2Ω", "3Ω", "4Ω", "9Ω"],
    "options_hi": ["2Ω", "3Ω", "4Ω", "9Ω"],
    "answer_en": "2Ω",
    "answer_hi": "2Ω",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "The dimensional formula for angular momentum is:",
    "question_hi": "कोणीय संवेग का विमीय सूत्र है:",
    "options_en": ["ML²T⁻¹", "MLT⁻¹", "ML²T⁻²", "MLT⁻²"],
    "options_hi": ["ML²T⁻¹", "MLT⁻¹", "ML²T⁻²", "MLT⁻²"],
    "answer_en": "ML²T⁻¹",
    "answer_hi": "ML²T⁻¹",
    "attempted": false,
    "selected": ""
  },
  {
    "num":21,
    "question_en": "A body is projected at angle θ with horizontal. At the highest point of its trajectory, its:",
    "question_hi": "एक पिंड को क्षैतिज से θ कोण पर प्रक्षेपित किया जाता है। इसके प्रक्षेप पथ के उच्चतम बिंदु पर, इसका:",
    "options_en": ["Kinetic energy is minimum", "Potential energy is maximum", "Velocity is horizontal", "All of the above"],
    "options_hi": ["गतिज ऊर्जा न्यूनतम होती है", "स्थितिज ऊर्जा अधिकतम होती है", "वेग क्षैतिज होता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
    "question_en": "In a common emitter amplifier, the phase difference between input and output signals is:",
    "question_hi": "एक उभयनिष्ठ उत्सर्जक प्रवर्धक में, निवेश और निर्गत सिग्नलों के बीच कलांतर है:",
    "options_en": ["0°", "90°", "180°", "360°"],
    "options_hi": ["0°", "90°", "180°", "360°"],
    "answer_en": "180°",
    "answer_hi": "180°",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "The temperature at which Celsius and Fahrenheit scales give same reading is:",
    "question_hi": "वह तापमान जिस पर सेल्सियस और फारेनहाइट पैमाने समान पाठ्यांक देते हैं, है:",
    "options_en": ["-40°", "-32°", "0°", "100°"],
    "options_hi": ["-40°", "-32°", "0°", "100°"],
    "answer_en": "-40°",
    "answer_hi": "-40°",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "A wire of resistance R is stretched to double its length. Its new resistance becomes:",
    "question_hi": "प्रतिरोध R का एक तार खींचकर उसकी लंबाई दोगुनी कर दी जाती है। इसका नया प्रतिरोध हो जाता है:",
    "options_en": ["R", "2R", "4R", "R/2"],
    "options_hi": ["R", "2R", "4R", "R/2"],
    "answer_en": "4R",
    "answer_hi": "4R",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
    "question_en": "The force between two parallel current carrying conductors is proportional to:",
    "question_hi": "दो समांतर धारावाही चालकों के बीच बल समानुपाती होता है:",
    "options_en": ["Product of currents", "Inverse of distance", "Both A and B", "None of these"],
    "options_hi": ["धाराओं के गुणनफल के", "दूरी के व्युत्क्रमानुपाती", "A और B दोनों", "इनमें से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num":26,
    "question_en": "In a purely inductive AC circuit, current:",
    "question_hi": "एक पूर्णतः प्रेरणिक AC परिपथ में, धारा:",
    "options_en": ["Lags voltage by 90°", "Leads voltage by 90°", "Is in phase with voltage", "Lags voltage by 180°"],
    "options_hi": ["वोल्टेज से 90° पश्चगामी होती है", "वोल्टेज से 90° अग्रगामी होती है", "वोल्टेज के साथ समान कला में होती है", "वोल्टेज से 180° पश्चगामी होती है"],
    "answer_en": "Lags voltage by 90°",
    "answer_hi": "वोल्टेज से 90° पश्चगामी होती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":27,
    "question_en": "The ratio of intensities of two waves is 16:1. The ratio of their amplitudes is:",
    "question_hi": "दो तरंगों की तीव्रताओं का अनुपात 16:1 है। उनके आयामों का अनुपात है:",
    "options_en": ["4:1", "16:1", "2:1", "1:4"],
    "options_hi": ["4:1", "16:1", "2:1", "1:4"],
    "answer_en": "4:1",
    "answer_hi": "4:1",
    "attempted": false,
    "selected": ""
  },
  {
    "num":28,
    "question_en": "A satellite orbits Earth at height where g is 1/4th of its surface value. If R is Earth's radius, the height is:",
    "question_hi": "एक उपग्रह पृथ्वी की ऐसी ऊँचाई पर कक्षा में है जहाँ g उसके सतही मान का 1/4 है। यदि R पृथ्वी की त्रिज्या है, तो ऊँचाई है:",
    "options_en": ["R", "2R", "3R", "4R"],
    "options_hi": ["R", "2R", "3R", "4R"],
    "answer_en": "R",
    "answer_hi": "R",
    "attempted": false,
    "selected": ""
  },
  {
    "num":29,
    "question_en": "The minimum energy required to launch a satellite of mass m from Earth's surface into circular orbit at height 2R (R = Earth's radius) is:",
    "question_hi": "द्रव्यमान m के एक उपग्रह को पृथ्वी की सतह से 2R (R = पृथ्वी की त्रिज्या) ऊँचाई पर वृत्ताकार कक्षा में प्रक्षेपित करने के लिए आवश्यक न्यूनतम ऊर्जा है:",
    "options_en": ["(2/3)mgR", "(3/4)mgR", "mgR", "(5/6)mgR"],
    "options_hi": ["(2/3)mgR", "(3/4)mgR", "mgR", "(5/6)mgR"],
    "answer_en": "(5/6)mgR",
    "answer_hi": "(5/6)mgR",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "In a series LCR circuit at resonance, the impedance is:",
    "question_hi": "अनुनाद पर एक श्रेणी LCR परिपथ में, प्रतिबाधा है:",
    "options_en": ["Maximum", "Minimum", "Zero", "Infinity"],
    "options_hi": ["अधिकतम", "न्यूनतम", "शून्य", "अनंत"],
    "answer_en": "Minimum",
    "answer_hi": "न्यूनतम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":31,
    "question_en": "The energy of a photon of wavelength 5000 Å is: (h = 6.63 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s)",
    "question_hi": "5000 Å तरंगदैर्ध्य के एक फोटॉन की ऊर्जा है: (h = 6.63 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s)",
    "options_en": ["2.48 eV", "3.98 eV", "1.24 eV", "4.96 eV"],
    "options_hi": ["2.48 eV", "3.98 eV", "1.24 eV", "4.96 eV"],
    "answer_en": "2.48 eV",
    "answer_hi": "2.48 eV",
    "attempted": false,
    "selected": ""
  },
  {
    "num":32,
    "question_en": "A body of mass 2 kg moving with velocity 3 m/s collides with a body of mass 1 kg at rest. After collision they move together. Their common velocity is:",
    "question_hi": "2 किग्रा द्रव्यमान का एक पिंड 3 मी/से वेग से गतिमान है, विरामावस्था में 1 किग्रा द्रव्यमान के पिंड से टकराता है। टक्कर के बाद वे एक साथ गति करते हैं। उनका उभयनिष्ठ वेग है:",
    "options_en": ["1 m/s", "2 m/s", "3 m/s", "4 m/s"],
    "options_hi": ["1 मी/से", "2 मी/से", "3 मी/से", "4 मी/से"],
    "answer_en": "2 m/s",
    "answer_hi": "2 मी/से",
    "attempted": false,
    "selected": ""
  },
  {
    "num":33,
    "question_en": "The magnetic field at the center of a circular coil of n turns, radius r carrying current I is:",
    "question_hi": "n फेरों, त्रिज्या r और धारा I वहन करने वाली एक वृत्ताकार कुंडली के केंद्र पर चुंबकीय क्षेत्र है:",
    "options_en": ["μ₀nI/2r", "μ₀nI/2πr", "μ₀nI/r", "μ₀nI/πr"],
    "options_hi": ["μ₀nI/2r", "μ₀nI/2πr", "μ₀nI/r", "μ₀nI/πr"],
    "answer_en": "μ₀nI/2r",
    "answer_hi": "μ₀nI/2r",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "In a moving coil galvanometer, the deflection θ is proportional to:",
    "question_hi": "एक चल कुंडली गैल्वेनोमीटर में, विक्षेपण θ समानुपाती होता है:",
    "options_en": ["Current", "Square of current", "Voltage", "Resistance"],
    "options_hi": ["धारा के", "धारा के वर्ग के", "वोल्टेज के", "प्रतिरोध के"],
    "answer_en": "Current",
    "answer_hi": "धारा के",
    "attempted": false,
    "selected": ""
  },
  {
    "num":35,
    "question_en": "The temperature of a gas is raised from 27°C to 927°C. The RMS speed of its molecules becomes:",
    "question_hi": "एक गैस का तापमान 27°C से 927°C तक बढ़ाया जाता है। इसके अणुओं का RMS वेग हो जाता है:",
    "options_en": ["Same", "Double", "3 times", "4 times"],
    "options_hi": ["समान", "दोगुना", "3 गुना", "4 गुना"],
    "answer_en": "Double",
    "answer_hi": "दोगुना",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "A spring of force constant k is cut into two equal parts. The force constant of each part is:",
    "question_hi": "बल नियतांक k की एक स्प्रिंग को दो बराबर भागों में काटा जाता है। प्रत्येक भाग का बल नियतांक है:",
    "options_en": ["k", "2k", "k/2", "k/4"],
    "options_hi": ["k", "2k", "k/2", "k/4"],
    "answer_en": "2k",
    "answer_hi": "2k",
    "attempted": false,
    "selected": ""
  },
  {
    "num":37,
    "question_en": "In a p-type semiconductor, majority charge carriers are:",
    "question_hi": "एक p-प्रकार अर्धचालक में, बहुसंख्यक आवेश वाहक हैं:",
    "options_en": ["Electrons", "Holes", "Protons", "Neutrons"],
    "options_hi": ["इलेक्ट्रॉन", "होल", "प्रोटॉन", "न्यूट्रॉन"],
    "answer_en": "Holes",
    "answer_hi": "होल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":38,
    "question_en": "The refractive index of water is 4/3. The speed of light in water is:",
    "question_hi": "पानी का अपवर्तनांक 4/3 है। पानी में प्रकाश की गति है:",
    "options_en": ["2.25 × 10⁸ m/s", "3 × 10⁸ m/s", "4 × 10⁸ m/s", "1.5 × 10⁸ m/s"],
    "options_hi": ["2.25 × 10⁸ मी/से", "3 × 10⁸ मी/से", "4 × 10⁸ मी/से", "1.5 × 10⁸ मी/से"],
    "answer_en": "2.25 × 10⁸ m/s",
    "answer_hi": "2.25 × 10⁸ मी/से",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "The efficiency of a heat engine is 25%. If it absorbs 800 J of heat per cycle, work done per cycle is:",
    "question_hi": "एक ऊष्मा इंजन की दक्षता 25% है। यदि यह प्रति चक्र 800 J ऊष्मा अवशोषित करता है, तो प्रति चक्र किया गया कार्य है:",
    "options_en": ["200 J", "400 J", "600 J", "800 J"],
    "options_hi": ["200 J", "400 J", "600 J", "800 J"],
    "answer_en": "200 J",
    "answer_hi": "200 J",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "In a transistor, the ratio of collector current to emitter current is 0.98. The current gain β is approximately:",
    "question_hi": "एक ट्रांजिस्टर में, संग्राहक धारा का उत्सर्जक धारा से अनुपात 0.98 है। धारा लाभ β लगभग है:",
    "options_en": ["49", "98", "100", "150"],
    "options_hi": ["49", "98", "100", "150"],
    "answer_en": "49",
    "answer_hi": "49",
    "attempted": false,
    "selected": ""
  },
  {
    "num":41,
    "question_en": "A body cools from 80°C to 64°C in 5 minutes. The time taken to cool from 64°C to 52°C is: (Room temp = 24°C)",
    "question_hi": "एक पिंड 5 मिनट में 80°C से 64°C तक ठंडा होता है। 64°C से 52°C तक ठंडा होने में लगा समय है: (कक्ष ताप = 24°C)",
    "options_en": ["5 minutes", "6.25 minutes", "7.5 minutes", "10 minutes"],
    "options_hi": ["5 मिनट", "6.25 मिनट", "7.5 मिनट", "10 मिनट"],
    "answer_en": "7.5 minutes",
    "answer_hi": "7.5 मिनट",
    "attempted": false,
    "selected": ""
  },
  {
    "num":42,
    "question_en": "The binding energy per nucleon is maximum for:",
    "question_hi": "निम्न में से किसके लिए प्रति न्यूक्लियॉन बंधन ऊर्जा अधिकतम है?",
    "options_en": ["Hydrogen", "Helium", "Iron", "Uranium"],
    "options_hi": ["हाइड्रोजन", "हीलियम", "आयरन", "यूरेनियम"],
    "answer_en": "Iron",
    "answer_hi": "आयरन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
    "question_en": "A particle of charge q and mass m enters a uniform magnetic field B perpendicularly with speed v. The radius of its circular path is:",
    "question_hi": "आवेश q और द्रव्यमान m का एक कण एकसमान चुंबकीय क्षेत्र B में लंबवत गति v से प्रवेश करता है। इसके वृत्ताकार पथ की त्रिज्या है:",
    "options_en": ["mv/qB", "qB/mv", "mv²/qB", "qB/mv²"],
    "options_hi": ["mv/qB", "qB/mv", "mv²/qB", "qB/mv²"],
    "answer_en": "mv/qB",
    "answer_hi": "mv/qB",
    "attempted": false,
    "selected": ""
  },
  {
    "num":44,
    "question_en": "The potential energy of a particle executing SHM is maximum when its displacement from mean position is:",
    "question_hi": "सरल आवर्त गति कर रहे कण की स्थितिज ऊर्जा अधिकतम होती है जब इसका माध्य स्थिति से विस्थापन होता है:",
    "options_en": ["Zero", "Maximum", "Half of amplitude", "One-fourth of amplitude"],
    "options_hi": ["शून्य", "अधिकतम", "आयाम का आधा", "आयाम का एक-चौथाई"],
    "answer_en": "Maximum",
    "answer_hi": "अधिकतम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
    "question_en": "In a photoelectric experiment, the stopping potential is 2 V. The maximum kinetic energy of photoelectrons is:",
    "question_hi": "एक प्रकाशविद्युत प्रयोग में, निरोधी विभव 2 V है। प्रकाशविद्युत इलेक्ट्रॉनों की अधिकतम गतिज ऊर्जा है:",
    "options_en": ["1 eV", "2 eV", "3 eV", "4 eV"],
    "options_hi": ["1 eV", "2 eV", "3 eV", "4 eV"],
    "answer_en": "2 eV",
    "answer_hi": "2 eV",
    "attempted": false,
    "selected": ""
  },
  {
    "num":46,
    "question_en": "The dimensional formula for Planck's constant is:",
    "question_hi": "प्लांक नियतांक का विमीय सूत्र है:",
    "options_en": ["ML²T⁻¹", "MLT⁻¹", "ML²T⁻²", "MLT"],
    "options_hi": ["ML²T⁻¹", "MLT⁻¹", "ML²T⁻²", "MLT"],
    "answer_en": "ML²T⁻¹",
    "answer_hi": "ML²T⁻¹",
    "attempted": false,
    "selected": ""
  },
  {
    "num":47,
    "question_en": "In a step-up transformer:",
    "question_hi": "एक स्टेप-अप ट्रांसफॉर्मर में:",
    "options_en": ["Turns ratio > 1", "Voltage increases", "Current decreases", "All of these"],
    "options_hi": ["फेरा अनुपात > 1", "वोल्टेज बढ़ता है", "धारा घटती है", "उपरोक्त सभी"],
    "answer_en": "All of these",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":48,
    "question_en": "The ratio of energies of two photons of wavelengths 4000 Å and 6000 Å is:",
    "question_hi": "4000 Å और 6000 Å तरंगदैर्ध्य वाले दो फोटॉनों की ऊर्जाओं का अनुपात है:",
    "options_en": ["2:3", "3:2", "4:9", "9:4"],
    "options_hi": ["2:3", "3:2", "4:9", "9:4"],
    "answer_en": "3:2",
    "answer_hi": "3:2",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "A body is thrown vertically upward with velocity u. The height at which its kinetic energy becomes half of initial value is:",
    "question_hi": "एक पिंड को ऊर्ध्वाधर ऊपर की ओर वेग u से फेंका जाता है। वह ऊँचाई जिस पर इसकी गतिज ऊर्जा प्रारंभिक मान की आधी हो जाती है, है:",
    "options_en": ["u²/2g", "u²/4g", "u²/8g", "3u²/8g"],
    "options_hi": ["u²/2g", "u²/4g", "u²/8g", "3u²/8g"],
    "answer_en": "u²/4g",
    "answer_hi": "u²/4g",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "In a uniform electric field E, the torque on an electric dipole of moment p is maximum when angle between p and E is:",
    "question_hi": "एकसमान विद्युत क्षेत्र E में, आघूर्ण p के एक विद्युत द्विध्रुव पर बल आघूर्ण अधिकतम होता है जब p और E के बीच कोण है:",
    "options_en": ["0°", "45°", "90°", "180°"],
    "options_hi": ["0°", "45°", "90°", "180°"],
    "answer_en": "90°",
    "answer_hi": "90°",
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