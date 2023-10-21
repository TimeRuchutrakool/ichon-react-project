import styled from "styled-components";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import FormRow from "../../components/FormRow";
import FileInput from "../../components/FileInput";
import { useForm } from "react-hook-form";
import ActionButton from "../../components/ActionButton";
import { useState } from "react";
import { useEditProduct } from "../../hooks/adminHooks/useEditProduct";
import Spinner from "../../components/Spinner";
import { SpinnerLayout } from "./SpinnerLayout";

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

function EditProductForm({ product }) {
  const [images, setImages] = useState([]);
  const { editProduct, isLoading } = useEditProduct();
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    // reset,
  } = useForm();

  const onChangeMultipleFile = (e) => {
    if (e.target.files) {
      const imageArray = Array.from(e.target.files);
      setImages(() => imageArray);
    }
  };

  const onSubmit = (obj) => {
    const formData = new FormData();
    formData.append("id", product.id);
    for (const key of Object.keys(dirtyFields)) {
      if (key !== "image") formData.append(key, obj[key]);
    }
    if (obj.image.length > 0) {
      for (const image of images) {
        formData.append("image", image);
      }
    }

    editProduct(formData);
  };

  if (isLoading)
    return (
      <SpinnerLayout>
        <Spinner />
      </SpinnerLayout>
    );

  return (
    <AddNewProductFormStyled onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h4">EDIT PRODUCT</Heading>
      <FormRow error={errors?.name?.message}>
        <Input
          placeholder="ชื่อสินค้า"
          defaultValue={product.name}
          {...register("name", { required: "กรุณากรอกชื่อสินค้า" })}
        />
      </FormRow>
      <FormRow error={errors?.shortName?.message}>
        <Input
          placeholder="ชื่อสินค้าแบบสั้น"
          defaultValue={product.shortName}
          {...register("shortName", { required: "กรุณากรอกชื่อสินค้าแบบสั้น" })}
        />
      </FormRow>
      <FormRow error={errors?.brandTitle?.message}>
        <Input
          placeholder="ชื่อแบรนด์"
          defaultValue={product.brandTitle}
          {...register("brandTitle", { required: "กรุณากรอกชื่อแบรนด์" })}
        />
      </FormRow>
      <FormRow error={errors?.price?.message}>
        <Input
          placeholder="ราคา"
          type="number"
          defaultValue={product.price}
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
          defaultValue={product.description}
          {...register("description", {
            required: "กรุณากรอกรายละเอียดสินค้า",
          })}
        />
      </FormRow>
      <FormRow error={errors?.categoryTitle?.message}>
        <Input
          placeholder="ชื่อประเภทสินค้า"
          defaultValue={product.categoryTitle}
          {...register("categoryTitle", { required: "กรุณากรอกประเภทสินค้า" })}
        />
      </FormRow>
      <FormRow error={errors?.stock?.message}>
        <Input
          placeholder="จำนวนสินค้า"
          defaultValue={product.stock}
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

export default EditProductForm;
