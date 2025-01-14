import Input from "src/ui/shared/input/Input";
import s from "./footerForm.module.scss";

const FormFoot = () => {
  return (
    <div className={s.form}>
      <div className={s.wrap}>
        <h1 className={s.h1txt}>ХОТИТЕ ЧТО БЫ МЫ С ВАМИ СВЯЗАЛИСЬ ?</h1>
        <div className={s.form_parent}>
          <div className={s.xzkak}>
            <Input label="Как к вам обращаться ?" />
            <Input label="Ваш номер телефона" />
            <Input label="Почта" />
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
