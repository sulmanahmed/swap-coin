import React, { useState } from 'react';
import { Button, Input, Select, Typography } from 'antd';
import Onboard from '@web3-onboard/core';
import injectedModule from '@web3-onboard/injected-wallets';
import { ethers } from 'ethers';
import {
  Wrapper,
  Header,
  Tab,
  ToggleSection,
  Toggle,
  SettingIcon,
  TokenInputSection,
  TokenInput,
  SwapIcon,
  RouteInfo,
} from './SwapStyles.ts';

const { Text } = Typography;
const { Option } = Select;

const injected = injectedModule();

const onboard = Onboard({
  wallets: [injected],
  chains: [
    {
      id: '0x1', // Mainnet chain id
      token: 'ETH',
      label: 'Ethereum Mainnet',
      rpcUrl: `https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID`, // Replace with your RPC URL
    },
  ],
});

const SwapUI: React.FC = () => {
  const [connectedWallet, setConnectedWallet] = useState<any>(null);

const connectWallet = async () => {
  const wallets = await onboard.connectWallet();
  connectedWallet(wallets[0]);
  if (wallets[0]) {
    const ethersProvider = new ethers.BrowserProvider(wallets[0].provider, 'any')
    const signer = ethersProvider.getSigner();
  }
};

  return (
    <Wrapper>
      {/* Header Tabs */}
      <Header>
        <Tab active={true}>Swap</Tab>
        <Tab active={false}>Limit</Tab>
        <Tab active={false}>DCA</Tab>
        <Tab active={false}>VA</Tab>
      </Header>

      {/* Toggle and Settings */}
      <ToggleSection>
        <Toggle active={true}>Auto</Toggle>
        <Toggle active={false}>Manual</Toggle>
        <SettingIcon>⚙️</SettingIcon>
        <Text type="warning">MEV Protect: Off</Text>
      </ToggleSection>

      {/* Token Input Section */}
      <TokenInputSection>
        {/* Selling Token */}
        <TokenInput highlighted={false}>
          <Text type="secondary">You're Selling</Text>
          <Select defaultValue="SOL" style={{ width: '100%' }}>
            <Option value="SOL">SOL</Option>
            <Option value="BTC">BTC</Option>
            <Option value="ETH">ETH</Option>
          </Select>
          <Input addonBefore="Amount" defaultValue="15" />
          <Text>$2,610.71</Text>
        </TokenInput>

        <SwapIcon>🔄</SwapIcon>

        {/* Buying Token */}
        <TokenInput highlighted={true}>
          <Text type="secondary">You're Buying</Text>
          <Select defaultValue="USDT" style={{ width: '100%' }}>
            <Option value="USDT">USDT</Option>
            <Option value="DAI">DAI</Option>
            <Option value="USDC">USDC</Option>
          </Select>
          <Input addonBefore="Amount" defaultValue="2,610.92067" />
          <Text>$2,610.40</Text>
        </TokenInput>
      </TokenInputSection>

      {/* Route Info */}
      <RouteInfo>2 Routes + 4 Markets via Orca, Phoenix, etc.</RouteInfo>

      {/* Connect Wallet Button */}
      <Button type="primary" size="large" onClick={connectWallet}>
        {connectedWallet ? `Connected: ${connectedWallet.accounts[0].address}` : 'Connect Wallet'}
      </Button>
    </Wrapper>
  );
};

export { SwapUI };
