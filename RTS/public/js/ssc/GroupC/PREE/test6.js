const questions = [
  {
  num: 1,
  question_en: "What is the value of tan 45°?",
  question_hi: "tan 45° का मान क्या है?",
  options_en: ["0", "1", "√3", "1/√3"],
  options_hi: ["0", "1", "√3", "1/√3"],
  answer_en: "1",
  answer_hi: "1",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "What is the SI unit of inductance?",
  question_hi: "प्रेरकत्व की SI इकाई क्या है?",
  options_en: ["Farad", "Henry", "Ohm", "Tesla"],
  options_hi: ["फैरड", "हेनरी", "ओम", "टेस्ला"],
  answer_en: "Henry",
  answer_hi: "हेनरी",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "What is the value of cos 0°?",
  question_hi: "cos 0° का मान क्या है?",
  options_en: ["0", "0.5", "1", "√3/2"],
  options_hi: ["0", "0.5", "1", "√3/2"],
  answer_en: "1",
  answer_hi: "1",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "What is the process of heat transfer in fluids called?",
  question_hi: "तरल पदार्थों में ऊष्मा स्थानांतरण की प्रक्रिया को क्या कहा जाता है?",
  options_en: ["Conduction", "Convection", "Radiation", "Insulation"],
  options_hi: ["चालन", "संवहन", "विकिरण", "अवरोधन"],
  answer_en: "Convection",
  answer_hi: "संवहन",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "What is the value of sin 30°?",
  question_hi: "sin 30° का मान क्या है?",
  options_en: ["0", "0.5", "√3/2", "1"],
  options_hi: ["0", "0.5", "√3/2", "1"],
  answer_en: "0.5",
  answer_hi: "0.5",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "What is the SI unit of magnetic field strength?",
  question_hi: "चुंबकीय क्षेत्र शक्ति की SI इकाई क्या है?",
  options_en: ["Tesla", "Weber", "Ampere/meter", "Gauss"],
  options_hi: ["टेस्ला", "वेबर", "एम्पीयर/मीटर", "गॉस"],
  answer_en: "Ampere/meter",
  answer_hi: "एम्पीयर/मीटर",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "What is the value of cos 60°?",
  question_hi: "cos 60° का मान क्या है?",
  options_en: ["0", "0.5", "√3/2", "1"],
  options_hi: ["0", "0.5", "√3/2", "1"],
  answer_en: "0.5",
  answer_hi: "0.5",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Which mirror always forms virtual, erect and diminished image?",
  question_hi: "कौन सा दर्पण हमेशा आभासी, सीधा और छोटा प्रतिबिम्ब बनाता है?",
  options_en: ["Plane mirror", "Concave mirror", "Convex mirror", "Parabolic mirror"],
  options_hi: ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "परवलयिक दर्पण"],
  answer_en: "Convex mirror",
  answer_hi: "उत्तल दर्पण",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "What is the value of cosec 90°?",
  question_hi: "cosec 90° का मान क्या है?",
  options_en: ["0", "1", "2", "∞"],
  options_hi: ["0", "1", "2", "∞"],
  answer_en: "1",
  answer_hi: "1",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "What is the SI unit of radioactivity?",
  question_hi: "रेडियोधर्मिता की SI इकाई क्या है?",
  options_en: ["Curie", "Becquerel", "Roentgen", "Rutherford"],
  options_hi: ["क्यूरी", "बेकरेल", "रॉन्टजन", "रदरफोर्ड"],
  answer_en: "Becquerel",
  answer_hi: "बेकरेल",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "What is the value of sec 0°?",
  question_hi: "sec 0° का मान क्या है?",
  options_en: ["0", "1", "2", "∞"],
  options_hi: ["0", "1", "2", "∞"],
  answer_en: "1",
  answer_hi: "1",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "What is the phenomenon of bending of light when it passes from one medium to another called?",
  question_hi: "जब प्रकाश एक माध्यम से दूसरे माध्यम में जाता है तो उसके मुड़ने की घटना को क्या कहा जाता है?",
  options_en: ["Reflection", "Refraction", "Dispersion", "Diffraction"],
  options_hi: ["परावर्तन", "अपवर्तन", "विक्षेपण", "विवर्तन"],
  answer_en: "Refraction",
  answer_hi: "अपवर्तन",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "What is the value of cot 45°?",
  question_hi: "cot 45° का मान क्या है?",
  options_en: ["0", "1", "√3", "1/√3"],
  options_hi: ["0", "1", "√3", "1/√3"],
  answer_en: "1",
  answer_hi: "1",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "What is the SI unit of conductance?",
  question_hi: "चालकता की SI इकाई क्या है?",
  options_en: ["Ohm", "Siemens", "Mho", "Farad"],
  options_hi: ["ओम", "सीमेंस", "म्हो", "फैरड"],
  answer_en: "Siemens",
  answer_hi: "सीमेंस",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "What is the value of sin 45°?",
  question_hi: "sin 45° का मान क्या है?",
  options_en: ["0", "1/√2", "√3/2", "1"],
  options_hi: ["0", "1/√2", "√3/2", "1"],
  answer_en: "1/√2",
  answer_hi: "1/√2",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "Which law states that the angle of incidence is equal to the angle of reflection?",
  question_hi: "कौन सा नियम कहता है कि आपतन कोण परावर्तन कोण के बराबर होता है?",
  options_en: ["Snell's Law", "Law of Refraction", "Law of Reflection", "Brewster's Law"],
  options_hi: ["स्नेल का नियम", "अपवर्तन का नियम", "परावर्तन का नियम", "ब्रूस्टर का नियम"],
  answer_en: "Law of Reflection",
  answer_hi: "परावर्तन का नियम",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "What is the value of cos 45°?",
  question_hi: "cos 45° का मान क्या है?",
  options_en: ["0", "1/√2", "√3/2", "1"],
  options_hi: ["0", "1/√2", "√3/2", "1"],
  answer_en: "1/√2",
  answer_hi: "1/√2",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "What is the SI unit of absorbed dose of radiation?",
  question_hi: "विकिरण के अवशोषित डोज की SI इकाई क्या है?",
  options_en: ["Gray", "Sievert", "Becquerel", "Curie"],
  options_hi: ["ग्रे", "सीवर्ट", "बेकरेल", "क्यूरी"],
  answer_en: "Gray",
  answer_hi: "ग्रे",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "What is the value of tan 60°?",
  question_hi: "tan 60° का मान क्या है?",
  options_en: ["0", "1", "√3", "1/√3"],
  options_hi: ["0", "1", "√3", "1/√3"],
  answer_en: "√3",
  answer_hi: "√3",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which law relates the pressure, volume and temperature of a gas?",
  question_hi: "कौन सा नियम गैस के दबाव, आयतन और तापमान को संबंधित करता है?",
  options_en: ["Boyle's Law", "Charles's Law", "Ideal Gas Law", "Gay-Lussac's Law"],
  options_hi: ["बॉयल का नियम", "चार्ल्स का नियम", "आदर्श गैस नियम", "गे-लुसाक का नियम"],
  answer_en: "Ideal Gas Law",
  answer_hi: "आदर्श गैस नियम",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "What is the value of sin 60°?",
  question_hi: "sin 60° का मान क्या है?",
  options_en: ["0", "0.5", "√3/2", "1"],
  options_hi: ["0", "0.5", "√3/2", "1"],
  answer_en: "√3/2",
  answer_hi: "√3/2",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "What is the SI unit of electric field strength?",
  question_hi: "विद्युत क्षेत्र शक्ति की SI इकाई क्या है?",
  options_en: ["Volt/meter", "Newton/coulomb", "Joule/coulomb", "Watt/ampere"],
  options_hi: ["वोल्ट/मीटर", "न्यूटन/कूलम्ब", "जूल/कूलम्ब", "वाट/एम्पीयर"],
  answer_en: "Volt/meter",
  answer_hi: "वोल्ट/मीटर",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "What is the value of cos 90°?",
  question_hi: "cos 90° का मान क्या है?",
  options_en: ["0", "0.5", "√3/2", "1"],
  options_hi: ["0", "0.5", "√3/2", "1"],
  answer_en: "0",
  answer_hi: "0",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "What is the phenomenon when a solid changes directly into gas called?",
  question_hi: "जब कोई ठोस सीधे गैस में बदल जाता है तो उस घटना को क्या कहा जाता है?",
  options_en: ["Evaporation", "Sublimation", "Condensation", "Fusion"],
  options_hi: ["वाष्पीकरण", "उर्ध्वपातन", "संघनन", "संलयन"],
  answer_en: "Sublimation",
  answer_hi: "उर्ध्वपातन",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "What is the value of tan 0°?",
  question_hi: "tan 0° का मान क्या है?",
  options_en: ["0", "1", "√3", "∞"],
  options_hi: ["0", "1", "√3", "∞"],
  answer_en: "0",
  answer_hi: "0",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "What is the SI unit of plane angle?",
  question_hi: "समतल कोण की SI इकाई क्या है?",
  options_en: ["Degree", "Radian", "Gradian", "Steradian"],
  options_hi: ["डिग्री", "रेडियन", "ग्रेडियन", "स्टेरेडियन"],
  answer_en: "Radian",
  answer_hi: "रेडियन",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "What is the value of sec 90°?",
  question_hi: "sec 90° का मान क्या है?",
  options_en: ["0", "1", "2", "∞"],
  options_hi: ["0", "1", "2", "∞"],
  answer_en: "∞",
  answer_hi: "∞",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Which law states that the rate of heat transfer is proportional to temperature difference?",
  question_hi: "कौन सा नियम कहता है कि ऊष्मा स्थानांतरण की दर तापमान अंतर के समानुपाती होती है?",
  options_en: ["Newton's Law of Cooling", "Stefan-Boltzmann Law", "Fourier's Law", "Planck's Law"],
  options_hi: ["न्यूटन का शीतलन नियम", "स्टीफन-बोल्ट्जमैन नियम", "फूरियर का नियम", "प्लैंक का नियम"],
  answer_en: "Newton's Law of Cooling",
  answer_hi: "न्यूटन का शीतलन नियम",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "What is the value of cosec 0°?",
  question_hi: "cosec 0° का मान क्या है?",
  options_en: ["0", "1", "2", "∞"],
  options_hi: ["0", "1", "2", "∞"],
  answer_en: "∞",
  answer_hi: "∞",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "What is the SI unit of solid angle?",
  question_hi: "घन कोण की SI इकाई क्या है?",
  options_en: ["Degree", "Radian", "Gradian", "Steradian"],
  options_hi: ["डिग्री", "रेडियन", "ग्रेडियन", "स्टेरेडियन"],
  answer_en: "Steradian",
  answer_hi: "स्टेरेडियन",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "What is the value of sin²θ + cos²θ?",
  question_hi: "sin²θ + cos²θ का मान क्या है?",
  options_en: ["0", "1", "sin2θ", "cos2θ"],
  options_hi: ["0", "1", "sin2θ", "cos2θ"],
  answer_en: "1",
  answer_hi: "1",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Which law states that the force between two charges is proportional to the product of charges?",
  question_hi: "कौन सा नियम कहता है कि दो आवेशों के बीच का बल आवेशों के गुणनफल के समानुपाती होता है?",
  options_en: ["Ohm's Law", "Coulomb's Law", "Faraday's Law", "Ampere's Law"],
  options_hi: ["ओम का नियम", "कूलम्ब का नियम", "फैराडे का नियम", "एम्पीयर का नियम"],
  answer_en: "Coulomb's Law",
  answer_hi: "कूलम्ब का नियम",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "What is the value of 1 + tan²θ?",
  question_hi: "1 + tan²θ का मान क्या है?",
  options_en: ["sin²θ", "cos²θ", "sec²θ", "cosec²θ"],
  options_hi: ["sin²θ", "cos²θ", "sec²θ", "cosec²θ"],
  answer_en: "sec²θ",
  answer_hi: "sec²θ",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "What is the SI unit of luminous flux?",
  question_hi: "ज्योति फ्लक्स की SI इकाई क्या है?",
  options_en: ["Lumen", "Candela", "Lux", "Watt"],
  options_hi: ["लुमेन", "कैंडेला", "लक्स", "वाट"],
  answer_en: "Lumen",
  answer_hi: "लुमेन",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "What is the value of 1 + cot²θ?",
  question_hi: "1 + cot²θ का मान क्या है?",
  options_en: ["sin²θ", "cos²θ", "sec²θ", "cosec²θ"],
  options_hi: ["sin²θ", "cos²θ", "sec²θ", "cosec²θ"],
  answer_en: "cosec²θ",
  answer_hi: "cosec²θ",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Which mirror is used by dentists to see enlarged image of teeth?",
  question_hi: "दंत चिकित्सक दांतों का बड़ा प्रतिबिम्ब देखने के लिए किस दर्पण का उपयोग करते हैं?",
  options_en: ["Plane mirror", "Concave mirror", "Convex mirror", "Parabolic mirror"],
  options_hi: ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "परवलयिक दर्पण"],
  answer_en: "Concave mirror",
  answer_hi: "अवतल दर्पण",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "What is the value of sin2A?",
  question_hi: "sin2A का मान क्या है?",
  options_en: ["2sinAcosA", "sin²A - cos²A", "2cos²A - 1", "1 - 2sin²A"],
  options_hi: ["2sinAcosA", "sin²A - cos²A", "2cos²A - 1", "1 - 2sin²A"],
  answer_en: "2sinAcosA",
  answer_hi: "2sinAcosA",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "What is the SI unit of illuminance?",
  question_hi: "प्रदीप्ति की SI इकाई क्या है?",
  options_en: ["Lumen", "Candela", "Lux", "Watt"],
  options_hi: ["लुमेन", "कैंडेला", "लक्स", "वाट"],
  answer_en: "Lux",
  answer_hi: "लक्स",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "What is the value of cos2A?",
  question_hi: "cos2A का मान क्या है?",
  options_en: ["2sinAcosA", "cos²A - sin²A", "1 - 2sin²A", "Both B and C"],
  options_hi: ["2sinAcosA", "cos²A - sin²A", "1 - 2sin²A", "B और C दोनों"],
  answer_en: "Both B and C",
  answer_hi: "B और C दोनों",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "What is the phenomenon when sound waves combine to form a new wave called?",
  question_hi: "जब ध्वनि तरंगें मिलकर एक नई तरंग बनाती हैं तो उस घटना को क्या कहा जाता है?",
  options_en: ["Reflection", "Refraction", "Interference", "Diffraction"],
  options_hi: ["परावर्तन", "अपवर्तन", "व्यतिकरण", "विवर्तन"],
  answer_en: "Interference",
  answer_hi: "व्यतिकरण",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "What is the value of tan(A + B)?",
  question_hi: "tan(A + B) का मान क्या है?",
  options_en: ["(tanA + tanB)/(1 - tanAtanB)", "(tanA - tanB)/(1 + tanAtanB)", "sin(A+B)/cos(A+B)", "cos(A+B)/sin(A+B)"],
  options_hi: ["(tanA + tanB)/(1 - tanAtanB)", "(tanA - tanB)/(1 + tanAtanB)", "sin(A+B)/cos(A+B)", "cos(A+B)/sin(A+B)"],
  answer_en: "(tanA + tanB)/(1 - tanAtanB)",
  answer_hi: "(tanA + tanB)/(1 - tanAtanB)",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "What is the SI unit of catalytic activity?",
  question_hi: "उत्प्रेरक गतिविधि की SI इकाई क्या है?",
  options_en: ["Mole", "Katal", "Gram", "Liter"],
  options_hi: ["मोल", "कैटल", "ग्राम", "लीटर"],
  answer_en: "Katal",
  answer_hi: "कैटल",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "What is the value of sin(A + B)?",
  question_hi: "sin(A + B) का मान क्या है?",
  options_en: ["sinAcosB + cosAsinB", "sinAcosB - cosAsinB", "cosAcosB - sinAsinB", "cosAcosB + sinAsinB"],
  options_hi: ["sinAcosB + cosAsinB", "sinAcosB - cosAsinB", "cosAcosB - sinAsinB", "cosAcosB + sinAsinB"],
  answer_en: "sinAcosB + cosAsinB",
  answer_hi: "sinAcosB + cosAsinB",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which lens is used in compound microscope as objective lens?",
  question_hi: "यौगिक सूक्ष्मदर्शी में किस लेंस का उपयोग अभिदृश्यक लेंस के रूप में किया जाता है?",
  options_en: ["Concave lens", "Convex lens of short focal length", "Convex lens of long focal length", "Plano-convex lens"],
  options_hi: ["अवतल लेंस", "कम फोकस दूरी का उत्तल लेंस", "लंबी फोकस दूरी का उत्तल लेंस", "समतलोत्तल लेंस"],
  answer_en: "Convex lens of short focal length",
  answer_hi: "कम फोकस दूरी का उत्तल लेंस",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "What is the value of cos(A + B)?",
  question_hi: "cos(A + B) का मान क्या है?",
  options_en: ["sinAcosB + cosAsinB", "sinAcosB - cosAsinB", "cosAcosB - sinAsinB", "cosAcosB + sinAsinB"],
  options_hi: ["sinAcosB + cosAsinB", "sinAcosB - cosAsinB", "cosAcosB - sinAsinB", "cosAcosB + sinAsinB"],
  answer_en: "cosAcosB - sinAsinB",
  answer_hi: "cosAcosB - sinAsinB",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "What is the SI unit of amount of substance?",
  question_hi: "पदार्थ की मात्रा की SI इकाई क्या है?",
  options_en: ["Gram", "Mole", "Kilogram", "Liter"],
  options_hi: ["ग्राम", "मोल", "किलोग्राम", "लीटर"],
  answer_en: "Mole",
  answer_hi: "मोल",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "What is the formula for area of a parallelogram?",
  question_hi: "समांतर चतुर्भुज के क्षेत्रफल का सूत्र क्या है?",
  options_en: ["½ × base × height", "base × height", "½ × (sum of parallel sides) × height", "side × side"],
  options_hi: ["½ × आधार × ऊँचाई", "आधार × ऊँचाई", "½ × (समांतर भुजाओं का योग) × ऊँचाई", "भुजा × भुजा"],
  answer_en: "base × height",
  answer_hi: "आधार × ऊँचाई",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which law relates the refractive indices of two media with angles of incidence and refraction?",
  question_hi: "कौन सा नियम दो माध्यमों के अपवर्तनांकों को आपतन और अपवर्तन कोणों से संबंधित करता है?",
  options_en: ["Law of Reflection", "Snell's Law", "Brewster's Law", "Malus's Law"],
  options_hi: ["परावर्तन का नियम", "स्नेल का नियम", "ब्रूस्टर का नियम", "मालस का नियम"],
  answer_en: "Snell's Law",
  answer_hi: "स्नेल का नियम",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "What is the formula for volume of a cylinder?",
  question_hi: "बेलन का आयतन क्या है?",
  options_en: ["πr²", "πr²h", "2πrh", "4/3πr³"],
  options_hi: ["πr²", "πr²h", "2πrh", "4/3πr³"],
  answer_en: "πr²h",
  answer_hi: "πr²h",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "What is the SI unit of dose equivalent in radiation protection?",
  question_hi: "विकिरण सुरक्षा में डोज समकक्ष की SI इकाई क्या है?",
  options_en: ["Gray", "Sievert", "Becquerel", "Curie"],
  options_hi: ["ग्रे", "सीवर्ट", "बेकरेल", "क्यूरी"],
  answer_en: "Sievert",
  answer_hi: "सीवर्ट",
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