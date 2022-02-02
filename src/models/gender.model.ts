import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateGenderDTO {
    @IsString()
    @ApiProperty()
    gender: string;
}

export class CreateGenderBody {
    @ApiProperty()
    gender: CreateGenderDTO;
}

export class UpdateGenderDTO {
    @ApiProperty()
    id: number;

    @IsString()
    @ApiProperty()
    gender: string;
}

export class UpdateGenderBody {
    @ApiProperty()
    gender: UpdateGenderDTO;
}

export interface FindAllQuery {
    limit?: number;
    offset?: number;
}

export interface GenderResponse {
    gender: string;
    createdBy: number;
    createdAt: Date;
    modifiedBy: number | null;
    modifiedAt: Date | null;
}