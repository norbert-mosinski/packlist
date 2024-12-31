import { StringService } from "@/library/core/services/string-service";
import { Packlist } from "../entities/packlist";
import { PacklistCreatePayload } from "../payloads/packlist-create-payload";
import { Table } from "@/infrastructure/local-storage-db/facades/table";

export class PacklistRepository {
    private table: Table;
    constructor()
    {
        this.table = new Table('packlist');
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

        this.table.write(packlist);

        return packlist;
    }

    async find(id: string): Promise<Packlist>
    {
        return this.table.read(id);
    }
}