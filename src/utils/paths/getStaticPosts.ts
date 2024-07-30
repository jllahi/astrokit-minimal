import { siteConfig } from '@/data/config'
import { filterContent } from '@/utils/content'
import postFilter from '@/utils/postFilter'
import type { GetStaticPaths } from 'astro'
import { getCollection } from 'astro:content'

export const getStaticPosts: GetStaticPaths = async ({ paginate }) => {
	const posts = (await getCollection('posts')).filter(postFilter)
	const filteredPosts = filterContent(posts)

	return paginate(filteredPosts, { pageSize: siteConfig.pagination })
}
