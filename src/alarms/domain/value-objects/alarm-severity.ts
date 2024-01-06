export class AlarmSeverity {
  constructor(readonly value: 'critcal' | 'low' | 'high' | 'medium') {}
  equals(severity: AlarmSeverity) {
    return this.value === severity.value;
  }
}
