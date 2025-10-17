import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class InfoHome {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    imageUrl: string;

    @CreateDateColumn()
    createdAt: Date;

    
}
