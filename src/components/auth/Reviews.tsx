import React, { useEffect, useState } from "react";
import { Avatar, List, Skeleton } from "antd";
import { Layout } from "antd";

const { Content } = Layout;

interface DataType {
  gender?: string;
  name: {
    title?: string;
    first?: string;
    last?: string;
  };
  email?: string;
  picture: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  };
  nat?: string;
  loading: boolean;
}

const count = 6;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const Reviews: React.FC = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [list, setList] = useState<DataType[]>([]);

  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setList(res.results);
      });
  }, []);

  const contentStyle: React.CSSProperties = {
    position: "relative",
    zIndex: 1,
    color: "white",
    textAlign: "center",
    padding: "20px",
  };
  return (
    <Content style={{ padding: "0 48px", overflow: "hidden" }}>
      <List
        style={contentStyle}
        loading={initLoading}
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => (
          <List.Item>
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} size={64} />}
                title={<a href="/reviews">{item.name?.last}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </Content>
  );
};

export default Reviews;
