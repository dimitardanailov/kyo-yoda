import { Entity, Column } from 'typeorm';
import { BaseEntity } from './_base.entity';

@Entity({ name: 'country' })
export class Country extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 3 })
  code: string;
}
