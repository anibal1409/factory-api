// eslint-disable-next-line prettier/prettier
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { IdEntity } from '../../base';
import { Customer } from '../../customers';
import { User } from '../../users/entities';
import { SaleProduct } from './saleProduct.entity';

@Entity()
export class Sale extends IdEntity {
  @Column({ nullable: false })
  date!: Date;

  @Column({ nullable: true })
  note?: string;

  @Column({ nullable: false, default: false })
  sendEmail: boolean;

  @Column({ nullable: false, default: 0 })
  iva: number;

  @Column({ nullable: false, default: 0 })
  subtotal: number;

  @Column({ nullable: false, default: 0 })
  total: number;

  @ManyToOne(() => Customer, (customer) => customer.id)
  @JoinColumn()
  customer?: Customer;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  user?: User;

  @OneToMany(() => SaleProduct, (salesProducts) => salesProducts.sale)
  saleProducts: SaleProduct[];
}