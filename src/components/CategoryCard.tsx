import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { SITE } from '@/data/config'
import type { CollectionEntry } from 'astro:content'
import { buttonVariants } from './ui/button'

// import { SITE } from '@/data/config'
// import type { CollectionEntry } from 'astro:content'

// interface Props {
// 	category: CollectionEntry<'categories'>
// }
// const { category } = Astro.props

export default function CategoryCard({ category }: { category: CollectionEntry<'categories'> }) {
	return (
		<HoverCard>
			<HoverCardTrigger asChild>
				<a
					className={buttonVariants({ variant: 'outline', size: 'xs' })}
					href={`/${SITE.urls.category}/${category.slug}`}
				>
					{category.data.title}
				</a>
			</HoverCardTrigger>
			<HoverCardContent>
				<div className="flex justify-between space-x-4">
					<Avatar>
						<AvatarImage src={`/categories/${category.slug}.png`} />
						<AvatarFallback>{category.slug.slice(0, 1)}</AvatarFallback>
					</Avatar>
					<div className="space-y-1">
						<h4 className="text-sm font-semibold">{category.data.title}</h4>
						<p className="text-sm text-muted-foreground">{category.data.description}</p>
						{/* <div className="flex items-center pt-2">
							<span className="text-xs text-muted-foreground">Joined December 2021</span>
						</div> */}
					</div>
				</div>
				{/* <div className="space-y-1">
					<h4 className="text-sm font-semibold">{category.data.title}</h4>
					<p className="text-sm">{category.data.description}</p>
					<div className="flex items-center pt-2">
						<span className="text-xs text-muted-foreground">{category.data.description}</span>
					</div>
				</div> */}
			</HoverCardContent>
		</HoverCard>
	)
}
