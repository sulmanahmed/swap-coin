import styled from 'styled-components'; 

// Wrapper for the entire UI
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1e1e1e;
  min-height: 100vh;
  color: #fff;
  padding: 20px;
`;

// Header Tabs (Swap, Limit, DCA, VA)
export const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

interface TabProps {
  active: boolean;
}

export const Tab = styled.button<TabProps>`
  background: ${({ active }) => (active ? '#83996b' : 'none')};
  border: none;
  color: ${({ active }) => (active ? '#fff' : '#888')};
  padding: 10px 20px;
  cursor: pointer;
  margin: 0 5px;
  font-size: 16px;
  border-radius: 30px;

  &:hover {
    background-color: #3c3c3c;
  }
`;

// Toggle Auto/Manual and Settings
export const ToggleSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

interface ToggleProps {
  active: boolean;
}

export const Toggle = styled.div<ToggleProps>`
  padding: 5px 10px;
  border-radius: 20px;
  background-color: ${({ active }) => (active ? '#007aff' : '#444')};
  color: ${({ active }) => (active ? '#fff' : '#aaa')};
  cursor: pointer;
`;

export const SettingIcon = styled.div`
  margin-left: auto;
  font-size: 20px;
`;

// Token Input Section for buying and selling tokens
export const TokenInputSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

interface TokenInputProps {
  highlighted: boolean;
}

export const TokenInput = styled.div<TokenInputProps>`
background-color:#fff;
  // background-color: ${({ highlighted }) => (highlighted ? '#282828' : '#202020')};
  border: ${({ highlighted }) => (highlighted ? '2px solid #a4f0e0' : 'none')};
  border-radius: 15px;
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  & img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;

// Token Info (icon + name + amount)
export const TokenInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  color: #fff;

  & .amount {
    font-size: 20px;
    font-weight: bold;
  }

  & .token-icon {
    display: flex;
    align-items: center;
  }
`;

// Swap Icon (Arrows)
export const SwapIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
  margin: 15px;
`;

// Route Info and Wallet Button
export const RouteInfo = styled.div`
  font-size: 14px;
  color: #00ff00;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  
  & .route-pill {
    background-color: #2c2c2c;
    padding: 5px 10px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    color: #b8ffb8;
  }

  & .permission-btn {
    display: flex;
    align-items: center;
    color: #f0f0f0;
    font-size: 14px;
    cursor: pointer;
  }
`;

// Connect Wallet Button
export const ConnectWalletButton = styled.button`
  background-color: #3caa6b;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: #32a45d;
  }
`;
