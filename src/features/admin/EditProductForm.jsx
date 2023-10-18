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

function EditProductForm() {
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
      <Heading as="h4">EDIT PRODUCT</Heading>
      <FormRow error={errors?.name?.message}>
        <Input
          placeholder="ชื่อสินค้า"
          defaultValue="iPhone 8 plus"
          {...register("name", { required: "กรุณากรอกชื่อสินค้า" })}
          onChange={() => {}}
        />
      </FormRow>
      <FormRow error={errors?.brandTitle?.message}>
        <Input
          placeholder="ชื่อแบรนด์"
          defaultValue="APPLE"
          {...register("brandTitle", { required: "กรุณากรอกชื่อแบรนด์" })}
          onChange={() => {}}
        />
      </FormRow>
      <FormRow error={errors?.price?.message}>
        <Input
          placeholder="ราคา"
          type="number"
          defaultValue={12345}
          {...register("price", {
            required: "กรุณากรอกราคาสินค้า",
            valueAsNumber: "กรุณากรอกตัวเลข",
          })}
          onChange={() => {}}
        />
      </FormRow>
      <FormRow error={errors?.description?.message}>
        <DetailInput
          placeholder="รายละเอียดสินค้า"
          rows={3}
          defaultValue="iPhone 8 plus"
          {...register("description", {
            required: "กรุณากรอกรายละเอียดสินค้า",
          })}
          onChange={() => {}}
        />
      </FormRow>
      <FormRow error={errors?.categoryTitle?.message}>
        <Input
          placeholder="ชื่อประเภทสินค้า"
          defaultValue="MOBILE PHONE"
          {...register("categoryTitle", { required: "กรุณากรอกประเภทสินค้า" })}
          onChange={() => {}}
        />
      </FormRow>
      <FormRow error={errors?.stock?.message}>
        <Input
          placeholder="จำนวนสินค้า"
          defaultValue={5}
          type="number"
          {...register("stock", {
            required: "กรุณากรอกจำนวนสินค้า",
            valueAsNumber: "กรุณากรอกตัวเลข",
          })}
          onChange={() => {}}
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

export default EditProductForm;
