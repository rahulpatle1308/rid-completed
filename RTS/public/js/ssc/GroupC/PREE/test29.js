const questions = [
 {
  num: 1,
  question_en: "The principle of equivalence in General Relativity states that:",
  question_hi: "सामान्य सापेक्षता में तुल्यता सिद्धांत कहता है कि:",
  options_en: ["Gravitational mass equals inertial mass", "Space and time are relative", "Light always travels at constant speed", "Energy equals mass times c²"],
  options_hi: ["गुरुत्वीय द्रव्यमान जड़त्वीय द्रव्यमान के बराबर होता है", "अंतरिक्ष और समय सापेक्ष हैं", "प्रकाश हमेशा स्थिर गति से चलता है", "ऊर्जा द्रव्यमान गुणा c² के बराबर होती है"],
  answer_en: "Gravitational mass equals inertial mass",
  answer_hi: "गुरुत्वीय द्रव्यमान जड़त्वीय द्रव्यमान के बराबर होता है",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "The Schwarzschild radius for a black hole is given by:",
  question_hi: "ब्लैक होल के लिए श्वार्जस्चिल्ड त्रिज्या दी जाती है:",
  options_en: ["2GM/c²", "GM/c²", "GM/c", "2GM/c"],
  options_hi: ["2GM/c²", "GM/c²", "GM/c", "2GM/c"],
  answer_en: "2GM/c²",
  answer_hi: "2GM/c²",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "The Compton effect demonstrates:",
  question_hi: "कॉम्पटन प्रभाव प्रदर्शित करता है:",
  options_en: ["Particle nature of light", "Wave nature of light", "Dual nature of light", "Neither"],
  options_hi: ["प्रकाश की कण प्रकृति", "प्रकाश की तरंग प्रकृति", "प्रकाश की द्वैत प्रकृति", "न तो"],
  answer_en: "Particle nature of light",
  answer_hi: "प्रकाश की कण प्रकृति",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "The Hamiltonian formulation of classical mechanics expresses equations of motion in terms of:",
  question_hi: "शास्त्रीय यांत्रिकी का हैमिल्टनियन फॉर्मूलेशन गति के समीकरणों को व्यक्त करता है:",
  options_en: ["Generalized coordinates and momenta", "Forces and accelerations", "Velocities and positions", "Energy and work"],
  options_hi: ["सामान्यीकृत निर्देशांक और संवेग", "बल और त्वरण", "वेग और स्थिति", "ऊर्जा और कार्य"],
  answer_en: "Generalized coordinates and momenta",
  answer_hi: "सामान्यीकृत निर्देशांक और संवेग",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "The Aharonov-Bohm effect demonstrates:",
  question_hi: "अहरोनोव-बोहम प्रभाव प्रदर्शित करता है:",
  options_en: ["Significance of electromagnetic potentials", "Wave-particle duality", "Quantum entanglement", "Uncertainty principle"],
  options_hi: ["विद्युत चुम्बकीय विभवों का महत्व", "तरंग-कण द्वैत", "क्वांटम उलझाव", "अनिश्चितता सिद्धांत"],
  answer_en: "Significance of electromagnetic potentials",
  answer_hi: "विद्युत चुम्बकीय विभवों का महत्व",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "The Casimir effect arises due to:",
  question_hi: "कैसिमिर प्रभाव उत्पन्न होता है:",
  options_en: ["Quantum vacuum fluctuations", "Gravitational waves", "Electromagnetic radiation", "Thermal noise"],
  options_hi: ["क्वांटम निर्वात उतार-चढ़ाव", "गुरुत्वाकर्षण तरंगें", "विद्युत चुम्बकीय विकिरण", "तापीय शोर"],
  answer_en: "Quantum vacuum fluctuations",
  answer_hi: "क्वांटम निर्वात उतार-चढ़ाव",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "The WKB approximation is used in quantum mechanics for:",
  question_hi: "WKB सन्निकटन का उपयोग क्वांटम यांत्रिकी में किया जाता है:",
  options_en: ["Semi-classical approximation of wavefunctions", "Exact solutions of Schrödinger equation", "Relativistic corrections", "Many-body problems"],
  options_hi: ["वेवफंक्शनों का अर्ध-शास्त्रीय सन्निकटन", "श्रोडिंगर समीकरण के सटीक हल", "सापेक्षिक संशोधन", "बहु-कण समस्याएं"],
  answer_en: "Semi-classical approximation of wavefunctions",
  answer_hi: "वेवफंक्शनों का अर्ध-शास्त्रीय सन्निकटन",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "The Dirac equation describes:",
  question_hi: "डिराक समीकरण वर्णन करता है:",
  options_en: ["Relativistic quantum mechanical wave equation for spin-½ particles", "Non-relativistic quantum particles", "Classical electromagnetic waves", "Gravitational waves"],
  options_hi: ["स्पिन-½ कणों के लिए सापेक्षिक क्वांटम यांत्रिक तरंग समीकरण", "गैर-सापेक्षिक क्वांटम कण", "शास्त्रीय विद्युत चुम्बकीय तरंगें", "गुरुत्वाकर्षण तरंगें"],
  answer_en: "Relativistic quantum mechanical wave equation for spin-½ particles",
  answer_hi: "स्पिन-½ कणों के लिए सापेक्षिक क्वांटम यांत्रिक तरंग समीकरण",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "The Landau levels are quantized energy levels of:",
  question_hi: "लैंडाऊ स्तर मात्रात्मक ऊर्जा स्तर हैं:",
  options_en: ["Charged particles in magnetic fields", "Harmonic oscillators", "Hydrogen atom", "Free particles"],
  options_hi: ["चुंबकीय क्षेत्रों में आवेशित कण", "हार्मोनिक ऑसिलेटर", "हाइड्रोजन परमाणु", "मुक्त कण"],
  answer_en: "Charged particles in magnetic fields",
  answer_hi: "चुंबकीय क्षेत्रों में आवेशित कण",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "The Raman effect involves:",
  question_hi: "रमण प्रभाव शामिल करता है:",
  options_en: ["Inelastic scattering of light by molecules", "Elastic scattering of light", "Absorption of light", "Emission of light"],
  options_hi: ["अणुओं द्वारा प्रकाश का अप्रत्यास्थ प्रकीर्णन", "प्रकाश का प्रत्यास्थ प्रकीर्णन", "प्रकाश का अवशोषण", "प्रकाश का उत्सर्जन"],
  answer_en: "Inelastic scattering of light by molecules",
  answer_hi: "अणुओं द्वारा प्रकाश का अप्रत्यास्थ प्रकीर्णन",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "The Hall effect in semiconductors can be used to determine:",
  question_hi: "अर्धचालकों में हॉल प्रभाव का उपयोग निर्धारित करने के लिए किया जा सकता है:",
  options_en: ["Charge carrier type and concentration", "Band gap energy", "Electrical conductivity", "Thermal conductivity"],
  options_hi: ["आवेश वाहक प्रकार और सांद्रता", "बैंड गैप ऊर्जा", "विद्युत चालकता", "तापीय चालकता"],
  answer_en: "Charge carrier type and concentration",
  answer_hi: "आवेश वाहक प्रकार और सांद्रता",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "The Rayleigh criterion for resolving power of an optical instrument is given by:",
  question_hi: "एक प्रकाशीय उपकरण की विभेदन क्षमता के लिए रेले मानदंड दिया जाता है:",
  options_en: ["θ = 1.22λ/D", "θ = λ/D", "θ = 0.61λ/D", "θ = 2λ/D"],
  options_hi: ["θ = 1.22λ/D", "θ = λ/D", "θ = 0.61λ/D", "θ = 2λ/D"],
  answer_en: "θ = 1.22λ/D",
  answer_hi: "θ = 1.22λ/D",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "The Bloch theorem in solid state physics describes:",
  question_hi: "ठोस अवस्था भौतिकी में ब्लोच प्रमेय वर्णन करता है:",
  options_en: ["Wavefunctions in periodic potentials", "Superconductivity", "Magnetic properties", "Thermal conductivity"],
  options_hi: ["आवर्ती विभवों में तरंग फलन", "अतिचालकता", "चुंबकीय गुण", "तापीय चालकता"],
  answer_en: "Wavefunctions in periodic potentials",
  answer_hi: "आवर्ती विभवों में तरंग फलन",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "The Meissner effect in superconductors demonstrates:",
  question_hi: "अतिचालकों में माइसनर प्रभाव प्रदर्शित करता है:",
  options_en: ["Complete expulsion of magnetic field", "Zero electrical resistance", "Critical temperature", "Cooper pair formation"],
  options_hi: ["चुंबकीय क्षेत्र का पूर्ण निष्कासन", "शून्य विद्युत प्रतिरोध", "क्रांतिक तापमान", "कूपर युग्म निर्माण"],
  answer_en: "Complete expulsion of magnetic field",
  answer_hi: "चुंबकीय क्षेत्र का पूर्ण निष्कासन",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "The Josephson effect involves:",
  question_hi: "जोसेफसन प्रभाव शामिल करता है:",
  options_en: ["Tunneling of Cooper pairs through a weak link", "Normal electron tunneling", "Photon emission", "Magnetic flux quantization"],
  options_hi: ["कूपर युग्मों का एक कमजोर कड़ी के माध्यम से टनलिंग", "सामान्य इलेक्ट्रॉन टनलिंग", "फोटॉन उत्सर्जन", "चुंबकीय फ्लक्स मात्राकरण"],
  answer_en: "Tunneling of Cooper pairs through a weak link",
  answer_hi: "कूपर युग्मों का एक कमजोर कड़ी के माध्यम से टनलिंग",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "The Zeeman effect refers to:",
  question_hi: "ज़ीमैन प्रभाव संदर्भित करता है:",
  options_en: ["Splitting of spectral lines in magnetic field", "Splitting in electric field", "Broadening due to Doppler effect", "Pressure broadening"],
  options_hi: ["चुंबकीय क्षेत्र में वर्णक्रमीय रेखाओं का विभाजन", "विद्युत क्षेत्र में विभाजन", "डॉप्लर प्रभाव के कारण विस्तार", "दबाव विस्तार"],
  answer_en: "Splitting of spectral lines in magnetic field",
  answer_hi: "चुंबकीय क्षेत्र में वर्णक्रमीय रेखाओं का विभाजन",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "The Franck-Condon principle explains:",
  question_hi: "फ्रैंक-कॉन्डन सिद्धांत समझाता है:",
  options_en: ["Intensities of vibrational transitions", "Electronic transitions", "Rotational spectra", "Nuclear transitions"],
  options_hi: ["कंपन संक्रमणों की तीव्रताएं", "इलेक्ट्रॉनिक संक्रमण", "घूर्णी स्पेक्ट्रा", "नाभिकीय संक्रमण"],
  answer_en: "Intensities of vibrational transitions",
  answer_hi: "कंपन संक्रमणों की तीव्रताएं",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "The Einstein coefficients A and B are related to:",
  question_hi: "आइंस्टीन गुणांक A और B संबंधित हैं:",
  options_en: ["Spontaneous and stimulated emission", "Absorption only", "Scattering processes", "Reflection"],
  options_hi: ["स्वतःस्फूर्त और उत्तेजित उत्सर्जन", "केवल अवशोषण", "प्रकीर्णन प्रक्रियाएं", "परावर्तन"],
  answer_en: "Spontaneous and stimulated emission",
  answer_hi: "स्वतःस्फूर्त और उत्तेजित उत्सर्जन",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "The Chandrasekhar limit is approximately:",
  question_hi: "चंद्रशेखर सीमा लगभग है:",
  options_en: ["1.4 solar masses", "3 solar masses", "0.5 solar masses", "5 solar masses"],
  options_hi: ["1.4 सौर द्रव्यमान", "3 सौर द्रव्यमान", "0.5 सौर द्रव्यमान", "5 सौर द्रव्यमान"],
  answer_en: "1.4 solar masses",
  answer_hi: "1.4 सौर द्रव्यमान",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "The Navier-Stokes equations describe:",
  question_hi: "नेवियर-स्टोक्स समीकरण वर्णन करते हैं:",
  options_en: ["Motion of viscous fluid substances", "Electromagnetic waves", "Quantum particles", "Elastic solids"],
  options_hi: ["श्यान द्रव पदार्थों की गति", "विद्युत चुम्बकीय तरंगें", "क्वांटम कण", "प्रत्यास्थ ठोस"],
  answer_en: "Motion of viscous fluid substances",
  answer_hi: "श्यान द्रव पदार्थों की गति",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "The Rayleigh-Jeans law describes blackbody radiation in the limit of:",
  question_hi: "रेले-जीन्स नियम ब्लैकबॉडी विकिरण का वर्णन करता है सीमा में:",
  options_en: ["Long wavelengths", "Short wavelengths", "All wavelengths", "Visible spectrum"],
  options_hi: ["लंबी तरंगदैर्ध्य", "छोटी तरंगदैर्ध्य", "सभी तरंगदैर्ध्य", "दृश्यमान स्पेक्ट्रम"],
  answer_en: "Long wavelengths",
  answer_hi: "लंबी तरंगदैर्ध्य",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "The Wien's displacement law states:",
  question_hi: "वीन का विस्थापन नियम कहता है:",
  options_en: ["λ_max T = constant", "E = hν", "PV = nRT", "F = ma"],
  options_hi: ["λ_max T = स्थिरांक", "E = hν", "PV = nRT", "F = ma"],
  answer_en: "λ_max T = constant",
  answer_hi: "λ_max T = स्थिरांक",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "The Lamb shift in hydrogen atom is due to:",
  question_hi: "हाइड्रोजन परमाणु में लैम्ब शिफ्ट कारण है:",
  options_en: ["Quantum electrodynamic effects", "Relativistic corrections", "Nuclear size effects", "Gravitational effects"],
  options_hi: ["क्वांटम विद्युतगतिकीय प्रभाव", "सापेक्षिक संशोधन", "नाभिकीय आकार प्रभाव", "गुरुत्वाकर्षण प्रभाव"],
  answer_en: "Quantum electrodynamic effects",
  answer_hi: "क्वांटम विद्युतगतिकीय प्रभाव",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "The Fresnel equations describe:",
  question_hi: "फ्रेस्नेल समीकरण वर्णन करते हैं:",
  options_en: ["Reflection and transmission of light at interfaces", "Diffraction patterns", "Interference fringes", "Polarization"],
  options_hi: ["इंटरफेस पर प्रकाश का परावर्तन और संचरण", "विवर्तन पैटर्न", "व्यतिकरण फ्रिंज", "ध्रुवीकरण"],
  answer_en: "Reflection and transmission of light at interfaces",
  answer_hi: "इंटरफेस पर प्रकाश का परावर्तन और संचरण",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "The Stark effect involves splitting of spectral lines due to:",
  question_hi: "स्टार्क प्रभाव शामिल करता है वर्णक्रमीय रेखाओं का विभाजन कारण:",
  options_en: ["Electric field", "Magnetic field", "Gravitational field", "Pressure"],
  options_hi: ["विद्युत क्षेत्र", "चुंबकीय क्षेत्र", "गुरुत्वाकर्षण क्षेत्र", "दबाव"],
  answer_en: "Electric field",
  answer_hi: "विद्युत क्षेत्र",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "The Rydberg constant for hydrogen is given by:",
  question_hi: "हाइड्रोजन के लिए रिडबर्ग स्थिरांक दिया जाता है:",
  options_en: ["R_H = m_e e^4/(8ε₀²h³c)", "R_H = hc/λ", "R_H = k_B T", "R_H = GM/c²"],
  options_hi: ["R_H = m_e e^4/(8ε₀²h³c)", "R_H = hc/λ", "R_H = k_B T", "R_H = GM/c²"],
  answer_en: "R_H = m_e e^4/(8ε₀²h³c)",
  answer_hi: "R_H = m_e e^4/(8ε₀²h³c)",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "The Mössbauer effect involves:",
  question_hi: "मॉसबाउर प्रभाव शामिल करता है:",
  options_en: ["Recoil-free nuclear gamma resonance", "Electron transitions", "Molecular vibrations", "Photon scattering"],
  options_hi: ["प्रतिक्षेप-मुक्त नाभिकीय गामा अनुनाद", "इलेक्ट्रॉन संक्रमण", "आणविक कंपन", "फोटॉन प्रकीर्णन"],
  answer_en: "Recoil-free nuclear gamma resonance",
  answer_hi: "प्रतिक्षेप-मुक्त नाभिकीय गामा अनुनाद",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "The Virial theorem in astrophysics relates:",
  question_hi: "खगोल भौतिकी में विरियल प्रमेय संबंधित करता है:",
  options_en: ["Average kinetic and potential energies", "Mass and luminosity", "Temperature and pressure", "Density and volume"],
  options_hi: ["औसत गतिज और स्थितिज ऊर्जाएं", "द्रव्यमान और चमक", "तापमान और दबाव", "घनत्व और आयतन"],
  answer_en: "Average kinetic and potential energies",
  answer_hi: "औसत गतिज और स्थितिज ऊर्जाएं",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "The Debye model describes:",
  question_hi: "डेबाई मॉडल वर्णन करता है:",
  options_en: ["Specific heat of solids at low temperatures", "Electrical conductivity", "Magnetic susceptibility", "Optical properties"],
  options_hi: ["कम तापमान पर ठोस पदार्थों की विशिष्ट ऊष्मा", "विद्युत चालकता", "चुंबकीय संवेदनशीलता", "प्रकाशीय गुण"],
  answer_en: "Specific heat of solids at low temperatures",
  answer_hi: "कम तापमान पर ठोस पदार्थों की विशिष्ट ऊष्मा",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "The Stern-Gerlach experiment demonstrates:",
  question_hi: "स्टर्न-गर्लाक प्रयोग प्रदर्शित करता है:",
  options_en: ["Space quantization of angular momentum", "Wave nature of electrons", "Particle nature of light", "Quantum tunneling"],
  options_hi: ["कोणीय संवेग का स्थान मात्राकरण", "इलेक्ट्रॉनों की तरंग प्रकृति", "प्रकाश की कण प्रकृति", "क्वांटम टनलिंग"],
  answer_en: "Space quantization of angular momentum",
  answer_hi: "कोणीय संवेग का स्थान मात्राकरण",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "The Bethe-Bloch formula describes:",
  question_hi: "बेथे-ब्लोच सूत्र वर्णन करता है:",
  options_en: ["Energy loss of charged particles in matter", "Nuclear decay rates", "Scattering cross sections", "Radiation pressure"],
  options_hi: ["पदार्थ में आवेशित कणों की ऊर्जा हानि", "नाभिकीय क्षय दर", "प्रकीर्णन अनुप्रस्थ काट", "विकिरण दबाव"],
  answer_en: "Energy loss of charged particles in matter",
  answer_hi: "पदार्थ में आवेशित कणों की ऊर्जा हानि",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "The Kerr effect involves change in refractive index due to:",
  question_hi: "कर प्रभाव शामिल करता है अपवर्तनांक में परिवर्तन कारण:",
  options_en: ["Electric field", "Magnetic field", "Temperature", "Pressure"],
  options_hi: ["विद्युत क्षेत्र", "चुंबकीय क्षेत्र", "तापमान", "दबाव"],
  answer_en: "Electric field",
  answer_hi: "विद्युत क्षेत्र",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "The Landé g-factor is used in:",
  question_hi: "लैंडे g-फैक्टर का उपयोग किया जाता है:",
  options_en: ["Atomic and nuclear magnetic moments", "Gravitational calculations", "Optical spectra", "Thermal conductivity"],
  options_hi: ["परमाणु और नाभिकीय चुंबकीय आघूर्ण", "गुरुत्वाकर्षण गणना", "प्रकाशीय स्पेक्ट्रा", "तापीय चालकता"],
  answer_en: "Atomic and nuclear magnetic moments",
  answer_hi: "परमाणु और नाभिकीय चुंबकीय आघूर्ण",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "The Michelson-Morley experiment was designed to detect:",
  question_hi: "माइकलसन-मोर्ले प्रयोग डिजाइन किया गया था पता लगाने के लिए:",
  options_en: ["Luminiferous ether", "Gravitational waves", "Cosmic rays", "Radio waves"],
  options_hi: ["प्रकाशवाहक ईथर", "गुरुत्वाकर्षण तरंगें", "कॉस्मिक किरणें", "रेडियो तरंगें"],
  answer_en: "Luminiferous ether",
  answer_hi: "प्रकाशवाहक ईथर",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "The BCS theory explains:",
  question_hi: "BCS सिद्धांत समझाता है:",
  options_en: ["Conventional superconductivity", "High-temperature superconductivity", "Semiconductor behavior", "Ferromagnetism"],
  options_hi: ["पारंपरिक अतिचालकता", "उच्च-तापमान अतिचालकता", "अर्धचालक व्यवहार", "लौहचुंबकत्व"],
  answer_en: "Conventional superconductivity",
  answer_hi: "पारंपरिक अतिचालकता",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "The Fizeau experiment measured:",
  question_hi: "फिज़ो प्रयोग मापा:",
  options_en: ["Speed of light in moving water", "Gravitational constant", "Electron charge", "Planck's constant"],
  options_hi: ["गतिमान पानी में प्रकाश की गति", "गुरुत्वाकर्षण स्थिरांक", "इलेक्ट्रॉन आवेश", "प्लैंक नियतांक"],
  answer_en: "Speed of light in moving water",
  answer_hi: "गतिमान पानी में प्रकाश की गति",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "The Davisson-Germer experiment confirmed:",
  question_hi: "डेविसन-गर्मर प्रयोग ने पुष्टि की:",
  options_en: ["Wave nature of electrons", "Particle nature of light", "Quantum tunneling", "Nuclear fission"],
  options_hi: ["इलेक्ट्रॉनों की तरंग प्रकृति", "प्रकाश की कण प्रकृति", "क्वांटम टनलिंग", "नाभिकीय विखंडन"],
  answer_en: "Wave nature of electrons",
  answer_hi: "इलेक्ट्रॉनों की तरंग प्रकृति",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "The Otto cycle consists of:",
  question_hi: "ओटो चक्र शामिल करता है:",
  options_en: ["Two adiabatic and two isochoric processes", "Two isothermal and two adiabatic", "Four isothermal processes", "Four isobaric processes"],
  options_hi: ["दो रुद्धोष्म और दो समआयतनिक प्रक्रियाएं", "दो समतापी और दो रुद्धोष्म", "चार समतापी प्रक्रियाएं", "चार समदाबी प्रक्रियाएं"],
  answer_en: "Two adiabatic and two isochoric processes",
  answer_hi: "दो रुद्धोष्म और दो समआयतनिक प्रक्रियाएं",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "The Carnot efficiency is given by:",
  question_hi: "कार्नोट दक्षता दी जाती है:",
  options_en: ["1 - T_c/T_h", "T_h - T_c", "T_h/T_c", "T_c/T_h"],
  options_hi: ["1 - T_c/T_h", "T_h - T_c", "T_h/T_c", "T_c/T_h"],
  answer_en: "1 - T_c/T_h",
  answer_hi: "1 - T_c/T_h",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "The Rayleigh scattering intensity is proportional to:",
  question_hi: "रेले प्रकीर्णन तीव्रता आनुपातिक है:",
  options_en: ["1/λ⁴", "λ⁴", "1/λ²", "λ²"],
  options_hi: ["1/λ⁴", "λ⁴", "1/λ²", "λ²"],
  answer_en: "1/λ⁴",
  answer_hi: "1/λ⁴",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "The Miller indices (hkl) represent:",
  question_hi: "मिलर सूचकांक (hkl) प्रतिनिधित्व करते हैं:",
  options_en: ["Crystal planes", "Atomic positions", "Bond lengths", "Cell parameters"],
  options_hi: ["क्रिस्टल तल", "परमाणु स्थितियां", "बंध लंबाई", "सेल पैरामीटर"],
  answer_en: "Crystal planes",
  answer_hi: "क्रिस्टल तल",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "The Van der Waals equation accounts for:",
  question_hi: "वैन डर वाल्स समीकरण लेखा-जोखा करता है:",
  options_en: ["Finite size of molecules and intermolecular forces", "Quantum effects", "Relativistic effects", "Nuclear forces"],
  options_hi: ["अणुओं का परिमित आकार और अंतरा-आणविक बल", "क्वांटम प्रभाव", "सापेक्षिक प्रभाव", "नाभिकीय बल"],
  answer_en: "Finite size of molecules and intermolecular forces",
  answer_hi: "अणुओं का परिमित आकार और अंतरा-आणविक बल",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "The Bragg's law is given by:",
  question_hi: "ब्रैग का नियम दिया जाता है:",
  options_en: ["nλ = 2d sinθ", "λ = h/p", "E = hν", "F = qvB"],
  options_hi: ["nλ = 2d sinθ", "λ = h/p", "E = hν", "F = qvB"],
  answer_en: "nλ = 2d sinθ",
  answer_hi: "nλ = 2d sinθ",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "The Compton wavelength of electron is given by:",
  question_hi: "इलेक्ट्रॉन की कॉम्पटन तरंगदैर्ध्य दी जाती है:",
  options_en: ["λ_c = h/(m_e c)", "λ_c = hc/E", "λ_c = 2πr", "λ_c = c/ν"],
  options_hi: ["λ_c = h/(m_e c)", "λ_c = hc/E", "λ_c = 2πr", "λ_c = c/ν"],
  answer_en: "λ_c = h/(m_e c)",
  answer_hi: "λ_c = h/(m_e c)",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "The Hubble constant has dimensions of:",
  question_hi: "हबल स्थिरांक के आयाम हैं:",
  options_en: ["Time⁻¹", "Length", "Velocity", "Acceleration"],
  options_hi: ["समय⁻¹", "लंबाई", "वेग", "त्वरण"],
  answer_en: "Time⁻¹",
  answer_hi: "समय⁻¹",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "The Wien's law constant is approximately:",
  question_hi: "वीन के नियम स्थिरांक लगभग है:",
  options_en: ["2.9 × 10⁻³ m·K", "6.6 × 10⁻³⁴ J·s", "3 × 10⁸ m/s", "1.4 × 10⁻¹⁵ eV·s"],
  options_hi: ["2.9 × 10⁻³ m·K", "6.6 × 10⁻³⁴ J·s", "3 × 10⁸ m/s", "1.4 × 10⁻¹⁵ eV·s"],
  answer_en: "2.9 × 10⁻³ m·K",
  answer_hi: "2.9 × 10⁻³ m·K",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "The Stefan-Boltzmann constant is approximately:",
  question_hi: "स्टीफन-बोल्ट्जमैन स्थिरांक लगभग है:",
  options_en: ["5.67 × 10⁻⁸ W/m²K⁴", "1.38 × 10⁻²³ J/K", "6.67 × 10⁻¹¹ N·m²/kg²", "9.8 m/s²"],
  options_hi: ["5.67 × 10⁻⁸ W/m²K⁴", "1.38 × 10⁻²³ J/K", "6.67 × 10⁻¹¹ N·m²/kg²", "9.8 m/s²"],
  answer_en: "5.67 × 10⁻⁸ W/m²K⁴",
  answer_hi: "5.67 × 10⁻⁸ W/m²K⁴",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "The Schrödinger equation for time-independent potential is:",
  question_hi: "समय-स्वतंत्र विभव के लिए श्रोडिंगर समीकरण है:",
  options_en: ["Ĥψ = Eψ", "iħ∂ψ/∂t = Ĥψ", "∇²ψ = 0", "∂²ψ/∂t² = c²∇²ψ"],
  options_hi: ["Ĥψ = Eψ", "iħ∂ψ/∂t = Ĥψ", "∇²ψ = 0", "∂²ψ/∂t² = c²∇²ψ"],
  answer_en: "Ĥψ = Eψ",
  answer_hi: "Ĥψ = Eψ",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "The fine structure constant α is approximately:",
  question_hi: "सूक्ष्म संरचना स्थिरांक α लगभग है:",
  options_en: ["1/137", "1/13.6", "1/3.14", "1/2.718"],
  options_hi: ["1/137", "1/13.6", "1/3.14", "1/2.718"],
  answer_en: "1/137",
  answer_hi: "1/137",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "The gyromagnetic ratio for electron is given by:",
  question_hi: "इलेक्ट्रॉन के लिए जाइरोमैग्नेटिक अनुपात दिया जाता है:",
  options_en: ["γ = g_e μ_B/ħ", "γ = e/m_e", "γ = h/2π", "γ = c²"],
  options_hi: ["γ = g_e μ_B/ħ", "γ = e/m_e", "γ = h/2π", "γ = c²"],
  answer_en: "γ = g_e μ_B/ħ",
  answer_hi: "γ = g_e μ_B/ħ",
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