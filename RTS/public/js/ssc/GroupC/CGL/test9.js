const questions = [
  {
   num:1,
  question_en: "Which part of the Indian Constitution deals with Fundamental Rights?",
  question_hi: "भारतीय संविधान का कौन सा भाग मौलिक अधिकारों से संबंधित है?",
  options_en: ["Part I", "Part II", "Part III", "Part IV"],
  options_hi: ["भाग I", "भाग II", "भाग III", "भाग IV"],
  answer_en: "Part III",
  answer_hi: "भाग III",
  attempted: false,
  selected: ""
},
{
   num:2,
  question_en: "Who presides over the joint sitting of both Houses of Parliament?",
  question_hi: "संसद के दोनों सदनों की संयुक्त बैठक की अध्यक्षता कौन करता है?",
  options_en: ["President", "Vice President", "Speaker of Lok Sabha", "Prime Minister"],
  options_hi: ["राष्ट्रपति", "उपराष्ट्रपति", "लोकसभा अध्यक्ष", "प्रधानमंत्री"],
  answer_en: "Speaker of Lok Sabha",
  answer_hi: "लोकसभा अध्यक्ष",
  attempted: false,
  selected: ""
},
{
   num:3,
  question_en: "What is the minimum age required to become a member of Lok Sabha?",
  question_hi: "लोकसभा का सदस्य बनने के लिए न्यूनतम आयु कितनी आवश्यक है?",
  options_en: ["21 years", "25 years", "30 years", "35 years"],
  options_hi: ["21 वर्ष", "25 वर्ष", "30 वर्ष", "35 वर्ष"],
  answer_en: "25 years",
  answer_hi: "25 वर्ष",
  attempted: false,
  selected: ""
},
{
   num:4,
  question_en: "Who appoints the Chief Justice of India?",
  question_hi: "भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?",
  options_en: ["Prime Minister", "President", "Parliament", "Chief Justice himself"],
  options_hi: ["प्रधानमंत्री", "राष्ट्रपति", "संसद", "मुख्य न्यायाधीश स्वयं"],
  answer_en: "President",
  answer_hi: "राष्ट्रपति",
  attempted: false,
  selected: ""
},
{
   num:5,
  question_en: "Which amendment to the Constitution added the word 'Secular' to the Preamble?",
  question_hi: "संविधान में किस संशोधन द्वारा प्रस्तावना में 'धर्मनिरपेक्ष' शब्द जोड़ा गया?",
  options_en: ["42nd Amendment", "44th Amendment", "52nd Amendment", "61st Amendment"],
  options_hi: ["42वां संशोधन", "44वां संशोधन", "52वां संशोधन", "61वां संशोधन"],
  answer_en: "42nd Amendment",
  answer_hi: "42वां संशोधन",
  attempted: false,
  selected: ""
},
{
   num:6,
  question_en: "What is the tenure of a Rajya Sabha member?",
  question_hi: "राज्यसभा सदस्य का कार्यकाल कितना होता है?",
  options_en: ["4 years", "5 years", "6 years", "7 years"],
  options_hi: ["4 वर्ष", "5 वर्ष", "6 वर्ष", "7 वर्ष"],
  answer_en: "6 years",
  answer_hi: "6 वर्ष",
  attempted: false,
  selected: ""
},
{
   num:7,
  question_en: "Who is the ex-officio Chairman of the Rajya Sabha?",
  question_hi: "राज्यसभा का पदेन सभापति कौन होता है?",
  options_en: ["President", "Vice President", "Prime Minister", "Speaker"],
  options_hi: ["राष्ट्रपति", "उपराष्ट्रपति", "प्रधानमंत्री", "अध्यक्ष"],
  answer_en: "Vice President",
  answer_hi: "उपराष्ट्रपति",
  attempted: false,
  selected: ""
},
{
   num:8,
  question_en: "Which article of the Constitution deals with the right to equality?",
  question_hi: "संविधान का कौन सा अनुच्छेद समता के अधिकार से संबंधित है?",
  options_en: ["Article 14", "Article 15", "Article 16", "Article 17"],
  options_hi: ["अनुच्छेद 14", "अनुच्छेद 15", "अनुच्छेद 16", "अनुच्छेद 17"],
  answer_en: "Article 14",
  answer_hi: "अनुच्छेद 14",
  attempted: false,
  selected: ""
},
{
   num:9,
  question_en: "The 'Directive Principles of State Policy' are contained in which part of the Constitution?",
  question_hi: "'राज्य के नीति निर्देशक सिद्धांत' संविधान के किस भाग में निहित हैं?",
  options_en: ["Part III", "Part IV", "Part V", "Part VI"],
  options_hi: ["भाग III", "भाग IV", "भाग V", "भाग VI"],
  answer_en: "Part IV",
  answer_hi: "भाग IV",
  attempted: false,
  selected: ""
},
{
   num:10,
  question_en: "Who has the power to declare a national emergency in India?",
  question_hi: "भारत में राष्ट्रीय आपातकाल घोषित करने की शक्ति किसके पास है?",
  options_en: ["Prime Minister", "President", "Parliament", "Supreme Court"],
  options_hi: ["प्रधानमंत्री", "राष्ट्रपति", "संसद", "सर्वोच्च न्यायालय"],
  answer_en: "President",
  answer_hi: "राष्ट्रपति",
  attempted: false,
  selected: ""
},
{
   num:11,
  question_en: "What is the maximum strength of the Lok Sabha?",
  question_hi: "लोकसभा की अधिकतम सदस्य संख्या कितनी है?",
  options_en: ["545", "550", "552", "555"],
  options_hi: ["545", "550", "552", "555"],
  answer_en: "552",
  answer_hi: "552",
  attempted: false,
  selected: ""
},
{
   num:12,
  question_en: "Which commission recommended the formation of linguistic states?",
  question_hi: "किस आयोग ने भाषाई राज्यों के गठन की सिफारिश की थी?",
  options_en: ["Sarkaria Commission", "Mandal Commission", "States Reorganization Commission", "Kothari Commission"],
  options_hi: ["सरकारिया आयोग", "मंडल आयोग", "राज्य पुनर्गठन आयोग", "कोठारी आयोग"],
  answer_en: "States Reorganization Commission",
  answer_hi: "राज्य पुनर्गठन आयोग",
  attempted: false,
  selected: ""
},
{
   num:13,
  question_en: "Who can remove the Governor of a state?",
  question_hi: "किसी राज्य के राज्यपाल को कौन हटा सकता है?",
  options_en: ["Chief Minister", "State Legislature", "President", "Prime Minister"],
  options_hi: ["मुख्यमंत्री", "राज्य विधानमंडल", "राष्ट्रपति", "प्रधानमंत्री"],
  answer_en: "President",
  answer_hi: "राष्ट्रपति",
  attempted: false,
  selected: ""
},
{
   num:14,
  question_en: "Which article of the Constitution deals with the impeachment of the President?",
  question_hi: "संविधान का कौन सा अनुच्छेद राष्ट्रपति पर महाभियोग से संबंधित है?",
  options_en: ["Article 61", "Article 71", "Article 76", "Article 85"],
  options_hi: ["अनुच्छेद 61", "अनुच्छेद 71", "अनुच्छेद 76", "अनुच्छेद 85"],
  answer_en: "Article 61",
  answer_hi: "अनुच्छेद 61",
  attempted: false,
  selected: ""
},
{
   num:15,
  question_en: "The 'Right to Education' was added to the Constitution under which article?",
  question_hi: "'शिक्षा का अधिकार' संविधान में किस अनुच्छेद के तहत जोड़ा गया?",
  options_en: ["Article 21A", "Article 45", "Article 51A", "Article 30"],
  options_hi: ["अनुच्छेद 21ए", "अनुच्छेद 45", "अनुच्छेद 51ए", "अनुच्छेद 30"],
  answer_en: "Article 21A",
  answer_hi: "अनुच्छेद 21ए",
  attempted: false,
  selected: ""
},
{
   num:16,
  question_en: "Who is the final authority to interpret the Constitution?",
  question_hi: "संविधान की व्याख्या करने का अंतिम अधिकारी कौन है?",
  options_en: ["President", "Parliament", "Supreme Court", "Attorney General"],
  options_hi: ["राष्ट्रपति", "संसद", "सर्वोच्च न्यायालय", "अटॉर्नी जनरल"],
  answer_en: "Supreme Court",
  answer_hi: "सर्वोच्च न्यायालय",
  attempted: false,
  selected: ""
},
{
   num:17,
  question_en: "What is the minimum age for becoming a member of the Rajya Sabha?",
  question_hi: "राज्यसभा का सदस्य बनने के लिए न्यूनतम आयु कितनी आवश्यक है?",
  options_en: ["25 years", "30 years", "35 years", "40 years"],
  options_hi: ["25 वर्ष", "30 वर्ष", "35 वर्ष", "40 वर्ष"],
  answer_en: "30 years",
  answer_hi: "30 वर्ष",
  attempted: false,
  selected: ""
},
{
   num:18,
  question_en: "Which schedule of the Constitution contains the list of languages?",
  question_hi: "संविधान की कौन सी अनुसूची में भाषाओं की सूची शामिल है?",
  options_en: ["7th Schedule", "8th Schedule", "9th Schedule", "10th Schedule"],
  options_hi: ["7वीं अनुसूची", "8वीं अनुसूची", "9वीं अनुसूची", "10वीं अनुसूची"],
  answer_en: "8th Schedule",
  answer_hi: "8वीं अनुसूची",
  attempted: false,
  selected: ""
},
{
   num:19,
  question_en: "Who can summon the sessions of Parliament?",
  question_hi: "संसद के सत्र को कौन बुला सकता है?",
  options_en: ["Prime Minister", "President", "Speaker", "Chief Justice"],
  options_hi: ["प्रधानमंत्री", "राष्ट्रपति", "अध्यक्ष", "मुख्य न्यायाधीश"],
  answer_en: "President",
  answer_hi: "राष्ट्रपति",
  attempted: false,
  selected: ""
},
{
   num:20,
  question_en: "Which article deals with the abolition of untouchability?",
  question_hi: "अस्पृश्यता के उन्मूलन से कौन सा अनुच्छेद संबंधित है?",
  options_en: ["Article 15", "Article 16", "Article 17", "Article 18"],
  options_hi: ["अनुच्छेद 15", "अनुच्छेद 16", "अनुच्छेद 17", "अनुच्छेद 18"],
  answer_en: "Article 17",
  answer_hi: "अनुच्छेद 17",
  attempted: false,
  selected: ""
},
{
   num:21,
  question_en: "Who appoints the Prime Minister of India?",
  question_hi: "भारत के प्रधानमंत्री की नियुक्ति कौन करता है?",
  options_en: ["President", "Lok Sabha", "Rajya Sabha", "Supreme Court"],
  options_hi: ["राष्ट्रपति", "लोकसभा", "राज्यसभा", "सर्वोच्च न्यायालय"],
  answer_en: "President",
  answer_hi: "राष्ट्रपति",
  attempted: false,
  selected: ""
},
{
   num:22,
  question_en: "The 'Council of Ministers' is collectively responsible to which body?",
  question_hi: "'मंत्रिपरिषद' सामूहिक रूप से किस निकाय के प्रति उत्तरदायी है?",
  options_en: ["President", "Parliament", "Supreme Court", "Lok Sabha"],
  options_hi: ["राष्ट्रपति", "संसद", "सर्वोच्च न्यायालय", "लोकसभा"],
  answer_en: "Lok Sabha",
  answer_hi: "लोकसभा",
  attempted: false,
  selected: ""
},
{
   num:23,
  question_en: "Which constitutional amendment lowered the voting age from 21 to 18?",
  question_hi: "किस संवैधानिक संशोधन ने मतदान की आयु 21 से घटाकर 18 वर्ष कर दी?",
  options_en: ["61st Amendment", "62nd Amendment", "73rd Amendment", "74th Amendment"],
  options_hi: ["61वां संशोधन", "62वां संशोधन", "73वां संशोधन", "74वां संशोधन"],
  answer_en: "61st Amendment",
  answer_hi: "61वां संशोधन",
  attempted: false,
  selected: ""
},
{
   num:24,
  question_en: "Who is the constitutional head of the state government?",
  question_hi: "राज्य सरकार का संवैधानिक प्रमुख कौन होता है?",
  options_en: ["Chief Minister", "Governor", "Speaker", "Chief Justice of High Court"],
  options_hi: ["मुख्यमंत्री", "राज्यपाल", "अध्यक्ष", "उच्च न्यायालय के मुख्य न्यायाधीश"],
  answer_en: "Governor",
  answer_hi: "राज्यपाल",
  attempted: false,
  selected: ""
},
{
   num:25,
  question_en: "Which article deals with the 'Right to Freedom of Religion'?",
  question_hi: "'धर्म की स्वतंत्रता का अधिकार' किस अनुच्छेद से संबंधित है?",
  options_en: ["Article 25", "Article 26", "Article 27", "Article 28"],
  options_hi: ["अनुच्छेद 25", "अनुच्छेद 26", "अनुच्छेद 27", "अनुच्छेद 28"],
  answer_en: "Article 25",
  answer_hi: "अनुच्छेद 25",
  attempted: false,
  selected: ""
},
{
   num:26,
  question_en: "The 'Union List' contains how many subjects?",
  question_hi: "'संघ सूची' में कितने विषय शामिल हैं?",
  options_en: ["52", "61", "97", "100"],
  options_hi: ["52", "61", "97", "100"],
  answer_en: "97",
  answer_hi: "97",
  attempted: false,
  selected: ""
},
{
   num:27,
  question_en: "Who administers the oath of office to the President of India?",
  question_hi: "भारत के राष्ट्रपति को पद की शपथ कौन दिलाता है?",
  options_en: ["Chief Justice of India", "Vice President", "Prime Minister", "Speaker of Lok Sabha"],
  options_hi: ["भारत के मुख्य न्यायाधीश", "उपराष्ट्रपति", "प्रधानमंत्री", "लोकसभा अध्यक्ष"],
  answer_en: "Chief Justice of India",
  answer_hi: "भारत के मुख्य न्यायाधीश",
  attempted: false,
  selected: ""
},
{
   num:28,
  question_en: "Which part of the Constitution deals with Panchayati Raj?",
  question_hi: "संविधान का कौन सा भाग पंचायती राज से संबंधित है?",
  options_en: ["Part IX", "Part X", "Part XI", "Part XII"],
  options_hi: ["भाग IX", "भाग X", "भाग XI", "भाग XII"],
  answer_en: "Part IX",
  answer_hi: "भाग IX",
  attempted: false,
  selected: ""
},
{
   num:29,
  question_en: "Who can initiate the process of impeachment of the President?",
  question_hi: "राष्ट्रपति पर महाभियोग की प्रक्रिया कौन शुरू कर सकता है?",
  options_en: ["Only Lok Sabha", "Only Rajya Sabha", "Either House of Parliament", "Supreme Court"],
  options_hi: ["केवल लोकसभा", "केवल राज्यसभा", "संसद का कोई भी सदन", "सर्वोच्च न्यायालय"],
  answer_en: "Either House of Parliament",
  answer_hi: "संसद का कोई भी सदन",
  attempted: false,
  selected: ""
},
{
   num:30,
  question_en: "Which article provides for the establishment of the Supreme Court?",
  question_hi: "सर्वोच्च न्यायालय की स्थापना का प्रावधान किस अनुच्छेद में है?",
  options_en: ["Article 124", "Article 131", "Article 143", "Article 148"],
  options_hi: ["अनुच्छेद 124", "अनुच्छेद 131", "अनुच्छेद 143", "अनुच्छेद 148"],
  answer_en: "Article 124",
  answer_hi: "अनुच्छेद 124",
  attempted: false,
  selected: ""
},
{
   num:31,
  question_en: "What is the term of office of the Vice President of India?",
  question_hi: "भारत के उपराष्ट्रपति का कार्यकाल कितना होता है?",
  options_en: ["4 years", "5 years", "6 years", "7 years"],
  options_hi: ["4 वर्ष", "5 वर्ष", "6 वर्ष", "7 वर्ष"],
  answer_en: "5 years",
  answer_hi: "5 वर्ष",
  attempted: false,
  selected: ""
},
{
   num:32,
  question_en: "Which article of the Constitution deals with the 'Right to Constitutional Remedies'?",
  question_hi: "संविधान का कौन सा अनुच्छेद 'संवैधानिक उपचारों का अधिकार' से संबंधित है?",
  options_en: ["Article 32", "Article 33", "Article 34", "Article 35"],
  options_hi: ["अनुच्छेद 32", "अनुच्छेद 33", "अनुच्छेद 34", "अनुच्छेद 35"],
  answer_en: "Article 32",
  answer_hi: "अनुच्छेद 32",
  attempted: false,
  selected: ""
},
{
   num:33,
  question_en: "Who is the custodian of the Constitution of India?",
  question_hi: "भारत के संविधान का संरक्षक कौन है?",
  options_en: ["President", "Supreme Court", "Parliament", "Prime Minister"],
  options_hi: ["राष्ट्रपति", "सर्वोच्च न्यायालय", "संसद", "प्रधानमंत्री"],
  answer_en: "Supreme Court",
  answer_hi: "सर्वोच्च न्यायालय",
  attempted: false,
  selected: ""
},
{
   num:34,
  question_en: "The 'Concurrent List' contains how many subjects?",
  question_hi: "'समवर्ती सूची' में कितने विषय शामिल हैं?",
  options_en: ["47", "52", "61", "73"],
  options_hi: ["47", "52", "61", "73"],
  answer_en: "52",
  answer_hi: "52",
  attempted: false,
  selected: ""
},
{
   num:35,
  question_en: "Who appoints the judges of the High Court?",
  question_hi: "उच्च न्यायालय के न्यायाधीशों की नियुक्ति कौन करता है?",
  options_en: ["President", "Governor", "Chief Minister", "Chief Justice of India"],
  options_hi: ["राष्ट्रपति", "राज्यपाल", "मुख्यमंत्री", "भारत के मुख्य न्यायाधीश"],
  answer_en: "President",
  answer_hi: "राष्ट्रपति",
  attempted: false,
  selected: ""
},
{
   num:36,
  question_en: "Which amendment added the Fundamental Duties to the Constitution?",
  question_hi: "किस संशोधन द्वारा संविधान में मौलिक कर्तव्य जोड़े गए?",
  options_en: ["42nd Amendment", "44th Amendment", "52nd Amendment", "61st Amendment"],
  options_hi: ["42वां संशोधन", "44वां संशोधन", "52वां संशोधन", "61वां संशोधन"],
  answer_en: "42nd Amendment",
  answer_hi: "42वां संशोधन",
  attempted: false,
  selected: ""
},
{
   num:37,
  question_en: "What is the tenure of a member of the State Legislative Assembly?",
  question_hi: "राज्य विधान सभा के सदस्य का कार्यकाल कितना होता है?",
  options_en: ["4 years", "5 years", "6 years", "7 years"],
  options_hi: ["4 वर्ष", "5 वर्ष", "6 वर्ष", "7 वर्ष"],
  answer_en: "5 years",
  answer_hi: "5 वर्ष",
  attempted: false,
  selected: ""
},
{
   num:38,
  question_en: "Who has the power to dissolve the Lok Sabha?",
  question_hi: "लोकसभा को भंग करने की शक्ति किसके पास है?",
  options_en: ["President", "Prime Minister", "Speaker", "Chief Justice"],
  options_hi: ["राष्ट्रपति", "प्रधानमंत्री", "अध्यक्ष", "मुख्य न्यायाधीश"],
  answer_en: "President",
  answer_hi: "राष्ट्रपति",
  attempted: false,
  selected: ""
},
{
   num:39,
  question_en: "Which article deals with the 'Protection of Life and Personal Liberty'?",
  question_hi: "'जीवन और व्यक्तिगत स्वतंत्रता का संरक्षण' किस अनुच्छेद से संबंधित है?",
  options_en: ["Article 20", "Article 21", "Article 22", "Article 23"],
  options_hi: ["अनुच्छेद 20", "अनुच्छेद 21", "अनुच्छेद 22", "अनुच्छेद 23"],
  answer_en: "Article 21",
  answer_hi: "अनुच्छेद 21",
  attempted: false,
  selected: ""
},
{
   num:40,
  question_en: "The 'Finance Commission' is constituted under which article?",
  question_hi: "'वित्त आयोग' का गठन किस अनुच्छेद के तहत किया जाता है?",
  options_en: ["Article 280", "Article 281", "Article 282", "Article 283"],
  options_hi: ["अनुच्छेद 280", "अनुच्छेद 281", "अनुच्छेद 282", "अनुच्छेद 283"],
  answer_en: "Article 280",
  answer_hi: "अनुच्छेद 280",
  attempted: false,
  selected: ""
},
{
   num:41,
  question_en: "Who can remove the Chief Election Commissioner from office?",
  question_hi: "मुख्य चुनाव आयुक्त को पद से कौन हटा सकता है?",
  options_en: ["President", "Parliament", "Supreme Court", "Prime Minister"],
  options_hi: ["राष्ट्रपति", "संसद", "सर्वोच्च न्यायालय", "प्रधानमंत्री"],
  answer_en: "Parliament",
  answer_hi: "संसद",
  attempted: false,
  selected: ""
},
{
   num:42,
  question_en: "Which article provides for the 'Right against Exploitation'?",
  question_hi: "'शोषण के विरुद्ध अधिकार' का प्रावधान किस अनुच्छेद में है?",
  options_en: ["Article 23", "Article 24", "Article 25", "Both Article 23 and 24"],
  options_hi: ["अनुच्छेद 23", "अनुच्छेद 24", "अनुच्छेद 25", "अनुच्छेद 23 और 24 दोनों"],
  answer_en: "Both Article 23 and 24",
  answer_hi: "अनुच्छेद 23 और 24 दोनों",
  attempted: false,
  selected: ""
},
{
   num:43,
  question_en: "What is the maximum gap allowed between two sessions of Parliament?",
  question_hi: "संसद के दो सत्रों के बीच अधिकतम कितने समय का अंतराल अनुमन्य है?",
  options_en: ["3 months", "6 months", "9 months", "12 months"],
  options_hi: ["3 महीने", "6 महीने", "9 महीने", "12 महीने"],
  answer_en: "6 months",
  answer_hi: "6 महीने",
  attempted: false,
  selected: ""
},
{
   num:44,
  question_en: "Who appoints the Attorney General of India?",
  question_hi: "भारत के अटॉर्नी जनरल की नियुक्ति कौन करता है?",
  options_en: ["President", "Prime Minister", "Chief Justice", "Parliament"],
  options_hi: ["राष्ट्रपति", "प्रधानमंत्री", "मुख्य न्यायाधीश", "संसद"],
  answer_en: "President",
  answer_hi: "राष्ट्रपति",
  attempted: false,
  selected: ""
},
{
   num:45,
  question_en: "Which schedule of the Constitution contains the allocation of seats in the Rajya Sabha?",
  question_hi: "संविधान की कौन सी अनुसूची में राज्यसभा में सीटों का आवंटन शामिल है?",
  options_en: ["3rd Schedule", "4th Schedule", "5th Schedule", "6th Schedule"],
  options_hi: ["तीसरी अनुसूची", "चौथी अनुसूची", "पांचवीं अनुसूची", "छठी अनुसूची"],
  answer_en: "4th Schedule",
  answer_hi: "चौथी अनुसूची",
  attempted: false,
  selected: ""
},
{
   num:46,
  question_en: "The 'State List' contains how many subjects?",
  question_hi: "'राज्य सूची' में कितने विषय शामिल हैं?",
  options_en: ["52", "61", "97", "100"],
  options_hi: ["52", "61", "97", "100"],
  answer_en: "61",
  answer_hi: "61",
  attempted: false,
  selected: ""
},
{
   num:47,
  question_en: "Who acts as the President when both the President and Vice President are unavailable?",
  question_hi: "जब राष्ट्रपति और उपराष्ट्रपति दोनों अनुपलब्ध हों तो कौन राष्ट्रपति के रूप में कार्य करता है?",
  options_en: ["Prime Minister", "Chief Justice of India", "Speaker of Lok Sabha", "Senior-most Governor"],
  options_hi: ["प्रधानमंत्री", "भारत के मुख्य न्यायाधीश", "लोकसभा अध्यक्ष", "वरिष्ठतम राज्यपाल"],
  answer_en: "Chief Justice of India",
  answer_hi: "भारत के मुख्य न्यायाधीश",
  attempted: false,
  selected: ""
},
{
   num:48,
  question_en: "Which article deals with the 'Freedom of Speech and Expression'?",
  question_hi: "'वाक् और अभिव्यक्ति की स्वतंत्रता' किस अनुच्छेद से संबंधित है?",
  options_en: ["Article 19", "Article 20", "Article 21", "Article 22"],
  options_hi: ["अनुच्छेद 19", "अनुच्छेद 20", "अनुच्छेद 21", "अनुच्छेद 22"],
  answer_en: "Article 19",
  answer_hi: "अनुच्छेद 19",
  attempted: false,
  selected: ""
},
{
   num:49,
  question_en: "What is the term of office of the Chief Election Commissioner?",
  question_hi: "मुख्य चुनाव आयुक्त का कार्यकाल कितना होता है?",
  options_en: ["4 years", "5 years", "6 years", "Until the age of 65"],
  options_hi: ["4 वर्ष", "5 वर्ष", "6 वर्ष", "65 वर्ष की आयु तक"],
  answer_en: "6 years",
  answer_hi: "6 वर्ष",
  attempted: false,
  selected: ""
},
{
   num:50,
  question_en: "Which article of the Constitution provides for the establishment of the Election Commission?",
  question_hi: "संविधान का कौन सा अनुच्छेद चुनाव आयोग की स्थापना का प्रावधान करता है?",
  options_en: ["Article 324", "Article 325", "Article 326", "Article 327"],
  options_hi: ["अनुच्छेद 324", "अनुच्छेद 325", "अनुच्छेद 326", "अनुच्छेद 327"],
  answer_en: "Article 324",
  answer_hi: "अनुच्छेद 324",
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