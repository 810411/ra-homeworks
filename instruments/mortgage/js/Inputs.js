const Inputs = () => (
  <div>
    <Form.Item
      label="Стоимость: "
      {...formItemLayout}
    >
      <Input type="number"
             name="price"
             defaultValue="2000000"
             addonAfter=" руб."/>
    </Form.Item>
    <Form.Item
      label="На руках: "
      {...formItemLayout}
    >
      <Input type="number"
             name="money"
             defaultValue="200000"
             addonAfter=" руб."/>
    </Form.Item>
    <Form.Item
      label="Срок кредита: "
      {...formItemLayout}
    >
      <Input type="number"
             name="duration"
             defaultValue="5"
             addonAfter=" лет"/>
    </Form.Item>
  </div>
);
