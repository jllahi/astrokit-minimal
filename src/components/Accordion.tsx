import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { FAQ } from '@/data/faq'

export default function AccordionDemo() {
	return (
		<Accordion type="single" collapsible>
			{FAQ.map((faq, index) => (
				<AccordionItem value={`item-${index}`} key={`item-${index}`}>
					<AccordionTrigger>{faq.trigger}</AccordionTrigger>
					<AccordionContent>{faq.content}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
