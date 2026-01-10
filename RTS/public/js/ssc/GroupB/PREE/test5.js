const questions = [
  {
    "num": 201,
    "question_en": "Which phenomenon explains the bending of light when it passes from one medium to another?",
    "question_hi": "कौन सी घटना प्रकाश के एक माध्यम से दूसरे माध्यम में जाने पर मुड़ने की व्याख्या करती है?",
    "options_en": ["Reflection", "Refraction", "Diffraction", "Scattering"],
    "options_hi": ["परावर्तन", "अपवर्तन", "विवर्तन", "प्रकीर्णन"],
    "answer_en": "Refraction",
    "answer_hi": "अपवर्तन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 202,
    "question_en": "The mathematical operation of finding the rate of change of a function is called:",
    "question_hi": "किसी फलन के परिवर्तन की दर ज्ञात करने की गणितीय प्रक्रिया कहलाती है:",
    "options_en": ["Integration", "Differentiation", "Matrix", "Determinant"],
    "options_hi": ["समाकलन", "अवकलन", "आव्यूह", "सारणिक"],
    "answer_en": "Differentiation",
    "answer_hi": "अवकलन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 203,
    "question_en": "Which law states that the pressure of a gas is inversely proportional to its volume at constant temperature?",
    "question_hi": "कौन सा नियम कहता है कि स्थिर तापमान पर गैस का दाब उसके आयतन के व्युत्क्रमानुपाती होता है?",
    "options_en": ["Charles' Law", "Boyle's Law", "Gay-Lussac's Law", "Avogadro's Law"],
    "options_hi": ["चार्ल्स का नियम", "बॉयल का नियम", "गे-लुसाक का नियम", "अवोगाद्रो का नियम"],
    "answer_en": "Boyle's Law",
    "answer_hi": "बॉयल का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 204,
    "question_en": "What is the value of ∫(3x² + 2x + 1) dx?",
    "question_hi": "∫(3x² + 2x + 1) dx का मान क्या है?",
    "options_en": ["x³ + x² + x + C", "x³ + 2x² + x + C", "3x³ + x² + x + C", "x³ + x² + C"],
    "options_hi": ["x³ + x² + x + C", "x³ + 2x² + x + C", "3x³ + x² + x + C", "x³ + x² + C"],
    "answer_en": "x³ + x² + x + C",
    "answer_hi": "x³ + x² + x + C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 205,
    "question_en": "The process of splitting of a heavy nucleus into lighter nuclei is called:",
    "question_hi": "किसी भारी नाभिक के हल्के नाभिकों में विभाजन की प्रक्रिया कहलाती है:",
    "options_en": ["Nuclear fusion", "Nuclear fission", "Radioactive decay", "Transmutation"],
    "options_hi": ["नाभिकीय संलयन", "नाभिकीय विखंडन", "रेडियोधर्मी क्षय", "रूपांतरण"],
    "answer_en": "Nuclear fission",
    "answer_hi": "नाभिकीय विखंडन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 206,
    "question_en": "If A = {1, 2, 3} and B = {2, 3, 4}, what is A ∩ B?",
    "question_hi": "यदि A = {1, 2, 3} और B = {2, 3, 4}, तो A ∩ B क्या है?",
    "options_en": ["{1, 2, 3, 4}", "{2, 3}", "{1, 4}", "{ }"],
    "options_hi": ["{1, 2, 3, 4}", "{2, 3}", "{1, 4}", "{ }"],
    "answer_en": "{2, 3}",
    "answer_hi": "{2, 3}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 207,
    "question_en": "Which lens has a positive focal length?",
    "question_hi": "किस लेंस की फोकस दूरी धनात्मक होती है?",
    "options_en": ["Concave lens", "Convex lens", "Plano-concave lens", "Both A and B"],
    "options_hi": ["अवतल लेंस", "उत्तल लेंस", "समतल-अवतल लेंस", "A और B दोनों"],
    "answer_en": "Convex lens",
    "answer_hi": "उत्तल लेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 208,
    "question_en": "What is the derivative of ln(sin x)?",
    "question_hi": "ln(sin x) का अवकलज क्या है?",
    "options_en": ["cos x/sin x", "sin x/cos x", "1/sin x", "1/cos x"],
    "options_hi": ["cos x/sin x", "sin x/cos x", "1/sin x", "1/cos x"],
    "answer_en": "cos x/sin x",
    "answer_hi": "cos x/sin x",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 209,
    "question_en": "The phenomenon of emission of electrons from a metal surface when light falls on it is called:",
    "question_hi": "धातु की सतह से प्रकाश पड़ने पर इलेक्ट्रॉनों के उत्सर्जन की घटना कहलाती है:",
    "options_en": ["Photoelectric effect", "Compton effect", "Raman effect", "Stark effect"],
    "options_hi": ["प्रकाश विद्युत प्रभाव", "कॉम्पटन प्रभाव", "रमन प्रभाव", "स्टार्क प्रभाव"],
    "answer_en": "Photoelectric effect",
    "answer_hi": "प्रकाश विद्युत प्रभाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 210,
    "question_en": "What is the value of lim(x→∞) (1 + 1/x)ˣ?",
    "question_hi": "lim(x→∞) (1 + 1/x)ˣ का मान क्या है?",
    "options_en": ["0", "1", "e", "∞"],
    "options_hi": ["0", "1", "e", "∞"],
    "answer_en": "e",
    "answer_hi": "e",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 211,
    "question_en": "Which principle explains why a ship floats on water?",
    "question_hi": "कौन सा सिद्धांत बताता है कि जहाज पानी पर क्यों तैरता है?",
    "options_en": ["Bernoulli's principle", "Archimedes' principle", "Pascal's law", "Newton's third law"],
    "options_hi": ["बर्नौली का सिद्धांत", "आर्किमिडीज का सिद्धांत", "पास्कल का नियम", "न्यूटन का तीसरा नियम"],
    "answer_en": "Archimedes' principle",
    "answer_hi": "आर्किमिडीज का सिद्धांत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 212,
    "question_en": "What is the solution of the differential equation dy/dx = y?",
    "question_hi": "अवकल समीकरण dy/dx = y का हल क्या है?",
    "options_en": ["y = eˣ", "y = Ceˣ", "y = ln x", "y = x²"],
    "options_hi": ["y = eˣ", "y = Ceˣ", "y = ln x", "y = x²"],
    "answer_en": "y = Ceˣ",
    "answer_hi": "y = Ceˣ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 213,
    "question_en": "The process of combining two light nuclei to form a heavier nucleus is called:",
    "question_hi": "दो हल्के नाभिकों को मिलाकर एक भारी नाभिक बनाने की प्रक्रिया कहलाती है:",
    "options_en": ["Nuclear fission", "Nuclear fusion", "Radioactive decay", "Transmutation"],
    "options_hi": ["नाभिकीय विखंडन", "नाभिकीय संलयन", "रेडियोधर्मी क्षय", "रूपांतरण"],
    "answer_en": "Nuclear fusion",
    "answer_hi": "नाभिकीय संलयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 214,
    "question_en": "What is the value of ∫₀¹ (x³ - x) dx?",
    "question_hi": "∫₀¹ (x³ - x) dx का मान क्या है?",
    "options_en": ["0", "-1/4", "1/4", "1/2"],
    "options_hi": ["0", "-1/4", "1/4", "1/2"],
    "answer_en": "-1/4",
    "answer_hi": "-1/4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 215,
    "question_en": "Which law states that the angle of incidence is equal to the angle of reflection?",
    "question_hi": "कौन सा नियम कहता है कि आपतन कोण परावर्तन कोण के बराबर होता है?",
    "options_en": ["Snell's law", "Law of reflection", "Law of refraction", "Malus' law"],
    "options_hi": ["स्नेल का नियम", "परावर्तन का नियम", "अपवर्तन का नियम", "मालस का नियम"],
    "answer_en": "Law of reflection",
    "answer_hi": "परावर्तन का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 216,
    "question_en": "What is the rank of the matrix [[1, 2], [2, 4]]?",
    "question_hi": "आव्यूह [[1, 2], [2, 4]] की कोटि क्या है?",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 217,
    "question_en": "The bending of light around obstacles is called:",
    "question_hi": "बाधाओं के चारों ओर प्रकाश का मुड़ना कहलाता है:",
    "options_en": ["Reflection", "Refraction", "Diffraction", "Interference"],
    "options_hi": ["परावर्तन", "अपवर्तन", "विवर्तन", "व्यतिकरण"],
    "answer_en": "Diffraction",
    "answer_hi": "विवर्तन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 218,
    "question_en": "What is the value of d/dx (x sin x)?",
    "question_hi": "d/dx (x sin x) का मान क्या है?",
    "options_en": ["sin x + x cos x", "sin x - x cos x", "cos x + x sin x", "cos x - x sin x"],
    "options_hi": ["sin x + x cos x", "sin x - x cos x", "cos x + x sin x", "cos x - x sin x"],
    "answer_en": "sin x + x cos x",
    "answer_hi": "sin x + x cos x",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 219,
    "question_en": "Which particle has the same mass as an electron but opposite charge?",
    "question_hi": "किस कण का द्रव्यमान इलेक्ट्रॉन के बराबर लेकिन विपरीत आवेश होता है?",
    "options_en": ["Proton", "Neutron", "Positron", "Neutrino"],
    "options_hi": ["प्रोटॉन", "न्यूट्रॉन", "पॉजिट्रॉन", "न्यूट्रिनो"],
    "answer_en": "Positron",
    "answer_hi": "पॉजिट्रॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 220,
    "question_en": "What is the value of ∫ eˣ dx?",
    "question_hi": "∫ eˣ dx का मान क्या है?",
    "options_en": ["eˣ + C", "x eˣ + C", "ln x + C", "1/x + C"],
    "options_hi": ["eˣ + C", "x eˣ + C", "ln x + C", "1/x + C"],
    "answer_en": "eˣ + C",
    "answer_hi": "eˣ + C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 221,
    "question_en": "The phenomenon of change in frequency of sound due to relative motion between source and observer is called:",
    "question_hi": "स्रोत और प्रेक्षक के बीच सापेक्ष गति के कारण ध्वनि की आवृत्ति में परिवर्तन की घटना कहलाती है:",
    "options_en": ["Doppler effect", "Photoelectric effect", "Compton effect", "Raman effect"],
    "options_hi": ["डॉपलर प्रभाव", "प्रकाश विद्युत प्रभाव", "कॉम्पटन प्रभाव", "रमन प्रभाव"],
    "answer_en": "Doppler effect",
    "answer_hi": "डॉपलर प्रभाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 222,
    "question_en": "What is the solution of the equation x² + 4x + 5 = 0?",
    "question_hi": "समीकरण x² + 4x + 5 = 0 का हल क्या है?",
    "options_en": ["-2 ± i", "-2 ± 1", "2 ± i", "2 ± 1"],
    "options_hi": ["-2 ± i", "-2 ± 1", "2 ± i", "2 ± 1"],
    "answer_en": "-2 ± i",
    "answer_hi": "-2 ± i",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 223,
    "question_en": "Which law states that the total electric flux through a closed surface is proportional to the charge enclosed?",
    "question_hi": "कौन सा नियम कहता है कि एक बंद सतह से गुजरने वाला कुल विद्युत फ्लक्स, परिबद्ध आवेश के अनुक्रमानुपाती होता है?",
    "options_en": ["Gauss's law", "Coulomb's law", "Ampere's law", "Faraday's law"],
    "options_hi": ["गॉस का नियम", "कूलॉम का नियम", "एम्पियर का नियम", "फैराडे का नियम"],
    "answer_en": "Gauss's law",
    "answer_hi": "गॉस का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 224,
    "question_en": "What is the value of d²/dx² (x³)?",
    "question_hi": "d²/dx² (x³) का मान क्या है?",
    "options_en": ["3x²", "6x", "6", "0"],
    "options_hi": ["3x²", "6x", "6", "0"],
    "answer_en": "6x",
    "answer_hi": "6x",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 225,
    "question_en": "The splitting of white light into its constituent colors is called:",
    "question_hi": "सफेद प्रकाश का उसके घटक रंगों में विभाजन कहलाता है:",
    "options_en": ["Dispersion", "Diffraction", "Interference", "Polarization"],
    "options_hi": ["विक्षेपण", "विवर्तन", "व्यतिकरण", "ध्रुवण"],
    "answer_en": "Dispersion",
    "answer_hi": "विक्षेपण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 226,
    "question_en": "What is the value of ∫ sin²x dx?",
    "question_hi": "∫ sin²x dx का मान क्या है?",
    "options_en": ["(x/2) - (sin 2x)/4 + C", "(x/2) + (sin 2x)/4 + C", "x - sin x + C", "x + sin x + C"],
    "options_hi": ["(x/2) - (sin 2x)/4 + C", "(x/2) + (sin 2x)/4 + C", "x - sin x + C", "x + sin x + C"],
    "answer_en": "(x/2) - (sin 2x)/4 + C",
    "answer_hi": "(x/2) - (sin 2x)/4 + C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 227,
    "question_en": "Which theorem relates the line integral of a vector field around a closed curve to the surface integral of its curl?",
    "question_hi": "कौन सा प्रमेय एक बंद वक्र के चारों ओर सदिश क्षेत्र के रेखा समाकल को उसके कर्ल के पृष्ठ समाकल से संबंधित करता है?",
    "options_en": ["Green's theorem", "Stokes' theorem", "Gauss' theorem", "Divergence theorem"],
    "options_hi": ["ग्रीन का प्रमेय", "स्टोक्स का प्रमेय", "गॉस का प्रमेय", "अपसरण प्रमेय"],
    "answer_en": "Stokes' theorem",
    "answer_hi": "स्टोक्स का प्रमेय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 228,
    "question_en": "What is the value of lim(x→0) (tan x)/x?",
    "question_hi": "lim(x→0) (tan x)/x का मान क्या है?",
    "options_en": ["0", "1", "∞", "Does not exist"],
    "options_hi": ["0", "1", "∞", "मौजूद नहीं है"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 229,
    "question_en": "The process of emission of electrons from a heated metal surface is called:",
    "question_hi": "गर्म धातु की सतह से इलेक्ट्रॉनों के उत्सर्जन की प्रक्रिया कहलाती है:",
    "options_en": ["Photoelectric emission", "Thermionic emission", "Field emission", "Secondary emission"],
    "options_hi": ["प्रकाश विद्युत उत्सर्जन", "तापायनिक उत्सर्जन", "क्षेत्र उत्सर्जन", "द्वितीयक उत्सर्जन"],
    "answer_en": "Thermionic emission",
    "answer_hi": "तापायनिक उत्सर्जन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 230,
    "question_en": "What is the value of ∫ dx/(1 + x²)?",
    "question_hi": "∫ dx/(1 + x²) का मान क्या है?",
    "options_en": ["tan⁻¹ x + C", "ln(1 + x²) + C", "1/(1 + x²) + C", "2tan⁻¹ x + C"],
    "options_hi": ["tan⁻¹ x + C", "ln(1 + x²) + C", "1/(1 + x²) + C", "2tan⁻¹ x + C"],
    "answer_en": "tan⁻¹ x + C",
    "answer_hi": "tan⁻¹ x + C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 231,
    "question_en": "Which principle states that it is impossible to determine both position and momentum of a particle simultaneously with absolute accuracy?",
    "question_hi": "कौन सा सिद्धांत कहता है कि किसी कण की स्थिति और संवेग दोनों को एक साथ पूर्ण सटीकता के साथ निर्धारित करना असंभव है?",
    "options_en": ["Pauli exclusion principle", "Heisenberg uncertainty principle", "Aufbau principle", "Hund's rule"],
    "options_hi": ["पॉली अपवर्जन सिद्धांत", "हाइजेनबर्ग अनिश्चितता सिद्धांत", "ऑफबाऊ सिद्धांत", "हुंड का नियम"],
    "answer_en": "Heisenberg uncertainty principle",
    "answer_hi": "हाइजेनबर्ग अनिश्चितता सिद्धांत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 232,
    "question_en": "What is the value of d/dx (eˣ sin x)?",
    "question_hi": "d/dx (eˣ sin x) का मान क्या है?",
    "options_en": ["eˣ (sin x + cos x)", "eˣ (sin x - cos x)", "eˣ cos x", "eˣ sin x"],
    "options_hi": ["eˣ (sin x + cos x)", "eˣ (sin x - cos x)", "eˣ cos x", "eˣ sin x"],
    "answer_en": "eˣ (sin x + cos x)",
    "answer_hi": "eˣ (sin x + cos x)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 233,
    "question_en": "The phenomenon of interference of light is explained by:",
    "question_hi": "प्रकाश के व्यतिकरण की घटना की व्याख्या किससे की जाती है?",
    "options_en": ["Particle nature of light", "Wave nature of light", "Quantum nature of light", "Dual nature of light"],
    "options_hi": ["प्रकाश की कण प्रकृति", "प्रकाश की तरंग प्रकृति", "प्रकाश की क्वांटम प्रकृति", "प्रकाश की द्वैत प्रकृति"],
    "answer_en": "Wave nature of light",
    "answer_hi": "प्रकाश की तरंग प्रकृति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 234,
    "question_en": "What is the value of ∫₀^π/2 sin x dx?",
    "question_hi": "∫₀^π/2 sin x dx का मान क्या है?",
    "options_en": ["0", "1", "π/2", "π"],
    "options_hi": ["0", "1", "π/2", "π"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 235,
    "question_en": "Which law states that the induced emf in a circuit is proportional to the rate of change of magnetic flux?",
    "question_hi": "कौन सा नियम कहता है कि किसी परिपथ में प्रेरित विद्युत वाहक बल चुंबकीय फ्लक्स के परिवर्तन की दर के अनुक्रमानुपाती होता है?",
    "options_en": ["Faraday's law", "Lenz's law", "Ampere's law", "Ohm's law"],
    "options_hi": ["फैराडे का नियम", "लेंज का नियम", "एम्पियर का नियम", "ओम का नियम"],
    "answer_en": "Faraday's law",
    "answer_hi": "फैराडे का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 236,
    "question_en": "What is the value of d/dx (ln(cos x))?",
    "question_hi": "d/dx (ln(cos x)) का मान क्या है?",
    "options_en": ["-tan x", "tan x", "-cot x", "cot x"],
    "options_hi": ["-tan x", "tan x", "-cot x", "cot x"],
    "answer_en": "-tan x",
    "answer_hi": "-tan x",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 237,
    "question_en": "The phenomenon of total internal reflection occurs when light travels from:",
    "question_hi": "पूर्ण आंतरिक परावर्तन की घटना तब होती है जब प्रकाश चलता है:",
    "options_en": ["Rarer to denser medium", "Denser to rarer medium", "Same medium", "Any medium"],
    "options_hi": ["विरल से सघन माध्यम", "सघन से विरल माध्यम", "समान माध्यम", "कोई भी माध्यम"],
    "answer_en": "Denser to rarer medium",
    "answer_hi": "सघन से विरल माध्यम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 238,
    "question_en": "What is the value of ∫ sec²x dx?",
    "question_hi": "∫ sec²x dx का मान क्या है?",
    "options_en": ["tan x + C", "cot x + C", "sec x + C", "cosec x + C"],
    "options_hi": ["tan x + C", "cot x + C", "sec x + C", "cosec x + C"],
    "answer_en": "tan x + C",
    "answer_hi": "tan x + C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 239,
    "question_en": "Which equation relates the energy of a photon to its frequency?",
    "question_hi": "कौन सा समीकरण किसी फोटॉन की ऊर्जा को उसकी आवृत्ति से संबंधित करता है?",
    "options_en": ["E = mc²", "E = hν", "E = ½mv²", "E = kQ/r"],
    "options_hi": ["E = mc²", "E = hν", "E = ½mv²", "E = kQ/r"],
    "answer_en": "E = hν",
    "answer_hi": "E = hν",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 240,
    "question_en": "What is the value of d/dx (xⁿ)?",
    "question_hi": "d/dx (xⁿ) का मान क्या है?",
    "options_en": ["nxⁿ⁻¹", "xⁿ⁺¹/(n+1)", "n! xⁿ⁻¹", "xⁿ/ln x"],
    "options_hi": ["nxⁿ⁻¹", "xⁿ⁺¹/(n+1)", "n! xⁿ⁻¹", "xⁿ/ln x"],
    "answer_en": "nxⁿ⁻¹",
    "answer_hi": "nxⁿ⁻¹",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 241,
    "question_en": "The phenomenon of superposition of waves is called:",
    "question_hi": "तरंगों के अध्यारोपण की घटना कहलाती है:",
    "options_en": ["Interference", "Diffraction", "Polarization", "Refraction"],
    "options_hi": ["व्यतिकरण", "विवर्तन", "ध्रुवण", "अपवर्तन"],
    "answer_en": "Interference",
    "answer_hi": "व्यतिकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 242,
    "question_en": "What is the value of ∫ x eˣ dx?",
    "question_hi": "∫ x eˣ dx का मान क्या है?",
    "options_en": ["x eˣ - eˣ + C", "x eˣ + eˣ + C", "eˣ + C", "x² eˣ/2 + C"],
    "options_hi": ["x eˣ - eˣ + C", "x eˣ + eˣ + C", "eˣ + C", "x² eˣ/2 + C"],
    "answer_en": "x eˣ - eˣ + C",
    "answer_hi": "x eˣ - eˣ + C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 243,
    "question_en": "Which law gives the direction of induced current?",
    "question_hi": "प्रेरित धारा की दिशा कौन सा नियम देता है?",
    "options_en": ["Faraday's law", "Lenz's law", "Ampere's law", "Ohm's law"],
    "options_hi": ["फैराडे का नियम", "लेंज का नियम", "एम्पियर का नियम", "ओम का नियम"],
    "answer_en": "Lenz's law",
    "answer_hi": "लेंज का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 244,
    "question_en": "What is the value of lim(x→0) (eˣ - 1)/x?",
    "question_hi": "lim(x→0) (eˣ - 1)/x का मान क्या है?",
    "options_en": ["0", "1", "e", "∞"],
    "options_hi": ["0", "1", "e", "∞"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 245,
    "question_en": "The phenomenon of scattering of light by particles smaller than wavelength is called:",
    "question_hi": "तरंगदैर्ध्य से छोटे कणों द्वारा प्रकाश के प्रकीर्णन की घटना कहलाती है:",
    "options_en": ["Rayleigh scattering", "Mie scattering", "Raman scattering", "Compton scattering"],
    "options_hi": ["रेले प्रकीर्णन", "मी प्रकीर्णन", "रमन प्रकीर्णन", "कॉम्पटन प्रकीर्णन"],
    "answer_en": "Rayleigh scattering",
    "answer_hi": "रेले प्रकीर्णन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 246,
    "question_en": "What is the value of ∫ cos(ax) dx?",
    "question_hi": "∫ cos(ax) dx का मान क्या है?",
    "options_en": ["(1/a) sin(ax) + C", "sin(ax) + C", "a sin(ax) + C", "cos(ax)/a + C"],
    "options_hi": ["(1/a) sin(ax) + C", "sin(ax) + C", "a sin(ax) + C", "cos(ax)/a + C"],
    "answer_en": "(1/a) sin(ax) + C",
    "answer_hi": "(1/a) sin(ax) + C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 247,
    "question_en": "Which principle states that every point on a wavefront is a source of secondary wavelets?",
    "question_hi": "कौन सा सिद्धांत कहता है कि तरंगाग्र पर प्रत्येक बिंदु द्वितीयक तरंगिकाओं का स्रोत है?",
    "options_en": ["Huygens' principle", "Fermat's principle", "Doppler principle", "Pauli principle"],
    "options_hi": ["हाइगेंस का सिद्धांत", "फर्मेट का सिद्धांत", "डॉपलर सिद्धांत", "पॉली सिद्धांत"],
    "answer_en": "Huygens' principle",
    "answer_hi": "हाइगेंस का सिद्धांत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 248,
    "question_en": "What is the value of d/dx (sin⁻¹ x)?",
    "question_hi": "d/dx (sin⁻¹ x) का मान क्या है?",
    "options_en": ["1/√(1-x²)", "-1/√(1-x²)", "1/(1+x²)", "-1/(1+x²)"],
    "options_hi": ["1/√(1-x²)", "-1/√(1-x²)", "1/(1+x²)", "-1/(1+x²)"],
    "answer_en": "1/√(1-x²)",
    "answer_hi": "1/√(1-x²)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 249,
    "question_en": "The phenomenon of production of emf by relative motion between conductor and magnetic field is called:",
    "question_hi": "चालक और चुंबकीय क्षेत्र के बीच सापेक्ष गति द्वारा विद्युत वाहक बल उत्पन्न होने की घटना कहलाती है:",
    "options_en": ["Electromagnetic induction", "Magnetic induction", "Electrostatic induction", "Self induction"],
    "options_hi": ["विद्युत चुंबकीय प्रेरण", "चुंबकीय प्रेरण", "विद्युत्स्थैतिक प्रेरण", "स्वप्रेरण"],
    "answer_en": "Electromagnetic induction",
    "answer_hi": "विद्युत चुंबकीय प्रेरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 250,
    "question_en": "What is the value of ∫ dx/√(1-x²)?",
    "question_hi": "∫ dx/√(1-x²) का मान क्या है?",
    "options_en": ["sin⁻¹ x + C", "cos⁻¹ x + C", "tan⁻¹ x + C", "ln(1-x²) + C"],
    "options_hi": ["sin⁻¹ x + C", "cos⁻¹ x + C", "tan⁻¹ x + C", "ln(1-x²) + C"],
    "answer_en": "sin⁻¹ x + C",
    "answer_hi": "sin⁻¹ x + C",
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