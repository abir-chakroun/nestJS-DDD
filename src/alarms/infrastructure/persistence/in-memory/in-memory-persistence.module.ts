import { Module } from '@nestjs/common';
import { AlarmRepository } from 'src/alarms/application/ports/alarm.repository';
import { InMemoryAlarmRepository } from './repositories/in-memory.alarm.repository';

@Module({
  imports: [],
  providers: [{ provide: AlarmRepository, useClass: InMemoryAlarmRepository }],
  exports: [AlarmRepository], //allowing alarmRepository to be used by other modules => this is where we bind the port to an adapter
})
export class InMemoryAlarmPersistenceModule {}
