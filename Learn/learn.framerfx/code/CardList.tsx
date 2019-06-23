import * as React from 'react'
import {
	FrameProps,
	ScrollProps,
	Stack,
	Scroll,
	addPropertyControls,
	ControlType,
} from 'framer'
import { Card } from './Card'
import { Text } from './Text'

type CardItem = Partial<FrameProps> &
	Partial<{
		overlay: boolean
		color: string
		title: string
		image: string
		body: string
		header: string
		footer: string
		autosize: boolean
		favorite: boolean
		isFavorite: boolean
		onTap: () => void
		onFavoriteChange: (favorite: boolean) => void
	}>

type Props = Partial<ScrollProps> & {
	cards: CardItem[]
	emptyText?: string
}

export function CardList(props: Props) {
	const { cards, emptyText, ...rest } = props

	const contentHeight = cards.reduce(
		(acc, cur) => acc + ((cur.height as number) || 320) + 16,
		16 + 16 + 8
	)

	return (
		<Scroll {...rest} contentHeight={contentHeight}>
			<Stack
				width="100%"
				height={contentHeight}
				direction="vertical"
				gap={16}
				padding={16}
				background="none"
			>
				{cards.length > 0 ? (
					cards.map((card, index) => {
						return <Card key={`card_${index}`} width="1fr" {...card} />
					})
				) : (
					<Text height={128} width="1fr" type="body" text={emptyText} />
				)}
			</Stack>
		</Scroll>
	)
}

CardList.defaultProps = {
	width: 320,
	height: 520,
	cards: [],
	emptyText: 'Nothing to see here.',
}

addPropertyControls(CardList, {
	emptyText: {
		title: 'Empty Text',
		type: ControlType.String,
		defaultValue: 'Nothing to see here.',
	},
})
