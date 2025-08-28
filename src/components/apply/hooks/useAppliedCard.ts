import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query'

import { getAppliedCard } from '@remote/apply'
import { ApplyValues } from '@models/apply'

type AppliedData = ApplyValues | null

export type AppliedQueryOptions = Omit<
    UseQueryOptions<AppliedData, Error, AppliedData, QueryKey>,
    'onSuccess' | 'onError' | 'onSettled' | 'suspense' | 'queryKey' | 'queryFn'
>

function useAppliedCard({
    userId,
    cardId,
    options,
}: {
    userId: string
    cardId: string
    options?: AppliedQueryOptions
}) {
    return useQuery({
        queryKey: ['applied', userId, cardId],
        queryFn: () => getAppliedCard({ userId, cardId }),
        ...options,
    })
}

export default useAppliedCard
