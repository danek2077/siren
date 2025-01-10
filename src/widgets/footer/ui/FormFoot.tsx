import Input from "src/ui/shared/input/Input";
import s from "./footerForm.module.scss";

const FormFoot = () => {
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
          <div>2</div>
        </div>
        <div className={s.input_wrap}>
          <Input
            classNameInput={s.input_custom}
            label="Дополнительное сообщение (необязательно)"
          />
        </div>
      </div>
    </div>
  );
};

export default FormFoot;
