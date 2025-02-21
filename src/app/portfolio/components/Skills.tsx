import Skill from './Skill';
import { 
    Level, 
    LevelDesc, 
    LevelLegend, 
    LevelWrapper, 
    SkillRow, 
    SkillsContainer,
    SkillSection, 
    SkillType, 
    Title } from './Skills.styles';



export default function Skills() {
    return (
        <div>
            <Title>SKILL</Title>
            <LevelLegend>
                <LevelWrapper>
                    <Level level={2} />
                    <Level level={1} />
                    <Level level={0} />
                    <LevelDesc>능숙</LevelDesc>
                </LevelWrapper>
                <LevelWrapper>
                    <Level level={2} />
                    <Level level={1} />
                    <LevelDesc>숙련</LevelDesc>
                </LevelWrapper>
                <LevelWrapper>
                    <Level level={0} />
                    <LevelDesc>경험</LevelDesc>
                </LevelWrapper>
            </LevelLegend>
            <SkillRow>
                <SkillSection>
                    <SkillType>Language</SkillType>
                    <SkillsContainer>
                        <Skill imageSrc='/icons/javaIcon.webp' level={2} />
                        <Skill imageSrc='/icons/javascriptIcon.webp' level={1} />
                        <Skill imageSrc='/icons/cppIcon.webp' level={1} />
                        <Skill imageSrc='/icons/pythonIcon.webp' level={1} />
                    </SkillsContainer>
                </SkillSection>
                <SkillSection>
                    <SkillType>Frontend</SkillType>
                    <SkillsContainer>
                        <Skill imageSrc='/icons/javascriptIcon.webp' level={2} />
                        <Skill imageSrc='/icons/javascriptIcon.webp' level={2} />
                        <Skill imageSrc='/icons/javascriptIcon.webp' level={1} />
                    </SkillsContainer>
                </SkillSection>
            </SkillRow>
            <SkillRow>
                <SkillSection>
                    <SkillType>Version Control</SkillType>
                    <SkillsContainer>
                        <Skill imageSrc='/icons/javascriptIcon.webp' level={1} />
                        <Skill imageSrc='/icons/javascriptIcon.webp' level={1} />
                        <Skill imageSrc='/icons/javascriptIcon.webp' level={1} />
                    </SkillsContainer>
                </SkillSection>
                <SkillSection>
                    <SkillType>Communication</SkillType>
                    <SkillsContainer>
                        <Skill imageSrc='/icons/javascriptIcon.webp' level={1} />
                        <Skill imageSrc='/icons/javascriptIcon.webp' level={0} />
                    </SkillsContainer>
                </SkillSection>
            </SkillRow>
        </div>
    );
}