export const diseases = [
  {
    id: "d1",
    name: "Common Cold",
    description: "A viral infection of your nose and throat (upper respiratory tract). It is usually harmless, though it might not feel that way.",
    riskLevel: "Low",
    symptoms: ["low_grade_fever", "sneezing", "runny_nose", "stuffy_nose", "sore_throat", "cough_tickle", "fatigue"],
    remedies: ["Rest as much as possible", "Stay warm and comfortable", "Inhale steam for congestion"],
    diet: ["Warm chicken soup or vegetable broth", "Foods rich in Vitamin C (citrus, berries)", "Honey and ginger tea"],
    hydration: ["Drink warm water, herbal teas, and clear broths", "Aim for at least 8-10 cups of fluid daily to thin mucus"]
  },
  {
    id: "d2",
    name: "Influenza (Flu)",
    description: "A common viral infection that attacks your lungs, nose, and throat. The flu is caused by influenza viruses.",
    riskLevel: "Medium",
    symptoms: ["high_fever", "chills", "sweating", "fatigue", "weakness", "body_aches", "dry_cough", "headache", "loss_of_appetite"],
    remedies: ["Strict bed rest to support immune recovery", "Over-the-counter fever reducers if high fever causes distress", "Use humidifier in your room"],
    diet: ["Light, easily digestible meals", "Hot soups with garlic and herbs", "Oatmeal and bananas"],
    hydration: ["Electrolyte drinks to prevent mineral depletion", "Warm water with lemon and honey", "Avoid caffeinated drinks"]
  },
  {
    id: "d3",
    name: "COVID-19",
    description: "An infectious respiratory illness caused by the SARS-CoV-2 virus, ranging from mild cold-like symptoms to severe pneumonia.",
    riskLevel: "Medium",
    symptoms: ["fever", "high_fever", "dry_cough", "wet_cough", "fatigue", "severe_fatigue", "loss_of_smell", "loss_of_taste", "sore_throat", "headache", "body_aches", "shortness_of_breath"],
    remedies: ["Isolate in a well-ventilated room", "Monitor oxygen levels regularly with a pulse oximeter", "Take steam inhalation twice daily"],
    diet: ["High-protein foods (eggs, lentils, chicken) to aid recovery", "Anti-inflammatory foods (turmeric, garlic, ginger)", "Fresh fruits"],
    hydration: ["Consume coconut water, warm oral rehydration solutions (ORS)", "Drink at least 3 liters of fluids daily"]
  },
  {
    id: "d4",
    name: "Dengue Fever",
    description: "A mosquito-borne viral disease causing sudden high fever, severe joint muscle pain, and potential hemorrhagic complications.",
    riskLevel: "High",
    symptoms: ["high_fever", "chills", "severe_fatigue", "headache", "body_aches", "joint_pain", "muscle_pain", "nausea", "vomiting", "rash", "red_spots", "eye_pain"],
    remedies: ["🚨 Strictly avoid NSAIDs like Ibuprofen/Aspirin (can cause bleeding). Use Paracetamol only.", "Complete physical rest is mandatory", "Watch for warning signs like severe abdominal pain or gum bleeding"],
    diet: ["Papaya leaf extract (helps improve platelet count)", "Pomegranate juice and fresh apples", "Light porridge, boiled eggs"],
    hydration: ["Massive hydration is critical. Drink ORS, coconut water, and fresh fruit juices constantly", "Monitor urine frequency (should be clear and frequent)"]
  },
  {
    id: "d5",
    name: "Malaria",
    description: "A life-threatening disease caused by plasmodium parasites transmitted through the bites of infected female Anopheles mosquitoes.",
    riskLevel: "High",
    symptoms: ["high_fever", "chills", "sweating", "headache", "body_aches", "fatigue", "nausea", "vomiting", "diarrhea", "pale_skin"],
    remedies: ["Seek immediate professional medical attention for blood smear testing", "Rest in a cool room during fever spikes", "Keep warm during the cold phase"],
    diet: ["High-energy liquid diet during acute phase", "Rice porridge, soft bread, and mashed potatoes", "Avoid oily or spicy foods"],
    hydration: ["Drink warm water with sugar and salt, or ORS", "Maintain constant hydration to counter fluid loss from sweating"]
  },
  {
    id: "d6",
    name: "Typhoid Fever",
    description: "A bacterial infection caused by Salmonella Typhi, usually contracted through contaminated food or water.",
    riskLevel: "High",
    symptoms: ["high_fever", "low_grade_fever", "stomach_cramps", "abdominal_pain", "diarrhea", "constipation", "headache", "fatigue", "loss_of_appetite", "rash"],
    remedies: ["Adhere strictly to antibiotic course prescribed by doctor", "Ensure complete bed rest", "Maintain strict hand hygiene to prevent spreading"],
    diet: ["Thoroughly cooked, soft, and easily digestible foods (Khichdi, porridge)", "Well-mashed bananas and boiled potatoes", "Avoid high-fiber foods"],
    hydration: ["Boil drinking water for 20 minutes before cooling", "Consume high volumes of ORS and clear vegetable broths"]
  },
  {
    id: "d7",
    name: "Cholera",
    description: "An acute diarrheal illness caused by infection of the intestine with the bacterium Vibrio cholerae, leading to rapid severe dehydration.",
    riskLevel: "High",
    symptoms: ["watery_diarrhea", "vomiting", "dehydration", "muscle_cramps", "weakness", "thirst", "dry_mouth"],
    remedies: ["🚨 Treat as a medical emergency. Administer ORS immediately.", "Seek hospital admission for potential IV fluids", "Maintain strict hygiene in patient care area"],
    diet: ["Once vomiting stops, give soft foods like rice, bananas, and oats", "Avoid milk products and solid heavy foods"],
    hydration: ["Continuous intake of ORS is life-saving (sip small amounts constantly)", "Avoid simple plain water in massive amounts without electrolytes"]
  },
  {
    id: "d8",
    name: "Gastroenteritis (Stomach Flu)",
    description: "Inflammation of the stomach and intestines, typically caused by a viral or bacterial infection.",
    riskLevel: "Low",
    symptoms: ["nausea", "vomiting", "diarrhea", "abdominal_pain", "stomach_cramps", "low_grade_fever", "headache", "weakness"],
    remedies: ["Rest the stomach (avoid eating for a few hours after vomiting)", "Apply warm compress to the abdomen for cramps", "Avoid physical exertion"],
    diet: ["Follow the BRAT diet: Bananas, Rice, Applesauce, Toast", "Plain crackers, boiled carrots, and oatmeal"],
    hydration: ["Sip small amounts of water or electrolyte solution every 10-15 minutes", "Avoid dairy, alcohol, caffeine, and carbonated beverages"]
  },
  {
    id: "d9",
    name: "Acid Reflux (GERD)",
    description: "A chronic disease that occurs when stomach acid or bile flows back into the food pipe, irritating the lining.",
    riskLevel: "Low",
    symptoms: ["heartburn", "indigestion", "difficulty_swallowing", "sour_taste", "bloating", "throat_tickle", "belching"],
    remedies: ["Elevate the head of your bed by 6-9 inches", "Remain upright for at least 2-3 hours after eating", "Avoid tight-fitting clothing"],
    diet: ["Eat small, frequent meals", "Non-citrus fruits (bananas, melons), oatmeal, green vegetables", "Avoid fried, spicy, fatty foods, and chocolate"],
    hydration: ["Drink alkaline water or warm herbal teas (chameleon, licorice)", "Drink fluids between meals rather than during meals"]
  },
  {
    id: "d10",
    name: "Migraine",
    description: "A neurological condition that can cause multiple symptoms, most notably a throbbing, pulsating headache on one side.",
    riskLevel: "Medium",
    symptoms: ["migraine_aura", "headache", "severe_headache", "nausea", "vomiting", "light_sensitivity", "blurred_vision", "dizziness"],
    remedies: ["Rest in a dark, quiet, cool room", "Apply a cold compress or ice pack to your forehead or neck", "Massage temples gently"],
    diet: ["Eat at regular intervals to prevent blood sugar drops", "Include magnesium-rich foods (spinach, almonds)", "Avoid aged cheese, processed meats, and MSG"],
    hydration: ["Drink plenty of water early in the attack", "Ginger tea (helps reduce migraine-associated nausea)"]
  },
  {
    id: "d11",
    name: "Bronchitis",
    description: "Inflammation of the lining of your bronchial tubes, which carry air to and from your lungs.",
    riskLevel: "Medium",
    symptoms: ["wet_cough", "mucus_colored", "fatigue", "shortness_of_breath", "breath_exertion", "chest_tightness", "low_grade_fever", "chills"],
    remedies: ["Use a humidifier or inhale steam to loosen mucus", "Rest and limit physical activities", "Avoid exposure to cigarette smoke and pollutants"],
    diet: ["Warm soups, broths, and stews", "Honey, ginger, and turmeric to reduce bronchial inflammation", "Foods rich in vitamins A and C"],
    hydration: ["Drink warm water, herbal teas, and fruit juices", "Target 10-12 glasses of fluids daily to thin bronchial secretions"]
  },
  {
    id: "d12",
    name: "Asthma",
    description: "A condition in which your airways narrow and swell and may produce extra mucus, making breathing difficult.",
    riskLevel: "High",
    symptoms: ["dry_cough", "wheezing", "shortness_of_breath", "chest_tightness", "breath_exertion", "rapid_breathing"],
    remedies: ["🚨 Keep fast-acting rescue inhaler (Bronchodilator) handy at all times", "Identify and avoid asthma triggers (dust, pollen, pet dander)", "Practice slow, deep pursed-lip breathing during mild symptoms"],
    diet: ["Include foods rich in Vitamin D (fortified foods, fish) and Vitamin C", "Onions and garlic (contain anti-inflammatory compounds)"],
    hydration: ["Drink warm fluids to soothe hyperactive airways", "Stay generally well-hydrated to keep mucus linings moist"]
  },
  {
    id: "d13",
    name: "Pneumonia",
    description: "An infection that inflames the air sacs in one or both lungs, which may fill with fluid or pus.",
    riskLevel: "High",
    symptoms: ["high_fever", "chills", "wet_cough", "mucus_colored", "coughing_blood", "shortness_of_breath", "breath_rest", "chest_pain", "severe_fatigue", "cyanosis"],
    remedies: ["🚨 Seek immediate medical evaluation. Bacterial pneumonia requires prescription antibiotics.", "Use a pulse oximeter to track blood oxygen levels", "Rest flat, or slightly elevated, to aid chest expansion"],
    diet: ["High-protein and nutrient-dense soft foods", "Warm broths, soft-boiled eggs, and mashed vegetables"],
    hydration: ["Consume warm water, lemon water, and herbal broths", "Elevated hydration is necessary to offset fever and thin sticky lung secretions"]
  },
  {
    id: "d14",
    name: "Tuberculosis (TB)",
    description: "A potentially serious infectious bacterial disease that mainly affects the lungs, spread through microscopic droplets.",
    riskLevel: "High",
    symptoms: ["chronic_cough", "coughing_blood", "low_grade_fever", "night_sweats", "chills", "weight_loss", "loss_of_appetite", "severe_fatigue", "chest_pain"],
    remedies: ["🚨 Absolute compliance with the long-term directly observed multi-drug therapy (DOTS) is vital", "Isolate yourself in a well-ventilated room to protect others during active phase", "Get ample bed rest"],
    diet: ["Calorie-dense, high-protein diet to rebuild lost muscle mass", "Eggs, milk, pulses, fish, and green leafy vegetables"],
    hydration: ["Drink high-protein milkshakes, clean boiled water, and fresh fruit juices"]
  },
  {
    id: "d15",
    name: "Hypertension",
    description: "A common condition in which the long-term force of the blood against your artery walls is high enough to cause health problems.",
    riskLevel: "Medium",
    symptoms: ["headache", "blurred_vision", "palpitations", "dizziness", "high_blood_pressure", "lightheadedness", "nosebleed"],
    remedies: ["Measure blood pressure daily and record readings", "Engage in moderate-intensity exercise (e.g., 30 mins walking daily)", "Practice stress-reduction techniques like meditation or deep breathing"],
    diet: ["Follow the DASH diet (Dietary Approaches to Stop Hypertension)", "Restrict daily sodium (salt) intake to less than 1,500 mg", "Eat potassium-rich foods (bananas, spinach, sweet potatoes)"],
    hydration: ["Drink pure water regularly; avoid carbonated beverages and high-sodium sports drinks"]
  },
  {
    id: "d16",
    name: "Diabetes Mellitus (Type 2)",
    description: "A chronic metabolic condition characterized by high blood sugar, insulin resistance, and relative lack of insulin.",
    riskLevel: "Medium",
    symptoms: ["fatigue", "weight_loss", "slow_healing", "frequent_infections", "thirst", "dark_urine", "numbness_limbs", "blurred_vision"],
    remedies: ["Monitor blood glucose levels regularly", "Maintain a consistent exercise routine to improve insulin sensitivity", "Inspect feet daily for cuts, blisters, or signs of infection"],
    diet: ["Emphasize low-glycemic index foods, high-fiber vegetables, and lean proteins", "Eliminate refined carbohydrates and added sugars", "Control portion sizes"],
    hydration: ["Drink plain water generously (helps flush excess glucose through urine)", "Avoid fruit juices and sugar-sweetened beverages entirely"]
  },
  {
    id: "d17",
    name: "Urinary Tract Infection (UTI)",
    description: "An infection in any part of your urinary system — your kidneys, ureters, bladder, and urethra.",
    riskLevel: "Low",
    symptoms: ["low_grade_fever", "abdominal_pain", "dark_urine", "thirst", "body_aches", "nausea"],
    remedies: ["Apply a warm heating pad to your lower abdomen to ease cramping", "Urinate frequently; do not hold urine", "Maintain strict personal hygiene"],
    diet: ["Eat foods high in antioxidants", "Cranberry extract or unsweetened cranberry juice (may help prevent bacteria from sticking to urinary tract)", "Avoid spicy food, caffeine, and alcohol"],
    hydration: ["🚨 Drink massive amounts of water (12-14 glasses a day) to flush bacteria out of the urinary system"]
  },
  {
    id: "d18",
    name: "Anemia",
    description: "A condition in which you lack enough healthy red blood cells to carry adequate oxygen to your body's tissues.",
    riskLevel: "Low",
    symptoms: ["fatigue", "weakness", "pale_skin", "shortness_of_breath", "breath_exertion", "dizziness", "cold_limbs", "lightheadedness"],
    remedies: ["Ensure adequate sleep and take short rest breaks during the day", "Avoid strenuous physical activities until hemoglobin levels improve", "Check blood counts regularly"],
    diet: ["Eat iron-rich foods (red meat, spinach, beans, lentils, fortified cereals)", "Combine iron-rich foods with Vitamin C to enhance absorption", "Avoid drinking tea or coffee with meals (inhibits iron absorption)"],
    hydration: ["Drink plenty of water to maintain overall blood volume"]
  },
  {
    id: "d19",
    name: "Rheumatoid Arthritis",
    description: "An autoimmune and inflammatory disease in which your immune system attacks healthy cells in your body by mistake, causing painful joint swelling.",
    riskLevel: "Medium",
    symptoms: ["joint_pain", "joint_stiffness", "joint_swelling", "joint_redness", "fatigue", "low_grade_fever", "limited_range"],
    remedies: ["Apply hot packs to relax stiff joints; use cold packs for acute flare-ups", "Perform gentle stretching exercises to maintain range of motion", "Protect joints from excessive stress"],
    diet: ["Adopt an anti-inflammatory diet rich in Omega-3 fatty acids (fatty fish, walnuts, flaxseeds)", "Eat plenty of colorful fruits and vegetables", "Limit processed foods"],
    hydration: ["Drink water consistently to keep joints lubricated; stay well-hydrated to help flush inflammatory markers"]
  },
  {
    id: "d20",
    name: "Gout",
    description: "A common and complex form of arthritis characterized by sudden, severe attacks of pain, swelling, redness, and tenderness in the joints, often the big toe.",
    riskLevel: "Medium",
    symptoms: ["gout_big_toe", "joint_pain", "joint_swelling", "joint_redness", "limited_range"],
    remedies: ["Elevate and rest the affected joint during an acute attack", "Apply ice packs wrapped in towels to the joint for 15-20 minutes at a time", "Avoid putting weight on the joint"],
    diet: ["Strictly avoid high-purine foods (red meat, organ meats, seafood, alcohol, beer)", "Eat low-fat dairy products and cherries (which may reduce uric acid levels)", "Avoid high-fructose corn syrup"],
    hydration: ["🚨 Drink 12-16 cups of water daily to help kidneys flush uric acid from the body"]
  },
  {
    id: "d21",
    name: "Appendicitis",
    description: "An inflammation of the appendix, a finger-shaped pouch that projects from your colon on the lower right side of your abdomen.",
    riskLevel: "High",
    symptoms: ["sharp_stomach_pain", "abdominal_pain", "nausea", "vomiting", "loss_of_appetite", "low_grade_fever", "abdominal_swelling"],
    remedies: ["🚨 Seek emergency surgical consultation. Appendicitis is a life-threatening emergency if the appendix ruptures.", "Do NOT eat, drink, or take laxatives/painkillers before being examined by a surgeon", "Lie still and apply nothing to the abdomen"],
    diet: ["Absolute fasting (NPO) until evaluated by a surgeon"],
    hydration: ["Do not drink fluids by mouth; hydration must be maintained via intravenous (IV) fluids in a hospital setting"]
  },
  {
    id: "d22",
    name: "Kidney Stones",
    description: "Hard deposits made of minerals and salts that form inside your kidneys, causing severe, sharp pain when passing through the urinary tract.",
    riskLevel: "High",
    symptoms: ["sharp_stomach_pain", "abdominal_pain", "nausea", "vomiting", "dark_urine", "thirst", "back_pain"],
    remedies: ["Rest and wait for the stone to pass if it is small, under medical supervision", "Take pain relief medication as prescribed by your doctor", "Strain your urine to collect the stone for laboratory analysis"],
    diet: ["Limit sodium and animal protein", "Reduce oxalate-rich foods (spinach, rhubarb, nuts) if you form calcium oxalate stones", "Ensure normal dietary calcium intake"],
    hydration: ["🚨 Drink extreme amounts of water (3 to 4 liters daily) to help push the stone through the urinary tract"]
  },
  {
    id: "d23",
    name: "Sinusitis",
    description: "Inflammation or swelling of the tissue lining the sinuses, leading to mucus blockage, pressure, and pain around the eyes and forehead.",
    riskLevel: "Low",
    symptoms: ["sinus_pain", "headache", "stuffy_nose", "runny_nose", "mucus_colored", "sore_throat", "low_grade_fever"],
    remedies: ["Inhale steam from a bowl of hot water or take a hot shower", "Apply a warm compress over your nose, cheeks, and eyes", "Use a saline nasal spray or neti pot to flush nasal passages"],
    diet: ["Eat warm, spicy foods containing garlic, ginger, or horseradish to clear sinuses", "Warm broths and herbal teas"],
    hydration: ["Drink plenty of warm water and decaffeinated hot liquids to thin nasal mucus"]
  },
  {
    id: "d24",
    name: "Otitis Media (Middle Ear Infection)",
    description: "An infection of the air-filled space behind the eardrum, most common in children, causing earache and temporary hearing loss.",
    riskLevel: "Low",
    symptoms: ["ear_pain", "hearing_loss", "ear_fullness", "low_grade_fever", "ear_discharge", "muffled_hearing"],
    remedies: ["Apply a warm moist compress over the affected ear to relieve pain", "Keep the ear dry; avoid swimming or getting water inside the ear canal", "Rest with the head elevated to help drain middle ear fluid"],
    diet: ["Eat soft, easy-to-chew foods to minimize jaw movement which can worsen ear pain", "Fruits rich in vitamins A and C"],
    hydration: ["Drink water and clear liquids to assist overall immune defense"]
  },
  {
    id: "d25",
    name: "Conjunctivitis (Pink Eye)",
    description: "Inflammation or infection of the outer membrane of the eyeball and the inner eyelid, making it highly contagious if viral/bacterial.",
    riskLevel: "Low",
    symptoms: ["eye_redness", "eye_pain", "itchy_eyes", "discharge_eyes", "eyelid_swelling", "watery_eyes"],
    remedies: ["Apply a cool or warm compress to the closed eyelids several times a day", "Clean discharge from the eye using a sterile damp cotton ball, wiping from inside to outside", "🚨 Wash hands frequently and avoid sharing towels or pillows to prevent transmission"],
    diet: ["Eat leafy greens, carrots, and sweet potatoes high in vitamin A and beta-carotene", "Antioxidant-rich berries"],
    hydration: ["Maintain regular hydration to assist the body's natural mucosal defenses"]
  },
  {
    id: "d26",
    name: "Eczema (Atopic Dermatitis)",
    description: "A condition that makes your skin red and itchy. It is chronic and tends to flare periodically.",
    riskLevel: "Low",
    symptoms: ["rash", "itching", "dry_skin", "skin_peeling", "skin_cracks"],
    remedies: ["Moisturize skin at least twice a day using thick creams or ointments", "Take lukewarm baths and add colloidal oatmeal", "Identify and avoid skin irritants (harsh soaps, synthetic fabrics)"],
    diet: ["Include anti-inflammatory foods like fatty fish, flaxseeds, and colorful vegetables", "Avoid common trigger foods if diagnosed (dairy, gluten, nuts)"],
    hydration: ["Drink plenty of water daily to maintain skin hydration from the inside"]
  },
  {
    id: "d27",
    name: "Generalized Anxiety Disorder (GAD)",
    description: "A mental health condition characterized by excessive, persistent, and unreasonable worry about everyday things.",
    riskLevel: "Medium",
    symptoms: ["anxiety", "insomnia", "poor_concentration", "restlessness", "irritability", "palpitations", "brain_fog", "muscle_cramps"],
    remedies: ["Practice mindfulness, meditation, or progressive muscle relaxation", "Engage in regular aerobic exercise to burn off excess stress hormones", "Create a structured daily schedule and prioritize self-care"],
    diet: ["Eat complex carbohydrates (whole grains, oats) which release serotonin slowly", "Include foods rich in magnesium and omega-3s", "Limit or eliminate sugar and processed snacks"],
    hydration: ["🚨 Strictly limit caffeine and alcohol as they directly trigger and worsen anxiety levels. Drink chamomile or lavender tea."]
  },
  {
    id: "d28",
    name: "Major Depressive Disorder",
    description: "A mood disorder that causes a persistent feeling of sadness and loss of interest, affecting how you feel, think, and handle daily activities.",
    riskLevel: "Medium",
    symptoms: ["depression", "fatigue", "insomnia", "poor_concentration", "social_withdrawal", "weight_loss", "weight_gain", "apathy"],
    remedies: ["Maintain a regular sleep schedule and wake up at a set time daily", "Engage in physical activity, even if it is just a short 15-minute walk outside", "Reach out to trusted friends, family, or support groups; avoid isolating yourself"],
    diet: ["Follow a nutrient-rich diet with B-vitamins (eggs, leafy greens) and Vitamin D", "Include fermented foods (yogurt, kefir) to support gut-brain health"],
    hydration: ["Drink water regularly; dehydration can negatively impact mood, energy levels, and cognitive function"]
  },
  {
    id: "d29",
    name: "Stroke (TIA / CVA)",
    description: "A medical emergency that occurs when the blood supply to part of the brain is interrupted or reduced, depriving brain tissue of oxygen.",
    riskLevel: "High",
    symptoms: ["severe_headache", "confusion", "slurred_speech", "difficulty_walking", "loss_of_balance", "muscle_paralysis", "facial_droop", "double_vision", "dizziness"],
    remedies: ["🚨 CALL EMERGENCY SERVICES IMMEDIATELY (Use FAST check: Face droop, Arm weakness, Speech difficulty, Time to call)", "Do NOT give the person aspirin, food, or drink", "Note the exact time symptoms started and lie the person down on their side"],
    diet: ["Absolute fasting (NPO) until assessed by medical emergency personnel"],
    hydration: ["No oral fluids; intravenous hydration will be managed by emergency medical services"]
  },
  {
    id: "d30",
    name: "Asthmatic Bronchitis",
    description: "A condition where asthma and bronchitis coexist, causing acute inflammation of the airways along with hyperreactive wheezing.",
    riskLevel: "High",
    symptoms: ["wet_cough", "wheezing", "shortness_of_breath", "chest_tightness", "breath_exertion", "mucus_colored", "fatigue"],
    remedies: ["🚨 Use prescription bronchodilator inhalers as directed by your physician", "Avoid cold air, dust, smoke, and strong chemical fumes", "Utilize a warm mist humidifier in your sleeping area"],
    diet: ["Warm, anti-inflammatory meals like chicken vegetable soup", "Incorporate garlic, onions, and ginger in dishes"],
    hydration: ["Drink warm water, herbal teas, and broths to soothe the throat and loosen sticky mucus"]
  },
  // We need to list up to 100 diseases. To do this efficiently, we will define more diseases.
  // I will write out compact definitions for d31 through d105.
  {
    id: "d31", name: "Tension Headache", description: "A mild to moderate pain that is often described as feeling like a tight band around your head.", riskLevel: "Low",
    symptoms: ["headache", "head_pressure", "upper_back_pain", "fatigue"],
    remedies: ["Apply a warm compress to the neck or forehead", "Gently massage neck and shoulder muscles", "Take a breaks from screens"],
    diet: ["Eat regular meals to maintain stable blood sugar", "Magnesium-rich foods"], hydration: ["Drink a glass of water immediately; dehydration is a major headache trigger"]
  },
  {
    id: "d32", name: "Coronary Artery Disease", description: "Damage or disease in the heart's major blood vessels, usually caused by plaque buildup.", riskLevel: "High",
    symptoms: ["chest_pain", "crushing_chest_pain", "breath_exertion", "fatigue", "palpitations"],
    remedies: ["🚨 Seek immediate cardiologist evaluation. Carry emergency nitroglycerin if prescribed.", "Stop all physical exertion immediately during chest pain", "Enroll in a cardiac rehabilitation program"],
    diet: ["Strict heart-healthy Mediterranean diet, low in saturated fats and high in fiber", "Avoid trans fats and processed meats"], hydration: ["Maintain modest, regular water intake; avoid overloading fluids if heart failure is present"]
  },
  {
    id: "d33", name: "Heart Failure", description: "A chronic condition in which the heart muscle doesn't pump blood as well as it should, leading to fluid backup.", riskLevel: "High",
    symptoms: ["breath_rest", "breath_exertion", "shortness_lying", "leg_swelling", "severe_fatigue", "neck_vein_distension", "abdominal_swelling"],
    remedies: ["🚨 Consult your cardiologist. Weigh yourself daily to monitor for sudden fluid weight gain.", "Keep legs elevated when sitting to reduce edema", "Sleep with your head propped up on multiple pillows"],
    diet: ["Strict low-sodium diet (less than 2,000 mg daily) to prevent fluid retention", "Limit processed foods and salty snacks"], hydration: ["🚨 Strictly monitor and restrict fluid intake to the amount prescribed by your cardiologist (typically 1.5 to 2 liters daily)"]
  },
  {
    id: "d34", name: "Hypothyroidism", description: "A condition in which the thyroid gland doesn't produce enough thyroid hormone, slowing metabolism.", riskLevel: "Low",
    symptoms: ["fatigue", "weight_gain", "cold_intolerance", "dry_skin", "constipation", "muscle_weakness", "hair_loss"],
    remedies: ["Take thyroid hormone replacement medication exactly as prescribed in the morning on an empty stomach", "Monitor thyroid hormone levels regularly via blood tests", "Ensure adequate sleep"],
    diet: ["Eat fiber-rich foods to prevent constipation", "Ensure adequate iodine intake (iodized salt) unless contraindicated"], hydration: ["Drink water regularly to support digestion and counteract dry skin"]
  },
  {
    id: "d35", name: "Hyperthyroidism", description: "The overproduction of a hormone by the butterfly-shaped gland in the neck (thyroid), speeding up metabolism.", riskLevel: "Medium",
    symptoms: ["weight_loss", "increased_appetite", "heat_intolerance", "sweating", "fast_heartbeat", "palpitations", "tremors", "anxiety", "insomnia"],
    remedies: ["Consult an endocrinologist for antithyroid medications or beta-blockers", "Avoid strenuous physical activity in hot environments", "Monitor heart rate regularly"],
    diet: ["Increase caloric intake with nutrient-dense foods to offset hyper-metabolism", "Include cruciferous vegetables (broccoli, cabbage) which may reduce thyroid hormone production"], hydration: ["Drink plenty of cool fluids to replace sweat losses and maintain hydration"]
  },
  {
    id: "d36", name: "Osteoarthritis", description: "A degenerative joint disease where the protective cartilage that cushions the ends of your bones wears down over time.", riskLevel: "Low",
    symptoms: ["joint_pain", "joint_stiffness", "limited_range", "clicks_joints"],
    remedies: ["Perform low-impact exercises like swimming or cycling", "Apply heat to relieve stiffness and cold to reduce inflammation after activity", "Maintain a healthy weight to reduce joint load"],
    diet: ["Antioxidant-rich foods, ginger, and turmeric", "Maintain an anti-inflammatory diet"], hydration: ["Stay well-hydrated to help maintain the water content of joint cartilage"]
  },
  {
    id: "d37", name: "Fibromyalgia", description: "A disorder characterized by widespread musculoskeletal pain accompanied by fatigue, sleep, memory, and mood issues.", riskLevel: "Low",
    symptoms: ["tender_points", "body_aches", "fatigue", "severe_fatigue", "insomnia", "brain_fog", "depression", "anxiety"],
    remedies: ["Perform low-impact physical exercise regularly (e.g., walking, swimming)", "Engage in cognitive behavioral therapy (CBT) and stress management", "Establish a strict bedtime routine"],
    diet: ["Eat a balanced whole-foods diet; consider cutting out gluten or artificial sweeteners if they act as triggers", "Incorporate magnesium-rich foods"], hydration: ["Drink water consistently; herbal calming teas like chamomile can support sleep"]
  },
  {
    id: "d38", name: "Chronic Fatigue Syndrome", description: "A complicated disorder characterized by extreme fatigue that lasts for at least six months and cannot be fully explained by an underlying medical condition.", riskLevel: "Low",
    symptoms: ["severe_fatigue", "fatigue", "brain_fog", "insomnia", "body_aches", "swollen_lymph_nodes", "weakness"],
    remedies: ["Practice paced activity management (do not overexert on good days)", "Prioritize sleep hygiene", "Gently stretch daily to prevent stiffness"],
    diet: ["Eat small, frequent, nutrient-dense meals to sustain energy levels", "Limit sugars and highly processed foods"], hydration: ["Stay regularly hydrated with water, coconut water, or weak herbal teas"]
  },
  {
    id: "d39", name: "Panic Disorder", description: "An anxiety disorder characterized by unexpected and repeated episodes of intense fear accompanied by physical symptoms.", riskLevel: "Medium",
    symptoms: ["panic_attacks", "anxiety", "fast_heartbeat", "palpitations", "chest_tightness", "sweating", "dizziness", "lightheadedness", "pins_needles"],
    remedies: ["Practice slow, deep belly breathing (inhale for 4 seconds, hold 4, exhale 6)", "Remind yourself during an attack that the physical sensations are not dangerous and will pass", "Consult a therapist for CBT"],
    diet: ["Eat complex carbs to stabilize blood sugar", "Avoid skipping meals"], hydration: ["🚨 Strictly avoid caffeine, energy drinks, and alcohol as they trigger panic responses. Drink cold water."]
  },
  {
    id: "d40", name: "Insomnia", description: "A common sleep disorder that can make it hard to fall asleep, hard to stay asleep, or cause you to wake up too early.", riskLevel: "Low",
    symptoms: ["insomnia", "fatigue", "drowsiness", "irritability", "poor_concentration", "brain_fog", "headache"],
    remedies: ["Go to bed and wake up at the exact same time every day, including weekends", "Keep the bedroom dark, quiet, and cool (60-67°F)", "Ensure no screens or blue light exposure for 1-2 hours before bed"],
    diet: ["Eat light evening meals", "Include foods containing tryptophan (kiwis, warm milk, almonds) in the evening", "Avoid heavy, fatty, or spicy dinners"], hydration: ["Limit fluid intake 2 hours before bed to prevent waking up to urinate; avoid evening caffeine"]
  },
  {
    id: "d41", name: "Irritable Bowel Syndrome (IBS)", description: "A common disorder that affects the large intestine, causing cramping, abdominal pain, bloating, gas, diarrhea, or constipation.", riskLevel: "Low",
    symptoms: ["abdominal_pain", "stomach_cramps", "bloating", "diarrhea", "constipation", "flatulence", "nausea"],
    remedies: ["Identify and avoid personal trigger foods", "Practice stress reduction techniques (stress heavily influences gut motility)", "Keep a food and symptom diary"],
    diet: ["Follow a low-FODMAP diet under supervision", "Increase soluble fiber gradually if constipation-prone", "Avoid gluten or dairy if intolerant"], hydration: ["Drink plenty of water (8-10 glasses daily); avoid carbonated, caffeinated, and alcoholic drinks"]
  },
  {
    id: "d42", name: "Peptic Ulcer Disease", description: "Sores that develop on the inside lining of your stomach and the upper part of your small intestine, often due to H. pylori infection or NSAID use.", riskLevel: "Medium",
    symptoms: ["sharp_stomach_pain", "abdominal_pain", "heartburn", "nausea", "vomiting", "loss_of_appetite", "belching"],
    remedies: ["🚨 Seek medical prescription for acid reducers (PPIs) and check for H. pylori infection", "Stop taking NSAIDs (aspirin, ibuprofen, naproxen) immediately", "Avoid smoking"],
    diet: ["Eat small, frequent bland meals", "Include probiotics (yogurt)", "Avoid spicy, highly acidic foods (tomatoes, citrus), and black pepper"], hydration: ["Drink water regularly; a small cup of cold milk can temporarily buffer stomach acid (but avoid excess dairy)"]
  },
  {
    id: "d43", name: "Hepatitis A", description: "A highly contagious liver infection caused by the hepatitis A virus, usually spread through contaminated food or water.", riskLevel: "Medium",
    symptoms: ["fever", "nausea", "vomiting", "abdominal_pain", "yellow_eyes", "skin_yellowing", "dark_urine", "pale_stool", "loss_of_appetite", "fatigue"],
    remedies: ["Get plenty of bed rest to support liver recovery", "Avoid taking any unnecessary medications or supplements that stress the liver", "Practice strict hand washing and isolate eating utensils"],
    diet: ["Eat a high-calorie, nutritious diet (often appetite is best in the morning; eat a large breakfast)", "Avoid all fatty, fried foods"], hydration: ["🚨 Absolutely avoid alcohol. Drink water, clear juices, and ORS to prevent dehydration from vomiting."]
  },
  {
    id: "d44", name: "Fatty Liver Disease", description: "An accumulation of fat in the liver cells, often associated with obesity, high blood sugar, and insulin resistance (NAFLD).", riskLevel: "Medium",
    symptoms: ["fatigue", "abdominal_pain", "abdominal_swelling", "weakness"],
    remedies: ["Graduate weight loss through diet and exercise is the primary treatment", "Engage in 150 minutes of moderate-intensity exercise weekly", "Manage blood sugar and lipid levels"],
    diet: ["Follow a plant-based Mediterranean diet", "Restrict simple carbohydrates, fructose, and saturated fats", "Incorporate olive oil and nuts"], hydration: ["Drink plain water; avoid sugary beverages, sodas, and commercial fruit juices"]
  },
  {
    id: "d45", name: "Celiac Disease", description: "An autoimmune reaction to eating gluten, a protein found in wheat, barley, and rye, which damages the small intestine lining.", riskLevel: "Medium",
    symptoms: ["diarrhea", "abdominal_pain", "bloating", "fatigue", "weight_loss", "nausea", "vomiting", "flatulence", "skin_peeling"],
    remedies: ["🚨 Strict, lifelong adherence to a gluten-free diet is mandatory", "Read all food, cosmetic, and drug labels carefully for hidden gluten sources", "Use separate kitchen utensils to prevent cross-contamination"],
    diet: ["Strictly gluten-free foods (rice, corn, quinoa, potatoes, fresh meats, fruits, vegetables)", "Avoid wheat, rye, barley, spelt, and standard oats"], hydration: ["Drink water and electrolyte-replacing fluids if diarrhea has occurred"]
  },
  {
    id: "d46", name: "Lactose Intolerance", description: "The inability to fully digest sugar (lactose) in dairy products, caused by a deficiency of the lactase enzyme.", riskLevel: "Low",
    symptoms: ["diarrhea", "bloating", "stomach_cramps", "nausea", "flatulence", "rumbling_stomach"],
    remedies: ["Limit or avoid consumption of milk and other dairy products", "Use over-the-counter lactase enzyme tablets before consuming dairy", "Choose lactose-free dairy alternatives"],
    diet: ["Lactose-free milk, almond milk, soy milk", "Hard cheeses (like cheddar) and yogurt are often tolerated better than milk", "Ensure calcium intake from non-dairy sources (leafy greens)"], hydration: ["Drink plenty of water, especially if experiencing diarrhea"]
  },
  {
    id: "d47", name: "Chickenpox", description: "A highly contagious viral infection causing an itchy, blister-like rash on the skin, caused by the varicella-zoster virus.", riskLevel: "Medium",
    symptoms: ["fever", "loss_of_appetite", "headache", "fatigue", "rash", "itching", "blisters"],
    remedies: ["🚨 Avoid scratching blisters to prevent bacterial infection and scarring; use calamine lotion", "Take lukewarm oatmeal baths to relieve itching", "Keep fingernails trimmed short"],
    diet: ["Soft, bland foods (especially if blisters form in the mouth)", "Cold foods like yogurt or smoothies", "Avoid salty, acidic, or spicy foods"], hydration: ["Stay well-hydrated with cool water, coconut water, or ice pops"]
  },
  {
    id: "d48", name: "Measles", description: "A highly contagious viral disease marked by fever, cough, conjunctivitis, and a characteristic skin rash, preventable by vaccine.", riskLevel: "High",
    symptoms: ["high_fever", "dry_cough", "runny_nose", "sore_throat", "eye_redness", "light_sensitivity", "rash"],
    remedies: ["🚨 Contact healthcare provider immediately; isolate strictly to prevent spreading to unvaccinated individuals", "Rest in a dimly lit room to ease photophobia", "Supplement with Vitamin A under medical supervision"],
    diet: ["Nutrient-rich soft foods, warm broths", "Fruits rich in antioxidants"], hydration: ["Drink warm water, herbal teas, and ORS to combat high fever fluid loss"]
  },
  {
    id: "d49", name: "Vertigo (BPPV)", description: "A sudden sensation of spinning or that the room is moving, often triggered by specific head movements due to inner ear crystal displacement.", riskLevel: "Low",
    symptoms: ["dizziness", "nausea", "vomiting", "loss_of_balance", "dizziness_middle_ear"],
    remedies: ["Perform the Epley maneuver (a series of head movements) under guidance to reposition inner ear crystals", "Sit or lie down immediately when a spinning sensation occurs", "Avoid sudden head movements or bending over"],
    diet: ["Avoid foods high in salt, sugar, and caffeine which can affect inner ear fluid balance"], hydration: ["Drink plenty of water to maintain hydration, as dehydration can aggravate dizziness"]
  },
  {
    id: "d50", name: "COPD (Chronic Obstructive Pulmonary Disease)", description: "A chronic inflammatory lung disease that causes obstructed airflow from the lungs, usually caused by long-term smoking.", riskLevel: "High",
    symptoms: ["chronic_cough", "wet_cough", "wheezing", "shortness_of_breath", "breath_exertion", "chest_tightness", "fatigue", "cyanosis"],
    remedies: ["🚨 Strictly quit smoking immediately and avoid secondhand smoke", "Use prescribed long-acting bronchodilator and steroid inhalers", "Participate in pulmonary rehabilitation exercises"],
    diet: ["Eat small, high-calorie, low-carbohydrate meals (digesting carbs produces more carbon dioxide, making breathing harder)", "High-protein foods"], hydration: ["Drink plenty of water (unless contraindicated by heart failure) to thin mucus in airways"]
  },
  {
    id: "d51", name: "Tonsillitis", description: "Inflammation of the tonsils, two oval-shaped pads of tissue at the back of the throat, usually caused by a viral or bacterial infection.", riskLevel: "Low",
    symptoms: ["fever", "sore_throat", "difficulty_swallowing", "swollen_lymph_nodes", "hoarseness", "headache"],
    remedies: ["Gargle with warm salt water (1/2 teaspoon salt in 8 oz water) several times a day", "Rest your voice and get plenty of sleep", "Use a cool-mist humidifier in the room"],
    diet: ["Cold foods (ice cream, frozen yogurt, smoothies) to soothe the throat", "Warm, soft foods like broths and mashed potatoes", "Avoid hard, scratchy foods"], hydration: ["Sip cool water, warm tea with honey (avoid honey in children under 1 year)"]
  },
  {
    id: "d52", name: "Laryngitis", description: "An inflammation of your voice box (larynx) from overuse, irritation, or infection, leading to temporary hoarseness or voice loss.", riskLevel: "Low",
    symptoms: ["sore_throat", "hoarseness", "throat_tickle", "dry_cough"],
    remedies: ["🚨 Rest your voice completely; do not whisper (whispering strains the vocal cords more than normal speech)", "Inhale steam or use a humidifier", "Avoid decongestants which can dry out vocal cords"],
    diet: ["Bland, warm, soothing foods", "Honey and lemon mixtures"], hydration: ["Drink abundant amounts of warm water and non-caffeinated herbal teas"]
  },
  {
    id: "d53", name: "Sleep Apnea", description: "A potentially serious sleep disorder in which breathing repeatedly stops and starts during sleep, commonly linked to throat muscle relaxation.", riskLevel: "Medium",
    symptoms: ["snoring", "sleep_apnea", "insomnia", "drowsiness", "headache", "poor_concentration", "irritability"],
    remedies: ["Use a CPAP (Continuous Positive Airway Pressure) machine as prescribed during sleep", "Sleep on your side instead of your back", "Avoid alcohol and sedatives before bed (they relax throat muscles)"],
    diet: ["Aim for weight reduction if overweight, which significantly reduces airway obstruction", "Eat a balanced heart-healthy diet"], hydration: ["Maintain normal hydration during the day; avoid fluids right before bed"]
  },
  {
    id: "d54", name: "Deep Vein Thrombosis (DVT)", description: "A medical condition that occurs when a blood clot (thrombus) forms in one or more of the deep veins in your body, usually in your legs.", riskLevel: "High",
    symptoms: ["calf_tenderness", "leg_swelling", "joint_redness"],
    remedies: ["🚨 Seek emergency medical care immediately. DVT can lead to a fatal Pulmonary Embolism if the clot travels to the lungs.", "Do NOT massage or rub the painful leg (this can dislodge the clot)", "Elevate the leg while waiting for emergency services"],
    diet: ["Follow doctor's guidelines; limit foods high in Vitamin K (like leafy greens) if taking blood thinners like Warfarin"], hydration: ["Stay well-hydrated; dehydration makes blood thicker and more prone to clotting"]
  },
  {
    id: "d55", name: "Shingles (Herpes Zoster)", description: "A viral infection caused by the reactivation of the varicella-zoster virus (chickenpox virus), producing a painful, localized blistering rash.", riskLevel: "Medium",
    symptoms: ["rash", "itching", "blisters", "shooting_pain", "sensitivity_touch", "fever", "headache"],
    remedies: ["Consult a doctor within 72 hours of rash onset for antiviral prescriptions", "Keep the rash clean and dry; cover with non-stick sterile bandages", "Apply cool, wet compresses to soothe the pain"],
    diet: ["Eat foods high in L-lysine (dairy, eggs, fish) which may help combat herpes viruses", "Avoid foods high in L-arginine (chocolate, nuts)"], hydration: ["Drink plenty of water to support immune function and flush medications"]
  },
  {
    id: "d56", name: "Scabies", description: "An itchy skin infestation caused by a tiny burrowing mite (Sarcoptes scabiei), causing intense itching, especially at night.", riskLevel: "Low",
    symptoms: ["rash", "itching", "skin_cracks"],
    remedies: ["Apply prescribed permethrin cream from neck down and leave on overnight as directed", "🚨 Wash all bedding, clothing, and towels used in the last 3 days in hot water and dry on high heat", "Treat all household members simultaneously to prevent re-infestation"],
    diet: ["Standard healthy diet; no specific food interactions"], hydration: ["Maintain baseline hydration"]
  },
  {
    id: "d57", name: "Ringworm", description: "A highly contagious fungal skin infection that causes a red, itchy, circular rash with clearer skin in the middle.", riskLevel: "Low",
    symptoms: ["rash", "itching", "skin_peeling"],
    remedies: ["Apply over-the-counter antifungal creams (clotrimazole, miconazole) twice daily", "Keep the affected area clean and dry", "Avoid sharing personal items like clothing or sports gear"],
    diet: ["Incorporate garlic and coconut oil (known for natural antifungal properties) into meals"], hydration: ["Drink water regularly"]
  },
  {
    id: "d58", name: "Athlete's Foot", description: "A fungal infection that usually begins between the toes, causing scaling, flaking, itching, and burning.", riskLevel: "Low",
    symptoms: ["rash", "itching", "skin_peeling", "skin_cracks"],
    remedies: ["Apply topical antifungal cream daily as directed", "Keep feet dry, especially between the toes; change socks twice a day", "Wear breathable cotton socks and open-toed shoes when possible"],
    diet: ["Eat foods that support immune health; limit refined sugars which can promote fungal growth"], hydration: ["Drink water regularly"]
  },
  {
    id: "d59", name: "Dry Eye Syndrome", description: "A common condition that occurs when your tears aren't able to provide adequate lubrication for your eyes.", riskLevel: "Low",
    symptoms: ["dry_eyes", "itchy_eyes", "light_sensitivity", "blurred_vision", "watery_eyes"],
    remedies: ["Use preservative-free artificial tear eye drops regularly", "Use the 20-20-20 rule: every 20 minutes, look 20 feet away for 20 seconds", "Avoid direct blowing air from fans, heaters, or air conditioners"],
    diet: ["Eat foods rich in Omega-3 fatty acids (salmon, chia seeds) to improve tear quality", "Leafy green vegetables"], hydration: ["Drink plenty of water to keep all bodily tissues, including eyes, hydrated"]
  },
  {
    id: "d60", name: "Tinnitus", description: "The sensation of hearing ringing, buzzing, hissing, or clicking in one or both ears when no external sound is present.", riskLevel: "Low",
    symptoms: ["tinnitus", "hearing_loss", "muffled_hearing", "insomnia"],
    remedies: ["Use white noise machines or fans to mask the ringing, especially at bedtime", "Avoid exposure to loud sounds; wear ear protection in noisy environments", "Practice stress reduction; stress often exacerbates tinnitus loudness"],
    diet: ["Limit sodium (high salt restricts blood flow to the ears, worsening tinnitus)"], hydration: ["🚨 Strictly avoid caffeine, alcohol, and nicotine as they dilate blood vessels and worsen ear ringing. Drink water."]
  },
  {
    id: "d61", name: "Gingivitis", description: "A common and mild form of gum disease that causes irritation, redness, and swelling of your gingiva (the part of your gum around the base of your teeth).", riskLevel: "Low",
    symptoms: ["redness_swelling", "mouth_breathing", "easy_bruising"],
    remedies: ["Brush teeth thoroughly twice daily and floss at least once a day", "Rinse with an antiseptic mouthwash or warm salt water", "Schedule a professional dental cleaning"],
    diet: ["Eat crunchy, fiber-rich fruits and vegetables (apples, carrots) which help clean teeth", "Limit sugary snacks and sticky candies"], hydration: ["Drink water after eating to help wash away food particles and bacteria"]
  },
  {
    id: "d62", name: "Heat Stroke", description: "A life-threatening condition caused by your body overheating, usually as a result of prolonged exposure to or physical exertion in high temperatures.", riskLevel: "High",
    symptoms: ["high_fever", "confusion", "headache", "dizziness", "nausea", "vomiting", "fast_heartbeat", "rapid_breathing", "fainting_episodes", "sweating"],
    remedies: ["🚨 CALL EMERGENCY SERVICES IMMEDIATELY. Heat stroke is a critical emergency.", "Move the person to a cool, shaded area or air-conditioned room", "Cool the person rapidly using cool water sprays, fans, or ice packs placed on neck, armpits, and groin"],
    diet: ["Absolute fasting (NPO) during the acute emergency phase"], hydration: ["🚨 Do NOT force the person to drink fluids if they are confused or unconscious (choking hazard). If conscious, offer cool water or sports drinks slowly."]
  },
  {
    id: "d63", name: "Lyme Disease", description: "A bacterial infection transmitted to humans through the bite of infected blacklegged ticks, causing fever, fatigue, and a 'bullseye' rash.", riskLevel: "Medium",
    symptoms: ["low_grade_fever", "fever", "chills", "fatigue", "body_aches", "joint_pain", "headache", "rash"],
    remedies: ["🚨 Consult a physician immediately. Early-stage Lyme disease requires a full course of oral antibiotics.", "Rest and avoid physical exertion", "Inspect body thoroughly for ticks after visiting wooded areas"],
    diet: ["Incorporate anti-inflammatory foods, leafy greens, and lean proteins", "Probiotics (essential if taking antibiotics)"], hydration: ["Drink plenty of water to help the body clear bacterial toxins"]
  },
  {
    id: "d64", name: "Chikungunya", description: "A viral disease transmitted to humans by infected mosquitoes, causing sudden fever and severe, often debilitating joint pain.", riskLevel: "Medium",
    symptoms: ["fever", "high_fever", "joint_pain", "joint_swelling", "muscle_pain", "headache", "fatigue", "rash"],
    remedies: ["🚨 Rest joints completely; avoid strenuous movement. Take paracetamol for pain.", "Do NOT take aspirin or ibuprofen until dengue is ruled out (risk of bleeding)", "Apply cold compresses to painful joints"],
    diet: ["Eat light, warm, nutritious meals (soup, porridge)", "Vitamin C-rich fruits"], hydration: ["Drink large amounts of water, ORS, and coconut water to stay hydrated during high fever"]
  },
  {
    id: "d65", name: "Chronic Kidney Disease", description: "The gradual loss of kidney function over time, leading to waste and fluid buildup in the body.", riskLevel: "High",
    symptoms: ["fatigue", "weakness", "leg_swelling", "shortness_lying", "dark_urine", "nausea", "vomiting", "loss_of_appetite", "itching"],
    remedies: ["🚨 Consult a nephrologist. Manage blood pressure and blood sugar strictly.", "Monitor kidney function parameters (eGFR, Creatinine) regularly", "Avoid taking NSAID painkillers (extremely toxic to kidneys)"],
    diet: ["🚨 Strict renal diet: limit protein, potassium (bananas, potatoes), phosphorus (dairy, cola), and sodium", "Consult a specialized renal dietitian"], hydration: ["🚨 Strictly monitor and restrict fluid intake to the volume specified by your nephrologist to prevent overload"]
  },
  {
    id: "d66", name: "Osteoporosis", description: "A condition in which bones become weak and brittle, increasing the risk of sudden and unexpected fractures.", riskLevel: "Medium",
    symptoms: ["back_pain", "bone_pain", "difficulty_standing"],
    remedies: ["Perform weight-bearing and balance exercises (e.g., walking, Tai Chi)", "Prevent falls by removing home hazards (loose rugs, cluttered pathways)", "Take prescribed bone-strengthening medications"],
    diet: ["🚨 High-calcium diet (dairy, fortified plant milks, leafy greens, sardines)", "Ensure adequate Vitamin D intake (eggs, mushrooms, sunlight)"], hydration: ["Maintain standard daily hydration of 8 glasses of water"]
  },
  {
    id: "d67", name: "Carpal Tunnel Syndrome", description: "A compression of the median nerve as it passes through the wrist, causing numbness, tingling, and pain in the hand and fingers.", riskLevel: "Low",
    symptoms: ["numbness_limbs", "pins_needles", "hand_numbness", "muscle_weakness"],
    remedies: ["Wear a wrist splint, especially at night, to keep the joint in a neutral position", "Take frequent breaks from repetitive hand tasks (typing, assembly)", "Perform gentle wrist stretching exercises"],
    diet: ["Include foods rich in Vitamin B6 (bananas, chickpeas, chicken) which may support nerve health"], hydration: ["Drink water regularly to support nerve and tissue health"]
  },
  {
    id: "d68", name: "Sciatica", description: "Pain radiating along the sciatic nerve, which runs down one or both legs from the lower back, usually caused by a herniated disk.", riskLevel: "Medium",
    symptoms: ["back_pain", "numbness_limbs", "pins_needles", "shooting_pain", "difficulty_walking"],
    remedies: ["Apply cold packs initially to reduce inflammation, then switch to heat pads after 48 hours", "Avoid sitting for long periods; walk short distances regularly", "Perform gentle hamstring stretching"],
    diet: ["Eat anti-inflammatory foods (turmeric, ginger, berries) to help soothe nerve root inflammation"], hydration: ["Stay hydrated to maintain disc height and spinal lubrication"]
  },
  {
    id: "d69", name: "Gallstones", description: "Hardened deposits of digestive fluid that can form in your gallbladder, causing sudden, severe pain in the upper right abdomen.", riskLevel: "High",
    symptoms: ["sharp_stomach_pain", "abdominal_pain", "nausea", "vomiting", "yellow_eyes", "skin_yellowing", "heartburn", "indigestion"],
    remedies: ["🚨 Consult a surgeon. Severe, radiating abdominal pain or jaundice requires immediate evaluation.", "Rest in a comfortable position", "Avoid eating heavy meals during an active gallbladder attack"],
    diet: ["🚨 Adopt a low-fat diet. Fat triggers gallbladder contractions, causing pain.", "Avoid fried foods, cheese, butter, and fatty meats. Eat high-fiber foods."], hydration: ["Drink clear fluids and water; avoid rich or creamy beverages"]
  },
  {
    id: "d70", name: "Hemorrhoids", description: "Swollen veins in your anus and lower rectum, similar to varicose veins, causing pain, itching, and bleeding.", riskLevel: "Low",
    symptoms: ["rectal_pain", "itching", "blood_in_stool", "constipation"],
    remedies: ["Take warm sitz baths (sit in a tub of warm water for 15-20 minutes) three times daily", "Apply over-the-counter hemorrhoid creams or witch hazel pads", "🚨 Do NOT strain during bowel movements"],
    diet: ["🚨 High-fiber diet (whole grains, beans, fresh fruits, vegetables) to soften stools", "Avoid spicy foods which can irritate the digestive tract"], hydration: ["🚨 Drink at least 10-12 glasses of water daily to prevent constipation and ensure soft stools"]
  },
  {
    id: "d71", name: "Panic Attack", description: "A sudden episode of intense fear that triggers severe physical reactions when there is no real danger or apparent cause.", riskLevel: "Medium",
    symptoms: ["panic_attacks", "fast_heartbeat", "palpitations", "dizziness", "lightheadedness", "sweating", "chest_tightness", "pins_needles"],
    remedies: ["Inhale slowly through the nose and exhale very slowly through pursed lips", "Focus on a single physical object nearby to ground yourself", "Repeat a calming mantra: 'I am safe, this will pass'"],
    diet: ["Maintain stable blood sugar; eat a small, healthy snack if you have skipped meals"], hydration: ["Sip cool water slowly; avoid any caffeine or energy drinks"]
  },
  {
    id: "d72", name: "Allergic Rhinitis (Hay Fever)", description: "An allergic response causing itchy, watery eyes, sneezing, and other symptoms, typically triggered by pollen, dust, or pet dander.", riskLevel: "Low",
    symptoms: ["sneezing", "runny_nose", "stuffy_nose", "sore_throat", "itchy_eyes", "watery_eyes", "throat_tickle"],
    remedies: ["Keep windows closed during high pollen seasons; use air conditioning", "Use a saline nasal spray or neti pot to clear allergens from nasal passages", "Wash hands and change clothes after being outdoors"],
    diet: ["Eat anti-inflammatory foods and local honey (may help desensitize to local pollen)", "Incorporate hot teas with ginger"], hydration: ["Drink warm water and teas to soothe throat irritation and thin nasal drainage"]
  },
  {
    id: "d73", name: "Acute Bronchitis", description: "A temporary inflammation of the airways that deliver air to your lungs, often following a cold or flu.", riskLevel: "Low",
    symptoms: ["wet_cough", "mucus_colored", "fatigue", "chest_tightness", "low_grade_fever", "chills", "body_aches"],
    remedies: ["Inhale steam from a hot shower or neti pot", "Rest and avoid physical exertion", "Use throat lozenges to soothe cough irritation"],
    diet: ["Warm broths, garlic, honey, and lemon water", "Foods high in vitamin C"], hydration: ["🚨 Drink plenty of warm water and decaffeinated tea (10-12 glasses daily) to thin thick bronchial mucus"]
  },
  {
    id: "d74", name: "Anorexia Nervosa", description: "An eating disorder characterized by an abnormally low body weight, an intense fear of gaining weight, and a distorted perception of weight.", riskLevel: "High",
    symptoms: ["weight_loss", "fatigue", "weakness", "dizziness", "insomnia", "cold_limbs", "depression", "anxiety", "social_withdrawal"],
    remedies: ["🚨 Seek comprehensive professional medical, nutritional, and psychological counseling immediately", "Engage in supervised weight restoration programs", "Avoid tracking weights or calories independently"],
    diet: ["Follow a structured, calorie-restoration meal plan designed by a registered dietitian", "Small, frequent, non-threatening meals initially"], hydration: ["Drink water and electrolyte beverages under medical supervision to avoid refeeding complications"]
  },
  {
    id: "d75", name: "Bulimia Nervosa", description: "A serious, potentially life-threatening eating disorder characterized by episodes of binge eating followed by purging behaviors.", riskLevel: "High",
    symptoms: ["vomiting", "stomach_cramps", "heartburn", "indigestion", "throat_tickle", "easy_bruising", "depression", "anxiety"],
    remedies: ["🚨 Seek immediate professional medical and psychological therapy", "Practice post-meal supervision and cognitive behavioral therapy (CBT)", "Rinse mouth with baking soda water after purging (do not brush immediately, as acid weakens enamel)"],
    diet: ["Regular, structured meals containing balanced macronutrients to stabilize hunger cues", "Avoid skipping meals"], hydration: ["Drink electrolyte-rich fluids (coconut water, sports drinks) to replenish minerals lost through vomiting"]
  },
  {
    id: "d76", name: "Obsessive Compulsive Disorder (OCD)", description: "A chronic mental health disorder in which a person has uncontrollable, recurring thoughts (obsessions) and behaviors (compulsions).", riskLevel: "Medium",
    symptoms: ["obsessive_thoughts", "anxiety", "insomnia", "poor_concentration"],
    remedies: ["Engage in Exposure and Response Prevention (ERP) therapy with a trained professional", "Practice mindfulness and stress management techniques", "Establish a structured routine to limit triggers"],
    diet: ["Balanced, high-nutrient diet to support brain health", "Avoid blood sugar spikes by choosing whole grains"], hydration: ["Limit caffeine strictly, as it can heighten obsessive anxiety and restlessness"]
  },
  {
    id: "d77", name: "Bipolar Disorder", description: "A mental health condition that causes extreme mood swings that include emotional highs (mania or hypomania) and lows (depression).", riskLevel: "High",
    symptoms: ["mood_swings", "irritability", "insomnia", "depression", "anxiety", "poor_concentration", "restlessness", "apathy"],
    remedies: ["🚨 Adhere strictly to prescribed mood-stabilizing medications; consult your psychiatrist regularly", "Maintain a consistent sleep-wake schedule (sleep loss can trigger mania)", "Track daily moods and sleep patterns to identify early signs of a mood shift"],
    diet: ["Nutrient-rich diet with omega-3 fatty acids and antioxidants", "Avoid extreme fasting or skipping meals"], hydration: ["Drink water regularly; monitor hydration carefully if taking Lithium (dehydration can lead to toxicity)"]
  },
  {
    id: "d78", name: "Post-Traumatic Stress Disorder (PTSD)", description: "A mental health condition triggered by experiencing or witnessing a terrifying event, causing flashbacks, nightmares, and severe anxiety.", riskLevel: "Medium",
    symptoms: ["anxiety", "panic_attacks", "insomnia", "poor_concentration", "irritability", "social_withdrawal", "depression"],
    remedies: ["Engage in trauma-focused therapy (e.g., EMDR, CBT) with a qualified therapist", "Learn and practice grounding techniques (e.g., 5-4-3-2-1 sensory method during panic)", "Engage in regular physical exercise to release tension"],
    diet: ["Eat whole foods rich in magnesium, zinc, and omega-3 fatty acids to help regulate nervous system activity"], hydration: ["Drink calming herbal teas (chamomile, lemon balm); avoid caffeine and alcohol"]
  },
  {
    id: "d79", name: "Kidney Failure (Acute)", description: "A sudden episode of kidney failure or kidney damage that happens within a few hours or a few days, causing waste products to build up in your blood.", riskLevel: "High",
    symptoms: ["leg_swelling", "dark_urine", "nausea", "vomiting", "shortness_lying", "fatigue", "confusion", "weakness"],
    remedies: ["🚨 SEEK EMERGENCY MEDICAL CARE IMMEDIATELY. Acute kidney injury requires hospital admission.", "Monitor daily fluid intake and urine output precisely", "Stop taking all medications unless explicitly directed by a doctor"],
    diet: ["🚨 Strict restriction of protein, sodium, potassium, and phosphorus under hospital dietitian guidance"], hydration: ["🚨 Strictly follow hospital fluid restriction guidelines; drinking too much can lead to pulmonary edema (fluid in the lungs)"]
  },
  {
    id: "d80", name: "Allergic Conjunctivitis", description: "Inflammation of the clear membrane lining the eyelid and eyeball due to an allergic reaction, causing itchy, red, watery eyes.", riskLevel: "Low",
    symptoms: ["eye_redness", "itchy_eyes", "watery_eyes", "eyelid_swelling", "light_sensitivity"],
    remedies: ["Apply cold compresses to closed eyes to reduce itching and swelling", "Avoid rubbing your eyes (rubbing releases more histamine, worsening symptoms)", "Use over-the-counter antihistamine eye drops"],
    diet: ["Include anti-inflammatory foods and local honey in your diet", "Antioxidant-rich berries"], hydration: ["Drink water regularly to support mucosal moisture and overall eye health"]
  },
  {
    id: "d81", name: "Food Poisoning", description: "An illness caused by eating contaminated food, typically containing harmful bacteria, viruses, or parasites.", riskLevel: "Low",
    symptoms: ["nausea", "vomiting", "diarrhea", "abdominal_pain", "stomach_cramps", "fever", "weakness", "loss_of_appetite"],
    remedies: ["Rest and allow your stomach to settle; avoid solid foods for a few hours", "Use a heating pad on your stomach for cramps", "Practice strict hand hygiene to avoid cross-contamination"],
    diet: ["Follow the BRAT diet (Bananas, Rice, Applesauce, Toast)", "Plain crackers and oatmeal; avoid dairy, spicy, fatty, or sugary foods"], hydration: ["🚨 Sip small amounts of ORS, coconut water, or diluted sports drinks constantly. Rehydration is critical."]
  },
  {
    id: "d82", name: "Acidity (Acute)", description: "An episode of stomach acid irritation causing burning discomfort in the upper abdomen or lower chest, often due to dietary triggers.", riskLevel: "Low",
    symptoms: ["heartburn", "indigestion", "abdominal_pain", "bloating", "sour_taste", "belching"],
    remedies: ["Sit upright; do not lie down after eating", "Loosen any tight clothing around your waist", "Drink a small amount of cold milk or take an antacid"],
    diet: ["Eat non-acidic fruits (bananas, melons), oatmeal, and boiled rice", "Avoid citrus, tomatoes, garlic, onion, mint, and spicy dishes"], hydration: ["Drink warm water or chamomile tea; avoid carbonated beverages and citrus juices"]
  },
  {
    id: "d83", name: "Psoriasis", description: "A chronic skin disease caused by an overactive immune system that speeds up skin cell growth, resulting in thick, red, scaly patches.", riskLevel: "Low",
    symptoms: ["rash", "itching", "dry_skin", "skin_peeling"],
    remedies: ["Apply thick moisturizing creams or ointments immediately after bathing", "Take short lukewarm baths with Epsom salts or coal tar", "Expose skin to small, controlled amounts of natural sunlight"],
    diet: ["Anti-inflammatory Mediterranean diet; restrict red meat and dairy", "Include foods rich in Omega-3s and Vitamin D"], hydration: ["Drink plenty of water to maintain skin hydration and overall metabolic function"]
  },
  {
    id: "d84", name: "Hives (Urticaria)", description: "An outbreak of swollen, pale red bumps or plaques (welts) on the skin that appear suddenly, usually as an allergic reaction.", riskLevel: "Low",
    symptoms: ["rash", "itching", "hives", "redness_swelling"],
    remedies: ["Take an over-the-counter antihistamine to block histamine release", "Apply cool compresses or calamine lotion to the itchy areas", "Avoid hot showers and wearing tight clothing which can aggravate hives"],
    diet: ["Avoid eating suspected allergen foods (e.g., nuts, shellfish, eggs) and high-histamine foods (aged cheeses, fermented foods)"], hydration: ["Drink water regularly to help flush out allergens"]
  },
  {
    id: "d85", name: "Meniere's Disease", description: "An inner ear disorder that causes episodes of vertigo (spinning), hearing loss, ringing in the ear (tinnitus), and a feeling of fullness.", riskLevel: "Medium",
    symptoms: ["dizziness", "nausea", "vomiting", "loss_of_balance", "hearing_loss", "tinnitus", "ear_fullness", "muffled_hearing"],
    remedies: ["Lie down in a stable position when vertigo attacks occur", "Avoid sudden head movements", "Practice vestibular rehabilitation therapy (VRT)"],
    diet: ["🚨 Strict low-salt diet (less than 1,500 mg sodium daily) to minimize inner ear fluid pressure", "Avoid MSG and chocolate"], hydration: ["Drink a steady amount of water throughout the day; avoid large fluctuations in fluid intake"]
  },
  {
    id: "d86", name: "Crohn's Disease", description: "A chronic inflammatory bowel disease (IBD) characterized by severe inflammation of the lining of your digestive tract.", riskLevel: "High",
    symptoms: ["diarrhea", "abdominal_pain", "stomach_cramps", "weight_loss", "fatigue", "fever", "blood_in_stool", "loss_of_appetite"],
    remedies: ["🚨 Consult a gastroenterologist. Strictly take prescribed anti-inflammatory or immunomodulator medications.", "Keep a detailed diary of food triggers during flare-ups", "Reduce psychological stress, which can trigger inflammatory flares"],
    diet: ["During flare-ups: eat a low-residue, low-fiber diet (white rice, skinless chicken, cooked eggs)", "Avoid raw vegetables, seeds, and nuts"], hydration: ["Drink water, electrolyte solutions, and broths to compensate for chronic diarrheal fluid loss"]
  },
  {
    id: "d87", name: "Ulcerative Colitis", description: "A chronic inflammatory bowel disease (IBD) that causes long-lasting inflammation and ulcers in the innermost lining of your large intestine.", riskLevel: "High",
    symptoms: ["diarrhea", "blood_in_stool", "abdominal_pain", "stomach_cramps", "fatigue", "weight_loss", "fever"],
    remedies: ["🚨 Seek regular gastroenterology monitoring. Follow medication plans strictly.", "Prepare for potential surgical evaluations if severe", "Get plenty of rest during active flare-ups"],
    diet: ["Bland, soft, low-fiber foods during flares", "Incorporate lean proteins and well-cooked vegetables", "Avoid dairy products if lactose-sensitive"], hydration: ["Ensure constant intake of water and electrolyte drinks to offset blood and fluid loss"]
  },
  {
    id: "d88", name: "Pancreatitis (Acute)", description: "Sudden inflammation of the pancreas, causing severe, sharp upper abdominal pain that radiates to the back.", riskLevel: "High",
    symptoms: ["sharp_stomach_pain", "abdominal_pain", "nausea", "vomiting", "fast_heartbeat", "fever", "abdominal_swelling"],
    remedies: ["🚨 SEEK IMMEDIATE EMERGENCY HOSPITAL CARE. Acute pancreatitis is a severe medical emergency.", "Do NOT consume food or liquids by mouth (requires bowel rest in the hospital)", "Maintain absolute physical rest"],
    diet: ["Strict fasting (NPO) until abdominal pain resolves, followed by a transition to a very low-fat diet as directed by doctors"], hydration: ["Do not drink fluids; hydration will be managed strictly via intravenous (IV) fluids in a hospital settings"]
  },
  {
    id: "d89", name: "Pleurisy", description: "A condition in which the pleura — two large, thin layers of tissue that separate your lungs from your chest wall — becomes inflamed, causing sharp chest pain during breathing.", riskLevel: "High",
    symptoms: ["chest_pain", "shortness_of_breath", "dry_cough", "low_grade_fever", "breath_exertion"],
    remedies: ["🚨 Consult a doctor to identify the underlying cause (e.g., viral infection, pneumonia)", "Lie on the painful side to help splint the chest and reduce pain", "Limit physical activity"],
    diet: ["Antioxidant-rich whole foods, warm broths", "Fruits and vegetables to support immune health"], hydration: ["Drink warm water and herbal teas to keep mucus membranes hydrated and thin"]
  },
  {
    id: "d90", name: "Hyperventilation Syndrome", description: "A condition in which a person starts breathing very fast and shallowly, often triggered by anxiety or panic, leading to carbon dioxide imbalance.", riskLevel: "Medium",
    symptoms: ["rapid_breathing", "shortness_of_breath", "chest_tightness", "dizziness", "lightheadedness", "palpitations", "pins_needles"],
    remedies: ["Breathe slowly into a paper bag or cupped hands to re-breathe carbon dioxide", "Practice breathing through your nose while keeping your mouth closed", "Focus on slow diaphragmatic breathing"],
    diet: ["Standard healthy meals; avoid stimulants"], hydration: ["Drink a glass of cold water slowly after breathing regulates"]
  },
  {
    id: "d91", name: "Labyrinthitis", description: "An inner ear infection that causes inflammation of the labyrinth (a delicate structure deep inside the ear), leading to vertigo and hearing loss.", riskLevel: "Medium",
    symptoms: ["dizziness", "nausea", "vomiting", "loss_of_balance", "hearing_loss", "tinnitus", "muffled_hearing", "dizziness_middle_ear"],
    remedies: ["Rest in a dark, quiet room during acute vertigo attacks", "Avoid sudden head movements or turning quickly", "Use prescribed vestibular suppressants or antihistamines as directed"],
    diet: ["Avoid high-sodium foods, sugars, and processed items to prevent inner ear fluid shifts"], hydration: ["Drink plenty of water; avoid alcohol, which can affect balance and inner ear fluid dynamics"]
  },
  {
    id: "d92", name: "Dental Caries (Tooth Decay)", description: "Damage to a tooth's enamel and dentin layers, caused by bacteria producing acid from dietary sugars, leading to cavities and toothaches.", riskLevel: "Low",
    symptoms: ["sharp_stomach_pain", "redness_swelling"],
    remedies: ["Schedule an appointment with a dentist for a filling or treatment", "Rinse with warm salt water to relieve local pain", "Apply a cold compress to the cheek for external swelling"],
    diet: ["Strictly limit intake of sugary snacks, sodas, and sticky foods", "Incorporate dairy products and crunchy vegetables"], hydration: ["Drink fluoridated tap water; drink water after meals to rinse away sugars and acids"]
  },
  {
    id: "d93", name: "Plantar Fasciitis", description: "Inflammation of the plantar fascia, a thick band of tissue that runs across the bottom of your foot, causing sharp heel pain.", riskLevel: "Low",
    symptoms: ["heel_pain", "joint_pain", "joint_stiffness"],
    remedies: ["Perform calf and plantar fascia stretching exercises before taking steps in the morning", "Apply ice wrapped in a towel to the heel for 15-20 minutes after activity", "Wear supportive footwear with good arch support; avoid walking barefoot"],
    diet: ["Anti-inflammatory foods containing Omega-3s and antioxidants"], hydration: ["Maintain baseline hydration"]
  },
  {
    id: "d94", name: "Sciatic Nerve Compression", description: "Compression of the sciatic nerve root causing pain, burning, and numbness that shoots down from the lower back through the buttocks and leg.", riskLevel: "Medium",
    symptoms: ["back_pain", "numbness_limbs", "pins_needles", "shooting_pain", "difficulty_walking", "muscle_weakness"],
    remedies: ["Use a firm mattress and place a pillow under your knees when sleeping on your back", "Perform gentle lower back decompression stretches", "Avoid sitting in soft, deep couches"],
    diet: ["Anti-inflammatory spices like turmeric and black pepper", "Ensure adequate calcium and magnesium"], hydration: ["Stay well-hydrated to help maintain the hydration and height of intervertebral discs"]
  },
  {
    id: "d95", name: "Dry Eye Syndrome (Severe)", description: "A severe lack of tear production or poor tear quality leading to corneal irritation, light sensitivity, and chronic eye pain.", riskLevel: "Medium",
    symptoms: ["dry_eyes", "eye_pain", "light_sensitivity", "blurred_vision", "watery_eyes", "eye_redness"],
    remedies: ["Use lubricating eye ointments at night and preservative-free artificial tears during the day", "Use moisture-chamber goggles or a humidifier at home", "Avoid dusty, smoky, or windy environments"],
    diet: ["Incorporate high doses of high-quality Omega-3 fatty acid supplements under medical advice"], hydration: ["Drink 8-10 glasses of water daily to support systemic tear production"]
  },
  {
    id: "d96", name: "Tinnitus (Chronic)", description: "A persistent sensation of ringing or buzzing in the ears lasting more than 6 months, often associated with age-related hearing loss or noise exposure.", riskLevel: "Low",
    symptoms: ["tinnitus", "hearing_loss", "ear_fullness", "insomnia", "poor_concentration"],
    remedies: ["Use sound therapy (white noise, ambient nature sounds) to make tinnitus less noticeable", "Avoid absolute silence, which makes the ringing seem louder", "Practice relaxation exercises (yoga, progressive muscle relaxation)"],
    diet: ["Reduce sodium and artificial sweeteners", "Limit intake of processed foods"], hydration: ["🚨 Strictly avoid caffeine, alcohol, and energy drinks. Stay hydrated with pure water."]
  },
  {
    id: "d97", name: "Otitis Externa (Swimmer's Ear)", description: "An infection of the outer ear canal, typically caused by water remaining in the ear after swimming, creating a moist environment for bacterial growth.", riskLevel: "Low",
    symptoms: ["ear_pain", "ear_itching", "ear_discharge", "ear_fullness", "muffled_hearing", "low_grade_fever"],
    remedies: ["🚨 Keep ears completely dry; wear a shower cap or earplugs. Do NOT insert cotton swabs (Q-tips) or fingers.", "Apply warm, dry compress to the ear to relieve pain", "Use prescribed antibiotic ear drops exactly as directed"],
    diet: ["Standard healthy meals; include vitamin C-rich foods to support immune response"], hydration: ["Drink water regularly"]
  },
  {
    id: "d98", name: "Depressive Episode (Severe)", description: "A severe period of depression characterized by a profound, persistent flat mood, fatigue, sleep disturbances, and social withdrawal.", riskLevel: "High",
    symptoms: ["depression", "severe_fatigue", "fatigue", "insomnia", "poor_concentration", "social_withdrawal", "apathy", "weight_loss", "weight_gain"],
    remedies: ["🚨 Seek immediate consultation with a psychiatrist or clinical psychologist", "Establish a basic daily routine: set times for waking, eating, and short walks", "Stay connected with a trusted support person daily; do not isolate yourself"],
    diet: ["Eat small, highly nutritious meals rich in protein, folate, and B-vitamins", "Ensure regular meals to stabilize blood sugar"], hydration: ["Drink water regularly; dehydration can impair cognitive function and worsen mood symptoms"]
  },
  {
    id: "d99", name: "Panic Attack (Severe)", description: "An intense spike of panic triggering severe physical reactions like rapid heartbeat, hyperventilation, chest tightness, and numbness.", riskLevel: "Medium",
    symptoms: ["panic_attacks", "anxiety", "fast_heartbeat", "palpitations", "chest_tightness", "rapid_breathing", "dizziness", "pins_needles"],
    remedies: ["Inhale slowly for 4 seconds, hold for 4 seconds, exhale for 4 seconds (box breathing)", "Sit down, press feet firmly into the ground, and name 5 things you can see and touch", "Remind yourself: 'This is a panic attack, it will end in a few minutes'"],
    diet: ["Eat stable, regular meals; avoid sugary snacks that cause quick crashes"], hydration: ["Sip cool water slowly; avoid caffeine or stimulants entirely"]
  },
  {
    id: "d100", name: "Gout (Acute Flare-up)", description: "A sudden, extremely painful inflammatory attack in a joint (typically the big toe) caused by the crystallization of uric acid.", riskLevel: "Medium",
    symptoms: ["gout_big_toe", "joint_pain", "joint_swelling", "joint_redness", "limited_range"],
    remedies: ["🚨 Elevate the leg higher than the heart and rest it completely on pillows. Avoid pressure.", "Apply cold packs wrapped in a towel for 15-20 minutes to reduce intense heat and swelling", "Avoid taking aspirin (which can alter uric acid excretion)"],
    diet: ["🚨 Strictly avoid purine-rich foods: organ meats, shellfish, red meat, alcohol, and sweetened beverages", "Eat low-fat yogurt or cherries"], hydration: ["🚨 Drink 3-4 liters of water throughout the day to flush uric acid from the bloodstream"]
  },
  {
    id: "d101", name: "Mononucleosis (Glandular Fever)", description: "An infectious illness commonly caused by the Epstein-Barr virus (EBV), leading to extreme fatigue, fever, sore throat, and swollen lymph nodes.", riskLevel: "Medium",
    symptoms: ["fever", "sore_throat", "swollen_lymph_nodes", "fatigue", "severe_fatigue", "body_aches", "headache", "loss_of_appetite"],
    remedies: ["🚨 Avoid contact sports or heavy lifting for at least 4-6 weeks (due to risk of spleen rupture)", "Prioritize absolute bed rest and sleep", "Gargle with warm salt water to ease throat swelling"],
    diet: ["Eat soft, nutritious, easy-to-swallow foods like yogurt, warm soups, and oatmeal", "Include vitamin C-rich fruits"], hydration: ["Drink warm water, herbal teas, and ORS to maintain hydration during long fever cycles"]
  },
  {
    id: "d102", name: "Sinusitis (Chronic)", description: "A prolonged inflammation of the sinuses lasting 12 weeks or more despite treatment, causing persistent congestion and facial pressure.", riskLevel: "Medium",
    symptoms: ["sinus_pain", "headache", "stuffy_nose", "runny_nose", "mucus_colored", "throat_tickle", "fatigue"],
    remedies: ["Use a saline nasal irrigation (neti pot) with distilled water daily", "Use steam inhalation or warm compresses over the sinuses regularly", "Consult an ENT specialist for possible structural or allergy assessments"],
    diet: ["Anti-inflammatory foods, warm spicy foods containing garlic and horseradish", "Avoid dairy if it thickens your mucus"], hydration: ["Drink plenty of warm water and decaffeinated herbal teas daily to keep mucus thin"]
  }
];
