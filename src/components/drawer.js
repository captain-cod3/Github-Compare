import React from 'react';
import { Drawer, Button, Space } from 'antd';
import ListNode from './List';

class draw extends React.Component {
  state = { visible: false, placement: 'left' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <>
        <Space>
          <Button danger type="primary"  onClick={this.showDrawer}>
            Watch List
          </Button>
        </Space>
        <Drawer
          width={540}
          title="Sorted Git Profiles"
          closable={false}
          onClose={this.onClose}
          visible={visible}
        >
          <p><ListNode /> </p>
        </Drawer>
      </>
    );
  }
}

export default draw;