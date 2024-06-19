// eslint-disable-next-line prettier/prettier
import {
  Column,
  Entity,
  Index,
} from 'typeorm';

import { IdEntity } from '../../base';
import { CustomerType } from '../enums';

@Entity()
export class Customer extends IdEntity {
  @Column({ nullable: false })
  firstName!: string;

  @Column({ nullable: false })
  lastName!: string;

  @Column({ nullable: false })
  idDocument!: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: false, unique: true })
  email!: string;

  @Index('customer_type_index')
  @Column({ nullable: false, default: CustomerType.NaturalPerson })
  type!: string;
}
