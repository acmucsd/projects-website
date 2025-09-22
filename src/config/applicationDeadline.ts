const FALLBACK_DEADLINE = "2025-10-03T23:59:59-07:00";
const DEADLINE_TIME_ZONE = "America/Los_Angeles";

const parseDeadline = (raw?: string | null): Date | null => {
  if (!raw) return null;

  const parsed = new Date(raw);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const resolveDeadline = (): Date | null => {
  const fromEnv = parseDeadline(
    process.env.NEXT_PUBLIC_APPLICATION_DEADLINE ?? null
  );

  if (fromEnv) return fromEnv;

  return parseDeadline(FALLBACK_DEADLINE);
};

const formatDeadline = (deadline: Date | null): string | null => {
  if (!deadline) return null;

  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: DEADLINE_TIME_ZONE,
      timeZoneName: "short",
    }).format(deadline);
  } catch (error) {
    return deadline.toLocaleString();
  }
};

export const applicationDeadline: Date | null = resolveDeadline();
export const formattedApplicationDeadline: string | null =
  formatDeadline(applicationDeadline);

  export const isUpcomingDeadline = (reference = new Date()): boolean => {
    return !!(
      applicationDeadline && applicationDeadline.getTime() > reference.getTime()
    );
  };