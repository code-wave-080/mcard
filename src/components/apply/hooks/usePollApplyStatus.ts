import { useQuery } from '@tanstack/react-query'

import { APPLY_STATUS } from '@models/apply'
import { useEffect } from 'react'

interface usePollApplyStatusProps {
    onSuccess: () => void
    onError: () => void
    enabled: boolean
}

function usePollApplyStatus({
    enabled,
    onSuccess,
    onError,
}: usePollApplyStatusProps) {
    return (() => {
        const {
            data: status,
            isError,
        } = useQuery({
            queryKey: ['applyStatus'],
            queryFn: () => getApplyStatus(),
            enabled,
            refetchInterval: 2000,
            staleTime: 0,
        })

        useEffect(() => {
            if (status === APPLY_STATUS.COMPLETE) {
                onSuccess()
            }
        }, [status, onSuccess])

        useEffect(() => {
            if (isError) {
                onError()
            }
        }, [isError, onError])

        return { status }
    })()
}

function getApplyStatus() {
    const values = [
        APPLY_STATUS.REDAY,
        APPLY_STATUS.PROGRESS,
        APPLY_STATUS.COMPLETE,
        APPLY_STATUS.REJECT,
    ]

    const status = values[Math.floor(Math.random() * values.length)]

    if (status === APPLY_STATUS.REJECT) {
        throw new Error('카드 발급에 실패했습니다.')
    }

    return status
}

export default usePollApplyStatus
