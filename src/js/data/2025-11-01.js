dataSetVersion = "2025-11-01"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by K-pop generation",
    key: "gen",
    tooltip: "Sort by K-pop generation",
    checked: false,   // <-- keeps the group box checked
    sub: [
    { key: "gen1", name: "1st Generation", checked: false }, { key: "gen2", name: "2nd Generation", checked: false }, { key: "gen3", name: "3rd Generation", checked: true }, { key: "gen4", name: "4th Generation", checked: true }, { key: "gen5", name: "5th Generation", checked: true }
    ]
  },
  {
    name: "Select groups to sort through the idols in them",
    key: "group",
    tooltip: "Check this to restrict to certain groups.",
    checked: true,
    sub: [
     { name: "2NE1", key: "2NE1", gen: ["gen2"], tooltip: "Debuted 2009-05-06 under YG Entertainment with 'Fire.' Trailblazing girl group known for bold style, global hits, and fierce stage presence." },
     { name: "4Minute", key: "4Minute", gen: ["gen2"], tooltip: "Debuted 2009-06-18 under Cube Entertainment with 'Hot Issue.' Energetic group recognized for edgy pop and HyunA’s standout presence." },
     { name: "9Muses", key: "9Muses", gen: ["gen2"], tooltip: "Debuted 2010-08-12 under Star Empire Entertainment with 'No Playboy.' Known for model-like visuals, catchy synth-pop, and polished choreography." },
     { name: "ablume", key: "ablume", gen: ["gen5"], tooltip: "Debuted 2024-11-15 under Biscuit Entertainment with 'Venus.' New-era girl group with polished pop and fresh visuals." },
     { name: "ADYA", key: "ADYA", gen: ["gen4", "gen5"], tooltip: "Debuted 2023-05-09 under Starting House Entertainment with the single album 'ADYA.' Youthful act blending trendy dance-pop with bright concepts." },
     { name: "Aespa", key: "Aespa", gen: ["gen4"], tooltip: "Debuted 2020-11-17 under SM Entertainment with 'Black Mamba.' Known for futuristic cyber concepts, virtual avatars, and strong global traction." },
     { name: "After School", key: "After School", gen: ["gen2"], tooltip: "Debuted 2009-01-15 under Pledis Entertainment with 'AH.' Performance-driven group famed for powerful stages and subunits like Orange Caramel." },
     { name: "Alice", key: "Alice", gen: ["gen3"], tooltip: "Debuted 2017-06-01 as ELRIS with 'We, First.' Rebranded as ALICE in 2022 under IOK Company. Recognized for vocal-driven pop sound." },
     { name: "ALLDAY PROJECT", key: "ALLDAY PROJECT", gen: ["gen5"], tooltip: "ALLDAY PROJECT is a five-member co-ed group under The Black Label. They made their debut on June 23, 2025 with the single album 'Famous'." },
     { name: "AOA", key: "AOA", gen: ["gen3"], tooltip: "Debuted 2012-07-30 under FNC Entertainment with 'Elvis.' Unique for combining band and dance unit concepts, later achieving mainstream success." },
     { name: "Apink", key: "Apink", gen: ["gen2"], tooltip: "Debuted 2011-04-19 under A Cube Entertainment (now IST) with 'I Don’t Know.' Beloved for melodic pop, longevity, and smooth transition from cute to mature." },
     { name: "April", key: "April", gen: ["gen3"], tooltip: "Debuted 2015-08-24 under DSP Media with 'Dream Candy.' Known for bright, youthful image and melodic pop songs." },
     { name: "ARTMS", key: "ARTMS", gen: ["gen4"], tooltip: "Debuted 2024-05-31 under Modhaus with the album 'Dall.' Formed by former LOONA members, continuing with modern production and strong visuals." },
     { name: "AtHeart", key: "AtHeart", gen: ["gen5"], tooltip: "Debuted 2024-07 under RBW Entertainment with 'Love Bloom.' Fresh 5th-generation group with growing profile." },
     { name: "Baby DONT Cry", key: "Baby DONT Cry", gen: ["gen5"], tooltip: "Debuted 2024-09 with first digital single. Contemporary pop and dance-driven releases." },
     { name: "BabyMonster", key: "BabyMonster", gen: ["gen5"], tooltip: "Debuted 2023-11-27 under YG Entertainment with 'Batter Up.' Rookie group noted for strong visuals and powerful performances." },
     { name: "BADVILLAIN", key: "BADVILLAIN", gen: ["gen5"], tooltip: "Debuted 2024-05-03 under BPM Entertainment with 'BADVILLAIN.' Dark-concept rookies with edgy branding and modern production." },
     { name: "BEWAVE", key: "BEWAVE", gen: ["gen5"], tooltip: "BEWAVE is a South Korean trio under GoldDust Entertainment. They debuted on April 17, 2024" },
     { name: "Billlie", key: "Billlie", gen: ["gen4"], tooltip: "Debuted 2021-11-10 under Mystic Story with 'Ring X Ring.' Known for eclectic storytelling-driven concepts and experimental pop." },
     { name: "Blackpink", key: "Blackpink", gen: ["gen3"], tooltip: "Debuted 2016-08-08 under YG Entertainment with 'Boombayah' and 'Whistle.' Global superstars blending hip-hop/EDM pop with iconic visuals." },
     { name: "Brave Girls", key: "Brave Girls", gen: ["gen2"], tooltip: "Debuted 2011-04-07 under Brave Entertainment with 'Do You Know.' Rose to late-career fame in 2021 with viral hit 'Rollin’.'" },
     { name: "Brown Eyed Girls", key: "Brown Eyed Girls", gen: ["gen2"], tooltip: "Debuted 2006-03-02 under Nega Network with 'Come Closer.' Acclaimed for inventive concepts and strong vocals." },
     { name: "bugAboo", key: "bugAboo", gen: ["gen4"], tooltip: "Debuted 2021-10-25 under A Team Entertainment with 'bugAboo.' Quirky rookies with playful fantasy themes and high-energy pop." },
     { name: "Busters", key: "Busters", gen: ["gen4"], tooltip: "Debuted 2017-11-27 under JTG Entertainment with 'Dream On.' Dance-centric rookies focusing on spirited performances and youthful charm." },
     { name: "Bvndit", key: "Bvndit", gen: ["gen4"], tooltip: "Debuted 2019-04-10 under MNH Entertainment with 'Hocus Pocus.' Recognized for strong vocals, sleek production, and moody aesthetics." },
     { name: "Candy Shop", key: "Candy Shop", gen: ["gen5"], tooltip: "Debuted 2024-03-27 under Brave Entertainment with 'Hashtag#.' Sweet-themed rookies offering bright, catchy pop and vivid styling." },
     { name: "Cherry Bullet", key: "Cherry Bullet", gen: ["gen4"], tooltip: "Debuted 2019-01-21 under FNC Entertainment with 'Q&A.' Known for bright, catchy pop songs and interactive concepts." },
     { name: "Cignature", key: "Cignature", gen: ["gen4"], tooltip: "Debuted 2020-02-04 under J9 Entertainment with 'Nun Nu Nan Na.' Youthful pop act with cheeky hooks, tight formations, and fresh energy." },
     { name: "CLASS:y", key: "CLASS:y", gen: ["gen4"], tooltip: "Debuted 2022-05-05 under M25 Entertainment with 'Shut Down.' Survival-show group delivering confident pop, sharp performance, and variety charm." },
     { name: "CLC", key: "CLC", gen: ["gen3"], tooltip: "CLC (short for CrystaL Clear) is a girl group under Cube Entertainment. Originally as five, they debuted on March 19, 2015 with their first mini album First Love. In February 2016, the group added two new members: Elkie and Eunbin." },
     { name: "Craxy", key: "Craxy", gen: ["gen4"], tooltip: "Debuted 2020-03-03 under S.A ITAINMENT with 'Aria.' Bold visuals, cinematic MV storytelling, and genre-fusing pop." },
     { name: "Crayon Pop", key: "Crayon Pop", gen: ["gen2"], tooltip: "Debuted 2012-07-18 under Chrome Entertainment with 'Saturday Night.' Famous for quirky choreography and viral hit 'Bar Bar Bar.'" },
     { name: "CrazAngel", key: "CrazAngel", gen: ["gen5"], tooltip: "CrazAngel is a 4-member global K-pop girl group under FORBEST Entertainment. They debuted on July 10, 2025." },
     { name: "CSR", key: "CSR", gen: ["gen4"], tooltip: "Debuted 2022-07-27 under A2Z Entertainment with 'Pop? Pop!.' Warm, nostalgic concepts paired with melodic pop and cohesive visuals." },
     { name: "Dal★Shabet", key: "Dal★Shabet", gen: ["gen2"], tooltip: "Debuted 2011-01-03 under Happy Face Entertainment with 'Supa Dupa Diva.' Upbeat 2010s group known for dance-pop singles and bright stage presence." },
     { name: "Davichi", key: "Davichi", gen: ["gen2"], tooltip: "Debuted 2008-02-04 under Core Contents Media with 'I Love You Even Though I Hate You.' Ballad duo celebrated for emotive vocals, chart-topping OSTs, and timeless songs." },
     { name: "Dia", key: "Dia", gen: ["gen3"], tooltip: "Debuted 2015-09-14 under MBK Entertainment with 'Do It Amazing.' Melodic pop group with gentle aesthetics and member-driven charm." },
     { name: "dodree", key: "dodree", gen: ["gen5"], tooltip: "dodree is a South Korean girl duo under INNIT Entertainment (subsidiary label of JYP Entertainment). They debuted on Janaury 21, 2026, with their first digital single, “꿈만 같았다 (Just Like a Dream)”." },
     { name: "Dreamcatcher", key: "Dreamcatcher", gen: ["gen3"], tooltip: "Debuted 2017-01-13 under Happy Face Entertainment with 'Chase Me.' Rock/metal-influenced idols with dark fantasy lore and intense choreography." },
     { name: "DreamNote", key: "DreamNote", gen: ["gen4"], tooltip: "Debuted 2018-11-07 under iMe Korea with 'Dreamlike.' Cheerful rookies delivering upbeat pop and lively fan engagement." },
     { name: "E11iVYN", key: "E11iVYN", gen: ["gen5"], tooltip: "The group was first introduced on December 23, 2024, as IWU. In late January 2025, the group rebranded to its current name. They officially debuted on October 30, 2025 with their first single “Orbit”." },
     { name: "eite", key: "eite", gen: ["gen5"], tooltip: "eite is a girl group under EVA Entertainment. They made their debut on November 2, 2023 with the single album 'Independent Woman'" },
     { name: "Everglow", key: "Everglow", gen: ["gen4"], tooltip: "Debuted 2019-03-18 under Yuehua Entertainment with 'Bon Bon Chocolat.' Sleek EDM/pop with powerful performances and strong international reach." },
     { name: "EXID", key: "EXID", gen: ["gen3"], tooltip: "Debuted 2012-02-16 under AB Entertainment with 'Whoz That Girl.' Breakout group with viral hits, distinctive timbres, and confident stage energy." },
     { name: "f(x)", key: "f(x)", gen: ["gen2"], tooltip: "Debuted 2009-09-05 under SM Entertainment with 'LA chA TA.' Experimental electropop pioneers with artful concepts and trendsetting sound." },
     { name: "Fiestar", key: "Fiestar", gen: ["gen2"], tooltip: "Debuted 2012-08-31 under LOEN Entertainment with 'Vista.' Solid vocalists delivering polished K-pop across playful and mature concepts." },
     { name: "FIFTY FIFTY", key: "FIFTY FIFTY", gen: ["gen4"], tooltip: "Debuted 2022-11-18 under Attrakt with 'The Fifty.' Refined pop harmonies, minimal aesthetics, and sleeper global streaming success." },
     { name: "Fromis 9", key: "Fromis 9", gen: ["gen4"], tooltip: "Debuted 2018-01-24 under Stone Music with 'To. Heart.' Precision choreography, bright hooks, and polished teamwork." },
     { name: "(G)I-dle", key: "(G)I-dle", gen: ["gen4"], tooltip: "Debuted 2018-05-02 under Cube Entertainment with 'Latata.' Self-producing powerhouse famed for distinct concepts and member-led songwriting." },
     { name: "Gavy NJ", key: "Gavy NJ", gen: ["gen5"], tooltip: "Gavy NJ is a four-member Korean ballad group under DSP Media. They debuted on September 10th 2025." },
     { name: "Geenius", key: "Geenius", gen: ["gen5"], tooltip: "Debuted 2024-01 under independent label with first digital single. Indie-leaning rookies with airy pop and creative styling." },
     { name: "GFriend", key: "GFriend", gen: ["gen3"], tooltip: "Debuted 2015-01-15 under Source Music with 'Glass Bead.' Intense choreography meets melodic, emotional pop and rich harmonies." },
     { name: "Girl's Day", key: "Girl's Day", gen: ["gen2"], tooltip: "Debuted 2010-07-07 under DreamT Entertainment with 'Tilt My Head.' Hitmaking 2010s group balancing playful charm with impressive vocals." },
     { name: "Girls' Generation", key: "Girls' Generation", gen: ["gen2"], tooltip: "Debuted 2007-08-05 under SM Entertainment with 'Into the New World.' Legendary icons with era-defining hits, vocal prowess, and longevity." },
     { name: "Gugudan", key: "Gugudan", gen: ["gen3"], tooltip: "Debuted 2016-06-28 under Jellyfish Entertainment with 'Wonderland.' Vocal/performance-focused group with theatrical concepts and bright pop." },
     { name: "GWSN", key: "GWSN", gen: ["gen4"], tooltip: "Debuted 2018-09-05 under Kiwi Pop with 'Puzzle Moon.' Dreamy aesthetics, alternative-pop textures, and graceful performance." },
     { name: "H//PE Princess", key: "H//PE Princess", gen: ["gen5"], tooltip: "H//PE Princess, is a 7-member South Korean-Japanese girl group under Chapter-I, with activities managed in partnership with Amoeba Culture. The group was formed through the survival show Unpretty Rapstar : HIP POP Princess. They made their simultaneous debut in South Korea and Japan on May 27, 2026, with the release of their first mini album, 17.7." },
     { name: "H1-KEY", key: "H1-KEY", gen: ["gen4"], tooltip: "Debuted 2022-01-05 under GLG with 'Athletic Girl.' R&B-pop leanings, confident vocals, and sleek, modern concepts." },
     { name: "Hearts2Hearts", key: "Hearts2Hearts", gen: ["gen5"], tooltip: "Debuted 2024-02 under small label with first digital single. Indie-pop rookies with soft aesthetics and emotional themes." },
     { name: "Heart Of Woman", key: "Heart Of Woman", gen: ["gen5"], tooltip: "HEART OF WOMAN, also known as H.O.W, is a 5-member K-Pop girl group under BLUE BROWN RECORDS. They debuted on May 28, 2026." },
     { name: "Hellovenus", key: "Hellovenus", gen: ["gen2"], tooltip: "Debuted 2012-05-09 under Pledis/Tricell with 'Venus.' Playful-meets-mature concepts with crisp vocals and bright visuals." },
     { name: "HITGS", key: "HITGS", gen: ["gen5"], tooltip: "Debuted 2024-04 with first single album. New rookies with teen-focused imagery and contemporary pop styling." },
     { name: "I.MET.U", key: "I.MET.U", gen: ["gen5"], tooltip: "I.MET.U is an upcoming girl group formed through the survival show Time Turner produced by Makestar and PI Corporation. The group released their pre-debut single album, Velvet Trigger, on November 3, 2025." },
     { name: "I.O.I", key: "I.O.I", gen: ["gen3"], tooltip: "Debuted 2016-05-04 under YMC Entertainment with 'Dream Girls.' Produce 101 project group whose members seeded many later hits." },
     { name: "ICHILLIN", key: "ICHILLIN", gen: ["gen4"], tooltip: "Debuted 2021-09-08 under KM Entertainment with 'Got'Ya.' Youthful pop with clean melodies and friendly visuals." },
     { name: "ifeye", key: "ifeye", gen: ["gen5"], tooltip: "Debuted 2024-06 with first digital single. Digital-first rookies experimenting with airy pop and minimalist aesthetics." },
     { name: "ILLIT", key: "ILLIT", gen: ["gen5"], tooltip: "Debuted 2024-03-25 under Belift Lab with 'Magnetic.' Hybe rookies with soft-toned pop and viral-friendly appeal." },
     { name: "ILY:1", key: "ILY:1", gen: ["gen4"], tooltip: "Debuted 2022-04-04 under FC ENM with 'Love in Bloom.' Bright bubblegum-pop with cohesive styling and approachable performance." },
     { name: "ITZY", key: "ITZY", gen: ["gen4"], tooltip: "Debuted 2019-02-12 under JYP Entertainment with 'Dalla Dalla.' Confident anthems, sharp choreography, and high-energy teen-pop charisma." },
     { name: "IVE", key: "IVE", gen: ["gen4"], tooltip: "Debuted 2021-12-01 under Starship Entertainment with 'Eleven.' Hook-driven pop, modelesque visuals, and chart-topping momentum." },
     { name: "IZ*ONE", key: "IZ*ONE", gen: ["gen4"], tooltip: "Debuted 2018-10-29 under Off the Record with 'La Vie en Rose.' Produce 48 project with lush pop and large-scale staging." },
     { name: "izna", key: "izna", gen: ["gen5"], tooltip: "Debuted 2024-08 with first digital single. New five-gen act with soft visuals and gentle pop." },
     { name: "Kandis", key: "Kandis", gen: ["gen5"], tooltip: "Kandis is a Korean girl group under 60DGRS. They released their first mixtape Show Me Your Vibe on March 14, 2022, as a pre-debut release. They debuted on August 27, 2023 with the single “BF” as a duo. They officially made their debut on January 14, 2025 with their first full album “Playground” as a full group." },
     { name: "Kara", key: "Kara", gen: ["gen2"], tooltip: "Debuted 2007-03-29 under DSP Media with 'Break It.' Pan-Asian hitmakers with polished pop and lasting impact." },
     { name: "KARD", key: "KARD", gen: ["gen3"], tooltip: "KARD is a four-member co-ed group under DSP Media. They officially debuted on July 19, 2017 with the mini album Hola Hola. Prior to their debut, the group released three pre-debut singles: 'Oh NaNa' on December 13, 2016, followed by 'Don't Recall' in February 16, 2017 and 'Rumor' on April 24, 2017. Their name summarizes the concept of playing cards, with each member being represented by a suit and/or face card. Their name stands for King, Ace, jokeR, & hiDden. " },
     { name: "Kep1er", key: "Kep1er", gen: ["gen4"], tooltip: "Debuted 2022-01-03 under Wake One with 'Wa Da Da.' Survival-show group delivering synchronized performance and punchy pop." },
     { name: "Keyveatz", key: "Keyveatz", gen: ["gen5"], tooltip: "Keyveatz is a 5-member South Korean pre-debut girl crew under AOMG. They released their first pre-debut song, “Key Beats”, on April 29, 2026, followed by a second pre-debut track, “Catch My Breath”, on May 4, 2026.” They are set to debut sometime in 2026." },
     { name: "KiiiKiii", key: "KiiiKiii", gen: ["gen5"], tooltip: "Debuted 2024-05 with first single. Colorful rookies with niche online presence and playful aesthetics." },
     { name: "Kiiras", key: "Kiiras", gen: ["gen5"], tooltip: "Debuted 2024-06 with first digital single. New-gen idols blending modern pop and vibrant styling." },
     { name: "KISS OF LIFE", key: "KISS OF LIFE", gen: ["gen5"], tooltip: "Debuted 2023-07-05 under S2 Entertainment with 'Shhh.' Retro-tinged R&B-pop, strong vocals, and chic visuals." },
     { name: "Laboum", key: "Laboum", gen: ["gen3"], tooltip: "Debuted 2014-08-28 under NH Media with 'Pit-a-Pat.' Melodic mid-tempo pop with soft visuals and steady fan engagement." },
     { name: "Ladies' code", key: "Ladies' code", gen: ["gen3"], tooltip: "Debuted 2013-03-07 under Polaris Entertainment with 'Bad Girl.' Vocal-focused group noted for emotional releases and resilient artistry." },
     { name: "LAPILLUS", key: "LAPILLUS", gen: ["gen4"], tooltip: "Debuted 2022-06-20 under MLD Entertainment with 'Hit Ya!' Upbeat rookies with global members, dynamic concepts, and bright pop." },
     { name: "LATENCY", key: "LATENCY", gen: ["gen5"], tooltip: "LATENCY is a Korean project girl band under Oddinary Records. They debuted on January 8, 2026, with the digital single It Was Love." },
     { name: "Laysha", key: "Laysha", gen: ["gen3"], tooltip: "Debuted 2015-05 under JS Entertainment with 'Turn Up The Music.' Dance/R&B-influenced performances with mature, club-ready styling." },
     { name: "LE SSERAFIM", key: "LE SSERAFIM", gen: ["gen4"], tooltip: "Debuted 2022-05-02 under Source Music with 'Fearless.' Bold branding, polished production, and confident, athletic stagecraft." },
     { name: "Lightsum", key: "Lightsum", gen: ["gen4"], tooltip: "Debuted 2021-06-10 under Cube Entertainment with 'Vanilla.' Radiant rookies offering crisp choreography and clean, melodic pop." },
     { name: "Loossemble", key: "Loossemble", gen: ["gen4"], tooltip: "Debuted 2023-09-15 under CTDENM with 'Sensitive.' LOONA-lineup spin-off with warm aesthetics and story-rich pop." },
     { name: "Lovelyz", key: "Lovelyz", gen: ["gen3"], tooltip: "Debuted 2014-11-12 under Woollim Entertainment with 'Candy Jelly Love.' Soft, synthy melodies, angelic visuals, and refined vocal blends." },
     { name: "LOVEONE", key: "LOVEONE", gen: ["gen5"], tooltip: "LOVEONE is a four-member girl group under CMG Stars. Originally as five, they made their debut on November 22, 2024 with the single album 'Funny Honey'." },
     { name: "Madein", key: "Madein", gen: ["gen5"], tooltip: "Debuted 2024-05 with first digital single. New rookies with indie-pop touches and understated, modern styling." },
     { name: "MAJORS", key: "MAJORS", gen: ["gen4"], tooltip: "Debuted 2021-03-09 under ANS Entertainment with 'The Beginning of Legend.' Performance-centric rookies emphasizing sharp choreography and trendy pop." },
     { name: "Mamamoo", key: "Mamamoo", gen: ["gen3"], tooltip: "Debuted 2014-06-18 under RBW with 'Mr. Ambiguous.' Vocal powerhouses with soulful influences, witty concepts, and live prowess." },
     { name: "Meovv", key: "Meovv", gen: ["gen5"], tooltip: "Debuted 2024-07 with first digital single. Experimental rookies exploring airy, modern pop and artsy visuals." },
     { name: "mimiirose", key: "mimiirose", gen: ["gen4"], tooltip: "Debuted 2022-09-16 under YES IM Entertainment with 'Awesome.' Indie-leaning aesthetics, refined pop production, and elegant styling." },
     { name: "Miss A", key: "Miss A", gen: ["gen2"], tooltip: "Debuted 2010-07-01 under JYP Entertainment with 'Bad Girl Good Girl.' Quartet known for bold concepts, chart hits, and strong vocals." },
     { name: "Momoland", key: "Momoland", gen: ["gen3"], tooltip: "Debuted 2016-11-10 under MLD Entertainment with 'Welcome to Momoland.' Viral dance-pop with playful hooks and energetic performances." },
     { name: "Nature", key: "Nature", gen: ["gen4"], tooltip: "Debuted 2018-08-03 under n.CH Entertainment with 'Girls and Flowers.' Bright nature-themed pop with colorful visuals and lively choreography." },
     { name: "NAVILLERA", key: "NAVILLERA", gen: ["gen5"], tooltip: "NAVILLERA is a 5-member South Korean girl group under Troy Entertainment. They made their official debut on February 3, 2026 with the single “NO LIMIT”." },
     { name: "NeonPunch", key: "NeonPunch", gen: ["gen4"], tooltip: "Debuted 2018-06-27 under A100 Entertainment with 'Moonlight.' Short-lived rookies remembered for energetic tracks and dance focus." },
     { name: "NewJeans", key: "NewJeans", gen: ["gen4"], tooltip: "Debuted 2022-08-01 under ADOR with 'Attention.' Y2K-inspired prodigies with minimalist pop, viral appeal, and cool styling." },
     { name: "Nmixx", key: "Nmixx", gen: ["gen4"], tooltip: "Debuted 2022-02-22 under JYP Entertainment with 'O.O.' Multi-vocalists known for genre-blending ‘MIXX POP’ and complex performance." },
     { name: "ODD YOUTH", key: "ODD YOUTH", gen: ["gen5"], tooltip: "Debuted 2024-06 with first digital single. Alt-pop rookies with moody aesthetics, DIY flair, and intimate releases." },
     { name: "Oh My Girl", key: "Oh My Girl", gen: ["gen3"], tooltip: "Debuted 2015-04-20 under WM Entertainment with 'Cupid.' Whimsical concepts, pretty harmonies, and fairytale-inflected pop." },
     { name: "Pixy", key: "Pixy", gen: ["gen4"], tooltip: "Debuted 2021-02-24 under Allart Entertainment with 'With My Wings.' Dark, fantasy-lore concepts with ethereal visuals and theatrical performances." },
     { name: "PRIMROSE", key: "PRIMROSE", gen: ["gen4"], tooltip: "Debuted 2023-01-13 under A.O Entertainment with 'Red Moon.' Soulful pop duo with elegant imagery and emotive vocal focus." },
     { name: "Pristin", key: "Pristin", gen: ["gen3"], tooltip: "Debuted 2017-03-21 under Pledis Entertainment with 'Wee Woo.' Member-composed pop, bright teen aesthetics, and spirited performance." },
     { name: "Purple Kiss", key: "Purple Kiss", gen: ["gen4"], tooltip: "Debuted 2021-03-15 under RBW with 'Ponzona.' RBW act blending R&B and pop with self-written tracks and rich vocals." },
     { name: "Queenz Eye", key: "Queenz Eye", gen: ["gen4"], tooltip: "Queenz Eye is a 6-member South Korean girl group under Big Mountain Ent. and SISO. They debuted on October 24, 2022." },
     { name: "QWER", key: "QWER", gen: ["gen5"], tooltip: "Debuted 2023-10-18 under Tamago Production with 'Harmony from Discord.' Eclectic rookies with band-leaning concepts, bold colors, and online buzz." },
     { name: "Rainbow", key: "Rainbow", gen: ["gen2"], tooltip: "Debuted 2009-11-12 under DSP Media with 'Gossip Girl.' Early 2010s group delivering polished dance-pop and varied concepts." },
     { name: "Red Velvet", key: "Red Velvet", gen: ["gen3"], tooltip: "Debuted 2014-08-01 under SM Entertainment with 'Happiness.' Known for dual 'red/velvet' identity mixing vivid pop with smooth R&B sophistication." },
     { name: "ReScene", key: "ReScene", gen: ["gen5"], tooltip: "Debuted 2024-04 with first digital single. Indie-pop rookies with soft visuals, subtle storytelling, and intimate tracks." },
     { name: "Rocket Punch", key: "Rocket Punch", gen: ["gen4"], tooltip: "Debuted 2019-08-07 under Woollim Entertainment with 'Bim Bam Bum.' Upbeat hooks, crisp formations, and bright, candy-colored pop." },
     { name: "S.E.S.", key: "S.E.S.", gen: ["gen1"], tooltip: "Debuted 1997-11-28 under SM Entertainment with 'I'm Your Girl.' First-gen icons who set the template for K-pop girl group success." },
     { name: "Say My Name", key: "Say My Name", gen: ["gen5"], tooltip: "Debuted 2024-05 with first digital single. Rookie project with sleek visuals, pan-Asian members, and trendy pop." },
     { name: "Secret", key: "Secret", gen: ["gen2"], tooltip: "Debuted 2009-10-13 under TS Entertainment with 'I Want You Back.' Hitmaking 2010s group with radio-friendly pop and glamorous concepts." },
     { name: "Secret Number", key: "Secret Number", gen: ["gen4"], tooltip: "Debuted 2020-05-19 under Vine Entertainment with 'Who Dis?' Multinational lineup delivering polished pop and global-facing branding." },
     { name: "Sistar", key: "Sistar", gen: ["gen2"], tooltip: "Debuted 2010-06-03 under Starship Entertainment with 'Push Push.' Summer queens with powerhouse vocals, beachy hits, and chart dominance." },
     { name: "Sonamoo", key: "Sonamoo", gen: ["gen3"], tooltip: "Debuted 2014-12-29 under TS Entertainment with 'Deja Vu.' Dance-driven stages with bright teen-pop and confident performance." },
     { name: "SPICA", key: "SPICA", gen: ["gen2"], tooltip: "Debuted 2012-02-09 under B2M Entertainment with 'Russian Roulette.' Acclaimed vocalists known for commanding ballads and soulful pop." },
     { name: "STAYC", key: "STAYC", gen: ["gen4"], tooltip: "Debuted 2020-11-12 under High Up Entertainment with 'So Bad.' Hook-rich teen-pop, standout vocal color, and strong streaming metrics." },
     { name: "Stellar", key: "Stellar", gen: ["gen2"], tooltip: "Debuted 2011-08-28 under Top Class Entertainment with 'Rocket Girl.' Bold concepts and provocative visuals paired with infectious dance-pop." },
     { name: "T-ara", key: "T-ara", gen: ["gen2"], tooltip: "Debuted 2009-07-29 under Core Contents Media with 'Lie.' Iconic 2010s group with earworm choruses and prolific hit streaks." },
     { name: "Tri.be", key: "Tri.be", gen: ["gen4"], tooltip: "Debuted 2021-02-17 under TR Entertainment with 'Doom Doom Ta.' Global rookies delivering assertive dance-pop and dynamic formations." },
     { name: "tripleS", key: "tripleS", gen: ["gen4"], tooltip: "Debuted 2022-10-28 under Modhaus with 'Generation.' Modular concept group with fan participation, subunits, and novel releases." },
     { name: "Twice", key: "Twice", gen: ["gen3"], tooltip: "Debuted 2015-10-20 under JYP Entertainment with 'Like OOH-AHH.' Asia-spanning hitmakers with addictive hooks, synchronized stages, and charm." },
     { name: "UDTT", key: "UDTT", gen: ["gen5"], tooltip: "UDTT is a five-member girl group under SW Entertainment. They made their debut on April 29, 2025 with the single album 'School Rush'." },
     { name: "UNCHILD", key: "UNCHILD", gen: ["gen5"], tooltip: "UNCHILD, formerly known as HighUp Baby and HighUp Trainees, is a 6-member South Korean girl group under HighUp Entertainment. They debuted on April 21, 2026, with their first single, “We Are UNCHILD”." },
     { name: "UNIS", key: "UNIS", gen: ["gen5"], tooltip: "Debuted 2024-03-27 under F&F Entertainment with 'Superwoman.' Survival-show rookies with diverse members and polished modern pop." },
     { name: "USPEER", key: "USPEER", gen: ["gen5"], tooltip: "Debuted 2024-06 with first digital single. Emerging rookies emphasizing trendy styling and digital-first promotion." },
     { name: "VIV", key: "VIV", gen: ["gen5"], tooltip: "Debuted 2024-07 with first single album. New idol group with bright choreography and clean pop textures." },
     { name: "Viviz", key: "Viviz", gen: ["gen4"], tooltip: "Debuted 2022-02-09 under BPM Entertainment with 'Bop Bop!' Trio of former GFriend members with mature pop and sleek visuals." },
     { name: "VVS", key: "VVS", gen: ["gen5"], tooltip: "VVS is a 5-member South Korean girl group under MZMC. They debuted on April 22, 2025 with the digital single “Tea,” and their 1st mini album D.I.M.M was released on May 19, 2025." },
     { name: "VVUP", key: "VVUP", gen: ["gen5"], tooltip: "Debuted 2024-05 with first digital single. Rookie-era act with upbeat pop concepts and contemporary production." },
     { name: "Weeekly", key: "Weeekly", gen: ["gen4"], tooltip: "Debuted 2020-06-30 under IST Entertainment with 'Tag Me (@Me).' Bubbly teen-pop paired with sharp formations and school-life themes." },
     { name: "Weki Meki", key: "Weki Meki", gen: ["gen3"], tooltip: "Debuted 2017-08-08 under Fantagio with 'I Don’t Like Your Girlfriend.' Performance-forward pop with girl-crush styling and confident energy." },
     { name: "WiTCHX", key: "WiTCHX", gen: ["gen5"], tooltip: "WiTCHX also stylized as W!TCHX, is a five-member girl group under Inmedia and Artform Entertainment. They made their debut on November 6, 2024 with the digital single 'Blala'." },
     { name: "WJSN", key: "WJSN", gen: ["gen3"], tooltip: "Debuted 2016-02-25 under Starship Entertainment with 'Mo Mo Mo.' Cosmic concept group with lush melodies, graceful choreographies, and large lineup." },
     { name: "Wonder Girls", key: "Wonder Girls", gen: ["gen2"], tooltip: "Debuted 2007-02-10 under JYP Entertainment with 'Irony.' Retro-pop pioneers with international crossover and era-defining singles." },
     { name: "WOOAH", key: "WOOAH", gen: ["gen4"], tooltip: "Debuted 2020-05-13 under NV Entertainment with 'Exclamation.' Dance-heavy rookies with vibrant visuals and energetic pop." },
     { name: "X:IN", key: "X:IN", gen: ["gen4"], tooltip: "Debuted 2023-04-11 under ESCROW Entertainment with 'Keeping the Fire.' Multinational rookies with modern pop, striking styling, and bold branding." },
     { name: "Young Posse", key: "Young Posse", gen: ["gen5"], tooltip: "Debuted 2023-10-18 under Beats Entertainment with 'Macaroni Cheese.' Trendy pop rookies with social-media savvy and rising buzz." },
      // Solo artists (added concise descriptors for consistency)
     { name: "Ailee", key: "Ailee", tooltip: "Debuted 2012-02-09 under YMC Entertainment with 'Heaven.' Vocal powerhouse soloist known for soaring ballads and OST hits." },
     { name: "Alexa", key: "Alexa", tooltip: "Debuted 2019-10-21 under ZB Label with 'Bomb.' High-concept soloist mixing K-pop with sci-fi visuals and bold EDM-pop." },
     { name: "BIBI", key: "BIBI", tooltip: "Debuted 2019-05-15 under Feel Ghood Music with 'Binu.' Alt-R&B/pop singer-songwriter with raw storytelling and distinctive tone." },
     { name: "BoA", key: "BoA", tooltip: "Debuted 2000-08-25 under SM Entertainment with 'ID; Peace B.' K-pop pioneer whose cross-Asia success set the standard for solo idols." },
     { name: "Bol4", key: "Bol4", tooltip: "Debuted 2016-04-22 under Shofar Music with 'Fight Day.' Indie-pop act known for tender vocals, heartfelt lyrics, and soft melodies." },
     { name: "Chungha", key: "Chungha", tooltip: "Debuted 2017-06-07 under MNH Entertainment with 'Why Don’t You Know.' Performance-driven soloist with sleek pop, charisma, and sharp choreography." },
     { name: "Chuu", key: "Chuu", tooltip: "Debuted 2022-10-18 under ATRP with 'One and a Half.' Bright-tone soloist known for warm vocals, friendly image, and catchy pop." },
     { name: "CL", key: "CL", tooltip: "Debuted 2013-05-28 as a soloist under YG Entertainment with 'The Baddest Female.' Global hip-hop/pop soloist with pioneering swagger and artistic reinvention." },
     { name: "Cocona", key: "Cocona", tooltip: "Debuted 2023-05 with first solo track under XGALX (XG). Fresh solo act blending trendy pop and rap-influenced stylings." },
     { name: "Gyubin", key: "Gyubin", tooltip: "Gyubin is a singer-songwriter under Liveworks Company. She made her solo debut with the digital single 'Really Like You' on January 17, 2024. She is best known for being a former 'Top 10 Student' contestant." },
     { name: "Hanhee", key: "Hanhee", tooltip: "Hanhee is a former pre-debut member of the girl group WiTCHES and a former member of Deep Studio Entertainment's trainee group YOURS. She made her solo debut on October 22, 2023, with the digital single 'Bad Summer'. She re-debuted on January 9, 2025 with the digital single 'Mayo!'." },
     { name: "Heize", key: "Heize", tooltip: "Debuted 2014-01-17 under CJ E&M with 'After I've Wandered A Bit.' Moody R&B singer-songwriter with chart-topping ballads and intimate tone." },
     { name: "Hyewon", key: "Hyewon", tooltip: "Debuted 2021-12 as a soloist after IZ*ONE disbandment. Soft-pop soloist with gentle visuals and understated vocal color." },
     { name: "Hyolyn", key: "Hyolyn", tooltip: "Hyolyn is a South Korean singer-songwriter under REH Entertainment. She is a former member of the girl group SISTAR and a member of the sub-unit SISTAR19. She made her solo debut on November 26, 2013 with her first album Love & Hate." },
     { name: "Hyuna", key: "Hyuna", tooltip: "Debuted 2010-01-04 under Cube Entertainment with 'Change.' Iconic performer fusing dance-pop, bold fashion, and magnetic stage presence." },
     { name: "IU", key: "IU", tooltip: "Debuted 2008-09-18 under LOEN Entertainment with 'Lost Child.' Beloved singer-songwriter with masterful storytelling and top-tier vocals." },
     { name: "Jessi", key: "Jessi", tooltip: "Debuted 2005-12-01 under Doremi Media with 'Get Up.' Charismatic rapper/singer with confident anthems and TV personality." },
     { name: "Jinni", key: "Jinni", tooltip: "Debuted 2023-10-11 under ATTRAKT with 'C'mon.' Rising soloist with cool-toned pop and dynamic, trend-led styling." },
     { name: "Jiselle", key: "Jiselle", tooltip: "Debuted 2019-02-02 under MZMC with 'Missed Call.' Smooth R&B vocalist noted for serene tone and sophisticated tracks." },
     { name: "Jo Yuri", key: "Jo Yuri", tooltip: "Debuted 2021-10-07 under Wake One with 'Glassy.' IZ*ONE alumna delivering emotive pop and clear, expressive vocals." },
     { name: "Juniel", key: "Juniel", tooltip: "Debuted 2012-06-07 under FNC Entertainment with 'Illa Illa.' Acoustic-pop singer with delicate melodies and gentle storytelling." },
     { name: "Kim Yeji", key: "Kim Yeji", tooltip: "Debuted 2023-06 with first digital single. Emerging soloist with crisp vocals and contemporary K-pop styling." },
     { name: "Kwon Eunbi", key: "Kwon Eunbi", tooltip: "Debuted 2021-08-24 under Woollim Entertainment with 'Door.' IZ*ONE leader turned soloist combining dance-pop finesse and charisma." },
     { name: "Lee Chaeyeon", key: "Lee Chaeyeon", tooltip: "Debuted 2022-10-12 under WM Entertainment with 'Hush Rush.' Dance-focused soloist with intricate choreographies and sleek pop." },
     { name: "Lee Hi", key: "Lee Hi", tooltip: "Debuted 2012-10-28 under YG Entertainment with '1,2,3,4.' Soulful vocalist with smoky timbre and timeless R&B/pop ballads." },
     { name: "Lee Hyori", key: "Lee Hyori", tooltip: "Debuted 2003-08-13 under DSP Media with '10 Minutes.' First-gen icon merging pop, fashion, and star power across decades." },
     { name: "Lee Youngji", key: "Lee Youngji", tooltip: "Debuted 2019-11-02 under Mainstream with 'Dark Room.' Rapper/TV personality with sharp wit, bold flow, and viral presence." },
     { name: "Moong Myang", key: "Moong Myang", tooltip: "Moong Myang signed a contract with MAJOR9 in July 2024. Her first professional work was the release of the song 'Young & Green', for the soundtrack of Hear Me: Our Summer, released on November 18, 2024. She later also released another soundtrack song 'Endless Night' for It's Okay! on March 6, 2025." },
     { name: "Punch", key: "Punch", tooltip: "Debuted 2014-09-25 under YG Entertainment with 'Sick.' OST standout with powerful ballads and dramatic vocal expression." },
     { name: "Rothy", key: "Rothy", tooltip: "Debuted 2017-11-09 under Dorothy Company with 'Stars.' Soft-pop soloist with airy tone and diary-like songwriting." },
     { name: "Sejeong", key: "Sejeong", tooltip: "Debuted 2016-11-23 under Jellyfish Entertainment with 'Flower Way.' Versatile singer-actress with uplifting pop and heartfelt ballads." },
     { name: "Y:SY (Lee Seoyeon)", key: "Seoyeon", tooltip: "Y:SY, also known as Yi Seoyeon (이서연; formerly romanized as Lee Seoyeon), is a South Korean singer-songwriter and rapper under H1GHR Music. She is a former member of the girl group fromis_9. She made her solo debut on November 17, 2025 with the digital single 'Naked'. She is also known for being a contestant on the reality survival show Idol School." },
     { name: "Somi", key: "Somi", tooltip: "Debuted 2019-06-13 under The Black Label with 'Birthday.' Pop-princess soloist delivering trendy hooks and high-fashion visuals." },
     { name: "Soojin", key: "Soojin", tooltip: "Debuted 2023-11-08 under BRD Entertainment with 'Agassy.' Sultry-toned soloist with moody pop and striking performance colors." },
     { name: "Soorin", key: "Soorin", tooltip: "Soorin is a singer under Oneul Entertainment. She made her solo debut on May 22, 2025 with the single album 'Boys Can Be'." },
     { name: "Sunmi", key: "Sunmi", tooltip: "Debuted 2007-02-10 with Wonder Girls, solo debut 2013-08-26 under JYP with '24 Hours.' Art-pop soloist known for retro-inflected hits and distinctive storytelling." },
     { name: "Suzanne", key: "Suzanne", tooltip: "Debuted 2024-05 with first digital single. New solo act with clean vocals and contemporary pop sensibility." },
     { name: "Yeeun", key: "Yeeun", tooltip: "Debuted 2023-04-13 under Superbell Company with 'The Beginning.' Confident soloist blending rap/sing styles with bold, modern pop." },
     { name: "Yena", key: "Yena", tooltip: "Debuted 2022-01-17 under Yuehua Entertainment with 'Smiley.' IZ*ONE alumna delivering bubbly pop, comic flair, and idol variety chops." },
     { name: "Yerin", key: "Yerin", tooltip: "Debuted 2021-05-18 under Sublime Artist Agency with 'Aria.' GFRIEND alumna with sweet-toned solo pop and soft visuals." },
     { name: "Youha", key: "Youha", tooltip: "Debuted 2020-09-29 under Universal Music Korea with 'Island.' Synth-pop soloist with sleek production and airy melodies." },
     { name: "Younha", key: "Younha", tooltip: "Debuted 2004-12-01 in Japan with 'Yubikiri,' Korean debut 2006-03-23 with 'Audition.' Rock/pop balladeer with crystalline vocals and enduring chart presence." },
     { name: "Yuju", key: "Yuju", tooltip: "Debuted 2022-01-18 under KONNECT Entertainment with 'Play.' Power vocalist (GFRIEND) delivering emotive, technical solo performances." },
     { name: "Yukika", key: "Yukika", tooltip: "Debuted 2019-02-22 under Estimate Entertainment with 'Neon.' City-pop revivalist with retro aesthetics and silky, nostalgic sound." },
     { name: "Yves", key: "Yves", tooltip: "Debuted 2017-11-28 under BlockBerry Creative with the single album 'Yves' as part of LOONA’s pre-debut project. Known for elegant pop, refined visuals, and graceful tone." }
    ]
  },
  {
    name: "Group Sorter",
    key: "group_label",
    tooltip: "Check this to choose which groups you want to sort.",
    checked: false,
    sub: [ 
      {name: "2NE1", key: "2NE1"},
      {name: "4Minute", key: "4Minute"},
      {name: "9Muses", key: "9Muses"},
      {name: "ablume", key: "ablume"},
      {name: "ADYA", key: "ADYA"},
      {name: "Aespa", key: "Aespa"},
      {name: "After School", key: "After School"},
      {name: "Alice", key: "Alice"},
      {name: "AOA", key: "AOA"},
      {name: "Apink", key: "Apink"},
      {name: "April", key: "April"},
      {name: "ARTMS", key: "ARTMS"},
      {name: "AtHeart", key: "AtHeart"},
      {name: "Baby DONT Cry", key: "Baby DONT Cry"},
      {name: "BabyMonster", key: "BabyMonster"},
      {name: "BADVILLAIN", key: "BADVILLAIN"},
      {name: "BEWAVE", key: "BEWAVE"},
      {name: "Billlie", key: "Billlie"},
      {name: "Blackpink", key: "Blackpink"},
      {name: "Brave Girls", key: "Brave Girls"},
      {name: "Brown Eyed Girls", key: "Brown Eyed Girls"},
      {name: "bugAboo", key: "bugAboo"},
      {name: "Busters", key: "Busters"},
      {name: "Bvndit", key: "Bvndit"},
      {name: "Candy Shop", key: "Candy Shop"},
      {name: "Cherry Bullet", key: "Cherry Bullet"},
      {name: "Cignature", key: "Cignature"},
      {name: "CLASS:y", key: "CLASS:y"},
      {name: "CLC", key: "CLC"},
      {name: "Craxy", key: "Craxy"},
      {name: "Crayon Pop", key: "Crayon Pop"},
      {name: "CrazAngel", key: "CrazAngel"},
      {name: "CSR", key: "CSR"},
      {name: "Dal★Shabet", key: "Dal★Shabet"},
      {name: "Davichi", key: "Davichi"},
      {name: "Dia", key: "Dia"},
      {name: "Dodree", key: "Dodree"},
      {name: "Dreamcatcher", key: "Dreamcatcher"},
      {name: "DreamNote", key: "DreamNote"},
      {name: "E11iVYN", key: "E11iVYN"},
      {name: "eite", key: "eite"},
      {name: "Everglow", key: "Everglow"},
      {name: "EXID", key: "EXID"},
      {name: "f(x)", key: "f(x)"},
      {name: "Fiestar", key: "Fiestar"},
      {name: "FIFTY FIFTY", key: "FIFTY FIFTY"},
      {name: "Fromis 9", key: "Fromis 9"},
      {name: "(G)I-dle", key: "(G)I-dle"},
      {name: "Gavy NJ", key: "Gavy NJ"},
      {name: "Geenius", key: "Geenius"},
      {name: "GFriend", key: "GFriend"},
      {name: "Girl's Day", key: "Girl's Day"},
      {name: "Girls' Generation", key: "Girls' Generation"},
      {name: "Gugudan", key: "Gugudan"},
      {name: "GWSN", key: "GWSN"},
      {name: "H//PE Princess", key: "H//PE Princess"},
      {name: "H1-KEY", key: "H1-KEY"},
      {name: "Heart Of Woman", key: "Heart Of Woman"},
      {name: "Hearts2Hearts", key: "Hearts2Hearts"},
      {name: "Hellovenus", key: "Hellovenus"},
      {name: "HITGS", key: "HITGS"},
      {name: "I.O.I", key: "I.O.I"},
      {name: "ICHILLIN", key: "ICHILLIN"},
      {name: "ifeye", key: "ifeye"},
      {name: "ILLIT", key: "ILLIT"},
      {name: "ILY:1", key: "ILY:1"},
      {name: "I.MET.U", key: "I.MET.U"},
      {name: "ITZY", key: "ITZY"},
      {name: "IVE", key: "IVE"},
      {name: "IZ*ONE", key: "IZ*ONE"},
      {name: "izna", key: "izna"},
      {name: "Kandis", key: "Kandis"},
      {name: "Kara", key: "Kara"},
      {name: "Kep1er", key: "Kep1er"},
      {name: "Keyveatz", key: "Keyveatz"},
      {name: "KiiiKiii", key: "KiiiKiii"},
      {name: "Kiiras", key: "Kiiras"},
      {name: "KISS OF LIFE", key: "KISS OF LIFE"},
      {name: "Laboum", key: "Laboum"},
      {name: "Ladies' code", key: "Ladies' code"},
      {name: "LAPILLUS", key: "LAPILLUS"},
      {name: "LATENCY", key: "LATENCY"},
      {name: "Laysha", key: "Laysha"},
      {name: "LE SSERAFIM", key: "LE SSERAFIM"},
      {name: "Lightsum", key: "Lightsum"},
      {name: "Loossemble", key: "Loossemble"},
      {name: "Lovelyz", key: "Lovelyz"},
      {name: "LOVEONE", key: "LOVEONE"},
      {name: "Madein", key: "Madein"},
      {name: "MAJORS", key: "MAJORS"},
      {name: "Mamamoo", key: "Mamamoo"},
      {name: "Meovv", key: "Meovv"},
      {name: "mimiirose", key: "mimiirose"},
      {name: "Miss A", key: "Miss A"},
      {name: "Momoland", key: "Momoland"},
      {name: "Nature", key: "Nature"},
      {name: "NAVILLERA", key: "NAVILLERA"},
      {name: "NeonPunch", key: "NeonPunch"},
      {name: "NewJeans", key: "NewJeans"},
      {name: "Nmixx", key: "Nmixx"},
      {name: "ODD YOUTH", key: "ODD YOUTH"},
      {name: "Oh My Girl", key: "Oh My Girl"},
      {name: "Pixy", key: "Pixy"},
      {name: "PRIMROSE", key: "PRIMROSE"},
      {name: "Pristin", key: "Pristin"},
      {name: "Purple Kiss", key: "Purple Kiss"},
      {name: "Queenz Eye", key: "Queenz Eye"},
      {name: "QWER", key: "QWER"},
      {name: "Rainbow", key: "Rainbow"},
      {name: "Red Velvet", key: "Red Velvet"},
      {name: "ReScene", key: "ReScene"},
      {name: "Rocket Punch", key: "Rocket Punch"},
      {name: "Say My Name", key: "Say My Name"},
      {name: "Secret", key: "Secret"},
      {name: "Secret Number", key: "Secret Number"},
      {name: "Sistar", key: "Sistar"},
      {name: "Sonamoo", key: "Sonamoo"},
      {name: "SPICA", key: "SPICA"},
      {name: "STAYC", key: "STAYC"},
      {name: "Stellar", key: "Stellar"},
      {name: "Sunny Hill", key: "Sunny Hill"},
      {name: "T-ara", key: "T-ara"},
      {name: "Tri.be", key: "Tri.be"},
      {name: "tripleS", key: "tripleS"},
      {name: "Twice", key: "Twice"},
      {name: "UDTT", key: "UDTT"},
      {name: "UNCHILD", key: "UNCHILD"},
      {name: "UNIS", key: "UNIS"},
      {name: "USPEER", key: "USPEER"},
      {name: "VIV", key: "VIV"},
      {name: "Viviz", key: "Viviz"},
      {name: "VVS", key: "VVS"},
      {name: "VVUP", key: "VVUP"},
      {name: "Weeekly", key: "Weeekly"},
      {name: "Weki Meki", key: "Weki Meki"},
      {name: "WJSN", key: "WJSN"},
      {name: "Wonder Girls", key: "Wonder Girls"},
      {name: "WOOAH", key: "WOOAH"},
      {name: "X:IN", key: "X:IN"},
      {name: "Young Posse", key: "Young Posse"},
    ]
  },
  {
    name: "Idol Clash",
    key: "Clash",
    tooltip: "The sets of idols in the discord server's Idol Clash",
    checked: false,   // <-- keeps the group box checked
    sub: [
    { key: "Idol Clash S2", name: "Idol Clash S2", checked: false },
    { key: "Idol Clash S3", name: "Idol Clash S3", checked: false },
    { key: "Idol Clash Cat Edition", name: "Idol Clash Cat Edition", checked: false },
  ]
  },
];

dataSet[dataSetVersion].characterData = [
    {
        name: "S.E.S. Bada",
        img: "EJAI9ha.jpeg",
        opts: {
            group: ["S.E.S."],
            gen: ["gen1"]
        }
    },
    {
        name: "S.E.S. Eugene",
        img: "qFgTDvT.jpeg",
        opts: {
            group: ["S.E.S."],
            gen: ["gen1"]
        }
    },
    {
        name: "S.E.S. Shoo",
        img: "gf48iHk.png",
        opts: {
            group: ["S.E.S."],
            gen: ["gen1"]
        }
    },
    {
        name: "BoA",
        img: "mDhUrFG.jpeg",
        opts: {
            group: ["BoA"],
            gen: ["gen1"]
        }
    },
    {
        name: "Jessi",
        img: "rK1S2bh.jpeg",
        opts: {
            group: ["Jessi"],
            gen: ["gen2"]
        }
    },
    {
        name: "Lee Hyori",
        img: "agNlY1T.jpeg",
        opts: {
            group: ["Lee Hyori"],
            gen: ["gen1"]
        }
    },
    {
        name: "Wonder Girls Ahn Sohee",
        img: "qMPi1sx.jpeg",
        opts: {
            group: ["Wonder Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Dal★Shabet Ayoung",
        img: "u05uzw4.jpeg",
        opts: {
            group: ["Dal★Shabet"],
            gen: ["gen2"]
        }
    },
    {
        name: "Ailee",
        img: "q0TWy1J.jpeg",
        opts: {
            group: ["Ailee"],
            gen: ["gen2"]
        }
    },
    {
        name: "Hellovenus Alice",
        img: "L80EqJw.jpeg",
        opts: {
            group: ["Hellovenus"],
            gen: ["gen2"]
        }
    },
    {
        name: "f(x) Amber",
        img: "fSCPXVE.jpeg",
        opts: {
            group: ["f(x)"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Areum",
        img: "ykZoQ4f.png",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Bekah",
        img: "7lgqVeu.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Bini",
        img: "K970Pu4.png",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sunny Hill Bitna",
        img: "LPLDlv6.png",
        opts: {
            group: ["Sunny Hill"],
            gen: ["gen2"]
        }
    },
    {
        name: "SPICA BoA",
        img: "wcFNldT.jpeg",
        opts: {
            group: ["SPICA"],
            gen: ["gen2"]
        }
    },
    {
        name: "Apink Bomi",
        img: "hDNaiGP.jpeg",
        opts: {
            group: ["Apink"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sistar Bora",
        img: "Hs8FBDs.png",
        opts: {
            group: ["Sistar"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Boram",
        img: "IGHUvD6.jpeg",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "CL",
        img: "8Of5H5d.jpeg",
        opts: {
            group: ["CL"],
            gen: ["gen2"]
        }
    },
    {
        name: "Fiestar Cao Lu",
        img: "CPb4yFd.png",
        opts: {
            group: ["Fiestar"],
            gen: ["gen2"]
        }
    },
    {
        name: "AOA Chanmi",
        img: "WZQecIb.jpeg",
        opts: {
            group: ["AOA"],
            gen: ["gen3"]
        }
    },
    {
        name: "AOA Choa",
        img: "YrjSiU3.jpeg",
        opts: {
            group: ["AOA"],
            gen: ["gen3"]
        }
    },
    {
        name: "Crayon Pop Choa",
        img: "bfCPL0W.png",
        opts: {
            group: ["Crayon Pop"],
            gen: ["gen2"]
        }
    },
    {
        name: "Apink Chorong",
        img: "Nj8CLUy.jpeg",
        opts: {
            group: ["Apink"],
            gen: ["gen2"]
        }
    },
    {
        name: "Dal★Shabet Park Su Bin",
        img: "6piZqXS.jpeg",
        opts: {
            group: ["Dal★Shabet"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sistar Dasom",
        img: "B8R9gpZ.png",
        opts: {
            group: ["Sistar"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School E-Young",
        img: "VKW8uQ5.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "Crayon Pop Ellin",
        img: "RELS9vn.png",
        opts: {
            group: ["Crayon Pop"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Euaerin",
        img: "Dc3VJAA.png",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Eunji",
        img: "IPadsTs.png",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Eunji",
        img: "lB3n0ZP.jpeg",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sunny Hill Eunju",
        img: "cgnfhWT.png",
        opts: {
            group: ["Sunny Hill"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Eunjung",
        img: "zKKE3sB.png",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Eunyoung",
        img: "rNZ7IZz.png",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Miss A Fei",
        img: "lP6qqL5.jpeg",
        opts: {
            group: ["Miss A"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brown Eyed Girls Gain",
        img: "rWdWerY.png",
        opts: {
            group: ["Brown Eyed Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "4Minute Gayoon",
        img: "kd2BuSf.png",
        opts: {
            group: ["4Minute"],
            gen: ["gen2"]
        }
    },
    {
        name: "Stellar Gayoung",
        img: "dbKKYym.png",
        opts: {
            group: ["Stellar"],
            gen: ["gen2"]
        }
    },
    {
        name: "Kara Goo Hara",
        img: "grCkR4r.jpeg",
        opts: {
            group: ["Kara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Crayon Pop Geummi",
        img: "G7K4P01.png",
        opts: {
            group: ["Crayon Pop"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Gyeongree",
        img: "XxRurmW.jpeg",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "Wonder Girls Park Yeeun",
        img: "iEJtb8V.jpeg",
        opts: {
            group: ["Wonder Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Secret Hana",
        img: "t5SBTjU.png",
        opts: {
            group: ["Secret"],
            gen: ["gen2"]
        }
    },
    {
        name: "EXID Hani",
        img: "r9wjdAO.jpeg",
        opts: {
            group: ["EXID"],
            gen: ["gen3"]
        }
    },
    {
        name: "Apink Hayoung",
        img: "qRFys3W.jpeg",
        opts: {
            group: ["Apink"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Hayun",
        img: "dDBDWKs.png",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Hwayoung",
        img: "X1EYi5P.jpg",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "AOA Hyejeong",
        img: "vJ8va8a.jpeg",
        opts: {
            group: ["AOA"],
            gen: ["gen3"]
        }
    },
    {
        name: "9Muses Hyemi",
        img: "JSDwiDr.jpeg",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "Stellar Hyeoeun",
        img: "aDKZiIc.jpeg",
        opts: {
            group: ["Stellar"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Hyeran",
        img: "DSIOLO0.jpeg",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girl's Day Hyeri",
        img: "gzAFqGO.jpeg",
        opts: {
            group: ["Girl's Day"],
            gen: ["gen2"]
        }
    },
    {
        name: "Wonder Girls Hyerim",
        img: "9r2baV5.png",
        opts: {
            group: ["Wonder Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "EXID Hyerin",
        img: "svXAaRS.jpeg",
        opts: {
            group: ["EXID"],
            gen: ["gen3"]
        }
    },
    {
        name: "Girls' Generation Hyoyeon",
        img: "dS8UPyw.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "Hyolyn",
        img: "zlGXjIC.jpeg",
        opts: {
            group: ["Hyolyn"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Hyomin",
        img: "SPub0fe.jpeg",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Rainbow Hyunyoung",
        img: "vAmAcai.png",
        opts: {
            group: ["Rainbow"],
            gen: ["gen2"]
        }
    },
    {
        name: "IU",
        img: "ha00nMK.jpeg",
        opts: {
            group: ["IU"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Jaekyung",
        img: "SPUJZAO.png",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "Rainbow Jaekyung",
        img: "bSpTc6d.jpeg",
        opts: {
            group: ["Rainbow"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brown Eyed Girls JeA",
        img: "6Ap3i2Q.jpeg",
        opts: {
            group: ["Brown Eyed Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Fiestar Jei",
        img: "RKNbiuS.png",
        opts: {
            group: ["Fiestar"],
            gen: ["gen2"]
        }
    },
    {
        name: "4Minute Jenyer",
        img: "e0RvTm0.jpeg",
        opts: {
            group: ["4Minute"],
            gen: ["gen2"]
        }
    },
    {
        name: "Stellar Jeon Youl",
        img: "zldrNFu.png",
        opts: {
            group: ["Stellar"],
            gen: ["gen2"]
        }
    },
    {
        name: "Apink Jeong Eunji",
        img: "CY4G9Ea.jpeg",
        opts: {
            group: ["Apink"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Jessica",
        img: "3yBxR2a.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "Miss A Jia",
        img: "KhxYm7P.jpeg",
        opts: {
            group: ["Miss A"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girl's Day Jihae",
        img: "FRAV4bp.png",
        opts: {
            group: ["Girl's Day"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girl's Day Jiin",
        img: "gJVat1j.jpeg",
        opts: {
            group: ["Girl's Day"],
            gen: ["gen2"]
        }
    },
    {
        name: "AOA Jimin",
        img: "djksx43.jpeg",
        opts: {
            group: ["AOA"],
            gen: ["gen3"]
        }
    },
    {
        name: "Rainbow Jisook",
        img: "FK6sA4j.jpeg",
        opts: {
            group: ["Rainbow"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girl's Day Jisun",
        img: "VwhJdKB.jpeg",
        opts: {
            group: ["Girl's Day"],
            gen: ["gen2"]
        }
    },
    {
        name: "SPICA Jiwon",
        img: "XakKbI2.jpeg",
        opts: {
            group: ["SPICA"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Jiyeon",
        img: "9H0osRx.jpeg",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Kara Jiyoung Kang",
        img: "T4A7iLl.jpeg",
        opts: {
            group: ["Kara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Dal\u2605Shabet Jiyul",
        img: "nY8gfw0.png",
        opts: {
            group: ["Dal\u2605Shabet"],
            gen: ["gen2"]
        }
    },
    {
        name: "Urban Zakapa Jo Hyunah",
        img: "xeXrRTc.jpeg",
        opts: {
            group: ["Urban Zakapa"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Jooyeon",
        img: "W8BRrID.jpeg",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sunny Hill Jubi",
        img: "dhNquru.jpeg",
        opts: {
            group: ["Sunny Hill"],
            gen: ["gen2"]
        }
    },
    {
        name: "Secret Jun Hyo Seong",
        img: "W2uBc0u.jpeg",
        opts: {
            group: ["Secret"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Jungah",
        img: "opFUnvb.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "EXID Junghwa",
        img: "PSWBIiK.jpeg",
        opts: {
            group: ["EXID"],
            gen: ["gen3"]
        }
    },
    {
        name: "Juniel",
        img: "feVufX2.jpeg",
        opts: {
            group: ["Juniel"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Kaeun",
        img: "HxUv65q.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "Dal\u2605Shabet Kaeun",
        img: "GFb96Kp.jpeg",
        opts: {
            group: ["Dal\u2605Shabet"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Kahi",
        img: "SmrYhQp.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "Davichi Kang Min Kyung",
        img: "e9VqhLJ.jpeg",
        opts: {
            group: ["Davichi"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Keumjo",
        img: "OAclbVO.png",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "SPICA Kim Bo Hyung",
        img: "C2EYCVQ.jpeg",
        opts: {
            group: ["SPICA"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sunny Hill Kota",
        img: "0ZhMFJR.jpeg",
        opts: {
            group: ["Sunny Hill"],
            gen: ["gen2"]
        }
    },
    {
        name: "f(x) Krystal",
        img: "JvSBS9h.jpeg",
        opts: {
            group: ["f(x)"],
            gen: ["gen2"]
        }
    },
    {
        name: "EXID LE",
        img: "I7LBtSx.jpeg",
        opts: {
            group: ["EXID"],
            gen: ["gen3"]
        }
    },
    {
        name: "Davichi Lee Haeri",
        img: "ucT1D4a.jpeg",
        opts: {
            group: ["Davichi"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses LeeSem",
        img: "lR10SEn.jpeg",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "Hellovenus Lime",
        img: "nWSoes9.png",
        opts: {
            group: ["Hellovenus"],
            gen: ["gen2"]
        }
    },
    {
        name: "Fiestar Linzy",
        img: "IpTqES7.png",
        opts: {
            group: ["Fiestar"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Lizzy",
        img: "DZutdTF.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "f(x) Luna",
        img: "6YN5SWv.jpeg",
        opts: {
            group: ["f(x)"],
            gen: ["gen2"]
        }
    },
    {
        name: "Miss A Min",
        img: "0KDJOOy.jpeg",
        opts: {
            group: ["Miss A"],
            gen: ["gen2"]
        }
    },
    {
        name: "AOA Mina",
        img: "J06bgHQ.jpeg",
        opts: {
            group: ["AOA"],
            gen: ["gen3"]
        }
    },
    {
        name: "Girl's Day Minah",
        img: "Y5Gym6b.jpeg",
        opts: {
            group: ["Girl's Day"],
            gen: ["gen2"]
        }
    },
    {
        name: "Stellar Minhee",
        img: "G8KNsPe.jpeg",
        opts: {
            group: ["Stellar"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Minyoung",
        img: "8PI1iUL.jpeg",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "2NE1 Minzy",
        img: "QV2m2YD.png",
        opts: {
            group: ["2NE1"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brown Eyed Girls Miryo",
        img: "BhJL72x.png",
        opts: {
            group: ["Brown Eyed Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sunny Hill Misung",
        img: "dRZShyr.jpeg",
        opts: {
            group: ["Sunny Hill"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Moon Hyuna",
        img: "4wjrf1x.png",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "Apink Naeun",
        img: "jtKQ0Y1.png",
        opts: {
            group: ["Apink"],
            gen: ["gen2"]
        }
    },
    {
        name: "Apink Namjoo",
        img: "4cQYpZG.jpeg",
        opts: {
            group: ["Apink"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Nana",
        img: "aEPXgvI.jpeg",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "Hellovenus Nara",
        img: "VAkpDrm.png",
        opts: {
            group: ["Hellovenus"],
            gen: ["gen2"]
        }
    },
    {
        name: "SPICA Narae",
        img: "8vzrTBv.jpeg",
        opts: {
            group: ["SPICA"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brown Eyed Girls Narsha",
        img: "qm3vDGi.png",
        opts: {
            group: ["Brown Eyed Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Kara Nicole Jung",
        img: "6NVZxwf.jpeg",
        opts: {
            group: ["Kara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Rainbow Noeul",
        img: "yYq9pvJ.jpeg",
        opts: {
            group: ["Rainbow"],
            gen: ["gen2"]
        }
    },
    {
        name: "2NE1 Park Bom",
        img: "Wvw6Bix.jpeg",
        opts: {
            group: ["2NE1"],
            gen: ["gen2"]
        }
    },
    {
        name: "Kara Park Gyuri",
        img: "6WKYTcA.jpeg",
        opts: {
            group: ["Kara"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Qri",
        img: "rpAmbgO.jpeg",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Raina",
        img: "s096Kif.jpeg",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Rana",
        img: "E2fcm6C.jpeg",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Ryu Sera",
        img: "5YhVzpg.png",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "2NE1 Sandara Park",
        img: "3vmY6iW.png",
        opts: {
            group: ["2NE1"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Seoah",
        img: "su2U2BK.jpeg",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Seohyun",
        img: "NhJDxQE.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "AOA Seolhyun",
        img: "O49Wmke.png",
        opts: {
            group: ["AOA"],
            gen: ["gen3"]
        }
    },
    {
        name: "Hellovenus Seoyoung",
        img: "4rugp2j.png",
        opts: {
            group: ["Hellovenus"],
            gen: ["gen2"]
        }
    },
    {
        name: "Dal\u2605Shabet Serri",
        img: "mygXwW4.jpeg",
        opts: {
            group: ["Dal\u2605Shabet"],
            gen: ["gen2"]
        }
    },
    {
        name: "Rainbow Seungah",
        img: "S6s54kt.png",
        opts: {
            group: ["Rainbow"],
            gen: ["gen2"]
        }
    },
    {
        name: "Kara Seungyeon",
        img: "5RugHBn.jpeg",
        opts: {
            group: ["Kara"],
            gen: ["gen2"]
        }
    },
    {
        name: "4Minute Sohyun",
        img: "h2NwkRI.png",
        opts: {
            group: ["4Minute"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Sojin",
        img: "6Kyua2G.jpeg",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girl's Day Sojin",
        img: "VkVdhVb.png",
        opts: {
            group: ["Girl's Day"],
            gen: ["gen2"]
        }
    },
    {
        name: "EXID Solji",
        img: "M8xrFtf.jpeg",
        opts: {
            group: ["EXID"],
            gen: ["gen3"]
        }
    },
    {
        name: "Secret Song Jieun",
        img: "lRuvgj4.jpeg",
        opts: {
            group: ["Secret"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Sooyoung",
        img: "fEuwz0V.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "T-ara Soyeon",
        img: "wrjNMVE.jpeg",
        opts: {
            group: ["T-ara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Sistar Soyou",
        img: "FiTg7lO.jpeg",
        opts: {
            group: ["Sistar"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School Soyoung",
        img: "8PlRaaj.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "Stellar Soyoung",
        img: "HP78cfK.jpeg",
        opts: {
            group: ["Stellar"],
            gen: ["gen2"]
        }
    },
    {
        name: "Crayon Pop Soyul",
        img: "HcWX9E1.png",
        opts: {
            group: ["Crayon Pop"],
            gen: ["gen2"]
        }
    },
    {
        name: "f(x) Sulli",
        img: "X2Ivgln.png",
        opts: {
            group: ["f(x)"],
            gen: ["gen2"]
        }
    },
    {
        name: "9Muses Sungah",
        img: "WbwRjF5.jpeg",
        opts: {
            group: ["9Muses"],
            gen: ["gen2"]
        }
    },
    {
        name: "Secret Sunhwa",
        img: "kG0Yubd.jpeg",
        opts: {
            group: ["Secret"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Sunny",
        img: "wBYhaRw.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "Wonder Girls Sunye",
        img: "6S6l2ak.png",
        opts: {
            group: ["Wonder Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Miss A Suzy",
        img: "my0Ea9g.jpeg",
        opts: {
            group: ["Miss A"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Taeyeon",
        img: "hNM4nC9.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Tiffany",
        img: "leSjkjs.png",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "After School UEE",
        img: "kko3ZUs.png",
        opts: {
            group: ["After School"],
            gen: ["gen2"]
        }
    },
    {
        name: "f(x) Victoria",
        img: "Lxx6O58.png",
        opts: {
            group: ["f(x)"],
            gen: ["gen2"]
        }
    },
    {
        name: "Dal\u2605Shabet Viki",
        img: "6qcfmOJ.jpeg",
        opts: {
            group: ["Dal\u2605Shabet"],
            gen: ["gen2"]
        }
    },
    {
        name: "Crayon Pop Way",
        img: "1yN1Rnk.png",
        opts: {
            group: ["Crayon Pop"],
            gen: ["gen2"]
        }
    },
    {
        name: "Dal\u2605Shabet Woohee",
        img: "lLTP6r9.jpeg",
        opts: {
            group: ["Dal\u2605Shabet"],
            gen: ["gen2"]
        }
    },
    {
        name: "Rainbow Woori",
        img: "WTUuW4w.png",
        opts: {
            group: ["Rainbow"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Yejin",
        img: "wyg2jYi.png",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Fiestar Yel",
        img: "1VZcfM9.jpeg",
        opts: {
            group: ["Fiestar"],
            gen: ["gen2"]
        }
    },
    {
        name: "Hellovenus Yeoreum",
        img: "sg7G4IP.jpeg",
        opts: {
            group: ["Hellovenus"],
            gen: ["gen2"]
        }
    },
    {
        name: "Fiestar Yezi",
        img: "7CKCWi4.jpeg",
        opts: {
            group: ["Fiestar"],
            gen: ["gen2"]
        }
    },
    {
        name: "Hellovenus Yoo Ara",
        img: "WCtTjHt.png",
        opts: {
            group: ["Hellovenus"],
            gen: ["gen2"]
        }
    },
    {
        name: "Brave Girls Yoojin",
        img: "xJKHQAo.png",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Apink Yookyung",
        img: "z33MiBf.png",
        opts: {
            group: ["Apink"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Yoona",
        img: "uw1gNJ9.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "Rainbow Yoonhye",
        img: "BIl6OGo.jpeg",
        opts: {
            group: ["Rainbow"],
            gen: ["gen2"]
        }
    },
    {
        name: "Hellovenus Yooyoung",
        img: "MNyU2bO.jpeg",
        opts: {
            group: ["Hellovenus"],
            gen: ["gen2"]
        }
    },
    {
        name: "Kara Youngji",
        img: "gqoUs82.jpeg",
        opts: {
            group: ["Kara"],
            gen: ["gen2"]
        }
    },
    {
        name: "Younha",
        img: "yuednjR.jpeg",
        opts: {
            group: ["Younha"],
            gen: ["gen2"]
        }
    },
    {
        name: "Wonder Girls Yubin",
        img: "0ZXbmdS.jpeg",
        opts: {
            group: ["Wonder Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "AOA Yuna",
        img: "BCQTet6.jpeg",
        opts: {
            group: ["AOA"],
            gen: ["gen3"]
        }
    },
    {
        name: "Brave Girls Yuna",
        img: "iFIDW5T.jpeg",
        opts: {
            group: ["Brave Girls"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girl's Day Yura",
        img: "1BRmv8s.jpeg",
        opts: {
            group: ["Girl's Day"],
            gen: ["gen2"]
        }
    },
    {
        name: "Girls' Generation Yuri",
        img: "MHU8ojX.jpeg",
        opts: {
            group: ["Girls' Generation"],
            gen: ["gen2"]
        }
    },
    {
        name: "Momoland Ahin",
        img: "L6INjvt.jpeg",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl Arin",
        img: "llxjzqr.jpeg",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "Ladies' code Ashley",
        img: "aYxcakV.jpeg",
        opts: {
            group: ["Ladies' code"],
            gen: ["gen3"]
        }
    },
    {
        name: "Bol4",
        img: "ydDLtTc.jpeg",
        opts: {
            group: ["Bol4"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laysha Bitna",
        img: "JdzKhix.jpg",
        opts: {
            group: ["Laysha"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Bona",
        img: "tKXYTSD.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Alice Chaejeong",
        img: "J7WKqXB.jpeg",
        opts: {
            group: ["Alice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laysha Chaejin",
        img: "5SZ8fgC.jpeg",
        opts: {
            group: ["Laysha"],
            gen: ["gen3"]
        }
    },
    {
        name: "April Chaewon",
        img: "lGTX0QM.jpeg",
        opts: {
            group: ["April"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Chaeyeon",
        img: "ZgJblRe.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Chaeyoung",
        img: "6KIEi0E.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Cheng Xiao",
        img: "PeXMg4O.png",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Sonamoo D.ana",
        img: "7pmUTmb.jpeg",
        opts: {
            group: ["Sonamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Dahyun",
        img: "IbRHkmk.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland Daisy",
        img: "62gIJxX.jpeg",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dreamcatcher Dami",
        img: "HwTpaoY.jpeg",
        opts: {
            group: ["Dreamcatcher"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Dawon",
        img: "BgOyRyT.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Dayoung",
        img: "9BSdPVs.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Alice Do-A",
        img: "zVRRLbI.jpeg",
        opts: {
            group: ["Alice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Weki Meki Doyeon",
        img: "oLgfQuh.jpeg",
        opts: {
            group: ["Weki Meki"],
            gen: ["gen3"]
        }
    },
    {
        name: "Alice Ej",
        img: "a24mRTW.jpeg",
        opts: {
            group: ["Alice"],
            gen: ["gen3"]
        }
    },
    {
        name: "CLC Elkie",
        img: "leeTkCP.jpeg",
        opts: {
            group: ["CLC"],
            gen: ["gen3"]
        }
    },
    {
        name: "Weki Meki Elly",
        img: "0RZY088.jpeg",
        opts: {
            group: ["Weki Meki"],
            gen: ["gen3"]
        }
    },
    {
        name: "Ladies' code EunB",
        img: "LCw9ump.jpeg",
        opts: {
            group: ["Ladies' code"],
            gen: ["gen3"]
        }
    },
    {
        name: "CLC Eunbin",
        img: "gs9IS3J.jpeg",
        opts: {
            group: ["CLC"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Eunchae",
        img: "1KOuyih.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Eunice",
        img: "4C3jEjt.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Eunjin",
        img: "L1N6Ddx.png",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Eunseo",
        img: "tOUutRB.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Eunwoo",
        img: "bqdFPUB.png",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Exy",
        img: "yyvmSX3.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dreamcatcher Gahyeon",
        img: "gTqJl3m.jpeg",
        opts: {
            group: ["Dreamcatcher"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laysha Goeun",
        img: "Tr1jVqE.jpeg",
        opts: {
            group: ["Laysha"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Gyeongwon",
        img: "nXrXa18.png",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Haebin",
        img: "AWJi6yX.png",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laboum Haein",
        img: "WsWVkNQ.png",
        opts: {
            group: ["Laboum"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Hana",
        img: "vWD6w0L.png",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dreamcatcher Handong",
        img: "Yk5HAFh.jpeg",
        opts: {
            group: ["Dreamcatcher"],
            gen: ["gen3"]
        }
    },
    {
        name: "Heize",
        img: "Prw6zC8.jpeg",
        opts: {
            group: ["Heize"],
            gen: ["gen3"]
        }
    },
    {
        name: "Sonamoo Hezz",
        img: "UkRdSmt.jpeg",
        opts: {
            group: ["Sonamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Huihyeon",
        img: "MBXvrak.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "Mamamoo Hwasa",
        img: "ygsowHa.jpeg",
        opts: {
            group: ["Mamamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland Hyebin",
        img: "s6Rkpo2.jpeg",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Hyeyeon",
        img: "vmszKBK.png",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl Hyojung",
        img: "bLDLeLv.jpeg",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "Hyuna",
        img: "YADM9dJ.jpeg",
        opts: {
            group: ["Hyuna"],
            gen: ["gen3"]
        }
    },
    {
        name: "Busters β Hyungseo",
        img: "76eOWOk.png",
        opts: {
            group: ["Busters β"],
            gen: ["gen3"]
        }
    },
    {
        name: "April Hyunjoo",
        img: "CLyOCbx.png",
        opts: {
            group: ["April"],
            gen: ["gen3"]
        }
    },
    {
        name: "Red Velvet Irene",
        img: "M4PFiW8.jpeg",
        opts: {
            group: ["Red Velvet"], Clash: ["Idol Clash S3"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland Jane",
        img: "2huTbzn.jpeg",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Blackpink Jennie",
        img: "14wpqY8.jpeg",
        opts: {
            group: ["Blackpink"], Clash: ["Idol Clash S3"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Jenny",
        img: "6uCDTP1.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Jeongyeon",
        img: "WU9Pj0E.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laysha Jian",
        img: "F847uwF.jpeg",
        opts: {
            group: ["Laysha"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dreamcatcher JiU",
        img: "o3SdDEN.jpeg",
        opts: {
            group: ["Dreamcatcher"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl Jiho",
        img: "0vVJewB.png",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Jihyo",
        img: "UtwdO1X.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Jin",
        img: "MjnB8Ot.jpeg",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl JinE",
        img: "TSdPLQU.jpeg",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "April Jinsol",
        img: "rGtmHUL.jpeg",
        opts: {
            group: ["April"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laboum Jinye",
        img: "Oxl5XAy.jpeg",
        opts: {
            group: ["Laboum"],
            gen: ["gen3"]
        }
    },
    {
        name: "Blackpink Jisoo",
        img: "xjzyMay.jpeg",
        opts: {
            group: ["Blackpink"], Clash: ["Idol Clash S3"],
            gen: ["gen3"]
        }
    },
    {
        name: "Busters β Jisoo",
        img: "feiCXXG.png",
        opts: {
            group: ["Busters β"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Jisoo",
        img: "TaZnCBd.png",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "KARD Jiwoo",
        img: "UvE1pw6.jpeg",
        opts: {
            group: ["KARD"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland JooE",
        img: "Kp4AQ0Y.jpeg",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Red Velvet Joy",
        img: "Cnht1zT.jpeg",
        opts: {
            group: ["Red Velvet"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Jueun",
        img: "ncYfGGU.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "Alice Karin",
        img: "6wA6ahq.jpeg",
        opts: {
            group: ["Alice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Kei",
        img: "T9Fjynf.png",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "Sonamoo Kim Dohee",
        img: "8BxW2I1.jpeg",
        opts: {
            group: ["Sonamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Kyla",
        img: "A00uB8p.jpeg",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Kyulkyung",
        img: "H4Hz5VK.png",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lee Hi",
        img: "266wUfR.jpeg",
        opts: {
            group: ["Lee Hi"],
            gen: ["gen3"]
        }
    },
    {
        name: "Akmu Lee Suhyun",
        img: "YRy5K03.jpeg",
        opts: {
            group: ["Akmu"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Lee Sujeong",
        img: "Euc9c5T.jpeg",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "Blackpink Lisa",
        img: "QBVcJiB.jpeg",
        opts: {
            group: ["Blackpink"], Clash: ["Idol Clash S3"],
            gen: ["gen3"]
        }
    },
    {
        name: "Weki Meki Lua",
        img: "AAIefLr.jpeg",
        opts: {
            group: ["Weki Meki"],
            gen: ["gen3"]
        }
    },
    {
        name: "Weki Meki Lucy",
        img: "qVBzkZB.jpeg",
        opts: {
            group: ["Weki Meki"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Luda",
        img: "sNHeJoK.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Meiqi",
        img: "fkrqTxY.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Mijoo",
        img: "GO76GvH.jpeg",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Mimi",
        img: "n4nSp5k.png",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl Mimi",
        img: "GNk3VxJ.jpeg",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Mina",
        img: "7o0H9Nr.jpeg",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Mina",
        img: "tnQ6mmT.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Sonamoo Minjae",
        img: "gfHBHrx.jpeg",
        opts: {
            group: ["Sonamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Busters β Minjung",
        img: "qA8QcCK.png",
        opts: {
            group: ["Busters β"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Minkyeung",
        img: "y3wT8vP.jpeg",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Momo",
        img: "WJ9OeLR.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Mamamoo Moonbyul",
        img: "fUTjQlS.jpeg",
        opts: {
            group: ["Mamamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "April Naeun",
        img: "Jix84A3.png",
        opts: {
            group: ["April"],
            gen: ["gen3"]
        }
    },
    {
        name: "Sonamoo Nahyun",
        img: "b9hrARV.png",
        opts: {
            group: ["Sonamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland Nancy",
        img: "kAbMud7.jpeg",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Nayeon",
        img: "EQ91Bok.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Nayoung",
        img: "VfTZREV.png",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Nayoung",
        img: "f3zmbJR.jpeg",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland Nayun",
        img: "pMatxza.jpeg",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Sonamoo New Sun",
        img: "QbSOXTl.jpeg",
        opts: {
            group: ["Sonamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "CLC Oh Seunghee",
        img: "MOPnOkv.jpeg",
        opts: {
            group: ["CLC"],
            gen: ["gen3"]
        }
    },
    {
        name: "Punch",
        img: "UPzn0lC.jpeg",
        opts: {
            group: ["Punch"],
            gen: ["gen3"]
        }
    },
    {
        name: "April Rachel",
        img: "xhHVsT7.jpeg",
        opts: {
            group: ["April"],
            gen: ["gen3"]
        }
    },
    {
        name: "Ladies' code RiSe",
        img: "hskde0N.jpeg",
        opts: {
            group: ["Ladies' code"],
            gen: ["gen3"]
        }
    },
    {
        name: "Weki Meki Rina",
        img: "KfrW86f.jpeg",
        opts: {
            group: ["Weki Meki"],
            gen: ["gen3"]
        }
    },
    {
        name: "Blackpink Rose",
        img: "oQqOXI1.jpeg",
        opts: {
            group: ["Blackpink"], Clash: ["Idol Clash S3"],
            gen: ["gen3"]
        }
    },
    {
        name: "Rothy",
        img: "aOhQnMI.jpeg",
        opts: {
            group: ["Rothy"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Ryu Sujeong",
        img: "Ivby2Av.png",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Sally",
        img: "RN7np0k.jpeg",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Sana",
        img: "rGuSOCT.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Weki Meki Sei",
        img: "jSqz3aa.jpeg",
        opts: {
            group: ["Weki Meki"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Seola",
        img: "orAL7JJ.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Red Velvet Seulgi",
        img: "W06kTIF.jpeg",
        opts: {
            group: ["Red Velvet"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl Seunghee",
        img: "Q50ROdm.jpeg",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "CLC Seungyeon",
        img: "8pXRuTv.jpeg",
        opts: {
            group: ["CLC"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dreamcatcher Siyeon",
        img: "Ftc2Ylh.jpeg",
        opts: {
            group: ["Dreamcatcher"],
            gen: ["gen3"]
        }
    },
    {
        name: "Alice Sohee",
        img: "QhX6Y3x.jpeg",
        opts: {
            group: ["Alice"],
            gen: ["gen3"]
        }
    },
    {
        name: "I.O.I Sohye",
        img: "231Gyzs.png",
        opts: {
            group: ["I.O.I"],
            gen: ["gen3"]
        }
    },
    {
        name: "Ladies' code Sojung",
        img: "q38dheA.jpeg",
        opts: {
            group: ["Ladies' code"],
            gen: ["gen3"]
        }
    },
    {
        name: "Mamamoo Solar",
        img: "U8TvcPF.jpeg",
        opts: {
            group: ["Mamamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laboum Solbin",
        img: "qwnO8JO.jpeg",
        opts: {
            group: ["Laboum"],
            gen: ["gen3"]
        }
    },
    {
        name: "KARD Somin",
        img: "Sgyh7SI.jpeg",
        opts: {
            group: ["KARD"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Somyi",
        img: "JuL4LPs.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Soobin",
        img: "BQwv9Tz.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "CLC Sorn",
        img: "G4GoeYP.jpeg",
        opts: {
            group: ["CLC"],
            gen: ["gen3"]
        }
    },
    {
        name: "GFriend Sowon",
        img: "oDV5H6X.jpeg",
        opts: {
            group: ["GFriend"],
            gen: ["gen3"]
        }
    },
    {
        name: "Gugudan Soyee",
        img: "DGoidGt.jpeg",
        opts: {
            group: ["Gugudan"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laboum Soyeon",
        img: "Om7AJq7.jpeg",
        opts: {
            group: ["Laboum"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dreamcatcher SuA",
        img: "0fHrFgh.jpeg",
        opts: {
            group: ["Dreamcatcher"],
            gen: ["gen3"]
        }
    },
    {
        name: "Sonamoo Sumin",
        img: "a74zhuJ.jpeg",
        opts: {
            group: ["Sonamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Sungyeon",
        img: "E46v8Xi.jpeg",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Sunmi",
        img: "7JyjC6L.jpeg",
        opts: {
            group: ["Sunmi"],
            gen: ["gen3"]
        }
    },
    {
        name: "Weki Meki Suyeon",
        img: "ADBEexx.jpeg",
        opts: {
            group: ["Weki Meki"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland Taeha",
        img: "Wte9KmK.png",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "Twice Tzuyu",
        img: "6LkJlbB.jpeg",
        opts: {
            group: ["Twice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Red Velvet Wendy",
        img: "yOJJBHh.jpeg",
        opts: {
            group: ["Red Velvet"], Clash: ["Idol Clash S3"],
            gen: ["gen3"]
        }
    },
    {
        name: "Mamamoo WheeIn",
        img: "c3mIzuY.jpeg",
        opts: {
            group: ["Mamamoo"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Xiyeon",
        img: "PXSay1q.jpeg",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Xuanyi",
        img: "mBe70T7.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Yaebin",
        img: "SILiqqU.jpeg",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dia Yebin",
        img: "TSGPRTC.jpeg",
        opts: {
            group: ["Dia"],
            gen: ["gen3"]
        }
    },
    {
        name: "Yeeun",
        img: "kQC4MIH.jpeg",
        opts: {
            group: ["Yeeun"],
            gen: ["gen3"]
        }
    },
    {
        name: "Pristin Yehana",
        img: "BNW3taY.jpeg",
        opts: {
            group: ["Pristin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Yein",
        img: "0eNJcPU.jpeg",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "April Yena",
        img: "m5fVbg3.png",
        opts: {
            group: ["April"],
            gen: ["gen3"]
        }
    },
    {
        name: "Alice Yeonjae",
        img: "10ZPchD.jpeg",
        opts: {
            group: ["Alice"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Yeonjung",
        img: "ignvRnZ.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Momoland Yeonwoo",
        img: "VPmJbS2.jpg",
        opts: {
            group: ["Momoland"],
            gen: ["gen3"]
        }
    },
    {
        name: "WJSN Yeoreum",
        img: "sPfj6YA.jpeg",
        opts: {
            group: ["WJSN"],
            gen: ["gen3"]
        }
    },
    {
        name: "Red Velvet Yeri",
        img: "l1yefUF.jpeg",
        opts: {
            group: ["Red Velvet"],
            gen: ["gen3"]
        }
    },
    {
        name: "Yerin",
        img: "s9eLWMA.jpeg",
        opts: {
            group: ["Yerin"],
            gen: ["gen3"]
        }
    },
    {
        name: "Lovelyz Yoo Jiae",
        img: "xQrdeua.jpeg",
        opts: {
            group: ["Lovelyz"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl Yooa",
        img: "1o1qhJJ.jpeg",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "Dreamcatcher Yoohyeon",
        img: "Ri0we2L.jpeg",
        opts: {
            group: ["Dreamcatcher"],
            gen: ["gen3"]
        }
    },
    {
        name: "Weki Meki Yoojung",
        img: "hijXCo5.jpeg",
        opts: {
            group: ["Weki Meki"],
            gen: ["gen3"]
        }
    },
    {
        name: "Oh My Girl Yubin",
        img: "CEsnUUc.jpeg",
        opts: {
            group: ["Oh My Girl"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laboum Yujeong",
        img: "1iaSdoc.jpeg",
        opts: {
            group: ["Laboum"],
            gen: ["gen3"]
        }
    },
    {
        name: "Yuju",
        img: "pwRZKbE.jpeg",
        opts: {
            group: ["Yuju"],
            gen: ["gen3"]
        }
    },
    {
        name: "Alice Yukyung",
        img: "iVNPZCO.jpeg",
        opts: {
            group: ["Alice"],
            gen: ["gen3"]
        }
    },
    {
        name: "Laboum Yulhee",
        img: "inQag92.jpeg",
        opts: {
            group: ["Laboum"],
            gen: ["gen3"]
        }
    },
    {
        name: "Ladies' code Zuny",
        img: "PpoMDel.png",
        opts: {
            group: ["Ladies' code"],
            gen: ["gen3"]
        }
    },
    {
        name: "Queenz Eye Ahyoon",
        img: "FXLyUX8.jpeg",
        opts: {
            group: ["Queenz Eye"],
            gen: ["gen4"]
        }
    },
    {
        name: "MAJORS Aki",
        img: "yXMw1k9.jpeg",
        opts: {
            group: ["MAJORS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Alexa",
        img: "1D0DLRw.jpeg",
        opts: {
            group: ["Alexa"],
            gen: ["gen4"]
        }
    },
    {
        name: "Everglow Aisha",
        img: "ru3vi04.jpeg",
        opts: {
            group: ["Everglow"],
            gen: ["gen4"]
        }
    },
    {
        name: "GWSN Anne",
        img: "qqoSuW0.jpeg",
        opts: {
            group: ["GWSN"],
            gen: ["gen4"]
        }
    },
    {
        name: "ILY:1 Ara",
        img: "wdFISWA.png",
        opts: {
            group: ["ILY:1"],
            gen: ["gen4"]
        }
    },
    {
        name: "X:IN Aria",
        img: "a0FxGPM.jpeg",
        opts: {
            group: ["X:IN"],
            gen: ["gen4"]
        }
    },
    {
        name: "FIFTY FIFTY Athena",
        img: "7oGwOc1.jpg",
        opts: {
            group: ["FIFTY FIFTY"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Aurora",
        img: "yDQiKNB.jpeg",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nmixx Bae",
        img: "Pc3JNLz.jpeg",
        opts: {
            group: ["Nmixx"], Clash: ["Idol Clash S2"],
            gen: ["gen4"]
        }
    },
    {
        name: "NeonPunch Baekah",
        img: "jb766sk.jpg",
        opts: {
            group: ["NeonPunch"],
            gen: ["gen4"]
        }
    },
    {
        name: "KISS OF LIFE Belle",
        img: "WHf1NTa.jpeg",
        opts: {
            group: ["KISS OF LIFE"], Clash: ["Idol Clash S3"],
            gen: ["gen5"]
        }
    },
    {
        name: "LAPILLUS Bessie",
        img: "jucYqoa.jpeg",
        opts: {
            group: ["LAPILLUS"],
            gen: ["gen4"]
        }
    },
    {
        name: "MAJORS Bian",
        img: "kaAUj6E.jpeg",
        opts: {
            group: ["MAJORS"],
            gen: ["gen4"]
        }
    },
    {
        name: "BIBI",
        img: "isKO84i.jpeg",
        opts: {
            group: ["BIBI"], Clash: ["Idol Clash S2"],
            gen: ["gen4"]
        }
    },
    {
        name: "CLASS:y Boeun",
        img: "XmMBzs6.jpeg",
        opts: {
            group: ["CLASS:y"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Boni",
        img: "8JLrlbY.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Bora",
        img: "7daGrAp.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Chaebin",
        img: "sSUNygK.png",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "ADYA Chaeeun",
        img: "wOKid0w.jpeg",
        opts: {
            group: ["ADYA"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kep1er Chaehyun",
        img: "lZfiqFQ.jpeg",
        opts: {
            group: ["Kep1er"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Chaerin",
        img: "x4kf1Ze.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "ICHILLIN Chaerin",
        img: "PmTAwAQ.jpeg",
        opts: {
            group: ["ICHILLIN"],
            gen: ["gen4"]
        }
    },
    {
        name: "ITZY Chaeryeong",
        img: "3KdQNMm.jpeg",
        opts: {
            group: ["ITZY"], Clash: ["Idol Clash S2"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cignature Chaesol",
        img: "yslGnxy.jpeg",
        opts: {
            group: ["Cignature"],
            gen: ["gen4"]
        }
    },
    {
        name: "CLASS:y Chaewon",
        img: "bBK9diE.png",
        opts: {
            group: ["CLASS:y"],
            gen: ["gen4"]
        }
    },
    {
        name: "LE SSERAFIM Chaewon",
        img: "bDGF2j1.jpeg",
        opts: {
            group: ["LE SSERAFIM"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Chaewon",
        img: "oH9W8kd.jpeg",
        opts: {
            group: ["tripleS"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Chaeyoung",
        img: "JThaziU.jpeg",
        opts: {
            group: ["Fromis 9"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "FIFTY FIFTY Chanelle",
        img: "Asv3Edv.jpg",
        opts: {
            group: ["FIFTY FIFTY"],
            gen: ["gen4"]
        }
    },
    {
        name: "LAPILLUS Chanty",
        img: "JWrOfGi.jpeg",
        opts: {
            group: ["LAPILLUS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cignature Chloe",
        img: "FUvn8H4.jpeg",
        opts: {
            group: ["Cignature"],
            gen: ["gen4"]
        }
    },
    {
        name: "ARTMS Choerry",
        img: "3sabC1n.jpeg",
        opts: {
            group: ["ARTMS"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "mimiirose Choi Yeonjae",
        img: "6VjYFLa.jpeg",
        opts: {
            group: ["mimiirose"],
            gen: ["gen4"]
        }
    },
    {
        name: "ICHILLIN Chowon",
        img: "VWoYc1q.jpeg",
        opts: {
            group: ["ICHILLIN"],
            gen: ["gen4"]
        }
    },
    {
        name: "Lightsum Chowon",
        img: "3S0uMGY.jpeg",
        opts: {
            group: ["Lightsum"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "bugAboo Choyeon",
        img: "OFDqTuX.jpeg",
        opts: {
            group: ["bugAboo"],
            gen: ["gen4"]
        }
    },
    {
        name: "Chungha",
        img: "pqf6EXc.jpeg",
        opts: {
            group: ["Chungha"],
            gen: ["gen4"]
        }
    },
    {
        name: "Chuu",
        img: "RSYFlZo.jpeg",
        opts: {
            group: ["Chuu"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cocona",
        img: "6xcvecN.jpeg",
        opts: {
            group: ["Cocona"],
            gen: ["gen4"]
        }
    },
    {
        name: "bugAboo Cyan",
        img: "6XoXRLX.jpeg",
        opts: {
            group: ["bugAboo"],
            gen: ["gen4"]
        }
    },
    {
        name: "Rocket Punch Dahyun",
        img: "jIT3Jlh.jpeg",
        opts: {
            group: ["Rocket Punch"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Dahyun",
        img: "5SoD7B6.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Pixy Dajeong",
        img: "8wYPqBh.png",
        opts: {
            group: ["Pixy"], Clash: ["Idol Clash Cat Edition"],
            gen: ["gen4"]
        }
    },
    {
        name: "NewJeans Danielle",
        img: "WrDyZef.jpg",
        opts: {
            group: ["NewJeans"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kep1er Dayeon",
        img: "xQpxWvE.jpeg",
        opts: {
            group: ["Kep1er"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "NeonPunch Dayeon",
        img: "PFLLdqZ.jpg",
        opts: {
            group: ["NeonPunch"],
            gen: ["gen4"]
        }
    },
    {
        name: "Secret Number Denise",
        img: "KfSxnem.jpeg",
        opts: {
            group: ["Secret Number"],
            gen: ["gen4"]
        }
    },
    {
        name: "Pixy Dia",
        img: "dT0kKdA.jpeg",
        opts: {
            group: ["Pixy"],
            gen: ["gen4"]
        }
    },
    {
        name: "Secret Number Dita",
        img: "qGjdpqr.png",
        opts: {
            group: ["Secret Number"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cignature Dohee",
        img: "wSQvUzn.jpeg",
        opts: {
            group: ["Cignature"],
            gen: ["gen4"]
        }
    },
    {
        name: "NeonPunch Dohee",
        img: "CCxRN9i.jpg",
        opts: {
            group: ["NeonPunch"],
            gen: ["gen4"]
        }
    },
    {
        name: "Purple Kiss Dosie",
        img: "5iATMcx.jpeg",
        opts: {
            group: ["Purple Kiss"],
            gen: ["gen4"]
        }
    },
    {
        name: "CSR Duna",
        img: "pjkmOB0.jpeg",
        opts: {
            group: ["CSR"],
            gen: ["gen4"]
        }
    },
    {
        name: "ICHILLIN E.ji",
        img: "wbyQiSl.jpeg",
        opts: {
            group: ["ICHILLIN"],
            gen: ["gen4"]
        }
    },
    {
        name: "X:IN E.Sha",
        img: "L2tI5EI.jpeg",
        opts: {
            group: ["X:IN"],
            gen: ["gen4"]
        }
    },
    {
        name: "Everglow E:U",
        img: "3ibq24p.jpeg",
        opts: {
            group: ["Everglow"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Ella",
        img: "UQ8H2Vc.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "ILY:1 Elva",
        img: "yKnI76g.png",
        opts: {
            group: ["ILY:1"],
            gen: ["gen4"]
        }
    },
    {
        name: "bugAboo Eunchae",
        img: "tdR8pe2.jpeg",
        opts: {
            group: ["bugAboo"],
            gen: ["gen4"]
        }
    },
    {
        name: "LE SSERAFIM Eunchae",
        img: "grMTTRz.jpeg",
        opts: {
            group: ["LE SSERAFIM"],
            gen: ["gen4"]
        }
    },
    {
        name: "Viviz Eunha",
        img: "QIfDY8O.jpeg",
        opts: {
            group: ["Viviz"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Eunjo",
        img: "Q3ED4Vh.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "IVE Gaeul",
        img: "y69kbxH.jpeg",
        opts: {
            group: ["IVE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Gaga",
        img: "pO2yzmX.png",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "CSR Geumhee",
        img: "JuMzXKt.jpeg",
        opts: {
            group: ["CSR"],
            gen: ["gen4"]
        }
    },
    {
        name: "Aespa Giselle",
        img: "ug7HPDB.jpeg",
        opts: {
            group: ["Aespa"], Clash: ["Idol Clash S2"],
            gen: ["gen4"]
        }
    },
    {
        name: "Purple Kiss Goeun",
        img: "FunyBt8.jpeg",
        opts: {
            group: ["Purple Kiss"],
            gen: ["gen4"]
        }
    },
    {
        name: "Loossemble Gowon",
        img: "2yWdo3m.jpeg",
        opts: {
            group: ["Loossemble"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Gyuri",
        img: "CmU2rZ4.jpeg",
        opts: {
            group: ["Fromis 9"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Habin",
        img: "pGo5cIi.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "NewJeans Haerin",
        img: "cWe7xas.jpeg",
        opts: {
            group: ["NewJeans"], Clash: ["Idol Clash Cat Edition"],
            gen: ["gen4"]
        }
    },
    {
        name: "LAPILLUS Haeun",
        img: "JR9wKkZ.jpeg",
        opts: {
            group: ["LAPILLUS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nmixx Haewon",
        img: "cvFIfj1.jpeg",
        opts: {
            group: ["Nmixx"], Clash: ["Idol Clash S2"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Haeyoon",
        img: "rfaEF7x.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "mimiirose Han Yewon",
        img: "utoAJKi.jpeg",
        opts: {
            group: ["mimiirose"],
            gen: ["gen4"]
        }
    },
    {
        name: "FIFTY FIFTY Hana",
        img: "WQMwI3D.jpg",
        opts: {
            group: ["FIFTY FIFTY"],
            gen: ["gen4"]
        }
    },
    {
        name: "ILY:1 Hana",
        img: "nBShYK6.png",
        opts: {
            group: ["ILY:1"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Hanbyeol",
        img: "eVUb6VA.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "KISS OF LIFE Haneul",
        img: "dmfrnCg.jpeg",
        opts: {
            group: ["KISS OF LIFE"], Clash: ["Idol Clash S3"],
            gen: ["gen5"]
        }
    },
    {
        name: "X:IN Hannah",
        img: "Ns9NjuE.jpeg",
        opts: {
            group: ["X:IN"],
            gen: ["gen4"]
        }
    },
    {
        name: "NewJeans Hanni",
        img: "SXQZbEH.jpeg",
        opts: {
            group: ["NewJeans"],
            gen: ["gen4"]
        }
    },
    {
        name: "Billlie Haram",
        img: "crnQLrt.jpeg",
        opts: {
            group: ["Billlie"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Haru",
        img: "S4zYLD6.jpeg",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "Billlie Haruna",
        img: "MRxZ5xC.jpeg",
        opts: {
            group: ["Billlie"],
            gen: ["gen4"]
        }
    },
    {
        name: "ARTMS Haseul",
        img: "p1QnwXr.jpeg",
        opts: {
            group: ["ARTMS"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Hayeon",
        img: "IFJxNFF.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Hayoung",
        img: "JXomAvu.jpeg",
        opts: {
            group: ["Fromis 9"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "PRIMROSE Hayun",
        img: "pDhVPxV.jpeg",
        opts: {
            group: ["PRIMROSE"],
            gen: ["gen4"]
        }
    },
    {
        name: "ARTMS Heejin",
        img: "4E4YSVR.jpeg",
        opts: {
            group: ["ARTMS"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kandis Hello",
        img: "sArBwmG.jpeg",
        opts: {
            group: ["Kandis"],
            gen: ["gen5"]
        }
    },
    {
        name: "Kep1er Hikaru",
        img: "UIdT1MF.jpeg",
        opts: {
            group: ["Kep1er"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "Lightsum Hina",
        img: "rn6J4Nh.jpeg",
        opts: {
            group: ["Lightsum"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kep1er Huening Bahiyyih",
        img: "91vLr26.jpeg",
        opts: {
            group: ["Kep1er"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "H1-KEY Hwiseo",
        img: "UB99hUJ.jpeg",
        opts: {
            group: ["H1-KEY"],
            gen: ["gen4"]
        }
    },
    {
        name: "NewJeans Hyein",
        img: "7dhHjNw.jpeg",
        opts: {
            group: ["NewJeans"],
            gen: ["gen4"]
        }
    },
    {
        name: "Craxy Hyejin",
        img: "0LwnBfv.jpeg",
        opts: {
            group: ["Craxy"],
            gen: ["gen4"]
        }
    },
    {
        name: "CLASS:y Hyeju",
        img: "ncU6XAU.jpeg",
        opts: {
            group: ["CLASS:y"],
            gen: ["gen4"]
        }
    },
    {
        name: "Loossemble Hyeju",
        img: "xK2dn8s.jpeg",
        opts: {
            group: ["Loossemble"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Hyerin",
        img: "m3jwPI6.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Hyewon",
        img: "nNR0Ohb.jpeg",
        opts: {
            group: ["Hyewon"], Clash: ["Idol Clash S2"],
            gen: ["gen4"]
        }
    },
    {
        name: "Tri.be Hyunbin",
        img: "2mK5yFQ.png",
        opts: {
            group: ["Tri.be"],
            gen: ["gen4"]
        }
    },
    {
        name: "CLASS:y Hyungseo",
        img: "1wQ1yi9.jpeg",
        opts: {
            group: ["CLASS:y"],
            gen: ["gen4"]
        }
    },
    {
        name: "NeonPunch Iaan",
        img: "yqaQQC8.jpg",
        opts: {
            group: ["NeonPunch"],
            gen: ["gen4"]
        }
    },
    {
        name: "MAJORS Ida",
        img: "rCsE314.jpeg",
        opts: {
            group: ["MAJORS"],
            gen: ["gen4"]
        }
    },
    {
        name: "mimiirose Inn Hyori",
        img: "Uds2YBK.jpeg",
        opts: {
            group: ["mimiirose"],
            gen: ["gen4"]
        }
    },
    {
        name: "Purple Kiss Ireh",
        img: "3ExzZdZ.jpeg",
        opts: {
            group: ["Purple Kiss"],
            gen: ["gen4"]
        }
    },
    {
        name: "STAYC Isa",
        img: "jeNxoQX.jpeg",
        opts: {
            group: ["STAYC"], Clash: ["Idol Clash S3"], Clash: ["Idol Clash Cat Edition"],
            gen: ["gen4"]
        }
    },
    {
        name: "STAYC J",
        img: "TxNMtiZ.jpeg",
        opts: {
            group: ["STAYC"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "ICHILLIN Jackie",
        img: "K8GiCvn.jpeg",
        opts: {
            group: ["ICHILLIN"],
            gen: ["gen4"]
        }
    },
    {
        name: "Weeekly Jaehee",
        img: "tJVv6oT.jpeg",
        opts: {
            group: ["Weeekly"],
            gen: ["gen4"]
        }
    },
    {
        name: "(G)I-dle Jeon Soyeon",
        img: "ADPeYc8.jpeg",
        opts: {
            group: ["(G)I-dle"], Clash: ["Idol Clash S2"],
            gen: ["gen4"]
        }
    },
    {
        name: "Tri.be Jia",
        img: "F1s8p1T.jpeg",
        opts: {
            group: ["Tri.be"],
            gen: ["gen4"]
        }
    },
    {
        name: "Busters Jieun",
        img: "zxEWZnZ.jpeg",
        opts: {
            group: ["Busters"],
            gen: ["gen4"]
        }
    },
    {
        name: "Purple Kiss Jieun",
        img: "Ns3zyui.jpeg",
        opts: {
            group: ["Purple Kiss"],
            gen: ["gen4"]
        }
    },
    {
        name: "Weeekly Jihan",
        img: "OMrNZSw.jpeg",
        opts: {
            group: ["Weeekly"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Jiheon",
        img: "WbbfOvA.jpeg",
        opts: {
            group: ["Fromis 9"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "CLASS:y Jimin",
        img: "DtghmKC.jpeg",
        opts: {
            group: ["CLASS:y"],
            gen: ["gen4"]
        }
    },
    {
        name: "Tri.be Jinha",
        img: "EvecQmc.jpeg",
        opts: {
            group: ["Tri.be"],
            gen: ["gen4"]
        }
    },
    {
        name: "Jinni",
        img: "uFwhX3r.jpeg",
        opts: {
            group: ["Jinni"],
            gen: ["gen4"]
        }
    },
    {
        name: "Secret Number Jinny",
        img: "wl3BDmb.png",
        opts: {
            group: ["Secret Number"],
            gen: ["gen4"]
        }
    },
    {
        name: "ARTMS Jinsoul",
        img: "9rY0qQz.jpeg",
        opts: {
            group: ["ARTMS"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "Queenz Eye Jinyul",
        img: "DmBAOte.jpeg",
        opts: {
            group: ["Queenz Eye"],
            gen: ["gen4"]
        }
    },
    {
        name: "Jiselle",
        img: "mWydawb.jpeg",
        opts: {
            group: ["Jiselle"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Jisun",
        img: "QsEPscQ.jpeg",
        opts: {
            group: ["Fromis 9"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Jiwon",
        img: "qQFXszP.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Jiwon",
        img: "dFyYgem.jpeg",
        opts: {
            group: ["Fromis 9"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nmixx Jiwoo",
        img: "me7ymUA.jpeg",
        opts: {
            group: ["Nmixx"], Clash: ["Idol Clash S2"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Jiwoo",
        img: "4ul1F7m.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Jiyeon",
        img: "EZgsWL7.jpeg",
        opts: {
            group: ["tripleS"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "ICHILLIN Jiyoon",
        img: "PqUOILT.jpeg",
        opts: {
            group: ["ICHILLIN"],
            gen: ["gen4"]
        }
    },
    {
        name: "Jo Yuri",
        img: "5ITNozZ.jpeg",
        opts: {
            group: ["Jo Yuri"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Joobin",
        img: "aUTqGb1.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "ICHILLIN Joonie",
        img: "QggztWK.jpeg",
        opts: {
            group: ["ICHILLIN"],
            gen: ["gen4"]
        }
    },
    {
        name: "Lightsum Juhyeon",
        img: "mSSJVin.jpeg",
        opts: {
            group: ["Lightsum"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "KISS OF LIFE Julie",
        img: "yboszGV.jpeg",
        opts: {
            group: ["KISS OF LIFE"], Clash: ["Idol Clash S3"],
            gen: ["gen5"]
        }
    },
    {
        name: "Bvndit Jungwoo",
        img: "v4d2nv4.jpeg",
        opts: {
            group: ["Bvndit"],
            gen: ["gen4"]
        }
    },
    {
        name: "Rocket Punch Juri",
        img: "dsJBag1.jpeg",
        opts: {
            group: ["Rocket Punch"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Kaede",
        img: "hmBNGel.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Craxy Karin",
        img: "mde1uJx.jpeg",
        opts: {
            group: ["Craxy"],
            gen: ["gen4"]
        }
    },
    {
        name: "Aespa Karina",
        img: "TytbwAL.jpeg",
        opts: {
            group: ["Aespa"], Clash: ["Idol Clash S2"],
            gen: ["gen4"]
        }
    },
    {
        name: "LE SSERAFIM Kazuha",
        img: "a9qd93W.jpeg",
        opts: {
            group: ["LE SSERAFIM"],
            gen: ["gen4"]
        }
    },
    {
        name: "FIFTY FIFTY Keena",
        img: "wAtllcX.jpg",
        opts: {
            group: ["FIFTY FIFTY"],
            gen: ["gen4"]
        }
    },
    {
        name: "Tri.be Kelly",
        img: "1tQY5TV.png",
        opts: {
            group: ["Tri.be"],
            gen: ["gen4"]
        }
    },
    {
        name: "Queenz Eye Kiirii",
        img: "4vMOdh6.jpeg",
        opts: {
            group: ["Queenz Eye"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Kim Chaeyeon",
        img: "YpO4lYX.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "ARTMS Kim Lip",
        img: "GNLjeMX.jpeg",
        opts: {
            group: ["ARTMS"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Kim Nakyoung",
        img: "QtTslg0.jpeg",
        opts: {
            group: ["tripleS"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kim Yeji",
        img: "kcYlPug.jpeg",
        opts: {
            group: ["Kim Yeji"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Kim Yooyeon",
        img: "wIM1nl0.jpeg",
        opts: {
            group: ["tripleS"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Kokoro",
        img: "eQnJJ2x.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Kotone",
        img: "Ib0sPww.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kwon Eunbi",
        img: "289KYhE.jpeg",
        opts: {
            group: ["Kwon Eunbi"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nmixx Kyujin",
        img: "21GD0tm.jpeg",
        opts: {
            group: ["Nmixx"], Clash: ["Idol Clash S2"], Clash: ["Idol Clash Cat Edition"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Lara",
        img: "vDtITvk.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "Lee Chaeyeon",
        img: "qBQJx35.jpeg",
        opts: {
            group: ["Lee Chaeyeon"], Clash: ["Idol Clash S2"],
            gen: ["gen4"]
        }
    },
    {
        name: "IVE Leeseo",
        img: "Oo0hddU.jpeg",
        opts: {
            group: ["IVE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Weeekly Lee Soojin",
        img: "BmxYS16.jpeg",
        opts: {
            group: ["Weeekly"],
            gen: ["gen4"]
        }
    },
    {
        name: "Lee Youngji",
        img: "FTn84i4.jpeg",
        opts: {
            group: ["Lee Youngji"],
            gen: ["gen4"]
        }
    },
    {
        name: "GWSN Lena",
        img: "9wnEfOL.jpeg",
        opts: {
            group: ["GWSN"],
            gen: ["gen4"]
        }
    },
    {
        name: "ITZY Lia",
        img: "kPGyBcK.jpeg",
        opts: {
            group: ["ITZY"], Clash: ["Idol Clash S2"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nmixx Lily",
        img: "pngwuqs.jpeg",
        opts: {
            group: ["Nmixx"], Clash: ["Idol Clash S2"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Lin Lin",
        img: "MIFoTYn.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "IVE Liz",
        img: "WCVpBw5.jpeg",
        opts: {
            group: ["IVE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Loha",
        img: "0bysoNG.png",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "Pixy Lola",
        img: "Xr06FZF.png",
        opts: {
            group: ["Pixy"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kandis Looky",
        img: "0s2aNVj.jpeg",
        opts: {
            group: ["Kandis"],
            gen: ["gen5"]
        }
    },
    {
        name: "Nature Lu",
        img: "oRUu9Sd.jpeg",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "WOOAH Lucy",
        img: "zv454tT.jpeg",
        opts: {
            group: ["WOOAH"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "Secret Number L\u00e9a",
        img: "Rn9L1Ds.png",
        opts: {
            group: ["Secret Number"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Lynn",
        img: "XRck39x.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet May",
        img: "ghR9CsQ.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "NeonPunch May",
        img: "9JZTOoZ.jpg",
        opts: {
            group: ["NeonPunch"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Mayu",
        img: "BN3uKcf.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Everglow Mia",
        img: "6ZpivSQ.jpeg",
        opts: {
            group: ["Everglow"],
            gen: ["gen4"]
        }
    },
    {
        name: "Busters Minji",
        img: "lbUw19z.jpeg",
        opts: {
            group: ["Busters"],
            gen: ["gen4"]
        }
    },
    {
        name: "NewJeans Minji",
        img: "SsKK2Ex.jpeg",
        opts: {
            group: ["NewJeans"],
            gen: ["gen4"]
        }
    },
    {
        name: "Secret Number Minji",
        img: "xLx3UZd.png",
        opts: {
            group: ["Secret Number"],
            gen: ["gen4"]
        }
    },
    {
        name: "GWSN Minju",
        img: "Gh3eLd1.jpeg",
        opts: {
            group: ["GWSN"],
            gen: ["gen4"]
        }
    },
    {
        name: "IZ*ONE Minju",
        img: "sggoeHP.png",
        opts: {
            group: ["IZ*ONE"],
            gen: ["gen4"]
        }
    },
    {
        name: "(G)I-dle Minnie",
        img: "37DtQnD.jpeg",
        opts: {
            group: ["(G)I-dle"], Clash: ["Idol Clash S2"],
            gen: ["gen4"]
        }
    },
    {
        name: "WOOAH Minseo",
        img: "scESPR9.jpeg",
        opts: {
            group: ["WOOAH"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "Tri.be Mire",
        img: "1FvYIHo.jpeg",
        opts: {
            group: ["Tri.be"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Miso",
        img: "nluCDti.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "GWSN Miya",
        img: "MDcY9lW.jpeg",
        opts: {
            group: ["GWSN"],
            gen: ["gen4"]
        }
    },
    {
        name: "(G)I-dle Miyeon",
        img: "zifaWE7.jpeg",
        opts: {
            group: ["(G)I-dle"], Clash: ["Idol Clash S2"],
            gen: ["gen4"]
        }
    },
    {
        name: "Weeekly Monday",
        img: "74DClxa.jpeg",
        opts: {
            group: ["Weeekly"],
            gen: ["gen4"]
        }
    },
    {
        name: "Billlie Moon Sua",
        img: "XBMgsbW.jpeg",
        opts: {
            group: ["Billlie"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Nagyung",
        img: "mVrbrQ2.jpeg",
        opts: {
            group: ["Fromis 9"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "PRIMROSE Nahyun",
        img: "SfQeLB4.jpeg",
        opts: {
            group: ["PRIMROSE"],
            gen: ["gen4"]
        }
    },
    {
        name: "IZ*ONE Nako",
        img: "5MFP4nU.png",
        opts: {
            group: ["IZ*ONE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Busters Nami",
        img: "ElTppB3.jpeg",
        opts: {
            group: ["Busters"],
            gen: ["gen4"]
        }
    },
    {
        name: "WOOAH Nana",
        img: "f0Llcvq.jpeg",
        opts: {
            group: ["WOOAH"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "KISS OF LIFE Natty",
        img: "x5EbKWu.jpeg",
        opts: {
            group: ["KISS OF LIFE"], Clash: ["Idol Clash S3"],
            gen: ["gen5"]
        }
    },
    {
        name: "Lightsum Nayoung",
        img: "4HbG6fR.jpeg",
        opts: {
            group: ["Lightsum"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "ILY:1 Nayu",
        img: "TBVsFmi.png",
        opts: {
            group: ["ILY:1"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Nien",
        img: "2P3vt96.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kandis Nine",
        img: "XDjUq8U.jpeg",
        opts: {
            group: ["Kandis"],
            gen: ["gen5"]
        }
    },
    {
        name: "Aespa Ningning",
        img: "A7vwsBN.jpeg",
        opts: {
            group: ["Aespa"], Clash: ["Idol Clash S2"],
            gen: ["gen4"]
        }
    },
    {
        name: "X:IN Nizz",
        img: "1yr4Sq7.jpeg",
        opts: {
            group: ["X:IN"],
            gen: ["gen4"]
        }
    },
    {
        name: "X:IN Nova",
        img: "RQEdUqg.jpeg",
        opts: {
            group: ["X:IN"],
            gen: ["gen4"]
        }
    },
    {
        name: "Everglow Onda",
        img: "uJROSr1.jpeg",
        opts: {
            group: ["Everglow"],
            gen: ["gen4"]
        }
    },
    {
        name: "PRIMROSE Rainie",
        img: "jgSbQGb.jpeg",
        opts: {
            group: ["PRIMROSE"],
            gen: ["gen4"]
        }
    },
    {
        name: "IVE Rei",
        img: "t2hoDmo.jpeg",
        opts: {
            group: ["IVE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Remi",
        img: "ntAGRNP.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "H1-KEY Riina",
        img: "fkPAmDV.jpeg",
        opts: {
            group: ["H1-KEY"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "Pixy Rinji",
        img: "2brj2Lf.png",
        opts: {
            group: ["Pixy"],
            gen: ["gen4"]
        }
    },
    {
        name: "ILY:1 Ririka",
        img: "xaiQNp1.png",
        opts: {
            group: ["ILY:1"],
            gen: ["gen4"]
        }
    },
    {
        name: "CLASS:y Riwon",
        img: "hAbnQAg.jpeg",
        opts: {
            group: ["CLASS:y"],
            gen: ["gen4"]
        }
    },
    {
        name: "ILY:1 Rona",
        img: "nhfmbG5.png",
        opts: {
            group: ["ILY:1"],
            gen: ["gen4"]
        }
    },
    {
        name: "PRIMROSE Ruby",
        img: "525Veg2.jpeg",
        opts: {
            group: ["PRIMROSE"],
            gen: ["gen4"]
        }
    },
    {
        name: "ITZY Ryujin",
        img: "QHCwEUO.jpeg",
        opts: {
            group: ["ITZY"], Clash: ["Idol Clash S2"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Saebom",
        img: "Q2vhdMI.png",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "Fromis 9 Saerom",
        img: "Nk5WmGx.jpeg",
        opts: {
            group: ["Fromis 9"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "LE SSERAFIM Sakura",
        img: "IupZPSs.jpeg",
        opts: {
            group: ["LE SSERAFIM"],
            gen: ["gen4"]
        }
    },
    {
        name: "Lightsum Sangah",
        img: "bJtzJjB.jpeg",
        opts: {
            group: ["Lightsum"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "Pixy Satbyeol",
        img: "DzQjsaD.jpeg",
        opts: {
            group: ["Pixy"],
            gen: ["gen4"]
        }
    },
    {
        name: "STAYC Seeun",
        img: "KRiMMTE.jpeg",
        opts: {
            group: ["STAYC"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "Busters Seira",
        img: "U6HwnSs.jpeg",
        opts: {
            group: ["Busters"],
            gen: ["gen4"]
        }
    },
    {
        name: "Sejeong",
        img: "UPkZIut.jpeg",
        opts: {
            group: ["Sejeong"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cignature Seline",
        img: "4sVbU3e.jpeg",
        opts: {
            group: ["Cignature"],
            gen: ["gen4"]
        }
    },
    {
        name: "ADYA Sena",
        img: "O5zdPQi.jpeg",
        opts: {
            group: ["ADYA"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Seoah",
        img: "N94cXM5.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Queenz Eye Seoha",
        img: "eW6mMef.jpeg",
        opts: {
            group: ["Queenz Eye"],
            gen: ["gen4"]
        }
    },
    {
        name: "H1-KEY Seoi",
        img: "KF5fI96.jpeg",
        opts: {
            group: ["H1-KEY"],
            gen: ["gen4"]
        }
    },
    {
        name: "GWSN Seokyoung",
        img: "zzBu01U.jpeg",
        opts: {
            group: ["GWSN"],
            gen: ["gen4"]
        }
    },
    {
        name: "CLASS:y Seonyou",
        img: "X1eCUDn.jpeg",
        opts: {
            group: ["CLASS:y"],
            gen: ["gen4"]
        }
    },
    {
        name: "GWSN Seoryoung",
        img: "BarWRMK.jpeg",
        opts: {
            group: ["GWSN"],
            gen: ["gen4"]
        }
    },
    {
        name: "Queenz Eye Seovin",
        img: "kg1Pc7b.jpeg",
        opts: {
            group: ["Queenz Eye"],
            gen: ["gen4"]
        }
    },
    {
        name: "ADYA Seowon",
        img: "hiwLteZ.jpeg",
        opts: {
            group: ["ADYA"],
            gen: ["gen4"]
        }
    },
    {
        name: "LAPILLUS Seowon",
        img: "oKdajMY.jpeg",
        opts: {
            group: ["LAPILLUS"],
            gen: ["gen4"]
        }
    },
    {
        name: "CSR Seoyeon",
        img: "BH4k8DQ.jpeg",
        opts: {
            group: ["CSR"],
            gen: ["gen4"]
        }
    },
    {
        name: "Y:SY (Lee Seoyeon)",
        img: "WkQtAGc.jpeg",
        opts: {
            group: ["Seoyeon"],
            gen: ["gen4"]
        }
    },
    {
        name: "ADYA Seungchae",
        img: "xOfMwLo.jpeg",
        opts: {
            group: ["ADYA"],
            gen: ["gen4"]
        }
    },
    {
        name: "Bvndit Seungeun",
        img: "YoS8UFu.jpeg",
        opts: {
            group: ["Bvndit"],
            gen: ["gen4"]
        }
    },
    {
        name: "LAPILLUS Shana",
        img: "dcsXJsU.jpeg",
        opts: {
            group: ["LAPILLUS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Billlie Sheon",
        img: "ToeXf1I.jpeg",
        opts: {
            group: ["Billlie"], Clash: ["Idol Clash Cat Edition"],
            gen: ["gen4"]
        }
    },
    {
        name: "Weeekly Shin Jiyoon",
        img: "ysrCJoA.jpeg",
        opts: {
            group: ["Weeekly"],
            gen: ["gen4"]
        }
    },
    {
        name: "MAJORS Shinye",
        img: "PT2brQ7.jpeg",
        opts: {
            group: ["MAJORS"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Shion",
        img: "cg3vt51.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "(G)I-dle Shuhua",
        img: "3EBWp4y.jpeg",
        opts: {
            group: ["(G)I-dle"], Clash: ["Idol Clash S2"],
            gen: ["gen4"]
        }
    },
    {
        name: "STAYC Sieun",
        img: "ydqucem.jpeg",
        opts: {
            group: ["STAYC"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "CSR Sihyeon",
        img: "ZvnggdK.jpeg",
        opts: {
            group: ["CSR"],
            gen: ["gen4"]
        }
    },
    {
        name: "Everglow Sihyeon",
        img: "8PkOMei.jpeg",
        opts: {
            group: ["Everglow"],
            gen: ["gen4"]
        }
    },
    {
        name: "Bvndit Simyeong",
        img: "fooUi3Q.jpeg",
        opts: {
            group: ["Bvndit"],
            gen: ["gen4"]
        }
    },
    {
        name: "Viviz SinB",
        img: "SpIN7l7.jpeg",
        opts: {
            group: ["Viviz"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "Billlie Siyoon",
        img: "OW1vMee.jpeg",
        opts: {
            group: ["Billlie"], Clash: ["Idol Clash Cat Edition"],
            gen: ["gen4"]
        }
    },
    {
        name: "GWSN SoSo",
        img: "MCxJuQI.jpeg",
        opts: {
            group: ["GWSN"],
            gen: ["gen4"]
        }
    },
    {
        name: "Tri.be Soeun",
        img: "PtsvoZt.jpeg",
        opts: {
            group: ["Tri.be"],
            gen: ["gen4"]
        }
    },
    {
        name: "Weeekly Soeun",
        img: "5VHXXX9.jpeg",
        opts: {
            group: ["Weeekly"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Sohee",
        img: "S8kogXh.jpeg",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "Rocket Punch Sohee",
        img: "7z6AV4H.jpeg",
        opts: {
            group: ["Rocket Punch"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Sohyun",
        img: "246XgFY.jpeg",
        opts: {
            group: ["tripleS"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "Somi",
        img: "kf8N7DQ.jpeg",
        opts: {
            group: ["Somi"],
            gen: ["gen4"]
        }
    },  
    {
        name: "Bvndit Songhee",
        img: "cPUlpTi.png",
        opts: {
            group: ["Bvndit"],
            gen: ["gen4"]
        }
    },
    {
        name: "Tri.be SongSun",
        img: "gPXlpkp.png",
        opts: {
            group: ["Tri.be"],
            gen: ["gen4"]
        }
    },
    {
        name: "WOOAH Songyee",
        img: "jbpJSjX.png",
        opts: {
            group: ["WOOAH"],
            gen: ["gen4"]
        }
    },
    {
        name: "Secret Number Soodam",
        img: "R9IEFX8.png",
        opts: {
            group: ["Secret Number"],
            gen: ["gen4"]
        }
    },
    {
        name: "Soojin",
        img: "ZvnXIIU.jpeg",
        opts: {
            group: ["Soojin"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Soomin",
        img: "Nv0wdmN.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "WOOAH Sora",
        img: "bCxDCPg.jpeg",
        opts: {
            group: ["WOOAH"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "CSR Sua",
        img: "TW1CvLo.jpeg",
        opts: {
            group: ["CSR"],
            gen: ["gen4"]
        }
    },
    {
        name: "Pixy Sua",
        img: "aQeV1O0.png",
        opts: {
            group: ["Pixy"],
            gen: ["gen4"]
        }
    },
    {
        name: "Billlie Suhyeon",
        img: "gisGwtG.jpeg",
        opts: {
            group: ["Billlie"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Sullin",
        img: "KfNHX6k.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nmixx Sullyoon",
        img: "Hgu811m.jpeg",
        opts: {
            group: ["Nmixx"], Clash: ["Idol Clash S2"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Sumin",
        img: "43evPlY.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "STAYC Sumin",
        img: "s1f4wNF.jpeg",
        opts: {
            group: ["STAYC"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Sunshine",
        img: "AVR69wD.jpeg",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "Rocket Punch Suyun",
        img: "UWnPyhW.jpeg",
        opts: {
            group: ["Rocket Punch"],
            gen: ["gen4"]
        }
    },
    {
        name: "MAJORS Suzy",
        img: "9cpIBr0.jpeg",
        opts: {
            group: ["MAJORS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Craxy Swan",
        img: "GFOiNN4.jpeg",
        opts: {
            group: ["Craxy"],
            gen: ["gen4"]
        }
    },
    {
        name: "Purple Kiss Swan",
        img: "iDxcI4F.jpeg",
        opts: {
            group: ["Purple Kiss"],
            gen: ["gen4"]
        }
    },
    {
        name: "Suzanne",
        img: "hLLTFI6.jpeg",
        opts: {
            group: ["Suzanne"],
            gen: ["gen4"]
        }
    },
    {
        name: "Busters Takara",
        img: "YI4GXf5.jpeg",
        opts: {
            group: ["Busters"],
            gen: ["gen4"]
        }
    },
    {
        name: "Billlie Tsuki",
        img: "vWqmCX9.jpeg",
        opts: {
            group: ["Billlie"],
            gen: ["gen4"]
        }
    },
    {
        name: "Nature Uchae",
        img: "uZywcNI.jpeg",
        opts: {
            group: ["Nature"],
            gen: ["gen4"]
        }
    },
    {
        name: "Viviz Umji",
        img: "NCdDoM7.jpeg",
        opts: {
            group: ["Viviz"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kandis Venny",
        img: "1d8E46h.jpeg",
        opts: {
            group: ["Kandis"],
            gen: ["gen5"]
        }
    },
    {
        name: "MAJORS Vita",
        img: "hbKgRJ3.jpeg",
        opts: {
            group: ["MAJORS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Loossemble Vivi",
        img: "JRJ1z7J.jpeg",
        opts: {
            group: ["Loossemble"],
            gen: ["gen4"]
        }
    },
    {
        name: "Aespa Winter",
        img: "JcaCfCa.jpeg",
        opts: {
            group: ["Aespa"], Clash: ["Idol Clash S2"],
            gen: ["gen4"]
        }
    },
    {
        name: "Queenz Eye Wonchae",
        img: "SNhVczW.jpeg",
        opts: {
            group: ["Queenz Eye"],
            gen: ["gen4"]
        }
    },
    {
        name: "IVE Wonyoung",
        img: "9ohAAA7.jpeg",
        opts: {
            group: ["IVE"],
            gen: ["gen4"]
        }
    },
    {
        name: "WOOAH Wooyeon",
        img: "FDz26jz.jpeg",
        opts: {
            group: ["WOOAH"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kep1er Xiaoting",
        img: "BkgCbxm.jpeg",
        opts: {
            group: ["Kep1er"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Xinyu",
        img: "xv1VXOh.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "CSR Yeham",
        img: "u4MFGQh.jpeg",
        opts: {
            group: ["CSR"],
            gen: ["gen4"]
        }
    },
    {
        name: "Yena",
        img: "rkTnejc.jpeg",
        opts: {
            group: ["Yena"],
            gen: ["gen4"]
        }
    },
    {
        name: "ITZY Yeji",
        img: "1h5LNwo.jpeg",
        opts: {
            group: ["ITZY"], Clash: ["Idol Clash S2"], Clash: ["Idol Clash Cat Edition"],
            gen: ["gen4"]
        }
    },
    {
        name: "ICHILLIN Yeju",
        img: "A67a31Q.jpeg",
        opts: {
            group: ["ICHILLIN"],
            gen: ["gen4"]
        }
    },
    {
        name: "H1-KEY Yel",
        img: "Ta1ytA8.jpeg",
        opts: {
            group: ["H1-KEY"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "Loossemble Yeojin",
        img: "PxM3e82.jpeg",
        opts: {
            group: ["Loossemble"],
            gen: ["gen4"]
        }
    },
    {
        name: "Rocket Punch Yeonhee",
        img: "BZl1ged.jpeg",
        opts: {
            group: ["Rocket Punch"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Yeonji",
        img: "7Pi1jjc.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "ADYA Yeonsu",
        img: "EFnds4k.jpeg",
        opts: {
            group: ["ADYA"],
            gen: ["gen4"]
        }
    },
    {
        name: "FIFTY FIFTY Yewon",
        img: "fPOhsFa.jpg",
        opts: {
            group: ["FIFTY FIFTY"],
            gen: ["gen4"]
        }
    },
    {
        name: "Everglow Yiren",
        img: "hmf2r7H.jpeg",
        opts: {
            group: ["Everglow"], Clash: ["Idol Clash S2"],
            gen: ["gen4"]
        }
    },
    {
        name: "Bvndit Yiyeon",
        img: "4v21DBx.jpeg",
        opts: {
            group: ["Bvndit"],
            gen: ["gen4"]
        }
    },
    {
        name: "STAYC Yoon",
        img: "yEx3sOs.jpeg",
        opts: {
            group: ["STAYC"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "mimiirose Yoon Jia",
        img: "deltl13.jpeg",
        opts: {
            group: ["mimiirose"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Yoon Seoyeon",
        img: "ZMRd3Hu.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "bugAboo Yoona",
        img: "SxPWVXv.jpeg",
        opts: {
            group: ["bugAboo"],
            gen: ["gen4"]
        }
    },
    {
        name: "Youha",
        img: "D6vmIfq.jpeg",
        opts: {
            group: ["Youha"],
            gen: ["gen4"]
        }
    },
    {
        name: "DreamNote Youi",
        img: "htfKw3r.jpeg",
        opts: {
            group: ["DreamNote"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kep1er Youngeun",
        img: "mx7R8PN.jpeg",
        opts: {
            group: ["Kep1er"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "tripleS Yubin",
        img: "Zvrw8wN.jpeg",
        opts: {
            group: ["tripleS"],
            gen: ["gen4"]
        }
    },
    {
        name: "LAPILLUS Yue",
        img: "bEJ5JOE.jpeg",
        opts: {
            group: ["LAPILLUS"],
            gen: ["gen4"]
        }
    },
    {
        name: "Lightsum Yujeong",
        img: "37jZ7V4.jpeg",
        opts: {
            group: ["Lightsum"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "IVE Yujin",
        img: "ZfN6oAF.jpeg",
        opts: {
            group: ["IVE"],
            gen: ["gen4"]
        }
    },
    {
        name: "Kep1er Yujin",
        img: "f308QnT.jpeg",
        opts: {
            group: ["Kep1er"], Clash: ["Idol Clash S3"],
            gen: ["gen4"]
        }
    },
    {
        name: "Cherry Bullet Yuju",
        img: "7nuHrwk.jpeg",
        opts: {
            group: ["Cherry Bullet"],
            gen: ["gen4"]
        }
    },
    {
        name: "Purple Kiss Yuki",
        img: "r1luzwN.jpeg",
        opts: {
            group: ["Purple Kiss"],
            gen: ["gen4"]
        }
    },
    {
        name: "Yukika",
        img: "b6X2j4j.jpeg",
        opts: {
            group: ["Yukika"],
            gen: ["gen4"]
        }
    },
    {
        name: "CSR Yuna",
        img: "vTsZn3z.jpeg",
        opts: {
            group: ["CSR"],
            gen: ["gen4"]
        }
    },
    {
        name: "ITZY Yuna",
        img: "KCTAAgg.jpeg",
        opts: {
            group: ["ITZY"], Clash: ["Idol Clash S2"],
            gen: ["gen4"]
        }
    },
    {
        name: "LE SSERAFIM Yunjin",
        img: "C3ULdqJ.jpeg",
        opts: {
            group: ["LE SSERAFIM"],
            gen: ["gen4"]
        }
    },
    {
        name: "Rocket Punch Yunkyoung",
        img: "UGOtUIP.jpeg",
        opts: {
            group: ["Rocket Punch"],
            gen: ["gen4"]
        }
    },
    {
        name: "(G)I-dle Yuqi",
        img: "T7HDDbm.jpeg",
        opts: {
            group: ["(G)I-dle"], Clash: ["Idol Clash S2"],
            gen: ["gen4"]
        }
    },
    {
        name: "Yves",
        img: "URaK7YU.jpeg",
        opts: {
            group: ["Yves"], Clash: ["Idol Clash S2"],
            gen: ["gen4"]
        }
    },
    {
        name: "bugAboo Zin",
        img: "RDa2WZg.jpeg",
        opts: {
            group: ["bugAboo"],
            gen: ["gen4"]
        }
    },
    {
        name: "Weeekly Zoa",
        img: "w5HoXnx.jpeg",
        opts: {
            group: ["Weeekly"],
            gen: ["gen4"]
        }
    },
    {
        name: "Secret Number Zuu",
        img: "9a0eCn2.png",
        opts: {
            group: ["Secret Number"],
            gen: ["gen4"]
        }
    },
    {
        name: "CrazAngel Ahon",
        img: "gur8DuO.jpeg",
        opts: {
            group: ["CrazAngel"],
            gen: ["gen5"]
        }
    },
    {
        name: "BabyMonster Ahyeon",
        img: "Icl8Yeb.jpeg",
        opts: {
            group: ["BabyMonster"], Clash: ["Idol Clash S2"],
            gen: ["gen5"]
        }
    },
    {
        name: "UNCHILD Ako",
        img: "fwaCV1J.jpeg",
        opts: {
            group: ["UNCHILD"],
            gen: ["gen5"]
        }
    },
    {
        name: "Hearts2Hearts A-na",
        img: "op6MyAn.jpeg",
        opts: {
            group: ["Hearts2Hearts"], Clash: ["Idol Clash S3"],
            gen: ["gen5"]
        }
    },
    {
        name: "Geenius Andamiro",
        img: "TVsNNXN.jpeg",
        opts: {
            group: ["Geenius"],
            gen: ["gen5"]
        }
    },
    {
        name: "Meovv Anna",
        img: "2b6nmNr.jpeg",
        opts: {
            group: ["Meovv"], Clash: ["Idol Clash S3"],
            gen: ["gen5"]
        }
    },
    {
        name: "ALLDAY PROJECT Annie",
        img: "62hDheI.jpeg",
        opts: {
            group: ["ALLDAY PROJECT"],
            gen: ["gen5"]
        }
    },
    {
        name: "ablume Aran",
        img: "cxlCzF5.jpeg",
        opts: {
            group: ["ablume"],
            gen: ["gen5"]
        }
    },
    {
        name: "eite Ari",
        img: "XKKwYkQ.jpeg",
        opts: {
            group: ["eite"],
            gen: ["gen5"]
        }
    },
    {
        name: "AtHeart Arin",
        img: "Iaffem6.jpeg",
        opts: {
            group: ["AtHeart"],
            gen: ["gen5"]
        }
    },
    {
        name: "BabyMonster Asa",
        img: "NjzOhK4.jpeg",
        opts: {
            group: ["BabyMonster"], Clash: ["Idol Clash S2"],
            gen: ["gen5"]
        }
    },
    {
        name: "AtHeart Aurora",
        img: "vxaCsLo.jpeg",
        opts: {
            group: ["AtHeart"],
            gen: ["gen5"]
        }
    },
    {
        name: "Heart Of Woman Ayne",
        img: "02u99DO.jpeg",
        opts: {
            group: ["Heart Of Woman"],
            gen: ["gen5"]
        }
    },
    {
        name: "LOVEONE Ayeon",
        img: "t0KAcp7.jpeg",
        opts: {
            group: ["LOVEONE"],
            gen: ["gen5"]
        }
    },
    {
        name: "ALLDAY PROJECT Bailey",
        img: "1mNYWZk.jpeg",
        opts: {
            group: ["ALLDAY PROJECT"],
            gen: ["gen5"]
        }
    },
    {
        name: "izna Bang Jeemin",
        img: "tMgOidi.jpeg",
        opts: {
            group: ["izna"],
            gen: ["gen5"]
        }
    },
    {
        name: "Baby DONT Cry Beni",
        img: "OlnkVi3.jpeg",
        opts: {
            group: ["Baby DONT Cry"],
            gen: ["gen5"]
        }
    },
    {
        name: "AtHeart Bome",
        img: "fbvEDDn.jpeg",
        opts: {
            group: ["AtHeart"],
            gen: ["gen5"]
        }
    },
    {
        name: "VVS Brittney",
        img: "dKv00S6.jpeg",
        opts: {
            group: ["VVS"],
            gen: ["gen5"]
        }
    },
    {
        name: "Hearts2Hearts Carmen",
        img: "ECAIWQ3.jpeg",
        opts: {
            group: ["Hearts2Hearts"],
            gen: ["gen5"]
        }
    },
    {
        name: "I.MET.U Cleo",
        img: "9mbaWTa.jpeg",
        opts: {
            group: ["I.MET.U"],
            gen: ["gen5"]
        }
    },
    {
        name: "H//PE Princess Coco",
        img: "yFERXi8.jpeg",
        opts: {
            group: ["H//PE Princess"],
            gen: ["gen5"]
        }
    },
    {
        name: "UDTT Chaehee",
        img: "PnLvIjL.jpeg",
        opts: {
            group: ["UDTT"],
            gen: ["gen5"]
        }
    },
    {
        name: "Heart Of Woman Chaei",
        img: "9iZFZ91.jpeg",
        opts: {
            group: ["Heart Of Woman"],
            gen: ["gen5"]
        }
    },
    {
        name: "LOVEONE Chaei",
        img: "mtL9QoK.jpeg",
        opts: {
            group: ["LOVEONE"],
            gen: ["gen5"]
        }
    },
    {
        name: "USPEER Chaena",
        img: "sLj5bDd.jpeg",
        opts: {
            group: ["USPEER"],
            gen: ["gen5"]
        }
    },
    {
        name: "E11iVYN Chaerin",
        img: "MgaAq1u.jpeg",
        opts: {
            group: ["E11iVYN"],
            gen: ["gen5"]
        }
    },
    {
        name: "BabyMonster Chiquita",
        img: "htYcIlB.jpeg",
        opts: {
            group: ["BabyMonster"], Clash: ["Idol Clash S2"],
            gen: ["gen5"]
        }
    },
    {
        name: "BADVILLAIN Chloe Young",
        img: "YktwAYZ.jpeg",
        opts: {
            group: ["BADVILLAIN"],
            gen: ["gen5"]
        }
    },
    {
        name: "izna Choi Jungeun",
        img: "Drlhy47.jpeg",
        opts: {
            group: ["izna"], Clash: ["Idol Clash Cat Edition"],
            gen: ["gen5"]
        }
    },
    {
        name: "QWER Chodan",
        img: "9Vce073.jpeg",
        opts: {
            group: ["QWER"],
            gen: ["gen5"]
        }
    },
    {
        name: "NAVILLERA Dahlia",
        img: "gBX6dm1.jpeg",
        opts: {
            group: ["NAVILLERA"],
            gen: ["gen5"]
        }
    },
    {
        name: "VIV Dana",
        img: "x3JZ1d7.jpeg",
        opts: {
            group: ["VIV"],
            gen: ["gen5"]
        }
    },
    {
        name: "USPEER Daon",
        img: "XCTXf6g.jpeg",
        opts: {
            group: ["USPEER"],
            gen: ["gen5"]
        }
    },
    {
        name: "CrazAngel Daze",
        img: "NCbwffX.jpeg",
        opts: {
            group: ["CrazAngel"],
            gen: ["gen5"]
        }
    },
    {
        name: "Young Posse Doeun",
        img: "sjhtlW8.jpeg",
        opts: {
            group: ["Young Posse"],
            gen: ["gen5"]
        }
    },
    {
        name: "Say My Name Dohee",
        img: "vw6SKlZ.jpeg",
        opts: {
            group: ["Say My Name"],
            gen: ["gen5"]
        }
    },
    {
        name: "H//PE Princess Doi",
        img: "oHyrGVQ.jpeg",
        opts: {
            group: ["H//PE Princess"],
            gen: ["gen5"]
        }
    },
    {
        name: "Kiiras Doyeon",
        img: "YLwbWp8.jpeg",
        opts: {
            group: ["Kiiras"],
            gen: ["gen5"]
        }
    },
    {
        name: "UNIS Elisia",
        img: "oJzOZPo.jpeg",
        opts: {
            group: ["UNIS"],
            gen: ["gen5"]
        }
    },
    {
        name: "Meovv Ella",
        img: "BUqVHyR.jpeg",
        opts: {
            group: ["Meovv"], Clash: ["Idol Clash S3"],
            gen: ["gen5"]
        }
    },
    {
        name: "BADVILLAIN Emma",
        img: "5fXc7ST.jpeg",
        opts: {
            group: ["BADVILLAIN"],
            gen: ["gen5"]
        }
    },
    {
        name: "NAVILLERA Enny",
        img: "OFFPwMy.jpeg",
        opts: {
            group: ["NAVILLERA"],
            gen: ["gen5"]
        }
    },
    {
        name: "UNCHILD Evon",
        img: "B3YlFsk.jpeg",
        opts: {
            group: ["UNCHILD"],
            gen: ["gen5"]
        }
    },
    {
        name: "Madein Gaeun",
        img: "xBmyy63.jpeg",
        opts: {
            group: ["Madein"],
            gen: ["gen5"]
        }
    },
    {
        name: "Meovv Gawon",
        img: "gykwIDU.jpeg",
        opts: {
            group: ["Meovv"], Clash: ["Idol Clash S3"],
            gen: ["gen5"]
        }
    },
    {
        name: "UNIS Gehlee",
        img: "GlptMPd.jpeg",
        opts: {
            group: ["UNIS"],
            gen: ["gen5"]
        }
    },
    {
        name: "Gyubin",
        img: "vMEM9R1.jpeg",
        opts: {
            group: ["Gyubin"],
            gen: ["gen5"]
        }
    },
    {
        name: "LATENCY Haeun",
        img: "I9b4pnW.jpeg",
        opts: {
            group: ["LATENCY"],
            gen: ["gen5"]
        }
    },
    {
        name: "UNCHILD Haeun",
        img: "Qc6s0dy.jpeg",
        opts: {
            group: ["UNCHILD"],
            gen: ["gen5"]
        }
    },
    {
        name: "Hanhee",
        img: "1nQk77p.jpeg",
        opts: {
            group: ["Hanhee"],
            gen: ["gen5"]
        }
    },
    {
        name: "UDTT Hanna",
        img: "N6gSuIC.jpeg",
        opts: {
            group: ["UDTT"],
            gen: ["gen5"]
        }
    },
    {
        name: "Kiiras Harin",
        img: "f4PFJuc.jpeg",
        opts: {
            group: ["Kiiras"],
            gen: ["gen5"]
        }
    },
    {
        name: "KiiiKiii Haum",
        img: "e6n6aU7.jpeg",
        opts: {
            group: ["KiiiKiii"], Clash: ["Idol Clash Cat Edition"],
            gen: ["gen5"]
        }
    },
    {
        name: "UNCHILD Heekie",
        img: "y4LvDu9.jpeg",
        opts: {
            group: ["UNCHILD"],
            gen: ["gen5"]
        }
    },
    {
        name: "LATENCY Heeyeon",
        img: "Rs3ElmW.jpeg",
        opts: {
            group: ["LATENCY"],
            gen: ["gen5"]
        }
    },
    {
        name: "QWER Hina",
        img: "czX720L.jpeg",
        opts: {
            group: ["QWER"],
            gen: ["gen5"]
        }
    },
    {
        name: "Say My Name Hitomi",
        img: "bovzNn4.jpg",
        opts: {
            group: ["Say My Name"],
            gen: ["gen5"]
        }
    },
    {
        name: "BADVILLAIN HU'E",
        img: "sE7rFfB.jpeg",
        opts: {
            group: ["BADVILLAIN"],
            gen: ["gen5"]
        }
    },
    {
        name: "ifeye Hwayeon",
        img: "QKpGseV.jpeg",
        opts: {
            group: ["ifeye"],
            gen: ["gen5"]
        }
    },
    {
        name: "UNIS Hyeonju",
        img: "RB6Jp4R.jpeg",
        opts: {
            group: ["UNIS"],
            gen: ["gen5"]
        }
    },
    {
        name: "HITGS Hyerin",
        img: "4O0PJkU.jpeg",
        opts: {
            group: ["HITGS"],
            gen: ["gen5"]
        }
    },
    {
        name: "LATENCY Hyunjin",
        img: "JrJe5Df.jpeg",
        opts: {
            group: ["LATENCY"],
            gen: ["gen5"]
        }
    },
    {
        name: "VVUP Hyunny",
        img: "F81taPZ.jpeg",
        opts: {
            group: ["VVUP"],
            gen: ["gen5"]
        }
    },
    {
        name: "Hearts2Hearts Ian",
        img: "6lHTXWt.jpeg",
        opts: {
            group: ["Hearts2Hearts"], Clash: ["Idol Clash S3"],
            gen: ["gen5"]
        }
    },
    {
        name: "VVS Ilee",
        img: "1VFwr5M.jpeg",
        opts: {
            group: ["VVS"],
            gen: ["gen5"]
        }
    },
    {
        name: "BADVILLAIN INA",
        img: "kPttwnY.jpeg",
        opts: {
            group: ["BADVILLAIN"],
            gen: ["gen5"]
        }
    },
    {
        name: "ILLIT Iroha",
        img: "DupVJxC.jpeg",
        opts: {
            group: ["ILLIT"], Clash: ["Idol Clash S2"],
            gen: ["gen5"]
        }
    },
    {
        name: "HITGS Iyoo",
        img: "kR6ZKOP.jpeg",
        opts: {
            group: ["HITGS"],
            gen: ["gen5"]
        }
    },
    {
        name: "LATENCY Jeewon",
        img: "RXuz8Rc.jpeg",
        opts: {
            group: ["LATENCY"],
            gen: ["gen5"]
        }
    },
    {
        name: "izna Jeong Saebi",
        img: "kR87C0a.jpeg",
        opts: {
            group: ["izna"],
            gen: ["gen5"]
        }
    },
    {
        name: "Young Posse Jiana",
        img: "vu2uwu2.jpeg",
        opts: {
            group: ["Young Posse"],
            gen: ["gen5"]
        }
    },
    {
        name: "Young Posse Jieun",
        img: "2vfF0uR.jpeg",
        opts: {
            group: ["Young Posse"],
            gen: ["gen5"]
        }
    },
    {
        name: "Heart Of Woman Jihyun",
        img: "f7sWEZq.jpeg",
        opts: {
            group: ["Heart Of Woman"],
            gen: ["gen5"]
        }
    },
    {
        name: "Keyveatz Jione",
        img: "PIho3lJ.jpeg",
        opts: {
            group: ["Keyveatz"],
            gen: ["gen5"]
        }
    },
    {
        name: "BEWAVE Jiun",
        img: "bWbJZ1w.jpeg",
        opts: {
            group: ["BEWAVE"],
            gen: ["gen5"]
        }
    },
    {
        name: "Hearts2Hearts Jiwoo",
        img: "BXcnRws.jpeg",
        opts: {
            group: ["Hearts2Hearts"], Clash: ["Idol Clash S3"],
            gen: ["gen5"]
        }
    },
    {
        name: "KiiiKiii Jiyu",
        img: "Ls2hZXD.jpeg",
        opts: {
            group: ["KiiiKiii"],
            gen: ["gen5"]
        }
    },
    {
        name: "Candy Shop Julia",
        img: "5bzRzG7.jpeg",
        opts: {
            group: ["Candy Shop"],
            gen: ["gen5"]
        }
    },
    {
        name: "Say My Name Junhwi",
        img: "s9gAShn.jpeg",
        opts: {
            group: ["Say My Name"],
            gen: ["gen5"]
        }
    },
    {
        name: "Keyveatz Juone",
        img: "v2biage.jpeg",
        opts: {
            group: ["Keyveatz"],
            gen: ["gen5"]
        }
    },
    {
        name: "Hearts2Hearts Juun",
        img: "tYJ1qwn.jpeg",
        opts: {
            group: ["Hearts2Hearts"], Clash: ["Idol Clash S3"], Clash: ["Idol Clash Cat Edition"],
            gen: ["gen5"]
        }
    },
    {
        name: "ODD YOUTH Kanie",
        img: "KvyP8HL.jpeg",
        opts: {
            group: ["ODD YOUTH"],
            gen: ["gen5"]
        }
    },
    {
        name: "Say My Name Kanny",
        img: "sL98Okc.jpeg",
        opts: {
            group: ["Say My Name"],
            gen: ["gen5"]
        }
    },
    {
        name: "ifeye Kasia",
        img: "zs5afow.jpeg",
        opts: {
            group: ["ifeye"],
            gen: ["gen5"]
        }
    },
    {
        name: "AtHeart Katelyn",
        img: "ChsWHgh.jpeg",
        opts: {
            group: ["AtHeart"],
            gen: ["gen5"]
        }
    },
    {
        name: "BADVILLAIN Kelly",
        img: "1XzISBL.jpeg",
        opts: {
            group: ["BADVILLAIN"],
            gen: ["gen5"]
        }
    },
    {
        name: "I.MET.U Kelly",
        img: "wPdDc54.jpeg",
        opts: {
            group: ["I.MET.U"],
            gen: ["gen5"]
        }
    },
    {
        name: "VVUP Kim",
        img: "Ef9A4WL.jpeg",
        opts: {
            group: ["VVUP"],
            gen: ["gen5"]
        }
    },
    {
        name: "izna Koko",
        img: "qCkU4bv.jpeg",
        opts: {
            group: ["izna"],
            gen: ["gen5"]
        }
    },
    {
        name: "UNIS Kotoko",
        img: "K9SSU43.jpeg",
        opts: {
            group: ["UNIS"],
            gen: ["gen5"]
        }
    },
    {
        name: "Baby DONT Cry Kumi",
        img: "vrW1qdN.jpeg",
        opts: {
            group: ["Baby DONT Cry"],
            gen: ["gen5"]
        }
    },
    {
        name: "Kiiras Kurumi",
        img: "VbRlduE.jpeg",
        opts: {
            group: ["Kiiras"],
            gen: ["gen5"]
        }
    },
    {
        name: "KiiiKiii Kya",
        img: "RPH8Kwz.jpeg",
        opts: {
            group: ["KiiiKiii"],
            gen: ["gen5"]
        }
    },
    {
        name: "Kiiras Kylie",
        img: "e3gWdXL.jpeg",
        opts: {
            group: ["Kiiras"],
            gen: ["gen5"]
        }
    },
    {
        name: "I.MET.U Lea",
        img: "39xvjz9.jpeg",
        opts: {
            group: ["I.MET.U"],
            gen: ["gen5"]
        }
    },
    {
        name: "KiiiKiii Leesol",
        img: "x4Iao0L.jpeg",
        opts: {
            group: ["KiiiKiii"],
            gen: ["gen5"]
        }
    },
    {
        name: "BEWAVE Lena",
        img: "O5lCUB5.jpeg",
        opts: {
            group: ["BEWAVE"],
            gen: ["gen5"]
        }
    },
    {
        name: "VVS Lena",
        img: "sjw4ynF.jpeg",
        opts: {
            group: ["VVS"],
            gen: ["gen5"]
        }
    },
    {
        name: "Kiiras LingLing",
        img: "MEyF6GR.jpeg",
        opts: {
            group: ["Kiiras"],
            gen: ["gen5"]
        }
    },
    {
        name: "Heart Of Woman Liri",
        img: "tV40SJt.jpeg",
        opts: {
            group: ["Heart Of Woman"],
            gen: ["gen5"]
        }
    },
    {
        name: "Heart Of Woman Liuyin",
        img: "4GULGXI.jpeg",
        opts: {
            group: ["Heart Of Woman"],
            gen: ["gen5"]
        }
    },
    {
        name: "ReScene Liv",
        img: "cQxebbz.jpeg",
        opts: {
            group: ["ReScene"],
            gen: ["gen5"]
        }
    },
    {
        name: "VVS Liwon",
        img: "xTCC2RI.jpeg",
        opts: {
            group: ["VVS"],
            gen: ["gen5"]
        }
    },
    {
        name: "Gavy NJ Luan",
        img: "XI8BOAI.jpeg",
        opts: {
            group: ["Gavy NJ"],
            gen: ["gen5"]
        }
    },
    {
        name: "WiTCHX Lucia",
        img: "M0Oyj2i.jpeg",
        opts: {
            group: ["WiTCHX"],
            gen: ["gen5"]
        }
    },
    {
        name: "QWER Magenta",
        img: "ldftSWr.jpeg",
        opts: {
            group: ["QWER"],
            gen: ["gen5"]
        }
    },
    {
        name: "WiTCHX Mago",
        img: "RjwgbZg.jpeg",
        opts: {
            group: ["WiTCHX"],
            gen: ["gen5"]
        }
    },
    {
        name: "izna Mai",
        img: "UMib8l8.jpeg",
        opts: {
            group: ["izna"], Clash: ["Idol Clash Cat Edition"],
            gen: ["gen5"]
        }
    },
    {
        name: "ODD YOUTH Maika",
        img: "2hBoqtB.jpeg",
        opts: {
            group: ["ODD YOUTH"],
            gen: ["gen5"]
        }
    },
    {
        name: "WiTCHX Mari",
        img: "8XyFyED.jpeg",
        opts: {
            group: ["WiTCHX"],
            gen: ["gen5"]
        }
    },
    {
        name: "Madein Mashiro",
        img: "o7wGdus.jpeg",
        opts: {
            group: ["Madein"],
            gen: ["gen5"]
        }
    },
    {
        name: "ReScene May",
        img: "rG1dthC.jpeg",
        opts: {
            group: ["ReScene"],
            gen: ["gen5"]
        }
    },
    {
        name: "NAVILLERA Melody",
        img: "1fCX6Z7.jpeg",
        opts: {
            group: ["NAVILLERA"],
            gen: ["gen5"]
        }
    },
    {
        name: "Say My Name Mei",
        img: "EFj7ifZ.jpeg",
        opts: {
            group: ["Say My Name"],
            gen: ["gen5"]
        }
    },
    {
        name: "ifeye Meu",
        img: "umYK8J8.jpeg",
        opts: {
            group: ["ifeye"],
            gen: ["gen5"]
        }
    },
    {
        name: "WiTCHX Mew",
        img: "IlN7KPf.jpeg",
        opts: {
            group: ["WiTCHX"],
            gen: ["gen5"]
        }
    },
    {
        name: "Baby DONT Cry Mia",
        img: "9ooAhMV.jpeg",
        opts: {
            group: ["Baby DONT Cry"],
            gen: ["gen5"]
        }
    },
    {
        name: "AtHeart Michi",
        img: "lgyA8pF.jpeg",
        opts: {
            group: ["AtHeart"],
            gen: ["gen5"]
        }
    },
    {
        name: "Geenius Mika",
        img: "NLrJoKT.jpeg",
        opts: {
            group: ["Geenius"],
            gen: ["gen5"]
        }
    },
    {
        name: "ReScene Minami",
        img: "ic5xIF3.jpeg",
        opts: {
            group: ["ReScene"],
            gen: ["gen5"]
        }
    },
    {
        name: "ILLIT Minju",
        img: "kayTL6r.jpeg",
        opts: {
            group: ["ILLIT"], Clash: ["Idol Clash S2"],
            gen: ["gen5"]
        }
    },
    {
        name: "Madein MiU",
        img: "tfZlT0T.jpeg",
        opts: {
            group: ["Madein"],
            gen: ["gen5"]
        }
    },
    {
        name: "ILLIT Moka",
        img: "sK97wBi.jpeg",
        opts: {
            group: ["ILLIT"], Clash: ["Idol Clash S2"],
            gen: ["gen5"]
        }
    },
    {
        name: "ODD YOUTH Myah",
        img: "mIWyp0k.jpeg",
        opts: {
            group: ["ODD YOUTH"],
            gen: ["gen5"]
        }
    },
    {
        name: "Moong Myang",
        img: "n4oGZHD.jpeg",
        opts: {
            group: ["Moong Myang"],
            gen: ["gen5"]
        }
    },
    {
        name: "AtHeart Nahyun",
        img: "ZImejYP.jpeg",
        opts: {
            group: ["AtHeart"],
            gen: ["gen5"]
        }
    },
    {
        name: "UNIS Nana",
        img: "AgCxPY5.jpeg",
        opts: {
            group: ["UNIS"],
            gen: ["gen5"]
        }
    },
    {
        name: "VIV Nagomi",
        img: "ELMicZy.jpeg",
        opts: {
            group: ["VIV"],
            gen: ["gen5"]
        }
    },
    {
        name: "Madein Nagomi",
        img: "fdYG3Nu.jpeg",
        opts: {
            group: ["Madein"],
            gen: ["gen5"]
        }
    },
    {
        name: "Meovv Narin",
        img: "HtEA7P4.jpeg",
        opts: {
            group: ["Meovv"], Clash: ["Idol Clash S3"],
            gen: ["gen5"]
        }
    },
    {
        name: "Gavy NJ Naye",
        img: "kfukZ9v.jpeg",
        opts: {
            group: ["Gavy NJ"],
            gen: ["gen5"]
        }
    },
    {
        name: "Keyveatz Newy",
        img: "8LmXbNR.jpeg",
        opts: {
            group: ["Keyveatz"],
            gen: ["gen5"]
        }
    },
    {
        name: "WiTCHX Niaa",
        img: "AfFnkhe.jpeg",
        opts: {
            group: ["WiTCHX"],
            gen: ["gen5"]
        }
    },
    {
        name: "H//PE Princess Niko",
        img: "foL1hgM.jpeg",
        opts: {
            group: ["H//PE Princess"],
            gen: ["gen5"]
        }
    },
    {
        name: "VVUP Paan",
        img: "5UUaTGO.jpeg",
        opts: {
            group: ["VVUP"],
            gen: ["gen5"]
        }
    },
    {
        name: "BabyMonster Pharita",
        img: "EUbsFar.jpeg",
        opts: {
            group: ["BabyMonster"], Clash: ["Idol Clash S2"],
            gen: ["gen5"]
        }
    },
    {
        name: "ifeye Rahee",
        img: "lOndBuX.jpeg",
        opts: {
            group: ["ifeye"],
            gen: ["gen5"]
        }
    },
    {
        name: "BabyMonster Rami",
        img: "ooGNzdx.jpeg",
        opts: {
            group: ["BabyMonster"], Clash: ["Idol Clash S2"],
            gen: ["gen5"]
        }
    },
    {
        name: "VVS Rana",
        img: "nsM1rN8.jpeg",
        opts: {
            group: ["VVS"],
            gen: ["gen5"]
        }
    },
    {
        name: "eite Rena",
        img: "yCsc5zh.jpeg",
        opts: {
            group: ["eite"],
            gen: ["gen5"]
        }
    },
    {
        name: "eite Reo",
        img: "r0paLGN.jpeg",
        opts: {
            group: ["eite"],
            gen: ["gen5"]
        }
    },
    {
        name: "Gavy NJ Riel",
        img: "N39FQ8X.jpeg",
        opts: {
            group: ["Gavy NJ"],
            gen: ["gen5"]
        }
    },
    {
        name: "NAVILLERA Rila",
        img: "CFZNUpM.jpeg",
        opts: {
            group: ["NAVILLERA"],
            gen: ["gen5"]
        }
    },
    {
        name: "H//PE Princess Rino",
        img: "PIBR4zY.jpeg",
        opts: {
            group: ["H//PE Princess"],
            gen: ["gen5"]
        }
    },
    {
        name: "UDTT Risako",
        img: "GkDj3Fk.jpeg",
        opts: {
            group: ["UDTT"],
            gen: ["gen5"]
        }
    },
    {
        name: "USPEER Roa",
        img: "Goz7nWB.jpeg",
        opts: {
            group: ["USPEER"],
            gen: ["gen5"]
        }
    },
    {
        name: "Kiiras Roah",
        img: "lhgIOfO.jpeg",
        opts: {
            group: ["Kiiras"],
            gen: ["gen5"]
        }
    },
    {
        name: "BabyMonster Rora",
        img: "zzlraGp.jpeg",
        opts: {
            group: ["BabyMonster"], Clash: ["Idol Clash S2"],
            gen: ["gen5"]
        }
    },
    {
        name: "BabyMonster Ruka",
        img: "kDm6OFP.jpeg",
        opts: {
            group: ["BabyMonster"], Clash: ["Idol Clash S2"],
            gen: ["gen5"]
        }
    },
    {
        name: "ablume Saena",
        img: "dVMVR3K.jpeg",
        opts: {
            group: ["ablume"],
            gen: ["gen5"]
        }
    },
    {
        name: "izna Ryu Sarang",
        img: "Qu4B7on.jpeg",
        opts: {
            group: ["izna"],
            gen: ["gen5"]
        }
    },
    {
        name: "Candy Shop Sarang",
        img: "zihaQCh.jpeg",
        opts: {
            group: ["Candy Shop"],
            gen: ["gen5"]
        }
    },
    {
        name: "ifeye Sasha",
        img: "eTkT9Pd.jpeg",
        opts: {
            group: ["ifeye"],
            gen: ["gen5"]
        }
    },
    {
        name: "NAVILLERA Saya",
        img: "rOIe4Kk.jpeg",
        opts: {
            group: ["NAVILLERA"],
            gen: ["gen5"]
        }
    },
    {
        name: "LATENCY Semi",
        img: "VWscueO.jpeg",
        opts: {
            group: ["LATENCY"],
            gen: ["gen5"]
        }
    },
    {
        name: "HITGS Seohee",
        img: "MP52GzH.jpeg",
        opts: {
            group: ["HITGS"],
            gen: ["gen5"]
        }
    },
    {
        name: "AtHeart Seohyun",
        img: "09DWyTU.jpeg",
        opts: {
            group: ["AtHeart"],
            gen: ["gen5"]
        }
    },
    {
        name: "HITGS Seojin",
        img: "QsVJYgx.jpeg",
        opts: {
            group: ["HITGS"],
            gen: ["gen5"]
        }
    },
    {
        name: "UNIS Seowon",
        img: "y98KPRo.jpeg",
        opts: {
            group: ["UNIS"],
            gen: ["gen5"]
        }
    },
    {
        name: "USPEER Seoyu",
        img: "kwqMdyV.jpeg",
        opts: {
            group: ["USPEER"],
            gen: ["gen5"]
        }
    },
    {
        name: "Madein Serina",
        img: "b4N08bQ.jpeg",
        opts: {
            group: ["Madein"],
            gen: ["gen5"]
        }
    },
    {
        name: "Say My Name Seungjoo",
        img: "xsUwYfr.jpeg",
        opts: {
            group: ["Say My Name"],
            gen: ["gen5"]
        }
    },
    {
        name: "CrazAngel Shannie",
        img: "CkShrJO.jpeg",
        opts: {
            group: ["CrazAngel"],
            gen: ["gen5"]
        }
    },
    {
        name: "E11iVYN Shion",
        img: "vkZXeIr.jpeg",
        opts: {
            group: ["E11iVYN"],
            gen: ["gen5"]
        }
    },
    {
        name: "Say My Name Shuie",
        img: "x30o891.jpeg",
        opts: {
            group: ["Say My Name"],
            gen: ["gen5"]
        }
    },
    {
        name: "eite Sia",
        img: "6e51JzM.jpeg",
        opts: {
            group: ["eite"],
            gen: ["gen5"]
        }
    },
    {
        name: "USPEER Sian",
        img: "rhnNb10.jpeg",
        opts: {
            group: ["USPEER"],
            gen: ["gen5"]
        }
    },
    {
        name: "ablume Sio",
        img: "NSL1jLz.jpeg",
        opts: {
            group: ["ablume"],
            gen: ["gen5"]
        }
    },
    {
        name: "Geenius Sion",
        img: "izovpNH.jpeg",
        opts: {
            group: ["Geenius"],
            gen: ["gen5"]
        }
    },
    {
        name: "QWER Siyeon",
        img: "ahgBida.jpeg",
        opts: {
            group: ["QWER"],
            gen: ["gen5"]
        }
    },
    {
        name: "USPEER Soee",
        img: "C1Tn27w.jpeg",
        opts: {
            group: ["USPEER"],
            gen: ["gen5"]
        }
    },
    {
        name: "Say My Name Soha",
        img: "sPDwczG.jpeg",
        opts: {
            group: ["Say My Name"],
            gen: ["gen5"]
        }
    },
    {
        name: "CrazAngel Solmi",
        img: "84tALAW.jpeg",
        opts: {
            group: ["CrazAngel"],
            gen: ["gen5"]
        }
    },
    {
        name: "dodree Songhyun",
        img: "XGb3nMV.jpeg",
        opts: {
            group: ["dodree"],
            gen: ["gen5"]
        }
    },
    {
        name: "Meovv Sooin",
        img: "kXatYvb.jpeg",
        opts: {
            group: ["Meovv"], Clash: ["Idol Clash S3"], Clash: ["Idol Clash Cat Edition"],
            gen: ["gen5"]
        }
    },
    {
        name: "Soorin",
        img: "emRmyBX.jpeg",
        opts: {
            group: ["Soorin"],
            gen: ["gen5"]
        }
    },
    {
        name: "Candy Shop Soram",
        img: "qVWIHTZ.jpeg",
        opts: {
            group: ["Candy Shop"],
            gen: ["gen5"]
        }
    },
    {
        name: "Hearts2Hearts Stella",
        img: "Pu6WlBR.jpeg",
        opts: {
            group: ["Hearts2Hearts"], Clash: ["Idol Clash S3"],
            gen: ["gen5"]
        }
    },
    {
        name: "Madein Suhye",
        img: "dWG9fhr.jpeg",
        opts: {
            group: ["Madein"],
            gen: ["gen5"]
        }
    },
    {
        name: "Candy Shop Sui",
        img: "E5IWdrm.jpeg",
        opts: {
            group: ["Candy Shop"],
            gen: ["gen5"]
        }
    },
    {
        name: "KiiiKiii Sui",
        img: "MMCqr44.jpeg",
        opts: {
            group: ["KiiiKiii"],
            gen: ["gen5"]
        }
    },
    {
        name: "H//PE Princess Sujin",
        img: "BQML8aj.jpeg",
        opts: {
            group: ["H//PE Princess"],
            gen: ["gen5"]
        }
    },
    {
        name: "ODD YOUTH Summer",
        img: "0CmrdzK.jpeg",
        opts: {
            group: ["ODD YOUTH"],
            gen: ["gen5"]
        }
    },
    {
        name: "Young Posse Sunhye",
        img: "gH32ZaX.jpeg",
        opts: {
            group: ["Young Posse"],
            gen: ["gen5"]
        }
    },
    {
        name: "VVUP Suyeon",
        img: "NP9C2oA.jpeg",
        opts: {
            group: ["VVUP"],
            gen: ["gen5"]
        }
    },
    {
        name: "ifeye Taerin",
        img: "5CUbiRn.jpeg",
        opts: {
            group: ["ifeye"],
            gen: ["gen5"]
        }
    },
    {
        name: "UNCHILD Tina",
        img: "aeuyPFH.jpeg",
        opts: {
            group: ["UNCHILD"],
            gen: ["gen5"]
        }
    },
    {
        name: "VIV Tzuling",
        img: "30HE2FP.jpeg",
        opts: {
            group: ["VIV"],
            gen: ["gen5"]
        }
    },
    {
        name: "VIV Vella",
        img: "VR7pFZ5.jpeg",
        opts: {
            group: ["VIV"],
            gen: ["gen5"]
        }
    },
    {
        name: "BADVILLAIN Vin",
        img: "4Lk2HsR.jpeg",
        opts: {
            group: ["BADVILLAIN"],
            gen: ["gen5"]
        }
    },
    {
        name: "HITGS VV",
        img: "NnGFV8E.jpeg",
        opts: {
            group: ["HITGS"],
            gen: ["gen5"]
        }
    },
    {
        name: "ILLIT Wonhee",
        img: "v8d5zGG.jpeg",
        opts: {
            group: ["ILLIT"], Clash: ["Idol Clash S2"],
            gen: ["gen5"]
        }
    },
    {
        name: "ReScene Woni",
        img: "zPdndid.jpeg",
        opts: {
            group: ["ReScene"],
            gen: ["gen5"]
        }
    },
    {
        name: "Craxy Wooah",
        img: "RCo9ann.jpeg",
        opts: {
            group: ["Craxy"],
            gen: ["gen4"]
        }
    },
    {
        name: "Hearts2Hearts Ye-on",
        img: "ZnvOUuc.jpeg",
        opts: {
            group: ["Hearts2Hearts"],
            gen: ["gen5"]
        }
    },
    {
        name: "ODD YOUTH Yeeum",
        img: "1YN2o2n.jpeg",
        opts: {
            group: ["ODD YOUTH"],
            gen: ["gen5"]
        }
    },
    {
        name: "UNCHILD Yeeun",
        img: "XKeYKf9.jpeg",
        opts: {
            group: ["UNCHILD"],
            gen: ["gen5"]
        }
    },
    {
        name: "Gavy NJ Yejan",
        img: "d6CVRwV.jpeg",
        opts: {
            group: ["Gavy NJ"],
            gen: ["gen5"]
        }
    },
    {
        name: "E11iVYN Yekang",
        img: "efQQgy0.jpeg",
        opts: {
            group: ["E11iVYN"],
            gen: ["gen5"]
        }
    },
    {
        name: "UDTT Yejin",
        img: "iBPbnTg.jpeg",
        opts: {
            group: ["UDTT"],
            gen: ["gen5"]
        }
    },
    {
        name: "E11iVYN Yeongeun",
        img: "qj7ZqZ4.jpeg",
        opts: {
            group: ["E11iVYN"],
            gen: ["gen5"]
        }
    },
    {
        name: "dodree Yeongjoo",
        img: "j4gakop.jpeg",
        opts: {
            group: ["dodree"],
            gen: ["gen5"]
        }
    },
    {
        name: "Young Posse Yeonjung",
        img: "e5nSjoM.jpeg",
        opts: {
            group: ["Young Posse"],
            gen: ["gen5"]
        }
    },
    {
        name: "USPEER Yeowon",
        img: "3nMxVP9.jpeg",
        opts: {
            group: ["USPEER"],
            gen: ["gen5"]
        }
    },
    {
        name: "I.MET.U Yerim",
        img: "FnAFHwT.jpeg",
        opts: {
            group: ["I.MET.U"],
            gen: ["gen5"]
        }
    },
    {
        name: "Madein Yeseo",
        img: "LSvS2nN.jpeg",
        opts: {
            group: ["Madein"],
            gen: ["gen5"]
        }
    },
    {
        name: "Keyveatz Yeseul",
        img: "q6LpLNB.jpeg",
        opts: {
            group: ["Keyveatz"],
            gen: ["gen5"]
        }
    },
    {
        name: "Geenius Yeyoung",
        img: "1aDkGZf.jpeg",
        opts: {
            group: ["Geenius"],
            gen: ["gen5"]
        }
    },
    {
        name: "Baby DONT Cry Yihyun",
        img: "44kD2B7.jpeg",
        opts: {
            group: ["Baby DONT Cry"],
            gen: ["gen5"]
        }
    },
    {
        name: "izna Yoon Jiyoon",
        img: "6Nf7aXZ.jpeg",
        opts: {
            group: ["izna"],
            gen: ["gen5"]
        }
    },
    {
        name: "UNIS Yoona",
        img: "2m6oTlI.jpeg",
        opts: {
            group: ["UNIS"],
            gen: ["gen5"]
        }
    },
    {
        name: "ALLDAY PROJECT Youngseo",
        img: "ErZro2K.jpeg",
        opts: {
            group: ["ALLDAY PROJECT"],
            gen: ["gen5"]
        }
    },
    {
        name: "LOVEONE Yousom",
        img: "XC2avSp.jpeg",
        opts: {
            group: ["LOVEONE"],
            gen: ["gen5"]
        }
    },
    {
        name: "H//PE Princess YSY",
        img: "rPkaa3Z.jpeg",
        opts: {
            group: ["H//PE Princess"],
            gen: ["gen5"]
        }
    },
    {
        name: "Hearts2Hearts Yuha",
        img: "qKp95H9.jpeg",
        opts: {
            group: ["Hearts2Hearts"], Clash: ["Idol Clash S3"],
            gen: ["gen5"]
        }
    },
    {
        name: "Candy Shop Yuina",
        img: "4dpADmt.jpeg",
        opts: {
            group: ["Candy Shop"],
            gen: ["gen5"]
        }
    },
    {
        name: "eite Yuisa",
        img: "ylBRLfo.jpeg",
        opts: {
            group: ["eite"],
            gen: ["gen5"]
        }
    },
    {
        name: "eite Yujin",
        img: "pKZgsxB.jpeg",
        opts: {
            group: ["eite"],
            gen: ["gen5"]
        }
    },
    {
        name: "H//PE Princess Yuju",
        img: "iygaslZ.jpeg",
        opts: {
            group: ["H//PE Princess"],
            gen: ["gen5"]
        }
    },
    {
        name: "LOVEONE Yume",
        img: "60Pevm4.jpeg",
        opts: {
            group: ["LOVEONE"],
            gen: ["gen5"]
        }
    },
    {
        name: "Keyveatz Yuna",
        img: "hQU19I1.jpeg",
        opts: {
            group: ["Keyveatz"],
            gen: ["gen5"]
        }
    },
    {
        name: "LOVEONE Yuna",
        img: "vCSGQT8.jpeg",
        opts: {
            group: ["LOVEONE"],
            gen: ["gen5"]
        }
    },
    {
        name: "ILLIT Yunah",
        img: "4Ho8Uom.jpeg",
        opts: {
            group: ["ILLIT"], Clash: ["Idol Clash S2"],
            gen: ["gen5"]
        }
    },
    {
        name: "UNIS Yunha",
        img: "QfrEJVd.jpeg",
        opts: {
            group: ["UNIS"],
            gen: ["gen5"]
        }
    },
    {
        name: "BADVILLAIN YunSeo",
        img: "7nZqfso.jpeg",
        opts: {
            group: ["BADVILLAIN"],
            gen: ["gen5"]
        }
    },
    {
        name: "BEWAVE Yunseul",
        img: "3FzP2xc.jpeg",
        opts: {
            group: ["BEWAVE"],
            gen: ["gen5"]
        }
    },
    {
        name: "UDTT Yuting",
        img: "pLm5MBv.jpeg",
        opts: {
            group: ["UDTT"],
            gen: ["gen5"]
        }
    },
    {
        name: "ReScene Zena",
        img: "Aub4ROY.jpeg",
        opts: {
            group: ["ReScene"],
            gen: ["gen5"]
        }
    },
    {
        name: "Geenius Zoe",
        img: "gzdWQ6d.jpeg",
        opts: {
            group: ["Geenius"],
            gen: ["gen5"]
        }
    },
    {
        name: "2NE1",
        img: "4Nz0HOz.jpeg",
        opts: {
            group_label: ["2NE1"],
        }
    },
    {
        name: "4Minute",
        img: "ZBZ6hbb.jpeg",
        opts: {
            group_label: ["4Minute"],
        }
    },
    {
        name: "9Muses",
        img: "OQTPRk0.jpeg",
        opts: {
            group_label: ["9Muses"],
        }
    },
    {
        name: "ablume",
        img: "4smyYVB.jpeg",
        opts: {
            group_label: ["ablume"],
        }
    },
    {
        name: "ADYA",
        img: "EF3T2MH.jpeg",
        opts: {
            group_label: ["ADYA"],
        }
    },
    {
        name: "Aespa",
        img: "yhD4MLr.jpeg",
        opts: {
            group_label: ["Aespa"],
        }
    },
    {
        name: "After School",
        img: "JicdpC2.jpeg",
        opts: {
            group_label: ["After School"],
        }
    },
    {
        name: "Alice",
        img: "BJbt4R9.jpeg",
        opts: {
            group_label: ["Alice"],
        }
    },
    {
        name: "AOA",
        img: "T7zfrKh.jpeg",
        opts: {
            group_label: ["AOA"],
        }
    },
    {
        name: "Apink",
        img: "Ies8a3R.jpeg",
        opts: {
            group_label: ["Apink"],
        }
    },
    {
        name: "April",
        img: "5vNiKQi.jpeg",
        opts: {
            group_label: ["April"],
        }
    },
    {
        name: "ARTMS",
        img: "ZvON3g2.png",
        opts: {
            group_label: ["ARTMS"],
        }
    },
    {
        name: "AtHeart",
        img: "JfW9UCR.jpeg",
        opts: {
            group_label: ["AtHeart"],
        }
    },
    {
        name: "Baby DONT Cry",
        img: "pGOkIIs.jpeg",
        opts: {
            group_label: ["Baby DONT Cry"],
            gen: ["gen5"]
        }
    },
    {
        name: "BabyMonster",
        img: "ecnyjaD.png",
        opts: {
            group_label: ["BabyMonster"],
        }
    },
    {
        name: "BADVILLAIN",
        img: "6PSxBIv.jpeg",
        opts: {
            group_label: ["BADVILLAIN"],
        }
    },
    {
        name: "BEWAVE",
        img: "IqpWlrF.jpeg",
        opts: {
            group_label: ["BEWAVE"],
        }
    },
    {
        name: "Billlie",
        img: "TNTQTMZ.jpeg",
        opts: {
            group_label: ["Billlie"],
        }
    },
    {
        name: "Blackpink",
        img: "https://kpop.fandom.com/wiki/File:BLACKPINK_Shut_Down_group_promotional_photo.png",
        opts: {
            group_label: ["Blackpink"],
        }
    },
    {
        name: "Brave Girls",
        img: "qTlGRsT.jpeg",
        opts: {
            group_label: ["Brave Girls"],
        }
    },
    {
        name: "Brown Eyed Girls",
        img: "nmSYXrO.jpeg",
        opts: {
            group_label: ["Brown Eyed Girls"],
        }
    },
    {
        name: "bugAboo",
        img: "pA9dsFw.jpeg",
        opts: {
            group_label: ["bugAboo"],
        }
    },
    {
        name: "Busters",
        img: "Rxph4Cj.jpeg",
        opts: {
            group_label: ["Busters"],
        }
    },
    {
        name: "Bvndit",
        img: "6jhAZ9v.jpeg",
        opts: {
            group_label: ["Bvndit"],
        }
    },
    {
        name: "Candy Shop",
        img: "ulBD9ON.jpeg",
        opts: {
            group_label: ["Candy Shop"],
        }
    },
    {
        name: "Cherry Bullet",
        img: "YzX0IYx.jpeg",
        opts: {
            group_label: ["Cherry Bullet"],
        }
    },
    {
        name: "Cignature",
        img: "LoJZoTL.jpeg",
        opts: {
            group_label: ["Cignature"],
        }
    },
    {
        name: "CLASS:y",
        img: "SYr0HYi.jpeg",
        opts: {
            group_label: ["CLASS:y"],
        }
    },
    {
        name: "Craxy",
        img: "pRmbaEZ.jpeg",
        opts: {
            group_label: ["Craxy"],
        }
    },
    {
        name: "Crayon Pop",
        img: "6xyJuPe.jpeg",
        opts: {
            group_label: ["Crayon Pop"],
        }
    },
    {
        name: "CrazAngel",
        img: "9N9n516.jpeg",
        opts: {
            group_label: ["CrazAngel"],
        }
    },
    {
        name: "CSR",
        img: "CENik18.jpeg",
        opts: {
            group_label: ["CSR"],
        }
    },
    {
        name: "Dal★Shabet",
        img: "okdukvy.jpeg",
        opts: {
            group_label: ["Dal★Shabet"],
        }
    },
    {
        name: "Davichi",
        img: "twxPTDq.jpeg",
        opts: {
            group_label: ["Davichi"],
        }
    },
    {
        name: "Dia",
        img: "PUl14Ml.jpeg",
        opts: {
            group_label: ["Dia"],
        }
    },
    {
        name: "Dodree",
        img: "jlYxUGM.jpeg",
        opts: {
            group_label: ["Dodree"],
        }
    },
    {
        name: "Dreamcatcher",
        img: "675MF1v.jpeg",
        opts: {
            group_label: ["Dreamcatcher"],
        }
    },
    {
        name: "DreamNote",
        img: "gccg8nP.jpeg",
        opts: {
            group_label: ["DreamNote"],
        }
    },
    {
        name: "E11iVYN",
        img: "10kcIkk.jpeg",
        opts: {
            group_label: ["E11iVYN"],
        }
    },
    {
        name: "eite",
        img: "GFklF6n.jpeg",
        opts: {
            group_label: ["eite"],
        }
    },
    {
        name: "EL7ZUP",
        img: "WMjZZ1R.jpeg",
        opts: {
            group_label: ["EL7ZUP"],
        }
    },
    {
        name: "Everglow",
        img: "nOgOsg8.jpeg",
        opts: {
            group_label: ["Everglow"],
        }
    },
    {
        name: "EXID",
        img: "CQlpSSx.jpeg",
        opts: {
            group_label: ["EXID"],
        }
    },
    {
        name: "f(x)",
        img: "8fcux8o.jpeg",
        opts: {
            group_label: ["f(x)"],
        }
    },
    {
        name: "Fiestar",
        img: "w41DIEV.jpeg",
        opts: {
            group_label: ["Fiestar"],
        }
    },
    {
        name: "FIFTY FIFTY",
        img: "bwYIWFz.jpeg",
        opts: {
            group_label: ["FIFTY FIFTY"],
        }
    },
    {
        name: "Fromis 9",
        img: "SbyBCi9.jpeg",
        opts: {
            group_label: ["Fromis 9"],
        }
    },
    {
        name: "(G)I-dle",
        img: "lqcw5qu.jpeg",
        opts: {
            group_label: ["(G)I-dle"],
        }
    },
    {
        name: "Gavy NJ",
        img: "lhrdxVW.jpeg",
        opts: {
            group_label: ["Gavy NJ"],
        }
    },
    {
        name: "Geenius",
        img: "NmKeGL9.jpeg",
        opts: {
            group_label: ["Geenius"],
        }
    },
    {
        name: "GFriend",
        img: "oMBievG.jpeg",
        opts: {
            group_label: ["GFriend"],
        }
    },
    {
        name: "Girl's Day",
        img: "t2cYpvj.jpeg",
        opts: {
            group_label: ["Girl's Day"],
        }
    },
    {
        name: "Girls' Generation",
        img: "ZLGwUtT.jpeg",
        opts: {
            group_label: ["Girls' Generation"],
        }
    },
    {
        name: "Gugudan",
        img: "DS8yctq.jpeg",
        opts: {
            group_label: ["Gugudan"],
        }
    },
    {
        name: "GWSN",
        img: "k3fsNWn.jpeg",
        opts: {
            group_label: ["GWSN"],
        }
    },
    {
        name: "H//PE Princess",
        img: "6UD9HIY.jpeg",
        opts: {
            group_label: ["H//PE Princess"],
        }
    },
    {
        name: "H1-KEY",
        img: "zGKy7JA.jpeg",
        opts: {
            group_label: ["H1-KEY"],
        }
    },
    {
        name: "Heart Of Woman",
        img: "3N18DJr.jpeg",
        opts: {
            group_label: ["Heart Of Woman"],
        }
    },
    {
        name: "Hearts2Hearts",
        img: "xWYP2RL.jpeg",
        opts: {
            group_label: ["Hearts2Hearts"],
        }
    },
    {
        name: "Hellovenus",
        img: "4HkYkhA.jpeg",
        opts: {
            group_label: ["Hellovenus"],
        }
    },
    {
        name: "HITGS",
        img: "nM32JSS.jpeg",
        opts: {
            group_label: ["HITGS"],
        }
    },
    {
        name: "I.MET.U",
        img: "EeB0N2V.jpeg",
        opts: {
            group_label: ["I.MET.U"],
        }
    },
    {
        name: "I.O.I",
        img: "xF4TSxD.jpeg",
        opts: {
            group_label: ["I.O.I"],
        }
    },
    {
        name: "ICHILLIN",
        img: "ExEjxox.jpeg",
        opts: {
            group_label: ["ICHILLIN"],
        }
    },
    {
        name: "ifeye",
        img: "9GspWs0.jpeg",
        opts: {
            group_label: ["ifeye"],
        }
    },
    {
        name: "ILLIT",
        img: "https://www.billboard.com/wp-content/uploads/2024/06/01-ILLIT-Rookie-Spotlight-group-billboard-1548.jpg",
        opts: {
            group_label: ["ILLIT"],
        }
    },
    {
        name: "ILY:1",
        img: "Q9N2VBh.jpeg",
        opts: {
            group_label: ["ILY:1"],
        }
    },
    {
        name: "ITZY",
        img: "odIlmjy.jpeg",
        opts: {
            group_label: ["ITZY"],
        }
    },
    {
        name: "IVE",
        img: "4YNlCkb.jpeg",
        opts: {
            group_label: ["IVE"],
        }
    },
    {
        name: "IZ*ONE",
        img: "qVNz7yy.jpeg",
        opts: {
            group_label: ["IZ*ONE"],
        }
    },
    {
        name: "izna",
        img: "gieU0Qx.jpeg",
        opts: {
            group_label: ["izna"],
        }
    },
    {
        name: "Kandis",
        img: "WhApljH.jpeg",
        opts: {
            group_label: ["Kandis"],
        }
    },
    {
        name: "Kara",
        img: "tPx2i0L.jpeg",
        opts: {
            group_label: ["Kara"],
        }
    },
    {
        name: "Kep1er",
        img: "6nTje4D.jpeg",
        opts: {
            group_label: ["Kep1er"],
        }
    },
    {
        name: "Keyveatz",
        img: "KJT7FT4.jpeg",
        opts: {
            group_label: ["Keyveatz"],
        }
    },
    {
        name: "KiiiKiii",
        img: "bFhYMxM.jpeg",
        opts: {
            group_label: ["KiiiKiii"],
        }
    },
    {
        name: "Kiiras",
        img: "w3jRqij.jpeg",
        opts: {
            group_label: ["Kiiras"],
        }
    },
    {
        name: "KISS OF LIFE",
        img: "jSNccSR.jpeg",
        opts: {
            group_label: ["KISS OF LIFE"],
        }
    },
    {
        name: "Laboum",
        img: "EBD5Kfr.jpeg",
        opts: {
            group_label: ["Laboum"],
        }
    },
    {
        name: "Ladies' code",
        img: "1dx7doB.jpeg",
        opts: {
            group_label: ["Ladies' code"],
        }
    },
    {
        name: "LAPILLUS",
        img: "ZBd6YIf.jpeg",
        opts: {
            group_label: ["LAPILLUS"],
        }
    },
    {
        name: "LATENCY",
        img: "ghNqAI8.jpeg",
        opts: {
            group_label: ["LATENCY"],
        }
    },
    {
        name: "Laysha",
        img: "P9xhONc.jpeg",
        opts: {
            group_label: ["Laysha"],
        }
    },
    {
        name: "LE SSERAFIM",
        img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Le_Sserafim_at_2026_Golden_Disc_awards.png",
        opts: {
            group_label: ["LE SSERAFIM"],
        }
    },
    {
        name: "Lightsum",
        img: "Aku7Nje.jpeg",
        opts: {
            group_label: ["Lightsum"],
        }
    },
    {
        name: "Loossemble",
        img: "gsJkUFc.jpeg",
        opts: {
            group_label: ["Loossemble"],
        }
    },
    {
        name: "Lovelyz",
        img: "PKSzYOH.jpeg",
        opts: {
            group_label: ["Lovelyz"],
        }
    },
    {
        name: "LOVEONE",
        img: "59KpMMj.jpeg",
        opts: {
            group_label: ["LOVEONE"],
        }
    },
    {
        name: "Madein",
        img: "DU92z7x.jpeg",
        opts: {
            group_label: ["Madein"],
        }
    },
    {
        name: "MAJORS",
        img: "Ymp3Jx7.jpeg",
        opts: {
            group_label: ["MAJORS"],
        }
    },
    {
        name: "Mamamoo",
        img: "QlW1V02.jpeg",
        opts: {
            group_label: ["Mamamoo"],
        }
    },
    {
        name: "Meovv",
        img: "FrYY2tG.jpeg",
        opts: {
            group_label: ["Meovv"],
        }
     },
     {
        name: "mimiirose",
        img: "ktMlQ3L.jpeg",
        opts: {
            group_label: ["mimiirose"],
        }
     },
     {
        name: "Miss A",
        img: "p3sOyMg.jpeg",
        opts: {
            group_label: ["Miss A"],
        }
     },
     {
        name: "Momoland",
        img: "lLtjVi2.jpeg",
        opts: {
            group_label: ["Momoland"],
        }
    },
    {
        name: "Nature",
        img: "BHdZDS9.jpeg",
        opts: {
            group_label: ["Nature"]
        }
    },
    {
        name: "NAVILLERA",
        img: "OFCEHwz.jpeg",
        opts: {
            group_label: ["NAVILLERA"]
        }
    },
    {
        name: "NeonPunch",
        img: "gMPLyzr.jpeg",
        opts: {
            group_label: ["NeonPunch"]
        }
    },
    {
        name: "NewJeans",
        img: "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/canvas/2024/07/23/b68ac245-11fa-4cb9-8e62-8b89c285bbc1_6bb9524f.jpg",
        opts: {
            group_label: ["NewJeans"]
        }
    },
    {
        name: "Nmixx",
        img: "nMiYuoS.jpeg",
        opts: {
            group_label: ["Nmixx"]
        }
    },
    {
        name: "Oh My Girl",
        img: "N87dphY.jpeg",
        opts: {
            group_label: ["Oh My Girl"],
        }
    },
    {
        name: "ODD YOUTH",
        img: "SNTvnab.jpeg",
        opts: {
            group_label: ["ODD YOUTH"],
        }
    },
    {
        name: "Pixy",
        img: "qrbIEYv.jpeg",
        opts: {
            group_label: ["Pixy"],
        }
    },
    {
        name: "PRIMROSE",
        img: "pLghMfE.jpeg",
        opts: {
            group_label: ["PRIMROSE"],
        }
    },
    {
        name: "Pristin",
        img: "f1UlAEZ.jpeg",
        opts: {
            group_label: ["Pristin"],
        }
    },
    {
        name: "Purple Kiss",
        img: "1eNnyDK.jpeg",
        opts: {
            group_label: ["Purple Kiss"],
        }
    },
    {
        name: "Queenz Eye",
        img: "KB6ezOk.jpeg",
        opts: {
            group_label: ["Queenz Eye"],
        }
    },
    {
        name: "QWER",
        img: "XGyIhYi.jpeg",
        opts: {
            group_label: ["QWER"],
        }
    },
    {
        name: "Rainbow",
        img: "i69deEo.jpeg",
        opts: {
            group_label: ["Rainbow"],
        }
    },
    {
        name: "Red Velvet",
        img: "https://www.billboard.com/wp-content/uploads/2026/08/Red-Velvet-sm-entertainment-billboard-1800.jpg",
        opts: {
            group_label: ["Red Velvet"],
        }
    },
    {
        name: "ReScene",
        img: "zwkfLlN.jpeg",
        opts: {
            group_label: ["ReScene"],
        }
    },
    {
        name: "Rocket Punch",
        img: "G26KKke.jpeg",
        opts: {
            group_label: ["Rocket Punch"],
        }
    },
    {
        name: "Say My Name",
        img: "by4VwF9.jpeg",
        opts: {
            group_label: ["Say My Name"],
        }
    },
    {
        name: "Secret",
        img: "nnE7c9S.jpeg",
        opts: {
            group_label: ["Secret"],
        }
    },
    {
        name: "Secret Number",
        img: "hflOXh7.jpeg",
        opts: {
            group_label: ["Secret Number"],
        }
    },
    {
        name: "Sistar",
        img: "5UNoWmS.jpeg",
        opts: {
            group_label: ["Sistar"],
        }
    },
    {
        name: "Sonamoo",
        img: "tp9ioyg.jpeg",
        opts: {
            group_label: ["Sonamoo"],
        }
    },
    {
        name: "SPICA",
        img: "fJN8U48.jpeg",
        opts: {
            group_label: ["SPICA"],
        }
    },
    {
        name: "STAYC",
        img: "j5X81dY.jpeg",
        opts: {
            group_label: ["STAYC"],
        }
    },
    {
        name: "Stellar",
        img: "EBHN0xG.jpeg",
        opts: {
            group_label: ["Stellar"],
        }
    },
    {
        name: "Sunny Hill",
        img: "natfRAg.jpeg",
        opts: {
            group_label: ["Sunny Hill"],
        }
    },
    {
        name: "T-ara",
        img: "15mcLBA.jpeg",
        opts: {
            group_label: ["T-ara"],
        }
    },
    {
        name: "Tri.be",
        img: "nCikEnA.jpeg",
        opts: {
            group_label: ["Tri.be"],
        }
    },
    {
        name: "tripleS",
        img: "y2KkCQD.jpeg",
        opts: {
            group_label: ["tripleS"],
        }
    },
    {
        name: "Twice",
        img: "zrF5oT1.jpeg",
        opts: {
            group_label: ["Twice"],
        }
    },
    {
        name: "UDTT",
        img: "AZMCDtJ.jpeg",
        opts: {
            group_label: ["UDTT"],
        }
    },
    {
        name: "UNCHILD",
        img: "pmdvScH.jpeg",
        opts: {
            group_label: ["UNCHILD"],
        }
    },
    {
        name: "UNIS",
        img: "Tz3WNj3.jpeg",
        opts: {
            group_label: ["UNIS"],
        }
    },
    {
        name: "USPEER",
        img: "P36WVnc.jpeg",
        opts: {
            group_label: ["USPEER"],
        }
    },
    {
        name: "VIV",
        img: "kDCwXcw.jpeg",
        opts: {
            group_label: ["VIV"],
        }
    },
    {
        name: "Viviz",
        img: "CAbbKya.jpeg",
        opts: {
            group_label: ["Viviz"],
        }
    },
    {
        name: "VVS",
        img: "5rBGIA2.jpeg",
        opts: {
            group_label: ["VVS"],
        }
    },
    {
        name: "VVUP",
        img: "6gpbpRL.jpeg",
        opts: {
            group_label: ["VVUP"],
        }
    },
    {
        name: "Weeekly",
        img: "QfPiaX2.jpeg",
        opts: {
            group_label: ["Weeekly"],
        }
    },
    {
        name: "Weki Meki",
        img: "LK5ZSgY.jpeg",
        opts: {
            group_label: ["Weki Meki"],
        }
    }, 
    {
        name: "WiTCHX",
        img: "Aw0Ivm8.jpeg",
        opts: {
            group_label: ["WiTCHX"],
        }
    },
    {
        name: "WJSN",
        img: "lNYBI1u.jpeg",
        opts: {
            group_label: ["WJSN"],
        }
    },
    {
        name: "Wonder Girls",
        img: "thGgXpH.jpeg",
        opts: {
            group_label: ["Wonder Girls"],
        }
    },
    {
        name: "WOOAH",
        img: "TlzFJLq.jpeg",
        opts: {
            group_label: ["WOOAH"],
        }
    },
    {
        name: "X:IN",
        img: "5YZj7BY.jpeg",
        opts: {
            group_label: ["X:IN"],
        }
    },
    {
        name: "Young Posse",
        img: "UlWnr34.jpeg",
        opts: {
            group_label: ["Young Posse"],
        }
    },
];















































































































