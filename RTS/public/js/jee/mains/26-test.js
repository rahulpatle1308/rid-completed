const questions = [
    // Physics - Modern Physics (1-10)
    {
        "num": 1,
        "question_en": "The photoelectric effect establishes that light has:",
        "question_hi": "प्रकाश विद्युत प्रभाव स्थापित करता है कि प्रकाश में होता है:",
        "options_en": ["Wave nature", "Particle nature", "Both wave and particle nature", "Neither wave nor particle nature"],
        "options_hi": ["तरंग प्रकृति", "कण प्रकृति", "तरंग और कण दोनों प्रकृति", "न तरंग और न कण प्रकृति"],
        "answer_en": "Particle nature",
        "answer_hi": "कण प्रकृति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The de Broglie wavelength associated with an electron accelerated through 100V is approximately:",
        "question_hi": "100V से त्वरित इलेक्ट्रॉन से संबद्ध डी ब्रोगली तरंगदैर्ध्य लगभग है:",
        "options_en": ["1.23 Å", "2.46 Å", "0.123 Å", "12.3 Å"],
        "options_hi": ["1.23 Å", "2.46 Å", "0.123 Å", "12.3 Å"],
        "answer_en": "1.23 Å",
        "answer_hi": "1.23 Å",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "In Bohr's model of hydrogen atom, the ratio of kinetic energy to potential energy of electron in nth orbit is:",
        "question_hi": "हाइड्रोजन परमाणु के बोहर मॉडल में, nवीं कक्षा में इलेक्ट्रॉन की गतिज ऊर्जा और स्थितिज ऊर्जा का अनुपात है:",
        "options_en": ["1:2", "1:-2", "-1:2", "2:1"],
        "options_hi": ["1:2", "1:-2", "-1:2", "2:1"],
        "answer_en": "1:-2",
        "answer_hi": "1:-2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The half-life of a radioactive substance is 20 minutes. The time taken for 75% decay is:",
        "question_hi": "एक रेडियोधर्मी पदार्थ का अर्ध-जीवन 20 मिनट है। 75% क्षय के लिए लिया गया समय है:",
        "options_en": ["20 minutes", "40 minutes", "60 minutes", "80 minutes"],
        "options_hi": ["20 मिनट", "40 मिनट", "60 मिनट", "80 मिनट"],
        "answer_en": "40 minutes",
        "answer_hi": "40 मिनट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "In a nuclear reactor, the function of moderator is to:",
        "question_hi": "एक नाभिकीय रिएक्टर में, मंदक का कार्य है:",
        "options_en": ["Absorb neutrons", "Slow down neutrons", "Accelerate neutrons", "Reflect neutrons"],
        "options_hi": ["न्यूट्रॉन को अवशोषित करना", "न्यूट्रॉन को धीमा करना", "न्यूट्रॉन को त्वरित करना", "न्यूट्रॉन को परावर्तित करना"],
        "answer_en": "Slow down neutrons",
        "answer_hi": "न्यूट्रॉन को धीमा करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "A p-n junction diode can be used as:",
        "question_hi": "p-n जंक्शन डायोड का उपयोग किया जा सकता है:",
        "options_en": ["Amplifier", "Oscillator", "Rectifier", "Modulator"],
        "options_hi": ["प्रवर्धक", "दोलक", "दिष्टकारी", "मॉड्यूलेटर"],
        "answer_en": "Rectifier",
        "answer_hi": "दिष्टकारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The truth table for NAND gate shows that output is 0 when:",
        "question_hi": "NAND गेट के लिए सत्य तालिका दर्शाती है कि आउटपुट 0 है जब:",
        "options_en": ["All inputs are 0", "All inputs are 1", "Any input is 0", "Any input is 1"],
        "options_hi": ["सभी इनपुट 0 हैं", "सभी इनपुट 1 हैं", "कोई इनपुट 0 है", "कोई इनपुट 1 है"],
        "answer_en": "All inputs are 1",
        "answer_hi": "सभी इनपुट 1 हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "In a common emitter amplifier, the phase difference between input and output voltages is:",
        "question_hi": "कॉमन एमिटर प्रवर्धक में, इनपुट और आउटपुट वोल्टेज के बीच कलान्तर है:",
        "options_en": ["0°", "90°", "180°", "270°"],
        "options_hi": ["0°", "90°", "180°", "270°"],
        "answer_en": "180°",
        "answer_hi": "180°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The critical angle for a material is 30°. Its refractive index is:",
        "question_hi": "एक पदार्थ के लिए क्रांतिक कोण 30° है। इसका अपवर्तनांक है:",
        "options_en": ["1.5", "2.0", "1.8", "2.5"],
        "options_hi": ["1.5", "2.0", "1.8", "2.5"],
        "answer_en": "2.0",
        "answer_hi": "2.0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "In a series LCR circuit at resonance, the impedance is:",
        "question_hi": "अनुनाद पर श्रेणी LCR परिपथ में, प्रतिबाधा है:",
        "options_en": ["Maximum", "Minimum", "Zero", "Infinity"],
        "options_hi": ["अधिकतम", "न्यूनतम", "शून्य", "अनंत"],
        "answer_en": "Minimum",
        "answer_hi": "न्यूनतम",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Organic Chemistry (11-20)
    {
        "num": 11,
        "question_en": "Which of the following shows geometrical isomerism?",
        "question_hi": "निम्नलिखित में से कौन ज्यामितीय समावयवता दर्शाता है?",
        "options_en": ["Propene", "1-Butene", "2-Butene", "Ethene"],
        "options_hi": ["प्रोपीन", "1-ब्यूटीन", "2-ब्यूटीन", "ईथीन"],
        "answer_en": "2-Butene",
        "answer_hi": "2-ब्यूटीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The IUPAC name of CH₃-CH₂-CH(OH)-CH₃ is:",
        "question_hi": "CH₃-CH₂-CH(OH)-CH₃ का IUPAC नाम है:",
        "options_en": ["2-Butanol", "1-Butanol", "3-Butanol", "Butanal"],
        "options_hi": ["2-ब्यूटेनॉल", "1-ब्यूटेनॉल", "3-ब्यूटेनॉल", "ब्यूटेनल"],
        "answer_en": "2-Butanol",
        "answer_hi": "2-ब्यूटेनॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which of the following is most acidic?",
        "question_hi": "निम्नलिखित में से कौन सबसे अधिक अम्लीय है?",
        "options_en": ["Phenol", "Ethanol", "Water", "Acetic acid"],
        "options_hi": ["फीनॉल", "एथनॉल", "जल", "एसिटिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Tollen's reagent is used to detect:",
        "question_hi": "टोलेन अभिकर्मक का उपयोग पता लगाने के लिए किया जाता है:",
        "options_en": ["Aldehydes", "Ketones", "Alcohols", "Carboxylic acids"],
        "options_hi": ["एल्डिहाइड", "कीटोन", "अल्कोहल", "कार्बोक्सिलिक अम्ल"],
        "answer_en": "Aldehydes",
        "answer_hi": "एल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The number of sigma bonds in benzene is:",
        "question_hi": "बेंजीन में सिग्मा बंधों की संख्या है:",
        "options_en": ["3", "6", "9", "12"],
        "options_hi": ["3", "6", "9", "12"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which of the following is a nucleophilic substitution reaction?",
        "question_hi": "निम्नलिखित में से कौन सी नाभिकरागी प्रतिस्थापन अभिक्रिया है?",
        "options_en": ["CH₄ + Cl₂ → CH₃Cl + HCl", "CH₃Cl + OH⁻ → CH₃OH + Cl⁻", "C₂H₄ + H₂ → C₂H₆", "C₂H₂ + 2H₂ → C₂H₆"],
        "options_hi": ["CH₄ + Cl₂ → CH₃Cl + HCl", "CH₃Cl + OH⁻ → CH₃OH + Cl⁻", "C₂H₄ + H₂ → C₂H₆", "C₂H₂ + 2H₂ → C₂H₆"],
        "answer_en": "CH₃Cl + OH⁻ → CH₃OH + Cl⁻",
        "answer_hi": "CH₃Cl + OH⁻ → CH₃OH + Cl⁻",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The hybridization of carbon in ethyne is:",
        "question_hi": "एथाइन में कार्बन का संकरण है:",
        "options_en": ["sp", "sp²", "sp³", "dsp²"],
        "options_hi": ["sp", "sp²", "sp³", "dsp²"],
        "answer_en": "sp",
        "answer_hi": "sp",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which of the following gives iodoform test?",
        "question_hi": "निम्नलिखित में से कौन आयोडोफॉर्म परीक्षण देता है?",
        "options_en": ["CH₃CH₂OH", "CH₃COOH", "C₆H₅OH", "CH₃OCH₃"],
        "options_hi": ["CH₃CH₂OH", "CH₃COOH", "C₆H₅OH", "CH₃OCH₃"],
        "answer_en": "CH₃CH₂OH",
        "answer_hi": "CH₃CH₂OH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "In Williamson's synthesis, ether is prepared by:",
        "question_hi": "विलियमसन संश्लेषण में, ईथर तैयार किया जाता है:",
        "options_en": ["Heating alcohol with H₂SO₄", "Heating alkyl halide with dry Ag₂O", "Reacting alcohol with sodium", "Reacting alkyl halide with sodium alkoxide"],
        "options_hi": ["H₂SO₄ के साथ अल्कोहल गर्म करके", "शुष्क Ag₂O के साथ ऐल्किल हैलाइड गर्म करके", "सोडियम के साथ अल्कोहल की अभिक्रिया", "सोडियम ऐल्कॉक्साइड के साथ ऐल्किल हैलाइड की अभिक्रिया"],
        "answer_en": "Reacting alkyl halide with sodium alkoxide",
        "answer_hi": "सोडियम ऐल्कॉक्साइड के साथ ऐल्किल हैलाइड की अभिक्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The number of structural isomers of pentane is:",
        "question_hi": "पेंटेन के संरचनात्मक समावयवियों की संख्या है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Calculus (21-30)
    {
        "num": 21,
        "question_en": "The derivative of sin(x²) with respect to x is:",
        "question_hi": "x के सापेक्ष sin(x²) का अवकलज है:",
        "options_en": ["2x cos(x²)", "cos(x²)", "2 cos(x²)", "x cos(x²)"],
        "options_hi": ["2x cos(x²)", "cos(x²)", "2 cos(x²)", "x cos(x²)"],
        "answer_en": "2x cos(x²)",
        "answer_hi": "2x cos(x²)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "∫(1/x) dx equals:",
        "question_hi": "∫(1/x) dx बराबर है:",
        "options_en": ["ln|x| + C", "x + C", "1/x² + C", "ln x² + C"],
        "options_hi": ["ln|x| + C", "x + C", "1/x² + C", "ln x² + C"],
        "answer_en": "ln|x| + C",
        "answer_hi": "ln|x| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "The value of lim(x→0) (sinx/x) is:",
        "question_hi": "lim(x→0) (sinx/x) का मान है:",
        "options_en": ["0", "1", "∞", "-1"],
        "options_hi": ["0", "1", "∞", "-1"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The function f(x) = |x| is not differentiable at:",
        "question_hi": "फलन f(x) = |x| अवकलनीय नहीं है:",
        "options_en": ["x = 0", "x = 1", "x = -1", "All real numbers"],
        "options_hi": ["x = 0", "x = 1", "x = -1", "सभी वास्तविक संख्याओं पर"],
        "answer_en": "x = 0",
        "answer_hi": "x = 0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "The area bounded by y = x² and y = x is:",
        "question_hi": "y = x² और y = x से घिरा क्षेत्रफल है:",
        "options_en": ["1/6", "1/3", "1/2", "2/3"],
        "options_hi": ["1/6", "1/3", "1/2", "2/3"],
        "answer_en": "1/6",
        "answer_hi": "1/6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "The derivative of e^(2x) is:",
        "question_hi": "e^(2x) का अवकलज है:",
        "options_en": ["2e^(2x)", "e^(2x)", "2e^x", "e^x"],
        "options_hi": ["2e^(2x)", "e^(2x)", "2e^x", "e^x"],
        "answer_en": "2e^(2x)",
        "answer_hi": "2e^(2x)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "∫(0 to π/2) cosx dx equals:",
        "question_hi": "∫(0 से π/2) cosx dx बराबर है:",
        "options_en": ["0", "1", "2", "π/2"],
        "options_hi": ["0", "1", "2", "π/2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "The maximum value of sinx + cosx is:",
        "question_hi": "sinx + cosx का अधिकतम मान है:",
        "options_en": ["1", "√2", "2", "0"],
        "options_hi": ["1", "√2", "2", "0"],
        "answer_en": "√2",
        "answer_hi": "√2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "If y = x³ - 3x² + 3x - 1, then d²y/dx² at x = 1 is:",
        "question_hi": "यदि y = x³ - 3x² + 3x - 1, तो x = 1 पर d²y/dx² है:",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The number of points of discontinuity of f(x) = 1/(x-1) is:",
        "question_hi": "f(x) = 1/(x-1) के असांतत्य बिंदुओं की संख्या है:",
        "options_en": ["0", "1", "2", "Infinite"],
        "options_hi": ["0", "1", "2", "अनंत"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },

    // Biology - Genetics (31-40)
    {
        "num": 31,
        "question_en": "The process of copying DNA is called:",
        "question_hi": "DNA की नकल करने की प्रक्रिया कहलाती है:",
        "options_en": ["Transcription", "Translation", "Replication", "Mutation"],
        "options_hi": ["प्रतिलेखन", "अनुवाद", "प्रतिकृति", "उत्परिवर्तन"],
        "answer_en": "Replication",
        "answer_hi": "प्रतिकृति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "In DNA, adenine pairs with:",
        "question_hi": "DNA में, एडेनीन जोड़ी बनाता है:",
        "options_en": ["Guanine", "Cytosine", "Thymine", "Uracil"],
        "options_hi": ["ग्वानीन", "साइटोसीन", "थाइमीन", "यूरेसिल"],
        "answer_en": "Thymine",
        "answer_hi": "थाइमीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The genetic code is:",
        "question_hi": "आनुवंशिक कोड है:",
        "options_en": ["Universal", "Different for each species", "Different for each individual", "Random"],
        "options_hi": ["सार्वभौमिक", "प्रत्येक प्रजाति के लिए अलग", "प्रत्येक व्यक्ति के लिए अलग", "यादृच्छिक"],
        "answer_en": "Universal",
        "answer_hi": "सार्वभौमिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which of the following is a sex-linked disease?",
        "question_hi": "निम्नलिखित में से कौन सा लिंग-सहलग्न रोग है?",
        "options_en": ["Hemophilia", "Sickle cell anemia", "Thalassemia", "Down syndrome"],
        "options_hi": ["हीमोफिलिया", "सिकल सेल एनीमिया", "थैलेसीमिया", "डाउन सिंड्रोम"],
        "answer_en": "Hemophilia",
        "answer_hi": "हीमोफिलिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The process by which RNA is synthesized from DNA is called:",
        "question_hi": "वह प्रक्रिया जिसके द्वारा DNA से RNA संश्लेषित होता है, कहलाती है:",
        "options_en": ["Replication", "Transcription", "Translation", "Transformation"],
        "options_hi": ["प्रतिकृति", "प्रतिलेखन", "अनुवाद", "रूपांतरण"],
        "answer_en": "Transcription",
        "answer_hi": "प्रतिलेखन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "In humans, males have chromosomes:",
        "question_hi": "मनुष्यों में, पुरुषों के गुणसूत्र होते हैं:",
        "options_en": ["XX", "XY", "YY", "XO"],
        "options_hi": ["XX", "XY", "YY", "XO"],
        "answer_en": "XY",
        "answer_hi": "XY",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The enzyme that joins DNA fragments is:",
        "question_hi": "DNA खंडों को जोड़ने वाला एंजाइम है:",
        "options_en": ["DNA polymerase", "DNA ligase", "Helicase", "Primase"],
        "options_hi": ["DNA पॉलीमरेज", "DNA लाइगेज", "हेलिकेज", "प्राइमेज"],
        "answer_en": "DNA ligase",
        "answer_hi": "DNA लाइगेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which of the following is not a stop codon?",
        "question_hi": "निम्नलिखित में से कौन स्टॉप कोडन नहीं है?",
        "options_en": ["UAA", "UAG", "UGA", "UAC"],
        "options_hi": ["UAA", "UAG", "UGA", "UAC"],
        "answer_en": "UAC",
        "answer_hi": "UAC",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The process of making protein from RNA is called:",
        "question_hi": "RNA से प्रोटीन बनाने की प्रक्रिया कहलाती है:",
        "options_en": ["Replication", "Transcription", "Translation", "Transformation"],
        "options_hi": ["प्रतिकृति", "प्रतिलेखन", "अनुवाद", "रूपांतरण"],
        "answer_en": "Translation",
        "answer_hi": "अनुवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which of the following is a point mutation?",
        "question_hi": "निम्नलिखित में से कौन बिंदु उत्परिवर्तन है?",
        "options_en": ["Deletion", "Insertion", "Substitution", "Duplication"],
        "options_hi": ["विलोपन", "सम्मिलन", "प्रतिस्थापन", "द्विगुणन"],
        "answer_en": "Substitution",
        "answer_hi": "प्रतिस्थापन",
        "attempted": false,
        "selected": ""
    },

    // English - Advanced Grammar (41-50)
    {
        "num": 41,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["Neither of the boys are coming", "Neither of the boys is coming", "Neither of the boys were coming", "Neither of the boys have come"],
        "options_hi": ["Neither of the boys are coming", "Neither of the boys is coming", "Neither of the boys were coming", "Neither of the boys have come"],
        "answer_en": "Neither of the boys is coming",
        "answer_hi": "Neither of the boys is coming",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which sentence is in present perfect tense?",
        "question_hi": "कौन सा वाक्य वर्तमान पूर्ण काल में है?",
        "options_en": ["I go to school", "I went to school", "I have gone to school", "I had gone to school"],
        "options_hi": ["I go to school", "I went to school", "I have gone to school", "I had gone to school"],
        "answer_en": "I have gone to school",
        "answer_hi": "I have gone to school",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Identify the adverb in: 'He runs very fast.'",
        "question_hi": "'He runs very fast.' में क्रिया विशेषण पहचानें:",
        "options_en": ["He", "runs", "very", "fast"],
        "options_hi": ["He", "runs", "very", "fast"],
        "answer_en": "very",
        "answer_hi": "very",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Choose the correct passive voice: 'They built this house in 1990.'",
        "question_hi": "सही कर्मवाच्य चुनें: 'They built this house in 1990.'",
        "options_en": ["This house was built in 1990 by them", "This house is built in 1990 by them", "This house built in 1990 by them", "This house has been built in 1990 by them"],
        "options_hi": ["This house was built in 1990 by them", "This house is built in 1990 by them", "This house built in 1990 by them", "This house has been built in 1990 by them"],
        "answer_en": "This house was built in 1990 by them",
        "answer_hi": "This house was built in 1990 by them",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which word is a preposition?",
        "question_hi": "कौन सा शब्द संबंधसूचक अव्यय है?",
        "options_en": ["Run", "Beautiful", "Under", "Quickly"],
        "options_hi": ["Run", "Beautiful", "Under", "Quickly"],
        "answer_en": "Under",
        "answer_hi": "Under",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Identify the type of sentence: 'What a beautiful painting!'",
        "question_hi": "वाक्य का प्रकार पहचानें: 'What a beautiful painting!'",
        "options_en": ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
        "options_hi": ["विधानसूचक", "प्रश्नवाचक", "आदेशसूचक", "विस्मयसूचक"],
        "answer_en": "Exclamatory",
        "answer_hi": "विस्मयसूचक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Choose the correct form: 'Each of the students ___ a book.'",
        "question_hi": "सही रूप चुनें: 'Each of the students ___ a book.'",
        "options_en": ["have", "has", "are having", "were having"],
        "options_hi": ["have", "has", "are having", "were having"],
        "answer_en": "has",
        "answer_hi": "has",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which is the correct comparative degree?",
        "question_hi": "कौन सी सही तुलनात्मक डिग्री है?",
        "options_en": ["Gooder", "Better", "More good", "Goodest"],
        "options_hi": ["Gooder", "Better", "More good", "Goodest"],
        "answer_en": "Better",
        "answer_hi": "Better",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Identify the direct object in: 'She gave him a book.'",
        "question_hi": "'She gave him a book.' में प्रत्यक्ष कर्म पहचानें:",
        "options_en": ["She", "gave", "him", "book"],
        "options_hi": ["She", "gave", "him", "book"],
        "answer_en": "book",
        "answer_hi": "book",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Choose the correct question tag: 'You are coming, ___?'",
        "question_hi": "सही प्रश्न टैग चुनें: 'You are coming, ___?'",
        "options_en": ["are you", "aren't you", "isn't you", "do you"],
        "options_hi": ["are you", "aren't you", "isn't you", "do you"],
        "answer_en": "aren't you",
        "answer_hi": "aren't you",
        "attempted": false,
        "selected": ""
    },

    // Hindi - Advanced Grammar (51-60)
    {
        "num": 51,
        "question_en": "'वह दौड़ता हुआ आया।' इस वाक्य में 'दौड़ता हुआ' क्या है?",
        "question_hi": "'वह दौड़ता हुआ आया।' इस वाक्य में 'दौड़ता हुआ' क्या है?",
        "options_en": ["क्रिया", "क्रिया विशेषण", "विशेषण", "कृदंत"],
        "options_hi": ["क्रिया", "क्रिया विशेषण", "विशेषण", "कृदंत"],
        "answer_en": "कृदंत",
        "answer_hi": "कृदंत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "कौन सा शब्द यौगिक क्रिया का उदाहरण है?",
        "question_hi": "कौन सा शब्द यौगिक क्रिया का उदाहरण है?",
        "options_en": ["पढ़ना", "पढ़ लेना", "पढ़ता", "पढ़ाया"],
        "options_hi": ["पढ़ना", "पढ़ लेना", "पढ़ता", "पढ़ाया"],
        "answer_en": "पढ़ लेना",
        "answer_hi": "पढ़ लेना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "'राम ने रावण को मारा।' इस वाक्य में 'रावण' क्या है?",
        "question_hi": "'राम ने रावण को मारा।' इस वाक्य में 'रावण' क्या है?",
        "options_en": ["कर्ता", "कर्म", "करण", "अपादान"],
        "options_hi": ["कर्ता", "कर्म", "करण", "अपादान"],
        "answer_en": "कर्म",
        "answer_hi": "कर्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "कौन सा वाक्य संयुक्त वाक्य है?",
        "question_hi": "कौन सा वाक्य संयुक्त वाक्य है?",
        "options_en": ["राम पढ़ता है और सोहन लिखता है।", "राम जो पढ़ता है, वह अच्छा छात्र है।", "राम पढ़ने के लिए स्कूल जाता है।", "राम पढ़ रहा है।"],
        "options_hi": ["राम पढ़ता है और सोहन लिखता है।", "राम जो पढ़ता है, वह अच्छा छात्र है।", "राम पढ़ने के लिए स्कूल जाता है।", "राम पढ़ रहा है।"],
        "answer_en": "राम पढ़ता है और सोहन लिखता है।",
        "answer_hi": "राम पढ़ता है और सोहन लिखता है।",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "'प्रति' उपसर्ग से बना शब्द है:",
        "question_hi": "'प्रति' उपसर्ग से बना शब्द है:",
        "options_en": ["प्रतिदिन", "प्रतिभा", "प्रतिकूल", "प्रतिज्ञा"],
        "options_hi": ["प्रतिदिन", "प्रतिभा", "प्रतिकूल", "प्रतिज्ञा"],
        "answer_en": "प्रतिदिन",
        "answer_hi": "प्रतिदिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "कौन सा शब्द तद्भव है?",
        "question_hi": "कौन सा शब्द तद्भव है?",
        "options_en": ["अश्व", "घोड़ा", "तुरंग", "हय"],
        "options_hi": ["अश्व", "घोड़ा", "तुरंग", "हय"],
        "answer_en": "घोड़ा",
        "answer_hi": "घोड़ा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "'आम फलों का राजा है।' इस वाक्य में 'राजा' क्या है?",
        "question_hi": "'आम फलों का राजा है।' इस वाक्य में 'राजा' क्या है?",
        "options_en": ["विशेषण", "संज्ञा", "सर्वनाम", "क्रिया"],
        "options_hi": ["विशेषण", "संज्ञा", "सर्वनाम", "क्रिया"],
        "answer_en": "संज्ञा",
        "answer_hi": "संज्ञा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "कौन सा वाक्य विधानवाचक है?",
        "question_hi": "कौन सा वाक्य विधानवाचक है?",
        "options_en": ["वह पढ़ रहा है।", "क्या वह पढ़ रहा है?", "पढ़ो!", "क्या सुंदर दृश्य है!"],
        "options_hi": ["वह पढ़ रहा है।", "क्या वह पढ़ रहा है?", "पढ़ो!", "क्या सुंदर दृश्य है!"],
        "answer_en": "वह पढ़ रहा है।",
        "answer_hi": "वह पढ़ रहा है।",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "'अनु' उपसर्ग से बना शब्द है:",
        "question_hi": "'अनु' उपसर्ग से बना शब्द है:",
        "options_en": ["अनुकरण", "अनुपम", "अनुराग", "अनुशासन"],
        "options_hi": ["अनुकरण", "अनुपम", "अनुराग", "अनुशासन"],
        "answer_en": "अनुकरण",
        "answer_hi": "अनुकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "कौन सा शब्द संस्कृत से हिंदी में आया तत्सम शब्द है?",
        "question_hi": "कौन सा शब्द संस्कृत से हिंदी में आया तत्सम शब्द है?",
        "options_en": ["आग", "अग्नि", "आंच", "लपट"],
        "options_hi": ["आग", "अग्नि", "आंच", "लपट"],
        "answer_en": "अग्नि",
        "answer_hi": "अग्नि",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge - Science & Tech (61-70)
    {
        "num": 61,
        "question_en": "Which Indian scientist won the Nobel Prize in Physics in 1930?",
        "question_hi": "किस भारतीय वैज्ञानिक ने 1930 में भौतिकी में नोबेल पुरस्कार जीता?",
        "options_en": ["C.V. Raman", "Homi Bhabha", "J.C. Bose", "S.N. Bose"],
        "options_hi": ["सी.वी. रमन", "होमी भाभा", "जे.सी. बोस", "एस.एन. बोस"],
        "answer_en": "C.V. Raman",
        "answer_hi": "सी.वी. रमन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "The first Indian satellite was:",
        "question_hi": "पहला भारतीय उपग्रह था:",
        "options_en": ["Aryabhata", "Bhaskara", "Rohini", "INSAT"],
        "options_hi": ["आर्यभट्ट", "भास्कर", "रोहिणी", "इन्सैट"],
        "answer_en": "Aryabhata",
        "answer_hi": "आर्यभट्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which is the largest planet in our solar system?",
        "question_hi": "हमारे सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
        "options_en": ["Earth", "Jupiter", "Saturn", "Neptune"],
        "options_hi": ["पृथ्वी", "बृहस्पति", "शनि", "नेपच्यून"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The chemical formula of ozone is:",
        "question_hi": "ओजोन का रासायनिक सूत्र है:",
        "options_en": ["O₂", "O₃", "O₄", "HO"],
        "options_hi": ["O₂", "O₃", "O₄", "HO"],
        "answer_en": "O₃",
        "answer_hi": "O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which gas is used in refrigerator?",
        "question_hi": "रेफ्रिजरेटर में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Nitrogen", "Chlorofluorocarbon", "Carbon dioxide"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "क्लोरोफ्लोरोकार्बन", "कार्बन डाइऑक्साइड"],
        "answer_en": "Chlorofluorocarbon",
        "answer_hi": "क्लोरोफ्लोरोकार्बन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "The unit of electric power is:",
        "question_hi": "विद्युत शक्ति की इकाई है:",
        "options_en": ["Volt", "Ampere", "Watt", "Ohm"],
        "options_hi": ["वोल्ट", "एम्पीयर", "वाट", "ओम"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which metal is the best conductor of electricity?",
        "question_hi": "कौन सी धातु विद्युत की सबसे अच्छी सुचालक है?",
        "options_en": ["Copper", "Silver", "Gold", "Aluminum"],
        "options_hi": ["तांबा", "चांदी", "सोना", "एल्युमिनियम"],
        "answer_en": "Silver",
        "answer_hi": "चांदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "The pH of pure water is:",
        "question_hi": "शुद्ध जल का pH है:",
        "options_en": ["5", "6", "7", "8"],
        "options_hi": ["5", "6", "7", "8"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which organ in human body produces bile?",
        "question_hi": "मानव शरीर में कौन सा अंग पित्त उत्पन्न करता है?",
        "options_en": ["Liver", "Pancreas", "Kidney", "Stomach"],
        "options_hi": ["यकृत", "अग्न्याशय", "गुर्दा", "आमाशय"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "The process of conversion of vapor into liquid is called:",
        "question_hi": "वाष्प के द्रव में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Evaporation", "Condensation", "Sublimation", "Freezing"],
        "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "जमना"],
        "answer_en": "Condensation",
        "answer_hi": "संघनन",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced - JEE Main Focus (71-90)
    {
        "num": 71,
        "question_en": "The dimensional formula of force is:",
        "question_hi": "बल का विमीय सूत्र है:",
        "options_en": ["MLT⁻²", "MLT⁻¹", "ML²T⁻²", "M²LT⁻²"],
        "options_hi": ["MLT⁻²", "MLT⁻¹", "ML²T⁻²", "M²LT⁻²"],
        "answer_en": "MLT⁻²",
        "answer_hi": "MLT⁻²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "In periodic table, the element with atomic number 17 is:",
        "question_hi": "आवर्त सारणी में, परमाणु संख्या 17 वाला तत्व है:",
        "options_en": ["Oxygen", "Chlorine", "Fluorine", "Sulfur"],
        "options_hi": ["ऑक्सीजन", "क्लोरीन", "फ्लोरीन", "सल्फर"],
        "answer_en": "Chlorine",
        "answer_hi": "क्लोरीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The value of ∫(sec²x dx) is:",
        "question_hi": "∫(sec²x dx) का मान है:",
        "options_en": ["tanx + C", "secx + C", "cotx + C", "cosecx + C"],
        "options_hi": ["tanx + C", "secx + C", "cotx + C", "cosecx + C"],
        "answer_en": "tanx + C",
        "answer_hi": "tanx + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "In human eye, the image is formed on:",
        "question_hi": "मानव आंख में, प्रतिबिंब बनता है:",
        "options_en": ["Cornea", "Lens", "Retina", "Iris"],
        "options_hi": ["कॉर्निया", "लेंस", "रेटिना", "आइरिस"],
        "answer_en": "Retina",
        "answer_hi": "रेटिना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The SI unit of pressure is:",
        "question_hi": "दाब की SI इकाई है:",
        "options_en": ["Newton", "Pascal", "Joule", "Watt"],
        "options_hi": ["न्यूटन", "पास्कल", "जूल", "वाट"],
        "answer_en": "Pascal",
        "answer_hi": "पास्कल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which of the following is a reducing sugar?",
        "question_hi": "निम्नलिखित में से कौन एक अपचायक शर्करा है?",
        "options_en": ["Sucrose", "Glucose", "Starch", "Cellulose"],
        "options_hi": ["सुक्रोज", "ग्लूकोज", "स्टार्च", "सेल्यूलोज"],
        "answer_en": "Glucose",
        "answer_hi": "ग्लूकोज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "The derivative of ln(x) is:",
        "question_hi": "ln(x) का अवकलज है:",
        "options_en": ["1/x", "x", "e^x", "1"],
        "options_hi": ["1/x", "x", "e^x", "1"],
        "answer_en": "1/x",
        "answer_hi": "1/x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "In mitochondria, ATP is produced in:",
        "question_hi": "माइटोकॉन्ड्रिया में, ATP उत्पन्न होता है:",
        "options_en": ["Matrix", "Cristae", "Outer membrane", "Inner membrane"],
        "options_hi": ["मैट्रिक्स", "क्रिस्टी", "बाहरी झिल्ली", "आंतरिक झिल्ली"],
        "answer_en": "Inner membrane",
        "answer_hi": "आंतरिक झिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "The number of significant figures in 0.00250 is:",
        "question_hi": "0.00250 में सार्थक अंकों की संख्या है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "The magnetic field inside a solenoid is:",
        "question_hi": "परिनालिका के अंदर चुंबकीय क्षेत्र है:",
        "options_en": ["Uniform", "Non-uniform", "Zero", "Radial"],
        "options_hi": ["एकसमान", "असमान", "शून्य", "रेडियल"],
        "answer_en": "Uniform",
        "answer_hi": "एकसमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The coordination number in NaCl crystal is:",
        "question_hi": "NaCl क्रिस्टल में उपसहसंयोजन संख्या है:",
        "options_en": ["4", "6", "8", "12"],
        "options_hi": ["4", "6", "8", "12"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The solution of dy/dx = y is:",
        "question_hi": "dy/dx = y का हल है:",
        "options_en": ["y = e^x + C", "y = Ce^x", "y = x + C", "y = Cx"],
        "options_hi": ["y = e^x + C", "y = Ce^x", "y = x + C", "y = Cx"],
        "answer_en": "y = Ce^x",
        "answer_hi": "y = Ce^x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which of the following is paramagnetic?",
        "question_hi": "निम्नलिखित में से कौन अनुचुंबकीय है?",
        "options_en": ["O₂", "N₂", "H₂", "He₂"],
        "options_hi": ["O₂", "N₂", "H₂", "He₂"],
        "answer_en": "O₂",
        "answer_hi": "O₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The value of sin(45°) is:",
        "question_hi": "sin(45°) का मान है:",
        "options_en": ["1/2", "1/√2", "√3/2", "1"],
        "options_hi": ["1/2", "1/√2", "√3/2", "1"],
        "answer_en": "1/√2",
        "answer_hi": "1/√2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The enzyme that converts starch to maltose is:",
        "question_hi": "वह एंजाइम जो स्टार्च को माल्टोज में परिवर्तित करता है:",
        "options_en": ["Amylase", "Maltase", "Invertase", "Zymase"],
        "options_hi": ["एमाइलेज", "माल्टेज", "इन्वर्टेज", "जाइमेज"],
        "answer_en": "Amylase",
        "answer_hi": "एमाइलेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "The work done in moving a charge in an electric field depends on:",
        "question_hi": "विद्युत क्षेत्र में आवेश को ले जाने में किया गया कार्य निर्भर करता है:",
        "options_en": ["Path taken", "Only initial and final points", "Both A and B", "None of these"],
        "options_hi": ["लिए गए पथ पर", "केवल प्रारंभिक और अंतिम बिंदुओं पर", "A और B दोनों पर", "इनमें से कोई नहीं"],
        "answer_en": "Only initial and final points",
        "answer_hi": "केवल प्रारंभिक और अंतिम बिंदुओं पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The compound that shows optical isomerism is:",
        "question_hi": "वह यौगिक जो प्रकाशीय समावयवता दर्शाता है:",
        "options_en": ["Lactic acid", "Acetic acid", "Formic acid", "Propionic acid"],
        "options_hi": ["लैक्टिक अम्ल", "एसिटिक अम्ल", "फॉर्मिक अम्ल", "प्रोपियोनिक अम्ल"],
        "answer_en": "Lactic acid",
        "answer_hi": "लैक्टिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The value of ∫(0 to 1) x dx is:",
        "question_hi": "∫(0 से 1) x dx का मान है:",
        "options_en": ["0", "1/2", "1", "2"],
        "options_hi": ["0", "1/2", "1", "2"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The hormone that regulates blood calcium level is:",
        "question_hi": "वह हार्मोन जो रक्त कैल्शियम स्तर को नियंत्रित करता है:",
        "options_en": ["Insulin", "Thyroxine", "Parathormone", "Adrenaline"],
        "options_hi": ["इंसुलिन", "थायरोक्सिन", "पैराथॉर्मोन", "एड्रेनालाईन"],
        "answer_en": "Parathormone",
        "answer_hi": "पैराथॉर्मोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "The unit of magnetic flux is:",
        "question_hi": "चुंबकीय फ्लक्स की इकाई है:",
        "options_en": ["Tesla", "Weber", "Henry", "Gauss"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
        "answer_en": "Weber",
        "answer_hi": "वेबर",
        "attempted": false,
        "selected": ""
    },

    // Final Mixed Set (91-100)
    {
        "num": 91,
        "question_en": "The dimensional formula of power is:",
        "question_hi": "शक्ति का विमीय सूत्र है:",
        "options_en": ["ML²T⁻³", "MLT⁻²", "ML²T⁻²", "MLT⁻³"],
        "options_hi": ["ML²T⁻³", "MLT⁻²", "ML²T⁻²", "MLT⁻³"],
        "answer_en": "ML²T⁻³",
        "answer_hi": "ML²T⁻³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which of the following is most reactive towards nucleophilic substitution?",
        "question_hi": "निम्नलिखित में से कौन नाभिकरागी प्रतिस्थापन के प्रति सबसे अधिक अभिक्रियाशील है?",
        "options_en": ["Chlorobenzene", "Benzyl chloride", "Ethyl chloride", "Vinyl chloride"],
        "options_hi": ["क्लोरोबेंजीन", "बेंजिल क्लोराइड", "एथिल क्लोराइड", "विनाइल क्लोराइड"],
        "answer_en": "Benzyl chloride",
        "answer_hi": "बेंजिल क्लोराइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The value of ∫(e^x dx) is:",
        "question_hi": "∫(e^x dx) का मान है:",
        "options_en": ["e^x + C", "xe^x + C", "e^x/x + C", "log|e^x| + C"],
        "options_hi": ["e^x + C", "xe^x + C", "e^x/x + C", "log|e^x| + C"],
        "answer_en": "e^x + C",
        "answer_hi": "e^x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "In PCR, the step involving heating to 95°C is for:",
        "question_hi": "PCR में, 95°C तक गर्म करने वाला चरण है:",
        "options_en": ["Denaturation", "Annealing", "Extension", "All of these"],
        "options_hi": ["विकृतीकरण", "ऐनीलिंग", "विस्तार", "उपरोक्त सभी"],
        "answer_en": "Denaturation",
        "answer_hi": "विकृतीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The function f(x) = |x - 1| + |x - 2| is:",
        "question_hi": "फलन f(x) = |x - 1| + |x - 2| है:",
        "options_en": ["Continuous but not differentiable at x=1,2", "Differentiable everywhere", "Discontinuous at x=1,2", "None of these"],
        "options_hi": ["x=1,2 पर संतत लेकिन अवकलनीय नहीं", "सर्वत्र अवकलनीय", "x=1,2 पर असतत", "इनमें से कोई नहीं"],
        "answer_en": "Continuous but not differentiable at x=1,2",
        "answer_hi": "x=1,2 पर संतत लेकिन अवकलनीय नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "The coordination number of [Co(NH₃)₆]³⁺ is:",
        "question_hi": "[Co(NH₃)₆]³⁺ की उपसहसंयोजन संख्या है:",
        "options_en": ["3", "4", "6", "8"],
        "options_hi": ["3", "4", "6", "8"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "The value of lim(x→∞) (1 + 1/x)^x is:",
        "question_hi": "lim(x→∞) (1 + 1/x)^x का मान है:",
        "options_en": ["0", "1", "e", "∞"],
        "options_hi": ["0", "1", "e", "∞"],
        "answer_en": "e",
        "answer_hi": "e",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which of the following is a diamagnetic species?",
        "question_hi": "निम्नलिखित में से कौन एक प्रतिचुंबकीय स्पीशीज है?",
        "options_en": ["O₂", "O₂⁺", "N₂", "B₂"],
        "options_hi": ["O₂", "O₂⁺", "N₂", "B₂"],
        "answer_en": "N₂",
        "answer_hi": "N₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The area of a triangle with vertices (0,0), (4,0), (0,3) is:",
        "question_hi": "शीर्षों (0,0), (4,0), (0,3) वाले त्रिभुज का क्षेत्रफल है:",
        "options_en": ["6", "12", "24", "8"],
        "options_hi": ["6", "12", "24", "8"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The site of light reaction in photosynthesis is:",
        "question_hi": "प्रकाश संश्लेषण में प्रकाश अभिक्रिया का स्थल है:",
        "options_en": ["Stroma", "Grana", "Matrix", "Cristae"],
        "options_hi": ["स्ट्रोमा", "ग्रैना", "मैट्रिक्स", "क्रिस्टी"],
        "answer_en": "Grana",
        "answer_hi": "ग्रैना",
        "attempted": false,
        "selected": ""
    }
];
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