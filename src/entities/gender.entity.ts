import { classToPlain } from 'class-transformer';
import { GenderResponse } from 'src/models/gender.model';
import { Column, Entity } from "typeorm";
import { AbstractEntity } from "./abstract-entity";

@Entity('gender')
export class GenderEntity extends AbstractEntity {
    @Column()
    gender: string;

    @Column()
    createdBy: number;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    modifiedBy: number | null;

    @Column({ nullable: true })
    modifiedAt: Date | null;

    toJSON() {
        return <GenderResponse>classToPlain(this);
    }
}