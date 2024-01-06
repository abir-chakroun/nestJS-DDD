import { Alarm } from 'src/alarms/domain/alarm';
import { AlarmSeverity } from 'src/alarms/domain/value-objects/alarm-severity';
import { AlarmEntity } from '../entities/alarm.entity';

export class AlarmMapper {
  static toDomain(alarmEntity: AlarmEntity): Alarm {
    const alarmSeverity = new AlarmSeverity(
      alarmEntity.severity as AlarmSeverity['value'],
    );
    const alarm = new Alarm(alarmEntity.id, alarmEntity.name, alarmSeverity);
    return alarm;
  }

  static toPersistance(alarm: Alarm): AlarmEntity {
    const alarmEntity = new AlarmEntity();
    alarmEntity.id = alarm.id;
    alarmEntity.name = alarm.name;
    alarmEntity.severity = alarm.severity.value;
    return alarmEntity;
  }
}
