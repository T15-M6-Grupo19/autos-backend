import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Ad } from './ads.entity';
import { Comment } from './comments.entity';
import { getRounds, hash } from 'bcryptjs';

export enum UserType {
  ANUNCIANTE = 'anunciante',
  COMPRADOR = 'comprador',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar', length: 120 })
  password: string;

  @Column({ type: 'varchar' })
  CPF: string;

  @Column({ type: 'varchar' })
  mobile: string;

  @Column({ type: 'date' })
  birth_date: Date | string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  description?: string | undefined | null;

  @Column({ type: 'varchar' })
  ZIP_code: string;

  @Column({ type: 'varchar' })
  state: string;

  @Column({ type: 'varchar' })
  city: string;

  @Column({ type: 'varchar' })
  street: string;

  @Column({ type: 'varchar' })
  number: string;

  @Column({ type: 'varchar', length: 40, nullable: true })
  additional_details?: string | undefined | null;

  @Column({
    type: 'enum',
    enum: UserType,
    default: UserType.COMPRADOR,
  })
  account_type: UserType;

  @CreateDateColumn({ type: 'date' })
  createdAt?: Date | string;

  @UpdateDateColumn({ type: 'date' })
  updatedAt?: Date | string;

  @DeleteDateColumn({ type: 'date' })
  deletedAt?: Date | string;

  @Column({type:'varchar', nullable:true})
  reset_token?: string | null

  @OneToMany(() => Ad, (ad) => ad.user, {
    onDelete: 'CASCADE',
  })
  ads: Ad[];

  @OneToMany(() => Comment, (comment) => comment.user, {
    onDelete: 'CASCADE',
  })
  comments: Comment[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (this.password) {
      const isHashed: number = getRounds(this.password);
      if (!isHashed) {
        this.password = await hash(this.password, 10);
      }
    }
  }
}
