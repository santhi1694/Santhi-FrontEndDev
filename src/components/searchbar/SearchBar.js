import { Button, DatePicker, Form, Select } from "antd";
import React from "react";
const { Option } = Select;
const SearchBar = () => {
  const [form] = Form.useForm();
  const onChange = () => {
    console.log("onChange");
  };
  return (
    <div className="search-layout">
      <Form layout="inline" form={form} initialValues={{ layout: "inline" }}>
        <Form.Item label="Status">
          <Select
            showSearch
            placeholder="Status"
            optionFilterProp="children"
            onChange={onChange}
            style={{ width: "150px" }}
            //   onSearch={onSearch}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Launch Date">
          <DatePicker
            placeholder="Select Launch Date"
            showTime
            onChange={onChange}
            onOk={() => null}
          />
        </Form.Item>
        <Form.Item label="Type">
          <Select
            showSearch
            style={{ width: "150px" }}
            placeholder="Type"
            optionFilterProp="children"
            onChange={onChange}
            //   onSearch={onSearch}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default SearchBar;
