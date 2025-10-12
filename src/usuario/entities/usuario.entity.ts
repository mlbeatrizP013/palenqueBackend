import { DiaCata } from "src/dia-cata/entities/dia-cata.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  telefono: string;

  @Column()
  genero: string;

  @CreateDateColumn()
  CreatedAt: Date;
  @ManyToOne(()=> DiaCata, (diaCata)=> diaCata.usuarios)
  diaCata: DiaCata;
}
