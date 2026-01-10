const questions = [
  {
  num: 1,
  question_en: "Who is the current Chief Justice of India (as of 2024)?",
  question_hi: "भारत के वर्तमान मुख्य न्यायाधीश (2024 तक) कौन हैं?",
  options_en: ["D. Y. Chandrachud", "N. V. Ramana", "U. U. Lalit", "S. A. Bobde"],
  options_hi: ["डी. वाई. चंद्रचूड़", "एन. वी. रमना", "यू. यू. ललित", "एस. ए. बोबडे"],
  answer_en: "D. Y. Chandrachud",
  answer_hi: "डी. वाई. चंद्रचूड़",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Which article of the Constitution deals with the impeachment of the President?",
  question_hi: "संविधान का कौन सा अनुच्छेद राष्ट्रपति के महाभियोग से संबंधित है?",
  options_en: ["Article 61", "Article 62", "Article 63", "Article 64"],
  options_hi: ["अनुच्छेद 61", "अनुच्छेद 62", "अनुच्छेद 63", "अनुच्छेद 64"],
  answer_en: "Article 61",
  answer_hi: "अनुच्छेद 61",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "Who was the first Deputy Prime Minister of India?",
  question_hi: "भारत के पहले उप प्रधानमंत्री कौन थे?",
  options_en: ["Morarji Desai", "Sardar Vallabhbhai Patel", "Charan Singh", "Jagjivan Ram"],
  options_hi: ["मोरारजी देसाई", "सरदार वल्लभभाई पटेल", "चरण सिंह", "जगजीवन राम"],
  answer_en: "Sardar Vallabhbhai Patel",
  answer_hi: "सरदार वल्लभभाई पटेल",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "How many members can be nominated to the Rajya Sabha by the President?",
  question_hi: "राष्ट्रपति द्वारा राज्यसभा में कितने सदस्य मनोनीत किए जा सकते हैं?",
  options_en: ["10", "12", "14", "16"],
  options_hi: ["10", "12", "14", "16"],
  answer_en: "12",
  answer_hi: "12",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Who was the first woman Speaker of the Lok Sabha?",
  question_hi: "लोकसभा की पहली महिला अध्यक्ष कौन थीं?",
  options_en: ["Meira Kumar", "Sushma Swaraj", "Sumitra Mahajan", "Indira Gandhi"],
  options_hi: ["मीरा कुमार", "सुष्मा स्वराज", "सुमित्रा महाजन", "इंदिरा गांधी"],
  answer_en: "Meira Kumar",
  answer_hi: "मीरा कुमार",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "Which schedule of the Constitution contains the powers and responsibilities of Panchayats?",
  question_hi: "संविधान की कौन सी अनुसूची में पंचायतों की शक्तियां और जिम्मेदारियां शामिल हैं?",
  options_en: ["9th Schedule", "10th Schedule", "11th Schedule", "12th Schedule"],
  options_hi: ["9वीं अनुसूची", "10वीं अनुसूची", "11वीं अनुसूची", "12वीं अनुसूची"],
  answer_en: "11th Schedule",
  answer_hi: "11वीं अनुसूची",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Who appoints the Chief Election Commissioner of India?",
  question_hi: "भारत के मुख्य चुनाव आयुक्त की नियुक्ति कौन करता है?",
  options_en: ["Prime Minister", "President", "Parliament", "Supreme Court"],
  options_hi: ["प्रधानमंत्री", "राष्ट्रपति", "संसद", "सर्वोच्च न्यायालय"],
  answer_en: "President",
  answer_hi: "राष्ट्रपति",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Which Constitutional Amendment introduced the anti-defection law?",
  question_hi: "किस संवैधानिक संशोधन ने दल-बदल विरोधी कानून लागू किया?",
  options_en: ["52nd Amendment", "61st Amendment", "73rd Amendment", "86th Amendment"],
  options_hi: ["52वां संशोधन", "61वां संशोधन", "73वां संशोधन", "86वां संशोधन"],
  answer_en: "52nd Amendment",
  answer_hi: "52वां संशोधन",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "Who was the first woman Chief Minister of an Indian state?",
  question_hi: "भारतीय राज्य की पहली महिला मुख्यमंत्री कौन थीं?",
  options_en: ["Sucheta Kripalani", "Indira Gandhi", "Jayalalithaa", "Mamata Banerjee"],
  options_hi: ["सुचेता कृपलानी", "इंदिरा गांधी", "जयललिता", "ममता बनर्जी"],
  answer_en: "Sucheta Kripalani",
  answer_hi: "सुचेता कृपलानी",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Which article deals with the formation of new states?",
  question_hi: "कौन सा अनुच्छेद नए राज्यों के गठन से संबंधित है?",
  options_en: ["Article 2", "Article 3", "Article 4", "Article 5"],
  options_hi: ["अनुच्छेद 2", "अनुच्छेद 3", "अनुच्छेद 4", "अनुच्छेद 5"],
  answer_en: "Article 3",
  answer_hi: "अनुच्छेद 3",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "Who is the ex-officio Chairman of the Rajya Sabha?",
  question_hi: "राज्यसभा का पदेन अध्यक्ष कौन होता है?",
  options_en: ["Prime Minister", "President", "Vice President", "Speaker"],
  options_hi: ["प्रधानमंत्री", "राष्ट्रपति", "उपराष्ट्रपति", "अध्यक्ष"],
  answer_en: "Vice President",
  answer_hi: "उपराष्ट्रपति",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Which Constitutional Amendment lowered the voting age from 21 to 18 years?",
  question_hi: "किस संवैधानिक संशोधन ने मतदान की आयु 21 से घटाकर 18 वर्ष कर दी?",
  options_en: ["61st Amendment", "62nd Amendment", "73rd Amendment", "86th Amendment"],
  options_hi: ["61वां संशोधन", "62वां संशोधन", "73वां संशोधन", "86वां संशोधन"],
  answer_en: "61st Amendment",
  answer_hi: "61वां संशोधन",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "Who was the first woman Governor of an Indian state?",
  question_hi: "भारतीय राज्य की पहली महिला राज्यपाल कौन थीं?",
  options_en: ["Sarojini Naidu", "Vijaya Lakshmi Pandit", "Padmaja Naidu", "Fathima Beevi"],
  options_hi: ["सरोजिनी नायडू", "विजया लक्ष्मी पंडित", "पद्मजा नायडू", "फातिमा बीवी"],
  answer_en: "Sarojini Naidu",
  answer_hi: "सरोजिनी नायडू",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Which article deals with the appointment of the Attorney General of India?",
  question_hi: "कौन सा अनुच्छेद भारत के महान्यायवादी की नियुक्ति से संबंधित है?",
  options_en: ["Article 74", "Article 75", "Article 76", "Article 77"],
  options_hi: ["अनुच्छेद 74", "अनुच्छेद 75", "अनुच्छेद 76", "अनुच्छेद 77"],
  answer_en: "Article 76",
  answer_hi: "अनुच्छेद 76",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Who is the constitutional head of the Union Territories?",
  question_hi: "केंद्र शासित प्रदेशों का संवैधानिक प्रमुख कौन होता है?",
  options_en: ["Prime Minister", "President", "Home Minister", "Lieutenant Governor"],
  options_hi: ["प्रधानमंत्री", "राष्ट्रपति", "गृह मंत्री", "लेफ्टिनेंट गवर्नर"],
  answer_en: "President",
  answer_hi: "राष्ट्रपति",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "Which article deals with the Right to Education?",
  question_hi: "शिक्षा के अधिकार से कौन सा अनुच्छेद संबंधित है?",
  options_en: ["Article 21A", "Article 45", "Article 46", "Article 51A"],
  options_hi: ["अनुच्छेद 21A", "अनुच्छेद 45", "अनुच्छेद 46", "अनुच्छेद 51A"],
  answer_en: "Article 21A",
  answer_hi: "अनुच्छेद 21A",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "Who was the first Dalit President of India?",
  question_hi: "भारत के पहले दलित राष्ट्रपति कौन थे?",
  options_en: ["K. R. Narayanan", "Giani Zail Singh", "Shankar Dayal Sharma", "R. Venkataraman"],
  options_hi: ["के. आर. नारायणन", "ज्ञानी जैल सिंह", "शंकर दयाल शर्मा", "आर. वेंकटरमण"],
  answer_en: "K. R. Narayanan",
  answer_hi: "के. आर. नारायणन",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Which schedule contains the list of subjects in the Union List?",
  question_hi: "किस अनुसूची में संघ सूची के विषयों की सूची शामिल है?",
  options_en: ["5th Schedule", "6th Schedule", "7th Schedule", "8th Schedule"],
  options_hi: ["5वीं अनुसूची", "6वीं अनुसूची", "7वीं अनुसूची", "8वीं अनुसूची"],
  answer_en: "7th Schedule",
  answer_hi: "7वीं अनुसूची",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Who is the first woman Chief Justice of India?",
  question_hi: "भारत की पहली महिला मुख्य न्यायाधीश कौन हैं?",
  options_en: ["R. Banumathi", "Indu Malhotra", "Gita Mittal", "No woman has become CJI yet"],
  options_hi: ["आर. भानुमती", "इंदु मल्होत्रा", "गीता मित्तल", "अभी तक कोई महिला सीजेआई नहीं बनी है"],
  answer_en: "No woman has become CJI yet",
  answer_hi: "अभी तक कोई महिला सीजेआई नहीं बनी है",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which article deals with the Election Commission?",
  question_hi: "चुनाव आयोग से कौन सा अनुच्छेद संबंधित है?",
  options_en: ["Article 324", "Article 325", "Article 326", "Article 327"],
  options_hi: ["अनुच्छेद 324", "अनुच्छेद 325", "अनुच्छेद 326", "अनुच्छेद 327"],
  answer_en: "Article 324",
  answer_hi: "अनुच्छेद 324",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "Who was the first woman to become the Union Finance Minister of India?",
  question_hi: "भारत की केंद्रीय वित्त मंत्री बनने वाली पहली महिला कौन थीं?",
  options_en: ["Indira Gandhi", "Nirmala Sitharaman", "Sushma Swaraj", "Mamata Banerjee"],
  options_hi: ["इंदिरा गांधी", "निर्मला सीतारमण", "सुष्मा स्वराज", "ममता बनर्जी"],
  answer_en: "Nirmala Sitharaman",
  answer_hi: "निर्मला सीतारमण",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Which article deals with the impeachment of Supreme Court judges?",
  question_hi: "सर्वोच्च न्यायालय के न्यायाधीशों के महाभियोग से कौन सा अनुच्छेद संबंधित है?",
  options_en: ["Article 124", "Article 125", "Article 126", "Article 127"],
  options_hi: ["अनुच्छेद 124", "अनुच्छेद 125", "अनुच्छेद 126", "अनुच्छेद 127"],
  answer_en: "Article 124",
  answer_hi: "अनुच्छेद 124",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Who is the first woman to become the Defence Minister of India?",
  question_hi: "भारत की रक्षा मंत्री बनने वाली पहली महिला कौन हैं?",
  options_en: ["Indira Gandhi", "Sushma Swaraj", "Nirmala Sitharaman", "Mamata Banerjee"],
  options_hi: ["इंदिरा गांधी", "सुष्मा स्वराज", "निर्मला सीतारमण", "ममता बनर्जी"],
  answer_en: "Nirmala Sitharaman",
  answer_hi: "निर्मला सीतारमण",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Which article deals with the creation of the Supreme Court?",
  question_hi: "सर्वोच्च न्यायालय के निर्माण से कौन सा अनुच्छेद संबंधित है?",
  options_en: ["Article 124", "Article 131", "Article 132", "Article 133"],
  options_hi: ["अनुच्छेद 124", "अनुच्छेद 131", "अनुच्छेद 132", "अनुच्छेद 133"],
  answer_en: "Article 124",
  answer_hi: "अनुच्छेद 124",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Who was the first woman to become the External Affairs Minister of India?",
  question_hi: "भारत की विदेश मंत्री बनने वाली पहली महिला कौन थीं?",
  options_en: ["Indira Gandhi", "Sushma Swaraj", "Vijaya Lakshmi Pandit", "Mamata Banerjee"],
  options_hi: ["इंदिरा गांधी", "सुष्मा स्वराज", "विजया लक्ष्मी पंडित", "ममता बनर्जी"],
  answer_en: "Indira Gandhi",
  answer_hi: "इंदिरा गांधी",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "Which article deals with the Finance Commission?",
  question_hi: "वित्त आयोग से कौन सा अनुच्छेद संबंधित है?",
  options_en: ["Article 280", "Article 281", "Article 282", "Article 283"],
  options_hi: ["अनुच्छेद 280", "अनुच्छेद 281", "अनुच्छेद 282", "अनुच्छेद 283"],
  answer_en: "Article 280",
  answer_hi: "अनुच्छेद 280",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Who is the first woman to become the Chief Minister of Delhi?",
  question_hi: "दिल्ली की मुख्यमंत्री बनने वाली पहली महिला कौन हैं?",
  options_en: ["Sheila Dikshit", "Sushma Swaraj", "Mamata Banerjee", "Indira Gandhi"],
  options_hi: ["शीला दीक्षित", "सुष्मा स्वराज", "ममता बनर्जी", "इंदिरा गांधी"],
  answer_en: "Sheila Dikshit",
  answer_hi: "शीला दीक्षित",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Which article deals with the reservation for SC/ST in Parliament?",
  question_hi: "संसद में एससी/एसटी के लिए आरक्षण से कौन सा अनुच्छेद संबंधित है?",
  options_en: ["Article 330", "Article 331", "Article 332", "Article 333"],
  options_hi: ["अनुच्छेद 330", "अनुच्छेद 331", "अनुच्छेद 332", "अनुच्छेद 333"],
  answer_en: "Article 330",
  answer_hi: "अनुच्छेद 330",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Who was the first woman to become the Governor of Reserve Bank of India?",
  question_hi: "भारतीय रिजर्व बैंक की गवर्नर बनने वाली पहली महिला कौन हैं?",
  options_en: ["Usha Thorat", "Shyamala Gopinath", "K. J. Udeshi", "No woman has become RBI Governor yet"],
  options_hi: ["उषा थोराट", "श्यामला गोपीनाथ", "के. जे. उदेशी", "अभी तक कोई महिला आरबीआई गवर्नर नहीं बनी है"],
  answer_en: "No woman has become RBI Governor yet",
  answer_hi: "अभी तक कोई महिला आरबीआई गवर्नर नहीं बनी है",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Which article deals with the official language of the Union?",
  question_hi: "संघ की राजभाषा से कौन सा अनुच्छेद संबंधित है?",
  options_en: ["Article 343", "Article 344", "Article 345", "Article 346"],
  options_hi: ["अनुच्छेद 343", "अनुच्छेद 344", "अनुच्छेद 345", "अनुच्छेद 346"],
  answer_en: "Article 343",
  answer_hi: "अनुच्छेद 343",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "Who is the first woman to become the Speaker of a State Legislative Assembly?",
  question_hi: "राज्य विधानसभा की अध्यक्ष बनने वाली पहली महिला कौन थीं?",
  options_en: ["Shanno Devi", "Sushma Swaraj", "Mamata Banerjee", "Indira Gandhi"],
  options_hi: ["शन्नो देवी", "सुष्मा स्वराज", "ममता बनर्जी", "इंदिरा गांधी"],
  answer_en: "Shanno Devi",
  answer_hi: "शन्नो देवी",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Which article deals with the President's power to promulgate ordinances?",
  question_hi: "राष्ट्रपति की अध्यादेश जारी करने की शक्ति से कौन सा अनुच्छेद संबंधित है?",
  options_en: ["Article 123", "Article 124", "Article 125", "Article 126"],
  options_hi: ["अनुच्छेद 123", "अनुच्छेद 124", "अनुच्छेद 125", "अनुच्छेद 126"],
  answer_en: "Article 123",
  answer_hi: "अनुच्छेद 123",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Who was the first woman to become the Chief Justice of a High Court?",
  question_hi: "उच्च न्यायालय की मुख्य न्यायाधीश बनने वाली पहली महिला कौन थीं?",
  options_en: ["Anna Chandy", "Leila Seth", "Ruma Pal", "Gita Mittal"],
  options_hi: ["अन्ना चांडी", "लीला सेठ", "रूमा पाल", "गीता मित्तल"],
  answer_en: "Anna Chandy",
  answer_hi: "अन्ना चांडी",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Which article deals with the power of Parliament to amend the Constitution?",
  question_hi: "संविधान में संशोधन करने की संसद की शक्ति से कौन सा अनुच्छेद संबंधित है?",
  options_en: ["Article 368", "Article 369", "Article 370", "Article 371"],
  options_hi: ["अनुच्छेद 368", "अनुच्छेद 369", "अनुच्छेद 370", "अनुच्छेद 371"],
  answer_en: "Article 368",
  answer_hi: "अनुच्छेद 368",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Who was the first woman to become the Union Minister of Home Affairs?",
  question_hi: "केंद्रीय गृह मंत्री बनने वाली पहली महिला कौन थीं?",
  options_en: ["Indira Gandhi", "Sushma Swaraj", "Mamata Banerjee", "No woman has become Home Minister yet"],
  options_hi: ["इंदिरा गांधी", "सुष्मा स्वराज", "ममता बनर्जी", "अभी तक कोई महिला गृह मंत्री नहीं बनी है"],
  answer_en: "No woman has become Home Minister yet",
  answer_hi: "अभी तक कोई महिला गृह मंत्री नहीं बनी है",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Which article deals with the special status of Jammu and Kashmir (before 2019)?",
  question_hi: "जम्मू और कश्मीर की विशेष स्थिति (2019 से पहले) से कौन सा अनुच्छेद संबंधित है?",
  options_en: ["Article 370", "Article 371", "Article 372", "Article 373"],
  options_hi: ["अनुच्छेद 370", "अनुच्छेद 371", "अनुच्छेद 372", "अनुच्छेद 373"],
  answer_en: "Article 370",
  answer_hi: "अनुच्छेद 370",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Who was the first woman to become the Minister of External Affairs?",
  question_hi: "विदेश मंत्री बनने वाली पहली महिला कौन थीं?",
  options_en: ["Indira Gandhi", "Sushma Swaraj", "Vijaya Lakshmi Pandit", "Mamata Banerjee"],
  options_hi: ["इंदिरा गांधी", "सुष्मा स्वराज", "विजया लक्ष्मी पंडित", "ममता बनर्जी"],
  answer_en: "Indira Gandhi",
  answer_hi: "इंदिरा गांधी",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Which article deals with the suspension of fundamental rights during emergency?",
  question_hi: "आपातकाल के दौरान मौलिक अधिकारों के निलंबन से कौन सा अनुच्छेद संबंधित है?",
  options_en: ["Article 358", "Article 359", "Article 360", "Both A and B"],
  options_hi: ["अनुच्छेद 358", "अनुच्छेद 359", "अनुच्छेद 360", "A और B दोनों"],
  answer_en: "Both A and B",
  answer_hi: "A और B दोनों",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Who was the first woman to become the Minister of Human Resource Development?",
  question_hi: "मानव संसाधन विकास मंत्री बनने वाली पहली महिला कौन थीं?",
  options_en: ["Smriti Irani", "Sushma Swaraj", "Mamata Banerjee", "Indira Gandhi"],
  options_hi: ["स्मृति ईरानी", "सुष्मा स्वराज", "ममता बनर्जी", "इंदिरा गांधी"],
  answer_en: "Smriti Irani",
  answer_hi: "स्मृति ईरानी",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Which article deals with the establishment of the Finance Commission?",
  question_hi: "वित्त आयोग की स्थापना से कौन सा अनुच्छेद संबंधित है?",
  options_en: ["Article 280", "Article 281", "Article 282", "Article 283"],
  options_hi: ["अनुच्छेद 280", "अनुच्छेद 281", "अनुच्छेद 282", "अनुच्छेद 283"],
  answer_en: "Article 280",
  answer_hi: "अनुच्छेद 280",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "Who was the first woman to become the Minister of Women and Child Development?",
  question_hi: "महिला और बाल विकास मंत्री बनने वाली पहली महिला कौन थीं?",
  options_en: ["Renuka Chowdhury", "Maneka Gandhi", "Smriti Irani", "Sushma Swaraj"],
  options_hi: ["रेनुका चौधरी", "मेनका गांधी", "स्मृति ईरानी", "सुष्मा स्वराज"],
  answer_en: "Renuka Chowdhury",
  answer_hi: "रेनुका चौधरी",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Which article deals with the protection of President and Governors from legal proceedings?",
  question_hi: "राष्ट्रपति और राज्यपालों की कानूनी कार्यवाही से सुरक्षा से कौन सा अनुच्छेद संबंधित है?",
  options_en: ["Article 361", "Article 362", "Article 363", "Article 364"],
  options_hi: ["अनुच्छेद 361", "अनुच्छेद 362", "अनुच्छेद 363", "अनुच्छेद 364"],
  answer_en: "Article 361",
  answer_hi: "अनुच्छेद 361",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Who was the first woman to become the Minister of Health and Family Welfare?",
  question_hi: "स्वास्थ्य और परिवार कल्याण मंत्री बनने वाली पहली महिला कौन थीं?",
  options_en: ["Rajkumari Amrit Kaur", "Sushma Swaraj", "Mamata Banerjee", "Indira Gandhi"],
  options_hi: ["राजकुमारी अमृत कौर", "सुष्मा स्वराज", "ममता बनर्जी", "इंदिरा गांधी"],
  answer_en: "Rajkumari Amrit Kaur",
  answer_hi: "राजकुमारी अमृत कौर",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which article deals with the provisions regarding the Anglo-Indian community?",
  question_hi: "एंग्लो-इंडियन समुदाय के संबंध में प्रावधानों से कौन सा अनुच्छेद संबंधित है?",
  options_en: ["Article 331", "Article 332", "Article 333", "Article 334"],
  options_hi: ["अनुच्छेद 331", "अनुच्छेद 332", "अनुच्छेद 333", "अनुच्छेद 334"],
  answer_en: "Article 331",
  answer_hi: "अनुच्छेद 331",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "Who was the first woman to become the Minister of Information and Broadcasting?",
  question_hi: "सूचना और प्रसारण मंत्री बनने वाली पहली महिला कौन थीं?",
  options_en: ["Indira Gandhi", "Sushma Swaraj", "Mamata Banerjee", "Smriti Irani"],
  options_hi: ["इंदिरा गांधी", "सुष्मा स्वराज", "ममता बनर्जी", "स्मृति ईरानी"],
  answer_en: "Indira Gandhi",
  answer_hi: "इंदिरा गांधी",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Which article deals with the establishment of the Union Public Service Commission?",
  question_hi: "संघ लोक सेवा आयोग की स्थापना से कौन सा अनुच्छेद संबंधित है?",
  options_en: ["Article 315", "Article 316", "Article 317", "Article 318"],
  options_hi: ["अनुच्छेद 315", "अनुच्छेद 316", "अनुच्छेद 317", "अनुच्छेद 318"],
  answer_en: "Article 315",
  answer_hi: "अनुच्छेद 315",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Who was the first woman to become the Minister of Railways?",
  question_hi: "रेल मंत्री बनने वाली पहली महिला कौन थीं?",
  options_en: ["Mamata Banerjee", "Sushma Swaraj", "Indira Gandhi", "Smriti Irani"],
  options_hi: ["ममता बनर्जी", "सुष्मा स्वराज", "इंदिरा गांधी", "स्मृति ईरानी"],
  answer_en: "Mamata Banerjee",
  answer_hi: "ममता बनर्जी",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which article deals with the establishment of the Supreme Court?",
  question_hi: "सर्वोच्च न्यायालय की स्थापना से कौन सा अनुच्छेद संबंधित है?",
  options_en: ["Article 124", "Article 125", "Article 126", "Article 127"],
  options_hi: ["अनुच्छेद 124", "अनुच्छेद 125", "अनुच्छेद 126", "अनुच्छेद 127"],
  answer_en: "Article 124",
  answer_hi: "अनुच्छेद 124",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Who was the first woman to become the Minister of Commerce and Industry?",
  question_hi: "वाणिज्य और उद्योग मंत्री बनने वाली पहली महिला कौन थीं?",
  options_en: ["Nirmala Sitharaman", "Sushma Swaraj", "Mamata Banerjee", "Indira Gandhi"],
  options_hi: ["निर्मला सीतारमण", "सुष्मा स्वराज", "ममता बनर्जी", "इंदिरा गांधी"],
  answer_en: "Nirmala Sitharaman",
  answer_hi: "निर्मला सीतारमण",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Which article deals with the abolition of titles?",
  question_hi: "उपाधियों के उन्मूलन से कौन सा अनुच्छेद संबंधित है?",
  options_en: ["Article 17", "Article 18", "Article 19", "Article 20"],
  options_hi: ["अनुच्छेद 17", "अनुच्छेद 18", "अनुच्छेद 19", "अनुच्छेद 20"],
  answer_en: "Article 18",
  answer_hi: "अनुच्छेद 18",
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