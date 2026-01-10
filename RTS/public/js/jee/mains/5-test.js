const questions = [
    // Physics - Mechanics (1-10)
    {
        "num": 1,
        "question_en": "A body of mass 2kg is moving with velocity 10m/s. What is its kinetic energy?",
        "question_hi": "2kg द्रव्यमान का एक पिंड 10m/s वेग से गतिमान है। इसकी गतिज ऊर्जा क्या है?",
        "options_en": ["50J", "100J", "150J", "200J"],
        "options_hi": ["50J", "100J", "150J", "200J"],
        "answer_en": "100J",
        "answer_hi": "100J",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The moment of inertia of a solid sphere about its diameter is:",
        "question_hi": "एक ठोस गोले का इसके व्यास के परितः जड़त्व आघूर्ण है:",
        "options_en": ["2/5 MR²", "2/3 MR²", "1/2 MR²", "MR²"],
        "options_hi": ["2/5 MR²", "2/3 MR²", "1/2 MR²", "MR²"],
        "answer_en": "2/5 MR²",
        "answer_hi": "2/5 MR²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "A projectile is fired at 30° with horizontal with velocity 40m/s. What is its maximum height?",
        "question_hi": "एक प्रक्षेप्य को क्षैतिज से 30° पर 40m/s वेग से दागा जाता है। इसकी अधिकतम ऊंचाई क्या है?",
        "options_en": ["10m", "15m", "20m", "25m"],
        "options_hi": ["10m", "15m", "20m", "25m"],
        "answer_en": "20m",
        "answer_hi": "20m",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The dimensional formula of pressure is:",
        "question_hi": "दाब का विमीय सूत्र है:",
        "options_en": ["MLT⁻²", "ML⁻¹T⁻²", "ML²T⁻²", "MLT⁻¹"],
        "options_hi": ["MLT⁻²", "ML⁻¹T⁻²", "ML²T⁻²", "MLT⁻¹"],
        "answer_en": "ML⁻¹T⁻²",
        "answer_hi": "ML⁻¹T⁻²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "A force of 10N acts on a body of mass 5kg. What is the acceleration produced?",
        "question_hi": "5kg द्रव्यमान के पिंड पर 10N बल कार्य करता है। उत्पन्न त्वरण क्या है?",
        "options_en": ["0.5 m/s²", "1 m/s²", "2 m/s²", "5 m/s²"],
        "options_hi": ["0.5 m/s²", "1 m/s²", "2 m/s²", "5 m/s²"],
        "answer_en": "2 m/s²",
        "answer_hi": "2 m/s²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The work done by a conservative force in a closed path is:",
        "question_hi": "एक संरक्षी बल द्वारा बंद पथ में किया गया कार्य है:",
        "options_en": ["Always positive", "Always negative", "Zero", "Depends on path"],
        "options_hi": ["सदैव धनात्मक", "सदैव ऋणात्मक", "शून्य", "पथ पर निर्भर"],
        "answer_en": "Zero",
        "answer_hi": "शून्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "A body is thrown vertically upwards with velocity u. The maximum height reached is:",
        "question_hi": "एक पिंड को ऊर्ध्वाधर ऊपर की ओर वेग u से फेंका जाता है। प्राप्त अधिकतम ऊंचाई है:",
        "options_en": ["u²/g", "u²/2g", "2u/g", "u/g"],
        "options_hi": ["u²/g", "u²/2g", "2u/g", "u/g"],
        "answer_en": "u²/2g",
        "answer_hi": "u²/2g",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The center of mass of a uniform rod of length L lies at:",
        "question_hi": "L लंबाई की एक समरूप छड़ का द्रव्यमान केंद्र स्थित होता है:",
        "options_en": ["L/4 from end", "L/3 from end", "L/2 from end", "2L/3 from end"],
        "options_hi": ["सिरे से L/4", "सिरे से L/3", "सिरे से L/2", "सिरे से 2L/3"],
        "answer_en": "L/2 from end",
        "answer_hi": "सिरे से L/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The angular momentum of a particle is conserved when:",
        "question_hi": "एक कण का कोणीय संवेग संरक्षित रहता है जब:",
        "options_en": ["Net force is zero", "Net torque is zero", "Velocity is constant", "Acceleration is zero"],
        "options_hi": ["निवल बल शून्य है", "निवल बल आघूर्ण शून्य है", "वेग स्थिर है", "त्वरण शून्य है"],
        "answer_en": "Net torque is zero",
        "answer_hi": "निवल बल आघूर्ण शून्य है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "A satellite is revolving close to earth's surface. Its orbital velocity is:",
        "question_hi": "एक उपग्रह पृथ्वी की सतह के निकट परिक्रमा कर रहा है। इसका कक्षीय वेग है:",
        "options_en": ["√(gR)", "√(2gR)", "√(gR/2)", "2√(gR)"],
        "options_hi": ["√(gR)", "√(2gR)", "√(gR/2)", "2√(gR)"],
        "answer_en": "√(gR)",
        "answer_hi": "√(gR)",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Organic (11-20)
    {
        "num": 11,
        "question_en": "Which of the following is an example of electrophilic substitution reaction?",
        "question_hi": "निम्नलिखित में से कौन सा इलेक्ट्रोफिलिक प्रतिस्थापन अभिक्रिया का उदाहरण है?",
        "options_en": ["Nitration of benzene", "Hydrolysis of ester", "Addition of HBr to alkene", "Saponification"],
        "options_hi": ["बेंजीन का नाइट्रीकरण", "एस्टर का जल-अपघटन", "ऐल्कीन में HBr का योग", "साबुनीकरण"],
        "answer_en": "Nitration of benzene",
        "answer_hi": "बेंजीन का नाइट्रीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The compound that gives positive iodoform test is:",
        "question_hi": "वह यौगिक जो सकारात्मक आयोडोफॉर्म परीक्षण देता है:",
        "options_en": ["CH₃CH₂OH", "CH₃CHO", "CH₃COCH₃", "All of these"],
        "options_hi": ["CH₃CH₂OH", "CH₃CHO", "CH₃COCH₃", "उपरोक्त सभी"],
        "answer_en": "All of these",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "In Wurtz reaction, two molecules of alkyl halide react with:",
        "question_hi": "वुर्ट्ज अभिक्रिया में, ऐल्किल हैलाइड के दो अणु अभिक्रिया करते हैं:",
        "options_en": ["Sodium in dry ether", "Alcoholic KOH", "Zn/HCl", "NaNO₂/HCl"],
        "options_hi": ["शुष्क ईथर में सोडियम", "ऐल्कोहॉलिक KOH", "Zn/HCl", "NaNO₂/HCl"],
        "answer_en": "Sodium in dry ether",
        "answer_hi": "शुष्क ईथर में सोडियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
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
        "num": 15,
        "question_en": "The product formed when benzene reacts with CH₃Cl in presence of AlCl₃ is:",
        "question_hi": "बेंजीन की AlCl₃ की उपस्थिति में CH₃Cl के साथ अभिक्रिया से बनने वाला उत्पाद है:",
        "options_en": ["Toluene", "Chlorobenzene", "Benzyl chloride", "Xylene"],
        "options_hi": ["टॉलूईन", "क्लोरोबेंजीन", "बेंजिल क्लोराइड", "ज़ाइलीन"],
        "answer_en": "Toluene",
        "answer_hi": "टॉलूईन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which of the following shows geometrical isomerism?",
        "question_hi": "निम्नलिखित में से कौन ज्यामितीय समावयवता दर्शाता है?",
        "options_en": ["1-Butene", "2-Butene", "Propene", "Ethene"],
        "options_hi": ["1-ब्यूटीन", "2-ब्यूटीन", "प्रोपीन", "ईथीन"],
        "answer_en": "2-Butene",
        "answer_hi": "2-ब्यूटीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The reagent used to distinguish between aldehyde and ketone is:",
        "question_hi": "ऐल्डिहाइड और कीटोन के बीच अंतर करने के लिए प्रयुक्त अभिकर्मक है:",
        "options_en": ["Tollens' reagent", "Fehling's solution", "Both A and B", "Benedict's solution"],
        "options_hi": ["टोलेन अभिकर्मक", "फेहलिंग विलयन", "A और B दोनों", "बेनेडिक्ट विलयन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The number of sigma bonds in CH₂=CH-CH₃ is:",
        "question_hi": "CH₂=CH-CH₃ में सिग्मा बंधों की संख्या है:",
        "options_en": ["6", "7", "8", "9"],
        "options_hi": ["6", "7", "8", "9"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which of the following is an example of condensation polymer?",
        "question_hi": "निम्नलिखित में से कौन संघनन बहुलक का उदाहरण है?",
        "options_en": ["Polythene", "Nylon-6,6", "PVC", "Teflon"],
        "options_hi": ["पॉलिथीन", "नायलॉन-6,6", "PVC", "टेफ्लॉन"],
        "answer_en": "Nylon-6,6",
        "answer_hi": "नायलॉन-6,6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The IUPAC name of CH₃-CH(CH₃)-CH₂-CHO is:",
        "question_hi": "CH₃-CH(CH₃)-CH₂-CHO का IUPAC नाम है:",
        "options_en": ["3-Methylbutanal", "2-Methylbutanal", "Isopentanal", "3-Methylpropanal"],
        "options_hi": ["3-मेथिलब्यूटेनल", "2-मेथिलब्यूटेनल", "आइसोपेंटेनल", "3-मेथिलप्रोपेनल"],
        "answer_en": "3-Methylbutanal",
        "answer_hi": "3-मेथिलब्यूटेनल",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Calculus (21-30)
    {
        "num": 21,
        "question_en": "The derivative of sin²x with respect to x is:",
        "question_hi": "x के सापेक्ष sin²x का अवकलज है:",
        "options_en": ["2sinx", "2cosx", "sin2x", "cos2x"],
        "options_hi": ["2sinx", "2cosx", "sin2x", "cos2x"],
        "answer_en": "sin2x",
        "answer_hi": "sin2x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "∫(1/x)dx equals:",
        "question_hi": "∫(1/x)dx बराबर है:",
        "options_en": ["ln|x| + C", "x + C", "1/x² + C", "lnx + C"],
        "options_hi": ["ln|x| + C", "x + C", "1/x² + C", "lnx + C"],
        "answer_en": "ln|x| + C",
        "answer_hi": "ln|x| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "The maximum value of function f(x) = x³ - 3x² + 2 in [0,2] is:",
        "question_hi": "फलन f(x) = x³ - 3x² + 2 का [0,2] में अधिकतम मान है:",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "If y = e^(2x), then d²y/dx² is:",
        "question_hi": "यदि y = e^(2x), तो d²y/dx² है:",
        "options_en": ["2e^(2x)", "4e^(2x)", "e^(2x)", "2e^x"],
        "options_hi": ["2e^(2x)", "4e^(2x)", "e^(2x)", "2e^x"],
        "answer_en": "4e^(2x)",
        "answer_hi": "4e^(2x)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "The area bounded by y = x² and x-axis between x=0 and x=2 is:",
        "question_hi": "y = x² और x-अक्ष द्वारा x=0 से x=2 के बीच घिरा क्षेत्रफल है:",
        "options_en": ["4/3", "8/3", "16/3", "32/3"],
        "options_hi": ["4/3", "8/3", "16/3", "32/3"],
        "answer_en": "8/3",
        "answer_hi": "8/3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "lim(x→0) (sinx/x) equals:",
        "question_hi": "lim(x→0) (sinx/x) बराबर है:",
        "options_en": ["0", "1", "∞", "Does not exist"],
        "options_hi": ["0", "1", "∞", "अस्तित्व में नहीं है"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The order of differential equation (d²y/dx²)³ + dy/dx = 0 is:",
        "question_hi": "अवकल समीकरण (d²y/dx²)³ + dy/dx = 0 की कोटि है:",
        "options_en": ["1", "2", "3", "0"],
        "options_hi": ["1", "2", "3", "0"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
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
        "num": 29,
        "question_en": "The function f(x) = |x| is differentiable at:",
        "question_hi": "फलन f(x) = |x| अवकलनीय है:",
        "options_en": ["x=0 only", "All real numbers", "All x except 0", "Nowhere"],
        "options_hi": ["केवल x=0", "सभी वास्तविक संख्याओं पर", "0 को छोड़कर सभी x पर", "कहीं नहीं"],
        "answer_en": "All x except 0",
        "answer_hi": "0 को छोड़कर सभी x पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The solution of dy/dx = y is:",
        "question_hi": "dy/dx = y का हल है:",
        "options_en": ["y = Ce^x", "y = Cx", "y = Ce^{-x}", "y = C"],
        "options_hi": ["y = Ce^x", "y = Cx", "y = Ce^{-x}", "y = C"],
        "answer_en": "y = Ce^x",
        "answer_hi": "y = Ce^x",
        "attempted": false,
        "selected": ""
    },

    // Biology - Genetics (31-40)
    {
        "num": 31,
        "question_en": "The process of DNA replication is:",
        "question_hi": "DNA प्रतिकृति की प्रक्रिया है:",
        "options_en": ["Conservative", "Semi-conservative", "Dispersive", "Random"],
        "options_hi": ["संरक्षी", "अर्ध-संरक्षी", "विक्षेपी", "यादृच्छिक"],
        "answer_en": "Semi-conservative",
        "answer_hi": "अर्ध-संरक्षी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The number of chromosomes in human gametes is:",
        "question_hi": "मानव युग्मकों में गुणसूत्रों की संख्या है:",
        "options_en": ["23", "46", "48", "22"],
        "options_hi": ["23", "46", "48", "22"],
        "answer_en": "23",
        "answer_hi": "23",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which of the following is a sex-linked disease?",
        "question_hi": "निम्नलिखित में से कौन सा लिंग-सहलग्न रोग है?",
        "options_en": ["Hemophilia", "Color blindness", "Both A and B", "Sickle cell anemia"],
        "options_hi": ["हेमोफिलिया", "वर्णांधता", "A और B दोनों", "सिकल सेल एनीमिया"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The process of mRNA synthesis from DNA is called:",
        "question_hi": "DNA से mRNA संश्लेषण की प्रक्रिया कहलाती है:",
        "options_en": ["Translation", "Transcription", "Replication", "Transformation"],
        "options_hi": ["अनुवाद", "प्रतिलेखन", "प्रतिकृति", "रूपांतरण"],
        "answer_en": "Transcription",
        "answer_hi": "प्रतिलेखन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "In Mendel's experiment, the F2 generation ratio for dihybrid cross is:",
        "question_hi": "मेंडल के प्रयोग में, द्विसंकर क्रॉस के लिए F2 पीढ़ी का अनुपात है:",
        "options_en": ["3:1", "9:3:3:1", "1:2:1", "1:1"],
        "options_hi": ["3:1", "9:3:3:1", "1:2:1", "1:1"],
        "answer_en": "9:3:3:1",
        "answer_hi": "9:3:3:1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The enzyme that joins DNA fragments is:",
        "question_hi": "DNA खंडों को जोड़ने वाला एंजाइम है:",
        "options_en": ["DNA polymerase", "DNA ligase", "Helicase", "Primase"],
        "options_hi": ["DNA पॉलीमरेज", "DNA लाइगेज", "हेलीकेज", "प्राइमेज"],
        "answer_en": "DNA ligase",
        "answer_hi": "DNA लाइगेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which blood group is called universal donor?",
        "question_hi": "किस रक्त समूह को सार्वत्रिक दाता कहा जाता है?",
        "options_en": ["A", "B", "AB", "O"],
        "options_hi": ["A", "B", "AB", "O"],
        "answer_en": "O",
        "answer_hi": "O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The process of cell division in somatic cells is called:",
        "question_hi": "दैहिक कोशिकाओं में कोशिका विभाजन की प्रक्रिया कहलाती है:",
        "options_en": ["Meiosis", "Mitosis", "Binary fission", "Budding"],
        "options_hi": ["अर्धसूत्रीविभाजन", "समसूत्रीविभाजन", "द्विखंडन", "मुकुलन"],
        "answer_en": "Mitosis",
        "answer_hi": "समसूत्रीविभाजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The site of protein synthesis in cell is:",
        "question_hi": "कोशिका में प्रोटीन संश्लेषण का स्थल है:",
        "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Ribosome",
        "answer_hi": "राइबोसोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The genetic material in HIV is:",
        "question_hi": "HIV में आनुवंशिक पदार्थ है:",
        "options_en": ["DNA", "RNA", "Protein", "Lipid"],
        "options_hi": ["DNA", "RNA", "प्रोटीन", "लिपिड"],
        "answer_en": "RNA",
        "answer_hi": "RNA",
        "attempted": false,
        "selected": ""
    },

    // English Grammar (41-50)
    {
        "num": 41,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["He don't like apples", "He doesn't like apples", "He didn't likes apples", "He not like apples"],
        "options_hi": ["He don't like apples", "He doesn't like apples", "He didn't likes apples", "He not like apples"],
        "answer_en": "He doesn't like apples",
        "answer_hi": "He doesn't like apples",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which word is an adjective?",
        "question_hi": "कौन सा शब्द विशेषण है?",
        "options_en": ["Run", "Beautiful", "Quickly", "Happiness"],
        "options_hi": ["Run", "Beautiful", "Quickly", "Happiness"],
        "answer_en": "Beautiful",
        "answer_hi": "Beautiful",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The synonym of 'Benevolent' is:",
        "question_hi": "'Benevolent' का समानार्थी है:",
        "options_en": ["Cruel", "Kind", "Selfish", "Greedy"],
        "options_hi": ["क्रूर", "दयालु", "स्वार्थी", "लालची"],
        "answer_en": "Kind",
        "answer_hi": "दयालु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Choose the correct passive voice: 'They built this house in 1990.'",
        "question_hi": "सही कर्मवाच्य चुनें: 'They built this house in 1990.'",
        "options_en": ["This house was built in 1990 by them", "This house is built in 1990 by them", "This house built by them in 1990", "This house has been built in 1990"],
        "options_hi": ["This house was built in 1990 by them", "This house is built in 1990 by them", "This house built by them in 1990", "This house has been built in 1990"],
        "answer_en": "This house was built in 1990 by them",
        "answer_hi": "This house was built in 1990 by them",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The antonym of 'Ancient' is:",
        "question_hi": "'Ancient' का विलोम है:",
        "options_en": ["Old", "Modern", "Historic", "Traditional"],
        "options_hi": ["पुराना", "आधुनिक", "ऐतिहासिक", "पारंपरिक"],
        "answer_en": "Modern",
        "answer_hi": "आधुनिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which sentence is in present perfect tense?",
        "question_hi": "कौन सा वाक्य वर्तमान पूर्ण काल में है?",
        "options_en": ["I eat breakfast", "I ate breakfast", "I have eaten breakfast", "I had eaten breakfast"],
        "options_hi": ["I eat breakfast", "I ate breakfast", "I have eaten breakfast", "I had eaten breakfast"],
        "answer_en": "I have eaten breakfast",
        "answer_hi": "I have eaten breakfast",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Choose the correct word: 'The ___ of the storm was devastating.'",
        "question_hi": "सही शब्द चुनें: 'The ___ of the storm was devastating.'",
        "options_en": ["Affect", "Effect", "Impact", "Result"],
        "options_hi": ["Affect", "Effect", "Impact", "Result"],
        "answer_en": "Effect",
        "answer_hi": "Effect",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "The plural of 'Child' is:",
        "question_hi": "'Child' का बहुवचन है:",
        "options_en": ["Childs", "Children", "Childes", "Childer"],
        "options_hi": ["Childs", "Children", "Childes", "Childer"],
        "answer_en": "Children",
        "answer_hi": "Children",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which is a compound sentence?",
        "question_hi": "कौन सा संयुक्त वाक्य है?",
        "options_en": ["I like tea and coffee", "The man who came yesterday", "Running quickly, he won the race", "Because it was raining, we stayed home"],
        "options_hi": ["I like tea and coffee", "The man who came yesterday", "Running quickly, he won the race", "Because it was raining, we stayed home"],
        "answer_en": "I like tea and coffee",
        "answer_hi": "I like tea and coffee",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Choose the correct preposition: 'She is good ___ mathematics.'",
        "question_hi": "सही पूर्वसर्ग चुनें: 'She is good ___ mathematics.'",
        "options_en": ["at", "in", "on", "for"],
        "options_hi": ["at", "in", "on", "for"],
        "answer_en": "at",
        "answer_hi": "at",
        "attempted": false,
        "selected": ""
    },

    // Hindi Grammar (51-60)
    {
        "num": 51,
        "question_en": "'विद्यालय' शब्द का पर्यायवाची है:",
        "question_hi": "'विद्यालय' शब्द का पर्यायवाची है:",
        "options_en": ["पाठशाला", "अस्पताल", "कार्यालय", "उद्यान"],
        "options_hi": ["पाठशाला", "अस्पताल", "कार्यालय", "उद्यान"],
        "answer_en": "पाठशाला",
        "answer_hi": "पाठशाला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "'सूरज' का तत्सम रूप है:",
        "question_hi": "'सूरज' का तत्सम रूप है:",
        "options_en": ["सूर्य", "सुरज", "सूरजा", "सुर्य"],
        "options_hi": ["सूर्य", "सुरज", "सूरजा", "सुर्य"],
        "answer_en": "सूर्य",
        "answer_hi": "सूर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "कौन सा शब्द संज्ञा है?",
        "question_hi": "कौन सा शब्द संज्ञा है?",
        "options_en": ["खेलना", "सुंदर", "किताब", "तेज"],
        "options_hi": ["खेलना", "सुंदर", "किताब", "तेज"],
        "answer_en": "किताब",
        "answer_hi": "किताब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "'गाय' का बहुवचन रूप है:",
        "question_hi": "'गाय' का बहुवचन रूप है:",
        "options_en": ["गायें", "गायों", "गाएं", "गाये"],
        "options_hi": ["गायें", "गायों", "गाएं", "गाये"],
        "answer_en": "गायें",
        "answer_hi": "गायें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "कौन सा वाक्य शुद्ध है?",
        "question_hi": "कौन सा वाक्य शुद्ध है?",
        "options_en": ["वह पढ़ता है।", "वह पढ़ती है।", "वह पढ़ते हैं।", "वह पढ़ने है।"],
        "options_hi": ["वह पढ़ता है।", "वह पढ़ती है।", "वह पढ़ते हैं।", "वह पढ़ने है।"],
        "answer_en": "वह पढ़ता है।",
        "answer_hi": "वह पढ़ता है।",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "'सुबह' का विलोम शब्द है:",
        "question_hi": "'सुबह' का विलोम शब्द है:",
        "options_en": ["दोपहर", "शाम", "रात", "संध्या"],
        "options_hi": ["दोपहर", "शाम", "रात", "संध्या"],
        "answer_en": "रात",
        "answer_hi": "रात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "कौन सा शब्द स्त्रीलिंग है?",
        "question_hi": "कौन सा शब्द स्त्रीलिंग है?",
        "options_en": ["लड़का", "किताब", "घर", "मेज"],
        "options_hi": ["लड़का", "किताब", "घर", "मेज"],
        "answer_en": "किताब",
        "answer_hi": "किताब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "'राम ने रोटी खाई' वाक्य में कर्म है:",
        "question_hi": "'राम ने रोटी खाई' वाक्य में कर्म है:",
        "options_en": ["राम", "ने", "रोटी", "खाई"],
        "options_hi": ["राम", "ने", "रोटी", "खाई"],
        "answer_en": "रोटी",
        "answer_hi": "रोटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "कौन सा शब्द तद्भव है?",
        "question_hi": "कौन सा शब्द तद्भव है?",
        "options_en": ["अग्नि", "आग", "वायु", "जल"],
        "options_hi": ["अग्नि", "आग", "वायु", "जल"],
        "answer_en": "आग",
        "answer_hi": "आग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "'महान' का विलोम है:",
        "question_hi": "'महान' का विलोम है:",
        "options_en": ["बड़ा", "छोटा", "तुच्छ", "उच्च"],
        "options_hi": ["बड़ा", "छोटा", "तुच्छ", "उच्च"],
        "answer_en": "तुच्छ",
        "answer_hi": "तुच्छ",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge (61-70)
    {
        "num": 61,
        "question_en": "Who is known as the Father of the Indian Constitution?",
        "question_hi": "भारतीय संविधान के जनक के रूप में किसे जाना जाता है?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "बी.आर. अंबेडकर", "सरदार पटेल"],
        "answer_en": "B.R. Ambedkar",
        "answer_hi": "बी.आर. अंबेडकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which is the longest river in India?",
        "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
        "options_en": ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
        "options_hi": ["गंगा", "यमुना", "ब्रह्मपुत्र", "गोदावरी"],
        "answer_en": "Ganga",
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Who was the first Prime Minister of India?",
        "question_hi": "भारत के प्रथम प्रधानमंत्री कौन थे?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Rajendra Prasad"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "इंदिरा गांधी", "राजेंद्र प्रसाद"],
        "answer_en": "Jawaharlal Nehru",
        "answer_hi": "जवाहरलाल नेहरू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which is the national animal of India?",
        "question_hi": "भारत का राष्ट्रीय पशु कौन सा है?",
        "options_en": ["Lion", "Tiger", "Elephant", "Peacock"],
        "options_hi": ["शेर", "बाघ", "हाथी", "मोर"],
        "answer_en": "Tiger",
        "answer_hi": "बाघ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Who wrote the Indian National Anthem?",
        "question_hi": "भारत के राष्ट्रगान के रचयिता कौन हैं?",
        "options_en": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Mahatma Gandhi"],
        "options_hi": ["रबींद्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "सरोजिनी नायडू", "महात्मा गांधी"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which is the largest state in India by area?",
        "question_hi": "क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा राज्य कौन सा है?",
        "options_en": ["Uttar Pradesh", "Maharashtra", "Rajasthan", "Madhya Pradesh"],
        "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "राजस्थान", "मध्य प्रदेश"],
        "answer_en": "Rajasthan",
        "answer_hi": "राजस्थान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Who discovered India?",
        "question_hi": "भारत की खोज किसने की?",
        "options_en": ["Vasco da Gama", "Christopher Columbus", "Marco Polo", "James Cook"],
        "options_hi": ["वास्को डी गामा", "क्रिस्टोफर कोलंबस", "मार्को पोलो", "जेम्स कुक"],
        "answer_en": "Vasco da Gama",
        "answer_hi": "वास्को डी गामा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which is the national flower of India?",
        "question_hi": "भारत का राष्ट्रीय फूल कौन सा है?",
        "options_en": ["Rose", "Lotus", "Marigold", "Sunflower"],
        "options_hi": ["गुलाब", "कमल", "गेंदा", "सूरजमुखी"],
        "answer_en": "Lotus",
        "answer_hi": "कमल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "When did India get independence?",
        "question_hi": "भारत को कब स्वतंत्रता मिली?",
        "options_en": ["1947", "1950", "1942", "1857"],
        "options_hi": ["1947", "1950", "1942", "1857"],
        "answer_en": "1947",
        "answer_hi": "1947",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which is the capital of India?",
        "question_hi": "भारत की राजधानी क्या है?",
        "options_en": ["Mumbai", "Kolkata", "Delhi", "Chennai"],
        "options_hi": ["मुंबई", "कोलकाता", "दिल्ली", "चेन्नई"],
        "answer_en": "Delhi",
        "answer_hi": "दिल्ली",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (71-100)
    {
        "num": 71,
        "question_en": "The SI unit of electric current is:",
        "question_hi": "विद्युत धारा की SI इकाई है:",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The chemical formula of common salt is:",
        "question_hi": "साधारण नमक का रासायनिक सूत्र है:",
        "options_en": ["NaCl", "KCl", "CaCO₃", "NaOH"],
        "options_hi": ["NaCl", "KCl", "CaCO₃", "NaOH"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The value of π is approximately:",
        "question_hi": "π का मान लगभग है:",
        "options_en": ["3.14", "2.71", "1.41", "1.73"],
        "options_hi": ["3.14", "2.71", "1.41", "1.73"],
        "answer_en": "3.14",
        "answer_hi": "3.14",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The process of water turning into vapor is called:",
        "question_hi": "जल के वाष्प में बदलने की प्रक्रिया कहलाती है:",
        "options_en": ["Condensation", "Evaporation", "Sublimation", "Freezing"],
        "options_hi": ["संघनन", "वाष्पीकरण", "उर्ध्वपातन", "जमना"],
        "answer_en": "Evaporation",
        "answer_hi": "वाष्पीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The largest planet in our solar system is:",
        "question_hi": "हमारे सौर मंडल का सबसे बड़ा ग्रह है:",
        "options_en": ["Earth", "Jupiter", "Saturn", "Mars"],
        "options_hi": ["पृथ्वी", "बृहस्पति", "शनि", "मंगल"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "The speed of light in vacuum is:",
        "question_hi": "निर्वात में प्रकाश की गति है:",
        "options_en": ["3 × 10⁸ m/s", "3 × 10⁵ m/s", "3 × 10³ m/s", "3 × 10¹⁰ m/s"],
        "options_hi": ["3 × 10⁸ m/s", "3 × 10⁵ m/s", "3 × 10³ m/s", "3 × 10¹⁰ m/s"],
        "answer_en": "3 × 10⁸ m/s",
        "answer_hi": "3 × 10⁸ m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "The chemical symbol for gold is:",
        "question_hi": "सोने का रासायनिक प्रतीक है:",
        "options_en": ["Ag", "Au", "Fe", "Cu"],
        "options_hi": ["Ag", "Au", "Fe", "Cu"],
        "answer_en": "Au",
        "answer_hi": "Au",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "The value of sin90° is:",
        "question_hi": "sin90° का मान है:",
        "options_en": ["0", "0.5", "1", "√3/2"],
        "options_hi": ["0", "0.5", "1", "√3/2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "The main component of biogas is:",
        "question_hi": "बायोगैस का मुख्य घटक है:",
        "options_en": ["Methane", "Ethane", "Propane", "Butane"],
        "options_hi": ["मीथेन", "ईथेन", "प्रोपेन", "ब्यूटेन"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "The formula for area of circle is:",
        "question_hi": "वृत्त के क्षेत्रफल का सूत्र है:",
        "options_en": ["πr²", "2πr", "πd", "2πr²"],
        "options_hi": ["πr²", "2πr", "πd", "2πr²"],
        "answer_en": "πr²",
        "answer_hi": "πr²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The atomic number of carbon is:",
        "question_hi": "कार्बन की परमाणु संख्या है:",
        "options_en": ["6", "12", "14", "16"],
        "options_hi": ["6", "12", "14", "16"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The device used to measure electric current is:",
        "question_hi": "विद्युत धारा मापने के लिए प्रयुक्त उपकरण है:",
        "options_en": ["Voltmeter", "Ammeter", "Ohmmeter", "Galvanometer"],
        "options_hi": ["वोल्टमीटर", "एमीटर", "ओममीटर", "गैल्वेनोमीटर"],
        "answer_en": "Ammeter",
        "answer_hi": "एमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "The process of plants making food is called:",
        "question_hi": "पौधों द्वारा भोजन बनाने की प्रक्रिया कहलाती है:",
        "options_en": ["Respiration", "Photosynthesis", "Transpiration", "Digestion"],
        "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "पाचन"],
        "answer_en": "Photosynthesis",
        "answer_hi": "प्रकाश संश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The value of (a + b)² is:",
        "question_hi": "(a + b)² का मान है:",
        "options_en": ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "a² + b² - 2ab"],
        "options_hi": ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "a² + b² - 2ab"],
        "answer_en": "a² + 2ab + b²",
        "answer_hi": "a² + 2ab + b²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The gas responsible for global warming is:",
        "question_hi": "ग्लोबल वार्मिंग के लिए जिम्मेदार गैस है:",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "The formula for force is:",
        "question_hi": "बल का सूत्र है:",
        "options_en": ["mass × acceleration", "mass × velocity", "pressure × area", "work/distance"],
        "options_hi": ["द्रव्यमान × त्वरण", "द्रव्यमान × वेग", "दाब × क्षेत्रफल", "कार्य/दूरी"],
        "answer_en": "mass × acceleration",
        "answer_hi": "द्रव्यमान × त्वरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The largest ocean in the world is:",
        "question_hi": "विश्व का सबसे बड़ा महासागर है:",
        "options_en": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        "options_hi": ["अटलांटिक महासागर", "हिंद महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
        "answer_en": "Pacific Ocean",
        "answer_hi": "प्रशांत महासागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The chemical formula of water is:",
        "question_hi": "जल का रासायनिक सूत्र है:",
        "options_en": ["H₂O", "CO₂", "NaCl", "CH₄"],
        "options_hi": ["H₂O", "CO₂", "NaCl", "CH₄"],
        "answer_en": "H₂O",
        "answer_hi": "H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The value of 2 + 2 × 2 is:",
        "question_hi": "2 + 2 × 2 का मान है:",
        "options_en": ["6", "8", "4", "12"],
        "options_hi": ["6", "8", "4", "12"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "The metal used in making electric wires is:",
        "question_hi": "विद्युत तार बनाने में प्रयुक्त धातु है:",
        "options_en": ["Copper", "Iron", "Aluminum", "Silver"],
        "options_hi": ["तांबा", "लोहा", "एल्युमिनियम", "चांदी"],
        "answer_en": "Copper",
        "answer_hi": "तांबा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The process of cell division is called:",
        "question_hi": "कोशिका विभाजन की प्रक्रिया कहलाती है:",
        "options_en": ["Mitosis", "Meiosis", "Both A and B", "None"],
        "options_hi": ["समसूत्रीविभाजन", "अर्धसूत्रीविभाजन", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The formula for volume of cube is:",
        "question_hi": "घन के आयतन का सूत्र है:",
        "options_en": ["a³", "a²", "2a", "3a"],
        "options_hi": ["a³", "a²", "2a", "3a"],
        "answer_en": "a³",
        "answer_hi": "a³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The gas released during photosynthesis is:",
        "question_hi": "प्रकाश संश्लेषण के दौरान मुक्त होने वाली गैस है:",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The value of √144 is:",
        "question_hi": "√144 का मान है:",
        "options_en": ["12", "14", "16", "18"],
        "options_hi": ["12", "14", "16", "18"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The hardest natural substance is:",
        "question_hi": "सबसे कठोर प्राकृतिक पदार्थ है:",
        "options_en": ["Iron", "Diamond", "Gold", "Platinum"],
        "options_hi": ["लोहा", "हीरा", "सोना", "प्लैटिनम"],
        "answer_en": "Diamond",
        "answer_hi": "हीरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "The formula for speed is:",
        "question_hi": "चाल का सूत्र है:",
        "options_en": ["distance/time", "time/distance", "distance × time", "acceleration × time"],
        "options_hi": ["दूरी/समय", "समय/दूरी", "दूरी × समय", "त्वरण × समय"],
        "answer_en": "distance/time",
        "answer_hi": "दूरी/समय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "The main gas in atmosphere is:",
        "question_hi": "वायुमंडल में मुख्य गैस है:",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "The value of 7² is:",
        "question_hi": "7² का मान है:",
        "options_en": ["14", "49", "21", "56"],
        "options_hi": ["14", "49", "21", "56"],
        "answer_en": "49",
        "answer_hi": "49",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The device used to measure temperature is:",
        "question_hi": "तापमान मापने के लिए प्रयुक्त उपकरण है:",
        "options_en": ["Barometer", "Thermometer", "Hygrometer", "Ammeter"],
        "options_hi": ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एमीटर"],
        "answer_en": "Thermometer",
        "answer_hi": "थर्मामीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The chemical formula of glucose is:",
        "question_hi": "ग्लूकोज का रासायनिक सूत्र है:",
        "options_en": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "CH₄", "CO₂"],
        "options_hi": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "CH₄", "CO₂"],
        "answer_en": "C₆H₁₂O₆",
        "answer_hi": "C₆H₁₂O₆",
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