import Image from 'next/image';
import { Level, LevelWrapper, SkillContainer, SkillIconWrapper, SkillsContainer } from './Skill.styles';

interface SkillProps {
    imageSrc: string;
    level: 0 | 1 | 2;
}

export default function Skill({imageSrc, level}: SkillProps) {
    return (
        <SkillsContainer>
            <SkillContainer>
                <SkillIconWrapper>
                    <Image alt='' src={imageSrc} fill />
                </SkillIconWrapper>
                <LevelWrapper>
                    {[...Array(level + 1)].map((_, index) => (
                        <Level key={index} level={level - index as 0 | 1 | 2} />
                    ))}
                </LevelWrapper>
            </SkillContainer>
        </SkillsContainer>
    )
}

