import React from 'react';
import { Form, Input, Button } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';

export default { title: 'Test' };

const validationSchema = Yup.object().shape({
  send: Yup.number().min(5, 'Min is 5').required('Required!').typeError('Type Error!'),
});

export const _Test = () => {
  const { control, errors, handleSubmit } = useForm({
    validationSchema,
  });

  const Submit = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(Submit)}>
      <Form.Item
        help={errors.send?.message || 'You Send'}
        validateStatus={errors.send ? 'error' : 'success'}
      >
        <Controller name="send" as={<Input />} control={control} />
      </Form.Item>

      <Button htmlType="submit">Submit</Button>
    </Form>
  );
};
