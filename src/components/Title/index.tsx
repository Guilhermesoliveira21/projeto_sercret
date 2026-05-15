import styled from "styled-components"

type TitleProps = {
    title: string
}

export const Title = ({ title }: TitleProps) => {
    return (
        <>
            <div>
                <H2>{title}</H2>
            </div>
        </>
    )
}

const H2 = styled.h2`
    color: #FFECED;
    font-size: 1.6rem;

`;