import React from "react";
import TextInput from "../form/input/FormTextInput";
import SelectInput from "../form/input/FormSelectInput";
import * as category from '../../core/forms/category.form';
import ButtonSubmit from "../buttonSubmit/ButtonSubmit";
import Button from "../button/Button";

export default function CategoryPage({
  handleSubmit,
  pristine,
  reset,
  submitting,history
}) {
  return (
    <>
      <div className="page category-page">
        <form onSubmit={()=>{handleSubmit();history.push('/categories')}}>
          <TextInput label="Name" fieldName={category.name} />
          <TextInput label="Percent" fieldName={category.percent} />
          <SelectInput
            label="Type"
            fieldName={category.type}
            items={category.typeValues}
          />
          <div className="button-group">
            <ButtonSubmit label="Submit" disabled={submitting}/>
            <Button
              disabled={pristine || submitting}
              onClick={reset}
              label="Clear Values"
            />
          </div>
        </form>
      </div>
    </>
  );
}
