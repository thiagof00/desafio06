import {uuid} from 'uuidv4'
import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import Category from './Category';


@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  type: 'income' | 'outcome';

  @Column('int4')
  value: number;

  @ManyToOne(()=>Category)
  @JoinColumn({name: 'category_id'})
  category: Category

  @Column()
  category_id: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

}

export default Transaction;
