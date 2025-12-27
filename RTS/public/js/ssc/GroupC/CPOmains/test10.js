const questions = [
 
  {
    "num":1,
    "question_en": "Which of the following particles has the smallest charge-to-mass ratio?",
    "question_hi": "निम्नलिखित में से किस कण का आवेश-द्रव्यमान अनुपात सबसे छोटा है?",
    "options_en": ["Electron", "Proton", "Alpha particle", "Neutron"],
    "options_hi": ["इलेक्ट्रॉन", "प्रोटॉन", "अल्फा कण", "न्यूट्रॉन"],
    "answer_en": "Alpha particle",
    "answer_hi": "अल्फा कण",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "A capillary tube of radius r is immersed in a liquid. If the radius is doubled, the height of liquid column will become:",
    "question_hi": "त्रिज्या r की एक केशिका नलिका को द्रव में डुबोया जाता है। यदि त्रिज्या दोगुनी कर दी जाए, तो द्रव स्तंभ की ऊँचाई हो जाएगी:",
    "options_en": ["Double", "Half", "One-fourth", "Four times"],
    "options_hi": ["दोगुनी", "आधी", "एक-चौथाई", "चार गुनी"],
    "answer_en": "Half",
    "answer_hi": "आधी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "The magnetic field due to a long straight current carrying conductor at a distance r from it is proportional to:",
    "question_hi": "एक लंबे सीधे धारावाही चालक के कारण उससे r दूरी पर चुंबकीय क्षेत्र समानुपाती होता है:",
    "options_en": ["r", "r²", "1/r", "1/r²"],
    "options_hi": ["r", "r²", "1/r", "1/r²"],
    "answer_en": "1/r",
    "answer_hi": "1/r",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "In a series LCR circuit, the voltage across inductor leads the current by:",
    "question_hi": "एक श्रेणी LCR परिपथ में, प्रेरक के सिरों पर वोल्टेज धारा से अग्रगामी होता है:",
    "options_en": ["0°", "45°", "90°", "180°"],
    "options_hi": ["0°", "45°", "90°", "180°"],
    "answer_en": "90°",
    "answer_hi": "90°",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "The temperature coefficient of resistance for a semiconductor is:",
    "question_hi": "एक अर्धचालक के लिए प्रतिरोध का ताप गुणांक है:",
    "options_en": ["Positive", "Negative", "Zero", "Infinite"],
    "options_hi": ["धनात्मक", "ऋणात्मक", "शून्य", "अनंत"],
    "answer_en": "Negative",
    "answer_hi": "ऋणात्मक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":6,
    "question_en": "A body is floating in water with 2/3 of its volume submerged. Its density relative to water is:",
    "question_hi": "एक पिंड पानी में तैर रहा है जिसके आयतन का 2/3 भाग डूबा हुआ है। पानी के सापेक्ष इसका घनत्व है:",
    "options_en": ["2/3", "3/2", "1/3", "1"],
    "options_hi": ["2/3", "3/2", "1/3", "1"],
    "answer_en": "2/3",
    "answer_hi": "2/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "The phase difference between displacement and velocity in SHM is:",
    "question_hi": "सरल आवर्त गति में विस्थापन और वेग के बीच कलांतर है:",
    "options_en": ["0°", "45°", "90°", "180°"],
    "options_hi": ["0°", "45°", "90°", "180°"],
    "answer_en": "90°",
    "answer_hi": "90°",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "In a transistor, the collector current is controlled by:",
    "question_hi": "एक ट्रांजिस्टर में, संग्राहक धारा नियंत्रित होती है:",
    "options_en": ["Collector voltage", "Base current", "Emitter voltage", "Collector resistance"],
    "options_hi": ["संग्राहक वोल्टेज", "आधार धारा", "उत्सर्जक वोल्टेज", "संग्राहक प्रतिरोध"],
    "answer_en": "Base current",
    "answer_hi": "आधार धारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "The focal length of a spherical mirror is equal to:",
    "question_hi": "एक गोलीय दर्पण की फोकस दूरी बराबर होती है:",
    "options_en": ["R/2", "R", "2R", "R/4"],
    "options_hi": ["R/2", "R", "2R", "R/4"],
    "answer_en": "R/2",
    "answer_hi": "R/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "The energy gap between valence band and conduction band in an insulator is typically:",
    "question_hi": "एक कुचालक में संयोजकता बैंड और चालन बैंड के बीच ऊर्जा अंतराल सामान्यतः होता है:",
    "options_en": ["0.1-0.5 eV", "0.5-1.0 eV", "1.0-3.0 eV", "More than 5 eV"],
    "options_hi": ["0.1-0.5 eV", "0.5-1.0 eV", "1.0-3.0 eV", "5 eV से अधिक"],
    "answer_en": "More than 5 eV",
    "answer_hi": "5 eV से अधिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":11,
    "question_en": "The magnetic field lines inside a bar magnet are:",
    "question_hi": "एक छड़ चुंबक के अंदर चुंबकीय क्षेत्र रेखाएँ होती हैं:",
    "options_en": ["From N to S", "From S to N", "Circular", "Radial"],
    "options_hi": ["N से S की ओर", "S से N की ओर", "वृत्ताकार", "रेडियल"],
    "answer_en": "From S to N",
    "answer_hi": "S से N की ओर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "A body is projected at an angle θ with horizontal. The horizontal range is maximum when θ is:",
    "question_hi": "एक पिंड को क्षैतिज से θ कोण पर प्रक्षेपित किया जाता है। क्षैतिज परास अधिकतम होती है जब θ है:",
    "options_en": ["30°", "45°", "60°", "90°"],
    "options_hi": ["30°", "45°", "60°", "90°"],
    "answer_en": "45°",
    "answer_hi": "45°",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "The phenomenon of persistence of hearing in human ear is about:",
    "question_hi": "मानव कान में श्रवण की दृढ़ता की घटना लगभग है:",
    "options_en": ["0.1 second", "0.5 second", "1 second", "2 seconds"],
    "options_hi": ["0.1 सेकंड", "0.5 सेकंड", "1 सेकंड", "2 सेकंड"],
    "answer_en": "0.1 second",
    "answer_hi": "0.1 सेकंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "The heat required to change 1 kg of ice at 0°C to water at 0°C is called:",
    "question_hi": "0°C पर 1 किग्रा बर्फ को 0°C पर पानी में बदलने के लिए आवश्यक ऊष्मा कहलाती है:",
    "options_en": ["Specific heat", "Latent heat of fusion", "Latent heat of vaporization", "Heat capacity"],
    "options_hi": ["विशिष्ट ऊष्मा", "गलन की गुप्त ऊष्मा", "वाष्पन की गुप्त ऊष्मा", "ऊष्मा धारिता"],
    "answer_en": "Latent heat of fusion",
    "answer_hi": "गलन की गुप्त ऊष्मा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
    "question_en": "The law that explains the working of a rocket is:",
    "question_hi": "वह नियम जो रॉकेट के कार्य करने की व्याख्या करता है, है:",
    "options_en": ["Newton's first law", "Newton's second law", "Newton's third law", "Law of gravitation"],
    "options_hi": ["न्यूटन का पहला नियम", "न्यूटन का दूसरा नियम", "न्यूटन का तीसरा नियम", "गुरुत्वाकर्षण का नियम"],
    "answer_en": "Newton's third law",
    "answer_hi": "न्यूटन का तीसरा नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":16,
    "question_en": "The device used to measure the intensity of earthquake is called:",
    "question_hi": "भूकंप की तीव्रता मापने के लिए प्रयुक्त उपकरण कहलाता है:",
    "options_en": ["Seismograph", "Barometer", "Hygrometer", "Thermometer"],
    "options_hi": ["सीस्मोग्राफ", "बैरोमीटर", "हाइग्रोमीटर", "थर्मामीटर"],
    "answer_en": "Seismograph",
    "answer_hi": "सीस्मोग्राफ",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "The refractive index of a medium is 1.5. The speed of light in that medium is:",
    "question_hi": "एक माध्यम का अपवर्तनांक 1.5 है। उस माध्यम में प्रकाश की गति है:",
    "options_en": ["2 × 10⁸ m/s", "3 × 10⁸ m/s", "1.5 × 10⁸ m/s", "2.25 × 10⁸ m/s"],
    "options_hi": ["2 × 10⁸ मी/से", "3 × 10⁸ मी/से", "1.5 × 10⁸ मी/से", "2.25 × 10⁸ मी/से"],
    "answer_en": "2 × 10⁸ m/s",
    "answer_hi": "2 × 10⁸ मी/से",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "The process by which a gas changes directly to solid without passing through liquid state is called:",
    "question_hi": "वह प्रक्रिया जिसके द्वारा एक गैस बिना द्रव अवस्था से गुजरे सीधे ठोस में बदल जाती है, कहलाती है:",
    "options_en": ["Sublimation", "Deposition", "Condensation", "Freezing"],
    "options_hi": ["उर्ध्वपातन", "निक्षेपण", "संघनन", "जमना"],
    "answer_en": "Deposition",
    "answer_hi": "निक्षेपण",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "A concave mirror forms a real image of an object. If the object is moved towards the mirror, the image will:",
    "question_hi": "एक अवतल दर्पण किसी वस्तु का वास्तविक प्रतिबिंब बनाता है। यदि वस्तु को दर्पण की ओर ले जाया जाए, तो प्रतिबिंब:",
    "options_en": ["Move away from mirror", "Move towards mirror", "Remain at same position", "Become virtual"],
    "options_hi": ["दर्पण से दूर जाएगा", "दर्पण की ओर आएगा", "समान स्थिति में रहेगा", "आभासी हो जाएगा"],
    "answer_en": "Move away from mirror",
    "answer_hi": "दर्पण से दूर जाएगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "The resistance of an ideal voltmeter is:",
    "question_hi": "एक आदर्श वोल्टमीटर का प्रतिरोध है:",
    "options_en": ["Very high", "Very low", "Infinite", "Zero"],
    "options_hi": ["बहुत अधिक", "बहुत कम", "अनंत", "शून्य"],
    "answer_en": "Infinite",
    "answer_hi": "अनंत",
    "attempted": false,
    "selected": ""
  },
  {
    "num":21,
    "question_en": "The minimum number of forces required to keep a particle in equilibrium is:",
    "question_hi": "एक कण को साम्यावस्था में रखने के लिए आवश्यक बलों की न्यूनतम संख्या है:",
    "options_en": ["1", "2", "3", "4"],
    "options_hi": ["1", "2", "3", "4"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
    "question_en": "The color of a thin soap film is due to:",
    "question_hi": "एक पतले साबुन के फिल्म का रंग होता है, कारण है:",
    "options_en": ["Refraction", "Dispersion", "Interference", "Scattering"],
    "options_hi": ["अपवर्तन", "विक्षेपण", "व्यतिकरण", "प्रकीर्णन"],
    "answer_en": "Interference",
    "answer_hi": "व्यतिकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "The binding energy per nucleon is minimum for:",
    "question_hi": "निम्न में से किसके लिए प्रति न्यूक्लियॉन बंधन ऊर्जा न्यूनतम है?",
    "options_en": ["Hydrogen", "Helium", "Iron", "Uranium"],
    "options_hi": ["हाइड्रोजन", "हीलियम", "आयरन", "यूरेनियम"],
    "answer_en": "Hydrogen",
    "answer_hi": "हाइड्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "A body is thrown vertically upward. At the highest point, its acceleration is:",
    "question_hi": "एक पिंड को ऊर्ध्वाधर ऊपर की ओर फेंका जाता है। उच्चतम बिंदु पर, इसका त्वरण है:",
    "options_en": ["Zero", "g upward", "g downward", "2g downward"],
    "options_hi": ["शून्य", "g ऊपर की ओर", "g नीचे की ओर", "2g नीचे की ओर"],
    "answer_en": "g downward",
    "answer_hi": "g नीचे की ओर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
    "question_en": "The gate that gives low output only when all inputs are high is:",
    "question_hi": "वह गेट जो केवल तभी निम्न निर्गत देता है जब सभी निवेश उच्च हों, है:",
    "options_en": ["AND", "OR", "NAND", "NOR"],
    "options_hi": ["AND", "OR", "NAND", "NOR"],
    "answer_en": "NAND",
    "answer_hi": "NAND",
    "attempted": false,
    "selected": ""
  },
  {
    "num":26,
    "question_en": "The phenomenon of mirage is due to:",
    "question_hi": "मरीचिका की घटना का कारण है:",
    "options_en": ["Reflection", "Refraction", "Total internal reflection", "Dispersion"],
    "options_hi": ["परावर्तन", "अपवर्तन", "पूर्ण आंतरिक परावर्तन", "विक्षेपण"],
    "answer_en": "Total internal reflection",
    "answer_hi": "पूर्ण आंतरिक परावर्तन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":27,
    "question_en": "The force between two point charges is F. If the distance between them is halved, the new force becomes:",
    "question_hi": "दो बिंदु आवेशों के बीच बल F है। यदि उनके बीच की दूरी आधी कर दी जाए, तो नया बल हो जाता है:",
    "options_en": ["F/2", "F", "2F", "4F"],
    "options_hi": ["F/2", "F", "2F", "4F"],
    "answer_en": "4F",
    "answer_hi": "4F",
    "attempted": false,
    "selected": ""
  },
  {
    "num":28,
    "question_en": "The specific heat capacity of water is:",
    "question_hi": "पानी की विशिष्ट ऊष्मा धारिता है:",
    "options_en": ["1 cal/g°C", "0.5 cal/g°C", "2 cal/g°C", "4.18 J/g°C"],
    "options_hi": ["1 कैलोरी/ग्राम°C", "0.5 कैलोरी/ग्राम°C", "2 कैलोरी/ग्राम°C", "4.18 जूल/ग्राम°C"],
    "answer_en": "1 cal/g°C",
    "answer_hi": "1 कैलोरी/ग्राम°C",
    "attempted": false,
    "selected": ""
  },
  {
    "num":29,
    "question_en": "The process by which plants lose water vapor is called:",
    "question_hi": "वह प्रक्रिया जिसके द्वारा पौधे जल वाष्प खोते हैं, कहलाती है:",
    "options_en": ["Transpiration", "Photosynthesis", "Respiration", "Evaporation"],
    "options_hi": ["वाष्पोत्सर्जन", "प्रकाश संश्लेषण", "श्वसन", "वाष्पीकरण"],
    "answer_en": "Transpiration",
    "answer_hi": "वाष्पोत्सर्जन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "The S.I. unit of magnetic permeability is:",
    "question_hi": "चुंबकीय पारगम्यता की S.I. इकाई है:",
    "options_en": ["Henry/meter", "Tesla", "Weber", "Ampere/meter"],
    "options_hi": ["हेनरी/मीटर", "टेस्ला", "वेबर", "एम्पीयर/मीटर"],
    "answer_en": "Henry/meter",
    "answer_hi": "हेनरी/मीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":31,
    "question_en": "A body is moving with uniform velocity. Its acceleration is:",
    "question_hi": "एक पिंड एकसमान वेग से गतिमान है। इसका त्वरण है:",
    "options_en": ["Zero", "Positive", "Negative", "Variable"],
    "options_hi": ["शून्य", "धनात्मक", "ऋणात्मक", "परिवर्ती"],
    "answer_en": "Zero",
    "answer_hi": "शून्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num":32,
    "question_en": "The unit of electric flux is:",
    "question_hi": "विद्युत फ्लक्स की इकाई है:",
    "options_en": ["Volt-meter", "Newton/coulomb", "Coulomb", "Joule"],
    "options_hi": ["वोल्ट-मीटर", "न्यूटन/कूलॉम", "कूलॉम", "जूल"],
    "answer_en": "Volt-meter",
    "answer_hi": "वोल्ट-मीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":33,
    "question_en": "The phenomenon of increase in wavelength of light from distant galaxies is called:",
    "question_hi": "दूरस्थ आकाशगंगाओं से आने वाले प्रकाश की तरंगदैर्ध्य में वृद्धि की घटना कहलाती है:",
    "options_en": ["Doppler effect", "Red shift", "Blue shift", "Photoelectric effect"],
    "options_hi": ["डॉप्लर प्रभाव", "रेड शिफ्ट", "ब्लू शिफ्ट", "प्रकाशविद्युत प्रभाव"],
    "answer_en": "Red shift",
    "answer_hi": "रेड शिफ्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "The coefficient of performance of a refrigerator is given by:",
    "question_hi": "एक रेफ्रिजरेटर का निष्पादन गुणांक दिया जाता है:",
    "options_en": ["Q2/(Q1 - Q2)", "Q1/(Q1 - Q2)", "(Q1 - Q2)/Q2", "(Q1 - Q2)/Q1"],
    "options_hi": ["Q2/(Q1 - Q2)", "Q1/(Q1 - Q2)", "(Q1 - Q2)/Q2", "(Q1 - Q2)/Q1"],
    "answer_en": "Q2/(Q1 - Q2)",
    "answer_hi": "Q2/(Q1 - Q2)",
    "attempted": false,
    "selected": ""
  },
  {
    "num":35,
    "question_en": "The force experienced by a current carrying conductor placed in a magnetic field is maximum when the angle between current and magnetic field is:",
    "question_hi": "चुंबकीय क्षेत्र में रखे गए धारावाही चालक द्वारा अनुभव किया जाने वाला बल अधिकतम होता है जब धारा और चुंबकीय क्षेत्र के बीच कोण होता है:",
    "options_en": ["0°", "45°", "90°", "180°"],
    "options_hi": ["0°", "45°", "90°", "180°"],
    "answer_en": "90°",
    "answer_hi": "90°",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "The number of images formed when two plane mirrors are inclined at 60° to each other is:",
    "question_hi": "जब दो समतल दर्पण एक दूसरे से 60° पर झुके हों, तो बनने वाले प्रतिबिंबों की संख्या है:",
    "options_en": ["3", "5", "6", "7"],
    "options_hi": ["3", "5", "6", "7"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num":37,
    "question_en": "The process of converting AC to DC is called:",
    "question_hi": "AC को DC में परिवर्तित करने की प्रक्रिया कहलाती है:",
    "options_en": ["Amplification", "Rectification", "Modulation", "Demodulation"],
    "options_hi": ["प्रवर्धन", "दिष्टकरण", "मॉडुलन", "विमॉडुलन"],
    "answer_en": "Rectification",
    "answer_hi": "दिष्टकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num":38,
    "question_en": "The maximum height reached by a projectile is half of its horizontal range. The angle of projection is:",
    "question_hi": "एक प्रक्षेप्य द्वारा प्राप्त अधिकतम ऊँचाई उसकी क्षैतिज परास की आधी है। प्रक्षेपण कोण है:",
    "options_en": ["30°", "45°", "60°", "76°"],
    "options_hi": ["30°", "45°", "60°", "76°"],
    "answer_en": "76°",
    "answer_hi": "76°",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "The lens used to correct astigmatism is:",
    "question_hi": "दृष्टिवैषम्य को ठीक करने के लिए प्रयुक्त लेंस है:",
    "options_en": ["Spherical lens", "Cylindrical lens", "Bifocal lens", "Prismatic lens"],
    "options_hi": ["गोलीय लेंस", "बेलनाकार लेंस", "द्विफोकस लेंस", "प्रिज्मीय लेंस"],
    "answer_en": "Cylindrical lens",
    "answer_hi": "बेलनाकार लेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "The half-life of a radioactive substance is 10 days. The time taken for 75% decay is:",
    "question_hi": "एक रेडियोधर्मी पदार्थ का अर्ध-आयुकाल 10 दिन है। 75% क्षय के लिए लिया गया समय है:",
    "options_en": ["10 days", "15 days", "20 days", "30 days"],
    "options_hi": ["10 दिन", "15 दिन", "20 दिन", "30 दिन"],
    "answer_en": "20 days",
    "answer_hi": "20 दिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":41,
    "question_en": "The value of absolute zero temperature on Celsius scale is:",
    "question_hi": "सेल्सियस पैमाने पर परम शून्य तापमान का मान है:",
    "options_en": ["0°C", "-100°C", "-273°C", "-373°C"],
    "options_hi": ["0°C", "-100°C", "-273°C", "-373°C"],
    "answer_en": "-273°C",
    "answer_hi": "-273°C",
    "attempted": false,
    "selected": ""
  },
  {
    "num":42,
    "question_en": "The velocity of sound in air is maximum in:",
    "question_hi": "वायु में ध्वनि का वेग अधिकतम होता है:",
    "options_en": ["Dry air at 0°C", "Dry air at 100°C", "Moist air at 0°C", "Moist air at 100°C"],
    "options_hi": ["0°C पर शुष्क वायु में", "100°C पर शुष्क वायु में", "0°C पर आर्द्र वायु में", "100°C पर आर्द्र वायु में"],
    "answer_en": "Moist air at 100°C",
    "answer_hi": "100°C पर आर्द्र वायु में",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
    "question_en": "The principle of conservation of angular momentum is applied in:",
    "question_hi": "कोणीय संवेग संरक्षण का सिद्धांत लागू होता है:",
    "options_en": ["Spinning of ice skater", "Motion of planets", "Both A and B", "None of these"],
    "options_hi": ["बर्फ पर स्केटर के घूमने में", "ग्रहों की गति में", "A और B दोनों", "इनमें से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num":44,
    "question_en": "The gate which is called universal gate is:",
    "question_hi": "वह गेट जिसे सार्वभौमिक गेट कहा जाता है, है:",
    "options_en": ["AND", "OR", "NAND", "NOT"],
    "options_hi": ["AND", "OR", "NAND", "NOT"],
    "answer_en": "NAND",
    "answer_hi": "NAND",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
    "question_en": "The ratio of specific heats (γ) for diatomic gas is:",
    "question_hi": "द्विपरमाणुक गैस के लिए विशिष्ट ऊष्माओं का अनुपात (γ) है:",
    "options_en": ["1.33", "1.40", "1.67", "1.50"],
    "options_hi": ["1.33", "1.40", "1.67", "1.50"],
    "answer_en": "1.40",
    "answer_hi": "1.40",
    "attempted": false,
    "selected": ""
  },
  {
    "num":46,
    "question_en": "The phenomenon of superconductivity was discovered by:",
    "question_hi": "अतिचालकता की घटना की खोज की थी:",
    "options_en": ["Einstein", "Faraday", "Kamerlingh Onnes", "Maxwell"],
    "options_hi": ["आइंस्टीन", "फैराडे", "कामरलिंघ ओन्स", "मैक्सवेल"],
    "answer_en": "Kamerlingh Onnes",
    "answer_hi": "कामरलिंघ ओन्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num":47,
    "question_en": "The energy stored in a capacitor is given by:",
    "question_hi": "एक संधारित्र में संचित ऊर्जा दी जाती है:",
    "options_en": ["1/2 CV²", "CV", "1/2 QV", "Both A and C"],
    "options_hi": ["1/2 CV²", "CV", "1/2 QV", "A और C दोनों"],
    "answer_en": "Both A and C",
    "answer_hi": "A और C दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num":48,
    "question_en": "The magnetic field at the center of a current carrying circular coil is:",
    "question_hi": "धारावाही वृत्ताकार कुंडली के केंद्र पर चुंबकीय क्षेत्र होता है:",
    "options_en": ["Parallel to plane of coil", "Perpendicular to plane of coil", "At 45° to plane of coil", "Zero"],
    "options_hi": ["कुंडली के तल के समांतर", "कुंडली के तल के लंबवत", "कुंडली के तल से 45° पर", "शून्य"],
    "answer_en": "Perpendicular to plane of coil",
    "answer_hi": "कुंडली के तल के लंबवत",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "The minimum distance between an object and its real image formed by a concave mirror is:",
    "question_hi": "एक अवतल दर्पण द्वारा बने वस्तु और उसके वास्तविक प्रतिबिंब के बीच न्यूनतम दूरी है:",
    "options_en": ["f", "2f", "3f", "4f"],
    "options_hi": ["f", "2f", "3f", "4f"],
    "answer_en": "4f",
    "answer_hi": "4f",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "The phenomenon of photoelectric effect supports:",
    "question_hi": "प्रकाशविद्युत प्रभाव की घटना समर्थन करती है:",
    "options_en": ["Wave nature of light", "Particle nature of light", "Both wave and particle nature", "Electromagnetic theory"],
    "options_hi": ["प्रकाश की तरंग प्रकृति", "प्रकाश की कण प्रकृति", "तरंग और कण दोनों प्रकृति", "विद्युत चुंबकीय सिद्धांत"],
    "answer_en": "Particle nature of light",
    "answer_hi": "प्रकाश की कण प्रकृति",
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