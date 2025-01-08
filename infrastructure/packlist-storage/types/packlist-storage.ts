import { PacklistStorageEntry } from "./packlist-storage-entry";

export interface PacklistStorage{
    write(table: string, entry: PacklistStorageEntry): void;

    read<MaybeId extends string>(table: string, id?: MaybeId): MaybeId extends string ? (PacklistStorageEntry | null) : PacklistStorageEntry[];
}