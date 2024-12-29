import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  AliyunOutlined,
  SignatureOutlined,
  CodeOutlined,
  NotificationOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
const items = [
  {
    key: "1",
    icon: <SignatureOutlined />,
    label: "Design",
    children: [
      {
        key: "11",
        label: "UI/UX",
      },
      {
        key: "12",
        label: "LLLustrators",
      },
      {
        key: "13",
        label: "Branding",
      },
      {
        key: "14",
        label: "Motion",
      },
    ],
  },
  {
    key: "2",
    icon: <CodeOutlined />,
    label: "Development",
    children: [
      //   {
      //     key: "21",
      //     label: "Option 1",
      //   },
      //   {
      //     key: "22",
      //     label: "Option 2",
      //   },
      {
        key: "23",
        label: (
          <>
            <span className="ps-6">Mobile</span>
          </>
        ),
        children: [
          {
            key: "231",
            label: (
              <>
                <NavLink to="/teams/development/mobile/android">
                  Android
                </NavLink>
              </>
            ),
          },
          {
            key: "232",
            label: (
              <>
                <NavLink to="/teams/development/mobile/ios">IOS</NavLink>
              </>
            ),
          },
        ],
      },
      {
        key: "24",
        label: (
          <>
            <span className="ps-6">Web</span>
          </>
        ),
        children: [
          {
            key: "241",
            label: (
              <>
                <NavLink to="/teams/development/web/front-end">
                  Front-end
                </NavLink>
              </>
            ),
          },
          {
            key: "242",
            label: (
              <>
                <NavLink to="/teams/development/web/back-end">Back-end</NavLink>
              </>
            ),
          },
          {
            key: "243",
            label: (
              <>
                <NavLink to="/teams/development/web/devops">DevOps</NavLink>
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    key: "3",
    icon: <NotificationOutlined />,
    label: "Marketing",
    children: [
      {
        key: "31",
        label: "Social Media",
      },
      {
        key: "32",
        label: "SEO & SEM",
      },
      {
        key: "33",
        label: "Digital",
      },
      {
        key: "34",
        label: "Content",
      },
    ],
  },
];
const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};
const levelKeys = getLevelKeys(items);

const Sidebar = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };
  return (
    <>
      <div className="w-[200px] h-screen py-3 flex flex-col justify-between">
        <div className="">
          <div className="flex items-center ps-5 gap-2 text-white font-jetbrains font-bold mb-10">
            <AliyunOutlined className="text-5xl" /> Task
          </div>
          <div className="flex flex-col gap-2 px-2">
            <NavLink
              to="/"
              className="hover:bg-hover hover:text-white px-3 py-2 text-secondary text-sm rounded-xl flex items-center gap-[10px]"
            >
              <AppstoreOutlined /> Dashboard
            </NavLink>
            <NavLink
              to="/projects"
              className="hover:bg-hover hover:text-white px-3 py-2 text-secondary text-sm rounded-xl flex items-center gap-[10px]"
            >
              <AppstoreOutlined /> Projects
            </NavLink>
            <NavLink
              to="/issues"
              className="hover:bg-hover hover:text-white px-3 py-2 text-secondary text-sm rounded-xl flex items-center gap-[10px]"
            >
              <AppstoreOutlined /> Issues
            </NavLink>
            <NavLink
              to="/boards"
              className="hover:bg-hover hover:text-white px-3 py-2 text-secondary text-sm rounded-xl flex items-center gap-[10px]"
            >
              <AppstoreOutlined /> Boards
            </NavLink>
            <NavLink
              to="/calendar"
              className="hover:bg-hover hover:text-white px-3 py-2 text-secondary text-sm rounded-xl flex items-center gap-[10px]"
            >
              <AppstoreOutlined /> Calendar
            </NavLink>
          </div>
          <div className="flex flex-col gap-2 px-2 mt-5">
            <h2 className="ps-3 text-white text-sm font-jetbrains">TEAMS</h2>
            <Menu
              mode="inline"
              defaultSelectedKeys={["231"]}
              openKeys={stateOpenKeys}
              onOpenChange={onOpenChange}
              style={{
                width: 184,
              }}
              items={items}
            />
          </div>
        </div>
        <div className="px-2">
          <div className="hover:bg-hover cursor-pointer hover:text-white px-3 py-2 text-secondary text-sm rounded-xl flex items-center gap-[10px]">
            <LogoutOutlined /> Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
