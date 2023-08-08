import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./users.entity";
import { Comentario } from "./comments.entity";
import { Foto } from "./fotos.entity";

export enum Combustivel {
  GASOLINA = "gasolina",
  ALCOOL = "alcool",
}

@Entity("anuncios")
export class Anuncio {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  marca: string;

  @Column()
  modelo: string;

  @Column()
  ano: Date;

  @Column({
    type: "enum",
    enum: Combustivel,
    default: Combustivel.GASOLINA,
  })
  combustivel: Combustivel;

  @Column()
  quilometragem: number;

  @Column()
  cor: string;

  @Column({ default: false })
  bom_negocio: boolean;

  @Column()
  preco: number;

  @Column()
  descricao: string;

  @Column({ default: false })
  publicado: boolean;

  @OneToMany(() => Comentario, (comentario) => comentario.anuncio)
  comentarios: Comentario[];

  @OneToMany(() => Foto, (fotos) => fotos.anuncio)
  fotos: Foto[];

  @ManyToOne(() => User, (user) => user.anuncios)
  user: User;
}
