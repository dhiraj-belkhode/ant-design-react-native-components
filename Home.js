import React from 'react';
import { ScrollView } from 'react-native';
import { List, WhiteSpace } from 'antd-mobile-rn';

const Item = List.Item;

export default class BasicListExample extends React.Component<any, any> {
    static navigationOptions = {
      headerTitle: 'RN ant Examples',
    };
    _navigate(screen){
      this.props.navigation.navigate(screen);
    }

  render() {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#333' }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List renderHeader={() => 'Components List'}>

            <Item extra={'extra content'}>Title</Item>
            <WhiteSpace size="xl" style={{backgroundColor: '#888'}} />
            
            <Item extra={'extra content'} onClick={() => this._navigate('Drawer')}>Drawer</Item>
            <WhiteSpace size="xl" style={{backgroundColor: '#888'}} />
            
            <Item extra={'extra content'} onClick={() => this._navigate('Popover')}>Popover</Item>
            <WhiteSpace size="xl" style={{backgroundColor: '#888'}} />

            <Item extra={'extra content'} onClick={() => this._navigate('Pagination')}>Pagination</Item>            
            <WhiteSpace size="xl" style={{backgroundColor: '#888'}} />

            <Item extra={'extra content'} onClick={() => this._navigate('SegmentedControl')}>SegmentedControl</Item>
            <WhiteSpace size="xl" style={{backgroundColor: '#888'}} />

            <Item extra={'extra content'} onClick={() => this._navigate('Tabs')}>Tabs</Item>
            <WhiteSpace size="xl" style={{backgroundColor: '#888'}} />

            <Item extra={'extra content'} onClick={() => this._navigate('TabBar')}>TabBar</Item>
            <WhiteSpace size="xl" style={{backgroundColor: '#888'}} />

            <Item extra={'extra content'} onClick={() => this._navigate('Pagination')}>Pagination</Item>
            <WhiteSpace size="xl" style={{backgroundColor: '#888'}} />

            <Item extra={'extra content'} onClick={() => this._navigate('DatePicker')}>DatePicker</Item>
            <WhiteSpace size="xl" style={{backgroundColor: '#888'}} />
            
            <Item extra={'extra content'} onClick={() => this._navigate('DatePickerView')}>DatePickerView</Item>
            <WhiteSpace size="xl" style={{backgroundColor: '#888'}} />

            <Item extra={'extra content'} onClick={() => this._navigate('ImagePicker')}>ImagePicker</Item>
            <WhiteSpace size="xl" style={{backgroundColor: '#888'}} />

            <Item extra={'extra content'} onClick={() => this._navigate('InputItem')}>InputItem</Item>
            <WhiteSpace size="xl" style={{backgroundColor: '#888'}} />

        </List>
      </ScrollView>
    );
  }
}