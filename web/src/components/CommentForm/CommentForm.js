import { Form, FormError, FieldError, Label, TextField, NumberField, Submit } from '@redwoodjs/forms';

const CommentForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.comment?.id);
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

        <Label name='state' className='rw-label' errorClassName='rw-label rw-label-error'>
          State
        </Label>
        <TextField
          name='state'
          defaultValue={props.comment?.state}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='state' className='rw-field-error' />

        <Label name='content' className='rw-label' errorClassName='rw-label rw-label-error'>
          Content
        </Label>
        <TextField
          name='content'
          defaultValue={props.comment?.content}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='content' className='rw-field-error' />

        <Label name='sentById' className='rw-label' errorClassName='rw-label rw-label-error'>
          Sent by id
        </Label>
        <TextField
          name='sentById'
          defaultValue={props.comment?.sentById}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='sentById' className='rw-field-error' />

        <Label name='postId' className='rw-label' errorClassName='rw-label rw-label-error'>
          Post id
        </Label>
        <NumberField
          name='postId'
          defaultValue={props.comment?.postId}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='postId' className='rw-field-error' />

        <div className='rw-button-group'>
          <Submit disabled={props.loading} className='rw-button rw-button-blue'>
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default CommentForm;
