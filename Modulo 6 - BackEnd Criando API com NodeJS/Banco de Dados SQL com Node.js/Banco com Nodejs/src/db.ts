import { Pool } from 'pg';

const connectionString = 'postgres://egqktkwh:rC9qXLWBIIlK_5SsvfVUYWMJ3jU7zy3v@kesavan.db.elephantsql.com/egqktkwh';

const db = new Pool({ connectionString });

export default db;