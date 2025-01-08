import { PacklistStorage } from '@/infrastructure/packlist-storage/types/packlist-storage';
import { PacklistStorageEntry } from '@/infrastructure/packlist-storage/types/packlist-storage-entry';
import sqlite3 from 'sqlite3';

const dbFile = __dirname + '/packlist.sqlite';

// Open or create the database
const sqlite = new sqlite3.Database(dbFile);

export class Sqlite implements PacklistStorage
{
    protected sqlite: typeof sqlite;

    constructor()
    {
        this.sqlite = sqlite;
    }

    write(table: string, entry: PacklistStorageEntry): void {
        throw new Error('Method not implemented.');
    }
    read<MaybeId extends string>(table: string, id?: MaybeId | undefined): MaybeId extends string ? PacklistStorageEntry | null : PacklistStorageEntry[] {
        const data = this.sqlite.all('SELECT * FROM ' + table, []);

        return data;
    }

}


// TODO remove
// Initialize the database schema (create table if it doesn't exist)
function initializeDB() {
  db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      age INTEGER
    )
  `).run();
}

// Insert a new user
function insertUser(name: string, age: number) {
  const insert = db.prepare('INSERT INTO users (name, age) VALUES (?, ?)');
  insert.run(name, age);
}

// Get all users
function getUsers() {
  const stmt = db.prepare('SELECT * FROM users');
  return stmt.all();
}

// Example usage
function main() {
  // Initialize the database schema
  initializeDB();

  // Insert users
  insertUser('Alice', 25);
  insertUser('Bob', 30);

  // Fetch and log users
  const users = getUsers();
  console.log(users);
}
