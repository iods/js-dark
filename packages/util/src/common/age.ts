/**
 * @fileOverview A timestamp utility function.
 */

enum Unit {
  Milliseconds = 'milliseconds',
  Seconds      = 'seconds',
  Minutes      = 'minutes',
  Hours        = 'hours',
  Days         = 'days'
}

const age = (timestamp: Date, unit: Unit = Unit.Seconds, now?: Date): number => {
  const currentTimestamp = now ? now.getTime() : new Date().getTime();

  switch (unit) {
    case Unit.Days:
      return (currentTimestamp - timestamp.getTime()) / (1000 * 60 * 60 * 24);
    case Unit.Hours:
      return (currentTimestamp - timestamp.getTime()) / (1000 * 60 * 60);
    case Unit.Minutes:
      return (currentTimestamp - timestamp.getTime()) / (1000 * 60);
    case Unit.Seconds:
      return Math.floor((currentTimestamp - timestamp.getTime()) / 1000);
    case Unit.Milliseconds:
    default:
      return Math.floor(currentTimestamp - timestamp.getTime());
  }
};

export default age;
export { Unit };
