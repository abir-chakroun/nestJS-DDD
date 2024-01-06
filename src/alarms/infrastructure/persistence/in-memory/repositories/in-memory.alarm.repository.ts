import { AlarmRepository } from 'src/alarms/application/ports/alarm.repository';
import { Alarm } from 'src/alarms/domain/alarm';
import { AlarmEntity } from '../entities/alarm.entity';
import { AlarmMapper } from '../mappers/alarm.mapper';

export class InMemoryAlarmRepository implements AlarmRepository {
  private alarms = new Map<string, AlarmEntity>();

  async findAll(): Promise<Alarm[]> {
    const entities = Array.from(this.alarms.values());
    return entities.map((entity) => AlarmMapper.toDomain(entity));
  }
  async save(alarm: Alarm): Promise<Alarm> {
    const alarmEntity = AlarmMapper.toPersistance(alarm);
    this.alarms.set(alarmEntity.id, AlarmMapper.toPersistance(alarm));
    return AlarmMapper.toDomain(alarmEntity);
  }
}
