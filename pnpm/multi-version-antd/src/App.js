import { Button, Input, Select, Space } from 'antd';
import 'antd/dist/antd.css';
import * as antd5 from 'antd5';
import './App.css';
import logo from './logo.svg';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <antd5.ConfigProvider prefixCls='antd5'>
            <antd5.Space>
              <antd5.Button type='primary'>Antd v5</antd5.Button>
              <antd5.Input placeholder='Antd v5' />
              <antd5.Select />
            </antd5.Space>
          </antd5.ConfigProvider>
        </p>
        <p>
          <Space>
            <Button type='primary'>Antd v4</Button>
            <Input placeholder="Antd v4" />
            <Select />
          </Space>
        </p>
      </header>
    </div>
  );
}


