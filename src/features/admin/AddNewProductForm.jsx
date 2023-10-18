import styled from "styled-components";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import FormRow from "../../components/FormRow";
import FileInput from "../../components/FileInput";
import { useForm } from "react-hook-form";
import ActionButton from "../../components/ActionButton";
import { useState } from "react";
import { useCreateProduct } from "../../hooks/adminHooks/useCreateProduct";
import { useModal } from "../../hooks/useModal";
import Spinner from "../../components/Spinner";

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
  const { createProduct, isSuccess,isLoading } = useCreateProduct();
  const { dispatch } = useModal();
  const [images, setImages] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onChangeMultipleFile = (e) => {
    if (e.target.files) {
      const imageArray = Array.from(e.target.files);
      setImages(() => imageArray);
    }
  };
  const onSubmit = (data) => {
    const formData = new FormData();
    for (const key of Object.keys(data)) {
      if (key !== "image") formData.append(key, data[key]);
    }
    for (const image of images) {
      formData.append("image", image);
    }

    createProduct(formData);
    reset();
    if(isSuccess) dispatch({type:'close'})
  };
  if (isLoading) return <Spinner />;
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
          {...register("stock", {
            required: "กรุณากรอกจำนวนสินค้า",
            valueAsNumber: "กรุณากรอกตัวเลข",
          })}
        />
      </FormRow>
      <FormRow>
        <FileInput
          type="file"
          id="image"
          accept="image/*"
          multiple
          {...register("image")}
          onChange={onChangeMultipleFile}
        />
      </FormRow>
      <ActionButton text="Confirm" />
    </AddNewProductFormStyled>
  );
}

export default AddNewProductForm;
