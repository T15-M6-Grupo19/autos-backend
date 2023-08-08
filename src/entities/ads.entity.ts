import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./users.entity";
import { Comment } from "./comments.entity";
import { Photo } from "./fotos.entity";

export enum Combustivel {
  GASOLINA = "gasolina",
  ALCOOL = "alcool",
}

@Entity("ads")
export class Ad {
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

  @OneToMany(() => Comment, (comment) => comment.ad)
  comments: Comment[];

  @OneToMany(() => Photo, (photos) => photos.ad)
  photos: Photo[];

  @ManyToOne(() => User, (user) => user.ads)
  user: User;
}
