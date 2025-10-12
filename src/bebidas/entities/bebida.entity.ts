import { Categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bebida {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;
    @Column()
    precio: number;
    @Column()
    stock: number;
    @Column()
    imagen: string
    @ManyToOne(()=> Categoria, (categoria)=> categoria.bebidas)
    categoria: Categoria;

}
