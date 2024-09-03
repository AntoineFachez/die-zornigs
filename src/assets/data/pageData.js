import welcome from '../images/pt-balance/Yoga at Home_edited_edited_edited_edited.png';
const standIn = { lesson: '<lesson>', contact: '<contact>' };

export const data = {
  mainHeader: 'PT Balance',
  welcomeText: 'Welcome',
  mainHeaderImageUrl: welcome,
  videoUrl:
    'https://video.wixstatic.com/video/ef6490_c50dbbceb4c24a83ad5252ada1d241eb/720p/mp4/file.mp4',
  introText:
    'Als qualifizierte und zertifizierte Trainerin bringe ich meine Kunden in Form. Egal, ob du einige Kilos verlieren, Muskeln aufbauen oder  an deiner Ausdauer arbeiten willst.',

  trainer: {
    name: 'Jana Mikuteit',
    profileImageUrl:
      'https://static.wixstatic.com/media/ef6490_75fd4ebd5c7c4e36b6cf80654551933f~mv2.jpg/v1/fill/w_687,h_690,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MC_Portrait%20Laughing_edited.jpg',
  },

  landingPageSections: [
    {
      header: 'Lebensabschnitt',
      list: [
        {
          name: 'Schwangerschaft',
          selectorText: 'schwanger',
          searchTerm: 'pregnant',
          textLong: 'Du bist in Schwangerschaft',
        },
        {
          name: 'Rückbildung',
          selectorText: 'Rückbildung',
          searchTerm: 'recreation after pregnancy',
          textLong: 'Du hast Dein Kind geboren',
        },
        {
          name: 'Wechseljahre',
          selectorText: 'Wechseljahre',
          searchTerm: 'menopause',
          textLong: 'Du bist in Deinen Wechseljahren',
        },
      ],
    },
    {
      header: 'Arten',
      list: [
        { name: 'Mit Geräten', searchTerm: 'sport with devices' },
        {
          name: 'Mit eigenem Körpergewicht',
          searchTerm: 'sport with own body weight',
        },
      ],
    },

    {
      header: 'Orte',
      list: [
        {
          location: 'park',
          name: 'Park',
          searchTerm: 'sport in the park',
          selectorText: 'im Park',
          textLong: 'Im Park',
        },
        {
          location: 'kaifuLodge',
          name: 'Kaifu-Lodge',
          searchTerm: 'sport in sport studio',
          selectorText: 'im Studio',
          textLong: 'Im schönsten Studio Hamburgs: Kaifu-Lodge',
        },
        {
          location: 'atHome',
          name: 'zuhause',
          searchTerm: 'sport at home',
          selectorText: 'zuhause',
          textLong: 'Bei dir zuhause',
        },
      ],
    },
    {
      header: 'Studio Vorteile',
      list: [
        { name: 'Wellness-Spa-Bereich', searchTerm: 'yoga' },
        { name: 'Kinderbetreuung', searchTerm: 'yoga' },
        { name: 'Gastronomie', searchTerm: 'yoga' },
        { name: 'Schwimmbad', searchTerm: 'yoga' },
      ],
    },

    {
      header: 'Mein ganzheitlicher Ansatz',
      searchTerm: 'fitness and health',
      contentLong:
        'Fitness und Gesundheit stehen im Mittelpunkt. Ich kombiniere die besten Aspekte aller Trainingsarten, um ein maßgeschneidertes Programm für dich zu erstellen.',
    },
    {
      header: '',
      searchTerm: 'every beginning is difficult',
      contentLong:
        'Aller Anfang ist schwer? Nicht bei mir! Ich mache den Einstieg so einfach wie möglich. Komm vorbei und überzeuge dich selbst!',
    },
  ],
  lessons: [
    {
      header: 'Back in Shape & in Balance',
      headerShort: 'Shape & Balance',
      contentLong:
        'Bereit für ein neues Lebensgefühl? Gemeinsam erreichen wir deine Fitnessziele - egal ob du abnehmen, Muskeln aufbauen oder einfach fitter werden möchtest. Ich erstelle ein maßgeschneidertes Programm, das zu dir und deinem Alltag passt, und unterstütze dich auf jedem Schritt deiner Reise. Mit meiner Erfahrung und meinem ganzheitlichen Ansatz wirst du nicht nur körperlich stärker, sondern fühlst dich auch rundum wohler. Worauf warten? Starte jetzt deine Transformation! Vereinbare jetzt dein kostenloses Beratungsgespräch und starte deine Reise zu einem fitteren, gesünderen Leben!',
      contentShort:
        'Bereit für mehr Fitness und Wohlbefinden? Ich unterstütze dich mit einem maßgeschneiderten Programm und ganzheitlichem Ansatz. Gemeinsam erreichen wir deine Ziele! Vereinbare jetzt dein kostenloses Beratungsgespräch!',
      imageUrl:
        'https://static.wixstatic.com/media/9d22618a84f444e88901c14271f75a8a.jpg/v1/fill/w_490,h_985,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/9d22618a84f444e88901c14271f75a8a.jpg',
      imageAlt: 'standIn',
      lessonInInquiryResponse: 'Shape & Balance',
      messageStimulus:
        'Schön, dass du dich für "Back in Shape & in Balance" interessierst! Erzähl mir doch ein bisschen von deinen Fitnesszielen. Möchtest du abnehmen, Muskeln aufbauen, deine Ausdauer verbessern oder einfach wieder mehr Bewegung in deinen Alltag bringen? Gemeinsam finden wir den perfekten Weg, um deine Ziele zu erreichen und dich rundum wohlzufühlen.',
      inquiryResponse: `Du interessierst Dich für ${standIn.lesson}. Toll! Schick schnell Deine Anfrage ab und ich melde mich innerhalb der kommenden 24 Stunden per ${standIn.contact} bei Dir.`,
    },
    {
      header: 'Schwangerschaft',
      headerShort: 'Schwangerschaft',
      contentLong:
        'Jede Schwangerschaft steht für mich für das Wunder des Lebens.<br />Ich arbeite seit 2008 als Yogalehrerin für Schwangerschaft und Rückbildung für eine entspannte Schwangerschaft: Stärke deinen Körper, finde innere Ruhe und bereite dich sanft auf die Geburt vor. Mit Atemübungen, Entspannungstechniken und speziell angepassten Bewegungen begleite ich dich durch diese besondere Zeit. Entdecke neue Energie und finde dein Gleichgewicht - in Gruppenkursen oder im persönlichen Einzeltraining. Melde dich jetzt für ein kostenloses Kennenlerngespräch an und lass uns gemeinsam starten!',
      contentShort:
        'Yoga für eine entspannte Schwangerschaft: Stärke deinen Körper, finde innere Ruhe und bereite dich sanft auf die Geburt vor. Mit Atemübungen, Entspannungstechniken und speziell angepassten Bewegungen begleite ich dich durch diese besondere Zeit. Entdecke neue Energie und finde dein Gleichgewicht - in Gruppenkursen oder im persönlichen Einzeltraining. Melde dich jetzt für ein kostenloses Kennenlerngespräch an und lass uns gemeinsam starten!',
      imageUrl:
        'https://static.wixstatic.com/media/ef6490_5b1f64c250f8427abafcd7d85b2b04b7~mv2.jpg/v1/fill/w_490,h_841,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/ef6490_5b1f64c250f8427abafcd7d85b2b04b7~mv2.jpg',
      inquiryResponse: `Du interessierst Dich für ${standIn.lesson}. Toll! Schick schnell Deine Anfrage ab und ich melde mich innerhalb der kommenden 24 Stunden per ${standIn.contact} bei Dir.`,
      messageStimulus:
        '"Yoga kann wunderbar auf deine Bedürfnisse in der Schwangerschaft angepasst werden. Schreib mir gerne, in welchem Monat du bist und was du dir von den Stunden erhoffst."',
      lessonInInquiryResponse: 'Sport in der Schwangerschaft',
    },
    {
      header: 'Rückbildung',
      headerShort: 'Rückbildung',
      contentLong:
        'Finde zurück zu deiner Stärke nach der Geburt: Sanftes Yoga hilft dir, deinen Körper liebevoll zu kräftigen und neue Energie zu tanken. Wir stärken deinen Beckenboden, Rücken und deine Körpermitte, lindern Verspannungen und fördern dein inneres Gleichgewicht. Atemübungen schenken dir Ruhe und Gelassenheit für den Alltag mit deinem Baby. Gemeinsam bauen wir Kraft und Stabilität auf, damit du dich wieder rundum wohlfühlst. Ich biete Kurse in Präsenz und online via Zoom an, damit du flexibel trainieren kannst - auch mit deinem Baby! Melde dich gerne für ein kostenloses Beratungsgespräch.',
      contentShort:
        'Sanftes Yoga nach der Geburt Stärke deinen Körper, finde innere Ruhe und gewinne neue Energie. Präsenz- und Online-Kurse verfügbar! Melde dich für ein kostenloses Beratungsgespräch an.',
      imageUrl:
        'https://static.wixstatic.com/media/11062b_5303b55c78d94dc19443cbc26c599242~mv2.jpg/v1/fill/w_490,h_1016,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_5303b55c78d94dc19443cbc26c599242~mv2.jpg',
      lessonInInquiryResponse: 'Rückbildung',
      messageStimulus:
        'Herzlich willkommen! Ich freue mich, dass du dich für Rückbildungsyoga interessierst. Erzähl mir doch ein bisschen über dich: Wie alt ist dein Baby und möchtest du es gerne zu den Stunden mitbringen? Gibt es bestimmte Bereiche, auf die du dich besonders konzentrieren möchtest, wie zum Beispiel Beckenbodenstärkung, Rückentraining oder Entspannung? Ich bin für dich da und passe die Stunden gerne an deine Bedürfnisse an.',
      inquiryResponse: `Du interessierst Dich für ${standIn.lesson}. Toll! Schick schnell Deine Anfrage ab und ich melde mich innerhalb der kommenden 24 Stunden per ${standIn.contact} bei Dir.`,
    },
    {
      header: 'DAS TRAINING',
      headerShort: 'Training',
      contentLong:
        'Ob Bei Dir Zuhause, im Park oder in dem schönsten Studio Hamburgs, es ist deine entscheidung wie dein Training aussehen soll. Wir können  mit Geräten oder mit eigenem Körpergewicht dein Training gestalten. <br />In der Kaifu-Lodge gibt es für dich die Möglichkeit nach dem Training noch unseren Wellnes Spa Bereich zu nutzen so wie viele andere Angebote, wie zB die Kinderbetreuung und und die Gastronomie und Schwimmbad.<br />Das Training soll ein Ort zu sein, an dem Fitness und Gesundheit im Mittelpunkt stehen. Mein ganzheitlicher Ansatz, betrachtet das große Ganze und kombiniert die besten Aspekte aller Arten von Fitness.<br />Aber aller Anfang ist schwer! Deshalb versuche ich den Einsteig so einfach wie möglich zu machen. Komm vorbei und überzeuge dich selbst!',
      contentShort:
        'Ob Bei Dir Zuhause, im Park oder in dem schönsten Studio Hamburgs, es ist deine entscheidung wie dein Training aussehen soll. Wir können  mit Geräten oder mit eigenem Körpergewicht dein Training gestalten. <br />In der Kaifu-Lodge gibt es für dich die Möglichkeit nach dem Training noch unseren Wellnes Spa Bereich zu nutzen so wie viele andere Angebote, wie zB die Kinderbetreuung und und die Gastronomie und Schwimmbad.<br />Das Training soll ein Ort zu sein, an dem Fitness und Gesundheit im Mittelpunkt stehen. Mein ganzheitlicher Ansatz, betrachtet das große Ganze und kombiniert die besten Aspekte aller Arten von Fitness.<br />Aber aller Anfang ist schwer! Deshalb versuche ich den Einsteig so einfach wie möglich zu machen. Komm vorbei und überzeuge dich selbst!',
      imageUrl: '',
      lessonInInquiryResponse: 'allgemeines Training',
      messageStimulus:
        'Du hast freies Training angeklickt. Schreib mir doch schon mal, wonach Dir ist. Lieber draußen Laufen gehen oder im Studio eine Session machen? Oder beides im Wechsel?',
      inquiryResponse: `Du interessierst Dich für ${standIn.lesson}. Toll! Schick schnell Deine Anfrage ab und ich melde mich innerhalb der kommenden 24 Stunden per ${standIn.contact} bei Dir.`,
    },
    {
      header: 'Wechseljahre',
      headerShort: 'Wechseljahre',
      contentLong:
        'Die Wechseljahre markieren einen neuen Lebensabschnitt voller Möglichkeiten! Es ist eine Zeit, in der du dich neu erfinden, deine Prioritäten überdenken und dich auf deine Gesundheit und dein Wohlbefinden konzentrieren kannst. Mit gezieltem Training, ausgewogener Ernährung und einer positiven Einstellung kannst du diese Phase kraftvoll und voller Energie erleben. Ich unterstütze dich dabei, deine Fitnessziele zu erreichen, Beschwerden zu lindern und dein Selbstbewusstsein zu stärken. Gemeinsam entwickeln wir ein maßgeschneidertes Programm, das perfekt auf deine Bedürfnisse in den Wechseljahren abgestimmt ist. Lass uns gemeinsam diese spannende Reise beginnen! Vereinbare jetzt ein kostenloses Beratungsgespräch und entdecke, wie du dich in den Wechseljahren rundum wohl und vital fühlen kannst.',
      contentShort:
        'Wechseljahre - Zeit für einen Neuanfang! Stärke deine Gesundheit, finde neue Energie und fühle dich rundum wohl. Vereinbare jetzt dein kostenloses Beratungsgespräch!',
      imageUrl:
        'https://static.wixstatic.com/media/11062b_404b34983ba54f16be018eedf69e86a3~mv2.jpg/v1/fill/w_491,h_886,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_404b34983ba54f16be018eedf69e86a3~mv2.jpg',
      lessonInInquiryResponse: 'Sport in den Wechseljahren',
      messageStimulus:
        'Herzlich willkommen! Ich freue mich, dass du dich für ein Trainingsprogramm in den Wechseljahren interessierst. Jede Frau erlebt diese Phase anders. Erzähl mir doch ein bisschen über deine persönlichen Erfahrungen und Ziele. Gibt es bestimmte Beschwerden, die du lindern möchtest, oder möchtest du einfach deine Fitness und dein Wohlbefinden verbessern? Gemeinsam finden wir den besten Weg, um dich in dieser spannenden Lebensphase zu unterstützen.',
      inquiryResponse: `Du interessierst Dich für ${standIn.lesson}. Toll! Schick schnell Deine Anfrage ab und ich melde mich innerhalb der kommenden 24 Stunden per ${standIn.contact} bei Dir.`,
    },
    {
      header: 'Yoga',
      headerShort: 'Yoga',
      contentLong:
        'Der Weg des Yoga ist endlos - er beginnt mit einer Pose und einem Gedanken und entwickelt sich letztlich zu einem endlosen Weg der Entdeckung und des Wachstums. Ich schätze jeden Einzelnen, der an meinen  teilnimmt und freue mich sehr darauf, auch dir dabei zu helfen deine Ziele zu erreichen.',
      contentShort:
        'Yoga - Deine Reise zu innerer Ruhe und Stärke. Entdecke die transformative Kraft des Yoga und finde dein persönliches Gleichgewicht. Egal, ob du Anfänger oder erfahrener Yogi bist, ich begleite dich auf deinem Weg. Melde dich jetzt für eine kostenlose Probestunde an und erlebe die positive Wirkung von Yoga!',
      imageUrl:
        'https://static.wixstatic.com/media/11062b_0683f62d416b4d9eac1a1b5cd00df64b~mv2.jpg/v1/fill/w_490,h_660,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_0683f62d416b4d9eac1a1b5cd00df64b~mv2.jpg',
      lessonInInquiryResponse: 'Yoga',
      messageStimulus:
        'Du hast Yoga angeklickt. Schreib mir doch, ob Du gern an Deine Grenzen gehen möchtest oder ob Du nach einem Wohlfühlpaket suchst.',
      inquiryResponse: `Du interessierst Dich für ${standIn.lesson}. Toll! Schick schnell Deine Anfrage ab und ich melde mich innerhalb der kommenden 24 Stunden per ${standIn.contact} bei Dir.`,
    },
    {
      header: 'Ernährung',
      headerShort: 'Ernährung',
      contentLong:
        'Personal Training und Ernährungsberatung können definitiv dazu beitragen, deinen Stoffwechsel anzukurbeln und deine Gesundheit zu verbessern. Durch regelmäßige körperliche Aktivität und eine ausgewogene, gesunde Ernährung kannst du deinen Stoffwechsel positiv beeinflussen. Ernährungsberatung kann dir dabei helfen, die richtigen Übungen und Ernährungsgewohnheiten zu entwickeln, um deine Ziele zu erreichen.<br />Eine gesunde Ernährung besteht aus einer Vielzahl von Nährstoffen, die deinen Stoffwechsel unterstützen und dein Wohlbefinden steigern können. Es ist wichtig, auf eine ausgewogene Ernährung zu achten und regelmäßig Sport zu treiben, um langfristige Ergebnisse zu erzielen.',
      contentShort:
        'Personal Training und Ernährungsberatung unterstützen dich dabei, deine Gesundheits- und Fitnessziele zu erreichen. Gemeinsam entwickeln wir einen maßgeschneiderten Plan mit passenden Übungen und Ernährungsgewohnheiten, der deinen Stoffwechsel ankurbelt und dein Wohlbefinden steigert.',
      imageUrl: '',
      lessonInInquiryResponse: 'Ernährung',
      messageStimulus: '',
      inquiryResponse: `Du interessierst Dich für ${standIn.lesson}. Toll! Schick schnell Deine Anfrage ab und ich melde mich innerhalb der kommenden 24 Stunden per ${standIn.contact} bei Dir.`,
    },
  ],
};
