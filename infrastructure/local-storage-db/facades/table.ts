export class Table
{
    constructor(private tableName: string)
    {
    }

    private key(id: string)
    {
        return this.tableName + '-' + id;
    }

    write(entry: Record<string | symbol | number, unknown> & {id: string})
    {
        const key = this.key(entry.id);
        localStorage.setItem(key, JSON.stringify(entry));
    }

    read(id: string)
    {
        return JSON.parse(this.key(id));
    }
}