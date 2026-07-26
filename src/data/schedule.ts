export interface Session {
  time: string;
  topic: string;
  speakerId?: string; // Links to speaker
  track: "Design Architecture" | "Frontend Engineering" | "General";
  room: string;
}

export interface DaySchedule {
  day: number;
  date: string;
  sessions: Session[];
}

export const schedule: DaySchedule[] = [
  {
    day: 1,
    date: "Wednesday, October 14, 2026",
    sessions: [
      {
        time: "09:00 - 09:30",
        topic: "VECTORS Opening Keynote & Dynamic Systems",
        track: "General",
        room: "Hall A"
      },
      {
        time: "09:40 - 10:40",
        topic: "Crafting High-Agency Interfaces",
        speakerId: "sarah-chen",
        track: "Design Architecture",
        room: "Hall A"
      },
      {
        time: "10:50 - 11:50",
        topic: "Next-Gen Rendering & Layout Systems",
        speakerId: "marcus-graham",
        track: "Frontend Engineering",
        room: "Hall B"
      },
      {
        time: "12:00 - 13:00",
        topic: "Networking Lunch & Interactive Demos",
        track: "General",
        room: "Dining Terrace"
      },
      {
        time: "13:10 - 14:10",
        topic: "The Psychology of Frictionless Flows",
        speakerId: "elena-rostova",
        track: "Design Architecture",
        room: "Hall A"
      },
      {
        time: "14:20 - 15:20",
        topic: "Hardware-Accelerated Web Layouts",
        speakerId: "devon-harris",
        track: "Frontend Engineering",
        room: "Hall B"
      }
    ]
  },
  {
    day: 2,
    date: "Thursday, October 15, 2026",
    sessions: [
      {
        time: "09:30 - 10:30",
        topic: "Spatial Computing & Responsive 3D Canvas",
        speakerId: "hana-tanaka",
        track: "Frontend Engineering",
        room: "Hall A"
      },
      {
        time: "10:40 - 11:40",
        topic: "Architecting Multi-Brand Systems",
        speakerId: "julian-vance",
        track: "Design Architecture",
        room: "Hall B"
      },
      {
        time: "11:55 - 12:55",
        topic: "Brutalist Grids: Design Beyond Templates",
        speakerId: "amara-dike",
        track: "Design Architecture",
        room: "Hall A"
      },
      {
        time: "13:00 - 14:00",
        topic: "Speaker Roundtable & Lunch Q&A",
        track: "General",
        room: "Central Stage"
      },
      {
        time: "14:10 - 15:10",
        topic: "Designing for Infinite Outputs",
        speakerId: "lucas-moretti",
        track: "Frontend Engineering",
        room: "Hall B"
      },
      {
        time: "15:20 - 16:30",
        topic: "Panel: The Next 10 Years of Interfaces",
        track: "General",
        room: "Hall A"
      }
    ]
  }
];
