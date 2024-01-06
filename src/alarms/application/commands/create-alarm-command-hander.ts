import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Alarm } from 'src/alarms/domain/alarm';
import { AlarmFactory } from 'src/alarms/domain/factories/alarm.factory';
import { AlarmRepository } from '../ports/alarm.repository';
import { CreateAlarmCommand } from './create-alarm-command';

@CommandHandler(CreateAlarmCommand)
export class CreateAlarmCommandHandler
  implements ICommandHandler<CreateAlarmCommand>
{
  constructor(
    private readonly _alarmFactory: AlarmFactory,
    private readonly _alarmRepository: AlarmRepository,
  ) {}

  async execute(command: CreateAlarmCommand): Promise<Alarm> {
    //will be called when the command is dispatched
    const alarm = this._alarmFactory.create(command.name, command.severity);
    return this._alarmRepository.save(alarm);
  }
}
