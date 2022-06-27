import {
  EditOutlined,
  DeleteOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

export const columns = [
  {
    title: "Employee ID",
    showOnResponse: true,
    showOnDesktop: true,
    dataIndex: "custID",
  },
  {
    title: "Language Selected",
    showOnResponse: true,
    showOnDesktop: true,
    dataIndex: "language",
  },
  {
    title: "Status",
    showOnResponse: true,
    showOnDesktop: true,
    dataIndex: "is_active",
  },
  {
    title: "Gender",
    showOnResponse: true,
    showOnDesktop: true,
    dataIndex: "gender",
  },
  {
    title: "Year Of Birth",
    showOnResponse: true,
    showOnDesktop: true,
    dataIndex: "dob",
  },
  {
    title: () => <ProfileOutlined />,
    dataIndex: "dob",
    render: () => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <EditOutlined data-testid="activeStatusToggler" />
      </div>
    ),
  },
  {
    title: () => <DeleteOutlined />,
    dataIndex: "dob",
    render: () => <></>,
  },
];
