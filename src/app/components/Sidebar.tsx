import { useSearchParams, useRouter } from "next/navigation";
import { GithubIcon } from '../../components/icons/GithubIcon';
import { Category, CategoryTitle, Container, InfoWrapper, Photo, ProfileLink, ProfileLinksContainer, SidebarFooter } from './Sidebar.styles';
import ResumeIcon from "@/components/icons/ResumeIcon";

interface SidebarProps {
  categories: string[]
}

const categoryNames: { [key: string]: string } = {
  all: '📚 전체',
  algorithm: '📘 알고리즘',
  develop: '📕 개발',
}

export default function Sidebar({ categories }: SidebarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  const handleCategoryClick = (category: string | null) => {
    const newParams = new URLSearchParams(searchParams.toString())
    
    if (category) {
      newParams.set('category', category)
    } else {
      newParams.delete('category')
    }
    
    router.push(`/?${newParams.toString()}`)
  };

  return (
    <Container>
      <InfoWrapper>
        <Photo 
          alt='' 
          src='/images/profilePhoto.webp'
          fill
        />
      </InfoWrapper>
      <CategoryTitle>카테고리</CategoryTitle>
      <Category
        selected={!currentCategory}
        onClick={() => handleCategoryClick(null)}
      >
        {categoryNames.all}
      </Category>
      {categories.map((category) => (
        <Category 
          key={category} 
          selected={currentCategory === category}
          onClick={() => handleCategoryClick(category)}
        >
          {categoryNames[category] || category}
        </Category>
      ))}
      <SidebarFooter>
        <ProfileLinksContainer>
          <ProfileLink
            href="https://github.com/pushedRak/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon color="#555" size={20} />
            <span>Github</span>
          </ProfileLink>
          <ProfileLink
            href="/portfolio"
          >
            <ResumeIcon color="#555" size={20} />
            <span>Resume</span>
          </ProfileLink>
        </ProfileLinksContainer>
        <div>Copyright 2025.</div>
        <div>손민락 All rights reserved.</div>
      </SidebarFooter>
    </Container>
  )
}

