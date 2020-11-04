import { Form, FormError, FieldError, Label, TextField, Submit } from '@redwoodjs/forms';

const SocialHandleForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.socialHandle?.id);
  };

  return (
    <div className='rw-form-wrapper'>
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName='rw-form-error-wrapper'
          titleClassName='rw-form-error-title'
          listClassName='rw-form-error-list'
        />

        <Label name='username' className='rw-label' errorClassName='rw-label rw-label-error'>
          Username
        </Label>
        <TextField
          name='username'
          defaultValue={props.socialHandle?.username}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='username' className='rw-field-error' />

        <Label name='provider' className='rw-label' errorClassName='rw-label rw-label-error'>
          Provider
        </Label>
        <TextField
          name='provider'
          defaultValue={props.socialHandle?.provider}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='provider' className='rw-field-error' />

        <Label name='userId' className='rw-label' errorClassName='rw-label rw-label-error'>
          User id
        </Label>
        <TextField
          name='userId'
          defaultValue={props.socialHandle?.userId}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='userId' className='rw-field-error' />

        <div className='rw-button-group'>
          <Submit disabled={props.loading} className='rw-button rw-button-blue'>
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default SocialHandleForm;
