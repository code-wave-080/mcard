import { parse } from 'qs'
import styled from '@emotion/styled'
import Flex from '@shared/Flex'
import Text from '@shared/Text'
import FixedBottomButton from '@shared/FixedBottomButton'

const Container = styled(Flex)`
    width: 100%;
    height: 100vh;
    text-align: center;
`

const IconWrapper = styled.div`
    margin-bottom: 24px;
    svg {
        width: 120px;
        height: 120px;
    }
`

const ContentWrapper = styled(Flex)`
    flex: 1;
    margin-top: -120px;
`

function CheckIcon() {
    return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="#36B37E" />
            <path
                d="M32 18L21 29L16 24"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function CrossIcon() {
    return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="#FF5252" />
            <path
                d="M30 18L18 30M18 18L30 30"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function ApplyDone() {
    const { success } = parse(window.location.search, {
        ignoreQueryPrefix: true,
    }) as { success: string }

    const isSuccess = success === 'true'

    return (
        <Container direction="column">
            <ContentWrapper direction="column" align="center" justify="center">
                <IconWrapper>
                    {isSuccess ? <CheckIcon /> : <CrossIcon />}
                </IconWrapper>
                <Text typography="t4" bold>
                    {isSuccess
                        ? '카드가 발급되었습니다.'
                        : '카드 발급에 실패했습니다.'}
                </Text>
            </ContentWrapper>

            <FixedBottomButton
                label="확인"
                onClick={() => {
                    window.history.back()
                }}
            />
        </Container>
    )
}

export default ApplyDone
