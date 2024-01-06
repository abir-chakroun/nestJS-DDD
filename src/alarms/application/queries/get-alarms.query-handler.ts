import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Alarm } from 'src/alarms/domain/alarm';
import { AlarmRepository } from '../ports/alarm.repository';
import { GetAlarmsQuery } from './get-alarms.query';

@QueryHandler(GetAlarmsQuery)
export class GetAlarmQueryHandler
  implements IQueryHandler<GetAlarmsQuery, Alarm[]>
{
  constructor(private readonly _alarmRepository: AlarmRepository) {}

  async execute(): Promise<Alarm[]> {
    //will be called when the command is dispatched
    return this._alarmRepository.findAll();
  }
}
