import { Form, Input, Button, Select } from 'antd';
import React from 'react';

const { Option } = Select;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 16 } },
};
const tailFormItemLayout = {
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 6 } },
};

const AddQuestion = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="add_question"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="question"
        label="题目内容"
        rules={[{ required: true, message: '请输入题目内容!' }]}
      >
        <TextArea rows={3} placeholder="请输入题目描述" />
      </Form.Item>

      <Form.Item
        name="optionA"
        label="选项 A"
        rules={[{ required: true, message: '请输入选项 A!' }]}
      >
        <Input placeholder="选项 A 内容" />
      </Form.Item>

      <Form.Item
        name="optionB"
        label="选项 B"
        rules={[{ required: true, message: '请输入选项 B!' }]}
      >
        <Input placeholder="选项 B 内容" />
      </Form.Item>

      <Form.Item
        name="optionC"
        label="选项 C"
        rules={[{ required: true, message: '请输入选项 C!' }]}
      >
        <Input placeholder="选项 C 内容" />
      </Form.Item>

      <Form.Item
        name="optionD"
        label="选项 D"
        rules={[{ required: true, message: '请输入选项 D!' }]}
      >
        <Input placeholder="选项 D 内容" />
      </Form.Item>

      <Form.Item
        name="answer"
        label="正确答案"
        rules={[{ required: true, message: '请选择正确答案!' }]}
      >
        <Select placeholder="请选择正确答案">
          <Option value="A">A</Option>
          <Option value="B">B</Option>
          <Option value="C">C</Option>
          <Option value="D">D</Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddQuestion;
