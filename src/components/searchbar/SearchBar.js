import { Button, DatePicker, Form, Select } from "antd";
import React, { useState } from "react";
const { Option } = Select;
const formFilter = (formValues) => {
  let filter = "&";
  Object.entries(formValues).forEach(([label, value]) => {
    if (value) {
      filter = `${filter}${label}=${value}&`;
    }
  });
  return filter;
};
const SearchBar = ({ updateFilters }) => {
  const [form] = Form.useForm();
  const [showError, setError] = useState(false);

  const onFinish = (values = {}) => {
    const formValues = {
      ...values,
      original_launch: values.original_launch?.toISOString(),
    };

    const filter = formFilter(formValues);
    const isError = filter.length === 1;
    setError(isError);
    if (isError) {
      return;
    }
    updateFilters(filter);
    console.log(values, "values", formValues);
  };

  return (
    <div className="search-layout">
      <Form
        layout="inline"
        form={form}
        onFinish={onFinish}
        initialValues={{ layout: "inline" }}
      >
        <Form.Item label="Status" name="status">
          <Select
            showSearch
            placeholder="Status"
            optionFilterProp="children"
            style={{ width: "150px" }}
          >
            <Option value="active">active</Option>
            <Option value="unknown">unknown</Option>
            <Option value="expired">expired</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Launch Date" name="original_launch">
          <DatePicker
            placeholder="Select Launch Date"
            showTime
            onOk={() => null}
          />
        </Form.Item>
        <Form.Item label="Type" name="type">
          <Select
            showSearch
            placeholder="Type"
            optionFilterProp="children"
            style={{ width: "150px" }}

            //   onSearch={onSearch}
          >
            <Option value="Dragon 1.0">Dragon 1.0</Option>
            <Option value="Dragon 1.1">Dragon 1.1</Option>
            <Option value="Dragon 2.0">Dragon 2.0</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>
      {showError && (
        <div className="error-text">
          Please select atleast one filter before serching !!
        </div>
      )}{" "}
    </div>
  );
};
export default SearchBar;
