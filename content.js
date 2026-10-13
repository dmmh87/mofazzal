/* =====================================================================
   WEBSITE CONTENT: Prof. M. Mofazzal Hossain
   This is the ONLY file you need to edit to change the website text.

   EASIEST WAY TO ADD A RESEARCH TOPIC (with pictures):
   open  https://YOUR-USERNAME.github.io/editor.html

   Editing this file directly on GitHub: open it, click the pencil
   icon, make your change, then click "Commit changes".

   Rules (the site goes blank if one is broken):
   - Keep text inside "double quotes". For a quote mark inside text,
     use curly quotes “ ” instead.
   - Every item in a list ends with a comma, except the last one.
   - true / false are written without quotes.
   If the site goes blank after an edit, open this file's "History" on
   GitHub, compare with the previous version, and fix the typo.

   Common tasks
   - Photo: upload a portrait named photo.jpg, then set "photo": "photo.jpg"
     (until then the site shows the initials).
   - New publication: copy one { ... } entry in "publications", paste it
     at the top of that list, edit it. Put **double asterisks** around
     the professor's name to show it in bold. "selected": true puts it on
     the homepage. "type" is one of: journal, conference, chapter.
     "doi" is optional; leave it out if there is none.
   - Pictures: upload the image file to the repository (same place as
     this file), then write its exact file name, e.g. "lab.jpg".
   - Gallery: add { "src": "photo-name.jpg", "caption": "..." } items to
     "gallery". The Gallery page appears once it has at least one item.
   - CV: upload the PDF next to this file, then set
     "cvPdf": "YOUR-FILE-NAME.pdf"
   - LinkedIn: paste the profile address into "linkedin".
   - Text written as [Information to be added] appears highlighted on
     the site until you replace it.
   ===================================================================== */

window.SITE = {
  "name": "Prof. M. Mofazzal Hossain, PhD",
  "shortName": "M. Mofazzal Hossain",
  "initials": "MH",
  "photo": "photo.jpg",
  "photoAlt": "Portrait of Professor M. Mofazzal Hossain",
  "headline": "Pro-Vice Chancellor, Southeast University",
  "eyebrow": "Electrical and Electronic Engineering",
  "tagline": "Electrical and electronic engineer working on renewable energy, photovoltaic device design and sustainable electrification, with over three decades of university teaching and academic leadership.",
  "positions": [
    "Pro-Vice Chancellor, Southeast University, Dhaka, Bangladesh",
    "Senior Member, IEEE"
  ],
  "intro": [
    "Professor M. Mofazzal Hossain is Pro-Vice Chancellor of Southeast University, Dhaka, and an electrical and electronic engineer with 32 years of teaching, research and administrative experience at universities in Bangladesh and abroad. He earned his M.Sc. and Ph.D. from Kanazawa University, Japan, where his doctoral research investigated pulse-modulated induction thermal plasma, and he continued this work as a JSPS Postdoctoral Fellow at the Tokyo Institute of Technology.",
    "His current research focuses on sustainable and renewable energy: the design and simulation of thin-film, multijunction and perovskite solar cells, IoT-based energy saving, the environmental and grid impacts of electric vehicles, and applications of machine learning in electrical engineering. He has served as Dean at East West University and the University of Liberal Arts Bangladesh, has led EEE, ECE and ETE departments, and has chaired BAETE evaluation teams for the accreditation of engineering programs."
  ],
  "glance": [
    [
      "32",
      "years of university teaching, research and administration"
    ],
    [
      "100+",
      "publications in journals, conferences and books"
    ],
    [
      "17",
      "postgraduate theses supervised (16 M.Sc., 1 Ph.D.)"
    ],
    [
      "130+",
      "undergraduate theses and projects supervised"
    ]
  ],
  "links": {
    "email": "hossain.mofazzal@seu.edu.bd",
    "email2": "provc@seu.edu.bd",
    "scholar": "https://shorturl.at/TLZvD",
    "orcid": "https://orcid.org/0000-0001-9679-3276",
    "scopus": "https://www.scopus.com/authid/detail.uri?authorId=54889166300",
    "university": "https://seu.edu.bd",
    "linkedin": "",
    "cvPdf": ""
  },
  "contact": {
    "lines": [
      "Office of the Pro-Vice Chancellor",
      "Southeast University",
      "Dhaka-1208, Bangladesh"
    ],
    "office": "[Information to be added]"
  },
  "researchIntro": "His research began in plasma technology during his doctoral and postdoctoral studies in Japan and has since moved toward sustainable clean energy: renewable energy harvesting, multijunction photovoltaic cell design, emerging solar cell materials, green hydrogen, the impacts of electric vehicles on the environment and the power grid, and sustainability. Much of this work combines numerical modeling and simulation with case studies drawn from Bangladesh.",
  "researchTopics": [
    {
      "id": "thin-film-multijunction-solar-cells",
      "title": "Thin-film and multijunction solar cells",
      "summary": "Design and simulation of high-efficiency thin-film and multijunction photovoltaic cells.",
      "description": "This work uses numerical tools such as SCAPS-1D to optimize layer thickness, doping and structure in CdTe, CIGS and tandem devices. Results include an ultra-thin CdS/CdTe p-i-n cell, embedding quantum wires in the intrinsic layer of p-i-n cells, and a perovskite/CIGS tandem design reaching a simulated conversion efficiency of 38.39%.",
      "images": []
    },
    {
      "id": "perovskite-solar-cells",
      "title": "Perovskite solar cells",
      "summary": "Lead-free and all-inorganic perovskite absorbers for efficient, more environmentally benign photovoltaics.",
      "description": "Studies include cesium-based inorganic perovskites such as CsGeI3, CsSnI3, CsSnGeI3 and Cs2SnI6, hetero-bilayer designs, metal-doped electron transport layers modeled with FDTD, and a topical review of perovskite materials, stability and environmental aspects.",
      "images": []
    },
    {
      "id": "electric-vehicles-sustainability",
      "title": "Electric vehicles and sustainable transportation",
      "summary": "The environmental, economic and grid impacts of electric vehicle adoption.",
      "description": "This line examines how electric vehicles could reduce emissions in Dhaka, models the environmental consequences of conventional and battery electric vehicle fleets, and studies consumer perceptions and challenges in adopting electric mobility.",
      "images": []
    },
    {
      "id": "energy-environment",
      "title": "Energy systems and environmental sustainability",
      "summary": "Assessing renewable energy deployment, emissions and energy policy questions in Bangladesh.",
      "description": "Projects include techno-economic and environmental analysis of a solar PV system at the Sher-e-Bangla National Cricket Stadium, greenhouse gas emissions and mitigation strategies for a university campus, rooftop solar feasibility, the levelized cost of wind energy in coastal Bangladesh, and the effects of COVID-19 lockdowns on electricity generation and the environment.",
      "images": []
    },
    {
      "id": "iot-energy-saving",
      "title": "IoT-based energy saving",
      "summary": "Connected embedded systems that reduce energy use in buildings and industry.",
      "description": "Work in this area includes cloud-assisted IoT systems for intelligent indoor lighting, air-quality monitoring and ventilation, early-stage fire detection, and energy-saving schemes for industrial and residential settings.",
      "images": []
    },
    {
      "id": "machine-learning-applications",
      "title": "Machine learning in electrical engineering",
      "summary": "Applying machine learning to power systems, sensing and health monitoring.",
      "description": "Examples include fast fault detection on HVAC transmission lines, wearable-sensor systems for detecting animal behavior and human stress, and deep-learning models for medical image and tremor classification developed with collaborators.",
      "images": []
    },
    {
      "id": "thermal-plasma",
      "title": "Thermal plasma technology",
      "summary": "The foundation of his doctoral and postdoctoral research in Japan.",
      "description": "He studied the transient behavior of pulse-modulated induction thermal plasmas and their use in materials processing, including in-flight melting of granulated powders for glass production, plasma-particle heat transfer, and nanoparticle synthesis, publishing in journals including IEEE Transactions on Plasma Science, Journal of Physics D and Chemical Engineering Journal.",
      "images": []
    }
  ],
  "currentFocus": [
    "Design and simulation of high-efficiency multijunction thin-film solar cells",
    "Design and simulation of high-efficiency perovskite solar cells",
    "IoT-based energy saving schemes for industry and residential areas",
    "Positive impacts of electric vehicles on the environment and economy",
    "Applications of machine learning in electrical engineering",
    "Environmental sustainability"
  ],
  "education": [
    {
      "years": "2005–2007",
      "degree": "JSPS Postdoctoral Fellowship",
      "inst": "Tokyo Institute of Technology, Japan",
      "note": "Japan Society for the Promotion of Science"
    },
    {
      "years": "2003",
      "degree": "Ph.D., Electrical and Electronic Engineering",
      "inst": "Kanazawa University, Japan",
      "note": "Thesis: “Fundamental Study and Applications of Pulse-Modulated Induction Thermal Plasma”"
    },
    {
      "years": "2000",
      "degree": "M.Sc. Eng., Electrical and Electronic Engineering",
      "inst": "Kanazawa University, Japan",
      "note": ""
    },
    {
      "years": "1993",
      "degree": "B.Sc. Eng., Electrical and Electronic Engineering",
      "inst": "Bangladesh University of Engineering and Technology (BUET), Dhaka",
      "note": ""
    }
  ],
  "fellowships": [
    "JASSO Postdoctoral Fellowship, 15 October 2014 – 12 January 2015",
    "JSPS Postdoctoral Fellowship, Tokyo Institute of Technology, November 2005 – November 2007"
  ],
  "academicCareer": [
    [
      "2019–2024",
      "Professor, Department of EEE",
      "University of Liberal Arts Bangladesh"
    ],
    [
      "2013–2018",
      "Professor, Department of ECE",
      "East West University"
    ],
    [
      "2008–2013",
      "Associate Professor, Department of ECE",
      "East West University"
    ],
    [
      "2000–2008",
      "Assistant Professor, Department of EEE",
      "Chittagong University of Engineering & Technology"
    ],
    [
      "1994–2000",
      "Lecturer, Department of EEE",
      "Chittagong University of Engineering & Technology"
    ]
  ],
  "leadershipIntro": "Professor Hossain has held senior academic leadership roles at four Bangladeshi universities, including two deanships and department headships at CUET, East West University and ULAB, and is currently Pro-Vice Chancellor of Southeast University.",
  "leadership": [
    [
      "April 2024 – present",
      "Pro-Vice Chancellor",
      "Southeast University, Dhaka"
    ],
    [
      "June 2021 – April 2024",
      "Dean, School of Science and Engineering",
      "University of Liberal Arts Bangladesh"
    ],
    [
      "January 2020 – April 2024",
      "Head, Department of Electrical and Electronic Engineering",
      "University of Liberal Arts Bangladesh"
    ],
    [
      "January – December 2019",
      "Head, Department of Electronics and Telecommunication Engineering",
      "University of Liberal Arts Bangladesh"
    ],
    [
      "February 2016 – December 2018",
      "Chairperson, Department of Electronics and Communications Engineering",
      "East West University"
    ],
    [
      "February 2013 – September 2014",
      "Dean, Faculty of Sciences and Engineering",
      "East West University"
    ],
    [
      "December 2008 – April 2012",
      "Chairperson, Department of Electronics and Communications Engineering",
      "East West University"
    ],
    [
      "June – October 2005",
      "Head, Department of Electrical and Electronic Engineering",
      "Chittagong University of Engineering & Technology"
    ],
    [
      "December 2003 – October 2005",
      "Provost, Ladies Hall",
      "Chittagong University of Engineering & Technology"
    ],
    [
      "May 1995 – May 1997",
      "Assistant Provost, Mohammad Shah Hall",
      "Chittagong University of Engineering & Technology"
    ]
  ],
  "committees": [
    [
      "2022 – 2024",
      "Chairman, Disciplinary Committee; Chairman, Purchase Committee; Member, Finance Committee",
      "University of Liberal Arts Bangladesh"
    ],
    [
      "2021 – 2024",
      "Member, Quality Assurance Committee; Member, Ethical Review Committee",
      "University of Liberal Arts Bangladesh"
    ],
    [
      "2018",
      "Member, Finance Committee",
      "East West University"
    ],
    [
      "2016 – 2018",
      "Convener, Self-Assessment Committee, ECE Department",
      "East West University"
    ],
    [
      "2013 – 2014",
      "Member, Syndicate",
      "East West University"
    ],
    [
      "2008 – 2018",
      "Member, Academic Council",
      "East West University"
    ],
    [
      "2005",
      "Member, Academic Council",
      "Chittagong University of Engineering & Technology"
    ]
  ],
  "external": [
    "Academic Council Member, Prime University, Dhaka",
    "External Member, Faculty Selection Committee, Department of EEE, CUET",
    "External Member, Faculty Selection Committee, Department of EEE, Independent University, Bangladesh",
    "External Member, M.Sc. Eng. thesis examination, Department of EEE, BUET",
    "Former External Member, Academic Committee, Department of ETE, CUET",
    "Former Member, 4th Level Examination Committee, Department of EEE, CUET"
  ],
  "accreditation": [
    "Chair of BAETE visiting teams for the accreditation of EEE and ETE programs in Bangladesh",
    "Panel Member, BAETE visiting teams, Institution of Engineers, Bangladesh",
    "Team Leader, External Peer Review Team, Department of EEE, Bangladesh University of Business and Technology",
    "Resource person in workshops on Outcome-Based Education"
  ],
  "obeTraining": [
    "Workshop on Preparation for Outcome Based Accreditation, IEB, Dhaka, December 2017",
    "BAETE Workshop for Program Evaluators, IEB, Dhaka, October 2017",
    "Workshop on the Implementation of Complex Engineering Problem Solving (WP) and Complex Engineering Activities (EA), Dhaka, June 2019",
    "Training on Writing Effective Evaluation Team Reports for BAETE Accreditation, Dhaka, August 2019",
    "New Program Evaluator Training on Outcome Based Accreditation, IEB, Dhaka, October 2019",
    "BAETE Program Evaluator Training Program (online), February 2021",
    "BAETE orientation sessions on accreditation evaluation for program evaluators (online), February and October 2021",
    "Online Learning: Assessment Strategies that Facilitate Learning, organized by the US Embassy Dhaka, July 2021"
  ],
  "conferenceLeadership": [
    "General Chair, IEEE WIECON 2026",
    "General Chair, iCACCESS 2026",
    "General Co-Chair, IEEE PEEIACON 2025",
    "General Co-Chair, IEEE i-COSTE 2024, Murdoch University, Australia",
    "Conference Chair, iCACCESS 2024, Dhaka",
    "General Co-Chair, IEEE i-COSTE 2023, Fiji",
    "Track Chair, ICAICT 2020",
    "Member, Technical Program Committee, IEEE TENSYMP 2020, Dhaka",
    "Member, Advisory Committee, ICACE 2019, Independent University, Bangladesh"
  ],
  "talks": [
    "Speaker, SocialTech Summit 2025, Hiroshima University, Japan, October 2025",
    "Invited Speaker, 8th Asia Conference on Energy and Electrical Engineering, 2025",
    "Keynote Speaker, 2nd ICSREE 2024, Solar Energy Research Institute, UKM, Malaysia, August 2024",
    "Plenary Speaker, IEEE REEPE 2021, Moscow Power Engineering Institute, Russia, March 2021",
    "Panel discussant, ICCIT 2020"
  ],
  "sessionChair": [
    "8th Asia Conference on Energy and Electrical Engineering 2025",
    "ICCIT 2024",
   "ICCIT 2025",
    "IEEE TENSYMP 2020 (virtual)",
    "ICAICT 2020, UIU (virtual)",
    "ICAEE 2019, Independent University, Bangladesh",
    "ICCIT 2019, Southeast University",
    "ICAEESE 2016, Putrajaya, Malaysia"
  ],
  "editorial": [
    "Editorial Board Member, Journal of Electrical and Electronic Systems (USA)",
    "Reviewer: IEEE Access; Energies (MDPI); Radioengineering; International Journal of Renewable Energy Research",
    "Conference reviewer: ICCIT 2019, 2020, 2024 and 2025; PEEIACON 2019, 2024 and 2025; ICAEE 2019; ICECIT 2021; ACMI 2021; STI 2022"
  ],
  "memberships": [
    "Senior Member, Institute of Electrical and Electronics Engineers (IEEE)",
    "Member, Institution of Engineers, Bangladesh (IEB)"
  ],
  "awards": [
    [
      "2019",
      "Bangladesh Education Leadership Award, “Best Professor in Telecommunication Engineering Studies,” World Education Congress"
    ],
    [
      "2014–2015",
      "JASSO Postdoctoral Fellowship, Japan"
    ],
    [
      "2005–2007",
      "JSPS Postdoctoral Fellowship, Japan Society for the Promotion of Science"
    ],
    [
      "1998–2003",
      "Scholarship, Ministry of Education, Culture, Sports, Science and Technology (MEXT), Japan"
    ],
    [
      "",
      "Yuasa Foundation Scholarship, Japan"
    ]
  ],
  "teachingIntro": "Professor Hossain has taught undergraduate and graduate courses in circuits, electronics, power systems, microwave engineering and renewable energy at CUET, East West University and ULAB. He is an experienced developer of Outcome-Based Education curricula and has served as a resource person in OBE workshops.",
  "coursesUG": [
    "Electrical Circuits I and II (DC and AC circuits)",
    "Electronic Circuits",
    "Microprocessor and Interfacing",
    "Digital Electronics",
    "Power System Analysis",
    "Electrical Power Transmission and Distribution",
    "Microwave Engineering",
    "Renewable Energy Technology",
    "Optoelectronics",
    "Programming in C"
  ],
  "coursesPG": [
    "Microwave Engineering",
    "VLSI Technology",
    "Renewable Energy Technology"
  ],
  "supervision": [
    "One Ph.D. student at Chittagong University of Engineering and Technology (completed 2015)",
    "16 M.Sc. Engineering theses",
    "More than 130 undergraduate final-year theses and projects"
  ],
  "gallery": [],
  "publications": [
    {
      "type": "chapter",
      "year": 2022,
      "authors": "S. Hasan, M. Rasheduzzaman, and **M. M. Mofazzal Hossain**",
      "title": "Consequences of Lockdown due to COVID-19 on the Electricity Generation and Environment in South Asia",
      "venue": "in Electricity Access, Decarbonization and Integration of Renewables, Springer VS, Wiesbaden",
      "doi": "10.1007/978-3-658-38215-5_6"
    },
    {
      "type": "chapter",
      "year": 2011,
      "authors": "**M. Mofazzal Hossain**, Takayuki Watanabe",
      "title": "Thermal Treatment of Granulated Particles by Induction Thermal Plasma",
      "venue": "in M. A. dos Santos Bernardes (ed.), InTech, ISBN 978-953-307-569-3"
    },
    {
      "type": "journal",
      "year": 2025,
      "authors": "Mohammad Ariful Islam Rafi; Md Sajid Hasan; Imam-Ur-Rashid; Md Manzurul Hasan; Jawadul Alam Chowdhury; Moshiur Rahman Sohan, Nahid A. Jahan, **M. Mofazzal Hossain**",
      "title": "Techno-Economic and Environmental Analysis of Solar PV System at Sher-e-Bangla National Cricket Stadium: A Comprehensive Case Study",
      "venue": "IEEE Access, vol. 13, pp. 52658-52682",
      "doi": "10.1109/ACCESS.2025.3553636",
      "selected": true
    },
    {
      "type": "journal",
      "year": 2025,
      "authors": "M. A. Islam, T. Islam, G. Hossain and **M. Mofazzal Hossain**",
      "title": "Psychological Impact of Internet Blackouts: A Case Study With Machine Learning-Based Stress Analysis",
      "venue": "IEEE Access, vol. 13, pp. 83505-83527",
      "doi": "10.1109/ACCESS.2025.3568434"
    },
    {
      "type": "journal",
      "year": 2025,
      "authors": "Nowshin Alam, Tasmin Kamal Tulka, **M. Mofazzal Hossain**",
      "title": "Materials, stability, and environmental aspects of perovskite solar cell: A topical review",
      "venue": "e-Prime-Advances in Electrical Engineering, Electronics and Energy, Vol. 13, p. 101093",
      "doi": "10.1016/j.prime.2025.101093",
      "selected": true
    },
    {
      "type": "journal",
      "year": 2025,
      "authors": "M. Rasheduzzaman, M. S. Hasan, N. A. Jahan, A. Jawad and **M. M. Hossain**",
      "title": "Assessment of Greenhouse Gas Emissions and Mitigation Strategies for a University in Bangladesh",
      "venue": "IEEE Access, vol. 13, pp. 153741-153763",
      "doi": "10.1109/ACCESS.2025.3605517",
      "selected": true
    },
    {
      "type": "journal",
      "year": 2025,
      "authors": "M. Sakib, Mohammad Sakib, Nayeem Ahmed, Asif Mohammad Mithu, Maisha Islam, Tachiya Mahamud Nahadi, NM Chisty, Ramisha Rabeya, **M Mofazzal Hossain**, Feroz Ahmed",
      "title": "CHIC-Pain: Integrating Wearable Sensors and Direct Observation to Identify Sickness and Pain Behavior in Broiler Chickens",
      "venue": "IEEE Access, vol. 13, pp. 181744-181764",
      "doi": "10.1109/ACCESS.2025.3623176"
    },
    {
      "type": "journal",
      "year": 2025,
      "authors": "Mohammad Sakib, Shoma Khanom, Tachiya Mahamud Nahadi, Asif Mohammad Mithu, Nayeem Ahmed, Maisha Islam, Tania Sarker, NM Chisty, Md Ahad, **M Mofazzal Hossain**, Feroz Ahmed",
      "title": "TremorFusion: AI-driven feature extraction for multi-class Parkinson’s tremor classification using CSVM and DeepK-CNN",
      "venue": "Biomedical Engineering Letters, Vol.16, pages 411–437",
      "doi": "10.1007/s13534-025-00526-z"
    },
    {
      "type": "journal",
      "year": 2024,
      "authors": "Minhaz Mahmood, K. Sobayel, Kashfia Noor, Megat Mohd Izhar Sapeli, **M. Mofazzal Hossain**, Mohammad Nur-E Alam, Mohd Adib Ibrahim, Mohamed S. Soliman, Mohammad Tariqul Islam",
      "title": "Metal-doped perovskite oxide Ba(1-x)Sr(x)TiO3 as electron transport layer for enhanced photovoltaic performance: An FDTD study",
      "venue": "Solar Energy, vol. 283, art. 112987"
    },
    {
      "type": "journal",
      "year": 2023,
      "authors": "Md Ashraful Islam, Atik Jawad, Nahid Akhter Jahan, **M. Mofazzal Hossain**",
      "title": "Outstanding conversion efficiency of 38.39% from a Perovskite/CIGS tandem PV cell: A synergic optimization through computational modeling",
      "venue": "Heliyon, Volume 9, Issue 10, e20558",
      "selected": true
    },
    {
      "type": "journal",
      "year": 2022,
      "authors": "Tasmin Kamal Tulka, Nowshin Alam, Md Akhtaruzzaman, K. Sobayel, **M. Mofazzal Hossain**",
      "title": "Optimization of a high-performance lead-free cesium-based inorganic perovskite solar cell through numerical approach",
      "venue": "Heliyon, vol.8, Issue 1, p. e11719"
    },
    {
      "type": "journal",
      "year": 2022,
      "authors": "T. K. Tulka, N. Alam, K. M. Elme, and **M. Mofazzal Hossain**",
      "title": "Efficiency Enhancement of an Ultra-Thin Eco-Friendly All-Inorganic CsGeI3 Perovskite Photovoltaic Cell using SCAPS-1D",
      "venue": "Appl. Sol. Energy 58, 28–39",
      "doi": "10.3103/S0003701X22010194"
    },
    {
      "type": "journal",
      "year": 2021,
      "authors": "Mobasshir Mahbub, **M. Mofazzal Hossain** and Md. Shamrat Apu Gazi",
      "title": "Cloud-Enabled IoT-Based Embedded System and Software for Intelligent Indoor Lighting, Ventilation, Early Stage Fire Detection and Prevention",
      "venue": "Computer Network, vol. 184 p. 107673"
    },
    {
      "type": "journal",
      "year": 2020,
      "authors": "Mobasshir Mahbub, **M. Mofazzal Hossain** and Md. Shamrat Apu Gazi",
      "title": "IoT-Cognizant cloud-assisted energy efficient embedded system for indoor intelligent lighting, air quality monitoring, and ventilation",
      "venue": "Internet of Things, vol. 11, p.100266"
    },
    {
      "type": "journal",
      "year": 2020,
      "authors": "Nahid A. Jahan and **M. Mofazzal Hossain**",
      "title": "Efficiency enhancement of p-i-n solar cell embedding quantum wires in the intrinsic layer",
      "venue": "ASTESJ, vol. 5, issue.3, pp.540-546"
    },
    {
      "type": "journal",
      "year": 2019,
      "authors": "**Hossain M. Mofazzal**, M. S. A. Gazi, M. Mahbub, A. A. P. Sayed, S. Kanaya and M. Altaf-Ul-Amin",
      "title": "On the determination of important plants for ayurvedic formulas in Bangladesh using unsupervised machine learning approach",
      "venue": "Academia Journal of Medicinal Plants 6(1): 036-041",
      "doi": "10.15413/ajmp.2019.0106"
    },
    {
      "type": "journal",
      "year": 2018,
      "authors": "Nahid A. Jahan, Md. Minhaz Ul Karim and **M. Mofazzal Hossain**",
      "title": "A High Efficiency Ultra Thin (1.8 m) CdS/CdTe p-i-n Solar Cell with CdTe and Si as BSF layer",
      "venue": "ASTESJ, vol.3, pp-213-217"
    },
    {
      "type": "journal",
      "year": 2017,
      "authors": "R. Islam, M. M. Uddin, **M. Mofazzal Hossain** and M. A. Matin",
      "title": "Design and Performance Analysis of Depletion-Mode InSb Quantum-Well Field-Effect Transistor for Logic Applications",
      "venue": "J. of Molecular and Engineering Materials vol. 5, No. 3 p.1750006"
    },
    {
      "type": "journal",
      "year": 2017,
      "authors": "M. T Rahman and **M. Mofazzal Hossain**",
      "title": "A time-dependent model of pulse-driven radio frequency capacitively coupled collisional plasma sheath",
      "venue": "J. Phys. of Plasmas, vol.24, p. 013516"
    },
    {
      "type": "journal",
      "year": 2017,
      "authors": "Fahmida Azmi, **M. Mofazzal Hossain**",
      "title": "On the Determination of Levelized Cost of Electricity of Wind Energy in the Coastal Areas of Bangladesh",
      "venue": "J. Electrical and Electronic Engineering, vol. 5(2), pp. 74-79",
      "doi": "10.11648/j.jeee.20170502.18"
    },
    {
      "type": "journal",
      "year": 2014,
      "authors": "M. Rafiqul Alam, Feroza Begum, Quazi Delwar **Hossain, M. Mofazzal** Hossain",
      "title": "Effects of carrier gas flow-rate and oxygen admixture ratio on particle properties in Ar-O2 plasma",
      "venue": "International Journal of Materials Science and Applications, vol. 3 Issue 2, pp. 14-19"
    },
    {
      "type": "journal",
      "year": 2013,
      "authors": "**M. Mofazzal Hossain**, M. Rafiqul Alam, and Takayuki Watanabe",
      "title": "Thermal Treatment of Al2O3, MgO, and CeO2 Granulated Powders by Induction Thermal Plasma: A Numerical Approach",
      "venue": "Japanese Journal of Applied Physics vol. 52"
    },
    {
      "type": "journal",
      "year": 2011,
      "authors": "Sakib M. Muhtadi, S. M. Sajjad Hossain1, Ashraful G. Bhuiyan, K. Sugita, A. Hashimoto, A. Yamamoto and **M. Mofazzal Hossain**",
      "title": "DC and RF performance of an In0.1Ga0.9N/InN high electron mobility transistor",
      "venue": "Phys. Status Solidi C vol. 8, No. 7–8, pp. 2292–2295"
    },
    {
      "type": "journal",
      "year": 2009,
      "authors": "N. Choudhury, M. Q. Islam, I. Murshed, M. A. Matin, Z. Rahman, **M M Hossain**",
      "title": "A Study and Design of Direct Sequence Code Division Multiple Access (DS-CDMA) Transceiver",
      "venue": "Engineering -e-Transaction (ISSN 1823-6379), vol. 4, No.1"
    },
    {
      "type": "journal",
      "year": 2009,
      "authors": "**M. Mofazzal Hossain**, Yaochun Yao and Takayuki Watanabe",
      "title": "A Numerical Study of Plasma-Particle Heat Transfer Dynamics in Induction Thermal Plasmas for Glassification",
      "venue": "IEEJ Transactions on Electrical and Electronic Engineering, Volume 4 Issue 4, pp. 504 – 509, 2009. Japan"
    },
    {
      "type": "journal",
      "year": 2009,
      "authors": "**M. Mofazzal Hossain**, Yaochun Yao, Takayuki Watanabe, Fuji Funabiki and Tetsuji Yano",
      "title": "In-flight thermal treatment of soda-lime-silica glass powders for glass production by argon–oxygen induction thermal plasmas",
      "venue": "Chemical Engineering Journal, vol 150, pp. 561-568",
      "selected": true
    },
    {
      "type": "journal",
      "year": 2009,
      "authors": "Yaochun Yao, **M. Mofazzal. Hossain**, T. Watanabe",
      "title": "Numerical and experimental investigation on the in-flight melting behavior of granulated powders in induction thermal plasmas",
      "venue": "Plasma Science and Technology, vol 11, No.1, Feb"
    },
    {
      "type": "journal",
      "year": 2008,
      "authors": "Y. Yao, **M. M. Hossain**, T. Watanabe, T. Matsuura, F. Funabiki, and T. Yano",
      "title": "A multi-phase AC arc discharge and its application in in-flight thermal treatment of raw glass powders",
      "venue": "Chemical Engineering Journal, vol. 139, pp. 390-397"
    },
    {
      "type": "journal",
      "year": 2008,
      "authors": "Yao Yaochun, **Hossain M M**, Watanabe T, Funabiki F, Yano T",
      "title": "Application of in-flight melting technology by RF induction thermal plasmas to glass production",
      "venue": "Plasma Science and Technology, vol. 10, No.3"
    },
    {
      "type": "journal",
      "year": 2008,
      "authors": "**M. Mofazzal Hossain**, Yaochun Yao, Takayuki Watanabe",
      "title": "A numerical analysis of plasma-particle heat exchange during in-flight treatment of granulated powders by argon-oxygen induction thermal plasmas",
      "venue": "Thin Solid Films, vol. 516, pp. 6634-6639"
    },
    {
      "type": "journal",
      "year": 2008,
      "authors": "Yaochun Yao, **M. Mofazzal Hossain**, Takayuki Watanabe, Tomoyuki Tsujimura, Fuji Funabiki, Tetsuji Yano",
      "title": "Effects of Feed Rate and Particle Size on the In-flight Melting Behavior of Granulated Powders in Induction Thermal Plasmas",
      "venue": "Thin Solid Films, vol. 516, pp. 6622-6627"
    },
    {
      "type": "journal",
      "year": 2007,
      "authors": "Yaochun Yao, **Md. M. Hossain**, Yasuko Oyamatsu, Takayuki Watanabe, Fuji Funabiki and Tetsuji Yano",
      "title": "In-flight Melting of Granulated Powders in Thermal Plasmas for Glass Production",
      "venue": "Trans. Materials Research Society of Japan, vol 32, pp. 509-512"
    },
    {
      "type": "journal",
      "year": 2006,
      "authors": "**M. M. Hossain**, Y. Yao, Y. Oyamatsu, T. Watanabe, F. Funabiki and T. Yano",
      "title": "Determination of the Melting Mechanism of Granular Powders for Vitrification by Argon-Oxygen Induction Thermal Plasmas",
      "venue": "WSEAS Trans. on Heat and Mass Transfer, vol. 1, Issue 6, pp.625-631"
    },
    {
      "type": "journal",
      "year": 2003,
      "authors": "**M. M. Hossain**, Y. Tanaka and T. Sakuta",
      "title": "Transient Nature of Argon and Molecular Gas-Seeded Argon Inductive Thermal Plasmas in Pulse Amplitude Modulation Approach",
      "venue": "Trans. IEE Japan, vol.123, pp.1333-1339"
    },
    {
      "type": "journal",
      "year": 2003,
      "authors": "**M. M. Hossain**, Y. Tanaka and T. Sakuta",
      "title": "Dynamic Responses of Ar-CO2 and Ar-N2 Induction Thermal Plasmas in Pulse Modulation Approach",
      "venue": "Thin Solid Films, vol. 435, pp.19-26"
    },
    {
      "type": "journal",
      "year": 2002,
      "authors": "**M. M. Hossain**, Y. Tanaka and T. Sakuta",
      "title": "Extinguishing Phenomenon and Critical Discharge Boundaries of Argon and Molecular Gas-Seeded Argon Pulse Modulated Induction Thermal Plasmas",
      "venue": "Plasma Sources Sci. Technol., vol. 12, pp. 22-29"
    },
    {
      "type": "journal",
      "year": 2003,
      "authors": "**M. M. Hossain**, Y. Tanaka and T. Sakuta",
      "title": "Time Dependent Analysis of Electromagnetic Fields in Inductively Coupled Thermal Plasma",
      "venue": "Journal of the Japan Society of Applied Electromagnetics and Mechanics, vol. 14, pp. 121-128"
    },
    {
      "type": "journal",
      "year": 2002,
      "authors": "**M. M. Hossain**, Y. Tanaka and T. Sakuta",
      "title": "Particle Concentrations and Transport Properties of a Partially Ionized Argon Plasma in a Two-Temperature Reaction Kinetic Approach",
      "venue": "J. Phys. D: Appl. Phys., vol. 35, pp. 529-35, March"
    },
    {
      "type": "journal",
      "year": 2002,
      "authors": "**M. M. Hossain**, Y. Hashimoto, Y. Tanaka, K. C Paul and T. Sakuta",
      "title": "A Comparative Study of Transient Characteristics of Argon and Hydrogenated-Argon Pulse-Modulated Induction Thermal Plasma",
      "venue": "IEEE Trans. on Plasma Sci., vol. 30, Issue: 1, pp. 327-337, Feb",
      "selected": true
    },
    {
      "type": "journal",
      "year": 2001,
      "authors": "K.C Paul **M. M. Hossain** Y. Hashimoto Y. Tanaka and T. Sakuta",
      "title": "Responses of a Long-Coil Pulse-Modulated Induction Plasma",
      "venue": "IEEE Trans. on Plasma Sci., vol. 29, no.2, pp.326-334, April"
    },
    {
      "type": "journal",
      "year": 2000,
      "authors": "**M. M Hossain**, K. C Paul, Y. Tanaka, T. Sakuta and T. Ishigaki",
      "title": "Prediction of Operating Region of Pulse-Modulated Radio Frequency Inductively Coupled Thermal Plasma",
      "venue": "J. Phy. D: Appl. Phys., vol 33, No. 15, pp. 1843-1853"
    },
    {
      "type": "journal",
      "year": 2000,
      "authors": "T. Sakuta, Y. Tanaka, K. C Paul, **M. M. Hossain** and T. Ishighaki",
      "title": "Non-Equilibrium Effects in Pulse Modulated Induction Thermal Plasma for Advanced Processing",
      "venue": "Trans. Materials Research Society, Japan, Vol.25, No.1, pp 35-38, March"
    },
    {
      "type": "conference",
      "year": 2025,
      "authors": "M. A. A. Hossain, M. A. I. Alvy, M. M. Hasan and **M. M. Hossain**",
      "title": "Design of Single Phase Agri-Inverter Using Center Tapped Transformer Topology",
      "venue": "2025 IEEE 7th International Conference on Sustainable Technologies For Industry 5.0 (STI), Dhaka, Bangladesh, 2025, pp. 1-5",
      "doi": "10.1109/STI69347.2025.11367599"
    },
    {
      "type": "conference",
      "year": 2025,
      "authors": "F. Ferdousi, M. K. S. B. Rafiq and **M. M. Hossain**",
      "title": "Sustainable Transportation and Electric Vehicle Adoption: Exploring Consumer Perceptions and Challenges",
      "venue": "2025 8th Asia Conference on Energy and Electrical Engineering (ACEEE), Qingdao, China, 2025, pp. 289-292",
      "doi": "10.1109/ACEEE66257.2025.11148921"
    },
    {
      "type": "conference",
      "year": 2025,
      "authors": "D. B. Prince and **M. M. Hossain**",
      "title": "Computational Design Approximation of Efficient Low-Toxic Rb2TiI6/RbSn0.5Ge0.5I3 Hetero-Bilayer Perovskite Solar Cell",
      "venue": "2025 8th Asia Conference on Energy and Electrical Engineering (ACEEE), Qingdao, China, 2025, pp. 381-387",
      "doi": "10.1109/ACEEE66257.2025.11148631"
    },
    {
      "type": "conference",
      "year": 2025,
      "authors": "M. Nafis, N. I. Nahin, K. M. Salim, S. Mondal, M. K. Hosain and **M. M. Hossain**",
      "title": "Single-Stage PV-Grid Integrated Multilevel Inverter Driven Induction Motor Drive for Water Pumping",
      "venue": "2025 International Conference on Electrical, Computer and Communication Engineering (ECCE), Chittagong, Bangladesh, 2025, pp. 1-6",
      "doi": "10.1109/ECCE64574.2025.11013988"
    },
    {
      "type": "conference",
      "year": 2024,
      "authors": "M. Sakib, T. Nur and **M. M. Hossain**",
      "title": "A Novel CNN Architecture for Alzheimer's Disease Classification Using MRI Images: Comparison with Traditional Machine Learning Models",
      "venue": "2024 IEEE International Conference on Signal Processing, Information, Communication and Systems (SPICSCON), Khulna, Bangladesh, 1-2 November"
    },
    {
      "type": "conference",
      "year": 2023,
      "authors": "Mohammad Sakib; Sk. Shah Alam; **M. Mofazzal Hossain**",
      "title": "Detection of Broiler Behaviors Through a Wearable Sensor System and Machine Learning Methods",
      "venue": "2023 IEEE Engineering Informatics, 22-23 November 2023, Melbourne, Australia"
    },
    {
      "type": "conference",
      "year": 2023,
      "authors": "Mohammad Sakib; Syeda Shanaz Pervez; **M. Mofazzal Hossain**",
      "title": "Quantifying Stress Levels in Night-Shift Bus Drivers: An Integrative Approach Utilizing Wearable Sensor Technology and Qualitative Evaluation",
      "venue": "2023 IEEE Engineering Informatics, 22-23 November 2023, Melbourne, Australia"
    },
    {
      "type": "conference",
      "year": 2023,
      "authors": "F. Muntasir, W. Al Wazed Wasi, M. Nafis and **M. M. Hossain**",
      "title": "A Fast Response Fault Detection Technique for HVAC Transmission Line Using Machine Learning",
      "venue": "2023 10th IEEE International Conference on Power Systems (ICPS), Cox's Bazar, Bangladesh, 13-15 December",
      "doi": "10.1109/ICPS60393.2023.10428730"
    },
    {
      "type": "conference",
      "year": 2024,
      "authors": "M. Sakib, M. Asadullah, S. M. Shams, M. D. **Hossain, M. M.** Uddin and M. M. Hossain",
      "title": "Eczema and Seborrheic Keratoses: A Novel Method for Skin Disease Classification Using Image-Based Analysis",
      "venue": "2024 21st International Conference on Electrical Engineering, Computing Science and Automatic Control (CCE), Mexico City, Mexico, 2024, pp. 1-6",
      "doi": "10.1109/CCE62852.2024.10771065"
    },
    {
      "type": "conference",
      "year": 2023,
      "authors": "Mohammad Sakib; S. K. Shah Alam; S. H. Mridha Atul; F. H. Supto; **M. Mofazzal Hossain**",
      "title": "Automated detection of broiler chicken behaviors through the integration of 3D accelerometer sensor and machine learning techniques",
      "venue": "THE 1ST INTERNATIONAL CONFERENCE ON INNOVATIONS IN ENGINEERING, SCIENCE AND TECHNOLOGY FOR SUSTAINABLE DEVELOPMENT (ICEST 2023), 15–17 November 2023, Male’ City, Maldives",
      "doi": "10.1063/5.0231888"
    },
    {
      "type": "conference",
      "year": 2024,
      "authors": "Shoma Khanom; Mohammad Sakib; NM Chisty; **M. Mofazzal Hossain**",
      "title": "Classifying Daily Life Smoking Events: An Innovative Wearable Hand-Band Solution",
      "venue": "2024 International Conference on Advances in Computing, Communication, Electrical, and Smart Systems (iCACCESS), 08-09 March 2024, Dhaka, Bangladesh",
      "doi": "10.1109/iCACCESS61735.2024.10499527"
    },
    {
      "type": "conference",
      "year": 2023,
      "authors": "Alfatha; Abu Obayed; Jawad; Atik; **Hossain; M. Mofazzal**",
      "title": "Feasibility Study of a Rooftop Solar System on ULAB Permanent Campus Building",
      "venue": "2023 International Conference on Advances in Electronics, Communication, Computing and Intelligent Information Systems (ICAECIS), 19-21 April 2023, BIT, Bangalore, India"
    },
    {
      "type": "conference",
      "year": 2023,
      "authors": "Mohammad Ariful Islam Rafi; Moshiur Rahman Sohan; Atik Jawad; Hasnain Rabbi Sourid and **M. Mofazzal Hossain**",
      "title": "Sound Pollution Monitoring System and Awareness Creation in Modern Cities: A Case Study",
      "venue": "2023 International Conference on Advances in Electronics, Communication, Computing and Intelligent Information Systems (ICAECIS), 19-21 April 2023, BIT, Bangalore, India"
    },
    {
      "type": "conference",
      "year": 2023,
      "authors": "M. Rasheduzzaman, A B. M. S. U. Doulah, Ramit Kumar Sadhukhan and **M. Mofazzal Hossain**",
      "title": "Environmental Impacts of ICEVs and BEVs in Dhaka City based on Vehicle Fleet Modelling and Machine Learning Technique",
      "venue": "ICEPECC-2023 (accepted)"
    },
    {
      "type": "conference",
      "year": 2023,
      "authors": "Alnur Khan Mission, Riaz Ahmmad, Tasmin Kamal Tulka and **M. Mofazzal Hossain**",
      "title": "Numerical Simulation and Optimization of CsSnI3 Perovskite PV Cell Using SCAPS-1D",
      "venue": "ICEPECC-2023 (accepted)"
    },
    {
      "type": "conference",
      "year": 2022,
      "authors": "Md Ashraful Islam, Nahid Akhter Jahan, **M Mofazzal Hossain**",
      "title": "A Lead-Free All-Inorganic CS2SnI6 Based Ultra-Thin Perovskite Solar Cell Optimized using SCAPS-1D Simulator",
      "venue": "2022 International Conference and Utility Exhibition on Energy, Environment and Climate Change (ICUE), 26-28 October 2022, Pattaya, Thailand"
    },
    {
      "type": "conference",
      "year": 2022,
      "authors": "Tajreen Ferdoush, Chaity Saha, Mahdee Nafis and **M. Mofazzal Hossain**",
      "title": "Optimization and Performance Improvement of CsSnGeI3 All-Inorganic Lead-Free Thin-Film Perovskite Solar Cell through Numerical Simulation",
      "venue": "2022 International Conference and Utility Exhibition on Energy, Environment and Climate Change (ICUE), 26-28 October 2022, Pattaya, Thailand"
    },
    {
      "type": "conference",
      "year": 2022,
      "authors": "**M. Mofazzal Hossain**, Nabila Jahan, Rayhan Ul Hossain",
      "title": "Simulation and optimization of a highly efficient ZnO/Cu2O/CdS/CdTe solar cell using SCAPS-1D",
      "venue": "2022 International Conference on Advancement in Electrical and Electronic Engineering (ICAEEE), 24-26 February 2022, DUET, Gazipur, Bangladesh"
    },
    {
      "type": "conference",
      "year": 2022,
      "authors": "Fahim Adel Akib, Nurujjaman Shawn, Sajjad Mostafa, Mirza Rasheduzzaman, **M. Mofazzal Hossain**",
      "title": "Impacts of Electric Vehicle for Sustainable Transportation in Dhaka City",
      "venue": "2022 International Conference on Advancement in Electrical and Electronic Engineering (ICAEEE), 24-26 February 2022, DUET, Gazipur, Bangladesh"
    },
    {
      "type": "conference",
      "year": 2021,
      "authors": "Shameem Hasan, Mirza Rasheduzzaman, **M. Mofazzal Hossain**",
      "title": "Impacts of COVID-19 on the Electrical Power Dynamics and Environment of Bangladesh",
      "venue": "IEEE REEPE 2021, Moscow, Russia, 11-3 March"
    },
    {
      "type": "conference",
      "year": 2019,
      "authors": "Md. Manzurul Hasan, Nahid Akhter Jahan and **M. Mofazzal Hossain**",
      "title": "Thickness and Doping Optimization of CdS/CIGS P-i-N Photovoltaic Cell: Envisioned for Enhanced Conversion Efficiency",
      "venue": "Proc. EICT 2019, Khulna, Bangladesh, 20-22 December"
    },
    {
      "type": "conference",
      "year": 2019,
      "authors": "Md. Manzurul Hasan, Nahid Akhter Jahan and **M. Mofazzal Hossain**",
      "title": "Enhancement of Conversion Efficiency of CdS-CdTe Photovoltaic Cell Sandwiching Intrinsic CdTe Layer between Window and Absorber Layers",
      "venue": "Proc. ICCIT 2019, Dhaka, Bangladesh, 19-21 December"
    },
    {
      "type": "conference",
      "year": 2019,
      "authors": "Methila Biswas Raya, Tama Fouzder, **M. Mofazzal Hossain** and Khaleda Ali",
      "title": "Polypropylene Sheet Reinforced Textile Antenna with Reduced Bending Effects",
      "venue": "Proc. ICAEE 2019, IUB, Dhaka, Bangladesh, 26-28 September"
    },
    {
      "type": "conference",
      "year": 2018,
      "authors": "Nahid A. Jahan and **M. Mofazzal Hossain**",
      "title": "Synthesis of TiO2 Nano-particles by Pulse Modulated Induction Thermal Plasma: a Numerical Investigation",
      "venue": "Int. Conf. on Computer, Communication, Chemical, Materials and Electronic Engineering, 8-9 February 2018, Rajshahi University, Rajshahi, Bangladesh"
    },
    {
      "type": "conference",
      "year": 2018,
      "authors": "Nahid A. Jahan and **M. Mofazzal Hossain**",
      "title": "Performance Comparison of Short and Long Torches for the Thermal Treatment of Granulated Micro-particles Using Ar-O2 and Ar-He Induction Plasma",
      "venue": "Int. Conf. on Electrical, Electronics, Computers, Communication, Mechanical and Computing (EECCMC), 28-29 Jan 2018, Priyadarshini Engineering College, Chettiyappanur, Vellore, Tamil Nadu, India"
    },
    {
      "type": "conference",
      "year": 2016,
      "authors": "M A Matin, **M Mofazzal Hossain**, Pg Muhd Nazri",
      "title": "A Comparative Study of Millimeter-Wave Antennas",
      "venue": "Proc. 6TH BICET 2016, 14-16 November, 2016, Brunei Darussalam"
    },
    {
      "type": "conference",
      "year": 2016,
      "authors": "**M. Mofazzal Hossain**, Md. Minhaz Ul Karim, S. Banik, Nahid A. Jahan and M A Matin",
      "title": "Design of a high efficiency ultrathin CdTe/CdS p-i-n solar cell with optimized thickness and doping density of different layers",
      "venue": "Proc. ICAEESE 2016, Putrajaya, Malaysia, 14-16 Nov"
    },
    {
      "type": "conference",
      "year": 2015,
      "authors": "M. A. Matin and **M. Mofazzal Hossain**",
      "title": "A New Planar Printed Antenna with Band-notch Characteristics for UWB Applications",
      "venue": "IEEE TENCON2015 International Conference, 1-4 November 2015, Macau, China"
    },
    {
      "type": "conference",
      "year": 2015,
      "authors": "Md. Sohidul Islam, **M. Mofazzal Hossain** and Mohammad Rakibul Islam",
      "title": "Computation of Thermally Accessible Electronic States and Potentials of Fluorine, Oxygen and Nitrogen at Thermal Equilibrium Condition",
      "venue": "23rd Bangladesh Science Conference, BSMRAU"
    },
    {
      "type": "conference",
      "year": 2014,
      "authors": "Islam, Md. Shantanu, Matin, M A ; **Hossain, M. Mofazzal**",
      "title": "Electromagnetic wave propagation characteristics in single walled metallic carbon nanotube",
      "venue": "Proc. 8th International Conference on Electrical and Computer Engineering, ICECE 2014, 20-22 December 2014, Dhaka, Bangladesh, pp 575-578"
    },
    {
      "type": "conference",
      "year": 2014,
      "authors": "M. Rafiqul Alam, Feroza Begum, Quazi Delwar Hossain and **M. Mofazzal Hossain**",
      "title": "Comparative performance study of short and long induction plasma torches: a numerical approach",
      "venue": "Strategic Technology (IFOST), 2014 9th International Forum on, pp.511-515, 21-23 October 2014, Cox’s Bazar, Bangladesh"
    },
    {
      "type": "conference",
      "year": 2014,
      "authors": "Md Shantanu Islam, Feroza Begum, Afsana Umme Hani, M A Matin and **M Mofazzal Hossain**",
      "title": "On the Determination of Penetration Losses of Microwave Signals in Different Building Materials",
      "venue": "5th Brunei Int. Conf. on Engineering and Technology, 1-3 Nov 2014, Brunei Institute of Technology, Bandar Seri Begawan, Brunei Darussalam"
    },
    {
      "type": "conference",
      "year": 2012,
      "authors": "**M. Mofazzal Hossain** and Md. Shantanu Islam",
      "title": "Fundamental Properties and Applications of Carbon Nanotubes as Antennas",
      "venue": "The 5th International Conference on Plasma-Nenotechnology and Science, March 9-10, 2012, Freude, Inuyama International Sightseeing Center, Aichi, Japan"
    },
    {
      "type": "conference",
      "year": 2012,
      "authors": "**M. Mofazzal Hossain** and M. Rafiqul Alam",
      "title": "Thermal Treatment of Al2O3, MgO and CeO2 Granulated Powders by Induction Thermal Plasma - a Numerical Approach",
      "venue": "4th International Symposium on Advanced Plasma Science and its Applications for Nitrides and Nanomaterials, ISPLASMA2012, March 4-8, 2012, Chubu University, Aichi, Japan"
    },
    {
      "type": "conference",
      "year": 2010,
      "authors": "Md. Delowar Hossain, Tanay Kumar Ganguly, Sarwar Jahan and **M. Mofazzal Hossain**",
      "title": "Detection ability of parametric faults in Analog circuits using CBT concept and its test limitations",
      "venue": "Proc. 6th International Conference on Electrical and Computer Engineering, ICECE 2010, 18-20 December 2010, Dhaka, Bangladesh, pp 446-449"
    },
    {
      "type": "conference",
      "year": 2010,
      "authors": "C. K. Das, N. K. Das, Md. Mahabub Hassan, S. K. Biswas, **M. Mofazzal Hossain**",
      "title": "An Advanced Ship Guidance System Using Grid Mapping Technique",
      "venue": "Proc. TENCON 2010, Fukuoka, Japan, Nov 21-24, 2010, pp1466-1471"
    },
    {
      "type": "conference",
      "year": 2010,
      "authors": "Sakib M. Muhtadi, S. M. Sajjad Hossain, Md. Sherajul Islam, Ashraful G. Bhuiyan and **M. Mofazzal Hossain**",
      "title": "Effect of Gate Voltage on the Performance of a Novel InmGa1-mN/InN HEMT: A Quantum Mechanical Self Consistent Study",
      "venue": "Proc. TENCON 2010, Fukuoka, Japan, Nov 21-24, 2010, pp140-143"
    },
    {
      "type": "conference",
      "year": 2010,
      "authors": "M. Rafiqul Alam, P. K. Shadhu Khan, M. A Matin, **M. Mofazzal Hossain**",
      "title": "Effects of Carrier Gas Flow-Rate and Oxygen Admixture Ratio on Particle Parameters in Ar-O2 Plasma",
      "venue": "IFOST 2010 Proceedings, Ulsan, South Korea, Oct 13-15"
    },
    {
      "type": "conference",
      "year": 2009,
      "authors": "M A Matin, Md. Monir Hossain, Md Foizul Islam, Muhammad Nazrul Islam, **M Mofazzal Hossain**",
      "title": "Performance Evalution of Symmetric Encryption Algorithm in MANET and WLAN",
      "venue": "Proc. TECHPOS 2009, Kualalumpur, Malaysia, 14-15 Decmber"
    },
    {
      "type": "conference",
      "year": 2009,
      "authors": "M. Torikul Islam, **M. Mofazzal Hossain**, M. Salahuddin",
      "title": "Thermal Treatment of Granulated fine powder using induction thermal plasma: A numerical Approach",
      "venue": "Jahang. U. J. Sc. (Bangladesh), vol.15, ISSSN 1999-6632"
    },
    {
      "type": "conference",
      "year": 2008,
      "authors": "**Hossain, M. M.**; Yao, Y.; Alam, M. R.; Alam, M. M.; Watanabe, T.",
      "title": "Modeling and numerical analysis of thermal treatment of granulated porous particles by induction plasma",
      "venue": "Proc. Inter. Conf. on Electrical and Computer Eng., ICECE 2008, Dhaka, Bangladesh, Dec 20-22, pp 827-832"
    },
    {
      "type": "conference",
      "year": 2007,
      "authors": "Y. Yao, **M. M. Hossain**, Y. Oyamatsu, T. Watanabe, F. Funabiki and T. Yano",
      "title": "Plasma-particle heat transfer mechanism for in-flight melting of powders in induction thermal plasmas",
      "venue": "Proc. of 1st Asian Symposium on Computational Heat Transfer and Fluid Flow (ASCHT07), Xi’an, China, October 18-21"
    },
    {
      "type": "conference",
      "year": 2007,
      "authors": "**M. M Hossain**, Y. Yao and T. Watanabe",
      "title": "A Numerical Study of Plasma-Particle Energy Exchange Dynamics in Induction Thermal Plasmas for Glassification",
      "venue": "Proc. Material Science & Technology Conference 2007, Detroit, Michigan, USA, Sep 16-20"
    },
    {
      "type": "conference",
      "year": 2007,
      "authors": "**M. M. Hossain**, Y. Yao, Y. Oyamatsu, T. Watanabe, F. Funabiki, and T. Yano",
      "title": "In-flight melting mechanism of granulated powders for glass production by argon-oxygen induction thermal plasmas",
      "venue": "Proc. Int. Symposium on Plasma Chemistry (ISPC-18), Kyoto, Japan, August 26-31"
    },
    {
      "type": "conference",
      "year": 2007,
      "authors": "**M. Mofazzal Hossain**, Y. Yaochun and T. Watanabe",
      "title": "A Numerical Analysis of Plasma-Particle Heat Exchange during In-Flight Treatment of Granulated Powders Argon-Oxygen Induction Thermal Plasmas",
      "venue": "Proc. The 20th Symposium on Plasma Science for Materials, Nagoya University, Japan, June 21-22"
    },
    {
      "type": "conference",
      "year": 2007,
      "authors": "Y. Yaochun, **M. Mofazzal Hossain**, T. Watanabe, F. Funabiki and T. Yano",
      "title": "Effects of Feed Rate and Particle Size on the In-Flight Melting Behavior of Granular Powders in Induction Thermal Plasmas",
      "venue": "Proc., The 20th Symposium on Plasma Science for Materials, Nagoya University, Japan, June 21-22"
    },
    {
      "type": "conference",
      "year": 2007,
      "authors": "**M. M. Hossain**, Y. Yaochun, Y. Oyamatsu, T. Watanabe, F. Funabiki and T. Yano",
      "title": "Numerical and Experimental Investigation to the Melting Mechanism of Granular Powders for Virtification by Induction Thermal Plasmas",
      "venue": "Proc. 4th WEAS Int. Conf. on Heat and Mass Transfer, Gold Coast, Australia, January 17-19"
    },
    {
      "type": "conference",
      "year": 2006,
      "authors": "Yao Yaochun, **Md. M. Hossain**, Yasuko Oyamatsu, Takayuki Watanabe, Fuji Funabiki and Tetsuji Yano",
      "title": "In-flight Melting of Granulated Powders in Thermal Plasmas for Glass Production",
      "venue": "Proc. 17th Int. MRSJ Academic Symposium, Tokyo, Japan, Dec 8-10"
    },
    {
      "type": "conference",
      "year": 2006,
      "authors": "**Hossain M M**, Okumiya H. and Watanabe T.",
      "title": "Nucleation and growth of cobalt and iron silicide nanoparticles in RF induction thermal plasma reactor",
      "venue": "Proc. Int. Conf. on Electrical and Computer Engg. ICECE 06, Dhaka, Bangladesh, Dec. 17-21"
    },
    {
      "type": "conference",
      "year": 2006,
      "authors": "**Hossain M. Mofazzal**, Tanaka Yasunori and Watanabe Takayuki",
      "title": "Kinetic Modeling of Ar-O2 Thermal Plasma including Metastable and Resonant States of Atoms and Molecules",
      "venue": "33rd IEEE Int. Conf. on Plasma Science, Traverse City, Michigan, USA, June 4-8"
    },
    {
      "type": "conference",
      "year": 2004,
      "authors": "**M. M. Hossain**, M. Mizanur Rahman and Y. Tanaka",
      "title": "Pressure Effects upon the Characteristics of Pulse-Modulated Induction Plasma during the Pulsing Transition",
      "venue": "Proc. 2nd BSME-ASME Int. Conf. on Thermal Engineering, BUET, Dhaka, Bangladesh, January 2-4"
    },
    {
      "type": "conference",
      "year": 2003,
      "authors": "**M. M. Hossain**, Y. Tanaka, M. Katayama, and T. Sakuta",
      "title": "Transient Nature of Argon and Molecular Gas-Seeded Argon Inductive Thermal Plasmas in Pulse Amplitude Modulation Approach",
      "venue": "Int. Workshop on High Voltage, Kyushu University, Fukuoka, Japan, January 23-24"
    },
    {
      "type": "conference",
      "year": 2002,
      "authors": "**M. M. Hossain**, Y. Tanaka and T. Sakuta",
      "title": "Dynamic Responses of Ar-CO2 and Ar-N2 Induction Thermal Plasmas in Pulse Modulation Approach: A Numerical Analysis",
      "venue": "Proc. of Joint Int. Symposium of 6th APCPST, 15th SPSM, OS2002 and 11th KAPRA, Jeju, South Korea, July 1-4"
    },
    {
      "type": "conference",
      "year": 2002,
      "authors": "**M. M. Hossain**, Y. Tanaka and T. Sakuta",
      "title": "Time Dependent Analysis of Electromagnetic Fields in Inductively Coupled Thermal Plasma",
      "venue": "International Japan-Australia-New Zealand Joint Seminar, Kanazawa University, Japan, January 24-25"
    },
    {
      "type": "conference",
      "year": 2001,
      "authors": "**M. M. Hossain**, Y. Tanaka and T. Sakuta",
      "title": "Particle Concentrations of a Partially Ionized Atmospheric Pressure Argon Plasma in Two-Temperature Reaction Kinetic Approach",
      "venue": "Proc. 25th International Conf. on the Phenomena of Ionized Gases, Nagoya, Japan, vol. 3, pp. 233-234, July"
    },
    {
      "type": "conference",
      "year": 2001,
      "authors": "**M. M. Hossain**, Y. Tanaka and T. Sakuta",
      "title": "Numerical Investigation of O2/CO2 Admixing Effects upon the Stability and Dynamic Responses of Argon Induction Thermal Plasma",
      "venue": "Proc. 15th Int. Symp. Plasma Chem., GREMI, University of Orleans, France, July 9-13, 2001, pp. 1115-1121"
    },
    {
      "type": "conference",
      "year": 2001,
      "authors": "K.C. Paul, **M. M. Hossain** and A.H.M. Zahirul Alam",
      "title": "Dynamic response of pulse Modulated Ar-H2 thermal plasmas",
      "venue": "Proc. Int. Conf. on Electrical and Computer Engineering (ICECE), Dhaka, Bangladesh, January 5-6, 2001, pp. 38-41"
    },
    {
      "type": "conference",
      "year": 2000,
      "authors": "**M. M. Hossain**, K. C Paul, Y. Hashimoto, Y. Tanaka and T. Sakuta",
      "title": "Transient Responses of Mixed-Gas Induction Thermal Plasma in Pulse Modulated Mode",
      "venue": "Proc. 13th Int. Conf. on Gas-discharge and their Applications, Glasgow, UK, September 3—8, 2000, vol. 2, pp.567-570"
    },
    {
      "type": "conference",
      "year": 1998,
      "authors": "**M. M. Hossain**, K.C Paul, T. Tanaka and T.Sakuta",
      "title": "Prediction of Operating Region of Pulse Modulated RF Plasma",
      "venue": "Joint Conference of Hokuriku Chapter of IEE Japan, Fukui, October"
    },
    {
      "type": "conference",
      "year": 1998,
      "authors": "K.C Paul, **M. M. Hossain** and T. Sakuta",
      "title": "A Theoretical Study of Pulse Modulated Ar, SF6 and N2 Plasmas",
      "venue": "Joint Conference of Hokuriku Chapter of IEE Japan, Fukui, October"
    },
    {
      "type": "conference",
      "year": 1998,
      "authors": "Yoshifumi Hashimoto, Makoto Katsuki, **M. M. Hossain**, Yasunori Tanaka and T. Sakuta",
      "title": "Development of Pulse Modulated Plasma Reactor",
      "venue": "Joint Conference of Hokuriku Chapter of IEE Japan, Fukui, October"
    },
    {
      "type": "conference",
      "year": 1999,
      "authors": "**M. M. Hossain**, K.C Paul, Y. Tanaka, Y. Hashimoto and T. Sakuta",
      "title": "Two-dimension Simulation of Large Volume Pulse Modulated RF Plasma",
      "venue": "National Convention of IEE Japan, Yamaguchi, March"
    },
    {
      "type": "conference",
      "year": 1999,
      "authors": "K.C Paul, **M. M. Hossain**, Y. Hashimoto and T. Sakuta",
      "title": "Determination of Different Response Times by Pulse Modulation in Ar-H2 and Ar-N2 Plasma",
      "venue": "National Convention of IEE Japan, Yamaguchi, March"
    },
    {
      "type": "conference",
      "year": 1999,
      "authors": "Yoshifumi Hashimoto, Makoto Katsuki, **M. M. Hossain**, Yasunori Tanaka and T. Sakuta",
      "title": "Time Dependence of Radiation Intensity in Pulse Modulated Ar-H2 Thermal Plasma",
      "venue": "National Convention of IEE Japan, Yamaguchi, March"
    },
    {
      "type": "conference",
      "year": 1999,
      "authors": "M. Katayama, Y. Hashimoto, **M. M. Hossain**, Y. Tanaka and T. Sakuta",
      "title": "Effect of H2 and N2 Gas Injection on Transient Response of Pulse Modulated Induction Ar Thermal Plasma",
      "venue": "National Conference of Japan on Circuit Breaker and High Voltage, Nagoya, November"
    }
  ]
};
