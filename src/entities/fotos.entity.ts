import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Anuncio } from "./anuncios.entity";

@Entity("fotos")
export class Foto {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  foto_url: string;

  @ManyToOne(() => Anuncio, (anuncio) => anuncio.fotos)
  anuncio: Anuncio;
}
