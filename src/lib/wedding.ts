/** Edit this file to personalise the wedding. */
export const wedding = {
  city: 'Cyber Glass Hall, Cyberjaya',
  bride: {
    first: 'Munirah',
    full: 'Amiratul Munirah binti Jasmi',
  },
  groom: {
    first: 'Nabil',
    full: 'Nabil Farhan bin Mahmad Zulhasnan',
  },
  parents: {
    father: 'Mahmad Zulhasnan bin Abdul Rahim',
    mother: 'Latifah binti Mohd Isa',
  },
  dateISO: '2027-01-30T11:00:00+08:00',
  endISO: '2027-01-30T15:00:00+08:00',
  rsvpBy: '16 January 2027',
  kicker: 'Walimatul Urus',
  kickerSub: 'The wedding feast',
  introLine: 'A tale of two hearts',
  lede: 'Mahmad Zulhasnan bin Abdul Rahim and Latifah binti Mohd Isa request the honour of your presence at the walimatul urus of their son, Nabil Farhan, and Amiratul Munirah.',
  quote: 'From this day — one home, one prayer, one joy.',
  dress: 'Baju tradisional, songket, or formal attire.',
  blessing: 'Semoga majlis ini diberkati.',
  storyEyebrow: 'Jemputan',
  storyTitle: 'With joy, they invite you',
  detailsEyebrow: 'Majlis',
  detailsTitle: 'The celebration',
  countdownLabel: 'Until the feast',
  rsvpEyebrow: 'Kehadiran',
  rsvpTitle: 'Will you come?',
  chapters: [
    {
      n: 'I',
      title: 'The blessing',
      body: 'A joy his parents have waited to set before the people they love.',
    },
    {
      n: 'II',
      title: 'The couple',
      body: 'Nabil and Munirah, one name set beside the other.',
    },
    {
      n: 'III',
      title: 'The table',
      body: 'Cyber Glass Hall, from eleven in the morning until three.',
    },
  ],
  events: [
    {
      key: 'walimah',
      malay: 'Walimatul Urus',
      title: 'The feast',
      iso: '2027-01-30T11:00:00+08:00',
      endISO: '2027-01-30T15:00:00+08:00',
      place: 'Cyber Glass Hall',
      address: 'Cyberjaya',
      map: 'https://maps.app.goo.gl/fhzifLa1FxmnNpre9',
      note: 'From late morning through the afternoon.',
    },
  ],
} as const;
