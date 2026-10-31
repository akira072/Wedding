export const WEDDING = {
  couple: ['Pooja', 'Bhavik'] as const,
  brideParents: ['Vijay Shahi', 'Vimla Shahi'] as const,
  groomParents: ['Vijay Kunwar', 'Madhuri Kunwar'] as const,
  dateLabel: 'December 2, 2026',
  location: 'Delhi, India',
  venue: 'Community Hall Mayur Vihar Phase 2 Opposite to Gurudwara',
  venueAddress: 'Delhi, India',
  // Wedding ceremony start time in India Standard Time.
  date: new Date('2026-12-02T11:40:00+05:30'),
  mapsUrl: 'https://maps.app.goo.gl/88E7WgCEAoLZ4vZZ9',
  mapsUrl1: 'https://maps.app.goo.gl/UtMPRQJkBfLuHS4u6',
  mapsUrl2: 'https://maps.app.goo.gl/5Z6g7k1v8x9Q3y4A9',
  musicUrl: 'https://music.youtube.com/watch?v=Het4pXDENBI&si=Q5SzqQqMNPfFrXeB',
}

export type ScheduleItem = {
  title: string
  time: string
  start: Date
  durationMinutes: number
  venue: string
  address: string
  description: string
  note?: string
  calendarLocation?: string
  mapsUrl?: string
}

export type ScheduleDay = {
  label: string
  dateLabel: string
  events: ScheduleItem[]
  separated?: boolean
}

export const SCHEDULE: ScheduleDay[] = [
  {
    label: 'Day One',
    dateLabel: 'Monday, November 30, 2026',
    events: [
      {
        title: 'Shubh Tilak',
        time: '11:00 AM',
        start: new Date('2026-11-30T10:00:00+05:30'),
        durationMinutes: 120,
        venue: 'The Royal Imperial Feast',
        address: WEDDING.venueAddress,
        description: "A traditional ceremony celebrating the groom with tilak, blessings, and good wishes for the couple's beautiful journey ahead.",
        mapsUrl: WEDDING.mapsUrl1,
      },
    ],
  },
  {
    label: 'Day Two',
    dateLabel: 'Tuesday, December 01, 2026',
    events: [  
      {
        title: 'Katha Matkor',
        time: '11:00 AM',
        start: new Date('2026-12-01T15:00:00+05:30'),
        durationMinutes: 120,
        venue: 'Home',
        address: WEDDING.venueAddress,
        description: "A sacred ritual seeking Mother Earth's blessings for an auspicious beginning.",
        mapsUrl: WEDDING.mapsUrl2,
      },
      {
        title: 'Mehendi Rasam',
        time: '6:00 PM',
        start: new Date('2026-12-01T19:30:00+05:30'),
        durationMinutes: 240,
        venue: 'Home',
        address: WEDDING.venueAddress,
        description: 'Celebrating the beauty of traditions with intricate henna and cherished memories.',
        mapsUrl: WEDDING.mapsUrl2,
      },
    ],
  },
  {
    label: 'Wedding Day',
    dateLabel: 'Wednesday, December 2, 2026',
    events: [
      {
        title: 'Janeu Ceremony',
        time: '09:00 AM Onwards',
        start: new Date('2026-12-02T11:40:00+05:30'),
        durationMinutes: 180,
        venue: 'Community Hall Mayur Vihar Phase 2',
        address: WEDDING.venueAddress,
        description: 'An auspicious ceremony celebrating purity, discipline, and spiritual awakening.',
        mapsUrl: WEDDING.mapsUrl,
      },
      {
        title: 'Wedding Ceremony',
        time: '7:00 PM Onwards',
        start: new Date('2026-12-02T11:40:00+05:30'),
        durationMinutes: 180,
        venue: 'Community Hall Mayur Vihar Phase 2',
        address: WEDDING.venueAddress,
        description: 'Celebrating the union of Two hearts and families.',
        note: 'P.S. The baraat is where the party begins—don’t miss it!',
        mapsUrl: WEDDING.mapsUrl,
      },
    ],
  },
]

export const PALETTE = [
  { name: 'Espresso', hex: '#3b2f27' },
  { name: 'Clay', hex: '#a9744f' },
  { name: 'Champagne', hex: '#e4c692' },
  { name: 'Cream', hex: '#f2ead9' },
  { name: 'Sage', hex: '#8a8b6f' },
]

export const DRESS_CARDS = [
  {
    title: 'Cocktail & Dancefloor Ready',
    body: 'Elevated but easy. Think flowing fabrics, tailored suits, and shoes you can actually move in.',
  },
  {
    title: 'Warm & Earthy Tones',
    body: 'Lean into the palette — espresso, clay, champagne, cream. Skip stark white and neon.',
  },
  {
    title: 'December Evenings Get Cool',
    body: 'Ujjain winter nights turn crisp. Bring a beautiful layer you will not mind dancing in.',
  },
]

