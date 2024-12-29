import {
  BellOutlined,
  ControlOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Input } from "antd";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="absolute top-0 right-0 left-[200px] h-[80px] py-5 flex items-center justify-between px-5">
        <div className="flex-1">
          <Input
            placeholder="Search people, projects or tasks"
            addonAfter={<ControlOutlined className="text-secondary" />}
            className="w-3/5 bg-transparent hover:bg-transparent active:bg-transparent text-white focus-within:bg-transparent placeholder:text-secondary border-border"
            prefix={<SearchOutlined className="text-secondary" />}
          />
        </div>
        <div className="flex items-center text-secondary">
          <div className="py-2 px-3 cursor-pointer rounded-xl hover:text-white hover:bg-hover">
            <BellOutlined />
          </div>
          <div className="py-2 px-3 cursor-pointer rounded-xl hover:text-white hover:bg-hover">
            <SettingOutlined />
          </div>
          <Avatar className="bg-[#fde3cf] text-[#f56a00] ms-3 cursor-pointer">
            U
          </Avatar>
          <div className="ms-2 text-sm font-jetbrains">Tony Start</div>
        </div>
      </header>
    </>
  );
};

export default Header;
