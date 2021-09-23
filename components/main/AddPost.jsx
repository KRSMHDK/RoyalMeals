import React, { useState } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';

function AddPost() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ingredients: [{ ingredient: '', measure: '' }],
    },
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: 'ingredients', // unique name for your Field Array
      // keyName: "id", default to "id", you can change the key name
    }
  );
  const onChange = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    const file = event.target.files[0];
    console.log(file);
    formData.append('inputFile', file);
    console.log(formData);
    const response = await fetch('/api/recipes', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
  };
  const onSubmit = async (d) => {
    const formData = new FormData();
    const strImageSource = d.strImageSource;
    delete d[strImageSource];
    d.strImageSource = strImageSource[0].name;
    console.log(strImageSource[0]);

    formData.append('inputFile', strImageSource);
    console.log(formData);
    const response = await fetch('/api/recipes', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
  };

  return (
    /* "handleSubm
    
    it" will validate your inputs before invoking "onSubmit" */
    <div>
      <input type="file" onChange={onChange} className="border-2" />
      <form
        encType="multipart/form-data"
        className="flex-col pl-5 border-2 border-black"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <div>
          <label>Recipe Name</label>
          <input className="border-2" {...register('strMeal')} />{' '}
        </div>
        <div>
          <label>Category</label>
          <input className="border-2" {...register('strCategory')} />
        </div>
        <div>
          <label className="align-top">Recipe Instructions </label>
          <textarea
            rows={5}
            className="border-2 "
            {...register('strInstructions')}
          />
        </div>

        <div>
          <label className="font-bold">Ingredients</label>
          <ul>
            {fields.map((item, index) => (
              <li key={item.id}>
                <input
                  className="border-2"
                  {...register(`ingredients.${index}.ingredient`)}
                />
                <Controller
                  render={({ field }) => (
                    <input className="border-2" {...field} />
                  )}
                  name={`ingredients.${index}.measure`}
                  control={control}
                />
                <button
                  className="px-1 py-1 bg-gray-300 border-2 rounded-md"
                  type="button"
                  onClick={() => remove(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <button
            className="px-1 py-1 font-semibold bg-blue-500 border-2 rounded-lg"
            type="button"
            onClick={() => append({ ingredient: '', measure: '' })}
          >
            Add more ingredients
          </button>
        </div>
        <div>
          <input type="file" {...register('strImageSource')} />
        </div>
        <input
          className="px-1 py-1 font-bold bg-gray-400 border-2 rounded-lg"
          type="submit"
        />
      </form>
    </div>
  );
}

export default AddPost;
