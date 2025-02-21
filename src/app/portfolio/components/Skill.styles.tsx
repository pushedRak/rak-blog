import styled from "@emotion/styled";

export const SkillsContainer = styled.div`
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
`

export const SkillContainer = styled.div`
    width: 4rem;
`

export const SkillIconWrapper = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    overflow: hidden;
`

export const LevelWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`

export const Level = styled.div<{level: 0 | 1 | 2}>`
    width: 0.8rem;
    height: 0.8rem;
    background-color: ${props => ['#7777d6', '#5757d6', '#3737d6'][props.level]};
    border-radius: 100%;
`