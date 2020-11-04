import { Form, FormError, FieldError, Label, TextField, Submit } from '@redwoodjs/forms';

const UserForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.user?.id);
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

        <Label name='email' className='rw-label' errorClassName='rw-label rw-label-error'>
          Email
        </Label>
        <TextField
          name='email'
          defaultValue={props.user?.email}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='email' className='rw-field-error' />

        <Label name='username' className='rw-label' errorClassName='rw-label rw-label-error'>
          Username
        </Label>
        <TextField
          name='username'
          defaultValue={props.user?.username}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='username' className='rw-field-error' />

        <Label name='firstName' className='rw-label' errorClassName='rw-label rw-label-error'>
          First name
        </Label>
        <TextField
          name='firstName'
          defaultValue={props.user?.firstName}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='firstName' className='rw-field-error' />

        <Label name='lastName' className='rw-label' errorClassName='rw-label rw-label-error'>
          Last name
        </Label>
        <TextField
          name='lastName'
          defaultValue={props.user?.lastName}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='lastName' className='rw-field-error' />

        <Label name='birthday' className='rw-label' errorClassName='rw-label rw-label-error'>
          Birthday
        </Label>
        <TextField
          name='birthday'
          defaultValue={props.user?.birthday}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='birthday' className='rw-field-error' />

        <Label name='bio' className='rw-label' errorClassName='rw-label rw-label-error'>
          Bio
        </Label>
        <TextField
          name='bio'
          defaultValue={props.user?.bio}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='bio' className='rw-field-error' />

        <Label name='image' className='rw-label' errorClassName='rw-label rw-label-error'>
          Image
        </Label>
        <TextField
          name='image'
          defaultValue={props.user?.image}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='image' className='rw-field-error' />

        <Label name='status' className='rw-label' errorClassName='rw-label rw-label-error'>
          Status
        </Label>
        <TextField
          name='status'
          defaultValue={props.user?.status}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='status' className='rw-field-error' />

        <Label name='state' className='rw-label' errorClassName='rw-label rw-label-error'>
          State
        </Label>
        <TextField
          name='state'
          defaultValue={props.user?.state}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='state' className='rw-field-error' />

        <Label name='role' className='rw-label' errorClassName='rw-label rw-label-error'>
          Role
        </Label>
        <TextField
          name='role'
          defaultValue={props.user?.role}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='role' className='rw-field-error' />

        <div className='rw-button-group'>
          <Submit disabled={props.loading} className='rw-button rw-button-blue'>
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default UserForm;
