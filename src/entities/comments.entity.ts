import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from "typeorm";
import { User } from "./users.entity";
import { Ad } from "./ads.entity";

@Entity("comments")
export class Comment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  comment_text: string;

  @CreateDateColumn()
  created_at: Timestamp;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;

  @ManyToOne(() => Ad, (ad) => ad.comments)
  ad: Ad;
}
