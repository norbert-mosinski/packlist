import { Entity } from "@/data/shared/types/entity";

export interface PacklistItem extends Entity
{
    name: string;
    packlistId: string;
}