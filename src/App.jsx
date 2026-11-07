import React, { useState, useEffect } from 'react';

const ENTRIES = [
  {
    id: 1,
    title: "I feel pressure to succeed",
    prayer: "God, when I feel pressure to perform, remind me that my worth comes from You, not success or achievement. Help me give my best and trust You with the rest.",
    scripture: '"I can do all things through Christ which strengtheneth me." - Philippians 4:13'
  },
  {
    id: 2,
    title: "I'm angry",
    prayer: "Lord, when frustration takes over my thoughts and reactions, help me slow down and respond with wisdom and self-control. Remind me that how I respond says more about me than what made me angry.",
    scripture: '"He that is slow to anger is better than the mighty; and he that ruleth his spirit than he that taketh a city." - Proverbs 16:32'
  },
  {
    id: 3,
    title: "I feel insecure about my looks",
    prayer: "God, when I compare myself to other guys and feel insecure about how I look, remind me that You made me on purpose and with purpose. My worth isn't measured by my size, strength, or appearance.",
    scripture: '"I will praise thee; for I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well." - Psalm 139:14'
  },
  {
    id: 4,
    title: "My friendships feel complicated",
    prayer: "God, when friendships feel complicated or painful, help me be the kind of friend who stays loyal and loves with wisdom. Show me who to trust and how to treat others the way You treat me.",
    scripture: '"A friend loveth at all times, and a brother is born for adversity." - Proverbs 17:17'
  },
  {
    id: 5,
    title: "I'm struggling with temptation",
    prayer: "God, when I feel pulled toward things I know are wrong, give me the strength to choose wisely. Help me fill my mind with Your word so I can recognize what leads me away from You and walk away from it.",
    scripture: '"Wherewithal shall a young man cleanse his way? by taking heed thereto according to thy word." - Psalm 119:9'
  },
  {
    id: 6,
    title: "I'm fighting with my parents",
    prayer: "God, when things feel tense at home and I don't see eye to eye with my parents, help me respond with patience instead of anger. Soften my heart so I can honor them even when it's hard.",
    scripture: '"Honour thy father and mother; which is the first commandment with promise." - Ephesians 6:2'
  },
  {
    id: 7,
    title: "I feel like I don't measure up",
    prayer: "Lord, when I feel like I'm not strong enough, smart enough, or good enough, remind me that Your grace is enough. You don't need me to be perfect; You work through my weakness.",
    scripture: '"And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness..." - 2 Corinthians 12:9'
  },
  {
    id: 8,
    title: "I feel weak",
    prayer: "Lord, when I feel mentally, emotionally, or physically drained and have nothing left, remind me that You are the source of strength. You give power to the faint when I have run out of my own.",
    scripture: '"He giveth power to the faint; and to them that have no might he increaseth strength." - Isaiah 40:29'
  },
  {
    id: 9,
    title: "I feel like I have to handle everything",
    prayer: "God, when I feel pressure to keep it all together and carry every burden by myself, remind me that I wasn't meant to do this alone. Help me be humble enough to lean on You and others.",
    scripture: '"Cast thy burden upon the Lord, and he shall sustain thee: he shall never suffer the righteous to be moved." - Psalm 55:22'
  },
  {
    id: 10,
    title: "I feel discouraged",
    prayer: "Lord, when life feels frustrating and I can't see how things will get better, help me wait on You. Give me the patience to hold on even when progress feels slow.",
    scripture: '"Wait on the Lord: be of good courage, and he shall strengthen thine heart: wait, I say, on the Lord." - Psalm 27:14'
  },
  {
    id: 11,
    title: "I struggle with confidence",
    prayer: "God, help me stop doubting myself. Remind me that You have already equipped me. I don't have to live in fear when You have given me a spirit of power and a sound mind.",
    scripture: '"For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind." - 2 Timothy 1:7'
  },
  {
    id: 12,
    title: "I feel pressure to be strong",
    prayer: "Lord, when I feel like I always have to act tough and can't show how I really feel, remind me that true strength comes from trusting You. Help me be honest about what I'm carrying instead of hiding it.",
    scripture: '"The Lord is my strength and my shield; my heart trusted in him, and I am helped..." - Psalm 28:7'
  },
  {
    id: 13,
    title: "I feel like no one understands me",
    prayer: "God, when I feel misunderstood or alone with what I'm going through, remind me that You fully understand every thought and emotion I carry. I don't have to explain myself to You. You already know.",
    scripture: '"For we have not an high priest which cannot be touched with the feeling of our infirmities; but was in all points tempted like as we are, yet without sin." - Hebrews 4:15'
  },
  {
    id: 14,
    title: "I feel overwhelmed",
    prayer: "Lord, when everything feels like too much and I don't know where to start, calm my mind and help me take things one step at a time. I don't have to figure it all out today.",
    scripture: '"Come unto me, all ye that labour and are heavy laden, and I will give you rest." - Matthew 11:28'
  },
  {
    id: 15,
    title: "I feel pressure to impress people",
    prayer: "God, help me stop chasing approval from others and focus instead on living with integrity and confidence in You. What You think of me matters more than any opinion around me.",
    scripture: '"The fear of man bringeth a snare: but whoso putteth his trust in the Lord shall be safe." - Proverbs 29:25'
  },
  {
    id: 16,
    title: "I feel like a failure",
    prayer: "Lord, when I make mistakes or fall short, help me learn from them and keep moving forward. Failure isn't the end of my story - it's part of how You grow me.",
    scripture: '"For a just man falleth seven times, and riseth up again..." - Proverbs 24:16'
  },
  {
    id: 17,
    title: "I feel distracted",
    prayer: "God, help me stay focused on what actually matters instead of wasting time and energy on things that pull me off course. Give me a clear and settled mind.",
    scripture: '"A double minded man is unstable in all his ways." - James 1:8'
  },
  {
    id: 18,
    title: "I'm hard on myself",
    prayer: "Lord, when I criticize myself constantly and replay every mistake, remind me that there is no condemnation for those who belong to You. Your grace is greater than my worst moments.",
    scripture: '"There is therefore now no condemnation to them which are in Christ Jesus..." - Romans 8:1'
  },
  {
    id: 19,
    title: "I feel pressure about my future",
    prayer: "God, when I worry about what comes next and feel unsure of where I'm headed, help me trust that You already have a plan. You know my future and Your intentions toward me are good.",
    scripture: '"For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end." - Jeremiah 29:11'
  },
  {
    id: 20,
    title: "My heart is broken",
    prayer: "God, when I'm hurting over someone and feel like I can't talk about it, remind me that You see this pain and that it's real. Help me heal without becoming bitter or hardened, and teach me to trust You with my heart.",
    scripture: '"He healeth the broken in heart, and bindeth up their wounds." - Psalm 147:3'
  },
  {
    id: 21,
    title: "I feel pressured to fit in",
    prayer: "God, help me stay true to who You created me to be instead of changing myself to gain approval from others. Give me the courage to stand firm even when the crowd would compromise my character.",
    scripture: '"Be not conformed to this world: but be ye transformed by the renewing of your mind..." - Romans 12:2'
  },
  {
    id: 22,
    title: "I'm struggling with self-control",
    prayer: "Lord, help me think before I react and make wise decisions even when my emotions or impulses feel overwhelming. Remind me that You always provide a way through.",
    scripture: "No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can endure it. - 1 Corinthians 10:13"
  },
  {
    id: 23,
    title: "I feel stressed",
    prayer: "God, when stress takes over my thoughts and I feel like I'm carrying more than I can handle, remind me that I can bring every burden to You. You actually care about what I'm going through.",
    scripture: '"Casting all your care upon him; for he careth for you." - 1 Peter 5:7'
  },
  {
    id: 24,
    title: "I feel awkward or out of place",
    prayer: "Lord, when I feel uncomfortable or out of place around others, remind me that I don't have to earn my spot in any room. You have already chosen me and called me Your own.",
    scripture: "But you are a chosen people, a royal priesthood, a holy nation, God’s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light. - 1 Peter 2:9"
  },
  {
    id: 25,
    title: "I feel pressure from social media",
    prayer: "God, help me not measure my worth by what others post, how I compare, or how much attention I get online. Remind me that You look at my heart and that my value is found in You alone.",
    scripture: '"For the Lord seeth not as man seeth; for man looketh on the outward appearance, but the Lord looketh on the heart." - 1 Samuel 16:7'
  },
  {
    id: 26,
    title: "I feel jealous",
    prayer: "God, when jealousy creeps into my heart, help me be genuinely thankful for what others have. Remind me to trust that Your plan for my life is good, and that envy steals joy. Help me choose gratitude instead.",
    scripture: '"In every thing give thanks: for this is the will of God in Christ Jesus concerning you." - 1 Thessalonians 5:18'
  },
  {
    id: 27,
    title: "I need courage",
    prayer: "Lord, when fear keeps me from stepping up or doing what's right, remind me that You are with me. I don't have to be fearless on my own when Your strength backs me up.",
    scripture: '"Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee..." - Isaiah 41:10'
  },
  {
    id: 28,
    title: "I feel distant from God",
    prayer: "God, when I feel spiritually numb or disconnected, draw me close again. Help me take one step toward You today and trust that You are always ready to meet me there.",
    scripture: '"Draw nigh to God, and he will draw nigh to you..." - James 4:8'
  },
  {
    id: 29,
    title: "I don't know what to do",
    prayer: "Lord, when I feel confused and unsure of what the right decision is, help me stop relying on my own understanding and bring my questions to You. Guide my steps one at a time.",
    scripture: '"Trust in the Lord with all thine heart; and lean not unto thine own understanding..." - Proverbs 3:5'
  },
  {
    id: 30,
    title: "I'm struggling with what I believe",
    prayer: "Lord, when I have questions about my faith or feel unsure or embarrassed to talk about them, bring my doubts to You instead of hiding them. Give me clarity in uncertainty.",
    scripture: '"...Lord, I believe; help thou mine unbelief." - Mark 9:24'
  },
  {
    id: 31,
    title: "I feel like quitting",
    prayer: "God, when I feel exhausted and discouraged and want to stop, strengthen me to keep going. Remind me that You are still working even when I can't see it, and that giving up isn't the end of the story.",
    scripture: '"And let us not be weary in well doing: for in due season we shall reap, if we faint not." - Galatians 6:9'
  }
];

// Tailwind color mappings mimicking the original app's vibrant palette
const COLORS = [
  { bg: 'bg-pink-500 hover:bg-pink-600', border: 'border-pink-500', text: 'text-pink-500' },
  { bg: 'bg-blue-500 hover:bg-blue-600', border: 'border-blue-500', text: 'text-blue-500' },
  { bg: 'bg-emerald-500 hover:bg-emerald-600', border: 'border-emerald-500', text: 'text-emerald-500' },
  { bg: 'bg-amber-500 hover:bg-amber-600', border: 'border-amber-500', text: 'text-amber-500' },
  { bg: 'bg-purple-500 hover:bg-purple-600', border: 'border-purple-500', text: 'text-purple-500' },
  { bg: 'bg-orange-500 hover:bg-orange-600', border: 'border-orange-500', text: 'text-orange-500' },
  { bg: 'bg-cyan-500 hover:bg-cyan-600', border: 'border-cyan-500', text: 'text-cyan-500' },
  { bg: 'bg-indigo-500 hover:bg-indigo-600', border: 'border-indigo-500', text: 'text-indigo-500' }
];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  // Optional: Check system preference on first load
  // useEffect(() => {
  //   if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     setIsDarkMode(true);
  //   }
  // }, []);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>

      {/* Main App Container */}
      <div className="max-w-2xl mx-auto md:py-8">
        <div className={`md:rounded-2xl overflow-hidden shadow-2xl transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white'}`}>

          {/* OG-style Slate Header */}
          <header className="bg-slate-800 text-white p-5 flex justify-between items-center relative">
            <div className="w-8"></div> {/* Spacer to keep title perfectly centered */}
            <h1 className="text-2xl font-bold text-center flex-grow tracking-wide">Word When Plus</h1>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </header>

          <div className="p-6">

            {/* Grid Layout */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {ENTRIES.map((entry, index) => {
                const colorTheme = COLORS[index % COLORS.length];

                return (
                  <button
                    key={entry.id}
                    onClick={() => setSelectedEntry(entry)}
                    className={`
                      min-h-[100px] p-4 rounded-xl transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center text-center
                      ${isDarkMode
                        ? `bg-slate-800 border-b-4 ${colorTheme.border} text-slate-200 hover:bg-slate-750 shadow-md`
                        : `${colorTheme.bg} text-white shadow-md hover:shadow-lg`
                      }
                    `}
                  >
                    <h2 className="font-bold text-lg md:text-base leading-snug">
                      {entry.title}
                    </h2>
                  </button>
                );
              })}
            </div>

            <p className={`text-center text-sm mt-10 mb-2 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              Select a tile to read the prayer and scripture.
            </p>
          </div>
        </div>
      </div>

      {/* Modal View */}
      {selectedEntry && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedEntry(null)}
        >
          <div
            className={`rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl relative border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEntry(null)}
              className={`absolute top-4 right-4 transition-colors ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-slate-800'}`}
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className={`text-2xl font-bold mb-6 pr-8 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
              {selectedEntry.title}
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">Prayer</h4>
                <p className={`leading-relaxed text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {selectedEntry.prayer}
                </p>
              </div>

              {selectedEntry.scripture && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">Scripture</h4>
                  <p className={`italic leading-relaxed border-l-4 pl-4 ${isDarkMode ? 'border-slate-600 text-slate-400' : 'border-slate-300 text-slate-600'}`}>
                    {selectedEntry.scripture}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}