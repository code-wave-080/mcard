import { forwardRef, SelectHTMLAttributes } from 'react'

import Flex from './Flex'
import Text from './Text'
import styled from '@emotion/styled'
import { colors } from '@styles/colorPalette'

import { Option } from '@models/apply'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string
    options: Option[]
    placeholder?: string
}

const SelectWrapper = styled.div`
    position: relative;
    width: 100%;
`

const BaseSelect = styled.select`
    height: 52px;
    background-color: ${colors.grey};
    border: none;
    border-radius: 16px;
    padding: 0 16px;
    cursor: pointer;
    /* 기본 화살표 제거 */
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    &:required:invalid {
        color: #c0c4c7;
    }
`

const StyledChevron = styled(ChevronDown)`
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    pointer-events: none;
    color: currentColor;
`

function ChevronDown() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    )
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
    { label, options, placeholder, value, ...props },
    ref,
) {
    return (
        <Flex direction="column">
            {label ? (
                <Text
                    typography="t7"
                    color="black"
                    display="inline-block"
                    style={{ marginBottom: 6 }}
                >
                    {label}
                </Text>
            ) : null}
            <SelectWrapper>
                <BaseSelect required={true} ref={ref} value={value} {...props}>
                    <option disabled={true} hidden={true} value="">
                        {placeholder}
                    </option>
                    {options.map(({ label, value }) => (
                        <option key={label} value={value}>
                            {label}
                        </option>
                    ))}
                </BaseSelect>
                <StyledChevron />
            </SelectWrapper>
        </Flex>
    )
})

export default Select
