const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#site-menu");
const currentLang = document.documentElement.lang || "en";
const siteBasePath = new URL("../", document.currentScript.src).pathname;
const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "sv", label: "SV", name: "Svenska" },
  { code: "ar", label: "AR", name: "العربية" },
];

const translations = {
  sv: {
    "Architecture & Technology Advisory": "Arkitektur- och teknikrådgivning",
    "Home": "Hem",
    "Review": "Granskning",
    "Modernization": "Modernisering",
    "Integration": "Integration",
    "Cloud": "Moln",
    "Experience": "Erfarenhet",
    "About": "Om",
    "Contact": "Kontakt",
    "Discuss Your Architecture": "Diskutera din arkitektur",
    "Stockholm, Sweden · Working internationally": "Stockholm, Sverige · Arbetar internationellt",
    "Architecture that works beyond the diagram.": "Arkitektur som fungerar bortom diagrammet.",
    "Independent architecture review, modernization and technical leadership for organizations building and evolving complex software systems.": "Oberoende arkitekturgranskning, modernisering och tekniskt ledarskap för organisationer som bygger och utvecklar komplexa mjukvarusystem.",
    "I help technology leaders understand architectural risks, make difficult technical decisions and design pragmatic paths from where their systems are today to where they need to be tomorrow.": "Jag hjälper teknikledare att förstå arkitekturrisker, fatta svåra tekniska beslut och utforma pragmatiska vägar från dagens system till morgondagens behov.",
    "See Experience": "Se erfarenhet",
    "Clear decisions": "Tydliga beslut",
    "Complex systems need clear decisions": "Komplexa system behöver tydliga beslut",
    "As systems grow, architectural problems rarely appear in isolation. A legacy platform becomes harder to change. Integrations multiply. Services become increasingly dependent on each other. Cloud decisions introduce new trade-offs.": "När system växer uppstår arkitekturproblem sällan isolerat. En äldre plattform blir svårare att förändra. Integrationer blir fler. Tjänster blir alltmer beroende av varandra. Molnbeslut introducerar nya avvägningar.",
    "Sometimes the question is not how to implement the next feature, but whether the underlying architecture is still taking the organization in the right direction.": "Ibland är frågan inte hur nästa funktion ska implementeras, utan om den underliggande arkitekturen fortfarande leder organisationen åt rätt håll.",
    "I help organizations step back, understand the bigger picture and make those decisions with confidence.": "Jag hjälper organisationer att ta ett steg tillbaka, förstå helheten och fatta besluten med större trygghet.",
    "Services": "Tjänster",
    "How I can help": "Så kan jag hjälpa till",
    "Independent Architecture Review": "Oberoende arkitekturgranskning",
    "Get an experienced external perspective on an existing or proposed architecture, with risks and decisions made visible before they become expensive problems.": "Få ett erfaret externt perspektiv på en befintlig eller föreslagen arkitektur, där risker och beslut synliggörs innan de blir dyra problem.",
    "Explore Architecture Review": "Utforska arkitekturgranskning",
    "Modernization & Target Architecture": "Modernisering och målarkitektur",
    "Assess existing systems, identify boundaries and define a pragmatic target architecture and migration path that balances improvement with reality.": "Utvärdera befintliga system, identifiera gränser och definiera en pragmatisk målarkitektur och migrationsväg som balanserar förbättring med verklighet.",
    "Explore Modernization": "Utforska modernisering",
    "Integration & Event-Driven Architecture": "Integration och händelsedriven arkitektur",
    "Reduce coupling and design clearer integration boundaries across APIs, Kafka, messaging and event-driven patterns.": "Minska kopplingar och skapa tydligare integrationsgränser över API:er, Kafka, meddelanden och händelsedrivna mönster.",
    "Explore Integration": "Utforska integration",
    "Cloud Architecture": "Molnarkitektur",
    "Make cloud decisions based on architectural needs around scalability, resilience, security and operational complexity.": "Fatta molnbeslut utifrån arkitekturbehov kring skalbarhet, robusthet, säkerhet och operativ komplexitet.",
    "Explore Cloud Architecture": "Utforska molnarkitektur",
    "Implementation grounded": "Förankrat i implementation",
    "Architecture grounded in implementation experience": "Arkitektur grundad i implementationserfarenhet",
    "Good architecture needs more than diagrams and principles. Before becoming a Solution Architect, I spent around a decade building and maintaining software systems as a developer and senior developer.": "Bra arkitektur kräver mer än diagram och principer. Innan jag blev Solution Architect ägnade jag ungefär ett decennium åt att bygga och underhålla mjukvarusystem som utvecklare och senior utvecklare.",
    "Can teams realistically build it?": "Kan teamen realistiskt bygga det?",
    "Can it be deployed and operated effectively?": "Kan det driftsättas och drivas effektivt?",
    "How will systems fail?": "Hur kommer systemen att fallera?",
    "Where will coupling appear over time?": "Var kommer kopplingar att uppstå över tid?",
    "What happens when requirements change?": "Vad händer när kraven förändras?",
    "Is the added complexity actually justified?": "Är den extra komplexiteten faktiskt motiverad?",
    "The goal is architecture that helps the organization move forward.": "Målet är arkitektur som hjälper organisationen framåt.",
    "Experience with complex environments": "Erfarenhet av komplexa miljöer",
    "My experience spans software development and solution architecture across automotive and manufacturing, public-sector systems and financial services.": "Min erfarenhet omfattar mjukvaruutveckling och lösningsarkitektur inom fordons- och tillverkningsindustri, offentlig sektor och finansiella tjänster.",
    "Engagement": "Arbetssätt",
    "From review to implementation": "Från granskning till implementation",
    "Understand": "Förstå",
    "Explore the existing system, constraints, business drivers and technical challenges.": "Utforska befintligt system, begränsningar, affärsdrivkrafter och tekniska utmaningar.",
    "Assess": "Bedöm",
    "Identify architectural risks, bottlenecks, unnecessary complexity and important decisions.": "Identifiera arkitekturrisker, flaskhalsar, onödig komplexitet och viktiga beslut.",
    "Design": "Designa",
    "Define architecture principles, target architecture, system boundaries and technology choices.": "Definiera arkitekturprinciper, målarkitektur, systemgränser och teknikval.",
    "Plan": "Planera",
    "Turn recommendations into realistic modernization or implementation steps.": "Omvandla rekommendationer till realistiska steg för modernisering eller implementation.",
    "Support": "Stötta",
    "Work alongside engineering teams so architecture survives contact with reality.": "Arbeta tillsammans med utvecklingsteam så att arkitekturen fungerar i praktiken.",
    "Selected work": "Utvald erfarenhet",
    "Selected experience": "Utvald arkitekturerfarenhet",
    "Modernizing a legacy enterprise platform": "Modernisering av en äldre enterprise-plattform",
    "Assessment and modernization of a tightly coupled WCF-based system with performance, maintenance, deployment and security challenges.": "Bedömning och modernisering av ett tätt kopplat WCF-baserat system med utmaningar kring prestanda, underhåll, driftsättning och säkerhet.",
    "Read the case study": "Läs fallstudien",
    "Evolving a globally distributed enterprise system": "Vidareutveckling av ett globalt distribuerat enterprise-system",
    "Architecture and technical leadership for a distributed system operating through multiple instances across several continents while sharing a common codebase.": "Arkitektur och tekniskt ledarskap för ett distribuerat system med flera instanser över flera kontinenter och en gemensam kodbas.",
    "Start with the problem": "Börja med problemet",
    "Have an architecture decision you're uncertain about?": "Har du ett arkitekturbeslut du är osäker på?",
    "You don't need to know which service you need. Tell me what you're building, changing or struggling with, and we'll start with the problem.": "Du behöver inte veta vilken tjänst du behöver. Berätta vad du bygger, förändrar eller kämpar med, så börjar vi med problemet.",
    "Start a Conversation": "Starta en konversation",
    "See your architecture from a different perspective.": "Se din arkitektur ur ett annat perspektiv.",
    "An independent architecture review helps you identify risks, challenge assumptions and prioritize the decisions that matter before committing more time and money.": "En oberoende arkitekturgranskning hjälper dig att identifiera risker, utmana antaganden och prioritera de beslut som spelar roll innan mer tid och pengar investeras.",
    "When a review is useful": "När en granskning är värdefull",
    "What I look at": "Vad jag tittar på",
    "What you receive": "Vad du får",
    "Outcomes": "Resultat",
    "Independent perspective. Practical recommendations.": "Oberoende perspektiv. Praktiska rekommendationer.",
    "Discuss an Architecture Review": "Diskutera en arkitekturgranskning",
    "Modernize deliberately, not because everything old needs replacing.": "Modernisera medvetet, inte för att allt gammalt måste ersättas.",
    "From current state to target architecture": "Från nuläge till målarkitektur",
    "Modernization without unnecessary complexity": "Modernisering utan onödig komplexitet",
    "Relevant experience": "Relevant erfarenhet",
    "Discuss Your Modernization": "Diskutera din modernisering",
    "Integration should connect your systems without tying them together.": "Integration ska koppla ihop system utan att binda fast dem.",
    "Areas I can help with": "Områden där jag kan hjälpa till",
    "Synchronous or asynchronous?": "Synkront eller asynkront?",
    "Experience across distributed landscapes": "Erfarenhet från distribuerade landskap",
    "Discuss Your Integration Architecture": "Diskutera din integrationsarkitektur",
    "Use the cloud to solve architectural problems, not create new ones.": "Använd molnet för att lösa arkitekturproblem, inte skapa nya.",
    "Cloud architecture decisions": "Beslut inom molnarkitektur",
    "Choosing between valid options": "Att välja mellan giltiga alternativ",
    "AWS experience": "AWS-erfarenhet",
    "Discuss Your Cloud Architecture": "Diskutera din molnarkitektur",
    "Real architecture is shaped by constraints.": "Verklig arkitektur formas av begränsningar.",
    "These anonymized examples illustrate the type of systems, decisions and transformations I've worked with.": "Dessa anonymiserade exempel visar vilken typ av system, beslut och förändringar jag har arbetat med.",
    "Engineering foundation": "Teknisk grund",
    "Earlier engineering experience": "Tidigare utvecklingserfarenhet",
    "Founder & Solution Architect": "Grundare och Solution Architect",
    "Mohamad Zamam": "Mohamad Zamam",
    "From code to architecture": "Från kod till arkitektur",
    "Areas of focus": "Fokusområden",
    "Background": "Bakgrund",
    "15+ years in software and technology": "15+ år inom mjukvara och teknik",
    "Based in Sweden. Working internationally.": "Baserad i Sverige. Arbetar internationellt.",
    "Let's Talk": "Låt oss prata",
    "Let's start with the problem.": "Låt oss börja med problemet.",
    "Start a conversation": "Starta en konversation",
    "Or connect with": "Eller kontakta",
    "Mohamad Zamam on LinkedIn": "Mohamad Zamam på LinkedIn",
    "Name": "Namn",
    "Company": "Företag",
    "Work email": "Arbetsmejl",
    "What would you like help with?": "Vad vill du ha hjälp med?",
    "Tell me briefly what's happening": "Berätta kort vad som händer",
    "Not sure what kind of architecture help you need?": "Osäker på vilken arkitekturhjälp du behöver?",
    "Tell Me About the Problem": "Berätta om problemet",
    "LinkedIn": "LinkedIn",
    "© 2026 Solve IT Smart": "© 2026 Solve IT Smart"
  },
  ar: {
    "Architecture & Technology Advisory": "استشارات الهندسة التقنية والمعمارية",
    "Home": "الرئيسية",
    "Review": "مراجعة",
    "Modernization": "التحديث",
    "Integration": "التكامل",
    "Cloud": "السحابة",
    "Experience": "الخبرة",
    "About": "نبذة",
    "Contact": "تواصل",
    "Discuss Your Architecture": "ناقش معماريتك",
    "Stockholm, Sweden · Working internationally": "ستوكهولم، السويد · أعمل دوليا",
    "Architecture that works beyond the diagram.": "معمارية تعمل خارج حدود الرسم التخطيطي.",
    "Independent architecture review, modernization and technical leadership for organizations building and evolving complex software systems.": "مراجعة معمارية مستقلة، وتحديث، وقيادة تقنية للمنظمات التي تبني وتطور أنظمة برمجية معقدة.",
    "I help technology leaders understand architectural risks, make difficult technical decisions and design pragmatic paths from where their systems are today to where they need to be tomorrow.": "أساعد قادة التقنية على فهم مخاطر المعمارية، واتخاذ القرارات التقنية الصعبة، وتصميم مسارات عملية من وضع أنظمتهم الحالي إلى ما تحتاجه غدا.",
    "See Experience": "استعرض الخبرة",
    "Clear decisions": "قرارات واضحة",
    "Complex systems need clear decisions": "الأنظمة المعقدة تحتاج إلى قرارات واضحة",
    "As systems grow, architectural problems rarely appear in isolation. A legacy platform becomes harder to change. Integrations multiply. Services become increasingly dependent on each other. Cloud decisions introduce new trade-offs.": "مع نمو الأنظمة، نادرا ما تظهر مشكلات المعمارية بمعزل عن غيرها. تصبح المنصات القديمة أصعب في التغيير، وتزداد التكاملات، وتصبح الخدمات أكثر اعتمادا على بعضها، وتضيف قرارات السحابة مفاضلات جديدة.",
    "Sometimes the question is not how to implement the next feature, but whether the underlying architecture is still taking the organization in the right direction.": "أحيانا لا يكون السؤال هو كيفية تنفيذ الميزة التالية، بل ما إذا كانت المعمارية الأساسية ما زالت تقود المنظمة في الاتجاه الصحيح.",
    "I help organizations step back, understand the bigger picture and make those decisions with confidence.": "أساعد المنظمات على التراجع خطوة، وفهم الصورة الأكبر، واتخاذ تلك القرارات بثقة.",
    "Services": "الخدمات",
    "How I can help": "كيف يمكنني المساعدة",
    "Independent Architecture Review": "مراجعة معمارية مستقلة",
    "Get an experienced external perspective on an existing or proposed architecture, with risks and decisions made visible before they become expensive problems.": "احصل على منظور خارجي خبير حول معمارية قائمة أو مقترحة، مع توضيح المخاطر والقرارات قبل أن تصبح مشكلات مكلفة.",
    "Explore Architecture Review": "استكشف مراجعة المعمارية",
    "Modernization & Target Architecture": "التحديث والمعمارية المستهدفة",
    "Assess existing systems, identify boundaries and define a pragmatic target architecture and migration path that balances improvement with reality.": "تقييم الأنظمة القائمة، وتحديد الحدود، وتعريف معمارية مستهدفة ومسار انتقال عملي يوازن بين التحسين والواقع.",
    "Explore Modernization": "استكشف التحديث",
    "Integration & Event-Driven Architecture": "التكامل والمعمارية المعتمدة على الأحداث",
    "Reduce coupling and design clearer integration boundaries across APIs, Kafka, messaging and event-driven patterns.": "تقليل الترابط وتصميم حدود تكامل أوضح عبر واجهات API وKafka والرسائل والأنماط المعتمدة على الأحداث.",
    "Explore Integration": "استكشف التكامل",
    "Cloud Architecture": "معمارية السحابة",
    "Make cloud decisions based on architectural needs around scalability, resilience, security and operational complexity.": "اتخاذ قرارات السحابة بناء على احتياجات المعمارية في قابلية التوسع والمرونة والأمان والتعقيد التشغيلي.",
    "Explore Cloud Architecture": "استكشف معمارية السحابة",
    "Implementation grounded": "مرتكز على التنفيذ",
    "Architecture grounded in implementation experience": "معمارية مبنية على خبرة تنفيذية",
    "Good architecture needs more than diagrams and principles. Before becoming a Solution Architect, I spent around a decade building and maintaining software systems as a developer and senior developer.": "المعمارية الجيدة تحتاج إلى أكثر من الرسوم والمبادئ. قبل أن أصبح Solution Architect، قضيت نحو عقد في بناء وصيانة الأنظمة البرمجية كمطور ومطور أول.",
    "Can teams realistically build it?": "هل تستطيع الفرق بناءها واقعيا؟",
    "Can it be deployed and operated effectively?": "هل يمكن نشرها وتشغيلها بفعالية؟",
    "How will systems fail?": "كيف يمكن أن تفشل الأنظمة؟",
    "Where will coupling appear over time?": "أين سيظهر الترابط مع مرور الوقت؟",
    "What happens when requirements change?": "ماذا يحدث عندما تتغير المتطلبات؟",
    "Is the added complexity actually justified?": "هل التعقيد الإضافي مبرر فعلا؟",
    "The goal is architecture that helps the organization move forward.": "الهدف هو معمارية تساعد المنظمة على التقدم.",
    "Experience with complex environments": "خبرة في بيئات معقدة",
    "My experience spans software development and solution architecture across automotive and manufacturing, public-sector systems and financial services.": "تمتد خبرتي في تطوير البرمجيات ومعمارية الحلول عبر قطاعات السيارات والتصنيع والقطاع العام والخدمات المالية.",
    "Engagement": "أسلوب العمل",
    "From review to implementation": "من المراجعة إلى التنفيذ",
    "Understand": "الفهم",
    "Explore the existing system, constraints, business drivers and technical challenges.": "استكشاف النظام الحالي والقيود والدوافع التجارية والتحديات التقنية.",
    "Assess": "التقييم",
    "Identify architectural risks, bottlenecks, unnecessary complexity and important decisions.": "تحديد مخاطر المعمارية والاختناقات والتعقيد غير الضروري والقرارات المهمة.",
    "Design": "التصميم",
    "Define architecture principles, target architecture, system boundaries and technology choices.": "تعريف مبادئ المعمارية والمعمارية المستهدفة وحدود الأنظمة والاختيارات التقنية.",
    "Plan": "التخطيط",
    "Turn recommendations into realistic modernization or implementation steps.": "تحويل التوصيات إلى خطوات تحديث أو تنفيذ واقعية.",
    "Support": "الدعم",
    "Work alongside engineering teams so architecture survives contact with reality.": "العمل إلى جانب فرق الهندسة حتى تصمد المعمارية أمام الواقع.",
    "Selected work": "أعمال مختارة",
    "Selected experience": "خبرة معمارية مختارة",
    "Modernizing a legacy enterprise platform": "تحديث منصة مؤسسية قديمة",
    "Assessment and modernization of a tightly coupled WCF-based system with performance, maintenance, deployment and security challenges.": "تقييم وتحديث نظام WCF مترابط بشدة ويواجه تحديات في الأداء والصيانة والنشر والأمان.",
    "Read the case study": "اقرأ دراسة الحالة",
    "Evolving a globally distributed enterprise system": "تطوير نظام مؤسسي موزع عالميا",
    "Architecture and technical leadership for a distributed system operating through multiple instances across several continents while sharing a common codebase.": "معمارية وقيادة تقنية لنظام موزع يعمل عبر عدة نسخ في قارات متعددة مع قاعدة شيفرة مشتركة.",
    "Start with the problem": "ابدأ بالمشكلة",
    "Have an architecture decision you're uncertain about?": "هل لديك قرار معماري غير متأكد منه؟",
    "You don't need to know which service you need. Tell me what you're building, changing or struggling with, and we'll start with the problem.": "لا تحتاج إلى معرفة الخدمة التي تحتاجها. أخبرني بما تبنيه أو تغيره أو تواجه صعوبة فيه، وسنبدأ من المشكلة.",
    "Start a Conversation": "ابدأ المحادثة",
    "See your architecture from a different perspective.": "انظر إلى معماريتك من منظور مختلف.",
    "An independent architecture review helps you identify risks, challenge assumptions and prioritize the decisions that matter before committing more time and money.": "تساعدك المراجعة المعمارية المستقلة على تحديد المخاطر، وتحدي الافتراضات، وترتيب القرارات المهمة قبل استثمار مزيد من الوقت والمال.",
    "When a review is useful": "متى تكون المراجعة مفيدة",
    "What I look at": "ما الذي أراجعه",
    "What you receive": "ما الذي تحصل عليه",
    "Outcomes": "المخرجات",
    "Independent perspective. Practical recommendations.": "منظور مستقل. توصيات عملية.",
    "Discuss an Architecture Review": "ناقش مراجعة معمارية",
    "Modernize deliberately, not because everything old needs replacing.": "حدّث بوعي، لا لأن كل ما هو قديم يجب استبداله.",
    "From current state to target architecture": "من الوضع الحالي إلى المعمارية المستهدفة",
    "Modernization without unnecessary complexity": "تحديث بلا تعقيد غير ضروري",
    "Relevant experience": "خبرة ذات صلة",
    "Discuss Your Modernization": "ناقش تحديثك",
    "Integration should connect your systems without tying them together.": "ينبغي للتكامل أن يربط أنظمتك دون أن يقيدها ببعضها.",
    "Areas I can help with": "مجالات يمكنني المساعدة فيها",
    "Synchronous or asynchronous?": "متزامن أم غير متزامن؟",
    "Experience across distributed landscapes": "خبرة عبر بيئات موزعة",
    "Discuss Your Integration Architecture": "ناقش معمارية التكامل",
    "Use the cloud to solve architectural problems, not create new ones.": "استخدم السحابة لحل مشكلات معمارية، لا لإنشاء مشكلات جديدة.",
    "Cloud architecture decisions": "قرارات معمارية السحابة",
    "Choosing between valid options": "الاختيار بين خيارات صحيحة",
    "AWS experience": "خبرة AWS",
    "Discuss Your Cloud Architecture": "ناقش معمارية السحابة",
    "Real architecture is shaped by constraints.": "المعمارية الحقيقية تتشكل بالقيود.",
    "These anonymized examples illustrate the type of systems, decisions and transformations I've worked with.": "توضح هذه الأمثلة المجهولة نوع الأنظمة والقرارات والتحولات التي عملت عليها.",
    "Engineering foundation": "أساس هندسي",
    "Earlier engineering experience": "خبرة هندسية سابقة",
    "Founder & Solution Architect": "المؤسس وSolution Architect",
    "Mohamad Zamam": "محمد زمام",
    "From code to architecture": "من الشيفرة إلى المعمارية",
    "Areas of focus": "مجالات التركيز",
    "Background": "الخلفية",
    "15+ years in software and technology": "أكثر من 15 عاما في البرمجيات والتقنية",
    "Based in Sweden. Working internationally.": "مقيم في السويد. أعمل دوليا.",
    "Let's Talk": "لنتحدث",
    "Let's start with the problem.": "لنبدأ بالمشكلة.",
    "Start a conversation": "ابدأ محادثة",
    "Or connect with": "أو تواصل مع",
    "Mohamad Zamam on LinkedIn": "محمد زمام على LinkedIn",
    "Name": "الاسم",
    "Company": "الشركة",
    "Work email": "البريد المهني",
    "What would you like help with?": "بماذا تريد المساعدة؟",
    "Tell me briefly what's happening": "أخبرني باختصار بما يحدث",
    "Not sure what kind of architecture help you need?": "لست متأكدا من نوع المساعدة المعمارية التي تحتاجها؟",
    "Tell Me About the Problem": "أخبرني عن المشكلة",
    "LinkedIn": "LinkedIn",
    "© 2026 Solve IT Smart": "© 2026 Solve IT Smart"
  },
};

const titles = {
  sv: {
    "/": "Solve IT Smart | Arkitektur- och teknikrådgivning",
    "/architecture-review/": "Arkitekturgranskning | Solve IT Smart",
    "/modernization/": "Modernisering och målarkitektur | Solve IT Smart",
    "/integration/": "Integration och händelsedriven arkitektur | Solve IT Smart",
    "/cloud-architecture/": "Molnarkitektur | Solve IT Smart",
    "/experience/": "Erfarenhet | Solve IT Smart",
    "/about/": "Om Mohamad Zamam | Solve IT Smart",
    "/contact/": "Kontakt | Solve IT Smart",
  },
  ar: {
    "/": "Solve IT Smart | استشارات الهندسة التقنية والمعمارية",
    "/architecture-review/": "مراجعة معمارية | Solve IT Smart",
    "/modernization/": "التحديث والمعمارية المستهدفة | Solve IT Smart",
    "/integration/": "التكامل والمعمارية المعتمدة على الأحداث | Solve IT Smart",
    "/cloud-architecture/": "معمارية السحابة | Solve IT Smart",
    "/experience/": "الخبرة | Solve IT Smart",
    "/about/": "نبذة عن محمد زمام | Solve IT Smart",
    "/contact/": "تواصل | Solve IT Smart",
  },
};

function canonicalPath(pathname) {
  // The asset URL identifies the site root on both project Pages and custom domains.
  let path = pathname.startsWith(siteBasePath)
    ? `/${pathname.slice(siteBasePath.length)}`
    : pathname;
  path = path.replace(/^\/(sv|ar)(?=\/|$)/, "").replace(/\/index\.html$/, "/");
  if (!path) path = "/";
  if (!path.endsWith("/") && !path.endsWith(".html")) path += "/";
  return path;
}

function localizedPath(lang) {
  const path = canonicalPath(window.location.pathname);
  const languagePrefix = lang === "en" ? "" : `${lang}/`;
  return `${siteBasePath}${languagePrefix}${path.slice(1)}`;
}

function addLanguageSwitcher() {
  if (!menu) return;
  const switcher = document.createElement("div");
  switcher.className = "language-switcher";
  switcher.setAttribute("aria-label", "Language");

  languages.forEach((language) => {
    const link = document.createElement("a");
    link.href = localizedPath(language.code);
    link.hreflang = language.code;
    link.lang = language.code;
    link.textContent = language.label;
    link.title = language.name;
    if (language.code === currentLang) link.setAttribute("aria-current", "true");
    switcher.appendChild(link);
  });

  menu.appendChild(switcher);
}

function translateText() {
  const dictionary = translations[currentLang];
  if (!dictionary) return;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement.closest("script, style")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const original = node.nodeValue;
    const trimmed = original.trim();
    if (!dictionary[trimmed]) return;
    node.nodeValue = original.replace(trimmed, dictionary[trimmed]);
  });

  const path = canonicalPath(window.location.pathname);
  if (titles[currentLang] && titles[currentLang][path]) {
    document.title = titles[currentLang][path];
  }
}

translateText();
addLanguageSwitcher();

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    menu.classList.toggle("is-open", !isOpen);
  });
}

document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm) {
  const status = contactForm.querySelector("[data-form-status]");

  contactForm.addEventListener("submit", (event) => {
    const action = contactForm.getAttribute("action") || "";
    if (action.includes("REPLACE_ME")) {
      event.preventDefault();
      if (status) {
        status.textContent = "Thanks for reaching out. Replace the form endpoint before publishing to receive submissions.";
      }
    }
  });
}
