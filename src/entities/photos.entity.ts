import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Ad } from "./ads.entity";

@Entity("photos")
export class Photo {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  photo_url: string;

  @ManyToOne(() => Ad, (ad) => ad.photos)
  ad: Ad;
}
