import styled from 'styled-components'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

export const WrapperTabs = styled(Tabs)`
  font-size: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`
export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 0.3rem;
  display: flex;
  margin: 0;
`
WrapperTabList.tabsRole = 'TabList'

export const WrapperTab = styled(Tab)`
  border-radius: 1rem;
  border: 0.5rem solid #ccc;
  padding: 0.5rem;
  user-select: none;
  cursor: pointer;
  z-index: 99;
  background-color: white;
  margin: 0.5rem;

  &: focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 5px 3px 5px black;
  }
`
WrapperTab.tabsRole = 'Tab'

export const WrapperTabPanel = styled(TabPanel)`
  padding: 0.5rem;
  border: 1px solid #ccc;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
  display: none;
  margin-top: 0.3rem;

  &.is-selected {
    display: block;
  }
`
WrapperTabPanel.tabsRole = 'TabPanel'
