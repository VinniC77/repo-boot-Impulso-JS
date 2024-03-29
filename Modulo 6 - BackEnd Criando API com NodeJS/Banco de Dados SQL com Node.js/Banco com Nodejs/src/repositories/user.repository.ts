import { Script } from 'vm';
import db from '../db';
import User from '../models/user.model';

class UserRepository {

    async findAllUsers(): Promise<User[]> {
        const query = `
            SELECT uuid, username
            FROM application_user
        `;

        const { rows } = await db.query<User>(query)
        return rows || [];
    }

    async findById(uuid: string): Promise<User> {
        const query = `
            SELECT uuid, username
            FROM application_user
            WHERE uudi = $1
        `;

        const values = [uuid];
        const { rows } = await db.query<User>(query, values)
        const [ user ] = rows;

        return user;
    }

    async create(user: User): Promise<string> {
        const script = `
            INSERT INTO application_user (
                username,
                password
            )
            VALUES ($1, crypt($2, 'my_salt'))
            RETURNING uuid
        `;

        const values = [user.username, user.password];

        const { rows } = await db.query<{ uuid: string }>(script, values)
        const [newUser] = rows;
        return newUser.uuid;
    }

    async update(user: User): Promise<string> {
        const script = `
            UPDATE application_user
            SET 
                username = $1,
                password = $2
            WHERE uuid = $3
        `;

        const values = [user.username, user.password];

        const { rows } = await db.query(script, values)
        const [newUser] = rows;
        return newUser.uuid;
    }

    async remove(uuid: string): Promise<void> {
        const cript = `
            DELETE
            FROM
            application_user
            WHERE uuid = $1
        `;

        const values = [uuid];
        await db.query(cript, values)
    }
}

export default new UserRepository();