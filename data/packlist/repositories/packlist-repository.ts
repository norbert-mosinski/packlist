import { StringService } from "@/library/core/services/string-service";
import { Packlist } from "../entities/packlist";
import { PacklistCreatePayload } from "../payloads/packlist-create-payload";
import { PacklistStorage } from "@/infrastructure/packlist-storage/types/packlist-storage";
import { PacklistSqlite } from "@/data/shared/facades/sqlite";

export class PacklistRepository {
    private storage: PacklistStorage;
    private table: string;

    constructor()
    {
        this.table = 'packlist';
        this.storage = new PacklistSqlite();

    }

    // repository handles id, data access, valiation on data level
    async create(payload: PacklistCreatePayload)
    {
        const createdAt = new Date().toISOString();
        const stringService = new StringService();

        // todo validation
        const packlist: Packlist = {
            id: stringService.generateUUID(),
            name: payload.name,
            createdAt,    
            updatedAt: createdAt
        };

        this.storage.write(this.table, packlist);

        return packlist;
    }

    async find(id: string): Promise<Packlist | null>
    {
        // todo validation
        return this.storage.read(this.table, id);
    }

    async list(): Promise<Packlist[]>
    {
        // todo validation
        return this.storage.read(this.table);
    }
}