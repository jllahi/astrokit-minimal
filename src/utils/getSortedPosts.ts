import postFilter from '@/utils/postFilter'
import type { CollectionEntry } from 'astro:content'

const getSortedPosts = (posts: CollectionEntry<'posts'>[]) => {
	return posts
		.filter(postFilter)
		.sort(
			(a, b) =>
				Math.floor(new Date(b.data.date ?? b.data.date).getTime() / 1000) -
				Math.floor(new Date(a.data.date ?? a.data.date).getTime() / 1000)
		)
}

export default getSortedPosts
