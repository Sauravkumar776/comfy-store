import React from 'react';
import { Form, Link, useLoaderData } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';

interface FiltersProps {
  meta: {
    categories: string[];
    companies: string[];
  };
}

const Filters: React.FC = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params as {
    search: string;
    company: string;
    category: string;
    shipping: boolean;
    order: string;
    price: number;
  };

  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      {/* SEARCH */}
      <FormInput
        type='search'
        label='search product'
        name='search'
        defaultValue={search}
        size='input-sm'
      />
      {/* CATEGORIES */}
      <FormSelect
        label='select category'
        name='category'
        list={meta.categories}
        defaultValue={category}
        size='select-sm'
      />
      {/* COMPANIES */}
      <FormSelect
        label='select company'
        name='company'
        list={meta.companies}
        defaultValue={company}
        size='select-sm'
      />
      {/* ORDER */}
      <FormSelect
        label='sort by'
        name='order'
        list={['a-z', 'z-a', 'high', 'low']}
        defaultValue={order}
        size='select-sm'
      />
      {/* PRICE */}
      <FormRange
        label='select price'
        name='price'
        defaultValue={price}
        size='range-sm'
      />
      {/* SHIPPING */}
      <FormCheckbox
        label='free shipping'
        name='shipping'
        defaultValue={shipping}
        size='checkbox-sm'
      />
      {/* BUTTONS */}
      <button type='submit' className='btn btn-primary btn-sm'>
        search
      </button>
      <Link to='/products' className='btn btn-accent btn-sm'>
        reset
      </Link>
    </Form>
  );
};

export default Filters;
