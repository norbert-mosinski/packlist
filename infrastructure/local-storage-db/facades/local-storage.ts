import { PacklistStorage } from "@/infrastructure/packlist-storage/types/packlist-storage";
import { PacklistStorageEntry } from "@/infrastructure/packlist-storage/types/packlist-storage-entry";

export class LocalStorage implements PacklistStorage
{
    private key(table: string, id: string)
    {
        return table + '-' + id;
    }

    write(table: string, entry: PacklistStorageEntry)
    {
        const key = this.key(table, entry.id);
        localStorage.setItem(key, JSON.stringify(entry));
    }

    read<MaybeId extends string>(table: string, id?: MaybeId): MaybeId extends string ? (PacklistStorageEntry | null) : PacklistStorageEntry[]
    {
        if(typeof id === 'string')
        {
            const key = this.key(table, id);

            return this.readByKey(key);
        }
        
        const entries: PacklistStorageEntry[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if(key)
            {
                const maybeEntry = this.readByKey(key);
                if(maybeEntry)
                {
                    entries.push(maybeEntry);
                }
            }
          }

          return entries;
    }

    private readByKey(key: string): Entry | null
    {
        const entryString = localStorage.getItem(key);

        return !!entryString ? JSON.parse(entryString) : null;
    }
}