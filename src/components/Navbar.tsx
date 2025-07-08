import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  position: fixed;
  bottom: -1px;
  left: 0;
  width: 100%;
  padding: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.backgroundDark};
  border-top: 2px solid ${({ theme }) => theme.colors.accent};
  z-index: ${({ theme }) => theme.zIndex.sticky};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const NavbarContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding-left: ${({ theme }) => theme.spacing[4]};
  border-left: 1px solid ${({ theme }) => theme.colors.border};
`;

const BreadcrumbLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  
  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const BreadcrumbSeparator = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const CurrentPage = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const ActionButton = styled(Link)`
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
  }
`;

interface NavbarProps {
  breadcrumbs?: Array<{
    label: string;
    href: string;
  }>;
  currentPage?: string;
  action?: {
    label: string;
    href: string;
  };
}

export function Navbar({ breadcrumbs, currentPage, action }: NavbarProps) {
  return (
    <NavbarContainer>
      <NavbarContent>
        <LeftSection>
          <LogoLink href="/">
            <Image src="/images/grow.png" alt="Grow Logo" width={24} height={24} />
          </LogoLink>
          
          {(breadcrumbs?.length || currentPage) && (
            <Breadcrumbs>
              {breadcrumbs?.map((crumb) => (
                <React.Fragment key={crumb.href}>
                  <BreadcrumbLink href={crumb.href}>
                    {crumb.label}
                  </BreadcrumbLink>
                  <BreadcrumbSeparator>/</BreadcrumbSeparator>
                </React.Fragment>
              ))}
              {currentPage && <CurrentPage>{currentPage}</CurrentPage>}
            </Breadcrumbs>
          )}
        </LeftSection>
        {action && (
          <ActionButton href={action.href}>
            {action.label}
          </ActionButton>
        )}
      </NavbarContent>
    </NavbarContainer>
  );
} 