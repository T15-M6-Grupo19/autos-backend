import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from "typeorm";
import { User } from "./users.entity";
import { Anuncio } from "./anuncios.entity";

@Entity("comentarios")
export class Comentario {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  comment_text: string;

  @CreateDateColumn()
  created_at: Timestamp;

  @ManyToOne(() => User, (user) => user.comentarios)
  user: User;

  @ManyToOne(() => Anuncio, (anuncio) => anuncio.comentarios)
  anuncio: Anuncio;
}
