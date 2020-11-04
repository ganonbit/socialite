import { Form, FormError, FieldError, Label, TextField, Submit } from '@redwoodjs/forms';

const PostForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.post?.id);
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
          defaultValue={props.post?.state}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='state' className='rw-field-error' />

        <Label name='title' className='rw-label' errorClassName='rw-label rw-label-error'>
          Title
        </Label>
        <TextField
          name='title'
          defaultValue={props.post?.title}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='title' className='rw-field-error' />

        <Label name='content' className='rw-label' errorClassName='rw-label rw-label-error'>
          Content
        </Label>
        <TextField
          name='content'
          defaultValue={props.post?.content}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='content' className='rw-field-error' />

        <Label name='image' className='rw-label' errorClassName='rw-label rw-label-error'>
          Image
        </Label>
        <TextField
          name='image'
          defaultValue={props.post?.image}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='image' className='rw-field-error' />

        <Label name='url' className='rw-label' errorClassName='rw-label rw-label-error'>
          Url
        </Label>
        <TextField
          name='url'
          defaultValue={props.post?.url}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='url' className='rw-field-error' />

        <Label name='authorId' className='rw-label' errorClassName='rw-label rw-label-error'>
          Author id
        </Label>
        <TextField
          name='authorId'
          defaultValue={props.post?.authorId}
          className='rw-input'
          errorClassName='rw-input rw-input-error'
          validation={{ required: true }}
        />
        <FieldError name='authorId' className='rw-field-error' />

        <div className='rw-button-group'>
          <Submit disabled={props.loading} className='rw-button rw-button-blue'>
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default PostForm;
