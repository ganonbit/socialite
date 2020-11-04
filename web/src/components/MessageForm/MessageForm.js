import { Form, FormError, FieldError, Label, TextField, Submit } from '@redwoodjs/forms';

const MessageForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.message?.id);
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
          defaultValue={props.message?.state}
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
          defaultValue={props.message?.content}
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
          defaultValue={props.message?.sentById}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='sentById' className='rw-field-error' />

        <Label name='channelId' className='rw-label' errorClassName='rw-label rw-label-error'>
          Channel id
        </Label>
        <TextField
          name='channelId'
          defaultValue={props.message?.channelId}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='channelId' className='rw-field-error' />

        <div className='rw-button-group'>
          <Submit disabled={props.loading} className='rw-button rw-button-blue'>
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default MessageForm;
