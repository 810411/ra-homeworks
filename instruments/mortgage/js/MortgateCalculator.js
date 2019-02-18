const {Row, Col, Form, Select, Input, Button} = window.antd;

const formItemLayout = {
  labelCol: {span: 8},
  wrapperCol: {span: 16},
};

const MortgateCalculator = () => (
  <Row type="flex" justify="center">
    <Form>
      <Autocomplete/>
      <Inputs/>
      <Col offset={8}>
        <Button type="default">
          Отправить
        </Button>
      </Col>
    </Form>
  </Row>
);
