import { Like, Newsletter, db } from 'astro:db'

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Like).values([{ postSlug: 'lorem-ipsum-dolor-sit-amet', likesCount: 1 }])
	await db.insert(Newsletter).values([{ email: 'johndoe@example.com' }])
}
