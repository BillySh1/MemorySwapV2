import throttle from "lodash/throttle";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Box } from "../../components/Box";
import Flex from "../../components/Box/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Overlay from "../../components/Overlay/Overlay";
import CakePrice from "../../components/CakePrice/CakePrice";
import Logo from "./components/Logo";
import {
  MENU_HEIGHT,
  TOP_BANNER_HEIGHT_MOBILE,
  TOP_BANNER_HEIGHT,
  SIDEBAR_WIDTH_FULL,
  SIDEBAR_WIDTH_REDUCED,
  links,
} from "./config";
import { NavProps } from "./types";
import { MenuContext } from "./context";
import Panel from "./Panel";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.topbar};
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  transform: translate3d(0, 0, 0);

  padding-left: 16px;
  padding-right: 16px;
`;

const FixedContainer = styled.div<{ showMenu: boolean; height?: number }>`
  position: fixed;
  top: ${({ showMenu, height }) => (showMenu ? 0 : `-${height ?? 0}px`)};
  left: 0;
  transition: top 0.2s;
  height: ${({ height }) => `${height}px`};
  width: 100%;
  z-index: 20;
`;

const BodyWrapper = styled(Box)`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-left 0.2s;
  transform: translate3d(0, 0, 0);
  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
  max-width: 100%;
`;
const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

// const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
//   flex-grow: 1;
//   transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
//   transform: translate3d(0, 0, 0);
//   max-width: 100%;
// `;

const Menu: React.FC<NavProps> = ({
  linkComponent = "a",
  userMenu,
  banner,
  globalMenu,
  isDark,
  toggleTheme,
  currentLang,
  setLang,
  cakePriceUsd,
  footerLinks,
  activeItem,
  activeSubItem,
  langs,
  buyCakeLabel,
  children,
}) => {
  const { isMobile, isMd } = useMatchBreakpoints();
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(typeof window === "undefined" ? 0 : window.pageYOffset);

  const topBannerHeight = isMobile ? TOP_BANNER_HEIGHT_MOBILE : TOP_BANNER_HEIGHT;

  const totalTopMenuHeight = banner ? MENU_HEIGHT + topBannerHeight : MENU_HEIGHT;

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current || currentOffset <= totalTopMenuHeight) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [totalTopMenuHeight]);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <MenuContext.Provider value={{ linkComponent }}>
      <Wrapper>
        <FixedContainer showMenu={showMenu}>
          <StyledNav>
            <Flex>
              <Logo
                isPushed={isPushed}
                togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
                isDark={isDark}
                href={homeLink?.href ?? "/"}
              />
            </Flex>
            <Flex alignItems="center" height="100%">
              {userMenu}
            </Flex>
          </StyledNav>
        </FixedContainer>

        <BodyWrapper>
          <Panel
            isPushed={isPushed}
            isMobile={isMobile}
            showMenu={showMenu}
            isDark={isDark}
            toggleTheme={toggleTheme}
            langs={langs}
            setLang={setLang as any}
            currentLang={currentLang}
            cakePriceUsd={cakePriceUsd}
            pushNav={setIsPushed}
            links={links}
            priceLink={" "}
          />
          <Inner isPushed={isPushed} showMenu={showMenu}>
            {children}
          </Inner>
          <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
        </BodyWrapper>
      </Wrapper>
    </MenuContext.Provider>
  );
};

export default Menu;
