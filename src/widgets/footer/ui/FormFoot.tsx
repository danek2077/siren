import Input from "src/ui/shared/input/Input";
import s from "./footerForm.module.scss";
import React from "react";
import { Select } from "antd";


const FormFoot = () => {
  const options = [
    { value: "Август", label: "Август" },
    { value: "Сентябрь", label: "Сентябрь" },
    { value: "Ноябрь", label: "Ноябрь" },
  ];
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };
  return (
    <div className={s.form}>
      <div className={s.wrap}>
        <h1 className={s.h1txt}>ХОТИТЕ ЧТО БЫ МЫ ВАМ ПЕРЕЗВОНИЛИ ?</h1>
        <div className={s.form_parent}>
          <div>
            <Input label="Как к вам обращаться ?" />
            <Input label="Ваш номер телефона" />
            <Input label="Почта" />
          </div>
          <div className={s.right_wrap}>
            <div className={s.when_recall_style}>
              Когда вам перезвонить ? (необязательно){" "}
            </div>
            <div className={s.selects_parent}>
              <Select
                showSearch
                placeholder="Выберете месяц"
                optionFilterProp="label"
                onChange={onChange}
                onSearch={onSearch}
                options={options}
              />
              <Select placeholder="Выберете день" optionFilterProp="label" />
              <Select placeholder="Выберете время" optionFilterProp="label" />
            </div>
          </div>
        </div>
        <div className={s.input_wrap}>
          <Input
            className={s.text_center}
            classNameInput={s.input_custom}
            label="Дополнительное сообщение (необязательно)"
          />
        </div>
        <button className={s.signbtn}>Отправить</button>
      </div>
    </div>
  );
};

export default FormFoot;
