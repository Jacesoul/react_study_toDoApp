import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { Categories, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = ({ toDo }: IForm) => {
    setToDos((prevToDos) => [
      { id: Date.now(), text: toDo, category: Categories.TO_DO },
      ...prevToDos,
    ]);
    console.log(toDo);

    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", { required: "Please write a To Do" })}
          type="text"
          placeholder="Wirte a toDo"
        />
        <button>Add ToDo</button>
      </form>
    </div>
  );
}

export default CreateToDo;
