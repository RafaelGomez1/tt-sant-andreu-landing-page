import type { AcademyGroupOccupancyResponseDTO } from '../i18n/translations';

export const academyGroupOccupancies: AcademyGroupOccupancyResponseDTO[] = [
  { group: 'MONDAY_6_7', allowed: 12, current: 8 },
  { group: 'MONDAY_7_8', allowed: 12, current: 12 },
  { group: 'WEDNESDAY_6_7', allowed: 12, current: 7 },
  { group: 'WEDNESDAY_7_8', allowed: 12, current: 10 },
  { group: 'FRIDAY_6_7_TECHNIQUE', allowed: 5, current: 4 },
  { group: 'FRIDAY_6_7_INITIATION', allowed: 5, current: 5 },
];

export type AcademyScheduleOccupancySlot = {
  dayKey: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';
  time: string;
  tone: 'kids-beginner' | 'kids-intermediate';
  occupancyKey: string;
};

export const academyScheduleOccupancySlots: AcademyScheduleOccupancySlot[] = [
  { dayKey: 'monday', time: '18:00–19:00', tone: 'kids-beginner', occupancyKey: 'MONDAY_6_7' },
  { dayKey: 'monday', time: '19:00–20:00', tone: 'kids-beginner', occupancyKey: 'MONDAY_7_8' },
  { dayKey: 'wednesday', time: '18:00–19:00', tone: 'kids-beginner', occupancyKey: 'WEDNESDAY_6_7' },
  { dayKey: 'wednesday', time: '19:00–20:00', tone: 'kids-beginner', occupancyKey: 'WEDNESDAY_7_8' },
  { dayKey: 'friday', time: '18:00–19:00', tone: 'kids-intermediate', occupancyKey: 'FRIDAY_6_7_TECHNIQUE' },
  { dayKey: 'friday', time: '18:00–19:00', tone: 'kids-beginner', occupancyKey: 'FRIDAY_6_7_INITIATION' },
];

export function getAcademyScheduleOccupancy(dayKey: AcademyScheduleOccupancySlot['dayKey'], time: string, tone: AcademyScheduleOccupancySlot['tone']) {
  const slot = academyScheduleOccupancySlots.find(
    (entry) =>
      entry.dayKey === dayKey &&
      entry.time === time &&
      entry.tone === tone,
  );

  if (!slot) return undefined;

  return academyGroupOccupancies.find((occupancy) => occupancy.group === slot.occupancyKey);
}

export function getOccupancyState(current: number, allowed: number) {
  if (current >= allowed) return 'full' as const;
  if (allowed - current <= 2) return 'few-spots' as const;
  return 'open' as const;
}
