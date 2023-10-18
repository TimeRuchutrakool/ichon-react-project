import styled from "styled-components";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import FormRow from "../../components/FormRow";
import FileInput from "../../components/FileInput";
import { useForm } from "react-hook-form";
import ActionButton from "../../components/ActionButton";

const AddNewProductFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const DetailInput = styled.textarea`
  font-family: "Prompt", sans-serif;
  width: 100%;
  border: none;
  border-bottom: 0.1rem solid var(--color-gray-800);
  &:focus {
    outline: none;
    border-bottom: 0.2rem solid var(--color-yellow-600);
  }
`;

function AddNewProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (obj) => {
    console.log(obj);
    reset();
  };
  return (
    <AddNewProductFormStyled onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h4">ADD NEW PRODUCT</Heading>
      <FormRow error={errors?.name?.message}>
        <Input
          placeholder="ชื่อสินค้า"
          {...register("name", { required: "กรุณากรอกชื่อสินค้า" })}
        />
      </FormRow>
      <FormRow error={errors?.brandTitle?.message}>
        <Input
          placeholder="ชื่อแบรนด์"
          {...register("brandTitle", { required: "กรุณากรอกชื่อแบรนด์" })}
        />
      </FormRow>
      <FormRow error={errors?.price?.message}>
        <Input
          placeholder="ราคา"
          type="number"
          {...register("price", {
            required: "กรุณากรอกราคาสินค้า",
            valueAsNumber: "กรุณากรอกตัวเลข",
          })}
        />
      </FormRow>
      <FormRow error={errors?.description?.message}>
        <DetailInput
          placeholder="รายละเอียดสินค้า"
          rows={3}
          {...register("description", {
            required: "กรุณากรอกรายละเอียดสินค้า",
          })}
        />
      </FormRow>
      <FormRow error={errors?.categoryTitle?.message}>
        <Input
          placeholder="ชื่อประเภทสินค้า"
          {...register("categoryTitle", { required: "กรุณากรอกประเภทสินค้า" })}
        />
      </FormRow>
      <FormRow error={errors?.stock?.message}>
        <Input
          placeholder="จำนวนสินค้า"
          type="number"
          {...register("stock", { required: "กรุณากรอกจำนวนสินค้า",valueAsNumber: "กรุณากรอกตัวเลข", })}
        />
      </FormRow>
      <FormRow>
        <FileInput
          type="file"
          id="image"
          accept="image/*"
          multiple
          {...register("image")}
        />
      </FormRow>
      <ActionButton text="Confirm" />
    </AddNewProductFormStyled>
  );
}

export default AddNewProductForm;
