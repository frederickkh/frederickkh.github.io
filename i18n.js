// Language toggle — English / 简体中文.
// Elements carrying data-i18n="key" are swapped to the active language.
// Choice persists in localStorage ('lang'); default is English.
(function () {
  const KEY = 'lang';

  const DICT = {
    en: {
      // shared
      'nav.home': 'Home',
      'nav.projects': 'Projects',
      'nav.teaching': 'Teaching',
      'nav.connect': 'Connect',
      'footer.updated': 'Last updated Nov 2026',

      // ---- index ----
      'index.tagline': 'Ph.D. student in Intelligent Transportation &middot; The Hong Kong University of Science and Technology (Guangzhou)',
      'index.bio': `I am a Ph.D. student in Intelligent Transportation at the Hong Kong University of Science and Technology (Guangzhou), where I joined the <a href="https://benedictjunma.github.io/people/" target="_blank" rel="noopener">Intelligent Logistics &amp; Supply Chain Analytics (iLSCA) Lab</a> supervised by Prof. Benedict Jun Ma. Before that, I earned my B.Sc. in Data Science and Big Data Technology from the Chinese University of Hong Kong, Shenzhen, with First Class Honours. My research lies in <strong>human-centered intelligent operations</strong> and <strong>human&ndash;AI decision-making</strong>.`,
      'index.news1': 'Excited to start my Ph.D. in Intelligent Transportation at HKUST (Guangzhou).',
      'index.news2': 'Graduated with First Class Honours in Data Science and Big Data Technology from CUHK (Shenzhen).',
      'index.h-news': 'News',
      'index.h-research': 'Research',
      'index.res1': `My research lies in <strong>human-centered intelligent operations</strong> and <strong>human&ndash;AI decision-making</strong> &mdash; developing intelligent operational systems that make better decisions by learning from human behavior, and adapting how humans and AI collaborate under uncertainty.`,
      'index.res2': `I am interested in operations research and sequential decision-making, machine learning and reinforcement learning, and behavioral operations management, with a shared goal of building decision support that keeps the human meaningfully in the loop.`,
      'index.h-edu': 'Education',
      'index.edu1what': 'Ph.D. in Intelligent Transportation',
      'index.edu1where': 'The Hong Kong University of Science and Technology (Guangzhou)',
      'index.edu1when': 'Sept 2026 &ndash; Jun 2030 (expected)',
      'index.edu1hl1': `<a href="https://benedictjunma.github.io/people/" target="_blank" rel="noopener">Intelligent Logistics &amp; Supply Chain Analytics (iLSCA) Lab</a>, supervised by Prof. Benedict Jun Ma`,
      'index.edu1hl2': 'Postgraduate Studentship Recipient',
      'index.edu2what': 'B.Sc. in Data Science and Big Data Technology &middot; First Class Honours',
      'index.edu2where': 'The Chinese University of Hong Kong (Shenzhen)',
      'index.edu2when': 'Sept 2022 &ndash; Jun 2026',
      'index.edu2hl1': 'CGPA: 3.74 / 4.00 &middot; MGPA: 3.74 / 4.00',
      'index.edu2hl2': `<strong>Relevant courses:</strong> Mathematical Statistics, Optimization, Advanced Machine Learning, Reinforcement Learning, Stochastic Processes &amp; Simulation, Natural Language Processing, Deep Learning and Applications`,
      'index.h-awards': 'Awards &amp; Scholarships',
      'index.aw1': 'Guangdong Government Outstanding International Student Scholarship (2022, 2023, 2026)',
      'index.aw2': 'HKUST (GZ) Postgraduate Studentship (2026)',
      'index.aw3': 'Outstanding Graduate Award &mdash; Muse College (2026)',
      'index.aw4': "Dean's List, School of Data Science (2023, 2024, 2025, 2026)",
      'index.aw5': 'Excellent Student Leader Award &mdash; University Honors (2025)',
      'index.aw6': 'Outstanding Leadership Award &mdash; Muse College (2024, 2025)',
      'index.aw7': 'Shenzhen Universiade International Student Scholarship (2024)',
      'index.aw8': 'Academic Performance Scholarship Class C (2023)',
      'index.aw9': '3rd Prize &mdash; CUHK (SZ) Programming Contest (2023)',
      'index.aw10': 'CUHK (SZ) Full Tuition and Accommodation Scholarship (2022 &ndash; 2026)',

      // ---- projects ----
      'proj.h1': 'Research &amp; Projects',
      'proj.tagline': 'Research experience and selected projects',
      'proj.intro': `My research experience so far, plus selected projects from coursework. Smaller experiments live on my <a href="https://github.com/frederickkh" target="_blank" rel="noopener">GitHub</a>.`,
      'proj.h-research': 'Research Experience',
      'proj.re1what': 'Research Assistant &mdash; Offensive Speech Detection Project',
      'proj.re1where': "CUHK (Shenzhen) &middot; Prof. Benyou Wang's research group",
      'proj.re1when': 'Sep 2025 &ndash; Nov 2025',
      'proj.re1hl1': 'Conducted a literature review on transformer-based hate-speech detection.',
      'proj.re1hl2': 'Collected existing datasets for supervised classification.',
      'proj.re2what': 'Summer Research Intern &mdash; VLAA Lab',
      'proj.re2where': 'University of California, Santa Cruz &middot; supervised by Hardy Chen and Prof. Cihang Xie',
      'proj.re2when': 'Jul 2025 &ndash; Aug 2025',
      'proj.re2hl1': 'Reviewed vision-language model literature (e.g., LLaVA, LLaVA-CoT) and multimodal architectures.',
      'proj.h-courses': 'Selected Course Projects',
      'proj.p1title': 'RAG System for Internal Knowledge Management',
      'proj.p1desc': 'Worked on a capstone project building a multilingual, source-grounded RAG chatbot over internal Notion PDF documentation.',
      'proj.p1meta': 'Capstone Project &middot; 2026 Spring',
      'proj.p2title': 'Evaluation of LLMs on Jailbreak &amp; Adversarial Attacks',
      'proj.p2desc': 'Evaluated LLaMA, Qwen, and Mistral across 100 jailbreak prompts spanning six attack categories.',
      'proj.p2meta': 'Natural Language Processing &middot; 2025 Fall',
      'proj.p3title': 'Diffusion Models for X-ray Image Generation',
      'proj.p3desc': 'Implemented DDPM for medical X-ray image generation in PyTorch.',
      'proj.p3meta': `<a href="https://github.com/frederickkh/DDA4220-project" target="_blank" rel="noopener">[GitHub]</a>&ensp;Deep Learning and Applications &middot; 2025 Fall`,
      'proj.p4title': 'KnowYourBody',
      'proj.p4desc': 'Developed a web app integrating LLM APIs for educational and personalized health analytics.',
      'proj.p4meta': `<a href="https://github.com/frederickkh/KnowYourBody" target="_blank" rel="noopener">[GitHub]</a>&ensp;AI Practicum &middot; 2025 Fall`,
      'proj.p5title': 'Online Linear Programming &amp; Resource Allocation',
      'proj.p5desc': 'Compared online allocation algorithms against an offline LP benchmark.',
      'proj.p5meta': 'Optimization in DS and ML &middot; 2025 Spring',
      'proj.p6title': 'SmartBot: Clinic Appointment Chatbot',
      'proj.p6desc': 'Developed an appointment scheduling chatbot using AWS Cloud Functions.',
      'proj.p6meta': 'Cloud Computing &middot; 2024 Fall',

      // ---- teaching ----
      'teach.h1': 'Teaching',
      'teach.tagline': 'Teaching, leadership, and service',
      'teach.intro': 'I served as an Undergraduate Student Teaching Fellow at CUHK (Shenzhen) across five courses, spanning programming, machine learning, and statistics.',
      'teach.h-courses': 'Courses',
      'teach.where': 'Undergraduate Student Teaching Fellow &middot; CUHK (Shenzhen)',
      'teach.c1hl1': 'Led tutorials on input and output analysis, simulation optimization, and stochastic gradient descent.',
      'teach.c1hl2': 'Conducted a midterm exam review session covering key topics and practice problems.',
      'teach.c2hl1': 'Led tutorials on point estimation, interval estimation, hypothesis testing, and order statistics.',
      'teach.c2hl2': 'Conducted a midterm exam review session covering key topics and practice problems.',
      'teach.c3hl1': 'Led weekly tutorials on statistical methods including Chi-square tests, ANOVA, linear regression, and likelihood ratio tests.',
      'teach.c3hl2': 'Conducted a final exam review session covering key topics and practice problems.',
      'teach.c3hl3': 'Designed two homework assignments on hypothesis testing, ANOVA, and regression analysis.',
      'teach.c4hl1': 'Held office hours to assist students in understanding course materials.',
      'teach.c5hl1': 'Led weekly Python tutorials for first-year students, covering control flow, data structures, and functions.',
      'teach.c5hl2': 'Created problem sets and live-coding examples to support learning and engagement.',
      'teach.c5hl3': 'Graded assignments and provided feedback to help students improve coding and debugging skills.',
      'teach.h-leadership': 'Leadership &amp; Service',
      'teach.l1what': 'Peer Advisor Group Leader',
      'teach.l1where': 'School of Data Science, CUHK (Shenzhen)',
      'teach.l1when': 'Sep 2024 &ndash; Jul 2025',
      'teach.l1hl1': 'Coordinated group meetings between academic advisors, peer mentors, and freshmen to foster communication and academic guidance.',
      'teach.l1hl2': 'Mentored first-year students on academic planning, study strategies, and campus adaptation.',
      'teach.l2what': 'Vice Chair, Academic and Career Support Department',
      'teach.l2where': "International Students' Association, CUHK (Shenzhen)",
      'teach.l2when': 'Aug 2023 &ndash; Jul 2024',
      'teach.l2hl1': "Organized mentoring programs, academic talks, and alumni panels to support students' academic and career development.",
      'teach.l2hl2': 'Coordinated company sharing sessions and site visits to provide exposure to real-world industry practices.',
      'teach.l3what': 'University Library Student Assistant',
      'teach.l3where': 'CUHK (Shenzhen)',
      'teach.l3when': 'Feb 2023 &ndash; May 2024',
      'teach.l3hl1': 'Assisted with material cataloging and provided logistical support for library workshops and student events.',

      // ---- connect ----
      'conn.h1': 'Connect',
      'conn.tagline': "Hey, let's get in touch!",
      'conn.intro': `I'm happy to talk about research, collaborations, or anything else! You can also find me on the platforms below.`,
      'conn.h-reach': 'Reach me',
      'conn.label-email': 'Email',
      'conn.wa-value': 'Send me a quick text'
    },

    zh: {
      // shared
      'nav.home': '首页',
      'nav.projects': '科研与项目',
      'nav.teaching': '教学',
      'nav.connect': '联系',
      'footer.updated': '最近更新：2026 年 11 月',

      // ---- index ----
      'index.tagline': '智能交通博士生 &middot; 香港科技大学（广州）',
      'index.bio': `我是香港科技大学（广州）智能交通专业博士生，加入由 Prof. Benedict Jun Ma 指导的<a href="https://benedictjunma.github.io/people/" target="_blank" rel="noopener">智能物流与供应链分析（iLSCA）实验室</a>。此前，我在香港中文大学（深圳）获得数据科学与大数据技术理学学士学位，并以一等荣誉毕业。我的研究方向是<strong>以人为中心的智能运营</strong>与<strong>人机协同决策</strong>。`,
      'index.news1': '很高兴在香港科技大学（广州）开始我的智能交通博士生涯。',
      'index.news2': '在香港中文大学（深圳）以一等荣誉毕业，获数据科学与大数据技术学士学位。',
      'index.h-news': '动态',
      'index.h-research': '研究方向',
      'index.res1': `我的研究聚焦<strong>以人为中心的智能运营</strong>与<strong>人机协同决策</strong>——构建能够从人类行为中学习、从而做出更优决策的智能运营系统，并在不确定性下动态调整人与 AI 的协作方式。`,
      'index.res2': `我的方法论兴趣涵盖运筹学与序贯决策、机器学习与强化学习、以及行为运营管理，共同目标是构建真正让“人”发挥关键作用的决策支持系统。`,
      'index.h-edu': '教育经历',
      'index.edu1what': '智能交通哲学博士（Ph.D.）',
      'index.edu1where': '香港科技大学（广州）',
      'index.edu1when': '2026 年 9 月 – 2030 年 6 月（预计）',
      'index.edu1hl1': `由 Prof. Benedict Jun Ma 指导的<a href="https://benedictjunma.github.io/people/" target="_blank" rel="noopener">智能物流与供应链分析（iLSCA）实验室</a>`,
      'index.edu1hl2': '博士生奖学金（Postgraduate Studentship）获得者',
      'index.edu2what': '数据科学与大数据技术理学士 · 一等荣誉',
      'index.edu2where': '香港中文大学（深圳）',
      'index.edu2when': '2022 年 9 月 – 2026 年 6 月',
      'index.edu2hl1': 'CGPA：3.74 / 4.00 &middot; MGPA：3.74 / 4.00',
      'index.edu2hl2': `<strong>相关课程：</strong>数理统计、最优化、高级机器学习、强化学习、随机过程与仿真、自然语言处理、深度学习及其应用`,
      'index.h-awards': '荣誉与奖学金',
      'index.aw1': '广东省政府优秀国际学生奖学金（2022、2023、2026）',
      'index.aw2': '香港科技大学（广州）博士生奖学金（2026）',
      'index.aw3': '杰出毕业生奖 —— Muse College（2026）',
      'index.aw4': '数据科学学院院长名录（Dean&rsquo;s List）（2023、2024、2025、2026）',
      'index.aw5': '优秀学生领袖奖 —— University Honors（2025）',
      'index.aw6': '杰出领导力奖 —— Muse College（2024、2025）',
      'index.aw7': '深圳大运国际学生奖学金（2024）',
      'index.aw8': '学业表现奖学金 C 类（2023）',
      'index.aw9': '香港中文大学（深圳）编程竞赛三等奖（2023）',
      'index.aw10': '香港中文大学（深圳）全额学费与住宿奖学金（2022 – 2026）',

      // ---- projects ----
      'proj.h1': '科研与项目',
      'proj.tagline': '科研经历与精选项目',
      'proj.intro': `目前为止的科研经历，以及精选课程项目。更小的实验见我的 <a href="https://github.com/frederickkh" target="_blank" rel="noopener">GitHub</a>。`,
      'proj.h-research': '科研经历',
      'proj.re1what': '研究助理 —— 攻击性言论检测项目',
      'proj.re1where': '香港中文大学（深圳）· Prof. Benyou Wang 课题组',
      'proj.re1when': '2025 年 9 月 – 2025 年 11 月',
      'proj.re1hl1': '完成基于 Transformer 的仇恨言论检测文献综述。',
      'proj.re1hl2': '收集可用于监督分类的现有数据集。',
      'proj.re2what': '暑期科研实习生 —— VLAA 实验室',
      'proj.re2where': '加州大学圣克鲁兹分校 · Hardy Chen 与 Prof. Cihang Xie 指导',
      'proj.re2when': '2025 年 7 月 – 2025 年 8 月',
      'proj.re2hl1': '研读视觉-语言模型文献（如 LLaVA、LLaVA-CoT）与多模态架构。',
      'proj.h-courses': '精选课程项目',
      'proj.p1title': '面向内部知识管理的 RAG 系统',
      'proj.p1desc': '毕业项目：基于内部 Notion PDF 文档构建支持多语言、有来源依据的 RAG 问答系统。',
      'proj.p1meta': '毕业项目 · 2026 春季',
      'proj.p2title': '大模型越狱与对抗攻击评估',
      'proj.p2desc': '在六类攻击、100 条越狱提示下评估 LLaMA、Qwen 与 Mistral。',
      'proj.p2meta': '自然语言处理 · 2025 秋季',
      'proj.p3title': '基于扩散模型的 X 光图像生成',
      'proj.p3desc': '在 PyTorch 中实现 DDPM，用于医学 X 光图像生成。',
      'proj.p3meta': `<a href="https://github.com/frederickkh/DDA4220-project" target="_blank" rel="noopener">[GitHub]</a>&ensp;深度学习及其应用 · 2025 秋季`,
      'proj.p4title': 'KnowYourBody',
      'proj.p4desc': '开发集成 LLM API 的教育与个性化健康分析 Web 应用。',
      'proj.p4meta': `<a href="https://github.com/frederickkh/KnowYourBody" target="_blank" rel="noopener">[GitHub]</a>&ensp;AI 实训 · 2025 秋季`,
      'proj.p5title': '在线线性规划与资源分配',
      'proj.p5desc': '将在线分配算法与离线线性规划基准进行比较。',
      'proj.p5meta': '数据科学与机器学习中的优化 · 2025 春季',
      'proj.p6title': 'SmartBot：诊所预约聊天机器人',
      'proj.p6desc': '使用 AWS Cloud Functions 开发预约调度聊天机器人。',
      'proj.p6meta': '云计算 · 2024 秋季',

      // ---- teaching ----
      'teach.h1': '教学',
      'teach.tagline': '教学、领导与服务',
      'teach.intro': '本科期间，我在香港中文大学（深圳）担任五门课程的本科生教学助理，涵盖编程、机器学习与统计。',
      'teach.h-courses': '授课课程',
      'teach.where': '本科生教学助理 · 香港中文大学（深圳）',
      'teach.c1hl1': '主讲输入输出分析、仿真优化与随机梯度下降习题课。',
      'teach.c1hl2': '主持期中复习课，讲解重点内容与练习题。',
      'teach.c2hl1': '主讲点估计、区间估计、假设检验与次序统计量习题课。',
      'teach.c2hl2': '主持期中复习课，讲解重点内容与练习题。',
      'teach.c3hl1': '主讲卡方检验、方差分析、线性回归与似然比检验等每周习题课。',
      'teach.c3hl2': '主持期末复习课，讲解重点内容与练习题。',
      'teach.c3hl3': '设计两份关于假设检验、方差分析与回归分析的作业。',
      'teach.c4hl1': '通过 Office Hours 帮助学生理解课程内容。',
      'teach.c5hl1': '面向大一学生主讲每周 Python 习题课，涵盖控制流、数据结构与函数。',
      'teach.c5hl2': '编写习题集与现场编程示例，促进学习与课堂参与。',
      'teach.c5hl3': '批改作业并提供反馈，帮助学生提升编程与调试能力。',
      'teach.h-leadership': '领导与服务',
      'teach.l1what': '朋辈导师组组长',
      'teach.l1where': '香港中文大学（深圳）数据科学学院',
      'teach.l1when': '2024 年 9 月 – 2025 年 7 月',
      'teach.l1hl1': '协调学业导师、朋辈导师与新生间的小组会议，促进沟通与学业指导。',
      'teach.l1hl2': '指导一年级学生进行学业规划、学习策略与校园适应。',
      'teach.l2what': '学术与职业发展部副主席',
      'teach.l2where': '香港中文大学（深圳）国际学生联合会',
      'teach.l2when': '2023 年 8 月 – 2024 年 7 月',
      'teach.l2hl1': '组织导师项目、学术讲座与校友座谈，支持学生的学业与职业发展。',
      'teach.l2hl2': '协调企业分享会与实地参访，让学生接触真实的行业实践。',
      'teach.l3what': '大学图书馆学生助理',
      'teach.l3where': '香港中文大学（深圳）',
      'teach.l3when': '2023 年 2 月 – 2024 年 5 月',
      'teach.l3hl1': '协助资料编目，并为图书馆工作坊与学生活动提供后勤支持。',

      // ---- connect ----
      'conn.h1': '联系',
      'conn.tagline': '嘿，来联系吧！',
      'conn.intro': '欢迎和我聊科研、合作或任何其他话题！你也可以在以下平台找到我。',
      'conn.h-reach': '联系渠道',
      'conn.label-email': '邮箱',
      'conn.wa-value': '欢迎随时给我发消息'
    }
  };

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function apply(lang) {
    if (!DICT[lang]) lang = 'en';
    const dict = DICT[lang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'zh' ? 'EN' : '中文';
    try { localStorage.setItem(KEY, lang); } catch (e) { /* private mode */ }
  }

  window.addEventListener('DOMContentLoaded', () => {
    apply(stored() || 'en');
    const btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        apply(stored() === 'zh' ? 'en' : 'zh');
      });
    }
  });
})();
