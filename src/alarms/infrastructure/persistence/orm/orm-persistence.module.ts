import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlarmRepository } from 'src/alarms/application/ports/alarm.repository';
import { AlarmEntity } from './entities/alarm.entity';
import { OrmAlarmRepository } from './repositories/orm.alarm.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AlarmEntity])],
  providers: [{ provide: AlarmRepository, useClass: OrmAlarmRepository }],
  exports: [AlarmRepository], //allowing alarmRepository to be used by other modules => this is where we bind the port to an adapter
})
export class OrmAlarmPersistenceModule {}
