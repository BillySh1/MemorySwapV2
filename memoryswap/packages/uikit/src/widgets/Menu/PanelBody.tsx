import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../components/Svg";
import * as IconModule from "./icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        return entry.items ? (
          <Accordion
            key={entry.label}
            isPushed={isPushed}
            pushNav={pushNav}
            icon={iconElement}
            label={entry.label}
            initialOpenState={entry.initialOpenState}
            className={calloutClass}
          >
            {isPushed &&
              entry.items.map((item) => (
                <MenuEntry
                  key={item.href}
                  secondary
                  isActive={item.href === window.location.pathname}
                  onClick={handleClick}
                >
                  <MenuLink href={item.href}>{item.label}</MenuLink>
                </MenuEntry>
              ))}
          </Accordion>
        ) : (
          <MenuEntry key={entry.label} isActive={entry.href === window.location.pathname} className={calloutClass}>
            <MenuLink href={entry.href} onClick={handleClick}>
              {iconElement}
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default PanelBody;
