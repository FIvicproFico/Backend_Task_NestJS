import { Injectable } from '@nestjs/common';

@Injectable()
export class BottlesService {
  test(id: number): string {
    return `Bottle ${id}`;
  }
}
