import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
import axiosClient from "../../../utils/axiosClient";
import { useNavigate } from "react-router-dom";

const SignupCandidate = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const onFormItemchange = (e) => {
    setData((d) => ({ ...d, [e.target.name]: e.target.value }));
  };

  const formatData = () => {
    return {
      name: data.name,
      lastName: data.lastName,
      dateOfBirth: data.dateOfBirth,
      tags: data.tags.split(", "),
      address: {
        city: data.city,
        zipcode: data.zipCode,
        adress: data.adress,
      },
    };
  };
  const onFinish = async () => {
    const response = await axiosClient.post("/candidates", formatData());
    console.log("response === ", response);
    const profile = await axiosClient.post("/profiles", {
      login: data.login,
      password: data.password,
      candidateId: response.data.id,
    });
    localStorage.setItem("currentUser", response.data);
    navigate("/");
    window.location.reload(false);
  };

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      onFinish={onFinish}
    >
      <Form.Item label="Nom">
        <Input name="name" onChange={onFormItemchange} value={data["name"]} />
      </Form.Item>
      <Form.Item label="Prénom">
        <Input
          name="lastname"
          onChange={onFormItemchange}
          value={data["lastname"]}
        />
      </Form.Item>
      <Form.Item label="Date de naissance">
        <DatePicker
          name="dateOfBirth"
          onChange={(d, dateString) => {
            setData((prevData) => ({ ...prevData, dateOfBirth: dateString }));
          }}
          format={"DD/MM/YYYY"}
        />
      </Form.Item>
      <Form.Item label="Adresse">
        <Input
          name="adress"
          onChange={onFormItemchange}
          value={data["adress"]}
        />
      </Form.Item>
      <Form.Item label="Code postale">
        <InputNumber
          name="zipCode"
          onChange={(zipCode) =>
            setData((prevData) => ({ ...prevData, zipCode }))
          }
          value={data["zipCode"]}
        />
      </Form.Item>
      <Form.Item label="Ville">
        <Input name="city" onChange={onFormItemchange} value={data["city"]} />
      </Form.Item>

      <Form.Item label="Mots clés">
        <Input
          name="tags"
          onChange={onFormItemchange}
          value={data["tags"]}
          placeholder="design, photoshop"
        />
      </Form.Item>
      <Form.Item label="Login">
        <Input name="login" onChange={onFormItemchange} value={data["login"]} />
      </Form.Item>
      <Form.Item label="Mot de passe">
        <Input
          name="password"
          onChange={onFormItemchange}
          value={data["password"]}
          type={"password"}
        />
      </Form.Item>

      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          Valider
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignupCandidate;
