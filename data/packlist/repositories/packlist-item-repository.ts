import { StringService } from "@/library/core/services/string-service";
import { PacklistItem } from "../entities/packlist-item";
import { PacklistItemCreatePayload } from "../payloads/packlist-item-create-payload";
import { PacklistStorage } from "@/infrastructure/packlist-storage/types/packlist-storage";
import { PacklistSqlite } from "@/data/shared/facades/sqlite";

export class PacklistItemRepository {
    private storage: PacklistStorage;
    private table: string;

    constructor()
    {
        this.storage = new PacklistSqlite();
        this.table = 'packlist_item';
    }

    // repository handles id, data access, valiation on data level
    async create(payload: PacklistItemCreatePayload)
    {
        const createdAt = new Date().toISOString();
        const stringService = new StringService();

        // todo validation
        const packlistItem: PacklistItem = {
            id: stringService.generateUUID(),
            name: payload.name,
            packlistId: payload.packlistId,
            createdAt,    
            updatedAt: createdAt
        };

        this.storage.write(this.table, packlistItem);

        return packlistItem;
    }

    async find(id: string): Promise<PacklistItem>
    {
        return this.storage.read(this.table, id);
    }
}