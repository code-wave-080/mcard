import { InfiniteData, useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { getCards } from '@remote/card'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useNavigate } from 'react-router-dom'

import ListRow from '@shared/ListRow'
import Badge from '@shared/Badge'
import { useCallback } from 'react'
import { QueryDocumentSnapshot } from 'firebase/firestore'
import { Card } from '@models/card'

type Cursor = QueryDocumentSnapshot<Card> | null

export type CardsPage = {
    items: Array<{
        id: string
        name: string
        corpName: string
        tags: string[]
        benefit: string[]
        promotion?: { title: string; terms: string }
        payback?: string
    }>
    lastVisible: QueryDocumentSnapshot<Card> | null
}

function CardList() {
    const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
        useSuspenseInfiniteQuery<CardsPage, Error, InfiniteData<CardsPage, Cursor>, [string], Cursor>(
            {
                queryKey: ['cards'],
                queryFn: ({ pageParam }) => getCards(pageParam),
                initialPageParam: null as Cursor,
                getNextPageParam: (lastPage) =>
                    lastPage.lastVisible ?? undefined,
            },
        )

    const navigate = useNavigate()

    const loadMore = useCallback(() => {
        if (!hasNextPage || isFetchingNextPage) {
            return
        }

        fetchNextPage()
    }, [fetchNextPage, hasNextPage, isFetchingNextPage])

    if (!data) {
        return null
    }

    const cards = data.pages.flatMap((p) => p.items)

    return (
        <div>
            <InfiniteScroll
                dataLength={cards.length}
                hasMore={hasNextPage}
                loader={<ListRow.Skeleton />}
                next={loadMore}
                scrollThreshold="100px"
            >
                <ul>
                    {cards.map((card, index) => (
                        <ListRow
                            key={card.id}
                            contents={
                                <ListRow.Texts
                                    title={`${index + 1}위`}
                                    subTitle={card.name}
                                />
                            }
                            right={
                                card.payback ? (
                                    <Badge label={card.payback} />
                                ) : null
                            }
                            withArrow
                            onClick={() => navigate(`/card/${card.id}`)}
                        />
                    ))}
                </ul>
            </InfiniteScroll>
        </div>
    )
}

export default CardList
