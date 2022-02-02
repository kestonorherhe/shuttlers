import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsEmail, IsNumber, IsNumberString, IsString } from "class-validator";

export class CreateAppUserDTO {
    @IsString()
    @ApiProperty()
    firstName: string;

    @IsString()
    @ApiProperty()
    lastName: string;

    // @IsString()
    // @IsEmail()
    @ApiProperty()
    email: string;

    @IsNumberString()
    @ApiProperty()
    phone: string;

    // @IsString()
    @ApiProperty()
    username: string;

    @IsAlphanumeric()
    @ApiProperty()
    password: string;
}

export class CreateAppUserBody {
    @ApiProperty()
    appUser: CreateAppUserDTO;
}

export class UpdateAppUserDTO {
    @IsNumber()
    @ApiProperty()
    id: number;

    @IsString()
    @ApiProperty()
    firstName: string;

    @IsString()
    @ApiProperty()
    lastName: string;

    @IsString()
    @IsEmail()
    @ApiProperty()
    email: string;

    @IsNumberString()
    @ApiProperty()
    phone: string;

    // @IsString()
    // @ApiProperty()
    // username: string;

    @ApiProperty()
    modifiedAt: Date
}

export class UpdateAppUserBody {
    @ApiProperty()
    appUser: UpdateAppUserDTO;
}

export class UpdatePasswordDTO {
    @IsString()
    @ApiProperty()
    username: string;

    @IsString()
    @ApiProperty()
    password: string;

    @IsString()
    @ApiProperty()
    newPassword: string;
}

export class UpdatePasswordBody {
    @IsString()
    @ApiProperty()
    username: string;

    @IsString()
    @ApiProperty()
    password: string;

    @IsString()
    @ApiProperty()
    newPassword: string;
}

export class AdminUpdatePasswordDTO {
    @IsNumber()
    @ApiProperty()
    userId;

    // @IsString()
    // @ApiProperty()
    // username: string;

    // @IsString()
    // @ApiProperty()
    // password: string;

    @IsString()
    @ApiProperty()
    newPassword: string;
}

export class AdminUpdatePasswordBody {
    // @IsString()
    // @ApiProperty()
    // username: string;

    // @IsString()
    // @ApiProperty()
    // password: string;

    @IsString()
    @ApiProperty()
    newPassword: string;
}

export class ForgotPasswordDTO {
    @IsEmail()
    @ApiProperty()
    email: string;
}

export class ForgotPasswordBody {
    @IsEmail()
    @ApiProperty()
    email: string;
}

export interface FindAllQuery {
    limit?: number;
    offset?: number;
}

export interface AppUserResponse {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dob: Date;
    username: string;
    createdAt: Date;
    modifiedAt: Date | null;
}