import { useQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'

import Skeleton from '@shared/Skeleton'
import Spacing from '@shared/Spacing'
import Text from '@shared/Text'

function Review() {
    const { ref, inView } = useInView({
        triggerOnce: true,
    })

    const { data = [], isLoading } = useQuery<string[]>({
        queryKey: ['review'],
        queryFn: () =>
            new Promise<string[]>((resolve) => {
                setTimeout(() => {
                    resolve(['너무 좋아요', '꼭 신청하세요 !!'])
                }, 2000)
            }),
        enabled: inView,
    })

    return (
        <div
            ref={ref}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                marginTop: '2px',
            }}
        >
            {isLoading ? (
                <>
                    <Skeleton width={30} height={10} />
                    <Spacing size={3} />
                    <Skeleton width={30} height={10} />
                </>
            ) : (
                data.map((review) => (
                    <div key={review} style={{ display: 'flex' }}>
                        <Text typography="t6">{review}</Text>
                        <Text typography="t7" style={{ marginLeft: 'auto' }}>
                            2025-05-22
                        </Text>
                    </div>
                ))
            )}
        </div>
    )
}

export default Review
