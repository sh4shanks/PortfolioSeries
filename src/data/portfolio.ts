/** Central source of truth for Shashank Singh's personal portfolio. */
export type Palette = { from: string; via: string; to: string; accent: string };
export const profile = {
  fullName: 'Shashank Singh', displayName: 'Shashank Singh', firstName: 'SHASHANK', seriesTag: 'THE SERIES', originalLabel: 'A SHASHANK ORIGINAL',
  role: 'Creative Developer • Designer • Builder', tagline: ['Creative Developer', 'Designer', 'Builder'],
  intro: 'I build interactive web experiences, creative tools, games, and practical digital products. I love combining visual storytelling with real functionality — from cinematic interfaces and browser games to experimental command centers.',
  location: 'Greater Noida, India', email: 'shashank2009s24@gmail.com',
  links: { github: 'https://github.com/sh4shanks', instagram: 'https://www.instagram.com/_shashank2467' },
  resumePdf: '/assets/Shashank_Singh_Resume.pdf',
  portrait: { src: '/assets/shashank-portrait.webp', srcSet: '/assets/shashank-portrait.webp', alt: 'Shashank Singh in a black suit in a cinematic studio portrait' },
  interests: ['Creative Coding', 'Interactive 3D Experiences', 'AI-powered Products', 'Web Engineering'],
};
export const education = [{ school: "St. Joseph's School", place: 'Greater Noida, India', degree: 'Class XII — ISC', period: 'Currently studying', score: 'Class XII' }];
export const experience = [{ company: 'SJS Talentia 2025', role: 'Student Event Organizer', place: 'Greater Noida, India', period: '2025', points: ['Helped organize the school’s SJS Talentia event, coordinating creative presentation and event-related work.', 'Built and experimented with interactive web projects, game concepts, and digital experiences alongside school commitments.'] }];
export type Metric = { value: string; label: string };
export type Project = { id: string; title: string; year: string; genre: string; logline: string; stack: string[]; build: string[]; features: string[]; metrics: Metric[]; github?: string; demo?: string; palette: Palette; motif: 'shield' | 'flow' | 'tenants' };
const red: Palette = { from: '#24060b', via: '#7a0f24', to: '#09070a', accent: '#ff3d5a' };
const blue: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
export const projects: Project[] = [
 { id:'cybertrace', title:'CyberTrace', year:'2026', genre:'Interactive Game • Digital Detective', logline:'A digital detective simulator where players investigate clues, connect evidence, and solve a case through an interactive interface.', stack:['JavaScript','Web UI','Game Design'], build:['Designed a browser-based digital detective experience focused on investigation, evidence, and player-driven discovery.','Built a cinematic interface that makes the case workflow feel like a digital investigation console.'], features:['Interactive detective workflow','Evidence-led case progression','Cinematic dark interface'], metrics:[{value:'01',label:'Detective simulator'},{value:'Web',label:'Playable experience'}], github:'https://github.com/sh4shanks/CyberTrace', demo:'https://cyber-trace-six.vercel.app/', palette:red, motif:'shield' },
 { id:'codequest', title:'CodeQuest', year:'2026', genre:'Cyberpunk • Puzzle Adventure', logline:'The Lost Repository — a cyberpunk browser game where each solved challenge helps bring a corrupted project back online.', stack:['JavaScript','HTML','CSS','Game Design'], build:['Created a hacker-themed puzzle adventure built around restoring a lost software repository.','Combined narrative, puzzles, and a cyberpunk visual direction in a browser-first experience.'], features:['Puzzle-driven progression','Cyberpunk visual identity','Browser-based gameplay'], metrics:[{value:'01',label:'Puzzle adventure'},{value:'Web',label:'Play in browser'}], github:'https://github.com/sh4shanks/CodeQuest', demo:'https://code-quest-noir22.vercel.app/', palette:jade, motif:'tenants' },
 { id:'cricketverse', title:'CricketVerse', year:'2026', genre:'Game • Two-player Book Cricket', logline:'A digital take on book cricket, built for two players and quick competitive rounds.', stack:['JavaScript','HTML','CSS','Game Logic'], build:['Turned a familiar school-time game into a simple, playable digital experience.','Focused on fast rounds, clear game state, and a lightweight browser experience.'], features:['Two-player play','Book-cricket game logic','Quick browser sessions'], metrics:[{value:'2P',label:'Local multiplayer'},{value:'Web',label:'Browser game'}], github:'https://github.com/sh4shanks/CricketVerse', demo:'https://cricket-verse-tawny.vercel.app/', palette:amber, motif:'flow' },
 { id:'ai-emergency-assistant', title:'AI Emergency Assistant', year:'2026', genre:'AI • Safety Support Tool', logline:'A web-based emergency assistant concept designed to help users navigate urgent situations with clear, accessible guidance.', stack:['React','JavaScript','AI-assisted UX'], build:['Created a focused web experience for an emergency-assistance concept with an emphasis on clear next steps and approachable interaction.'], features:['Emergency-oriented interface','Clear, action-focused UX','Responsive web app'], metrics:[{value:'AI',label:'Assistance concept'},{value:'Web',label:'Responsive app'}], demo:'https://ai-emergency-assistant-zeta.vercel.app/', palette:red, motif:'shield' },
 { id:'ios-glass-chess', title:'iOS Glass Chess', year:'2026', genre:'Web Experience • Liquid Glass', logline:'A chess experience inspired by refined, translucent glass interfaces and tactile digital surfaces.', stack:['JavaScript','CSS','UI Design'], build:['Explored glass-inspired visual design, contrast, depth, and responsive interface details.'], features:['Glass-inspired interface','Minimal visual language','Responsive layout'], metrics:[{value:'UI',label:'Design exploration'},{value:'Web',label:'Interactive experience'}], palette:blue, motif:'tenants' },
 { id:'health-monitor', title:'Health Monitor', year:'2026', genre:'Developer Tool • Release Health', logline:'A release-health playground for tracking versions and simulating errors to understand how an application behaves after deployment.', stack:['React','Vite','Express','Sentry'], build:['Designed a release monitoring concept with version tracking and deliberate crash/HTTP 500 drills.','Built around practical debugging and release confidence rather than a static showcase.'], features:['Release/version tracking','Crash and HTTP 500 drills','Developer-focused health dashboard'], metrics:[{value:'Live',label:'Release drill concept'},{value:'Dev',label:'Tooling focus'}], github:'https://github.com/sh4shanks/HealthMonitor', palette:violet, motif:'shield' },
 { id:'oblivion-os', title:'OBLIVION OS', year:'2026', genre:'Web App • Digital Command Center', logline:'An experimental desktop-like web environment with windows, workspaces, and system intelligence.', stack:['React','TypeScript','UI Engineering'], build:['Developed an ambitious operating-system-inspired web interface with a command-center direction.','Explored window management, workspace interactions, and an immersive desktop metaphor.'], features:['Virtual desktop experience','Window and workspace concepts','System-monitor command center'], metrics:[{value:'OS',label:'Web desktop concept'},{value:'UI',label:'Interactive interface'}], palette:jade, motif:'flow' },
];
export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };
export const achievements: Achievement[] = [
 {id:'infantino',title:'1st Place',org:'Infantino Mark 5',detail:'Won first place at the school event with an Arduino Uno robot car project.',laurel:'First Place'},
 {id:'talentia',title:'Event Organizer',org:'SJS Talentia 2025',detail:'Organized the school’s SJS Talentia 2025 event and contributed to bringing the event experience together.',laurel:'Leadership'},
 {id:'builder',title:'Independent Builder',org:'Web Projects',detail:'Created a growing collection of browser games, interactive websites, and developer-focused tools.',laurel:'Build • Create'},
];
export type Certification = { issuer: string; name: string; link: string };
export const certifications: Certification[] = [];
export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export const skillCategories: SkillCategory[] = [
 {id:'web',title:'Web Development',subtitle:'Building for the browser',skills:[{name:'HTML',mono:'Ht'},{name:'CSS',mono:'Cs'},{name:'JavaScript',mono:'Js'},{name:'React',mono:'Re'},{name:'TypeScript',mono:'Ts'}]},
 {id:'creative',title:'Creative Technology',subtitle:'Interfaces, motion & experiences',skills:[{name:'Interactive UI',mono:'UI'},{name:'Motion Design',mono:'Mo'},{name:'3D Web Concepts',mono:'3D'},{name:'Game Design',mono:'Gm'}]},
 {id:'tools',title:'Tools & Workflow',subtitle:'Build, iterate, ship',skills:[{name:'Git / GitHub',mono:'Gt'},{name:'VS Code',mono:'Vs'},{name:'Vercel',mono:'Ve'},{name:'AI Coding Tools',mono:'AI'}]},
 {id:'hardware',title:'Computing',subtitle:'Software meets hardware',skills:[{name:'Arduino Uno',mono:'Ar'},{name:'Java',mono:'Jv'},{name:'Python',mono:'Py'}]},
];
export const skillEvidence: Record<string,string[]> = {Java:['School and coding projects'],React:['Health Monitor','OBLIVION OS'],JavaScript:['CyberTrace','CodeQuest','CricketVerse'], 'Git / GitHub':['Public project repositories'], 'Arduino Uno':['Infantino Mark 5 robot-car project'], '3D Web Concepts':['Interactive 3D website experiments'], 'Game Design':['CyberTrace','CodeQuest','CricketVerse']};
export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };
export const seasons: Season[] = [
 {number:1,title:'The Foundation',period:'School Years',synopsis:'Learning, experimenting, and turning curiosity into real projects.',episodes:[{code:'S01 E01',title:'First Builds',description:'Exploring code, creative ideas, and hands-on technology.',tags:['Learning','Experimentation'],runtime:'Ongoing',palette:blue}]},
 {number:2,title:'Games & Worlds',period:'2025 – 2026',synopsis:'Building interactive experiences with their own visual identity and mechanics.',episodes:[{code:'S02 E01',title:'The Detective',description:'CyberTrace — a digital detective simulator.',tags:['CyberTrace','Investigation'],runtime:'2026',palette:red},{code:'S02 E02',title:'The Lost Repository',description:'CodeQuest — a cyberpunk puzzle adventure.',tags:['CodeQuest','Puzzle Game'],runtime:'2026',palette:jade},{code:'S02 E03',title:'CricketVerse',description:'A two-player digital book-cricket game.',tags:['Game','Two Player'],runtime:'2026',palette:amber}]},
 {number:3,title:'Building Tools',period:'2026',synopsis:'Moving beyond experiments toward useful software and command-center experiences.',episodes:[{code:'S03 E01',title:'Release Health',description:'Health Monitor — release tracking and error simulation for developers.',tags:['Health Monitor','Developer Tools'],runtime:'2026',palette:violet},{code:'S03 E02',title:'OBLIVION OS',description:'A desktop-like web environment with virtual workspaces and system intelligence.',tags:['Web App','Command Center'],runtime:'2026',palette:blue}]},
];
export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
 {label:'Digital Detective',title:'CyberTrace',detail:'Investigate. Connect clues. Solve the case.',palette:red},
 {label:'Puzzle Adventure',title:'CodeQuest',detail:'The Lost Repository',palette:jade},
 {label:'School-time Classic',title:'CricketVerse',detail:'Book cricket for two players',palette:amber},
 {label:'Developer Tool',title:'Health Monitor',detail:'Release health and error drills',palette:violet},
 {label:'Desktop Experiment',title:'OBLIVION OS',detail:'A web-based command center',palette:blue},
 {label:'Achievement',title:'1st Place',detail:'Infantino Mark 5 · Arduino robot car',palette:amber},
 {label:'Leadership',title:'SJS Talentia',detail:'Organized the 2025 school event',palette:red},
 {label:'Visual Direction',title:'Liquid Glass',detail:'Minimal interfaces with depth',palette:blue},
 {label:'Workflow',title:'Build & Ship',detail:'GitHub and live web deployments',palette:jade},
 {label:'Next Chapter',title:'More to Build',detail:'Creative technology and useful tools',palette:violet},
];
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
 {kicker:'The Builder',title:'Curiosity into code.',lines:['Creative developer, designer, and independent builder.','Greater Noida, India'],chips:['Design','Code','Experiment']},
 {kicker:'Games',title:'Play has a system.',lines:['CyberTrace — Digital Detective Simulator','CodeQuest — The Lost Repository','CricketVerse — two-player book cricket']},
 {kicker:'Tools',title:'Built to be useful.',lines:['Health Monitor — release health and error drills','OBLIVION OS — an interactive digital command center']},
 {kicker:'Achievement',title:'First place.',lines:['Infantino Mark 5','Arduino Uno robot car project']},
 {kicker:'Leadership',title:'SJS Talentia 2025',lines:['Student event organizer','School event planning and creative execution']},
 {kicker:'The Stack',title:'Build. Create. Experiment.',lines:['Web development · Interactive UI · Game design','GitHub · Vercel · Arduino'],chips:['React','JavaScript','TypeScript','GitHub']},
 {kicker:'Current mission',title:'The next chapter.',lines:['Making digital experiences that look exceptional and do something real.']},
];
export type ProfileId = 'shashank' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: {id:ProfileId;name:string;blurb:string;color:string;order:SectionId[]}[] = [
 {id:'shashank',name:'Shashank',blurb:'The full series, in order',color:'#e5132b',order:['about','journey','originals','picks','skills','moments','story']},
 {id:'recruiter',name:'Recruiter',blurb:'Projects, achievements & contact',color:'#4cc9ff',order:['story','moments','originals','skills','about','journey','picks']},
 {id:'developer',name:'Developer',blurb:'Projects and tools first',color:'#46e3a8',order:['originals','skills','journey','moments','about','picks','story']},
 {id:'creative',name:'Creative',blurb:'Visual experiments & highlights',color:'#ffb547',order:['journey','picks','originals','moments','about','skills','story']},
];
export const sectionMeta: Record<SectionId,{nav:string;card:string;meta:string;palette:Palette}> = {
 about:{nav:'About',card:'About Me',meta:'The Pilot • Background & interests',palette:violet},
 journey:{nav:'Journey',card:'My Journey',meta:`${seasons.length} Seasons • ${seasons.reduce((n,s)=>n+s.episodes.length,0)} Episodes`,palette:amber},
 originals:{nav:'Originals',card:'My Projects',meta:`${projects.length} Originals • Live demos & repositories`,palette:red},
 picks:{nav:'Top Picks',card:'Top Picks',meta:'Selected builds & highlights',palette:jade},
 skills:{nav:'Skills',card:'My Skills',meta:`${skillCategories.length} Categories`,palette:blue},
 moments:{nav:'Moments',card:'Achievements',meta:`${achievements.length} Highlights`,palette:red},
 story:{nav:'Resume',card:'The Full Story',meta:'Profile • Projects • Contact',palette:violet},
};
