import React from 'react';
import { View, Text } from 'react-native';
import { TabBar, SearchBar } from 'antd-mobile-rn';

export default class BasicTabBarExample extends React.Component<any, any> {
    static navigationOptions = {
        headerTitle: 'Tab Bar',
      };
  constructor(props: any) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
    };
  }

  renderContent(pageText: any) {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <SearchBar placeholder="Search" showCancelButton />
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    );
  }

  onChangeTab(tabName: any) {
    this.setState({
      selectedTab: tabName,
    });
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#ccc"
      >
        <TabBar.Item
          title="Life"
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => this.onChangeTab('blueTab')}
        >
          {this.renderContent('Life Tab')}
        </TabBar.Item>
        <TabBar.Item
          title="Koubei"
          badge={2}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => this.onChangeTab('redTab')}
        >
          {this.renderContent('Koubei Tab')}
        </TabBar.Item>
        <TabBar.Item
          title="Friend"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => this.onChangeTab('greenTab')}
        >
          {this.renderContent('Friend Tab')}
        </TabBar.Item>
        <TabBar.Item
          title="My"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => this.onChangeTab('yellowTab')}
        >
          {this.renderContent('My Tab')}
        </TabBar.Item>
      </TabBar>
    );
  }
}