import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { SITE } from '@/data/config'
import { navMenu } from '@/data/navigation'
import { AlignRight } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

export default function MenuMobile() {
	const [open, setOpen] = React.useState(false)

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="outline" className="p-3">
					Menu <AlignRight className="ml-2 size-6" />
					<span className="sr-only">Toggle Menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent className="w-full">
				<SheetHeader className="text-left">
					<SheetTitle className="text-base font-black uppercase">{SITE.title}</SheetTitle>
					{/* <SheetDescription className="w-3/4">{SITE.description}</SheetDescription> */}
				</SheetHeader>
				<Separator className="mt-4" />
				{navMenu && navMenu.mainNav && (
					<nav className="grid gap-4 py-4">
						<ul className="text-2xl font-black uppercase">
							{navMenu.mainNav.map(
								(item) =>
									item.href && (
										<li key={item.title}>
											<Button asChild variant="ghost">
												<a href={item.href}>{item.title}</a>
											</Button>
										</li>
									)
							)}
						</ul>
					</nav>
				)}
			</SheetContent>
		</Sheet>
	)
}
