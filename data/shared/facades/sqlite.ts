import { Sqlite } from "@/infrastructure/sqlite/facades/sqlite";

export class PacklistSqlite extends Sqlite
{
    constructor()
    {
        super();
        this.init();
    }

    private init()
    {
        this.sqlite.prepare(`
        CREATE TABLE IF NOT EXISTS packlists (
          id STRING PRIMARY KEY,
          name TEXT NOT NULL,
        )
      `).run();

      this.sqlite.prepare(`
      CREATE TABLE IF NOT EXISTS packlist_items (
        id STRING PRIMARY KEY,
        name TEXT NOT NULL,
        packlistId: string,
      )
    `).run();
    }
}