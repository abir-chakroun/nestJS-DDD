import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlarmRepository } from 'src/alarms/application/ports/alarm.repository';
import { Alarm } from 'src/alarms/domain/alarm';
import { Repository } from 'typeorm';
import { AlarmEntity } from '../entities/alarm.entity';
import { AlarmMapper } from '../mappers/alarm.mapper';

@Injectable()
export class OrmAlarmRepository implements AlarmRepository {
  constructor(
    @InjectRepository(AlarmEntity)
    private readonly _alarmRepository: Repository<AlarmEntity>,
  ) {}

  async findAll(): Promise<Alarm[]> {
    return (await this._alarmRepository.find()).map((alarm) =>
      AlarmMapper.toDomain(alarm),
    );
  }
  async save(alarm: Alarm): Promise<Alarm> {
    const alarmEntity = await this._alarmRepository.save(
      AlarmMapper.toPersistance(alarm),
    );
    return AlarmMapper.toDomain(alarmEntity);
  }
}
