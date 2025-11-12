import { Apartado } from "src/apartados/entities/apartado.entity";
import { DiaCata } from "src/dia-cata/entities/dia-cata.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
  @Column()
  status: number;

  @CreateDateColumn()
  CreatedAt: Date;
  @ManyToOne(() => DiaCata, (diaCata) => diaCata.usuarios)
  diaCata: DiaCata;
  @OneToMany(() => Apartado, (apartado) => apartado.usuarioID)
  apartados: Apartado[];
}
