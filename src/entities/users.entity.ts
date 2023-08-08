import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ad } from "./ads.entity";
import { Comment } from "./comments.entity";

export enum UserType {
  ANUNCIANTE = "anunciante",
  COMPRADOR = "comprador",
}

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  CPF: string;

  @Column()
  mobile: string;

  @Column()
  birth_date: Date;

  @Column()
  description: string;

  @Column()
  ZIP_code: number;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  additional_details: string;

  @Column({
    type: "enum",
    enum: UserType,
    default: UserType.COMPRADOR,
  })
  account_type: UserType;

  @OneToMany(() => Ad, (ad) => ad.user, {
    onDelete: "CASCADE",
  })
  ads: Ad[];

  @OneToMany(() => Comment, (comment) => comment.user, {
    onDelete: "CASCADE",
  })
  comments: Comment[];
}
