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
  senha: string;

  @Column()
  CPF: string;

  @Column()
  celular: string;

  @Column()
  data_nascimento: Date;

  @Column()
  descricao: string;

  @Column()
  CEP: number;

  @Column()
  estado: string;

  @Column()
  cidade: string;

  @Column()
  rua: string;

  @Column()
  numero: string;

  @Column()
  complemento: string;

  @Column({
    type: "enum",
    enum: UserType,
    default: UserType.COMPRADOR,
  })
  tipo_de_conta: UserType;

  @OneToMany(() => Ad, (ad) => ad.user, {
    onDelete: "CASCADE",
  })
  ads: Ad[];

  @OneToMany(() => Comment, (comment) => comment.user, {
    onDelete: "CASCADE",
  })
  comments: Comment[];
}
