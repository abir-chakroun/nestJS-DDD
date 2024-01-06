import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateAlarmCommand {
  constructor(public readonly name: string, public readonly severity: string) {}
}
