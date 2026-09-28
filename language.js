(function () {
  'use strict';

  const params = new URLSearchParams(window.location.search);
  const isChinese = params.get('lang') === 'zh';
  const toggle = document.getElementById('language-toggle');

  if (toggle) {
    const target = new URL(window.location.href);
    if (isChinese) {
      target.searchParams.delete('lang');
      toggle.textContent = 'English';
      toggle.hreflang = 'en';
      toggle.setAttribute('aria-label', 'Switch to English');
    } else {
      target.searchParams.set('lang', 'zh');
      toggle.textContent = '中文';
      toggle.hreflang = 'zh-CN';
      toggle.setAttribute('aria-label', '切换到中文');
    }
    toggle.href = target.pathname + target.search + target.hash;
  }

  if (!isChinese) return;

  document.documentElement.lang = 'zh-CN';
  document.title = '孙磊 | 个人主页';
  document.body.classList.add('lang-zh');

  const translations = new Map(Object.entries({
    'Research Scientist@': 'Research Scientist @',
    ', adviced by Prof.': '，合作导师为',
    'and Dr. Danda Pani Paudel.': '教授与 Danda Pani Paudel 博士。',
    'I earned my Ph.D. from Zhejiang University, privileged to be supervised by the best professor in the world——my life-long mentor and role model, Prof.': '我在浙江大学获得博士学位，有幸师从我心目中最好的老师',
    'I also had the privilege to be supervised by Prof.': '我还曾有幸在',
    'at the': '教授指导下，于',
    ', University of Zurich, and Prof.': '（苏黎世大学）开展研究，并在',
    ', ETH Zurich. I also work closely with Prof.': '（苏黎世联邦理工学院）开展研究。我还与',
    'from UC Merced and Google DeepMind.': '教授（加州大学默塞德分校 / Google DeepMind）保持紧密合作。',
    "I'm interested in": '我的研究兴趣包括',
    'world models': '世界模型',
    'AI for optics': 'AI4Optics',
    'and': '和',
    ', and': '，以及',
    ', the': '、',
    ', and the': '，以及',
    '&': '与',
    '.': '。',
    '!': '！',
    'event-based vision': 'Event-based Vision',
    'I am always open to collaborate. Drop me a email if you are interested!': '欢迎任何形式的学术合作，感兴趣的话请随时邮件联系我！',
    'Email': '邮箱',
    'Google Scholar': '谷歌学术',
    'Linkedin': 'LinkedIn',
    'Github': 'GitHub',

    'News': '新闻动态',
    'Sep 2026:': '2026年9月：',
    'Aug 2026:': '2026年8月：',
    'Jul 2026:': '2026年7月：',
    'Jun 2026:': '2026年6月：',
    'Mar 2026:': '2026年3月：',
    'Feb 2026:': '2026年2月：',
    'Jan 2026:': '2026年1月：',
    'Dec 2025:': '2025年12月：',
    'Nov 2025:': '2025年11月：',
    'Jun 2025:': '2025年6月：',
    'Feb 2025:': '2025年2月：',
    'Jan 2025:': '2025年1月：',
    'Nov 2024:': '2024年11月：',
    'Oct 2024:': '2024年10月：',
    'Aug 2024:': '2024年8月：',
    'Jul 2024:': '2024年7月：',
    'Jun 2024:': '2024年6月：',
    'Apr 2024:': '2024年4月：',
    'Previous:': '更早：',
    'Two papers—one first-author paper and one corresponding-author paper—are accepted to NeurIPS 2026🎉:': '两篇论文——一篇一作论文和一篇通讯作者论文——被 NeurIPS 2026 接收🎉：',
    'I am invited to serve as Area Chair for CVPR 2027.': '受邀担任 CVPR 2027 领域主席。',
    'I am invited to serve as Area Chair for ICLR 2027.': '受邀担任 ICLR 2027 领域主席。',
    'I am honored to receive Early Career Scholar Funding from Huawei (华为AI青年学者基金)!': '荣获华为 AI 青年学者基金！',
    'OmniLens++ is accepted to ICCP 2026🎉! Congrats to': 'OmniLens++ 被 ICCP 2026 接收🎉！祝贺',
    'Three papers accepted to ECCV 2026🎉! We are on fire🔥!': '三篇论文被 ECCV 2026 接收🎉！继续冲🔥！',
    'RealisMotion is accepted to ICML 2026🎉! Congrats go to my bro': 'RealisMotion 被 ICML 2026 接收🎉！祝贺我的兄弟',
    'I am invited to serve as Area Chair for NeurIPS 2026.': '受邀担任 NeurIPS 2026 领域主席。',
    'Three papers including one Highlight paper get accepted to CVPR 2026🎉. Congrats to Xiaolong Qian (钱晓龙) and': '三篇论文被 CVPR 2026 接收，其中一篇入选 Highlight🎉！祝贺钱晓龙和',
    'One papers get accepted to Optics & Laser Technology🎉. Congrats to Qi Jiang (蒋奇)!': '一篇论文被 Optics & Laser Technology 接收🎉！祝贺蒋奇！',
    'We are organizing a series of challenges in CVPR 2026': '我们将在 CVPR 2026',
    'workshop. Please check': '研讨会组织一系列挑战赛，详情请查看',
    'Challenge On Image Denoising': '图像去噪挑战赛',
    'the First Challenge on Blind Computational Aberration Correction': '首届盲计算像差校正挑战赛',
    'the 2nd Event-Based Image Deblurring Challenge': '第二届事件相机图像去模糊挑战赛',
    'for more details.': '。',
    'We will host': '我们将在 CVPR 2026 举办',
    'Workshop on Agentic AI for Visual Media': '智能体视觉媒体研讨会',
    'in CVPR 2026🎉. We look forward to your submissions!': '🎉，期待大家投稿！',
    'I am invited to give a talk on intellegent optical system at College of Optical Science and Engineering, Zhejiang University.': '受邀在浙江大学光电科学与工程学院作智能光学系统报告。',
    'I will serve as Area Chair for ICML 2026🎉, and try my best to contribute to the community.': '将担任 ICML 2026 领域主席🎉，并尽力为学术共同体作出贡献。',
    'My first-author work: RetinEV gets accepted to ICCV2025🎉!': '我的一作工作 RetinEV 被 ICCV 2025 接收🎉！',
    'I will serve as the organizer/co-organizer of': '我将组织或联合组织',
    'Challenge On Image Super-Resolution': '图像超分辨率挑战赛',
    'Challenge on Real-World Face Restoration': '真实世界人脸复原挑战赛',
    'in CVPR 2025 NTIRE workshop.': '，活动隶属于 CVPR 2025 NTIRE 研讨会。',
    'I am excited to organize the': '很高兴组织',
    'First Challenge on Event-Based Image Deblurring': '首届事件相机图像去模糊挑战赛',
    'in CVPR 2025 NTIRE workshop & Event-Based Vision workshop.': '，活动隶属于 CVPR 2025 NTIRE 与 Event-Based Vision 研讨会。',
    'Two papers accepted to IEEE Trans. on Computational Imaging.': '两篇论文被 IEEE Transactions on Computational Imaging 接收。',
    'First-author paper accepted to T-PAMI.': '一篇一作论文被 T-PAMI 接收。',
    'One paper accepted to Optics & Laser Technology.': '一篇论文被 Optics & Laser Technology 接收。',
    'One paper accepted to Optics Express.': '一篇论文被 Optics Express 接收。',
    'One paper accepted to T-IP.': '一篇论文被 T-IP 接收。',
    'One paper accepted to ECCV.': '一篇论文被 ECCV 接收。',
    'I am excited to have finished my': '顺利完成',
    'Ph.D.': '博士学业',
    'One paper accepted to IEEE Trans. on Computational Imaging.': '一篇论文被 IEEE Transactions on Computational Imaging 接收。',

    'Selected Publications': '代表性论文',
    'First-author papers and corresponding author papers are': '一作论文和通讯作者论文以',
    'highlighted': '浅黄色背景',
    '. * denotes equal contribution and † denotes corresponding author.': '标注。* 表示共同贡献，† 表示通讯作者。',
    'Project Page': '项目主页',
    'project page': '项目主页',
    'Codes': '代码',
    'codes': '代码',
    'Paper': '论文',
    'paper': '论文',
    'Video': '视频',
    'video': '视频',
    'codes coming soon': '代码即将发布',
    '(Highlight)': '（Highlight）',
    "(Editors' Pick)": '（编辑精选）',
    '(Oral Presentation, rate:2.7%)': '(Oral Presentation, rate: 2.7%)',
    '(Oral Presentation)': '(Oral Presentation)',
    ', 2026': '，2026',
    ', 2025': '，2025',
    ', 2024': '，2024',
    ', 2023': '，2023',
    ', 2022': '，2022',
    'The first self-improving autonomous optical design agent that continually accumulates reusable design skills, evaluated on 120 diverse LensArena tasks.': '首个能够持续积累并复用光学设计技能的自我进化自主智能体，并在覆盖 120 个多样化任务的 LensArena 上进行评测。',
    'A lightweight NIR-and-LiDAR dehazing network whose physics-constrained dual-head training induces density-adaptive gradient amplification at no extra inference cost, enabling strong restoration and real-time deployment on low-power edge NPUs.': '一种融合近红外图像与 LiDAR 的轻量级去雾网络，通过物理约束双头训练产生密度自适应梯度放大，在不增加推理成本的情况下实现高质量复原，并可实时部署于低功耗边缘 NPU。',
    'FoundCAC, a universal foundational framework for blind lens aberration correction that pre-trains on a large-scale, diversity-stratified LensLib (AODLibpro) and regularizes restoration with a discrete Latent PSF Representation, achieving state-of-the-art zero-shot performance and efficient few-shot adaptation to unseen lenses.': 'FoundCAC 是面向盲镜头像差校正的通用基础框架：在大规模、按多样性分层的镜头库 AODLibpro 上预训练，并通过离散潜在 PSF 表示约束复原，在未知镜头上实现领先的零样本性能与高效少样本适配。',
    'A diffusion model that reconstructs high-quality, colorful video from event streams in a single forward step, trained without paired event-image data via a surrogate training framework.': '一种扩散模型，可通过单次前向传播从事件流重建高质量彩色视频，并借助代理训练框架摆脱对配对事件—图像数据的依赖。',
    'A knowledge-centric agent framework that reasons progressively from task description to strategy to executable structure for generating ComfyUI workflows, with bidirectional self-correction at deployment.': '一种知识中心型智能体框架，从任务描述逐步推理至策略与可执行结构，以生成 ComfyUI 工作流，并在部署阶段进行双向自校正。',
    'A benchmark of 46K+ multimodal retrieval candidates across images, videos, and documents, showing that retrieving evidence from heterogeneous corpora—not reasoning given evidence—is the main bottleneck for MLLMs.': '一个包含 4.6 万余个图像、视频和文档候选项的多模态检索基准，揭示从异构语料中检索证据，而非基于给定证据进行推理，才是多模态大模型的主要瓶颈。',
    'We present a controllable human video generation framework that flexibly combines any subject, background, trajectory, and action to create realistic videos of anyone doing anything anywhere.': '一种可控人体视频生成框架，可灵活组合任意人物、背景、轨迹和动作，生成逼真的“任何人在任何地点做任何事”的视频。',
    'Removing lens veiling glare from images.': '去除图像中的镜头眩光。',
    'large-scale dataset and benchmark for photographic cameras, built via automatic optical design to cover diverse optical aberrations.': '通过自动光学设计构建的摄影相机大规模数据集与基准，覆盖多种光学像差。',
    'Better IQA metrics for diffusion-based SR models.': '面向扩散式超分辨率模型的更优图像质量评价指标。',
    'OmniLens, a flexible solution to universal computational aberration correction via large-scale LensLib pre-training and adapting the model to any specific lens designs with unknown lens descriptions via fast LensLib-to-specific domain adaptation.': 'OmniLens 是一种灵活的通用计算像差校正方案：通过大规模 LensLib 预训练，并利用快速的 LensLib 到特定域适配，使模型适用于描述未知的任意镜头设计。',
    'Best low-light image enhancement method with event camera so far.': '目前性能领先的事件相机辅助低照度图像增强方法。',
    'The best algorithm (so far) for the automatic design of compound-lens-based computational imaging systems.': '目前性能领先的复合镜头计算成像系统自动设计算法。',
    'Unified Event-based frame interpolation for both sharp frames and blurry frames with unsupervised domain adaption for unkown camera parameters.': '统一处理清晰帧与模糊帧的事件相机帧插值方法，并通过无监督域适配应对未知相机参数。',
    'EvTemMap, pioneering work of event-to-image conversion, produces high-quality, high-grascale-resolution, high-dynamic-range image from events only.': 'EvTemMap 是事件到图像转换的开创性工作，仅使用事件即可生成高质量、高灰度分辨率和高动态范围图像。',
    'Event-based depth estimation for dynamic scenes, over 41 times faster in data acquisition than previous SOTA.': '面向动态场景的事件深度估计方法，数据采集速度较此前最佳方法提升 41 倍以上。',
    'A Panoramic Computational Imaging Engine to achieve minimalist and high-quality panoramic imaging.': '一种实现极简、高质量全景成像的全景计算成像引擎。',
    'Event-assisted fast auto-focus algorithm. Precise focus with less than one depth of focus is achieved within 0.004 seconds.': '事件辅助快速自动对焦算法，可在 0.004 秒内实现误差小于一个景深的精确对焦。',
    'SOTA unified Event-based frame interpolation for both sharp frames and blurry frames.': '面向清晰帧与模糊帧的统一事件相机帧插值方法，达到当时领先水平。',
    'We present a novel event-based deblurring method that improves the previous state-of-the-art by 2.47 dB.': '一种新型事件相机去模糊方法，较此前最佳方法提升 2.47 dB。',
    'Annular Computational Imaging (ACI) framework to break the optical limit of light-weight Panoramic Annular Lens design.': '环形计算成像（ACI）框架，突破轻量化全景环形镜头设计的光学极限。',
    'A lightweight event-based human pose estimation model by processing events as point cloud.': '一种将事件表示为点云进行处理的轻量级人体姿态估计模型。',
    'Designing a lightweight panoramic annular lens with physical-based image enhancement model.': '结合物理模型图像增强网络，设计轻量化全景环形镜头。',
    'Designing a panoramic annular lens (PAL) system with 4K high resolution for aerial image segmentation.': '面向航拍图像分割设计具备 4K 高分辨率的全景环形镜头（PAL）系统。',
    'Designing a specific semantic segmentation for aerial panoramic images.': '面向航拍全景图像设计的专用语义分割方法。',
    'A real-time RGB-D fusion semantic segmentation framework with small obstacle detection.': '一种支持小障碍物检测的实时 RGB-D 融合语义分割框架。',
    'Propose three different auditory-based interaction methods which convey raw depth images, obstacle information and path information respectively to visually impaired people.': '提出三种听觉交互方式，分别向视障用户传达原始深度图、障碍物信息和路径信息。',
    'Propose a panoramic localizer, which is based on coarse-to-fine descriptors, leveraging panoramas for omnidirectional perception and sufficient FoV up to 360◦.': '提出一种基于由粗到细描述子的全景定位器，利用全景图像实现全向感知与最高 360° 视场。',
    'Develop a wearable system to transform the spatial information captured by camera into a voice description and fed it back to blind users.': '开发一种可穿戴系统，将相机采集的空间信息转化为语音描述并反馈给视障用户。',
    'Propose a framework to alleviate the accuracy decline when semantic segmentation is taken to adverse conditions by using Generative Adversarial Networks (GANs).': '提出一种基于生成对抗网络（GAN）的框架，缓解语义分割在恶劣环境下的精度下降。',

    'Services': '学术服务',
    'Organizer/Program Chair of': '组织者 / 程序主席：',
    'CVPR 2026 Workshop on Agentic AI for Visual Media': 'CVPR 2026 智能体视觉媒体研讨会',
    'Co-organizer of': '联合组织者：',
    'Co-organizer of the': '联合组织者：',
    'CVPR 2026 New Trends in Image Restoration and Enhancement (NTIRE) workshop': 'CVPR 2026 图像复原与增强新趋势（NTIRE）研讨会',
    'Organizer of the': '组织者：',
    'First Challenge On Event-based Image Deblurring': '首届事件相机图像去模糊挑战赛',
    'Challenge On Event-based Image Deblurring': '事件相机图像去模糊挑战赛',
    'Challenge on Image Denoising': '图像去噪挑战赛',
    'First Blind Computational Aberration Correction Challenge': '首届盲计算像差校正挑战赛',
    'Efficient Super-Resolution Challenge': '高效图像超分辨率挑战赛',
    'CVPR 2025 New Trends in Image Restoration and Enhancement (NTIRE) workshop': 'CVPR 2025 图像复原与增强新趋势（NTIRE）研讨会',
    'in CVPR 2025': '，隶属于 CVPR 2025',
    'NTIRE workshop': 'NTIRE 研讨会',
    'Event-Based Vision workshop': 'Event-Based Vision workshop',
    'Area Chair for ICML 2026, NeurIPS 2026, ICLR 2027, CVPR 2027.': '担任 ICML 2026、NeurIPS 2026、ICLR 2027 与 CVPR 2027 领域主席。',
    'Reviewer for CVPR, ICCV, ECCV, AAAI, WACV, IJCV, TPAMI, TIP, RA-L, CVIU.': '担任 CVPR、ICCV、ECCV、AAAI、WACV、IJCV、TPAMI、TIP、RA-L、CVIU 审稿人。',

    'Honors & Awards': '荣誉与奖励',
    'Huawei Early Career Scholar Fund (华为AI青年学者基金)': '华为 AI 青年学者基金',
    'ECCV Oral Presentation (rate: 2.7%):': 'ECCV Oral Presentation (rate: 2.7%):',
    'CVPR Highlight:': 'CVPR Highlight：',
    "Editors' Pick in Optics Express X2": 'Optics Express 编辑精选 ×2',

    'Talks': '学术报告',
    'Dec. 2025:': '2025年12月：',
    'Invited talk on intellegent optical system @ College of Optical Science and Engineering, Zhejiang University.': '智能光学系统邀请报告 @ 浙江大学光电科学与工程学院。',
    'Dec. 2025: Invited talk on intellegent optical system @ College of Computer Science, Chongqing University.': '2025年12月：智能光学系统邀请报告 @ 重庆大学计算机学院。',
    'Oct. 2022: [': '2022年10月：[',
    '] Invited talk on event-based image deblurring @ ECCV 2022 Workshop on': '] 事件相机图像去模糊邀请报告 @ ECCV 2022',
    'Mobile Intelligent Photography and Imaging (MIPI)': '移动智能摄影与成像（MIPI）研讨会',
    'Jun. 2022:': '2022年6月：',
    'Invited talk @': '邀请报告 @',

    'Experience': '工作经历',
    'Research Scientist': 'Research Scientist',
    'Post-doc researcher': '博士后研究员',
    'Visiting doctoral student': '访问博士生',
    'Robotics and Perception Group': 'RPG',
    'University of Zurich': '苏黎世大学',
    'ETH Zurich': '苏黎世联邦理工学院',
    'Computer Vision Lab': '计算机视觉实验室',
    'Sofia, Bulgaria': '保加利亚 · 索非亚',
    'Zurich, Switzerland': '瑞士 · 苏黎世',
    'Oct. 2025 ~ Now': '2025年10月—至今',
    'Oct. 2024 ~ Oct. 2025': '2024年10月—2025年10月',
    'Jan. 2023 ~ Sep. 2023': '2023年1月—2023年9月',
    'Sep. 2021 ~ Jan. 2023': '2021年9月—2023年1月',
    'Supervisor: Prof.': '导师：',
    'Co-supervisor: Dr. Danda Pani Paudel': '联合导师：Danda Pani Paudel 博士',

    'Education': '教育经历',
    'Doctor of Philosophy': '工学博士',
    'Zhejiang University': '浙江大学',
    'Hangzhou, China': '中国 · 杭州',
    'Sep. 2018 ~ Jun. 2024': '2018年9月—2024年6月',
    "Bachelor's degree": '工学学士',
    'Beijing Institute of Technology': '北京理工大学',
    'Beijing, China': '中国 · 北京',
    'Sep. 2014 ~ Jun. 2018': '2014年9月—2018年6月',
    'Website template from': '网页模板来自'
  }));

  const normalize = (value) => value.replace(/\s+/g, ' ').trim();
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        return normalize(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    }
  );

  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  textNodes.forEach((node) => {
    const key = normalize(node.nodeValue);
    const translated = translations.get(key);
    if (!translated) return;
    const leading = node.nodeValue.match(/^\s*/)[0];
    const trailing = node.nodeValue.match(/\s*$/)[0];
    node.nodeValue = leading + translated + trailing;
  });

  document.querySelectorAll('[data-zh-text]').forEach((element) => {
    element.textContent = element.dataset.zhText;
  });

  const profileImage = document.querySelector('img[alt="profile photo"]');
  if (profileImage) profileImage.alt = '个人照片';
})();
