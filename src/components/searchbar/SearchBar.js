import { Button, DatePicker, Form, Select } from "antd";
import React, { useState } from "react";
const { Option } = Select;
const formFilter = (formValues) => {
  let filter = "?";
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
    const isError = !Boolean(Object.entries(values).length);
    setError(isError);
    if (isError) {
      return;
    }
    const filter = formFilter(formValues);
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
          <Select showSearch placeholder="Status" optionFilterProp="children">
            <Option value="active">active</Option>
            <Option value="unknown">unknown</Option>
            <Option value="tom">Tom</Option>
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
            //   onSearch={onSearch}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
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
