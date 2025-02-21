import styled from "@emotion/styled";

export const Title = styled.div`
    margin-bottom: 0.5rem;
    font-size: 4rem;
    font-weight: 800;
`

export const LevelLegend = styled.div`
    display: flex;
    gap: 3rem;
    margin-bottom: 2.5rem;
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

export const LevelDesc = styled.div`
    margin-left: 0.25rem;
    color: #555;
    font-size: 0.9rem;
`

export const SkillRow = styled.div`
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
`

export const SkillSection = styled.div`
    flex: 1;
`

export const SkillType = styled.div`
    margin-bottom: 1.25rem;
    color: #333;
    font-size: 1.25rem;
    font-weight: 600;
`

export const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 2.5rem;
    margin-bottom: 0.25rem;
`