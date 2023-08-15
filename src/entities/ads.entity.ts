import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./users.entity";
import { Comment } from "./comments.entity";
import { Photo } from "./photos.entity";

export enum FuelType {
  GASOLINA = "gasolina",
  ALCOOL = "alcool",
}

@Entity("ads")
export class Ad {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column({ type: "date" })
  year: Date | string;

  @Column({
    type: "enum",
    enum: FuelType,
    default: FuelType.GASOLINA,
  })
  fuel: FuelType;

  @Column()
  kilometers: number;

  @Column()
  color: string;

  @Column({ default: false })
  good_deal: boolean;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column({ default: false })
  published: boolean;

  @OneToMany(() => Comment, (comment) => comment.ad)
  comments: Comment[];

  @OneToMany(() => Photo, (photos) => photos.ad)
  photos: Photo[];

  @ManyToOne(() => User, (user) => user.ads)
  user: User;
}
