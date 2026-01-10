const questions = [
    {
        "num": 1,
        "question_en": "What is the full form of GIS?",
        "question_hi": "GIS का पूरा नाम क्या है?",
        "options_en": ["Geographic Information System", "Geographic Information Science", "Geographic Information Software", "Geographic Information Service"],
        "options_hi": ["भौगोलिक सूचना प्रणाली", "भौगोलिक सूचना विज्ञान", "भौगोलिक सूचना सॉफ्टवेयर", "भौगोलिक सूचना सेवा"],
        "answer_en": "Geographic Information System",
        "answer_hi": "भौगोलिक सूचना प्रणाली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What does GPS stand for?",
        "question_hi": "GPS का पूरा नाम क्या है?",
        "options_en": ["Global Positioning System", "Global Positioning Satellite", "Global Positioning Service", "Global Positioning Software"],
        "options_hi": ["ग्लोबल पोजिशनिंग सिस्टम", "ग्लोबल पोजिशनिंग सैटेलाइट", "ग्लोबल पोजिशनिंग सर्विस", "ग्लोबल पोजिशनिंग सॉफ्टवेयर"],
        "answer_en": "Global Positioning System",
        "answer_hi": "ग्लोबल पोजिशनिंग सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the full form of RS?",
        "question_hi": "RS का पूरा नाम क्या है?",
        "options_en": ["Remote Sensing", "Remote Sensing", "Remote Sensing", "Remote Sensing"],
        "options_hi": ["रिमोट सेंसिंग", "रिमोट सेंसिंग", "रिमोट सेंसिंग", "रिमोट सेंसिंग"],
        "answer_en": "Remote Sensing",
        "answer_hi": "रिमोट सेंसिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What does DEM stand for?",
        "question_hi": "DEM का पूरा नाम क्या है?",
        "options_en": ["Digital Elevation Model", "Digital Elevation Map", "Digital Elevation Measurement", "Digital Elevation Method"],
        "options_hi": ["डिजिटल ऊंचाई मॉडल", "डिजिटल ऊंचाई मानचित्र", "डिजिटल ऊंचाई माप", "डिजिटल ऊंचाई विधि"],
        "answer_en": "Digital Elevation Model",
        "answer_hi": "डिजिटल ऊंचाई मॉडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the full form of DTM?",
        "question_hi": "DTM का पूरा नाम क्या है?",
        "options_en": ["Digital Terrain Model", "Digital Terrain Map", "Digital Terrain Measurement", "Digital Terrain Method"],
        "options_hi": ["डिजिटल भू-भाग मॉडल", "डिजिटल भू-भाग मानचित्र", "डिजिटल भू-भाग माप", "डिजिटल भू-भाग विधि"],
        "answer_en": "Digital Terrain Model",
        "answer_hi": "डिजिटल भू-भाग मॉडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What does DSM stand for?",
        "question_hi": "DSM का पूरा नाम क्या है?",
        "options_en": ["Digital Surface Model", "Digital Surface Map", "Digital Surface Measurement", "Digital Surface Method"],
        "options_hi": ["डिजिटल सतह मॉडल", "डिजिटल सतह मानचित्र", "डिजिटल सतह माप", "डिजिटल सतह विधि"],
        "answer_en": "Digital Surface Model",
        "answer_hi": "डिजिटल सतह मॉडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the full form of LIDAR?",
        "question_hi": "LIDAR का पूरा नाम क्या है?",
        "options_en": ["Light Detection and Ranging", "Light Detection and Ranging", "Light Detection and Ranging", "Light Detection and Ranging"],
        "options_hi": ["लाइट डिटेक्शन एंड रेंजिंग", "लाइट डिटेक्शन एंड रेंजिंग", "लाइट डिटेक्शन एंड रेंजिंग", "लाइट डिटेक्शन एंड रेंजिंग"],
        "answer_en": "Light Detection and Ranging",
        "answer_hi": "लाइट डिटेक्शन एंड रेंजिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does RADAR stand for?",
        "question_hi": "RADAR का पूरा नाम क्या है?",
        "options_en": ["Radio Detection and Ranging", "Radio Detection and Ranging", "Radio Detection and Ranging", "Radio Detection and Ranging"],
        "options_hi": ["रेडियो डिटेक्शन एंड रेंजिंग", "रेडियो डिटेक्शन एंड रेंजिंग", "रेडियो डिटेक्शन एंड रेंजिंग", "रेडियो डिटेक्शन एंड रेंजिंग"],
        "answer_en": "Radio Detection and Ranging",
        "answer_hi": "रेडियो डिटेक्शन एंड रेंजिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the full form of SONAR?",
        "question_hi": "SONAR का पूरा नाम क्या है?",
        "options_en": ["Sound Navigation and Ranging", "Sound Navigation and Ranging", "Sound Navigation and Ranging", "Sound Navigation and Ranging"],
        "options_hi": ["साउंड नेविगेशन एंड रेंजिंग", "साउंड नेविगेशन एंड रेंजिंग", "साउंड नेविगेशन एंड रेंजिंग", "साउंड नेविगेशन एंड रेंजिंग"],
        "answer_en": "Sound Navigation and Ranging",
        "answer_hi": "साउंड नेविगेशन एंड रेंजिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What does NDVI stand for?",
        "question_hi": "NDVI का पूरा नाम क्या है?",
        "options_en": ["Normalized Difference Vegetation Index", "Normalized Difference Vegetation Index", "Normalized Difference Vegetation Index", "Normalized Difference Vegetation Index"],
        "options_hi": ["सामान्यीकृत अंतर वनस्पति सूचकांक", "सामान्यीकृत अंतर वनस्पति सूचकांक", "सामान्यीकृत अंतर वनस्पति सूचकांक", "सामान्यीकृत अंतर वनस्पति सूचकांक"],
        "answer_en": "Normalized Difference Vegetation Index",
        "answer_hi": "सामान्यीकृत अंतर वनस्पति सूचकांक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the full form of NIR?",
        "question_hi": "NIR का पूरा नाम क्या है?",
        "options_en": ["Near Infrared", "Near Infrared", "Near Infrared", "Near Infrared"],
        "options_hi": ["नियर इन्फ्रारेड", "नियर इन्फ्रारेड", "नियर इन्फ्रारेड", "नियर इन्फ्रारेड"],
        "answer_en": "Near Infrared",
        "answer_hi": "नियर इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What does SWIR stand for?",
        "question_hi": "SWIR का पूरा नाम क्या है?",
        "options_en": ["Short Wave Infrared", "Short Wave Infrared", "Short Wave Infrared", "Short Wave Infrared"],
        "options_hi": ["शॉर्ट वेव इन्फ्रारेड", "शॉर्ट वेव इन्फ्रारेड", "शॉर्ट वेव इन्फ्रारेड", "शॉर्ट वेव इन्फ्रारेड"],
        "answer_en": "Short Wave Infrared",
        "answer_hi": "शॉर्ट वेव इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the full form of MIR?",
        "question_hi": "MIR का पूरा नाम क्या है?",
        "options_en": ["Mid Infrared", "Mid Infrared", "Mid Infrared", "Mid Infrared"],
        "options_hi": ["मिड इन्फ्रारेड", "मिड इन्फ्रारेड", "मिड इन्फ्रारेड", "मिड इन्फ्रारेड"],
        "answer_en": "Mid Infrared",
        "answer_hi": "मिड इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What does TIR stand for?",
        "question_hi": "TIR का पूरा नाम क्या है?",
        "options_en": ["Thermal Infrared", "Thermal Infrared", "Thermal Infrared", "Thermal Infrared"],
        "options_hi": ["थर्मल इन्फ्रारेड", "थर्मल इन्फ्रारेड", "थर्मल इन्फ्रारेड", "थर्मल इन्फ्रारेड"],
        "answer_en": "Thermal Infrared",
        "answer_hi": "थर्मल इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the full form of VIS?",
        "question_hi": "VIS का पूरा नाम क्या है?",
        "options_en": ["Visible", "Visible", "Visible", "Visible"],
        "options_hi": ["विजिबल", "विजिबल", "विजिबल", "विजिबल"],
        "answer_en": "Visible",
        "answer_hi": "विजिबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What does UV stand for?",
        "question_hi": "UV का पूरा नाम क्या है?",
        "options_en": ["Ultraviolet", "Ultraviolet", "Ultraviolet", "Ultraviolet"],
        "options_hi": ["अल्ट्रावायलेट", "अल्ट्रावायलेट", "अल्ट्रावायलेट", "अल्ट्रावायलेट"],
        "answer_en": "Ultraviolet",
        "answer_hi": "अल्ट्रावायलेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the full form of GCP?",
        "question_hi": "GCP का पूरा नाम क्या है?",
        "options_en": ["Ground Control Point", "Ground Control Point", "Ground Control Point", "Ground Control Point"],
        "options_hi": ["ग्राउंड कंट्रोल पॉइंट", "ग्राउंड कंट्रोल पॉइंट", "ग्राउंड कंट्रोल पॉइंट", "ग्राउंड कंट्रोल पॉइंट"],
        "answer_en": "Ground Control Point",
        "answer_hi": "ग्राउंड कंट्रोल पॉइंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does DEM stand for in geography?",
        "question_hi": "भूगोल में DEM का पूरा नाम क्या है?",
        "options_en": ["Digital Elevation Model", "Digital Elevation Map", "Digital Elevation Measurement", "Digital Elevation Method"],
        "options_hi": ["डिजिटल ऊंचाई मॉडल", "डिजिटल ऊंचाई मानचित्र", "डिजिटल ऊंचाई माप", "डिजिटल ऊंचाई विधि"],
        "answer_en": "Digital Elevation Model",
        "answer_hi": "डिजिटल ऊंचाई मॉडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the full form of DTM in geography?",
        "question_hi": "भूगोल में DTM का पूरा नाम क्या है?",
        "options_en": ["Digital Terrain Model", "Digital Terrain Map", "Digital Terrain Measurement", "Digital Terrain Method"],
        "options_hi": ["डिजिटल भू-भाग मॉडल", "डिजिटल भू-भाग मानचित्र", "डिजिटल भू-भाग माप", "डिजिटल भू-भाग विधि"],
        "answer_en": "Digital Terrain Model",
        "answer_hi": "डिजिटल भू-भाग मॉडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What does DSM stand for in geography?",
        "question_hi": "भूगोल में DSM का पूरा नाम क्या है?",
        "options_en": ["Digital Surface Model", "Digital Surface Map", "Digital Surface Measurement", "Digital Surface Method"],
        "options_hi": ["डिजिटल सतह मॉडल", "डिजिटल सतह मानचित्र", "डिजिटल सतह माप", "डिजिटल सतह विधि"],
        "answer_en": "Digital Surface Model",
        "answer_hi": "डिजिटल सतह मॉडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the full form of LIDAR in geography?",
        "question_hi": "भूगोल में LIDAR का पूरा नाम क्या है?",
        "options_en": ["Light Detection and Ranging", "Light Detection and Ranging", "Light Detection and Ranging", "Light Detection and Ranging"],
        "options_hi": ["लाइट डिटेक्शन एंड रेंजिंग", "लाइट डिटेक्शन एंड रेंजिंग", "लाइट डिटेक्शन एंड रेंजिंग", "लाइट डिटेक्शन एंड रेंजिंग"],
        "answer_en": "Light Detection and Ranging",
        "answer_hi": "लाइट डिटेक्शन एंड रेंजिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What does RADAR stand for in geography?",
        "question_hi": "भूगोल में RADAR का पूरा नाम क्या है?",
        "options_en": ["Radio Detection and Ranging", "Radio Detection and Ranging", "Radio Detection and Ranging", "Radio Detection and Ranging"],
        "options_hi": ["रेडियो डिटेक्शन एंड रेंजिंग", "रेडियो डिटेक्शन एंड रेंजिंग", "रेडियो डिटेक्शन एंड रेंजिंग", "रेडियो डिटेक्शन एंड रेंजिंग"],
        "answer_en": "Radio Detection and Ranging",
        "answer_hi": "रेडियो डिटेक्शन एंड रेंजिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the full form of SONAR in geography?",
        "question_hi": "भूगोल में SONAR का पूरा नाम क्या है?",
        "options_en": ["Sound Navigation and Ranging", "Sound Navigation and Ranging", "Sound Navigation and Ranging", "Sound Navigation and Ranging"],
        "options_hi": ["साउंड नेविगेशन एंड रेंजिंग", "साउंड नेविगेशन एंड रेंजिंग", "साउंड नेविगेशन एंड रेंजिंग", "साउंड नेविगेशन एंड रेंजिंग"],
        "answer_en": "Sound Navigation and Ranging",
        "answer_hi": "साउंड नेविगेशन एंड रेंजिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What does NDVI stand for in geography?",
        "question_hi": "भूगोल में NDVI का पूरा नाम क्या है?",
        "options_en": ["Normalized Difference Vegetation Index", "Normalized Difference Vegetation Index", "Normalized Difference Vegetation Index", "Normalized Difference Vegetation Index"],
        "options_hi": ["सामान्यीकृत अंतर वनस्पति सूचकांक", "सामान्यीकृत अंतर वनस्पति सूचकांक", "सामान्यीकृत अंतर वनस्पति सूचकांक", "सामान्यीकृत अंतर वनस्पति सूचकांक"],
        "answer_en": "Normalized Difference Vegetation Index",
        "answer_hi": "सामान्यीकृत अंतर वनस्पति सूचकांक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the full form of NIR in geography?",
        "question_hi": "भूगोल में NIR का पूरा नाम क्या है?",
        "options_en": ["Near Infrared", "Near Infrared", "Near Infrared", "Near Infrared"],
        "options_hi": ["नियर इन्फ्रारेड", "नियर इन्फ्रारेड", "नियर इन्फ्रारेड", "नियर इन्फ्रारेड"],
        "answer_en": "Near Infrared",
        "answer_hi": "नियर इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What does SWIR stand for in geography?",
        "question_hi": "भूगोल में SWIR का पूरा नाम क्या है?",
        "options_en": ["Short Wave Infrared", "Short Wave Infrared", "Short Wave Infrared", "Short Wave Infrared"],
        "options_hi": ["शॉर्ट वेव इन्फ्रारेड", "शॉर्ट वेव इन्फ्रारेड", "शॉर्ट वेव इन्फ्रारेड", "शॉर्ट वेव इन्फ्रारेड"],
        "answer_en": "Short Wave Infrared",
        "answer_hi": "शॉर्ट वेव इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the full form of MIR in geography?",
        "question_hi": "भूगोल में MIR का पूरा नाम क्या है?",
        "options_en": ["Mid Infrared", "Mid Infrared", "Mid Infrared", "Mid Infrared"],
        "options_hi": ["मिड इन्फ्रारेड", "मिड इन्फ्रारेड", "मिड इन्फ्रारेड", "मिड इन्फ्रारेड"],
        "answer_en": "Mid Infrared",
        "answer_hi": "मिड इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What does TIR stand for in geography?",
        "question_hi": "भूगोल में TIR का पूरा नाम क्या है?",
        "options_en": ["Thermal Infrared", "Thermal Infrared", "Thermal Infrared", "Thermal Infrared"],
        "options_hi": ["थर्मल इन्फ्रारेड", "थर्मल इन्फ्रारेड", "थर्मल इन्फ्रारेड", "थर्मल इन्फ्रारेड"],
        "answer_en": "Thermal Infrared",
        "answer_hi": "थर्मल इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the full form of VIS in geography?",
        "question_hi": "भूगोल में VIS का पूरा नाम क्या है?",
        "options_en": ["Visible", "Visible", "Visible", "Visible"],
        "options_hi": ["विजिबल", "विजिबल", "विजिबल", "विजिबल"],
        "answer_en": "Visible",
        "answer_hi": "विजिबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What does UV stand for in geography?",
        "question_hi": "भूगोल में UV का पूरा नाम क्या है?",
        "options_en": ["Ultraviolet", "Ultraviolet", "Ultraviolet", "Ultraviolet"],
        "options_hi": ["अल्ट्रावायलेट", "अल्ट्रावायलेट", "अल्ट्रावायलेट", "अल्ट्रावायलेट"],
        "answer_en": "Ultraviolet",
        "answer_hi": "अल्ट्रावायलेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the full form of GCP in geography?",
        "question_hi": "भूगोल में GCP का पूरा नाम क्या है?",
        "options_en": ["Ground Control Point", "Ground Control Point", "Ground Control Point", "Ground Control Point"],
        "options_hi": ["ग्राउंड कंट्रोल पॉइंट", "ग्राउंड कंट्रोल पॉइंट", "ग्राउंड कंट्रोल पॉइंट", "ग्राउंड कंट्रोल पॉइंट"],
        "answer_en": "Ground Control Point",
        "answer_hi": "ग्राउंड कंट्रोल पॉइंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What does DEM stand for in remote sensing?",
        "question_hi": "रिमोट सेंसिंग में DEM का पूरा नाम क्या है?",
        "options_en": ["Digital Elevation Model", "Digital Elevation Map", "Digital Elevation Measurement", "Digital Elevation Method"],
        "options_hi": ["डिजिटल ऊंचाई मॉडल", "डिजिटल ऊंचाई मानचित्र", "डिजिटल ऊंचाई माप", "डिजिटल ऊंचाई विधि"],
        "answer_en": "Digital Elevation Model",
        "answer_hi": "डिजिटल ऊंचाई मॉडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the full form of DTM in remote sensing?",
        "question_hi": "रिमोट सेंसिंग में DTM का पूरा नाम क्या है?",
        "options_en": ["Digital Terrain Model", "Digital Terrain Map", "Digital Terrain Measurement", "Digital Terrain Method"],
        "options_hi": ["डिजिटल भू-भाग मॉडल", "डिजिटल भू-भाग मानचित्र", "डिजिटल भू-भाग माप", "डिजिटल भू-भाग विधि"],
        "answer_en": "Digital Terrain Model",
        "answer_hi": "डिजिटल भू-भाग मॉडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What does DSM stand for in remote sensing?",
        "question_hi": "रिमोट सेंसिंग में DSM का पूरा नाम क्या है?",
        "options_en": ["Digital Surface Model", "Digital Surface Map", "Digital Surface Measurement", "Digital Surface Method"],
        "options_hi": ["डिजिटल सतह मॉडल", "डिजिटल सतह मानचित्र", "डिजिटल सतह माप", "डिजिटल सतह विधि"],
        "answer_en": "Digital Surface Model",
        "answer_hi": "डिजिटल सतह मॉडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the full form of LIDAR in remote sensing?",
        "question_hi": "रिमोट सेंसिंग में LIDAR का पूरा नाम क्या है?",
        "options_en": ["Light Detection and Ranging", "Light Detection and Ranging", "Light Detection and Ranging", "Light Detection and Ranging"],
        "options_hi": ["लाइट डिटेक्शन एंड रेंजिंग", "लाइट डिटेक्शन एंड रेंजिंग", "लाइट डिटेक्शन एंड रेंजिंग", "लाइट डिटेक्शन एंड रेंजिंग"],
        "answer_en": "Light Detection and Ranging",
        "answer_hi": "लाइट डिटेक्शन एंड रेंजिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What does RADAR stand for in remote sensing?",
        "question_hi": "रिमोट सेंसिंग में RADAR का पूरा नाम क्या है?",
        "options_en": ["Radio Detection and Ranging", "Radio Detection and Ranging", "Radio Detection and Ranging", "Radio Detection and Ranging"],
        "options_hi": ["रेडियो डिटेक्शन एंड रेंजिंग", "रेडियो डिटेक्शन एंड रेंजिंग", "रेडियो डिटेक्शन एंड रेंजिंग", "रेडियो डिटेक्शन एंड रेंजिंग"],
        "answer_en": "Radio Detection and Ranging",
        "answer_hi": "रेडियो डिटेक्शन एंड रेंजिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the full form of SONAR in remote sensing?",
        "question_hi": "रिमोट सेंसिंग में SONAR का पूरा नाम क्या है?",
        "options_en": ["Sound Navigation and Ranging", "Sound Navigation and Ranging", "Sound Navigation and Ranging", "Sound Navigation and Ranging"],
        "options_hi": ["साउंड नेविगेशन एंड रेंजिंग", "साउंड नेविगेशन एंड रेंजिंग", "साउंड नेविगेशन एंड रेंजिंग", "साउंड नेविगेशन एंड रेंजिंग"],
        "answer_en": "Sound Navigation and Ranging",
        "answer_hi": "साउंड नेविगेशन एंड रेंजिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What does NDVI stand for in remote sensing?",
        "question_hi": "रिमोट सेंसिंग में NDVI का पूरा नाम क्या है?",
        "options_en": ["Normalized Difference Vegetation Index", "Normalized Difference Vegetation Index", "Normalized Difference Vegetation Index", "Normalized Difference Vegetation Index"],
        "options_hi": ["सामान्यीकृत अंतर वनस्पति सूचकांक", "सामान्यीकृत अंतर वनस्पति सूचकांक", "सामान्यीकृत अंतर वनस्पति सूचकांक", "सामान्यीकृत अंतर वनस्पति सूचकांक"],
        "answer_en": "Normalized Difference Vegetation Index",
        "answer_hi": "सामान्यीकृत अंतर वनस्पति सूचकांक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the full form of NIR in remote sensing?",
        "question_hi": "रिमोट सेंसिंग में NIR का पूरा नाम क्या है?",
        "options_en": ["Near Infrared", "Near Infrared", "Near Infrared", "Near Infrared"],
        "options_hi": ["नियर इन्फ्रारेड", "नियर इन्फ्रारेड", "नियर इन्फ्रारेड", "नियर इन्फ्रारेड"],
        "answer_en": "Near Infrared",
        "answer_hi": "नियर इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What does SWIR stand for in remote sensing?",
        "question_hi": "रिमोट सेंसिंग में SWIR का पूरा नाम क्या है?",
        "options_en": ["Short Wave Infrared", "Short Wave Infrared", "Short Wave Infrared", "Short Wave Infrared"],
        "options_hi": ["शॉर्ट वेव इन्फ्रारेड", "शॉर्ट वेव इन्फ्रारेड", "शॉर्ट वेव इन्फ्रारेड", "शॉर्ट वेव इन्फ्रारेड"],
        "answer_en": "Short Wave Infrared",
        "answer_hi": "शॉर्ट वेव इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the full form of MIR in remote sensing?",
        "question_hi": "रिमोट सेंसिंग में MIR का पूरा नाम क्या है?",
        "options_en": ["Mid Infrared", "Mid Infrared", "Mid Infrared", "Mid Infrared"],
        "options_hi": ["मिड इन्फ्रारेड", "मिड इन्फ्रारेड", "मिड इन्फ्रारेड", "मिड इन्फ्रारेड"],
        "answer_en": "Mid Infrared",
        "answer_hi": "मिड इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What does TIR stand for in remote sensing?",
        "question_hi": "रिमोट सेंसिंग में TIR का पूरा नाम क्या है?",
        "options_en": ["Thermal Infrared", "Thermal Infrared", "Thermal Infrared", "Thermal Infrared"],
        "options_hi": ["थर्मल इन्फ्रारेड", "थर्मल इन्फ्रारेड", "थर्मल इन्फ्रारेड", "थर्मल इन्फ्रारेड"],
        "answer_en": "Thermal Infrared",
        "answer_hi": "थर्मल इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the full form of VIS in remote sensing?",
        "question_hi": "रिमोट सेंसिंग में VIS का पूरा नाम क्या है?",
        "options_en": ["Visible", "Visible", "Visible", "Visible"],
        "options_hi": ["विजिबल", "विजिबल", "विजिबल", "विजिबल"],
        "answer_en": "Visible",
        "answer_hi": "विजिबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What does UV stand for in remote sensing?",
        "question_hi": "रिमोट सेंसिंग में UV का पूरा नाम क्या है?",
        "options_en": ["Ultraviolet", "Ultraviolet", "Ultraviolet", "Ultraviolet"],
        "options_hi": ["अल्ट्रावायलेट", "अल्ट्रावायलेट", "अल्ट्रावायलेट", "अल्ट्रावायलेट"],
        "answer_en": "Ultraviolet",
        "answer_hi": "अल्ट्रावायलेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the full form of GCP in remote sensing?",
        "question_hi": "रिमोट सेंसिंग में GCP का पूरा नाम क्या है?",
        "options_en": ["Ground Control Point", "Ground Control Point", "Ground Control Point", "Ground Control Point"],
        "options_hi": ["ग्राउंड कंट्रोल पॉइंट", "ग्राउंड कंट्रोल पॉइंट", "ग्राउंड कंट्रोल पॉइंट", "ग्राउंड कंट्रोल पॉइंट"],
        "answer_en": "Ground Control Point",
        "answer_hi": "ग्राउंड कंट्रोल पॉइंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What does DEM stand for in GIS?",
        "question_hi": "GIS में DEM का पूरा नाम क्या है?",
        "options_en": ["Digital Elevation Model", "Digital Elevation Map", "Digital Elevation Measurement", "Digital Elevation Method"],
        "options_hi": ["डिजिटल ऊंचाई मॉडल", "डिजिटल ऊंचाई मानचित्र", "डिजिटल ऊंचाई माप", "डिजिटल ऊंचाई विधि"],
        "answer_en": "Digital Elevation Model",
        "answer_hi": "डिजिटल ऊंचाई मॉडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the full form of DTM in GIS?",
        "question_hi": "GIS में DTM का पूरा नाम क्या है?",
        "options_en": ["Digital Terrain Model", "Digital Terrain Map", "Digital Terrain Measurement", "Digital Terrain Method"],
        "options_hi": ["डिजिटल भू-भाग मॉडल", "डिजिटल भू-भाग मानचित्र", "डिजिटल भू-भाग माप", "डिजिटल भू-भाग विधि"],
        "answer_en": "Digital Terrain Model",
        "answer_hi": "डिजिटल भू-भाग मॉडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What does DSM stand for in GIS?",
        "question_hi": "GIS में DSM का पूरा नाम क्या है?",
        "options_en": ["Digital Surface Model", "Digital Surface Map", "Digital Surface Measurement", "Digital Surface Method"],
        "options_hi": ["डिजिटल सतह मॉडल", "डिजिटल सतह मानचित्र", "डिजिटल सतह माप", "डिजिटल सतह विधि"],
        "answer_en": "Digital Surface Model",
        "answer_hi": "डिजिटल सतह मॉडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the full form of LIDAR in GIS?",
        "question_hi": "GIS में LIDAR का पूरा नाम क्या है?",
        "options_en": ["Light Detection and Ranging", "Light Detection and Ranging", "Light Detection and Ranging", "Light Detection and Ranging"],
        "options_hi": ["लाइट डिटेक्शन एंड रेंजिंग", "लाइट डिटेक्शन एंड रेंजिंग", "लाइट डिटेक्शन एंड रेंजिंग", "लाइट डिटेक्शन एंड रेंजिंग"],
        "answer_en": "Light Detection and Ranging",
        "answer_hi": "लाइट डिटेक्शन एंड रेंजिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What does RADAR stand for in GIS?",
        "question_hi": "GIS में RADAR का पूरा नाम क्या है?",
        "options_en": ["Radio Detection and Ranging", "Radio Detection and Ranging", "Radio Detection and Ranging", "Radio Detection and Ranging"],
        "options_hi": ["रेडियो डिटेक्शन एंड रेंजिंग", "रेडियो डिटेक्शन एंड रेंजिंग", "रेडियो डिटेक्शन एंड रेंजिंग", "रेडियो डिटेक्शन एंड रेंजिंग"],
        "answer_en": "Radio Detection and Ranging",
        "answer_hi": "रेडियो डिटेक्शन एंड रेंजिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the full form of SONAR in GIS?",
        "question_hi": "GIS में SONAR का पूरा नाम क्या है?",
        "options_en": ["Sound Navigation and Ranging", "Sound Navigation and Ranging", "Sound Navigation and Ranging", "Sound Navigation and Ranging"],
        "options_hi": ["साउंड नेविगेशन एंड रेंजिंग", "साउंड नेविगेशन एंड रेंजिंग", "साउंड नेविगेशन एंड रेंजिंग", "साउंड नेविगेशन एंड रेंजिंग"],
        "answer_en": "Sound Navigation and Ranging",
        "answer_hi": "साउंड नेविगेशन एंड रेंजिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What does NDVI stand for in GIS?",
        "question_hi": "GIS में NDVI का पूरा नाम क्या है?",
        "options_en": ["Normalized Difference Vegetation Index", "Normalized Difference Vegetation Index", "Normalized Difference Vegetation Index", "Normalized Difference Vegetation Index"],
        "options_hi": ["सामान्यीकृत अंतर वनस्पति सूचकांक", "सामान्यीकृत अंतर वनस्पति सूचकांक", "सामान्यीकृत अंतर वनस्पति सूचकांक", "सामान्यीकृत अंतर वनस्पति सूचकांक"],
        "answer_en": "Normalized Difference Vegetation Index",
        "answer_hi": "सामान्यीकृत अंतर वनस्पति सूचकांक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the full form of NIR in GIS?",
        "question_hi": "GIS में NIR का पूरा नाम क्या है?",
        "options_en": ["Near Infrared", "Near Infrared", "Near Infrared", "Near Infrared"],
        "options_hi": ["नियर इन्फ्रारेड", "नियर इन्फ्रारेड", "नियर इन्फ्रारेड", "नियर इन्फ्रारेड"],
        "answer_en": "Near Infrared",
        "answer_hi": "नियर इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What does SWIR stand for in GIS?",
        "question_hi": "GIS में SWIR का पूरा नाम क्या है?",
        "options_en": ["Short Wave Infrared", "Short Wave Infrared", "Short Wave Infrared", "Short Wave Infrared"],
        "options_hi": ["शॉर्ट वेव इन्फ्रारेड", "शॉर्ट वेव इन्फ्रारेड", "शॉर्ट वेव इन्फ्रारेड", "शॉर्ट वेव इन्फ्रारेड"],
        "answer_en": "Short Wave Infrared",
        "answer_hi": "शॉर्ट वेव इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the full form of MIR in GIS?",
        "question_hi": "GIS में MIR का पूरा नाम क्या है?",
        "options_en": ["Mid Infrared", "Mid Infrared", "Mid Infrared", "Mid Infrared"],
        "options_hi": ["मिड इन्फ्रारेड", "मिड इन्फ्रारेड", "मिड इन्फ्रारेड", "मिड इन्फ्रारेड"],
        "answer_en": "Mid Infrared",
        "answer_hi": "मिड इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What does TIR stand for in GIS?",
        "question_hi": "GIS में TIR का पूरा नाम क्या है?",
        "options_en": ["Thermal Infrared", "Thermal Infrared", "Thermal Infrared", "Thermal Infrared"],
        "options_hi": ["थर्मल इन्फ्रारेड", "थर्मल इन्फ्रारेड", "थर्मल इन्फ्रारेड", "थर्मल इन्फ्रारेड"],
        "answer_en": "Thermal Infrared",
        "answer_hi": "थर्मल इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the full form of VIS in GIS?",
        "question_hi": "GIS में VIS का पूरा नाम क्या है?",
        "options_en": ["Visible", "Visible", "Visible", "Visible"],
        "options_hi": ["विजिबल", "विजिबल", "विजिबल", "विजिबल"],
        "answer_en": "Visible",
        "answer_hi": "विजिबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What does UV stand for in GIS?",
        "question_hi": "GIS में UV का पूरा नाम क्या है?",
        "options_en": ["Ultraviolet", "Ultraviolet", "Ultraviolet", "Ultraviolet"],
        "options_hi": ["अल्ट्रावायलेट", "अल्ट्रावायलेट", "अल्ट्रावायलेट", "अल्ट्रावायलेट"],
        "answer_en": "Ultraviolet",
        "answer_hi": "अल्ट्रावायलेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the full form of GCP in GIS?",
        "question_hi": "GIS में GCP का पूरा नाम क्या है?",
        "options_en": ["Ground Control Point", "Ground Control Point", "Ground Control Point", "Ground Control Point"],
        "options_hi": ["ग्राउंड कंट्रोल पॉइंट", "ग्राउंड कंट्रोल पॉइंट", "ग्राउंड कंट्रोल पॉइंट", "ग्राउंड कंट्रोल पॉइंट"],
        "answer_en": "Ground Control Point",
        "answer_hi": "ग्राउंड कंट्रोल पॉइंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What does DEM stand for in cartography?",
        "question_hi": "कार्टोग्राफी में DEM का पूरा नाम क्या है?",
        "options_en": ["Digital Elevation Model", "Digital Elevation Map", "Digital Elevation Measurement", "Digital Elevation Method"],
        "options_hi": ["डिजिटल ऊंचाई मॉडल", "डिजिटल ऊंचाई मानचित्र", "डिजिटल ऊंचाई माप", "डिजिटल ऊंचाई विधि"],
        "answer_en": "Digital Elevation Model",
        "answer_hi": "डिजिटल ऊंचाई मॉडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the full form of DTM in cartography?",
        "question_hi": "कार्टोग्राफी में DTM का पूरा नाम क्या है?",
        "options_en": ["Digital Terrain Model", "Digital Terrain Map", "Digital Terrain Measurement", "Digital Terrain Method"],
        "options_hi": ["डिजिटल भू-भाग मॉडल", "डिजिटल भू-भाग मानचित्र", "डिजिटल भू-भाग माप", "डिजिटल भू-भाग विधि"],
        "answer_en": "Digital Terrain Model",
        "answer_hi": "डिजिटल भू-भाग मॉडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What does DSM stand for in cartography?",
        "question_hi": "कार्टोग्राफी में DSM का पूरा नाम क्या है?",
        "options_en": ["Digital Surface Model", "Digital Surface Map", "Digital Surface Measurement", "Digital Surface Method"],
        "options_hi": ["डिजिटल सतह मॉडल", "डिजिटल सतह मानचित्र", "डिजिटल सतह माप", "डिजिटल सतह विधि"],
        "answer_en": "Digital Surface Model",
        "answer_hi": "डिजिटल सतह मॉडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the full form of LIDAR in cartography?",
        "question_hi": "कार्टोग्राफी में LIDAR का पूरा नाम क्या है?",
        "options_en": ["Light Detection and Ranging", "Light Detection and Ranging", "Light Detection and Ranging", "Light Detection and Ranging"],
        "options_hi": ["लाइट डिटेक्शन एंड रेंजिंग", "लाइट डिटेक्शन एंड रेंजिंग", "लाइट डिटेक्शन एंड रेंजिंग", "लाइट डिटेक्शन एंड रेंजिंग"],
        "answer_en": "Light Detection and Ranging",
        "answer_hi": "लाइट डिटेक्शन एंड रेंजिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What does RADAR stand for in cartography?",
        "question_hi": "कार्टोग्राफी में RADAR का पूरा नाम क्या है?",
        "options_en": ["Radio Detection and Ranging", "Radio Detection and Ranging", "Radio Detection and Ranging", "Radio Detection and Ranging"],
        "options_hi": ["रेडियो डिटेक्शन एंड रेंजिंग", "रेडियो डिटेक्शन एंड रेंजिंग", "रेडियो डिटेक्शन एंड रेंजिंग", "रेडियो डिटेक्शन एंड रेंजिंग"],
        "answer_en": "Radio Detection and Ranging",
        "answer_hi": "रेडियो डिटेक्शन एंड रेंजिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the full form of SONAR in cartography?",
        "question_hi": "कार्टोग्राफी में SONAR का पूरा नाम क्या है?",
        "options_en": ["Sound Navigation and Ranging", "Sound Navigation and Ranging", "Sound Navigation and Ranging", "Sound Navigation and Ranging"],
        "options_hi": ["साउंड नेविगेशन एंड रेंजिंग", "साउंड नेविगेशन एंड रेंजिंग", "साउंड नेविगेशन एंड रेंजिंग", "साउंड नेविगेशन एंड रेंजिंग"],
        "answer_en": "Sound Navigation and Ranging",
        "answer_hi": "साउंड नेविगेशन एंड रेंजिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What does NDVI stand for in cartography?",
        "question_hi": "कार्टोग्राफी में NDVI का पूरा नाम क्या है?",
        "options_en": ["Normalized Difference Vegetation Index", "Normalized Difference Vegetation Index", "Normalized Difference Vegetation Index", "Normalized Difference Vegetation Index"],
        "options_hi": ["सामान्यीकृत अंतर वनस्पति सूचकांक", "सामान्यीकृत अंतर वनस्पति सूचकांक", "सामान्यीकृत अंतर वनस्पति सूचकांक", "सामान्यीकृत अंतर वनस्पति सूचकांक"],
        "answer_en": "Normalized Difference Vegetation Index",
        "answer_hi": "सामान्यीकृत अंतर वनस्पति सूचकांक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the full form of NIR in cartography?",
        "question_hi": "कार्टोग्राफी में NIR का पूरा नाम क्या है?",
        "options_en": ["Near Infrared", "Near Infrared", "Near Infrared", "Near Infrared"],
        "options_hi": ["नियर इन्फ्रारेड", "नियर इन्फ्रारेड", "नियर इन्फ्रारेड", "नियर इन्फ्रारेड"],
        "answer_en": "Near Infrared",
        "answer_hi": "नियर इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What does SWIR stand for in cartography?",
        "question_hi": "कार्टोग्राफी में SWIR का पूरा नाम क्या है?",
        "options_en": ["Short Wave Infrared", "Short Wave Infrared", "Short Wave Infrared", "Short Wave Infrared"],
        "options_hi": ["शॉर्ट वेव इन्फ्रारेड", "शॉर्ट वेव इन्फ्रारेड", "शॉर्ट वेव इन्फ्रारेड", "शॉर्ट वेव इन्फ्रारेड"],
        "answer_en": "Short Wave Infrared",
        "answer_hi": "शॉर्ट वेव इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the full form of MIR in cartography?",
        "question_hi": "कार्टोग्राफी में MIR का पूरा नाम क्या है?",
        "options_en": ["Mid Infrared", "Mid Infrared", "Mid Infrared", "Mid Infrared"],
        "options_hi": ["मिड इन्फ्रारेड", "मिड इन्फ्रारेड", "मिड इन्फ्रारेड", "मिड इन्फ्रारेड"],
        "answer_en": "Mid Infrared",
        "answer_hi": "मिड इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What does TIR stand for in cartography?",
        "question_hi": "कार्टोग्राफी में TIR का पूरा नाम क्या है?",
        "options_en": ["Thermal Infrared", "Thermal Infrared", "Thermal Infrared", "Thermal Infrared"],
        "options_hi": ["थर्मल इन्फ्रारेड", "थर्मल इन्फ्रारेड", "थर्मल इन्फ्रारेड", "थर्मल इन्फ्रारेड"],
        "answer_en": "Thermal Infrared",
        "answer_hi": "थर्मल इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the full form of VIS in cartography?",
        "question_hi": "कार्टोग्राफी में VIS का पूरा नाम क्या है?",
        "options_en": ["Visible", "Visible", "Visible", "Visible"],
        "options_hi": ["विजिबल", "विजिबल", "विजिबल", "विजिबल"],
        "answer_en": "Visible",
        "answer_hi": "विजिबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What does UV stand for in cartography?",
        "question_hi": "कार्टोग्राफी में UV का पूरा नाम क्या है?",
        "options_en": ["Ultraviolet", "Ultraviolet", "Ultraviolet", "Ultraviolet"],
        "options_hi": ["अल्ट्रावायलेट", "अल्ट्रावायलेट", "अल्ट्रावायलेट", "अल्ट्रावायलेट"],
        "answer_en": "Ultraviolet",
        "answer_hi": "अल्ट्रावायलेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the full form of GCP in cartography?",
        "question_hi": "कार्टोग्राफी में GCP का पूरा नाम क्या है?",
        "options_en": ["Ground Control Point", "Ground Control Point", "Ground Control Point", "Ground Control Point"],
        "options_hi": ["ग्राउंड कंट्रोल पॉइंट", "ग्राउंड कंट्रोल पॉइंट", "ग्राउंड कंट्रोल पॉइंट", "ग्राउंड कंट्रोल पॉइंट"],
        "answer_en": "Ground Control Point",
        "answer_hi": "ग्राउंड कंट्रोल पॉइंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What does DEM stand for in topography?",
        "question_hi": "टोपोग्राफी में DEM का पूरा नाम क्या है?",
        "options_en": ["Digital Elevation Model", "Digital Elevation Map", "Digital Elevation Measurement", "Digital Elevation Method"],
        "options_hi": ["डिजिटल ऊंचाई मॉडल", "डिजिटल ऊंचाई मानचित्र", "डिजिटल ऊंचाई माप", "डिजिटल ऊंचाई विधि"],
        "answer_en": "Digital Elevation Model",
        "answer_hi": "डिजिटल ऊंचाई मॉडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the full form of DTM in topography?",
        "question_hi": "टोपोग्राफी में DTM का पूरा नाम क्या है?",
        "options_en": ["Digital Terrain Model", "Digital Terrain Map", "Digital Terrain Measurement", "Digital Terrain Method"],
        "options_hi": ["डिजिटल भू-भाग मॉडल", "डिजिटल भू-भाग मानचित्र", "डिजिटल भू-भाग माप", "डिजिटल भू-भाग विधि"],
        "answer_en": "Digital Terrain Model",
        "answer_hi": "डिजिटल भू-भाग मॉडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What does DSM stand for in topography?",
        "question_hi": "टोपोग्राफी में DSM का पूरा नाम क्या है?",
        "options_en": ["Digital Surface Model", "Digital Surface Map", "Digital Surface Measurement", "Digital Surface Method"],
        "options_hi": ["डिजिटल सतह मॉडल", "डिजिटल सतह मानचित्र", "डिजिटल सतह माप", "डिजिटल सतह विधि"],
        "answer_en": "Digital Surface Model",
        "answer_hi": "डिजिटल सतह मॉडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the full form of LIDAR in topography?",
        "question_hi": "टोपोग्राफी में LIDAR का पूरा नाम क्या है?",
        "options_en": ["Light Detection and Ranging", "Light Detection and Ranging", "Light Detection and Ranging", "Light Detection and Ranging"],
        "options_hi": ["लाइट डिटेक्शन एंड रेंजिंग", "लाइट डिटेक्शन एंड रेंजिंग", "लाइट डिटेक्शन एंड रेंजिंग", "लाइट डिटेक्शन एंड रेंजिंग"],
        "answer_en": "Light Detection and Ranging",
        "answer_hi": "लाइट डिटेक्शन एंड रेंजिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What does RADAR stand for in topography?",
        "question_hi": "टोपोग्राफी में RADAR का पूरा नाम क्या है?",
        "options_en": ["Radio Detection and Ranging", "Radio Detection and Ranging", "Radio Detection and Ranging", "Radio Detection and Ranging"],
        "options_hi": ["रेडियो डिटेक्शन एंड रेंजिंग", "रेडियो डिटेक्शन एंड रेंजिंग", "रेडियो डिटेक्शन एंड रेंजिंग", "रेडियो डिटेक्शन एंड रेंजिंग"],
        "answer_en": "Radio Detection and Ranging",
        "answer_hi": "रेडियो डिटेक्शन एंड रेंजिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the full form of SONAR in topography?",
        "question_hi": "टोपोग्राफी में SONAR का पूरा नाम क्या है?",
        "options_en": ["Sound Navigation and Ranging", "Sound Navigation and Ranging", "Sound Navigation and Ranging", "Sound Navigation and Ranging"],
        "options_hi": ["साउंड नेविगेशन एंड रेंजिंग", "साउंड नेविगेशन एंड रेंजिंग", "साउंड नेविगेशन एंड रेंजिंग", "साउंड नेविगेशन एंड रेंजिंग"],
        "answer_en": "Sound Navigation and Ranging",
        "answer_hi": "साउंड नेविगेशन एंड रेंजिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What does NDVI stand for in topography?",
        "question_hi": "टोपोग्राफी में NDVI का पूरा नाम क्या है?",
        "options_en": ["Normalized Difference Vegetation Index", "Normalized Difference Vegetation Index", "Normalized Difference Vegetation Index", "Normalized Difference Vegetation Index"],
        "options_hi": ["सामान्यीकृत अंतर वनस्पति सूचकांक", "सामान्यीकृत अंतर वनस्पति सूचकांक", "सामान्यीकृत अंतर वनस्पति सूचकांक", "सामान्यीकृत अंतर वनस्पति सूचकांक"],
        "answer_en": "Normalized Difference Vegetation Index",
        "answer_hi": "सामान्यीकृत अंतर वनस्पति सूचकांक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the full form of NIR in topography?",
        "question_hi": "टोपोग्राफी में NIR का पूरा नाम क्या है?",
        "options_en": ["Near Infrared", "Near Infrared", "Near Infrared", "Near Infrared"],
        "options_hi": ["नियर इन्फ्रारेड", "नियर इन्फ्रारेड", "नियर इन्फ्रारेड", "नियर इन्फ्रारेड"],
        "answer_en": "Near Infrared",
        "answer_hi": "नियर इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What does SWIR stand for in topography?",
        "question_hi": "टोपोग्राफी में SWIR का पूरा नाम क्या है?",
        "options_en": ["Short Wave Infrared", "Short Wave Infrared", "Short Wave Infrared", "Short Wave Infrared"],
        "options_hi": ["शॉर्ट वेव इन्फ्रारेड", "शॉर्ट वेव इन्फ्रारेड", "शॉर्ट वेव इन्फ्रारेड", "शॉर्ट वेव इन्फ्रारेड"],
        "answer_en": "Short Wave Infrared",
        "answer_hi": "शॉर्ट वेव इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the full form of MIR in topography?",
        "question_hi": "टोपोग्राफी में MIR का पूरा नाम क्या है?",
        "options_en": ["Mid Infrared", "Mid Infrared", "Mid Infrared", "Mid Infrared"],
        "options_hi": ["मिड इन्फ्रारेड", "मिड इन्फ्रारेड", "मिड इन्फ्रारेड", "मिड इन्फ्रारेड"],
        "answer_en": "Mid Infrared",
        "answer_hi": "मिड इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What does TIR stand for in topography?",
        "question_hi": "टोपोग्राफी में TIR का पूरा नाम क्या है?",
        "options_en": ["Thermal Infrared", "Thermal Infrared", "Thermal Infrared", "Thermal Infrared"],
        "options_hi": ["थर्मल इन्फ्रारेड", "थर्मल इन्फ्रारेड", "थर्मल इन्फ्रारेड", "थर्मल इन्फ्रारेड"],
        "answer_en": "Thermal Infrared",
        "answer_hi": "थर्मल इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the full form of VIS in topography?",
        "question_hi": "टोपोग्राफी में VIS का पूरा नाम क्या है?",
        "options_en": ["Visible", "Visible", "Visible", "Visible"],
        "options_hi": ["विजिबल", "विजिबल", "विजिबल", "विजिबल"],
        "answer_en": "Visible",
        "answer_hi": "विजिबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What does UV stand for in topography?",
        "question_hi": "टोपोग्राफी में UV का पूरा नाम क्या है?",
        "options_en": ["Ultraviolet", "Ultraviolet", "Ultraviolet", "Ultraviolet"],
        "options_hi": ["अल्ट्रावायलेट", "अल्ट्रावायलेट", "अल्ट्रावायलेट", "अल्ट्रावायलेट"],
        "answer_en": "Ultraviolet",
        "answer_hi": "अल्ट्रावायलेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the full form of GCP in topography?",
        "question_hi": "टोपोग्राफी में GCP का पूरा नाम क्या है?",
        "options_en": ["Ground Control Point", "Ground Control Point", "Ground Control Point", "Ground Control Point"],
        "options_hi": ["ग्राउंड कंट्रोल पॉइंट", "ग्राउंड कंट्रोल पॉइंट", "ग्राउंड कंट्रोल पॉइंट", "ग्राउंड कंट्रोल पॉइंट"],
        "answer_en": "Ground Control Point",
        "answer_hi": "ग्राउंड कंट्रोल पॉइंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What does DEM stand for in geomorphology?",
        "question_hi": "जियोमोर्फोलॉजी में DEM का पूरा नाम क्या है?",
        "options_en": ["Digital Elevation Model", "Digital Elevation Map", "Digital Elevation Measurement", "Digital Elevation Method"],
        "options_hi": ["डिजिटल ऊंचाई मॉडल", "डिजिटल ऊंचाई मानचित्र", "डिजिटल ऊंचाई माप", "डिजिटल ऊंचाई विधि"],
        "answer_en": "Digital Elevation Model",
        "answer_hi": "डिजिटल ऊंचाई मॉडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the full form of DTM in geomorphology?",
        "question_hi": "जियोमोर्फोलॉजी में DTM का पूरा नाम क्या है?",
        "options_en": ["Digital Terrain Model", "Digital Terrain Map", "Digital Terrain Measurement", "Digital Terrain Method"],
        "options_hi": ["डिजिटल भू-भाग मॉडल", "डिजिटल भू-भाग मानचित्र", "डिजिटल भू-भाग माप", "डिजिटल भू-भाग विधि"],
        "answer_en": "Digital Terrain Model",
        "answer_hi": "डिजिटल भू-भाग मॉडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What does DSM stand for in geomorphology?",
        "question_hi": "जियोमोर्फोलॉजी में DSM का पूरा नाम क्या है?",
        "options_en": ["Digital Surface Model", "Digital Surface Map", "Digital Surface Measurement", "Digital Surface Method"],
        "options_hi": ["डिजिटल सतह मॉडल", "डिजिटल सतह मानचित्र", "डिजिटल सतह माप", "डिजिटल सतह विधि"],
        "answer_en": "Digital Surface Model",
        "answer_hi": "डिजिटल सतह मॉडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the full form of LIDAR in geomorphology?",
        "question_hi": "जियोमोर्फोलॉजी में LIDAR का पूरा नाम क्या है?",
        "options_en": ["Light Detection and Ranging", "Light Detection and Ranging", "Light Detection and Ranging", "Light Detection and Ranging"],
        "options_hi": ["लाइट डिटेक्शन एंड रेंजिंग", "लाइट डिटेक्शन एंड रेंजिंग", "लाइट डिटेक्शन एंड रेंजिंग", "लाइट डिटेक्शन एंड रेंजिंग"],
        "answer_en": "Light Detection and Ranging",
        "answer_hi": "लाइट डिटेक्शन एंड रेंजिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What does RADAR stand for in geomorphology?",
        "question_hi": "जियोमोर्फोलॉजी में RADAR का पूरा नाम क्या है?",
        "options_en": ["Radio Detection and Ranging", "Radio Detection and Ranging", "Radio Detection and Ranging", "Radio Detection and Ranging"],
        "options_hi": ["रेडियो डिटेक्शन एंड रेंजिंग", "रेडियो डिटेक्शन एंड रेंजिंग", "रेडियो डिटेक्शन एंड रेंजिंग", "रेडियो डिटेक्शन एंड रेंजिंग"],
        "answer_en": "Radio Detection and Ranging",
        "answer_hi": "रेडियो डिटेक्शन एंड रेंजिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the full form of SONAR in geomorphology?",
        "question_hi": "जियोमोर्फोलॉजी में SONAR का पूरा नाम क्या है?",
        "options_en": ["Sound Navigation and Ranging", "Sound Navigation and Ranging", "Sound Navigation and Ranging", "Sound Navigation and Ranging"],
        "options_hi": ["साउंड नेविगेशन एंड रेंजिंग", "साउंड नेविगेशन एंड रेंजिंग", "साउंड नेविगेशन एंड रेंजिंग", "साउंड नेविगेशन एंड रेंजिंग"],
        "answer_en": "Sound Navigation and Ranging",
        "answer_hi": "साउंड नेविगेशन एंड रेंजिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What does NDVI stand for in geomorphology?",
        "question_hi": "जियोमोर्फोलॉजी में NDVI का पूरा नाम क्या है?",
        "options_en": ["Normalized Difference Vegetation Index", "Normalized Difference Vegetation Index", "Normalized Difference Vegetation Index", "Normalized Difference Vegetation Index"],
        "options_hi": ["सामान्यीकृत अंतर वनस्पति सूचकांक", "सामान्यीकृत अंतर वनस्पति सूचकांक", "सामान्यीकृत अंतर वनस्पति सूचकांक", "सामान्यीकृत अंतर वनस्पति सूचकांक"],
        "answer_en": "Normalized Difference Vegetation Index",
        "answer_hi": "सामान्यीकृत अंतर वनस्पति सूचकांक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the full form of NIR in geomorphology?",
        "question_hi": "जियोमोर्फोलॉजी में NIR का पूरा नाम क्या है?",
        "options_en": ["Near Infrared", "Near Infrared", "Near Infrared", "Near Infrared"],
        "options_hi": ["नियर इन्फ्रारेड", "नियर इन्फ्रारेड", "नियर इन्फ्रारेड", "नियर इन्फ्रारेड"],
        "answer_en": "Near Infrared",
        "answer_hi": "नियर इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What does SWIR stand for in geomorphology?",
        "question_hi": "जियोमोर्फोलॉजी में SWIR का पूरा नाम क्या है?",
        "options_en": ["Short Wave Infrared", "Short Wave Infrared", "Short Wave Infrared", "Short Wave Infrared"],
        "options_hi": ["शॉर्ट वेव इन्फ्रारेड", "शॉर्ट वेव इन्फ्रारेड", "शॉर्ट वेव इन्फ्रारेड", "शॉर्ट वेव इन्फ्रारेड"],
        "answer_en": "Short Wave Infrared",
        "answer_hi": "शॉर्ट वेव इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the full form of MIR in geomorphology?",
        "question_hi": "जियोमोर्फोलॉजी में MIR का पूरा नाम क्या है?",
        "options_en": ["Mid Infrared", "Mid Infrared", "Mid Infrared", "Mid Infrared"],
        "options_hi": ["मिड इन्फ्रारेड", "मिड इन्फ्रारेड", "मिड इन्फ्रारेड", "मिड इन्फ्रारेड"],
        "answer_en": "Mid Infrared",
        "answer_hi": "मिड इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What does TIR stand for in geomorphology?",
        "question_hi": "जियोमोर्फोलॉजी में TIR का पूरा नाम क्या है?",
        "options_en": ["Thermal Infrared", "Thermal Infrared", "Thermal Infrared", "Thermal Infrared"],
        "options_hi": ["थर्मल इन्फ्रारेड", "थर्मल इन्फ्रारेड", "थर्मल इन्फ्रारेड", "थर्मल इन्फ्रारेड"],
        "answer_en": "Thermal Infrared",
        "answer_hi": "थर्मल इन्फ्रारेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the full form of VIS in geomorphology?",
        "question_hi": "जियोमोर्फोलॉजी में VIS का पूरा नाम क्या है?",
        "options_en": ["Visible", "Visible", "Visible", "Visible"],
        "options_hi": ["विजिबल", "विजिबल", "विजिबल", "विजिबल"],
        "answer_en": "Visible",
        "answer_hi": "विजिबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What does UV stand for in geomorphology?",
        "question_hi": "जियोमोर्फोलॉजी में UV का पूरा नाम क्या है?",
        "options_en": ["Ultraviolet", "Ultraviolet", "Ultraviolet", "Ultraviolet"],
        "options_hi": ["अल्ट्रावायलेट", "अल्ट्रावायलेट", "अल्ट्रावायलेट", "अल्ट्रावायलेट"],
        "answer_en": "Ultraviolet",
        "answer_hi": "अल्ट्रावायलेट",
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