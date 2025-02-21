import styled from "@emotion/styled";

export const Container = styled.div`
    font-size: 1.25rem;
`

export const Section = styled.section`
    min-height: 100vh;
    padding: 7.5vh 7.5%;
`

export const ProfileSection = styled(Section)`
    display: flex;
    gap: 7.5rem;
`

export const LeftContent = styled.div`
    position: relative;
    flex: 1;
`

export const ProfileContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    position: relative;
    height: 55%;
    border-bottom: 1px solid #333;
`

export const ProfileImageWrapper = styled.div`
    position: relative;
    width: 17.5rem;
    padding: 0 2rem;
    aspect-ratio: 0.8;
`

export const NameContainer = styled.div`
    padding: 0.75rem 0;
`

export const Name = styled.div`
    font-size: 4.5rem;
    font-weight: 800;
`

export const JobPart = styled.div`
    color: #999999;
    font-size: 1.5rem;
    font-weight: 400;
`

export const IntroductionContainer = styled.div`
    padding-top: 5rem;
    height: 45%;
`

export const Comment = styled.div`
    padding-bottom: 3rem;
    font-size: 1.75rem;
    font-weight: 700;
    color: #3737d6;
`

export const Introduction = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1.25rem;
`

export const RightContent = styled.div`
    flex: 1;
`

export const ExperienceContainer = styled.article`
    margin-bottom: 7.5rem;
`

export const ExperienceItem = styled.div`
    display: flex;
    gap: 3rem;
`

export const ExperienceInfo = styled.div`
    width: 25rem;
`

export const ExperienceName = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`

export const ExperienceDesc = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.25rem;
    list-style: square;
`

export const ExperienceDate = styled.div`
    font-size: 0.95rem;
    color: #555;
`

export const Title = styled.div`
    margin-bottom: 2rem;
    font-size: 3rem;
    font-weight: 800;
`

export const AwardTitle = styled(Title)`
    font-size: 2.5rem;
`

export const AwardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const AwardItem = styled.div`
    display: flex;
    gap: 3rem;
`

export const AwardInfo = styled.div`
    width: 25rem;
`

export const AwardName = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`

export const AwardDate = styled.div`
    font-size: 0.95rem;
    color: #555;
`

export const AwardDesc = styled.div`
    padding-top: 0.25rem;
`