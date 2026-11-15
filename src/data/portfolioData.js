export const portfolioData = {
  name: 'Mina Raouf',
  title: 'Flutter developer building shipping-ready mobile apps',
  bio: 'I design and ship Flutter apps for production — clean architecture, solid state management, and integrations that hold up once real users show up. Based in Cairo.',
  avatarAsset: '/assets/images/profile_image.png',
  githubUrl: 'https://github.com/minaraouf10',
  linkedinUrl: 'https://www.linkedin.com/in/mina-raouf-911a39221',
  email: 'minaraouf185@gmail.com',
  cvAsset: '/assets/cv/mina_cv.pdf',

  skillCategories: [
    {
      category: 'Mobile & Web',
      skills: ['Flutter', 'Dart', 'Android / Kotlin', 'iOS / Swift'],
    },
    {
      category: 'Backend & Data',
      skills: ['Firebase', 'Supabase', 'Node.js', 'REST APIs'],
    },
    {
      category: 'Architecture',
      skills: ['Clean Architecture', 'BLoC / Cubit', 'Riverpod', 'Provider', 'MVVM'],
    },
    {
      category: 'Delivery',
      skills: ['Git', 'GitHub Actions', 'CI/CD', 'Postman'],
    },
  ],

  projects: [
    {
      title: 'Waseela HR',
      role: 'Flutter · Production',
      description:
        'Internal HR and workforce tools for Waseela Consumer Finance. Attendance, employee flows, and ops screens built for daily use — not a demo.',
      tech: ['Flutter', 'BLoC', 'Supabase', 'Design System'],
      url: 'https://github.com/minaraouf10',
      imageAssets: [
        '/assets/images/hr/hr_1.png',
        '/assets/images/hr/hr_2.png',
        '/assets/images/hr/hr_3.png',
        '/assets/images/hr/hr_4.png',
        '/assets/images/hr/hr_5.png',
      ],
    },
    {
      title: 'Digx',
      role: 'Flutter Web',
      description:
        'A Flutter web product surface focused on dashboards and operational workflows — charts, boards, and a UI that stays readable on large screens.',
      tech: ['Flutter Web', 'Riverpod', 'Appwrite', 'fl_chart'],
      url: 'https://github.com/minaraouf10',
      imageAssets: [
        '/assets/images/digx/digx_1.png',
        '/assets/images/digx/digx_2.png',
        '/assets/images/digx/digx_3.png',
        '/assets/images/digx/digx_4.png',
      ],
    },
    {
      title: 'Bab El Ezz',
      role: 'Flutter · Client work',
      description:
        'Restaurant-facing Flutter app with menus, ordering flows, and localization. Built end-to-end with clean architecture and Firebase.',
      tech: ['Flutter', 'Clean Architecture', 'Firebase'],
      url: 'https://github.com/minaraouf10',
      imageAssets: [
        '/assets/images/bab_elezz/bab_el_ezz_1.jpg',
        '/assets/images/bab_elezz/bab_el_ezz_2.jpg',
        '/assets/images/bab_elezz/bab_el_ezz_3.jpg',
        '/assets/images/bab_elezz/bab_el_ezz_4.jpg',
      ],
    },
    {
      title: 'Shibrawi',
      role: 'Flutter · Client work',
      description:
        'Food ordering app with cart, maps-based location, and Arabic/English support. Practical product work: Dio networking, Riverpod, and slang i18n.',
      tech: ['Flutter', 'Riverpod', 'Dio', 'Google Maps', 'Slang'],
      url: 'https://github.com/minaraouf10',
      imageAssets: [
        '/assets/images/shibrawi/shibrawi_1.jpeg',
        '/assets/images/shibrawi/shibrawi_2.jpeg',
        '/assets/images/shibrawi/shibrawi_3.jpeg',
        '/assets/images/shibrawi/shibrawi_4.jpeg',
        '/assets/images/shibrawi/shibrawi_5.jpeg',
      ],
    },
  ],

  experience: [
    {
      role: 'Flutter Developer',
      company: 'Waseela Consumer Finance',
      period: 'Jun 2025 – Present',
      location: 'Dokki, Giza, Egypt',
      points: [
        'Built a shared Flutter UI package used across company apps so screens stay consistent without copy-paste.',
        'Set up GitHub Actions CI/CD that cut build and test turnaround roughly in half.',
      ],
    },
    {
      role: 'Mobile Developer',
      company: 'Freelance',
      period: 'Feb 2023 – Present',
      location: 'Cairo, Egypt',
      points: [
        'Shipped production Flutter apps for clients — restaurants, ops tools, and consumer-facing products.',
        'Added real-time messaging and push with Agora and Firebase Cloud Messaging where the product needed it.',
      ],
    },
    {
      role: 'Mobile Developer Intern',
      company: 'Instant Software Solutions',
      period: 'Aug 2022 – Jan 2023',
      location: 'Cairo, Egypt',
      points: [
        'Built Flutter apps including an AR-based learning experience while learning delivery under mentorship.',
      ],
    },
  ],

  education: [
    {
      degree: 'B.Sc. in Computer Science & Engineering',
      institution: 'Thebes Academy',
      period: '2019 – 2023',
      gpa: '3.0 / 4.0 (Very Good)',
    },
  ],

  navItems: [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Projects' },
    { id: 'experience', label: 'WorkX' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ],
}
