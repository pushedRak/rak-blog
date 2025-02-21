'use client'

import Image from 'next/image';
import Skills from './Skills';
import { 
    AwardContainer, 
    AwardDate, 
    AwardDesc, 
    AwardInfo, 
    AwardItem, 
    AwardName, 
    AwardTitle, 
    Comment, 
    Container, 
    ExperienceContainer, 
    ExperienceDate, 
    ExperienceDesc, 
    ExperienceInfo, 
    ExperienceItem, 
    ExperienceName, 
    Introduction, 
    IntroductionContainer, 
    JobPart, 
    LeftContent, 
    Name, 
    NameContainer, 
    ProfileContainer, 
    ProfileImageWrapper,
    ProfileSection, 
    RightContent, 
    Section, 
    Title } from './PortfolioContent.styles';

export default function PortfolioContent() {
    return (
        <Container>
            <ProfileSection>
                <LeftContent>
                    <ProfileContainer>
                        <NameContainer>
                            <Name>손민락</Name>
                            <JobPart>Frontend Developer</JobPart>
                        </NameContainer>
                        <ProfileImageWrapper>
                            <Image alt='' src='/images/portfolioProfile.png' fill />
                        </ProfileImageWrapper>
                    </ProfileContainer>
                    <IntroductionContainer>
                        {/* 글꼴 다르게 */}
                        <Comment>사용자가 경험하는 모든 것에 집중하는 개발자</Comment>
                        <Introduction>
                            <span>저는 기술의 발전이 사용자의 삶을 편리하게 만드는 데 기여해야 한다고 믿습니다.</span>
                            <span>직관적이고 깔끔한 인터페이스를 통해 기술과 사람이 자연스럽게 연결되도록 돕고 싶습니다.</span>
                        </Introduction>
                    </IntroductionContainer>
                </LeftContent>
                <RightContent>
                    <Skills />
                    {/* Skill 오른쪽에 한 3가지 색상 동그라미 두고, 그 옆에 능숙 사용해본 적 있음 이런 식으로 하고 스킬 아래에 색상 선 두는 식으로 디자인? */}
                </RightContent>
            </ProfileSection>
            <Section>
                <ExperienceContainer>
                <Title>EXPERIENCE</Title>
                <ExperienceItem>
                    <ExperienceInfo>
                        <ExperienceName>삼성 청년 SW 아카데미</ExperienceName>
                        <div>Java 전공 / 삼성전자</div>
                        <ExperienceDate>2024.01 ~ 2024.12</ExperienceDate>
                    </ExperienceInfo>
                    <ExperienceDesc>
                        <li>1학기 성적 우수자</li>
                        <li>Certificate 등급 상위 30% 수료</li>
                    </ExperienceDesc>
                </ExperienceItem>
                </ExperienceContainer>

                <AwardTitle>Award / Certificates</AwardTitle>
                <AwardContainer>
                    <AwardItem>
                        <AwardInfo>
                            <AwardName>삼성 청년 SW 아카데미 특화 프로젝트</AwardName>
                            <div>최우수상 / 삼성전자</div>
                            <AwardDate>2024.00.00</AwardDate>
                        </AwardInfo>
                        <AwardDesc>123123123</AwardDesc>
                    </AwardItem>
                    <AwardItem>
                        <AwardInfo>
                            <AwardName>삼성 청년 SW 아카데미 공통 프로젝트</AwardName>
                            <div>우수상 / 삼성전자</div>
                            <AwardDate>2024.00.00</AwardDate>
                        </AwardInfo>
                        <AwardDesc>123123123</AwardDesc>
                    </AwardItem>
                    <AwardItem>
                        <AwardInfo>
                            <AwardName>삼성 청년 SW 아카데미 자율 프로젝트</AwardName>
                            <div>우수상 / 삼성전자</div>
                            <AwardDate>2024.00.00</AwardDate>
                        </AwardInfo>
                        <AwardDesc>123123123</AwardDesc>
                    </AwardItem>
                    <AwardItem>
                        <AwardInfo>
                            <AwardName>삼성 SW 역량 테스트</AwardName>
                            <div>B형 / 삼성전자</div>
                            <AwardDate>2024.00.00</AwardDate>
                        </AwardInfo>
                        <AwardDesc>123123123</AwardDesc>
                    </AwardItem>
                </AwardContainer>
            </Section>
        </Container>
    )
}