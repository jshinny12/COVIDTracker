import React, { useEffect } from "react";

import { Menu } from 'antd';
import { IdcardFilled, AreaChartOutlined, InfoCircleOutlined, HomeFilled } from '@ant-design/icons';
import { useNavigate, useLocation } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    {
      label: 'Home',
      key: '',
      icon: <HomeFilled />,
    },
    {
      label: 'COVID Testing Sites',
      key: 'testing',
      icon: <IdcardFilled />,
    },
    {
      label: 'COVID Data',
      key: 'data',
      icon: <AreaChartOutlined />,
    },
    {
      label: 'About',
      key: 'about',
      icon: <InfoCircleOutlined />,
    },
  ];

  useEffect(() => {
    setCurrent(location.pathname.slice(1));
  }, [location])

  const [current, setCurrent] = React.useState(location.pathname.slice(1));

  const onClick = e => {
    if (e.key === "home") {
      navigate("/");
    } else {
      navigate(`/${e.key}`);
    }
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}
export default NavBar;
