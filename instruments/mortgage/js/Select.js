const Autocomplete = () => {
  const Option = Select.Option;

  return (
    <Form.Item
      label="Тип квартиры:"
      {...formItemLayout}
    >
      <Select
        autoFocus
        showSearch
        placeholder="Выберите тип квартиры"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        <Option value="jack">Квартира в новостройке</Option>
        <Option value="lucy">Готовая квартира</Option>
        <Option value="tom">Загородный дом</Option>
      </Select>
    </Form.Item>
  )
};
