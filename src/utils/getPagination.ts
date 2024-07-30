import { siteConfig } from '@/data/config'
import getPageNumbers from '@/utils/getPageNumbers'

interface GetPaginationProps<T> {
	posts: T
	page: string | number
	isIndex?: boolean
}

const getPagination = <T>({
	posts,
	page,
	isIndex = false,
}: GetPaginationProps<T[]>) => {
	const totalPagesArray = getPageNumbers(posts.length)
	const totalPages = totalPagesArray.length

	const currentPage = isIndex
		? 1
		: page && !isNaN(Number(page)) && totalPagesArray.includes(Number(page))
			? Number(page)
			: 0

	const lastPost = isIndex
		? siteConfig.pagination
		: currentPage * siteConfig.pagination
	const startPost = isIndex ? 0 : lastPost - siteConfig.pagination
	const paginatedPosts = posts.slice(startPost, lastPost)

	return {
		totalPages,
		currentPage,
		paginatedPosts,
	}
}

export default getPagination
